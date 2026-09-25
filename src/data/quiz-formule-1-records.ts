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
        "Vingt chiffres à trouver sur la F1 : l'âge de Verstappen à sa première victoire, les tours de Monaco, les titres de Ferrari, etc.",
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
        {
          id: 11,
          question: "Combien de Grands Prix Ayrton Senna a-t-il gagnés dans sa carrière ?",
          answers: [],
          correctAnswer: "41",
          correctValue: 41,
          explanation:
            "41, entre 1985 et 1994, avec Lotus puis McLaren. Il a aussi réussi 65 pole positions.",
        },
        {
          id: 12,
          question: "Combien de titres de champion du monde Alain Prost a-t-il gagnés ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Quatre : en 1985, 1986 et 1989 avec McLaren, puis en 1993 avec Williams. C'est toujours le seul Français champion du monde de F1.",
        },
        {
          id: 13,
          question: "Quel âge avait Sebastian Vettel quand il a gagné son premier titre mondial, en 2010 ?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 ans. Il a été sacré à Abu Dhabi, lors de la dernière course de la saison, et il a ensuite gagné les trois titres suivants.",
        },
        {
          id: 14,
          question: "Quel âge avait Luigi Fagioli, le plus vieux vainqueur d'un Grand Prix de F1, en 1951 ?",
          answers: [],
          correctAnswer: "53",
          correctValue: 53,
          explanation:
            "53 ans. Il a gagné le Grand Prix de France 1951 en partageant sa voiture avec Juan Manuel Fangio, ce qui était permis à l'époque.",
        },
        {
          id: 15,
          question: "En quelle année s'est couru le tout premier Grand Prix de Monaco ?",
          answers: [],
          correctAnswer: "1929",
          correctValue: 1929,
          explanation:
            "En 1929, bien avant la création du championnat du monde de F1 en 1950. Le vainqueur était William Grover-Williams, sur une Bugatti.",
        },
        {
          id: 16,
          question: "Combien de titres de champion du monde des constructeurs McLaren avait-elle gagnés à la fin de la saison 2025 ?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "Dix. Le premier en 1974, les derniers en 2024 et 2025. Seule Ferrari en a plus.",
        },
        {
          id: 17,
          question: "Combien de Grands Prix Michael Schumacher a-t-il gagnés pendant la saison 2004 ?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13 sur 18. C'était le record de victoires sur une saison, égalé par Vettel en 2013 et battu par Verstappen en 2022.",
        },
        {
          id: 18,
          question: "Combien de fois Ayrton Senna a-t-il gagné le Grand Prix de Monaco, un record ?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Six fois : en 1987, puis cinq années de suite, de 1989 à 1993. Graham Hill, surnommé « Monsieur Monaco », l'avait gagné cinq fois.",
        },
        {
          id: 19,
          question: "Combien de tours compte le Grand Prix d'Italie, à Monza ?",
          answers: [],
          correctAnswer: "53",
          correctValue: 53,
          explanation:
            "53 tours d'un circuit de 5,793 km. Comme Monza est très rapide, c'est souvent l'un des Grands Prix les plus courts en temps.",
        },
        {
          id: 20,
          question: "En quelle année le championnat du monde des constructeurs a-t-il été créé ?",
          answers: [],
          correctAnswer: "1958",
          correctValue: 1958,
          explanation:
            "En 1958, huit ans après celui des pilotes. Le premier titre est allé à l'écurie britannique Vanwall.",
        },
      ],
    },
    en: {
      title: "Estimation: Formula 1 records",
      description:
        "Twenty F1 numbers to guess: Verstappen's age at his first win, the laps of Monaco, Ferrari's titles and a few more.",
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
        {
          id: 11,
          question: "How many Grands Prix did Ayrton Senna win in his career?",
          answers: [],
          correctAnswer: "41",
          correctValue: 41,
          explanation:
            "41, between 1985 and 1994, with Lotus and then McLaren. He also took 65 pole positions.",
        },
        {
          id: 12,
          question: "How many world titles did Alain Prost win?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Four: 1985, 1986 and 1989 with McLaren, then 1993 with Williams. He is still the only French F1 world champion.",
        },
        {
          id: 13,
          question: "How old was Sebastian Vettel when he won his first world title, in 2010?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23. He clinched it in Abu Dhabi at the last race of the season, then won the next three titles as well.",
        },
        {
          id: 14,
          question: "How old was Luigi Fagioli, the oldest winner of an F1 Grand Prix, in 1951?",
          answers: [],
          correctAnswer: "53",
          correctValue: 53,
          explanation:
            "53. He won the 1951 French Grand Prix sharing his car with Juan Manuel Fangio, which was allowed back then.",
        },
        {
          id: 15,
          question: "In which year was the very first Monaco Grand Prix held?",
          answers: [],
          correctAnswer: "1929",
          correctValue: 1929,
          explanation:
            "In 1929, long before the F1 world championship began in 1950. It was won by William Grover-Williams in a Bugatti.",
        },
        {
          id: 16,
          question: "How many constructors' world titles had McLaren won by the end of the 2025 season?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "Ten. The first came in 1974 and the latest in 2024 and 2025. Only Ferrari has more.",
        },
        {
          id: 17,
          question: "How many Grands Prix did Michael Schumacher win in the 2004 season?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13 out of 18. It was the record for wins in a season, matched by Vettel in 2013 and beaten by Verstappen in 2022.",
        },
        {
          id: 18,
          question: "How many times did Ayrton Senna win the Monaco Grand Prix, a record?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Six times: in 1987, then five years in a row from 1989 to 1993. Graham Hill, known as Mr Monaco, had won it five times.",
        },
        {
          id: 19,
          question: "How many laps is the Italian Grand Prix at Monza?",
          answers: [],
          correctAnswer: "53",
          correctValue: 53,
          explanation:
            "53 laps of a 5.793 km track. Monza is so fast that it is often one of the shortest races of the year in time.",
        },
        {
          id: 20,
          question: "In which year was the constructors' world championship created?",
          answers: [],
          correctAnswer: "1958",
          correctValue: 1958,
          explanation:
            "In 1958, eight years after the drivers' title. The first one went to the British team Vanwall.",
        },
      ],
    },
    es: {
      title: "Estimación: los récords de la Fórmula 1",
      description:
        "Veinte cifras de la F1 para adivinar: la edad de Verstappen en su primera victoria, las vueltas de Mónaco, los títulos de Ferrari y más.",
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
        {
          id: 11,
          question: "¿Cuántos Grandes Premios ganó Ayrton Senna en su carrera?",
          answers: [],
          correctAnswer: "41",
          correctValue: 41,
          explanation:
            "41, entre 1985 y 1994, con Lotus y luego con McLaren. También logró 65 poles.",
        },
        {
          id: 12,
          question: "¿Cuántos títulos de campeón del mundo ganó Alain Prost?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Cuatro: en 1985, 1986 y 1989 con McLaren, y en 1993 con Williams. Sigue siendo el único francés campeón del mundo de F1.",
        },
        {
          id: 13,
          question: "¿Qué edad tenía Sebastian Vettel cuando ganó su primer título mundial, en 2010?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 años. Lo logró en Abu Dabi, en la última carrera del año, y después ganó también los tres títulos siguientes.",
        },
        {
          id: 14,
          question: "¿Qué edad tenía Luigi Fagioli, el ganador más veterano de un Gran Premio de F1, en 1951?",
          answers: [],
          correctAnswer: "53",
          correctValue: 53,
          explanation:
            "53 años. Ganó el Gran Premio de Francia de 1951 compartiendo el coche con Juan Manuel Fangio, algo que entonces estaba permitido.",
        },
        {
          id: 15,
          question: "¿En qué año se corrió el primer Gran Premio de Mónaco?",
          answers: [],
          correctAnswer: "1929",
          correctValue: 1929,
          explanation:
            "En 1929, mucho antes de que naciera el campeonato del mundo de F1 en 1950. Lo ganó William Grover-Williams con un Bugatti.",
        },
        {
          id: 16,
          question: "¿Cuántos títulos de campeón del mundo de constructores tenía McLaren al acabar la temporada 2025?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "Diez. El primero en 1974 y los últimos en 2024 y 2025. Solo Ferrari tiene más.",
        },
        {
          id: 17,
          question: "¿Cuántos Grandes Premios ganó Michael Schumacher en la temporada 2004?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13 de 18. Era el récord de victorias en una temporada, igualado por Vettel en 2013 y superado por Verstappen en 2022.",
        },
        {
          id: 18,
          question: "¿Cuántas veces ganó Ayrton Senna el Gran Premio de Mónaco, un récord?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Seis veces: en 1987 y luego cinco años seguidos, de 1989 a 1993. Graham Hill, al que llamaban « Mister Mónaco », lo había ganado cinco veces.",
        },
        {
          id: 19,
          question: "¿Cuántas vueltas tiene el Gran Premio de Italia, en Monza?",
          answers: [],
          correctAnswer: "53",
          correctValue: 53,
          explanation:
            "53 vueltas a un circuito de 5,793 km. Como Monza es tan rápido, suele ser una de las carreras más cortas del año en tiempo.",
        },
        {
          id: 20,
          question: "¿En qué año se creó el campeonato del mundo de constructores?",
          answers: [],
          correctAnswer: "1958",
          correctValue: 1958,
          explanation:
            "En 1958, ocho años después del de pilotos. El primer título fue para la escudería británica Vanwall.",
        },
      ],
    },
  },
};

export default [quizFormule1Records] as TranslatedQuiz[];
