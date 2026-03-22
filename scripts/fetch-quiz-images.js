#!/usr/bin/env node
/**
 * Automatic quiz image fetcher using Bing Image Search API.
 *
 * Searches Bing for relevant images based on quiz question content,
 * downloads them, and converts to WebP (800px, quality 80).
 *
 * Setup:
 *   1. Create a free Bing Search resource on Azure portal
 *   2. Copy your API key
 *
 * Usage:
 *   BING_KEY=your_key node scripts/fetch-quiz-images.js
 *
 * Options:
 *   --quiz=quiz-slug       Only process a specific quiz (e.g. --quiz=quiz-harry-potter)
 *   --force                Re-download even if image already exists
 *   --dry-run              Show what would be downloaded without downloading
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const API_KEY = process.env.BING_KEY;
if (!API_KEY) {
  console.error("Missing BING_KEY environment variable.");
  console.error("Get a free key at https://portal.azure.com (Bing Search v7)");
  process.exit(1);
}

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");
const DATA_DIR = path.join(__dirname, "..", "src", "data");
const MAX_WIDTH = 800;
const QUALITY = 80;
const DELAY_MS = 300;

const args = process.argv.slice(2);
const targetQuiz = args.find((a) => a.startsWith("--quiz="))?.split("=")[1];
const force = args.includes("--force");
const dryRun = args.includes("--dry-run");

// ── Helpers ──

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const opts = { headers };
    const urlObj = new URL(url);
    opts.hostname = urlObj.hostname;
    opts.path = urlObj.pathname + urlObj.search;
    opts.port = 443;

    https.get(opts, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return httpsGet(res.headers.location, headers).then(resolve).catch(reject);
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode, body: data }));
    }).on("error", reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const doDownload = (downloadUrl) => {
      const file = fs.createWriteStream(dest);
      https.get(downloadUrl, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          try { fs.unlinkSync(dest); } catch {}
          return doDownload(res.headers.location);
        }
        if (res.statusCode !== 200) {
          file.close();
          try { fs.unlinkSync(dest); } catch {}
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        res.pipe(file);
        file.on("finish", () => { file.close(); resolve(); });
      }).on("error", (e) => { file.close(); try { fs.unlinkSync(dest); } catch {} reject(e); });
    };
    doDownload(url);
  });
}

async function convertToWebP(inputPath, outputPath) {
  const sharp = require("sharp");
  await sharp(inputPath)
    .resize(MAX_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);
}

function slugify(text) {
  return text
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractKeywords(question, answers, correctAnswer, quizTitle) {
  const correctText = answers?.find((a) => a.id === correctAnswer)?.text || "";
  // Build a search query from question context + correct answer + quiz title
  const stopWords = new Set([
    "quel", "quelle", "quels", "quelles", "comment", "combien", "qui", "que",
    "est", "sont", "dans", "les", "des", "une", "pour", "par", "sur", "avec",
    "la", "le", "un", "du", "au", "ce", "cette", "son", "sa", "ses",
    "the", "what", "which", "how", "many", "who", "is", "are", "was", "were",
    "has", "have", "does", "did", "can", "will", "from", "this", "that", "and",
    "of", "in", "to", "for", "on", "with", "at", "by", "an", "be", "as",
    "appelle", "nom", "type", "forme", "prend", "permet",
  ]);

  // Extract quiz topic from title (e.g., "Quiz Harry Potter" -> "Harry Potter")
  const topicFromTitle = (quizTitle || "")
    .replace(/quiz\s*/i, "")
    .replace(/[:?!]/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 3)
    .join(" ");

  const words = (correctText + " " + question)
    .replace(/[?!.,;:'"()\[\]{}\u00ab\u00bb]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stopWords.has(w.toLowerCase()));

  // Combine: correct answer terms + topic + question keywords
  const query = words.slice(0, 4).join(" ") + " " + topicFromTitle;
  return query.trim();
}

async function searchBing(query) {
  const url = `https://api.bing.microsoft.com/v7.0/images/search?q=${encodeURIComponent(query)}&count=3&imageType=Photo&size=Medium&safeSearch=Moderate&minWidth=500`;

  const res = await httpsGet(url, { "Ocp-Apim-Subscription-Key": API_KEY });

  if (res.status !== 200) {
    throw new Error(`Bing API error: HTTP ${res.status} - ${res.body.slice(0, 200)}`);
  }

  const data = JSON.parse(res.body);

  if (!data.value || data.value.length === 0) {
    // Retry with shorter query
    const shorter = query.split(" ").slice(0, 3).join(" ");
    if (shorter !== query) {
      await sleep(DELAY_MS);
      const res2 = await httpsGet(
        `https://api.bing.microsoft.com/v7.0/images/search?q=${encodeURIComponent(shorter)}&count=3&imageType=Photo&size=Medium&safeSearch=Moderate&minWidth=500`,
        { "Ocp-Apim-Subscription-Key": API_KEY }
      );
      const data2 = JSON.parse(res2.body);
      return data2.value?.[0] || null;
    }
    return null;
  }

  return data.value[0];
}

// ── Main ──

async function main() {
  console.log("Bing Image Search quiz image fetcher");
  console.log(`Images dir: ${IMAGES_DIR}`);
  console.log(`Options: force=${force}, dryRun=${dryRun}, quiz=${targetQuiz || "all"}\n`);

  const quizFiles = fs.readdirSync(DATA_DIR).filter((f) => f.startsWith("quiz-") && f.endsWith(".ts"));

  let totalProcessed = 0;
  let totalDownloaded = 0;
  let totalSkipped = 0;
  let totalFailed = 0;

  for (const file of quizFiles) {
    const filePath = path.join(DATA_DIR, file);
    const content = fs.readFileSync(filePath, "utf8");

    // Extract quiz slug
    const slugMatch = content.match(/slug:\s*"([^"]+)"/);
    const mainSlug = slugMatch?.[1];
    if (!mainSlug) continue;
    if (targetQuiz && mainSlug !== targetQuiz) continue;

    // Extract quiz title (FR)
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const quizTitle = titleMatch?.[1] || "";

    // Parse questions (first locale only, deduplicated by id)
    const lines = content.split("\n");
    const questions = [];
    const seenIds = new Set();

    for (let i = 0; i < lines.length; i++) {
      const idMatch = lines[i].match(/^\s*id:\s*(\d+),/);
      if (!idMatch) continue;

      const id = parseInt(idMatch[1]);
      if (seenIds.has(id)) continue;
      seenIds.add(id);

      // Find question text
      let question = "";
      for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
        const qMatch = lines[j].match(/question:\s*(?:\n\s*)?"([^"]+)"/);
        if (qMatch) { question = qMatch[1]; break; }
      }
      if (!question) continue;

      // Find answers and correctAnswer
      let answers = [];
      let correctAnswer = "";
      for (let k = i + 1; k < Math.min(i + 25, lines.length); k++) {
        const aMatch = lines[k].match(/\{\s*id:\s*"([^"]+)",\s*text:\s*"([^"]+)"/);
        if (aMatch) answers.push({ id: aMatch[1], text: aMatch[2] });
        const cMatch = lines[k].match(/correctAnswer:\s*"([^"]+)"/);
        if (cMatch) { correctAnswer = cMatch[1]; break; }
      }

      questions.push({ id, question, answers, correctAnswer });
    }

    if (questions.length === 0) continue;

    const prefix = slugify(mainSlug.replace(/^quiz-/, ""));
    console.log(`\n=== ${file} (${mainSlug}) - ${questions.length} questions ===`);

    for (const q of questions) {
      totalProcessed++;
      const imgName = `q-${prefix}-${String(q.id).padStart(2, "0")}.webp`;
      const imgPath = path.join(IMAGES_DIR, imgName);

      if (fs.existsSync(imgPath) && !force) {
        console.log(`  [SKIP] Q${q.id}: ${imgName} (exists)`);
        totalSkipped++;
        continue;
      }

      const keywords = extractKeywords(q.question, q.answers, q.correctAnswer, quizTitle);

      if (dryRun) {
        console.log(`  [DRY] Q${q.id}: "${keywords}" -> ${imgName}`);
        continue;
      }

      try {
        await sleep(DELAY_MS);
        const hit = await searchBing(keywords);

        if (!hit) {
          console.log(`  [FAIL] Q${q.id}: No results for "${keywords}"`);
          totalFailed++;
          continue;
        }

        const imgUrl = hit.contentUrl || hit.thumbnailUrl;
        const tmpPath = imgPath.replace(".webp", ".tmp.jpg");

        await downloadFile(imgUrl, tmpPath);
        await convertToWebP(tmpPath, imgPath);
        try { fs.unlinkSync(tmpPath); } catch {}

        console.log(`  [OK] Q${q.id}: "${keywords}" -> ${imgName}`);
        totalDownloaded++;
      } catch (e) {
        console.log(`  [ERR] Q${q.id}: ${e.message}`);
        totalFailed++;
      }
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Processed: ${totalProcessed} questions`);
  console.log(`Downloaded: ${totalDownloaded} images`);
  console.log(`Skipped: ${totalSkipped} (already exist)`);
  console.log(`Failed: ${totalFailed}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
