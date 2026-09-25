import type { TranslatedQuiz } from "./types";

/**
 * Quiz FIFA en mode duel sur les notes générales des joueurs, de FIFA 14 à
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
        "Messi ou Ronaldo, Hazard ou Griezmann, Mbappé ou Haaland : vingt duels sur les notes des stars dans les jeux FIFA, de FIFA 14 à FIFA 23.",
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
        {
          id: 11,
          question: "Dans FIFA 14, qui avait la meilleure note générale ?",
          answers: [
            { id: "a", text: "Gareth Bale" },
            { id: "b", text: "Zlatan Ibrahimović" },
          ],
          correctAnswer: "b",
          explanation:
            "Zlatan Ibrahimović, avec 90, plusieurs points devant Gareth Bale. Seuls Messi et Cristiano Ronaldo faisaient mieux que le Suédois du PSG dans le jeu.",
        },
        {
          id: 12,
          question: "Dans FIFA 15, qui avait la meilleure note générale ?",
          answers: [
            { id: "a", text: "Arjen Robben" },
            { id: "b", text: "Neymar" },
          ],
          correctAnswer: "a",
          explanation:
            "Arjen Robben, avec 90, contre 86 pour Neymar. Le Néerlandais du Bayern était l'un des meilleurs joueurs du jeu, et Neymar n'avait que 22 ans.",
        },
        {
          id: 13,
          question: "Dans FIFA 18, qui avait la meilleure note générale ?",
          answers: [
            { id: "a", text: "Robert Lewandowski" },
            { id: "b", text: "Antoine Griezmann" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Lewandowski, avec 91, contre 88 pour Antoine Griezmann. Le Polonais venait de marquer plus de 40 buts en une saison avec le Bayern.",
        },
        {
          id: 14,
          question: "Dans FIFA 19, entre ces deux milieux du Real Madrid, qui avait la meilleure note ?",
          answers: [
            { id: "a", text: "Toni Kroos" },
            { id: "b", text: "Luka Modrić" },
          ],
          correctAnswer: "b",
          explanation:
            "Luka Modrić, avec 91, contre 89 pour son coéquipier Toni Kroos. Le Croate venait d'atteindre la finale de la Coupe du monde 2018, et il a gagné le Ballon d'or à la fin de l'année.",
        },
        {
          id: 15,
          question: "Dans FIFA 20, quel gardien avait la meilleure note ?",
          answers: [
            { id: "a", text: "Alisson" },
            { id: "b", text: "Jan Oblak" },
          ],
          correctAnswer: "b",
          explanation:
            "Jan Oblak, avec 91, contre 89 pour Alisson. Le gardien slovène de l'Atlético de Madrid était le meilleur gardien du jeu, devant ter Stegen.",
        },
        {
          id: 16,
          question: "Dans FIFA 20, entre les deux ailiers de Liverpool, qui avait la meilleure note ?",
          answers: [
            { id: "a", text: "Mohamed Salah" },
            { id: "b", text: "Sadio Mané" },
          ],
          correctAnswer: "a",
          explanation:
            "Mohamed Salah, avec 90, contre 88 pour Sadio Mané. Les deux venaient de gagner la Ligue des champions 2019 avec Liverpool.",
        },
        {
          id: 17,
          question: "Dans FIFA 21, qui avait la meilleure note générale ?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi, avec 93, contre 92 pour Cristiano Ronaldo. Messi était encore au FC Barcelone, Ronaldo à la Juventus.",
        },
        {
          id: 18,
          question: "Dans FIFA 21, entre ces deux ailiers, qui avait la meilleure note ?",
          answers: [
            { id: "a", text: "Sadio Mané" },
            { id: "b", text: "Raheem Sterling" },
          ],
          correctAnswer: "a",
          explanation:
            "Sadio Mané, avec 90, contre 88 pour Raheem Sterling. Mané venait d'être champion d'Angleterre avec Liverpool, devant le Manchester City de Sterling.",
        },
        {
          id: 19,
          question: "Dans FIFA 21, quel gardien avait la meilleure note ?",
          answers: [
            { id: "a", text: "Ederson" },
            { id: "b", text: "Alisson" },
          ],
          correctAnswer: "b",
          explanation:
            "Alisson, avec 90, contre 88 pour Ederson. Les deux Brésiliens jouaient à Liverpool et à Manchester City, les deux clubs qui se disputaient la Premier League.",
        },
        {
          id: 20,
          question: "Dans FIFA 22, entre ces deux avant-centres, qui avait la meilleure note ?",
          answers: [
            { id: "a", text: "Harry Kane" },
            { id: "b", text: "Erling Haaland" },
          ],
          correctAnswer: "a",
          explanation:
            "Harry Kane, avec 90, contre 88 pour Erling Haaland. Haaland jouait encore à Dortmund, et Kane venait de finir meilleur buteur de Premier League.",
        },
      ],
    },
    en: {
      title: "FIFA duel: who had the higher rating?",
      description:
        "Messi or Ronaldo, Hazard or Griezmann, Mbappé or Haaland: twenty duels on the star ratings in the FIFA games, from FIFA 14 to FIFA 23.",
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
        {
          id: 11,
          question: "In FIFA 14, who had the higher overall rating?",
          answers: [
            { id: "a", text: "Gareth Bale" },
            { id: "b", text: "Zlatan Ibrahimović" },
          ],
          correctAnswer: "b",
          explanation:
            "Zlatan Ibrahimović, with 90, several points ahead of Gareth Bale. Only Messi and Cristiano Ronaldo were rated higher than PSG's Swede in the game.",
        },
        {
          id: 12,
          question: "In FIFA 15, who had the higher overall rating?",
          answers: [
            { id: "a", text: "Arjen Robben" },
            { id: "b", text: "Neymar" },
          ],
          correctAnswer: "a",
          explanation:
            "Arjen Robben, with 90, against 86 for Neymar. Bayern's Dutch winger was one of the best players in the game, and Neymar was only 22.",
        },
        {
          id: 13,
          question: "In FIFA 18, who had the higher overall rating?",
          answers: [
            { id: "a", text: "Robert Lewandowski" },
            { id: "b", text: "Antoine Griezmann" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Lewandowski, with 91, against 88 for Antoine Griezmann. The Polish striker had just scored more than 40 goals in a season for Bayern.",
        },
        {
          id: 14,
          question: "In FIFA 19, which of these two Real Madrid midfielders had the higher rating?",
          answers: [
            { id: "a", text: "Toni Kroos" },
            { id: "b", text: "Luka Modrić" },
          ],
          correctAnswer: "b",
          explanation:
            "Luka Modrić, with 91, against 89 for his teammate Toni Kroos. The Croatian had just reached the 2018 World Cup final, and he won the Ballon d'Or at the end of that year.",
        },
        {
          id: 15,
          question: "In FIFA 20, which goalkeeper had the higher rating?",
          answers: [
            { id: "a", text: "Alisson" },
            { id: "b", text: "Jan Oblak" },
          ],
          correctAnswer: "b",
          explanation:
            "Jan Oblak, with 91, against 89 for Alisson. Atlético Madrid's Slovenian keeper was the best goalkeeper in the game, ahead of ter Stegen.",
        },
        {
          id: 16,
          question: "In FIFA 20, which of Liverpool's two wingers had the higher rating?",
          answers: [
            { id: "a", text: "Mohamed Salah" },
            { id: "b", text: "Sadio Mané" },
          ],
          correctAnswer: "a",
          explanation:
            "Mohamed Salah, with 90, against 88 for Sadio Mané. Both had just won the 2019 Champions League with Liverpool.",
        },
        {
          id: 17,
          question: "In FIFA 21, who had the higher overall rating?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi, with 93, against 92 for Cristiano Ronaldo. Messi was still at FC Barcelona, and Ronaldo at Juventus.",
        },
        {
          id: 18,
          question: "In FIFA 21, which of these two wingers had the higher rating?",
          answers: [
            { id: "a", text: "Sadio Mané" },
            { id: "b", text: "Raheem Sterling" },
          ],
          correctAnswer: "a",
          explanation:
            "Sadio Mané, with 90, against 88 for Raheem Sterling. Mané had just won the Premier League with Liverpool, ahead of Sterling's Manchester City.",
        },
        {
          id: 19,
          question: "In FIFA 21, which goalkeeper had the higher rating?",
          answers: [
            { id: "a", text: "Ederson" },
            { id: "b", text: "Alisson" },
          ],
          correctAnswer: "b",
          explanation:
            "Alisson, with 90, against 88 for Ederson. The two Brazilians played for Liverpool and Manchester City, the two clubs fighting for the Premier League.",
        },
        {
          id: 20,
          question: "In FIFA 22, which of these two strikers had the higher rating?",
          answers: [
            { id: "a", text: "Harry Kane" },
            { id: "b", text: "Erling Haaland" },
          ],
          correctAnswer: "a",
          explanation:
            "Harry Kane, with 90, against 88 for Erling Haaland. Haaland was still at Dortmund, and Kane had just finished as the Premier League's top scorer.",
        },
      ],
    },
    es: {
      title: "Duelo FIFA: ¿quién tenía más media?",
      description:
        "Messi o Cristiano, Hazard o Griezmann, Mbappé o Haaland: veinte duelos sobre la media de las estrellas en los FIFA, de FIFA 14 a FIFA 23.",
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
        {
          id: 11,
          question: "En FIFA 14, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Gareth Bale" },
            { id: "b", text: "Zlatan Ibrahimović" },
          ],
          correctAnswer: "b",
          explanation:
            "Zlatan Ibrahimović, con 90, varios puntos por delante de Gareth Bale. Solo Messi y Cristiano Ronaldo superaban al sueco del PSG en el juego.",
        },
        {
          id: 12,
          question: "En FIFA 15, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Arjen Robben" },
            { id: "b", text: "Neymar" },
          ],
          correctAnswer: "a",
          explanation:
            "Arjen Robben, con 90, frente a 86 de Neymar. El neerlandés del Bayern era uno de los mejores jugadores del juego, y Neymar solo tenía 22 años.",
        },
        {
          id: 13,
          question: "En FIFA 18, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Robert Lewandowski" },
            { id: "b", text: "Antoine Griezmann" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Lewandowski, con 91, frente a 88 de Antoine Griezmann. El polaco acababa de marcar más de 40 goles en una temporada con el Bayern.",
        },
        {
          id: 14,
          question: "En FIFA 19, entre estos dos centrocampistas del Real Madrid, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Toni Kroos" },
            { id: "b", text: "Luka Modrić" },
          ],
          correctAnswer: "b",
          explanation:
            "Luka Modrić, con 91, frente a 89 de su compañero Toni Kroos. El croata acababa de jugar la final del Mundial 2018, y ganó el Balón de Oro a finales de ese año.",
        },
        {
          id: 15,
          question: "En FIFA 20, ¿qué portero tenía más media?",
          answers: [
            { id: "a", text: "Alisson" },
            { id: "b", text: "Jan Oblak" },
          ],
          correctAnswer: "b",
          explanation:
            "Jan Oblak, con 91, frente a 89 de Alisson. El portero esloveno del Atlético de Madrid era el mejor portero del juego, por delante de ter Stegen.",
        },
        {
          id: 16,
          question: "En FIFA 20, entre los dos extremos del Liverpool, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Mohamed Salah" },
            { id: "b", text: "Sadio Mané" },
          ],
          correctAnswer: "a",
          explanation:
            "Mohamed Salah, con 90, frente a 88 de Sadio Mané. Los dos acababan de ganar la Liga de Campeones 2019 con el Liverpool.",
        },
        {
          id: 17,
          question: "En FIFA 21, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi, con 93, frente a 92 de Cristiano Ronaldo. Messi seguía en el FC Barcelona, y Ronaldo en la Juventus.",
        },
        {
          id: 18,
          question: "En FIFA 21, entre estos dos extremos, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Sadio Mané" },
            { id: "b", text: "Raheem Sterling" },
          ],
          correctAnswer: "a",
          explanation:
            "Sadio Mané, con 90, frente a 88 de Raheem Sterling. Mané acababa de ganar la Premier League con el Liverpool, por delante del Manchester City de Sterling.",
        },
        {
          id: 19,
          question: "En FIFA 21, ¿qué portero tenía más media?",
          answers: [
            { id: "a", text: "Ederson" },
            { id: "b", text: "Alisson" },
          ],
          correctAnswer: "b",
          explanation:
            "Alisson, con 90, frente a 88 de Ederson. Los dos brasileños jugaban en el Liverpool y el Manchester City, los dos clubes que se peleaban por la Premier League.",
        },
        {
          id: 20,
          question: "En FIFA 22, entre estos dos delanteros centro, ¿quién tenía más media?",
          answers: [
            { id: "a", text: "Harry Kane" },
            { id: "b", text: "Erling Haaland" },
          ],
          correctAnswer: "a",
          explanation:
            "Harry Kane, con 90, frente a 88 de Erling Haaland. Haaland seguía en el Dortmund, y Kane acababa de ser el máximo goleador de la Premier League.",
        },
      ],
    },
  },
};

export default [quizFifaNotes] as TranslatedQuiz[];
