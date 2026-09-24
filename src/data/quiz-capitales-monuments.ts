import type { TranslatedQuiz } from "./types";

/**
 * QCM sur les capitales à travers leurs monuments : on voit un monument, on
 * trouve la capitale où il se trouve.
 *
 * Deuxième quiz du sous-thème Capitales, à côté du chrono sur les capitales
 * pièges (quiz-capitales.ts), qui interroge l'Australie, le Canada, le Brésil,
 * etc. Aucun de ces pays ne revient ici. Chaque question porte une photo du
 * monument, et les mauvaises réponses sont d'autres grandes villes du même
 * pays : c'est ça qui rend la question moins évidente qu'elle n'en a l'air.
 */
export const quizCapitalesMonuments: TranslatedQuiz = {
  slug: "quiz-capitales-monuments",
  slugs: { en: "capitals-landmarks-quiz", fr: "quiz-capitales-monuments", es: "quiz-capitales-monumentos" },
  categorySlug: "geographie",
  subcategory: "Capitales",
  difficulty: "easy",
  coverImage: "/images/cover-capitales-monuments.webp",
  gameType: "qcm",
  playCount: 6100,
  translations: {
    fr: {
      title: "Quiz capitales : les monuments célèbres",
      description:
        "Dix monuments connus dans le monde entier, du Colisée à l'India Gate. À toi de dire dans quelle capitale se trouve chacun d'eux.",
      questions: [
        {
          id: 1,
          image: "/images/q-capitales-monuments-01.webp",
          question: "Dans quelle capitale se trouve le Colisée ?",
          answers: [
            { id: "a", text: "Rome" },
            { id: "b", text: "Milan" },
            { id: "c", text: "Naples" },
            { id: "d", text: "Florence" },
          ],
          correctAnswer: "a",
          explanation:
            "À Rome. Cet amphithéâtre a été inauguré en l'an 80 et pouvait accueillir environ 50 000 spectateurs pour les combats de gladiateurs.",
        },
        {
          id: 2,
          image: "/images/q-capitales-monuments-02.webp",
          question: "Dans quelle capitale se trouve l'Acropole, avec le Parthénon ?",
          answers: [
            { id: "a", text: "Thessalonique" },
            { id: "b", text: "Athènes" },
            { id: "c", text: "Sparte" },
            { id: "d", text: "Héraklion" },
          ],
          correctAnswer: "b",
          explanation:
            "À Athènes. Le Parthénon a été construit au Ve siècle avant J.-C. en l'honneur d'Athéna, la déesse qui a donné son nom à la ville.",
        },
        {
          id: 3,
          image: "/images/q-capitales-monuments-03.webp",
          question: "Dans quelle capitale se trouve la porte de Brandebourg ?",
          answers: [
            { id: "a", text: "Munich" },
            { id: "b", text: "Hambourg" },
            { id: "c", text: "Berlin" },
            { id: "d", text: "Francfort" },
          ],
          correctAnswer: "c",
          explanation:
            "À Berlin. Pendant la guerre froide, elle se trouvait juste à côté du mur, et elle est devenue le symbole de la réunification en 1989.",
        },
        {
          id: 4,
          image: "/images/q-capitales-monuments-04.webp",
          question: "Dans quelle capitale se trouve la cathédrale Saint-Basile, avec ses coupoles colorées ?",
          answers: [
            { id: "a", text: "Saint-Pétersbourg" },
            { id: "b", text: "Kiev" },
            { id: "c", text: "Minsk" },
            { id: "d", text: "Moscou" },
          ],
          correctAnswer: "d",
          explanation:
            "À Moscou, sur la place Rouge, juste à côté du Kremlin. Elle a été construite au XVIe siècle, sous Ivan le Terrible.",
        },
        {
          id: 5,
          image: "/images/q-capitales-monuments-05.webp",
          question: "Dans quelle capitale se trouve la Cité interdite ?",
          answers: [
            { id: "a", text: "Pékin" },
            { id: "b", text: "Shanghai" },
            { id: "c", text: "Hong Kong" },
            { id: "d", text: "Canton" },
          ],
          correctAnswer: "a",
          explanation:
            "À Pékin. C'était le palais des empereurs de Chine pendant près de 500 ans, et les gens ordinaires n'avaient pas le droit d'y entrer, d'où son nom.",
        },
        {
          id: 6,
          image: "/images/q-capitales-monuments-06.webp",
          question: "Dans quelle capitale se trouvent les tours Petronas ?",
          answers: [
            { id: "a", text: "Singapour" },
            { id: "b", text: "Kuala Lumpur" },
            { id: "c", text: "Jakarta" },
            { id: "d", text: "Bangkok" },
          ],
          correctAnswer: "b",
          explanation:
            "À Kuala Lumpur, en Malaisie. Avec 452 mètres, ces tours jumelles ont été les plus hautes du monde de 1998 à 2004.",
        },
        {
          id: 7,
          image: "/images/q-capitales-monuments-07.webp",
          question: "Dans quelle capitale se trouve l'Atomium ?",
          answers: [
            { id: "a", text: "Anvers" },
            { id: "b", text: "Liège" },
            { id: "c", text: "Amsterdam" },
            { id: "d", text: "Bruxelles" },
          ],
          correctAnswer: "d",
          explanation:
            "À Bruxelles. Il a été construit pour l'Exposition universelle de 1958 et représente un cristal de fer agrandi 165 milliards de fois.",
        },
        {
          id: 8,
          image: "/images/q-capitales-monuments-08.webp",
          question: "Dans quelle capitale se trouve le Grand Palais, ancienne résidence des rois de Thaïlande ?",
          answers: [
            { id: "a", text: "Chiang Mai" },
            { id: "b", text: "Phuket" },
            { id: "c", text: "Bangkok" },
            { id: "d", text: "Pattaya" },
          ],
          correctAnswer: "c",
          explanation:
            "À Bangkok, au bord du fleuve Chao Phraya. On y trouve aussi le temple du Bouddha d'émeraude, l'un des lieux les plus visités du pays.",
        },
        {
          id: 9,
          image: "/images/q-capitales-monuments-09.webp",
          question: "Dans quelle capitale se trouve le Capitole, où siège le Congrès américain ?",
          answers: [
            { id: "a", text: "New York" },
            { id: "b", text: "Washington" },
            { id: "c", text: "Philadelphie" },
            { id: "d", text: "Boston" },
          ],
          correctAnswer: "b",
          explanation:
            "À Washington. New York a été la capitale en 1789-1790, puis Philadelphie, avant que le gouvernement s'installe à Washington en 1800.",
        },
        {
          id: 10,
          image: "/images/q-capitales-monuments-10.webp",
          question: "Dans quelle capitale se trouve l'India Gate ?",
          answers: [
            { id: "a", text: "Bombay" },
            { id: "b", text: "Calcutta" },
            { id: "c", text: "New Delhi" },
            { id: "d", text: "Bangalore" },
          ],
          correctAnswer: "c",
          explanation:
            "À New Delhi. Cet arc rend hommage aux soldats indiens morts pendant la Première Guerre mondiale. Calcutta a été la capitale de l'Inde britannique jusqu'en 1911.",
        },
      ],
    },
    en: {
      title: "Capitals quiz: famous landmarks",
      description:
        "Ten landmarks known all over the world, from the Colosseum to India Gate. Can you name the capital city each one is in?",
      questions: [
        {
          id: 1,
          image: "/images/q-capitales-monuments-01.webp",
          question: "Which capital is the Colosseum in?",
          answers: [
            { id: "a", text: "Rome" },
            { id: "b", text: "Milan" },
            { id: "c", text: "Naples" },
            { id: "d", text: "Florence" },
          ],
          correctAnswer: "a",
          explanation:
            "Rome. The amphitheater opened in the year 80 and could hold around 50,000 spectators for gladiator fights.",
        },
        {
          id: 2,
          image: "/images/q-capitales-monuments-02.webp",
          question: "Which capital is the Acropolis, with the Parthenon, in?",
          answers: [
            { id: "a", text: "Thessaloniki" },
            { id: "b", text: "Athens" },
            { id: "c", text: "Sparta" },
            { id: "d", text: "Heraklion" },
          ],
          correctAnswer: "b",
          explanation:
            "Athens. The Parthenon was built in the 5th century BC for Athena, the goddess the city is named after.",
        },
        {
          id: 3,
          image: "/images/q-capitales-monuments-03.webp",
          question: "Which capital is the Brandenburg Gate in?",
          answers: [
            { id: "a", text: "Munich" },
            { id: "b", text: "Hamburg" },
            { id: "c", text: "Berlin" },
            { id: "d", text: "Frankfurt" },
          ],
          correctAnswer: "c",
          explanation:
            "Berlin. During the Cold War it stood right by the Wall, and it became the symbol of reunification in 1989.",
        },
        {
          id: 4,
          image: "/images/q-capitales-monuments-04.webp",
          question: "Which capital is St. Basil's Cathedral, with its colorful domes, in?",
          answers: [
            { id: "a", text: "St. Petersburg" },
            { id: "b", text: "Kyiv" },
            { id: "c", text: "Minsk" },
            { id: "d", text: "Moscow" },
          ],
          correctAnswer: "d",
          explanation:
            "Moscow, on Red Square, right next to the Kremlin. It was built in the 16th century under Ivan the Terrible.",
        },
        {
          id: 5,
          image: "/images/q-capitales-monuments-05.webp",
          question: "Which capital is the Forbidden City in?",
          answers: [
            { id: "a", text: "Beijing" },
            { id: "b", text: "Shanghai" },
            { id: "c", text: "Hong Kong" },
            { id: "d", text: "Guangzhou" },
          ],
          correctAnswer: "a",
          explanation:
            "Beijing. It was the palace of China's emperors for nearly 500 years, and ordinary people weren't allowed in, hence the name.",
        },
        {
          id: 6,
          image: "/images/q-capitales-monuments-06.webp",
          question: "Which capital are the Petronas Towers in?",
          answers: [
            { id: "a", text: "Singapore" },
            { id: "b", text: "Kuala Lumpur" },
            { id: "c", text: "Jakarta" },
            { id: "d", text: "Bangkok" },
          ],
          correctAnswer: "b",
          explanation:
            "Kuala Lumpur, in Malaysia. At 452 meters, the twin towers were the tallest buildings in the world from 1998 to 2004.",
        },
        {
          id: 7,
          image: "/images/q-capitales-monuments-07.webp",
          question: "Which capital is the Atomium in?",
          answers: [
            { id: "a", text: "Antwerp" },
            { id: "b", text: "Liège" },
            { id: "c", text: "Amsterdam" },
            { id: "d", text: "Brussels" },
          ],
          correctAnswer: "d",
          explanation:
            "Brussels. It was built for the 1958 World's Fair and shows an iron crystal magnified 165 billion times.",
        },
        {
          id: 8,
          image: "/images/q-capitales-monuments-08.webp",
          question: "Which capital is the Grand Palace, former home of the kings of Thailand, in?",
          answers: [
            { id: "a", text: "Chiang Mai" },
            { id: "b", text: "Phuket" },
            { id: "c", text: "Bangkok" },
            { id: "d", text: "Pattaya" },
          ],
          correctAnswer: "c",
          explanation:
            "Bangkok, on the Chao Phraya river. It also houses the Temple of the Emerald Buddha, one of the most visited places in the country.",
        },
        {
          id: 9,
          image: "/images/q-capitales-monuments-09.webp",
          question: "Which capital is the Capitol, home of the US Congress, in?",
          answers: [
            { id: "a", text: "New York" },
            { id: "b", text: "Washington" },
            { id: "c", text: "Philadelphia" },
            { id: "d", text: "Boston" },
          ],
          correctAnswer: "b",
          explanation:
            "Washington, D.C. New York was the capital in 1789-1790, then Philadelphia, before the government moved to Washington in 1800.",
        },
        {
          id: 10,
          image: "/images/q-capitales-monuments-10.webp",
          question: "Which capital is India Gate in?",
          answers: [
            { id: "a", text: "Mumbai" },
            { id: "b", text: "Kolkata" },
            { id: "c", text: "New Delhi" },
            { id: "d", text: "Bangalore" },
          ],
          correctAnswer: "c",
          explanation:
            "New Delhi. The arch honors Indian soldiers who died in the First World War. Kolkata, then Calcutta, was the capital of British India until 1911.",
        },
      ],
    },
    es: {
      title: "Quiz de capitales: monumentos famosos",
      description:
        "Diez monumentos conocidos en todo el mundo, del Coliseo a la Puerta de la India. Tienes que decir en qué capital está cada uno.",
      questions: [
        {
          id: 1,
          image: "/images/q-capitales-monuments-01.webp",
          question: "¿En qué capital está el Coliseo?",
          answers: [
            { id: "a", text: "Roma" },
            { id: "b", text: "Milán" },
            { id: "c", text: "Nápoles" },
            { id: "d", text: "Florencia" },
          ],
          correctAnswer: "a",
          explanation:
            "En Roma. Este anfiteatro se inauguró en el año 80 y tenía sitio para unos 50.000 espectadores en los combates de gladiadores.",
        },
        {
          id: 2,
          image: "/images/q-capitales-monuments-02.webp",
          question: "¿En qué capital está la Acrópolis, con el Partenón?",
          answers: [
            { id: "a", text: "Salónica" },
            { id: "b", text: "Atenas" },
            { id: "c", text: "Esparta" },
            { id: "d", text: "Heraclión" },
          ],
          correctAnswer: "b",
          explanation:
            "En Atenas. El Partenón se construyó en el siglo V a. C. en honor a Atenea, la diosa que da nombre a la ciudad.",
        },
        {
          id: 3,
          image: "/images/q-capitales-monuments-03.webp",
          question: "¿En qué capital está la Puerta de Brandeburgo?",
          answers: [
            { id: "a", text: "Múnich" },
            { id: "b", text: "Hamburgo" },
            { id: "c", text: "Berlín" },
            { id: "d", text: "Fráncfort" },
          ],
          correctAnswer: "c",
          explanation:
            "En Berlín. Durante la Guerra Fría quedaba justo al lado del muro, y en 1989 se convirtió en el símbolo de la reunificación.",
        },
        {
          id: 4,
          image: "/images/q-capitales-monuments-04.webp",
          question: "¿En qué capital está la catedral de San Basilio, con sus cúpulas de colores?",
          answers: [
            { id: "a", text: "San Petersburgo" },
            { id: "b", text: "Kiev" },
            { id: "c", text: "Minsk" },
            { id: "d", text: "Moscú" },
          ],
          correctAnswer: "d",
          explanation:
            "En Moscú, en la Plaza Roja, junto al Kremlin. Se construyó en el siglo XVI, en tiempos de Iván el Terrible.",
        },
        {
          id: 5,
          image: "/images/q-capitales-monuments-05.webp",
          question: "¿En qué capital está la Ciudad Prohibida?",
          answers: [
            { id: "a", text: "Pekín" },
            { id: "b", text: "Shanghái" },
            { id: "c", text: "Hong Kong" },
            { id: "d", text: "Cantón" },
          ],
          correctAnswer: "a",
          explanation:
            "En Pekín. Fue el palacio de los emperadores de China durante casi 500 años, y la gente corriente no podía entrar, de ahí su nombre.",
        },
        {
          id: 6,
          image: "/images/q-capitales-monuments-06.webp",
          question: "¿En qué capital están las Torres Petronas?",
          answers: [
            { id: "a", text: "Singapur" },
            { id: "b", text: "Kuala Lumpur" },
            { id: "c", text: "Yakarta" },
            { id: "d", text: "Bangkok" },
          ],
          correctAnswer: "b",
          explanation:
            "En Kuala Lumpur, en Malasia. Con 452 metros, estas torres gemelas fueron los edificios más altos del mundo entre 1998 y 2004.",
        },
        {
          id: 7,
          image: "/images/q-capitales-monuments-07.webp",
          question: "¿En qué capital está el Atomium?",
          answers: [
            { id: "a", text: "Amberes" },
            { id: "b", text: "Lieja" },
            { id: "c", text: "Ámsterdam" },
            { id: "d", text: "Bruselas" },
          ],
          correctAnswer: "d",
          explanation:
            "En Bruselas. Se construyó para la Exposición Universal de 1958 y representa un cristal de hierro ampliado 165.000 millones de veces.",
        },
        {
          id: 8,
          image: "/images/q-capitales-monuments-08.webp",
          question: "¿En qué capital está el Gran Palacio, antigua residencia de los reyes de Tailandia?",
          answers: [
            { id: "a", text: "Chiang Mai" },
            { id: "b", text: "Phuket" },
            { id: "c", text: "Bangkok" },
            { id: "d", text: "Pattaya" },
          ],
          correctAnswer: "c",
          explanation:
            "En Bangkok, a orillas del río Chao Phraya. Allí está también el templo del Buda de Esmeralda, uno de los lugares más visitados del país.",
        },
        {
          id: 9,
          image: "/images/q-capitales-monuments-09.webp",
          question: "¿En qué capital está el Capitolio, sede del Congreso de Estados Unidos?",
          answers: [
            { id: "a", text: "Nueva York" },
            { id: "b", text: "Washington" },
            { id: "c", text: "Filadelfia" },
            { id: "d", text: "Boston" },
          ],
          correctAnswer: "b",
          explanation:
            "En Washington. Nueva York fue la capital en 1789-1790, luego Filadelfia, y el gobierno se instaló en Washington en 1800.",
        },
        {
          id: 10,
          image: "/images/q-capitales-monuments-10.webp",
          question: "¿En qué capital está la Puerta de la India?",
          answers: [
            { id: "a", text: "Bombay" },
            { id: "b", text: "Calcuta" },
            { id: "c", text: "Nueva Delhi" },
            { id: "d", text: "Bangalore" },
          ],
          correctAnswer: "c",
          explanation:
            "En Nueva Delhi. Este arco recuerda a los soldados indios muertos en la Primera Guerra Mundial. Calcuta fue la capital de la India británica hasta 1911.",
        },
      ],
    },
  },
};

export default [quizCapitalesMonuments] as TranslatedQuiz[];
