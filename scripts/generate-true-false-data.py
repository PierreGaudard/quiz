# -*- coding: utf-8 -*-
# id, vrai?, categorie, (enonce en,fr,es), (explication en,fr,es)
S = [
("greenland-australia", False, "geographie",
 ("Greenland is larger than Australia.","Le Groenland est plus grand que l'Australie.","Groenlandia es más grande que Australia."),
 ("Greenland covers about 2.2 million km², Australia 7.7 million. Flat maps stretch what sits near the poles, which is where the idea comes from.",
  "Le Groenland fait environ 2,2 millions de km², l'Australie 7,7 millions. Les cartes à plat étirent ce qui est près des pôles, et c'est de là que vient l'idée.",
  "Groenlandia mide unos 2,2 millones de km², Australia 7,7 millones. Los mapas planos estiran lo que está cerca de los polos, y de ahí sale la idea.")),
("sahara-largest", False, "geographie",
 ("The Sahara is the largest desert in the world.","Le Sahara est le plus grand désert du monde.","El Sahara es el desierto más grande del mundo."),
 ("A desert is defined by how little it rains, not by its heat. On that count Antarctica comes first, and the Sahara is the largest hot desert.",
  "Un désert se définit par ses précipitations, pas par sa chaleur. À ce compte-là c'est l'Antarctique qui arrive en premier, et le Sahara est le plus grand désert chaud.",
  "Un desierto se define por sus precipitaciones, no por su calor. Con ese criterio el primero es la Antártida, y el Sahara es el mayor desierto cálido.")),
("istanbul-capital", False, "geographie",
 ("Istanbul is the capital of Turkey.","Istanbul est la capitale de la Turquie.","Estambul es la capital de Turquía."),
 ("The capital is Ankara, since 1923. Istanbul is the largest city, which is what makes people mix the two up.",
  "La capitale est Ankara, depuis 1923. Istanbul est la plus grande ville du pays, et c'est ce qui fait qu'on confond les deux.",
  "La capital es Ankara, desde 1923. Estambul es la ciudad más grande del país, y por eso se confunden las dos.")),
("sydney-capital", False, "geographie",
 ("Sydney is the capital of Australia.","Sydney est la capitale de l'Australie.","Sídney es la capital de Australia."),
 ("Canberra is. It was built as a compromise between Sydney and Melbourne, which both wanted the title.",
  "C'est Canberra. Elle a été construite comme un compromis entre Sydney et Melbourne, qui voulaient le titre toutes les deux.",
  "Es Canberra. Se construyó como un acuerdo entre Sídney y Melbourne, que querían el título las dos.")),
("vatican-smallest", True, "geographie",
 ("Vatican City is the smallest country in the world.","Le Vatican est le plus petit État du monde.","El Vaticano es el Estado más pequeño del mundo."),
 ("It covers 0.44 km², which fits inside Rome. Monaco comes second, about four times bigger.",
  "Il fait 0,44 km², ce qui tient dans Rome. Monaco arrive en deuxième, environ quatre fois plus grand.",
  "Mide 0,44 km², y cabe dentro de Roma. Mónaco es el segundo, unas cuatro veces mayor.")),
("bolivia-two-capitals", True, "geographie",
 ("Bolivia has two capitals.","La Bolivie a deux capitales.","Bolivia tiene dos capitales."),
 ("Sucre is the constitutional capital and holds the supreme court, while the government and parliament sit in La Paz.",
  "Sucre est la capitale constitutionnelle et abrite la cour suprême, pendant que le gouvernement et le parlement siègent à La Paz.",
  "Sucre es la capital constitucional y alberga el tribunal supremo, mientras que el gobierno y el parlamento están en La Paz.")),
("china-one-timezone", True, "geographie",
 ("China uses a single official time zone.","La Chine n'a qu'un seul fuseau horaire officiel.","China tiene un solo huso horario oficial."),
 ("The whole country runs on Beijing time, although it spans the width of five. In the far west the sun rises well after eight in the morning.",
  "Tout le pays vit à l'heure de Pékin, alors qu'il s'étend sur la largeur de cinq fuseaux. Dans l'extrême ouest, le soleil se lève bien après huit heures.",
  "Todo el país vive con la hora de Pekín, aunque se extiende a lo ancho de cinco husos. En el extremo oeste el sol sale bastante después de las ocho.")),
("iceland-army", False, "geographie",
 ("Iceland has a standing army.","L'Islande a une armée.","Islandia tiene ejército."),
 ("It has none, and has not had one for a long time. It keeps a coast guard and a police force, and its defence runs through NATO.",
  "Elle n'en a pas, et n'en a pas depuis longtemps. Elle garde des garde-côtes et une police, et sa défense passe par l'OTAN.",
  "No tiene, y hace mucho que no. Mantiene guardacostas y policía, y su defensa pasa por la OTAN.")),
("denmark-largest-nordic", False, "geographie",
 ("Denmark is the largest Nordic country.","Le Danemark est le plus grand pays nordique.","Dinamarca es el país nórdico más grande."),
 ("Sweden is, at about 450 000 km². Denmark is the smallest of the group, around 43 000.",
  "C'est la Suède, avec environ 450 000 km². Le Danemark est le plus petit du groupe, autour de 43 000.",
  "Es Suecia, con unos 450 000 km². Dinamarca es el más pequeño del grupo, unos 43 000.")),
("dead-sea-lake", True, "geographie",
 ("The Dead Sea is a lake.","La mer Morte est un lac.","El mar Muerto es un lago."),
 ("It is closed off with no outlet to any ocean, which is the definition of a lake. Its salt content is what earned it the other name.",
  "Elle est fermée et ne débouche sur aucun océan, ce qui est la définition d'un lac. C'est sa teneur en sel qui lui a valu l'autre nom.",
  "Está cerrado y no desemboca en ningún océano, que es la definición de un lago. Su cantidad de sal es lo que le valió el otro nombre.")),
("mont-blanc-border", True, "geographie",
 ("Mont Blanc sits on the border between France and Italy.","Le Mont Blanc se trouve à la frontière entre la France et l'Italie.","El Mont Blanc está en la frontera entre Francia e Italia."),
 ("The massif straddles the two, and where exactly the summit falls has been argued over for a very long time.",
  "Le massif est à cheval sur les deux, et l'endroit exact où tombe le sommet se discute depuis très longtemps.",
  "El macizo está a caballo entre los dos, y dónde cae exactamente la cumbre se discute desde hace mucho.")),
("titanic-billion", True, "cinema",
 ("Titanic was the first film to pass one billion dollars at the box office.","Titanic est le premier film à avoir dépassé le milliard de dollars au box-office.","Titanic fue la primera película en pasar los mil millones de dólares en taquilla."),
 ("It got there in 1998, and stayed at the top until Avatar, by the same director, went past it.",
  "Il y est arrivé en 1998, et il est resté en tête jusqu'à ce qu'Avatar, du même réalisateur, le dépasse.",
  "Lo logró en 1998, y se quedó arriba hasta que Avatar, del mismo director, lo superó.")),
("godfather-before-starwars", True, "cinema",
 ("The Godfather came out before Star Wars.","Le Parrain est sorti avant Star Wars.","El Padrino se estrenó antes que Star Wars."),
 ("1972 for one, 1977 for the other. Five years apart, in the decade that reshaped both.",
  "1972 pour l'un, 1977 pour l'autre. Cinq ans d'écart, dans la décennie qui a refait les deux.",
  "1972 uno, 1977 el otro. Cinco años de diferencia, en la década que rehízo a los dos.")),
("toy-story-cgi", True, "cinema",
 ("Toy Story was the first feature film made entirely with computer graphics.","Toy Story est le premier long-métrage entièrement en images de synthèse.","Toy Story fue el primer largometraje hecho enteramente con imágenes por ordenador."),
 ("It came out in 1995. Before it, computer graphics turned up in sequences inside films, never across a whole one.",
  "Il est sorti en 1995. Avant lui, les images de synthèse apparaissaient dans des séquences, jamais sur un film entier.",
  "Se estrenó en 1995. Antes de él, las imágenes por ordenador salían en secuencias, nunca en una película entera.")),
("cameron-titanic-avatar", True, "cinema",
 ("Titanic and Avatar have the same director.","Titanic et Avatar ont le même réalisateur.","Titanic y Avatar tienen el mismo director."),
 ("James Cameron made both, twelve years apart, and each one took the box office record in its turn.",
  "James Cameron a fait les deux, à douze ans d'écart, et chacun a pris le record du box-office à son tour.",
  "James Cameron hizo las dos, con doce años de diferencia, y cada una se llevó el récord de taquilla a su vez.")),
("parasite-oscar", True, "cinema",
 ("Parasite was the first non-English-language film to win the best picture Oscar.","Parasite est le premier film non anglophone à avoir remporté l'Oscar du meilleur film.","Parásitos fue la primera película en lengua no inglesa en ganar el Oscar a la mejor película."),
 ("It won in 2020, ninety-two ceremonies in. Films in other languages had been nominated before, never won.",
  "Il a gagné en 2020, à la quatre-vingt-douzième cérémonie. Des films en d'autres langues avaient déjà été nommés, jamais primés.",
  "Ganó en 2020, en la nonagésima segunda ceremonia. Ya había habido películas en otras lenguas nominadas, nunca premiadas.")),
("lion-king-liveaction", False, "cinema",
 ("The 1994 Lion King is a live-action film.","Le Roi Lion de 1994 est un film en prises de vues réelles.","El Rey León de 1994 es una película de imagen real."),
 ("It is hand-drawn animation. The live-action look came with the 2019 remake, which is itself made with computer graphics.",
  "C'est un film d'animation dessiné à la main. Le rendu réaliste est venu avec le remake de 2019, lui-même en images de synthèse.",
  "Es una película de animación dibujada a mano. El aspecto realista llegó con el remake de 2019, hecho a su vez por ordenador.")),
("chihiro-oscar", True, "cinema",
 ("Spirited Away won the Oscar for best animated feature.","Le Voyage de Chihiro a remporté l'Oscar du meilleur film d'animation.","El viaje de Chihiro ganó el Oscar a la mejor película de animación."),
 ("It won in 2003, and it is still the only hand-drawn film from outside the United States to have taken that award.",
  "Il l'a eu en 2003, et il reste le seul film dessiné à la main venu de l'étranger à avoir pris cette récompense.",
  "Lo ganó en 2003, y sigue siendo la única película dibujada a mano de fuera de Estados Unidos que se ha llevado ese premio.")),
("toriyama-dragonball", True, "anime",
 ("Dragon Ball was created by Akira Toriyama.","Dragon Ball a été créé par Akira Toriyama.","Dragon Ball fue creado por Akira Toriyama."),
 ("He started it in 1984, loosely from the Chinese tale Journey to the West, and drew it for eleven years.",
  "Il l'a lancé en 1984, librement inspiré du conte chinois La Pérégrination vers l'Ouest, et l'a dessiné pendant onze ans.",
  "Lo lanzó en 1984, inspirado libremente en el cuento chino Viaje al Oeste, y lo dibujó durante once años.")),
("naruto-konoha", True, "anime",
 ("Naruto is a ninja from the village of Konoha.","Naruto est un ninja du village de Konoha.","Naruto es un ninja de la aldea de Konoha."),
 ("Konoha is the Hidden Leaf Village, and becoming its Hokage is what he is after from the first chapter.",
  "Konoha est le village caché de la Feuille, et en devenir le Hokage est ce qu'il vise dès le premier chapitre.",
  "Konoha es la Aldea Oculta de la Hoja, y ser su Hokage es lo que busca desde el primer capítulo.")),
("minecraft-japanese", False, "jeux-video",
 ("Minecraft was made by a Japanese studio.","Minecraft a été créé par un studio japonais.","Minecraft lo hizo un estudio japonés."),
 ("It is Swedish. Markus Persson released it in 2009 and Mojang, in Stockholm, went on making it.",
  "Il est suédois. Markus Persson l'a sorti en 2009 et Mojang, à Stockholm, a continué à le faire.",
  "Es sueco. Markus Persson lo sacó en 2009 y Mojang, en Estocolmo, siguió haciéndolo.")),
("enderdragon-nether", False, "jeux-video",
 ("In Minecraft, the Ender Dragon is found in the Nether.","Dans Minecraft, l'Ender Dragon se trouve dans le Nether.","En Minecraft, el Dragón del End está en el Nether."),
 ("It lives in the End, reached through its own portal. The Nether is the other dimension, the one you get to with obsidian.",
  "Il vit dans l'End, où l'on entre par un portail à part. Le Nether est l'autre dimension, celle où l'on va avec de l'obsidienne.",
  "Vive en el End, al que se entra por un portal aparte. El Nether es la otra dimensión, a la que se va con obsidiana.")),
("pikachu-electric", True, "jeux-video",
 ("Pikachu is an electric-type Pokémon.","Pikachu est un Pokémon de type électrique.","Pikachu es un Pokémon de tipo eléctrico."),
 ("Pure electric type, from the first generation, and the one the series put on its own cover.",
  "Type électrique pur, de la première génération, et celui que la série a mis sur sa propre couverture.",
  "Tipo eléctrico puro, de la primera generación, y el que la serie puso en su propia portada.")),
("marathon-distance", True, "sport",
 ("A marathon is 42.195 kilometres.","Un marathon fait 42,195 kilomètres.","Un maratón son 42,195 kilómetros."),
 ("The odd figure comes from the 1908 London Games, where the course was stretched to finish in front of the royal box.",
  "Le chiffre bizarre vient des Jeux de Londres en 1908, où le parcours a été allongé pour finir devant la loge royale.",
  "La cifra rara viene de los Juegos de Londres de 1908, donde el recorrido se alargó para acabar frente al palco real.")),
("olympics-1896", True, "sport",
 ("The modern Olympic Games began in 1896.","Les Jeux olympiques modernes ont commencé en 1896.","Los Juegos Olímpicos modernos empezaron en 1896."),
 ("In Athens, with fourteen countries. Women were not admitted until the next edition, in Paris.",
  "À Athènes, avec quatorze pays. Les femmes n'y ont été admises qu'à l'édition suivante, à Paris.",
  "En Atenas, con catorce países. Las mujeres no fueron admitidas hasta la edición siguiente, en París.")),
("tour-de-france-only", False, "sport",
 ("The Tour de France is raced only in France.","Le Tour de France se court uniquement en France.","El Tour de Francia se corre solo en Francia."),
 ("It crosses into its neighbours nearly every year, and it has started abroad many times, from Copenhagen to Bilbao.",
  "Il passe chez ses voisins presque chaque année, et il est parti de l'étranger bien des fois, de Copenhague à Bilbao.",
  "Pasa por sus vecinos casi todos los años, y ha salido del extranjero muchas veces, de Copenhague a Bilbao.")),
("basketball-five", True, "sport",
 ("Basketball is played five against five on court.","Le basket se joue à cinq joueurs par équipe sur le terrain.","El baloncesto se juega con cinco jugadores por equipo en la pista."),
 ("Five each, with substitutions allowed as often as the coach wants, unlike football.",
  "Cinq de chaque côté, avec des remplacements aussi souvent que l'entraîneur le veut, contrairement au football.",
  "Cinco por lado, con cambios tantas veces como quiera el entrenador, al contrario que en el fútbol.")),
("bones-206", True, "culture",
 ("An adult human body has 206 bones.","Le corps humain adulte compte 206 os.","El cuerpo humano adulto tiene 206 huesos."),
 ("A newborn has around 270. Some of them fuse as the body grows, which is why the adult number is lower.",
  "Un nouveau-né en a environ 270. Certains se soudent en grandissant, et c'est pour ça que le nombre adulte est plus bas.",
  "Un recién nacido tiene unos 270. Algunos se sueldan al crecer, y por eso el número adulto es más bajo.")),
("eiffel-1889", True, "culture",
 ("The Eiffel Tower was built for the 1889 World's Fair.","La Tour Eiffel a été construite pour l'Exposition universelle de 1889.","La Torre Eiffel se construyó para la Exposición Universal de 1889."),
 ("It was meant to come down after twenty years, and the radio aerial installed at the top is what saved it.",
  "Elle devait être démontée au bout de vingt ans, et c'est l'antenne radio installée au sommet qui l'a sauvée.",
  "Debía desmontarse a los veinte años, y fue la antena de radio instalada arriba lo que la salvó.")),
("great-wall-moon", False, "culture",
 ("The Great Wall of China can be seen from the Moon with the naked eye.","La Grande Muraille de Chine est visible à l'œil nu depuis la Lune.","La Gran Muralla China se ve a simple vista desde la Luna."),
 ("It cannot. It is a few metres wide, and from the Moon that is nothing at all. Astronauts have said so repeatedly.",
  "Non. Elle fait quelques mètres de large, et depuis la Lune ça ne représente rien du tout. Les astronautes l'ont dit et répété.",
  "No. Mide unos metros de ancho, y desde la Luna eso no es nada. Los astronautas lo han dicho una y otra vez.")),
("bats-blind", False, "culture",
 ("Bats are blind.","Les chauves-souris sont aveugles.","Los murciélagos son ciegos."),
 ("They all see, and some see well. Echolocation is what they add to it in the dark, it is not a replacement for eyes.",
  "Elles voient toutes, et certaines voient bien. L'écholocation est ce qu'elles ajoutent dans le noir, ce n'est pas un remplacement des yeux.",
  "Todos ven, y algunos ven bien. La ecolocalización es lo que añaden en la oscuridad, no un sustituto de los ojos.")),
("tomato-fruit", True, "culture",
 ("A tomato is botanically a fruit.","La tomate est botaniquement un fruit.","El tomate es botánicamente una fruta."),
 ("It grows from the flower and carries the seeds, which is the botanical definition. In the kitchen it is treated as a vegetable, and both are right in their own field.",
  "Elle vient de la fleur et porte les graines, ce qui est la définition botanique. En cuisine on la traite comme un légume, et les deux ont raison dans leur domaine.",
  "Sale de la flor y lleva las semillas, que es la definición botánica. En la cocina se trata como una verdura, y las dos tienen razón en su terreno.")),
("mars-closest", False, "culture",
 ("Mars is the closest planet to the Sun.","Mars est la planète la plus proche du Soleil.","Marte es el planeta más cercano al Sol."),
 ("Mercury is. Mars comes fourth, just after Earth, going outwards.",
  "C'est Mercure. Mars arrive en quatrième, juste après la Terre, en s'éloignant.",
  "Es Mercurio. Marte es el cuarto, justo después de la Tierra, alejándose.")),
("venus-day-year", True, "culture",
 ("A day on Venus lasts longer than a year on Venus.","Un jour sur Vénus dure plus longtemps qu'une année sur Vénus.","Un día en Venus dura más que un año en Venus."),
 ("It turns on itself in about 243 Earth days and goes round the Sun in 225. It gets back before it has finished turning.",
  "Elle tourne sur elle-même en environ 243 jours terrestres et fait le tour du Soleil en 225. Elle revient avant d'avoir fini de tourner.",
  "Gira sobre sí misma en unos 243 días terrestres y da la vuelta al Sol en 225. Vuelve antes de haber acabado de girar.")),
("sun-is-star", True, "culture",
 ("The Sun is a star.","Le Soleil est une étoile.","El Sol es una estrella."),
 ("An ordinary one, on the small side. It only looks different because it is the one next door.",
  "Une étoile ordinaire, plutôt petite. Elle ne paraît différente que parce que c'est celle d'à côté.",
  "Una estrella corriente, más bien pequeña. Solo parece distinta porque es la de al lado.")),
("nordics-euro", False, "culture",
 ("Denmark, Norway and Sweden all use the euro.","Le Danemark, la Norvège et la Suède utilisent tous les trois l'euro.","Dinamarca, Noruega y Suecia usan las tres el euro."),
 ("None of the three does. Each keeps its own krone or krona, and Norway is not even in the European Union.",
  "Aucun des trois. Chacun garde sa couronne, et la Norvège n'est même pas dans l'Union européenne.",
  "Ninguno de los tres. Cada uno mantiene su corona, y Noruega ni siquiera está en la Unión Europea.")),
]

def esc(s): return s.replace('\\','\\\\').replace('"','\\"')
def tri(t): return '{ en: "%s", fr: "%s", es: "%s" }' % (esc(t[0]),esc(t[1]),esc(t[2]))

out=['''import type { Locale } from "../../i18n/config";

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

export const trueFalseStatements: TrueFalseStatement[] = [''']

for sid, ans, cat, txt, exp in S:
    out.append('  {')
    out.append('    id: "%s",' % sid)
    out.append('    answer: %s,' % ('true' if ans else 'false'))
    out.append('    categorySlug: "%s",' % cat)
    out.append('    text: %s,' % tri(txt))
    out.append('    explanation: %s,' % tri(exp))
    out.append('  },')
out.append('];')
out.append('')
open('src/data/games/true-false.ts','w',encoding='utf-8').write('\n'.join(out))
t=sum(1 for x in S if x[1]); print(f"{len(S)} affirmations : {t} vraies, {len(S)-t} fausses")
