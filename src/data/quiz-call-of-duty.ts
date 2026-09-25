import type { TranslatedQuiz } from "./types";

/**
 * Quiz Call of Duty en mode ordre : vingt suites de quatre elements a ranger.
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
        "Vingt suites Call of Duty à remettre dans l'ordre, de 2003 à Black Ops 7. Lis bien la question : parfois c'est la sortie, parfois l'époque du jeu.",
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
        {
          id: 11,
          question: "Remets ces Black Ops dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Black Ops Cold War" },
            { id: "b", text: "Black Ops 7" },
            { id: "c", text: "Black Ops 4" },
            { id: "d", text: "Black Ops 6" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Black Ops 4 en 2018, Black Ops Cold War en 2020, Black Ops 6 en 2024, puis Black Ops 7 en novembre 2025. Les quatre sont menés par Treyarch.",
        },
        {
          id: 12,
          question: "Range ces jeux selon l'époque où se passe leur histoire, de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Black Ops II" },
            { id: "b", text: "Black Ops 6" },
            { id: "c", text: "Black Ops III" },
            { id: "d", text: "Modern Warfare (2019)" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Black Ops 6 se passe au début des années 1990, pendant la guerre du Golfe, Modern Warfare en 2019, Black Ops II en 2025 pour sa partie principale, et Black Ops III en 2065.",
        },
        {
          id: 13,
          question: "Remets ces jeux Call of Duty sur mobile dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Call of Duty: Mobile" },
            { id: "b", text: "Call of Duty: Heroes" },
            { id: "c", text: "Warzone Mobile" },
            { id: "d", text: "Call of Duty: Strike Team" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Strike Team en 2013, Heroes en 2014, Call of Duty: Mobile en 2019, puis Warzone Mobile en mars 2024. Warzone Mobile a d'ailleurs été retiré des boutiques dès mai 2025.",
        },
        {
          id: 14,
          question: "Remets ces modes battle royale dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Warzone" },
            { id: "b", text: "Warzone 2.0" },
            { id: "c", text: "Blackout, dans Black Ops 4" },
            { id: "d", text: "Warzone Mobile" },
          ],
          correctOrder: ["c", "a", "b", "d"],
          correctAnswer: "c",
          explanation:
            "Blackout en octobre 2018, dans Black Ops 4, puis Warzone en mars 2020, Warzone 2.0 en novembre 2022 et Warzone Mobile en mars 2024. Blackout a été le premier battle royale de la série.",
        },
        {
          id: 15,
          question: "Remets ces cartes Zombies dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Mob of the Dead" },
            { id: "b", text: "Der Riese" },
            { id: "c", text: "Der Eisendrache" },
            { id: "d", text: "Moon" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Der Riese en 2009 pour World at War, Moon en 2011 pour Black Ops, Mob of the Dead en 2013 pour Black Ops II, et Der Eisendrache en 2016 pour Black Ops III. Toutes sont sorties en contenu téléchargeable.",
        },
        {
          id: 16,
          question: "Dans Modern Warfare 2 (2009), range ces séries d'éliminations de la moins chère à la plus chère en éliminations.",
          answers: [
            { id: "a", text: "Drone" },
            { id: "b", text: "AC-130" },
            { id: "c", text: "Missile Predator" },
            { id: "d", text: "Harrier" },
          ],
          correctOrder: ["a", "c", "d", "b"],
          correctAnswer: "a",
          explanation:
            "Le drone demande 3 éliminations, le missile Predator 5, le Harrier 7 et l'AC-130 11. Plus la série est longue, plus elle fait de dégâts.",
        },
        {
          id: 17,
          question: "Dans les premiers modes Zombies, range ces atouts du moins cher au plus cher.",
          answers: [
            { id: "a", text: "Juggernog" },
            { id: "b", text: "Double Tap" },
            { id: "c", text: "Speed Cola" },
            { id: "d", text: "Quick Revive" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Quick Revive coûte 1 500 points en coopération, Double Tap 2 000, Juggernog 2 500 et Speed Cola 3 000. Ce sont les prix de World at War et du premier Black Ops.",
        },
        {
          id: 18,
          question: "Range ces méchants selon la sortie du jeu où ils apparaissent pour la première fois.",
          answers: [
            { id: "a", text: "Jonathan Irons" },
            { id: "b", text: "Imran Zakhaev" },
            { id: "c", text: "Raul Menendez" },
            { id: "d", text: "Le général Shepherd" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Zakhaev dans Call of Duty 4 en 2007, Shepherd dans Modern Warfare 2 en 2009, Menendez dans Black Ops II en 2012, et Irons dans Advanced Warfare en 2014.",
        },
        {
          id: 19,
          question: "Remets ces étapes du rachat d'Activision par Microsoft dans l'ordre.",
          answers: [
            { id: "a", text: "L'autorité britannique de la concurrence bloque le rachat" },
            { id: "b", text: "Black Ops 6 sort le jour même dans le Game Pass" },
            { id: "c", text: "Microsoft annonce le rachat" },
            { id: "d", text: "Le rachat est finalisé" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Microsoft annonce le rachat en janvier 2022, l'autorité britannique le bloque en avril 2023, le rachat est finalisé en octobre 2023, et Black Ops 6 arrive dans le Game Pass dès sa sortie, en octobre 2024.",
        },
        {
          id: 20,
          question: "Remets ces jeux de Sledgehammer Games dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Vanguard" },
            { id: "b", text: "Advanced Warfare" },
            { id: "c", text: "Modern Warfare III" },
            { id: "d", text: "Call of Duty: WWII" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Advanced Warfare en 2014, WWII en 2017, Vanguard en 2021, puis Modern Warfare III en 2023. Sledgehammer est le troisième grand studio de la série, avec Infinity Ward et Treyarch.",
        },
      ],
    },
    en: {
      title: "Call of Duty in the right order",
      description:
        "Twenty sets of Call of Duty games to put in order, from 2003 to Black Ops 7. Read carefully: sometimes it's release date, sometimes the game's era.",
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
        {
          id: 11,
          question: "Put these Black Ops games in release order.",
          answers: [
            { id: "a", text: "Black Ops Cold War" },
            { id: "b", text: "Black Ops 7" },
            { id: "c", text: "Black Ops 4" },
            { id: "d", text: "Black Ops 6" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Black Ops 4 in 2018, Black Ops Cold War in 2020, Black Ops 6 in 2024, then Black Ops 7 in November 2025. All four are led by Treyarch.",
        },
        {
          id: 12,
          question: "Sort these games by when their story takes place, from earliest to latest.",
          answers: [
            { id: "a", text: "Black Ops II" },
            { id: "b", text: "Black Ops 6" },
            { id: "c", text: "Black Ops III" },
            { id: "d", text: "Modern Warfare (2019)" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Black Ops 6 is set in the early 1990s, during the Gulf War, Modern Warfare in 2019, Black Ops II in 2025 for most of its story, and Black Ops III in 2065.",
        },
        {
          id: 13,
          question: "Put these Call of Duty mobile games in release order.",
          answers: [
            { id: "a", text: "Call of Duty: Mobile" },
            { id: "b", text: "Call of Duty: Heroes" },
            { id: "c", text: "Warzone Mobile" },
            { id: "d", text: "Call of Duty: Strike Team" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Strike Team in 2013, Heroes in 2014, Call of Duty: Mobile in 2019, then Warzone Mobile in March 2024. Warzone Mobile was pulled from the app stores as early as May 2025.",
        },
        {
          id: 14,
          question: "Put these battle royale modes in release order.",
          answers: [
            { id: "a", text: "Warzone" },
            { id: "b", text: "Warzone 2.0" },
            { id: "c", text: "Blackout, in Black Ops 4" },
            { id: "d", text: "Warzone Mobile" },
          ],
          correctOrder: ["c", "a", "b", "d"],
          correctAnswer: "c",
          explanation:
            "Blackout in October 2018, in Black Ops 4, then Warzone in March 2020, Warzone 2.0 in November 2022 and Warzone Mobile in March 2024. Blackout was the series' first battle royale.",
        },
        {
          id: 15,
          question: "Put these Zombies maps in release order.",
          answers: [
            { id: "a", text: "Mob of the Dead" },
            { id: "b", text: "Der Riese" },
            { id: "c", text: "Der Eisendrache" },
            { id: "d", text: "Moon" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Der Riese in 2009 for World at War, Moon in 2011 for Black Ops, Mob of the Dead in 2013 for Black Ops II, and Der Eisendrache in 2016 for Black Ops III. All of them came out as downloadable content.",
        },
        {
          id: 16,
          question: "In Modern Warfare 2 (2009), sort these killstreaks from the fewest kills needed to the most.",
          answers: [
            { id: "a", text: "UAV" },
            { id: "b", text: "AC-130" },
            { id: "c", text: "Predator Missile" },
            { id: "d", text: "Harrier Strike" },
          ],
          correctOrder: ["a", "c", "d", "b"],
          correctAnswer: "a",
          explanation:
            "The UAV takes 3 kills, the Predator Missile 5, the Harrier Strike 7 and the AC-130 11. The longer the streak, the more damage it does.",
        },
        {
          id: 17,
          question: "In the early Zombies modes, sort these perks from cheapest to most expensive.",
          answers: [
            { id: "a", text: "Juggernog" },
            { id: "b", text: "Double Tap" },
            { id: "c", text: "Speed Cola" },
            { id: "d", text: "Quick Revive" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Quick Revive costs 1,500 points in co-op, Double Tap 2,000, Juggernog 2,500 and Speed Cola 3,000. Those are the prices in World at War and the first Black Ops.",
        },
        {
          id: 18,
          question: "Sort these villains by the release of the game they first appear in.",
          answers: [
            { id: "a", text: "Jonathan Irons" },
            { id: "b", text: "Imran Zakhaev" },
            { id: "c", text: "Raul Menendez" },
            { id: "d", text: "General Shepherd" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Zakhaev in Call of Duty 4 in 2007, Shepherd in Modern Warfare 2 in 2009, Menendez in Black Ops II in 2012, and Irons in Advanced Warfare in 2014.",
        },
        {
          id: 19,
          question: "Put these steps of Microsoft's purchase of Activision in order.",
          answers: [
            { id: "a", text: "The UK competition authority blocks the deal" },
            { id: "b", text: "Black Ops 6 launches on Game Pass on day one" },
            { id: "c", text: "Microsoft announces the deal" },
            { id: "d", text: "The deal is completed" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Microsoft announces the deal in January 2022, the UK authority blocks it in April 2023, the deal closes in October 2023, and Black Ops 6 lands on Game Pass on launch day, in October 2024.",
        },
        {
          id: 20,
          question: "Put these Sledgehammer Games titles in release order.",
          answers: [
            { id: "a", text: "Vanguard" },
            { id: "b", text: "Advanced Warfare" },
            { id: "c", text: "Modern Warfare III" },
            { id: "d", text: "Call of Duty: WWII" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Advanced Warfare in 2014, WWII in 2017, Vanguard in 2021, then Modern Warfare III in 2023. Sledgehammer is the series' third main studio, alongside Infinity Ward and Treyarch.",
        },
      ],
    },
    es: {
      title: "Call of Duty en orden",
      description:
        "Veinte series de Call of Duty para ordenar, de 2003 a Black Ops 7. Lee bien la pregunta: a veces es la fecha de salida y a veces la época del juego.",
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
        {
          id: 11,
          question: "Ordena estos Black Ops según su fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Black Ops Cold War" },
            { id: "b", text: "Black Ops 7" },
            { id: "c", text: "Black Ops 4" },
            { id: "d", text: "Black Ops 6" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Black Ops 4 en 2018, Black Ops Cold War en 2020, Black Ops 6 en 2024 y Black Ops 7 en noviembre de 2025. Los cuatro los dirige Treyarch.",
        },
        {
          id: 12,
          question: "Ordena estos juegos según la época en la que transcurre su historia, de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Black Ops II" },
            { id: "b", text: "Black Ops 6" },
            { id: "c", text: "Black Ops III" },
            { id: "d", text: "Modern Warfare (2019)" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Black Ops 6 transcurre a principios de los años 90, durante la guerra del Golfo, Modern Warfare en 2019, Black Ops II en 2025 en su parte principal, y Black Ops III en 2065.",
        },
        {
          id: 13,
          question: "Ordena estos Call of Duty para móvil según su fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Call of Duty: Mobile" },
            { id: "b", text: "Call of Duty: Heroes" },
            { id: "c", text: "Warzone Mobile" },
            { id: "d", text: "Call of Duty: Strike Team" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Strike Team en 2013, Heroes en 2014, Call of Duty: Mobile en 2019 y Warzone Mobile en marzo de 2024. Por cierto, Warzone Mobile se retiró de las tiendas ya en mayo de 2025.",
        },
        {
          id: 14,
          question: "Ordena estos modos battle royale según su fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Warzone" },
            { id: "b", text: "Warzone 2.0" },
            { id: "c", text: "Blackout, en Black Ops 4" },
            { id: "d", text: "Warzone Mobile" },
          ],
          correctOrder: ["c", "a", "b", "d"],
          correctAnswer: "c",
          explanation:
            "Blackout en octubre de 2018, dentro de Black Ops 4, luego Warzone en marzo de 2020, Warzone 2.0 en noviembre de 2022 y Warzone Mobile en marzo de 2024. Blackout fue el primer battle royale de la saga.",
        },
        {
          id: 15,
          question: "Ordena estos mapas de Zombis según su fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Mob of the Dead" },
            { id: "b", text: "Der Riese" },
            { id: "c", text: "Der Eisendrache" },
            { id: "d", text: "Moon" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Der Riese en 2009 para World at War, Moon en 2011 para Black Ops, Mob of the Dead en 2013 para Black Ops II, y Der Eisendrache en 2016 para Black Ops III. Todos salieron como contenido descargable.",
        },
        {
          id: 16,
          question: "En Modern Warfare 2 (2009), ordena estas rachas de bajas de la que pide menos bajas a la que pide más.",
          answers: [
            { id: "a", text: "UAV" },
            { id: "b", text: "AC-130" },
            { id: "c", text: "Misil Predator" },
            { id: "d", text: "Harrier" },
          ],
          correctOrder: ["a", "c", "d", "b"],
          correctAnswer: "a",
          explanation:
            "El UAV pide 3 bajas, el misil Predator 5, el Harrier 7 y el AC-130 11. Cuanto más larga es la racha, más daño hace.",
        },
        {
          id: 17,
          question: "En los primeros modos Zombis, ordena estas ventajas de la más barata a la más cara.",
          answers: [
            { id: "a", text: "Juggernog" },
            { id: "b", text: "Double Tap" },
            { id: "c", text: "Speed Cola" },
            { id: "d", text: "Quick Revive" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Quick Revive cuesta 1.500 puntos en cooperativo, Double Tap 2.000, Juggernog 2.500 y Speed Cola 3.000. Son los precios de World at War y del primer Black Ops.",
        },
        {
          id: 18,
          question: "Ordena a estos villanos según la salida del juego en el que aparecen por primera vez.",
          answers: [
            { id: "a", text: "Jonathan Irons" },
            { id: "b", text: "Imran Zakhaev" },
            { id: "c", text: "Raul Menendez" },
            { id: "d", text: "El general Shepherd" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Zakhaev en Call of Duty 4 en 2007, Shepherd en Modern Warfare 2 en 2009, Menendez en Black Ops II en 2012, e Irons en Advanced Warfare en 2014.",
        },
        {
          id: 19,
          question: "Ordena estas etapas de la compra de Activision por Microsoft.",
          answers: [
            { id: "a", text: "La autoridad británica de la competencia bloquea la compra" },
            { id: "b", text: "Black Ops 6 sale el mismo día en Game Pass" },
            { id: "c", text: "Microsoft anuncia la compra" },
            { id: "d", text: "Se cierra la compra" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Microsoft anuncia la compra en enero de 2022, la autoridad británica la bloquea en abril de 2023, la compra se cierra en octubre de 2023, y Black Ops 6 llega a Game Pass el día de su salida, en octubre de 2024.",
        },
        {
          id: 20,
          question: "Ordena estos juegos de Sledgehammer Games según su fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Vanguard" },
            { id: "b", text: "Advanced Warfare" },
            { id: "c", text: "Modern Warfare III" },
            { id: "d", text: "Call of Duty: WWII" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Advanced Warfare en 2014, WWII en 2017, Vanguard en 2021 y Modern Warfare III en 2023. Sledgehammer es el tercer gran estudio de la saga, junto a Infinity Ward y Treyarch.",
        },
      ],
    },
  },
};

export default [quizCallOfDuty] as TranslatedQuiz[];
