import type { TranslatedQuiz } from "./types";

/**
 * Drapeaux, deuxieme quiz : les nombres caches dans les drapeaux (etoiles,
 * bandes, couleurs) et quelques dates d'adoption.
 *
 * Mode estimation : le premier quiz Drapeaux est un qcm de reconnaissance,
 * celui-ci fait compter. Comme dans quiz-jo.ts, les petits nombres (5, 9, 12)
 * se jouent au nombre exact avec la tolerance de 5 %, les annees laissent de
 * la marge. Les 50 etoiles americaines sont deja dans quiz-geographie.ts : on
 * demande ici les bandes.
 */
export const quizDrapeauxChiffres: TranslatedQuiz = {
  slug: "quiz-drapeaux-chiffres",
  slugs: { en: "flags-numbers-quiz", fr: "quiz-drapeaux-chiffres", es: "quiz-banderas-cifras" },
  categorySlug: "geographie",
  subcategory: "Drapeaux",
  difficulty: "medium",
  coverImage: "/images/cover-drapeaux-chiffres.webp",
  gameType: "estimation",
  playCount: 4200,
  translations: {
    fr: {
      title: "Quiz drapeaux : étoiles, bandes et dates",
      description:
        "Combien d'étoiles, combien de bandes, quelle année ? Vingt nombres à deviner sur les drapeaux du monde, avec plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-chiffres-01.webp",
          question: "Combien de bandes rouges et blanches compte le drapeau des États-Unis ?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13 bandes, 7 rouges et 6 blanches. Elles rappellent les 13 colonies qui ont déclaré leur indépendance en 1776, alors que le nombre d'étoiles suit le nombre d'États.",
        },
        {
          id: 2,
          image: "/images/q-quiz-drapeaux-chiffres-02.webp",
          question: "Combien d'étoiles jaunes y a-t-il sur le drapeau de l'Union européenne ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 étoiles en cercle. Le nombre ne dépend pas du nombre de pays membres : le 12 est là comme symbole d'unité, et il n'a jamais changé.",
        },
        {
          id: 3,
          image: "/images/q-quiz-drapeaux-chiffres-03.webp",
          question: "Combien d'étoiles figurent sur le drapeau du Brésil ?",
          answers: [],
          correctAnswer: "27",
          correctValue: 27,
          explanation:
            "27 étoiles, une pour chacun des 26 États et une pour le district fédéral de Brasília. Elles reprennent le ciel de Rio au matin du 15 novembre 1889.",
        },
        {
          id: 4,
          question: "Combien d'étoiles jaunes compte le drapeau de la Chine ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5 étoiles : une grande et quatre petites tournées vers elle, en haut à gauche du fond rouge.",
        },
        {
          id: 5,
          question: "En quelle année le drapeau bleu, blanc, rouge est-il devenu le drapeau national de la France ?",
          answers: [],
          correctAnswer: "1794",
          correctValue: 1794,
          explanation:
            "En 1794, par un décret de la Convention du 15 février (27 pluviôse an II). Le texte fixe d'ailleurs l'ordre des bandes : le bleu côté mât, le blanc au milieu et le rouge au vent.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-chiffres-06.webp",
          question: "Selon la légende, en quelle année le drapeau du Danemark est-il tombé du ciel pendant une bataille ?",
          answers: [],
          correctAnswer: "1219",
          correctValue: 1219,
          explanation:
            "En 1219, pendant la bataille de Lyndanisse, dans l'actuelle Estonie. C'est une légende, mais le Dannebrog est bien reconnu comme le plus ancien drapeau national encore utilisé.",
        },
        {
          id: 7,
          image: "/images/q-quiz-drapeaux-chiffres-07.webp",
          question: "Combien de bandes horizontales bleues et blanches compte le drapeau de la Grèce ?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9 bandes. On dit souvent qu'elles correspondent aux neuf syllabes de la devise « Eleftheria i thanatos », qui veut dire « la liberté ou la mort ».",
        },
        {
          id: 8,
          question: "En quelle année l'Union Jack a-t-il pris sa forme actuelle, avec la croix de saint Patrick ?",
          answers: [],
          correctAnswer: "1801",
          correctValue: 1801,
          explanation:
            "Le 1er janvier 1801, au moment de l'union avec l'Irlande. On a ajouté la croix rouge en diagonale de saint Patrick aux croix de saint Georges et de saint André.",
        },
        {
          id: 9,
          question: "Combien de couleurs différentes compte le drapeau de l'Afrique du Sud ?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6 couleurs : vert, noir, blanc, jaune, rouge et bleu. Quand il a été adopté en 1994, c'était le seul drapeau national avec six couleurs dans son dessin de base.",
        },
        {
          id: 10,
          question: "Combien d'étoiles rouges y a-t-il sur le drapeau de la Nouvelle-Zélande ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4 étoiles rouges bordées de blanc, qui dessinent la Croix du Sud. C'est justement ce qui le distingue du drapeau australien, qui a des étoiles blanches.",
        },
        {
          id: 11,
          question: "Combien d'étoiles blanches figurent sur le drapeau de l'Australie ?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6 : une grande étoile sous l'Union Jack, pour la fédération, et les cinq étoiles de la Croix du Sud à droite.",
        },
        {
          id: 12,
          question: "Combien de rayons compte la roue bleue au centre du drapeau de l'Inde ?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24. Cette roue s'appelle l'Ashoka Chakra, d'après l'empereur Ashoka, qui l'avait fait graver sur ses colonnes.",
        },
        {
          id: 13,
          question: "Combien de bandes rouges et blanches compte le drapeau de la Malaisie ?",
          answers: [],
          correctAnswer: "14",
          correctValue: 14,
          explanation:
            "14, comme les 13 États du pays plus le gouvernement fédéral. L'étoile jaune a d'ailleurs 14 branches pour la même raison.",
        },
        {
          id: 14,
          question: "Combien d'étoiles blanches y a-t-il sur le drapeau du Venezuela ?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "8, en arc de cercle dans la bande bleue. Il y en avait 7 jusqu'en 2006, date à laquelle une huitième a été ajoutée.",
        },
        {
          id: 15,
          question: "Combien de pointes compte la feuille d'érable du drapeau du Canada ?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11. Le dessin a été simplifié exprès pour rester lisible quand le drapeau flotte au vent.",
        },
        {
          id: 16,
          question: "Combien de rayons a le soleil du drapeau des Philippines ?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "8, un pour chacune des huit provinces qui se sont soulevées les premières contre l'Espagne en 1896.",
        },
        {
          id: 17,
          question: "Combien de branches a l'étoile blanche du drapeau de la Jordanie ?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "7. Elle se trouve dans le triangle rouge, côté mât, et renvoie aux sept versets de la première sourate du Coran.",
        },
        {
          id: 18,
          question: "Combien de bandes horizontales compte le drapeau de l'Uruguay ?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9 : cinq blanches et quatre bleues, avec le soleil de Mai dans le coin en haut à gauche.",
        },
        {
          id: 19,
          question: "En quelle année le drapeau bleu aux douze étoiles a-t-il été adopté par le Conseil de l'Europe ?",
          answers: [],
          correctAnswer: "1955",
          correctValue: 1955,
          explanation:
            "En 1955. Les Communautés européennes, l'ancêtre de l'Union européenne, ne l'ont repris qu'en 1985, trente ans plus tard.",
        },
        {
          id: 20,
          question: "En quelle année une loi a-t-elle fait du disque rouge sur fond blanc le drapeau officiel du Japon ?",
          answers: [],
          correctAnswer: "1999",
          correctValue: 1999,
          explanation:
            "En 1999. Le drapeau était utilisé depuis bien longtemps, mais aucune loi ne l'avait encore rendu officiel.",
        },
      ],
    },
    en: {
      title: "Flags quiz: stars, stripes and dates",
      description:
        "How many stars, how many stripes, which year? Twenty numbers to guess about flags of the world, with higher or lower hints.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-chiffres-01.webp",
          question: "How many red and white stripes are there on the United States flag?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13 stripes, 7 red and 6 white. They stand for the 13 colonies that declared independence in 1776, while the stars follow the number of states.",
        },
        {
          id: 2,
          image: "/images/q-quiz-drapeaux-chiffres-02.webp",
          question: "How many yellow stars are on the flag of the European Union?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 stars in a circle. The number has nothing to do with how many countries are members: 12 is there as a symbol of unity, and it has never changed.",
        },
        {
          id: 3,
          image: "/images/q-quiz-drapeaux-chiffres-03.webp",
          question: "How many stars are on the flag of Brazil?",
          answers: [],
          correctAnswer: "27",
          correctValue: 27,
          explanation:
            "27 stars, one for each of the 26 states and one for the Federal District of Brasília. They show the sky over Rio on the morning of 15 November 1889.",
        },
        {
          id: 4,
          question: "How many yellow stars are on the flag of China?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5 stars: one big one and four small ones turned towards it, in the top left corner of the red field.",
        },
        {
          id: 5,
          question: "In what year did the blue, white and red tricolour become the national flag of France?",
          answers: [],
          correctAnswer: "1794",
          correctValue: 1794,
          explanation:
            "In 1794, through a decree of the National Convention on 15 February. The decree even set the order of the bands: blue by the pole, white in the middle and red on the outside.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-chiffres-06.webp",
          question: "According to legend, in what year did the Danish flag fall from the sky during a battle?",
          answers: [],
          correctAnswer: "1219",
          correctValue: 1219,
          explanation:
            "In 1219, at the Battle of Lyndanisse, in what is now Estonia. It's a legend, but the Dannebrog is recognised as the oldest national flag still in use.",
        },
        {
          id: 7,
          image: "/images/q-quiz-drapeaux-chiffres-07.webp",
          question: "How many horizontal blue and white stripes are on the flag of Greece?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9 stripes. They're often said to match the nine syllables of the motto \"Eleftheria i thanatos\", which means \"freedom or death\".",
        },
        {
          id: 8,
          question: "In what year did the Union Jack take its current form, with the cross of St Patrick?",
          answers: [],
          correctAnswer: "1801",
          correctValue: 1801,
          explanation:
            "On 1 January 1801, when Ireland joined the union. The red diagonal cross of St Patrick was added to the crosses of St George and St Andrew.",
        },
        {
          id: 9,
          question: "How many different colours are on the flag of South Africa?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6 colours: green, black, white, yellow, red and blue. When it was adopted in 1994, it was the only national flag with six colours in its basic design.",
        },
        {
          id: 10,
          question: "How many red stars are on the flag of New Zealand?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4 red stars with a white border, forming the Southern Cross. That's the easy way to tell it apart from the Australian flag, whose stars are white.",
        },
        {
          id: 11,
          question: "How many white stars are on the flag of Australia?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6: one large star under the Union Jack, for the federation, and the five stars of the Southern Cross on the right.",
        },
        {
          id: 12,
          question: "How many spokes does the blue wheel in the middle of India's flag have?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24. The wheel is called the Ashoka Chakra, after Emperor Ashoka, who had it carved on his pillars.",
        },
        {
          id: 13,
          question: "How many red and white stripes are on the flag of Malaysia?",
          answers: [],
          correctAnswer: "14",
          correctValue: 14,
          explanation:
            "14, for the country's 13 states plus the federal government. The yellow star has 14 points for the same reason.",
        },
        {
          id: 14,
          question: "How many white stars are on the flag of Venezuela?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "8, in an arc across the blue stripe. There were 7 until 2006, when an eighth was added.",
        },
        {
          id: 15,
          question: "How many points does the maple leaf on Canada's flag have?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11. The design was simplified on purpose so it stays readable when the flag is flying in the wind.",
        },
        {
          id: 16,
          question: "How many rays does the sun on the flag of the Philippines have?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "8, one for each of the eight provinces that were first to rise up against Spain in 1896.",
        },
        {
          id: 17,
          question: "How many points does the white star on Jordan's flag have?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "7. It sits in the red triangle by the hoist and refers to the seven verses of the first chapter of the Quran.",
        },
        {
          id: 18,
          question: "How many horizontal stripes are on the flag of Uruguay?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9: five white and four blue, with the Sun of May in the top left corner.",
        },
        {
          id: 19,
          question: "In what year did the Council of Europe adopt the blue flag with twelve stars?",
          answers: [],
          correctAnswer: "1955",
          correctValue: 1955,
          explanation:
            "1955. The European Communities, the forerunner of the EU, only took it up in 1985, thirty years later.",
        },
        {
          id: 20,
          question: "In what year did a law make the red disc on white the official flag of Japan?",
          answers: [],
          correctAnswer: "1999",
          correctValue: 1999,
          explanation:
            "1999. The flag had been in use for a very long time, but no law had made it official until then.",
        },
      ],
    },
    es: {
      title: "Quiz de banderas: estrellas, franjas y fechas",
      description:
        "¿Cuántas estrellas, cuántas franjas, qué año? Veinte números que adivinar sobre las banderas del mundo, con pistas de más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-chiffres-01.webp",
          question: "¿Cuántas franjas rojas y blancas tiene la bandera de Estados Unidos?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13 franjas, 7 rojas y 6 blancas. Recuerdan las 13 colonias que declararon la independencia en 1776, mientras que las estrellas van con el número de estados.",
        },
        {
          id: 2,
          image: "/images/q-quiz-drapeaux-chiffres-02.webp",
          question: "¿Cuántas estrellas amarillas hay en la bandera de la Unión Europea?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 estrellas en círculo. El número no depende de cuántos países son miembros: el 12 está ahí como símbolo de unidad y nunca ha cambiado.",
        },
        {
          id: 3,
          image: "/images/q-quiz-drapeaux-chiffres-03.webp",
          question: "¿Cuántas estrellas tiene la bandera de Brasil?",
          answers: [],
          correctAnswer: "27",
          correctValue: 27,
          explanation:
            "27 estrellas, una por cada uno de los 26 estados y otra por el Distrito Federal de Brasilia. Reproducen el cielo de Río la mañana del 15 de noviembre de 1889.",
        },
        {
          id: 4,
          question: "¿Cuántas estrellas amarillas tiene la bandera de China?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5 estrellas: una grande y cuatro pequeñas orientadas hacia ella, arriba a la izquierda sobre el fondo rojo.",
        },
        {
          id: 5,
          question: "¿En qué año la bandera azul, blanca y roja pasó a ser la bandera nacional de Francia?",
          answers: [],
          correctAnswer: "1794",
          correctValue: 1794,
          explanation:
            "En 1794, por un decreto de la Convención del 15 de febrero. El texto fija además el orden de las franjas: el azul junto al mástil, el blanco en medio y el rojo al viento.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-chiffres-06.webp",
          question: "Según la leyenda, ¿en qué año cayó del cielo la bandera de Dinamarca durante una batalla?",
          answers: [],
          correctAnswer: "1219",
          correctValue: 1219,
          explanation:
            "En 1219, en la batalla de Lyndanisse, en la actual Estonia. Es una leyenda, pero el Dannebrog está reconocido como la bandera nacional más antigua que se sigue usando.",
        },
        {
          id: 7,
          image: "/images/q-quiz-drapeaux-chiffres-07.webp",
          question: "¿Cuántas franjas horizontales azules y blancas tiene la bandera de Grecia?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9 franjas. Se suele decir que corresponden a las nueve sílabas del lema «Eleftheria i thanatos», que significa «libertad o muerte».",
        },
        {
          id: 8,
          question: "¿En qué año tomó la Union Jack su forma actual, con la cruz de san Patricio?",
          answers: [],
          correctAnswer: "1801",
          correctValue: 1801,
          explanation:
            "El 1 de enero de 1801, con la unión de Irlanda. Se añadió la cruz roja en diagonal de san Patricio a las cruces de san Jorge y san Andrés.",
        },
        {
          id: 9,
          question: "¿Cuántos colores distintos tiene la bandera de Sudáfrica?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6 colores: verde, negro, blanco, amarillo, rojo y azul. Cuando se adoptó en 1994, era la única bandera nacional con seis colores en su diseño básico.",
        },
        {
          id: 10,
          question: "¿Cuántas estrellas rojas hay en la bandera de Nueva Zelanda?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4 estrellas rojas con borde blanco, que forman la Cruz del Sur. Justo eso la distingue de la bandera australiana, que tiene las estrellas blancas.",
        },
        {
          id: 11,
          question: "¿Cuántas estrellas blancas hay en la bandera de Australia?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6: una estrella grande bajo la Union Jack, por la federación, y las cinco estrellas de la Cruz del Sur a la derecha.",
        },
        {
          id: 12,
          question: "¿Cuántos radios tiene la rueda azul del centro de la bandera de la India?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24. La rueda se llama Ashoka Chakra, por el emperador Ashoka, que la mandó grabar en sus columnas.",
        },
        {
          id: 13,
          question: "¿Cuántas franjas rojas y blancas tiene la bandera de Malasia?",
          answers: [],
          correctAnswer: "14",
          correctValue: 14,
          explanation:
            "14, por los 13 estados del país más el gobierno federal. La estrella amarilla tiene además 14 puntas por el mismo motivo.",
        },
        {
          id: 14,
          question: "¿Cuántas estrellas blancas hay en la bandera de Venezuela?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "8, en arco sobre la franja azul. Había 7 hasta 2006, cuando se añadió la octava.",
        },
        {
          id: 15,
          question: "¿Cuántas puntas tiene la hoja de arce de la bandera de Canadá?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "11. El dibujo se simplificó a propósito para que se viera bien cuando la bandera ondea con el viento.",
        },
        {
          id: 16,
          question: "¿Cuántos rayos tiene el sol de la bandera de Filipinas?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "8, uno por cada una de las ocho provincias que se alzaron primero contra España en 1896.",
        },
        {
          id: 17,
          question: "¿Cuántas puntas tiene la estrella blanca de la bandera de Jordania?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "7. Está en el triángulo rojo, junto al mástil, y remite a los siete versículos de la primera sura del Corán.",
        },
        {
          id: 18,
          question: "¿Cuántas franjas horizontales tiene la bandera de Uruguay?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9: cinco blancas y cuatro azules, con el Sol de Mayo en la esquina superior izquierda.",
        },
        {
          id: 19,
          question: "¿En qué año adoptó el Consejo de Europa la bandera azul con doce estrellas?",
          answers: [],
          correctAnswer: "1955",
          correctValue: 1955,
          explanation:
            "En 1955. Las Comunidades Europeas, antecesoras de la Unión Europea, no la hicieron suya hasta 1985, treinta años después.",
        },
        {
          id: 20,
          question: "¿En qué año una ley convirtió el disco rojo sobre fondo blanco en la bandera oficial de Japón?",
          answers: [],
          correctAnswer: "1999",
          correctValue: 1999,
          explanation:
            "En 1999. La bandera se usaba desde hacía mucho tiempo, pero ninguna ley la había hecho oficial.",
        },
      ],
    },
  },
};

export default [quizDrapeauxChiffres] as TranslatedQuiz[];
