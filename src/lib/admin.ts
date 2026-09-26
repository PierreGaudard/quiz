/**
 * Acces au back office (/admin/ et /api/admin/*).
 *
 * La porte est Cloudflare Access (Zero Trust, offre gratuite) : une
 * application Access couvre wizyquiz.com/admin* et wizyquiz.com/api/admin*,
 * avec le seul compte Google de Pierre en politique. Cloudflare pose alors
 * l'en-tete Cf-Access-Jwt-Assertion, que ce module verifie lui aussi (signature,
 * audience, expiration) : si l'application Access etait un jour supprimee ou
 * mal configuree, le back office se fermerait au lieu de s'ouvrir.
 *
 * Reglages, en secrets du Worker `quiz` (jamais dans wrangler.toml : le depot
 * est public et l'adresse identifierait l'editeur, qui reste anonyme) :
 *   ACCESS_TEAM_DOMAIN  ex. "<equipe>.cloudflareaccess.com"
 *   ACCESS_AUD          l'« Application Audience (AUD) Tag » de l'application
 *   ADMIN_EMAILS        adresses autorisees, separees par des virgules
 * Sans eux, tout est refuse. En local, ADMIN_BYPASS=1 dans .dev.vars ouvre
 * l'acces, et seulement sur localhost (fichier non versionne).
 */

interface AdminEnv {
  ACCESS_TEAM_DOMAIN?: string;
  ACCESS_AUD?: string;
  ADMIN_EMAILS?: string;
  ADMIN_BYPASS?: string;
}

async function getEnv(): Promise<AdminEnv & { DB?: D1Database }> {
  try {
    const { env } = await import("cloudflare:workers");
    return env as any;
  } catch {
    return {};
  }
}

const b64url = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(s.length / 4) * 4, "=")), (c) => c.charCodeAt(0));
const decodeJson = (s: string) => JSON.parse(new TextDecoder().decode(b64url(s)));

let certCache: { at: number; keys: any[] } | null = null;
async function certs(team: string): Promise<any[]> {
  if (certCache && Date.now() - certCache.at < 3600_000) return certCache.keys;
  const r = await fetch(`https://${team}/cdn-cgi/access/certs`);
  const d: any = await r.json();
  certCache = { at: Date.now(), keys: d.keys || [] };
  return certCache.keys;
}

async function verifyAccessJwt(token: string, env: AdminEnv): Promise<string | null> {
  const team = env.ACCESS_TEAM_DOMAIN;
  const aud = env.ACCESS_AUD;
  if (!team || !aud) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const header = decodeJson(parts[0]);
  const payload = decodeJson(parts[1]);
  if (header.alg !== "RS256") return null;
  const jwk = (await certs(team)).find((k) => k.kid === header.kid);
  if (!jwk) return null;
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64url(parts[2]), new TextEncoder().encode(`${parts[0]}.${parts[1]}`));
  if (!ok) return null;
  const now = Math.floor(Date.now() / 1000);
  const auds = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!auds.includes(aud) || payload.iss !== `https://${team}`) return null;
  // Expiration obligatoire : un jeton sans date de fin est refusé.
  if (typeof payload.exp !== "number" || payload.exp < now) return null;
  if (typeof payload.nbf === "number" && payload.nbf > now + 60) return null;
  const email = String(payload.email || "").toLowerCase();
  const allowed = (env.ADMIN_EMAILS || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  if (!email || !allowed.includes(email)) return null;
  return email;
}

/** L'adresse de l'admin connecte, ou null. */
export async function getAdmin(request: Request): Promise<string | null> {
  const env = await getEnv();
  // Le passe-droit local ne vaut que sur la machine : même posé par erreur
  // sur le Worker, il ne s'appliquerait pas à wizyquiz.com.
  if (env.ADMIN_BYPASS === "1") {
    const host = new URL(request.url).hostname;
    if (host === "localhost" || host === "127.0.0.1") return "local";
  }
  const token = request.headers.get("cf-access-jwt-assertion");
  if (!token) return null;
  try {
    return await verifyAccessJwt(token, env);
  } catch {
    return null;
  }
}

export async function adminDB(): Promise<D1Database | null> {
  return (await getEnv()).DB || null;
}

export const forbidden = () => new Response("Accès refusé", { status: 403, headers: { "Content-Type": "text/plain; charset=utf-8" } });
