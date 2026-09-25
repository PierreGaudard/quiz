/**
 * Point d'entrée du Worker (wrangler.toml, `main`). Il reprend le `fetch`
 * d'Astro tel quel et ajoute la tâche planifiée quotidienne (`[triggers]`).
 */
import astro from "@astrojs/cloudflare/entrypoints/server";
import { purgeInactiveAccounts } from "./lib/accounts";
import { purgeExpiredInvites } from "./lib/room-invites";

export default {
  ...astro,
  async scheduled(_controller: ScheduledController, env: { DB: D1Database }, ctx: ExecutionContext) {
    ctx.waitUntil(
      purgeInactiveAccounts(env.DB)
        .then((r) => console.log("purgeInactiveAccounts", JSON.stringify(r)))
        .catch((e) => console.error("purgeInactiveAccounts", e)),
    );
    // Salles entre amis expirées : la création d'une salle les efface aussi,
    // mais sans nouvelle salle elles resteraient au-delà des 6 heures promises.
    ctx.waitUntil(
      env.DB.batch([
        env.DB.prepare("DELETE FROM room_players WHERE room_code IN (SELECT code FROM rooms WHERE expires_at <= datetime('now'))"),
        env.DB.prepare("DELETE FROM rooms WHERE expires_at <= datetime('now')"),
      ]).then(() => purgeExpiredInvites(env.DB)).catch((e) => console.error("purgeRooms", e)),
    );
  },
};
