import type { TranslatedQuiz } from "./types";

/**
 * Quiz Call of Duty en mode ordre : dix suites de quatre elements a ranger.
 *
 * Le moteur melange les propositions (OrdrePlayer), seul `correctOrder` compte.
 * La plupart des questions portent sur l'ordre de sortie, avec deux variantes
 * pour casser le reflexe : l'epoque ou se passe l'histoire (question 6) et
 * les dates de creation des studios et de l'entreprise (questions 7 et 8).
 */
export const quizCallOfDuty: TranslatedQuiz = {
  slug: "quiz-call-of-duty",
  slugs: { en: "call-of-duty-quiz", fr: "quiz-call-of-duty", es: "quiz-call-of-duty" },
  categorySlug: "jeux-video",
  subcategory: "Call of Duty",
  difficulty: "hard",
  coverImage: "/images/sub-call-of-duty.webp",
  gameType: "ordre",
  playCount: 5600,
  translations: {
    fr: {
      title: "Call of Duty dans l'ordre",
      description:
        "Dix suites Call of Duty à remettre dans l'ordre, de 2003 à Black Ops 6. Lis bien la question : parfois c'est la sortie, parfois l'époque du jeu.",
      questions: [
        {
          id: 1,
          image: "/images/q-call-of-duty-01.webp",
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Call of Duty" },
            { id: "b", text: "Call of Duty 2" },
            { id: "c", text: "Call of Duty 4: Modern Warfare" },
            { id: "d", text: "Call of Duty: World at War" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2003, 2005, 2007, puis 2008. Les trois premiers épisodes se passaient pendant la Seconde Guerre mondiale, et Modern Warfare a été le premier à passer à une guerre moderne.",
        },
        {
          id: 2,
          image: "/images/q-call-of-duty-02.webp",
          question: "Remets ces Modern Warfare dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Call of Duty: Modern Warfare (le reboot)" },
            { id: "b", text: "Call of Duty 4: Modern Warfare" },
            { id: "c", text: "Modern Warfare 3" },
            { id: "d", text: "Modern Warfare 2" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Call of Duty 4 en 2007, Modern Warfare 2 en 2009, Modern Warfare 3 en 2011, puis le reboot qui reprend simplement le nom Modern Warfare en 2019.",
        },
        {
          id: 3,
          question: "Remets ces Black Ops dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Black Ops III" },
            { id: "b", text: "Black Ops" },
            { id: "c", text: "Black Ops 4" },
            { id: "d", text: "Black Ops II" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "2010, 2012, 2015, puis 2018. Les quatre sont développés par Treyarch, et Black Ops 4 est le premier sans campagne solo.",
        },
        {
          id: 4,
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Call of Duty: WWII" },
            { id: "b", text: "Call of Duty: Ghosts" },
            { id: "c", text: "Call of Duty: Infinite Warfare" },
            { id: "d", text: "Call of Duty: Advanced Warfare" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Ghosts en 2013, Advanced Warfare en 2014, Infinite Warfare en 2016, puis WWII en 2017, qui ramène la série en 1944 après plusieurs jeux dans le futur.",
        },
        {
          id: 5,
          image: "/images/q-call-of-duty-05.webp",
          question: "Remets ces jeux récents dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Modern Warfare III" },
            { id: "b", text: "Black Ops 6" },
            { id: "c", text: "Vanguard" },
            { id: "d", text: "Modern Warfare II" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Vanguard en 2021, Modern Warfare II en 2022, Modern Warfare III en 2023, puis Black Ops 6 en 2024.",
        },
        {
          id: 6,
          image: "/images/q-call-of-duty-06.webp",
          question: "Range ces jeux selon l'époque où se passe leur histoire, de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Black Ops Cold War" },
            { id: "b", text: "Advanced Warfare" },
            { id: "c", text: "Call of Duty: WWII" },
            { id: "d", text: "Black Ops" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "WWII commence en 1944 avec le Débarquement, Black Ops se passe dans les années 1960, Black Ops Cold War en 1981, et Advanced Warfare en 2054.",
        },
        {
          id: 7,
          question: "Range ces studios qui ont travaillé sur Call of Duty selon leur année de création.",
          answers: [
            { id: "a", text: "Infinity Ward" },
            { id: "b", text: "Sledgehammer Games" },
            { id: "c", text: "Raven Software" },
            { id: "d", text: "Treyarch" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Raven Software en 1990, Treyarch en 1996, Infinity Ward en 2002, et Sledgehammer Games en 2009. C'est Infinity Ward qui a créé le premier Call of Duty.",
        },
        {
          id: 8,
          question: "Remets ces événements dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "Microsoft rachète Activision Blizzard" },
            { id: "b", text: "Activision est fondée" },
            { id: "c", text: "Activision fusionne avec Vivendi Games et devient Activision Blizzard" },
            { id: "d", text: "Le premier Call of Duty sort" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Activision est fondée en 1979, le premier Call of Duty sort en 2003, Activision Blizzard naît en 2008, et Microsoft finalise le rachat en octobre 2023.",
        },
        {
          id: 9,
          question: "Remets ces sorties dans l'ordre.",
          answers: [
            { id: "a", text: "Black Ops Cold War" },
            { id: "b", text: "Warzone" },
            { id: "c", text: "Vanguard" },
            { id: "d", text: "Modern Warfare (2019)" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Modern Warfare en octobre 2019, puis Warzone, le battle royale gratuit, en mars 2020. Black Ops Cold War suit en novembre 2020, et Vanguard en 2021.",
        },
        {
          id: 10,
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Black Ops" },
            { id: "b", text: "Modern Warfare 3" },
            { id: "c", text: "World at War" },
            { id: "d", text: "Modern Warfare 2" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "World at War en 2008, Modern Warfare 2 en 2009, Black Ops en 2010, et Modern Warfare 3 en 2011. Un jeu par an, du coup, en alternant Treyarch et Infinity Ward.",
        },
      ],
    },
    en: {
      title: "Call of Duty in the right order",
      description:
        "Ten sets of Call of Duty games to put in order, from 2003 to Black Ops 6. Read carefully: sometimes it's release date, sometimes the game's era.",
      questions: [
        {
          id: 1,
          image: "/images/q-call-of-duty-01.webp",
          question: "Put these games in release order.",
          answers: [
            { id: "a", text: "Call of Duty" },
            { id: "b", text: "Call of Duty 2" },
            { id: "c", text: "Call of Duty 4: Modern Warfare" },
            { id: "d", text: "Call of Duty: World at War" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2003, 2005, 2007, then 2008. The first three games were set in World War II, and Modern Warfare was the first to move to a modern war.",
        },
        {
          id: 2,
          image: "/images/q-call-of-duty-02.webp",
          question: "Put these Modern Warfare games in release order.",
          answers: [
            { id: "a", text: "Call of Duty: Modern Warfare (the reboot)" },
            { id: "b", text: "Call of Duty 4: Modern Warfare" },
            { id: "c", text: "Modern Warfare 3" },
            { id: "d", text: "Modern Warfare 2" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Call of Duty 4 in 2007, Modern Warfare 2 in 2009, Modern Warfare 3 in 2011, then the reboot simply called Modern Warfare in 2019.",
        },
        {
          id: 3,
          question: "Put these Black Ops games in release order.",
          answers: [
            { id: "a", text: "Black Ops III" },
            { id: "b", text: "Black Ops" },
            { id: "c", text: "Black Ops 4" },
            { id: "d", text: "Black Ops II" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "2010, 2012, 2015, then 2018. All four were made by Treyarch, and Black Ops 4 was the first one with no single-player campaign.",
        },
        {
          id: 4,
          question: "Put these games in release order.",
          answers: [
            { id: "a", text: "Call of Duty: WWII" },
            { id: "b", text: "Call of Duty: Ghosts" },
            { id: "c", text: "Call of Duty: Infinite Warfare" },
            { id: "d", text: "Call of Duty: Advanced Warfare" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Ghosts in 2013, Advanced Warfare in 2014, Infinite Warfare in 2016, then WWII in 2017, which took the series back to 1944 after several games set in the future.",
        },
        {
          id: 5,
          image: "/images/q-call-of-duty-05.webp",
          question: "Put these recent games in release order.",
          answers: [
            { id: "a", text: "Modern Warfare III" },
            { id: "b", text: "Black Ops 6" },
            { id: "c", text: "Vanguard" },
            { id: "d", text: "Modern Warfare II" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Vanguard in 2021, Modern Warfare II in 2022, Modern Warfare III in 2023, then Black Ops 6 in 2024.",
        },
        {
          id: 6,
          image: "/images/q-call-of-duty-06.webp",
          question: "Sort these games by when their story takes place, from earliest to latest.",
          answers: [
            { id: "a", text: "Black Ops Cold War" },
            { id: "b", text: "Advanced Warfare" },
            { id: "c", text: "Call of Duty: WWII" },
            { id: "d", text: "Black Ops" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "WWII starts in 1944 with D-Day, Black Ops is set in the 1960s, Black Ops Cold War in 1981, and Advanced Warfare in 2054.",
        },
        {
          id: 7,
          question: "Sort these Call of Duty studios by the year they were founded.",
          answers: [
            { id: "a", text: "Infinity Ward" },
            { id: "b", text: "Sledgehammer Games" },
            { id: "c", text: "Raven Software" },
            { id: "d", text: "Treyarch" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Raven Software in 1990, Treyarch in 1996, Infinity Ward in 2002, and Sledgehammer Games in 2009. Infinity Ward made the very first Call of Duty.",
        },
        {
          id: 8,
          question: "Put these events in chronological order.",
          answers: [
            { id: "a", text: "Microsoft buys Activision Blizzard" },
            { id: "b", text: "Activision is founded" },
            { id: "c", text: "Activision merges with Vivendi Games and becomes Activision Blizzard" },
            { id: "d", text: "The first Call of Duty comes out" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Activision was founded in 1979, the first Call of Duty came out in 2003, Activision Blizzard was formed in 2008, and Microsoft closed the deal in October 2023.",
        },
        {
          id: 9,
          question: "Put these releases in order.",
          answers: [
            { id: "a", text: "Black Ops Cold War" },
            { id: "b", text: "Warzone" },
            { id: "c", text: "Vanguard" },
            { id: "d", text: "Modern Warfare (2019)" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Modern Warfare in October 2019, then Warzone, the free battle royale, in March 2020. Black Ops Cold War followed in November 2020, and Vanguard in 2021.",
        },
        {
          id: 10,
          question: "Put these games in release order.",
          answers: [
            { id: "a", text: "Black Ops" },
            { id: "b", text: "Modern Warfare 3" },
            { id: "c", text: "World at War" },
            { id: "d", text: "Modern Warfare 2" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "World at War in 2008, Modern Warfare 2 in 2009, Black Ops in 2010, and Modern Warfare 3 in 2011. One game a year, with Treyarch and Infinity Ward taking turns.",
        },
      ],
    },
    es: {
      title: "Call of Duty en orden",
      description:
        "Diez series de Call of Duty para ordenar, de 2003 a Black Ops 6. Lee bien la pregunta: a veces es la fecha de salida y a veces la época del juego.",
      questions: [
        {
          id: 1,
          image: "/images/q-call-of-duty-01.webp",
          question: "Ordena estos juegos por fecha de salida.",
          answers: [
            { id: "a", text: "Call of Duty" },
            { id: "b", text: "Call of Duty 2" },
            { id: "c", text: "Call of Duty 4: Modern Warfare" },
            { id: "d", text: "Call of Duty: World at War" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2003, 2005, 2007 y luego 2008. Las tres primeras entregas se ambientaban en la Segunda Guerra Mundial, y Modern Warfare fue la primera en pasar a una guerra moderna.",
        },
        {
          id: 2,
          image: "/images/q-call-of-duty-02.webp",
          question: "Ordena estos Modern Warfare por fecha de salida.",
          answers: [
            { id: "a", text: "Call of Duty: Modern Warfare (el reinicio)" },
            { id: "b", text: "Call of Duty 4: Modern Warfare" },
            { id: "c", text: "Modern Warfare 3" },
            { id: "d", text: "Modern Warfare 2" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Call of Duty 4 en 2007, Modern Warfare 2 en 2009, Modern Warfare 3 en 2011 y luego el reinicio que se llama solo Modern Warfare, en 2019.",
        },
        {
          id: 3,
          question: "Ordena estos Black Ops por fecha de salida.",
          answers: [
            { id: "a", text: "Black Ops III" },
            { id: "b", text: "Black Ops" },
            { id: "c", text: "Black Ops 4" },
            { id: "d", text: "Black Ops II" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "2010, 2012, 2015 y luego 2018. Los cuatro son de Treyarch, y Black Ops 4 fue el primero sin campaña individual.",
        },
        {
          id: 4,
          question: "Ordena estos juegos por fecha de salida.",
          answers: [
            { id: "a", text: "Call of Duty: WWII" },
            { id: "b", text: "Call of Duty: Ghosts" },
            { id: "c", text: "Call of Duty: Infinite Warfare" },
            { id: "d", text: "Call of Duty: Advanced Warfare" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Ghosts en 2013, Advanced Warfare en 2014, Infinite Warfare en 2016 y luego WWII en 2017, que devolvió la saga a 1944 después de varios juegos ambientados en el futuro.",
        },
        {
          id: 5,
          image: "/images/q-call-of-duty-05.webp",
          question: "Ordena estos juegos recientes por fecha de salida.",
          answers: [
            { id: "a", text: "Modern Warfare III" },
            { id: "b", text: "Black Ops 6" },
            { id: "c", text: "Vanguard" },
            { id: "d", text: "Modern Warfare II" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Vanguard en 2021, Modern Warfare II en 2022, Modern Warfare III en 2023 y luego Black Ops 6 en 2024.",
        },
        {
          id: 6,
          image: "/images/q-call-of-duty-06.webp",
          question: "Ordena estos juegos según la época en la que transcurre su historia, de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Black Ops Cold War" },
            { id: "b", text: "Advanced Warfare" },
            { id: "c", text: "Call of Duty: WWII" },
            { id: "d", text: "Black Ops" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "WWII empieza en 1944 con el Desembarco de Normandía, Black Ops transcurre en los años 60, Black Ops Cold War en 1981 y Advanced Warfare en 2054.",
        },
        {
          id: 7,
          question: "Ordena estos estudios de Call of Duty por su año de fundación.",
          answers: [
            { id: "a", text: "Infinity Ward" },
            { id: "b", text: "Sledgehammer Games" },
            { id: "c", text: "Raven Software" },
            { id: "d", text: "Treyarch" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Raven Software en 1990, Treyarch en 1996, Infinity Ward en 2002 y Sledgehammer Games en 2009. Infinity Ward hizo el primer Call of Duty.",
        },
        {
          id: 8,
          question: "Ordena estos acontecimientos cronológicamente.",
          answers: [
            { id: "a", text: "Microsoft compra Activision Blizzard" },
            { id: "b", text: "Se funda Activision" },
            { id: "c", text: "Activision se fusiona con Vivendi Games y pasa a ser Activision Blizzard" },
            { id: "d", text: "Sale el primer Call of Duty" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Activision se fundó en 1979, el primer Call of Duty salió en 2003, Activision Blizzard nació en 2008 y Microsoft cerró la compra en octubre de 2023.",
        },
        {
          id: 9,
          question: "Ordena estos lanzamientos.",
          answers: [
            { id: "a", text: "Black Ops Cold War" },
            { id: "b", text: "Warzone" },
            { id: "c", text: "Vanguard" },
            { id: "d", text: "Modern Warfare (2019)" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Modern Warfare en octubre de 2019 y luego Warzone, el battle royale gratuito, en marzo de 2020. Black Ops Cold War llegó en noviembre de 2020 y Vanguard en 2021.",
        },
        {
          id: 10,
          question: "Ordena estos juegos por fecha de salida.",
          answers: [
            { id: "a", text: "Black Ops" },
            { id: "b", text: "Modern Warfare 3" },
            { id: "c", text: "World at War" },
            { id: "d", text: "Modern Warfare 2" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "World at War en 2008, Modern Warfare 2 en 2009, Black Ops en 2010 y Modern Warfare 3 en 2011. Un juego al año, turnándose Treyarch e Infinity Ward.",
        },
      ],
    },
  },
};

export default [quizCallOfDuty] as TranslatedQuiz[];
