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
        "Vingt questions de sciences : les éléments, la lumière, les grandes découvertes et les savants qui les ont faites.",
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
        {
          id: 11,
          question: "Quelle est la formule chimique de l'eau ?",
          answers: [
            { id: "a", text: "CO2" },
            { id: "b", text: "H2O" },
            { id: "c", text: "O2" },
            { id: "d", text: "NaCl" },
          ],
          correctAnswer: "b",
          explanation:
            "H2O : deux atomes d'hydrogène et un atome d'oxygène. CO2, c'est le dioxyde de carbone, et NaCl le sel de cuisine.",
        },
        {
          id: 12,
          question: "Quel est le symbole chimique du sodium ?",
          answers: [
            { id: "a", text: "So" },
            { id: "b", text: "Sd" },
            { id: "c", text: "Na" },
            { id: "d", text: "S" },
          ],
          correctAnswer: "c",
          explanation:
            "Na, qui vient de son nom latin, natrium. S, c'est le soufre.",
        },
        {
          id: 13,
          question: "Quel gaz compose à peu près 78 % de l'air qu'on respire ?",
          answers: [
            { id: "a", text: "L'azote" },
            { id: "b", text: "L'oxygène" },
            { id: "c", text: "Le dioxyde de carbone" },
            { id: "d", text: "L'argon" },
          ],
          correctAnswer: "a",
          explanation:
            "L'azote. L'oxygène ne représente qu'environ 21 % de l'air, et l'argon à peu près 1 %.",
        },
        {
          id: 14,
          question: "Dans quelle unité mesure-t-on l'intensité d'un courant électrique ?",
          answers: [
            { id: "a", text: "Le volt" },
            { id: "b", text: "Le watt" },
            { id: "c", text: "L'ohm" },
            { id: "d", text: "L'ampère" },
          ],
          correctAnswer: "d",
          explanation:
            "L'ampère, du nom du physicien français André-Marie Ampère. Le volt mesure la tension, le watt la puissance et l'ohm la résistance.",
        },
        {
          id: 15,
          question: "Quelle particule de l'atome porte une charge électrique négative ?",
          answers: [
            { id: "a", text: "Le proton" },
            { id: "b", text: "L'électron" },
            { id: "c", text: "Le neutron" },
            { id: "d", text: "Le photon" },
          ],
          correctAnswer: "b",
          explanation:
            "L'électron. Il tourne autour du noyau, qui contient les protons, chargés positivement, et les neutrons, qui n'ont pas de charge.",
        },
        {
          id: 16,
          question: "Quel est le pH de l'eau pure, à 25 °C ?",
          answers: [
            { id: "a", text: "0" },
            { id: "b", text: "5" },
            { id: "c", text: "7" },
            { id: "d", text: "14" },
          ],
          correctAnswer: "c",
          explanation:
            "7, c'est ce qu'on appelle un pH neutre. En dessous, une solution est acide, comme le citron, et au-dessus elle est basique, comme l'eau de Javel.",
        },
        {
          id: 17,
          question: "Quel gaz, plus léger que l'air et ininflammable, met-on dans les ballons de fête qui s'envolent ?",
          answers: [
            { id: "a", text: "L'hélium" },
            { id: "b", text: "L'hydrogène" },
            { id: "c", text: "Le néon" },
            { id: "d", text: "L'azote" },
          ],
          correctAnswer: "a",
          explanation:
            "L'hélium. L'hydrogène est encore plus léger, mais il brûle très facilement, c'est d'ailleurs ce qui a causé l'incendie du dirigeable Hindenburg en 1937.",
        },
        {
          id: 18,
          question: "Dans quelle unité mesure-t-on une fréquence, comme celle d'une onde radio ?",
          answers: [
            { id: "a", text: "Le décibel" },
            { id: "b", text: "Le joule" },
            { id: "c", text: "Le newton" },
            { id: "d", text: "Le hertz" },
          ],
          correctAnswer: "d",
          explanation:
            "Le hertz, qui compte le nombre de vibrations par seconde. Il porte le nom du physicien allemand Heinrich Hertz, qui a mis en évidence les ondes radio.",
        },
        {
          id: 19,
          question: "Quelle est la matière naturelle la plus dure ?",
          answers: [
            { id: "a", text: "Le quartz" },
            { id: "b", text: "Le diamant" },
            { id: "c", text: "Le granit" },
            { id: "d", text: "Le rubis" },
          ],
          correctAnswer: "b",
          explanation:
            "Le diamant. Il est fait uniquement de carbone, comme la mine d'un crayon, mais ses atomes sont rangés autrement. Il obtient la note maximale, 10, sur l'échelle de Mohs.",
        },
        {
          id: 20,
          question: "Que mesure l'échelle de Richter ?",
          answers: [
            { id: "a", text: "La force du vent" },
            { id: "b", text: "La hauteur des vagues" },
            { id: "c", text: "La puissance des séismes" },
            { id: "d", text: "La dureté des minéraux" },
          ],
          correctAnswer: "c",
          explanation:
            "La puissance des séismes, leur magnitude. Le sismologue américain Charles Richter l'a créée en 1935. Aujourd'hui, les scientifiques utilisent surtout une échelle plus récente, dite de magnitude de moment.",
        },
      ],
    },
    en: {
      title: "Science quiz: chemistry, physics, discoveries",
      description:
        "Twenty science questions about the elements, light, the big discoveries and the scientists who made them.",
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
        {
          id: 11,
          question: "What is the chemical formula for water?",
          answers: [
            { id: "a", text: "CO2" },
            { id: "b", text: "H2O" },
            { id: "c", text: "O2" },
            { id: "d", text: "NaCl" },
          ],
          correctAnswer: "b",
          explanation:
            "H2O, meaning two hydrogen atoms and one oxygen atom. CO2 is carbon dioxide and NaCl is table salt.",
        },
        {
          id: 12,
          question: "What is the chemical symbol for sodium?",
          answers: [
            { id: "a", text: "So" },
            { id: "b", text: "Sd" },
            { id: "c", text: "Na" },
            { id: "d", text: "S" },
          ],
          correctAnswer: "c",
          explanation:
            "Na, from its Latin name, natrium. S is sulphur.",
        },
        {
          id: 13,
          question: "Which gas makes up about 78% of the air we breathe?",
          answers: [
            { id: "a", text: "Nitrogen" },
            { id: "b", text: "Oxygen" },
            { id: "c", text: "Carbon dioxide" },
            { id: "d", text: "Argon" },
          ],
          correctAnswer: "a",
          explanation:
            "Nitrogen. Oxygen is only about 21% of the air, and argon roughly 1%.",
        },
        {
          id: 14,
          question: "What unit is electric current measured in?",
          answers: [
            { id: "a", text: "The volt" },
            { id: "b", text: "The watt" },
            { id: "c", text: "The ohm" },
            { id: "d", text: "The ampere" },
          ],
          correctAnswer: "d",
          explanation:
            "The ampere, or amp, named after the French physicist André-Marie Ampère. The volt measures voltage, the watt power and the ohm resistance.",
        },
        {
          id: 15,
          question: "Which particle in an atom carries a negative electric charge?",
          answers: [
            { id: "a", text: "The proton" },
            { id: "b", text: "The electron" },
            { id: "c", text: "The neutron" },
            { id: "d", text: "The photon" },
          ],
          correctAnswer: "b",
          explanation:
            "The electron. It moves around the nucleus, which holds the positively charged protons and the neutrons, which have no charge.",
        },
        {
          id: 16,
          question: "What is the pH of pure water at 25 °C?",
          answers: [
            { id: "a", text: "0" },
            { id: "b", text: "5" },
            { id: "c", text: "7" },
            { id: "d", text: "14" },
          ],
          correctAnswer: "c",
          explanation:
            "7, which is called neutral. Below that a solution is acidic, like lemon juice, and above it it's basic, like bleach.",
        },
        {
          id: 17,
          question: "Which non-flammable gas, lighter than air, is used to fill party balloons that float?",
          answers: [
            { id: "a", text: "Helium" },
            { id: "b", text: "Hydrogen" },
            { id: "c", text: "Neon" },
            { id: "d", text: "Nitrogen" },
          ],
          correctAnswer: "a",
          explanation:
            "Helium. Hydrogen is even lighter, but it catches fire very easily, which is what happened to the Hindenburg airship in 1937.",
        },
        {
          id: 18,
          question: "What unit is frequency measured in, for example for a radio wave?",
          answers: [
            { id: "a", text: "The decibel" },
            { id: "b", text: "The joule" },
            { id: "c", text: "The newton" },
            { id: "d", text: "The hertz" },
          ],
          correctAnswer: "d",
          explanation:
            "The hertz, which counts vibrations per second. It's named after the German physicist Heinrich Hertz, who proved radio waves exist.",
        },
        {
          id: 19,
          question: "What is the hardest natural material?",
          answers: [
            { id: "a", text: "Quartz" },
            { id: "b", text: "Diamond" },
            { id: "c", text: "Granite" },
            { id: "d", text: "Ruby" },
          ],
          correctAnswer: "b",
          explanation:
            "Diamond. It's pure carbon, just like pencil lead, but its atoms are arranged differently. It scores the maximum, 10, on the Mohs scale.",
        },
        {
          id: 20,
          question: "What does the Richter scale measure?",
          answers: [
            { id: "a", text: "Wind strength" },
            { id: "b", text: "Wave height" },
            { id: "c", text: "The strength of earthquakes" },
            { id: "d", text: "How hard minerals are" },
          ],
          correctAnswer: "c",
          explanation:
            "The strength of earthquakes, their magnitude. The American seismologist Charles Richter came up with it in 1935. These days scientists mostly use a newer scale, the moment magnitude scale.",
        },
      ],
    },
    es: {
      title: "Quiz de ciencia: química, física y hallazgos",
      description:
        "Veinte preguntas de ciencia sobre los elementos, la luz, los grandes descubrimientos y los científicos que los hicieron.",
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
        {
          id: 11,
          question: "¿Cuál es la fórmula química del agua?",
          answers: [
            { id: "a", text: "CO2" },
            { id: "b", text: "H2O" },
            { id: "c", text: "O2" },
            { id: "d", text: "NaCl" },
          ],
          correctAnswer: "b",
          explanation:
            "H2O, es decir, dos átomos de hidrógeno y uno de oxígeno. El CO2 es el dióxido de carbono y el NaCl, la sal de mesa.",
        },
        {
          id: 12,
          question: "¿Cuál es el símbolo químico del sodio?",
          answers: [
            { id: "a", text: "So" },
            { id: "b", text: "Sd" },
            { id: "c", text: "Na" },
            { id: "d", text: "S" },
          ],
          correctAnswer: "c",
          explanation:
            "Na, que viene de su nombre en latín, natrium. La S es el azufre.",
        },
        {
          id: 13,
          question: "¿Qué gas forma más o menos el 78 % del aire que respiramos?",
          answers: [
            { id: "a", text: "El nitrógeno" },
            { id: "b", text: "El oxígeno" },
            { id: "c", text: "El dióxido de carbono" },
            { id: "d", text: "El argón" },
          ],
          correctAnswer: "a",
          explanation:
            "El nitrógeno. El oxígeno solo supone un 21 % del aire, y el argón alrededor del 1 %.",
        },
        {
          id: 14,
          question: "¿En qué unidad se mide la intensidad de una corriente eléctrica?",
          answers: [
            { id: "a", text: "El voltio" },
            { id: "b", text: "El vatio" },
            { id: "c", text: "El ohmio" },
            { id: "d", text: "El amperio" },
          ],
          correctAnswer: "d",
          explanation:
            "En amperios, por el físico francés André-Marie Ampère. El voltio mide la tensión, el vatio la potencia y el ohmio la resistencia.",
        },
        {
          id: 15,
          question: "¿Qué partícula del átomo tiene carga eléctrica negativa?",
          answers: [
            { id: "a", text: "El protón" },
            { id: "b", text: "El electrón" },
            { id: "c", text: "El neutrón" },
            { id: "d", text: "El fotón" },
          ],
          correctAnswer: "b",
          explanation:
            "El electrón. Se mueve alrededor del núcleo, donde están los protones, con carga positiva, y los neutrones, que no tienen carga.",
        },
        {
          id: 16,
          question: "¿Cuál es el pH del agua pura a 25 °C?",
          answers: [
            { id: "a", text: "0" },
            { id: "b", text: "5" },
            { id: "c", text: "7" },
            { id: "d", text: "14" },
          ],
          correctAnswer: "c",
          explanation:
            "7, lo que se llama un pH neutro. Por debajo, una disolución es ácida, como el limón, y por encima es básica, como la lejía.",
        },
        {
          id: 17,
          question: "¿Qué gas, más ligero que el aire y no inflamable, se usa para los globos de fiesta que se van volando?",
          answers: [
            { id: "a", text: "El helio" },
            { id: "b", text: "El hidrógeno" },
            { id: "c", text: "El neón" },
            { id: "d", text: "El nitrógeno" },
          ],
          correctAnswer: "a",
          explanation:
            "El helio. El hidrógeno es aún más ligero, pero arde con muchísima facilidad, y eso fue lo que provocó el incendio del dirigible Hindenburg en 1937.",
        },
        {
          id: 18,
          question: "¿En qué unidad se mide una frecuencia, como la de una onda de radio?",
          answers: [
            { id: "a", text: "El decibelio" },
            { id: "b", text: "El julio" },
            { id: "c", text: "El newton" },
            { id: "d", text: "El hercio" },
          ],
          correctAnswer: "d",
          explanation:
            "En hercios, que cuentan las vibraciones por segundo. La unidad lleva el nombre del físico alemán Heinrich Hertz, que demostró la existencia de las ondas de radio.",
        },
        {
          id: 19,
          question: "¿Cuál es el material natural más duro?",
          answers: [
            { id: "a", text: "El cuarzo" },
            { id: "b", text: "El diamante" },
            { id: "c", text: "El granito" },
            { id: "d", text: "El rubí" },
          ],
          correctAnswer: "b",
          explanation:
            "El diamante. Está hecho solo de carbono, como la mina de un lápiz, pero sus átomos se ordenan de otra forma. Tiene la nota máxima, 10, en la escala de Mohs.",
        },
        {
          id: 20,
          question: "¿Qué mide la escala de Richter?",
          answers: [
            { id: "a", text: "La fuerza del viento" },
            { id: "b", text: "La altura de las olas" },
            { id: "c", text: "La fuerza de los terremotos" },
            { id: "d", text: "La dureza de los minerales" },
          ],
          correctAnswer: "c",
          explanation:
            "La fuerza de los terremotos, su magnitud. La creó el sismólogo estadounidense Charles Richter en 1935. Hoy los científicos usan sobre todo una escala más reciente, la de magnitud de momento.",
        },
      ],
    },
  },
};

export default [quizSciences] as TranslatedQuiz[];
