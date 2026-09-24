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
        "Dix suites à remettre dans l'ordre sur la Coupe du monde : pays hôtes, finales des Bleus, Ballons d'or du tournoi, sélectionneurs, etc.",
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
      ],
    },
    en: {
      title: "Football quiz: the World Cup in order",
      description:
        "Ten sequences to put in order about the World Cup: host countries, France's finals, Golden Ball winners, France managers and more.",
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
      ],
    },
    es: {
      title: "Quiz de fútbol: el Mundial en orden",
      description:
        "Diez series para ordenar sobre el Mundial: países anfitriones, finales de Francia, balones de oro del torneo, seleccionadores y más.",
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
      ],
    },
  },
};

export default [quizFootballCoupeDuMonde] as TranslatedQuiz[];
