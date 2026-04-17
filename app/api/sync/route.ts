import { NextRequest, NextResponse } from "next/server";
import { saveSession, type SyncPayload } from "@/lib/sync";

export async function POST(req: NextRequest) {
  try {
    const payload: SyncPayload = await req.json();

    if (!payload.certId || !payload.examId || !Array.isArray(payload.questionIds)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const code = await saveSession(payload);
    return NextResponse.json({ code });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
