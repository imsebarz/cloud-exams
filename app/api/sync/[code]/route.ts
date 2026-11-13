import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/sync";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const session = await getSession(code);
  if (!session) {
    return NextResponse.json({ error: "Session not found or expired" }, { status: 404 });
  }
  return NextResponse.json(session);
}
