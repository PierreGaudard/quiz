import type { TranslatedQuiz } from "./types";

/**
 * Premier quiz en mode vrai-faux du catalogue.
 *
 * Le moteur VraiFauxPlayer identifie la reponse « vrai » par l'id « a » et la
 * reponse « faux » par l'id « b » (src/components/VraiFauxPlayer.tsx:35), ce
 * qui est le seul reperage qui fonctionne dans les trois langues : la
 * detection par le texte ne marche qu'en francais.
 */
export const quizEurope: TranslatedQuiz = {
  slug: "quiz-europe",
  slugs: { en: "europe-quiz", fr: "quiz-europe", es: "quiz-europa" },
  categorySlug: "geographie",
  subcategory: "Europe",
  difficulty: "medium",
  coverImage: "/images/sub-europe.webp",
  gameType: "vrai-faux",
  playCount: 12000,
  translations: {
    fr: {
      title: "Vrai ou faux : l'Europe",
      description:
        "Dix affirmations sur l'Europe, ses pays et ses capitales. À toi de dire lesquelles sont vraies.",
      questions: [
        {
          id: 1,
          image: "/images/q-geo-globe.webp",
          question: "Le plus petit État d'Europe est le Vatican.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Vatican fait 0,44 km², ce qui en fait le plus petit État du monde, et donc d'Europe. Monaco vient juste après avec environ 2 km².",
        },
        {
          id: 2,
          question: "La Norvège est membre de l'Union européenne.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "La Norvège a refusé l'adhésion par référendum à deux reprises, en 1972 et en 1994. Elle fait partie de l'espace Schengen, mais pas de l'Union européenne.",
        },
        {
          id: 3,
          image: "/images/q-geo-map.webp",
          question: "Le Danube traverse plus de pays que n'importe quel autre fleuve du monde.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Danube traverse dix pays, de l'Allemagne à l'Ukraine. Aucun autre fleuve n'en traverse autant.",
        },
        {
          id: 4,
          question: "La capitale de la Turquie est Istanbul.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Ankara, et ce depuis 1923. Istanbul est la plus grande ville du pays, ce qui explique la confusion, mais elle n'est pas la capitale.",
        },
        {
          id: 5,
          question: "L'Islande n'a pas d'armée permanente.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Islande n'entretient aucune armée permanente. Elle dispose de garde-côtes et fait partie de l'OTAN, mais sa défense repose sur ses alliés.",
        },
        {
          id: 6,
          image: "/images/q-drapeaux-03.webp",
          question: "La Suisse a adopté l'euro comme monnaie officielle.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "La Suisse garde le franc suisse. On peut payer en euros dans certains commerces frontaliers, mais la monnaie officielle reste le franc.",
        },
        {
          id: 7,
          question: "L'Union européenne compte 27 États membres.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Ils étaient 28 jusqu'au départ du Royaume-Uni, effectif le 31 janvier 2020. Depuis, l'Union en compte 27.",
        },
        {
          id: 8,
          question: "Le Vatican compte moins de 1 000 habitants.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Sa population tourne autour de 800 personnes, dont une bonne partie de gardes suisses et de religieux. C'est le seul État au monde sous les mille habitants.",
        },
        {
          id: 9,
          image: "/images/q-drapeaux-07.webp",
          question: "Lisbonne se trouve plus à l'ouest que Dublin.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Lisbonne est à environ 9° de longitude ouest, Dublin à 6°. On imagine souvent l'Irlande plus à l'ouest parce qu'elle est plus au nord, mais c'est bien le Portugal qui est le plus à l'ouest du continent.",
        },
        {
          id: 10,
          question: "Le Parlement européen siège à Amsterdam.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Son siège officiel est à Strasbourg, où se tiennent les sessions plénières. Une partie du travail se fait à Bruxelles, et le secrétariat est à Luxembourg. Amsterdam n'a rien à voir là-dedans.",
        },
      ],
    },
    en: {
      title: "True or False: Europe",
      description:
        "Ten statements about Europe, its countries and its capitals. Your job is to say which ones hold up.",
      questions: [
        {
          id: 1,
          image: "/images/q-geo-globe.webp",
          question: "The smallest state in Europe is the Vatican.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "The Vatican covers 0.44 km², which makes it the smallest state in the world, and therefore in Europe. Monaco comes next at about 2 km².",
        },
        {
          id: 2,
          question: "Norway is a member of the European Union.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "Norway turned membership down in two referendums, in 1972 and again in 1994. It is part of the Schengen area, but not of the European Union.",
        },
        {
          id: 3,
          image: "/images/q-geo-map.webp",
          question: "The Danube flows through more countries than any other river in the world.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "The Danube runs through ten countries, from Germany to Ukraine. No other river passes through as many.",
        },
        {
          id: 4,
          question: "The capital of Turkey is Istanbul.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "It is Ankara, and has been since 1923. Istanbul is the country's largest city, which is where the confusion comes from, but it is not the capital.",
        },
        {
          id: 5,
          question: "Iceland has no standing army.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "Iceland keeps no standing army. It has a coast guard and belongs to NATO, but its defence rests on its allies.",
        },
        {
          id: 6,
          image: "/images/q-drapeaux-03.webp",
          question: "Switzerland has adopted the euro as its official currency.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "Switzerland keeps the Swiss franc. Some shops near the border take euros, but the official currency is still the franc.",
        },
        {
          id: 7,
          question: "The European Union has 27 member states.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "There were 28 until the United Kingdom left, which took effect on 31 January 2020. The Union has counted 27 since.",
        },
        {
          id: 8,
          question: "The Vatican has fewer than 1,000 inhabitants.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "Its population sits at around 800, a good share of them Swiss Guards and clergy. It is the only state in the world under a thousand people.",
        },
        {
          id: 9,
          image: "/images/q-drapeaux-07.webp",
          question: "Lisbon lies further west than Dublin.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "Lisbon sits at about 9° west, Dublin at 6°. People picture Ireland as further west because it is further north, but Portugal is the westernmost part of the mainland.",
        },
        {
          id: 10,
          question: "The European Parliament is seated in Amsterdam.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "Its official seat is Strasbourg, where the plenary sessions are held. Part of the work happens in Brussels and the secretariat is in Luxembourg. Amsterdam has nothing to do with it.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: Europa",
      description:
        "Diez afirmaciones sobre Europa, sus países y sus capitales. Te toca decir cuáles se sostienen.",
      questions: [
        {
          id: 1,
          image: "/images/q-geo-globe.webp",
          question: "El estado más pequeño de Europa es el Vaticano.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "El Vaticano tiene 0,44 km², lo que lo convierte en el estado más pequeño del mundo, y por tanto de Europa. Mónaco viene después con unos 2 km².",
        },
        {
          id: 2,
          question: "Noruega es miembro de la Unión Europea.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Noruega rechazó la adhesión en dos referéndums, en 1972 y en 1994. Forma parte del espacio Schengen, pero no de la Unión Europea.",
        },
        {
          id: 3,
          image: "/images/q-geo-map.webp",
          question: "El Danubio atraviesa más países que cualquier otro río del mundo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "El Danubio pasa por diez países, de Alemania a Ucrania. Ningún otro río atraviesa tantos.",
        },
        {
          id: 4,
          question: "La capital de Turquía es Estambul.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Es Ankara, y lo es desde 1923. Estambul es la ciudad más grande del país, de ahí la confusión, pero no es la capital.",
        },
        {
          id: 5,
          question: "Islandia no tiene ejército permanente.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Islandia no mantiene ningún ejército permanente. Tiene guardacostas y pertenece a la OTAN, pero su defensa depende de sus aliados.",
        },
        {
          id: 6,
          image: "/images/q-drapeaux-03.webp",
          question: "Suiza ha adoptado el euro como moneda oficial.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Suiza mantiene el franco suizo. En algunos comercios de la frontera aceptan euros, pero la moneda oficial sigue siendo el franco.",
        },
        {
          id: 7,
          question: "La Unión Europea tiene 27 estados miembros.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Eran 28 hasta la salida del Reino Unido, efectiva el 31 de enero de 2020. Desde entonces la Unión cuenta 27.",
        },
        {
          id: 8,
          question: "El Vaticano tiene menos de 1.000 habitantes.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Su población ronda las 800 personas, buena parte guardias suizos y religiosos. Es el único estado del mundo por debajo de los mil habitantes.",
        },
        {
          id: 9,
          image: "/images/q-drapeaux-07.webp",
          question: "Lisboa está más al oeste que Dublín.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Lisboa está a unos 9° de longitud oeste, Dublín a 6°. Se imagina Irlanda más al oeste porque está más al norte, pero Portugal es el punto más occidental del continente.",
        },
        {
          id: 10,
          question: "El Parlamento Europeo tiene su sede en Ámsterdam.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Su sede oficial es Estrasburgo, donde se celebran los plenos. Parte del trabajo se hace en Bruselas y la secretaría está en Luxemburgo. Ámsterdam no tiene nada que ver.",
        },
      ],
    },
  },
};

export default [quizEurope] as TranslatedQuiz[];
