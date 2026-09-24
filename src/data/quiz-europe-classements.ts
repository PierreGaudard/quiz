import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode ordre sur l'Europe : ranger des pays, des villes, des sommets
 * ou des dates de l'Union européenne.
 *
 * Deuxième quiz du sous-thème Europe, à côté du vrai-faux général
 * (quiz-europe.ts). Comme dans quiz-star-wars.ts, le moteur mélange les
 * propositions, donc les `answers` sont écrites dans le bon ordre et
 * `correctOrder` vaut a, b, c, d. Le Vatican et Lisbonne, déjà dans le
 * vrai-faux, ne reviennent pas ici. Les écarts entre éléments sont assez
 * grands pour que le classement ne bouge pas d'une année sur l'autre.
 */
export const quizEuropeClassements: TranslatedQuiz = {
  slug: "quiz-europe-classements",
  slugs: { en: "europe-rankings-quiz", fr: "quiz-europe-classements", es: "quiz-europa-clasificaciones" },
  categorySlug: "geographie",
  subcategory: "Europe",
  difficulty: "medium",
  coverImage: "/images/cover-europe-classements.webp",
  gameType: "ordre",
  playCount: 3700,
  translations: {
    fr: {
      title: "L'Europe dans l'ordre : pays, villes et dates",
      description:
        "Dix listes à ranger sur l'Europe : pays par taille ou population, capitales du nord au sud, sommets, îles et grandes dates de l'UE.",
      questions: [
        {
          id: 1,
          question: "Range ces pays du plus grand au plus petit en superficie.",
          answers: [
            { id: "a", text: "L'Ukraine" },
            { id: "b", text: "La France métropolitaine" },
            { id: "c", text: "L'Espagne" },
            { id: "d", text: "L'Allemagne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'Ukraine fait environ 604 000 km², la France métropolitaine 552 000, l'Espagne 506 000 et l'Allemagne 358 000.",
        },
        {
          id: 2,
          question: "Range ces pays du plus peuplé au moins peuplé.",
          answers: [
            { id: "a", text: "L'Allemagne" },
            { id: "b", text: "La France" },
            { id: "c", text: "L'Italie" },
            { id: "d", text: "L'Espagne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'Allemagne a environ 83 millions d'habitants, la France 68 millions, l'Italie 59 millions et l'Espagne 49 millions.",
        },
        {
          id: 3,
          image: "/images/q-europe-classements-01.webp",
          question: "Range ces capitales de la plus au nord à la plus au sud.",
          answers: [
            { id: "a", text: "Oslo" },
            { id: "b", text: "Copenhague" },
            { id: "c", text: "Berlin" },
            { id: "d", text: "Rome" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Oslo est à peu près à 60° de latitude nord, Copenhague à 56°, Berlin à 52,5° et Rome à 42°.",
        },
        {
          id: 4,
          question: "Range ces capitales de la plus à l'ouest à la plus à l'est.",
          answers: [
            { id: "a", text: "Dublin" },
            { id: "b", text: "Madrid" },
            { id: "c", text: "Berlin" },
            { id: "d", text: "Athènes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dublin est la plus à l'ouest, puis Madrid, qui est à l'ouest de Paris. Berlin et Athènes sont bien plus à l'est, Athènes étant la plus éloignée.",
        },
        {
          id: 5,
          image: "/images/q-europe-classements-02.webp",
          question: "Range ces sommets du plus haut au moins haut.",
          answers: [
            { id: "a", text: "Le mont Blanc" },
            { id: "b", text: "Le Cervin" },
            { id: "c", text: "Le Mulhacén" },
            { id: "d", text: "Le Ben Nevis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le mont Blanc fait environ 4 806 m, le Cervin 4 478 m, le Mulhacén, en Espagne, 3 479 m et le Ben Nevis, en Écosse, 1 345 m.",
        },
        {
          id: 6,
          image: "/images/q-europe-classements-03.webp",
          question: "Range ces îles de la plus grande à la plus petite.",
          answers: [
            { id: "a", text: "La Grande-Bretagne" },
            { id: "b", text: "L'Islande" },
            { id: "c", text: "L'Irlande" },
            { id: "d", text: "La Sicile" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Grande-Bretagne fait environ 209 000 km², l'Islande 102 000, l'Irlande 84 000 et la Sicile 26 000. C'est la plus grande île de Méditerranée, mais elle reste loin derrière.",
        },
        {
          id: 7,
          image: "/images/q-europe-classements-04.webp",
          question: "Range ces petits pays du plus grand au plus petit.",
          answers: [
            { id: "a", text: "Andorre" },
            { id: "b", text: "Le Liechtenstein" },
            { id: "c", text: "Saint-Marin" },
            { id: "d", text: "Monaco" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Andorre fait 468 km², le Liechtenstein 160, Saint-Marin 61 et Monaco à peine 2 km², moins que bien des communes françaises.",
        },
        {
          id: 8,
          question: "Range ces pays selon leur date d'entrée dans la CEE ou l'Union européenne.",
          answers: [
            { id: "a", text: "La France" },
            { id: "b", text: "Le Royaume-Uni" },
            { id: "c", text: "L'Espagne" },
            { id: "d", text: "La Pologne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La France fait partie des six fondateurs de 1957. Le Royaume-Uni entre en 1973 et en ressort en 2020, l'Espagne entre en 1986 et la Pologne en 2004.",
        },
        {
          id: 9,
          image: "/images/q-europe-classements-05.webp",
          question: "Range ces pays selon la date où ils ont adopté l'euro.",
          answers: [
            { id: "a", text: "L'Allemagne" },
            { id: "b", text: "La Grèce" },
            { id: "c", text: "La Slovaquie" },
            { id: "d", text: "La Croatie" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'Allemagne en 1999, avec les premiers pays de la zone euro, la Grèce en 2001, la Slovaquie en 2009 et la Croatie en 2023.",
        },
        {
          id: 10,
          question: "Range ces traités européens du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Le traité de Rome" },
            { id: "b", text: "L'Acte unique européen" },
            { id: "c", text: "Le traité de Maastricht" },
            { id: "d", text: "Le traité de Lisbonne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le traité de Rome crée la CEE en 1957, l'Acte unique date de 1986, Maastricht crée l'Union européenne en 1992 et Lisbonne est signé en 2007.",
        },
      ],
    },
    en: {
      title: "Europe in order: countries, cities and dates",
      description:
        "Ten lists to sort about Europe: countries by size or population, capitals from north to south, peaks, islands and key EU dates.",
      questions: [
        {
          id: 1,
          question: "Sort these countries from largest to smallest by area.",
          answers: [
            { id: "a", text: "Ukraine" },
            { id: "b", text: "Mainland France" },
            { id: "c", text: "Spain" },
            { id: "d", text: "Germany" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ukraine covers about 604,000 km², mainland France 552,000, Spain 506,000 and Germany 358,000.",
        },
        {
          id: 2,
          question: "Sort these countries from most to least populous.",
          answers: [
            { id: "a", text: "Germany" },
            { id: "b", text: "France" },
            { id: "c", text: "Italy" },
            { id: "d", text: "Spain" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Germany has about 83 million people, France 68 million, Italy 59 million and Spain 49 million.",
        },
        {
          id: 3,
          image: "/images/q-europe-classements-01.webp",
          question: "Sort these capitals from furthest north to furthest south.",
          answers: [
            { id: "a", text: "Oslo" },
            { id: "b", text: "Copenhagen" },
            { id: "c", text: "Berlin" },
            { id: "d", text: "Rome" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Oslo is at roughly 60° north, Copenhagen at 56°, Berlin at 52.5° and Rome at 42°.",
        },
        {
          id: 4,
          question: "Sort these capitals from furthest west to furthest east.",
          answers: [
            { id: "a", text: "Dublin" },
            { id: "b", text: "Madrid" },
            { id: "c", text: "Berlin" },
            { id: "d", text: "Athens" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dublin is furthest west, then Madrid, which is actually west of Paris. Berlin and Athens are much further east, with Athens the furthest of all.",
        },
        {
          id: 5,
          image: "/images/q-europe-classements-02.webp",
          question: "Sort these peaks from highest to lowest.",
          answers: [
            { id: "a", text: "Mont Blanc" },
            { id: "b", text: "The Matterhorn" },
            { id: "c", text: "Mulhacén" },
            { id: "d", text: "Ben Nevis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mont Blanc is about 4,806 m, the Matterhorn 4,478 m, Mulhacén in Spain 3,479 m and Ben Nevis in Scotland 1,345 m.",
        },
        {
          id: 6,
          image: "/images/q-europe-classements-03.webp",
          question: "Sort these islands from largest to smallest.",
          answers: [
            { id: "a", text: "Great Britain" },
            { id: "b", text: "Iceland" },
            { id: "c", text: "Ireland" },
            { id: "d", text: "Sicily" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Great Britain covers about 209,000 km², Iceland 102,000, Ireland 84,000 and Sicily 26,000. Sicily is the biggest island in the Mediterranean, but it's far behind the other three.",
        },
        {
          id: 7,
          image: "/images/q-europe-classements-04.webp",
          question: "Sort these small countries from largest to smallest.",
          answers: [
            { id: "a", text: "Andorra" },
            { id: "b", text: "Liechtenstein" },
            { id: "c", text: "San Marino" },
            { id: "d", text: "Monaco" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Andorra covers 468 km², Liechtenstein 160, San Marino 61 and Monaco barely 2 km², smaller than a lot of city parks.",
        },
        {
          id: 8,
          question: "Sort these countries by when they joined the EEC or the European Union.",
          answers: [
            { id: "a", text: "France" },
            { id: "b", text: "The United Kingdom" },
            { id: "c", text: "Spain" },
            { id: "d", text: "Poland" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "France was one of the six founders in 1957. The UK joined in 1973 and left in 2020, Spain joined in 1986 and Poland in 2004.",
        },
        {
          id: 9,
          image: "/images/q-europe-classements-05.webp",
          question: "Sort these countries by when they adopted the euro.",
          answers: [
            { id: "a", text: "Germany" },
            { id: "b", text: "Greece" },
            { id: "c", text: "Slovakia" },
            { id: "d", text: "Croatia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Germany in 1999, with the first eurozone countries, Greece in 2001, Slovakia in 2009 and Croatia in 2023.",
        },
        {
          id: 10,
          question: "Sort these European treaties from oldest to newest.",
          answers: [
            { id: "a", text: "The Treaty of Rome" },
            { id: "b", text: "The Single European Act" },
            { id: "c", text: "The Maastricht Treaty" },
            { id: "d", text: "The Treaty of Lisbon" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Treaty of Rome set up the EEC in 1957, the Single European Act dates from 1986, Maastricht created the European Union in 1992 and Lisbon was signed in 2007.",
        },
      ],
    },
    es: {
      title: "Europa en orden: países, ciudades y fechas",
      description:
        "Diez listas para ordenar sobre Europa: países por tamaño o población, capitales de norte a sur, cumbres, islas y fechas clave de la UE.",
      questions: [
        {
          id: 1,
          question: "Ordena estos países del más grande al más pequeño en superficie.",
          answers: [
            { id: "a", text: "Ucrania" },
            { id: "b", text: "Francia metropolitana" },
            { id: "c", text: "España" },
            { id: "d", text: "Alemania" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ucrania tiene unos 604.000 km², la Francia metropolitana 552.000, España 506.000 y Alemania 358.000.",
        },
        {
          id: 2,
          question: "Ordena estos países del más poblado al menos poblado.",
          answers: [
            { id: "a", text: "Alemania" },
            { id: "b", text: "Francia" },
            { id: "c", text: "Italia" },
            { id: "d", text: "España" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Alemania tiene unos 83 millones de habitantes, Francia 68 millones, Italia 59 millones y España 49 millones.",
        },
        {
          id: 3,
          image: "/images/q-europe-classements-01.webp",
          question: "Ordena estas capitales de la más al norte a la más al sur.",
          answers: [
            { id: "a", text: "Oslo" },
            { id: "b", text: "Copenhague" },
            { id: "c", text: "Berlín" },
            { id: "d", text: "Roma" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Oslo está más o menos a 60° de latitud norte, Copenhague a 56°, Berlín a 52,5° y Roma a 42°.",
        },
        {
          id: 4,
          question: "Ordena estas capitales de la más al oeste a la más al este.",
          answers: [
            { id: "a", text: "Dublín" },
            { id: "b", text: "Madrid" },
            { id: "c", text: "Berlín" },
            { id: "d", text: "Atenas" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dublín es la más al oeste, luego Madrid, que queda al oeste de París. Berlín y Atenas están mucho más al este, y Atenas es la más lejana.",
        },
        {
          id: 5,
          image: "/images/q-europe-classements-02.webp",
          question: "Ordena estas cumbres de la más alta a la más baja.",
          answers: [
            { id: "a", text: "El Mont Blanc" },
            { id: "b", text: "El Cervino" },
            { id: "c", text: "El Mulhacén" },
            { id: "d", text: "El Ben Nevis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Mont Blanc mide unos 4.806 m, el Cervino 4.478 m, el Mulhacén, en Sierra Nevada, 3.479 m y el Ben Nevis, en Escocia, 1.345 m.",
        },
        {
          id: 6,
          image: "/images/q-europe-classements-03.webp",
          question: "Ordena estas islas de la más grande a la más pequeña.",
          answers: [
            { id: "a", text: "Gran Bretaña" },
            { id: "b", text: "Islandia" },
            { id: "c", text: "Irlanda" },
            { id: "d", text: "Sicilia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gran Bretaña tiene unos 209.000 km², Islandia 102.000, Irlanda 84.000 y Sicilia 26.000. Sicilia es la isla más grande del Mediterráneo, pero queda muy por detrás.",
        },
        {
          id: 7,
          image: "/images/q-europe-classements-04.webp",
          question: "Ordena estos países pequeños del más grande al más pequeño.",
          answers: [
            { id: "a", text: "Andorra" },
            { id: "b", text: "Liechtenstein" },
            { id: "c", text: "San Marino" },
            { id: "d", text: "Mónaco" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Andorra tiene 468 km², Liechtenstein 160, San Marino 61 y Mónaco apenas 2 km², menos que muchos pueblos.",
        },
        {
          id: 8,
          question: "Ordena estos países según cuándo entraron en la CEE o en la Unión Europea.",
          answers: [
            { id: "a", text: "Francia" },
            { id: "b", text: "Reino Unido" },
            { id: "c", text: "España" },
            { id: "d", text: "Polonia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Francia fue uno de los seis fundadores en 1957. Reino Unido entró en 1973 y salió en 2020, España entró en 1986 y Polonia en 2004.",
        },
        {
          id: 9,
          image: "/images/q-europe-classements-05.webp",
          question: "Ordena estos países según cuándo adoptaron el euro.",
          answers: [
            { id: "a", text: "Alemania" },
            { id: "b", text: "Grecia" },
            { id: "c", text: "Eslovaquia" },
            { id: "d", text: "Croacia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Alemania en 1999, con los primeros países del euro, Grecia en 2001, Eslovaquia en 2009 y Croacia en 2023.",
        },
        {
          id: 10,
          question: "Ordena estos tratados europeos del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El Tratado de Roma" },
            { id: "b", text: "El Acta Única Europea" },
            { id: "c", text: "El Tratado de Maastricht" },
            { id: "d", text: "El Tratado de Lisboa" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Tratado de Roma creó la CEE en 1957, el Acta Única es de 1986, Maastricht creó la Unión Europea en 1992 y el de Lisboa se firmó en 2007.",
        },
      ],
    },
  },
};

export default [quizEuropeClassements] as TranslatedQuiz[];
