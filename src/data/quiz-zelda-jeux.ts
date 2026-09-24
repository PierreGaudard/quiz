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
      ],
    },
  },
};

export default [quizZeldaJeux] as TranslatedQuiz[];
