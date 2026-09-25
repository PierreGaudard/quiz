/**
 * Controle un fichier src/data/quiz-*.ts avant de l'ajouter au catalogue.
 *
 *     npx tsx scripts/check-quiz-file.mts src/data/quiz-basketball.ts
 *
 * Il ne remplace pas la partie jouee dans un navigateur (cf. CLAUDE.md,
 * « Avant de dire qu'un quiz est verifie »), il attrape ce qui se voit dans
 * les donnees : langues manquantes, reponses incoherentes avec le mode,
 * titres hors longueur SEO, images absentes, tics d'ecriture interdits.
 */
import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const file = resolve(process.argv[2]);
const errors: string[] = [];
const warn: string[] = [];
const err = (m: string) => errors.push(m);

const { categoryDefs } = await import(root + "/src/data/categories.ts");
const mod = await import(file);
const quizzes = mod.default as any[];
if (!Array.isArray(quizzes) || !quizzes.length) err("export default doit etre un tableau de TranslatedQuiz non vide");

// slugs deja pris par les autres fichiers
const taken = new Map<string, string>();
for (const f of readdirSync(root + "/src/data").filter((f) => /^quiz-.*\.ts$/.test(f))) {
  if (resolve(root + "/src/data/" + f) === file) continue;
  const m = await import(root + "/src/data/" + f);
  for (const q of m.default) for (const s of [q.slug, ...Object.values(q.slugs || {})]) taken.set(s as string, f);
}

const BANNED = [/—|–/, /\bWizy(?!Quiz)\b/, /Wizyquizz|Wizy Quiz/i, /tient en (une phrase|un mot)/i, /\bvraiment\b|\bconcrètement\b|\ben bref\b/i];
const LOCALES = ["en", "fr", "es"] as const;
const img = (p?: string) => !p || (p.endsWith(".webp") && existsSync(root + "/public" + p));

for (const q of quizzes ?? []) {
  const id = q.slug;
  const cat = categoryDefs.find((c: any) => c.slug === q.categorySlug);
  if (!cat) err(`${id}: categorySlug inconnu ${q.categorySlug}`);
  else if (!cat.translations.fr.subcategories.includes(q.subcategory)) err(`${id}: subcategory "${q.subcategory}" absente des sous-categories FR de ${q.categorySlug}`);
  for (const s of [q.slug, ...Object.values(q.slugs || {})] as string[]) {
    if (taken.has(s)) err(`${id}: slug "${s}" deja utilise dans ${taken.get(s)}`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s)) err(`${id}: slug "${s}" invalide (minuscules, chiffres, tirets, sans accent)`);
  }
  if (!q.slugs || LOCALES.some((l) => !q.slugs[l])) err(`${id}: slugs en/fr/es obligatoires`);
  if (!img(q.coverImage) || !q.coverImage) err(`${id}: coverImage absente ou pas en .webp dans public/`);
  const gt = q.gameType || "qcm";
  const counts = new Set<number>();
  for (const l of LOCALES) {
    const c = q.translations?.[l];
    if (!c) { err(`${id}: traduction ${l} manquante`); continue; }
    const pageTitle = `${c.title} - WizyQuiz`;
    if (pageTitle.length < 30 || pageTitle.length > 60) err(`${id}/${l}: title de page ${pageTitle.length} car. (30-60) : "${pageTitle}"`);
    if (c.description.length < 70 || c.description.length > 155) err(`${id}/${l}: description ${c.description.length} car. (70-155)`);
    counts.add(c.questions.length);
    // 20 questions dans tous les modes, sur le modele de quiz-couple (decision
    // de Pierre, 25/09/2026). Le chrono en avait deja besoin : il s'arrete
    // quand toutes les questions sont jouees.
    const minQ = 20;
    if (c.questions.length < minQ) err(`${id}/${l}: ${c.questions.length} questions (${minQ} minimum en ${gt})`);
    const texts = [c.title, c.description];
    c.questions.forEach((qq: any, i: number) => {
      const where = `${id}/${l}/q${i + 1}`;
      texts.push(qq.question, qq.explanation || "", qq.hint || "", ...qq.answers.map((a: any) => a.text));
      if (!qq.explanation) err(`${where}: explication manquante`);
      if (!img(qq.image)) err(`${where}: image ${qq.image} absente ou pas en .webp`);
      if (gt === "estimation") {
        if (typeof qq.correctValue !== "number") err(`${where}: correctValue numerique obligatoire en estimation`);
      } else if (gt === "ordre") {
        if (!Array.isArray(qq.correctOrder) || qq.correctOrder.length < 3) err(`${where}: correctOrder (3 elements ou plus) obligatoire en ordre`);
        else if (qq.correctOrder.some((x: string) => !qq.answers.some((a: any) => a.id === x))) err(`${where}: correctOrder cite un id absent des answers`);
      } else {
        const need = gt === "duel" || gt === "vrai-faux" ? 2 : 4;
        if (qq.answers.length !== need) err(`${where}: ${qq.answers.length} reponses, ${need} attendues en ${gt}`);
        if (!qq.answers.some((a: any) => a.id === qq.correctAnswer)) err(`${where}: correctAnswer "${qq.correctAnswer}" absent des answers`);
        if (new Set(qq.answers.map((a: any) => a.id)).size !== qq.answers.length) err(`${where}: ids de reponses en double`);
      }
    });
    for (const t of texts) for (const b of BANNED) if (b.test(t)) err(`${id}/${l}: motif interdit ${b} dans "${t.slice(0, 60)}"`);
    if (l !== "en") {
      const all = texts.join(" ");
      if (!/[À-ÿ]/.test(all)) err(`${id}/${l}: aucun accent dans tout le quiz, textes probablement non accentues`);
      if (l === "es" && c.questions.some((qq: any) => qq.question.trim().endsWith("?") && !qq.question.includes("¿"))) err(`${id}/es: question sans « ¿ »`);
      if (l === "fr" && /\S[?!:]/.test(all.replace(/https?:\S+|\d:\d|[A-Z]\w*:\w/g, ""))) warn.push(`${id}/fr: ponctuation ? ! : sans espace avant, a verifier`);
    }
  }
  if (counts.size > 1) err(`${id}: nombre de questions different selon la langue`);
}
for (const w of warn) console.log("avertissement:", w);
if (errors.length) { for (const e of errors) console.log("ERREUR:", e); console.log(`${errors.length} erreur(s)`); process.exit(1); }
console.log(`OK ${quizzes.length} quiz dans ${file.split("/").pop()}`);
