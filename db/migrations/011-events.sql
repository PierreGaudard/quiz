-- Mesure d'audience maison, pour le back office (/admin/).
--
-- Une ligne par evenement : page vue, partie commencee, terminee ou
-- abandonnee, inscription, connexion, quiz cree, vote. Pas d'adresse IP, pas
-- de cookie : `visitor` est un identifiant aleatoire tire par le navigateur
-- (stockage local, renouvele au bout de 13 mois), `session` un autre par
-- onglet. C'est le cadre de l'exemption de consentement de la CNIL pour la
-- mesure d'audience (donnees propres au site, statistiques seulement,
-- opposition possible depuis la page cookies). Les lignes de plus de 13 mois
-- sont effacees par la tache planifiee.
--
-- `quiz_slug` est le slug de base, commun aux trois langues. `num` porte le
-- score (fin de partie) ou l'index de la question (abandon), `duration_ms`
-- le temps passe depuis le debut de la partie ou sur la page. `extra` est un
-- petit JSON propre au type : le detail des reponses d'une partie (une seule
-- ligne par partie plutot qu'une par question, pour tenir dans les ecritures
-- gratuites de D1), le texte d'une recherche, la cible d'un partage.
--
-- La route /api/t cree la table d'elle-meme au premier evenement.
CREATE TABLE IF NOT EXISTS events (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  ts          TEXT NOT NULL DEFAULT (datetime('now')),
  type        TEXT NOT NULL,
  visitor     TEXT,
  session     TEXT,
  user_id     INTEGER,
  locale      TEXT,
  path        TEXT,
  quiz_slug   TEXT,
  mode        TEXT,
  num         INTEGER,
  total       INTEGER,
  duration_ms INTEGER,
  referrer    TEXT,
  country     TEXT,
  device      TEXT,
  browser     TEXT,
  os          TEXT,
  screen      INTEGER,
  lang        TEXT,
  utm_source  TEXT,
  utm_medium  TEXT,
  utm_campaign TEXT,
  extra       TEXT
);
CREATE INDEX IF NOT EXISTS idx_events_ts ON events(ts);
CREATE INDEX IF NOT EXISTS idx_events_type_ts ON events(type, ts);
CREATE INDEX IF NOT EXISTS idx_events_quiz ON events(quiz_slug, type);
