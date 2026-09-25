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
        "Vingt nombres à trouver sur l'espace : la distance de la Lune, la vitesse de l'ISS, la chaleur du Soleil… Tu proposes, on te dit plus ou moins.",
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
        {
          id: 11,
          question: "Combien de jours met Mercure pour faire le tour du Soleil ?",
          answers: [],
          correctAnswer: "88",
          correctValue: 88,
          explanation:
            "88 jours. C'est la planète la plus proche du Soleil, du coup c'est aussi celle qui a l'année la plus courte.",
        },
        {
          id: 12,
          question: "Combien d'années terrestres dure une année sur Jupiter, arrondi à l'année ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "Environ 12 ans (11,9 pour être précis). Jupiter est cinq fois plus loin du Soleil que la Terre.",
        },
        {
          id: 13,
          question: "Combien d'années terrestres met Neptune pour faire un tour complet du Soleil ?",
          answers: [],
          correctAnswer: "165",
          correctValue: 165,
          explanation:
            "Environ 165 ans. Depuis sa découverte en 1846, Neptune n'a bouclé qu'un seul tour, terminé en 2011.",
        },
        {
          id: 14,
          question: "En quelle année la planète Neptune a-t-elle été découverte ?",
          answers: [],
          correctAnswer: "1846",
          correctValue: 1846,
          explanation:
            "En 1846. Le Français Urbain Le Verrier avait calculé sa position grâce aux perturbations de l'orbite d'Uranus, et l'Allemand Johann Galle l'a vue au télescope à l'endroit prévu.",
        },
        {
          id: 15,
          question: "À quelle altitude, en kilomètres, place-t-on d'habitude la limite de l'espace ?",
          answers: [],
          correctAnswer: "100",
          correctValue: 100,
          explanation:
            "À 100 km. C'est la ligne de Kármán, retenue par la Fédération aéronautique internationale. L'armée et la NASA, aux États-Unis, comptent plutôt à partir de 80 km.",
        },
        {
          id: 16,
          question: "Quel est le diamètre de la Lune, en kilomètres ?",
          answers: [],
          correctAnswer: "3 474",
          correctValue: 3474,
          explanation:
            "Environ 3 474 km, un peu plus d'un quart du diamètre de la Terre.",
        },
        {
          id: 17,
          question: "Combien de fois pèse-t-on moins lourd sur la Lune que sur Terre ?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Environ 6 fois. La gravité de la Lune vaut à peu près un sixième de celle de la Terre, d'où les grands bonds des astronautes d'Apollo.",
        },
        {
          id: 18,
          question: "Quelle vitesse faut-il atteindre pour échapper à l'attraction de la Terre, en km/h ?",
          answers: [],
          correctAnswer: "40 000",
          correctValue: 40000,
          explanation:
            "Environ 40 000 km/h, soit 11,2 km par seconde. C'est ce qu'on appelle la vitesse de libération.",
        },
        {
          id: 19,
          question: "Combien de planètes naines l'Union astronomique internationale reconnaît-elle officiellement ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinq : Cérès, Pluton, Éris, Hauméa et Makémaké. D'autres objets pourraient en être, mais ils n'ont pas été classés officiellement.",
        },
        {
          id: 20,
          question: "Quel âge a l'Univers, en millions d'années ?",
          answers: [],
          correctAnswer: "13 800",
          correctValue: 13800,
          explanation:
            "Environ 13 800 millions d'années, donc 13,8 milliards. Ce chiffre vient surtout des mesures du satellite européen Planck.",
        },
      ],
    },
    en: {
      title: "Estimation: space by the numbers",
      description:
        "Twenty numbers to find about space: the distance to the Moon, the speed of the ISS, how hot the Sun is... You guess, we say higher or lower.",
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
        {
          id: 11,
          question: "How many days does Mercury take to go around the Sun?",
          answers: [],
          correctAnswer: "88",
          correctValue: 88,
          explanation:
            "88 days. It's the closest planet to the Sun, so it also has the shortest year.",
        },
        {
          id: 12,
          question: "How many Earth years does one year on Jupiter last, to the nearest year?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "About 12 years (11.9 to be exact). Jupiter is five times farther from the Sun than Earth is.",
        },
        {
          id: 13,
          question: "How many Earth years does Neptune take to complete one orbit of the Sun?",
          answers: [],
          correctAnswer: "165",
          correctValue: 165,
          explanation:
            "About 165 years. Since it was discovered in 1846, Neptune has only finished one lap, completed in 2011.",
        },
        {
          id: 14,
          question: "In what year was the planet Neptune discovered?",
          answers: [],
          correctAnswer: "1846",
          correctValue: 1846,
          explanation:
            "In 1846. The French mathematician Urbain Le Verrier worked out where it should be from the way Uranus's orbit was disturbed, and the German astronomer Johann Galle spotted it right there.",
        },
        {
          id: 15,
          question: "At what altitude, in kilometres, is the edge of space usually placed?",
          answers: [],
          correctAnswer: "100",
          correctValue: 100,
          explanation:
            "At 100 km. That's the Kármán line, used by the World Air Sports Federation (FAI). In the United States, the military and NASA tend to count from 80 km instead.",
        },
        {
          id: 16,
          question: "What is the diameter of the Moon, in kilometres?",
          answers: [],
          correctAnswer: "3,474",
          correctValue: 3474,
          explanation:
            "About 3,474 km, a little over a quarter of Earth's diameter.",
        },
        {
          id: 17,
          question: "How many times lighter do you weigh on the Moon than on Earth?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "About 6 times. The Moon's gravity is roughly one sixth of Earth's, which is why the Apollo astronauts bounced around like that.",
        },
        {
          id: 18,
          question: "What speed do you need to escape Earth's gravity, in km/h?",
          answers: [],
          correctAnswer: "40,000",
          correctValue: 40000,
          explanation:
            "About 40,000 km/h, or 11.2 km per second. This is called escape velocity.",
        },
        {
          id: 19,
          question: "How many dwarf planets does the International Astronomical Union officially recognise?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Five: Ceres, Pluto, Eris, Haumea and Makemake. Other objects probably qualify, but they haven't been officially classified.",
        },
        {
          id: 20,
          question: "How old is the universe, in millions of years?",
          answers: [],
          correctAnswer: "13,800",
          correctValue: 13800,
          explanation:
            "About 13,800 million years, so 13.8 billion. The figure mostly comes from measurements made by the European Planck satellite.",
        },
      ],
    },
    es: {
      title: "Estimación: el espacio en cifras",
      description:
        "Veinte números sobre el espacio: la distancia a la Luna, la velocidad de la ISS, el calor del Sol... Tú propones y te decimos si es más o menos.",
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
        {
          id: 11,
          question: "¿Cuántos días tarda Mercurio en dar la vuelta al Sol?",
          answers: [],
          correctAnswer: "88",
          correctValue: 88,
          explanation:
            "88 días. Es el planeta más cercano al Sol, así que también es el que tiene el año más corto.",
        },
        {
          id: 12,
          question: "¿Cuántos años terrestres dura un año en Júpiter, redondeando?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "Unos 12 años (11,9 para ser exactos). Júpiter está cinco veces más lejos del Sol que la Tierra.",
        },
        {
          id: 13,
          question: "¿Cuántos años terrestres tarda Neptuno en dar una vuelta completa al Sol?",
          answers: [],
          correctAnswer: "165",
          correctValue: 165,
          explanation:
            "Unos 165 años. Desde que se descubrió en 1846, Neptuno solo ha completado una vuelta, que terminó en 2011.",
        },
        {
          id: 14,
          question: "¿En qué año se descubrió el planeta Neptuno?",
          answers: [],
          correctAnswer: "1846",
          correctValue: 1846,
          explanation:
            "En 1846. El francés Urbain Le Verrier calculó su posición a partir de las perturbaciones de la órbita de Urano, y el alemán Johann Galle lo vio con el telescopio justo donde había dicho.",
        },
        {
          id: 15,
          question: "¿A qué altitud, en kilómetros, se suele situar el límite del espacio?",
          answers: [],
          correctAnswer: "100",
          correctValue: 100,
          explanation:
            "A 100 km. Es la línea de Kármán, la que usa la Federación Aeronáutica Internacional. En Estados Unidos, el ejército y la NASA suelen contar a partir de 80 km.",
        },
        {
          id: 16,
          question: "¿Cuál es el diámetro de la Luna, en kilómetros?",
          answers: [],
          correctAnswer: "3474",
          correctValue: 3474,
          explanation:
            "Unos 3474 km, algo más de la cuarta parte del diámetro de la Tierra.",
        },
        {
          id: 17,
          question: "¿Cuántas veces menos se pesa en la Luna que en la Tierra?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Unas 6 veces. La gravedad de la Luna es más o menos la sexta parte de la terrestre, de ahí los saltos de los astronautas del Apolo.",
        },
        {
          id: 18,
          question: "¿Qué velocidad hay que alcanzar para escapar de la gravedad de la Tierra, en km/h?",
          answers: [],
          correctAnswer: "40 000",
          correctValue: 40000,
          explanation:
            "Unos 40 000 km/h, es decir, 11,2 km por segundo. Es lo que se llama velocidad de escape.",
        },
        {
          id: 19,
          question: "¿Cuántos planetas enanos reconoce oficialmente la Unión Astronómica Internacional?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinco: Ceres, Plutón, Eris, Haumea y Makemake. Hay otros objetos que podrían serlo, pero no se han clasificado oficialmente.",
        },
        {
          id: 20,
          question: "¿Qué edad tiene el universo, en millones de años?",
          answers: [],
          correctAnswer: "13 800",
          correctValue: 13800,
          explanation:
            "Unos 13 800 millones de años. La cifra sale sobre todo de las mediciones del satélite europeo Planck.",
        },
      ],
    },
  },
};

export default [quizEspaceChiffres] as TranslatedQuiz[];
