import type { AstroIntegration } from "astro";
import fs from "fs";
import path from "path";
import { categoryDefs } from "../data/categories";

const SITE = "https://wizyquiz.com";

/**
 * Slugs de categorie dans toutes les langues, deduits des donnees.
 *
 * Cette liste etait ecrite a la main et avait vieilli : elle contenait encore
 * « histoire » et « culture-generale », qui n'existent plus, et il manquait
 * « anime » et « jeux-video ». Les 28 URL de ces deux categories etaient donc
 * rangees dans le sitemap des pages au lieu de celui des categories et des
 * quiz. La deduire des donnees evite que ca se reproduise au prochain
 * changement de categorie.
 */
const ALL_CATEGORY_SLUGS = new Set(
  categoryDefs.flatMap((c) => [c.slug, ...Object.values(c.slugs || {})])
);

function getLocale(urlPath: string): string {
  const parts = urlPath.split("/").filter(Boolean);
  if (parts[0] === "fr") return "fr";
  if (parts[0] === "es") return "es";
  return "en";
}

function classify(urlPath: string): string {
  const parts = urlPath.split("/").filter(Boolean);
  let ep = parts;
  if (parts[0] === "fr" || parts[0] === "es") ep = parts.slice(1);
  if (ep.length === 3 && ALL_CATEGORY_SLUGS.has(ep[0])) return "quizzes";
  if (ep.length >= 1 && ep.length <= 2 && ALL_CATEGORY_SLUGS.has(ep[0])) return "categories";
  return "pages";
}

function getAllPages(dir: string): string[] {
  const pages: string[] = [];
  function scan(d: string, prefix = "") {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      if (entry.isDirectory()) scan(path.join(d, entry.name), `${prefix}/${entry.name}`);
      else if (entry.name === "index.html") pages.push(`${prefix}/`);
    }
  }
  scan(dir);
  return pages.sort();
}

function buildSitemap(urls: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join("\n")}
</urlset>`;
}

function buildIndex(files: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files.map((f) => `  <sitemap><loc>${SITE}/${f}</loc></sitemap>`).join("\n")}
</sitemapindex>`;
}

export default function customSitemap(): AstroIntegration {
  return {
    name: "custom-sitemap",
    hooks: {
      "astro:build:done": ({ dir }) => {
        const distDir = new URL(dir).pathname.replace(/\/$/, "").replace(/^\/([A-Z]:)/, "$1");
        const pages = getAllPages(distDir);
        const buckets: Record<string, string[]> = {};

        for (const p of pages) {
          const key = `${getLocale(p)}-${classify(p)}`;
          if (!buckets[key]) buckets[key] = [];
          buckets[key].push(p);
        }

        const sitemapFiles: string[] = [];
        for (const locale of ["en", "fr", "es"]) {
          for (const type of ["quizzes", "categories", "pages"]) {
            const key = `${locale}-${type}`;
            const urls = buckets[key] || [];
            if (urls.length === 0) continue;
            const filename = `sitemap-${key}.xml`;
            fs.writeFileSync(path.join(distDir, filename), buildSitemap(urls));
            sitemapFiles.push(filename);
          }
        }

        fs.writeFileSync(path.join(distDir, "sitemap-index.xml"), buildIndex(sitemapFiles));

        // Clean old sitemap-0.xml if exists
        const old = path.join(distDir, "sitemap-0.xml");
        if (fs.existsSync(old)) fs.unlinkSync(old);
      },
    },
  };
}
