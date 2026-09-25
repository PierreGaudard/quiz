import { findQuiz, type RoomRow } from "./rooms";

/**
 * Invitations à une partie entre amis. Seul un joueur connecté invite, et
 * seulement un ami accepté (table friendships). L'invitation ne porte que
 * la salle, l'expéditeur et le destinataire ; elle disparaît avec la salle
 * (purge nocturne dans src/worker.ts, et à la création de chaque salle).
 */
export const MAX_INVITES_PER_ROOM = 30;

const SQL_TABLE =
  "CREATE TABLE IF NOT EXISTS room_invites (id INTEGER PRIMARY KEY AUTOINCREMENT, room_code TEXT NOT NULL, from_user INTEGER NOT NULL, to_user INTEGER NOT NULL, created_at TEXT DEFAULT (datetime('now')), UNIQUE (room_code, to_user))";

async function ensureTable(db: D1Database) {
  await db.prepare(SQL_TABLE).run();
  await db.prepare("CREATE INDEX IF NOT EXISTS idx_room_invites_to ON room_invites(to_user)").run();
}

export async function areFriends(db: D1Database, a: number, b: number): Promise<boolean> {
  const row = await db
    .prepare("SELECT 1 AS ok FROM friendships WHERE status = 'accepted' AND ((sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?))")
    .bind(a, b, b, a)
    .first();
  return !!row;
}

export async function createInvite(db: D1Database, room: RoomRow, fromUser: number, toUser: number): Promise<"ok" | "limit"> {
  const run = async () => {
    const n = await db.prepare("SELECT COUNT(*) AS n FROM room_invites WHERE room_code = ?").bind(room.code).first<{ n: number }>();
    if ((n?.n ?? 0) >= MAX_INVITES_PER_ROOM) return "limit" as const;
    await db
      .prepare("INSERT OR IGNORE INTO room_invites (room_code, from_user, to_user) VALUES (?, ?, ?)")
      .bind(room.code, fromUser, toUser)
      .run();
    return "ok" as const;
  };
  try {
    return await run();
  } catch {
    await ensureTable(db);
    return run();
  }
}

export interface InviteView {
  id: number;
  code: string;
  from: string;
  quizTitle: string;
  locale: string;
}

/** Invitations en cours pour un joueur : salles encore ouvertes seulement. */
export async function listInvites(db: D1Database, userId: number): Promise<InviteView[]> {
  try {
    const rows = await db
      .prepare(
        "SELECT i.id, i.room_code, u.username AS from_name, r.quiz_slug, r.locale FROM room_invites i " +
          "JOIN rooms r ON r.code = i.room_code JOIN users u ON u.id = i.from_user " +
          "WHERE i.to_user = ? AND r.expires_at > datetime('now') ORDER BY i.created_at DESC LIMIT 5",
      )
      .bind(userId)
      .all<{ id: number; room_code: string; from_name: string; quiz_slug: string; locale: any }>();
    return (rows.results ?? []).map((r) => ({
      id: r.id,
      code: r.room_code,
      from: r.from_name,
      quizTitle: findQuiz(r.quiz_slug, r.locale)?.title ?? "",
      locale: r.locale,
    }));
  } catch {
    return []; // table absente : aucune invitation encore
  }
}

export async function dismissInvite(db: D1Database, userId: number, id: number): Promise<void> {
  try {
    await db.prepare("DELETE FROM room_invites WHERE id = ? AND to_user = ?").bind(id, userId).run();
  } catch {}
}

/** Invitations des salles expirées. */
export async function purgeExpiredInvites(db: D1Database): Promise<void> {
  try {
    await db.prepare("DELETE FROM room_invites WHERE room_code NOT IN (SELECT code FROM rooms WHERE expires_at > datetime('now'))").run();
  } catch {}
}
