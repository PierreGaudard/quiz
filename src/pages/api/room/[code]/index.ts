import type { APIRoute } from "astro";
import { findQuiz, getDB, json, loadPlayer, loadRoom, type PlayerRow } from "../../../../lib/rooms";

export const prerender = false;

/**
 * L'etat de la salle, interroge toutes les deux secondes par chaque joueur.
 *
 * Les questions ne sont envoyees qu'une fois la partie lancee, et sans la
 * bonne reponse : c'est /answer qui la donne, apres coup. Le jeton du joueur
 * (en-tete X-Room-Token) permet de lui renvoyer sa propre place, pour qu'un
 * rechargement de page le remette a la bonne question.
 */
export const GET: APIRoute = async ({ params, request }) => {
  const code = (params.code || "").toUpperCase();
  const db = await getDB();
  if (!db) return json({ error: "unavailable" }, 503);

  try {
    const room = await loadRoom(db, code);
    if (!room) return json({ error: "not_found" }, 404);
    const quiz = findQuiz(room.quiz_slug, room.locale);
    if (!quiz) return json({ error: "not_found" }, 404);

    const res = await db
      .prepare("SELECT * FROM room_players WHERE room_code = ? ORDER BY joined_at, id")
      .bind(code)
      .all<PlayerRow>();
    const players = res.results || [];
    const me = await loadPlayer(db, code, request.headers.get("X-Room-Token"));
    const hostId = players.find((p) => p.token === room.host_token)?.id ?? null;

    return json({
      code,
      status: room.status,
      locale: room.locale,
      hostId,
      quiz: {
        slug: quiz.slug,
        title: quiz.title,
        coverImage: quiz.coverImage || null,
        path: quiz.path,
        total: quiz.questions.length,
      },
      players: players.map((p) => ({
        id: p.id,
        name: p.name,
        score: p.score,
        answered: p.answered,
        finished: !!p.finished_at,
        finishedAt: p.finished_at,
      })),
      me: me ? { id: me.id, name: me.name, score: me.score, answered: me.answered, isHost: me.token === room.host_token } : null,
      questions:
        room.status === "playing" && me
          ? quiz.questions.map((q) => ({
              question: q.question,
              image: q.image || null,
              answers: q.answers.map((a) => ({ id: a.id, text: a.text })),
            }))
          : null,
    });
  } catch {
    return json({ error: "unavailable" }, 503);
  }
};
