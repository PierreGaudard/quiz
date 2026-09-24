import type { TranslatedQuiz } from "./types";

/**
 * Quiz FIFA en mode estimation : les dates et les chiffres de la série de
 * jeux de football d'EA Sports, de FIFA International Soccer (1993) à
 * FIFA 23, le dernier à porter le nom FIFA.
 *
 * Même logique que quiz-jo.ts : tolérance de 5 % et cinq essais. Les petits
 * nombres (3, 12, 23, 30) se jouent au nombre exact, les années et le chiffre
 * des ventes laissent un peu de marge.
 */
export const quizFifa: TranslatedQuiz = {
  slug: "quiz-fifa",
  slugs: { en: "fifa-quiz", fr: "quiz-fifa", es: "quiz-fifa" },
  categorySlug: "jeux-video",
  subcategory: "FIFA",
  difficulty: "medium",
  coverImage: "/images/sub-fifa.webp",
  gameType: "estimation",
  playCount: 5600,
  translations: {
    fr: {
      title: "Estimation : les chiffres de FIFA",
      description:
        "Dix nombres à trouver sur la série FIFA d'EA Sports, de 1993 à FIFA 23. Tu proposes, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-01.webp",
          question: "En quelle année est sorti le tout premier jeu FIFA, FIFA International Soccer ?",
          answers: [],
          correctAnswer: "1993",
          correctValue: 1993,
          explanation:
            "En 1993, le 15 décembre. Le jeu est sorti d'abord sur Mega Drive, et c'est le point de départ de toute la série.",
        },
        {
          id: 2,
          question: "Combien d'années a duré le partenariat entre EA et la FIFA ?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 ans. EA et la FIFA ont travaillé ensemble de 1993 à 2023, et les jeux s'appellent EA Sports FC depuis.",
        },
        {
          id: 3,
          image: "/images/q-fifa-03.webp",
          question: "En quelle année le mode Ultimate Team est-il apparu ?",
          answers: [],
          correctAnswer: "2009",
          correctValue: 2009,
          explanation:
            "En mars 2009, sous forme de contenu à télécharger pour FIFA 09. Au départ c'était un petit bonus payant, et c'est devenu l'un des modes les plus connus de la série.",
        },
        {
          id: 4,
          question: "En quelle année EA a-t-il annoncé que ses jeux ne s'appelleraient plus FIFA ?",
          answers: [],
          correctAnswer: "2022",
          correctValue: 2022,
          explanation:
            "Le 10 mai 2022. EA a annoncé à ce moment-là la fin de son contrat avec la FIFA et le nouveau nom, EA Sports FC.",
        },
        {
          id: 5,
          image: "/images/q-fifa-05.webp",
          question: "Combien de sélections nationales féminines y avait-il dans FIFA 16 ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12, dont la France, les États-Unis, le Brésil ou encore l'Allemagne. FIFA 16 est le premier jeu de la série avec des joueuses.",
        },
        {
          id: 6,
          image: "/images/q-fifa-06.webp",
          question: "Quel numéro porte le dernier jeu d'EA sorti sous le nom FIFA ?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "FIFA 23, sorti le 27 septembre 2022. Le jeu suivant s'appelle EA Sports FC 24.",
        },
        {
          id: 7,
          question: "En 2021, combien de millions d'exemplaires la série FIFA avait-elle vendus ?",
          answers: [],
          correctAnswer: "325",
          correctValue: 325,
          explanation:
            "Plus de 325 millions d'exemplaires. Ça en fait l'une des séries de jeux vidéo les plus vendues au monde.",
        },
        {
          id: 8,
          question: "Kylian Mbappé a fait la couverture de FIFA combien d'années de suite ?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "3 années de suite : FIFA 21, FIFA 22 et FIFA 23. Il est d'ailleurs sur la jaquette du tout dernier FIFA.",
        },
        {
          id: 9,
          question: "En quelle année a eu lieu la première Coupe du monde de FIFA en e-sport, la FIFA Interactive World Cup ?",
          answers: [],
          correctAnswer: "2004",
          correctValue: 2004,
          explanation:
            "En 2004, en Suisse. C'est le Brésilien Thiago Carrico de Azevedo qui l'a gagnée.",
        },
        {
          id: 10,
          question: "En quelle année est sorti FIFA 17, le premier à raconter la carrière du joueur Alex Hunter ?",
          answers: [],
          correctAnswer: "2016",
          correctValue: 2016,
          explanation:
            "En 2016. Un FIFA sort l'année qui précède son numéro, donc FIFA 17 est sorti en septembre 2016. C'était aussi le premier FIFA sur le moteur Frostbite.",
        },
      ],
    },
    en: {
      title: "Estimation: the numbers behind FIFA",
      description:
        "Ten numbers to find about EA Sports' FIFA series, from 1993 to FIFA 23. You guess, we tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-01.webp",
          question: "In what year did the very first FIFA game, FIFA International Soccer, come out?",
          answers: [],
          correctAnswer: "1993",
          correctValue: 1993,
          explanation:
            "In 1993, on December 15. It came out first on the Mega Drive, and the whole series started there.",
        },
        {
          id: 2,
          question: "How many years did the partnership between EA and FIFA last?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 years. EA and FIFA worked together from 1993 to 2023, and the games have been called EA Sports FC since then.",
        },
        {
          id: 3,
          image: "/images/q-fifa-03.webp",
          question: "In what year did the Ultimate Team mode first appear?",
          answers: [],
          correctAnswer: "2009",
          correctValue: 2009,
          explanation:
            "In March 2009, as downloadable content for FIFA 09. It started as a small paid add-on and grew into one of the best known modes in the series.",
        },
        {
          id: 4,
          question: "In what year did EA announce its games would no longer be called FIFA?",
          answers: [],
          correctAnswer: "2022",
          correctValue: 2022,
          explanation:
            "On May 10, 2022. That is when EA announced the end of its deal with FIFA and the new name, EA Sports FC.",
        },
        {
          id: 5,
          image: "/images/q-fifa-05.webp",
          question: "How many women's national teams were in FIFA 16?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12, including the USA, France, Brazil and Germany. FIFA 16 was the first game in the series with women players.",
        },
        {
          id: 6,
          image: "/images/q-fifa-06.webp",
          question: "What number does the last EA game released under the FIFA name carry?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "FIFA 23, released on September 27, 2022. The next game was called EA Sports FC 24.",
        },
        {
          id: 7,
          question: "By 2021, how many million copies had the FIFA series sold?",
          answers: [],
          correctAnswer: "325",
          correctValue: 325,
          explanation:
            "More than 325 million copies. That makes it one of the best-selling video game series in the world.",
        },
        {
          id: 8,
          question: "For how many years in a row was Kylian Mbappé on the FIFA cover?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "3 years in a row: FIFA 21, FIFA 22 and FIFA 23. So he is on the box of the very last FIFA.",
        },
        {
          id: 9,
          question: "In what year was the first FIFA esports world cup, the FIFA Interactive World Cup, held?",
          answers: [],
          correctAnswer: "2004",
          correctValue: 2004,
          explanation:
            "In 2004, in Switzerland. Brazil's Thiago Carrico de Azevedo won it.",
        },
        {
          id: 10,
          question: "In what year did FIFA 17, the first game to follow the career of Alex Hunter, come out?",
          answers: [],
          correctAnswer: "2016",
          correctValue: 2016,
          explanation:
            "In 2016. A FIFA game comes out the year before the number on its box, so FIFA 17 landed in September 2016. It was also the first FIFA on the Frostbite engine.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras de FIFA",
      description:
        "Diez números que encontrar sobre la saga FIFA de EA Sports, de 1993 a FIFA 23. Propones y te decimos más alto o más bajo.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-01.webp",
          question: "¿En qué año salió el primer FIFA, FIFA International Soccer?",
          answers: [],
          correctAnswer: "1993",
          correctValue: 1993,
          explanation:
            "En 1993, el 15 de diciembre. Salió primero en Mega Drive y ahí empezó toda la saga.",
        },
        {
          id: 2,
          question: "¿Cuántos años duró la colaboración entre EA y la FIFA?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 años. EA y la FIFA trabajaron juntas de 1993 a 2023, y desde entonces los juegos se llaman EA Sports FC.",
        },
        {
          id: 3,
          image: "/images/q-fifa-03.webp",
          question: "¿En qué año apareció el modo Ultimate Team?",
          answers: [],
          correctAnswer: "2009",
          correctValue: 2009,
          explanation:
            "En marzo de 2009, como contenido descargable de FIFA 09. Empezó como un pequeño extra de pago y acabó siendo uno de los modos más conocidos de la saga.",
        },
        {
          id: 4,
          question: "¿En qué año anunció EA que sus juegos dejarían de llamarse FIFA?",
          answers: [],
          correctAnswer: "2022",
          correctValue: 2022,
          explanation:
            "El 10 de mayo de 2022. Ese día EA anunció el fin de su contrato con la FIFA y el nuevo nombre, EA Sports FC.",
        },
        {
          id: 5,
          image: "/images/q-fifa-05.webp",
          question: "¿Cuántas selecciones nacionales femeninas había en FIFA 16?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12, entre ellas España, Estados Unidos, Brasil o Alemania. FIFA 16 fue el primer juego de la saga con jugadoras.",
        },
        {
          id: 6,
          image: "/images/q-fifa-06.webp",
          question: "¿Qué número lleva el último juego de EA con el nombre FIFA?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "FIFA 23, que salió el 27 de septiembre de 2022. El siguiente ya se llamó EA Sports FC 24.",
        },
        {
          id: 7,
          question: "En 2021, ¿cuántos millones de copias había vendido la saga FIFA?",
          answers: [],
          correctAnswer: "325",
          correctValue: 325,
          explanation:
            "Más de 325 millones de copias. Eso la convierte en una de las sagas de videojuegos más vendidas del mundo.",
        },
        {
          id: 8,
          question: "¿Cuántos años seguidos salió Kylian Mbappé en la portada de FIFA?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "3 años seguidos: FIFA 21, FIFA 22 y FIFA 23. O sea, que es él quien sale en la portada del último FIFA.",
        },
        {
          id: 9,
          question: "¿En qué año se jugó el primer mundial de FIFA en esports, la FIFA Interactive World Cup?",
          answers: [],
          correctAnswer: "2004",
          correctValue: 2004,
          explanation:
            "En 2004, en Suiza. Lo ganó el brasileño Thiago Carrico de Azevedo.",
        },
        {
          id: 10,
          question: "¿En qué año salió FIFA 17, el primero que contaba la carrera de Alex Hunter?",
          answers: [],
          correctAnswer: "2016",
          correctValue: 2016,
          explanation:
            "En 2016. Cada FIFA sale el año anterior al de su número, así que FIFA 17 llegó en septiembre de 2016. También fue el primer FIFA con el motor Frostbite.",
        },
      ],
    },
  },
};

export default [quizFifa] as TranslatedQuiz[];
