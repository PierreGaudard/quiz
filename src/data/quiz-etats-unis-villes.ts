import type { TranslatedQuiz } from "./types";

/**
 * Etats-Unis, troisieme quiz : les villes americaines et leurs monuments, en
 * mode chrono (60 secondes pour tout le quiz).
 *
 * Vingt questions courtes, parce que le lecteur chrono s'arrete quand toutes
 * les questions sont jouees. Les capitales deja demandees dans
 * quiz-etats-unis.ts (Sacramento, Albany) et le Grand Canyon sont evites.
 */
export const quizEtatsUnisVilles: TranslatedQuiz = {
  slug: "quiz-etats-unis-villes",
  slugs: { en: "usa-cities-quiz", fr: "quiz-etats-unis-villes", es: "quiz-estados-unidos-ciudades" },
  categorySlug: "geographie",
  subcategory: "Etats-Unis",
  difficulty: "medium",
  coverImage: "/images/cover-etats-unis-villes.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 4600,
  translations: {
    fr: {
      title: "Quiz États-Unis : villes et monuments",
      description:
        "Golden Gate, Space Needle, Alamo… Vingt questions sur les villes des États-Unis et leurs monuments, en 60 secondes.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-etats-unis-villes-01.webp",
          question: "Dans quelle ville se trouve le Golden Gate Bridge ?",
          answers: [
            { id: "a", text: "Los Angeles" },
            { id: "b", text: "San Francisco" },
            { id: "c", text: "Seattle" },
            { id: "d", text: "San Diego" },
          ],
          correctAnswer: "b",
          explanation:
            "À San Francisco. Le pont rouge relie la ville au comté de Marin depuis 1937.",
        },
        {
          id: 2,
          question: "Quelle est la capitale du Texas ?",
          answers: [
            { id: "a", text: "Houston" },
            { id: "b", text: "Dallas" },
            { id: "c", text: "Austin" },
            { id: "d", text: "San Antonio" },
          ],
          correctAnswer: "c",
          explanation:
            "Austin. Houston est la plus grande ville du Texas, mais la capitale est bien Austin.",
        },
        {
          id: 3,
          image: "/images/q-quiz-etats-unis-villes-03.webp",
          question: "Dans quelle ville se trouve la Space Needle ?",
          answers: [
            { id: "a", text: "Portland" },
            { id: "b", text: "Chicago" },
            { id: "c", text: "Denver" },
            { id: "d", text: "Seattle" },
          ],
          correctAnswer: "d",
          explanation:
            "À Seattle. La tour a été construite pour l'Exposition universelle de 1962.",
        },
        {
          id: 4,
          question: "Quelle ville a pour surnom « Windy City » ?",
          answers: [
            { id: "a", text: "Chicago" },
            { id: "b", text: "Boston" },
            { id: "c", text: "New York" },
            { id: "d", text: "Detroit" },
          ],
          correctAnswer: "a",
          explanation:
            "Chicago, la « ville venteuse », au bord du lac Michigan.",
        },
        {
          id: 5,
          question: "Dans quel État se trouve la plus grande partie du parc de Yellowstone ?",
          answers: [
            { id: "a", text: "Montana" },
            { id: "b", text: "Idaho" },
            { id: "c", text: "Wyoming" },
            { id: "d", text: "Colorado" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Wyoming, qui en porte à peu près 96 %. Le reste déborde sur le Montana et l'Idaho.",
        },
        {
          id: 6,
          question: "Quelle est la capitale du Nevada ?",
          answers: [
            { id: "a", text: "Las Vegas" },
            { id: "b", text: "Reno" },
            { id: "c", text: "Carson City" },
            { id: "d", text: "Henderson" },
          ],
          correctAnswer: "c",
          explanation:
            "Carson City. Las Vegas est bien plus connue, mais ce n'est pas la capitale.",
        },
        {
          id: 7,
          image: "/images/q-quiz-etats-unis-villes-07.webp",
          question: "Dans quelle ville se trouve la Liberty Bell, la cloche de la Liberté ?",
          answers: [
            { id: "a", text: "Boston" },
            { id: "b", text: "Philadelphie" },
            { id: "c", text: "Washington" },
            { id: "d", text: "Baltimore" },
          ],
          correctAnswer: "b",
          explanation:
            "À Philadelphie, près de l'Independence Hall, là où la Déclaration d'indépendance a été signée.",
        },
        {
          id: 8,
          question: "Hollywood est un quartier de quelle ville ?",
          answers: [
            { id: "a", text: "San Diego" },
            { id: "b", text: "Las Vegas" },
            { id: "c", text: "Los Angeles" },
            { id: "d", text: "San Francisco" },
          ],
          correctAnswer: "c",
          explanation:
            "Los Angeles. Le quartier est devenu le centre du cinéma américain dès les années 1910.",
        },
        {
          id: 9,
          image: "/images/q-quiz-etats-unis-villes-09.webp",
          question: "Dans quelle ville se dresse la grande arche Gateway Arch ?",
          answers: [
            { id: "a", text: "Saint-Louis" },
            { id: "b", text: "Kansas City" },
            { id: "c", text: "Nashville" },
            { id: "d", text: "Cincinnati" },
          ],
          correctAnswer: "a",
          explanation:
            "À Saint-Louis, dans le Missouri. L'arche fait 192 mètres de haut et symbolise la porte de l'Ouest.",
        },
        {
          id: 10,
          question: "Quelle ville est connue comme le berceau du jazz ?",
          answers: [
            { id: "a", text: "Memphis" },
            { id: "b", text: "La Nouvelle-Orléans" },
            { id: "c", text: "Chicago" },
            { id: "d", text: "Atlanta" },
          ],
          correctAnswer: "b",
          explanation:
            "La Nouvelle-Orléans, en Louisiane, où le jazz est né au début du XXe siècle.",
        },
        {
          id: 11,
          question: "Près de quelle ville de Floride se trouve Walt Disney World ?",
          answers: [
            { id: "a", text: "Miami" },
            { id: "b", text: "Tampa" },
            { id: "c", text: "Orlando" },
            { id: "d", text: "Jacksonville" },
          ],
          correctAnswer: "c",
          explanation:
            "Orlando. Le complexe a ouvert en 1971 au sud-ouest de la ville.",
        },
        {
          id: 12,
          question: "Quelle est la capitale de la Floride ?",
          answers: [
            { id: "a", text: "Miami" },
            { id: "b", text: "Tallahassee" },
            { id: "c", text: "Orlando" },
            { id: "d", text: "Tampa" },
          ],
          correctAnswer: "b",
          explanation:
            "Tallahassee, dans le nord de l'État. Miami est bien plus grande, mais ce n'est pas la capitale.",
        },
        {
          id: 13,
          question: "Quelle est la capitale de l'Illinois ?",
          answers: [
            { id: "a", text: "Chicago" },
            { id: "b", text: "Springfield" },
            { id: "c", text: "Peoria" },
            { id: "d", text: "Rockford" },
          ],
          correctAnswer: "b",
          explanation:
            "Springfield, la ville où Abraham Lincoln a vécu et où il est enterré. Chicago n'est pas la capitale.",
        },
        {
          id: 14,
          question: "Quelle ville est surnommée « Motor City » ?",
          answers: [
            { id: "a", text: "Cleveland" },
            { id: "b", text: "Pittsburgh" },
            { id: "c", text: "Détroit" },
            { id: "d", text: "Milwaukee" },
          ],
          correctAnswer: "c",
          explanation:
            "Détroit, dans le Michigan, la ville de Ford, General Motors et Chrysler.",
        },
        {
          id: 15,
          question: "Dans quelle ville se trouve Fort Alamo ?",
          answers: [
            { id: "a", text: "San Antonio" },
            { id: "b", text: "El Paso" },
            { id: "c", text: "Austin" },
            { id: "d", text: "Houston" },
          ],
          correctAnswer: "a",
          explanation:
            "À San Antonio, au Texas. La bataille de Fort Alamo a eu lieu en 1836.",
        },
        {
          id: 16,
          question: "Sur quel fleuve a été construit le barrage Hoover ?",
          answers: [
            { id: "a", text: "Le Mississippi" },
            { id: "b", text: "Le Colorado" },
            { id: "c", text: "Le Missouri" },
            { id: "d", text: "Le Rio Grande" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Colorado, à la frontière entre le Nevada et l'Arizona, pas loin de Las Vegas.",
        },
        {
          id: 17,
          question: "Quelle ville est surnommée « Mile High City » ?",
          answers: [
            { id: "a", text: "Denver" },
            { id: "b", text: "Salt Lake City" },
            { id: "c", text: "Phoenix" },
            { id: "d", text: "Albuquerque" },
          ],
          correctAnswer: "a",
          explanation:
            "Denver, au Colorado, parce que la ville est à un mile d'altitude, soit environ 1 600 mètres.",
        },
        {
          id: 18,
          question: "Dans quelle ville se trouve Graceland, la maison d'Elvis Presley ?",
          answers: [
            { id: "a", text: "Nashville" },
            { id: "b", text: "Memphis" },
            { id: "c", text: "Tupelo" },
            { id: "d", text: "La Nouvelle-Orléans" },
          ],
          correctAnswer: "b",
          explanation:
            "À Memphis, dans le Tennessee. Elvis y a vécu jusqu'à sa mort en 1977.",
        },
        {
          id: 19,
          question: "Quelle est la capitale d'Hawaï ?",
          answers: [
            { id: "a", text: "Hilo" },
            { id: "b", text: "Honolulu" },
            { id: "c", text: "Maui" },
            { id: "d", text: "Kailua" },
          ],
          correctAnswer: "b",
          explanation:
            "Honolulu, sur l'île d'Oahu. Maui est une île, pas une ville.",
        },
        {
          id: 20,
          question: "Dans quel État se trouve le centre spatial Kennedy ?",
          answers: [
            { id: "a", text: "Texas" },
            { id: "b", text: "Californie" },
            { id: "c", text: "Floride" },
            { id: "d", text: "Alabama" },
          ],
          correctAnswer: "c",
          explanation:
            "En Floride, au cap Canaveral. C'est de là que sont parties les missions Apollo vers la Lune.",
        },
      ],
    },
    en: {
      title: "USA quiz: cities and landmarks",
      description:
        "Golden Gate, Space Needle, the Alamo… Twenty questions on American cities and their landmarks, in 60 seconds.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-etats-unis-villes-01.webp",
          question: "Which city is the Golden Gate Bridge in?",
          answers: [
            { id: "a", text: "Los Angeles" },
            { id: "b", text: "San Francisco" },
            { id: "c", text: "Seattle" },
            { id: "d", text: "San Diego" },
          ],
          correctAnswer: "b",
          explanation:
            "San Francisco. The red bridge has linked the city to Marin County since 1937.",
        },
        {
          id: 2,
          question: "What is the capital of Texas?",
          answers: [
            { id: "a", text: "Houston" },
            { id: "b", text: "Dallas" },
            { id: "c", text: "Austin" },
            { id: "d", text: "San Antonio" },
          ],
          correctAnswer: "c",
          explanation:
            "Austin. Houston is the biggest city in Texas, but the capital is Austin.",
        },
        {
          id: 3,
          image: "/images/q-quiz-etats-unis-villes-03.webp",
          question: "Which city is the Space Needle in?",
          answers: [
            { id: "a", text: "Portland" },
            { id: "b", text: "Chicago" },
            { id: "c", text: "Denver" },
            { id: "d", text: "Seattle" },
          ],
          correctAnswer: "d",
          explanation:
            "Seattle. The tower was built for the 1962 World's Fair.",
        },
        {
          id: 4,
          question: "Which city is nicknamed the \"Windy City\"?",
          answers: [
            { id: "a", text: "Chicago" },
            { id: "b", text: "Boston" },
            { id: "c", text: "New York" },
            { id: "d", text: "Detroit" },
          ],
          correctAnswer: "a",
          explanation:
            "Chicago, on the shore of Lake Michigan.",
        },
        {
          id: 5,
          question: "Which state holds most of Yellowstone National Park?",
          answers: [
            { id: "a", text: "Montana" },
            { id: "b", text: "Idaho" },
            { id: "c", text: "Wyoming" },
            { id: "d", text: "Colorado" },
          ],
          correctAnswer: "c",
          explanation:
            "Wyoming, with about 96% of the park. The rest spills into Montana and Idaho.",
        },
        {
          id: 6,
          question: "What is the capital of Nevada?",
          answers: [
            { id: "a", text: "Las Vegas" },
            { id: "b", text: "Reno" },
            { id: "c", text: "Carson City" },
            { id: "d", text: "Henderson" },
          ],
          correctAnswer: "c",
          explanation:
            "Carson City. Las Vegas is far better known, but it isn't the capital.",
        },
        {
          id: 7,
          image: "/images/q-quiz-etats-unis-villes-07.webp",
          question: "Which city is the Liberty Bell in?",
          answers: [
            { id: "a", text: "Boston" },
            { id: "b", text: "Philadelphia" },
            { id: "c", text: "Washington" },
            { id: "d", text: "Baltimore" },
          ],
          correctAnswer: "b",
          explanation:
            "Philadelphia, next to Independence Hall, where the Declaration of Independence was signed.",
        },
        {
          id: 8,
          question: "Hollywood is a neighbourhood of which city?",
          answers: [
            { id: "a", text: "San Diego" },
            { id: "b", text: "Las Vegas" },
            { id: "c", text: "Los Angeles" },
            { id: "d", text: "San Francisco" },
          ],
          correctAnswer: "c",
          explanation:
            "Los Angeles. It became the centre of American cinema back in the 1910s.",
        },
        {
          id: 9,
          image: "/images/q-quiz-etats-unis-villes-09.webp",
          question: "Which city is the Gateway Arch in?",
          answers: [
            { id: "a", text: "St. Louis" },
            { id: "b", text: "Kansas City" },
            { id: "c", text: "Nashville" },
            { id: "d", text: "Cincinnati" },
          ],
          correctAnswer: "a",
          explanation:
            "St. Louis, Missouri. The arch is 192 metres tall and stands for the gateway to the West.",
        },
        {
          id: 10,
          question: "Which city is known as the birthplace of jazz?",
          answers: [
            { id: "a", text: "Memphis" },
            { id: "b", text: "New Orleans" },
            { id: "c", text: "Chicago" },
            { id: "d", text: "Atlanta" },
          ],
          correctAnswer: "b",
          explanation:
            "New Orleans, Louisiana, where jazz was born in the early 20th century.",
        },
        {
          id: 11,
          question: "Walt Disney World is near which Florida city?",
          answers: [
            { id: "a", text: "Miami" },
            { id: "b", text: "Tampa" },
            { id: "c", text: "Orlando" },
            { id: "d", text: "Jacksonville" },
          ],
          correctAnswer: "c",
          explanation:
            "Orlando. The resort opened in 1971, southwest of the city.",
        },
        {
          id: 12,
          question: "What is the capital of Florida?",
          answers: [
            { id: "a", text: "Miami" },
            { id: "b", text: "Tallahassee" },
            { id: "c", text: "Orlando" },
            { id: "d", text: "Tampa" },
          ],
          correctAnswer: "b",
          explanation:
            "Tallahassee, in the north of the state. Miami is much bigger, but it isn't the capital.",
        },
        {
          id: 13,
          question: "What is the capital of Illinois?",
          answers: [
            { id: "a", text: "Chicago" },
            { id: "b", text: "Springfield" },
            { id: "c", text: "Peoria" },
            { id: "d", text: "Rockford" },
          ],
          correctAnswer: "b",
          explanation:
            "Springfield, where Abraham Lincoln lived and is buried. Chicago isn't the capital.",
        },
        {
          id: 14,
          question: "Which city is nicknamed \"Motor City\"?",
          answers: [
            { id: "a", text: "Cleveland" },
            { id: "b", text: "Pittsburgh" },
            { id: "c", text: "Detroit" },
            { id: "d", text: "Milwaukee" },
          ],
          correctAnswer: "c",
          explanation:
            "Detroit, Michigan, home of Ford, General Motors and Chrysler.",
        },
        {
          id: 15,
          question: "Which city is the Alamo in?",
          answers: [
            { id: "a", text: "San Antonio" },
            { id: "b", text: "El Paso" },
            { id: "c", text: "Austin" },
            { id: "d", text: "Houston" },
          ],
          correctAnswer: "a",
          explanation:
            "San Antonio, Texas. The Battle of the Alamo was fought there in 1836.",
        },
        {
          id: 16,
          question: "Which river was the Hoover Dam built on?",
          answers: [
            { id: "a", text: "The Mississippi" },
            { id: "b", text: "The Colorado" },
            { id: "c", text: "The Missouri" },
            { id: "d", text: "The Rio Grande" },
          ],
          correctAnswer: "b",
          explanation:
            "The Colorado, on the border between Nevada and Arizona, not far from Las Vegas.",
        },
        {
          id: 17,
          question: "Which city is nicknamed the \"Mile High City\"?",
          answers: [
            { id: "a", text: "Denver" },
            { id: "b", text: "Salt Lake City" },
            { id: "c", text: "Phoenix" },
            { id: "d", text: "Albuquerque" },
          ],
          correctAnswer: "a",
          explanation:
            "Denver, Colorado, because the city sits one mile above sea level.",
        },
        {
          id: 18,
          question: "Which city is Graceland, Elvis Presley's home, in?",
          answers: [
            { id: "a", text: "Nashville" },
            { id: "b", text: "Memphis" },
            { id: "c", text: "Tupelo" },
            { id: "d", text: "New Orleans" },
          ],
          correctAnswer: "b",
          explanation:
            "Memphis, Tennessee. Elvis lived there until his death in 1977.",
        },
        {
          id: 19,
          question: "What is the capital of Hawaii?",
          answers: [
            { id: "a", text: "Hilo" },
            { id: "b", text: "Honolulu" },
            { id: "c", text: "Maui" },
            { id: "d", text: "Kailua" },
          ],
          correctAnswer: "b",
          explanation:
            "Honolulu, on the island of Oahu. Maui is an island, not a city.",
        },
        {
          id: 20,
          question: "Which state is the Kennedy Space Center in?",
          answers: [
            { id: "a", text: "Texas" },
            { id: "b", text: "California" },
            { id: "c", text: "Florida" },
            { id: "d", text: "Alabama" },
          ],
          correctAnswer: "c",
          explanation:
            "Florida, at Cape Canaveral. The Apollo missions to the Moon launched from there.",
        },
      ],
    },
    es: {
      title: "Quiz de Estados Unidos: ciudades y monumentos",
      description:
        "Golden Gate, Space Needle, El Álamo… Veinte preguntas sobre las ciudades de Estados Unidos y sus monumentos, en 60 segundos.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-etats-unis-villes-01.webp",
          question: "¿En qué ciudad está el puente Golden Gate?",
          answers: [
            { id: "a", text: "Los Ángeles" },
            { id: "b", text: "San Francisco" },
            { id: "c", text: "Seattle" },
            { id: "d", text: "San Diego" },
          ],
          correctAnswer: "b",
          explanation:
            "En San Francisco. El puente rojo une la ciudad con el condado de Marin desde 1937.",
        },
        {
          id: 2,
          question: "¿Cuál es la capital de Texas?",
          answers: [
            { id: "a", text: "Houston" },
            { id: "b", text: "Dallas" },
            { id: "c", text: "Austin" },
            { id: "d", text: "San Antonio" },
          ],
          correctAnswer: "c",
          explanation:
            "Austin. Houston es la ciudad más grande de Texas, pero la capital es Austin.",
        },
        {
          id: 3,
          image: "/images/q-quiz-etats-unis-villes-03.webp",
          question: "¿En qué ciudad está la Space Needle?",
          answers: [
            { id: "a", text: "Portland" },
            { id: "b", text: "Chicago" },
            { id: "c", text: "Denver" },
            { id: "d", text: "Seattle" },
          ],
          correctAnswer: "d",
          explanation:
            "En Seattle. La torre se construyó para la Exposición Universal de 1962.",
        },
        {
          id: 4,
          question: "¿Qué ciudad tiene el apodo de «Windy City»?",
          answers: [
            { id: "a", text: "Chicago" },
            { id: "b", text: "Boston" },
            { id: "c", text: "Nueva York" },
            { id: "d", text: "Detroit" },
          ],
          correctAnswer: "a",
          explanation:
            "Chicago, la «ciudad del viento», a orillas del lago Míchigan.",
        },
        {
          id: 5,
          question: "¿En qué estado está la mayor parte del parque de Yellowstone?",
          answers: [
            { id: "a", text: "Montana" },
            { id: "b", text: "Idaho" },
            { id: "c", text: "Wyoming" },
            { id: "d", text: "Colorado" },
          ],
          correctAnswer: "c",
          explanation:
            "En Wyoming, con cerca del 96 % del parque. El resto se reparte entre Montana e Idaho.",
        },
        {
          id: 6,
          question: "¿Cuál es la capital de Nevada?",
          answers: [
            { id: "a", text: "Las Vegas" },
            { id: "b", text: "Reno" },
            { id: "c", text: "Carson City" },
            { id: "d", text: "Henderson" },
          ],
          correctAnswer: "c",
          explanation:
            "Carson City. Las Vegas es mucho más conocida, pero no es la capital.",
        },
        {
          id: 7,
          image: "/images/q-quiz-etats-unis-villes-07.webp",
          question: "¿En qué ciudad está la Campana de la Libertad?",
          answers: [
            { id: "a", text: "Boston" },
            { id: "b", text: "Filadelfia" },
            { id: "c", text: "Washington" },
            { id: "d", text: "Baltimore" },
          ],
          correctAnswer: "b",
          explanation:
            "En Filadelfia, junto al Independence Hall, donde se firmó la Declaración de Independencia.",
        },
        {
          id: 8,
          question: "¿De qué ciudad es barrio Hollywood?",
          answers: [
            { id: "a", text: "San Diego" },
            { id: "b", text: "Las Vegas" },
            { id: "c", text: "Los Ángeles" },
            { id: "d", text: "San Francisco" },
          ],
          correctAnswer: "c",
          explanation:
            "De Los Ángeles. El barrio se convirtió en el centro del cine estadounidense ya en los años 1910.",
        },
        {
          id: 9,
          image: "/images/q-quiz-etats-unis-villes-09.webp",
          question: "¿En qué ciudad se alza el Gateway Arch?",
          answers: [
            { id: "a", text: "San Luis" },
            { id: "b", text: "Kansas City" },
            { id: "c", text: "Nashville" },
            { id: "d", text: "Cincinnati" },
          ],
          correctAnswer: "a",
          explanation:
            "En San Luis, Misuri. El arco mide 192 metros y simboliza la puerta del Oeste.",
        },
        {
          id: 10,
          question: "¿Qué ciudad se conoce como la cuna del jazz?",
          answers: [
            { id: "a", text: "Memphis" },
            { id: "b", text: "Nueva Orleans" },
            { id: "c", text: "Chicago" },
            { id: "d", text: "Atlanta" },
          ],
          correctAnswer: "b",
          explanation:
            "Nueva Orleans, en Luisiana, donde nació el jazz a principios del siglo XX.",
        },
        {
          id: 11,
          question: "¿Cerca de qué ciudad de Florida está Walt Disney World?",
          answers: [
            { id: "a", text: "Miami" },
            { id: "b", text: "Tampa" },
            { id: "c", text: "Orlando" },
            { id: "d", text: "Jacksonville" },
          ],
          correctAnswer: "c",
          explanation:
            "Orlando. El complejo abrió en 1971, al suroeste de la ciudad.",
        },
        {
          id: 12,
          question: "¿Cuál es la capital de Florida?",
          answers: [
            { id: "a", text: "Miami" },
            { id: "b", text: "Tallahassee" },
            { id: "c", text: "Orlando" },
            { id: "d", text: "Tampa" },
          ],
          correctAnswer: "b",
          explanation:
            "Tallahassee, en el norte del estado. Miami es mucho más grande, pero no es la capital.",
        },
        {
          id: 13,
          question: "¿Cuál es la capital de Illinois?",
          answers: [
            { id: "a", text: "Chicago" },
            { id: "b", text: "Springfield" },
            { id: "c", text: "Peoria" },
            { id: "d", text: "Rockford" },
          ],
          correctAnswer: "b",
          explanation:
            "Springfield, la ciudad donde vivió y está enterrado Abraham Lincoln. Chicago no es la capital.",
        },
        {
          id: 14,
          question: "¿Qué ciudad tiene el apodo de «Motor City»?",
          answers: [
            { id: "a", text: "Cleveland" },
            { id: "b", text: "Pittsburgh" },
            { id: "c", text: "Detroit" },
            { id: "d", text: "Milwaukee" },
          ],
          correctAnswer: "c",
          explanation:
            "Detroit, en Míchigan, la ciudad de Ford, General Motors y Chrysler.",
        },
        {
          id: 15,
          question: "¿En qué ciudad está El Álamo?",
          answers: [
            { id: "a", text: "San Antonio" },
            { id: "b", text: "El Paso" },
            { id: "c", text: "Austin" },
            { id: "d", text: "Houston" },
          ],
          correctAnswer: "a",
          explanation:
            "En San Antonio, Texas. La batalla de El Álamo tuvo lugar en 1836.",
        },
        {
          id: 16,
          question: "¿Sobre qué río se construyó la presa Hoover?",
          answers: [
            { id: "a", text: "El Misisipi" },
            { id: "b", text: "El Colorado" },
            { id: "c", text: "El Misuri" },
            { id: "d", text: "El río Bravo" },
          ],
          correctAnswer: "b",
          explanation:
            "El Colorado, en la frontera entre Nevada y Arizona, no muy lejos de Las Vegas.",
        },
        {
          id: 17,
          question: "¿Qué ciudad tiene el apodo de «Mile High City»?",
          answers: [
            { id: "a", text: "Denver" },
            { id: "b", text: "Salt Lake City" },
            { id: "c", text: "Phoenix" },
            { id: "d", text: "Albuquerque" },
          ],
          correctAnswer: "a",
          explanation:
            "Denver, en Colorado, porque la ciudad está a una milla de altitud, unos 1600 metros.",
        },
        {
          id: 18,
          question: "¿En qué ciudad está Graceland, la casa de Elvis Presley?",
          answers: [
            { id: "a", text: "Nashville" },
            { id: "b", text: "Memphis" },
            { id: "c", text: "Tupelo" },
            { id: "d", text: "Nueva Orleans" },
          ],
          correctAnswer: "b",
          explanation:
            "En Memphis, Tennessee. Elvis vivió allí hasta su muerte en 1977.",
        },
        {
          id: 19,
          question: "¿Cuál es la capital de Hawái?",
          answers: [
            { id: "a", text: "Hilo" },
            { id: "b", text: "Honolulu" },
            { id: "c", text: "Maui" },
            { id: "d", text: "Kailua" },
          ],
          correctAnswer: "b",
          explanation:
            "Honolulu, en la isla de Oahu. Maui es una isla, no una ciudad.",
        },
        {
          id: 20,
          question: "¿En qué estado está el Centro Espacial Kennedy?",
          answers: [
            { id: "a", text: "Texas" },
            { id: "b", text: "California" },
            { id: "c", text: "Florida" },
            { id: "d", text: "Alabama" },
          ],
          correctAnswer: "c",
          explanation:
            "En Florida, en cabo Cañaveral. De allí salieron las misiones Apolo hacia la Luna.",
        },
      ],
    },
  },
};

export default [quizEtatsUnisVilles] as TranslatedQuiz[];
