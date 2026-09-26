import type { APIRoute } from "astro";
import { allTranslatedQuizzes } from "../../../data/quizzes";
import { getSessionFromCookies, getUserFromSession } from "../../../lib/auth";

export const prerender = false;

/**
 * Notes de 1 a 5 des quiz, a l'ecran de resultat.
 *
 * GET ?quiz=<slug> : moyenne, nombre de votes et note du joueur connecte.
 * POST { quizSlug, rating } : vote ou change son vote. Il faut un compte :
 * sans session, la route repond 401 et le composant ouvre la fenetre
 * d'inscription, puis renvoie le vote une fois le compte cree.
 *
 * Les notes sont regroupees sur le slug de base, comme les scores : un quiz
 * a les memes questions dans les trois langues. La table se cree d'elle-meme
 * au premier vote (migration 010 pour memoire).
 */

const JSON_HEADERS = { "Content-Type": "application/json" };
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });

const CREATE_TABLE =
  "CREATE TABLE IF NOT EXISTS quiz_ratings (quiz_slug TEXT NOT NULL, user_id INTEGER NOT NULL, " +
  "rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5), created_at TEXT DEFAULT (datetime('now')), " +
  "updated_at TEXT DEFAULT (datetime('now')), PRIMARY KEY (quiz_slug, user_id))";

async function getDB(): Promise<D1Database | null> {
  try {
    const { env } = await import("cloudflare:workers");
    return (env as any).DB || null;
  } catch {
    return null;
  }
}

function baseSlug(slug: unknown): string | undefined {
  if (typeof slug !== "string") return undefined;
  for (const q of allTranslatedQuizzes) {
    if (q.slug === slug || Object.values(q.slugs || {}).includes(slug)) return q.slug;
  }
  return undefined;
}

async function currentUserId(db: D1Database, request: Request): Promise<number | null> {
  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (!sessionId) return null;
  const user = await getUserFromSession(db, sessionId);
  return user ? Number(user.id) : null;
}

async function summary(db: D1Database, slug: string, userId: number | null) {
  const agg = await db
    .prepare("SELECT COUNT(*) AS count, AVG(rating) AS average FROM quiz_ratings WHERE quiz_slug = ?")
    .bind(slug)
    .first<{ count: number; average: number | null }>();
  const mine = userId
    ? await db
        .prepare("SELECT rating FROM quiz_ratings WHERE quiz_slug = ? AND user_id = ?")
        .bind(slug, userId)
        .first<{ rating: number }>()
    : null;
  return { count: agg?.count ?? 0, average: agg?.average ?? null, mine: mine?.rating ?? null, loggedIn: userId !== null };
}

export const GET: APIRoute = async ({ request, url }) => {
  const slug = baseSlug(url.searchParams.get("quiz"));
  if (!slug) return json({ error: "Unknown quiz" }, 400);
  const db = await getDB();
  if (!db) return json({ rating: null });
  const userId = await currentUserId(db, request).catch(() => null);
  try {
    return json({ rating: await summary(db, slug, userId) });
  } catch {
    // Table pas encore creee : aucun vote.
    return json({ rating: { count: 0, average: null, mine: null, loggedIn: userId !== null } });
  }
};

export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid body" }, 400);
  }
  const slug = baseSlug(body?.quizSlug);
  if (!slug) return json({ error: "Unknown quiz" }, 400);
  const rating = body?.rating;
  if (typeof rating !== "number" || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return json({ error: "Invalid rating" }, 400);
  }

  const db = await getDB();
  if (!db) return json({ error: "Database not available" }, 500);
  const userId = await currentUserId(db, request);
  if (!userId) return json({ error: "not_authenticated" }, 401);

  const upsert = () =>
    db
      .prepare(
        "INSERT INTO quiz_ratings (quiz_slug, user_id, rating) VALUES (?, ?, ?) " +
          "ON CONFLICT(quiz_slug, user_id) DO UPDATE SET rating = excluded.rating, updated_at = datetime('now')"
      )
      .bind(slug, userId, rating)
      .run();
  try {
    await upsert();
  } catch {
    await db.prepare(CREATE_TABLE).run();
    await upsert();
  }
  return json({ rating: await summary(db, slug, userId) });
};
