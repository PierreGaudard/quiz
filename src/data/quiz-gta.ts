import type { TranslatedQuiz } from "./types";

/**
 * Quiz GTA en mode estimation : vingt nombres sur la série Grand Theft Auto.
 *
 * Tolerance de 5 % et cinq essais (EstimationPlayer). Les annees laissent de
 * la marge, les petits nombres (3 jours, 5 etoiles, 3 heros) se jouent au
 * nombre exact. On evite les ventes de GTA V, qui bougent chaque trimestre,
 * et la date de sortie de GTA VI, pas encore sorti en septembre 2026.
 */
export const quizGta: TranslatedQuiz = {
  slug: "quiz-gta",
  slugs: { en: "gta-quiz", fr: "quiz-gta", es: "quiz-gta" },
  categorySlug: "jeux-video",
  subcategory: "GTA",
  difficulty: "medium",
  coverImage: "/images/sub-gta.webp",
  gameType: "estimation",
  playCount: 7400,
  translations: {
    fr: {
      title: "Estimation : les chiffres de GTA",
      description:
        "Vingt nombres à trouver sur Grand Theft Auto, du premier jeu de 1997 à GTA VI. Tu proposes, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-gta-01.webp",
          question: "En quelle année est sorti le tout premier Grand Theft Auto ?",
          answers: [],
          correctAnswer: "1997",
          correctValue: 1997,
          explanation:
            "1997. Le premier GTA se jouait en vue de dessus, avec des petites voitures vues du ciel, bien loin de la 3D des épisodes suivants.",
        },
        {
          id: 2,
          question: "En quelle année est sorti GTA III, le premier épisode en 3D ?",
          answers: [],
          correctAnswer: "2001",
          correctValue: 2001,
          explanation:
            "2001, sur PlayStation 2. C'est cet épisode qui fait passer la série en 3D, dans la ville de Liberty City.",
        },
        {
          id: 3,
          image: "/images/q-gta-03.webp",
          question: "En quelle année se déroule l'histoire de GTA Vice City ?",
          answers: [],
          correctAnswer: "1986",
          correctValue: 1986,
          explanation:
            "En 1986. Le jeu est sorti en 2002, mais il se passe en pleine période néon, chemises à fleurs et musique des années 80.",
        },
        {
          id: 4,
          image: "/images/q-gta-04.webp",
          question: "En quelle année se déroule l'histoire de GTA San Andreas ?",
          answers: [],
          correctAnswer: "1992",
          correctValue: 1992,
          explanation:
            "En 1992. CJ revient à Los Santos après la mort de sa mère et retrouve son quartier de Grove Street.",
        },
        {
          id: 5,
          question: "En quelle année est sorti GTA V ?",
          answers: [],
          correctAnswer: "2013",
          correctValue: 2013,
          explanation:
            "Le 17 septembre 2013, sur PlayStation 3 et Xbox 360. Il est ensuite ressorti sur PS4, Xbox One, PC, puis sur PS5 et Xbox Series.",
        },
        {
          id: 6,
          question: "En combien de jours GTA V a-t-il rapporté un milliard de dollars ?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Trois jours. Aucun produit de divertissement, film compris, n'avait atteint le milliard aussi vite à l'époque.",
        },
        {
          id: 7,
          question: "Combien d'étoiles de recherche peut-on avoir au maximum dans GTA V ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinq étoiles. À ce niveau-là, la police envoie hélicoptères et unités d'intervention. San Andreas, lui, montait jusqu'à six étoiles.",
        },
        {
          id: 8,
          image: "/images/q-gta-07.webp",
          question: "Combien de personnages jouables compte l'histoire de GTA V ?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Trois : Michael, Franklin et Trevor. On passe de l'un à l'autre presque à tout moment, ce qui était une première dans la série.",
        },
        {
          id: 9,
          question: "Combien de millions de dollars GTA V a-t-il rapporté le jour de sa sortie ?",
          answers: [],
          correctAnswer: "800",
          correctValue: 800,
          explanation:
            "800 millions de dollars en 24 heures, d'après Take-Two. Le milliard est tombé deux jours plus tard.",
        },
        {
          id: 10,
          image: "/images/q-gta-10.webp",
          question: "Combien de millions de vues sur YouTube la première bande-annonce de GTA VI a-t-elle faites en 24 heures ?",
          answers: [],
          correctAnswer: "93",
          correctValue: 93,
          explanation:
            "Plus de 93 millions, en décembre 2023. C'était le record pour une vidéo hors musique sur YouTube, loin devant les 59 millions de MrBeast.",
        },
        {
          id: 11,
          question: "En quelle année est sorti GTA San Andreas ?",
          answers: [],
          correctAnswer: "2004",
          correctValue: 2004,
          explanation:
            "En 2004, en octobre, sur PlayStation 2. C'est l'un des jeux les plus vendus de toute l'histoire de la console.",
        },
        {
          id: 12,
          question: "En quelle année est sorti GTA IV, avec Niko Bellic ?",
          answers: [],
          correctAnswer: "2008",
          correctValue: 2008,
          explanation:
            "En 2008, le 29 avril, sur PlayStation 3 et Xbox 360. La version PC est arrivée à la fin de la même année.",
        },
        {
          id: 13,
          question: "En quelle année a été créé le studio Rockstar Games ?",
          answers: [],
          correctAnswer: "1998",
          correctValue: 1998,
          explanation:
            "En 1998, à New York, notamment par les frères Sam et Dan Houser. Le premier GTA était sorti un an plus tôt, chez un autre éditeur.",
        },
        {
          id: 14,
          question: "En quelle année a été fondé DMA Design, le studio écossais qui a créé le premier GTA ?",
          answers: [],
          correctAnswer: "1988",
          correctValue: 1988,
          explanation:
            "En 1988, à Dundee, par David Jones. Avant GTA, le studio avait fait Lemmings. Il s'appelle aujourd'hui Rockstar North, et c'est lui qui fait les GTA principaux.",
        },
        {
          id: 15,
          question: "En quelle année se passe GTA London, l'extension du premier GTA sortie en 1999 ?",
          answers: [],
          correctAnswer: "1969",
          correctValue: 1969,
          explanation:
            "En 1969, en plein Swinging London. Avec GTA London 1961, sorti la même année, ce sont les seuls GTA qui se passent hors des États-Unis.",
        },
        {
          id: 16,
          question: "En combien d'îles est découpée la Liberty City de GTA III ?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Trois : Portland, Staunton Island et Shoreside Vale. On commence à Portland, et les deux autres îles s'ouvrent au fil de l'histoire.",
        },
        {
          id: 17,
          question: "En quelle année éclate l'affaire « Hot Coffee », une scène cachée dans San Andreas ?",
          answers: [],
          correctAnswer: "2005",
          correctValue: 2005,
          explanation:
            "En 2005. Des joueurs ont débloqué sur PC une scène de sexe restée dans le code du jeu, et San Andreas a été reclassé pour adultes aux États-Unis, le temps de sortir une version corrigée.",
        },
        {
          id: 18,
          question: "En quelle année GTA V est-il ressorti sur PS5 et Xbox Series ?",
          answers: [],
          correctAnswer: "2022",
          correctValue: 2022,
          explanation:
            "En 2022, le 15 mars. C'était la troisième génération de consoles pour le jeu, sorti en 2013 sur PS3 et Xbox 360.",
        },
        {
          id: 19,
          question: "En mai 2025, combien de millions de vues la deuxième bande-annonce de GTA VI a-t-elle faites en 24 heures, toutes plateformes confondues ?",
          answers: [],
          correctAnswer: "475",
          correctValue: 475,
          explanation:
            "475 millions, un record. La vidéo montrait Jason et Lucia, et encore plus de Vice City que la première bande-annonce.",
        },
        {
          id: 20,
          question: "En quelle année est sorti GTA Chinatown Wars, d'abord sur Nintendo DS ?",
          answers: [],
          correctAnswer: "2009",
          correctValue: 2009,
          explanation:
            "En 2009. Le jeu revenait à une vue de dessus, comme les premiers GTA, et son héros, Huang Lee, arrive à Liberty City pour livrer une épée à son oncle.",
        },
      ],
    },
    en: {
      title: "Estimation: the numbers behind GTA",
      description:
        "Twenty numbers to find about Grand Theft Auto, from the first 1997 game to GTA VI. You guess, we tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-gta-01.webp",
          question: "In what year did the very first Grand Theft Auto come out?",
          answers: [],
          correctAnswer: "1997",
          correctValue: 1997,
          explanation:
            "1997. The first GTA was played from a top-down view, with tiny cars seen from above, nothing like the 3D of the later games.",
        },
        {
          id: 2,
          question: "In what year did GTA III, the first 3D game in the series, come out?",
          answers: [],
          correctAnswer: "2001",
          correctValue: 2001,
          explanation:
            "2001, on PlayStation 2. That's the game that took the series into 3D, in Liberty City.",
        },
        {
          id: 3,
          image: "/images/q-gta-03.webp",
          question: "In what year is the story of GTA Vice City set?",
          answers: [],
          correctAnswer: "1986",
          correctValue: 1986,
          explanation:
            "1986. The game came out in 2002, but it's set right in the neon, flowery shirts and 80s music era.",
        },
        {
          id: 4,
          image: "/images/q-gta-04.webp",
          question: "In what year is the story of GTA San Andreas set?",
          answers: [],
          correctAnswer: "1992",
          correctValue: 1992,
          explanation:
            "1992. CJ comes back to Los Santos after his mother's death and finds his old Grove Street neighborhood.",
        },
        {
          id: 5,
          question: "In what year did GTA V come out?",
          answers: [],
          correctAnswer: "2013",
          correctValue: 2013,
          explanation:
            "September 17, 2013, on PlayStation 3 and Xbox 360. It was later re-released on PS4, Xbox One, PC, then PS5 and Xbox Series.",
        },
        {
          id: 6,
          question: "How many days did it take GTA V to make a billion dollars?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Three days. No entertainment product, movies included, had reached a billion that fast at the time.",
        },
        {
          id: 7,
          question: "What's the maximum number of wanted stars in GTA V?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Five stars. At that point the police send helicopters and SWAT teams. San Andreas went up to six stars.",
        },
        {
          id: 8,
          image: "/images/q-gta-07.webp",
          question: "How many playable characters are there in the GTA V story?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Three: Michael, Franklin and Trevor. You can switch between them at almost any time, which was a first for the series.",
        },
        {
          id: 9,
          question: "How many million dollars did GTA V make on its release day?",
          answers: [],
          correctAnswer: "800",
          correctValue: 800,
          explanation:
            "$800 million in 24 hours, according to Take-Two. The billion came two days later.",
        },
        {
          id: 10,
          image: "/images/q-gta-10.webp",
          question: "How many million YouTube views did the first GTA VI trailer get in 24 hours?",
          answers: [],
          correctAnswer: "93",
          correctValue: 93,
          explanation:
            "Over 93 million, in December 2023. That was the record for a non-music video on YouTube, well ahead of MrBeast's 59 million.",
        },
        {
          id: 11,
          question: "In what year did GTA San Andreas come out?",
          answers: [],
          correctAnswer: "2004",
          correctValue: 2004,
          explanation:
            "In 2004, in October, on PlayStation 2. It's one of the best-selling games in the console's whole history.",
        },
        {
          id: 12,
          question: "In what year did GTA IV, starring Niko Bellic, come out?",
          answers: [],
          correctAnswer: "2008",
          correctValue: 2008,
          explanation:
            "In 2008, on April 29, on PlayStation 3 and Xbox 360. The PC version followed at the end of the same year.",
        },
        {
          id: 13,
          question: "In what year was Rockstar Games founded?",
          answers: [],
          correctAnswer: "1998",
          correctValue: 1998,
          explanation:
            "In 1998, in New York, with brothers Sam and Dan Houser among the founders. The first GTA had come out a year earlier, under another publisher.",
        },
        {
          id: 14,
          question: "In what year was DMA Design, the Scottish studio that made the first GTA, founded?",
          answers: [],
          correctAnswer: "1988",
          correctValue: 1988,
          explanation:
            "In 1988, in Dundee, by David Jones. Before GTA, the studio made Lemmings. Today it's called Rockstar North, and it's the studio behind the main GTA games.",
        },
        {
          id: 15,
          question: "In what year is GTA London, the expansion for the first GTA released in 1999, set?",
          answers: [],
          correctAnswer: "1969",
          correctValue: 1969,
          explanation:
            "In 1969, in the middle of Swinging London. Along with GTA London 1961, released the same year, they're the only GTA games set outside the United States.",
        },
        {
          id: 16,
          question: "How many islands is GTA III's Liberty City split into?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Three: Portland, Staunton Island and Shoreside Vale. You start in Portland, and the other two islands open up as the story goes on.",
        },
        {
          id: 17,
          question: "In what year did the \"Hot Coffee\" scandal, over a hidden scene in San Andreas, break?",
          answers: [],
          correctAnswer: "2005",
          correctValue: 2005,
          explanation:
            "In 2005. PC players unlocked a sex scene left in the game's code, and San Andreas was re-rated adults-only in the United States until a fixed version came out.",
        },
        {
          id: 18,
          question: "In what year did GTA V come out again on PS5 and Xbox Series?",
          answers: [],
          correctAnswer: "2022",
          correctValue: 2022,
          explanation:
            "In 2022, on March 15. That was the game's third console generation, after launching in 2013 on PS3 and Xbox 360.",
        },
        {
          id: 19,
          question: "In May 2025, how many millions of views did the second GTA VI trailer get in 24 hours, across all platforms?",
          answers: [],
          correctAnswer: "475",
          correctValue: 475,
          explanation:
            "475 million, a record. The video showed Jason and Lucia, and even more of Vice City than the first trailer.",
        },
        {
          id: 20,
          question: "In what year did GTA Chinatown Wars come out, first on Nintendo DS?",
          answers: [],
          correctAnswer: "2009",
          correctValue: 2009,
          explanation:
            "In 2009. The game went back to a top-down view, like the early GTAs, and its hero, Huang Lee, comes to Liberty City to deliver a sword to his uncle.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras de GTA",
      description:
        "Veinte números sobre Grand Theft Auto, desde el primer juego de 1997 hasta GTA VI. Tú propones y te decimos si es más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-gta-01.webp",
          question: "¿En qué año salió el primer Grand Theft Auto?",
          answers: [],
          correctAnswer: "1997",
          correctValue: 1997,
          explanation:
            "En 1997. El primer GTA se jugaba con vista cenital, con cochecitos vistos desde arriba, nada que ver con el 3D de las entregas siguientes.",
        },
        {
          id: 2,
          question: "¿En qué año salió GTA III, el primer juego de la saga en 3D?",
          answers: [],
          correctAnswer: "2001",
          correctValue: 2001,
          explanation:
            "En 2001, en PlayStation 2. Con este juego la saga pasa al 3D, en Liberty City.",
        },
        {
          id: 3,
          image: "/images/q-gta-03.webp",
          question: "¿En qué año transcurre la historia de GTA Vice City?",
          answers: [],
          correctAnswer: "1986",
          correctValue: 1986,
          explanation:
            "En 1986. El juego salió en 2002, pero está ambientado en plena época de neones, camisas de flores y música de los 80.",
        },
        {
          id: 4,
          image: "/images/q-gta-04.webp",
          question: "¿En qué año transcurre la historia de GTA San Andreas?",
          answers: [],
          correctAnswer: "1992",
          correctValue: 1992,
          explanation:
            "En 1992. CJ vuelve a Los Santos tras la muerte de su madre y se reencuentra con su barrio de Grove Street.",
        },
        {
          id: 5,
          question: "¿En qué año salió GTA V?",
          answers: [],
          correctAnswer: "2013",
          correctValue: 2013,
          explanation:
            "El 17 de septiembre de 2013, en PlayStation 3 y Xbox 360. Después volvió a salir en PS4, Xbox One, PC, y luego en PS5 y Xbox Series.",
        },
        {
          id: 6,
          question: "¿En cuántos días recaudó GTA V mil millones de dólares?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "En tres días. Ningún producto de entretenimiento, ni siquiera una película, había llegado tan rápido a esa cifra.",
        },
        {
          id: 7,
          question: "¿Cuántas estrellas de búsqueda se pueden tener como máximo en GTA V?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinco estrellas. Con ese nivel la policía manda helicópteros y equipos SWAT. En San Andreas se llegaba a seis.",
        },
        {
          id: 8,
          image: "/images/q-gta-07.webp",
          question: "¿Cuántos personajes jugables tiene la historia de GTA V?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Tres: Michael, Franklin y Trevor. Se puede cambiar de uno a otro casi en cualquier momento, algo nuevo en la saga.",
        },
        {
          id: 9,
          question: "¿Cuántos millones de dólares recaudó GTA V el día de su lanzamiento?",
          answers: [],
          correctAnswer: "800",
          correctValue: 800,
          explanation:
            "800 millones de dólares en 24 horas, según Take-Two. Los mil millones llegaron dos días después.",
        },
        {
          id: 10,
          image: "/images/q-gta-10.webp",
          question: "¿Cuántos millones de visualizaciones tuvo en YouTube el primer tráiler de GTA VI en 24 horas?",
          answers: [],
          correctAnswer: "93",
          correctValue: 93,
          explanation:
            "Más de 93 millones, en diciembre de 2023. Fue el récord para un vídeo no musical en YouTube, muy por delante de los 59 millones de MrBeast.",
        },
        {
          id: 11,
          question: "¿En qué año salió GTA San Andreas?",
          answers: [],
          correctAnswer: "2004",
          correctValue: 2004,
          explanation:
            "En 2004, en octubre, en PlayStation 2. Es uno de los juegos más vendidos de toda la historia de la consola.",
        },
        {
          id: 12,
          question: "¿En qué año salió GTA IV, con Niko Bellic?",
          answers: [],
          correctAnswer: "2008",
          correctValue: 2008,
          explanation:
            "En 2008, el 29 de abril, en PlayStation 3 y Xbox 360. La versión para PC llegó a finales de ese mismo año.",
        },
        {
          id: 13,
          question: "¿En qué año se fundó Rockstar Games?",
          answers: [],
          correctAnswer: "1998",
          correctValue: 1998,
          explanation:
            "En 1998, en Nueva York, entre otros por los hermanos Sam y Dan Houser. El primer GTA había salido un año antes, con otra editora.",
        },
        {
          id: 14,
          question: "¿En qué año se fundó DMA Design, el estudio escocés que creó el primer GTA?",
          answers: [],
          correctAnswer: "1988",
          correctValue: 1988,
          explanation:
            "En 1988, en Dundee, por David Jones. Antes de GTA, el estudio había hecho Lemmings. Hoy se llama Rockstar North, y es el que hace los GTA principales.",
        },
        {
          id: 15,
          question: "¿En qué año transcurre GTA London, la expansión del primer GTA que salió en 1999?",
          answers: [],
          correctAnswer: "1969",
          correctValue: 1969,
          explanation:
            "En 1969, en pleno Swinging London. Junto con GTA London 1961, del mismo año, son los únicos GTA que transcurren fuera de Estados Unidos.",
        },
        {
          id: 16,
          question: "¿En cuántas islas se divide la Liberty City de GTA III?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Tres: Portland, Staunton Island y Shoreside Vale. Se empieza en Portland, y las otras dos islas se abren a medida que avanza la historia.",
        },
        {
          id: 17,
          question: "¿En qué año estalla el escándalo \"Hot Coffee\", por una escena oculta en San Andreas?",
          answers: [],
          correctAnswer: "2005",
          correctValue: 2005,
          explanation:
            "En 2005. Unos jugadores de PC desbloquearon una escena de sexo que se había quedado en el código del juego, y San Andreas pasó a ser solo para adultos en Estados Unidos hasta que salió una versión corregida.",
        },
        {
          id: 18,
          question: "¿En qué año volvió a salir GTA V en PS5 y Xbox Series?",
          answers: [],
          correctAnswer: "2022",
          correctValue: 2022,
          explanation:
            "En 2022, el 15 de marzo. Era la tercera generación de consolas para el juego, que salió en 2013 en PS3 y Xbox 360.",
        },
        {
          id: 19,
          question: "En mayo de 2025, ¿cuántos millones de visualizaciones tuvo el segundo tráiler de GTA VI en 24 horas, sumando todas las plataformas?",
          answers: [],
          correctAnswer: "475",
          correctValue: 475,
          explanation:
            "475 millones, un récord. El vídeo mostraba a Jason y Lucia, y todavía más de Vice City que el primer tráiler.",
        },
        {
          id: 20,
          question: "¿En qué año salió GTA Chinatown Wars, primero en Nintendo DS?",
          answers: [],
          correctAnswer: "2009",
          correctValue: 2009,
          explanation:
            "En 2009. El juego volvía a la vista desde arriba, como los primeros GTA, y su protagonista, Huang Lee, llega a Liberty City para entregar una espada a su tío.",
        },
      ],
    },
  },
};

export default [quizGta] as TranslatedQuiz[];
