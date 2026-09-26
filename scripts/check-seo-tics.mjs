#!/usr/bin/env node
/*
 * Détecteur de tics d'écriture générée pour les textes de src/data/seo-content.
 * Usage : node scripts/check-seo-tics.mjs [fichier.ts|fichier.html ...]
 * Sans argument, contrôle tous les fichiers de src/data/seo-content/{cat,sub}.
 *
 * Il complète la section « Tonalité de rédaction » du CLAUDE.md : chaque règle
 * ici correspond à un tic listé là-bas ou relevé sur quiz-couple.com. Sortie
 * non nulle dès qu'un texte a une alerte bloquante.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

// [regex, message], par langue. Insensible à la casse.
const RULES = {
  all: [
    [/[—–]/, "tiret cadratin ou demi-cadratin"],
    [/\s--\s/, "double tiret"],
  ],
  fr: [
    [/\bet pourtant\b/i, "« et pourtant » (fausse surprise)"],
    [/n'a l'air de rien|a l'air simple|paraît simple|semble simple/i, "« a l'air simple / n'a l'air de rien »"],
    [/soyons honnêtes|disons-le|avouons-le|il faut bien le dire/i, "adresse complice"],
    [/c'est (là )?la vraie question|toute la question|la vraie question/i, "« la vraie question »"],
    [/\btient en (une|un|deux|trois) /i, "« tient en une phrase »"],
    [/\bce n'est pas (seulement |juste )?[^.;]{1,60}, c'est\b/i, "opposition « ce n'est pas X, c'est Y »"],
    [/\bpas de [^,.]{1,30}, pas de\b/i, "fragments « pas de X, pas de Y »"],
    [/\brien à [a-zé]+, rien à\b/i, "triade « rien à X, rien à Y »"],
    [/\b(on pense souvent|on croit souvent|on imagine souvent|contrairement à ce qu'on)/i, "contraste « on croit / en fait »"],
    [/\b(en pratique|en réalité|en vrai|dans les faits),/i, "retournement « en pratique, »"],
    [/\bla (première|deuxième|seconde|troisième)(,| chose| habitude| astuce| étape)/i, "énumération ordinale en prose"],
    [/\bil n'y a pas de (méthode|recette|secret) miracle/i, "« pas de méthode miracle »"],
    [/\bqui n'a jamais\b/i, "question rhétorique « qui n'a jamais »"],
    [/\b(le secret|la clé|la recette) (c'est|est)\b/i, "« la clé, c'est »"],
    [/\bsauf que\b/i, "« sauf que » (oral de chute)"],
    [/\bun cas à part\b|\bà part entière\b/i, "cliché « un cas à part »"],
    [/\b(incontournable|véritable|passionnant|fascinant|captivant|mythique|légendaire|emblématique|plonger|plongez|embarquer|voyage au cœur|de a à z|haletant|culte)\b/i, "vocabulaire de brochure"],
    [/\bque (tu sois|vous soyez) [^.]{1,60} ou\b/i, "« que tu sois X ou Y »"],
    [/\b(idéal|parfait) pour\b/i, "« idéal / parfait pour »"],
    [/\ble tour est joué|rien de tel|à coup sûr|à tous les coups/i, "formule toute faite"],
    [/\bcompliquent? (encore )?les choses\b/i, "cliché « compliquer les choses »"],
    [/\b(c'est|voilà) (justement |d'ailleurs )?(là|ce) qu(e|i) [^.]{0,40}(devient|arrive|se joue|tout se joue)/i, "chute « c'est là que tout se joue »"],
    [/\b(mine de rien|au final|au bout du compte)\b/i, "cheville de conclusion"],
    // « l'univers de Harry Potter » est une tournure de brochure ; « l'âge de l'univers » est de l'astronomie.
    [/\bl'univers (de|du|des|d')\s*[A-ZÀ-Ý]|\bunivers (fascinant|riche|magique|foisonnant|incroyable)/, "« l'univers de X » (brochure)"],
    // Relevés sur les concurrents (L'Étudiant, quiz-culture-generale.com, Quizo, Ouest-France), 26/09/2026
    [/\bbienvenue (sur|dans)\b/i, "« Bienvenue sur » (accroche de gabarit)"],
    [/\b(est|sont) (fait|faits|faite|faites) pour (toi|vous)\b/i, "« fait pour vous »"],
    [/\bamusante? et (interactif|interactive|instructif|instructive|ludique)|\bludique et\b/i, "« amusant et interactif »"],
    [/\balors,? (êtes|es|as|avez)[- ](vous|tu)\b/i, "relance « Alors, êtes-vous prêt ? »"],
    [/\bpas seulement «/i, "« Pas seulement « bonne » ou « mauvaise » »"],
    [/\bqui (changent|change) tout\b/i, "« qui change tout »"],
    [/\bincollable|\bbrillez en société|\bbriller en société|\bstimuler (tes|vos) connaissances|\béveiller (ta|votre) curiosité/i, "formule de quiz générique"],
    [/\btester (tes|vos) connaissances\b.*\btester (tes|vos) connaissances\b/i, "« tester vos connaissances » répété"],
    [/\bse (cultiver|tester) en s'amusant|\bapprendre en s'amusant|\btout en (t'|vous )amusant/i, "« apprendre en s'amusant »"],
    [/\bl'occasion de faire le point\b/i, "accroche de presse"],
    [/\bquel que soit (ton|votre) niveau|\bpour tous les niveaux\b|\bdu débutant à l'expert/i, "« quel que soit votre niveau »"],
    [/\b(un|une) (multitude|pléthore|foule) de\b/i, "« une multitude de »"],
  ],
  en: [
    [/\b(delve|dive into|deep dive|unlock|unleash|embark|journey|realm|(?<!Bayeux )tapestry|testament|treasure trove|look no further|ever wondered|whether you're|whether you are)\b/i, "vocabulaire généré (EN)"],
    [/\b(iconic|legendary|fascinating|captivating|must-try|game-changer|next level)\b/i, "vocabulaire de brochure (EN)"],
    // « the ultimate quiz » oui, « Gohan's Ultimate form » (nom propre) non : sensible à la casse.
    [/\bultimate\b/, "« ultimate » (brochure, EN)"],
    [/\bit'?s not (just |only )?[^.;]{1,60}, it'?s\b/i, "opposition « it's not X, it's Y »"],
    [/\bno [a-z]+, no [a-z]+\b/i, "fragments « no X, no Y »"],
    [/\b(let'?s be honest|here'?s the thing|the real question|truth be told|make no mistake)\b/i, "adresse complice (EN)"],
    [/\b(in reality|in practice|in fact|actually),/i, "retournement (EN)"],
    [/\b(the first|the second|the third) (one|thing|tip|habit|step)\b/i, "énumération ordinale en prose (EN)"],
    [/\bperfect for\b|\bideal for\b/i, "« perfect for »"],
    [/\b(sounds simple|seems simple|looks easy)\b/i, "« sounds simple » (fausse surprise)"],
    [/\bwho hasn'?t\b/i, "question rhétorique (EN)"],
    [/\b((?<!«\s?|")welcome to(?! Bloxburg)|is made for you|fun and (interactive|engaging|educational)|so,? are you ready|put your knowledge to the test|test your knowledge.*test your knowledge|from beginner to expert|whatever your level|for all skill levels|endless (fun|entertainment)|highly addictive)\b/i, "formule de quiz générique (EN)"],
  ],
  es: [
    [/\b(sumérgete|sumergirse|adéntrate|descubre el fascinante|un viaje|apasionante|fascinante|mítico|legendario|emblemático|imprescindible)\b/i, "vocabulario de folleto (ES)"],
    [/\bno es (solo |sólo )?[^.;]{1,60}, es\b/i, "oposición « no es X, es Y »"],
    [/\bsin [a-záéíóú]+, sin [a-záéíóú]+\b/i, "fragmentos « sin X, sin Y »"],
    [/\b(seamos sinceros|la verdadera pregunta|la clave está)\b/i, "fórmula cómplice (ES)"],
    [/\b(en la práctica|en realidad|de hecho),/i, "giro (ES)"],
    [/\bya seas [^.]{1,60} o\b/i, "« ya seas X o Y »"],
    [/\b(ideal|perfecto) para\b/i, "« ideal para »"],
    [/\b(parece sencillo|parece fácil)\b/i, "« parece sencillo »"],
    [/\bquién no ha\b/i, "pregunta retórica (ES)"],
    [/\bel universo de [A-ZÁÉÍÓÚ]/, "« el universo de X » (folleto)"],
    [/\b(bienvenido a|está hecho para ti|divertido e (interactivo|educativo)|entonces,? ¿estás listo|pon a prueba tus conocimientos.*pon a prueba tus conocimientos|para todos los niveles|aprender divirtiéndote)\b/i, "fórmula de quiz genérica (ES)"],
  ],
};

function textOf(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

function paragraphs(html) {
  return [...html.matchAll(/<(p|li|td)[^>]*>([\s\S]*?)<\/\1>/g)].map((m) => textOf(m[2]));
}

function sentences(text) {
  return text.split(/(?<=[.!?…])\s+/).filter((s) => s.split(" ").length > 2);
}

export function check(html, lang) {
  const out = [];
  const text = textOf(html);
  const words = text.split(" ").length;
  for (const [re, msg] of [...RULES.all, ...(RULES[lang] || [])]) {
    const m = text.match(new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g"));
    if (m) out.push({ level: "error", msg: `${msg} : « ${[...new Set(m)].slice(0, 3).join(" / ")} »` });
  }
  // Questions dans la prose (hors titres de FAQ)
  const qs = [...html.matchAll(/<(p|li)[^>]*>([\s\S]*?)<\/\1>/g)].map((m) => textOf(m[2])).flatMap((p) => sentences(p)).filter((s) => /\?\s*$/.test(s) || /\?$/.test(s));
  if (qs.length) out.push({ level: "error", msg: `question rhétorique dans un paragraphe : « ${qs[0].slice(0, 80)} »` });
  // Points d'exclamation
  const excl = (text.match(/!/g) || []).length;
  if (excl > 2) out.push({ level: "error", msg: `${excl} points d'exclamation (2 maximum par page)` });
  // Titres : chevilles et aphorismes
  for (const m of html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g)) {
    const h = textOf(m[1]);
    if (/\b(vraiment|concrètement|en bref|au fait|really|actually|in short|realmente|de verdad|concretamente|en resumen)\b/i.test(h))
      out.push({ level: "error", msg: `cheville dans un titre : « ${h} »` });
    if (/,\s*(mais|but|pero)\s/i.test(h)) out.push({ level: "error", msg: `titre en aphorisme : « ${h} »` });
  }
  // Triades « A, B et C » : tolérées dans une liste d'exemples, pas en série
  const triads = (text.match(/\b[\wÀ-ÿ'-]+(?: [\wÀ-ÿ'-]+){0,3}, [\wÀ-ÿ'-]+(?: [\wÀ-ÿ'-]+){0,3},? (et|and|y|ou|or|o) [\wÀ-ÿ'-]+/g) || []).length;
  const per1000 = (triads / words) * 1000;
  if (per1000 > 6) out.push({ level: "warn", msg: `${triads} énumérations en trois temps (${per1000.toFixed(1)} pour 1 000 mots)` });
  // Connecteurs en tête de phrase répétés
  const starts = {};
  for (const s of sentences(text)) {
    const w = s.split(" ").slice(0, 2).join(" ").toLowerCase().replace(/[,:]/g, "");
    starts[w] = (starts[w] || 0) + 1;
  }
  for (const [w, n] of Object.entries(starts)) if (n >= 4 && !/^(le|la|les|l'|un|une|des|the|a|el|los|las)\b/.test(w)) out.push({ level: "warn", msg: `${n} phrases commencent par « ${w} »` });
  // Uniformité de longueur des phrases
  const lens = sentences(text).map((s) => s.split(" ").length);
  if (lens.length > 10) {
    const mean = lens.reduce((a, b) => a + b, 0) / lens.length;
    const sd = Math.sqrt(lens.reduce((a, b) => a + (b - mean) ** 2, 0) / lens.length);
    if (sd / mean < 0.35) out.push({ level: "warn", msg: `phrases de longueur trop régulière (écart relatif ${(sd / mean).toFixed(2)})` });
  }
  // Mots du tic oral surdosés
  for (const w of ["justement", "d'ailleurs", "du coup", "carrément"]) {
    const n = (text.toLowerCase().match(new RegExp(`\\b${w}\\b`, "g")) || []).length;
    if (n > 2) out.push({ level: "warn", msg: `« ${w} » ${n} fois` });
  }
  return { words, issues: out };
}

function loadContent(file) {
  if (file.endsWith(".html")) {
    const lang = (path.basename(file).match(/^(fr|en|es)-/) || [])[1] || "fr";
    return { [lang]: fs.readFileSync(file, "utf8") };
  }
  const src = fs.readFileSync(file, "utf8");
  const res = {};
  for (const lang of ["fr", "en", "es"]) {
    const m = src.match(new RegExp(`\\b${lang}:\\s*("(?:[^"\\\\]|\\\\.)*")`));
    if (m) res[lang] = JSON.parse(m[1]);
  }
  return res;
}

const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["cat", "sub"].flatMap((d) => {
      const dir = path.join(ROOT, "src/data/seo-content", d);
      return fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".ts")).map((f) => path.join(dir, f)) : [];
    });

let errors = 0;
for (const f of files) {
  for (const [lang, html] of Object.entries(loadContent(f))) {
    const { words, issues } = check(html, lang);
    const e = issues.filter((i) => i.level === "error").length;
    errors += e;
    console.log(`${e ? "✗" : issues.length ? "~" : "✓"} ${path.relative(ROOT, f)} [${lang}] ${words} mots`);
    for (const i of issues) console.log(`    ${i.level === "error" ? "ERREUR" : "attention"} : ${i.msg}`);
  }
}
process.exit(errors ? 1 : 0);
