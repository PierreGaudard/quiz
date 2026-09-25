-- Invitations à une partie entre amis (src/lib/room-invites.ts). Un joueur
-- connecté invite un de ses amis dans sa salle ; l'invitation vit autant que
-- la salle (6 heures au plus). La route crée la table d'elle-même : cette
-- migration est là pour mémoire et pour une base neuve.
CREATE TABLE IF NOT EXISTS room_invites (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  room_code   TEXT NOT NULL,
  from_user   INTEGER NOT NULL,
  to_user     INTEGER NOT NULL,
  created_at  TEXT DEFAULT (datetime('now')),
  UNIQUE (room_code, to_user)
);
CREATE INDEX IF NOT EXISTS idx_room_invites_to ON room_invites(to_user);
