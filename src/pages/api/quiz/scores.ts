import type { APIRoute } from "astro";
import { allTranslatedQuizzes } from "../../../data/quizzes";

export const prerender = false;

/**
 * Le score du joueur compare a ceux des autres.
 *
 * POST est appele une fois par partie terminee, depuis l'ecran de resultat de
 * chacun des six modes. Il fait deux choses : il compte la partie dans
 * quiz_plays (c'est donc aussi le compteur des modes autres que qcm, qui n'en
 * avaient pas) et il ajoute le score a l'histogramme de quiz_scores. La
 * reponse porte la repartition a jour : le joueur attend ce chiffre juste a
 * la fin de sa partie, un second aller-retour se verrait.
 *
 * Comme les autres routes de stats, tout degrade en silence si une table
 * manque : la partie reste jouable, le bloc de comparaison ne s'affiche pas.
 */

const JSON_HEADERS = { "Content-Type": "application/json" };

/**
 * En dessous de ce nombre de parties, on n'affiche pas de pourcentage.
 * « Tu fais mieux que 100 % des joueurs » sur trois parties ne dit rien.
 */
const MIN_SAMPLE = 8;

/** Au-dessus, le score est rejete : le chrono est le seul mode sans plafond fixe. */
const MAX_SCORE = 1000;

async function getDB(): Promise<D1Database | null> {
  try {
    const { env } = await import("cloudflare:workers");
    return (env as any).DB || null;
  } catch {
    return null;
  }
}

/**
 * Slug de la page (propre a chaque langue) vers le slug de base du quiz.
 *
 * quiz_plays compte par slug de page, et les pages le lisent ainsi. Les
 * scores, eux, sont regroupes sur le slug de base : les questions sont les
 * memes dans les trois langues, et diviser l'echantillon par trois retarderait
 * d'autant le moment ou la comparaison devient parlante.
 */
function baseSlugs(): Map<string, string> {
  const map = new Map<string, string>();
  for (const q of allTranslatedQuizzes) {
    map.set(q.slug, q.slug);
    for (const s of Object.values(q.slugs || {})) if (s) map.set(s, q.slug);
  }
  return map;
}

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });

export const POST: APIRoute = async ({ request }) => {
  let slug: unknown;
  let score: unknown;
  try {
    ({ quizSlug: slug, score } = await request.json());
  } catch {
    return json({ error: "Invalid body" }, 400);
  }
  const baseSlug = typeof slug === "string" ? baseSlugs().get(slug) : undefined;
  if (typeof slug !== "string" || !baseSlug) return json({ error: "Unknown quiz" }, 400);
  if (typeof score !== "number" || !Number.isInteger(score) || score < 0 || score > MAX_SCORE) {
    return json({ error: "Invalid score" }, 400);
  }

  const db = await getDB();
  if (!db) return json({ stats: null });

  // Deux requetes separees et non un batch : si la migration 003 n'est pas
  // encore passee, la partie doit quand meme etre comptee dans quiz_plays.
  try {
    await db
      .prepare(
        "INSERT INTO quiz_plays (quiz_slug, plays) VALUES (?, 1) " +
          "ON CONFLICT(quiz_slug) DO UPDATE SET plays = plays + 1, updated_at = datetime('now')"
      )
      .bind(slug)
      .run();
  } catch {}

  try {
    await db
      .prepare(
        "INSERT INTO quiz_scores (quiz_slug, score, plays) VALUES (?, ?, 1) " +
          "ON CONFLICT(quiz_slug, score) DO UPDATE SET plays = plays + 1, updated_at = datetime('now')"
      )
      .bind(baseSlug, score)
      .run();

    const res = await db
      .prepare("SELECT score, plays FROM quiz_scores WHERE quiz_slug = ? ORDER BY score")
      .bind(baseSlug)
      .all<{ score: number; plays: number }>();
    const dist = res.results || [];

    let sample = 0;
    let below = 0;
    let equal = 0;
    let sum = 0;
    for (const row of dist) {
      sample += row.plays;
      sum += row.score * row.plays;
      if (row.score < score) below += row.plays;
      else if (row.score === score) equal += row.plays;
    }

    return json({
      stats: {
        sample,
        // Les autres joueurs seulement : la partie qu'on vient d'ajouter ne
        // doit pas compter contre le joueur lui-meme.
        others: sample - 1,
        below,
        equalOthers: equal - 1,
        average: sample > 0 ? sum / sample : 0,
        dist: sample >= MIN_SAMPLE ? dist : [],
        enough: sample >= MIN_SAMPLE,
      },
    });
  } catch {
    return json({ stats: null });
  }
};
