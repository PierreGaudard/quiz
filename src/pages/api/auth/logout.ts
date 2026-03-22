import type { APIRoute } from "astro";
import { getSessionFromCookies, deleteSession, clearSessionCookie } from "../../../lib/auth";

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

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (sessionId) {
    await deleteSession(db, sessionId);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": clearSessionCookie(),
    },
  });
};
