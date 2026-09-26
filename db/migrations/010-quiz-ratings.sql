-- Notes de 1 a 5 donnees aux quiz, a l'ecran de resultat (QuizRating).
--
-- Voter demande un compte : une note par joueur et par quiz, qu'il peut
-- changer en revotant. `quiz_slug` est le slug de base, commun aux trois
-- langues, comme pour quiz_scores. La route cree la table d'elle-meme : cette
-- migration est la pour memoire et pour une base neuve.
CREATE TABLE IF NOT EXISTS quiz_ratings (
  quiz_slug  TEXT NOT NULL,
  user_id    INTEGER NOT NULL,
  rating     INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  PRIMARY KEY (quiz_slug, user_id)
);
CREATE INDEX IF NOT EXISTS idx_quiz_ratings_user ON quiz_ratings(user_id);
