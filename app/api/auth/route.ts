import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({} as any));
  const password = String(body?.password ?? "");
  const from = String(body?.from ?? "/");

  const expected = process.env.SITE_PASSWORD || "";
  if (!expected) {
    return NextResponse.json({ ok: false, error: "missing_server_password" }, { status: 500 });
  }
  if (password !== expected) {
    return NextResponse.json({ ok: false, error: "wrong_password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true, from });
  res.cookies.set("kaisa_auth", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("kaisa_auth", "", { path: "/", maxAge: 0 });
  return res;
}
