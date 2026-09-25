import type { TranslatedQuiz } from "./types";

/**
 * Quiz League of Legends en vrai-faux : l'e-sport, les Worlds, le MSI et
 * les grandes ligues.
 *
 * Réponse « vrai » = id « a », « faux » = id « b » (VraiFauxPlayer). Douze vraies,
 * huit fausses. Le quiz d'origine (quiz-league-of-legends.ts) cite déjà
 * Fnatic en 2011, la finale de Paris en 2019 et le palmarès de Faker : on parle
 * ici des autres éditions et des ligues. Tout est daté, rien ne dépend de la
 * saison en cours.
 */
export const quizLeagueOfLegendsEsport: TranslatedQuiz = {
  slug: "quiz-league-of-legends-esport",
  slugs: { en: "league-of-legends-esports-quiz", fr: "quiz-league-of-legends-esport", es: "quiz-league-of-legends-esports" },
  categorySlug: "jeux-video",
  subcategory: "League of Legends",
  difficulty: "hard",
  coverImage: "/images/cover-league-of-legends-esport.webp",
  gameType: "vrai-faux",
  playCount: 3900,
  translations: {
    fr: {
      title: "Vrai ou faux : l'e-sport sur League of Legends",
      description:
        "Les Worlds, le MSI, la LEC, T1 ou encore DRX : vingt affirmations sur l'e-sport League of Legends. Démêle le vrai du faux !",
      questions: [
        {
          id: 1,
          image: "/images/q-league-of-legends-esport-01.webp",
          question: "Le trophée remis aux champions du monde s'appelle la Coupe de l'invocateur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, la Summoner's Cup en anglais. C'est une grande coupe en argent qui pèse plus de 30 kg.",
        },
        {
          id: 2,
          image: "/images/q-league-of-legends-esport-02.webp",
          question: "La finale des Worlds 2017 s'est jouée au stade national de Pékin, le « Nid d'oiseau ».",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Samsung Galaxy y a battu SK Telecom T1, l'équipe de Faker, 3 à 0, dans le stade des Jeux olympiques de 2008.",
        },
        {
          id: 3,
          question: "Aucune équipe chinoise n'a jamais gagné les Worlds.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Invictus Gaming a été la première équipe chinoise championne du monde, en 2018, et d'autres ont suivi, comme FunPlus Phoenix en 2019.",
        },
        {
          id: 4,
          question: "L'équipe européenne G2 Esports a gagné le MSI en 2019.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. G2 a battu Team Liquid 3 à 0 en finale, à Taipei. La même année, l'équipe a aussi atteint la finale des Worlds.",
        },
        {
          id: 5,
          question: "Le championnat européen de League of Legends s'appelle la LCK.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. La ligue européenne, c'est la LEC. La LCK, c'est la ligue sud-coréenne, celle de T1.",
        },
        {
          id: 6,
          question: "Une équipe de Taïwan, les Taipei Assassins, a gagné les Worlds 2012.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Les Taipei Assassins ont battu les Coréens d'Azubu Frost en finale, à Los Angeles. C'était seulement la deuxième édition du tournoi.",
        },
        {
          id: 7,
          question: "Les Worlds 2022 ont été gagnés par T1.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est DRX qui a gagné, en battant justement T1 en finale, 3 à 2. Pour Deft, le tireur de DRX, c'était le premier titre après près de dix ans de carrière.",
        },
        {
          id: 8,
          image: "/images/q-league-of-legends-esport-08.webp",
          question: "Faker a joué toute sa carrière dans la même équipe, T1.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il y est depuis 2013, quand l'équipe s'appelait encore SK Telecom T1. Elle a juste changé de nom en 2019 pour devenir T1.",
        },
        {
          id: 9,
          image: "/images/q-league-of-legends-esport-09.webp",
          question: "Le MSI, le deuxième grand tournoi international de l'année, se joue en décembre.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. MSI veut dire Mid-Season Invitational : il se joue au milieu de la saison, entre mai et juillet. Les Worlds, eux, se jouent à l'automne.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-esport-10.webp",
          question: "La finale des Worlds 2014 s'est jouée à Séoul, dans un stade construit pour la Coupe du monde de football 2002.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, au stade de la Coupe du monde de Séoul, devant environ 40 000 personnes. Samsung White y a battu Star Horn Royal Club 3 à 1.",
        },
        {
          id: 11,
          question: "La finale des Worlds 2025 a opposé deux équipes coréennes, T1 et KT Rolster.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. T1 a gagné 3 à 2, à Chengdu, en Chine. C'était son troisième titre de suite, après 2023 et 2024.",
        },
        {
          id: 12,
          question: "Les Worlds 2021 se sont joués en Islande.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. À cause du Covid, tout le tournoi s'est joué à Reykjavik. EDward Gaming y a battu DWG KIA 3 à 2 en finale.",
        },
        {
          id: 13,
          question: "L'équipe chinoise Suning a gagné les Worlds 2020.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Suning a perdu la finale 3 à 1 contre les Coréens de Damwon Gaming, à Shanghai.",
        },
        {
          id: 14,
          question: "La finale des Worlds 2024 s'est jouée à Londres.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, à l'O2 Arena. T1 y a battu les Chinois de Bilibili Gaming 3 à 2.",
        },
        {
          id: 15,
          question: "Une équipe nord-américaine a déjà gagné les Worlds.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Aucune équipe d'Amérique du Nord n'a gagné le tournoi. Le meilleur résultat récent, c'est la demi-finale de Cloud9 en 2018.",
        },
        {
          id: 16,
          question: "Le tout premier MSI, en 2015, a été gagné par une équipe coréenne.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est l'équipe chinoise EDward Gaming qui l'a gagné, en battant SK Telecom T1 3 à 2 en finale, à Tallahassee, aux États-Unis.",
        },
        {
          id: 17,
          question: "Avant 2019, la LEC s'appelait EU LCS.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. La ligue a changé de nom en 2019. Depuis 2023, le sigle veut dire League of Legends EMEA Championship, parce qu'elle couvre aussi le Moyen-Orient et l'Afrique.",
        },
        {
          id: 18,
          question: "« Warriors », la chanson officielle des Worlds 2014, est d'Imagine Dragons.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Le groupe américain l'a d'ailleurs jouée en direct pendant la finale, à Séoul.",
        },
        {
          id: 19,
          question: "T1 a gagné le MSI 2025.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est Gen.G qui l'a gagné, 3 à 2 contre T1, à Vancouver. Gen.G avait déjà remporté l'édition 2024.",
        },
        {
          id: 20,
          question: "En 2018, l'équipe européenne Fnatic a joué la finale des Worlds.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Fnatic a perdu 3 à 0 contre Invictus Gaming, à Incheon, en Corée du Sud.",
        },
      ],
    },
    en: {
      title: "True or false: League of Legends esports",
      description:
        "Worlds, MSI, the LEC, T1, DRX and more: twenty statements about League of Legends esports. Can you tell which ones are true?",
      questions: [
        {
          id: 1,
          image: "/images/q-league-of-legends-esport-01.webp",
          question: "The trophy handed to the world champions is called the Summoner's Cup.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's a big silver cup that weighs over 30 kg (about 70 pounds).",
        },
        {
          id: 2,
          image: "/images/q-league-of-legends-esport-02.webp",
          question: "The Worlds 2017 final was played at the Beijing National Stadium, the \"Bird's Nest\".",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Samsung Galaxy beat Faker's team, SK Telecom T1, 3-0 there, in the stadium built for the 2008 Olympics.",
        },
        {
          id: 3,
          question: "No Chinese team has ever won Worlds.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Invictus Gaming became the first Chinese world champion in 2018, and others followed, like FunPlus Phoenix in 2019.",
        },
        {
          id: 4,
          question: "The European team G2 Esports won MSI in 2019.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. G2 beat Team Liquid 3-0 in the final, in Taipei. The same year, the team also made it to the Worlds final.",
        },
        {
          id: 5,
          question: "The European League of Legends championship is called the LCK.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The European league is the LEC. The LCK is the South Korean league, T1's league.",
        },
        {
          id: 6,
          question: "A team from Taiwan, the Taipei Assassins, won Worlds 2012.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The Taipei Assassins beat Korea's Azubu Frost in the final, in Los Angeles. It was only the second edition of the tournament.",
        },
        {
          id: 7,
          question: "Worlds 2022 was won by T1.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. DRX won it, beating T1 in the final, 3-2. For Deft, DRX's bot laner, it was his first title after almost ten years as a pro.",
        },
        {
          id: 8,
          image: "/images/q-league-of-legends-esport-08.webp",
          question: "Faker has played his whole career on the same team, T1.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He's been there since 2013, back when the team was still called SK Telecom T1. It just changed its name to T1 in 2019.",
        },
        {
          id: 9,
          image: "/images/q-league-of-legends-esport-09.webp",
          question: "MSI, the year's second big international tournament, is played in December.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. MSI stands for Mid-Season Invitational: it's played in the middle of the season, between May and July. Worlds takes place in the fall.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-esport-10.webp",
          question: "The Worlds 2014 final was played in Seoul, in a stadium built for the 2002 FIFA World Cup.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, at Seoul World Cup Stadium, in front of about 40,000 people. Samsung White beat Star Horn Royal Club 3-1 there.",
        },
        {
          id: 11,
          question: "The Worlds 2025 final was played between two Korean teams, T1 and KT Rolster.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. T1 won 3-2 in Chengdu, China. It was the team's third title in a row, after 2023 and 2024.",
        },
        {
          id: 12,
          question: "Worlds 2021 was played in Iceland.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Because of Covid, the whole tournament took place in Reykjavik. EDward Gaming beat DWG KIA 3-2 in the final there.",
        },
        {
          id: 13,
          question: "The Chinese team Suning won Worlds 2020.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Suning lost the final 3-1 to Korea's Damwon Gaming, in Shanghai.",
        },
        {
          id: 14,
          question: "The Worlds 2024 final was played in London.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, at the O2 Arena. T1 beat China's Bilibili Gaming 3-2 there.",
        },
        {
          id: 15,
          question: "A North American team has already won Worlds.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. No team from North America has ever won the tournament. The best recent run was Cloud9 reaching the semifinals in 2018.",
        },
        {
          id: 16,
          question: "The very first MSI, in 2015, was won by a Korean team.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Chinese team EDward Gaming won it, beating SK Telecom T1 3-2 in the final, in Tallahassee, Florida.",
        },
        {
          id: 17,
          question: "Before 2019, the LEC was called the EU LCS.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The league changed its name in 2019. Since 2023, the acronym stands for League of Legends EMEA Championship, since it also covers the Middle East and Africa.",
        },
        {
          id: 18,
          question: "\"Warriors\", the official song of Worlds 2014, is by Imagine Dragons.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The American band even played it live during the final, in Seoul.",
        },
        {
          id: 19,
          question: "T1 won MSI 2025.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Gen.G won it, beating T1 3-2 in Vancouver. Gen.G had already won the 2024 edition.",
        },
        {
          id: 20,
          question: "In 2018, the European team Fnatic played in the Worlds final.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Fnatic lost 3-0 to Invictus Gaming, in Incheon, South Korea.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: los esports de LoL",
      description:
        "El Mundial, el MSI, la LEC, T1 o DRX: veinte afirmaciones sobre los esports de League of Legends. ¿Sabes cuáles son verdad?",
      questions: [
        {
          id: 1,
          image: "/images/q-league-of-legends-esport-01.webp",
          question: "El trofeo que reciben los campeones del mundo se llama la Copa del Invocador.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, la Summoner's Cup en inglés. Es una gran copa de plata que pesa más de 30 kg.",
        },
        {
          id: 2,
          image: "/images/q-league-of-legends-esport-02.webp",
          question: "La final del Mundial 2017 se jugó en el Estadio Nacional de Pekín, el «Nido de Pájaro».",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Samsung Galaxy ganó allí 3 a 0 a SK Telecom T1, el equipo de Faker, en el estadio de los Juegos Olímpicos de 2008.",
        },
        {
          id: 3,
          question: "Ningún equipo chino ha ganado nunca el Mundial.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Invictus Gaming fue el primer equipo chino campeón del mundo, en 2018, y luego llegaron otros, como FunPlus Phoenix en 2019.",
        },
        {
          id: 4,
          question: "El equipo europeo G2 Esports ganó el MSI en 2019.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. G2 ganó 3 a 0 a Team Liquid en la final, en Taipéi. Ese mismo año, el equipo también llegó a la final del Mundial.",
        },
        {
          id: 5,
          question: "El campeonato europeo de League of Legends se llama LCK.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La liga europea es la LEC. La LCK es la liga surcoreana, la de T1.",
        },
        {
          id: 6,
          question: "Un equipo de Taiwán, los Taipei Assassins, ganó el Mundial 2012.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Los Taipei Assassins ganaron a los coreanos de Azubu Frost en la final, en Los Ángeles. Era apenas la segunda edición del torneo.",
        },
        {
          id: 7,
          question: "El Mundial 2022 lo ganó T1.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Ganó DRX, que venció precisamente a T1 en la final, 3 a 2. Para Deft, el tirador de DRX, fue el primer título tras casi diez años de carrera.",
        },
        {
          id: 8,
          image: "/images/q-league-of-legends-esport-08.webp",
          question: "Faker ha jugado toda su carrera en el mismo equipo, T1.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Está ahí desde 2013, cuando el equipo aún se llamaba SK Telecom T1. Solo cambió de nombre en 2019 para llamarse T1.",
        },
        {
          id: 9,
          image: "/images/q-league-of-legends-esport-09.webp",
          question: "El MSI, el segundo gran torneo internacional del año, se juega en diciembre.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. MSI significa Mid-Season Invitational: se juega a mitad de temporada, entre mayo y julio. El Mundial se juega en otoño.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-esport-10.webp",
          question: "La final del Mundial 2014 se jugó en Seúl, en un estadio construido para el Mundial de fútbol de 2002.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, en el Estadio de la Copa Mundial de Seúl, ante unas 40 000 personas. Samsung White ganó allí 3 a 1 a Star Horn Royal Club.",
        },
        {
          id: 11,
          question: "La final del Mundial 2025 la jugaron dos equipos coreanos, T1 y KT Rolster.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. T1 ganó 3 a 2 en Chengdu, China. Fue su tercer título seguido, después de 2023 y 2024.",
        },
        {
          id: 12,
          question: "El Mundial 2021 se jugó en Islandia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Por el Covid, todo el torneo se jugó en Reikiavik. EDward Gaming ganó allí la final 3 a 2 a DWG KIA.",
        },
        {
          id: 13,
          question: "El equipo chino Suning ganó el Mundial 2020.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Suning perdió la final 3 a 1 contra los coreanos de Damwon Gaming, en Shanghái.",
        },
        {
          id: 14,
          question: "La final del Mundial 2024 se jugó en Londres.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, en el O2 Arena. T1 ganó allí 3 a 2 a los chinos de Bilibili Gaming.",
        },
        {
          id: 15,
          question: "Un equipo de Norteamérica ya ha ganado el Mundial.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Ningún equipo norteamericano ha ganado el torneo. Lo más lejos que se ha llegado en los últimos años son las semifinales de Cloud9 en 2018.",
        },
        {
          id: 16,
          question: "El primer MSI, en 2015, lo ganó un equipo coreano.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Lo ganó el equipo chino EDward Gaming, que venció 3 a 2 a SK Telecom T1 en la final, en Tallahassee, Estados Unidos.",
        },
        {
          id: 17,
          question: "Antes de 2019, la LEC se llamaba EU LCS.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. La liga cambió de nombre en 2019. Desde 2023, la sigla significa League of Legends EMEA Championship, porque también cubre Oriente Medio y África.",
        },
        {
          id: 18,
          question: "«Warriors», la canción oficial del Mundial 2014, es de Imagine Dragons.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El grupo estadounidense incluso la tocó en directo durante la final, en Seúl.",
        },
        {
          id: 19,
          question: "T1 ganó el MSI 2025.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Lo ganó Gen.G, 3 a 2 contra T1, en Vancouver. Gen.G ya había ganado la edición de 2024.",
        },
        {
          id: 20,
          question: "En 2018, el equipo europeo Fnatic jugó la final del Mundial.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Fnatic perdió 3 a 0 contra Invictus Gaming, en Incheon, Corea del Sur.",
        },
      ],
    },
  },
};

export default [quizLeagueOfLegendsEsport] as TranslatedQuiz[];
