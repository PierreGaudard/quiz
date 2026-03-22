/**
 * Generate structured sitemaps organized by locale and content type.
 * Run after `npm run build` to create sitemaps in dist/.
 *
 * Structure:
 *   sitemap-index.xml
 *     sitemap-en-quizzes.xml
 *     sitemap-en-categories.xml
 *     sitemap-en-pages.xml
 *     sitemap-fr-quizzes.xml
 *     sitemap-fr-categories.xml
 *     sitemap-fr-pages.xml
 *     sitemap-es-quizzes.xml
 *     sitemap-es-categories.xml
 *     sitemap-es-pages.xml
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "..", "dist");
const SITE = "https://quiz.pierretartare94440.workers.dev";

const CATEGORY_SLUGS = ["sport", "cinema", "histoire", "culture-generale", "geographie"];

// Scan dist for all HTML pages
function getAllPages() {
  const pages = [];
  function scan(dir, prefix = "") {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        scan(path.join(dir, entry.name), `${prefix}/${entry.name}`);
      } else if (entry.name === "index.html") {
        pages.push(`${prefix}/`);
      }
    }
  }
  scan(DIST);
  return pages;
}

// Classify a URL path into: quiz, category, or page
function classify(urlPath) {
  const parts = urlPath.split("/").filter(Boolean);

  // Remove locale prefix for classification
  let effectiveParts = parts;
  if (parts[0] === "fr" || parts[0] === "es") {
    effectiveParts = parts.slice(1);
  }

  // Quiz: /{cat}/{sub}/{quiz}/ = 3 segments
  if (effectiveParts.length === 3 && CATEGORY_SLUGS.includes(effectiveParts[0])) {
    return "quizzes";
  }

  // Category or subcategory: /{cat}/ or /{cat}/{sub}/ = 1 or 2 segments matching a category
  if (effectiveParts.length >= 1 && effectiveParts.length <= 2 && CATEGORY_SLUGS.includes(effectiveParts[0])) {
    return "categories";
  }

  // Everything else is a page
  return "pages";
}

// Get locale from path
function getLocale(urlPath) {
  const parts = urlPath.split("/").filter(Boolean);
  if (parts[0] === "fr") return "fr";
  if (parts[0] === "es") return "es";
  return "en";
}

// Generate a sitemap XML string
function buildSitemap(urls) {
  const entries = urls.map((url) =>
    `  <url><loc>${SITE}${url}</loc></url>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

// Generate the sitemap index
function buildSitemapIndex(sitemapFiles) {
  const entries = sitemapFiles.map((f) =>
    `  <sitemap><loc>${SITE}/${f}</loc></sitemap>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

// Main
const allPages = getAllPages().sort();
const buckets = {};

for (const page of allPages) {
  const locale = getLocale(page);
  const type = classify(page);
  const key = `${locale}-${type}`;
  if (!buckets[key]) buckets[key] = [];
  buckets[key].push(page);
}

const sitemapFiles = [];
const locales = ["en", "fr", "es"];
const types = ["quizzes", "categories", "pages"];

for (const locale of locales) {
  for (const type of types) {
    const key = `${locale}-${type}`;
    const urls = buckets[key] || [];
    if (urls.length === 0) continue;
    const filename = `sitemap-${key}.xml`;
    fs.writeFileSync(path.join(DIST, filename), buildSitemap(urls));
    sitemapFiles.push(filename);
    console.log(`  ${filename}: ${urls.length} URLs`);
  }
}

fs.writeFileSync(path.join(DIST, "sitemap-index.xml"), buildSitemapIndex(sitemapFiles));
console.log(`\nsitemap-index.xml: ${sitemapFiles.length} sitemaps`);

// Clean up old auto-generated sitemaps
for (const f of ["sitemap-0.xml"]) {
  const p = path.join(DIST, f);
  if (fs.existsSync(p)) fs.unlinkSync(p);
}
