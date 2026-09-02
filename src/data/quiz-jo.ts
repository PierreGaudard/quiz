import type { TranslatedQuiz } from "./types";

/**
 * Premier quiz en mode estimation du catalogue.
 *
 * Le moteur ne propose pas de reponses : le joueur saisit un nombre et on lui
 * dit « plus haut » ou « plus bas », avec une tolerance de 5 % et cinq essais
 * (src/components/EstimationPlayer.tsx:26). Le champ `answers` reste vide, il
 * n'est pas lu par ce mode, et `correctValue` porte la reponse.
 *
 * Consequence sur le choix des questions : une tolerance de 5 % sur un petit
 * nombre ne laisse aucune marge (5 anneaux se joue au nombre exact) alors
 * qu'elle est genereuse sur une annee. Les questions melangent les deux
 * exprès, pour que le mode ne soit pas toujours facile ni toujours sec.
 */
export const quizJO: TranslatedQuiz = {
  slug: "quiz-jeux-olympiques",
  slugs: { en: "olympics-quiz", fr: "quiz-jeux-olympiques", es: "quiz-juegos-olimpicos" },
  categorySlug: "sport",
  subcategory: "Jeux olympiques",
  difficulty: "medium",
  coverImage: "/images/sub-jeux-olympiques.webp",
  gameType: "estimation",
  playCount: 11000,
  translations: {
    fr: {
      title: "Estimation : les chiffres des Jeux olympiques",
      description:
        "Dix nombres à trouver sur les Jeux. Tu proposes, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-olympics-rings.webp",
          question: "En quelle année ont eu lieu les premiers Jeux olympiques modernes ?",
          answers: [],
          correctAnswer: "1896",
          correctValue: 1896,
          explanation:
            "1896, à Athènes, sous l'impulsion de Pierre de Coubertin. Quatorze pays y participaient.",
        },
        {
          id: 2,
          question: "Combien d'anneaux compte le drapeau olympique ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinq anneaux entrelacés, un par continent habité au sens du Comité international olympique.",
        },
        {
          id: 3,
          question: "Combien de médailles d'or Michael Phelps a-t-il remportées au total ?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 médailles d'or sur quatre olympiades, de 2004 à 2016. Personne n'en a autant, dans aucun sport.",
        },
        {
          id: 4,
          question: "Tous les combien d'années les Jeux olympiques d'été ont-ils lieu ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Tous les quatre ans. Cet intervalle porte un nom, l'olympiade, et il n'a été rompu que par les guerres et par le report de Tokyo.",
        },
        {
          id: 5,
          question: "En quelle année Paris avait-il accueilli les Jeux avant 2024 ?",
          answers: [],
          correctAnswer: "1924",
          correctValue: 1924,
          explanation:
            "1924. Cent ans jour pour jour avant les Jeux de 2024, ce qui explique le choix de la date.",
        },
        {
          id: 6,
          question: "Combien de sports étaient au programme des Jeux de Paris 2024 ?",
          answers: [],
          correctAnswer: "32",
          correctValue: 32,
          explanation:
            "32 sports, dont le breaking pour la première et sans doute la dernière fois, puisqu'il ne figure pas au programme de Los Angeles 2028.",
        },
        {
          id: 7,
          question: "Combien de médailles d'or la France a-t-elle gagnées à Paris 2024 ?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16 médailles d'or, et 64 médailles au total, le meilleur résultat français de l'histoire des Jeux.",
        },
        {
          id: 8,
          question: "Combien de secondes dure le record du monde du 100 mètres d'Usain Bolt ? (à un centième près)",
          answers: [],
          correctAnswer: "9.58",
          correctValue: 9.58,
          explanation:
            "9,58 secondes, à Berlin en 2009. Le record tient toujours, et de loin.",
        },
        {
          id: 9,
          question: "En quelle année les Jeux de Tokyo, reportés d'un an, ont-ils finalement eu lieu ?",
          answers: [],
          correctAnswer: "2021",
          correctValue: 2021,
          explanation:
            "2021, alors qu'ils gardaient le nom de Tokyo 2020. C'est le seul report de l'histoire des Jeux modernes.",
        },
        {
          id: 10,
          question: "Combien de minutes dure un match de basket aux Jeux olympiques ?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "40 minutes, en quatre quarts-temps de dix. C'est huit minutes de moins qu'en NBA, où les quarts-temps durent douze minutes.",
        },
      ],
    },
    en: {
      title: "Estimation: the numbers behind the Olympics",
      description:
        "Ten numbers to find about the Games. You guess, we tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-olympics-rings.webp",
          question: "In what year were the first modern Olympic Games held?",
          answers: [],
          correctAnswer: "1896",
          correctValue: 1896,
          explanation:
            "1896, in Athens, driven by Pierre de Coubertin. Fourteen countries took part.",
        },
        {
          id: 2,
          question: "How many rings are on the Olympic flag?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Five interlocking rings, one for each inhabited continent as the International Olympic Committee counts them.",
        },
        {
          id: 3,
          question: "How many gold medals did Michael Phelps win in total?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 golds across four Games, from 2004 to 2016. Nobody has as many, in any sport.",
        },
        {
          id: 4,
          question: "How many years apart are the Summer Olympic Games held?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Every four years. That gap has a name, an Olympiad, and only the wars and the Tokyo postponement have broken it.",
        },
        {
          id: 5,
          question: "In what year had Paris hosted the Games before 2024?",
          answers: [],
          correctAnswer: "1924",
          correctValue: 1924,
          explanation:
            "1924. Exactly a hundred years before the 2024 Games, which is why that date was chosen.",
        },
        {
          id: 6,
          question: "How many sports were on the programme at Paris 2024?",
          answers: [],
          correctAnswer: "32",
          correctValue: 32,
          explanation:
            "32 sports, including breaking for the first and probably the last time, as it is not on the Los Angeles 2028 programme.",
        },
        {
          id: 7,
          question: "How many gold medals did France win at Paris 2024?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16 golds and 64 medals in total, the best French result in Olympic history.",
        },
        {
          id: 8,
          question: "How many seconds is Usain Bolt's 100 metres world record? (to the hundredth)",
          answers: [],
          correctAnswer: "9.58",
          correctValue: 9.58,
          explanation:
            "9.58 seconds, in Berlin in 2009. The record still stands, and not by a small margin.",
        },
        {
          id: 9,
          question: "In what year did the Tokyo Games, postponed by a year, actually take place?",
          answers: [],
          correctAnswer: "2021",
          correctValue: 2021,
          explanation:
            "2021, while still being called Tokyo 2020. It is the only postponement in the history of the modern Games.",
        },
        {
          id: 10,
          question: "How many minutes does an Olympic basketball game last?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "40 minutes, in four ten-minute quarters. That is eight minutes shorter than the NBA, where quarters run twelve minutes.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras de los Juegos Olímpicos",
      description:
        "Diez números que encontrar sobre los Juegos. Propones y te decimos más alto o más bajo.",
      questions: [
        {
          id: 1,
          image: "/images/q-olympics-rings.webp",
          question: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
          answers: [],
          correctAnswer: "1896",
          correctValue: 1896,
          explanation:
            "1896, en Atenas, impulsados por Pierre de Coubertin. Participaron catorce países.",
        },
        {
          id: 2,
          question: "¿Cuántos aros tiene la bandera olímpica?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinco aros entrelazados, uno por cada continente habitado según el Comité Olímpico Internacional.",
        },
        {
          id: 3,
          question: "¿Cuántas medallas de oro ganó Michael Phelps en total?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 oros en cuatro Juegos, de 2004 a 2016. Nadie tiene tantos, en ningún deporte.",
        },
        {
          id: 4,
          question: "¿Cada cuántos años se celebran los Juegos Olímpicos de verano?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Cada cuatro años. Ese intervalo tiene nombre, la olimpiada, y solo lo han roto las guerras y el aplazamiento de Tokio.",
        },
        {
          id: 5,
          question: "¿En qué año había acogido París los Juegos antes de 2024?",
          answers: [],
          correctAnswer: "1924",
          correctValue: 1924,
          explanation:
            "1924. Exactamente cien años antes de los Juegos de 2024, de ahí la elección de la fecha.",
        },
        {
          id: 6,
          question: "¿Cuántos deportes había en el programa de París 2024?",
          answers: [],
          correctAnswer: "32",
          correctValue: 32,
          explanation:
            "32 deportes, incluido el breaking por primera y probablemente última vez, ya que no está en el programa de Los Ángeles 2028.",
        },
        {
          id: 7,
          question: "¿Cuántas medallas de oro ganó Francia en París 2024?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16 oros y 64 medallas en total, el mejor resultado francés de la historia olímpica.",
        },
        {
          id: 8,
          question: "¿Cuántos segundos marca el récord mundial de 100 metros de Usain Bolt? (a la centésima)",
          answers: [],
          correctAnswer: "9.58",
          correctValue: 9.58,
          explanation:
            "9,58 segundos, en Berlín en 2009. El récord sigue en pie, y por bastante margen.",
        },
        {
          id: 9,
          question: "¿En qué año se celebraron finalmente los Juegos de Tokio, aplazados un año?",
          answers: [],
          correctAnswer: "2021",
          correctValue: 2021,
          explanation:
            "2021, aunque seguían llamándose Tokio 2020. Es el único aplazamiento de la historia de los Juegos modernos.",
        },
        {
          id: 10,
          question: "¿Cuántos minutos dura un partido de baloncesto olímpico?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "40 minutos, en cuatro cuartos de diez. Son ocho minutos menos que en la NBA, donde los cuartos duran doce.",
        },
      ],
    },
  },
};

export default [quizJO] as TranslatedQuiz[];
