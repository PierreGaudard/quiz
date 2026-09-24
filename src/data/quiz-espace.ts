import type { TranslatedQuiz } from "./types";

/**
 * Quiz sur l'espace en mode vrai-faux : planètes, Lune, conquête spatiale.
 *
 * Comme dans quiz-europe.ts, « vrai » porte l'id « a » et « faux » l'id « b »
 * dans les trois langues (VraiFauxPlayer repère la réponse par l'id). Cinq
 * affirmations vraies, cinq fausses, dont des idées reçues courantes (la
 * Muraille de Chine vue de la Lune, Saturne seule planète à anneaux).
 */
export const quizEspace: TranslatedQuiz = {
  slug: "quiz-espace",
  slugs: { en: "space-quiz", fr: "quiz-espace", es: "quiz-espacio" },
  categorySlug: "culture-generale",
  subcategory: "Espace",
  difficulty: "easy",
  coverImage: "/images/sub-espace.webp",
  gameType: "vrai-faux",
  playCount: 8200,
  translations: {
    fr: {
      title: "Vrai ou faux : l'espace et les planètes",
      description:
        "Dix affirmations sur les planètes, la Lune et la conquête spatiale. À toi de dire lesquelles sont vraies.",
      questions: [
        {
          id: 1,
          image: "/images/q-espace-01.webp",
          question: "Jupiter est la plus grande planète du Système solaire.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Jupiter est tellement grosse qu'on pourrait y faire rentrer toutes les autres planètes réunies, et même plus de mille Terres.",
        },
        {
          id: 2,
          question: "La Lune est plus grosse que la planète Mercure.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Mercure fait environ 4 880 km de diamètre, la Lune environ 3 475 km. Mercure est la plus petite planète, mais elle reste plus grosse que notre satellite.",
        },
        {
          id: 3,
          image: "/images/q-espace-03.webp",
          question: "Neil Armstrong a été le premier homme à marcher sur la Lune, en 1969.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'était pendant la mission Apollo 11, en juillet 1969. Buzz Aldrin l'a rejoint quelques minutes après.",
        },
        {
          id: 4,
          question: "Mercure, la planète la plus proche du Soleil, est aussi la plus chaude.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, c'est Vénus. Son atmosphère très épaisse retient la chaleur, et il y fait environ 460 °C en permanence. Mercure, qui n'a presque pas d'atmosphère, gèle la nuit.",
        },
        {
          id: 5,
          image: "/images/q-espace-05.webp",
          question: "Pluton est toujours considérée comme une planète.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Depuis 2006, l'Union astronomique internationale la classe comme planète naine. Le Système solaire compte donc huit planètes.",
        },
        {
          id: 6,
          question: "La lumière du Soleil met environ 8 minutes pour arriver sur Terre.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, 8 minutes et 20 secondes à peu près. Du coup, quand on regarde le Soleil, on le voit tel qu'il était il y a 8 minutes.",
        },
        {
          id: 7,
          question: "Mars a deux lunes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Elles s'appellent Phobos et Déimos, et elles sont toutes petites : Phobos fait moins de 30 km de long.",
        },
        {
          id: 8,
          question: "On peut voir la Grande Muraille de Chine à l'œil nu depuis la Lune.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. La muraille est très longue mais trop étroite, quelques mètres de large, et de la même couleur que le sol. Aucun astronaute ne l'a vue depuis la Lune.",
        },
        {
          id: 9,
          image: "/images/q-espace-09.webp",
          question: "Le premier humain à être allé dans l'espace est Youri Gagarine, en 1961.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Le cosmonaute soviétique a fait un tour de la Terre le 12 avril 1961, à bord de Vostok 1. Le vol a duré 108 minutes.",
        },
        {
          id: 10,
          image: "/images/q-espace-10.webp",
          question: "Saturne est la seule planète du Système solaire à avoir des anneaux.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Jupiter, Uranus et Neptune en ont aussi, mais ils sont fins et sombres, donc bien moins visibles que ceux de Saturne.",
        },
      ],
    },
    en: {
      title: "True or False: space and the planets",
      description:
        "Ten statements about the planets, the Moon and space exploration. Your job is to say which ones are true.",
      questions: [
        {
          id: 1,
          image: "/images/q-espace-01.webp",
          question: "Jupiter is the largest planet in the Solar System.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Jupiter is so big that all the other planets put together would fit inside it, and so would more than a thousand Earths.",
        },
        {
          id: 2,
          question: "The Moon is bigger than the planet Mercury.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Mercury is about 4,880 km across and the Moon about 3,475 km. Mercury is the smallest planet, but it's still bigger than our Moon.",
        },
        {
          id: 3,
          image: "/images/q-espace-03.webp",
          question: "Neil Armstrong was the first person to walk on the Moon, in 1969.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It was during the Apollo 11 mission, in July 1969. Buzz Aldrin joined him a few minutes later.",
        },
        {
          id: 4,
          question: "Mercury, the planet closest to the Sun, is also the hottest.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's Venus. Its very thick atmosphere traps the heat, and it sits at around 460 °C all the time. Mercury has almost no atmosphere, so its nights are freezing.",
        },
        {
          id: 5,
          image: "/images/q-espace-05.webp",
          question: "Pluto is still classed as a planet.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Since 2006 the International Astronomical Union has classed it as a dwarf planet. That leaves the Solar System with eight planets.",
        },
        {
          id: 6,
          question: "Sunlight takes about 8 minutes to reach the Earth.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, roughly 8 minutes and 20 seconds. So when you look at the Sun, you're seeing it as it was 8 minutes ago.",
        },
        {
          id: 7,
          question: "Mars has two moons.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. They're called Phobos and Deimos, and they're tiny: Phobos is less than 30 km long.",
        },
        {
          id: 8,
          question: "You can see the Great Wall of China with the naked eye from the Moon.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The wall is very long but far too narrow, just a few metres wide, and it's the same colour as the ground around it. No astronaut has ever seen it from the Moon.",
        },
        {
          id: 9,
          image: "/images/q-espace-09.webp",
          question: "The first human in space was Yuri Gagarin, in 1961.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The Soviet cosmonaut went once round the Earth on 12 April 1961, aboard Vostok 1. The flight lasted 108 minutes.",
        },
        {
          id: 10,
          image: "/images/q-espace-10.webp",
          question: "Saturn is the only planet in the Solar System with rings.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Jupiter, Uranus and Neptune have rings too, but they're thin and dark, so they're much harder to see than Saturn's.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: el espacio y los planetas",
      description:
        "Diez afirmaciones sobre los planetas, la Luna y la carrera espacial. Te toca decir cuáles son verdad.",
      questions: [
        {
          id: 1,
          image: "/images/q-espace-01.webp",
          question: "Júpiter es el planeta más grande del sistema solar.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Júpiter es tan grande que dentro cabrían todos los demás planetas juntos, y también más de mil Tierras.",
        },
        {
          id: 2,
          question: "La Luna es más grande que el planeta Mercurio.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Mercurio mide unos 4880 km de diámetro y la Luna unos 3475 km. Mercurio es el planeta más pequeño, pero sigue siendo más grande que nuestro satélite.",
        },
        {
          id: 3,
          image: "/images/q-espace-03.webp",
          question: "Neil Armstrong fue la primera persona en pisar la Luna, en 1969.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Fue en la misión Apolo 11, en julio de 1969. Buzz Aldrin bajó unos minutos después.",
        },
        {
          id: 4,
          question: "Mercurio, el planeta más cercano al Sol, es también el más caliente.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es Venus. Su atmósfera, muy densa, atrapa el calor, y allí hay unos 460 °C todo el tiempo. Mercurio casi no tiene atmósfera y por la noche se congela.",
        },
        {
          id: 5,
          image: "/images/q-espace-05.webp",
          question: "Plutón sigue considerándose un planeta.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Desde 2006, la Unión Astronómica Internacional lo clasifica como planeta enano. Así que el sistema solar tiene ocho planetas.",
        },
        {
          id: 6,
          question: "La luz del Sol tarda unos 8 minutos en llegar a la Tierra.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, unos 8 minutos y 20 segundos. O sea que cuando miras el Sol lo ves como estaba hace 8 minutos.",
        },
        {
          id: 7,
          question: "Marte tiene dos lunas.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se llaman Fobos y Deimos, y son muy pequeñas: Fobos mide menos de 30 km de largo.",
        },
        {
          id: 8,
          question: "La Gran Muralla china se ve a simple vista desde la Luna.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La muralla es muy larga pero demasiado estrecha, unos pocos metros, y tiene el mismo color que el terreno. Ningún astronauta la ha visto desde la Luna.",
        },
        {
          id: 9,
          image: "/images/q-espace-09.webp",
          question: "El primer ser humano en ir al espacio fue Yuri Gagarin, en 1961.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El cosmonauta soviético dio una vuelta a la Tierra el 12 de abril de 1961, a bordo de la Vostok 1. El vuelo duró 108 minutos.",
        },
        {
          id: 10,
          image: "/images/q-espace-10.webp",
          question: "Saturno es el único planeta del sistema solar que tiene anillos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Júpiter, Urano y Neptuno también tienen, pero son finos y oscuros, así que se ven mucho menos que los de Saturno.",
        },
      ],
    },
  },
};

export default [quizEspace] as TranslatedQuiz[];
