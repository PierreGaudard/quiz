import type { TranslatedQuiz } from "./types";

/**
 * Quiz estimation sur les records et les chiffres de la NBA : les 100 points
 * de Chamberlain, les 73 victoires des Warriors, les titres de Russell, etc.
 *
 * Seuls des records figes ou des dates sont demandes, pour que la reponse
 * ne bouge pas d'une saison a l'autre. Le nombre d'equipes est date
 * (2025-2026) : la NBA etudie une expansion a 32 equipes, pas avant 2028.
 */
export const quizBasketballRecords: TranslatedQuiz = {
  slug: "quiz-basketball-records",
  slugs: { en: "basketball-records-quiz", fr: "quiz-basketball-records", es: "quiz-baloncesto-records" },
  categorySlug: "sport",
  subcategory: "Basketball",
  difficulty: "medium",
  coverImage: "/images/cover-basketball-records.webp",
  gameType: "estimation",
  playCount: 4300,
  translations: {
    fr: {
      title: "Quiz basket : les records de la NBA",
      description:
        "Dix chiffres à trouver sur la NBA : les 100 points de Chamberlain, les 73 victoires des Warriors ou encore les titres de Bill Russell.",
      questions: [
        {
          id: 1,
          image: "/images/q-basketball-records-01.webp",
          question: "Combien de points Wilt Chamberlain a-t-il marqués dans un seul match, en 1962 ?",
          answers: [],
          correctAnswer: "100",
          correctValue: 100,
          explanation:
            "100 points, le 2 mars 1962, contre les New York Knicks. C'est toujours le record de la NBA pour un match, et personne ne s'en est approché à part Kobe Bryant.",
        },
        {
          id: 2,
          image: "/images/q-basketball-records-02.webp",
          question: "Combien de points Kobe Bryant a-t-il marqués contre Toronto en janvier 2006 ?",
          answers: [],
          correctAnswer: "81",
          correctValue: 81,
          explanation:
            "81 points, le 22 janvier 2006. C'est la deuxième meilleure performance de l'histoire sur un match, juste derrière les 100 points de Chamberlain.",
        },
        {
          id: 3,
          question: "Combien de titres NBA d'affilée les Boston Celtics ont-ils gagnés entre 1959 et 1966 ?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Huit titres de suite, de 1959 à 1966. Aucune autre équipe n'en a enchaîné plus de trois depuis.",
        },
        {
          id: 4,
          question: "Combien de titres NBA Bill Russell a-t-il gagnés comme joueur ?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11 titres en 13 saisons, tous avec les Celtics. C'est le record pour un joueur, et les deux derniers, il les a gagnés en étant aussi l'entraîneur de l'équipe.",
        },
        {
          id: 5,
          image: "/images/q-basketball-records-03.webp",
          question: "Combien de matchs les Golden State Warriors ont-ils gagnés en saison régulière en 2015-2016 ?",
          answers: [],
          correctAnswer: "73",
          correctValue: 73,
          explanation:
            "73 victoires pour 9 défaites, le meilleur bilan de l'histoire. Ils ont battu les 72 victoires des Bulls de Jordan, mais ils ont perdu la finale contre Cleveland.",
        },
        {
          id: 6,
          question: "Combien de trophées de MVP de la saison Kareem Abdul-Jabbar a-t-il gagnés ?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Six, entre 1971 et 1980. C'est toujours le record : Michael Jordan et Bill Russell en ont cinq chacun.",
        },
        {
          id: 7,
          question: "En quelle année la ligne à trois points est-elle apparue en NBA ?",
          answers: [],
          correctAnswer: "1979",
          correctValue: 1979,
          explanation:
            "En 1979, au début de la saison 1979-1980. Le premier tir à trois points de la NBA a été réussi par Chris Ford, des Celtics, le 12 octobre 1979.",
        },
        {
          id: 8,
          question: "En quelle année a été créée la ligue qui est devenue la NBA ?",
          answers: [],
          correctAnswer: "1946",
          correctValue: 1946,
          explanation:
            "En 1946, sous le nom de BAA (Basketball Association of America). Elle a pris le nom de NBA en 1949, après sa fusion avec une ligue concurrente.",
        },
        {
          id: 9,
          question: "Combien de secondes une équipe a-t-elle pour tirer, en NBA ?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24 secondes, depuis la saison 1954-1955. Avant, une équipe qui menait pouvait garder le ballon sans tirer, et ça donnait des matchs très ennuyeux.",
        },
        {
          id: 10,
          image: "/images/q-basketball-records-04.webp",
          question: "Combien d'équipes comptait la NBA lors de la saison 2025-2026 ?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 équipes, 29 aux États-Unis et une au Canada, les Toronto Raptors. La ligue étudie l'arrivée de Seattle et de Las Vegas, mais pas avant 2028.",
        },
      ],
    },
    en: {
      title: "Basketball quiz: NBA records",
      description:
        "Ten NBA numbers to guess: Chamberlain's 100-point game, the Warriors' 73 wins, Bill Russell's rings and a few more.",
      questions: [
        {
          id: 1,
          image: "/images/q-basketball-records-01.webp",
          question: "How many points did Wilt Chamberlain score in a single game in 1962?",
          answers: [],
          correctAnswer: "100",
          correctValue: 100,
          explanation:
            "100 points, on March 2, 1962, against the New York Knicks. It's still the NBA record for one game, and only Kobe Bryant has come anywhere close.",
        },
        {
          id: 2,
          image: "/images/q-basketball-records-02.webp",
          question: "How many points did Kobe Bryant score against Toronto in January 2006?",
          answers: [],
          correctAnswer: "81",
          correctValue: 81,
          explanation:
            "81 points, on January 22, 2006. That's the second-best scoring game ever, right behind Chamberlain's 100.",
        },
        {
          id: 3,
          question: "How many NBA titles in a row did the Boston Celtics win between 1959 and 1966?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Eight straight, from 1959 to 1966. No other team has put together more than three in a row since.",
        },
        {
          id: 4,
          question: "How many NBA titles did Bill Russell win as a player?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11 titles in 13 seasons, all with the Celtics. That's the record for a player, and he won the last two while also coaching the team.",
        },
        {
          id: 5,
          image: "/images/q-basketball-records-03.webp",
          question: "How many regular-season games did the Golden State Warriors win in 2015-16?",
          answers: [],
          correctAnswer: "73",
          correctValue: 73,
          explanation:
            "73 wins and 9 losses, the best record ever. They beat the 72 wins of Jordan's Bulls, but then lost the Finals to Cleveland.",
        },
        {
          id: 6,
          question: "How many regular-season MVP awards did Kareem Abdul-Jabbar win?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Six, between 1971 and 1980. It's still the record. Michael Jordan and Bill Russell have five each.",
        },
        {
          id: 7,
          question: "In what year did the three-point line arrive in the NBA?",
          answers: [],
          correctAnswer: "1979",
          correctValue: 1979,
          explanation:
            "In 1979, at the start of the 1979-80 season. Chris Ford of the Celtics made the league's first three-pointer on October 12, 1979.",
        },
        {
          id: 8,
          question: "In what year was the league that became the NBA founded?",
          answers: [],
          correctAnswer: "1946",
          correctValue: 1946,
          explanation:
            "In 1946, as the BAA (Basketball Association of America). It took the NBA name in 1949, after merging with a rival league.",
        },
        {
          id: 9,
          question: "How many seconds does a team have to shoot in the NBA?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24 seconds, since the 1954-55 season. Before that, a team with the lead could just hold the ball, and games got very dull.",
        },
        {
          id: 10,
          image: "/images/q-basketball-records-04.webp",
          question: "How many teams were in the NBA in the 2025-26 season?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 teams, 29 in the US and one in Canada, the Toronto Raptors. The league is looking at adding Seattle and Las Vegas, but not before 2028.",
        },
      ],
    },
    es: {
      title: "Quiz de baloncesto: los récords de la NBA",
      description:
        "Diez cifras de la NBA para adivinar: los 100 puntos de Chamberlain, las 73 victorias de los Warriors o los anillos de Bill Russell.",
      questions: [
        {
          id: 1,
          image: "/images/q-basketball-records-01.webp",
          question: "¿Cuántos puntos anotó Wilt Chamberlain en un solo partido en 1962?",
          answers: [],
          correctAnswer: "100",
          correctValue: 100,
          explanation:
            "100 puntos, el 2 de marzo de 1962, contra los New York Knicks. Sigue siendo el récord de la NBA en un partido, y solo Kobe Bryant se le ha acercado.",
        },
        {
          id: 2,
          image: "/images/q-basketball-records-02.webp",
          question: "¿Cuántos puntos anotó Kobe Bryant contra Toronto en enero de 2006?",
          answers: [],
          correctAnswer: "81",
          correctValue: 81,
          explanation:
            "81 puntos, el 22 de enero de 2006. Es la segunda mejor anotación de la historia en un partido, justo detrás de los 100 de Chamberlain.",
        },
        {
          id: 3,
          question: "¿Cuántos títulos seguidos ganaron los Boston Celtics entre 1959 y 1966?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Ocho seguidos, de 1959 a 1966. Desde entonces ningún equipo ha encadenado más de tres.",
        },
        {
          id: 4,
          question: "¿Cuántos títulos de la NBA ganó Bill Russell como jugador?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11 títulos en 13 temporadas, todos con los Celtics. Es el récord para un jugador, y los dos últimos los ganó siendo también el entrenador del equipo.",
        },
        {
          id: 5,
          image: "/images/q-basketball-records-03.webp",
          question: "¿Cuántos partidos de temporada regular ganaron los Golden State Warriors en 2015-2016?",
          answers: [],
          correctAnswer: "73",
          correctValue: 73,
          explanation:
            "73 victorias y 9 derrotas, el mejor balance de la historia. Superaron las 72 victorias de los Bulls de Jordan, pero luego perdieron la final contra Cleveland.",
        },
        {
          id: 6,
          question: "¿Cuántos premios MVP de la temporada ganó Kareem Abdul-Jabbar?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Seis, entre 1971 y 1980. Sigue siendo el récord: Michael Jordan y Bill Russell tienen cinco cada uno.",
        },
        {
          id: 7,
          question: "¿En qué año llegó la línea de tres puntos a la NBA?",
          answers: [],
          correctAnswer: "1979",
          correctValue: 1979,
          explanation:
            "En 1979, al empezar la temporada 1979-1980. El primer triple de la liga lo metió Chris Ford, de los Celtics, el 12 de octubre de 1979.",
        },
        {
          id: 8,
          question: "¿En qué año se fundó la liga que acabó siendo la NBA?",
          answers: [],
          correctAnswer: "1946",
          correctValue: 1946,
          explanation:
            "En 1946, con el nombre de BAA (Basketball Association of America). Pasó a llamarse NBA en 1949, después de fusionarse con una liga rival.",
        },
        {
          id: 9,
          question: "¿Cuántos segundos tiene un equipo para tirar en la NBA?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24 segundos, desde la temporada 1954-1955. Antes, un equipo que iba ganando podía quedarse con el balón sin tirar, y los partidos se hacían eternos.",
        },
        {
          id: 10,
          image: "/images/q-basketball-records-04.webp",
          question: "¿Cuántos equipos tenía la NBA en la temporada 2025-2026?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 equipos, 29 en Estados Unidos y uno en Canadá, los Toronto Raptors. La liga estudia sumar a Seattle y Las Vegas, pero no antes de 2028.",
        },
      ],
    },
  },
};

export default [quizBasketballRecords] as TranslatedQuiz[];
