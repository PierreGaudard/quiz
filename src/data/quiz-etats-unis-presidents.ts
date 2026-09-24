import type { TranslatedQuiz } from "./types";

/**
 * Etats-Unis, deuxieme quiz : les presidents et les grandes dates de
 * l'histoire americaine, a remettre dans l'ordre.
 *
 * Mode ordre (le premier quiz Etats-Unis est un vrai-faux sur les Etats). Le
 * moteur melange les propositions (OrdrePlayer.tsx), seul `correctOrder`
 * compte. Six questions portent sur les presidents par date d'entree en
 * fonction, quatre sur des evenements. Hawai et l'Alaska, deja dans
 * quiz-etats-unis.ts, sont evites dans la question sur les Etats.
 */
export const quizEtatsUnisPresidents: TranslatedQuiz = {
  slug: "quiz-etats-unis-presidents",
  slugs: { en: "usa-presidents-quiz", fr: "quiz-etats-unis-presidents", es: "quiz-estados-unidos-presidentes" },
  categorySlug: "geographie",
  subcategory: "Etats-Unis",
  difficulty: "medium",
  coverImage: "/images/cover-etats-unis-presidents.webp",
  gameType: "ordre",
  playCount: 3900,
  translations: {
    fr: {
      title: "Quiz États-Unis : présidents et grandes dates",
      description:
        "Remets dans l'ordre les présidents américains et les grandes dates de l'histoire des États-Unis, de Washington à Obama.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-etats-unis-presidents-01.webp",
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "George Washington" },
            { id: "b", text: "Abraham Lincoln" },
            { id: "c", text: "Franklin D. Roosevelt" },
            { id: "d", text: "John F. Kennedy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Washington en 1789, Lincoln en 1861, Franklin D. Roosevelt en 1933 et Kennedy en 1961. Washington est d'ailleurs le tout premier président du pays.",
        },
        {
          id: 2,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "Richard Nixon" },
            { id: "b", text: "Thomas Jefferson" },
            { id: "c", text: "Theodore Roosevelt" },
            { id: "d", text: "Andrew Jackson" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Jefferson en 1801, Jackson en 1829, Theodore Roosevelt en 1901 et Nixon en 1969. Theodore Roosevelt était un cousin éloigné de Franklin D. Roosevelt.",
        },
        {
          id: 3,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "Barack Obama" },
            { id: "b", text: "Ronald Reagan" },
            { id: "c", text: "George W. Bush" },
            { id: "d", text: "Bill Clinton" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Reagan en 1981, Clinton en 1993, George W. Bush en 2001 et Obama en 2009. Entre Reagan et Clinton, il y a eu George H. W. Bush, le père de George W. Bush.",
        },
        {
          id: 4,
          image: "/images/q-quiz-etats-unis-presidents-04.webp",
          question: "Remets ces événements dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "La guerre de Sécession commence" },
            { id: "b", text: "La Déclaration d'indépendance" },
            { id: "c", text: "Les premiers pas sur la Lune" },
            { id: "d", text: "L'achat de la Louisiane à la France" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "La Déclaration d'indépendance date de 1776, l'achat de la Louisiane de 1803, le début de la guerre de Sécession de 1861, et Neil Armstrong marche sur la Lune en 1969.",
        },
        {
          id: 5,
          question: "Remets ces États dans l'ordre où ils ont rejoint l'Union.",
          answers: [
            { id: "a", text: "Californie" },
            { id: "b", text: "Utah" },
            { id: "c", text: "Delaware" },
            { id: "d", text: "Texas" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Le Delaware en 1787, c'est le tout premier État. Puis le Texas en 1845, la Californie en 1850 et l'Utah seulement en 1896.",
        },
        {
          id: 6,
          image: "/images/q-quiz-etats-unis-presidents-06.webp",
          question: "Ces quatre présidents ont été assassinés pendant leur mandat. Remets-les dans l'ordre.",
          answers: [
            { id: "a", text: "William McKinley" },
            { id: "b", text: "John F. Kennedy" },
            { id: "c", text: "Abraham Lincoln" },
            { id: "d", text: "James Garfield" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Lincoln en 1865, Garfield en 1881, McKinley en 1901 et Kennedy en 1963, à Dallas. La mort de McKinley a d'ailleurs fait de Theodore Roosevelt le président.",
        },
        {
          id: 7,
          question: "Remets ces événements du XXe siècle dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "L'attaque de Pearl Harbor" },
            { id: "b", text: "La démission de Richard Nixon" },
            { id: "c", text: "Le krach de Wall Street" },
            { id: "d", text: "La marche sur Washington de Martin Luther King" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Le krach boursier en 1929, Pearl Harbor en 1941, le discours « I have a dream » de Martin Luther King en 1963, puis la démission de Nixon après le Watergate en 1974.",
        },
        {
          id: 8,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "Jimmy Carter" },
            { id: "b", text: "Dwight D. Eisenhower" },
            { id: "c", text: "George H. W. Bush" },
            { id: "d", text: "Lyndon B. Johnson" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Eisenhower en 1953, Johnson en 1963 juste après la mort de Kennedy, Carter en 1977 et George H. W. Bush en 1989.",
        },
        {
          id: 9,
          image: "/images/q-quiz-etats-unis-presidents-09.webp",
          question: "Remets ces moments de l'époque coloniale dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "La Boston Tea Party" },
            { id: "b", text: "La fondation de Jamestown" },
            { id: "c", text: "La signature de la Constitution" },
            { id: "d", text: "L'arrivée du Mayflower" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Jamestown est fondée en 1607, le Mayflower arrive en 1620, la Boston Tea Party a lieu en 1773 et la Constitution est signée en 1787 à Philadelphie.",
        },
        {
          id: 10,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "Gerald Ford" },
            { id: "b", text: "Donald Trump" },
            { id: "c", text: "Woodrow Wilson" },
            { id: "d", text: "Harry Truman" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Wilson en 1913, Truman en 1945 à la mort de Roosevelt, Ford en 1974 après la démission de Nixon, et Trump en 2017 pour son premier mandat.",
        },
      ],
    },
    en: {
      title: "USA quiz: presidents and key dates",
      description:
        "Put American presidents and big dates in US history back in the right order, from George Washington to Barack Obama.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-etats-unis-presidents-01.webp",
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "George Washington" },
            { id: "b", text: "Abraham Lincoln" },
            { id: "c", text: "Franklin D. Roosevelt" },
            { id: "d", text: "John F. Kennedy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Washington in 1789, Lincoln in 1861, Franklin D. Roosevelt in 1933 and Kennedy in 1961. Washington was the very first president of the country.",
        },
        {
          id: 2,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "Richard Nixon" },
            { id: "b", text: "Thomas Jefferson" },
            { id: "c", text: "Theodore Roosevelt" },
            { id: "d", text: "Andrew Jackson" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Jefferson in 1801, Jackson in 1829, Theodore Roosevelt in 1901 and Nixon in 1969. Theodore Roosevelt was a distant cousin of Franklin D. Roosevelt.",
        },
        {
          id: 3,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "Barack Obama" },
            { id: "b", text: "Ronald Reagan" },
            { id: "c", text: "George W. Bush" },
            { id: "d", text: "Bill Clinton" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Reagan in 1981, Clinton in 1993, George W. Bush in 2001 and Obama in 2009. Between Reagan and Clinton came George H. W. Bush, George W. Bush's father.",
        },
        {
          id: 4,
          image: "/images/q-quiz-etats-unis-presidents-04.webp",
          question: "Put these events in chronological order.",
          answers: [
            { id: "a", text: "The Civil War begins" },
            { id: "b", text: "The Declaration of Independence" },
            { id: "c", text: "The first steps on the Moon" },
            { id: "d", text: "The Louisiana Purchase from France" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "The Declaration of Independence is from 1776, the Louisiana Purchase from 1803, the Civil War starts in 1861, and Neil Armstrong walks on the Moon in 1969.",
        },
        {
          id: 5,
          question: "Put these states in the order they joined the Union.",
          answers: [
            { id: "a", text: "California" },
            { id: "b", text: "Utah" },
            { id: "c", text: "Delaware" },
            { id: "d", text: "Texas" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Delaware in 1787, which makes it the very first state. Then Texas in 1845, California in 1850 and Utah not until 1896.",
        },
        {
          id: 6,
          image: "/images/q-quiz-etats-unis-presidents-06.webp",
          question: "These four presidents were assassinated in office. Put them in order.",
          answers: [
            { id: "a", text: "William McKinley" },
            { id: "b", text: "John F. Kennedy" },
            { id: "c", text: "Abraham Lincoln" },
            { id: "d", text: "James Garfield" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Lincoln in 1865, Garfield in 1881, McKinley in 1901 and Kennedy in 1963, in Dallas. McKinley's death is also what made Theodore Roosevelt president.",
        },
        {
          id: 7,
          question: "Put these 20th-century events in chronological order.",
          answers: [
            { id: "a", text: "The attack on Pearl Harbor" },
            { id: "b", text: "Richard Nixon resigns" },
            { id: "c", text: "The Wall Street Crash" },
            { id: "d", text: "Martin Luther King's March on Washington" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "The stock market crash in 1929, Pearl Harbor in 1941, Martin Luther King's \"I have a dream\" speech in 1963, then Nixon resigning after Watergate in 1974.",
        },
        {
          id: 8,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "Jimmy Carter" },
            { id: "b", text: "Dwight D. Eisenhower" },
            { id: "c", text: "George H. W. Bush" },
            { id: "d", text: "Lyndon B. Johnson" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Eisenhower in 1953, Johnson in 1963 right after Kennedy's death, Carter in 1977 and George H. W. Bush in 1989.",
        },
        {
          id: 9,
          image: "/images/q-quiz-etats-unis-presidents-09.webp",
          question: "Put these moments from the colonial era in chronological order.",
          answers: [
            { id: "a", text: "The Boston Tea Party" },
            { id: "b", text: "The founding of Jamestown" },
            { id: "c", text: "The signing of the Constitution" },
            { id: "d", text: "The arrival of the Mayflower" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Jamestown was founded in 1607, the Mayflower arrived in 1620, the Boston Tea Party happened in 1773 and the Constitution was signed in Philadelphia in 1787.",
        },
        {
          id: 10,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "Gerald Ford" },
            { id: "b", text: "Donald Trump" },
            { id: "c", text: "Woodrow Wilson" },
            { id: "d", text: "Harry Truman" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Wilson in 1913, Truman in 1945 when Roosevelt died, Ford in 1974 after Nixon resigned, and Trump in 2017 for his first term.",
        },
      ],
    },
    es: {
      title: "Estados Unidos: presidentes y fechas clave",
      description:
        "Ordena a los presidentes estadounidenses y las grandes fechas de la historia de Estados Unidos, de George Washington a Obama.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-etats-unis-presidents-01.webp",
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "George Washington" },
            { id: "b", text: "Abraham Lincoln" },
            { id: "c", text: "Franklin D. Roosevelt" },
            { id: "d", text: "John F. Kennedy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Washington en 1789, Lincoln en 1861, Franklin D. Roosevelt en 1933 y Kennedy en 1961. Washington fue además el primer presidente del país.",
        },
        {
          id: 2,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "Richard Nixon" },
            { id: "b", text: "Thomas Jefferson" },
            { id: "c", text: "Theodore Roosevelt" },
            { id: "d", text: "Andrew Jackson" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Jefferson en 1801, Jackson en 1829, Theodore Roosevelt en 1901 y Nixon en 1969. Theodore Roosevelt era primo lejano de Franklin D. Roosevelt.",
        },
        {
          id: 3,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "Barack Obama" },
            { id: "b", text: "Ronald Reagan" },
            { id: "c", text: "George W. Bush" },
            { id: "d", text: "Bill Clinton" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Reagan en 1981, Clinton en 1993, George W. Bush en 2001 y Obama en 2009. Entre Reagan y Clinton estuvo George H. W. Bush, el padre de George W. Bush.",
        },
        {
          id: 4,
          image: "/images/q-quiz-etats-unis-presidents-04.webp",
          question: "Ordena estos acontecimientos cronológicamente.",
          answers: [
            { id: "a", text: "Empieza la guerra de Secesión" },
            { id: "b", text: "La Declaración de Independencia" },
            { id: "c", text: "Los primeros pasos en la Luna" },
            { id: "d", text: "La compra de Luisiana a Francia" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "La Declaración de Independencia es de 1776, la compra de Luisiana de 1803, la guerra de Secesión empieza en 1861 y Neil Armstrong pisa la Luna en 1969.",
        },
        {
          id: 5,
          question: "Ordena estos estados según su entrada en la Unión.",
          answers: [
            { id: "a", text: "California" },
            { id: "b", text: "Utah" },
            { id: "c", text: "Delaware" },
            { id: "d", text: "Texas" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Delaware en 1787, que es el primer estado de todos. Luego Texas en 1845, California en 1850 y Utah no hasta 1896.",
        },
        {
          id: 6,
          image: "/images/q-quiz-etats-unis-presidents-06.webp",
          question: "Estos cuatro presidentes fueron asesinados durante su mandato. Ordénalos.",
          answers: [
            { id: "a", text: "William McKinley" },
            { id: "b", text: "John F. Kennedy" },
            { id: "c", text: "Abraham Lincoln" },
            { id: "d", text: "James Garfield" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Lincoln en 1865, Garfield en 1881, McKinley en 1901 y Kennedy en 1963, en Dallas. La muerte de McKinley es justo lo que convirtió a Theodore Roosevelt en presidente.",
        },
        {
          id: 7,
          question: "Ordena estos acontecimientos del siglo XX cronológicamente.",
          answers: [
            { id: "a", text: "El ataque a Pearl Harbor" },
            { id: "b", text: "La dimisión de Richard Nixon" },
            { id: "c", text: "El crac de Wall Street" },
            { id: "d", text: "La Marcha sobre Washington de Martin Luther King" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "El crac de la bolsa en 1929, Pearl Harbor en 1941, el discurso «I have a dream» de Martin Luther King en 1963 y la dimisión de Nixon tras el Watergate en 1974.",
        },
        {
          id: 8,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "Jimmy Carter" },
            { id: "b", text: "Dwight D. Eisenhower" },
            { id: "c", text: "George H. W. Bush" },
            { id: "d", text: "Lyndon B. Johnson" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Eisenhower en 1953, Johnson en 1963 justo después de la muerte de Kennedy, Carter en 1977 y George H. W. Bush en 1989.",
        },
        {
          id: 9,
          image: "/images/q-quiz-etats-unis-presidents-09.webp",
          question: "Ordena estos momentos de la época colonial cronológicamente.",
          answers: [
            { id: "a", text: "El Motín del té de Boston" },
            { id: "b", text: "La fundación de Jamestown" },
            { id: "c", text: "La firma de la Constitución" },
            { id: "d", text: "La llegada del Mayflower" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Jamestown se funda en 1607, el Mayflower llega en 1620, el Motín del té de Boston es de 1773 y la Constitución se firma en Filadelfia en 1787.",
        },
        {
          id: 10,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "Gerald Ford" },
            { id: "b", text: "Donald Trump" },
            { id: "c", text: "Woodrow Wilson" },
            { id: "d", text: "Harry Truman" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Wilson en 1913, Truman en 1945 a la muerte de Roosevelt, Ford en 1974 tras la dimisión de Nixon y Trump en 2017 para su primer mandato.",
        },
      ],
    },
  },
};

export default [quizEtatsUnisPresidents] as TranslatedQuiz[];
