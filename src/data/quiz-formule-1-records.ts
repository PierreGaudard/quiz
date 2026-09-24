import type { TranslatedQuiz } from "./types";

/**
 * Quiz estimation sur les chiffres et les records de la Formule 1.
 *
 * Tolerance de 5 % et cinq essais (EstimationPlayer) : les petits nombres se
 * jouent au nombre exact (11 ecuries, 10 victoires de suite), les annees et
 * les grands nombres laissent de la marge. Uniquement des records figes ou
 * dates, pour ne rien avoir a corriger en cours de saison. Le quiz ordre
 * existant classe deja les pilotes par titres et par victoires : aucun de
 * ces totaux n'est demande ici.
 */
export const quizFormule1Records: TranslatedQuiz = {
  slug: "quiz-formule-1-records",
  slugs: { en: "formula-1-records-quiz", fr: "quiz-formule-1-records", es: "quiz-formula-1-records" },
  categorySlug: "sport",
  subcategory: "Formule 1",
  difficulty: "hard",
  coverImage: "/images/cover-formule-1-records.webp",
  gameType: "estimation",
  playCount: 3900,
  translations: {
    fr: {
      title: "Estimation : les records de la Formule 1",
      description:
        "Dix chiffres à trouver sur la F1 : l'âge de Verstappen à sa première victoire, les tours de Monaco, les titres de Ferrari, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-formule-1-records-01.webp",
          question: "Quel âge avait Max Verstappen quand il a gagné son premier Grand Prix, en 2016 ?",
          answers: [],
          correctAnswer: "18",
          correctValue: 18,
          explanation:
            "18 ans et 228 jours, au Grand Prix d'Espagne 2016, pour sa toute première course avec Red Bull. C'est toujours le record du plus jeune vainqueur.",
        },
        {
          id: 2,
          question: "Combien de Grands Prix Max Verstappen a-t-il gagnés sur la seule saison 2023 ?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "19 victoires sur 22 courses, le record sur une saison. Le record d'avant, 15 victoires, c'était déjà lui, en 2022.",
        },
        {
          id: 3,
          question: "Combien de courses d'affilée Verstappen a-t-il gagnées en 2023, un record ?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10 de suite, de Miami à Monza. Il a battu les 9 victoires d'affilée de Sebastian Vettel en 2013, avec Red Bull aussi.",
        },
        {
          id: 4,
          image: "/images/q-formule-1-records-02.webp",
          question: "Combien de titres de champion du monde des constructeurs Ferrari a-t-elle gagnés ?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16, un record. Le dernier date de 2008, avec Kimi Räikkönen et Felipe Massa. McLaren est deuxième, avec 10 titres après celui de 2025.",
        },
        {
          id: 5,
          question: "Combien de tours compte le Grand Prix de Monaco ?",
          answers: [],
          correctAnswer: "78",
          correctValue: 78,
          explanation:
            "78 tours, soit un peu plus de 260 km. Le circuit fait à peine 3,3 km, alors il faut beaucoup plus de tours qu'ailleurs pour arriver à la distance d'un Grand Prix.",
        },
        {
          id: 6,
          question: "Combien de points rapporte une victoire en Grand Prix ?",
          answers: [],
          correctAnswer: "25",
          correctValue: 25,
          explanation:
            "25 points, depuis 2010. Le deuxième en prend 18, le troisième 15, et ça descend jusqu'au dixième, qui marque 1 point.",
        },
        {
          id: 7,
          image: "/images/q-formule-1-records-03.webp",
          question: "Combien d'écuries étaient au départ de la saison 2026 ?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11 écuries, donc 22 voitures. Cadillac est arrivée comme onzième équipe, et Audi a pris la place de Sauber.",
        },
        {
          id: 8,
          question: "Combien de titres mondiaux Michael Schumacher a-t-il gagnés avec Ferrari ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinq, d'affilée, de 2000 à 2004. Ses deux autres titres, il les avait gagnés avec Benetton en 1994 et 1995.",
        },
        {
          id: 9,
          image: "/images/q-formule-1-records-04.webp",
          question: "Combien de saisons Lewis Hamilton a-t-il passées chez Mercedes avant de rejoindre Ferrari ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 saisons, de 2013 à 2024. Il y a gagné six de ses sept titres, puis il est parti chez Ferrari en 2025.",
        },
        {
          id: 10,
          question: "En quelle année Ayrton Senna est-il mort, au Grand Prix de Saint-Marin ?",
          answers: [],
          correctAnswer: "1994",
          correctValue: 1994,
          explanation:
            "En 1994, le 1er mai, sur le circuit d'Imola. La veille, le pilote autrichien Roland Ratzenberger s'était tué aux qualifications. Ce week-end a changé les règles de sécurité en F1.",
        },
      ],
    },
    en: {
      title: "Estimation: Formula 1 records",
      description:
        "Ten F1 numbers to guess: Verstappen's age at his first win, the laps of Monaco, Ferrari's titles and a few more.",
      questions: [
        {
          id: 1,
          image: "/images/q-formule-1-records-01.webp",
          question: "How old was Max Verstappen when he won his first Grand Prix, in 2016?",
          answers: [],
          correctAnswer: "18",
          correctValue: 18,
          explanation:
            "18 years and 228 days, at the 2016 Spanish Grand Prix, in his very first race for Red Bull. He's still the youngest winner ever.",
        },
        {
          id: 2,
          question: "How many Grands Prix did Max Verstappen win in the 2023 season alone?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "19 wins out of 22 races, the record for one season. The old record, 15 wins, was his too, from 2022.",
        },
        {
          id: 3,
          question: "How many races in a row did Verstappen win in 2023, a record?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10 straight, from Miami to Monza. He beat Sebastian Vettel's run of 9 in 2013, also with Red Bull.",
        },
        {
          id: 4,
          image: "/images/q-formule-1-records-02.webp",
          question: "How many constructors' championships has Ferrari won?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16, a record. The last one was in 2008, with Kimi Räikkönen and Felipe Massa. McLaren are second with 10 after their 2025 title.",
        },
        {
          id: 5,
          question: "How many laps is the Monaco Grand Prix?",
          answers: [],
          correctAnswer: "78",
          correctValue: 78,
          explanation:
            "78 laps, a bit over 260 km. The track is barely 3.3 km long, so it takes a lot more laps than anywhere else to cover a Grand Prix distance.",
        },
        {
          id: 6,
          question: "How many points is a Grand Prix win worth?",
          answers: [],
          correctAnswer: "25",
          correctValue: 25,
          explanation:
            "25 points, since 2010. Second gets 18, third 15, and it goes down to tenth place, which scores 1 point.",
        },
        {
          id: 7,
          image: "/images/q-formule-1-records-03.webp",
          question: "How many teams started the 2026 season?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11 teams, so 22 cars. Cadillac came in as the eleventh team, and Audi took over from Sauber.",
        },
        {
          id: 8,
          question: "How many world titles did Michael Schumacher win with Ferrari?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Five in a row, from 2000 to 2004. His other two came with Benetton in 1994 and 1995.",
        },
        {
          id: 9,
          image: "/images/q-formule-1-records-04.webp",
          question: "How many seasons did Lewis Hamilton spend at Mercedes before joining Ferrari?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 seasons, from 2013 to 2024. He won six of his seven titles there, then moved to Ferrari in 2025.",
        },
        {
          id: 10,
          question: "In what year did Ayrton Senna die, at the San Marino Grand Prix?",
          answers: [],
          correctAnswer: "1994",
          correctValue: 1994,
          explanation:
            "In 1994, on May 1, at Imola. The day before, Austrian driver Roland Ratzenberger had been killed in qualifying. That weekend changed F1's safety rules.",
        },
      ],
    },
    es: {
      title: "Estimación: los récords de la Fórmula 1",
      description:
        "Diez cifras de la F1 para adivinar: la edad de Verstappen en su primera victoria, las vueltas de Mónaco, los títulos de Ferrari y más.",
      questions: [
        {
          id: 1,
          image: "/images/q-formule-1-records-01.webp",
          question: "¿Qué edad tenía Max Verstappen cuando ganó su primer Gran Premio, en 2016?",
          answers: [],
          correctAnswer: "18",
          correctValue: 18,
          explanation:
            "18 años y 228 días, en el Gran Premio de España 2016, en su primera carrera con Red Bull. Sigue siendo el ganador más joven de la historia.",
        },
        {
          id: 2,
          question: "¿Cuántos Grandes Premios ganó Max Verstappen solo en la temporada 2023?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "19 victorias en 22 carreras, el récord en una temporada. El récord anterior, 15 victorias, también era suyo, de 2022.",
        },
        {
          id: 3,
          question: "¿Cuántas carreras seguidas ganó Verstappen en 2023, un récord?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10 seguidas, de Miami a Monza. Superó las 9 de Sebastian Vettel en 2013, también con Red Bull.",
        },
        {
          id: 4,
          image: "/images/q-formule-1-records-02.webp",
          question: "¿Cuántos títulos de constructores ha ganado Ferrari?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16, un récord. El último fue en 2008, con Kimi Räikkönen y Felipe Massa. McLaren es segunda, con 10 tras el de 2025.",
        },
        {
          id: 5,
          question: "¿Cuántas vueltas tiene el Gran Premio de Mónaco?",
          answers: [],
          correctAnswer: "78",
          correctValue: 78,
          explanation:
            "78 vueltas, algo más de 260 km. El circuito mide apenas 3,3 km, así que hacen falta muchas más vueltas que en otros sitios para cubrir la distancia de un Gran Premio.",
        },
        {
          id: 6,
          question: "¿Cuántos puntos da una victoria en un Gran Premio?",
          answers: [],
          correctAnswer: "25",
          correctValue: 25,
          explanation:
            "25 puntos, desde 2010. El segundo se lleva 18, el tercero 15, y así hasta el décimo, que suma 1 punto.",
        },
        {
          id: 7,
          image: "/images/q-formule-1-records-03.webp",
          question: "¿Cuántas escuderías tomaron la salida en la temporada 2026?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11 escuderías, o sea 22 coches. Cadillac llegó como undécimo equipo, y Audi ocupó el lugar de Sauber.",
        },
        {
          id: 8,
          question: "¿Cuántos títulos mundiales ganó Michael Schumacher con Ferrari?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinco seguidos, de 2000 a 2004. Los otros dos los había ganado con Benetton en 1994 y 1995.",
        },
        {
          id: 9,
          image: "/images/q-formule-1-records-04.webp",
          question: "¿Cuántas temporadas pasó Lewis Hamilton en Mercedes antes de fichar por Ferrari?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 temporadas, de 2013 a 2024. Allí ganó seis de sus siete títulos, y en 2025 se fue a Ferrari.",
        },
        {
          id: 10,
          question: "¿En qué año murió Ayrton Senna, en el Gran Premio de San Marino?",
          answers: [],
          correctAnswer: "1994",
          correctValue: 1994,
          explanation:
            "En 1994, el 1 de mayo, en Imola. El día anterior, el piloto austriaco Roland Ratzenberger había muerto en la clasificación. Aquel fin de semana cambió las normas de seguridad de la F1.",
        },
      ],
    },
  },
};

export default [quizFormule1Records] as TranslatedQuiz[];
