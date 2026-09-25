/**
 * Règles de mot de passe et de connexion, calées sur la recommandation de la
 * CNIL (délibération 2022-100, cas « mot de passe et restriction d'accès ») :
 * 8 caractères au moins, mêlant 3 des 4 types (minuscule, majuscule, chiffre,
 * caractère spécial), et un compte bloqué quelques minutes après une série
 * d'échecs. Assouplir l'une sans durcir l'autre sort de la recommandation.
 */
export const PASSWORD_MIN = 8;
export const PASSWORD_MAX = 200;
/** Clé d'erreur renvoyée par l'API, traduite par les formulaires. */
export const WEAK_PASSWORD_ERROR = "Password must be at least 8 characters and mix 3 kinds of characters";

export function isStrongPassword(pw: unknown): pw is string {
  if (typeof pw !== "string" || pw.length < PASSWORD_MIN || pw.length > PASSWORD_MAX) return false;
  const kinds = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].filter((r) => r.test(pw)).length;
  return kinds >= 3;
}

export const LOGIN_MAX_FAILURES = 5;
export const LOGIN_LOCK_MINUTES = 15;
export const TOO_MANY_ATTEMPTS_ERROR = "Too many attempts, try again in 15 minutes";

/**
 * Échecs de connexion, par identifiant saisi (e-mail ou nom d'utilisateur, en
 * minuscules) : pas d'adresse IP, pour ne pas collecter de donnée de plus.
 * La table se crée d'elle-même (migration 008 pour mémoire), et une ligne ne
 * vit que le temps du blocage.
 */
async function ensureTable(db: D1Database) {
  await db.prepare("CREATE TABLE IF NOT EXISTS login_failures (ident TEXT NOT NULL, at TEXT NOT NULL DEFAULT (datetime('now')))").run();
  await db.prepare("CREATE INDEX IF NOT EXISTS idx_login_failures_ident ON login_failures(ident, at)").run();
}

export async function isLoginLocked(db: D1Database, ident: string): Promise<boolean> {
  try {
    const row = await db
      .prepare(`SELECT COUNT(*) AS n FROM login_failures WHERE ident = ? AND at > datetime('now', '-${LOGIN_LOCK_MINUTES} minutes')`)
      .bind(ident.toLowerCase())
      .first<{ n: number }>();
    return (row?.n ?? 0) >= LOGIN_MAX_FAILURES;
  } catch {
    return false; // table absente : aucun échec noté encore
  }
}

export async function recordLoginFailure(db: D1Database, ident: string): Promise<void> {
  const add = () => db.prepare("INSERT INTO login_failures (ident) VALUES (?)").bind(ident.toLowerCase()).run();
  try {
    await add();
  } catch {
    await ensureTable(db);
    await add();
  }
  await db.prepare(`DELETE FROM login_failures WHERE at < datetime('now', '-${LOGIN_LOCK_MINUTES} minutes')`).run();
}

export async function clearLoginFailures(db: D1Database, ident: string): Promise<void> {
  try {
    await db.prepare("DELETE FROM login_failures WHERE ident = ?").bind(ident.toLowerCase()).run();
  } catch {}
}
