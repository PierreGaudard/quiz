-- Parties a plusieurs avec un code, a la quiz-couple (quiz_sessions,
-- quiz_ado_sessions).
--
-- Un joueur cree une salle sur un quiz, recoit un code de 5 caracteres et un
-- lien, ses amis rejoignent depuis leur telephone avec un pseudo. Quand
-- l'hote lance, tout le monde joue les memes questions, chacun a son rythme,
-- et le classement se met a jour en direct (les clients interrogent la salle
-- toutes les deux secondes : pas de WebSocket ni de Durable Object).
--
-- Pas de compte necessaire, comme pour le reste du jeu. Chaque joueur recoit
-- un jeton aleatoire a l'entree : c'est lui qui l'identifie pour repondre, et
-- le jeton de l'hote est le seul qui peut lancer la partie. Les bonnes
-- reponses sont verifiees cote serveur, sur les donnees du quiz.
--
-- Une salle vit 6 heures. Les salles expirees sont purgees a la creation de
-- la suivante, sans tache planifiee.

CREATE TABLE IF NOT EXISTS rooms (
  code        TEXT PRIMARY KEY,
  quiz_slug   TEXT NOT NULL,
  locale      TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'lobby',  -- lobby | playing
  host_token  TEXT NOT NULL,
  created_at  TEXT DEFAULT (datetime('now')),
  started_at  TEXT,
  expires_at  TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS room_players (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  room_code    TEXT NOT NULL,
  name         TEXT NOT NULL,
  token        TEXT NOT NULL UNIQUE,
  score        INTEGER NOT NULL DEFAULT 0,
  answered     INTEGER NOT NULL DEFAULT 0,
  answers      TEXT NOT NULL DEFAULT '[]',
  joined_at    TEXT DEFAULT (datetime('now')),
  finished_at  TEXT,
  FOREIGN KEY (room_code) REFERENCES rooms(code) ON DELETE CASCADE,
  UNIQUE (room_code, name)
);

CREATE INDEX IF NOT EXISTS idx_room_players_room ON room_players(room_code);
CREATE INDEX IF NOT EXISTS idx_rooms_expires ON rooms(expires_at);
