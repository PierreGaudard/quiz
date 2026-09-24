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
        "Dix nombres à trouver sur le cyclisme et le Tour de France. Tu proposes un chiffre, on te dit plus haut ou plus bas.",
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
      ],
    },
    en: {
      title: "Estimation: Tour de France numbers",
      description:
        "Ten numbers to find about cycling and the Tour de France. You guess a figure, we tell you higher or lower.",
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
      ],
    },
    es: {
      title: "Estimación: las cifras del Tour de Francia",
      description:
        "Diez números sobre ciclismo y el Tour de Francia. Tú propones una cifra y te decimos si es más o menos.",
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
      ],
    },
  },
};

export default [quizCyclisme] as TranslatedQuiz[];
