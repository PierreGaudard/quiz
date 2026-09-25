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
        "Vingt nombres à trouver sur le tennis, du plus long match de l'histoire aux dimensions du filet. Tu proposes, on te dit plus haut ou plus bas.",
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
        {
          id: 11,
          question: "Combien de titres du Grand Chelem en simple Steffi Graf a-t-elle gagnés ?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22, entre 1987 et 1999. En 1988, elle a gagné les quatre tournois du Grand Chelem et l'or olympique la même année.",
        },
        {
          id: 12,
          question: "Combien de fois Martina Navratilova a-t-elle gagné Wimbledon en simple ?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "Neuf fois, dont six de suite entre 1982 et 1987. C'est le record, hommes et femmes confondus.",
        },
        {
          id: 13,
          question: "En quelle année a commencé l'ère Open, quand les professionnels ont pu jouer les tournois du Grand Chelem ?",
          answers: [],
          correctAnswer: "1968",
          correctValue: 1968,
          explanation:
            "En 1968. Avant, les grands tournois étaient réservés aux amateurs. Roland-Garros 1968 a été le premier Grand Chelem ouvert à tous.",
        },
        {
          id: 14,
          question: "Combien de mètres de long mesure un court de tennis ? (à un mètre près)",
          answers: [],
          correctAnswer: "23.77",
          correctValue: 23.77,
          explanation:
            "23,77 mètres, soit 78 pieds. La largeur est de 8,23 m en simple et de 10,97 m en double.",
        },
        {
          id: 15,
          question: "Quel âge avait Rafael Nadal quand il a gagné son premier Roland-Garros, en 2005 ?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "19 ans. Il a gagné la finale contre Mariano Puerta deux jours après son anniversaire, et c'était sa première participation au tournoi.",
        },
        {
          id: 16,
          question: "Combien de titres en simple Jimmy Connors a-t-il gagnés, le record du circuit ATP ?",
          answers: [],
          correctAnswer: "109",
          correctValue: 109,
          explanation:
            "109, entre 1972 et 1989. Roger Federer en a gagné 103, et Novak Djokovic a passé la barre des 100 en 2025.",
        },
        {
          id: 17,
          question: "Combien de titres du Grand Chelem en simple Björn Borg a-t-il gagnés ?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11 : six Roland-Garros et cinq Wimbledon. Il a arrêté sa carrière à 26 ans, en 1983.",
        },
        {
          id: 18,
          question: "Combien de fois Serena Williams a-t-elle gagné l'US Open en simple ?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Six fois : en 1999, 2002, 2008, 2012, 2013 et 2014. Son premier titre du Grand Chelem, elle l'a gagné à New York, à 17 ans.",
        },
        {
          id: 19,
          question: "Combien de fois Rod Laver a-t-il gagné les quatre tournois du Grand Chelem la même année ?",
          answers: [],
          correctAnswer: "2",
          correctValue: 2,
          explanation:
            "Deux fois, en 1962 puis en 1969. Aucun autre joueur n'a réussi ce Grand Chelem calendaire deux fois.",
        },
        {
          id: 20,
          question: "À quel âge Martina Hingis est-elle devenue numéro 1 mondiale, la plus jeune de l'histoire ?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "À 16 ans, en mars 1997. La même année, elle a gagné l'Open d'Australie, Wimbledon et l'US Open.",
        },
      ],
    },
    en: {
      title: "Guess the number: tennis stats",
      description:
        "Twenty numbers to find about tennis, from the longest match ever played to the height of the net. Make a guess and we'll say higher or lower.",
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
        {
          id: 11,
          question: "How many Grand Slam singles titles did Steffi Graf win?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22, between 1987 and 1999. In 1988 she won all four Grand Slams and Olympic gold in the same year.",
        },
        {
          id: 12,
          question: "How many times did Martina Navratilova win the Wimbledon singles title?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "Nine times, including six in a row from 1982 to 1987. It is the record for men and women alike.",
        },
        {
          id: 13,
          question: "In which year did the Open Era begin, when professionals were first allowed into Grand Slam events?",
          answers: [],
          correctAnswer: "1968",
          correctValue: 1968,
          explanation:
            "In 1968. Before that, the big tournaments were for amateurs only. The 1968 French Open was the first Grand Slam open to everyone.",
        },
        {
          id: 14,
          question: "How many metres long is a tennis court? (to the nearest metre)",
          answers: [],
          correctAnswer: "23.77",
          correctValue: 23.77,
          explanation:
            "23.77 metres, which is 78 feet. It is 8.23 m wide for singles and 10.97 m for doubles.",
        },
        {
          id: 15,
          question: "How old was Rafael Nadal when he won his first French Open, in 2005?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "19. He won the final against Mariano Puerta two days after his birthday, on his first appearance at the tournament.",
        },
        {
          id: 16,
          question: "How many singles titles did Jimmy Connors win, the ATP record?",
          answers: [],
          correctAnswer: "109",
          correctValue: 109,
          explanation:
            "109, between 1972 and 1989. Roger Federer won 103, and Novak Djokovic reached 100 in 2025.",
        },
        {
          id: 17,
          question: "How many Grand Slam singles titles did Björn Borg win?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11: six French Opens and five Wimbledons. He retired at the age of 26, in 1983.",
        },
        {
          id: 18,
          question: "How many times did Serena Williams win the US Open singles title?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Six times: 1999, 2002, 2008, 2012, 2013 and 2014. Her first Grand Slam title came in New York, when she was 17.",
        },
        {
          id: 19,
          question: "How many times did Rod Laver win all four Grand Slam tournaments in the same year?",
          answers: [],
          correctAnswer: "2",
          correctValue: 2,
          explanation:
            "Twice, in 1962 and in 1969. No other man has completed the calendar Grand Slam twice.",
        },
        {
          id: 20,
          question: "How old was Martina Hingis when she became world No. 1, the youngest ever?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16, in March 1997. That same year she won the Australian Open, Wimbledon and the US Open.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras del tenis",
      description:
        "Veinte números sobre el tenis, desde el partido más largo de la historia hasta la altura de la red. Tú propones y te decimos si es más o menos.",
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
        {
          id: 11,
          question: "¿Cuántos títulos de Grand Slam individuales ganó Steffi Graf?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22, entre 1987 y 1999. En 1988 ganó los cuatro Grand Slams y el oro olímpico el mismo año.",
        },
        {
          id: 12,
          question: "¿Cuántas veces ganó Martina Navratilova Wimbledon en individuales?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "Nueve veces, seis de ellas seguidas entre 1982 y 1987. Es el récord, entre hombres y mujeres.",
        },
        {
          id: 13,
          question: "¿En qué año empezó la Era Abierta, cuando los profesionales pudieron jugar los Grand Slams?",
          answers: [],
          correctAnswer: "1968",
          correctValue: 1968,
          explanation:
            "En 1968. Antes, los grandes torneos eran solo para aficionados. Roland Garros 1968 fue el primer Grand Slam abierto a todos.",
        },
        {
          id: 14,
          question: "¿Cuántos metros de largo mide una pista de tenis? (con un metro de margen)",
          answers: [],
          correctAnswer: "23.77",
          correctValue: 23.77,
          explanation:
            "23,77 metros, es decir, 78 pies. Mide 8,23 m de ancho en individuales y 10,97 m en dobles.",
        },
        {
          id: 15,
          question: "¿Qué edad tenía Rafael Nadal cuando ganó su primer Roland Garros, en 2005?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "19 años. Ganó la final a Mariano Puerta dos días después de su cumpleaños, y era la primera vez que jugaba el torneo.",
        },
        {
          id: 16,
          question: "¿Cuántos títulos individuales ganó Jimmy Connors, el récord de la ATP?",
          answers: [],
          correctAnswer: "109",
          correctValue: 109,
          explanation:
            "109, entre 1972 y 1989. Roger Federer ganó 103 y Novak Djokovic llegó a los 100 en 2025.",
        },
        {
          id: 17,
          question: "¿Cuántos títulos de Grand Slam individuales ganó Björn Borg?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11: seis Roland Garros y cinco Wimbledon. Se retiró con 26 años, en 1983.",
        },
        {
          id: 18,
          question: "¿Cuántas veces ganó Serena Williams el US Open en individuales?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Seis veces: en 1999, 2002, 2008, 2012, 2013 y 2014. Su primer Grand Slam lo ganó en Nueva York, con 17 años.",
        },
        {
          id: 19,
          question: "¿Cuántas veces ganó Rod Laver los cuatro Grand Slams en el mismo año?",
          answers: [],
          correctAnswer: "2",
          correctValue: 2,
          explanation:
            "Dos veces, en 1962 y en 1969. Ningún otro jugador ha logrado dos veces el Grand Slam en un año natural.",
        },
        {
          id: 20,
          question: "¿Con qué edad llegó Martina Hingis al número 1 mundial, la más joven de la historia?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "Con 16 años, en marzo de 1997. Ese mismo año ganó el Abierto de Australia, Wimbledon y el US Open.",
        },
      ],
    },
  },
};

export default [quizTennisChiffres] as TranslatedQuiz[];
