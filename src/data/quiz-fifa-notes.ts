import type { TranslatedQuiz } from "./types";

/**
 * Quiz FIFA en mode duel sur les notes générales des joueurs, de FIFA 16 à
 * FIFA 23 : entre deux stars, laquelle avait la meilleure note dans le jeu ?
 *
 * Deux propositions par question (cf. quiz-marvel.ts). Les notes viennent de
 * FIFA Index. Elles bougent en cours de saison avec les mises à jour : les
 * duels opposent des joueurs assez éloignés pour que le classement ne change
 * pas d'une mise à jour à l'autre.
 */
export const quizFifaNotes: TranslatedQuiz = {
  slug: "quiz-fifa-notes",
  slugs: { en: "fifa-ratings-quiz", fr: "quiz-fifa-notes", es: "quiz-fifa-medias" },
  categorySlug: "jeux-video",
  subcategory: "FIFA",
  difficulty: "hard",
  coverImage: "/images/cover-fifa-notes.webp",
  gameType: "duel",
  playCount: 4700,
  translations: {
    fr: {
      title: "Duel FIFA : qui avait la meilleure note ?",
      description:
        "Messi ou Ronaldo, Hazard ou Griezmann, Mbappé ou Haaland : dix duels sur les notes des stars dans les jeux FIFA, de FIFA 16 à FIFA 23.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-notes-01.webp",
          question: "Dans FIFA 16, qui avait la meilleure note générale ?",
          answers: [
            { id: "a", text: "Lionel Messi" },
            { id: "b", text: "Cristiano Ronaldo" },
          ],
          correctAnswer: "a",
          explanation:
            "Lionel Messi, avec 94, contre 93 pour Cristiano Ronaldo. Messi venait de gagner la Ligue des champions 2015 avec le Barça.",
        },
        {
          id: 2,
          question: "Et dans FIFA 17, qui était devant ?",
          answers: [
            { id: "a", text: "Lionel Messi" },
            { id: "b", text: "Cristiano Ronaldo" },
          ],
          correctAnswer: "b",
          explanation:
            "Cristiano Ronaldo, avec 94, contre 93 pour Messi. Ronaldo venait de gagner l'Euro 2016 avec le Portugal et la Ligue des champions avec le Real Madrid.",
        },
        {
          id: 3,
          question: "Dans FIFA 16, le premier FIFA avec des joueuses, qui avait la meilleure note ?",
          answers: [
            { id: "a", text: "Carli Lloyd" },
            { id: "b", text: "Zlatan Ibrahimović" },
          ],
          correctAnswer: "a",
          explanation:
            "Carli Lloyd, avec 91, contre 89 pour Zlatan. L'Américaine venait de marquer un triplé en finale de la Coupe du monde 2015.",
        },
        {
          id: 4,
          question: "Dans FIFA 16, quel gardien avait la meilleure note ?",
          answers: [
            { id: "a", text: "David De Gea" },
            { id: "b", text: "Manuel Neuer" },
          ],
          correctAnswer: "b",
          explanation:
            "Manuel Neuer, avec 90, contre 87 pour David De Gea. Neuer était le meilleur gardien du jeu.",
        },
        {
          id: 5,
          image: "/images/q-fifa-notes-05.webp",
          question: "Dans FIFA 17, qui avait la meilleure note générale ?",
          answers: [
            { id: "a", text: "Neymar" },
            { id: "b", text: "Gareth Bale" },
          ],
          correctAnswer: "a",
          explanation:
            "Neymar, avec 92, contre 90 pour Gareth Bale. Neymar jouait encore au FC Barcelone, avec Messi et Suárez.",
        },
        {
          id: 6,
          image: "/images/q-fifa-notes-06.webp",
          question: "Dans FIFA 19, qui avait la meilleure note générale ?",
          answers: [
            { id: "a", text: "Eden Hazard" },
            { id: "b", text: "Antoine Griezmann" },
          ],
          correctAnswer: "a",
          explanation:
            "Eden Hazard, avec 91, contre 89 pour Antoine Griezmann, pourtant champion du monde quelques mois plus tôt.",
        },
        {
          id: 7,
          question: "Dans FIFA 20, qui avait la meilleure note générale ?",
          answers: [
            { id: "a", text: "Neymar" },
            { id: "b", text: "Megan Rapinoe" },
          ],
          correctAnswer: "b",
          explanation:
            "Megan Rapinoe, avec 93, contre 92 pour Neymar. L'Américaine venait de gagner la Coupe du monde 2019 et le Ballon d'or féminin.",
        },
        {
          id: 8,
          question: "Dans FIFA 21, quel avant-centre avait la meilleure note ?",
          answers: [
            { id: "a", text: "Robert Lewandowski" },
            { id: "b", text: "Harry Kane" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Lewandowski, qui avait gagné la Ligue des champions 2020 avec le Bayern. Harry Kane avait trois points de moins que lui.",
        },
        {
          id: 9,
          image: "/images/q-fifa-notes-09.webp",
          question: "Dans FIFA 22, qui avait la meilleure note générale ?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Robert Lewandowski" },
          ],
          correctAnswer: "b",
          explanation:
            "Robert Lewandowski, avec 92, contre 91 pour Cristiano Ronaldo. Lewandowski venait de marquer 41 buts en Bundesliga en une saison, un record.",
        },
        {
          id: 10,
          image: "/images/q-fifa-notes-10.webp",
          question: "Dans FIFA 23, qui avait la meilleure note générale ?",
          answers: [
            { id: "a", text: "Kylian Mbappé" },
            { id: "b", text: "Erling Haaland" },
          ],
          correctAnswer: "a",
          explanation:
            "Kylian Mbappé, avec 91. Haaland, qui venait d'arriver à Manchester City, a commencé le jeu à 88 et n'a jamais dépassé 90.",
        },
      ],
    },
    en: {
      title: "FIFA duel: who had the higher rating?",
      description:
        "Messi or Ronaldo, Hazard or Griezmann, Mbappé or Haaland: ten duels on the star ratings in the FIFA games, from FIFA 16 to FIFA 23.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-notes-01.webp",
          question: "In FIFA 16, who had the higher overall rating?",
          answers: [
            { id: "a", text: "Lionel Messi" },
            { id: "b", text: "Cristiano Ronaldo" },
          ],
          correctAnswer: "a",
          explanation:
            "Lionel Messi, with 94, against 93 for Cristiano Ronaldo. Messi had just won the 2015 Champions League with Barcelona.",
        },
        {
          id: 2,
          question: "And in FIFA 17, who was ahead?",
          answers: [
            { id: "a", text: "Lionel Messi" },
            { id: "b", text: "Cristiano Ronaldo" },
          ],
          correctAnswer: "b",
          explanation:
            "Cristiano Ronaldo, with 94, against 93 for Messi. Ronaldo had just won Euro 2016 with Portugal and the Champions League with Real Madrid.",
        },
        {
          id: 3,
          question: "In FIFA 16, the first FIFA with women players, who had the higher rating?",
          answers: [
            { id: "a", text: "Carli Lloyd" },
            { id: "b", text: "Zlatan Ibrahimović" },
          ],
          correctAnswer: "a",
          explanation:
            "Carli Lloyd, with 91, against 89 for Zlatan. The American had just scored a hat-trick in the 2015 World Cup final.",
        },
        {
          id: 4,
          question: "In FIFA 16, which goalkeeper had the higher rating?",
          answers: [
            { id: "a", text: "David De Gea" },
            { id: "b", text: "Manuel Neuer" },
          ],
          correctAnswer: "b",
          explanation:
            "Manuel Neuer, with 90, against 87 for David De Gea. Neuer was the best keeper in the game.",
        },
        {
          id: 5,
          image: "/images/q-fifa-notes-05.webp",
          question: "In FIFA 17, who had the higher overall rating?",
          answers: [
            { id: "a", text: "Neymar" },
            { id: "b", text: "Gareth Bale" },
          ],
          correctAnswer: "a",
          explanation:
            "Neymar, with 92, against 90 for Gareth Bale. Neymar was still at Barcelona, alongside Messi and Suárez.",
        },
        {
          id: 6,
          image: "/images/q-fifa-notes-06.webp",
          question: "In FIFA 19, who had the higher overall rating?",
          answers: [
            { id: "a", text: "Eden Hazard" },
            { id: "b", text: "Antoine Griezmann" },
          ],
          correctAnswer: "a",
          explanation:
            "Eden Hazard, with 91, against 89 for Antoine Griezmann, even though Griezmann had won the World Cup a few months earlier.",
        },
        {
          id: 7,
          question: "In FIFA 20, who had the higher overall rating?",
          answers: [
            { id: "a", text: "Neymar" },
            { id: "b", text: "Megan Rapinoe" },
          ],
          correctAnswer: "b",
          explanation:
            "Megan Rapinoe, with 93, against 92 for Neymar. She had just won the 2019 World Cup and the women's Ballon d'Or.",
        },
        {
          id: 8,
          question: "In FIFA 21, which striker had the higher rating?",
          answers: [
            { id: "a", text: "Robert Lewandowski" },
            { id: "b", text: "Harry Kane" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Lewandowski, who had won the 2020 Champions League with Bayern. Harry Kane was three points behind him.",
        },
        {
          id: 9,
          image: "/images/q-fifa-notes-09.webp",
          question: "In FIFA 22, who had the higher overall rating?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Robert Lewandowski" },
          ],
          correctAnswer: "b",
          explanation:
            "Robert Lewandowski, with 92, against 91 for Cristiano Ronaldo. Lewandowski had just scored 41 Bundesliga goals in one season, a record.",
        },
        {
          id: 10,
          image: "/images/q-fifa-notes-10.webp",
          question: "In FIFA 23, who had the higher overall rating?",
          answers: [
            { id: "a", text: "Kylian Mbappé" },
            { id: "b", text: "Erling Haaland" },
          ],
          correctAnswer: "a",
          explanation:
            "Kylian Mbappé, with 91. Haaland, who had just joined Manchester City, started the game on 88 and never went above 90.",
        },
      ],
    },
    es: {
      title: "Duelo FIFA: ¿quién tenía más media?",
      description:
        "Messi o Cristiano, Hazard o Griezmann, Mbappé o Haaland: diez duelos sobre la media de las estrellas en los FIFA, de FIFA 16 a FIFA 23.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-notes-01.webp",
          question: "En FIFA 16, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Lionel Messi" },
            { id: "b", text: "Cristiano Ronaldo" },
          ],
          correctAnswer: "a",
          explanation:
            "Lionel Messi, con 94, frente a 93 de Cristiano Ronaldo. Messi acababa de ganar la Champions de 2015 con el Barça.",
        },
        {
          id: 2,
          question: "¿Y en FIFA 17, quién iba por delante?",
          answers: [
            { id: "a", text: "Lionel Messi" },
            { id: "b", text: "Cristiano Ronaldo" },
          ],
          correctAnswer: "b",
          explanation:
            "Cristiano Ronaldo, con 94, frente a 93 de Messi. Acababa de ganar la Eurocopa 2016 con Portugal y la Champions con el Real Madrid.",
        },
        {
          id: 3,
          question: "En FIFA 16, el primer FIFA con jugadoras, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Carli Lloyd" },
            { id: "b", text: "Zlatan Ibrahimović" },
          ],
          correctAnswer: "a",
          explanation:
            "Carli Lloyd, con 91, frente a 89 de Zlatan. La estadounidense acababa de marcar un triplete en la final del Mundial de 2015.",
        },
        {
          id: 4,
          question: "En FIFA 16, ¿qué portero tenía más media?",
          answers: [
            { id: "a", text: "David De Gea" },
            { id: "b", text: "Manuel Neuer" },
          ],
          correctAnswer: "b",
          explanation:
            "Manuel Neuer, con 90, frente a 87 de David De Gea. Neuer era el mejor portero del juego.",
        },
        {
          id: 5,
          image: "/images/q-fifa-notes-05.webp",
          question: "En FIFA 17, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Neymar" },
            { id: "b", text: "Gareth Bale" },
          ],
          correctAnswer: "a",
          explanation:
            "Neymar, con 92, frente a 90 de Gareth Bale. Neymar seguía en el Barça, con Messi y Suárez.",
        },
        {
          id: 6,
          image: "/images/q-fifa-notes-06.webp",
          question: "En FIFA 19, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Eden Hazard" },
            { id: "b", text: "Antoine Griezmann" },
          ],
          correctAnswer: "a",
          explanation:
            "Eden Hazard, con 91, frente a 89 de Antoine Griezmann, aunque Griezmann acababa de ganar el Mundial unos meses antes.",
        },
        {
          id: 7,
          question: "En FIFA 20, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Neymar" },
            { id: "b", text: "Megan Rapinoe" },
          ],
          correctAnswer: "b",
          explanation:
            "Megan Rapinoe, con 93, frente a 92 de Neymar. La estadounidense acababa de ganar el Mundial de 2019 y el Balón de Oro femenino.",
        },
        {
          id: 8,
          question: "En FIFA 21, ¿qué delantero centro tenía más media?",
          answers: [
            { id: "a", text: "Robert Lewandowski" },
            { id: "b", text: "Harry Kane" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Lewandowski, que había ganado la Champions de 2020 con el Bayern. Harry Kane tenía tres puntos menos.",
        },
        {
          id: 9,
          image: "/images/q-fifa-notes-09.webp",
          question: "En FIFA 22, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Robert Lewandowski" },
          ],
          correctAnswer: "b",
          explanation:
            "Robert Lewandowski, con 92, frente a 91 de Cristiano Ronaldo. Lewandowski acababa de marcar 41 goles en una temporada de Bundesliga, todo un récord.",
        },
        {
          id: 10,
          image: "/images/q-fifa-notes-10.webp",
          question: "En FIFA 23, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Kylian Mbappé" },
            { id: "b", text: "Erling Haaland" },
          ],
          correctAnswer: "a",
          explanation:
            "Kylian Mbappé, con 91. Haaland, recién llegado al Manchester City, empezó el juego con 88 y nunca pasó de 90.",
        },
      ],
    },
  },
};

export default [quizFifaNotes] as TranslatedQuiz[];
