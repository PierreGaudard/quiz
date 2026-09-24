import type { TranslatedQuiz } from "./types";

/**
 * Estimation sur les chiffres du tennis : records, dates, dimensions.
 *
 * Troisième quiz du sous-thème Tennis, à côté du duel sur les palmarès
 * (quiz-tennis.ts) et du vrai-faux sur les règles (quiz-tennis-regles.ts).
 * Mêmes réglages que quiz-jo.ts (tolérance 5 %, cinq essais) : les années et
 * la capacité du Chatrier laissent de la marge, les petits nombres (11 heures,
 * 17 ans) se jouent quasiment au chiffre exact. Aucune valeur ne peut encore
 * bouger : ce sont des records clos ou des faits historiques.
 */
export const quizTennisChiffres: TranslatedQuiz = {
  slug: "quiz-tennis-chiffres",
  slugs: { en: "tennis-numbers-quiz", fr: "quiz-tennis-chiffres", es: "quiz-tenis-cifras" },
  categorySlug: "sport",
  subcategory: "Tennis",
  difficulty: "hard",
  coverImage: "/images/cover-tennis-chiffres.webp",
  gameType: "estimation",
  playCount: 3100,
  translations: {
    fr: {
      title: "Estimation : les chiffres du tennis",
      description:
        "Dix nombres à trouver sur le tennis, du plus long match de l'histoire aux dimensions du filet. Tu proposes, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-tennis-chiffres-01.webp",
          question: "Combien d'heures a duré le match entre John Isner et Nicolas Mahut à Wimbledon en 2010 ?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11 heures et 5 minutes, étalées sur trois jours. C'est toujours le match de tennis le plus long jamais joué.",
        },
        {
          id: 2,
          question: "Dans ce même match, combien de jeux Isner a-t-il gagnés dans le cinquième set ?",
          answers: [],
          correctAnswer: "70",
          correctValue: 70,
          explanation:
            "70. Le dernier set s'est fini sur le score de 70-68, parce qu'à l'époque Wimbledon n'avait pas de tie-break dans le set décisif.",
        },
        {
          id: 3,
          image: "/images/q-tennis-chiffres-02.webp",
          question: "En quelle année s'est joué le tout premier tournoi de Wimbledon ?",
          answers: [],
          correctAnswer: "1877",
          correctValue: 1877,
          explanation:
            "En 1877. C'est le plus vieux tournoi de tennis du monde, et il n'y avait alors qu'un tableau de simple messieurs.",
        },
        {
          id: 4,
          question: "Combien de centimètres mesure le filet en son centre ?",
          answers: [],
          correctAnswer: "91",
          correctValue: 91,
          explanation:
            "91,4 cm, soit exactement 3 pieds. Aux poteaux, le filet monte à 1,07 m.",
        },
        {
          id: 5,
          image: "/images/q-tennis-chiffres-03.webp",
          question: "Combien de titres en simple Roger Federer a-t-il gagnés sur le circuit ATP ?",
          answers: [],
          correctAnswer: "103",
          correctValue: 103,
          explanation:
            "103 titres entre 2001 et 2019. Seul Jimmy Connors en a gagné plus, avec 109.",
        },
        {
          id: 6,
          question: "Combien de joueurs sont au départ du tableau de simple d'un tournoi du Grand Chelem ?",
          answers: [],
          correctAnswer: "128",
          correctValue: 128,
          explanation:
            "128 joueurs, donc sept tours à gagner pour soulever le trophée. C'est pareil chez les femmes.",
        },
        {
          id: 7,
          image: "/images/q-tennis-chiffres-04.webp",
          question: "Combien de spectateurs peut accueillir le court Philippe-Chatrier de Roland-Garros ?",
          answers: [],
          correctAnswer: "15225",
          correctValue: 15225,
          explanation:
            "15 225 places depuis sa rénovation. Il a aussi un toit rétractable depuis 2020, ce qui permet de jouer quand il pleut.",
        },
        {
          id: 8,
          question: "En quelle année a eu lieu la première Coupe Davis ?",
          answers: [],
          correctAnswer: "1900",
          correctValue: 1900,
          explanation:
            "En 1900, avec seulement deux équipes : les États-Unis et les îles Britanniques. Les Américains ont gagné.",
        },
        {
          id: 9,
          question: "À quel âge Boris Becker a-t-il gagné Wimbledon pour la première fois ?",
          answers: [],
          correctAnswer: "17",
          correctValue: 17,
          explanation:
            "À 17 ans, en 1985. Il reste le plus jeune vainqueur de Wimbledon chez les hommes.",
        },
        {
          id: 10,
          question: "Combien de titres du Grand Chelem en simple l'Australienne Margaret Court a-t-elle gagnés ?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24, entre 1960 et 1973, dont onze à l'Open d'Australie. Une bonne partie date d'avant 1968, quand les professionnels n'avaient pas encore le droit de jouer ces tournois.",
        },
      ],
    },
    en: {
      title: "Guess the number: tennis stats",
      description:
        "Ten numbers to find about tennis, from the longest match ever played to the height of the net. Make a guess and we'll say higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-tennis-chiffres-01.webp",
          question: "How many hours did the John Isner vs Nicolas Mahut match at Wimbledon 2010 last?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11 hours and 5 minutes, spread over three days. It's still the longest tennis match ever played.",
        },
        {
          id: 2,
          question: "In that same match, how many games did Isner win in the fifth set?",
          answers: [],
          correctAnswer: "70",
          correctValue: 70,
          explanation:
            "70. The final set ended 70-68, because Wimbledon had no tiebreak in the deciding set back then.",
        },
        {
          id: 3,
          image: "/images/q-tennis-chiffres-02.webp",
          question: "In what year was the very first Wimbledon tournament played?",
          answers: [],
          correctAnswer: "1877",
          correctValue: 1877,
          explanation:
            "In 1877. It's the oldest tennis tournament in the world, and back then there was only a men's singles event.",
        },
        {
          id: 4,
          question: "How many centimeters high is the net at the center?",
          answers: [],
          correctAnswer: "91",
          correctValue: 91,
          explanation:
            "91.4 cm, which is exactly 3 feet. At the posts it goes up to 1.07 m, or 3.5 feet.",
        },
        {
          id: 5,
          image: "/images/q-tennis-chiffres-03.webp",
          question: "How many ATP singles titles did Roger Federer win?",
          answers: [],
          correctAnswer: "103",
          correctValue: 103,
          explanation:
            "103 titles between 2001 and 2019. Only Jimmy Connors won more, with 109.",
        },
        {
          id: 6,
          question: "How many players start in the singles draw of a Grand Slam tournament?",
          answers: [],
          correctAnswer: "128",
          correctValue: 128,
          explanation:
            "128 players, so you need to win seven rounds to lift the trophy. It's the same number in the women's draw.",
        },
        {
          id: 7,
          image: "/images/q-tennis-chiffres-04.webp",
          question: "How many spectators can Court Philippe-Chatrier at Roland-Garros hold?",
          answers: [],
          correctAnswer: "15225",
          correctValue: 15225,
          explanation:
            "15,225 seats since it was rebuilt. It's also had a retractable roof since 2020, so play can go on when it rains.",
        },
        {
          id: 8,
          question: "In what year was the first Davis Cup held?",
          answers: [],
          correctAnswer: "1900",
          correctValue: 1900,
          explanation:
            "In 1900, with just two teams: the United States and the British Isles. The Americans won.",
        },
        {
          id: 9,
          question: "How old was Boris Becker when he first won Wimbledon?",
          answers: [],
          correctAnswer: "17",
          correctValue: 17,
          explanation:
            "He was 17, in 1985. He's still the youngest men's champion in Wimbledon history.",
        },
        {
          id: 10,
          question: "How many Grand Slam singles titles did Australia's Margaret Court win?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24, between 1960 and 1973, including eleven at the Australian Open. Quite a few came before 1968, when professionals still weren't allowed to play these events.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras del tenis",
      description:
        "Diez números sobre el tenis, desde el partido más largo de la historia hasta la altura de la red. Tú propones y te decimos si es más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-tennis-chiffres-01.webp",
          question: "¿Cuántas horas duró el partido entre John Isner y Nicolas Mahut en Wimbledon 2010?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11 horas y 5 minutos, repartidas en tres días. Sigue siendo el partido de tenis más largo de la historia.",
        },
        {
          id: 2,
          question: "En ese mismo partido, ¿cuántos juegos ganó Isner en el quinto set?",
          answers: [],
          correctAnswer: "70",
          correctValue: 70,
          explanation:
            "70. El último set acabó 70-68, porque entonces Wimbledon no tenía tie-break en el set decisivo.",
        },
        {
          id: 3,
          image: "/images/q-tennis-chiffres-02.webp",
          question: "¿En qué año se jugó el primer torneo de Wimbledon?",
          answers: [],
          correctAnswer: "1877",
          correctValue: 1877,
          explanation:
            "En 1877. Es el torneo de tenis más antiguo del mundo, y al principio solo había cuadro individual masculino.",
        },
        {
          id: 4,
          question: "¿Cuántos centímetros mide la red en el centro?",
          answers: [],
          correctAnswer: "91",
          correctValue: 91,
          explanation:
            "91,4 cm, que son justo 3 pies. En los postes sube hasta 1,07 m.",
        },
        {
          id: 5,
          image: "/images/q-tennis-chiffres-03.webp",
          question: "¿Cuántos títulos individuales de la ATP ganó Roger Federer?",
          answers: [],
          correctAnswer: "103",
          correctValue: 103,
          explanation:
            "103 títulos entre 2001 y 2019. Solo Jimmy Connors ganó más, con 109.",
        },
        {
          id: 6,
          question: "¿Cuántos jugadores empiezan en el cuadro individual de un Grand Slam?",
          answers: [],
          correctAnswer: "128",
          correctValue: 128,
          explanation:
            "128 jugadores, así que hay que ganar siete rondas para llevarse el trofeo. En el cuadro femenino es igual.",
        },
        {
          id: 7,
          image: "/images/q-tennis-chiffres-04.webp",
          question: "¿Cuántos espectadores caben en la pista Philippe-Chatrier de Roland Garros?",
          answers: [],
          correctAnswer: "15225",
          correctValue: 15225,
          explanation:
            "15.225 asientos desde su reforma. Además tiene techo retráctil desde 2020, así que se puede jugar aunque llueva.",
        },
        {
          id: 8,
          question: "¿En qué año se disputó la primera Copa Davis?",
          answers: [],
          correctAnswer: "1900",
          correctValue: 1900,
          explanation:
            "En 1900, con solo dos equipos: Estados Unidos y las Islas Británicas. Ganaron los estadounidenses.",
        },
        {
          id: 9,
          question: "¿Con cuántos años ganó Boris Becker su primer Wimbledon?",
          answers: [],
          correctAnswer: "17",
          correctValue: 17,
          explanation:
            "Con 17 años, en 1985. Sigue siendo el campeón masculino más joven de Wimbledon.",
        },
        {
          id: 10,
          question: "¿Cuántos títulos de Grand Slam individuales ganó la australiana Margaret Court?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24, entre 1960 y 1973, once de ellos en el Abierto de Australia. Muchos llegaron antes de 1968, cuando los profesionales aún no podían jugar estos torneos.",
        },
      ],
    },
  },
};

export default [quizTennisChiffres] as TranslatedQuiz[];
