-- Repartition des scores, par quiz.
--
-- Sert a l'ecran de resultat : « tu fais mieux que 64 % des joueurs », le
-- score moyen et l'histogramme ou la barre du joueur est mise en avant. C'est
-- ce que quiz-couple fait avec purete_scores et profil_resultats.
--
-- Une ligne par couple (quiz, score), incrementee a chaque fin de partie,
-- connecte ou pas. On ne garde pas une ligne par partie : il n'y a rien a en
-- tirer de plus que l'histogramme, et la table reste minuscule quel que soit
-- le trafic (au plus une dizaine de lignes par quiz).
--
-- `quiz_slug` est le slug de base du quiz, commun aux trois langues.
--
-- `score` est le score tel que l'ecran de resultat du mode l'affiche :
-- bonnes reponses pour qcm, vrai-faux, duel, estimation et chrono, points
-- pour ordre. Un quiz n'a qu'un seul mode, donc les scores d'un meme quiz se
-- comparent toujours entre eux.
CREATE TABLE IF NOT EXISTS quiz_scores (
  quiz_slug  TEXT NOT NULL,
  score      INTEGER NOT NULL,
  plays      INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT DEFAULT (datetime('now')),
  PRIMARY KEY (quiz_slug, score)
);
