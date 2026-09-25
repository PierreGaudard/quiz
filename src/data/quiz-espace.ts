import type { TranslatedQuiz } from "./types";

/**
 * Quiz sur l'espace en mode vrai-faux : planètes, Lune, conquête spatiale.
 *
 * Comme dans quiz-europe.ts, « vrai » porte l'id « a » et « faux » l'id « b »
 * dans les trois langues (VraiFauxPlayer repère la réponse par l'id). Dix
 * affirmations vraies, dix fausses, dont des idées reçues courantes (la
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
        "Vingt affirmations sur les planètes, la Lune et la conquête spatiale. À toi de dire lesquelles sont vraies.",
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
        {
          id: 11,
          question: "Le Soleil est une étoile.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est une étoile de taille moyenne, et la plus proche de nous. Les étoiles qu'on voit la nuit sont d'autres soleils, beaucoup plus lointains.",
        },
        {
          id: 12,
          question: "Dans l'espace, on entend le bruit des explosions.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le son a besoin d'air, ou d'une autre matière, pour se propager. Dans le vide de l'espace, une explosion ne fait aucun bruit, contrairement à ce qu'on voit dans les films.",
        },
        {
          id: 13,
          question: "Sur Vénus, un jour dure plus longtemps qu'une année.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Vénus met 243 jours terrestres pour tourner sur elle-même, et seulement 225 pour faire le tour du Soleil.",
        },
        {
          id: 14,
          question: "Notre galaxie s'appelle la Voie lactée.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Le Système solaire se trouve dans l'un de ses bras, assez loin du centre. Elle compte plusieurs centaines de milliards d'étoiles.",
        },
        {
          id: 15,
          question: "La planète Uranus a été découverte par Galilée.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est l'astronome William Herschel qui l'a découverte, en 1781. Galilée, lui, est surtout connu pour avoir observé les lunes de Jupiter en 1610.",
        },
        {
          id: 16,
          question: "Une étoile filante est une étoile qui tombe du ciel.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est un petit caillou venu de l'espace, souvent pas plus gros qu'un grain de sable, qui brûle en entrant dans l'atmosphère.",
        },
        {
          id: 17,
          question: "Les astronautes flottent dans la Station spatiale parce qu'il n'y a plus de gravité là-haut.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. À 400 km d'altitude, la gravité est encore à peu près 90 % de celle du sol. Les astronautes flottent parce que la station et eux sont en chute libre permanente autour de la Terre.",
        },
        {
          id: 18,
          question: "La face cachée de la Lune est toujours dans le noir.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Elle est éclairée par le Soleil autant que l'autre face. On l'appelle cachée parce qu'on ne la voit jamais depuis la Terre, la Lune nous montrant toujours le même côté.",
        },
        {
          id: 19,
          question: "Mars est rouge à cause de la rouille.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Son sol et ses poussières sont riches en oxyde de fer, autrement dit de la rouille, ce qui lui donne sa couleur.",
        },
        {
          id: 20,
          question: "La Grande Tache rouge de Jupiter est une tempête.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est une tempête géante, plus large que la Terre, observée depuis plus de 150 ans. Elle rétrécit peu à peu.",
        },
      ],
    },
    en: {
      title: "True or False: space and the planets",
      description:
        "Twenty statements about the planets, the Moon and space exploration. Your job is to say which ones are true.",
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
        {
          id: 11,
          question: "The Sun is a star.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's a medium-sized star and the closest one to us. The stars you see at night are other suns, much farther away.",
        },
        {
          id: 12,
          question: "You can hear explosions in space.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Sound needs air, or some other material, to travel through. In the vacuum of space an explosion makes no noise at all, whatever the movies show.",
        },
        {
          id: 13,
          question: "On Venus, a day lasts longer than a year.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Venus takes 243 Earth days to spin once on its axis, but only 225 to go around the Sun.",
        },
        {
          id: 14,
          question: "Our galaxy is called the Milky Way.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The Solar System sits in one of its arms, quite far from the centre. It holds several hundred billion stars.",
        },
        {
          id: 15,
          question: "The planet Uranus was discovered by Galileo.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The astronomer William Herschel discovered it in 1781. Galileo is best known for spotting Jupiter's moons in 1610.",
        },
        {
          id: 16,
          question: "A shooting star is a star falling from the sky.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It's a tiny bit of space rock, often no bigger than a grain of sand, burning up as it hits the atmosphere.",
        },
        {
          id: 17,
          question: "Astronauts float on the space station because there's no gravity up there.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. At 400 km up, gravity is still about 90% of what it is on the ground. Astronauts float because they and the station are constantly falling around the Earth.",
        },
        {
          id: 18,
          question: "The far side of the Moon is always dark.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It gets as much sunlight as the side we see. It's called the far side because we never see it from Earth, since the Moon always shows us the same face.",
        },
        {
          id: 19,
          question: "Mars is red because of rust.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Its soil and dust are full of iron oxide, which is basically rust, and that's what gives the planet its colour.",
        },
        {
          id: 20,
          question: "Jupiter's Great Red Spot is a storm.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's a giant storm, wider than Earth, that has been watched for more than 150 years. It's slowly getting smaller.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: el espacio y los planetas",
      description:
        "Veinte afirmaciones sobre los planetas, la Luna y la carrera espacial. Te toca decir cuáles son verdad.",
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
        {
          id: 11,
          question: "El Sol es una estrella.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es una estrella de tamaño medio y la más cercana a nosotros. Las estrellas que vemos de noche son otros soles, mucho más lejanos.",
        },
        {
          id: 12,
          question: "En el espacio se oye el ruido de las explosiones.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El sonido necesita aire, u otra materia, para propagarse. En el vacío del espacio una explosión no hace ningún ruido, aunque en las películas suene.",
        },
        {
          id: 13,
          question: "En Venus, un día dura más que un año.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Venus tarda 243 días terrestres en girar sobre sí misma y solo 225 en dar la vuelta al Sol.",
        },
        {
          id: 14,
          question: "Nuestra galaxia se llama la Vía Láctea.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El sistema solar está en uno de sus brazos, bastante lejos del centro. Tiene varios cientos de miles de millones de estrellas.",
        },
        {
          id: 15,
          question: "El planeta Urano lo descubrió Galileo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Lo descubrió el astrónomo William Herschel en 1781. Galileo es conocido sobre todo por haber observado las lunas de Júpiter en 1610.",
        },
        {
          id: 16,
          question: "Una estrella fugaz es una estrella que cae del cielo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Es una piedrecita llegada del espacio, a menudo no más grande que un grano de arena, que se quema al entrar en la atmósfera.",
        },
        {
          id: 17,
          question: "Los astronautas flotan en la Estación Espacial porque allí arriba no hay gravedad.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. A 400 km de altura, la gravedad sigue siendo más o menos el 90 % de la del suelo. Flotan porque ellos y la estación están en caída libre continua alrededor de la Tierra.",
        },
        {
          id: 18,
          question: "La cara oculta de la Luna siempre está a oscuras.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Recibe tanta luz del Sol como la otra cara. Se llama oculta porque nunca se ve desde la Tierra, ya que la Luna nos enseña siempre el mismo lado.",
        },
        {
          id: 19,
          question: "Marte es rojo por culpa del óxido.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Su suelo y su polvo están llenos de óxido de hierro, es decir, herrumbre, y eso le da su color.",
        },
        {
          id: 20,
          question: "La Gran Mancha Roja de Júpiter es una tormenta.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es una tormenta gigante, más ancha que la Tierra, que se observa desde hace más de 150 años. Poco a poco se va haciendo más pequeña.",
        },
      ],
    },
  },
};

export default [quizEspace] as TranslatedQuiz[];
