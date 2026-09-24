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
        "Brawl Pass, boîtes, gadgets, hypercharges et modes de jeu : dix affirmations sur l'histoire de Brawl Stars. Vrai ou faux ?",
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
      ],
    },
    en: {
      title: "True or false: Brawl Stars history",
      description:
        "Brawl Pass, boxes, gadgets, Hypercharges and game modes: ten statements about the history of Brawl Stars. True or false?",
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
      ],
    },
    es: {
      title: "Verdadero o falso: historia de Brawl Stars",
      description:
        "Brawl Pass, cajas, gadgets, hipercargas y modos de juego: diez afirmaciones sobre la historia de Brawl Stars. ¿Verdadero o falso?",
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
      ],
    },
  },
};

export default [quizBrawlStarsHistoire] as TranslatedQuiz[];
