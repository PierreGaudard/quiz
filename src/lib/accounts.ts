import type { Locale } from "../i18n/config";
import { sendMail } from "./mail";

/**
 * Cycle de vie des comptes : dernière activité, suppression, purge des
 * comptes inactifs (RGPD art. 5.1.e, recommandation CNIL : une durée de
 * conservation, pas « tant que le compte existe »).
 *
 * Un compte sans activité depuis INACTIVE_YEARS ans reçoit un e-mail
 * WARN_DAYS jours avant l'échéance ; s'il ne revient pas, il est supprimé.
 * La règle est écrite dans les politiques de confidentialité des trois
 * langues : la changer ici, c'est les changer là-bas le jour même.
 */
export const INACTIVE_YEARS = 3;
export const WARN_DAYS = 30;
/** Resend gratuit : 100 e-mails par jour, dont il faut laisser la place aux réinitialisations. */
const MAX_WARNINGS_PER_RUN = 50;

const LOCALES: Locale[] = ["en", "fr", "es"];

/** Langue d'une page d'après son chemin (/fr/…, /es/…, sinon anglais). */
export function localeFromPath(path: string | null | undefined): Locale {
  const m = (path || "").match(/^(?:https?:\/\/[^/]+)?\/(fr|es)(?:\/|$)/);
  return (m ? m[1] : "en") as Locale;
}

/**
 * Note l'activité du joueur, au plus une fois par jour pour ne pas écrire en
 * base à chaque page. Revenir annule un avertissement d'inactivité en cours.
 */
export async function touchUser(db: D1Database, userId: number, locale?: Locale): Promise<void> {
  try {
    const loc = locale && LOCALES.includes(locale) ? locale : null;
    await db
      .prepare(
        "UPDATE users SET last_seen_at = datetime('now'), inactivity_warned_at = NULL, locale = COALESCE(?, locale) " +
          "WHERE id = ? AND (last_seen_at IS NULL OR last_seen_at < datetime('now', '-1 day') OR inactivity_warned_at IS NOT NULL OR (? IS NOT NULL AND locale IS NOT ?))",
      )
      .bind(loc, userId, loc, loc)
      .run();
  } catch (e) {
    // Colonnes absentes tant que la migration 007 n'est pas passée : l'activité n'est simplement pas notée.
    console.error("touchUser", e);
  }
}

/**
 * Efface un compte et tout ce qui y est lié. Chaque table est vidée une par
 * une, sans compter sur les ON DELETE CASCADE : une table ajoutée plus tard
 * sans la clé étrangère garderait sinon des lignes orphelines. Les
 * statistiques anonymes (quiz_scores, quiz_plays, quiz_starts) ne sont liées
 * à aucun compte et restent.
 */
export async function deleteAccount(db: D1Database, userId: number): Promise<void> {
  const statements = [
    "DELETE FROM sessions WHERE user_id = ?",
    "DELETE FROM quiz_progress WHERE user_id = ?",
    "DELETE FROM user_quizzes WHERE user_id = ?",
    "DELETE FROM password_resets WHERE user_id = ?",
  ].map((sql) => db.prepare(sql).bind(userId));
  statements.push(db.prepare("DELETE FROM friendships WHERE sender_id = ? OR receiver_id = ?").bind(userId, userId));
  // Table créée à la première invitation : sur une base qui n'en a jamais eu,
  // la requête échouerait et ferait tomber tout le lot.
  const hasInvites = await db.prepare("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'room_invites'").first();
  if (hasInvites) statements.push(db.prepare("DELETE FROM room_invites WHERE from_user = ? OR to_user = ?").bind(userId, userId));
  statements.push(db.prepare("DELETE FROM users WHERE id = ?").bind(userId));
  await db.batch(statements);
}

const LOGIN_PATHS: Record<Locale, string> = { en: "/login/", fr: "/fr/connexion/", es: "/es/iniciar-sesion/" };

const COPY: Record<Locale, { subject: string; hello: string; body: string; cta: string; after: string; dateLocale: string }> = {
  en: {
    subject: "Your WizyQuiz account will be deleted on {date}",
    hello: "Hi {name},",
    body: "You haven't used your WizyQuiz account for almost {years} years. We don't keep data we no longer need, so the account will be deleted on {date}, along with your history, XP, friends and the quizzes you created.",
    cta: "Log in to keep my account",
    after: "Logging in once before that date is enough to keep it. If you'd rather let it go, there's nothing to do.",
    dateLocale: "en-GB",
  },
  fr: {
    subject: "Votre compte WizyQuiz sera supprimé le {date}",
    hello: "Bonjour {name},",
    body: "Votre compte WizyQuiz n'a pas servi depuis bientôt {years} ans. Nous ne gardons pas de données dont nous n'avons plus besoin : le compte sera donc supprimé le {date}, avec votre historique, votre XP, vos amis et les quiz que vous avez créés.",
    cta: "Me connecter pour garder mon compte",
    after: "Une seule connexion avant cette date suffit à le garder. Si vous préférez le laisser partir, vous n'avez rien à faire.",
    dateLocale: "fr-FR",
  },
  es: {
    subject: "Tu cuenta de WizyQuiz se eliminará el {date}",
    hello: "Hola, {name}:",
    body: "No has usado tu cuenta de WizyQuiz desde hace casi {years} años. No guardamos datos que ya no necesitamos, así que la cuenta se eliminará el {date}, con tu historial, tu XP, tus amigos y los quizzes que creaste.",
    cta: "Iniciar sesión para conservar mi cuenta",
    after: "Basta con iniciar sesión una vez antes de esa fecha para conservarla. Si prefieres dejarla, no tienes que hacer nada.",
    dateLocale: "es-ES",
  },
};

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export function inactivityEmail(locale: Locale, name: string, deletionDate: Date, origin: string) {
  const c = COPY[locale] ?? COPY.en;
  const date = deletionDate.toLocaleDateString(c.dateLocale, { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris" });
  const fill = (s: string) => s.replace("{name}", name).replace("{date}", date).replace("{years}", String(INACTIVE_YEARS));
  const hello = fill(c.hello);
  const body = fill(c.body);
  const link = origin + (LOGIN_PATHS[locale] ?? LOGIN_PATHS.en);
  const text = `${hello}\n\n${body}\n\n${c.cta}\n${link}\n\n${c.after}\n\nWizyQuiz`;
  // impeccable-disable-next-line overused-font: un e-mail n'a que les polices systeme, Arial est la plus sure
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#1a0e42;max-width:520px">
<p>${esc(hello)}</p><p>${esc(body)}</p>
<p><a href="${esc(link)}" style="display:inline-block;background:#5b35d5;color:#fff;text-decoration:none;font-weight:bold;padding:12px 20px;border-radius:10px">${esc(c.cta)}</a></p>
<p style="font-size:13px;color:#555">${esc(c.after)}</p><p>WizyQuiz</p></div>`;
  return { subject: fill(c.subject), text, html };
}

/**
 * Tâche planifiée quotidienne (src/worker.ts). Deux passes :
 * 1. avertir les comptes qui atteindront l'échéance dans WARN_DAYS jours ;
 * 2. supprimer ceux qui ont été avertis il y a au moins WARN_DAYS jours et
 *    ne sont pas revenus (touchUser remet l'avertissement à NULL).
 * Un compte jamais averti (e-mail en échec) n'est jamais supprimé : il sera
 * averti au passage suivant.
 */
export async function purgeInactiveAccounts(db: D1Database, origin = "https://wizyquiz.com") {
  const seen = "COALESCE(last_seen_at, created_at)";
  const toWarn = await db
    .prepare(
      `SELECT id, username, email, locale, ${seen} AS seen FROM users WHERE inactivity_warned_at IS NULL ` +
        `AND ${seen} < datetime('now', '-${INACTIVE_YEARS} years', '+${WARN_DAYS} days') ORDER BY ${seen} LIMIT ?`,
    )
    .bind(MAX_WARNINGS_PER_RUN)
    .all<{ id: number; username: string; email: string; locale: Locale | null; seen: string }>();

  let warned = 0;
  for (const u of toWarn.results ?? []) {
    const deletion = new Date(Date.now() + WARN_DAYS * 24 * 60 * 60 * 1000);
    const sent = await sendMail({ to: u.email, ...inactivityEmail(u.locale ?? "en", u.username, deletion, origin) });
    if (!sent) continue;
    await db.prepare("UPDATE users SET inactivity_warned_at = datetime('now') WHERE id = ?").bind(u.id).run();
    warned++;
  }

  const toDelete = await db
    .prepare(
      `SELECT id FROM users WHERE inactivity_warned_at IS NOT NULL AND inactivity_warned_at < datetime('now', '-${WARN_DAYS} days') ` +
        `AND ${seen} < datetime('now', '-${INACTIVE_YEARS} years')`,
    )
    .all<{ id: number }>();
  for (const u of toDelete.results ?? []) await deleteAccount(db, u.id);

  return { warned, deleted: toDelete.results?.length ?? 0 };
}
