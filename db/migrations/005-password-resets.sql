-- Reinitialisation du mot de passe.
--
-- Un lien envoye par e-mail porte un jeton aleatoire ; la base n'en garde
-- que l'empreinte SHA-256, pour qu'une fuite de la table ne donne acces a
-- aucun compte. Un jeton sert une fois et vit une heure.
CREATE TABLE IF NOT EXISTS password_resets (
  token_hash TEXT PRIMARY KEY,
  user_id    INTEGER NOT NULL,
  expires_at TEXT NOT NULL,
  used_at    TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_password_resets_user ON password_resets(user_id);
