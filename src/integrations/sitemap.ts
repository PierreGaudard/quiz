import type { AstroIntegration } from "astro";
import fs from "fs";
import path from "path";

const SITE = "https://quiz.pierretartare94440.workers.dev";
const CATEGORY_SLUGS = ["sport", "cinema", "histoire", "culture-generale", "geographie"];

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
  if (ep.length === 3 && CATEGORY_SLUGS.includes(ep[0])) return "quizzes";
  if (ep.length >= 1 && ep.length <= 2 && CATEGORY_SLUGS.includes(ep[0])) return "categories";
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
