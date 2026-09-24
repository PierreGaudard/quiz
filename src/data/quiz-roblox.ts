import type { TranslatedQuiz } from "./types";

/**
 * Quiz Roblox en mode duel : l'histoire de la plateforme (DynaBlocks, 2006,
 * l'entrée en Bourse de 2021) et ce que connaît tout joueur (Robux, Roblox
 * Studio, Adopt Me!).
 *
 * Le duel n'affiche que deux propositions (cf. quiz-marvel.ts), chaque
 * question en compte donc exactement deux. La question sur l'abonnement vise
 * le Builders Club de 2007, pas l'offre du moment, qui a changé deux fois
 * depuis (Premium en 2019, Roblox Plus en 2026).
 */
export const quizRoblox: TranslatedQuiz = {
  slug: "quiz-roblox",
  slugs: { en: "roblox-quiz", fr: "quiz-roblox", es: "quiz-roblox" },
  categorySlug: "jeux-video",
  subcategory: "Roblox",
  difficulty: "easy",
  coverImage: "/images/sub-roblox.webp",
  gameType: "duel",
  playCount: 7800,
  translations: {
    fr: {
      title: "Duel Roblox : lequel des deux ?",
      description:
        "Dix duels sur Roblox, son histoire, ses Robux et ses jeux les plus connus. Deux propositions à chaque fois, une seule est la bonne.",
      questions: [
        {
          id: 1,
          question: "En quelle année Roblox est-il sorti ?",
          answers: [
            { id: "a", text: "2006" },
            { id: "b", text: "2012" },
          ],
          correctAnswer: "a",
          explanation:
            "En 2006, le 1er septembre. Roblox est donc plus vieux que Minecraft, sorti en 2009.",
        },
        {
          id: 2,
          question: "Qui a cofondé Roblox ?",
          answers: [
            { id: "a", text: "Markus Persson" },
            { id: "b", text: "David Baszucki" },
          ],
          correctAnswer: "b",
          explanation:
            "David Baszucki, avec Erik Cassel. Markus Persson, surnommé Notch, c'est le créateur de Minecraft.",
        },
        {
          id: 3,
          image: "/images/q-roblox-03.webp",
          question: "Comment s'appelle la monnaie de Roblox ?",
          answers: [
            { id: "a", text: "Les Robux" },
            { id: "b", text: "Les V-Bucks" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Robux. Les V-Bucks, c'est la monnaie de Fortnite.",
        },
        {
          id: 4,
          question: "Quel langage sert à programmer les jeux Roblox ?",
          answers: [
            { id: "a", text: "Python" },
            { id: "b", text: "Luau, dérivé de Lua" },
          ],
          correctAnswer: "b",
          explanation:
            "Luau, une version de Lua faite par Roblox. Le code de Luau est d'ailleurs ouvert à tous depuis 2021.",
        },
        {
          id: 5,
          image: "/images/q-roblox-05.webp",
          question: "Avec quel outil crée-t-on un jeu sur Roblox ?",
          answers: [
            { id: "a", text: "Roblox Studio" },
            { id: "b", text: "Unreal Engine" },
          ],
          correctAnswer: "a",
          explanation:
            "Roblox Studio, l'éditeur gratuit de la plateforme. Unreal Engine est un moteur d'Epic Games qui n'a rien à voir avec Roblox.",
        },
        {
          id: 6,
          image: "/images/q-roblox-06.webp",
          question: "Lequel de ces deux jeux est un jeu Roblox ?",
          answers: [
            { id: "a", text: "Fall Guys" },
            { id: "b", text: "Adopt Me!" },
          ],
          correctAnswer: "b",
          explanation:
            "Adopt Me!, où l'on adopte et élève des animaux. Il a battu un record avec plus de 1,6 million de joueurs connectés en même temps. Fall Guys est un jeu à part, sans lien avec Roblox.",
        },
        {
          id: 7,
          question: "Comment s'appelait Roblox pendant son développement ?",
          answers: [
            { id: "a", text: "DynaBlocks" },
            { id: "b", text: "Blockland" },
          ],
          correctAnswer: "a",
          explanation:
            "DynaBlocks. Le nom Roblox, contraction de « robots » et « blocks », est arrivé avant la sortie. Blockland est un autre jeu de construction, sans rapport.",
        },
        {
          id: 8,
          question: "Comment s'appelait l'abonnement payant lancé par Roblox en 2007 ?",
          answers: [
            { id: "a", text: "Le Builders Club" },
            { id: "b", text: "Le Gold Club" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Builders Club. Il a été remplacé par Roblox Premium en 2019.",
        },
        {
          id: 9,
          image: "/images/q-roblox-09.webp",
          question: "Sur quelle Bourse Roblox est-il entré en 2021 ?",
          answers: [
            { id: "a", text: "Le Nasdaq" },
            { id: "b", text: "Le New York Stock Exchange" },
          ],
          correctAnswer: "b",
          explanation:
            "Le New York Stock Exchange, le 10 mars 2021, sous le code RBLX. Le premier jour, l'entreprise valait déjà environ 38 milliards de dollars.",
        },
        {
          id: 10,
          question: "Dans quelle ville se trouve le siège de Roblox ?",
          answers: [
            { id: "a", text: "San Mateo, en Californie" },
            { id: "b", text: "Seattle, dans l'État de Washington" },
          ],
          correctAnswer: "a",
          explanation:
            "San Mateo, au sud de San Francisco, en plein dans la Silicon Valley.",
        },
      ],
    },
    en: {
      title: "Roblox Duel: which of the two?",
      description:
        "Ten duels on Roblox, its history, its Robux and its best known games. Two options every time, and only one is right.",
      questions: [
        {
          id: 1,
          question: "In what year did Roblox come out?",
          answers: [
            { id: "a", text: "2006" },
            { id: "b", text: "2012" },
          ],
          correctAnswer: "a",
          explanation:
            "In 2006, on September 1. So Roblox is older than Minecraft, which came out in 2009.",
        },
        {
          id: 2,
          question: "Who co-founded Roblox?",
          answers: [
            { id: "a", text: "Markus Persson" },
            { id: "b", text: "David Baszucki" },
          ],
          correctAnswer: "b",
          explanation:
            "David Baszucki, together with Erik Cassel. Markus Persson, known as Notch, is the creator of Minecraft.",
        },
        {
          id: 3,
          image: "/images/q-roblox-03.webp",
          question: "What is the currency of Roblox called?",
          answers: [
            { id: "a", text: "Robux" },
            { id: "b", text: "V-Bucks" },
          ],
          correctAnswer: "a",
          explanation:
            "Robux. V-Bucks are the Fortnite currency.",
        },
        {
          id: 4,
          question: "Which language do you use to code Roblox games?",
          answers: [
            { id: "a", text: "Python" },
            { id: "b", text: "Luau, based on Lua" },
          ],
          correctAnswer: "b",
          explanation:
            "Luau, a version of Lua made by Roblox. Its code has been open source since 2021.",
        },
        {
          id: 5,
          image: "/images/q-roblox-05.webp",
          question: "Which tool do you use to build a game on Roblox?",
          answers: [
            { id: "a", text: "Roblox Studio" },
            { id: "b", text: "Unreal Engine" },
          ],
          correctAnswer: "a",
          explanation:
            "Roblox Studio, the free editor of the platform. Unreal Engine is an Epic Games engine with no link to Roblox.",
        },
        {
          id: 6,
          image: "/images/q-roblox-06.webp",
          question: "Which of these two is a Roblox game?",
          answers: [
            { id: "a", text: "Fall Guys" },
            { id: "b", text: "Adopt Me!" },
          ],
          correctAnswer: "b",
          explanation:
            "Adopt Me!, where you adopt and raise pets. It set a record with more than 1.6 million players online at once. Fall Guys is a separate game with no link to Roblox.",
        },
        {
          id: 7,
          question: "What was Roblox called while it was being developed?",
          answers: [
            { id: "a", text: "DynaBlocks" },
            { id: "b", text: "Blockland" },
          ],
          correctAnswer: "a",
          explanation:
            "DynaBlocks. The name Roblox, a mix of \"robots\" and \"blocks\", came before the launch. Blockland is a different building game.",
        },
        {
          id: 8,
          question: "What was the paid membership Roblox launched in 2007 called?",
          answers: [
            { id: "a", text: "Builders Club" },
            { id: "b", text: "Gold Club" },
          ],
          correctAnswer: "a",
          explanation:
            "Builders Club. Roblox Premium replaced it in 2019.",
        },
        {
          id: 9,
          image: "/images/q-roblox-09.webp",
          question: "On which stock exchange did Roblox list in 2021?",
          answers: [
            { id: "a", text: "Nasdaq" },
            { id: "b", text: "New York Stock Exchange" },
          ],
          correctAnswer: "b",
          explanation:
            "The New York Stock Exchange, on March 10, 2021, under the ticker RBLX. On day one the company was worth about $38 billion.",
        },
        {
          id: 10,
          question: "In which city is Roblox headquartered?",
          answers: [
            { id: "a", text: "San Mateo, California" },
            { id: "b", text: "Seattle, Washington" },
          ],
          correctAnswer: "a",
          explanation:
            "San Mateo, just south of San Francisco, right in Silicon Valley.",
        },
      ],
    },
    es: {
      title: "Duelo Roblox: ¿cuál de los dos?",
      description:
        "Diez duelos sobre Roblox, su historia, sus Robux y sus juegos más conocidos. Dos opciones cada vez y solo una es la buena.",
      questions: [
        {
          id: 1,
          question: "¿En qué año salió Roblox?",
          answers: [
            { id: "a", text: "2006" },
            { id: "b", text: "2012" },
          ],
          correctAnswer: "a",
          explanation:
            "En 2006, el 1 de septiembre. Así que Roblox es más antiguo que Minecraft, que salió en 2009.",
        },
        {
          id: 2,
          question: "¿Quién cofundó Roblox?",
          answers: [
            { id: "a", text: "Markus Persson" },
            { id: "b", text: "David Baszucki" },
          ],
          correctAnswer: "b",
          explanation:
            "David Baszucki, junto a Erik Cassel. Markus Persson, conocido como Notch, es el creador de Minecraft.",
        },
        {
          id: 3,
          image: "/images/q-roblox-03.webp",
          question: "¿Cómo se llama la moneda de Roblox?",
          answers: [
            { id: "a", text: "Robux" },
            { id: "b", text: "Pavos (V-Bucks)" },
          ],
          correctAnswer: "a",
          explanation:
            "Robux. Los pavos o V-Bucks son la moneda de Fortnite.",
        },
        {
          id: 4,
          question: "¿Qué lenguaje se usa para programar juegos de Roblox?",
          answers: [
            { id: "a", text: "Python" },
            { id: "b", text: "Luau, derivado de Lua" },
          ],
          correctAnswer: "b",
          explanation:
            "Luau, una versión de Lua hecha por Roblox. Su código es abierto desde 2021.",
        },
        {
          id: 5,
          image: "/images/q-roblox-05.webp",
          question: "¿Con qué herramienta se crea un juego en Roblox?",
          answers: [
            { id: "a", text: "Roblox Studio" },
            { id: "b", text: "Unreal Engine" },
          ],
          correctAnswer: "a",
          explanation:
            "Roblox Studio, el editor gratuito de la plataforma. Unreal Engine es un motor de Epic Games que no tiene nada que ver con Roblox.",
        },
        {
          id: 6,
          image: "/images/q-roblox-06.webp",
          question: "¿Cuál de estos dos es un juego de Roblox?",
          answers: [
            { id: "a", text: "Fall Guys" },
            { id: "b", text: "Adopt Me!" },
          ],
          correctAnswer: "b",
          explanation:
            "Adopt Me!, donde adoptas y cuidas mascotas. Batió un récord con más de 1,6 millones de jugadores conectados a la vez. Fall Guys es un juego aparte, sin relación con Roblox.",
        },
        {
          id: 7,
          question: "¿Cómo se llamaba Roblox mientras se desarrollaba?",
          answers: [
            { id: "a", text: "DynaBlocks" },
            { id: "b", text: "Blockland" },
          ],
          correctAnswer: "a",
          explanation:
            "DynaBlocks. El nombre Roblox, una mezcla de «robots» y «blocks», llegó antes del lanzamiento. Blockland es otro juego de construcción distinto.",
        },
        {
          id: 8,
          question: "¿Cómo se llamaba la suscripción de pago que Roblox lanzó en 2007?",
          answers: [
            { id: "a", text: "Builders Club" },
            { id: "b", text: "Gold Club" },
          ],
          correctAnswer: "a",
          explanation:
            "Builders Club. En 2019 la sustituyó Roblox Premium.",
        },
        {
          id: 9,
          image: "/images/q-roblox-09.webp",
          question: "¿En qué bolsa empezó a cotizar Roblox en 2021?",
          answers: [
            { id: "a", text: "El Nasdaq" },
            { id: "b", text: "La Bolsa de Nueva York (NYSE)" },
          ],
          correctAnswer: "b",
          explanation:
            "La Bolsa de Nueva York, el 10 de marzo de 2021, con el código RBLX. El primer día la empresa ya valía unos 38 000 millones de dólares.",
        },
        {
          id: 10,
          question: "¿En qué ciudad está la sede de Roblox?",
          answers: [
            { id: "a", text: "San Mateo, California" },
            { id: "b", text: "Seattle, Washington" },
          ],
          correctAnswer: "a",
          explanation:
            "San Mateo, al sur de San Francisco, en pleno Silicon Valley.",
        },
      ],
    },
  },
};

export default [quizRoblox] as TranslatedQuiz[];
