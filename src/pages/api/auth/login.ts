import type { APIRoute } from "astro";
import { verifyPassword, createSession, setSessionCookie } from "../../../lib/auth";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let db: D1Database;
  try {
    const { env } = await import("cloudflare:workers");
    db = (env as any).DB;
  } catch {
    return new Response(JSON.stringify({ error: "Database not available" }), { status: 500 });
  }
  if (!db) return new Response(JSON.stringify({ error: "Database not available" }), { status: 500 });

  const { email, password } = await request.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const user = await db.prepare("SELECT id, username, email, password_hash, xp FROM users WHERE email = ?").bind(email).first() as any;
  if (!user) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
  }

  const valid = await verifyPassword(password, user.password_hash);
  if (!valid) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
  }

  const sessionId = await createSession(db, user.id);

  return new Response(JSON.stringify({ ok: true, user: { id: user.id, username: user.username, email: user.email, xp: user.xp } }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": setSessionCookie(sessionId),
    },
  });
};
