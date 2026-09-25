import type { TranslatedQuiz } from "./types";

/**
 * Quiz Zelda en mode ordre sur les jeux de la série : ordre de sortie, des
 * consoles, des remakes et des spin-off, plus une question sur l'ordre des
 * donjons d'Ocarina of Time et une sur la chronologie officielle.
 *
 * Le moteur mélange lui-même les propositions (cf. quiz-star-wars.ts) : les
 * `answers` sont écrites dans le bon ordre et `correctOrder` vaut a, b, c, d.
 * Les dates sont celles de la première sortie, au Japon la plupart du temps.
 * La chronologie officielle est celle du livre Hyrule Historia (2011).
 */
export const quizZeldaJeux: TranslatedQuiz = {
  slug: "quiz-zelda-jeux",
  slugs: { en: "zelda-games-quiz", fr: "quiz-zelda-jeux", es: "quiz-zelda-juegos" },
  categorySlug: "jeux-video",
  subcategory: "Zelda",
  difficulty: "medium",
  coverImage: "/images/cover-zelda-jeux.webp",
  gameType: "ordre",
  playCount: 5300,
  translations: {
    fr: {
      title: "Zelda dans l'ordre : les jeux",
      description:
        "De 1986 à Echoes of Wisdom : remets dans l'ordre les jeux Zelda, leurs consoles, leurs remakes, et même les donjons d'Ocarina of Time.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-jeux-01.webp",
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "The Legend of Zelda" },
            { id: "b", text: "A Link to the Past" },
            { id: "c", text: "Ocarina of Time" },
            { id: "d", text: "Breath of the Wild" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1986, 1991, 1998, puis 2017. Le premier sort sur Famicom, A Link to the Past sur Super Nintendo, Ocarina of Time sur Nintendo 64 et Breath of the Wild sur Switch et Wii U.",
        },
        {
          id: 2,
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Zelda II : The Adventure of Link" },
            { id: "b", text: "Link's Awakening" },
            { id: "c", text: "Majora's Mask" },
            { id: "d", text: "The Wind Waker" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1987, 1993, 2000, puis 2002. Link's Awakening est le premier Zelda sur une console portable, la Game Boy.",
        },
        {
          id: 3,
          image: "/images/q-zelda-jeux-03.webp",
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Twilight Princess" },
            { id: "b", text: "Skyward Sword" },
            { id: "c", text: "Tears of the Kingdom" },
            { id: "d", text: "Echoes of Wisdom" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2006, 2011, 2023, puis 2024. Echoes of Wisdom est le premier jeu principal de la série où l'on joue la princesse Zelda.",
        },
        {
          id: 4,
          question: "Remets ces consoles dans l'ordre où elles ont reçu leur premier Zelda.",
          answers: [
            { id: "a", text: "Game Boy" },
            { id: "b", text: "Nintendo 64" },
            { id: "c", text: "GameCube" },
            { id: "d", text: "Wii" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Link's Awakening sur Game Boy en 1993, Ocarina of Time sur Nintendo 64 en 1998, The Wind Waker sur GameCube en 2002, puis Twilight Princess sur Wii en 2006.",
        },
        {
          id: 5,
          image: "/images/q-zelda-jeux-05.webp",
          question: "Remets ces Zelda sur console portable dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Link's Awakening" },
            { id: "b", text: "The Minish Cap" },
            { id: "c", text: "Phantom Hourglass" },
            { id: "d", text: "A Link Between Worlds" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1993 sur Game Boy, 2004 sur Game Boy Advance, 2007 sur Nintendo DS, puis 2013 sur Nintendo 3DS. Chaque nouvelle console portable de Nintendo a eu son Zelda.",
        },
        {
          id: 6,
          question: "Dans Ocarina of Time, remets ces donjons dans l'ordre où Link les visite.",
          answers: [
            { id: "a", text: "L'Arbre Mojo" },
            { id: "b", text: "La Caverne Dodongo" },
            { id: "c", text: "Le Ventre de Jabu-Jabu" },
            { id: "d", text: "Le Temple de la Forêt" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les trois premiers se font quand Link est enfant, pour récupérer les trois pierres ancestrales. Le Temple de la Forêt est le premier donjon de Link adulte, après le saut de sept ans.",
        },
        {
          id: 7,
          image: "/images/q-zelda-jeux-07.webp",
          question: "Remets ces remakes dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Ocarina of Time 3D" },
            { id: "b", text: "The Wind Waker HD" },
            { id: "c", text: "Twilight Princess HD" },
            { id: "d", text: "Link's Awakening sur Switch" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2011 sur 3DS, 2013 sur Wii U, 2016 sur Wii U aussi, puis 2019 sur Switch. Le Link's Awakening de 2019 refait tout le jeu Game Boy avec des personnages qui ressemblent à des jouets.",
        },
        {
          id: 8,
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Oracle of Seasons" },
            { id: "b", text: "Four Swords Adventures" },
            { id: "c", text: "Spirit Tracks" },
            { id: "d", text: "Tri Force Heroes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2001 sur Game Boy Color, 2004 sur GameCube, 2009 sur DS et 2015 sur 3DS. Four Swords Adventures et Tri Force Heroes se jouent à plusieurs Link en même temps.",
        },
        {
          id: 9,
          question: "Selon la chronologie officielle de Nintendo, remets ces jeux dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "Skyward Sword" },
            { id: "b", text: "Ocarina of Time" },
            { id: "c", text: "Majora's Mask" },
            { id: "d", text: "Twilight Princess" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Skyward Sword raconte l'origine de l'Épée de légende, bien avant tout le reste. Majora's Mask suit directement Ocarina of Time, et Twilight Princess se passe environ cent ans plus tard.",
        },
        {
          id: 10,
          question: "Remets ces jeux dérivés de Zelda dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Link's Crossbow Training" },
            { id: "b", text: "Hyrule Warriors" },
            { id: "c", text: "Cadence of Hyrule" },
            { id: "d", text: "Hyrule Warriors : L'Ère du Fléau" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2007 sur Wii, 2014 sur Wii U, 2019 et 2020 sur Switch. Cadence of Hyrule est un jeu de rythme, et L'Ère du Fléau raconte ce qui s'est passé cent ans avant Breath of the Wild.",
        },
        {
          id: 11,
          question: "Dans la chronologie officielle, remets ces jeux dans l'ordre de l'histoire, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "A Link to the Past" },
            { id: "b", text: "Link's Awakening" },
            { id: "c", text: "The Legend of Zelda" },
            { id: "d", text: "Zelda II : The Adventure of Link" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ces quatre jeux sont sur la branche où Link perd face à Ganon dans Ocarina of Time. Du coup, les deux premiers jeux de 1986 et 1987 se passent en fait à la fin de cette branche, bien après A Link to the Past.",
        },
        {
          id: 12,
          question: "Dans la chronologie officielle, remets ces jeux dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "Ocarina of Time" },
            { id: "b", text: "The Wind Waker" },
            { id: "c", text: "Phantom Hourglass" },
            { id: "d", text: "Spirit Tracks" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "C'est la branche « adulte » : après Ocarina of Time, Hyrule est englouti sous la mer. Phantom Hourglass suit directement The Wind Waker, et Spirit Tracks se passe environ un siècle plus tard, sur un nouveau continent.",
        },
        {
          id: 13,
          question: "Dans Majora's Mask, remets ces régions de Termina dans l'ordre où Link y fait les temples.",
          answers: [
            { id: "a", text: "Le marais des Bois-Cascade, au sud" },
            { id: "b", text: "Le Pic des Neiges, au nord" },
            { id: "c", text: "La Grande Baie, à l'ouest" },
            { id: "d", text: "La vallée Ikana, à l'est" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le jeu est pensé pour qu'on les fasse dans cet ordre. Chaque temple terminé libère un des quatre Géants qui peuvent arrêter la chute de la lune.",
        },
        {
          id: 14,
          question: "Dans Twilight Princess, remets ces donjons dans l'ordre où Link les visite.",
          answers: [
            { id: "a", text: "Le Temple Sylvestre" },
            { id: "b", text: "Les Mines Goron" },
            { id: "c", text: "Le Temple Abyssal" },
            { id: "d", text: "La Tour du Jugement" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les trois premiers se font pour aider Midna à réunir les morceaux d'un ancien pouvoir. Link retire ensuite l'Épée de légende, puis part pour la Tour du Jugement, dans le désert Gerudo.",
        },
        {
          id: 15,
          question: "Remets ces versions d'Ocarina of Time dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Ocarina of Time sur Nintendo 64" },
            { id: "b", text: "Ocarina of Time Master Quest sur GameCube" },
            { id: "c", text: "Ocarina of Time 3D sur Nintendo 3DS" },
            { id: "d", text: "Ocarina of Time dans le Nintendo Switch Online" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1998, 2002, 2011, puis 2021. Master Quest reprend le jeu avec des donjons plus difficiles, et la version Switch fait partie du Pack additionnel lancé en octobre 2021.",
        },
        {
          id: 16,
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Breath of the Wild" },
            { id: "b", text: "Hyrule Warriors : L'Ère du Fléau" },
            { id: "c", text: "Skyward Sword HD" },
            { id: "d", text: "Tears of the Kingdom" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mars 2017, novembre 2020, juillet 2021, puis mai 2023. Skyward Sword HD est la version Switch du jeu Wii de 2011.",
        },
        {
          id: 17,
          question: "Remets ces consoles de salon dans l'ordre où elles ont reçu leur premier Zelda.",
          answers: [
            { id: "a", text: "NES" },
            { id: "b", text: "Super Nintendo" },
            { id: "c", text: "Wii U" },
            { id: "d", text: "Nintendo Switch" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le premier Zelda en 1986, A Link to the Past en 1991, The Wind Waker HD sur Wii U en 2013, puis Breath of the Wild sur Switch en 2017. Breath of the Wild est d'ailleurs sorti le même jour sur Wii U.",
        },
        {
          id: 18,
          question: "Dans Ocarina of Time, remets ces moments de l'histoire dans l'ordre.",
          answers: [
            { id: "a", text: "Link trouve l'Épée Kokiri" },
            { id: "b", text: "Link rencontre Zelda dans le jardin du château" },
            { id: "c", text: "Link retire l'Épée de légende" },
            { id: "d", text: "Link se réveille sept ans plus tard" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Il faut l'Épée Kokiri pour entrer dans l'Arbre Mojo, puis l'Arbre envoie Link voir la princesse. En retirant l'Épée de légende, Link reste endormi sept ans et se réveille adulte.",
        },
        {
          id: 19,
          question: "Dans Breath of the Wild, remets ces moments de l'histoire dans l'ordre.",
          answers: [
            { id: "a", text: "Link se réveille après cent ans de sommeil" },
            { id: "b", text: "Link reçoit la paravoile" },
            { id: "c", text: "Link retrouve Impa au village Cocorico" },
            { id: "d", text: "Link affronte Ganon au château d'Hyrule" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La paravoile est la récompense des quatre premiers sanctuaires du Plateau du Prélude, et c'est elle qui permet d'en descendre. Impa est ensuite le premier objectif de l'aventure.",
        },
        {
          id: 20,
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "A Link to the Past" },
            { id: "b", text: "Link's Awakening DX" },
            { id: "c", text: "Oracle of Ages" },
            { id: "d", text: "Majora's Mask 3D" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1991 sur Super Nintendo, 1998 sur Game Boy Color, 2001 sur Game Boy Color aussi, puis 2015 sur 3DS. Link's Awakening DX est la version en couleurs du jeu Game Boy de 1993.",
        },
      ],
    },
    en: {
      title: "Zelda in order: the games",
      description:
        "From 1986 to Echoes of Wisdom: put the Zelda games, their consoles, their remakes and even the Ocarina of Time dungeons back in order.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-jeux-01.webp",
          question: "Put these games in their release order.",
          answers: [
            { id: "a", text: "The Legend of Zelda" },
            { id: "b", text: "A Link to the Past" },
            { id: "c", text: "Ocarina of Time" },
            { id: "d", text: "Breath of the Wild" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1986, 1991, 1998, then 2017. The first one came out on the Famicom, A Link to the Past on the Super Nintendo, Ocarina of Time on the Nintendo 64 and Breath of the Wild on Switch and Wii U.",
        },
        {
          id: 2,
          question: "Put these games in their release order.",
          answers: [
            { id: "a", text: "Zelda II: The Adventure of Link" },
            { id: "b", text: "Link's Awakening" },
            { id: "c", text: "Majora's Mask" },
            { id: "d", text: "The Wind Waker" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1987, 1993, 2000, then 2002. Link's Awakening was the first Zelda on a handheld, the Game Boy.",
        },
        {
          id: 3,
          image: "/images/q-zelda-jeux-03.webp",
          question: "Put these games in their release order.",
          answers: [
            { id: "a", text: "Twilight Princess" },
            { id: "b", text: "Skyward Sword" },
            { id: "c", text: "Tears of the Kingdom" },
            { id: "d", text: "Echoes of Wisdom" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2006, 2011, 2023, then 2024. Echoes of Wisdom is the first main game in the series where you play as Princess Zelda.",
        },
        {
          id: 4,
          question: "Put these consoles in the order they got their first Zelda.",
          answers: [
            { id: "a", text: "Game Boy" },
            { id: "b", text: "Nintendo 64" },
            { id: "c", text: "GameCube" },
            { id: "d", text: "Wii" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Link's Awakening on Game Boy in 1993, Ocarina of Time on Nintendo 64 in 1998, The Wind Waker on GameCube in 2002, then Twilight Princess on Wii in 2006.",
        },
        {
          id: 5,
          image: "/images/q-zelda-jeux-05.webp",
          question: "Put these handheld Zelda games in their release order.",
          answers: [
            { id: "a", text: "Link's Awakening" },
            { id: "b", text: "The Minish Cap" },
            { id: "c", text: "Phantom Hourglass" },
            { id: "d", text: "A Link Between Worlds" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1993 on Game Boy, 2004 on Game Boy Advance, 2007 on Nintendo DS, then 2013 on Nintendo 3DS. Each new Nintendo handheld got its own Zelda.",
        },
        {
          id: 6,
          question: "In Ocarina of Time, put these dungeons in the order Link visits them.",
          answers: [
            { id: "a", text: "Inside the Deku Tree" },
            { id: "b", text: "Dodongo's Cavern" },
            { id: "c", text: "Inside Jabu-Jabu's Belly" },
            { id: "d", text: "Forest Temple" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The first three happen while Link is a child, to collect the three Spiritual Stones. The Forest Temple is the first dungeon as adult Link, after the seven-year jump.",
        },
        {
          id: 7,
          image: "/images/q-zelda-jeux-07.webp",
          question: "Put these remakes in their release order.",
          answers: [
            { id: "a", text: "Ocarina of Time 3D" },
            { id: "b", text: "The Wind Waker HD" },
            { id: "c", text: "Twilight Princess HD" },
            { id: "d", text: "Link's Awakening on Switch" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2011 on 3DS, 2013 on Wii U, 2016 on Wii U as well, then 2019 on Switch. The 2019 Link's Awakening remakes the whole Game Boy game with characters that look like toys.",
        },
        {
          id: 8,
          question: "Put these games in their release order.",
          answers: [
            { id: "a", text: "Oracle of Seasons" },
            { id: "b", text: "Four Swords Adventures" },
            { id: "c", text: "Spirit Tracks" },
            { id: "d", text: "Tri Force Heroes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2001 on Game Boy Color, 2004 on GameCube, 2009 on DS and 2015 on 3DS. Four Swords Adventures and Tri Force Heroes are both played with several Links at once.",
        },
        {
          id: 9,
          question: "Following Nintendo's official timeline, put these games in story order.",
          answers: [
            { id: "a", text: "Skyward Sword" },
            { id: "b", text: "Ocarina of Time" },
            { id: "c", text: "Majora's Mask" },
            { id: "d", text: "Twilight Princess" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Skyward Sword tells how the Master Sword came to be, long before everything else. Majora's Mask follows straight on from Ocarina of Time, and Twilight Princess takes place about a hundred years later.",
        },
        {
          id: 10,
          question: "Put these Zelda spin-offs in their release order.",
          answers: [
            { id: "a", text: "Link's Crossbow Training" },
            { id: "b", text: "Hyrule Warriors" },
            { id: "c", text: "Cadence of Hyrule" },
            { id: "d", text: "Hyrule Warriors: Age of Calamity" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2007 on Wii, 2014 on Wii U, then 2019 and 2020 on Switch. Cadence of Hyrule is a rhythm game, and Age of Calamity tells what happened a hundred years before Breath of the Wild.",
        },
        {
          id: 11,
          question: "In the official timeline, put these games in story order, from earliest to latest.",
          answers: [
            { id: "a", text: "A Link to the Past" },
            { id: "b", text: "Link's Awakening" },
            { id: "c", text: "The Legend of Zelda" },
            { id: "d", text: "Zelda II: The Adventure of Link" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "All four sit on the branch where Link loses to Ganon in Ocarina of Time. So the first two games, from 1986 and 1987, actually take place at the end of that branch, long after A Link to the Past.",
        },
        {
          id: 12,
          question: "In the official timeline, put these games in story order.",
          answers: [
            { id: "a", text: "Ocarina of Time" },
            { id: "b", text: "The Wind Waker" },
            { id: "c", text: "Phantom Hourglass" },
            { id: "d", text: "Spirit Tracks" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "This is the adult timeline: after Ocarina of Time, Hyrule ends up under the sea. Phantom Hourglass follows straight on from The Wind Waker, and Spirit Tracks is set about a hundred years later on a new continent.",
        },
        {
          id: 13,
          question: "In Majora's Mask, put these regions of Termina in the order Link clears their temples.",
          answers: [
            { id: "a", text: "Woodfall, in the south" },
            { id: "b", text: "Snowhead, in the north" },
            { id: "c", text: "Great Bay, in the west" },
            { id: "d", text: "Ikana Canyon, in the east" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The game is built to be played in this order. Each finished temple frees one of the four Giants who can stop the moon from falling.",
        },
        {
          id: 14,
          question: "In Twilight Princess, put these dungeons in the order Link visits them.",
          answers: [
            { id: "a", text: "Forest Temple" },
            { id: "b", text: "Goron Mines" },
            { id: "c", text: "Lakebed Temple" },
            { id: "d", text: "Arbiter's Grounds" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Link does the first three to help Midna gather the pieces of an ancient power. He then pulls the Master Sword and heads to Arbiter's Grounds, in the Gerudo Desert.",
        },
        {
          id: 15,
          question: "Put these versions of Ocarina of Time in their release order.",
          answers: [
            { id: "a", text: "Ocarina of Time on Nintendo 64" },
            { id: "b", text: "Ocarina of Time Master Quest on GameCube" },
            { id: "c", text: "Ocarina of Time 3D on Nintendo 3DS" },
            { id: "d", text: "Ocarina of Time on Nintendo Switch Online" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1998, 2002, 2011, then 2021. Master Quest is the same game with harder dungeons, and the Switch version is part of the Expansion Pack launched in October 2021.",
        },
        {
          id: 16,
          question: "Put these games in their release order.",
          answers: [
            { id: "a", text: "Breath of the Wild" },
            { id: "b", text: "Hyrule Warriors: Age of Calamity" },
            { id: "c", text: "Skyward Sword HD" },
            { id: "d", text: "Tears of the Kingdom" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "March 2017, November 2020, July 2021, then May 2023. Skyward Sword HD is the Switch version of the 2011 Wii game.",
        },
        {
          id: 17,
          question: "Put these home consoles in the order they got their first Zelda.",
          answers: [
            { id: "a", text: "NES" },
            { id: "b", text: "Super Nintendo" },
            { id: "c", text: "Wii U" },
            { id: "d", text: "Nintendo Switch" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The first Zelda in 1986, A Link to the Past in 1991, The Wind Waker HD on Wii U in 2013, then Breath of the Wild on Switch in 2017. Breath of the Wild also came out on Wii U the same day.",
        },
        {
          id: 18,
          question: "In Ocarina of Time, put these story moments in order.",
          answers: [
            { id: "a", text: "Link finds the Kokiri Sword" },
            { id: "b", text: "Link meets Zelda in the castle courtyard" },
            { id: "c", text: "Link pulls the Master Sword" },
            { id: "d", text: "Link wakes up seven years later" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "You need the Kokiri Sword to get into the Great Deku Tree, and then the Deku Tree sends Link to see the princess. Pulling the Master Sword puts Link to sleep for seven years, and he wakes up as an adult.",
        },
        {
          id: 19,
          question: "In Breath of the Wild, put these story moments in order.",
          answers: [
            { id: "a", text: "Link wakes up after a hundred years of sleep" },
            { id: "b", text: "Link gets the paraglider" },
            { id: "c", text: "Link meets Impa in Kakariko Village" },
            { id: "d", text: "Link fights Ganon at Hyrule Castle" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The paraglider is the reward for the first four shrines on the Great Plateau, and it's what lets you get down from there. Finding Impa is then the first goal of the adventure.",
        },
        {
          id: 20,
          question: "Put these games in their release order.",
          answers: [
            { id: "a", text: "A Link to the Past" },
            { id: "b", text: "Link's Awakening DX" },
            { id: "c", text: "Oracle of Ages" },
            { id: "d", text: "Majora's Mask 3D" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1991 on Super Nintendo, 1998 on Game Boy Color, 2001 on Game Boy Color as well, then 2015 on 3DS. Link's Awakening DX is the color version of the 1993 Game Boy game.",
        },
      ],
    },
    es: {
      title: "Zelda en orden: los juegos",
      description:
        "De 1986 a Echoes of Wisdom: ordena los juegos de Zelda, sus consolas, sus remakes y hasta las mazmorras de Ocarina of Time.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-jeux-01.webp",
          question: "Ordena estos juegos por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "The Legend of Zelda" },
            { id: "b", text: "A Link to the Past" },
            { id: "c", text: "Ocarina of Time" },
            { id: "d", text: "Breath of the Wild" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1986, 1991, 1998 y luego 2017. El primero salió en Famicom, A Link to the Past en Super Nintendo, Ocarina of Time en Nintendo 64 y Breath of the Wild en Switch y Wii U.",
        },
        {
          id: 2,
          question: "Ordena estos juegos por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Zelda II: The Adventure of Link" },
            { id: "b", text: "Link's Awakening" },
            { id: "c", text: "Majora's Mask" },
            { id: "d", text: "The Wind Waker" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1987, 1993, 2000 y luego 2002. Link's Awakening fue el primer Zelda en una consola portátil, la Game Boy.",
        },
        {
          id: 3,
          image: "/images/q-zelda-jeux-03.webp",
          question: "Ordena estos juegos por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Twilight Princess" },
            { id: "b", text: "Skyward Sword" },
            { id: "c", text: "Tears of the Kingdom" },
            { id: "d", text: "Echoes of Wisdom" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2006, 2011, 2023 y luego 2024. Echoes of Wisdom es el primer juego principal de la saga en el que se juega con la princesa Zelda.",
        },
        {
          id: 4,
          question: "Ordena estas consolas según cuándo recibieron su primer Zelda.",
          answers: [
            { id: "a", text: "Game Boy" },
            { id: "b", text: "Nintendo 64" },
            { id: "c", text: "GameCube" },
            { id: "d", text: "Wii" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Link's Awakening en Game Boy en 1993, Ocarina of Time en Nintendo 64 en 1998, The Wind Waker en GameCube en 2002 y Twilight Princess en Wii en 2006.",
        },
        {
          id: 5,
          image: "/images/q-zelda-jeux-05.webp",
          question: "Ordena estos Zelda de consola portátil por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Link's Awakening" },
            { id: "b", text: "The Minish Cap" },
            { id: "c", text: "Phantom Hourglass" },
            { id: "d", text: "A Link Between Worlds" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1993 en Game Boy, 2004 en Game Boy Advance, 2007 en Nintendo DS y 2013 en Nintendo 3DS. Cada nueva portátil de Nintendo tuvo su Zelda.",
        },
        {
          id: 6,
          question: "En Ocarina of Time, ordena estas mazmorras según las visita Link.",
          answers: [
            { id: "a", text: "El Gran Árbol Deku" },
            { id: "b", text: "La Cueva de los Dodongos" },
            { id: "c", text: "La Tripa de Lord Jabu-Jabu" },
            { id: "d", text: "El Templo del Bosque" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Las tres primeras se hacen con Link de niño, para conseguir las tres piedras espirituales. El Templo del Bosque es la primera mazmorra de Link adulto, después del salto de siete años.",
        },
        {
          id: 7,
          image: "/images/q-zelda-jeux-07.webp",
          question: "Ordena estos remakes por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Ocarina of Time 3D" },
            { id: "b", text: "The Wind Waker HD" },
            { id: "c", text: "Twilight Princess HD" },
            { id: "d", text: "Link's Awakening en Switch" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2011 en 3DS, 2013 en Wii U, 2016 también en Wii U y 2019 en Switch. El Link's Awakening de 2019 rehace todo el juego de Game Boy con personajes que parecen juguetes.",
        },
        {
          id: 8,
          question: "Ordena estos juegos por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Oracle of Seasons" },
            { id: "b", text: "Four Swords Adventures" },
            { id: "c", text: "Spirit Tracks" },
            { id: "d", text: "Tri Force Heroes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2001 en Game Boy Color, 2004 en GameCube, 2009 en DS y 2015 en 3DS. Four Swords Adventures y Tri Force Heroes se juegan con varios Link a la vez.",
        },
        {
          id: 9,
          question: "Según la cronología oficial de Nintendo, ordena estos juegos según su historia.",
          answers: [
            { id: "a", text: "Skyward Sword" },
            { id: "b", text: "Ocarina of Time" },
            { id: "c", text: "Majora's Mask" },
            { id: "d", text: "Twilight Princess" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Skyward Sword cuenta el origen de la Espada Maestra, mucho antes que todo lo demás. Majora's Mask sigue justo después de Ocarina of Time, y Twilight Princess ocurre unos cien años más tarde.",
        },
        {
          id: 10,
          question: "Ordena estos spin-offs de Zelda por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Link's Crossbow Training" },
            { id: "b", text: "Hyrule Warriors" },
            { id: "c", text: "Cadence of Hyrule" },
            { id: "d", text: "Hyrule Warriors: La era del cataclismo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2007 en Wii, 2014 en Wii U, y 2019 y 2020 en Switch. Cadence of Hyrule es un juego de ritmo, y La era del cataclismo cuenta lo que pasó cien años antes de Breath of the Wild.",
        },
        {
          id: 11,
          question: "En la cronología oficial, ordena estos juegos según su historia, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "A Link to the Past" },
            { id: "b", text: "Link's Awakening" },
            { id: "c", text: "The Legend of Zelda" },
            { id: "d", text: "Zelda II: The Adventure of Link" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los cuatro están en la rama en la que Link pierde contra Ganon en Ocarina of Time. Por eso los dos primeros juegos, de 1986 y 1987, pasan en realidad al final de esa rama, mucho después de A Link to the Past.",
        },
        {
          id: 12,
          question: "En la cronología oficial, ordena estos juegos según su historia.",
          answers: [
            { id: "a", text: "Ocarina of Time" },
            { id: "b", text: "The Wind Waker" },
            { id: "c", text: "Phantom Hourglass" },
            { id: "d", text: "Spirit Tracks" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Es la rama «adulta»: después de Ocarina of Time, Hyrule acaba bajo el mar. Phantom Hourglass sigue justo después de The Wind Waker, y Spirit Tracks pasa unos cien años más tarde, en un continente nuevo.",
        },
        {
          id: 13,
          question: "En Majora's Mask, ordena estas regiones de Termina según el orden en que Link hace sus templos.",
          answers: [
            { id: "a", text: "El pantano del sur" },
            { id: "b", text: "El Pico Nevado, al norte" },
            { id: "c", text: "La Gran Bahía, al oeste" },
            { id: "d", text: "El Valle Ikana, al este" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El juego está pensado para hacerlas en este orden. Cada templo terminado libera a uno de los cuatro Gigantes que pueden frenar la caída de la luna.",
        },
        {
          id: 14,
          question: "En Twilight Princess, ordena estas mazmorras según las visita Link.",
          answers: [
            { id: "a", text: "El Templo del Bosque" },
            { id: "b", text: "La Mina de los Goron" },
            { id: "c", text: "El Santuario del Lago" },
            { id: "d", text: "El Patíbulo del Desierto" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Link hace las tres primeras para ayudar a Midna a reunir los trozos de un antiguo poder. Luego saca la Espada Maestra y se va al Patíbulo del Desierto, en el desierto Gerudo.",
        },
        {
          id: 15,
          question: "Ordena estas versiones de Ocarina of Time por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Ocarina of Time en Nintendo 64" },
            { id: "b", text: "Ocarina of Time Master Quest en GameCube" },
            { id: "c", text: "Ocarina of Time 3D en Nintendo 3DS" },
            { id: "d", text: "Ocarina of Time en Nintendo Switch Online" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1998, 2002, 2011 y luego 2021. Master Quest es el mismo juego con mazmorras más difíciles, y la versión de Switch forma parte del Paquete de expansión que salió en octubre de 2021.",
        },
        {
          id: 16,
          question: "Ordena estos juegos por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Breath of the Wild" },
            { id: "b", text: "Hyrule Warriors: La era del cataclismo" },
            { id: "c", text: "Skyward Sword HD" },
            { id: "d", text: "Tears of the Kingdom" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Marzo de 2017, noviembre de 2020, julio de 2021 y mayo de 2023. Skyward Sword HD es la versión para Switch del juego de Wii de 2011.",
        },
        {
          id: 17,
          question: "Ordena estas consolas de sobremesa según cuándo recibieron su primer Zelda.",
          answers: [
            { id: "a", text: "NES" },
            { id: "b", text: "Super Nintendo" },
            { id: "c", text: "Wii U" },
            { id: "d", text: "Nintendo Switch" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El primer Zelda en 1986, A Link to the Past en 1991, The Wind Waker HD en Wii U en 2013 y Breath of the Wild en Switch en 2017. Breath of the Wild salió además el mismo día en Wii U.",
        },
        {
          id: 18,
          question: "En Ocarina of Time, ordena estos momentos de la historia.",
          answers: [
            { id: "a", text: "Link encuentra la Espada Kokiri" },
            { id: "b", text: "Link conoce a Zelda en el jardín del castillo" },
            { id: "c", text: "Link saca la Espada Maestra" },
            { id: "d", text: "Link despierta siete años después" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Hace falta la Espada Kokiri para entrar en el Gran Árbol Deku, y luego el Árbol manda a Link a ver a la princesa. Al sacar la Espada Maestra, Link se queda dormido siete años y despierta de adulto.",
        },
        {
          id: 19,
          question: "En Breath of the Wild, ordena estos momentos de la historia.",
          answers: [
            { id: "a", text: "Link despierta tras cien años de sueño" },
            { id: "b", text: "Link recibe la paravela" },
            { id: "c", text: "Link se reúne con Impa en la aldea Kakariko" },
            { id: "d", text: "Link se enfrenta a Ganon en el castillo de Hyrule" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La paravela es la recompensa de los cuatro primeros santuarios de la meseta donde despierta Link, y es lo que permite bajar de allí. Encontrar a Impa es luego el primer objetivo de la aventura.",
        },
        {
          id: 20,
          question: "Ordena estos juegos por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "A Link to the Past" },
            { id: "b", text: "Link's Awakening DX" },
            { id: "c", text: "Oracle of Ages" },
            { id: "d", text: "Majora's Mask 3D" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1991 en Super Nintendo, 1998 en Game Boy Color, 2001 también en Game Boy Color y 2015 en 3DS. Link's Awakening DX es la versión en color del juego de Game Boy de 1993.",
        },
      ],
    },
  },
};

export default [quizZeldaJeux] as TranslatedQuiz[];
