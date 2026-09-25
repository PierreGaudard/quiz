import type { TranslatedQuiz } from "./types";

/**
 * Quiz Brawl Stars en vrai-faux sur l'histoire du jeu et ses modes : le
 * Brawl Pass, les boîtes, les pouvoirs stellaires, les gadgets, les
 * hypercharges, et les règles de Zone réservée, Prime, Hors-jeu et Braquage.
 *
 * Comme pour tous les vrai-faux, « vrai » a l'id « a » et « faux » l'id « b »
 * (cf. quiz-europe.ts). Les noms des modes sont ceux du jeu dans chaque langue.
 */
export const quizBrawlStarsHistoire: TranslatedQuiz = {
  slug: "quiz-brawl-stars-histoire",
  slugs: { en: "brawl-stars-history-quiz", fr: "quiz-brawl-stars-histoire", es: "quiz-brawl-stars-historia" },
  categorySlug: "jeux-video",
  subcategory: "Brawl Stars",
  difficulty: "medium",
  coverImage: "/images/cover-brawl-stars-histoire.webp",
  gameType: "vrai-faux",
  playCount: 4300,
  translations: {
    fr: {
      title: "Vrai ou faux : l'histoire de Brawl Stars",
      description:
        "Brawl Pass, boîtes, gadgets, hypercharges et modes de jeu : vingt affirmations sur l'histoire de Brawl Stars. Vrai ou faux ?",
      questions: [
        {
          id: 1,
          image: "/images/q-brawl-stars-histoire-01.webp",
          question: "Le Brawl Pass existe depuis la sortie mondiale du jeu, en 2018.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le Brawl Pass est arrivé avec la mise à jour de mai 2020, un an et demi après la sortie mondiale. Avant, on gagnait des boîtes avec des jetons.",
        },
        {
          id: 2,
          question: "Les pouvoirs stellaires sont arrivés dans le jeu avant les gadgets.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Les pouvoirs stellaires existaient déjà pendant la bêta, et les gadgets sont arrivés en mars 2020.",
        },
        {
          id: 3,
          image: "/images/q-brawl-stars-histoire-03.webp",
          question: "Les boîtes Brawl ont été retirées du jeu en décembre 2022.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Supercell les a enlevées avec la mise à jour du 12 décembre 2022 et les a remplacées par un autre système de récompenses. Les Starr Drops sont arrivés ensuite, en 2023.",
        },
        {
          id: 4,
          question: "Les hypercharges sont arrivées dans le jeu en même temps que les gadgets.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Les gadgets datent de 2020, les hypercharges de septembre 2023. Au départ, seuls six brawlers avaient la leur.",
        },
        {
          id: 5,
          question: "En Zone réservée, une équipe marque des points en restant dans une zone de la carte.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Il faut rester dans la zone pour la faire progresser, et la première équipe qui arrive à 100 % gagne. Le mode est arrivé en 2020.",
        },
        {
          id: 6,
          image: "/images/q-brawl-stars-histoire-06.webp",
          question: "En Prime, on gagne des étoiles en éliminant les adversaires.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Chaque élimination rapporte des étoiles, et un brawler qui enchaîne les éliminations vaut plus cher quand il se fait battre à son tour.",
        },
        {
          id: 7,
          question: "En Hors-jeu, un brawler éliminé revient dans la manche au bout de quelques secondes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. En Hors-jeu, il n'y a pas de réapparition : un brawler éliminé attend la manche suivante. La première équipe qui gagne deux manches remporte le match.",
        },
        {
          id: 8,
          question: "Un match de Braquage se joue en 5 contre 5.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le Braquage se joue en 3 contre 3, comme la plupart des modes en équipe du jeu.",
        },
        {
          id: 9,
          image: "/images/q-brawl-stars-histoire-09.webp",
          question: "Le premier championnat du monde de Brawl Stars, en 2019, s'est joué à Paris.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Il s'est joué à Busan, en Corée du Sud, en novembre 2019, et c'est l'équipe Nova Esports qui l'a gagné.",
        },
        {
          id: 10,
          question: "Le Super d'un brawler se charge quand ses attaques touchent des adversaires.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Chaque tir qui touche remplit un peu la jauge du Super. Quand elle est pleine, on peut le lancer.",
        },
        {
          id: 11,
          question: "Pendant sa phase de test, Brawl Stars se jouait en tenant le téléphone à la verticale.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Au début, le jeu se jouait en mode portrait, en touchant l'écran pour se déplacer. Il est passé à l'horizontale, avec des joysticks, avant la sortie mondiale.",
        },
        {
          id: 12,
          question: "Quand le test de Brawl Stars a commencé au Canada, en 2017, le jeu n'existait que sur iPhone et iPad.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le test a démarré le 15 juin 2017 sur iOS seulement. La version Android n'est arrivée qu'en juin 2018.",
        },
        {
          id: 13,
          question: "La phase de test de Brawl Stars a duré moins de six mois.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Elle a duré 522 jours, soit près d'un an et demi, entre le lancement au Canada en juin 2017 et la sortie mondiale de décembre 2018.",
        },
        {
          id: 14,
          question: "Brawl Stars est sorti la même année que Clash Royale.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Clash Royale est sorti en 2016, et Brawl Stars en décembre 2018. Les deux jeux sont de Supercell.",
        },
        {
          id: 15,
          question: "En Survivant duo, les joueurs s'affrontent par équipes de deux.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Il y a cinq équipes de deux, donc dix joueurs en tout, comme en Survivant solo. Un coéquipier éliminé peut revenir si l'autre reste en vie.",
        },
        {
          id: 16,
          question: "En Survivant, un nuage de poison réduit peu à peu la zone de jeu.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le poison avance depuis les bords de la carte et fait perdre de la vie à ceux qui restent dedans, ce qui pousse les derniers joueurs à se rapprocher.",
        },
        {
          id: 17,
          question: "Un brawler peut monter jusqu'au niveau de puissance 20.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le niveau de puissance maximum est 11. On y arrive en dépensant des points de pouvoir et des pièces pour chaque brawler.",
        },
        {
          id: 18,
          question: "En 2020, c'est l'équipe e-sport du PSG qui a gagné le championnat du monde de Brawl Stars.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. PSG Esports a gagné les World Finals 2020 et 200 000 dollars. Elles devaient se jouer à Katowice, en Pologne, mais elles ont eu lieu en ligne à cause du Covid.",
        },
        {
          id: 19,
          question: "Les World Finals 2024 se sont jouées à Helsinki, la ville de Supercell.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Elles ont eu lieu pendant la Superfest, avec les finales de Clash Royale et de Clash of Clans. L'équipe HMBLE a gagné en battant Crazy Raccoon.",
        },
        {
          id: 20,
          question: "Les World Finals 2025 de Brawl Stars se sont jouées à Tokyo.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Elles se sont jouées à Stockholm, en Suède, pendant la DreamHack. Crazy Raccoon a pris sa revanche sur HMBLE en finale, 3 à 0.",
        },
      ],
    },
    en: {
      title: "True or false: Brawl Stars history",
      description:
        "Brawl Pass, boxes, gadgets, Hypercharges and game modes: twenty statements about the history of Brawl Stars. True or false?",
      questions: [
        {
          id: 1,
          image: "/images/q-brawl-stars-histoire-01.webp",
          question: "The Brawl Pass has been around since the game's worldwide launch in 2018.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Brawl Pass arrived with the May 2020 update, a year and a half after the worldwide launch. Before that, you earned boxes with tokens.",
        },
        {
          id: 2,
          question: "Star Powers came to the game before Gadgets.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Star Powers were already there during the beta, and Gadgets only arrived in March 2020.",
        },
        {
          id: 3,
          image: "/images/q-brawl-stars-histoire-03.webp",
          question: "Brawl Boxes were removed from the game in December 2022.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Supercell took them out with the 12 December 2022 update and replaced them with another reward system. Starr Drops came later, in 2023.",
        },
        {
          id: 4,
          question: "Hypercharges came to the game at the same time as Gadgets.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Gadgets date from 2020 and Hypercharges from September 2023. At first, only six brawlers had one.",
        },
        {
          id: 5,
          question: "In Hot Zone, a team scores by staying inside a zone on the map.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. You have to stand in the zone to fill it up, and the first team to reach 100% wins. The mode arrived in 2020.",
        },
        {
          id: 6,
          image: "/images/q-brawl-stars-histoire-06.webp",
          question: "In Bounty, you earn stars by knocking out opponents.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Every knockout gives stars, and a brawler on a killing streak is worth more when someone finally takes them down.",
        },
        {
          id: 7,
          question: "In Knockout, a defeated brawler comes back into the round after a few seconds.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. There's no respawn in Knockout: a defeated brawler waits for the next round. The first team to win two rounds takes the match.",
        },
        {
          id: 8,
          question: "A Heist match is played 5 against 5.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Heist is played 3 against 3, like most of the game's team modes.",
        },
        {
          id: 9,
          image: "/images/q-brawl-stars-histoire-09.webp",
          question: "The first Brawl Stars World Championship, in 2019, was held in Paris.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It was held in Busan, South Korea, in November 2019, and Nova Esports won it.",
        },
        {
          id: 10,
          question: "A brawler's Super charges up when their attacks hit opponents.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Every shot that lands fills the Super meter a little. Once it's full, you can use it.",
        },
        {
          id: 11,
          question: "During its test phase, Brawl Stars was played holding the phone upright.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. At first the game ran in portrait mode, and you tapped the screen to move. It switched to landscape, with joysticks, before the worldwide release.",
        },
        {
          id: 12,
          question: "When Brawl Stars went into testing in Canada in 2017, it was only available on iPhone and iPad.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The test started on June 15, 2017, on iOS only. The Android version didn't arrive until June 2018.",
        },
        {
          id: 13,
          question: "The Brawl Stars test phase lasted less than six months.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It lasted 522 days, almost a year and a half, between the Canadian launch in June 2017 and the worldwide release in December 2018.",
        },
        {
          id: 14,
          question: "Brawl Stars came out the same year as Clash Royale.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Clash Royale came out in 2016, and Brawl Stars in December 2018. Both games are made by Supercell.",
        },
        {
          id: 15,
          question: "In Duo Showdown, players fight in teams of two.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. There are five teams of two, so ten players in total, just like in Solo Showdown. A teammate who gets knocked out can come back if the other one stays alive.",
        },
        {
          id: 16,
          question: "In Showdown, a poison cloud slowly shrinks the play area.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The poison moves in from the edges of the map and drains the health of anyone inside it, which pushes the last players closer together.",
        },
        {
          id: 17,
          question: "A brawler can go up to power level 20.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The highest power level is 11. You get there by spending power points and coins on each brawler.",
        },
        {
          id: 18,
          question: "In 2020, the PSG esports team won the Brawl Stars World Championship.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. PSG Esports won the 2020 World Finals and $200,000. The event was meant to be held in Katowice, Poland, but it moved online because of Covid.",
        },
        {
          id: 19,
          question: "The 2024 World Finals were held in Helsinki, Supercell's home city.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. They took place during Superfest, alongside the Clash Royale and Clash of Clans finals. Team HMBLE won by beating Crazy Raccoon.",
        },
        {
          id: 20,
          question: "The 2025 Brawl Stars World Finals were held in Tokyo.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. They were held in Stockholm, Sweden, during DreamHack. Crazy Raccoon got revenge on HMBLE in the final, winning 3-0.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: historia de Brawl Stars",
      description:
        "Brawl Pass, cajas, gadgets, hipercargas y modos de juego: veinte afirmaciones sobre la historia de Brawl Stars. ¿Verdadero o falso?",
      questions: [
        {
          id: 1,
          image: "/images/q-brawl-stars-histoire-01.webp",
          question: "El Brawl Pass existe desde el lanzamiento mundial del juego, en 2018.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El Brawl Pass llegó con la actualización de mayo de 2020, año y medio después del lanzamiento mundial. Antes se ganaban cajas con fichas.",
        },
        {
          id: 2,
          question: "Los poderes estelares llegaron al juego antes que los gadgets.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Los poderes estelares ya existían durante la beta, y los gadgets llegaron en marzo de 2020.",
        },
        {
          id: 3,
          image: "/images/q-brawl-stars-histoire-03.webp",
          question: "Las cajas Brawl se eliminaron del juego en diciembre de 2022.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Supercell las quitó con la actualización del 12 de diciembre de 2022 y las sustituyó por otro sistema de recompensas. Los Starr Drops llegaron después, en 2023.",
        },
        {
          id: 4,
          question: "Las hipercargas llegaron al juego a la vez que los gadgets.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Los gadgets son de 2020 y las hipercargas de septiembre de 2023. Al principio solo seis brawlers tenían la suya.",
        },
        {
          id: 5,
          question: "En Zona restringida, un equipo suma puntos quedándose dentro de una zona del mapa.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hay que quedarse en la zona para llenarla, y el primer equipo que llega al 100 % gana. El modo llegó en 2020.",
        },
        {
          id: 6,
          image: "/images/q-brawl-stars-histoire-06.webp",
          question: "En Caza estelar, se ganan estrellas eliminando a los rivales.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Cada eliminación da estrellas, y un brawler que encadena eliminaciones vale más cuando por fin lo derrotan.",
        },
        {
          id: 7,
          question: "En Noqueo, un brawler eliminado vuelve a la ronda a los pocos segundos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. En Noqueo no se reaparece: un brawler eliminado espera a la ronda siguiente. El primer equipo que gana dos rondas se lleva la partida.",
        },
        {
          id: 8,
          question: "Una partida de Atraco se juega 5 contra 5.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El Atraco se juega 3 contra 3, como casi todos los modos por equipos del juego.",
        },
        {
          id: 9,
          image: "/images/q-brawl-stars-histoire-09.webp",
          question: "El primer campeonato del mundo de Brawl Stars, en 2019, se jugó en París.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Se jugó en Busan, en Corea del Sur, en noviembre de 2019, y lo ganó el equipo Nova Esports.",
        },
        {
          id: 10,
          question: "El súper de un brawler se carga cuando sus ataques golpean a los rivales.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Cada disparo que acierta llena un poco la barra del súper. Cuando está llena, se puede lanzar.",
        },
        {
          id: 11,
          question: "Durante su fase de pruebas, Brawl Stars se jugaba con el móvil en vertical.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Al principio el juego iba en modo retrato y se tocaba la pantalla para moverse. Pasó a horizontal, con joysticks, antes del lanzamiento mundial.",
        },
        {
          id: 12,
          question: "Cuando empezaron las pruebas de Brawl Stars en Canadá, en 2017, el juego solo estaba en iPhone y iPad.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. La prueba empezó el 15 de junio de 2017, solo en iOS. La versión de Android no llegó hasta junio de 2018.",
        },
        {
          id: 13,
          question: "La fase de pruebas de Brawl Stars duró menos de seis meses.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Duró 522 días, casi un año y medio, entre el lanzamiento en Canadá en junio de 2017 y el lanzamiento mundial de diciembre de 2018.",
        },
        {
          id: 14,
          question: "Brawl Stars salió el mismo año que Clash Royale.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Clash Royale salió en 2016, y Brawl Stars en diciembre de 2018. Los dos juegos son de Supercell.",
        },
        {
          id: 15,
          question: "En Supervivencia a dúo, los jugadores se enfrentan en equipos de dos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hay cinco equipos de dos, o sea diez jugadores en total, igual que en Supervivencia en solitario. Un compañero eliminado puede volver si el otro sigue vivo.",
        },
        {
          id: 16,
          question: "En Supervivencia, una nube de veneno va reduciendo poco a poco la zona de juego.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El veneno avanza desde los bordes del mapa y quita vida a quien se queda dentro, así que los últimos jugadores acaban muy cerca unos de otros.",
        },
        {
          id: 17,
          question: "Un brawler puede subir hasta el nivel de poder 20.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El nivel de poder máximo es el 11. Se llega gastando puntos de poder y monedas en cada brawler.",
        },
        {
          id: 18,
          question: "En 2020, el equipo de esports del PSG ganó el campeonato del mundo de Brawl Stars.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. PSG Esports ganó las World Finals de 2020 y 200.000 dólares. Iban a jugarse en Katowice, en Polonia, pero se jugaron en línea por el Covid.",
        },
        {
          id: 19,
          question: "Las World Finals de 2024 se jugaron en Helsinki, la ciudad de Supercell.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Fueron durante la Superfest, junto con las finales de Clash Royale y Clash of Clans. El equipo HMBLE ganó contra Crazy Raccoon.",
        },
        {
          id: 20,
          question: "Las World Finals de 2025 de Brawl Stars se jugaron en Tokio.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Se jugaron en Estocolmo, en Suecia, durante la DreamHack. Crazy Raccoon se vengó de HMBLE en la final, con un 3 a 0.",
        },
      ],
    },
  },
};

export default [quizBrawlStarsHistoire] as TranslatedQuiz[];
