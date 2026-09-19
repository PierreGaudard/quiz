-- Statistiques agregees des minis-jeux.
--
-- Une ligne par manche posee, identifiee par le jeu et une cle de manche. Ce
-- que la ligne compte depend du jeu, et c'est voulu : `hits` porte l'issue
-- suivie, `total` le nombre de fois que la manche a ete jouee.
--
--   plus haut ou plus bas  hits = bonnes reponses      -> « x % ont trouve »
--   drapeau mystere        hits = bonnes reponses      -> « x % ont trouve »
--   vrai ou faux           hits = bonnes reponses      -> « x % ont trouve »
--   le juste prix          hits = trouve dans les essais impartis
--   tu preferes            hits = choix de l'option A  -> « x % ont choisi A »
--
-- La colonne ne s'appelle pas `correct` parce que « tu preferes » n'a pas de
-- bonne reponse : la nommer ainsi obligerait a lire le nom a l'envers pour ce
-- jeu-la, et c'est comme ca qu'on finit par compter la mauvaise chose.
--
-- Pas de user_id : les jeux doivent marcher sans compte, c'est tout leur
-- interet. La cle primaire composite fait de l'INSERT ... ON CONFLICT un
-- simple increment, sans lecture prealable.
CREATE TABLE IF NOT EXISTS game_rounds (
  game_slug  TEXT NOT NULL,
  round_key  TEXT NOT NULL,
  hits       INTEGER NOT NULL DEFAULT 0,
  total      INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT DEFAULT (datetime('now')),
  PRIMARY KEY (game_slug, round_key)
);

CREATE INDEX IF NOT EXISTS idx_game_rounds_game ON game_rounds(game_slug);
