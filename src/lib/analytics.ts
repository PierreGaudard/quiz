/**
 * Mesure d'audience maison (table `events`, migration 011), lue par le back
 * office /admin/.
 *
 * Tout reste dans le cadre de l'exemption de consentement de la CNIL : les
 * donnees ne servent qu'aux statistiques du site, ne sont croisees avec rien,
 * ne quittent pas la base. Pas d'adresse IP, pas d'empreinte d'appareil, pas
 * de cookie : l'identifiant de visiteur est tire au hasard par le navigateur.
 * Le pays vient de Cloudflare (`request.cf.country`), le type d'appareil et
 * le navigateur sont deduits du User-Agent puis le User-Agent est jete.
 */
import { allTranslatedQuizzes } from "../data/quizzes";

export const EVENTS_TABLE =
  "CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, ts TEXT NOT NULL DEFAULT (datetime('now')), " +
  "type TEXT NOT NULL, visitor TEXT, session TEXT, user_id INTEGER, locale TEXT, path TEXT, quiz_slug TEXT, mode TEXT, " +
  "num INTEGER, total INTEGER, duration_ms INTEGER, referrer TEXT, country TEXT, device TEXT, browser TEXT, os TEXT, " +
  "screen INTEGER, lang TEXT, utm_source TEXT, utm_medium TEXT, utm_campaign TEXT, extra TEXT)";

const EVENTS_INDEXES = [
  "CREATE INDEX IF NOT EXISTS idx_events_ts ON events(ts)",
  "CREATE INDEX IF NOT EXISTS idx_events_type_ts ON events(type, ts)",
  "CREATE INDEX IF NOT EXISTS idx_events_quiz ON events(quiz_slug, type)",
];

/** Duree de conservation (CNIL : 13 mois pour l'identifiant, 25 mois au plus pour les donnees). */
export const EVENTS_RETENTION_DAYS = 395;

/** Types acceptes depuis le navigateur. Les autres sont ecrits par le serveur seul. */
export const CLIENT_EVENT_TYPES = new Set([
  "page_view",
  "page_leave",
  "quiz_start",
  "quiz_end",
  "quiz_abandon",
  "quiz_replay",
  "share",
  "search",
  "signup_prompt",
]);

let ensured = false;
export async function ensureEvents(db: D1Database): Promise<void> {
  if (ensured) return;
  await db.batch([db.prepare(EVENTS_TABLE), ...EVENTS_INDEXES.map((s) => db.prepare(s))]);
  ensured = true;
}

let slugMap: Map<string, { base: string; mode: string }> | null = null;
/** Slug de page (propre a chaque langue) vers le slug de base et le mode du quiz. */
export function quizInfo(slug: unknown): { base: string; mode: string } | undefined {
  if (typeof slug !== "string") return undefined;
  if (!slugMap) {
    slugMap = new Map();
    for (const q of allTranslatedQuizzes) {
      const info = { base: q.slug, mode: q.gameType || "qcm" };
      slugMap.set(q.slug, info);
      for (const s of Object.values(q.slugs || {})) if (s) slugMap.set(s, info);
    }
  }
  return slugMap.get(slug);
}

const BOT_RE = /bot|crawl|spider|slurp|headless|lighthouse|pingdom|preview|facebookexternalhit|embedly|monitor|curl|wget|python|axios|node-fetch|playwright|puppeteer|screaming/i;

export function isBot(ua: string | null): boolean {
  return !ua || BOT_RE.test(ua);
}

export function parseUA(ua: string | null): { device: string; browser: string; os: string } {
  const s = ua || "";
  const device = /iPad|Tablet|(Android(?!.*Mobile))/i.test(s) ? "tablet" : /Mobi|iPhone|Android/i.test(s) ? "mobile" : "desktop";
  const browser = /Edg\//.test(s) ? "Edge"
    : /OPR\/|Opera/.test(s) ? "Opera"
    : /SamsungBrowser/.test(s) ? "Samsung Internet"
    : /Firefox\//.test(s) ? "Firefox"
    : /CriOS|Chrome\//.test(s) ? "Chrome"
    : /Safari\//.test(s) ? "Safari"
    : "Autre";
  const os = /Windows/.test(s) ? "Windows"
    : /iPhone|iPad|iPod/.test(s) ? "iOS"
    : /Mac OS X/.test(s) ? "macOS"
    : /Android/.test(s) ? "Android"
    : /CrOS/.test(s) ? "ChromeOS"
    : /Linux/.test(s) ? "Linux"
    : "Autre";
  return { device, browser, os };
}

export interface EventRow {
  type: string;
  visitor?: string | null;
  session?: string | null;
  user_id?: number | null;
  locale?: string | null;
  path?: string | null;
  quiz_slug?: string | null;
  mode?: string | null;
  num?: number | null;
  total?: number | null;
  duration_ms?: number | null;
  referrer?: string | null;
  country?: string | null;
  device?: string | null;
  browser?: string | null;
  os?: string | null;
  screen?: number | null;
  lang?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  extra?: string | null;
}

const COLUMNS: (keyof EventRow)[] = [
  "type", "visitor", "session", "user_id", "locale", "path", "quiz_slug", "mode", "num", "total", "duration_ms",
  "referrer", "country", "device", "browser", "os", "screen", "lang", "utm_source", "utm_medium", "utm_campaign", "extra",
];

export function insertEvent(db: D1Database, row: EventRow): D1PreparedStatement {
  return db
    .prepare(`INSERT INTO events (${COLUMNS.join(", ")}) VALUES (${COLUMNS.map(() => "?").join(", ")})`)
    .bind(...COLUMNS.map((c) => row[c] ?? null));
}

/**
 * Evenement ecrit par le serveur (inscription, connexion, quiz cree, vote).
 * Ne fait jamais echouer la route qui l'appelle.
 */
export async function logServerEvent(db: D1Database, request: Request, row: EventRow): Promise<void> {
  try {
    await ensureEvents(db);
    const ua = request.headers.get("user-agent");
    const cf = (request as any).cf || {};
    const referer = request.headers.get("referer");
    let path: string | null = null;
    try { path = referer ? new URL(referer).pathname : null; } catch {}
    await insertEvent(db, {
      path,
      locale: path?.startsWith("/fr/") ? "fr" : path?.startsWith("/es/") ? "es" : "en",
      country: typeof cf.country === "string" ? cf.country : null,
      ...parseUA(ua),
      ...row,
    }).run();
  } catch {}
}

export async function purgeOldEvents(db: D1Database): Promise<void> {
  const has = await db.prepare("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'events'").first();
  if (!has) return;
  await db.prepare(`DELETE FROM events WHERE ts < datetime('now', '-${EVENTS_RETENTION_DAYS} days')`).run();
}

/** Coupe une chaine et la vide si elle est vide. */
export function clip(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim().slice(0, max);
  return s || null;
}

export function int(v: unknown, min: number, max: number): number | null {
  return typeof v === "number" && Number.isFinite(v) ? Math.max(min, Math.min(max, Math.round(v))) : null;
}
