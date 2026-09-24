import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession } from "../../../../lib/auth";
import { LIMITS, slugify, validateCustomQuiz } from "../../../../lib/custom-quiz-server";

export const prerender = false;

/**
 * Enregistre un quiz cree par un joueur connecte et renvoie son slug.
 *
 * Le lien permanent est /creer/jouer/?q=<slug> (et ses equivalents en et es) :
 * la page du lecteur existe deja, elle est hors index, et elle charge le quiz
 * depuis /api/quiz/custom/<slug>. Sans compte, le createur garde le lien de
 * partage par hash, qui ne passe pas par le serveur.
 */

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

async function getDB(): Promise<D1Database | null> {
  try {
    const { env } = await import("cloudflare:workers");
    return (env as any).DB || null;
  } catch {
    return null;
  }
}

export const POST: APIRoute = async ({ request }) => {
  const db = await getDB();
  if (!db) return json({ error: "unavailable" }, 503);

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  const user = sessionId ? await getUserFromSession(db, sessionId) : null;
  if (!user) return json({ error: "auth" }, 401);

  const raw = await request.text();
  if (raw.length > 100_000) return json({ error: "too_large" }, 413);
  let body: any;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "invalid_body" }, 400);
  }
  const res = validateCustomQuiz(body);
  if ("error" in res) return json({ error: "invalid", field: res.error }, 400);

  try {
    const today = await db
      .prepare("SELECT COUNT(*) AS n FROM user_quizzes WHERE user_id = ? AND created_at > datetime('now', '-1 day')")
      .bind(user.id)
      .first<{ n: number }>();
    if ((today?.n ?? 0) >= LIMITS.perDay) return json({ error: "rate_limited" }, 429);

    const base = slugify(res.quiz.title);
    for (let i = 1; i <= 50; i++) {
      const slug = i === 1 ? base : `${base}-${i}`;
      const data = JSON.stringify({ ...res.quiz, slug });
      const r = await db
        .prepare(
          "INSERT OR IGNORE INTO user_quizzes (user_id, title, slug, category, data, is_public) VALUES (?, ?, ?, ?, ?, 0)"
        )
        .bind(user.id, res.quiz.title, slug, res.quiz.category, data)
        .run();
      if (r.meta.changes) return json({ slug });
    }
    return json({ error: "slug" }, 409);
  } catch {
    return json({ error: "unavailable" }, 503);
  }
};
