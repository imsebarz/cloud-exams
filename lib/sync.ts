/**
 * Cross-device session sync store.
 *
 * In-memory Maps don't survive across replicas / container restarts, so when
 * REDIS_URL is configured we persist sync codes to Redis with a native 24 h
 * TTL. If Redis isn't configured (local `next dev`) or becomes unreachable
 * we degrade to an in-process Map so the feature never hard-fails — a code
 * generated on device A just won't be findable from device B until Redis
 * comes back.
 *
 * To enable cross-device sync on Dokploy:
 *   1. Services → Create → Redis. Pick any name, e.g. `exams-redis`.
 *   2. In the app's Environment, set REDIS_URL (e.g. `redis://exams-redis:6379`).
 *   3. Redeploy.
 */

import Redis from "ioredis";

export interface SyncPayload {
  certId: string;
  examId: string;
  currentIndex: number;
  answers: [number, { questionId: number; selectedOptions: number[] }][];
  flagged: number[];
  timeLeft: number;
  questionIds: number[];
  createdAt: number;
}

const TTL_SECONDS = 24 * 60 * 60;
const KEY_PREFIX = "sync:";

// ── Redis client (lazy singleton) ──
// Once a connection has irrecoverably failed we set redisClient = null so
// further calls go straight to the in-memory path and we stop spamming logs.
let redisClient: Redis | null | undefined;
const MAX_RECONNECT_ATTEMPTS = 3;
function getRedis(): Redis | null {
  if (redisClient !== undefined) return redisClient;
  const url = process.env.REDIS_URL;
  if (!url) {
    redisClient = null;
    return null;
  }

  // Catch the very common mistake of pointing at the app container itself.
  // Dokploy / Docker: Redis lives in a sibling service, NOT on localhost.
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
      console.warn(
        `[sync] REDIS_URL points at ${parsed.hostname} — that's this container's own loopback, not the Redis service. ` +
          `Use the Dokploy service name as the host (e.g. redis://exams-redis:6379). Falling back to in-memory.`
      );
      redisClient = null;
      return null;
    }
  } catch {
    console.warn("[sync] REDIS_URL is not a valid URL — falling back to in-memory.");
    redisClient = null;
    return null;
  }

  const client: Redis = new Redis(url, {
    // Fail fast instead of queueing commands while disconnected.
    enableOfflineQueue: false,
    connectTimeout: 2000,
    maxRetriesPerRequest: 1,
    // After MAX_RECONNECT_ATTEMPTS failures, giving up stops the log flood
    // and frees the API to use the in-memory fallback permanently.
    retryStrategy: (times) => {
      if (times > MAX_RECONNECT_ATTEMPTS) {
        console.error(
          `[sync] Giving up on Redis after ${MAX_RECONNECT_ATTEMPTS} failed attempts. ` +
            "Using in-memory store. Restart the app after fixing REDIS_URL."
        );
        // Returning null tells ioredis to stop reconnecting. We also null the
        // singleton so getRedis() short-circuits on subsequent calls.
        client.disconnect();
        redisClient = null;
        return null;
      }
      return Math.min(times * 200, 2000);
    },
  });

  // Log only the first error — reconnection attempts after that are noise.
  let loggedOnce = false;
  client.on("error", (err) => {
    if (loggedOnce) return;
    loggedOnce = true;
    console.error("[sync] Redis error:", err.message);
  });

  redisClient = client;
  return client;
}

// ── In-memory fallback ──
interface StoredSession {
  payload: SyncPayload;
  expiresAt: number;
}
const memory = new Map<string, StoredSession>();
function cleanupMemory() {
  const now = Date.now();
  for (const [key, val] of memory) {
    if (now > val.expiresAt) memory.delete(key);
  }
}

// ── Unambiguous alphabet (no 0/O/1/I) ──
function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export function isPersistentSyncEnabled(): boolean {
  return getRedis() !== null;
}

function saveInMemory(payload: SyncPayload): string {
  cleanupMemory();
  let code = generateCode();
  while (memory.has(code)) code = generateCode();
  memory.set(code, { payload, expiresAt: Date.now() + TTL_SECONDS * 1000 });
  return code;
}

export async function saveSession(payload: SyncPayload): Promise<string> {
  const redis = getRedis();
  if (!redis) return saveInMemory(payload);

  try {
    const serialized = JSON.stringify(payload);
    for (let attempt = 0; attempt < 5; attempt++) {
      const code = generateCode();
      const result = await redis.set(KEY_PREFIX + code, serialized, "EX", TTL_SECONDS, "NX");
      if (result === "OK") return code;
    }
    throw new Error("Could not allocate a unique sync code");
  } catch (err) {
    console.error("[sync] Redis write failed, falling back to memory:", (err as Error).message);
    return saveInMemory(payload);
  }
}

export async function getSession(code: string): Promise<SyncPayload | null> {
  const normalized = code.toUpperCase().trim();
  const redis = getRedis();

  if (redis) {
    try {
      const raw = await redis.get(KEY_PREFIX + normalized);
      if (raw) {
        try {
          return JSON.parse(raw) as SyncPayload;
        } catch {
          return null;
        }
      }
      // Not in Redis — fall through to also check memory (e.g. during a
      // partial outage where the write happened on the in-memory path).
    } catch (err) {
      console.error("[sync] Redis read failed, falling back to memory:", (err as Error).message);
    }
  }

  cleanupMemory();
  const entry = memory.get(normalized);
  return entry ? entry.payload : null;
}
