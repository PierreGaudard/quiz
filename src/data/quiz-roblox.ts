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
        "Vingt duels sur Roblox, son histoire, ses Robux et ses jeux les plus connus. Deux propositions à chaque fois, une seule est la bonne.",
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
        {
          id: 11,
          question: "Dans quel pays est né David Baszucki, le cofondateur de Roblox ?",
          answers: [
            { id: "a", text: "Au Royaume-Uni" },
            { id: "b", text: "Au Canada" },
          ],
          correctAnswer: "b",
          explanation:
            "Au Canada, à Winnipeg, en 1963. Il a ensuite grandi aux États-Unis, dans le Minnesota.",
        },
        {
          id: 12,
          question: "Avec quelle entreprise Roblox a-t-il lancé une version chinoise en 2021 ?",
          answers: [
            { id: "a", text: "Tencent" },
            { id: "b", text: "Alibaba" },
          ],
          correctAnswer: "a",
          explanation:
            "Avec Tencent. Cette version chinoise, appelée LuoBuLeSi, a été fermée la même année.",
        },
        {
          id: 13,
          question: "Quel jeu Roblox a été le premier à dépasser les 25 millions de joueurs connectés en même temps, en octobre 2025 ?",
          answers: [
            { id: "a", text: "Adopt Me!" },
            { id: "b", text: "Steal a Brainrot" },
          ],
          correctAnswer: "b",
          explanation:
            "Steal a Brainrot, avec un pic à 25,4 millions. Le jeu avait déjà battu en septembre le record de Grow a Garden. On y achète des personnages appelés Brainrots, et on vole ceux des autres joueurs.",
        },
        {
          id: 14,
          question: "Lequel de ces deux groupes a donné un concert virtuel sur Roblox ?",
          answers: [
            { id: "a", text: "Twenty One Pilots" },
            { id: "b", text: "Les Beatles" },
          ],
          correctAnswer: "a",
          explanation:
            "Twenty One Pilots. La chanteuse suédoise Zara Larsson y a aussi donné un concert. Les Beatles se sont séparés en 1970, bien avant l'arrivée de Roblox.",
        },
        {
          id: 15,
          question: "Quel pays a bloqué l'accès à Roblox en août 2024 ?",
          answers: [
            { id: "a", text: "L'Espagne" },
            { id: "b", text: "La Turquie" },
          ],
          correctAnswer: "b",
          explanation:
            "La Turquie, le 7 août 2024. Le gouvernement a mis en avant la protection des enfants, et le blocage était toujours en place à l'été 2026.",
        },
        {
          id: 16,
          question: "Comment s'appelle l'abonnement payant de Roblox depuis mai 2026 ?",
          answers: [
            { id: "a", text: "Roblox Plus" },
            { id: "b", text: "Roblox Gold" },
          ],
          correctAnswer: "a",
          explanation:
            "Roblox Plus, qui a remplacé Roblox Premium en mai 2026.",
        },
        {
          id: 17,
          question: "Dans quel jeu Roblox des abeilles récoltent-elles du pollen pour en faire du miel ?",
          answers: [
            { id: "a", text: "Jailbreak" },
            { id: "b", text: "Bee Swarm Simulator" },
          ],
          correctAnswer: "b",
          explanation:
            "Bee Swarm Simulator, du studio Onett. Les abeilles suivent le joueur, ramassent le pollen des fleurs, et le pollen est ensuite changé en miel.",
        },
        {
          id: 18,
          question: "Dans quel jeu Roblox faut-il protéger son lit tout en détruisant celui des autres équipes ?",
          answers: [
            { id: "a", text: "BedWars" },
            { id: "b", text: "Blox Fruits" },
          ],
          correctAnswer: "a",
          explanation:
            "BedWars, qui reprend un mini-jeu très connu créé par des fans de Minecraft. La version Roblox propose d'ailleurs plus d'armes.",
        },
        {
          id: 19,
          question: "Lequel de ces deux jeux Roblox est le plus ancien ?",
          answers: [
            { id: "a", text: "Grow a Garden" },
            { id: "b", text: "Jailbreak" },
          ],
          correctAnswer: "b",
          explanation:
            "Jailbreak, sorti en avril 2017. Grow a Garden n'est arrivé que le 26 mars 2025.",
        },
        {
          id: 20,
          question: "Dans quelle université David Baszucki a-t-il fait ses études ?",
          answers: [
            { id: "a", text: "Stanford" },
            { id: "b", text: "Harvard" },
          ],
          correctAnswer: "a",
          explanation:
            "Stanford, en Californie, où il a obtenu un diplôme d'ingénieur en électricité en 1985.",
        },
      ],
    },
    en: {
      title: "Roblox Duel: which of the two?",
      description:
        "Twenty duels on Roblox, its history, its Robux and its best known games. Two options every time, and only one is right.",
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
        {
          id: 11,
          question: "Which country was David Baszucki, the co-founder of Roblox, born in?",
          answers: [
            { id: "a", text: "The United Kingdom" },
            { id: "b", text: "Canada" },
          ],
          correctAnswer: "b",
          explanation:
            "Canada, in Winnipeg, in 1963. He then grew up in the United States, in Minnesota.",
        },
        {
          id: 12,
          question: "Which company did Roblox launch a Chinese version with in 2021?",
          answers: [
            { id: "a", text: "Tencent" },
            { id: "b", text: "Alibaba" },
          ],
          correctAnswer: "a",
          explanation:
            "Tencent. The Chinese version, called LuoBuLeSi, was shut down the same year.",
        },
        {
          id: 13,
          question: "Which Roblox game was the first to pass 25 million players online at the same time, in October 2025?",
          answers: [
            { id: "a", text: "Adopt Me!" },
            { id: "b", text: "Steal a Brainrot" },
          ],
          correctAnswer: "b",
          explanation:
            "Steal a Brainrot, with a peak of 25.4 million. It had already broken the Grow a Garden record in September. In the game you buy characters called Brainrots and steal other players' ones.",
        },
        {
          id: 14,
          question: "Which of these two bands played a virtual concert on Roblox?",
          answers: [
            { id: "a", text: "Twenty One Pilots" },
            { id: "b", text: "The Beatles" },
          ],
          correctAnswer: "a",
          explanation:
            "Twenty One Pilots. Swedish singer Zara Larsson also played a concert there. The Beatles split up in 1970, long before Roblox existed.",
        },
        {
          id: 15,
          question: "Which country blocked access to Roblox in August 2024?",
          answers: [
            { id: "a", text: "Spain" },
            { id: "b", text: "Turkey" },
          ],
          correctAnswer: "b",
          explanation:
            "Turkey, on 7 August 2024. The government pointed to child protection, and the block was still in place in the summer of 2026.",
        },
        {
          id: 16,
          question: "What has Roblox's paid subscription been called since May 2026?",
          answers: [
            { id: "a", text: "Roblox Plus" },
            { id: "b", text: "Roblox Gold" },
          ],
          correctAnswer: "a",
          explanation:
            "Roblox Plus, which replaced Roblox Premium in May 2026.",
        },
        {
          id: 17,
          question: "In which Roblox game do bees collect pollen to turn it into honey?",
          answers: [
            { id: "a", text: "Jailbreak" },
            { id: "b", text: "Bee Swarm Simulator" },
          ],
          correctAnswer: "b",
          explanation:
            "Bee Swarm Simulator, by the studio Onett. The bees follow the player around and pick up pollen from flowers, and the pollen is then turned into honey.",
        },
        {
          id: 18,
          question: "In which Roblox game do you protect your bed while destroying the other teams' beds?",
          answers: [
            { id: "a", text: "BedWars" },
            { id: "b", text: "Blox Fruits" },
          ],
          correctAnswer: "a",
          explanation:
            "BedWars, based on a well-known minigame that Minecraft fans came up with. The Roblox version also has more weapons.",
        },
        {
          id: 19,
          question: "Which of these two Roblox games is older?",
          answers: [
            { id: "a", text: "Grow a Garden" },
            { id: "b", text: "Jailbreak" },
          ],
          correctAnswer: "b",
          explanation:
            "Jailbreak, released in April 2017. Grow a Garden only came out on 26 March 2025.",
        },
        {
          id: 20,
          question: "Which university did David Baszucki go to?",
          answers: [
            { id: "a", text: "Stanford" },
            { id: "b", text: "Harvard" },
          ],
          correctAnswer: "a",
          explanation:
            "Stanford, in California, where he got an electrical engineering degree in 1985.",
        },
      ],
    },
    es: {
      title: "Duelo Roblox: ¿cuál de los dos?",
      description:
        "Veinte duelos sobre Roblox, su historia, sus Robux y sus juegos más conocidos. Dos opciones cada vez y solo una es la buena.",
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
        {
          id: 11,
          question: "¿En qué país nació David Baszucki, el cofundador de Roblox?",
          answers: [
            { id: "a", text: "En el Reino Unido" },
            { id: "b", text: "En Canadá" },
          ],
          correctAnswer: "b",
          explanation:
            "En Canadá, en Winnipeg, en 1963. Luego creció en Estados Unidos, en Minnesota.",
        },
        {
          id: 12,
          question: "¿Con qué empresa lanzó Roblox una versión china en 2021?",
          answers: [
            { id: "a", text: "Tencent" },
            { id: "b", text: "Alibaba" },
          ],
          correctAnswer: "a",
          explanation:
            "Con Tencent. Esa versión china, llamada LuoBuLeSi, cerró ese mismo año.",
        },
        {
          id: 13,
          question: "¿Qué juego de Roblox fue el primero en superar los 25 millones de jugadores conectados a la vez, en octubre de 2025?",
          answers: [
            { id: "a", text: "Adopt Me!" },
            { id: "b", text: "Steal a Brainrot" },
          ],
          correctAnswer: "b",
          explanation:
            "Steal a Brainrot, con un pico de 25,4 millones. Ya había batido en septiembre el récord de Grow a Garden. En el juego se compran personajes llamados Brainrots y se roban los de otros jugadores.",
        },
        {
          id: 14,
          question: "¿Cuál de estos dos grupos dio un concierto virtual en Roblox?",
          answers: [
            { id: "a", text: "Twenty One Pilots" },
            { id: "b", text: "The Beatles" },
          ],
          correctAnswer: "a",
          explanation:
            "Twenty One Pilots. La cantante sueca Zara Larsson también dio un concierto allí. The Beatles se separaron en 1970, mucho antes de que existiera Roblox.",
        },
        {
          id: 15,
          question: "¿Qué país bloqueó el acceso a Roblox en agosto de 2024?",
          answers: [
            { id: "a", text: "España" },
            { id: "b", text: "Turquía" },
          ],
          correctAnswer: "b",
          explanation:
            "Turquía, el 7 de agosto de 2024. El gobierno alegó la protección de los niños, y el bloqueo seguía en pie en el verano de 2026.",
        },
        {
          id: 16,
          question: "¿Cómo se llama la suscripción de pago de Roblox desde mayo de 2026?",
          answers: [
            { id: "a", text: "Roblox Plus" },
            { id: "b", text: "Roblox Gold" },
          ],
          correctAnswer: "a",
          explanation:
            "Roblox Plus, que sustituyó a Roblox Premium en mayo de 2026.",
        },
        {
          id: 17,
          question: "¿En qué juego de Roblox las abejas recogen polen para convertirlo en miel?",
          answers: [
            { id: "a", text: "Jailbreak" },
            { id: "b", text: "Bee Swarm Simulator" },
          ],
          correctAnswer: "b",
          explanation:
            "Bee Swarm Simulator, del estudio Onett. Las abejas siguen al jugador y recogen el polen de las flores, que después se convierte en miel.",
        },
        {
          id: 18,
          question: "¿En qué juego de Roblox hay que proteger tu cama mientras destruyes la de los otros equipos?",
          answers: [
            { id: "a", text: "BedWars" },
            { id: "b", text: "Blox Fruits" },
          ],
          correctAnswer: "a",
          explanation:
            "BedWars, basado en un minijuego muy conocido que crearon fans de Minecraft. La versión de Roblox tiene además más armas.",
        },
        {
          id: 19,
          question: "¿Cuál de estos dos juegos de Roblox es más antiguo?",
          answers: [
            { id: "a", text: "Grow a Garden" },
            { id: "b", text: "Jailbreak" },
          ],
          correctAnswer: "b",
          explanation:
            "Jailbreak, que salió en abril de 2017. Grow a Garden no llegó hasta el 26 de marzo de 2025.",
        },
        {
          id: 20,
          question: "¿En qué universidad estudió David Baszucki?",
          answers: [
            { id: "a", text: "Stanford" },
            { id: "b", text: "Harvard" },
          ],
          correctAnswer: "a",
          explanation:
            "En Stanford, en California, donde se graduó en ingeniería eléctrica en 1985.",
        },
      ],
    },
  },
};

export default [quizRoblox] as TranslatedQuiz[];
