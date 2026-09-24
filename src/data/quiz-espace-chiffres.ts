import type { TranslatedQuiz } from "./types";

/**
 * Quiz sur l'espace en mode estimation : les grands chiffres de l'espace.
 *
 * Le joueur saisit un nombre, avec une tolérance de 5 % et cinq essais
 * (cf. quiz-jo.ts). Les petits nombres (8 planètes, 12 marcheurs lunaires,
 * 10 heures pour un jour de Jupiter) se jouent au nombre exact, les
 * distances et les vitesses laissent de la marge. Les valeurs retenues sont
 * les moyennes arrondies que donnent la NASA et l'ESA.
 */
export const quizEspaceChiffres: TranslatedQuiz = {
  slug: "quiz-espace-chiffres",
  slugs: { en: "space-numbers-quiz", fr: "quiz-espace-chiffres", es: "quiz-espacio-cifras" },
  categorySlug: "culture-generale",
  subcategory: "Espace",
  difficulty: "medium",
  coverImage: "/images/cover-espace-chiffres.webp",
  gameType: "estimation",
  playCount: 4800,
  translations: {
    fr: {
      title: "Estimation : l'espace en chiffres",
      description:
        "Dix nombres à trouver sur l'espace : la distance de la Lune, la vitesse de l'ISS, la chaleur du Soleil… Tu proposes, on te dit plus ou moins.",
      questions: [
        {
          id: 1,
          question: "Combien de planètes compte le Système solaire ?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Huit : Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune.",
        },
        {
          id: 2,
          image: "/images/q-espace-chiffres-02.webp",
          question: "Combien d'astronautes ont marché sur la Lune ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "Douze, tous américains, pendant six missions Apollo entre 1969 et 1972. Personne n'y est retourné depuis.",
        },
        {
          id: 3,
          image: "/images/q-espace-chiffres-03.webp",
          question: "Combien de jours terrestres dure une année sur Mars ?",
          answers: [],
          correctAnswer: "687",
          correctValue: 687,
          explanation:
            "687 jours. Mars est plus loin du Soleil que la Terre, du coup elle met presque deux fois plus de temps pour en faire le tour.",
        },
        {
          id: 4,
          image: "/images/q-espace-chiffres-04.webp",
          question: "À combien de kilomètres de la Terre se trouve la Lune, en moyenne ?",
          answers: [],
          correctAnswer: "384 400",
          correctValue: 384400,
          explanation:
            "Environ 384 400 km. Ça change un peu au cours du mois, parce que l'orbite de la Lune n'est pas un cercle parfait.",
        },
        {
          id: 5,
          question: "Quelle est la température à la surface du Soleil, en degrés Celsius ?",
          answers: [],
          correctAnswer: "5 500",
          correctValue: 5500,
          explanation:
            "Autour de 5 500 °C. Le cœur du Soleil est bien plus chaud, à environ 15 millions de degrés.",
        },
        {
          id: 6,
          question: "Quel est le diamètre de la Terre, en kilomètres ?",
          answers: [],
          correctAnswer: "12 742",
          correctValue: 12742,
          explanation:
            "Environ 12 742 km en moyenne. La Terre est un peu aplatie aux pôles, donc elle est légèrement plus large à l'équateur.",
        },
        {
          id: 7,
          question: "Combien de Terres pourrait-on faire tenir dans le Soleil ?",
          answers: [],
          correctAnswer: "1 300 000",
          correctValue: 1300000,
          explanation:
            "À peu près 1,3 million. Le diamètre du Soleil fait environ 109 fois celui de la Terre.",
        },
        {
          id: 8,
          image: "/images/q-espace-chiffres-08.webp",
          question: "À quelle vitesse la Station spatiale internationale tourne-t-elle autour de la Terre, en km/h ?",
          answers: [],
          correctAnswer: "28 000",
          correctValue: 28000,
          explanation:
            "Environ 28 000 km/h. Elle fait le tour de la Terre en un peu plus d'une heure et demie, soit à peu près 16 fois par jour.",
        },
        {
          id: 9,
          question: "À quelle altitude vole la Station spatiale internationale, en kilomètres ?",
          answers: [],
          correctAnswer: "400",
          correctValue: 400,
          explanation:
            "Autour de 400 km. C'est à peu près la distance entre Paris et Nantes, mais à la verticale.",
        },
        {
          id: 10,
          image: "/images/q-espace-chiffres-10.webp",
          question: "Combien d'heures dure un jour sur Jupiter, arrondi à l'heure ?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "À peu près 10 heures. Jupiter est la plus grosse planète, et c'est aussi celle qui tourne le plus vite sur elle-même.",
        },
      ],
    },
    en: {
      title: "Estimation: space by the numbers",
      description:
        "Ten numbers to find about space: the distance to the Moon, the speed of the ISS, how hot the Sun is... You guess, we say higher or lower.",
      questions: [
        {
          id: 1,
          question: "How many planets are in the Solar System?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Eight: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.",
        },
        {
          id: 2,
          image: "/images/q-espace-chiffres-02.webp",
          question: "How many astronauts have walked on the Moon?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "Twelve, all American, over six Apollo missions between 1969 and 1972. Nobody has been back since.",
        },
        {
          id: 3,
          image: "/images/q-espace-chiffres-03.webp",
          question: "How many Earth days does a year on Mars last?",
          answers: [],
          correctAnswer: "687",
          correctValue: 687,
          explanation:
            "687 days. Mars is further from the Sun than Earth, so it takes almost twice as long to go around it.",
        },
        {
          id: 4,
          image: "/images/q-espace-chiffres-04.webp",
          question: "On average, how many kilometres away from Earth is the Moon?",
          answers: [],
          correctAnswer: "384,400",
          correctValue: 384400,
          explanation:
            "About 384,400 km. It shifts a little over the month, because the Moon's orbit isn't a perfect circle.",
        },
        {
          id: 5,
          question: "What is the temperature at the surface of the Sun, in degrees Celsius?",
          answers: [],
          correctAnswer: "5,500",
          correctValue: 5500,
          explanation:
            "Around 5,500 °C. The core of the Sun is far hotter, at about 15 million degrees.",
        },
        {
          id: 6,
          question: "What is the diameter of the Earth, in kilometres?",
          answers: [],
          correctAnswer: "12,742",
          correctValue: 12742,
          explanation:
            "About 12,742 km on average. The Earth is slightly flattened at the poles, so it's a little wider at the equator.",
        },
        {
          id: 7,
          question: "How many Earths could fit inside the Sun?",
          answers: [],
          correctAnswer: "1,300,000",
          correctValue: 1300000,
          explanation:
            "Roughly 1.3 million. The Sun's diameter is about 109 times the Earth's.",
        },
        {
          id: 8,
          image: "/images/q-espace-chiffres-08.webp",
          question: "How fast does the International Space Station travel around the Earth, in km/h?",
          answers: [],
          correctAnswer: "28,000",
          correctValue: 28000,
          explanation:
            "About 28,000 km/h. It goes around the Earth in just over an hour and a half, so roughly 16 times a day.",
        },
        {
          id: 9,
          question: "At what altitude does the International Space Station fly, in kilometres?",
          answers: [],
          correctAnswer: "400",
          correctValue: 400,
          explanation:
            "Around 400 km. That's about the distance from London to Newcastle, but straight up.",
        },
        {
          id: 10,
          image: "/images/q-espace-chiffres-10.webp",
          question: "How many hours does a day on Jupiter last, to the nearest hour?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "About 10 hours. Jupiter is the biggest planet, and it's also the one that spins the fastest.",
        },
      ],
    },
    es: {
      title: "Estimación: el espacio en cifras",
      description:
        "Diez números sobre el espacio: la distancia a la Luna, la velocidad de la ISS, el calor del Sol... Tú propones y te decimos si es más o menos.",
      questions: [
        {
          id: 1,
          question: "¿Cuántos planetas tiene el sistema solar?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Ocho: Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno.",
        },
        {
          id: 2,
          image: "/images/q-espace-chiffres-02.webp",
          question: "¿Cuántos astronautas han caminado sobre la Luna?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "Doce, todos estadounidenses, en seis misiones Apolo entre 1969 y 1972. Nadie ha vuelto desde entonces.",
        },
        {
          id: 3,
          image: "/images/q-espace-chiffres-03.webp",
          question: "¿Cuántos días terrestres dura un año en Marte?",
          answers: [],
          correctAnswer: "687",
          correctValue: 687,
          explanation:
            "687 días. Marte está más lejos del Sol que la Tierra, así que tarda casi el doble en darle la vuelta.",
        },
        {
          id: 4,
          image: "/images/q-espace-chiffres-04.webp",
          question: "¿A cuántos kilómetros de la Tierra está la Luna, de media?",
          answers: [],
          correctAnswer: "384 400",
          correctValue: 384400,
          explanation:
            "Unos 384 400 km. Cambia un poco a lo largo del mes, porque la órbita de la Luna no es un círculo perfecto.",
        },
        {
          id: 5,
          question: "¿Qué temperatura hay en la superficie del Sol, en grados Celsius?",
          answers: [],
          correctAnswer: "5500",
          correctValue: 5500,
          explanation:
            "Alrededor de 5500 °C. El núcleo del Sol está mucho más caliente, a unos 15 millones de grados.",
        },
        {
          id: 6,
          question: "¿Cuál es el diámetro de la Tierra, en kilómetros?",
          answers: [],
          correctAnswer: "12 742",
          correctValue: 12742,
          explanation:
            "Unos 12 742 km de media. La Tierra está un poco achatada en los polos, así que es algo más ancha en el ecuador.",
        },
        {
          id: 7,
          question: "¿Cuántas Tierras cabrían dentro del Sol?",
          answers: [],
          correctAnswer: "1 300 000",
          correctValue: 1300000,
          explanation:
            "Más o menos 1,3 millones. El diámetro del Sol es unas 109 veces el de la Tierra.",
        },
        {
          id: 8,
          image: "/images/q-espace-chiffres-08.webp",
          question: "¿A qué velocidad gira la Estación Espacial Internacional alrededor de la Tierra, en km/h?",
          answers: [],
          correctAnswer: "28 000",
          correctValue: 28000,
          explanation:
            "Unos 28 000 km/h. Da la vuelta a la Tierra en algo más de hora y media, o sea unas 16 veces al día.",
        },
        {
          id: 9,
          question: "¿A qué altitud vuela la Estación Espacial Internacional, en kilómetros?",
          answers: [],
          correctAnswer: "400",
          correctValue: 400,
          explanation:
            "Alrededor de 400 km. Es más o menos la distancia entre Madrid y Valencia en coche, pero hacia arriba.",
        },
        {
          id: 10,
          image: "/images/q-espace-chiffres-10.webp",
          question: "¿Cuántas horas dura un día en Júpiter, redondeando a la hora?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "Unas 10 horas. Júpiter es el planeta más grande y también el que gira más rápido sobre sí mismo.",
        },
      ],
    },
  },
};

export default [quizEspaceChiffres] as TranslatedQuiz[];
