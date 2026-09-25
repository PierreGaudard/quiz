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
        "Vingt nombres à trouver sur la série FIFA d'EA Sports, de 1993 à FIFA 23. Tu proposes, on te dit plus haut ou plus bas.",
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
        {
          id: 11,
          question: "En quelle année a été fondée Electronic Arts, l'éditeur des jeux FIFA ?",
          answers: [],
          correctAnswer: "1982",
          correctValue: 1982,
          explanation:
            "En 1982, en Californie. La marque EA Sports, elle, est arrivée au début des années 1990, juste avant le premier FIFA.",
        },
        {
          id: 12,
          question: "Combien de sélections nationales pouvait-on jouer dans le mode qualifications de FIFA 98 : En route pour la Coupe du monde ?",
          answers: [],
          correctAnswer: "172",
          correctValue: 172,
          explanation:
            "172, toutes les sélections qui avaient participé aux qualifications de la Coupe du monde 1998. C'était énorme pour l'époque.",
        },
        {
          id: 13,
          question: "Et combien de stades comptait FIFA 98 : En route pour la Coupe du monde ?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16 stades. Le jeu avait aussi un mode en salle, un souvenir des premiers FIFA.",
        },
        {
          id: 14,
          question: "En quelle année est sorti le premier FIFA Street, avec Ronaldinho sur la jaquette ?",
          answers: [],
          correctAnswer: "2005",
          correctValue: 2005,
          explanation:
            "En 2005, en février. FIFA Street se jouait à quatre contre quatre dans la rue, avec des gestes techniques à enchaîner. FIFA Street 2 a suivi un an plus tard.",
        },
        {
          id: 15,
          question: "En quelle année est sorti le mode Volta, le football de rue dans le jeu principal ?",
          answers: [],
          correctAnswer: "2019",
          correctValue: 2019,
          explanation:
            "En 2019, avec FIFA 20. Volta reprenait l'idée de FIFA Street, avec des petits terrains et des équipes réduites.",
        },
        {
          id: 16,
          question: "Pour la technologie HyperMotion de FIFA 22, combien de vrais joueurs ont disputé un match en combinaison de capture de mouvement ?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22, soit deux équipes complètes, qui ont joué un vrai match à pleine intensité. Leurs mouvements ont servi à rendre les animations du jeu plus naturelles.",
        },
        {
          id: 17,
          question: "Combien de championnats féminins de clubs y avait-il dans FIFA 23, le premier FIFA à en proposer ?",
          answers: [],
          correctAnswer: "2",
          correctValue: 2,
          explanation:
            "2 : la Women's Super League anglaise et la D1 française. Jusque-là, on ne pouvait jouer que des sélections nationales féminines.",
        },
        {
          id: 18,
          question: "Dans Ultimate Team sur FIFA 23, combien de points de collectif une équipe peut-elle avoir au maximum ?",
          answers: [],
          correctAnswer: "33",
          correctValue: 33,
          explanation:
            "33, soit 3 points pour chacun des 11 titulaires. Avant FIFA 23, le collectif se comptait sur 100.",
        },
        {
          id: 19,
          question: "Quelle est la note générale la plus haute qu'un joueur peut avoir dans un FIFA ?",
          answers: [],
          correctAnswer: "99",
          correctValue: 99,
          explanation:
            "99. Dans les jeux de base, les meilleures stars tournent plutôt entre 91 et 94, assez loin de ce maximum.",
        },
        {
          id: 20,
          question: "En quelle année est sorti EA Sports FC 24, le premier jeu après la fin du nom FIFA ?",
          answers: [],
          correctAnswer: "2023",
          correctValue: 2023,
          explanation:
            "En 2023, le 29 septembre. C'est Erling Haaland qui était sur la jaquette de l'édition standard.",
        },
      ],
    },
    en: {
      title: "Estimation: the numbers behind FIFA",
      description:
        "Twenty numbers to find about EA Sports' FIFA series, from 1993 to FIFA 23. You guess, we tell you higher or lower.",
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
        {
          id: 11,
          question: "In what year was Electronic Arts, the publisher of the FIFA games, founded?",
          answers: [],
          correctAnswer: "1982",
          correctValue: 1982,
          explanation:
            "In 1982, in California. The EA Sports brand came later, in the early 1990s, just before the first FIFA.",
        },
        {
          id: 12,
          question: "How many national teams could you play in the qualifying mode of FIFA: Road to World Cup 98?",
          answers: [],
          correctAnswer: "172",
          correctValue: 172,
          explanation:
            "172, every national team that took part in qualifying for the 1998 World Cup. That was huge for the time.",
        },
        {
          id: 13,
          question: "And how many stadiums did FIFA: Road to World Cup 98 have?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16 stadiums. The game also had an indoor mode, a leftover from the early FIFA games.",
        },
        {
          id: 14,
          question: "In what year did the first FIFA Street come out, with Ronaldinho on the cover?",
          answers: [],
          correctAnswer: "2005",
          correctValue: 2005,
          explanation:
            "In 2005, in February. FIFA Street was played four against four on the streets, chaining tricks together. FIFA Street 2 followed a year later.",
        },
        {
          id: 15,
          question: "In what year did Volta, the street football mode in the main game, come out?",
          answers: [],
          correctAnswer: "2019",
          correctValue: 2019,
          explanation:
            "In 2019, with FIFA 20. Volta took the idea of FIFA Street, with small pitches and smaller teams.",
        },
        {
          id: 16,
          question: "For FIFA 22's HyperMotion technology, how many real players played a match in motion capture suits?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22, so two full teams, who played a real match at full intensity. Their movements were used to make the game's animations more natural.",
        },
        {
          id: 17,
          question: "How many women's club leagues were in FIFA 23, the first FIFA to include any?",
          answers: [],
          correctAnswer: "2",
          correctValue: 2,
          explanation:
            "2: England's Women's Super League and France's Division 1. Until then, you could only play women's national teams.",
        },
        {
          id: 18,
          question: "In FIFA 23 Ultimate Team, what's the maximum number of chemistry points a team can have?",
          answers: [],
          correctAnswer: "33",
          correctValue: 33,
          explanation:
            "33, which is 3 points for each of the 11 starters. Before FIFA 23, chemistry was counted out of 100.",
        },
        {
          id: 19,
          question: "What's the highest overall rating a player can have in a FIFA game?",
          answers: [],
          correctAnswer: "99",
          correctValue: 99,
          explanation:
            "99. In the base games, the top stars usually sit between 91 and 94, a fair way below that maximum.",
        },
        {
          id: 20,
          question: "In what year did EA Sports FC 24, the first game after the FIFA name was dropped, come out?",
          answers: [],
          correctAnswer: "2023",
          correctValue: 2023,
          explanation:
            "In 2023, on September 29. Erling Haaland was on the cover of the standard edition.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras de FIFA",
      description:
        "Veinte números que encontrar sobre la saga FIFA de EA Sports, de 1993 a FIFA 23. Propones y te decimos más alto o más bajo.",
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
        {
          id: 11,
          question: "¿En qué año se fundó Electronic Arts, la editora de los FIFA?",
          answers: [],
          correctAnswer: "1982",
          correctValue: 1982,
          explanation:
            "En 1982, en California. La marca EA Sports llegó más tarde, a principios de los años 90, justo antes del primer FIFA.",
        },
        {
          id: 12,
          question: "¿Cuántas selecciones nacionales se podían jugar en el modo clasificación de FIFA: Rumbo al Mundial 98?",
          answers: [],
          correctAnswer: "172",
          correctValue: 172,
          explanation:
            "172, todas las selecciones que jugaron la fase de clasificación del Mundial de 1998. Para la época, era muchísimo.",
        },
        {
          id: 13,
          question: "¿Y cuántos estadios tenía FIFA: Rumbo al Mundial 98?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16 estadios. El juego también tenía un modo de fútbol sala, un recuerdo de los primeros FIFA.",
        },
        {
          id: 14,
          question: "¿En qué año salió el primer FIFA Street, con Ronaldinho en la portada?",
          answers: [],
          correctAnswer: "2005",
          correctValue: 2005,
          explanation:
            "En 2005, en febrero. FIFA Street se jugaba cuatro contra cuatro en la calle, encadenando regates. FIFA Street 2 llegó un año después.",
        },
        {
          id: 15,
          question: "¿En qué año salió el modo Volta, el fútbol callejero dentro del juego principal?",
          answers: [],
          correctAnswer: "2019",
          correctValue: 2019,
          explanation:
            "En 2019, con FIFA 20. Volta retomaba la idea de FIFA Street, con campos pequeños y equipos reducidos.",
        },
        {
          id: 16,
          question: "Para la tecnología HyperMotion de FIFA 22, ¿cuántos jugadores reales disputaron un partido con trajes de captura de movimiento?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22, es decir, dos equipos completos, que jugaron un partido de verdad a máxima intensidad. Sus movimientos sirvieron para que las animaciones del juego fueran más naturales.",
        },
        {
          id: 17,
          question: "¿Cuántas ligas femeninas de clubes había en FIFA 23, el primer FIFA que las incluyó?",
          answers: [],
          correctAnswer: "2",
          correctValue: 2,
          explanation:
            "2: la Women's Super League inglesa y la D1 francesa. Hasta entonces solo se podían jugar selecciones nacionales femeninas.",
        },
        {
          id: 18,
          question: "En Ultimate Team de FIFA 23, ¿cuántos puntos de química puede tener como máximo un equipo?",
          answers: [],
          correctAnswer: "33",
          correctValue: 33,
          explanation:
            "33, es decir, 3 puntos para cada uno de los 11 titulares. Antes de FIFA 23, la química se contaba sobre 100.",
        },
        {
          id: 19,
          question: "¿Cuál es la media general más alta que puede tener un jugador en un FIFA?",
          answers: [],
          correctAnswer: "99",
          correctValue: 99,
          explanation:
            "99. En los juegos base, las grandes estrellas suelen estar entre 91 y 94, bastante lejos de ese máximo.",
        },
        {
          id: 20,
          question: "¿En qué año salió EA Sports FC 24, el primer juego después del fin del nombre FIFA?",
          answers: [],
          correctAnswer: "2023",
          correctValue: 2023,
          explanation:
            "En 2023, el 29 de septiembre. En la portada de la edición estándar estaba Erling Haaland.",
        },
      ],
    },
  },
};

export default [quizFifa] as TranslatedQuiz[];
