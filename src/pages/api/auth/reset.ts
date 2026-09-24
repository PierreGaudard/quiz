import type { APIRoute } from "astro";
import { hashPassword } from "../../../lib/auth";
import { sha256 } from "../../../lib/password-reset";

export const prerender = false;

/** Change le mot de passe avec un jeton recu par e-mail, et deconnecte toutes les sessions du compte. */
export const POST: APIRoute = async ({ request }) => {
  const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { "Content-Type": "application/json" } });
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_body" }, 400);
  }
  const token = typeof body?.token === "string" ? body.token : "";
  const password = typeof body?.password === "string" ? body.password : "";
  if (!/^[a-f0-9]{64}$/.test(token)) return json({ error: "invalid_token" }, 400);
  if (password.length < 6 || password.length > 200) return json({ error: "weak_password" }, 400);

  try {
    const { env } = await import("cloudflare:workers");
    const db = (env as any).DB as D1Database;
    const hash = await sha256(token);
    const row = await db
      .prepare("SELECT user_id FROM password_resets WHERE token_hash = ? AND used_at IS NULL AND expires_at > datetime('now')")
      .bind(hash)
      .first<{ user_id: number }>();
    if (!row) return json({ error: "invalid_token" }, 400);

    // Le jeton est consomme avant tout le reste : un second envoi du meme
    // formulaire ne doit rien pouvoir faire.
    const used = await db.prepare("UPDATE password_resets SET used_at = datetime('now') WHERE token_hash = ? AND used_at IS NULL").bind(hash).run();
    if (!used.meta.changes) return json({ error: "invalid_token" }, 400);

    await db.batch([
      db.prepare("UPDATE users SET password_hash = ?, updated_at = datetime('now') WHERE id = ?").bind(await hashPassword(password), row.user_id),
      db.prepare("DELETE FROM sessions WHERE user_id = ?").bind(row.user_id),
    ]);
    return json({ ok: true });
  } catch (e) {
    console.error("reset", e);
    return json({ error: "unavailable" }, 503);
  }
};
