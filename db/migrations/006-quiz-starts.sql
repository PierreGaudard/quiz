-- Parties commencees, par quiz (slug de page, comme quiz_plays).
--
-- quiz_plays compte les parties terminees ; rapportees a celles-ci, les
-- parties commencees donnent le taux d'abandon de chaque quiz. C'est ce qui
-- dit si un quiz est trop long, trop dur ou mal fichu, plutot que de le
-- deviner. quiz-couple mesure la meme chose avec quiz_starts.
CREATE TABLE IF NOT EXISTS quiz_starts (
  quiz_slug  TEXT PRIMARY KEY,
  starts     INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT DEFAULT (datetime('now'))
);
