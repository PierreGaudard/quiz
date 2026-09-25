import type { TranslatedQuiz } from "./types";

/**
 * Quiz estimation sur le cyclisme, surtout le Tour de France : dates,
 * records et chiffres de course.
 *
 * Meme logique que quiz-jo.ts : tolerance de 5 % et cinq essais. Les petits
 * nombres (6 etapes, 5 victoires, 21 etapes) se jouent au chiffre exact,
 * les annees et les 2 428 km laissent de la marge. Le record de victoires est
 * formule pour rester vrai meme si Pogacar gagne encore : 5 est le record en
 * septembre 2026, et la question le date.
 */
export const quizCyclisme: TranslatedQuiz = {
  slug: "quiz-cyclisme",
  slugs: { en: "cycling-quiz", fr: "quiz-cyclisme", es: "quiz-ciclismo" },
  categorySlug: "sport",
  subcategory: "Cyclisme",
  difficulty: "medium",
  coverImage: "/images/sub-cyclisme.webp",
  gameType: "estimation",
  playCount: 4800,
  translations: {
    fr: {
      title: "Estimation : les chiffres du Tour de France",
      description:
        "Vingt nombres à trouver sur le cyclisme et le Tour de France. Tu proposes un chiffre, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-cyclisme-01.webp",
          question: "En quelle année a eu lieu le premier Tour de France ?",
          answers: [],
          correctAnswer: "1903",
          correctValue: 1903,
          explanation:
            "En 1903. Il a été organisé par le journal L'Auto, l'ancêtre de L'Équipe, et c'est Maurice Garin qui l'a gagné.",
        },
        {
          id: 2,
          question: "Combien d'étapes comptait ce premier Tour de 1903 ?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Six étapes seulement, mais très longues. Les coureurs roulaient souvent de nuit, sur des routes en mauvais état.",
        },
        {
          id: 3,
          question: "Combien de kilomètres faisait le Tour de 1903, au total ?",
          answers: [],
          correctAnswer: "2428",
          correctValue: 2428,
          explanation:
            "2 428 km en six étapes, soit en moyenne plus de 400 km par étape.",
        },
        {
          id: 4,
          question: "Combien d'étapes compte un Tour de France de nos jours ?",
          answers: [],
          correctAnswer: "21",
          correctValue: 21,
          explanation:
            "21 étapes, sur environ trois semaines, avec deux jours de repos au milieu.",
        },
        {
          id: 5,
          question: "En septembre 2026, quel est le record de victoires au classement général du Tour ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinq victoires. Le record est partagé par Jacques Anquetil, Eddy Merckx, Bernard Hinault, Miguel Indurain et, depuis 2026, Tadej Pogačar.",
        },
        {
          id: 6,
          image: "/images/q-cyclisme-02.webp",
          question: "Combien d'étapes du Tour Mark Cavendish a-t-il gagnées dans sa carrière ?",
          answers: [],
          correctAnswer: "35",
          correctValue: 35,
          explanation:
            "35 étapes. Il a gagné la 35e en 2024, ce qui lui a permis de dépasser Eddy Merckx, qui en avait 34. Il a arrêté sa carrière à la fin de cette saison.",
        },
        {
          id: 7,
          image: "/images/q-cyclisme-03.webp",
          question: "En quelle année Tadej Pogačar a-t-il gagné son premier Tour de France ?",
          answers: [],
          correctAnswer: "2020",
          correctValue: 2020,
          explanation:
            "En 2020, à 21 ans. Il a pris le maillot jaune à Primož Roglič la veille de l'arrivée, lors du contre-la-montre de la Planche des Belles Filles.",
        },
        {
          id: 8,
          question: "En quelle année un Français a-t-il gagné le Tour pour la dernière fois ?",
          answers: [],
          correctAnswer: "1985",
          correctValue: 1985,
          explanation:
            "En 1985, avec Bernard Hinault. C'était sa cinquième victoire, et depuis, aucun Français n'a gagné le Tour.",
        },
        {
          id: 9,
          image: "/images/q-cyclisme-04.webp",
          question: "En quelle année le Tour est-il arrivé pour la première fois sur les Champs-Élysées ?",
          answers: [],
          correctAnswer: "1975",
          correctValue: 1975,
          explanation:
            "En 1975, l'année où Bernard Thévenet a gagné le Tour. Depuis, l'arrivée se fait presque toujours sur les Champs-Élysées, sauf en 2024 où elle a eu lieu à Nice à cause des Jeux olympiques.",
        },
        {
          id: 10,
          question: "En quelle année a été couru le premier Paris-Roubaix ?",
          answers: [],
          correctAnswer: "1896",
          correctValue: 1896,
          explanation:
            "En 1896, sept ans avant le premier Tour de France. C'est l'Allemand Josef Fischer qui l'a gagné.",
        },
        {
          id: 11,
          question: "Combien de coureurs ont pris le départ du premier Tour de France, en 1903 ?",
          answers: [],
          correctAnswer: "60",
          correctValue: 60,
          explanation:
            "60 coureurs. Seuls 21 d'entre eux sont arrivés au bout des six étapes.",
        },
        {
          id: 12,
          question: "En quelle année a eu lieu le premier Tour d'Italie ?",
          answers: [],
          correctAnswer: "1909",
          correctValue: 1909,
          explanation:
            "En 1909, six ans après le premier Tour de France. Il a été gagné par l'Italien Luigi Ganna.",
        },
        {
          id: 13,
          question: "En quelle année a été couru le premier Tour d'Espagne ?",
          answers: [],
          correctAnswer: "1935",
          correctValue: 1935,
          explanation:
            "En 1935. C'est le Belge Gustaaf Deloor qui a gagné cette première Vuelta.",
        },
        {
          id: 14,
          question: "Combien de jours Eddy Merckx a-t-il porté le maillot jaune sur l'ensemble de sa carrière ?",
          answers: [],
          correctAnswer: "96",
          correctValue: 96,
          explanation:
            "96 jours, sur ses sept participations au Tour. C'est toujours le record du Tour.",
        },
        {
          id: 15,
          question: "Combien de coureurs chaque équipe aligne-t-elle au départ du Tour de France depuis 2018 ?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Huit coureurs. Avant 2018, les équipes en avaient neuf, et les organisateurs ont réduit ce nombre pour rendre les courses moins verrouillées.",
        },
        {
          id: 16,
          question: "À quelle altitude culmine le mont Ventoux, en mètres ?",
          answers: [],
          correctAnswer: "1910",
          correctValue: 1910,
          explanation:
            "1 910 mètres. Le « Géant de Provence » fait partie des arrivées les plus dures du Tour, avec sa fin de montée sans arbres, très exposée au vent.",
        },
        {
          id: 17,
          question: "Combien de virages compte la montée de l'Alpe d'Huez ?",
          answers: [],
          correctAnswer: "21",
          correctValue: 21,
          explanation:
            "21 virages, numérotés du bas vers le haut. Chacun porte le nom d'un ou plusieurs vainqueurs d'étape à l'Alpe d'Huez.",
        },
        {
          id: 18,
          question: "Combien de titres de champion du monde sur route Peter Sagan a-t-il gagnés d'affilée ?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Trois titres, en 2015, 2016 et 2017. Le Slovaque est le premier coureur à avoir gagné les Mondiaux trois années de suite.",
        },
        {
          id: 19,
          question: "En quelle année ont eu lieu les premiers championnats du monde sur route pour les professionnels ?",
          answers: [],
          correctAnswer: "1927",
          correctValue: 1927,
          explanation:
            "En 1927, sur le circuit du Nürburgring, en Allemagne. C'est l'Italien Alfredo Binda qui a gagné.",
        },
        {
          id: 20,
          question: "Combien de Tours de France Chris Froome a-t-il gagnés ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Quatre, en 2013, 2015, 2016 et 2017. Le Britannique a aussi gagné un Giro et deux Vuelta.",
        },
      ],
    },
    en: {
      title: "Estimation: Tour de France numbers",
      description:
        "Twenty numbers to find about cycling and the Tour de France. You guess a figure, we tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-cyclisme-01.webp",
          question: "In what year was the first Tour de France held?",
          answers: [],
          correctAnswer: "1903",
          correctValue: 1903,
          explanation:
            "In 1903. It was set up by the newspaper L'Auto, the forerunner of L'Équipe, and Maurice Garin won it.",
        },
        {
          id: 2,
          question: "How many stages did that first Tour have in 1903?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Only six, but very long ones. Riders often rode through the night on rough roads.",
        },
        {
          id: 3,
          question: "How many kilometres long was the 1903 Tour in total?",
          answers: [],
          correctAnswer: "2428",
          correctValue: 2428,
          explanation:
            "2,428 km over six stages, so more than 400 km per stage on average.",
        },
        {
          id: 4,
          question: "How many stages does a Tour de France have today?",
          answers: [],
          correctAnswer: "21",
          correctValue: 21,
          explanation:
            "21 stages over roughly three weeks, with two rest days along the way.",
        },
        {
          id: 5,
          question: "As of September 2026, what is the record number of overall Tour wins?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Five wins. The record is shared by Jacques Anquetil, Eddy Merckx, Bernard Hinault, Miguel Indurain and, since 2026, Tadej Pogačar.",
        },
        {
          id: 6,
          image: "/images/q-cyclisme-02.webp",
          question: "How many Tour de France stages did Mark Cavendish win in his career?",
          answers: [],
          correctAnswer: "35",
          correctValue: 35,
          explanation:
            "35 stages. He won number 35 in 2024, which put him ahead of Eddy Merckx and his 34. He retired at the end of that season.",
        },
        {
          id: 7,
          image: "/images/q-cyclisme-03.webp",
          question: "In what year did Tadej Pogačar win his first Tour de France?",
          answers: [],
          correctAnswer: "2020",
          correctValue: 2020,
          explanation:
            "In 2020, aged 21. He took the yellow jersey from Primož Roglič the day before the finish, in the time trial up La Planche des Belles Filles.",
        },
        {
          id: 8,
          question: "In what year did a French rider last win the Tour?",
          answers: [],
          correctAnswer: "1985",
          correctValue: 1985,
          explanation:
            "In 1985, with Bernard Hinault. It was his fifth win, and no French rider has won the Tour since.",
        },
        {
          id: 9,
          image: "/images/q-cyclisme-04.webp",
          question: "In what year did the Tour first finish on the Champs-Élysées?",
          answers: [],
          correctAnswer: "1975",
          correctValue: 1975,
          explanation:
            "In 1975, the year Bernard Thévenet won the Tour. The race has finished there almost every year since, except in 2024 when it ended in Nice because of the Olympics.",
        },
        {
          id: 10,
          question: "In what year was the first Paris-Roubaix raced?",
          answers: [],
          correctAnswer: "1896",
          correctValue: 1896,
          explanation:
            "In 1896, seven years before the first Tour de France. The German rider Josef Fischer won it.",
        },
        {
          id: 11,
          question: "How many riders started the first Tour de France, in 1903?",
          answers: [],
          correctAnswer: "60",
          correctValue: 60,
          explanation:
            "60 riders. Only 21 of them made it to the end of the six stages.",
        },
        {
          id: 12,
          question: "In what year was the first Giro d'Italia held?",
          answers: [],
          correctAnswer: "1909",
          correctValue: 1909,
          explanation:
            "In 1909, six years after the first Tour de France. The Italian Luigi Ganna won it.",
        },
        {
          id: 13,
          question: "In what year was the first Vuelta a España raced?",
          answers: [],
          correctAnswer: "1935",
          correctValue: 1935,
          explanation:
            "In 1935. Belgium's Gustaaf Deloor won that first Vuelta.",
        },
        {
          id: 14,
          question: "How many days did Eddy Merckx wear the yellow jersey over his whole career?",
          answers: [],
          correctAnswer: "96",
          correctValue: 96,
          explanation:
            "96 days, over his seven Tours. It's still the Tour record.",
        },
        {
          id: 15,
          question: "How many riders has each team started the Tour de France with since 2018?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Eight riders. Teams had nine before 2018, and the organisers cut the number to make races harder to control.",
        },
        {
          id: 16,
          question: "How high is the summit of Mont Ventoux, in metres?",
          answers: [],
          correctAnswer: "1910",
          correctValue: 1910,
          explanation:
            "1,910 metres. The \"Giant of Provence\" is one of the Tour's toughest finishes, with a bare, windswept top section.",
        },
        {
          id: 17,
          question: "How many hairpin bends are there on the climb to Alpe d'Huez?",
          answers: [],
          correctAnswer: "21",
          correctValue: 21,
          explanation:
            "21 bends, numbered from the bottom up. Each one carries the name of one or more stage winners at Alpe d'Huez.",
        },
        {
          id: 18,
          question: "How many road world titles in a row did Peter Sagan win?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Three, in 2015, 2016 and 2017. The Slovak was the first rider to win the Worlds three years running.",
        },
        {
          id: 19,
          question: "In what year was the first professional road world championship held?",
          answers: [],
          correctAnswer: "1927",
          correctValue: 1927,
          explanation:
            "In 1927, on the Nürburgring circuit in Germany. Italy's Alfredo Binda won.",
        },
        {
          id: 20,
          question: "How many Tours de France did Chris Froome win?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Four, in 2013, 2015, 2016 and 2017. The British rider also won one Giro and two Vueltas.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras del Tour de Francia",
      description:
        "Veinte números sobre ciclismo y el Tour de Francia. Tú propones una cifra y te decimos si es más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-cyclisme-01.webp",
          question: "¿En qué año se corrió el primer Tour de Francia?",
          answers: [],
          correctAnswer: "1903",
          correctValue: 1903,
          explanation:
            "En 1903. Lo organizó el periódico L'Auto, el antecesor de L'Équipe, y lo ganó Maurice Garin.",
        },
        {
          id: 2,
          question: "¿Cuántas etapas tuvo aquel primer Tour de 1903?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Solo seis, pero larguísimas. Los corredores pedaleaban muchas veces de noche y por caminos en mal estado.",
        },
        {
          id: 3,
          question: "¿Cuántos kilómetros tuvo en total el Tour de 1903?",
          answers: [],
          correctAnswer: "2428",
          correctValue: 2428,
          explanation:
            "2428 km en seis etapas, o sea, más de 400 km por etapa de media.",
        },
        {
          id: 4,
          question: "¿Cuántas etapas tiene hoy un Tour de Francia?",
          answers: [],
          correctAnswer: "21",
          correctValue: 21,
          explanation:
            "21 etapas en unas tres semanas, con dos días de descanso por el camino.",
        },
        {
          id: 5,
          question: "En septiembre de 2026, ¿cuál es el récord de victorias en la general del Tour?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinco victorias. Lo comparten Jacques Anquetil, Eddy Merckx, Bernard Hinault, Miguel Induráin y, desde 2026, Tadej Pogačar.",
        },
        {
          id: 6,
          image: "/images/q-cyclisme-02.webp",
          question: "¿Cuántas etapas del Tour ganó Mark Cavendish en su carrera?",
          answers: [],
          correctAnswer: "35",
          correctValue: 35,
          explanation:
            "35 etapas. Ganó la número 35 en 2024 y así superó a Eddy Merckx, que tenía 34. Se retiró al final de esa temporada.",
        },
        {
          id: 7,
          image: "/images/q-cyclisme-03.webp",
          question: "¿En qué año ganó Tadej Pogačar su primer Tour de Francia?",
          answers: [],
          correctAnswer: "2020",
          correctValue: 2020,
          explanation:
            "En 2020, con 21 años. Le quitó el maillot amarillo a Primož Roglič la víspera de la llegada, en la contrarreloj de La Planche des Belles Filles.",
        },
        {
          id: 8,
          question: "¿En qué año ganó el Tour un francés por última vez?",
          answers: [],
          correctAnswer: "1985",
          correctValue: 1985,
          explanation:
            "En 1985, con Bernard Hinault. Fue su quinta victoria y desde entonces ningún francés ha vuelto a ganar el Tour.",
        },
        {
          id: 9,
          image: "/images/q-cyclisme-04.webp",
          question: "¿En qué año llegó el Tour por primera vez a los Campos Elíseos?",
          answers: [],
          correctAnswer: "1975",
          correctValue: 1975,
          explanation:
            "En 1975, el año en que Bernard Thévenet ganó el Tour. Desde entonces termina ahí casi siempre, salvo en 2024, cuando acabó en Niza por los Juegos Olímpicos.",
        },
        {
          id: 10,
          question: "¿En qué año se corrió la primera París-Roubaix?",
          answers: [],
          correctAnswer: "1896",
          correctValue: 1896,
          explanation:
            "En 1896, siete años antes del primer Tour de Francia. La ganó el alemán Josef Fischer.",
        },
        {
          id: 11,
          question: "¿Cuántos ciclistas tomaron la salida del primer Tour de Francia, en 1903?",
          answers: [],
          correctAnswer: "60",
          correctValue: 60,
          explanation:
            "60 ciclistas. Solo 21 de ellos terminaron las seis etapas.",
        },
        {
          id: 12,
          question: "¿En qué año se disputó el primer Giro de Italia?",
          answers: [],
          correctAnswer: "1909",
          correctValue: 1909,
          explanation:
            "En 1909, seis años después del primer Tour de Francia. Lo ganó el italiano Luigi Ganna.",
        },
        {
          id: 13,
          question: "¿En qué año se corrió la primera Vuelta a España?",
          answers: [],
          correctAnswer: "1935",
          correctValue: 1935,
          explanation:
            "En 1935. El belga Gustaaf Deloor ganó aquella primera Vuelta.",
        },
        {
          id: 14,
          question: "¿Cuántos días llevó Eddy Merckx el maillot amarillo en toda su carrera?",
          answers: [],
          correctAnswer: "96",
          correctValue: 96,
          explanation:
            "96 días, en sus siete participaciones en el Tour. Sigue siendo el récord del Tour.",
        },
        {
          id: 15,
          question: "¿Con cuántos ciclistas sale cada equipo en el Tour de Francia desde 2018?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Con ocho. Antes de 2018 eran nueve, y los organizadores bajaron la cifra para que las carreras fueran menos controladas.",
        },
        {
          id: 16,
          question: "¿A qué altitud está la cima del Mont Ventoux, en metros?",
          answers: [],
          correctAnswer: "1910",
          correctValue: 1910,
          explanation:
            "A 1.910 metros. El «Gigante de la Provenza» es uno de los finales más duros del Tour, con una parte alta sin árboles y muy expuesta al viento.",
        },
        {
          id: 17,
          question: "¿Cuántas curvas tiene la subida a Alpe d'Huez?",
          answers: [],
          correctAnswer: "21",
          correctValue: 21,
          explanation:
            "21 curvas, numeradas de abajo arriba. Cada una lleva el nombre de uno o varios ganadores de etapa en Alpe d'Huez.",
        },
        {
          id: 18,
          question: "¿Cuántos títulos mundiales en ruta seguidos ganó Peter Sagan?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Tres, en 2015, 2016 y 2017. El eslovaco fue el primero en ganar el Mundial tres años seguidos.",
        },
        {
          id: 19,
          question: "¿En qué año se celebró el primer Mundial de ruta para profesionales?",
          answers: [],
          correctAnswer: "1927",
          correctValue: 1927,
          explanation:
            "En 1927, en el circuito de Nürburgring, en Alemania. Lo ganó el italiano Alfredo Binda.",
        },
        {
          id: 20,
          question: "¿Cuántos Tours de Francia ganó Chris Froome?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Cuatro, en 2013, 2015, 2016 y 2017. El británico también ganó un Giro y dos Vueltas.",
        },
      ],
    },
  },
};

export default [quizCyclisme] as TranslatedQuiz[];
