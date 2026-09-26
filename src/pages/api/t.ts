import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession } from "../../lib/auth";
import { CLIENT_EVENT_TYPES, clip, ensureEvents, insertEvent, int, isBot, parseUA, quizInfo } from "../../lib/analytics";

export const prerender = false;

/**
 * Point d'entree de la mesure d'audience (src/utils/track.ts, src/lib/analytics.ts).
 *
 * Recoit un evenement ou un lot (`{ e: [...] }`), en JSON ou en texte brut
 * (navigator.sendBeacon). Repond 204 dans tous les cas : le joueur ne doit
 * rien voir, et un robot n'apprend rien. Les robots sont ecartes au
 * User-Agent, qui n'est pas conserve.
 */

const MAX_BATCH = 20;
const ID_RE = /^[a-z0-9]{8,40}$/;

function refHost(v: unknown, selfHost: string): string | null {
  const s = clip(v, 500);
  if (!s) return null;
  try {
    const h = new URL(s).hostname.replace(/^www\./, "");
    return h && h !== selfHost ? h : null;
  } catch {
    return null;
  }
}

export const POST: APIRoute = async ({ request, url }) => {
  const done = new Response(null, { status: 204 });
  const ua = request.headers.get("user-agent");
  if (isBot(ua)) return done;

  let body: any;
  try {
    const raw = await request.text();
    if (raw.length > 20_000) return done;
    body = JSON.parse(raw);
  } catch {
    return done;
  }
  const list: any[] = Array.isArray(body?.e) ? body.e.slice(0, MAX_BATCH) : [body];

  let db: D1Database;
  try {
    const { env } = await import("cloudflare:workers");
    db = (env as any).DB;
    if (!db) return done;
  } catch {
    return done;
  }

  try {
    await ensureEvents(db);
    const sessionId = getSessionFromCookies(request.headers.get("cookie"));
    const user = sessionId ? await getUserFromSession(db, sessionId).catch(() => null) : null;
    const cf = (request as any).cf || {};
    const country = typeof cf.country === "string" ? cf.country : null;
    const uaInfo = parseUA(ua);
    const selfHost = url.hostname.replace(/^www\./, "");

    const statements = [];
    for (const e of list) {
      const type = clip(e?.t, 30);
      if (!type || !CLIENT_EVENT_TYPES.has(type)) continue;
      const visitor = clip(e.v, 40);
      const session = clip(e.s, 40);
      const path = clip(e.p, 300);
      const quiz = quizInfo(e.q);
      let extra: string | null = null;
      if (e.x && typeof e.x === "object") {
        const s = JSON.stringify(e.x);
        if (s.length <= 4000) extra = s;
      }
      statements.push(
        insertEvent(db, {
          type,
          visitor: visitor && ID_RE.test(visitor) ? visitor : null,
          session: session && ID_RE.test(session) ? session : null,
          user_id: user ? Number(user.id) : null,
          locale: path?.startsWith("/fr/") ? "fr" : path?.startsWith("/es/") ? "es" : "en",
          path,
          // Quiz joueur (slug hors catalogue) : garde le slug tel quel, prefixe.
          quiz_slug: quiz ? quiz.base : typeof e.q === "string" && /^[a-z0-9-]{1,80}$/.test(e.q) && e.custom ? `u:${e.q}` : null,
          mode: quiz ? quiz.mode : clip(e.m, 20),
          num: int(e.n, -1, 100000),
          total: int(e.tot, 0, 100000),
          duration_ms: int(e.d, 0, 6 * 3600 * 1000),
          referrer: refHost(e.r, selfHost),
          country,
          ...uaInfo,
          screen: int(e.sw, 0, 10000),
          lang: clip(e.l, 12),
          utm_source: clip(e.us, 100),
          utm_medium: clip(e.um, 100),
          utm_campaign: clip(e.uc, 100),
          extra,
        })
      );
    }
    if (statements.length) await db.batch(statements);
  } catch {}
  return done;
};
