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
        "Vingt séries de villes olympiques à remettre dans l'ordre, des premiers Jeux d'Athènes en 1896 à ceux de Salt Lake City en 2034.",
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
        {
          id: 11,
          question: "Remets dans l'ordre ces Jeux d'été d'avant la Seconde Guerre mondiale.",
          answers: [
            { id: "a", text: "Anvers" },
            { id: "b", text: "Berlin" },
            { id: "c", text: "Stockholm" },
            { id: "d", text: "Amsterdam" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Stockholm en 1912, Anvers en 1920, les premiers Jeux après la Première Guerre mondiale, Amsterdam en 1928 et Berlin en 1936.",
        },
        {
          id: 12,
          question: "Remets dans l'ordre ces Jeux organisés en Italie, d'été comme d'hiver.",
          answers: [
            { id: "a", text: "Turin" },
            { id: "b", text: "Cortina d'Ampezzo" },
            { id: "c", text: "Milan-Cortina" },
            { id: "d", text: "Rome" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Cortina d'Ampezzo pour l'hiver 1956, Rome pour l'été 1960, Turin pour l'hiver 2006 et Milan-Cortina pour l'hiver 2026.",
        },
        {
          id: 13,
          question: "Remets dans l'ordre ces Jeux d'hiver organisés en Asie.",
          answers: [
            { id: "a", text: "Pékin" },
            { id: "b", text: "Nagano" },
            { id: "c", text: "Pyeongchang" },
            { id: "d", text: "Sapporo" },
          ],
          correctOrder: ["d", "b", "c", "a"],
          correctAnswer: "d",
          explanation:
            "Sapporo en 1972, les premiers Jeux d'hiver en Asie, Nagano en 1998, Pyeongchang en 2018 et Pékin en 2022.",
        },
        {
          id: 14,
          question: "Remets dans l'ordre ces Jeux d'hiver organisés en Amérique du Nord.",
          answers: [
            { id: "a", text: "Squaw Valley" },
            { id: "b", text: "Salt Lake City" },
            { id: "c", text: "Calgary" },
            { id: "d", text: "Vancouver" },
          ],
          correctOrder: ["a", "c", "b", "d"],
          correctAnswer: "a",
          explanation:
            "Squaw Valley, en Californie, en 1960, Calgary en 1988, Salt Lake City en 2002 et Vancouver en 2010.",
        },
        {
          id: 15,
          question: "Classe ces pays selon l'année où ils ont organisé des Jeux d'été pour la première fois.",
          answers: [
            { id: "a", text: "L'Espagne" },
            { id: "b", text: "La Chine" },
            { id: "c", text: "La Finlande" },
            { id: "d", text: "Le Mexique" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "La Finlande à Helsinki en 1952, le Mexique à Mexico en 1968, l'Espagne à Barcelone en 1992 et la Chine à Pékin en 2008.",
        },
        {
          id: 16,
          question: "Classe ces pays selon l'année où ils ont organisé des Jeux d'hiver pour la première fois.",
          answers: [
            { id: "a", text: "L'Allemagne" },
            { id: "b", text: "La Suisse" },
            { id: "c", text: "L'Autriche" },
            { id: "d", text: "La Norvège" },
          ],
          correctOrder: ["b", "a", "d", "c"],
          correctAnswer: "b",
          explanation:
            "La Suisse à Saint-Moritz en 1928, l'Allemagne à Garmisch-Partenkirchen en 1936, la Norvège à Oslo en 1952 et l'Autriche à Innsbruck en 1964.",
        },
        {
          id: 17,
          question: "Remets dans l'ordre ces Jeux des années 2020, d'été comme d'hiver.",
          answers: [
            { id: "a", text: "Pékin" },
            { id: "b", text: "Milan-Cortina" },
            { id: "c", text: "Paris" },
            { id: "d", text: "Tokyo" },
          ],
          correctOrder: ["d", "a", "c", "b"],
          correctAnswer: "d",
          explanation:
            "Tokyo en 2021, reportés d'un an à cause du Covid, Pékin pour l'hiver 2022, Paris en 2024 et Milan-Cortina pour l'hiver 2026.",
        },
        {
          id: 18,
          question: "Classe ces continents selon l'année de leurs premiers Jeux d'été.",
          answers: [
            { id: "a", text: "L'Amérique du Nord" },
            { id: "b", text: "L'Océanie" },
            { id: "c", text: "L'Amérique du Sud" },
            { id: "d", text: "L'Asie" },
          ],
          correctOrder: ["a", "b", "d", "c"],
          correctAnswer: "a",
          explanation:
            "L'Amérique du Nord avec Saint-Louis en 1904, l'Océanie avec Melbourne en 1956, l'Asie avec Tokyo en 1964 et l'Amérique du Sud avec Rio en 2016. L'Afrique n'a encore jamais reçu les Jeux.",
        },
        {
          id: 19,
          question: "Remets dans l'ordre ces Jeux d'été, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Tokyo" },
            { id: "b", text: "Rome" },
            { id: "c", text: "Melbourne" },
            { id: "d", text: "Mexico" },
          ],
          correctOrder: ["c", "b", "a", "d"],
          correctAnswer: "c",
          explanation:
            "Melbourne en 1956, Rome en 1960, Tokyo en 1964 et Mexico en 1968. Ce sont quatre Jeux de suite, chacun sur un continent différent.",
        },
        {
          id: 20,
          question: "Remets ces exploits dans l'ordre des Jeux où ils ont eu lieu.",
          answers: [
            { id: "a", text: "Le triplé d'Usain Bolt" },
            { id: "b", text: "Les quatre médailles d'or de Carl Lewis" },
            { id: "c", text: "Le premier 10 de Nadia Comăneci" },
            { id: "d", text: "Les quatre médailles d'or de Jesse Owens" },
          ],
          correctOrder: ["d", "c", "b", "a"],
          correctAnswer: "d",
          explanation:
            "Owens a gagné ses quatre titres à Berlin en 1936, Comăneci a eu le premier 10 de l'histoire à Montréal en 1976, Lewis a gagné quatre titres à Los Angeles en 1984, et Bolt a gagné le 100 m, le 200 m et le relais à Pékin en 2008.",
        },
      ],
    },
    en: {
      title: "Olympics quiz: host cities in order",
      description:
        "Twenty sets of Olympic host cities to put in order, from the first Games in Athens in 1896 to Salt Lake City in 2034.",
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
        {
          id: 11,
          question: "Put these pre-Second World War Summer Games in order.",
          answers: [
            { id: "a", text: "Antwerp" },
            { id: "b", text: "Berlin" },
            { id: "c", text: "Stockholm" },
            { id: "d", text: "Amsterdam" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Stockholm in 1912, Antwerp in 1920, the first Games after the First World War, Amsterdam in 1928 and Berlin in 1936.",
        },
        {
          id: 12,
          question: "Put these Games held in Italy in order, summer and winter.",
          answers: [
            { id: "a", text: "Turin" },
            { id: "b", text: "Cortina d'Ampezzo" },
            { id: "c", text: "Milan-Cortina" },
            { id: "d", text: "Rome" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Cortina d'Ampezzo for the 1956 Winter Games, Rome for the 1960 Summer Games, Turin for winter 2006 and Milan-Cortina for winter 2026.",
        },
        {
          id: 13,
          question: "Put these Winter Games held in Asia in order.",
          answers: [
            { id: "a", text: "Beijing" },
            { id: "b", text: "Nagano" },
            { id: "c", text: "Pyeongchang" },
            { id: "d", text: "Sapporo" },
          ],
          correctOrder: ["d", "b", "c", "a"],
          correctAnswer: "d",
          explanation:
            "Sapporo in 1972, the first Winter Games in Asia, Nagano in 1998, Pyeongchang in 2018 and Beijing in 2022.",
        },
        {
          id: 14,
          question: "Put these Winter Games held in North America in order.",
          answers: [
            { id: "a", text: "Squaw Valley" },
            { id: "b", text: "Salt Lake City" },
            { id: "c", text: "Calgary" },
            { id: "d", text: "Vancouver" },
          ],
          correctOrder: ["a", "c", "b", "d"],
          correctAnswer: "a",
          explanation:
            "Squaw Valley, California, in 1960, Calgary in 1988, Salt Lake City in 2002 and Vancouver in 2010.",
        },
        {
          id: 15,
          question: "Rank these countries by the year they first hosted the Summer Games.",
          answers: [
            { id: "a", text: "Spain" },
            { id: "b", text: "China" },
            { id: "c", text: "Finland" },
            { id: "d", text: "Mexico" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Finland in Helsinki in 1952, Mexico in Mexico City in 1968, Spain in Barcelona in 1992 and China in Beijing in 2008.",
        },
        {
          id: 16,
          question: "Rank these countries by the year they first hosted the Winter Games.",
          answers: [
            { id: "a", text: "Germany" },
            { id: "b", text: "Switzerland" },
            { id: "c", text: "Austria" },
            { id: "d", text: "Norway" },
          ],
          correctOrder: ["b", "a", "d", "c"],
          correctAnswer: "b",
          explanation:
            "Switzerland at St. Moritz in 1928, Germany at Garmisch-Partenkirchen in 1936, Norway in Oslo in 1952 and Austria in Innsbruck in 1964.",
        },
        {
          id: 17,
          question: "Put these Games of the 2020s in order, summer and winter.",
          answers: [
            { id: "a", text: "Beijing" },
            { id: "b", text: "Milan-Cortina" },
            { id: "c", text: "Paris" },
            { id: "d", text: "Tokyo" },
          ],
          correctOrder: ["d", "a", "c", "b"],
          correctAnswer: "d",
          explanation:
            "Tokyo in 2021, a year late because of Covid, Beijing for winter 2022, Paris in 2024 and Milan-Cortina for winter 2026.",
        },
        {
          id: 18,
          question: "Rank these continents by the year of their first Summer Games.",
          answers: [
            { id: "a", text: "North America" },
            { id: "b", text: "Oceania" },
            { id: "c", text: "South America" },
            { id: "d", text: "Asia" },
          ],
          correctOrder: ["a", "b", "d", "c"],
          correctAnswer: "a",
          explanation:
            "North America with St. Louis in 1904, Oceania with Melbourne in 1956, Asia with Tokyo in 1964 and South America with Rio in 2016. Africa has never hosted the Games.",
        },
        {
          id: 19,
          question: "Put these Summer Games in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Tokyo" },
            { id: "b", text: "Rome" },
            { id: "c", text: "Melbourne" },
            { id: "d", text: "Mexico City" },
          ],
          correctOrder: ["c", "b", "a", "d"],
          correctAnswer: "c",
          explanation:
            "Melbourne in 1956, Rome in 1960, Tokyo in 1964 and Mexico City in 1968: four Games in a row, each on a different continent.",
        },
        {
          id: 20,
          question: "Put these feats in order, by the Games where they happened.",
          answers: [
            { id: "a", text: "Usain Bolt's triple" },
            { id: "b", text: "Carl Lewis's four gold medals" },
            { id: "c", text: "Nadia Comăneci's first perfect 10" },
            { id: "d", text: "Jesse Owens's four gold medals" },
          ],
          correctOrder: ["d", "c", "b", "a"],
          correctAnswer: "d",
          explanation:
            "Owens won his four titles in Berlin in 1936, Comăneci scored the first perfect 10 in Montreal in 1976, Lewis won four titles in Los Angeles in 1984, and Bolt won the 100 m, 200 m and relay in Beijing in 2008.",
        },
      ],
    },
    es: {
      title: "Quiz de los Juegos: ciudades sede en orden",
      description:
        "Veinte series de ciudades olímpicas para ordenar, desde los primeros Juegos de Atenas en 1896 hasta Salt Lake City en 2034.",
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
        {
          id: 11,
          question: "Ordena estos Juegos de verano anteriores a la Segunda Guerra Mundial.",
          answers: [
            { id: "a", text: "Amberes" },
            { id: "b", text: "Berlín" },
            { id: "c", text: "Estocolmo" },
            { id: "d", text: "Ámsterdam" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Estocolmo en 1912, Amberes en 1920, los primeros Juegos tras la Primera Guerra Mundial, Ámsterdam en 1928 y Berlín en 1936.",
        },
        {
          id: 12,
          question: "Ordena estos Juegos celebrados en Italia, de verano y de invierno.",
          answers: [
            { id: "a", text: "Turín" },
            { id: "b", text: "Cortina d'Ampezzo" },
            { id: "c", text: "Milán-Cortina" },
            { id: "d", text: "Roma" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Cortina d'Ampezzo en el invierno de 1956, Roma en el verano de 1960, Turín en el invierno de 2006 y Milán-Cortina en el de 2026.",
        },
        {
          id: 13,
          question: "Ordena estos Juegos de invierno celebrados en Asia.",
          answers: [
            { id: "a", text: "Pekín" },
            { id: "b", text: "Nagano" },
            { id: "c", text: "Pyeongchang" },
            { id: "d", text: "Sapporo" },
          ],
          correctOrder: ["d", "b", "c", "a"],
          correctAnswer: "d",
          explanation:
            "Sapporo en 1972, los primeros Juegos de invierno en Asia, Nagano en 1998, Pyeongchang en 2018 y Pekín en 2022.",
        },
        {
          id: 14,
          question: "Ordena estos Juegos de invierno celebrados en América del Norte.",
          answers: [
            { id: "a", text: "Squaw Valley" },
            { id: "b", text: "Salt Lake City" },
            { id: "c", text: "Calgary" },
            { id: "d", text: "Vancouver" },
          ],
          correctOrder: ["a", "c", "b", "d"],
          correctAnswer: "a",
          explanation:
            "Squaw Valley, en California, en 1960, Calgary en 1988, Salt Lake City en 2002 y Vancouver en 2010.",
        },
        {
          id: 15,
          question: "Ordena estos países según el año en que organizaron por primera vez unos Juegos de verano.",
          answers: [
            { id: "a", text: "España" },
            { id: "b", text: "China" },
            { id: "c", text: "Finlandia" },
            { id: "d", text: "México" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Finlandia en Helsinki en 1952, México en Ciudad de México en 1968, España en Barcelona en 1992 y China en Pekín en 2008.",
        },
        {
          id: 16,
          question: "Ordena estos países según el año en que organizaron por primera vez unos Juegos de invierno.",
          answers: [
            { id: "a", text: "Alemania" },
            { id: "b", text: "Suiza" },
            { id: "c", text: "Austria" },
            { id: "d", text: "Noruega" },
          ],
          correctOrder: ["b", "a", "d", "c"],
          correctAnswer: "b",
          explanation:
            "Suiza en St. Moritz en 1928, Alemania en Garmisch-Partenkirchen en 1936, Noruega en Oslo en 1952 y Austria en Innsbruck en 1964.",
        },
        {
          id: 17,
          question: "Ordena estos Juegos de la década de 2020, de verano y de invierno.",
          answers: [
            { id: "a", text: "Pekín" },
            { id: "b", text: "Milán-Cortina" },
            { id: "c", text: "París" },
            { id: "d", text: "Tokio" },
          ],
          correctOrder: ["d", "a", "c", "b"],
          correctAnswer: "d",
          explanation:
            "Tokio en 2021, con un año de retraso por el covid, Pekín en el invierno de 2022, París en 2024 y Milán-Cortina en el invierno de 2026.",
        },
        {
          id: 18,
          question: "Ordena estos continentes según el año de sus primeros Juegos de verano.",
          answers: [
            { id: "a", text: "América del Norte" },
            { id: "b", text: "Oceanía" },
            { id: "c", text: "América del Sur" },
            { id: "d", text: "Asia" },
          ],
          correctOrder: ["a", "b", "d", "c"],
          correctAnswer: "a",
          explanation:
            "América del Norte con San Luis en 1904, Oceanía con Melbourne en 1956, Asia con Tokio en 1964 y América del Sur con Río en 2016. África todavía no ha organizado unos Juegos.",
        },
        {
          id: 19,
          question: "Ordena estos Juegos de verano, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Tokio" },
            { id: "b", text: "Roma" },
            { id: "c", text: "Melbourne" },
            { id: "d", text: "Ciudad de México" },
          ],
          correctOrder: ["c", "b", "a", "d"],
          correctAnswer: "c",
          explanation:
            "Melbourne en 1956, Roma en 1960, Tokio en 1964 y Ciudad de México en 1968. Son cuatro Juegos seguidos, cada uno en un continente distinto.",
        },
        {
          id: 20,
          question: "Ordena estas hazañas según los Juegos en los que ocurrieron.",
          answers: [
            { id: "a", text: "El triplete de Usain Bolt" },
            { id: "b", text: "Las cuatro medallas de oro de Carl Lewis" },
            { id: "c", text: "El primer 10 de Nadia Comăneci" },
            { id: "d", text: "Las cuatro medallas de oro de Jesse Owens" },
          ],
          correctOrder: ["d", "c", "b", "a"],
          correctAnswer: "d",
          explanation:
            "Owens ganó sus cuatro títulos en Berlín en 1936, Comăneci logró el primer 10 de la historia en Montreal en 1976, Lewis ganó cuatro oros en Los Ángeles en 1984 y Bolt ganó los 100 m, los 200 m y el relevo en Pekín en 2008.",
        },
      ],
    },
  },
};

export default [quizJeuxOlympiquesVilles] as TranslatedQuiz[];
