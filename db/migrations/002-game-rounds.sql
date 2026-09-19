-- Statistiques agregees des minis-jeux.
--
-- Une ligne par manche posee : le couple d'elements compares, pour le jeu
-- « plus haut ou plus bas », ou plus generalement la question telle qu'elle a
-- ete posee. On stocke le nombre de bonnes reponses et le nombre total, ce qui
-- donne le « 68 % des joueurs ont trouve » affiche apres chaque reponse.
--
-- Pas de user_id : la mecanique doit marcher sans compte, c'est tout l'interet
-- du jeu. La cle primaire composite fait de l'INSERT ... ON CONFLICT un simple
-- increment, sans lecture prealable.
CREATE TABLE IF NOT EXISTS game_rounds (
  game_slug  TEXT NOT NULL,
  round_key  TEXT NOT NULL,
  correct    INTEGER NOT NULL DEFAULT 0,
  total      INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT DEFAULT (datetime('now')),
  PRIMARY KEY (game_slug, round_key)
);

CREATE INDEX IF NOT EXISTS idx_game_rounds_game ON game_rounds(game_slug);
