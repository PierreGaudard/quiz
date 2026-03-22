import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession } from "../../../lib/auth";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  let db: D1Database;
  try {
    const { env } = await import("cloudflare:workers");
    db = (env as any).DB;
  } catch {
    return new Response(JSON.stringify({ user: null }), { status: 200 });
  }
  if (!db) return new Response(JSON.stringify({ user: null }), { status: 200 });

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (!sessionId) {
    return new Response(JSON.stringify({ user: null }), { status: 200 });
  }

  const user = await getUserFromSession(db, sessionId);
  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
