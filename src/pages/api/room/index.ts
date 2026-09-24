import type { APIRoute } from "astro";
import { ROOM_TTL_HOURS, addPlayer, cleanName, findQuiz, getDB, isLocale, json, randomCode } from "../../../lib/rooms";

export const prerender = false;

/**
 * Cree une salle. Le createur y entre aussitot comme premier joueur, et son
 * jeton devient celui de l'hote : c'est le seul qui pourra lancer la partie.
 */
export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_body" }, 400);
  }
  const name = cleanName(body?.name);
  if (!name) return json({ error: "invalid_name" }, 400);
  if (!isLocale(body?.locale) || typeof body?.quizSlug !== "string") return json({ error: "unknown_quiz" }, 400);
  const quiz = findQuiz(body.quizSlug, body.locale);
  if (!quiz) return json({ error: "unknown_quiz" }, 400);

  const db = await getDB();
  if (!db) return json({ error: "unavailable" }, 503);

  try {
    // Purge au fil de l'eau : pas de tache planifiee a maintenir pour ca.
    await db.prepare("DELETE FROM room_players WHERE room_code IN (SELECT code FROM rooms WHERE expires_at <= datetime('now'))").run();
    await db.prepare("DELETE FROM rooms WHERE expires_at <= datetime('now')").run();

    for (let attempt = 0; attempt < 5; attempt++) {
      const code = randomCode();
      const inserted = await db
        .prepare(
          "INSERT OR IGNORE INTO rooms (code, quiz_slug, locale, host_token, expires_at) " +
            `VALUES (?, ?, ?, '', datetime('now', '+${ROOM_TTL_HOURS} hours'))`
        )
        .bind(code, quiz.slug, body.locale)
        .run();
      if (!inserted.meta.changes) continue;

      const player = await addPlayer(db, code, name);
      if (player === "full") return json({ error: "unavailable" }, 503);
      await db.prepare("UPDATE rooms SET host_token = ? WHERE code = ?").bind(player.token, code).run();
      return json({ code, token: player.token, playerId: player.id, name: player.name });
    }
    return json({ error: "unavailable" }, 503);
  } catch {
    // Migration 004 pas encore passee.
    return json({ error: "unavailable" }, 503);
  }
};
