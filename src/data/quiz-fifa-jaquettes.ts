import type { TranslatedQuiz } from "./types";

/**
 * Quiz FIFA en qcm sur les joueurs des jaquettes, de FIFA 99 à FIFA 23.
 *
 * Les jaquettes changent souvent selon le pays : chaque question précise
 * l'édition ou la région visée (jaquette mondiale, édition Ultimate, version
 * américaine). Mbappé, déjà posé dans l'estimation quiz-fifa.ts, n'est pas
 * interrogé ici.
 */
export const quizFifaJaquettes: TranslatedQuiz = {
  slug: "quiz-fifa-jaquettes",
  slugs: { en: "fifa-covers-quiz", fr: "quiz-fifa-jaquettes", es: "quiz-fifa-portadas" },
  categorySlug: "jeux-video",
  subcategory: "FIFA",
  difficulty: "medium",
  coverImage: "/images/cover-fifa-jaquettes.webp",
  gameType: "qcm",
  playCount: 5600,
  translations: {
    fr: {
      title: "Quiz FIFA : les stars des jaquettes",
      description:
        "Messi, Ronaldinho, Kaká, Reus, Hazard ou encore Sam Kerr : dix questions sur les joueurs qui ont fait la couverture des jeux FIFA.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-jaquettes-01.webp",
          question: "Quel joueur est sur la jaquette mondiale de FIFA 13, FIFA 14, FIFA 15 et FIFA 16 ?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Wayne Rooney" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi. EA l'avait fait venir de Pro Evolution Soccer en 2012, et il a fait la couverture quatre années de suite.",
        },
        {
          id: 2,
          question: "Quel joueur a été choisi par un vote des fans pour la jaquette de FIFA 17 ?",
          answers: [
            { id: "a", text: "Marco Reus" },
            { id: "b", text: "Anthony Martial" },
            { id: "c", text: "James Rodríguez" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "a",
          explanation:
            "Marco Reus, l'attaquant du Borussia Dortmund. Les trois autres étaient les candidats face à lui dans le vote.",
        },
        {
          id: 3,
          image: "/images/q-fifa-jaquettes-03.webp",
          question: "Qui est sur la jaquette mondiale de FIFA 18 ?",
          answers: [
            { id: "a", text: "Paul Pogba" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Cristiano Ronaldo" },
            { id: "d", text: "Antoine Griezmann" },
          ],
          correctAnswer: "c",
          explanation:
            "Cristiano Ronaldo, alors au Real Madrid. Il est resté sur la jaquette de FIFA 19, cette fois avec le maillot de la Juventus.",
        },
        {
          id: 4,
          question: "Qui est sur la jaquette de l'édition standard de FIFA 20 ?",
          answers: [
            { id: "a", text: "Virgil van Dijk" },
            { id: "b", text: "Kevin De Bruyne" },
            { id: "c", text: "Mohamed Salah" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "d",
          explanation:
            "Eden Hazard, qui venait de signer au Real Madrid. Virgil van Dijk était sur l'édition Champions du même jeu.",
        },
        {
          id: 5,
          image: "/images/q-fifa-jaquettes-05.webp",
          question: "Quel ancien joueur est sur l'édition Ultimate de FIFA 20 ?",
          answers: [
            { id: "a", text: "Ronaldo" },
            { id: "b", text: "Zinédine Zidane" },
            { id: "c", text: "Pelé" },
            { id: "d", text: "Thierry Henry" },
          ],
          correctAnswer: "b",
          explanation:
            "Zinédine Zidane. FIFA 20 avait trois jaquettes : Hazard pour la standard, Van Dijk pour la Champions et Zidane pour l'Ultimate.",
        },
        {
          id: 6,
          question: "Quelle joueuse est sur l'édition Ultimate de FIFA 23, à côté de Mbappé ?",
          answers: [
            { id: "a", text: "Sam Kerr" },
            { id: "b", text: "Alexia Putellas" },
            { id: "c", text: "Megan Rapinoe" },
            { id: "d", text: "Wendie Renard" },
          ],
          correctAnswer: "a",
          explanation:
            "Sam Kerr, l'attaquante australienne de Chelsea. C'est la première femme sur une jaquette mondiale de FIFA.",
        },
        {
          id: 7,
          question: "Qui est sur la jaquette américaine de FIFA 16, le premier FIFA avec des joueuses ?",
          answers: [
            { id: "a", text: "Hope Solo" },
            { id: "b", text: "Carli Lloyd" },
            { id: "c", text: "Alex Morgan" },
            { id: "d", text: "Megan Rapinoe" },
          ],
          correctAnswer: "c",
          explanation:
            "Alex Morgan, avec Messi. Au Canada, c'est Christine Sinclair qui était sur la jaquette, et en Australie Steph Catley.",
        },
        {
          id: 8,
          question: "Quel Brésilien est sur la jaquette mondiale de FIFA 11 ?",
          answers: [
            { id: "a", text: "Ronaldinho" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Robinho" },
          ],
          correctAnswer: "b",
          explanation:
            "Kaká, alors au Real Madrid. Au Royaume-Uni, c'est Wayne Rooney qui était sur la jaquette.",
        },
        {
          id: 9,
          image: "/images/q-fifa-jaquettes-09.webp",
          question: "Avec quel Brésilien Wayne Rooney partage-t-il la jaquette de FIFA 06 à FIFA 09 ?",
          answers: [
            { id: "a", text: "Ronaldo" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Roberto Carlos" },
            { id: "d", text: "Ronaldinho" },
          ],
          correctAnswer: "d",
          explanation:
            "Ronaldinho, la star du FC Barcelone. Les deux joueurs sont restés sur la jaquette mondiale quatre ans de suite.",
        },
        {
          id: 10,
          question: "Quel attaquant néerlandais est sur la jaquette mondiale de FIFA 99 ?",
          answers: [
            { id: "a", text: "Dennis Bergkamp" },
            { id: "b", text: "Marco van Basten" },
            { id: "c", text: "Patrick Kluivert" },
            { id: "d", text: "Ruud van Nistelrooy" },
          ],
          correctAnswer: "a",
          explanation:
            "Dennis Bergkamp, d'Arsenal. En France, FIFA 99 est sorti avec Fabien Barthez sur la jaquette.",
        },
      ],
    },
    en: {
      title: "FIFA quiz: the cover stars",
      description:
        "Messi, Ronaldinho, Kaká, Reus, Hazard, Sam Kerr and more: ten questions on the players who made the cover of the FIFA games.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-jaquettes-01.webp",
          question: "Which player is on the worldwide cover of FIFA 13, FIFA 14, FIFA 15 and FIFA 16?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Wayne Rooney" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi. EA brought him over from Pro Evolution Soccer in 2012, and he was on the cover four years in a row.",
        },
        {
          id: 2,
          question: "Which player was picked by a fan vote for the cover of FIFA 17?",
          answers: [
            { id: "a", text: "Marco Reus" },
            { id: "b", text: "Anthony Martial" },
            { id: "c", text: "James Rodríguez" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "a",
          explanation:
            "Marco Reus, the Borussia Dortmund forward. The other three were the players he was up against in the vote.",
        },
        {
          id: 3,
          image: "/images/q-fifa-jaquettes-03.webp",
          question: "Who is on the worldwide cover of FIFA 18?",
          answers: [
            { id: "a", text: "Paul Pogba" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Cristiano Ronaldo" },
            { id: "d", text: "Antoine Griezmann" },
          ],
          correctAnswer: "c",
          explanation:
            "Cristiano Ronaldo, then at Real Madrid. He stayed on the cover for FIFA 19, this time in a Juventus shirt.",
        },
        {
          id: 4,
          question: "Who is on the cover of the standard edition of FIFA 20?",
          answers: [
            { id: "a", text: "Virgil van Dijk" },
            { id: "b", text: "Kevin De Bruyne" },
            { id: "c", text: "Mohamed Salah" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "d",
          explanation:
            "Eden Hazard, who had just joined Real Madrid. Virgil van Dijk was on the Champions Edition of the same game.",
        },
        {
          id: 5,
          image: "/images/q-fifa-jaquettes-05.webp",
          question: "Which former player is on the Ultimate Edition of FIFA 20?",
          answers: [
            { id: "a", text: "Ronaldo Nazário" },
            { id: "b", text: "Zinedine Zidane" },
            { id: "c", text: "Pelé" },
            { id: "d", text: "Thierry Henry" },
          ],
          correctAnswer: "b",
          explanation:
            "Zinedine Zidane. FIFA 20 had three covers: Hazard on the standard one, Van Dijk on the Champions Edition and Zidane on the Ultimate.",
        },
        {
          id: 6,
          question: "Which player shares the FIFA 23 Ultimate Edition cover with Mbappé?",
          answers: [
            { id: "a", text: "Sam Kerr" },
            { id: "b", text: "Alexia Putellas" },
            { id: "c", text: "Megan Rapinoe" },
            { id: "d", text: "Wendie Renard" },
          ],
          correctAnswer: "a",
          explanation:
            "Sam Kerr, Chelsea's Australian striker. She's the first woman on a worldwide FIFA cover.",
        },
        {
          id: 7,
          question: "Who is on the US cover of FIFA 16, the first FIFA with women players?",
          answers: [
            { id: "a", text: "Hope Solo" },
            { id: "b", text: "Carli Lloyd" },
            { id: "c", text: "Alex Morgan" },
            { id: "d", text: "Megan Rapinoe" },
          ],
          correctAnswer: "c",
          explanation:
            "Alex Morgan, next to Messi. In Canada it was Christine Sinclair on the cover, and in Australia Steph Catley.",
        },
        {
          id: 8,
          question: "Which Brazilian is on the worldwide cover of FIFA 11?",
          answers: [
            { id: "a", text: "Ronaldinho" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Robinho" },
          ],
          correctAnswer: "b",
          explanation:
            "Kaká, then at Real Madrid. In the UK, the cover went to Wayne Rooney.",
        },
        {
          id: 9,
          image: "/images/q-fifa-jaquettes-09.webp",
          question: "Which Brazilian shares the cover with Wayne Rooney from FIFA 06 to FIFA 09?",
          answers: [
            { id: "a", text: "Ronaldo Nazário" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Roberto Carlos" },
            { id: "d", text: "Ronaldinho" },
          ],
          correctAnswer: "d",
          explanation:
            "Ronaldinho, Barcelona's big star. The two of them stayed on the worldwide cover four years in a row.",
        },
        {
          id: 10,
          question: "Which Dutch striker is on the worldwide cover of FIFA 99?",
          answers: [
            { id: "a", text: "Dennis Bergkamp" },
            { id: "b", text: "Marco van Basten" },
            { id: "c", text: "Patrick Kluivert" },
            { id: "d", text: "Ruud van Nistelrooy" },
          ],
          correctAnswer: "a",
          explanation:
            "Dennis Bergkamp, of Arsenal. In France, FIFA 99 came out with Fabien Barthez on the cover instead.",
        },
      ],
    },
    es: {
      title: "Quiz de FIFA: las estrellas de la portada",
      description:
        "Messi, Ronaldinho, Kaká, Reus, Hazard, Sam Kerr y más: diez preguntas sobre los jugadores que salieron en la portada de los FIFA.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-jaquettes-01.webp",
          question: "¿Qué jugador sale en la portada mundial de FIFA 13, FIFA 14, FIFA 15 y FIFA 16?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Wayne Rooney" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi. EA lo fichó de Pro Evolution Soccer en 2012, y salió en la portada cuatro años seguidos.",
        },
        {
          id: 2,
          question: "¿Qué jugador eligieron los fans en una votación para la portada de FIFA 17?",
          answers: [
            { id: "a", text: "Marco Reus" },
            { id: "b", text: "Anthony Martial" },
            { id: "c", text: "James Rodríguez" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "a",
          explanation:
            "Marco Reus, el delantero del Borussia Dortmund. Los otros tres eran los candidatos contra los que competía en la votación.",
        },
        {
          id: 3,
          image: "/images/q-fifa-jaquettes-03.webp",
          question: "¿Quién sale en la portada mundial de FIFA 18?",
          answers: [
            { id: "a", text: "Paul Pogba" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Cristiano Ronaldo" },
            { id: "d", text: "Antoine Griezmann" },
          ],
          correctAnswer: "c",
          explanation:
            "Cristiano Ronaldo, que jugaba en el Real Madrid. Repitió en la portada de FIFA 19, esta vez con la camiseta de la Juventus.",
        },
        {
          id: 4,
          question: "¿Quién sale en la portada de la edición estándar de FIFA 20?",
          answers: [
            { id: "a", text: "Virgil van Dijk" },
            { id: "b", text: "Kevin De Bruyne" },
            { id: "c", text: "Mohamed Salah" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "d",
          explanation:
            "Eden Hazard, recién fichado por el Real Madrid. Virgil van Dijk salía en la edición Champions del mismo juego.",
        },
        {
          id: 5,
          image: "/images/q-fifa-jaquettes-05.webp",
          question: "¿Qué exjugador sale en la edición Ultimate de FIFA 20?",
          answers: [
            { id: "a", text: "Ronaldo Nazário" },
            { id: "b", text: "Zinedine Zidane" },
            { id: "c", text: "Pelé" },
            { id: "d", text: "Thierry Henry" },
          ],
          correctAnswer: "b",
          explanation:
            "Zinedine Zidane. FIFA 20 tuvo tres portadas: Hazard en la estándar, Van Dijk en la Champions y Zidane en la Ultimate.",
        },
        {
          id: 6,
          question: "¿Qué jugadora sale en la edición Ultimate de FIFA 23 junto a Mbappé?",
          answers: [
            { id: "a", text: "Sam Kerr" },
            { id: "b", text: "Alexia Putellas" },
            { id: "c", text: "Megan Rapinoe" },
            { id: "d", text: "Wendie Renard" },
          ],
          correctAnswer: "a",
          explanation:
            "Sam Kerr, la delantera australiana del Chelsea. Es la primera mujer en una portada mundial de FIFA.",
        },
        {
          id: 7,
          question: "¿Quién sale en la portada estadounidense de FIFA 16, el primer FIFA con jugadoras?",
          answers: [
            { id: "a", text: "Hope Solo" },
            { id: "b", text: "Carli Lloyd" },
            { id: "c", text: "Alex Morgan" },
            { id: "d", text: "Megan Rapinoe" },
          ],
          correctAnswer: "c",
          explanation:
            "Alex Morgan, junto a Messi. En Canadá salía Christine Sinclair, y en Australia Steph Catley.",
        },
        {
          id: 8,
          question: "¿Qué brasileño sale en la portada mundial de FIFA 11?",
          answers: [
            { id: "a", text: "Ronaldinho" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Robinho" },
          ],
          correctAnswer: "b",
          explanation:
            "Kaká, que jugaba en el Real Madrid. En el Reino Unido la portada fue para Wayne Rooney.",
        },
        {
          id: 9,
          image: "/images/q-fifa-jaquettes-09.webp",
          question: "¿Con qué brasileño comparte Wayne Rooney la portada de FIFA 06 a FIFA 09?",
          answers: [
            { id: "a", text: "Ronaldo Nazário" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Roberto Carlos" },
            { id: "d", text: "Ronaldinho" },
          ],
          correctAnswer: "d",
          explanation:
            "Con Ronaldinho, la gran estrella del FC Barcelona. Los dos salieron en la portada mundial cuatro años seguidos.",
        },
        {
          id: 10,
          question: "¿Qué delantero neerlandés sale en la portada mundial de FIFA 99?",
          answers: [
            { id: "a", text: "Dennis Bergkamp" },
            { id: "b", text: "Marco van Basten" },
            { id: "c", text: "Patrick Kluivert" },
            { id: "d", text: "Ruud van Nistelrooy" },
          ],
          correctAnswer: "a",
          explanation:
            "Dennis Bergkamp, del Arsenal. En España, FIFA 99 salió con Fernando Morientes en la portada.",
        },
      ],
    },
  },
};

export default [quizFifaJaquettes] as TranslatedQuiz[];
