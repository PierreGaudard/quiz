-- Moderation des quiz crees par les joueurs (back office /admin/quiz/).
--
-- `status` : pending a la creation, approved (liste dans « Quiz de la
-- communaute »), rejected (le lien ne marche plus). Tant qu'il est en
-- attente, seul l'auteur peut y jouer. Les quiz existants passent en attente.
-- src/lib/moderation.ts ajoute ces colonnes d'elle-meme si elles manquent.
ALTER TABLE user_quizzes ADD COLUMN status TEXT NOT NULL DEFAULT 'pending';
ALTER TABLE user_quizzes ADD COLUMN reviewed_at TEXT;
ALTER TABLE user_quizzes ADD COLUMN review_note TEXT;
CREATE INDEX IF NOT EXISTS idx_user_quizzes_status ON user_quizzes(status, created_at);
