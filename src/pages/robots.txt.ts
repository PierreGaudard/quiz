import type { APIRoute } from "astro";
import { PRELAUNCH } from "../config/launch";

export const prerender = true;

/**
 * robots.txt, généré au build à partir de PRELAUNCH.
 *
 * Avant l'ouverture, tout le site est fermé aux robots (`Disallow: /`), sauf
 * Screaming Frog pour les audits. Il était écrit en dur dans public/ : le jour
 * de l'ouverture, passer PRELAUNCH à false aurait retiré les noindex sans
 * rouvrir l'exploration, et rien ne serait entré à l'index.
 */
const PRIVATE = ["/profile/", "/fr/profil/", "/es/perfil/", "/search/", "/fr/recherche/", "/es/buscar/", "/api/", "/admin/"];

export const GET: APIRoute = () => {
  const rules = (agent: string, allowAll: boolean) =>
    [`User-agent: ${agent}`, allowAll ? "Allow: /" : "Disallow: /", ...PRIVATE.map((p) => `Disallow: ${p}`)].join("\n");
  const body = PRELAUNCH
    ? [rules("*", false), rules("Screaming Frog SEO Spider", true)]
    : [rules("*", true)];
  return new Response(body.join("\n\n") + "\n\nSitemap: https://wizyquiz.com/sitemap-index.xml\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
