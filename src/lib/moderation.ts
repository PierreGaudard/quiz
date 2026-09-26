/**
 * Moderation des quiz crees par les joueurs (migration 012).
 *
 * pending a la creation : seul l'auteur y joue. approved : ouvert a tous et
 * liste dans « Quiz de la communaute ». rejected : le lien ne marche plus.
 */

export type QuizStatus = "pending" | "approved" | "rejected";
export const STATUSES: QuizStatus[] = ["pending", "approved", "rejected"];

let ensured = false;
/** Ajoute les colonnes de moderation si la migration 012 n'est pas passee. */
export async function ensureModeration(db: D1Database): Promise<void> {
  if (ensured) return;
  const cols = await db.prepare("PRAGMA table_info(user_quizzes)").all<{ name: string }>();
  const names = new Set((cols.results || []).map((c) => c.name));
  const stmts: D1PreparedStatement[] = [];
  if (!names.has("status")) stmts.push(db.prepare("ALTER TABLE user_quizzes ADD COLUMN status TEXT NOT NULL DEFAULT 'pending'"));
  if (!names.has("reviewed_at")) stmts.push(db.prepare("ALTER TABLE user_quizzes ADD COLUMN reviewed_at TEXT"));
  if (!names.has("review_note")) stmts.push(db.prepare("ALTER TABLE user_quizzes ADD COLUMN review_note TEXT"));
  stmts.push(db.prepare("CREATE INDEX IF NOT EXISTS idx_user_quizzes_status ON user_quizzes(status, created_at)"));
  await db.batch(stmts);
  ensured = true;
}

export async function setQuizStatus(db: D1Database, id: number, status: QuizStatus, note: string | null): Promise<boolean> {
  await ensureModeration(db);
  const r = await db
    .prepare("UPDATE user_quizzes SET status = ?, reviewed_at = datetime('now'), review_note = ? WHERE id = ?")
    .bind(status, note, id)
    .run();
  return !!r.meta.changes;
}

export interface CommunityQuiz {
  slug: string;
  title: string;
  category: string | null;
  username: string;
  questions: number;
  play_count: number;
  created_at: string;
}

/** Quiz acceptes, pour la page « Quiz de la communaute ». */
export async function listApproved(db: D1Database, limit = 60): Promise<CommunityQuiz[]> {
  await ensureModeration(db);
  const res = await db
    .prepare(
      "SELECT q.slug, q.title, q.category, u.username, json_array_length(json_extract(q.data, '$.questions')) AS questions, " +
        "q.play_count, q.created_at FROM user_quizzes q JOIN users u ON u.id = q.user_id " +
        "WHERE q.status = 'approved' ORDER BY q.reviewed_at DESC LIMIT ?"
    )
    .bind(limit)
    .all<CommunityQuiz>();
  return res.results || [];
}
