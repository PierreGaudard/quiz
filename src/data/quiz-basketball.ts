import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur le basket : l'invention du jeu, quelques regles de base et
 * les grands noms de la NBA, avec deux Francais (Parker, Wembanyama).
 *
 * Les questions evitent les palmares qui bougent chaque saison : le record de
 * points de LeBron James est pose comme un fait acquis (il est en tete depuis
 * fevrier 2023), sans citer de total qui serait faux la saison suivante.
 */
export const quizBasketball: TranslatedQuiz = {
  slug: "quiz-basketball",
  slugs: { en: "basketball-quiz", fr: "quiz-basketball", es: "quiz-baloncesto" },
  categorySlug: "sport",
  subcategory: "Basketball",
  difficulty: "easy",
  coverImage: "/images/sub-basketball.webp",
  gameType: "qcm",
  playCount: 6200,
  translations: {
    fr: {
      title: "Quiz basket : règles et légendes de la NBA",
      description:
        "Dix questions sur le basket : son inventeur, quelques règles et les grands joueurs de la NBA, de Jordan à Wembanyama.",
      questions: [
        {
          id: 1,
          image: "/images/q-basketball-01.webp",
          question: "Qui a inventé le basket ?",
          answers: [
            { id: "a", text: "James Naismith" },
            { id: "b", text: "Walter Camp" },
            { id: "c", text: "William G. Morgan" },
            { id: "d", text: "Abner Doubleday" },
          ],
          correctAnswer: "a",
          explanation:
            "James Naismith, un professeur canadien, a inventé le basket en 1891 à Springfield, aux États-Unis. Il cherchait un sport à pratiquer en salle pendant l'hiver. William G. Morgan a inventé le volley quelques années plus tard.",
        },
        {
          id: 2,
          question: "À quelle hauteur se trouve le cercle du panier ?",
          answers: [
            { id: "a", text: "2,85 m" },
            { id: "b", text: "3,05 m" },
            { id: "c", text: "3,25 m" },
            { id: "d", text: "3,50 m" },
          ],
          correctAnswer: "b",
          explanation:
            "3,05 m, soit 10 pieds. C'est la hauteur des premiers paniers de Naismith, et elle n'a jamais changé depuis.",
        },
        {
          id: 3,
          question: "Combien de joueurs chaque équipe a-t-elle sur le terrain ?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "Cinq joueurs par équipe, donc dix sur le terrain en tout. Les autres attendent sur le banc et peuvent entrer à tout moment lors d'un arrêt de jeu.",
        },
        {
          id: 4,
          question: "Combien de points rapporte un lancer franc réussi ?",
          answers: [
            { id: "a", text: "1 point" },
            { id: "b", text: "2 points" },
            { id: "c", text: "3 points" },
            { id: "d", text: "4 points" },
          ],
          correctAnswer: "a",
          explanation:
            "Un lancer franc vaut 1 point. Un panier classique en vaut 2, et un tir pris derrière la ligne à trois points en vaut 3.",
        },
        {
          id: 5,
          image: "/images/q-basketball-02.webp",
          question: "Qui est le meilleur marqueur de l'histoire de la NBA ?",
          answers: [
            { id: "a", text: "Kareem Abdul-Jabbar" },
            { id: "b", text: "Michael Jordan" },
            { id: "c", text: "LeBron James" },
            { id: "d", text: "Kobe Bryant" },
          ],
          correctAnswer: "c",
          explanation:
            "LeBron James. Il a dépassé Kareem Abdul-Jabbar le 7 février 2023, un record que Kareem détenait depuis 1984.",
        },
        {
          id: 6,
          question: "Avec quelle équipe Michael Jordan a-t-il gagné ses six titres NBA ?",
          answers: [
            { id: "a", text: "Washington Wizards" },
            { id: "b", text: "Chicago Bulls" },
            { id: "c", text: "Los Angeles Lakers" },
            { id: "d", text: "Boston Celtics" },
          ],
          correctAnswer: "b",
          explanation:
            "Les Chicago Bulls, en 1991, 1992, 1993 puis 1996, 1997 et 1998. Jordan a bien joué aux Washington Wizards, mais à la fin de sa carrière, et sans y gagner de titre.",
        },
        {
          id: 7,
          image: "/images/q-basketball-03.webp",
          question: "Combien de titres NBA Tony Parker a-t-il gagnés avec les San Antonio Spurs ?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "c",
          explanation:
            "Quatre titres, en 2003, 2005, 2007 et 2014. En 2007, il a même été élu meilleur joueur des finales, une première pour un Européen.",
        },
        {
          id: 8,
          image: "/images/q-basketball-04.webp",
          question: "Quelle équipe a choisi Victor Wembanyama en premier à la draft 2023 ?",
          answers: [
            { id: "a", text: "Charlotte Hornets" },
            { id: "b", text: "Detroit Pistons" },
            { id: "c", text: "Houston Rockets" },
            { id: "d", text: "San Antonio Spurs" },
          ],
          correctAnswer: "d",
          explanation:
            "Les San Antonio Spurs, qui avaient gagné la loterie. Les Charlotte Hornets avaient le deuxième choix et ont pris Brandon Miller.",
        },
        {
          id: 9,
          question: "Combien de minutes dure un quart-temps en NBA ?",
          answers: [
            { id: "a", text: "10 minutes" },
            { id: "b", text: "12 minutes" },
            { id: "c", text: "15 minutes" },
            { id: "d", text: "20 minutes" },
          ],
          correctAnswer: "b",
          explanation:
            "12 minutes, donc 48 minutes pour un match. Dans les compétitions internationales et en Europe, un quart-temps dure 10 minutes.",
        },
        {
          id: 10,
          question: "Aux JO de Barcelone en 1992, quel surnom avait l'équipe des États-Unis ?",
          answers: [
            { id: "a", text: "La Redeem Team" },
            { id: "b", text: "Le Showtime" },
            { id: "c", text: "La Dream Team" },
            { id: "d", text: "La Magic Team" },
          ],
          correctAnswer: "c",
          explanation:
            "La Dream Team, avec Jordan, Magic Johnson ou encore Larry Bird. C'était la première fois que les joueurs NBA pouvaient jouer aux JO. La Redeem Team, c'est l'équipe américaine de 2008.",
        },
      ],
    },
    en: {
      title: "Basketball quiz: rules and NBA legends",
      description:
        "Ten questions on basketball: who invented it, a few rules and the big NBA names, from Jordan to Wembanyama.",
      questions: [
        {
          id: 1,
          image: "/images/q-basketball-01.webp",
          question: "Who invented basketball?",
          answers: [
            { id: "a", text: "James Naismith" },
            { id: "b", text: "Walter Camp" },
            { id: "c", text: "William G. Morgan" },
            { id: "d", text: "Abner Doubleday" },
          ],
          correctAnswer: "a",
          explanation:
            "James Naismith, a Canadian teacher, came up with basketball in 1891 in Springfield, Massachusetts. He wanted an indoor sport for the winter months. William G. Morgan invented volleyball a few years later.",
        },
        {
          id: 2,
          question: "How high is the basketball rim?",
          answers: [
            { id: "a", text: "9 feet 4 inches (2.85 m)" },
            { id: "b", text: "10 feet (3.05 m)" },
            { id: "c", text: "10 feet 8 inches (3.25 m)" },
            { id: "d", text: "11 feet 6 inches (3.50 m)" },
          ],
          correctAnswer: "b",
          explanation:
            "10 feet, or 3.05 m. That was the height of Naismith's first baskets, and it has never changed since.",
        },
        {
          id: 3,
          question: "How many players does each team have on the court?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "Five per team, so ten on the court in total. The rest sit on the bench and can come in whenever play stops.",
        },
        {
          id: 4,
          question: "How many points is a made free throw worth?",
          answers: [
            { id: "a", text: "1 point" },
            { id: "b", text: "2 points" },
            { id: "c", text: "3 points" },
            { id: "d", text: "4 points" },
          ],
          correctAnswer: "a",
          explanation:
            "A free throw is worth 1 point. A regular basket counts for 2, and a shot from behind the three-point line counts for 3.",
        },
        {
          id: 5,
          image: "/images/q-basketball-02.webp",
          question: "Who is the NBA's all-time leading scorer?",
          answers: [
            { id: "a", text: "Kareem Abdul-Jabbar" },
            { id: "b", text: "Michael Jordan" },
            { id: "c", text: "LeBron James" },
            { id: "d", text: "Kobe Bryant" },
          ],
          correctAnswer: "c",
          explanation:
            "LeBron James. He passed Kareem Abdul-Jabbar on February 7, 2023, breaking a record Kareem had held since 1984.",
        },
        {
          id: 6,
          question: "Which team did Michael Jordan win his six NBA titles with?",
          answers: [
            { id: "a", text: "Washington Wizards" },
            { id: "b", text: "Chicago Bulls" },
            { id: "c", text: "Los Angeles Lakers" },
            { id: "d", text: "Boston Celtics" },
          ],
          correctAnswer: "b",
          explanation:
            "The Chicago Bulls, in 1991, 1992, 1993 and then 1996, 1997 and 1998. Jordan did play for the Washington Wizards, but at the very end of his career and without winning a title there.",
        },
        {
          id: 7,
          image: "/images/q-basketball-03.webp",
          question: "How many NBA titles did Tony Parker win with the San Antonio Spurs?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "c",
          explanation:
            "Four, in 2003, 2005, 2007 and 2014. In 2007 he was also named Finals MVP, the first European player to get it.",
        },
        {
          id: 8,
          image: "/images/q-basketball-04.webp",
          question: "Which team took Victor Wembanyama first overall in the 2023 draft?",
          answers: [
            { id: "a", text: "Charlotte Hornets" },
            { id: "b", text: "Detroit Pistons" },
            { id: "c", text: "Houston Rockets" },
            { id: "d", text: "San Antonio Spurs" },
          ],
          correctAnswer: "d",
          explanation:
            "The San Antonio Spurs, who had won the lottery. The Charlotte Hornets picked second and took Brandon Miller.",
        },
        {
          id: 9,
          question: "How long is a quarter in the NBA?",
          answers: [
            { id: "a", text: "10 minutes" },
            { id: "b", text: "12 minutes" },
            { id: "c", text: "15 minutes" },
            { id: "d", text: "20 minutes" },
          ],
          correctAnswer: "b",
          explanation:
            "12 minutes, so 48 minutes for a full game. In international games and in Europe, a quarter lasts 10 minutes.",
        },
        {
          id: 10,
          question: "At the 1992 Barcelona Olympics, what was the US team called?",
          answers: [
            { id: "a", text: "The Redeem Team" },
            { id: "b", text: "Showtime" },
            { id: "c", text: "The Dream Team" },
            { id: "d", text: "The Magic Team" },
          ],
          correctAnswer: "c",
          explanation:
            "The Dream Team, with Jordan, Magic Johnson, Larry Bird and more. It was the first time NBA players were allowed at the Olympics. The Redeem Team was the US side of 2008.",
        },
      ],
    },
    es: {
      title: "Quiz de baloncesto: reglas y leyendas NBA",
      description:
        "Diez preguntas sobre baloncesto: quién lo inventó, algunas reglas y los grandes nombres de la NBA, de Jordan a Wembanyama.",
      questions: [
        {
          id: 1,
          image: "/images/q-basketball-01.webp",
          question: "¿Quién inventó el baloncesto?",
          answers: [
            { id: "a", text: "James Naismith" },
            { id: "b", text: "Walter Camp" },
            { id: "c", text: "William G. Morgan" },
            { id: "d", text: "Abner Doubleday" },
          ],
          correctAnswer: "a",
          explanation:
            "James Naismith, un profesor canadiense, inventó el baloncesto en 1891 en Springfield, Estados Unidos. Buscaba un deporte para jugar bajo techo en invierno. William G. Morgan inventó el voleibol unos años después.",
        },
        {
          id: 2,
          question: "¿A qué altura está el aro de la canasta?",
          answers: [
            { id: "a", text: "2,85 m" },
            { id: "b", text: "3,05 m" },
            { id: "c", text: "3,25 m" },
            { id: "d", text: "3,50 m" },
          ],
          correctAnswer: "b",
          explanation:
            "A 3,05 m, es decir, 10 pies. Es la altura de las primeras canastas de Naismith y nunca ha cambiado.",
        },
        {
          id: 3,
          question: "¿Cuántos jugadores tiene cada equipo en la pista?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "Cinco por equipo, o sea, diez en la pista. Los demás esperan en el banquillo y pueden entrar cuando el juego se para.",
        },
        {
          id: 4,
          question: "¿Cuántos puntos vale un tiro libre anotado?",
          answers: [
            { id: "a", text: "1 punto" },
            { id: "b", text: "2 puntos" },
            { id: "c", text: "3 puntos" },
            { id: "d", text: "4 puntos" },
          ],
          correctAnswer: "a",
          explanation:
            "Un tiro libre vale 1 punto. Una canasta normal vale 2, y un tiro desde detrás de la línea de triple vale 3.",
        },
        {
          id: 5,
          image: "/images/q-basketball-02.webp",
          question: "¿Quién es el máximo anotador de la historia de la NBA?",
          answers: [
            { id: "a", text: "Kareem Abdul-Jabbar" },
            { id: "b", text: "Michael Jordan" },
            { id: "c", text: "LeBron James" },
            { id: "d", text: "Kobe Bryant" },
          ],
          correctAnswer: "c",
          explanation:
            "LeBron James. Superó a Kareem Abdul-Jabbar el 7 de febrero de 2023, y Kareem tenía ese récord desde 1984.",
        },
        {
          id: 6,
          question: "¿Con qué equipo ganó Michael Jordan sus seis anillos de la NBA?",
          answers: [
            { id: "a", text: "Washington Wizards" },
            { id: "b", text: "Chicago Bulls" },
            { id: "c", text: "Los Angeles Lakers" },
            { id: "d", text: "Boston Celtics" },
          ],
          correctAnswer: "b",
          explanation:
            "Con los Chicago Bulls, en 1991, 1992, 1993 y luego en 1996, 1997 y 1998. Jordan sí jugó en los Washington Wizards, pero al final de su carrera y sin ganar ningún título.",
        },
        {
          id: 7,
          image: "/images/q-basketball-03.webp",
          question: "¿Cuántos títulos de la NBA ganó Tony Parker con los San Antonio Spurs?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "c",
          explanation:
            "Cuatro, en 2003, 2005, 2007 y 2014. En 2007 además fue elegido MVP de las Finales, el primer europeo en conseguirlo.",
        },
        {
          id: 8,
          image: "/images/q-basketball-04.webp",
          question: "¿Qué equipo eligió a Victor Wembanyama con el número 1 del draft de 2023?",
          answers: [
            { id: "a", text: "Charlotte Hornets" },
            { id: "b", text: "Detroit Pistons" },
            { id: "c", text: "Houston Rockets" },
            { id: "d", text: "San Antonio Spurs" },
          ],
          correctAnswer: "d",
          explanation:
            "Los San Antonio Spurs, que habían ganado la lotería. Los Charlotte Hornets elegían en segundo lugar y se quedaron con Brandon Miller.",
        },
        {
          id: 9,
          question: "¿Cuánto dura un cuarto en la NBA?",
          answers: [
            { id: "a", text: "10 minutos" },
            { id: "b", text: "12 minutos" },
            { id: "c", text: "15 minutos" },
            { id: "d", text: "20 minutos" },
          ],
          correctAnswer: "b",
          explanation:
            "12 minutos, así que un partido dura 48 minutos. En las competiciones FIBA y en Europa, un cuarto dura 10 minutos.",
        },
        {
          id: 10,
          question: "En los Juegos de Barcelona 1992, ¿cómo se llamaba al equipo de Estados Unidos?",
          answers: [
            { id: "a", text: "El Redeem Team" },
            { id: "b", text: "El Showtime" },
            { id: "c", text: "El Dream Team" },
            { id: "d", text: "El Magic Team" },
          ],
          correctAnswer: "c",
          explanation:
            "El Dream Team, con Jordan, Magic Johnson o Larry Bird, entre otros. Era la primera vez que los jugadores de la NBA podían ir a unos Juegos. El Redeem Team fue la selección estadounidense de 2008.",
        },
      ],
    },
  },
};

export default [quizBasketball] as TranslatedQuiz[];
