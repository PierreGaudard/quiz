import type { TranslatedQuiz } from "./types";

/**
 * Quiz Counter-Strike en mode duel sur les Majors, les grands tournois
 * soutenus par Valve, de 2014 à 2026, et sur les joueurs qui les ont gagnés.
 *
 * Le moteur n'affiche que answers[0] et answers[1] (cf. quiz-marvel.ts) : deux
 * propositions par question. Le premier Major (Fnatic, 2013) est déjà posé dans
 * quiz-counter-strike.ts, il n'est donc pas repris. Aucune question ne porte
 * sur un record « à ce jour », qui bougerait avec le prochain Major.
 */
export const quizCounterStrikeMajors: TranslatedQuiz = {
  slug: "quiz-counter-strike-majors",
  slugs: { en: "counter-strike-majors-quiz", fr: "quiz-counter-strike-majors", es: "quiz-counter-strike-majors" },
  categorySlug: "jeux-video",
  subcategory: "Counter-Strike",
  difficulty: "hard",
  coverImage: "/images/cover-counter-strike-majors.webp",
  gameType: "duel",
  playCount: 3900,
  translations: {
    fr: {
      title: "Duel Counter-Strike : les Majors",
      description:
        "Vingt duels sur les Majors de Counter-Strike, de Katowice 2014 à Cologne 2026 : qui a gagné, avec quelle équipe et contre qui.",
      questions: [
        {
          id: 1,
          question: "Quelle équipe a gagné le Major de Katowice en 2014 ?",
          answers: [
            { id: "a", text: "Ninjas in Pyjamas" },
            { id: "b", text: "Virtus.pro" },
          ],
          correctAnswer: "b",
          explanation:
            "Virtus.pro, l'équipe polonaise, qui a battu les Ninjas in Pyjamas en finale. Gagner à Katowice, en Pologne, devant son public, ça a marqué les fans.",
        },
        {
          id: 2,
          question: "Quelle équipe française a gagné un Major la première ?",
          answers: [
            { id: "a", text: "Team LDLC" },
            { id: "b", text: "Team EnVyUs" },
          ],
          correctAnswer: "a",
          explanation:
            "Team LDLC, à la DreamHack Winter 2014 en Suède, en battant les Ninjas in Pyjamas. EnVyUs a gagné le sien un an plus tard, à Cluj-Napoca en 2015.",
        },
        {
          id: 3,
          question: "Qui a gagné le Major de Cologne en 2014 ?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Ninjas in Pyjamas" },
          ],
          correctAnswer: "b",
          explanation:
            "Les Ninjas in Pyjamas, en battant Fnatic en finale. C'est le seul Major de l'équipe suédoise, qui a perdu quatre autres finales de Major.",
        },
        {
          id: 4,
          question: "Sous quel nom les Brésiliens de coldzera ont-ils gagné le Major de Columbus en 2016 ?",
          answers: [
            { id: "a", text: "Luminosity Gaming" },
            { id: "b", text: "SK Gaming" },
          ],
          correctAnswer: "a",
          explanation:
            "Luminosity Gaming. Les mêmes joueurs sont ensuite passés chez SK Gaming et ont gagné le Major de Cologne sous ce nom, trois mois plus tard.",
        },
        {
          id: 5,
          question: "Quelle équipe a gagné trois Majors de suite en 2018 et 2019 ?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Astralis" },
          ],
          correctAnswer: "b",
          explanation:
            "Astralis, l'équipe danoise de device : Londres 2018, Katowice 2019 et Berlin 2019. Avec Atlanta 2017, ça lui fait quatre Majors.",
        },
        {
          id: 6,
          image: "/images/q-counter-strike-majors-06.webp",
          question: "Quelle a été la première équipe nord-américaine à gagner un Major ?",
          answers: [
            { id: "a", text: "Cloud9" },
            { id: "b", text: "Team Liquid" },
          ],
          correctAnswer: "a",
          explanation:
            "Cloud9, au Major de Boston en 2018, après une finale gagnée contre FaZe Clan en prolongation sur Inferno. Team Liquid avait perdu la finale de Cologne en 2016.",
        },
        {
          id: 7,
          image: "/images/q-counter-strike-majors-07.webp",
          question: "Avec quelle équipe s1mple a-t-il gagné le Major de Stockholm en 2021 ?",
          answers: [
            { id: "a", text: "Gambit Esports" },
            { id: "b", text: "Natus Vincere" },
          ],
          correctAnswer: "b",
          explanation:
            "Natus Vincere, en battant G2 Esports en finale sans perdre une seule carte de tout le tournoi. Gambit avait gagné son Major en 2017, à Cracovie.",
        },
        {
          id: 8,
          image: "/images/q-counter-strike-majors-08.webp",
          question: "Contre qui Team Vitality a-t-elle gagné la finale du Major de Paris en 2023 ?",
          answers: [
            { id: "a", text: "GamerLegion" },
            { id: "b", text: "Heroic" },
          ],
          correctAnswer: "a",
          explanation:
            "Contre GamerLegion, à l'Accor Arena de Paris. C'était le premier Major de Vitality et de ZywOo, et une équipe française le gagnait à domicile.",
        },
        {
          id: 9,
          question: "Qui a gagné à Copenhague en 2024 le tout premier Major joué sur CS2 ?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Natus Vincere" },
          ],
          correctAnswer: "b",
          explanation:
            "Natus Vincere, en battant FaZe Clan en finale. Et c'était le deuxième Major de l'équipe ukrainienne, après Stockholm en 2021.",
        },
        {
          id: 10,
          image: "/images/q-counter-strike-majors-10.webp",
          question: "Avec quelle équipe le jeune Russe donk a-t-il gagné le Major de Shanghai en 2024 ?",
          answers: [
            { id: "a", text: "Team Spirit" },
            { id: "b", text: "The MongolZ" },
          ],
          correctAnswer: "a",
          explanation:
            "Team Spirit, en battant FaZe Clan en finale. donk avait 17 ans et c'était son premier Major. The MongolZ a perdu la finale du Major suivant, à Austin.",
        },
        {
          id: 11,
          question: "Qui a gagné le Major de Katowice en 2015 ?",
          answers: [
            { id: "a", text: "Ninjas in Pyjamas" },
            { id: "b", text: "Fnatic" },
          ],
          correctAnswer: "b",
          explanation:
            "Fnatic, en battant les Ninjas in Pyjamas en finale. C'était le deuxième Major des Suédois de Fnatic, après la DreamHack Winter 2013.",
        },
        {
          id: 12,
          question: "Quelle équipe a été la première à gagner deux Majors de suite ?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Astralis" },
          ],
          correctAnswer: "a",
          explanation:
            "Fnatic, avec Katowice puis Cologne en 2015. C'était aussi la première équipe à gagner trois Majors. Astralis a fait mieux plus tard, avec trois titres de suite.",
        },
        {
          id: 13,
          question: "Contre qui Astralis a-t-elle gagné son premier Major, à Atlanta en 2017 ?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Virtus.pro" },
          ],
          correctAnswer: "b",
          explanation:
            "Contre Virtus.pro, les Polonais qui avaient gagné Katowice en 2014. C'était le premier des quatre Majors d'Astralis.",
        },
        {
          id: 14,
          question: "Contre quelle équipe brésilienne Gambit a-t-elle gagné la finale de Cracovie en 2017 ?",
          answers: [
            { id: "a", text: "Immortals" },
            { id: "b", text: "SK Gaming" },
          ],
          correctAnswer: "a",
          explanation:
            "Immortals. Gambit, avec surtout des joueurs du Kazakhstan, devenait la première équipe d'Asie et de l'ex-URSS à gagner un Major.",
        },
        {
          id: 15,
          question: "Quelle équipe finlandaise a perdu la finale de Katowice 2019 contre Astralis ?",
          answers: [
            { id: "a", text: "Heroic" },
            { id: "b", text: "ENCE" },
          ],
          correctAnswer: "b",
          explanation:
            "ENCE, la surprise du tournoi. Heroic est une équipe danoise, comme Astralis, et elle a perdu la finale de Rio en 2022.",
        },
        {
          id: 16,
          question: "Contre qui Astralis a-t-elle gagné le Major de Berlin en 2019, son troisième de suite ?",
          answers: [
            { id: "a", text: "AVANGAR" },
            { id: "b", text: "Gambit" },
          ],
          correctAnswer: "a",
          explanation:
            "AVANGAR, une équipe du Kazakhstan qui arrivait en finale sans être favorite. Astralis l'a battue facilement, 2 à 0.",
        },
        {
          id: 17,
          question: "Qui a gagné le Major d'Anvers en 2022 ?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Natus Vincere" },
          ],
          correctAnswer: "a",
          explanation:
            "FaZe Clan, en battant Natus Vincere 2 à 0 en finale. C'était la première fois qu'une équipe avec des joueurs de plusieurs pays gagnait un Major sur CS:GO.",
        },
        {
          id: 18,
          question: "Sous quel nom Virtus.pro a-t-elle gagné le Major de Rio en 2022 ?",
          answers: [
            { id: "a", text: "Heroic" },
            { id: "b", text: "Outsiders" },
          ],
          correctAnswer: "b",
          explanation:
            "Outsiders, un nom neutre que l'équipe a pris à cause de ses liens avec la Russie après l'invasion de l'Ukraine. Elle a battu Heroic 2 à 0 en finale.",
        },
        {
          id: 19,
          question: "Qui a gagné le Major de Budapest en décembre 2025 ?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Team Vitality" },
          ],
          correctAnswer: "b",
          explanation:
            "Team Vitality, en battant FaZe Clan 3 à 1. C'était son deuxième Major de l'année après Austin, et la première finale de Major jouée au meilleur des cinq cartes.",
        },
        {
          id: 20,
          question: "Quelle équipe a gagné le Major de Cologne en juin 2026 ?",
          answers: [
            { id: "a", text: "Team Falcons" },
            { id: "b", text: "FURIA" },
          ],
          correctAnswer: "a",
          explanation:
            "Team Falcons, emmenée par NiKo, en battant les Brésiliens de FURIA en finale. C'était le tout premier Major de l'équipe.",
        },
      ],
    },
    en: {
      title: "Counter-Strike duel: the Majors",
      description:
        "Twenty duels on the Counter-Strike Majors, from Katowice 2014 to Cologne 2026: who won, with which team and against whom.",
      questions: [
        {
          id: 1,
          question: "Which team won the Katowice Major in 2014?",
          answers: [
            { id: "a", text: "Ninjas in Pyjamas" },
            { id: "b", text: "Virtus.pro" },
          ],
          correctAnswer: "b",
          explanation:
            "Virtus.pro, the Polish team, who beat Ninjas in Pyjamas in the final. Winning in Katowice, in Poland, in front of a home crowd made it a big moment for the fans.",
        },
        {
          id: 2,
          question: "Which French team was the first to win a Major?",
          answers: [
            { id: "a", text: "Team LDLC" },
            { id: "b", text: "Team EnVyUs" },
          ],
          correctAnswer: "a",
          explanation:
            "Team LDLC, at DreamHack Winter 2014 in Sweden, beating Ninjas in Pyjamas. EnVyUs won theirs a year later, in Cluj-Napoca in 2015.",
        },
        {
          id: 3,
          question: "Who won the Cologne Major in 2014?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Ninjas in Pyjamas" },
          ],
          correctAnswer: "b",
          explanation:
            "Ninjas in Pyjamas, who beat Fnatic in the final. It's the Swedish team's only Major, even though they lost four other Major finals.",
        },
        {
          id: 4,
          question: "Under which name did coldzera's Brazilian team win the Columbus Major in 2016?",
          answers: [
            { id: "a", text: "Luminosity Gaming" },
            { id: "b", text: "SK Gaming" },
          ],
          correctAnswer: "a",
          explanation:
            "Luminosity Gaming. The same players then moved to SK Gaming and won the Cologne Major under that name, three months later.",
        },
        {
          id: 5,
          question: "Which team won three Majors in a row in 2018 and 2019?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Astralis" },
          ],
          correctAnswer: "b",
          explanation:
            "Astralis, device's Danish team: London 2018, Katowice 2019 and Berlin 2019. Add Atlanta 2017 and that makes four Majors.",
        },
        {
          id: 6,
          image: "/images/q-counter-strike-majors-06.webp",
          question: "Which was the first North American team to win a Major?",
          answers: [
            { id: "a", text: "Cloud9" },
            { id: "b", text: "Team Liquid" },
          ],
          correctAnswer: "a",
          explanation:
            "Cloud9, at the Boston Major in 2018, after beating FaZe Clan in the final in overtime on Inferno. Team Liquid had lost the Cologne final in 2016.",
        },
        {
          id: 7,
          image: "/images/q-counter-strike-majors-07.webp",
          question: "Which team did s1mple win the Stockholm Major with in 2021?",
          answers: [
            { id: "a", text: "Gambit Esports" },
            { id: "b", text: "Natus Vincere" },
          ],
          correctAnswer: "b",
          explanation:
            "Natus Vincere, who beat G2 Esports in the final without dropping a single map all tournament. Gambit had won their Major back in 2017, in Kraków.",
        },
        {
          id: 8,
          image: "/images/q-counter-strike-majors-08.webp",
          question: "Who did Team Vitality beat in the final of the 2023 Paris Major?",
          answers: [
            { id: "a", text: "GamerLegion" },
            { id: "b", text: "Heroic" },
          ],
          correctAnswer: "a",
          explanation:
            "GamerLegion, at the Accor Arena in Paris. It was the first Major for Vitality and ZywOo, and a French team won it at home.",
        },
        {
          id: 9,
          question: "Who won the very first Major played on CS2, in Copenhagen in 2024?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Natus Vincere" },
          ],
          correctAnswer: "b",
          explanation:
            "Natus Vincere, who beat FaZe Clan in the final. It was the Ukrainian team's second Major, after Stockholm in 2021.",
        },
        {
          id: 10,
          image: "/images/q-counter-strike-majors-10.webp",
          question: "Which team did the young Russian player donk win the 2024 Shanghai Major with?",
          answers: [
            { id: "a", text: "Team Spirit" },
            { id: "b", text: "The MongolZ" },
          ],
          correctAnswer: "a",
          explanation:
            "Team Spirit, who beat FaZe Clan in the final. donk was 17 and it was his first Major. The MongolZ lost the final of the next Major, in Austin.",
        },
        {
          id: 11,
          question: "Who won the Katowice Major in 2015?",
          answers: [
            { id: "a", text: "Ninjas in Pyjamas" },
            { id: "b", text: "Fnatic" },
          ],
          correctAnswer: "b",
          explanation:
            "Fnatic, beating Ninjas in Pyjamas in the final. It was the Swedish team's second Major, after DreamHack Winter 2013.",
        },
        {
          id: 12,
          question: "Which team was the first to win two Majors in a row?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Astralis" },
          ],
          correctAnswer: "a",
          explanation:
            "Fnatic, with Katowice and then Cologne in 2015. It was also the first team to win three Majors. Astralis did even better later, with three titles in a row.",
        },
        {
          id: 13,
          question: "Who did Astralis beat to win their first Major, in Atlanta in 2017?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Virtus.pro" },
          ],
          correctAnswer: "b",
          explanation:
            "Virtus.pro, the Polish team that had won Katowice in 2014. It was the first of Astralis's four Majors.",
        },
        {
          id: 14,
          question: "Which Brazilian team did Gambit beat in the 2017 Kraków final?",
          answers: [
            { id: "a", text: "Immortals" },
            { id: "b", text: "SK Gaming" },
          ],
          correctAnswer: "a",
          explanation:
            "Immortals. Gambit, made up mostly of players from Kazakhstan, became the first team from Asia and the former Soviet countries to win a Major.",
        },
        {
          id: 15,
          question: "Which Finnish team lost the Katowice 2019 final to Astralis?",
          answers: [
            { id: "a", text: "Heroic" },
            { id: "b", text: "ENCE" },
          ],
          correctAnswer: "b",
          explanation:
            "ENCE, the surprise of the tournament. Heroic is a Danish team, like Astralis, and it lost the Rio final in 2022.",
        },
        {
          id: 16,
          question: "Who did Astralis beat to win the 2019 Berlin Major, their third in a row?",
          answers: [
            { id: "a", text: "AVANGAR" },
            { id: "b", text: "Gambit" },
          ],
          correctAnswer: "a",
          explanation:
            "AVANGAR, a team from Kazakhstan that reached the final as outsiders. Astralis beat them easily, 2-0.",
        },
        {
          id: 17,
          question: "Who won the 2022 Antwerp Major?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Natus Vincere" },
          ],
          correctAnswer: "a",
          explanation:
            "FaZe Clan, beating Natus Vincere 2-0 in the final. It was the first time a team with players from several countries won a CS:GO Major.",
        },
        {
          id: 18,
          question: "Under what name did Virtus.pro win the 2022 Rio Major?",
          answers: [
            { id: "a", text: "Heroic" },
            { id: "b", text: "Outsiders" },
          ],
          correctAnswer: "b",
          explanation:
            "Outsiders, a neutral name the team took because of its ties to Russia after the invasion of Ukraine. It beat Heroic 2-0 in the final.",
        },
        {
          id: 19,
          question: "Who won the Budapest Major in December 2025?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Team Vitality" },
          ],
          correctAnswer: "b",
          explanation:
            "Team Vitality, beating FaZe Clan 3-1. It was their second Major of the year after Austin, and the first Major final played as a best of five maps.",
        },
        {
          id: 20,
          question: "Which team won the Cologne Major in June 2026?",
          answers: [
            { id: "a", text: "Team Falcons" },
            { id: "b", text: "FURIA" },
          ],
          correctAnswer: "a",
          explanation:
            "Team Falcons, led by NiKo, beating Brazil's FURIA in the final. It was the team's very first Major.",
        },
      ],
    },
    es: {
      title: "Duelo Counter-Strike: los Majors",
      description:
        "Veinte duelos sobre los Majors de Counter-Strike, de Katowice 2014 a Colonia 2026: quién ganó, con qué equipo y contra quién.",
      questions: [
        {
          id: 1,
          question: "¿Qué equipo ganó el Major de Katowice en 2014?",
          answers: [
            { id: "a", text: "Ninjas in Pyjamas" },
            { id: "b", text: "Virtus.pro" },
          ],
          correctAnswer: "b",
          explanation:
            "Virtus.pro, el equipo polaco, que ganó la final a Ninjas in Pyjamas. Ganar en Katowice, en Polonia, ante su público fue algo muy especial para sus fans.",
        },
        {
          id: 2,
          question: "¿Qué equipo francés fue el primero en ganar un Major?",
          answers: [
            { id: "a", text: "Team LDLC" },
            { id: "b", text: "Team EnVyUs" },
          ],
          correctAnswer: "a",
          explanation:
            "Team LDLC, en la DreamHack Winter 2014 de Suecia, contra Ninjas in Pyjamas. EnVyUs ganó el suyo un año después, en Cluj-Napoca en 2015.",
        },
        {
          id: 3,
          question: "¿Quién ganó el Major de Colonia en 2014?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Ninjas in Pyjamas" },
          ],
          correctAnswer: "b",
          explanation:
            "Ninjas in Pyjamas, contra Fnatic en la final. Es el único Major del equipo sueco, que perdió otras cuatro finales de Major.",
        },
        {
          id: 4,
          question: "¿Con qué nombre ganaron los brasileños de coldzera el Major de Columbus en 2016?",
          answers: [
            { id: "a", text: "Luminosity Gaming" },
            { id: "b", text: "SK Gaming" },
          ],
          correctAnswer: "a",
          explanation:
            "Luminosity Gaming. Los mismos jugadores pasaron luego a SK Gaming y ganaron el Major de Colonia con ese nombre, tres meses después.",
        },
        {
          id: 5,
          question: "¿Qué equipo ganó tres Majors seguidos en 2018 y 2019?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Astralis" },
          ],
          correctAnswer: "b",
          explanation:
            "Astralis, el equipo danés de device: Londres 2018, Katowice 2019 y Berlín 2019. Con Atlanta 2017, suma cuatro Majors.",
        },
        {
          id: 6,
          image: "/images/q-counter-strike-majors-06.webp",
          question: "¿Cuál fue el primer equipo norteamericano en ganar un Major?",
          answers: [
            { id: "a", text: "Cloud9" },
            { id: "b", text: "Team Liquid" },
          ],
          correctAnswer: "a",
          explanation:
            "Cloud9, en el Major de Boston de 2018, tras ganar la final a FaZe Clan en la prórroga de Inferno. Team Liquid había perdido la final de Colonia en 2016.",
        },
        {
          id: 7,
          image: "/images/q-counter-strike-majors-07.webp",
          question: "¿Con qué equipo ganó s1mple el Major de Estocolmo en 2021?",
          answers: [
            { id: "a", text: "Gambit Esports" },
            { id: "b", text: "Natus Vincere" },
          ],
          correctAnswer: "b",
          explanation:
            "Con Natus Vincere, que ganó la final a G2 Esports sin perder ni un mapa en todo el torneo. Gambit había ganado su Major en 2017, en Cracovia.",
        },
        {
          id: 8,
          image: "/images/q-counter-strike-majors-08.webp",
          question: "¿Contra quién ganó Team Vitality la final del Major de París en 2023?",
          answers: [
            { id: "a", text: "GamerLegion" },
            { id: "b", text: "Heroic" },
          ],
          correctAnswer: "a",
          explanation:
            "Contra GamerLegion, en el Accor Arena de París. Fue el primer Major de Vitality y de ZywOo, y un equipo francés lo ganó en casa.",
        },
        {
          id: 9,
          question: "¿Quién ganó en Copenhague en 2024 el primer Major jugado en CS2?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Natus Vincere" },
          ],
          correctAnswer: "b",
          explanation:
            "Natus Vincere, que ganó la final a FaZe Clan. Era el segundo Major del equipo ucraniano, tras Estocolmo en 2021.",
        },
        {
          id: 10,
          image: "/images/q-counter-strike-majors-10.webp",
          question: "¿Con qué equipo ganó el joven ruso donk el Major de Shanghái en 2024?",
          answers: [
            { id: "a", text: "Team Spirit" },
            { id: "b", text: "The MongolZ" },
          ],
          correctAnswer: "a",
          explanation:
            "Con Team Spirit, que ganó la final a FaZe Clan. donk tenía 17 años y era su primer Major. The MongolZ perdió la final del Major siguiente, en Austin.",
        },
        {
          id: 11,
          question: "¿Quién ganó el Major de Katowice en 2015?",
          answers: [
            { id: "a", text: "Ninjas in Pyjamas" },
            { id: "b", text: "Fnatic" },
          ],
          correctAnswer: "b",
          explanation:
            "Fnatic, que ganó a Ninjas in Pyjamas en la final. Era el segundo Major del equipo sueco, tras la DreamHack Winter 2013.",
        },
        {
          id: 12,
          question: "¿Qué equipo fue el primero en ganar dos Majors seguidos?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Astralis" },
          ],
          correctAnswer: "a",
          explanation:
            "Fnatic, con Katowice y después Colonia en 2015. También fue el primer equipo en ganar tres Majors. Astralis lo superó más tarde, con tres títulos seguidos.",
        },
        {
          id: 13,
          question: "¿A quién ganó Astralis en su primer Major, en Atlanta en 2017?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Virtus.pro" },
          ],
          correctAnswer: "b",
          explanation:
            "A Virtus.pro, el equipo polaco que había ganado Katowice en 2014. Fue el primero de los cuatro Majors de Astralis.",
        },
        {
          id: 14,
          question: "¿A qué equipo brasileño ganó Gambit en la final de Cracovia en 2017?",
          answers: [
            { id: "a", text: "Immortals" },
            { id: "b", text: "SK Gaming" },
          ],
          correctAnswer: "a",
          explanation:
            "A Immortals. Gambit, con jugadores sobre todo de Kazajistán, se convirtió en el primer equipo de Asia y de la antigua URSS en ganar un Major.",
        },
        {
          id: 15,
          question: "¿Qué equipo finlandés perdió la final de Katowice 2019 contra Astralis?",
          answers: [
            { id: "a", text: "Heroic" },
            { id: "b", text: "ENCE" },
          ],
          correctAnswer: "b",
          explanation:
            "ENCE, la sorpresa del torneo. Heroic es un equipo danés, como Astralis, y perdió la final de Río en 2022.",
        },
        {
          id: 16,
          question: "¿A quién ganó Astralis en el Major de Berlín de 2019, su tercero seguido?",
          answers: [
            { id: "a", text: "AVANGAR" },
            { id: "b", text: "Gambit" },
          ],
          correctAnswer: "a",
          explanation:
            "A AVANGAR, un equipo de Kazajistán que llegó a la final sin ser favorito. Astralis ganó fácil, 2 a 0.",
        },
        {
          id: 17,
          question: "¿Quién ganó el Major de Amberes en 2022?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Natus Vincere" },
          ],
          correctAnswer: "a",
          explanation:
            "FaZe Clan, que ganó 2 a 0 a Natus Vincere en la final. Fue la primera vez que un equipo con jugadores de varios países ganaba un Major de CS:GO.",
        },
        {
          id: 18,
          question: "¿Con qué nombre ganó Virtus.pro el Major de Río en 2022?",
          answers: [
            { id: "a", text: "Heroic" },
            { id: "b", text: "Outsiders" },
          ],
          correctAnswer: "b",
          explanation:
            "Outsiders, un nombre neutral que el equipo adoptó por sus lazos con Rusia tras la invasión de Ucrania. Ganó 2 a 0 a Heroic en la final.",
        },
        {
          id: 19,
          question: "¿Quién ganó el Major de Budapest en diciembre de 2025?",
          answers: [
            { id: "a", text: "FaZe Clan" },
            { id: "b", text: "Team Vitality" },
          ],
          correctAnswer: "b",
          explanation:
            "Team Vitality, que ganó 3 a 1 a FaZe Clan. Era su segundo Major del año después de Austin, y la primera final de un Major jugada al mejor de cinco mapas.",
        },
        {
          id: 20,
          question: "¿Qué equipo ganó el Major de Colonia en junio de 2026?",
          answers: [
            { id: "a", text: "Team Falcons" },
            { id: "b", text: "FURIA" },
          ],
          correctAnswer: "a",
          explanation:
            "Team Falcons, con NiKo a la cabeza, que ganó a los brasileños de FURIA en la final. Era el primer Major del equipo.",
        },
      ],
    },
  },
};

export default [quizCounterStrikeMajors] as TranslatedQuiz[];
