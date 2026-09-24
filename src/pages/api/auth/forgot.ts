import type { APIRoute } from "astro";
import { sendMail } from "../../../lib/mail";
import { RESET_MAX_PER_HOUR, RESET_PATHS, RESET_TTL_MINUTES, randomToken, resetEmail, sha256 } from "../../../lib/password-reset";

export const prerender = false;

/**
 * Demande de lien de reinitialisation.
 *
 * La reponse est la meme que l'adresse existe ou non : sinon la route
 * servirait a tester quelles adresses ont un compte.
 */
export const POST: APIRoute = async ({ request, url }) => {
  const ok = new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid_body" }), { status: 400 });
  }
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const locale = ["en", "fr", "es"].includes(body?.locale) ? body.locale : "en";
  if (!email || email.length > 200 || !email.includes("@")) return ok;

  try {
    const { env } = await import("cloudflare:workers");
    const db = (env as any).DB as D1Database;
    const user = await db.prepare("SELECT id, username FROM users WHERE lower(email) = ?").bind(email).first<{ id: number; username: string }>();
    if (!user) return ok;

    const recent = await db
      .prepare("SELECT COUNT(*) AS n FROM password_resets WHERE user_id = ? AND created_at > datetime('now', '-1 hour')")
      .bind(user.id)
      .first<{ n: number }>();
    if ((recent?.n ?? 0) >= RESET_MAX_PER_HOUR) return ok;

    const token = randomToken();
    await db
      .prepare(`INSERT INTO password_resets (token_hash, user_id, expires_at) VALUES (?, ?, datetime('now', '+${RESET_TTL_MINUTES} minutes'))`)
      .bind(await sha256(token), user.id)
      .run();
    // Menage au passage, sans tache planifiee.
    await db.prepare("DELETE FROM password_resets WHERE expires_at < datetime('now', '-1 day')").run();

    const link = `${url.origin}${RESET_PATHS[locale as "en"]}?token=${token}`;
    await sendMail({ to: email, ...resetEmail(locale, user.username, link) });
  } catch (e) {
    console.error("forgot", e);
  }
  return ok;
};
