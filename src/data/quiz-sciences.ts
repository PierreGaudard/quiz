import type { TranslatedQuiz } from "./types";

/**
 * Quiz de sciences en QCM : chimie, physique et grandes découvertes.
 *
 * Des questions de culture générale, pas de programme scolaire : le symbole
 * de l'or, l'ébullition de l'eau, Einstein, Fleming, Marie Curie, etc. Les
 * deux premières sont faciles pour mettre le joueur en route.
 */
export const quizSciences: TranslatedQuiz = {
  slug: "quiz-sciences",
  slugs: { en: "science-quiz", fr: "quiz-sciences", es: "quiz-ciencia" },
  categorySlug: "culture-generale",
  subcategory: "Sciences",
  difficulty: "medium",
  coverImage: "/images/sub-sciences.webp",
  gameType: "qcm",
  playCount: 7400,
  translations: {
    fr: {
      title: "Quiz sciences : chimie, physique et découvertes",
      description:
        "Dix questions de sciences : les éléments, la lumière, les grandes découvertes et les savants qui les ont faites.",
      questions: [
        {
          id: 1,
          image: "/images/q-sciences-01.webp",
          question: "Quel est le symbole chimique de l'or ?",
          answers: [
            { id: "a", text: "Or" },
            { id: "b", text: "Au" },
            { id: "c", text: "Ag" },
            { id: "d", text: "Go" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Au, qui vient du latin aurum. Ag, c'est l'argent, du latin argentum.",
        },
        {
          id: 2,
          question: "À quelle température l'eau bout-elle au niveau de la mer ?",
          answers: [
            { id: "a", text: "80 °C" },
            { id: "b", text: "90 °C" },
            { id: "c", text: "100 °C" },
            { id: "d", text: "120 °C" },
          ],
          correctAnswer: "c",
          explanation:
            "L'eau bout à 100 °C à la pression du niveau de la mer. En montagne, la pression est plus faible, du coup elle bout un peu avant.",
        },
        {
          id: 3,
          question: "Quel gaz les plantes absorbent-elles pour faire la photosynthèse ?",
          answers: [
            { id: "a", text: "L'oxygène" },
            { id: "b", text: "L'azote" },
            { id: "c", text: "L'hydrogène" },
            { id: "d", text: "Le dioxyde de carbone" },
          ],
          correctAnswer: "d",
          explanation:
            "Les plantes absorbent le dioxyde de carbone (CO2) et, avec la lumière et l'eau, elles fabriquent du sucre. L'oxygène, c'est ce qu'elles rejettent.",
        },
        {
          id: 4,
          image: "/images/q-sciences-04.webp",
          question: "Quel physicien a formulé la théorie de la relativité ?",
          answers: [
            { id: "a", text: "Albert Einstein" },
            { id: "b", text: "Isaac Newton" },
            { id: "c", text: "Niels Bohr" },
            { id: "d", text: "Stephen Hawking" },
          ],
          correctAnswer: "a",
          explanation:
            "Albert Einstein, avec la relativité restreinte en 1905 puis la relativité générale en 1915. C'est de là que vient la fameuse formule E = mc².",
        },
        {
          id: 5,
          question: "Quel est l'élément chimique le plus abondant dans l'Univers ?",
          answers: [
            { id: "a", text: "L'oxygène" },
            { id: "b", text: "L'hydrogène" },
            { id: "c", text: "Le carbone" },
            { id: "d", text: "Le fer" },
          ],
          correctAnswer: "b",
          explanation:
            "L'hydrogène, et de loin : il représente environ les trois quarts de la matière ordinaire. Les étoiles en sont en grande partie faites, avec l'hélium.",
        },
        {
          id: 6,
          question: "À quelle vitesse la lumière se déplace-t-elle dans le vide, environ ?",
          answers: [
            { id: "a", text: "300 000 km/h" },
            { id: "b", text: "30 000 km/s" },
            { id: "c", text: "300 000 km/s" },
            { id: "d", text: "3 millions de km/s" },
          ],
          correctAnswer: "c",
          explanation:
            "Environ 300 000 km par seconde (299 792 km/s exactement). Ça permet de faire à peu près sept fois et demie le tour de la Terre en une seconde.",
        },
        {
          id: 7,
          image: "/images/q-sciences-07.webp",
          question: "Qui a découvert la pénicilline, le premier antibiotique ?",
          answers: [
            { id: "a", text: "Louis Pasteur" },
            { id: "b", text: "Robert Koch" },
            { id: "c", text: "Marie Curie" },
            { id: "d", text: "Alexander Fleming" },
          ],
          correctAnswer: "d",
          explanation:
            "Alexander Fleming, en 1928, à Londres. Il a remarqué qu'une moisissure tombée par hasard dans une boîte de culture tuait les bactéries autour d'elle.",
        },
        {
          id: 8,
          image: "/images/q-sciences-08.webp",
          question: "Quelle scientifique a reçu deux prix Nobel, l'un en physique, l'autre en chimie ?",
          answers: [
            { id: "a", text: "Marie Curie" },
            { id: "b", text: "Rosalind Franklin" },
            { id: "c", text: "Irène Joliot-Curie" },
            { id: "d", text: "Ada Lovelace" },
          ],
          correctAnswer: "a",
          explanation:
            "Marie Curie : le Nobel de physique en 1903, puis celui de chimie en 1911. Elle reste la seule personne récompensée dans deux sciences différentes.",
        },
        {
          id: 9,
          image: "/images/q-sciences-09.webp",
          question: "Combien d'éléments compte le tableau périodique aujourd'hui ?",
          answers: [
            { id: "a", text: "92" },
            { id: "b", text: "118" },
            { id: "c", text: "108" },
            { id: "d", text: "150" },
          ],
          correctAnswer: "b",
          explanation:
            "118 éléments, le dernier étant l'oganesson. 92, c'est à peu près le nombre d'éléments qu'on trouve dans la nature, les autres ont été fabriqués en laboratoire.",
        },
        {
          id: 10,
          image: "/images/q-sciences-10.webp",
          question: "Quel métal est liquide à température ambiante ?",
          answers: [
            { id: "a", text: "Le plomb" },
            { id: "b", text: "Le cuivre" },
            { id: "c", text: "Le mercure" },
            { id: "d", text: "Le fer" },
          ],
          correctAnswer: "c",
          explanation:
            "Le mercure, qui ne devient solide qu'à environ -39 °C. On s'en servait d'ailleurs dans les vieux thermomètres.",
        },
      ],
    },
    en: {
      title: "Science quiz: chemistry, physics, discoveries",
      description:
        "Ten science questions about the elements, light, the big discoveries and the scientists who made them.",
      questions: [
        {
          id: 1,
          image: "/images/q-sciences-01.webp",
          question: "What is the chemical symbol for gold?",
          answers: [
            { id: "a", text: "Go" },
            { id: "b", text: "Au" },
            { id: "c", text: "Ag" },
            { id: "d", text: "Gd" },
          ],
          correctAnswer: "b",
          explanation:
            "It's Au, from the Latin word aurum. Ag is silver, from argentum.",
        },
        {
          id: 2,
          question: "At what temperature does water boil at sea level?",
          answers: [
            { id: "a", text: "80 °C (176 °F)" },
            { id: "b", text: "90 °C (194 °F)" },
            { id: "c", text: "100 °C (212 °F)" },
            { id: "d", text: "120 °C (248 °F)" },
          ],
          correctAnswer: "c",
          explanation:
            "Water boils at 100 °C, or 212 °F, at sea-level pressure. Up in the mountains the pressure is lower, so it boils a bit sooner.",
        },
        {
          id: 3,
          question: "Which gas do plants take in for photosynthesis?",
          answers: [
            { id: "a", text: "Oxygen" },
            { id: "b", text: "Nitrogen" },
            { id: "c", text: "Hydrogen" },
            { id: "d", text: "Carbon dioxide" },
          ],
          correctAnswer: "d",
          explanation:
            "Plants take in carbon dioxide (CO2) and use it, with light and water, to make sugar. Oxygen is what they give off.",
        },
        {
          id: 4,
          image: "/images/q-sciences-04.webp",
          question: "Which physicist came up with the theory of relativity?",
          answers: [
            { id: "a", text: "Albert Einstein" },
            { id: "b", text: "Isaac Newton" },
            { id: "c", text: "Niels Bohr" },
            { id: "d", text: "Stephen Hawking" },
          ],
          correctAnswer: "a",
          explanation:
            "Albert Einstein, with special relativity in 1905 and general relativity in 1915. That's where the famous E = mc² comes from.",
        },
        {
          id: 5,
          question: "What is the most common chemical element in the universe?",
          answers: [
            { id: "a", text: "Oxygen" },
            { id: "b", text: "Hydrogen" },
            { id: "c", text: "Carbon" },
            { id: "d", text: "Iron" },
          ],
          correctAnswer: "b",
          explanation:
            "Hydrogen, by a long way: it makes up about three quarters of ordinary matter. Stars are mostly hydrogen and helium.",
        },
        {
          id: 6,
          question: "Roughly how fast does light travel in a vacuum?",
          answers: [
            { id: "a", text: "300,000 km per hour" },
            { id: "b", text: "30,000 km per second" },
            { id: "c", text: "300,000 km per second" },
            { id: "d", text: "3 million km per second" },
          ],
          correctAnswer: "c",
          explanation:
            "About 300,000 km per second (299,792 km/s to be exact), or around 186,000 miles per second. That's enough to go round the Earth about seven and a half times in one second.",
        },
        {
          id: 7,
          image: "/images/q-sciences-07.webp",
          question: "Who discovered penicillin, the first antibiotic?",
          answers: [
            { id: "a", text: "Louis Pasteur" },
            { id: "b", text: "Robert Koch" },
            { id: "c", text: "Marie Curie" },
            { id: "d", text: "Alexander Fleming" },
          ],
          correctAnswer: "d",
          explanation:
            "Alexander Fleming, in London in 1928. He noticed that a mould that had landed by accident in one of his dishes was killing the bacteria around it.",
        },
        {
          id: 8,
          image: "/images/q-sciences-08.webp",
          question: "Which scientist won two Nobel Prizes, one in physics and one in chemistry?",
          answers: [
            { id: "a", text: "Marie Curie" },
            { id: "b", text: "Rosalind Franklin" },
            { id: "c", text: "Irène Joliot-Curie" },
            { id: "d", text: "Ada Lovelace" },
          ],
          correctAnswer: "a",
          explanation:
            "Marie Curie: the Nobel Prize in Physics in 1903, then the one in Chemistry in 1911. She's still the only person to win in two different sciences.",
        },
        {
          id: 9,
          image: "/images/q-sciences-09.webp",
          question: "How many elements are on the periodic table today?",
          answers: [
            { id: "a", text: "92" },
            { id: "b", text: "118" },
            { id: "c", text: "108" },
            { id: "d", text: "150" },
          ],
          correctAnswer: "b",
          explanation:
            "118, the last one being oganesson. 92 is roughly how many are found in nature, the rest were made in a lab.",
        },
        {
          id: 10,
          image: "/images/q-sciences-10.webp",
          question: "Which metal is liquid at room temperature?",
          answers: [
            { id: "a", text: "Lead" },
            { id: "b", text: "Copper" },
            { id: "c", text: "Mercury" },
            { id: "d", text: "Iron" },
          ],
          correctAnswer: "c",
          explanation:
            "Mercury, which only turns solid at about -39 °C. It's what used to be inside old thermometers.",
        },
      ],
    },
    es: {
      title: "Quiz de ciencia: química, física y hallazgos",
      description:
        "Diez preguntas de ciencia sobre los elementos, la luz, los grandes descubrimientos y los científicos que los hicieron.",
      questions: [
        {
          id: 1,
          image: "/images/q-sciences-01.webp",
          question: "¿Cuál es el símbolo químico del oro?",
          answers: [
            { id: "a", text: "Or" },
            { id: "b", text: "Au" },
            { id: "c", text: "Ag" },
            { id: "d", text: "Go" },
          ],
          correctAnswer: "b",
          explanation:
            "Es Au, del latín aurum. Ag es la plata, del latín argentum.",
        },
        {
          id: 2,
          question: "¿A qué temperatura hierve el agua a nivel del mar?",
          answers: [
            { id: "a", text: "80 °C" },
            { id: "b", text: "90 °C" },
            { id: "c", text: "100 °C" },
            { id: "d", text: "120 °C" },
          ],
          correctAnswer: "c",
          explanation:
            "El agua hierve a 100 °C con la presión del nivel del mar. En la montaña la presión es más baja, así que hierve un poco antes.",
        },
        {
          id: 3,
          question: "¿Qué gas absorben las plantas para hacer la fotosíntesis?",
          answers: [
            { id: "a", text: "El oxígeno" },
            { id: "b", text: "El nitrógeno" },
            { id: "c", text: "El hidrógeno" },
            { id: "d", text: "El dióxido de carbono" },
          ],
          correctAnswer: "d",
          explanation:
            "Las plantas absorben dióxido de carbono (CO2) y, con la luz y el agua, fabrican azúcar. El oxígeno es lo que sueltan.",
        },
        {
          id: 4,
          image: "/images/q-sciences-04.webp",
          question: "¿Qué físico formuló la teoría de la relatividad?",
          answers: [
            { id: "a", text: "Albert Einstein" },
            { id: "b", text: "Isaac Newton" },
            { id: "c", text: "Niels Bohr" },
            { id: "d", text: "Stephen Hawking" },
          ],
          correctAnswer: "a",
          explanation:
            "Albert Einstein, con la relatividad especial en 1905 y la general en 1915. De ahí sale la famosa fórmula E = mc².",
        },
        {
          id: 5,
          question: "¿Cuál es el elemento químico más abundante del universo?",
          answers: [
            { id: "a", text: "El oxígeno" },
            { id: "b", text: "El hidrógeno" },
            { id: "c", text: "El carbono" },
            { id: "d", text: "El hierro" },
          ],
          correctAnswer: "b",
          explanation:
            "El hidrógeno, y con mucha diferencia: es más o menos las tres cuartas partes de la materia normal. Las estrellas están hechas sobre todo de hidrógeno y helio.",
        },
        {
          id: 6,
          question: "¿A qué velocidad viaja la luz en el vacío, más o menos?",
          answers: [
            { id: "a", text: "300 000 km/h" },
            { id: "b", text: "30 000 km/s" },
            { id: "c", text: "300 000 km/s" },
            { id: "d", text: "3 millones de km/s" },
          ],
          correctAnswer: "c",
          explanation:
            "Unos 300 000 km por segundo (299 792 km/s exactamente). Con eso da unas siete vueltas y media a la Tierra en un segundo.",
        },
        {
          id: 7,
          image: "/images/q-sciences-07.webp",
          question: "¿Quién descubrió la penicilina, el primer antibiótico?",
          answers: [
            { id: "a", text: "Louis Pasteur" },
            { id: "b", text: "Robert Koch" },
            { id: "c", text: "Marie Curie" },
            { id: "d", text: "Alexander Fleming" },
          ],
          correctAnswer: "d",
          explanation:
            "Alexander Fleming, en Londres, en 1928. Se dio cuenta de que un moho que había caído por casualidad en una placa mataba las bacterias de alrededor.",
        },
        {
          id: 8,
          image: "/images/q-sciences-08.webp",
          question: "¿Qué científica ganó dos premios Nobel, uno de física y otro de química?",
          answers: [
            { id: "a", text: "Marie Curie" },
            { id: "b", text: "Rosalind Franklin" },
            { id: "c", text: "Irène Joliot-Curie" },
            { id: "d", text: "Ada Lovelace" },
          ],
          correctAnswer: "a",
          explanation:
            "Marie Curie: el Nobel de Física en 1903 y el de Química en 1911. Sigue siendo la única persona premiada en dos ciencias distintas.",
        },
        {
          id: 9,
          image: "/images/q-sciences-09.webp",
          question: "¿Cuántos elementos tiene hoy la tabla periódica?",
          answers: [
            { id: "a", text: "92" },
            { id: "b", text: "118" },
            { id: "c", text: "108" },
            { id: "d", text: "150" },
          ],
          correctAnswer: "b",
          explanation:
            "118, y el último es el oganesón. 92 es más o menos la cantidad que hay en la naturaleza, el resto se ha fabricado en laboratorio.",
        },
        {
          id: 10,
          image: "/images/q-sciences-10.webp",
          question: "¿Qué metal es líquido a temperatura ambiente?",
          answers: [
            { id: "a", text: "El plomo" },
            { id: "b", text: "El cobre" },
            { id: "c", text: "El mercurio" },
            { id: "d", text: "El hierro" },
          ],
          correctAnswer: "c",
          explanation:
            "El mercurio, que no se vuelve sólido hasta unos -39 °C. Por eso se usaba en los termómetros antiguos.",
        },
      ],
    },
  },
};

export default [quizSciences] as TranslatedQuiz[];
