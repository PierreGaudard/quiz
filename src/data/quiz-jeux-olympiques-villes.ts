import type { TranslatedQuiz } from "./types";

/**
 * Quiz ordre sur les villes hotes des Jeux olympiques, d'ete et d'hiver,
 * d'Athenes 1896 a Salt Lake City 2034.
 *
 * OrdrePlayer melange les propositions, seul correctOrder compte. Chaque
 * question porte sur quatre editions d'une meme periode ou d'une meme
 * region, pour qu'on ne puisse pas deviner l'ordre en ne connaissant qu'une
 * date. Le quiz estimation existant demande deja l'annee de Paris 1924 :
 * elle n'est reprise nulle part ici.
 */
export const quizJeuxOlympiquesVilles: TranslatedQuiz = {
  slug: "quiz-jeux-olympiques-villes",
  slugs: {
    en: "olympic-host-cities-quiz",
    fr: "quiz-jeux-olympiques-villes",
    es: "quiz-juegos-olimpicos-ciudades",
  },
  categorySlug: "sport",
  subcategory: "Jeux olympiques",
  difficulty: "medium",
  coverImage: "/images/cover-jeux-olympiques-villes.webp",
  gameType: "ordre",
  playCount: 4600,
  translations: {
    fr: {
      title: "Quiz JO : les villes hôtes dans l'ordre",
      description:
        "Dix séries de villes olympiques à remettre dans l'ordre, des premiers Jeux d'Athènes en 1896 à ceux de Salt Lake City en 2034.",
      questions: [
        {
          id: 1,
          image: "/images/q-jeux-olympiques-villes-01.webp",
          question: "Remets dans l'ordre les villes des quatre premiers Jeux olympiques d'été modernes.",
          answers: [
            { id: "a", text: "Athènes" },
            { id: "b", text: "Paris" },
            { id: "c", text: "Saint-Louis" },
            { id: "d", text: "Londres" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Athènes en 1896, Paris en 1900, Saint-Louis, aux États-Unis, en 1904, puis Londres en 1908.",
        },
        {
          id: 2,
          question: "Remets dans l'ordre les Jeux d'hiver organisés en France.",
          answers: [
            { id: "a", text: "Chamonix" },
            { id: "b", text: "Grenoble" },
            { id: "c", text: "Albertville" },
            { id: "d", text: "Alpes françaises" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Chamonix en 1924, les tout premiers Jeux d'hiver, Grenoble en 1968, Albertville en 1992, puis les Alpes françaises en 2030.",
        },
        {
          id: 3,
          image: "/images/q-jeux-olympiques-villes-02.webp",
          question: "Remets ces Jeux d'été dans l'ordre, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Pékin" },
            { id: "b", text: "Londres" },
            { id: "c", text: "Rio de Janeiro" },
            { id: "d", text: "Tokyo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pékin en 2008, Londres en 2012, Rio en 2016, les premiers Jeux en Amérique du Sud, puis Tokyo, prévus en 2020 et courus en 2021.",
        },
        {
          id: 4,
          question: "Remets ces prochains Jeux dans l'ordre, d'été comme d'hiver.",
          answers: [
            { id: "a", text: "Milan-Cortina" },
            { id: "b", text: "Los Angeles" },
            { id: "c", text: "Brisbane" },
            { id: "d", text: "Salt Lake City" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Milan-Cortina pour l'hiver 2026, Los Angeles pour l'été 2028, Brisbane pour l'été 2032 et Salt Lake City pour l'hiver 2034. Entre les deux, il y a les Alpes françaises en 2030.",
        },
        {
          id: 5,
          question: "Remets dans l'ordre ces Jeux d'été organisés sur le continent américain.",
          answers: [
            { id: "a", text: "Mexico" },
            { id: "b", text: "Montréal" },
            { id: "c", text: "Los Angeles" },
            { id: "d", text: "Atlanta" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mexico en 1968, Montréal en 1976, Los Angeles en 1984 et Atlanta en 1996, les Jeux du centenaire.",
        },
        {
          id: 6,
          image: "/images/q-jeux-olympiques-villes-03.webp",
          question: "Remets ces Jeux d'hiver dans l'ordre, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Vancouver" },
            { id: "b", text: "Sotchi" },
            { id: "c", text: "Pyeongchang" },
            { id: "d", text: "Pékin" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Vancouver en 2010, Sotchi en 2014, Pyeongchang en 2018 et Pékin en 2022. Pékin est la seule ville à avoir reçu les Jeux d'été et ceux d'hiver.",
        },
        {
          id: 7,
          question: "Remets dans l'ordre ces Jeux d'été de l'après-guerre.",
          answers: [
            { id: "a", text: "Londres" },
            { id: "b", text: "Helsinki" },
            { id: "c", text: "Rome" },
            { id: "d", text: "Munich" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Londres en 1948, les premiers Jeux après la guerre, Helsinki en 1952, Rome en 1960 et Munich en 1972.",
        },
        {
          id: 8,
          question: "Remets ces Jeux d'été dans l'ordre, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Moscou" },
            { id: "b", text: "Barcelone" },
            { id: "c", text: "Sydney" },
            { id: "d", text: "Athènes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Moscou en 1980, Barcelone en 1992, Sydney en 2000 et Athènes en 2004, qui retrouvait les Jeux 108 ans après les premiers.",
        },
        {
          id: 9,
          image: "/images/q-jeux-olympiques-villes-04.webp",
          question: "Remets dans l'ordre les premiers Jeux d'hiver organisés après Chamonix.",
          answers: [
            { id: "a", text: "Saint-Moritz" },
            { id: "b", text: "Lake Placid" },
            { id: "c", text: "Garmisch-Partenkirchen" },
            { id: "d", text: "Oslo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Saint-Moritz en 1928, Lake Placid en 1932, Garmisch-Partenkirchen en 1936, puis Oslo en 1952. Il n'y a pas eu de Jeux d'hiver en 1940 ni en 1944, à cause de la guerre.",
        },
        {
          id: 10,
          question: "Remets ces Jeux d'hiver dans l'ordre, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Innsbruck" },
            { id: "b", text: "Sapporo" },
            { id: "c", text: "Sarajevo" },
            { id: "d", text: "Calgary" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Innsbruck en 1964, Sapporo en 1972, Sarajevo en 1984 et Calgary en 1988. Innsbruck a d'ailleurs de nouveau reçu les Jeux d'hiver en 1976.",
        },
      ],
    },
    en: {
      title: "Olympics quiz: host cities in order",
      description:
        "Ten sets of Olympic host cities to put in order, from the first Games in Athens in 1896 to Salt Lake City in 2034.",
      questions: [
        {
          id: 1,
          image: "/images/q-jeux-olympiques-villes-01.webp",
          question: "Put the host cities of the first four modern Summer Olympics in order.",
          answers: [
            { id: "a", text: "Athens" },
            { id: "b", text: "Paris" },
            { id: "c", text: "St. Louis" },
            { id: "d", text: "London" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Athens in 1896, Paris in 1900, St. Louis, in the United States, in 1904, then London in 1908.",
        },
        {
          id: 2,
          question: "Put the Winter Games held in France in order.",
          answers: [
            { id: "a", text: "Chamonix" },
            { id: "b", text: "Grenoble" },
            { id: "c", text: "Albertville" },
            { id: "d", text: "French Alps" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Chamonix in 1924, the very first Winter Games, Grenoble in 1968, Albertville in 1992, then the French Alps in 2030.",
        },
        {
          id: 3,
          image: "/images/q-jeux-olympiques-villes-02.webp",
          question: "Put these Summer Games in order, earliest first.",
          answers: [
            { id: "a", text: "Beijing" },
            { id: "b", text: "London" },
            { id: "c", text: "Rio de Janeiro" },
            { id: "d", text: "Tokyo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Beijing in 2008, London in 2012, Rio in 2016, the first Games in South America, then Tokyo, planned for 2020 and held in 2021.",
        },
        {
          id: 4,
          question: "Put these upcoming Games in order, summer and winter together.",
          answers: [
            { id: "a", text: "Milan-Cortina" },
            { id: "b", text: "Los Angeles" },
            { id: "c", text: "Brisbane" },
            { id: "d", text: "Salt Lake City" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Milan-Cortina for winter 2026, Los Angeles for summer 2028, Brisbane for summer 2032 and Salt Lake City for winter 2034. The French Alps come in between, in 2030.",
        },
        {
          id: 5,
          question: "Put these Summer Games held in the Americas in order.",
          answers: [
            { id: "a", text: "Mexico City" },
            { id: "b", text: "Montreal" },
            { id: "c", text: "Los Angeles" },
            { id: "d", text: "Atlanta" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mexico City in 1968, Montreal in 1976, Los Angeles in 1984 and Atlanta in 1996, the centennial Games.",
        },
        {
          id: 6,
          image: "/images/q-jeux-olympiques-villes-03.webp",
          question: "Put these Winter Games in order, earliest first.",
          answers: [
            { id: "a", text: "Vancouver" },
            { id: "b", text: "Sochi" },
            { id: "c", text: "Pyeongchang" },
            { id: "d", text: "Beijing" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Vancouver in 2010, Sochi in 2014, Pyeongchang in 2018 and Beijing in 2022. Beijing is the only city to have hosted both the Summer and the Winter Games.",
        },
        {
          id: 7,
          question: "Put these post-war Summer Games in order.",
          answers: [
            { id: "a", text: "London" },
            { id: "b", text: "Helsinki" },
            { id: "c", text: "Rome" },
            { id: "d", text: "Munich" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "London in 1948, the first Games after the war, Helsinki in 1952, Rome in 1960 and Munich in 1972.",
        },
        {
          id: 8,
          question: "Put these Summer Games in order, earliest first.",
          answers: [
            { id: "a", text: "Moscow" },
            { id: "b", text: "Barcelona" },
            { id: "c", text: "Sydney" },
            { id: "d", text: "Athens" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Moscow in 1980, Barcelona in 1992, Sydney in 2000 and Athens in 2004, back with the Games 108 years after the first ones.",
        },
        {
          id: 9,
          image: "/images/q-jeux-olympiques-villes-04.webp",
          question: "Put the first Winter Games after Chamonix in order.",
          answers: [
            { id: "a", text: "St. Moritz" },
            { id: "b", text: "Lake Placid" },
            { id: "c", text: "Garmisch-Partenkirchen" },
            { id: "d", text: "Oslo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "St. Moritz in 1928, Lake Placid in 1932, Garmisch-Partenkirchen in 1936, then Oslo in 1952. There were no Winter Games in 1940 or 1944 because of the war.",
        },
        {
          id: 10,
          question: "Put these Winter Games in order, earliest first.",
          answers: [
            { id: "a", text: "Innsbruck" },
            { id: "b", text: "Sapporo" },
            { id: "c", text: "Sarajevo" },
            { id: "d", text: "Calgary" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Innsbruck in 1964, Sapporo in 1972, Sarajevo in 1984 and Calgary in 1988. Innsbruck hosted the Winter Games again in 1976, by the way.",
        },
      ],
    },
    es: {
      title: "Quiz de los Juegos: ciudades sede en orden",
      description:
        "Diez series de ciudades olímpicas para ordenar, desde los primeros Juegos de Atenas en 1896 hasta Salt Lake City en 2034.",
      questions: [
        {
          id: 1,
          image: "/images/q-jeux-olympiques-villes-01.webp",
          question: "Ordena las sedes de los cuatro primeros Juegos Olímpicos de verano modernos.",
          answers: [
            { id: "a", text: "Atenas" },
            { id: "b", text: "París" },
            { id: "c", text: "San Luis" },
            { id: "d", text: "Londres" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Atenas en 1896, París en 1900, San Luis, en Estados Unidos, en 1904, y Londres en 1908.",
        },
        {
          id: 2,
          question: "Ordena los Juegos de invierno celebrados en Francia.",
          answers: [
            { id: "a", text: "Chamonix" },
            { id: "b", text: "Grenoble" },
            { id: "c", text: "Albertville" },
            { id: "d", text: "Alpes franceses" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Chamonix en 1924, los primeros Juegos de invierno, Grenoble en 1968, Albertville en 1992 y los Alpes franceses en 2030.",
        },
        {
          id: 3,
          image: "/images/q-jeux-olympiques-villes-02.webp",
          question: "Ordena estos Juegos de verano, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Pekín" },
            { id: "b", text: "Londres" },
            { id: "c", text: "Río de Janeiro" },
            { id: "d", text: "Tokio" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pekín en 2008, Londres en 2012, Río en 2016, los primeros Juegos en Sudamérica, y Tokio, previstos para 2020 y celebrados en 2021.",
        },
        {
          id: 4,
          question: "Ordena estos próximos Juegos, de verano y de invierno juntos.",
          answers: [
            { id: "a", text: "Milán-Cortina" },
            { id: "b", text: "Los Ángeles" },
            { id: "c", text: "Brisbane" },
            { id: "d", text: "Salt Lake City" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Milán-Cortina para el invierno de 2026, Los Ángeles para el verano de 2028, Brisbane para el verano de 2032 y Salt Lake City para el invierno de 2034. En medio están los Alpes franceses, en 2030.",
        },
        {
          id: 5,
          question: "Ordena estos Juegos de verano celebrados en el continente americano.",
          answers: [
            { id: "a", text: "Ciudad de México" },
            { id: "b", text: "Montreal" },
            { id: "c", text: "Los Ángeles" },
            { id: "d", text: "Atlanta" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ciudad de México en 1968, Montreal en 1976, Los Ángeles en 1984 y Atlanta en 1996, los Juegos del centenario.",
        },
        {
          id: 6,
          image: "/images/q-jeux-olympiques-villes-03.webp",
          question: "Ordena estos Juegos de invierno, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Vancouver" },
            { id: "b", text: "Sochi" },
            { id: "c", text: "Pyeongchang" },
            { id: "d", text: "Pekín" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Vancouver en 2010, Sochi en 2014, Pyeongchang en 2018 y Pekín en 2022. Pekín es la única ciudad que ha acogido los Juegos de verano y los de invierno.",
        },
        {
          id: 7,
          question: "Ordena estos Juegos de verano de la posguerra.",
          answers: [
            { id: "a", text: "Londres" },
            { id: "b", text: "Helsinki" },
            { id: "c", text: "Roma" },
            { id: "d", text: "Múnich" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Londres en 1948, los primeros Juegos tras la guerra, Helsinki en 1952, Roma en 1960 y Múnich en 1972.",
        },
        {
          id: 8,
          question: "Ordena estos Juegos de verano, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Moscú" },
            { id: "b", text: "Barcelona" },
            { id: "c", text: "Sídney" },
            { id: "d", text: "Atenas" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Moscú en 1980, Barcelona en 1992, Sídney en 2000 y Atenas en 2004, que recuperaba los Juegos 108 años después de los primeros.",
        },
        {
          id: 9,
          image: "/images/q-jeux-olympiques-villes-04.webp",
          question: "Ordena los primeros Juegos de invierno celebrados después de Chamonix.",
          answers: [
            { id: "a", text: "Saint Moritz" },
            { id: "b", text: "Lake Placid" },
            { id: "c", text: "Garmisch-Partenkirchen" },
            { id: "d", text: "Oslo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Saint Moritz en 1928, Lake Placid en 1932, Garmisch-Partenkirchen en 1936 y Oslo en 1952. No hubo Juegos de invierno en 1940 ni en 1944 por la guerra.",
        },
        {
          id: 10,
          question: "Ordena estos Juegos de invierno, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Innsbruck" },
            { id: "b", text: "Sapporo" },
            { id: "c", text: "Sarajevo" },
            { id: "d", text: "Calgary" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Innsbruck en 1964, Sapporo en 1972, Sarajevo en 1984 y Calgary en 1988. Por cierto, Innsbruck volvió a organizar los Juegos de invierno en 1976.",
        },
      ],
    },
  },
};

export default [quizJeuxOlympiquesVilles] as TranslatedQuiz[];
