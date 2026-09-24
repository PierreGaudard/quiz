import type { TranslatedQuiz } from "./types";

/**
 * Quiz Counter-Strike en mode duel sur les Majors, les grands tournois
 * soutenus par Valve, de 2014 à 2024, et sur les joueurs qui les ont gagnés.
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
  subcategory: "Counter Strike",
  difficulty: "hard",
  coverImage: "/images/cover-counter-strike-majors.webp",
  gameType: "duel",
  playCount: 3900,
  translations: {
    fr: {
      title: "Duel Counter-Strike : les Majors",
      description:
        "Dix duels sur les Majors de Counter-Strike, de Katowice 2014 à Shanghai 2024 : qui a gagné, avec quelle équipe et contre qui.",
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
      ],
    },
    en: {
      title: "Counter-Strike duel: the Majors",
      description:
        "Ten duels on the Counter-Strike Majors, from Katowice 2014 to Shanghai 2024: who won, with which team and against whom.",
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
      ],
    },
    es: {
      title: "Duelo Counter-Strike: los Majors",
      description:
        "Diez duelos sobre los Majors de Counter-Strike, de Katowice 2014 a Shanghái 2024: quién ganó, con qué equipo y contra quién.",
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
      ],
    },
  },
};

export default [quizCounterStrikeMajors] as TranslatedQuiz[];
