-- Échecs de connexion (blocage de 15 minutes après 5 échecs, cf.
-- src/lib/password-policy.ts). La route crée la table d'elle-même : cette
-- migration n'est là que pour mémoire et pour une base neuve.
CREATE TABLE IF NOT EXISTS login_failures (
  ident TEXT NOT NULL,
  at    TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_login_failures_ident ON login_failures(ident, at);
