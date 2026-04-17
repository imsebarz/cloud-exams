/**
 * Cross-device session sync store.
 *
 * Why this matters: the previous version used an in-memory Map, which only
 * works when every request lands on the same process. As soon as the app
 * scales to >1 replica (or the single container restarts between a POST and
 * the matching GET), codes written by device A are invisible to device B.
 *
 * Strategy:
 *   - If REDIS_URL is set, persist codes to Redis with a native 24 h TTL.
 *   - Otherwise, fall back to an in-process Map so `next dev` on a single
 *     machine still works without any infrastructure.
 *
 * To enable cross-device sync on Dokploy:
 *   1. Create a Redis service in Dokploy (Services → Create → Redis).
 *   2. In this app's Environment, add REDIS_URL pointing at the Redis
 *      service — e.g. `redis://<redis-service-name>:6379` (Dokploy's
 *      internal network resolves service names).
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
let redisClient: Redis | null | undefined;
function getRedis(): Redis | null {
  if (redisClient !== undefined) return redisClient;
  const url = process.env.REDIS_URL;
  if (!url) {
    redisClient = null;
    return null;
  }
  redisClient = new Redis(url, {
    // Keep the API route snappy if Redis is briefly unreachable rather than
    // queueing connection attempts until the function times out.
    maxRetriesPerRequest: 2,
    lazyConnect: false,
  });
  redisClient.on("error", (err) => {
    // ioredis auto-reconnects; just log so failed sync attempts aren't silent.
    console.error("[sync] Redis error:", err.message);
  });
  return redisClient;
}

// ── In-memory fallback (single-process dev only) ──
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

// ── Code generation (unambiguous alphabet: no 0/O/1/I) ──
function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

/** True when a shared persistent store is configured. */
export function isPersistentSyncEnabled(): boolean {
  return getRedis() !== null;
}

export async function saveSession(payload: SyncPayload): Promise<string> {
  const redis = getRedis();
  const serialized = JSON.stringify(payload);

  if (redis) {
    for (let attempt = 0; attempt < 5; attempt++) {
      const code = generateCode();
      // NX = only set if the key does not already exist.
      // EX = TTL in seconds. Redis atomically handles both in one call.
      const result = await redis.set(KEY_PREFIX + code, serialized, "EX", TTL_SECONDS, "NX");
      if (result === "OK") return code;
    }
    throw new Error("Could not generate a unique sync code");
  }

  cleanupMemory();
  let code = generateCode();
  while (memory.has(code)) code = generateCode();
  memory.set(code, { payload, expiresAt: Date.now() + TTL_SECONDS * 1000 });
  return code;
}

export async function getSession(code: string): Promise<SyncPayload | null> {
  const normalized = code.toUpperCase().trim();
  const redis = getRedis();

  if (redis) {
    const raw = await redis.get(KEY_PREFIX + normalized);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as SyncPayload;
    } catch {
      return null;
    }
  }

  cleanupMemory();
  const entry = memory.get(normalized);
  return entry ? entry.payload : null;
}
