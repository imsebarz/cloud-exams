/** In-memory session store with auto-expiry (survives as long as the process runs). */

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

interface StoredSession {
  payload: SyncPayload;
  expiresAt: number;
}

const TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
const sessions = new Map<string, StoredSession>();

function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no ambiguous chars
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function cleanup() {
  const now = Date.now();
  for (const [key, val] of sessions) {
    if (now > val.expiresAt) sessions.delete(key);
  }
}

export function saveSession(payload: SyncPayload): string {
  cleanup();
  let code = generateCode();
  while (sessions.has(code)) code = generateCode();
  sessions.set(code, { payload, expiresAt: Date.now() + TTL_MS });
  return code;
}

export function getSession(code: string): SyncPayload | null {
  cleanup();
  const entry = sessions.get(code.toUpperCase());
  return entry ? entry.payload : null;
}
