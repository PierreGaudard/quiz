import type { APIRoute } from "astro";
import { verifyPassword, createSession, setSessionCookie } from "../../../lib/auth";
import { localeFromPath, touchUser } from "../../../lib/accounts";
import { TOO_MANY_ATTEMPTS_ERROR, clearLoginFailures, isLoginLocked, recordLoginFailure } from "../../../lib/password-policy";

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

  if (await isLoginLocked(db, String(email))) {
    return new Response(JSON.stringify({ error: TOO_MANY_ATTEMPTS_ERROR }), { status: 429 });
  }

  // Accept email OR username
  const user = await db.prepare("SELECT id, username, email, password_hash, xp FROM users WHERE email = ? OR username = ?").bind(email, email).first() as any;
  if (!user) {
    await recordLoginFailure(db, String(email));
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
  }

  const valid = await verifyPassword(password, user.password_hash);
  if (!valid) {
    await recordLoginFailure(db, String(email));
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
  }
  await clearLoginFailures(db, String(email));

  const sessionId = await createSession(db, user.id);
  await touchUser(db, user.id, localeFromPath(request.headers.get("referer")));

  return new Response(JSON.stringify({ ok: true, user: { id: user.id, username: user.username, email: user.email, xp: user.xp } }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": setSessionCookie(sessionId),
    },
  });
};
