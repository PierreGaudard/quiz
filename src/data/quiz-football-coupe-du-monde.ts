import type { TranslatedQuiz } from "./types";

/**
 * Quiz ordre sur l'histoire de la Coupe du monde de football : pays
 * organisateurs, premiers titres, finales des Bleus, Ballons d'or du
 * tournoi, sélectionneurs de l'équipe de France.
 *
 * OrdrePlayer melange lui-meme les propositions : seul correctOrder compte.
 * Aucune question sur le nombre de titres par pays ni sur les buteurs :
 * le quiz qcm sur le football les pose deja.
 */
export const quizFootballCoupeDuMonde: TranslatedQuiz = {
  slug: "quiz-football-coupe-du-monde",
  slugs: { en: "world-cup-history-quiz", fr: "quiz-football-coupe-du-monde", es: "quiz-futbol-mundial" },
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "medium",
  coverImage: "/images/cover-football-coupe-du-monde.webp",
  gameType: "ordre",
  playCount: 5400,
  translations: {
    fr: {
      title: "Quiz foot : la Coupe du monde dans l'ordre",
      description:
        "Vingt suites à remettre dans l'ordre sur la Coupe du monde : pays hôtes, finales des Bleus, Ballons d'or du tournoi, sélectionneurs, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-football-coupe-du-monde-01.webp",
          question: "Remets dans l'ordre les pays qui ont organisé les quatre premières Coupes du monde.",
          answers: [
            { id: "a", text: "Uruguay" },
            { id: "b", text: "Italie" },
            { id: "c", text: "France" },
            { id: "d", text: "Brésil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Uruguay en 1930, Italie en 1934, France en 1938, puis Brésil en 1950. Il n'y a pas eu de Coupe du monde en 1942 ni en 1946, à cause de la Seconde Guerre mondiale.",
        },
        {
          id: 2,
          question: "Classe ces pays selon l'année de leur premier titre mondial, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Brésil" },
            { id: "b", text: "Angleterre" },
            { id: "c", text: "Argentine" },
            { id: "d", text: "Espagne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Brésil en 1958, l'Angleterre en 1966, chez elle, l'Argentine en 1978, chez elle aussi, et l'Espagne en 2010.",
        },
        {
          id: 3,
          image: "/images/q-football-coupe-du-monde-02.webp",
          question: "Remets dans l'ordre les adversaires de la France lors de ses finales de Coupe du monde.",
          answers: [
            { id: "a", text: "Brésil" },
            { id: "b", text: "Italie" },
            { id: "c", text: "Croatie" },
            { id: "d", text: "Argentine" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Brésil en 1998 (victoire 3-0), l'Italie en 2006 (défaite aux tirs au but), la Croatie en 2018 (victoire 4-2) et l'Argentine en 2022 (défaite aux tirs au but).",
        },
        {
          id: 4,
          question: "Remets ces pays organisateurs dans l'ordre, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Japon et Corée du Sud" },
            { id: "b", text: "Allemagne" },
            { id: "c", text: "Afrique du Sud" },
            { id: "d", text: "Brésil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Japon et Corée du Sud en 2002, la première Coupe du monde en Asie, Allemagne en 2006, Afrique du Sud en 2010, la première en Afrique, et Brésil en 2014.",
        },
        {
          id: 5,
          image: "/images/q-football-coupe-du-monde-03.webp",
          question: "Classe ces joueurs selon l'année où ils ont été élus meilleur joueur de la Coupe du monde.",
          answers: [
            { id: "a", text: "Zinédine Zidane" },
            { id: "b", text: "Diego Forlán" },
            { id: "c", text: "Lionel Messi" },
            { id: "d", text: "Luka Modrić" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zidane en 2006, Forlán en 2010, Messi en 2014 et Modrić en 2018. Aucun des quatre n'a gagné la Coupe du monde l'année où il a eu ce Ballon d'or.",
        },
        {
          id: 6,
          question: "Remets dans l'ordre les pays hôtes de ces Coupes du monde, de 2022 à 2034.",
          answers: [
            { id: "a", text: "Qatar" },
            { id: "b", text: "États-Unis, Canada et Mexique" },
            { id: "c", text: "Maroc, Espagne et Portugal" },
            { id: "d", text: "Arabie saoudite" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Qatar en 2022, États-Unis, Canada et Mexique en 2026, Maroc, Espagne et Portugal en 2030, puis Arabie saoudite en 2034. La FIFA a attribué les éditions 2030 et 2034 en décembre 2024.",
        },
        {
          id: 7,
          question: "Remets ces sélectionneurs de l'équipe de France dans l'ordre où ils ont pris le poste.",
          answers: [
            { id: "a", text: "Aimé Jacquet" },
            { id: "b", text: "Raymond Domenech" },
            { id: "c", text: "Didier Deschamps" },
            { id: "d", text: "Zinédine Zidane" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Aimé Jacquet en 1993, champion du monde en 1998, Raymond Domenech en 2004, Didier Deschamps en 2012, puis Zinédine Zidane, qui lui a succédé à l'été 2026.",
        },
        {
          id: 8,
          image: "/images/q-football-coupe-du-monde-04.webp",
          question: "Remets dans l'ordre les buts de la France en finale de la Coupe du monde 2018.",
          answers: [
            { id: "a", text: "Mandžukić contre son camp" },
            { id: "b", text: "Griezmann sur penalty" },
            { id: "c", text: "Pogba" },
            { id: "d", text: "Mbappé" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mandžukić marque contre son camp à la 18e minute, Griezmann transforme un penalty à la 38e, Pogba marque à la 59e et Mbappé à la 65e. La France gagne 4 à 2.",
        },
        {
          id: 9,
          question: "Remets ces pays européens dans l'ordre où ils ont organisé la Coupe du monde.",
          answers: [
            { id: "a", text: "Suède" },
            { id: "b", text: "Angleterre" },
            { id: "c", text: "Allemagne de l'Ouest" },
            { id: "d", text: "Espagne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Suède en 1958, l'Angleterre en 1966, l'Allemagne de l'Ouest en 1974 et l'Espagne en 1982.",
        },
        {
          id: 10,
          question: "Classe ces joueurs selon l'année de leur premier titre de champion du monde.",
          answers: [
            { id: "a", text: "Pelé" },
            { id: "b", text: "Franz Beckenbauer" },
            { id: "c", text: "Diego Maradona" },
            { id: "d", text: "Zinédine Zidane" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pelé en 1958, à 17 ans, Beckenbauer en 1974, Maradona en 1986 et Zidane en 1998.",
        },
        {
          id: 11,
          question: "Remets ces mascottes de la Coupe du monde dans l'ordre, de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Footix" },
            { id: "b", text: "Zakumi" },
            { id: "c", text: "Fuleco" },
            { id: "d", text: "Zabivaka" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Footix, le coq de France 1998, Zakumi, le léopard d'Afrique du Sud 2010, Fuleco, le tatou du Brésil 2014, et Zabivaka, le loup de Russie 2018.",
        },
        {
          id: 12,
          question: "Remets dans l'ordre les champions du monde de 2002 à 2014.",
          answers: [
            { id: "a", text: "Brésil" },
            { id: "b", text: "Italie" },
            { id: "c", text: "Espagne" },
            { id: "d", text: "Allemagne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Brésil en 2002 contre l'Allemagne, l'Italie en 2006 contre la France, l'Espagne en 2010 contre les Pays-Bas, et l'Allemagne en 2014 contre l'Argentine.",
        },
        {
          id: 13,
          question: "Classe ces joueurs selon l'année où ils ont reçu le Ballon d'or de la Coupe du monde.",
          answers: [
            { id: "a", text: "Paolo Rossi" },
            { id: "b", text: "Diego Maradona" },
            { id: "c", text: "Salvatore Schillaci" },
            { id: "d", text: "Romário" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Paolo Rossi en 1982, la première année où ce trophée a été remis, Maradona en 1986, Schillaci en 1990 et Romário en 1994.",
        },
        {
          id: 14,
          question: "Remets ces nouveautés dans l'ordre où elles sont apparues en Coupe du monde.",
          answers: [
            { id: "a", text: "Les cartons jaunes et rouges" },
            { id: "b", text: "La séance de tirs au but" },
            { id: "c", text: "Le but en or" },
            { id: "d", text: "L'arbitrage vidéo (VAR)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les cartons en 1970, la première séance de tirs au but en 1982, lors de la demi-finale RFA-France, le but en or en 1998 et la VAR en 2018, en Russie.",
        },
        {
          id: 15,
          question: "Remets ces stades dans l'ordre où ils ont accueilli une finale de Coupe du monde.",
          answers: [
            { id: "a", text: "Wembley" },
            { id: "b", text: "Le Rose Bowl" },
            { id: "c", text: "Le Stade de France" },
            { id: "d", text: "L'Olympiastadion de Berlin" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Wembley en 1966, le Rose Bowl de Pasadena, près de Los Angeles, en 1994, le Stade de France en 1998 et l'Olympiastadion de Berlin en 2006.",
        },
        {
          id: 16,
          question: "Remets dans l'ordre ces épisodes de l'histoire du trophée de la Coupe du monde.",
          answers: [
            { id: "a", text: "La première Coupe du monde est jouée" },
            { id: "b", text: "La coupe Jules-Rimet est volée à Londres" },
            { id: "c", text: "Le Brésil garde la coupe Jules-Rimet pour de bon" },
            { id: "d", text: "Le trophée actuel est remis pour la première fois" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La première Coupe du monde se joue en 1930. En 1966, la coupe Jules-Rimet est volée à Londres, puis retrouvée par un chien, Pickles. Le Brésil la garde définitivement après son troisième titre en 1970, et le trophée actuel est remis pour la première fois en 1974.",
        },
        {
          id: 17,
          question: "Remets ces polémiques de Coupe du monde dans l'ordre.",
          answers: [
            { id: "a", text: "L'agression de Schumacher sur Battiston" },
            { id: "b", text: "La « main de Dieu » de Maradona" },
            { id: "c", text: "Le but refusé de Lampard contre l'Allemagne" },
            { id: "d", text: "La morsure de Suárez sur Chiellini" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Schumacher sur Battiston en 1982 à Séville, la main de Maradona contre l'Angleterre en 1986, le tir de Lampard qui franchit la ligne sans être accordé en 2010, et la morsure de Suárez en 2014.",
        },
        {
          id: 18,
          question: "Remets dans l'ordre les adversaires de l'Allemagne lors de ces finales de Coupe du monde.",
          answers: [
            { id: "a", text: "Hongrie" },
            { id: "b", text: "Angleterre" },
            { id: "c", text: "Pays-Bas" },
            { id: "d", text: "Italie" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Hongrie en 1954 (victoire), l'Angleterre en 1966 (défaite), les Pays-Bas en 1974 (victoire) et l'Italie en 1982 (défaite). À l'époque, c'était encore la RFA.",
        },
        {
          id: 19,
          question: "Remets dans l'ordre ces moments de la finale France-Italie de 2006.",
          answers: [
            { id: "a", text: "Zidane marque sur penalty" },
            { id: "b", text: "Materazzi égalise de la tête" },
            { id: "c", text: "Zidane est expulsé" },
            { id: "d", text: "Grosso marque le dernier tir au but" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zidane marque sur penalty à la 7e minute, Materazzi égalise à la 19e, Zidane est expulsé à la 110e après son coup de tête sur Materazzi, et Grosso donne le titre à l'Italie aux tirs au but (5-3).",
        },
        {
          id: 20,
          question: "Remets dans l'ordre les adversaires de la France dans le tableau final de 1998, du huitième à la finale.",
          answers: [
            { id: "a", text: "Paraguay" },
            { id: "b", text: "Italie" },
            { id: "c", text: "Croatie" },
            { id: "d", text: "Brésil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Paraguay en huitième, battu grâce au but en or de Laurent Blanc, l'Italie en quart aux tirs au but, la Croatie en demi avec deux buts de Lilian Thuram, et le Brésil en finale (3-0).",
        },
      ],
    },
    en: {
      title: "Football quiz: the World Cup in order",
      description:
        "Twenty sequences to put in order about the World Cup: host countries, France's finals, Golden Ball winners, France managers and more.",
      questions: [
        {
          id: 1,
          image: "/images/q-football-coupe-du-monde-01.webp",
          question: "Put the hosts of the first four World Cups in order.",
          answers: [
            { id: "a", text: "Uruguay" },
            { id: "b", text: "Italy" },
            { id: "c", text: "France" },
            { id: "d", text: "Brazil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Uruguay in 1930, Italy in 1934, France in 1938, then Brazil in 1950. There was no World Cup in 1942 or 1946 because of the Second World War.",
        },
        {
          id: 2,
          question: "Rank these countries by the year of their first World Cup win, earliest first.",
          answers: [
            { id: "a", text: "Brazil" },
            { id: "b", text: "England" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Spain" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Brazil in 1958, England in 1966 on home soil, Argentina in 1978, also at home, and Spain in 2010.",
        },
        {
          id: 3,
          image: "/images/q-football-coupe-du-monde-02.webp",
          question: "Put France's World Cup final opponents in order.",
          answers: [
            { id: "a", text: "Brazil" },
            { id: "b", text: "Italy" },
            { id: "c", text: "Croatia" },
            { id: "d", text: "Argentina" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Brazil in 1998 (won 3-0), Italy in 2006 (lost on penalties), Croatia in 2018 (won 4-2) and Argentina in 2022 (lost on penalties).",
        },
        {
          id: 4,
          question: "Put these World Cup hosts in order, earliest first.",
          answers: [
            { id: "a", text: "Japan and South Korea" },
            { id: "b", text: "Germany" },
            { id: "c", text: "South Africa" },
            { id: "d", text: "Brazil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Japan and South Korea in 2002, the first World Cup in Asia, Germany in 2006, South Africa in 2010, the first in Africa, and Brazil in 2014.",
        },
        {
          id: 5,
          image: "/images/q-football-coupe-du-monde-03.webp",
          question: "Rank these players by the year they won the World Cup Golden Ball.",
          answers: [
            { id: "a", text: "Zinedine Zidane" },
            { id: "b", text: "Diego Forlán" },
            { id: "c", text: "Lionel Messi" },
            { id: "d", text: "Luka Modrić" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zidane in 2006, Forlán in 2010, Messi in 2014 and Modrić in 2018. None of the four won the World Cup in the year they got the Golden Ball.",
        },
        {
          id: 6,
          question: "Put the hosts of these World Cups in order, from 2022 to 2034.",
          answers: [
            { id: "a", text: "Qatar" },
            { id: "b", text: "USA, Canada and Mexico" },
            { id: "c", text: "Morocco, Spain and Portugal" },
            { id: "d", text: "Saudi Arabia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Qatar in 2022, the USA, Canada and Mexico in 2026, Morocco, Spain and Portugal in 2030, then Saudi Arabia in 2034. FIFA handed out the 2030 and 2034 tournaments in December 2024.",
        },
        {
          id: 7,
          question: "Put these France managers in the order they took the job.",
          answers: [
            { id: "a", text: "Aimé Jacquet" },
            { id: "b", text: "Raymond Domenech" },
            { id: "c", text: "Didier Deschamps" },
            { id: "d", text: "Zinedine Zidane" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Aimé Jacquet in 1993, world champion in 1998, Raymond Domenech in 2004, Didier Deschamps in 2012, then Zinedine Zidane, who took over in the summer of 2026.",
        },
        {
          id: 8,
          image: "/images/q-football-coupe-du-monde-04.webp",
          question: "Put France's goals in the 2018 World Cup final in order.",
          answers: [
            { id: "a", text: "Mandžukić own goal" },
            { id: "b", text: "Griezmann penalty" },
            { id: "c", text: "Pogba" },
            { id: "d", text: "Mbappé" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mandžukić heads into his own net in the 18th minute, Griezmann scores a penalty in the 38th, Pogba scores in the 59th and Mbappé in the 65th. France win 4-2.",
        },
        {
          id: 9,
          question: "Put these European countries in the order they hosted the World Cup.",
          answers: [
            { id: "a", text: "Sweden" },
            { id: "b", text: "England" },
            { id: "c", text: "West Germany" },
            { id: "d", text: "Spain" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sweden in 1958, England in 1966, West Germany in 1974 and Spain in 1982.",
        },
        {
          id: 10,
          question: "Rank these players by the year of their first World Cup win.",
          answers: [
            { id: "a", text: "Pelé" },
            { id: "b", text: "Franz Beckenbauer" },
            { id: "c", text: "Diego Maradona" },
            { id: "d", text: "Zinedine Zidane" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pelé in 1958, aged 17, Beckenbauer in 1974, Maradona in 1986 and Zidane in 1998.",
        },
        {
          id: 11,
          question: "Put these World Cup mascots in order, from oldest to most recent.",
          answers: [
            { id: "a", text: "Footix" },
            { id: "b", text: "Zakumi" },
            { id: "c", text: "Fuleco" },
            { id: "d", text: "Zabivaka" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Footix, the rooster of France 1998, Zakumi, the leopard of South Africa 2010, Fuleco, the armadillo of Brazil 2014, and Zabivaka, the wolf of Russia 2018.",
        },
        {
          id: 12,
          question: "Put the World Cup winners from 2002 to 2014 in order.",
          answers: [
            { id: "a", text: "Brazil" },
            { id: "b", text: "Italy" },
            { id: "c", text: "Spain" },
            { id: "d", text: "Germany" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Brazil in 2002 against Germany, Italy in 2006 against France, Spain in 2010 against the Netherlands, and Germany in 2014 against Argentina.",
        },
        {
          id: 13,
          question: "Rank these players by the year they won the World Cup Golden Ball.",
          answers: [
            { id: "a", text: "Paolo Rossi" },
            { id: "b", text: "Diego Maradona" },
            { id: "c", text: "Salvatore Schillaci" },
            { id: "d", text: "Romário" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Paolo Rossi in 1982, the first year the award was given, Maradona in 1986, Schillaci in 1990 and Romário in 1994.",
        },
        {
          id: 14,
          question: "Put these innovations in the order they first appeared at the World Cup.",
          answers: [
            { id: "a", text: "Yellow and red cards" },
            { id: "b", text: "The penalty shoot-out" },
            { id: "c", text: "The golden goal" },
            { id: "d", text: "Video review (VAR)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Cards in 1970, the first penalty shoot-out in 1982, in the West Germany v France semi-final, the golden goal in 1998 and VAR in 2018, in Russia.",
        },
        {
          id: 15,
          question: "Put these stadiums in the order they hosted a World Cup final.",
          answers: [
            { id: "a", text: "Wembley" },
            { id: "b", text: "The Rose Bowl" },
            { id: "c", text: "The Stade de France" },
            { id: "d", text: "Berlin's Olympiastadion" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Wembley in 1966, the Rose Bowl in Pasadena, near Los Angeles, in 1994, the Stade de France in 1998 and Berlin's Olympiastadion in 2006.",
        },
        {
          id: 16,
          question: "Put these moments in the history of the World Cup trophy in order.",
          answers: [
            { id: "a", text: "The first World Cup is played" },
            { id: "b", text: "The Jules Rimet trophy is stolen in London" },
            { id: "c", text: "Brazil keeps the Jules Rimet trophy for good" },
            { id: "d", text: "Today's trophy is handed out for the first time" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The first World Cup is played in 1930. In 1966 the Jules Rimet trophy is stolen in London and then found by a dog called Pickles. Brazil keeps it for good after its third title in 1970, and today's trophy is first handed out in 1974.",
        },
        {
          id: 17,
          question: "Put these World Cup controversies in order.",
          answers: [
            { id: "a", text: "Schumacher's challenge on Battiston" },
            { id: "b", text: "Maradona's \"Hand of God\"" },
            { id: "c", text: "Lampard's disallowed goal against Germany" },
            { id: "d", text: "Suárez biting Chiellini" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Schumacher on Battiston in Seville in 1982, Maradona's handball against England in 1986, Lampard's shot that crossed the line but was not given in 2010, and Suárez's bite in 2014.",
        },
        {
          id: 18,
          question: "Put Germany's opponents in these World Cup finals in order.",
          answers: [
            { id: "a", text: "Hungary" },
            { id: "b", text: "England" },
            { id: "c", text: "The Netherlands" },
            { id: "d", text: "Italy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Hungary in 1954 (won), England in 1966 (lost), the Netherlands in 1974 (won) and Italy in 1982 (lost). Back then the team was West Germany.",
        },
        {
          id: 19,
          question: "Put these moments of the 2006 France v Italy final in order.",
          answers: [
            { id: "a", text: "Zidane scores a penalty" },
            { id: "b", text: "Materazzi heads the equaliser" },
            { id: "c", text: "Zidane is sent off" },
            { id: "d", text: "Grosso scores the last penalty in the shoot-out" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zidane scores a penalty in the 7th minute, Materazzi equalises in the 19th, Zidane is sent off in the 110th for head-butting Materazzi, and Grosso wins it for Italy in the shoot-out (5-3).",
        },
        {
          id: 20,
          question: "Put France's knockout opponents at the 1998 World Cup in order, from the last 16 to the final.",
          answers: [
            { id: "a", text: "Paraguay" },
            { id: "b", text: "Italy" },
            { id: "c", text: "Croatia" },
            { id: "d", text: "Brazil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Paraguay in the last 16, beaten by Laurent Blanc's golden goal, Italy in the quarter-final on penalties, Croatia in the semi-final with two goals from Lilian Thuram, and Brazil in the final (3-0).",
        },
      ],
    },
    es: {
      title: "Quiz de fútbol: el Mundial en orden",
      description:
        "Veinte series para ordenar sobre el Mundial: países anfitriones, finales de Francia, balones de oro del torneo, seleccionadores y más.",
      questions: [
        {
          id: 1,
          image: "/images/q-football-coupe-du-monde-01.webp",
          question: "Ordena los países que organizaron los cuatro primeros Mundiales.",
          answers: [
            { id: "a", text: "Uruguay" },
            { id: "b", text: "Italia" },
            { id: "c", text: "Francia" },
            { id: "d", text: "Brasil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Uruguay en 1930, Italia en 1934, Francia en 1938 y Brasil en 1950. No hubo Mundial en 1942 ni en 1946 por la Segunda Guerra Mundial.",
        },
        {
          id: 2,
          question: "Ordena estos países según el año de su primer Mundial, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Brasil" },
            { id: "b", text: "Inglaterra" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "España" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Brasil en 1958, Inglaterra en 1966 en casa, Argentina en 1978, también en casa, y España en 2010.",
        },
        {
          id: 3,
          image: "/images/q-football-coupe-du-monde-02.webp",
          question: "Ordena los rivales de Francia en sus finales del Mundial.",
          answers: [
            { id: "a", text: "Brasil" },
            { id: "b", text: "Italia" },
            { id: "c", text: "Croacia" },
            { id: "d", text: "Argentina" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Brasil en 1998 (victoria 3-0), Italia en 2006 (derrota en los penaltis), Croacia en 2018 (victoria 4-2) y Argentina en 2022 (derrota en los penaltis).",
        },
        {
          id: 4,
          question: "Ordena estos países anfitriones, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Japón y Corea del Sur" },
            { id: "b", text: "Alemania" },
            { id: "c", text: "Sudáfrica" },
            { id: "d", text: "Brasil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Japón y Corea del Sur en 2002, el primer Mundial en Asia, Alemania en 2006, Sudáfrica en 2010, el primero en África, y Brasil en 2014.",
        },
        {
          id: 5,
          image: "/images/q-football-coupe-du-monde-03.webp",
          question: "Ordena a estos jugadores según el año en que ganaron el Balón de Oro del Mundial.",
          answers: [
            { id: "a", text: "Zinedine Zidane" },
            { id: "b", text: "Diego Forlán" },
            { id: "c", text: "Lionel Messi" },
            { id: "d", text: "Luka Modrić" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zidane en 2006, Forlán en 2010, Messi en 2014 y Modrić en 2018. Ninguno de los cuatro ganó el Mundial el año en que se llevó ese Balón de Oro.",
        },
        {
          id: 6,
          question: "Ordena los anfitriones de estos Mundiales, de 2022 a 2034.",
          answers: [
            { id: "a", text: "Catar" },
            { id: "b", text: "Estados Unidos, Canadá y México" },
            { id: "c", text: "Marruecos, España y Portugal" },
            { id: "d", text: "Arabia Saudí" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Catar en 2022, Estados Unidos, Canadá y México en 2026, Marruecos, España y Portugal en 2030, y Arabia Saudí en 2034. La FIFA adjudicó los de 2030 y 2034 en diciembre de 2024.",
        },
        {
          id: 7,
          question: "Ordena a estos seleccionadores de Francia según cuándo llegaron al cargo.",
          answers: [
            { id: "a", text: "Aimé Jacquet" },
            { id: "b", text: "Raymond Domenech" },
            { id: "c", text: "Didier Deschamps" },
            { id: "d", text: "Zinedine Zidane" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Aimé Jacquet en 1993, campeón del mundo en 1998, Raymond Domenech en 2004, Didier Deschamps en 2012 y Zinedine Zidane, que lo relevó en el verano de 2026.",
        },
        {
          id: 8,
          image: "/images/q-football-coupe-du-monde-04.webp",
          question: "Ordena los goles de Francia en la final del Mundial 2018.",
          answers: [
            { id: "a", text: "Autogol de Mandžukić" },
            { id: "b", text: "Penalti de Griezmann" },
            { id: "c", text: "Pogba" },
            { id: "d", text: "Mbappé" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mandžukić marca en propia puerta en el minuto 18, Griezmann transforma un penalti en el 38, Pogba marca en el 59 y Mbappé en el 65. Francia gana 4 a 2.",
        },
        {
          id: 9,
          question: "Ordena estos países europeos según cuándo organizaron el Mundial.",
          answers: [
            { id: "a", text: "Suecia" },
            { id: "b", text: "Inglaterra" },
            { id: "c", text: "Alemania Occidental" },
            { id: "d", text: "España" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Suecia en 1958, Inglaterra en 1966, Alemania Occidental en 1974 y España en 1982.",
        },
        {
          id: 10,
          question: "Ordena a estos jugadores según el año de su primer Mundial ganado.",
          answers: [
            { id: "a", text: "Pelé" },
            { id: "b", text: "Franz Beckenbauer" },
            { id: "c", text: "Diego Maradona" },
            { id: "d", text: "Zinedine Zidane" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pelé en 1958, con 17 años, Beckenbauer en 1974, Maradona en 1986 y Zidane en 1998.",
        },
        {
          id: 11,
          question: "Ordena estas mascotas del Mundial, de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Footix" },
            { id: "b", text: "Zakumi" },
            { id: "c", text: "Fuleco" },
            { id: "d", text: "Zabivaka" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Footix, el gallo de Francia 1998, Zakumi, el leopardo de Sudáfrica 2010, Fuleco, el armadillo de Brasil 2014, y Zabivaka, el lobo de Rusia 2018.",
        },
        {
          id: 12,
          question: "Ordena los campeones del mundo de 2002 a 2014.",
          answers: [
            { id: "a", text: "Brasil" },
            { id: "b", text: "Italia" },
            { id: "c", text: "España" },
            { id: "d", text: "Alemania" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Brasil en 2002 contra Alemania, Italia en 2006 contra Francia, España en 2010 contra Países Bajos y Alemania en 2014 contra Argentina.",
        },
        {
          id: 13,
          question: "Ordena a estos jugadores según el año en que ganaron el Balón de Oro del Mundial.",
          answers: [
            { id: "a", text: "Paolo Rossi" },
            { id: "b", text: "Diego Maradona" },
            { id: "c", text: "Salvatore Schillaci" },
            { id: "d", text: "Romário" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Paolo Rossi en 1982, el primer año en que se entregó el premio, Maradona en 1986, Schillaci en 1990 y Romário en 1994.",
        },
        {
          id: 14,
          question: "Ordena estas novedades según el Mundial en que aparecieron.",
          answers: [
            { id: "a", text: "Las tarjetas amarilla y roja" },
            { id: "b", text: "La tanda de penaltis" },
            { id: "c", text: "El gol de oro" },
            { id: "d", text: "El videoarbitraje (VAR)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Las tarjetas en 1970, la primera tanda de penaltis en 1982, en la semifinal RFA-Francia, el gol de oro en 1998 y el VAR en 2018, en Rusia.",
        },
        {
          id: 15,
          question: "Ordena estos estadios según el año en que acogieron una final del Mundial.",
          answers: [
            { id: "a", text: "Wembley" },
            { id: "b", text: "El Rose Bowl" },
            { id: "c", text: "El Stade de France" },
            { id: "d", text: "El Estadio Olímpico de Berlín" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Wembley en 1966, el Rose Bowl de Pasadena, cerca de Los Ángeles, en 1994, el Stade de France en 1998 y el Estadio Olímpico de Berlín en 2006.",
        },
        {
          id: 16,
          question: "Ordena estos momentos de la historia del trofeo del Mundial.",
          answers: [
            { id: "a", text: "Se juega el primer Mundial" },
            { id: "b", text: "Roban la copa Jules Rimet en Londres" },
            { id: "c", text: "Brasil se queda la copa Jules Rimet para siempre" },
            { id: "d", text: "Se entrega por primera vez el trofeo actual" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El primer Mundial se juega en 1930. En 1966 roban la copa Jules Rimet en Londres y la encuentra un perro, Pickles. Brasil se la queda para siempre tras su tercer título en 1970, y el trofeo actual se entrega por primera vez en 1974.",
        },
        {
          id: 17,
          question: "Ordena estas polémicas del Mundial.",
          answers: [
            { id: "a", text: "La entrada de Schumacher a Battiston" },
            { id: "b", text: "La «mano de Dios» de Maradona" },
            { id: "c", text: "El gol no concedido a Lampard contra Alemania" },
            { id: "d", text: "El mordisco de Suárez a Chiellini" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Schumacher contra Battiston en Sevilla en 1982, la mano de Maradona contra Inglaterra en 1986, el disparo de Lampard que entró sin que se diera el gol en 2010 y el mordisco de Suárez en 2014.",
        },
        {
          id: 18,
          question: "Ordena los rivales de Alemania en estas finales del Mundial.",
          answers: [
            { id: "a", text: "Hungría" },
            { id: "b", text: "Inglaterra" },
            { id: "c", text: "Países Bajos" },
            { id: "d", text: "Italia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Hungría en 1954 (victoria), Inglaterra en 1966 (derrota), Países Bajos en 1974 (victoria) e Italia en 1982 (derrota). Entonces todavía era la RFA.",
        },
        {
          id: 19,
          question: "Ordena estos momentos de la final Francia-Italia de 2006.",
          answers: [
            { id: "a", text: "Zidane marca de penalti" },
            { id: "b", text: "Materazzi empata de cabeza" },
            { id: "c", text: "Expulsan a Zidane" },
            { id: "d", text: "Grosso marca el último penalti de la tanda" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zidane marca de penalti en el minuto 7, Materazzi empata en el 19, expulsan a Zidane en el 110 por su cabezazo a Materazzi y Grosso da el título a Italia en la tanda (5-3).",
        },
        {
          id: 20,
          question: "Ordena los rivales de Francia en la fase final de 1998, de octavos a la final.",
          answers: [
            { id: "a", text: "Paraguay" },
            { id: "b", text: "Italia" },
            { id: "c", text: "Croacia" },
            { id: "d", text: "Brasil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Paraguay en octavos, con el gol de oro de Laurent Blanc, Italia en cuartos en los penaltis, Croacia en semifinales con dos goles de Lilian Thuram y Brasil en la final (3-0).",
        },
      ],
    },
  },
};

export default [quizFootballCoupeDuMonde] as TranslatedQuiz[];
