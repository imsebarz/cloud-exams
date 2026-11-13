import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { cp } from "node:fs/promises";
import { createServer } from "node:net";
import { after, before, test } from "node:test";

let child;
let origin;

before(async () => {
  await cp(".next/static", ".next/standalone/.next/static", { recursive: true });
  const reservation = createServer();
  reservation.listen(0, "127.0.0.1");
  await once(reservation, "listening");
  const { port } = reservation.address();
  await new Promise((resolve) => reservation.close(resolve));
  origin = `http://127.0.0.1:${port}`;
  child = spawn(process.execPath, [".next/standalone/server.js"], {
    env: {
      PATH: process.env.PATH,
      NODE_ENV: "production",
      HOSTNAME: "127.0.0.1",
      PORT: String(port),
      REDIS_URL: "",
      NEXT_TELEMETRY_DISABLED: "1",
      FORCE_COLOR: "0",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  await new Promise((resolve, reject) => {
    let output = "";
    const timeout = setTimeout(() => reject(new Error(`Server startup timed out: ${output}`)), 30000);
    child.on("error", reject);
    child.on("exit", (code) => {
      clearTimeout(timeout);
      reject(new Error(`Server exited with ${code}: ${output}`));
    });
    const onData = (data) => {
      output += data.toString();
      if (output.includes("Ready in")) {
        clearTimeout(timeout);
        resolve();
      }
    };
    child.stdout.on("data", onData);
    child.stderr.on("data", onData);
  });
});

after(async () => {
  if (!child || child.exitCode !== null) return;
  const exited = once(child, "exit");
  child.kill("SIGTERM");
  const timeout = setTimeout(() => child.kill("SIGKILL"), 3000);
  await exited;
  clearTimeout(timeout);
});

test("serves the exam page from the production server", async () => {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  assert.match(await response.text(), /<!DOCTYPE html>/i);
});

test("keeps invalid JSON and payload responses at 400", async () => {
  const invalidJson = await fetch(`${origin}/api/sync`, { method: "POST", body: "{" });
  assert.equal(invalidJson.status, 400);
  assert.deepEqual(await invalidJson.json(), { error: "Invalid JSON" });
  const invalidPayload = await fetch(`${origin}/api/sync`, { method: "POST", body: "{}" });
  assert.equal(invalidPayload.status, 400);
});

test("returns 404 for an unknown sync code", async () => {
  const response = await fetch(`${origin}/api/sync/NOTFOUND`);
  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: "Session not found or expired" });
});

test("round trips a session through async route params and normalized codes", async () => {
  const payload = {
    certId: "synthetic-cert", examId: "synthetic-exam", currentIndex: 1,
    answers: [[1, { questionId: 1, selectedOptions: [2] }]],
    flagged: [1], timeLeft: 600, questionIds: [1, 2], createdAt: 1700000000000,
  };
  const saved = await fetch(`${origin}/api/sync`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
  });
  assert.equal(saved.status, 200);
  const { code } = await saved.json();
  assert.match(code, /^[A-Z2-9]{6}$/);
  const loaded = await fetch(`${origin}/api/sync/${encodeURIComponent(` ${code.toLowerCase()} `)}`);
  assert.equal(loaded.status, 200);
  assert.deepEqual(await loaded.json(), payload);
});
