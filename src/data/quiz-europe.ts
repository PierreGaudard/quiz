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
        "Vingt affirmations sur l'Europe, ses pays et ses capitales. À toi de dire lesquelles sont vraies.",
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
        {
          id: 11,
          question: "Le Luxembourg est le plus petit pays de l'Union européenne.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, le plus petit pays de l'UE est Malte, avec environ 316 km². Le Luxembourg fait un peu plus de 2 500 km².",
        },
        {
          id: 12,
          question: "Le Royaume-Uni fait toujours partie de l'Union européenne.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le Royaume-Uni a quitté l'Union européenne le 31 janvier 2020, après le référendum sur le Brexit de 2016.",
        },
        {
          id: 13,
          question: "La Hongrie n'a aucun accès à la mer.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. La Hongrie est entourée de sept pays, et son grand lac, le Balaton, est ce qui s'en rapproche le plus.",
        },
        {
          id: 14,
          question: "La Belgique a trois langues officielles.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai : le néerlandais, le français et l'allemand. L'allemand est parlé dans une petite région de l'est du pays, près de la frontière.",
        },
        {
          id: 15,
          question: "Le Danemark utilise l'euro.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le Danemark est dans l'Union européenne, mais il a gardé sa monnaie, la couronne danoise.",
        },
        {
          id: 16,
          question: "L'Andorre a deux chefs d'État, dont le président de la République française.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. L'Andorre a deux coprinces : le président français et l'évêque d'Urgell, en Espagne.",
        },
        {
          id: 17,
          question: "La Russie est le plus grand pays d'Europe.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, même en ne comptant que sa partie européenne, à l'ouest de l'Oural. Elle est bien plus grande que l'Ukraine, qui arrive deuxième.",
        },
        {
          id: 18,
          question: "Le Portugal a une frontière avec la France.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le Portugal n'a qu'un seul voisin, l'Espagne, qui le sépare de la France.",
        },
        {
          id: 19,
          question: "Saint-Pétersbourg a été la capitale de la Russie.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Pierre le Grand y a installé la capitale au début du XVIIIe siècle, et elle y est restée jusqu'en 1918, quand les bolcheviks l'ont ramenée à Moscou.",
        },
        {
          id: 20,
          question: "L'Irlande fait partie du Royaume-Uni.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. L'Irlande est un pays indépendant, membre de l'Union européenne. Seule l'Irlande du Nord, au nord-est de l'île, fait partie du Royaume-Uni.",
        },
      ],
    },
    en: {
      title: "True or False: Europe",
      description:
        "Twenty statements about Europe, its countries and its capitals. Your job is to say which ones hold up.",
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
        {
          id: 11,
          question: "Luxembourg is the smallest country in the European Union.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, the smallest EU country is Malta, at about 316 km². Luxembourg covers a little over 2,500 km².",
        },
        {
          id: 12,
          question: "The United Kingdom is still part of the European Union.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The UK left the European Union on 31 January 2020, after the 2016 Brexit referendum.",
        },
        {
          id: 13,
          question: "Hungary has no access to the sea.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Hungary is surrounded by seven countries, and its big lake, Balaton, is the closest thing it has to a coast.",
        },
        {
          id: 14,
          question: "Belgium has three official languages.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True: Dutch, French and German. German is spoken in a small area in the east of the country, near the border.",
        },
        {
          id: 15,
          question: "Denmark uses the euro.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Denmark is in the European Union, but it kept its own currency, the Danish krone.",
        },
        {
          id: 16,
          question: "Andorra has two heads of state, one of them being the President of France.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Andorra has two co-princes: the French president and the Bishop of Urgell, in Spain.",
        },
        {
          id: 17,
          question: "Russia is the largest country in Europe.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, even counting only its European part, west of the Urals. It's much bigger than Ukraine, which comes second.",
        },
        {
          id: 18,
          question: "Portugal shares a border with France.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Portugal has only one neighbour, Spain, which sits between it and France.",
        },
        {
          id: 19,
          question: "Saint Petersburg was once the capital of Russia.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Peter the Great moved the capital there in the early 18th century, and it stayed until 1918, when the Bolsheviks moved it back to Moscow.",
        },
        {
          id: 20,
          question: "Ireland is part of the United Kingdom.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Ireland is an independent country and an EU member. Only Northern Ireland, in the north-east of the island, is part of the UK.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: Europa",
      description:
        "Veinte afirmaciones sobre Europa, sus países y sus capitales. Te toca decir cuáles se sostienen.",
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
        {
          id: 11,
          question: "Luxemburgo es el país más pequeño de la Unión Europea.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, el país más pequeño de la UE es Malta, con unos 316 km². Luxemburgo tiene algo más de 2500 km².",
        },
        {
          id: 12,
          question: "Reino Unido sigue formando parte de la Unión Europea.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Reino Unido salió de la Unión Europea el 31 de enero de 2020, tras el referéndum del Brexit de 2016.",
        },
        {
          id: 13,
          question: "Hungría no tiene salida al mar.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hungría está rodeada por siete países, y su gran lago, el Balaton, es lo más parecido a una costa que tiene.",
        },
        {
          id: 14,
          question: "Bélgica tiene tres lenguas oficiales.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero: el neerlandés, el francés y el alemán. El alemán se habla en una pequeña zona del este del país, cerca de la frontera.",
        },
        {
          id: 15,
          question: "Dinamarca usa el euro.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Dinamarca está en la Unión Europea, pero ha mantenido su moneda, la corona danesa.",
        },
        {
          id: 16,
          question: "Andorra tiene dos jefes de Estado, y uno de ellos es el presidente de Francia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Andorra tiene dos copríncipes: el presidente francés y el obispo de Urgel, en España.",
        },
        {
          id: 17,
          question: "Rusia es el país más grande de Europa.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, incluso contando solo su parte europea, al oeste de los Urales. Es mucho más grande que Ucrania, que va segunda.",
        },
        {
          id: 18,
          question: "Portugal tiene frontera con Francia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Portugal solo tiene un vecino, España, que lo separa de Francia.",
        },
        {
          id: 19,
          question: "San Petersburgo fue la capital de Rusia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Pedro el Grande trasladó allí la capital a principios del siglo XVIII, y siguió allí hasta 1918, cuando los bolcheviques la devolvieron a Moscú.",
        },
        {
          id: 20,
          question: "Irlanda forma parte del Reino Unido.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Irlanda es un país independiente y miembro de la Unión Europea. Solo Irlanda del Norte, en el noreste de la isla, forma parte del Reino Unido.",
        },
      ],
    },
  },
};

export default [quizEurope] as TranslatedQuiz[];
