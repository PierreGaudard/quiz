-- Compteur reel de parties jouees, par quiz.
--
-- `quiz_progress` ne peut pas servir a ca : sa colonne user_id est NOT NULL,
-- donc seules les parties des membres y sont enregistrees, et la majorite des
-- parties se joue sans compte. Les compteurs affiches venaient donc de
-- valeurs ecrites en dur dans src/data/quiz-*.ts (15 200 a 28 400 par quiz,
-- 104 000 au total) sur un site qui n'a pas encore ete indexe.
--
-- Cette table compte les parties terminees, connecte ou pas. Une ligne par
-- quiz, incrementee a chaque fin de partie.

CREATE TABLE IF NOT EXISTS quiz_plays (
  quiz_slug  TEXT PRIMARY KEY,
  plays      INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT DEFAULT (datetime('now'))
);
