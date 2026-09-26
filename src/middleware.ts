import { defineMiddleware } from "astro:middleware";
import { getAdmin } from "./lib/admin";

/**
 * Porte du back office, en plus de Cloudflare Access et de la vérification
 * faite par chaque page admin : tout chemin /admin ou /api/admin, présent ou
 * futur, passe par ici. Une page admin oubliée sans contrôle reste fermée.
 *
 * - Pas d'admin reconnu : 404, sans rien dire de ce qu'il y a derrière.
 * - POST : l'origine doit être le site lui-même (contre un formulaire posté
 *   depuis un autre site pendant que l'admin est connecté).
 * - Réponses jamais mises en cache, jamais indexées, jamais affichables dans
 *   un cadre.
 * - Une page admin pré-rendue au build serait servie comme un fichier
 *   statique, sans passer par ce contrôle : le build échoue plutôt.
 */
const ADMIN_RE = /^\/+(api\/+)?admin(\/|$|\.)/i;

/** Chemin décodé : /%61dmin ou /ADMIN ne doivent pas passer à côté du contrôle. */
function normalized(pathname: string): string {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (!ADMIN_RE.test(normalized(pathname))) return next();

  if (context.isPrerendered) {
    throw new Error(`Page admin pré-rendue : ${pathname}. Ajouter « export const prerender = false ».`);
  }

  const notFound = () =>
    new Response("Not found", { status: 404, headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" } });

  const admin = await getAdmin(context.request);
  if (!admin) return notFound();

  if (context.request.method !== "GET" && context.request.method !== "HEAD") {
    const origin = context.request.headers.get("origin");
    if (origin !== context.url.origin) return new Response("Origine refusée", { status: 403 });
  }

  const res = await next();
  res.headers.set("Cache-Control", "no-store, private");
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  res.headers.set("Content-Security-Policy", "frame-ancestors 'none'");
  res.headers.set("X-Frame-Options", "DENY");
  // Pas « no-referrer » : avec lui, le navigateur envoie « Origin: null » sur
  // les formulaires, et le contrôle d'origine ci-dessus refuserait toute action.
  res.headers.set("Referrer-Policy", "same-origin");
  return res;
});
