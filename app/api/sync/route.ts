import { NextRequest, NextResponse } from "next/server";
import { saveSession, type SyncPayload } from "@/lib/sync";

export async function POST(req: NextRequest) {
  let payload: SyncPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!payload.certId || !payload.examId || !Array.isArray(payload.questionIds)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  try {
    const code = await saveSession(payload);
    return NextResponse.json({ code });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to save session";
    console.error("[sync] saveSession failed:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
