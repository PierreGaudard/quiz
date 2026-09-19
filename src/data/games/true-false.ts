import type { Locale } from "../../i18n/config";

/**
 * Les affirmations du « vrai ou faux ».
 *
 * Chacune porte une explication, et ce n'est pas un ornement : une
 * affirmation fausse sans explication laisse le joueur avec une croyance
 * corrigee et rien pour la remplacer. C'est la ou le jeu apprend quelque
 * chose, donc c'est la partie qui ne se bacle pas.
 *
 * Les fausses sont choisies parmi les idees recues qu'on entend vraiment (la
 * Grande Muraille depuis la Lune, les chauves-souris aveugles, le Sahara plus
 * grand desert), pas inventees pour piéger. Un « faux » qu'on ne pouvait pas
 * deviner n'apprend rien non plus.
 */
export interface TrueFalseStatement {
  id: string;
  answer: boolean;
  categorySlug: string;
  text: Record<Locale, string>;
  explanation: Record<Locale, string>;
}

export const trueFalseStatements: TrueFalseStatement[] = [
  {
    id: "greenland-australia",
    answer: false,
    categorySlug: "geographie",
    text: { en: "Greenland is larger than Australia.", fr: "Le Groenland est plus grand que l'Australie.", es: "Groenlandia es más grande que Australia." },
    explanation: { en: "Greenland covers about 2.2 million km², Australia 7.7 million. Flat maps stretch what sits near the poles, which is where the idea comes from.", fr: "Le Groenland fait environ 2,2 millions de km², l'Australie 7,7 millions. Les cartes à plat étirent ce qui est près des pôles, et c'est de là que vient l'idée.", es: "Groenlandia mide unos 2,2 millones de km², Australia 7,7 millones. Los mapas planos estiran lo que está cerca de los polos, y de ahí sale la idea." },
  },
  {
    id: "sahara-largest",
    answer: false,
    categorySlug: "geographie",
    text: { en: "The Sahara is the largest desert in the world.", fr: "Le Sahara est le plus grand désert du monde.", es: "El Sahara es el desierto más grande del mundo." },
    explanation: { en: "A desert is defined by how little it rains, not by its heat. On that count Antarctica comes first, and the Sahara is the largest hot desert.", fr: "Un désert se définit par ses précipitations, pas par sa chaleur. À ce compte-là c'est l'Antarctique qui arrive en premier, et le Sahara est le plus grand désert chaud.", es: "Un desierto se define por sus precipitaciones, no por su calor. Con ese criterio el primero es la Antártida, y el Sahara es el mayor desierto cálido." },
  },
  {
    id: "istanbul-capital",
    answer: false,
    categorySlug: "geographie",
    text: { en: "Istanbul is the capital of Turkey.", fr: "Istanbul est la capitale de la Turquie.", es: "Estambul es la capital de Turquía." },
    explanation: { en: "The capital is Ankara, since 1923. Istanbul is the largest city, which is what makes people mix the two up.", fr: "La capitale est Ankara, depuis 1923. Istanbul est la plus grande ville du pays, et c'est ce qui fait qu'on confond les deux.", es: "La capital es Ankara, desde 1923. Estambul es la ciudad más grande del país, y por eso se confunden las dos." },
  },
  {
    id: "sydney-capital",
    answer: false,
    categorySlug: "geographie",
    text: { en: "Sydney is the capital of Australia.", fr: "Sydney est la capitale de l'Australie.", es: "Sídney es la capital de Australia." },
    explanation: { en: "Canberra is. It was built as a compromise between Sydney and Melbourne, which both wanted the title.", fr: "C'est Canberra. Elle a été construite comme un compromis entre Sydney et Melbourne, qui voulaient le titre toutes les deux.", es: "Es Canberra. Se construyó como un acuerdo entre Sídney y Melbourne, que querían el título las dos." },
  },
  {
    id: "vatican-smallest",
    answer: true,
    categorySlug: "geographie",
    text: { en: "Vatican City is the smallest country in the world.", fr: "Le Vatican est le plus petit État du monde.", es: "El Vaticano es el Estado más pequeño del mundo." },
    explanation: { en: "It covers 0.44 km², which fits inside Rome. Monaco comes second, about four times bigger.", fr: "Il fait 0,44 km², ce qui tient dans Rome. Monaco arrive en deuxième, environ quatre fois plus grand.", es: "Mide 0,44 km², y cabe dentro de Roma. Mónaco es el segundo, unas cuatro veces mayor." },
  },
  {
    id: "bolivia-two-capitals",
    answer: true,
    categorySlug: "geographie",
    text: { en: "Bolivia has two capitals.", fr: "La Bolivie a deux capitales.", es: "Bolivia tiene dos capitales." },
    explanation: { en: "Sucre is the constitutional capital and holds the supreme court, while the government and parliament sit in La Paz.", fr: "Sucre est la capitale constitutionnelle et abrite la cour suprême, pendant que le gouvernement et le parlement siègent à La Paz.", es: "Sucre es la capital constitucional y alberga el tribunal supremo, mientras que el gobierno y el parlamento están en La Paz." },
  },
  {
    id: "china-one-timezone",
    answer: true,
    categorySlug: "geographie",
    text: { en: "China uses a single official time zone.", fr: "La Chine n'a qu'un seul fuseau horaire officiel.", es: "China tiene un solo huso horario oficial." },
    explanation: { en: "The whole country runs on Beijing time, although it spans the width of five. In the far west the sun rises well after eight in the morning.", fr: "Tout le pays vit à l'heure de Pékin, alors qu'il s'étend sur la largeur de cinq fuseaux. Dans l'extrême ouest, le soleil se lève bien après huit heures.", es: "Todo el país vive con la hora de Pekín, aunque se extiende a lo ancho de cinco husos. En el extremo oeste el sol sale bastante después de las ocho." },
  },
  {
    id: "iceland-army",
    answer: false,
    categorySlug: "geographie",
    text: { en: "Iceland has a standing army.", fr: "L'Islande a une armée.", es: "Islandia tiene ejército." },
    explanation: { en: "It has none, and has not had one for a long time. It keeps a coast guard and a police force, and its defence runs through NATO.", fr: "Elle n'en a pas, et n'en a pas depuis longtemps. Elle garde des garde-côtes et une police, et sa défense passe par l'OTAN.", es: "No tiene, y hace mucho que no. Mantiene guardacostas y policía, y su defensa pasa por la OTAN." },
  },
  {
    id: "denmark-largest-nordic",
    answer: false,
    categorySlug: "geographie",
    text: { en: "Denmark is the largest Nordic country.", fr: "Le Danemark est le plus grand pays nordique.", es: "Dinamarca es el país nórdico más grande." },
    explanation: { en: "Sweden is, at about 450 000 km². Denmark is the smallest of the group, around 43 000.", fr: "C'est la Suède, avec environ 450 000 km². Le Danemark est le plus petit du groupe, autour de 43 000.", es: "Es Suecia, con unos 450 000 km². Dinamarca es el más pequeño del grupo, unos 43 000." },
  },
  {
    id: "dead-sea-lake",
    answer: true,
    categorySlug: "geographie",
    text: { en: "The Dead Sea is a lake.", fr: "La mer Morte est un lac.", es: "El mar Muerto es un lago." },
    explanation: { en: "It is closed off with no outlet to any ocean, which is the definition of a lake. Its salt content is what earned it the other name.", fr: "Elle est fermée et ne débouche sur aucun océan, ce qui est la définition d'un lac. C'est sa teneur en sel qui lui a valu l'autre nom.", es: "Está cerrado y no desemboca en ningún océano, que es la definición de un lago. Su cantidad de sal es lo que le valió el otro nombre." },
  },
  {
    id: "mont-blanc-border",
    answer: true,
    categorySlug: "geographie",
    text: { en: "Mont Blanc sits on the border between France and Italy.", fr: "Le Mont Blanc se trouve à la frontière entre la France et l'Italie.", es: "El Mont Blanc está en la frontera entre Francia e Italia." },
    explanation: { en: "The massif straddles the two, and where exactly the summit falls has been argued over for a very long time.", fr: "Le massif est à cheval sur les deux, et l'endroit exact où tombe le sommet se discute depuis très longtemps.", es: "El macizo está a caballo entre los dos, y dónde cae exactamente la cumbre se discute desde hace mucho." },
  },
  {
    id: "titanic-billion",
    answer: true,
    categorySlug: "cinema",
    text: { en: "Titanic was the first film to pass one billion dollars at the box office.", fr: "Titanic est le premier film à avoir dépassé le milliard de dollars au box-office.", es: "Titanic fue la primera película en pasar los mil millones de dólares en taquilla." },
    explanation: { en: "It got there in 1998, and stayed at the top until Avatar, by the same director, went past it.", fr: "Il y est arrivé en 1998, et il est resté en tête jusqu'à ce qu'Avatar, du même réalisateur, le dépasse.", es: "Lo logró en 1998, y se quedó arriba hasta que Avatar, del mismo director, lo superó." },
  },
  {
    id: "godfather-before-starwars",
    answer: true,
    categorySlug: "cinema",
    text: { en: "The Godfather came out before Star Wars.", fr: "Le Parrain est sorti avant Star Wars.", es: "El Padrino se estrenó antes que Star Wars." },
    explanation: { en: "1972 for one, 1977 for the other. Five years apart, in the decade that reshaped both.", fr: "1972 pour l'un, 1977 pour l'autre. Cinq ans d'écart, dans la décennie qui a refait les deux.", es: "1972 uno, 1977 el otro. Cinco años de diferencia, en la década que rehízo a los dos." },
  },
  {
    id: "toy-story-cgi",
    answer: true,
    categorySlug: "cinema",
    text: { en: "Toy Story was the first feature film made entirely with computer graphics.", fr: "Toy Story est le premier long-métrage entièrement en images de synthèse.", es: "Toy Story fue el primer largometraje hecho enteramente con imágenes por ordenador." },
    explanation: { en: "It came out in 1995. Before it, computer graphics turned up in sequences inside films, never across a whole one.", fr: "Il est sorti en 1995. Avant lui, les images de synthèse apparaissaient dans des séquences, jamais sur un film entier.", es: "Se estrenó en 1995. Antes de él, las imágenes por ordenador salían en secuencias, nunca en una película entera." },
  },
  {
    id: "cameron-titanic-avatar",
    answer: true,
    categorySlug: "cinema",
    text: { en: "Titanic and Avatar have the same director.", fr: "Titanic et Avatar ont le même réalisateur.", es: "Titanic y Avatar tienen el mismo director." },
    explanation: { en: "James Cameron made both, twelve years apart, and each one took the box office record in its turn.", fr: "James Cameron a fait les deux, à douze ans d'écart, et chacun a pris le record du box-office à son tour.", es: "James Cameron hizo las dos, con doce años de diferencia, y cada una se llevó el récord de taquilla a su vez." },
  },
  {
    id: "parasite-oscar",
    answer: true,
    categorySlug: "cinema",
    text: { en: "Parasite was the first non-English-language film to win the best picture Oscar.", fr: "Parasite est le premier film non anglophone à avoir remporté l'Oscar du meilleur film.", es: "Parásitos fue la primera película en lengua no inglesa en ganar el Oscar a la mejor película." },
    explanation: { en: "It won in 2020, ninety-two ceremonies in. Films in other languages had been nominated before, never won.", fr: "Il a gagné en 2020, à la quatre-vingt-douzième cérémonie. Des films en d'autres langues avaient déjà été nommés, jamais primés.", es: "Ganó en 2020, en la nonagésima segunda ceremonia. Ya había habido películas en otras lenguas nominadas, nunca premiadas." },
  },
  {
    id: "lion-king-liveaction",
    answer: false,
    categorySlug: "cinema",
    text: { en: "The 1994 Lion King is a live-action film.", fr: "Le Roi Lion de 1994 est un film en prises de vues réelles.", es: "El Rey León de 1994 es una película de imagen real." },
    explanation: { en: "It is hand-drawn animation. The live-action look came with the 2019 remake, which is itself made with computer graphics.", fr: "C'est un film d'animation dessiné à la main. Le rendu réaliste est venu avec le remake de 2019, lui-même en images de synthèse.", es: "Es una película de animación dibujada a mano. El aspecto realista llegó con el remake de 2019, hecho a su vez por ordenador." },
  },
  {
    id: "chihiro-oscar",
    answer: true,
    categorySlug: "cinema",
    text: { en: "Spirited Away won the Oscar for best animated feature.", fr: "Le Voyage de Chihiro a remporté l'Oscar du meilleur film d'animation.", es: "El viaje de Chihiro ganó el Oscar a la mejor película de animación." },
    explanation: { en: "It won in 2003, and it is still the only hand-drawn film from outside the United States to have taken that award.", fr: "Il l'a eu en 2003, et il reste le seul film dessiné à la main venu de l'étranger à avoir pris cette récompense.", es: "Lo ganó en 2003, y sigue siendo la única película dibujada a mano de fuera de Estados Unidos que se ha llevado ese premio." },
  },
  {
    id: "toriyama-dragonball",
    answer: true,
    categorySlug: "anime",
    text: { en: "Dragon Ball was created by Akira Toriyama.", fr: "Dragon Ball a été créé par Akira Toriyama.", es: "Dragon Ball fue creado por Akira Toriyama." },
    explanation: { en: "He started it in 1984, loosely from the Chinese tale Journey to the West, and drew it for eleven years.", fr: "Il l'a lancé en 1984, librement inspiré du conte chinois La Pérégrination vers l'Ouest, et l'a dessiné pendant onze ans.", es: "Lo lanzó en 1984, inspirado libremente en el cuento chino Viaje al Oeste, y lo dibujó durante once años." },
  },
  {
    id: "naruto-konoha",
    answer: true,
    categorySlug: "anime",
    text: { en: "Naruto is a ninja from the village of Konoha.", fr: "Naruto est un ninja du village de Konoha.", es: "Naruto es un ninja de la aldea de Konoha." },
    explanation: { en: "Konoha is the Hidden Leaf Village, and becoming its Hokage is what he is after from the first chapter.", fr: "Konoha est le village caché de la Feuille, et en devenir le Hokage est ce qu'il vise dès le premier chapitre.", es: "Konoha es la Aldea Oculta de la Hoja, y ser su Hokage es lo que busca desde el primer capítulo." },
  },
  {
    id: "minecraft-japanese",
    answer: false,
    categorySlug: "jeux-video",
    text: { en: "Minecraft was made by a Japanese studio.", fr: "Minecraft a été créé par un studio japonais.", es: "Minecraft lo hizo un estudio japonés." },
    explanation: { en: "It is Swedish. Markus Persson released it in 2009 and Mojang, in Stockholm, went on making it.", fr: "Il est suédois. Markus Persson l'a sorti en 2009 et Mojang, à Stockholm, a continué à le faire.", es: "Es sueco. Markus Persson lo sacó en 2009 y Mojang, en Estocolmo, siguió haciéndolo." },
  },
  {
    id: "enderdragon-nether",
    answer: false,
    categorySlug: "jeux-video",
    text: { en: "In Minecraft, the Ender Dragon is found in the Nether.", fr: "Dans Minecraft, l'Ender Dragon se trouve dans le Nether.", es: "En Minecraft, el Dragón del End está en el Nether." },
    explanation: { en: "It lives in the End, reached through its own portal. The Nether is the other dimension, the one you get to with obsidian.", fr: "Il vit dans l'End, où l'on entre par un portail à part. Le Nether est l'autre dimension, celle où l'on va avec de l'obsidienne.", es: "Vive en el End, al que se entra por un portal aparte. El Nether es la otra dimensión, a la que se va con obsidiana." },
  },
  {
    id: "pikachu-electric",
    answer: true,
    categorySlug: "jeux-video",
    text: { en: "Pikachu is an electric-type Pokémon.", fr: "Pikachu est un Pokémon de type électrique.", es: "Pikachu es un Pokémon de tipo eléctrico." },
    explanation: { en: "Pure electric type, from the first generation, and the one the series put on its own cover.", fr: "Type électrique pur, de la première génération, et celui que la série a mis sur sa propre couverture.", es: "Tipo eléctrico puro, de la primera generación, y el que la serie puso en su propia portada." },
  },
  {
    id: "marathon-distance",
    answer: true,
    categorySlug: "sport",
    text: { en: "A marathon is 42.195 kilometres.", fr: "Un marathon fait 42,195 kilomètres.", es: "Un maratón son 42,195 kilómetros." },
    explanation: { en: "The odd figure comes from the 1908 London Games, where the course was stretched to finish in front of the royal box.", fr: "Le chiffre bizarre vient des Jeux de Londres en 1908, où le parcours a été allongé pour finir devant la loge royale.", es: "La cifra rara viene de los Juegos de Londres de 1908, donde el recorrido se alargó para acabar frente al palco real." },
  },
  {
    id: "olympics-1896",
    answer: true,
    categorySlug: "sport",
    text: { en: "The modern Olympic Games began in 1896.", fr: "Les Jeux olympiques modernes ont commencé en 1896.", es: "Los Juegos Olímpicos modernos empezaron en 1896." },
    explanation: { en: "In Athens, with fourteen countries. Women were not admitted until the next edition, in Paris.", fr: "À Athènes, avec quatorze pays. Les femmes n'y ont été admises qu'à l'édition suivante, à Paris.", es: "En Atenas, con catorce países. Las mujeres no fueron admitidas hasta la edición siguiente, en París." },
  },
  {
    id: "tour-de-france-only",
    answer: false,
    categorySlug: "sport",
    text: { en: "The Tour de France is raced only in France.", fr: "Le Tour de France se court uniquement en France.", es: "El Tour de Francia se corre solo en Francia." },
    explanation: { en: "It crosses into its neighbours nearly every year, and it has started abroad many times, from Copenhagen to Bilbao.", fr: "Il passe chez ses voisins presque chaque année, et il est parti de l'étranger bien des fois, de Copenhague à Bilbao.", es: "Pasa por sus vecinos casi todos los años, y ha salido del extranjero muchas veces, de Copenhague a Bilbao." },
  },
  {
    id: "basketball-five",
    answer: true,
    categorySlug: "sport",
    text: { en: "Basketball is played five against five on court.", fr: "Le basket se joue à cinq joueurs par équipe sur le terrain.", es: "El baloncesto se juega con cinco jugadores por equipo en la pista." },
    explanation: { en: "Five each, with substitutions allowed as often as the coach wants, unlike football.", fr: "Cinq de chaque côté, avec des remplacements aussi souvent que l'entraîneur le veut, contrairement au football.", es: "Cinco por lado, con cambios tantas veces como quiera el entrenador, al contrario que en el fútbol." },
  },
  {
    id: "bones-206",
    answer: true,
    categorySlug: "culture",
    text: { en: "An adult human body has 206 bones.", fr: "Le corps humain adulte compte 206 os.", es: "El cuerpo humano adulto tiene 206 huesos." },
    explanation: { en: "A newborn has around 270. Some of them fuse as the body grows, which is why the adult number is lower.", fr: "Un nouveau-né en a environ 270. Certains se soudent en grandissant, et c'est pour ça que le nombre adulte est plus bas.", es: "Un recién nacido tiene unos 270. Algunos se sueldan al crecer, y por eso el número adulto es más bajo." },
  },
  {
    id: "eiffel-1889",
    answer: true,
    categorySlug: "culture",
    text: { en: "The Eiffel Tower was built for the 1889 World's Fair.", fr: "La Tour Eiffel a été construite pour l'Exposition universelle de 1889.", es: "La Torre Eiffel se construyó para la Exposición Universal de 1889." },
    explanation: { en: "It was meant to come down after twenty years, and the radio aerial installed at the top is what saved it.", fr: "Elle devait être démontée au bout de vingt ans, et c'est l'antenne radio installée au sommet qui l'a sauvée.", es: "Debía desmontarse a los veinte años, y fue la antena de radio instalada arriba lo que la salvó." },
  },
  {
    id: "great-wall-moon",
    answer: false,
    categorySlug: "culture",
    text: { en: "The Great Wall of China can be seen from the Moon with the naked eye.", fr: "La Grande Muraille de Chine est visible à l'œil nu depuis la Lune.", es: "La Gran Muralla China se ve a simple vista desde la Luna." },
    explanation: { en: "It cannot. It is a few metres wide, and from the Moon that is nothing at all. Astronauts have said so repeatedly.", fr: "Non. Elle fait quelques mètres de large, et depuis la Lune ça ne représente rien du tout. Les astronautes l'ont dit et répété.", es: "No. Mide unos metros de ancho, y desde la Luna eso no es nada. Los astronautas lo han dicho una y otra vez." },
  },
  {
    id: "bats-blind",
    answer: false,
    categorySlug: "culture",
    text: { en: "Bats are blind.", fr: "Les chauves-souris sont aveugles.", es: "Los murciélagos son ciegos." },
    explanation: { en: "They all see, and some see well. Echolocation is what they add to it in the dark, it is not a replacement for eyes.", fr: "Elles voient toutes, et certaines voient bien. L'écholocation est ce qu'elles ajoutent dans le noir, ce n'est pas un remplacement des yeux.", es: "Todos ven, y algunos ven bien. La ecolocalización es lo que añaden en la oscuridad, no un sustituto de los ojos." },
  },
  {
    id: "tomato-fruit",
    answer: true,
    categorySlug: "culture",
    text: { en: "A tomato is botanically a fruit.", fr: "La tomate est botaniquement un fruit.", es: "El tomate es botánicamente una fruta." },
    explanation: { en: "It grows from the flower and carries the seeds, which is the botanical definition. In the kitchen it is treated as a vegetable, and both are right in their own field.", fr: "Elle vient de la fleur et porte les graines, ce qui est la définition botanique. En cuisine on la traite comme un légume, et les deux ont raison dans leur domaine.", es: "Sale de la flor y lleva las semillas, que es la definición botánica. En la cocina se trata como una verdura, y las dos tienen razón en su terreno." },
  },
  {
    id: "mars-closest",
    answer: false,
    categorySlug: "culture",
    text: { en: "Mars is the closest planet to the Sun.", fr: "Mars est la planète la plus proche du Soleil.", es: "Marte es el planeta más cercano al Sol." },
    explanation: { en: "Mercury is. Mars comes fourth, just after Earth, going outwards.", fr: "C'est Mercure. Mars arrive en quatrième, juste après la Terre, en s'éloignant.", es: "Es Mercurio. Marte es el cuarto, justo después de la Tierra, alejándose." },
  },
  {
    id: "venus-day-year",
    answer: true,
    categorySlug: "culture",
    text: { en: "A day on Venus lasts longer than a year on Venus.", fr: "Un jour sur Vénus dure plus longtemps qu'une année sur Vénus.", es: "Un día en Venus dura más que un año en Venus." },
    explanation: { en: "It turns on itself in about 243 Earth days and goes round the Sun in 225. It gets back before it has finished turning.", fr: "Elle tourne sur elle-même en environ 243 jours terrestres et fait le tour du Soleil en 225. Elle revient avant d'avoir fini de tourner.", es: "Gira sobre sí misma en unos 243 días terrestres y da la vuelta al Sol en 225. Vuelve antes de haber acabado de girar." },
  },
  {
    id: "sun-is-star",
    answer: true,
    categorySlug: "culture",
    text: { en: "The Sun is a star.", fr: "Le Soleil est une étoile.", es: "El Sol es una estrella." },
    explanation: { en: "An ordinary one, on the small side. It only looks different because it is the one next door.", fr: "Une étoile ordinaire, plutôt petite. Elle ne paraît différente que parce que c'est celle d'à côté.", es: "Una estrella corriente, más bien pequeña. Solo parece distinta porque es la de al lado." },
  },
  {
    id: "nordics-euro",
    answer: false,
    categorySlug: "culture",
    text: { en: "Denmark, Norway and Sweden all use the euro.", fr: "Le Danemark, la Norvège et la Suède utilisent tous les trois l'euro.", es: "Dinamarca, Noruega y Suecia usan las tres el euro." },
    explanation: { en: "None of the three does. Each keeps its own krone or krona, and Norway is not even in the European Union.", fr: "Aucun des trois. Chacun garde sa couronne, et la Norvège n'est même pas dans l'Union européenne.", es: "Ninguno de los tres. Cada uno mantiene su corona, y Noruega ni siquiera está en la Unión Europea." },
  },
];
