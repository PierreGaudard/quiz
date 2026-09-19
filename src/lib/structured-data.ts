/**
 * Donnees structurees des pages de quiz.
 *
 * Centralise ici et pas dans les pages : le bloc JSON-LD etait recopie dans les
 * trois `[quiz].astro` (en, fr, es) et avait deja divergé — `inLanguage` etait
 * present en fr et es, absent en en. Une seule source evite que la prochaine
 * propriete ajoutee ne manque dans une langue.
 *
 * Le balisage suit le rich result « Education Q&A » de Google : chaque question
 * du quiz est emise en `Question` avec sa bonne reponse en `acceptedAnswer` et
 * les distracteurs en `suggestedAnswer`. Sans `hasPart`, un `Quiz` n'est
 * eligible a rien : il ne dit que le titre de la page.
 */
import type { QuizData, QuizQuestion } from "../data/types";
import type { Locale } from "../i18n/config";

const ORG_NAME = "WizyQuiz";

/** Types de jeu dont les questions se balisent en QCM. */
const MULTIPLE_CHOICE_GAME_TYPES = new Set(["qcm", "vrai-faux", "chrono", "duel"]);

/**
 * Une question ne se balise que si elle a des reponses proposees et une bonne
 * reponse identifiable. Les modes `estimation` (valeur numerique) et `ordre`
 * (suite a reconstituer) ne sont pas des QCM : les baliser en « Multiple
 * choice » serait une declaration fausse.
 */
function toQuestionNode(question: QuizQuestion, position: number) {
  const answers = question.answers ?? [];
  if (answers.length < 2 || !question.correctAnswer) return null;

  const correct = answers.find((a) => a.id === question.correctAnswer);
  if (!correct) return null;

  const acceptedAnswer: Record<string, unknown> = {
    "@type": "Answer",
    text: correct.text,
  };
  // L'explication de la reponse est ce que Google affiche sous la bonne
  // reponse dans le resultat enrichi.
  if (question.explanation) acceptedAnswer.comment = { "@type": "Comment", text: question.explanation };

  const suggested = answers
    .filter((a) => a.id !== question.correctAnswer)
    .map((a, i) => ({ "@type": "Answer", position: i, text: a.text }));

  return {
    "@type": "Question",
    position,
    eduQuestionType: "Multiple choice",
    learningResourceType: "Practice problem",
    name: question.question,
    text: question.question,
    acceptedAnswer,
    ...(suggested.length > 0 ? { suggestedAnswer: suggested } : {}),
  };
}

/** Devise de l'offre : l'anglais du site cible les Etats-Unis. */
const CURRENCY_BY_LOCALE: Record<string, string> = { en: "USD", fr: "EUR", es: "EUR" };

export function buildQuizStructuredData(opts: {
  quiz: QuizData;
  locale: Locale;
  siteUrl: string;
  pageUrl: string;
  categoryName?: string;
}): Record<string, unknown>[] {
  const { quiz, locale, siteUrl, pageUrl, categoryName } = opts;

  const hasPart = MULTIPLE_CHOICE_GAME_TYPES.has(quiz.gameType ?? "qcm")
    ? (quiz.questions ?? [])
        .map((q, i) => toQuestionNode(q, i + 1))
        .filter((n): n is NonNullable<typeof n> => n !== null)
    : [];

  const quizNode: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: quiz.title,
    description: quiz.description,
    url: pageUrl,
    inLanguage: locale,
    educationalLevel: quiz.difficulty,
    learningResourceType: "Quiz",
    interactivityType: "active",
    isAccessibleForFree: true,
    about: { "@type": "Thing", name: categoryName ?? quiz.category },
    provider: { "@type": "Organization", name: ORG_NAME, url: siteUrl },
    numberOfQuestions: quiz.questions?.length ?? 0,
    typicalAgeRange: "12-",
  };
  if (hasPart.length > 0) quizNode.hasPart = hasPart;

  // Declarer le prix a zero est ce qui fait apparaitre la mention « gratuit »
  // sur le resultat de recherche. `isAccessibleForFree` dit la meme chose que
  // l'offre : Google lit l'une ou l'autre.
  const appNode: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${pageUrl}#application`,
    name: quiz.title,
    url: pageUrl,
    inLanguage: locale,
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: CURRENCY_BY_LOCALE[locale] ?? "USD" },
  };

  // Pas d'aggregateRating : le site n'a pas encore d'avis reels, et une note
  // inventee est une faute que Google sanctionne.

  return [quizNode, appNode];
}

/**
 * Donnees structurees d'une page de mini-jeu.
 *
 * Un mini-jeu n'est pas un quiz : il n'a pas de liste de questions fixe, donc
 * rien a mettre en `hasPart`, et le balisage « Education Q&A » ne s'applique
 * pas. Ce qu'il a, en revanche, c'est une page de regles et une FAQ, et c'est
 * la FAQ qui peut ressortir en resultat enrichi.
 *
 * Le fil d'Ariane est emis ici plutot que dans les trois pages de langue,
 * pour la meme raison que le reste du fichier : recopie trois fois, il
 * divergerait.
 */
export function buildGameStructuredData(opts: {
  name: string;
  description: string;
  locale: Locale;
  siteUrl: string;
  pageUrl: string;
  hubUrl: string;
  hubName: string;
  faq: { q: string; a: string }[];
}): Record<string, unknown>[] {
  const { name, description, locale, siteUrl, pageUrl, hubUrl, hubName, faq } = opts;

  const gameNode: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Game",
    name,
    description,
    url: pageUrl,
    inLanguage: locale,
    genre: "Trivia",
    isAccessibleForFree: true,
    numberOfPlayers: { "@type": "QuantitativeValue", minValue: 1 },
    publisher: { "@type": "Organization", name: ORG_NAME, url: siteUrl },
  };

  const appNode: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${pageUrl}#application`,
    name,
    url: pageUrl,
    inLanguage: locale,
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: CURRENCY_BY_LOCALE[locale] ?? "USD" },
  };

  const breadcrumb: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ORG_NAME, item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: hubName, item: hubUrl },
      { "@type": "ListItem", position: 3, name, item: pageUrl },
    ],
  };

  const nodes: Record<string, unknown>[] = [gameNode, appNode, breadcrumb];

  if (faq.length > 0) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return nodes;
}

/** Donnees structurees du hub des minis-jeux. */
export function buildGamesHubStructuredData(opts: {
  name: string;
  description: string;
  locale: Locale;
  siteUrl: string;
  pageUrl: string;
  games: { name: string; url: string }[];
}): Record<string, unknown>[] {
  const { name, description, locale, siteUrl, pageUrl, games } = opts;
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name,
      description,
      url: pageUrl,
      inLanguage: locale,
      isPartOf: { "@type": "WebSite", name: ORG_NAME, url: `${siteUrl}/` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: games.length,
        itemListElement: games.map((g, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: g.name,
          url: g.url,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ORG_NAME, item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name, item: pageUrl },
      ],
    },
  ];
}
