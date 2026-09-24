import { getAllQuizzes } from "../data/quizzes";
import type { QuizData } from "../data/types";
import type { Locale } from "../i18n/config";

/**
 * Le socle des parties a plusieurs : acces a la base, codes, jetons, et le
 * choix des quiz qui s'y pretent. Le schema et son pourquoi sont dans
 * db/migrations/004-rooms.sql.
 */

export const ROOM_TTL_HOURS = 6;
export const MAX_PLAYERS = 12;
export const NAME_MAX = 20;

/** Sans 0/O ni 1/I/L : un code se dicte a voix haute d'un bout a l'autre du salon. */
const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
export const CODE_LENGTH = 5;
export const CODE_PATTERN = new RegExp(`^[${CODE_ALPHABET}]{${CODE_LENGTH}}$`);

const LOCALES: Locale[] = ["en", "fr", "es"];

export async function getDB(): Promise<D1Database | null> {
  try {
    const { env } = await import("cloudflare:workers");
    return (env as any).DB || null;
  } catch {
    return null;
  }
}

export function randomCode(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(CODE_LENGTH));
  return Array.from(bytes, (b) => CODE_ALPHABET[b % CODE_ALPHABET.length]).join("");
}

export function randomToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(24));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Un quiz se joue a plusieurs si chaque question a des choix et une bonne
 * reponse parmi eux : qcm, vrai-faux, chrono et duel. L'estimation (une
 * valeur a deviner) et l'ordre (un classement) ont une autre mecanique et
 * restent en solo.
 */
export function isRoomEligible(quiz: QuizData): boolean {
  if (quiz.gameType === "estimation" || quiz.gameType === "ordre") return false;
  return (
    quiz.questions.length > 0 &&
    quiz.questions.every((q) => q.answers.length >= 2 && q.answers.some((a) => a.id === q.correctAnswer))
  );
}

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as string[]).includes(v);
}

export function findQuiz(slug: string, locale: Locale): QuizData | null {
  const quiz = getAllQuizzes(locale).find((q) => q.slug === slug);
  return quiz && isRoomEligible(quiz) ? quiz : null;
}

export function cleanName(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const name = v.replace(/\s+/g, " ").trim().slice(0, NAME_MAX);
  return name.length >= 1 ? name : null;
}

const JSON_HEADERS = { "Content-Type": "application/json", "Cache-Control": "no-store" };
export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });

export interface RoomRow {
  code: string;
  quiz_slug: string;
  locale: Locale;
  status: "lobby" | "playing";
  host_token: string;
  started_at: string | null;
  expires_at: string;
}

export interface PlayerRow {
  id: number;
  room_code: string;
  name: string;
  token: string;
  score: number;
  answered: number;
  answers: string;
  joined_at: string;
  finished_at: string | null;
}

/** La salle, si elle existe et n'a pas expire. */
export async function loadRoom(db: D1Database, code: string): Promise<RoomRow | null> {
  if (!CODE_PATTERN.test(code)) return null;
  return db
    .prepare("SELECT * FROM rooms WHERE code = ? AND expires_at > datetime('now')")
    .bind(code)
    .first<RoomRow>();
}

export async function loadPlayer(db: D1Database, code: string, token: unknown): Promise<PlayerRow | null> {
  if (typeof token !== "string" || token.length < 16) return null;
  return db
    .prepare("SELECT * FROM room_players WHERE room_code = ? AND token = ?")
    .bind(code, token)
    .first<PlayerRow>();
}

/**
 * Ajoute un joueur a la salle. Un pseudo deja pris recoit un suffixe (« Lea 2 »)
 * plutot qu'un refus : deux amis qui s'appellent pareil ne doivent pas
 * bloquer l'entree.
 */
export async function addPlayer(db: D1Database, code: string, name: string): Promise<{ id: number; token: string; name: string } | "full"> {
  const count = await db.prepare("SELECT COUNT(*) AS n FROM room_players WHERE room_code = ?").bind(code).first<{ n: number }>();
  if ((count?.n ?? 0) >= MAX_PLAYERS) return "full";

  const token = randomToken();
  for (let i = 1; i <= MAX_PLAYERS + 1; i++) {
    const candidate = i === 1 ? name : `${name.slice(0, NAME_MAX - 3)} ${i}`;
    try {
      const row = await db
        .prepare("INSERT INTO room_players (room_code, name, token) VALUES (?, ?, ?) RETURNING id")
        .bind(code, candidate, token)
        .first<{ id: number }>();
      if (row) return { id: row.id, token, name: candidate };
    } catch (e) {
      if (!String(e).includes("UNIQUE")) throw e;
    }
  }
  return "full";
}
