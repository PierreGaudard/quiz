import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession } from "../../../../lib/auth";
import { ensureModeration } from "../../../../lib/moderation";

export const prerender = false;

/**
 * Le quiz d'un joueur, pour le lecteur (lien permanent /creer/jouer/?q=<slug>).
 *
 * Moderation (src/lib/moderation.ts) : un quiz en attente ne s'ouvre que pour
 * son auteur (403 « pending » pour les autres), un quiz refuse ne s'ouvre
 * plus (410 « rejected »). Seul un quiz accepte est mis en cache.
 */
export const GET: APIRoute = async ({ params, request }) => {
  const slug = params.slug || "";
  const headers = { "Content-Type": "application/json" };
  const out = (body: unknown, status: number, cache = "no-store") =>
    new Response(JSON.stringify(body), { status, headers: { ...headers, "Cache-Control": cache } });
  if (!/^[a-z0-9-]{1,80}$/.test(slug)) return out({ error: "not_found" }, 404);
  try {
    const { env } = await import("cloudflare:workers");
    const db = (env as any).DB as D1Database;
    await ensureModeration(db);
    const row = await db
      .prepare("SELECT q.data, q.created_at, q.status, q.user_id, u.username FROM user_quizzes q JOIN users u ON u.id = q.user_id WHERE q.slug = ?")
      .bind(slug)
      .first<{ data: string; created_at: string; status: string; user_id: number; username: string }>();
    if (!row) return out({ error: "not_found" }, 404);
    if (row.status === "rejected") return out({ error: "rejected" }, 410);
    let isAuthor = false;
    if (row.status !== "approved") {
      const sessionId = getSessionFromCookies(request.headers.get("cookie"));
      const user = sessionId ? await getUserFromSession(db, sessionId) : null;
      isAuthor = !!user && Number(user.id) === Number(row.user_id);
      if (!isAuthor) return out({ error: "pending" }, 403);
    }
    // Compte des ouvertures du lien (pas des parties finies), sans bloquer la
    // reponse si la mise a jour echoue. L'auteur ne se compte pas.
    if (!isAuthor) db.prepare("UPDATE user_quizzes SET play_count = play_count + 1 WHERE slug = ?").bind(slug).run().catch(() => {});
    return out(
      { quiz: JSON.parse(row.data), author: row.username, createdAt: row.created_at, status: row.status },
      200,
      row.status === "approved" ? "public, max-age=60" : "private, no-store"
    );
  } catch {
    return out({ error: "unavailable" }, 503);
  }
};
