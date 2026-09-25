-- Comptes inactifs (RGPD art. 5.1.e : durée de conservation limitée).
--
-- last_seen_at : dernière activité connue, mise à jour au plus une fois par
-- jour (connexion, ou page chargée avec une session valide).
-- locale : langue de la dernière visite, pour écrire l'e-mail d'avertissement.
-- inactivity_warned_at : date de l'e-mail « votre compte va être supprimé ».
-- Remise à NULL dès que le joueur revient.
ALTER TABLE users ADD COLUMN last_seen_at TEXT;
ALTER TABLE users ADD COLUMN locale TEXT DEFAULT 'en';
ALTER TABLE users ADD COLUMN inactivity_warned_at TEXT;
UPDATE users SET last_seen_at = COALESCE(
  (SELECT MAX(created_at) FROM sessions WHERE sessions.user_id = users.id),
  updated_at, created_at
) WHERE last_seen_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_users_last_seen ON users(last_seen_at);
