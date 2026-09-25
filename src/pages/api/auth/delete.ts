import type { APIRoute } from "astro";
import { getSessionFromCookies, verifyPassword, clearSessionCookie } from "../../../lib/auth";
import { deleteAccount } from "../../../lib/accounts";

export const prerender = false;

/**
 * Suppression du compte (droit à l'effacement, RGPD art. 17).
 *
 * Le mot de passe est redemandé : un cookie de session volé ne doit pas
 * suffire à effacer un compte. L'effacement lui-même est dans
 * deleteAccount(), partagé avec la purge des comptes inactifs.
 */
export const POST: APIRoute = async ({ request }) => {
  let db: D1Database;
  try {
    const { env } = await import("cloudflare:workers");
    db = (env as any).DB;
  } catch {
    return json({ error: "Database not available" }, 500);
  }
  if (!db) return json({ error: "Database not available" }, 500);

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (!sessionId) return json({ error: "Not authenticated" }, 401);

  const row = (await db
    .prepare("SELECT u.id, u.password_hash FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.id = ? AND s.expires_at > datetime('now')")
    .bind(sessionId)
    .first()) as { id: number; password_hash: string } | null;
  if (!row) return json({ error: "Not authenticated" }, 401);

  const { password } = (await request.json().catch(() => ({}))) as { password?: string };
  if (!password || !(await verifyPassword(password, row.password_hash))) {
    return json({ error: "Invalid password" }, 403);
  }

  await deleteAccount(db, row.id);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Set-Cookie": clearSessionCookie() },
  });
};

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}
