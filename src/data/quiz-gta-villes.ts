import type { TranslatedQuiz } from "./types";

/**
 * Quiz GTA en vrai-faux : les villes de la série et les vraies villes qui
 * les ont inspirées.
 *
 * Réponse « vrai » = id « a », « faux » = id « b » (VraiFauxPlayer). Douze vraies,
 * huit fausses. Le quiz d'origine (quiz-gta.ts) parle des dates et des
 * ventes : ici on reste sur la carte, de Liberty City à la Leonida de GTA VI.
 */
export const quizGtaVilles: TranslatedQuiz = {
  slug: "quiz-gta-villes",
  slugs: { en: "gta-cities-quiz", fr: "quiz-gta-villes", es: "quiz-gta-ciudades" },
  categorySlug: "jeux-video",
  subcategory: "GTA",
  difficulty: "medium",
  coverImage: "/images/cover-gta-villes.webp",
  gameType: "vrai-faux",
  playCount: 5100,
  translations: {
    fr: {
      title: "Vrai ou faux : les villes de GTA",
      description:
        "Liberty City, Vice City, Los Santos ou encore San Fierro : vingt affirmations sur les villes de GTA. À toi de trier le vrai du faux !",
      questions: [
        {
          id: 1,
          image: "/images/q-gta-villes-01.webp",
          question: "Liberty City s'inspire de New York.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. On y retrouve des copies de l'Empire State Building, de la statue de la Liberté ou encore de Times Square, sous d'autres noms.",
        },
        {
          id: 2,
          image: "/images/q-gta-villes-02.webp",
          question: "Vice City s'inspire de Los Angeles.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Vice City, c'est Miami, avec ses plages, ses palmiers et ses immeubles Art déco. Los Angeles a servi de modèle à Los Santos.",
        },
        {
          id: 3,
          question: "La ville de Los Santos, dans GTA V, s'inspire de Los Angeles.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. On y trouve un Vinewood qui copie Hollywood, avec son grand panneau sur la colline, et la plage de Vespucci qui rappelle Venice Beach.",
        },
        {
          id: 4,
          question: "L'État de GTA San Andreas compte trois grandes villes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai : Los Santos, San Fierro et Las Venturas. On commence à Los Santos, et les deux autres villes se débloquent au fil de l'histoire.",
        },
        {
          id: 5,
          image: "/images/q-gta-villes-05.webp",
          question: "Dans GTA San Andreas, San Fierro s'inspire de Las Vegas.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. San Fierro, c'est San Francisco, avec son grand pont rouge et ses rues en pente. Las Vegas a donné Las Venturas, la ville des casinos.",
        },
        {
          id: 6,
          image: "/images/q-gta-villes-06.webp",
          question: "GTA VI se passe dans Leonida, un État inventé qui s'inspire de la Floride.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Les bandes-annonces montrent Vice City, des marais et des petites îles qui rappellent les Keys de Floride.",
        },
        {
          id: 7,
          question: "Le tout premier GTA, en 1997, avait déjà trois villes : Liberty City, San Andreas et Vice City.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Dans ce premier jeu vu de dessus, San Andreas était une ville, calquée sur San Francisco, et pas encore un État entier.",
        },
        {
          id: 8,
          image: "/images/q-gta-villes-08.webp",
          question: "Le point le plus haut de la carte de GTA V est le mont Chiliad.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. On peut monter tout en haut en téléphérique, puis redescendre à vélo ou en parachute.",
        },
        {
          id: 9,
          question: "Dans GTA IV, le quartier qui copie Manhattan s'appelle Broker.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Manhattan, c'est Algonquin. Broker copie Brooklyn, et c'est justement là que Niko arrive au début du jeu.",
        },
        {
          id: 10,
          question: "La carte de GTA V comprend une ville inspirée de Las Vegas.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. GTA V se limite à Los Santos et à la campagne de Blaine County, avec Sandy Shores ou encore Paleto Bay. Las Venturas n'existe que dans San Andreas.",
        },
        {
          id: 11,
          question: "Dans GTA IV, le quartier de Bohan s'inspire du Bronx.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Bohan est au nord de la ville, comme le Bronx à New York. Dukes copie le Queens, Broker Brooklyn et Algonquin Manhattan.",
        },
        {
          id: 12,
          question: "Dans GTA IV, Alderney, de l'autre côté du fleuve, s'inspire du New Jersey.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Alderney est même un État à part dans le jeu, séparé de Liberty City par un fleuve, comme le New Jersey l'est de New York par l'Hudson.",
        },
        {
          id: 13,
          question: "Dans GTA IV, la copie de la statue de la Liberté tient une tasse de café à la place de la torche.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Elle s'appelle la statue du Bonheur, et c'est l'une des blagues les plus connues du jeu. On peut même entrer à l'intérieur, où se cache un cœur géant.",
        },
        {
          id: 14,
          question: "Dans GTA V, Sandy Shores est une petite ville au bord d'un grand lac, l'Alamo Sea.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est le coin paumé de Blaine County où vit Trevor, dans sa caravane. L'Alamo Sea s'inspire de la mer de Salton, en Californie.",
        },
        {
          id: 15,
          question: "Dans GTA San Andreas, une base militaire secrète du désert, la Zone 69, copie la Zone 51.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. CJ doit s'y infiltrer pour voler un jetpack, dans l'une des missions les plus connues du jeu. La vraie Zone 51 est dans le désert du Nevada.",
        },
        {
          id: 16,
          question: "Dans Vice City, Tommy s'installe dans un manoir sur Starfish Island.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est le manoir de Ricardo Diaz, le baron de la drogue que Tommy élimine. Starfish Island est une petite île chic entre les deux grandes îles de la ville.",
        },
        {
          id: 17,
          question: "Dans GTA San Andreas, on ne peut passer d'une ville à l'autre qu'en avion.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Les trois villes sont reliées par des routes et des ponts, et on peut faire tout le trajet en voiture, à moto ou même à vélo.",
        },
        {
          id: 18,
          question: "Dans GTA V, Paleto Bay se trouve en plein centre de Los Santos.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Paleto Bay est un petit village côtier tout au nord de la carte, loin de la ville. Le centre de Los Santos, avec ses gratte-ciel, est au sud.",
        },
        {
          id: 19,
          question: "GTA Liberty City Stories reprend la même Liberty City que GTA IV.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Liberty City Stories, sorti en 2005, reprend la ville de GTA III, en 1998. La Liberty City de GTA IV a été redessinée de zéro, beaucoup plus proche de New York.",
        },
        {
          id: 20,
          question: "Dans GTA IV, on peut aller en voiture jusqu'à Vice City.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. La carte de GTA IV se limite à Liberty City et à Alderney. Chaque GTA a sa propre carte, et on ne passe pas d'une ville à une autre entre les jeux.",
        },
      ],
    },
    en: {
      title: "True or false: the cities of GTA",
      description:
        "Liberty City, Vice City, Los Santos, San Fierro and more: twenty statements about the cities of GTA. Can you spot the fake ones?",
      questions: [
        {
          id: 1,
          image: "/images/q-gta-villes-01.webp",
          question: "Liberty City is based on New York.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. You'll find copies of the Empire State Building, the Statue of Liberty and Times Square, all under other names.",
        },
        {
          id: 2,
          image: "/images/q-gta-villes-02.webp",
          question: "Vice City is based on Los Angeles.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Vice City is Miami, with its beaches, palm trees and Art Deco buildings. Los Angeles was the model for Los Santos.",
        },
        {
          id: 3,
          question: "The city of Los Santos in GTA V is based on Los Angeles.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. There's a Vinewood that copies Hollywood, big sign on the hill included, and Vespucci Beach, which looks a lot like Venice Beach.",
        },
        {
          id: 4,
          question: "The state in GTA San Andreas has three big cities.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True: Los Santos, San Fierro and Las Venturas. You start in Los Santos, and the other two open up as the story goes on.",
        },
        {
          id: 5,
          image: "/images/q-gta-villes-05.webp",
          question: "In GTA San Andreas, San Fierro is based on Las Vegas.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. San Fierro is San Francisco, with its big red bridge and steep streets. Las Vegas became Las Venturas, the casino city.",
        },
        {
          id: 6,
          image: "/images/q-gta-villes-06.webp",
          question: "GTA VI is set in Leonida, a made-up state based on Florida.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The trailers show Vice City, swamps and small islands that look like the Florida Keys.",
        },
        {
          id: 7,
          question: "The very first GTA, in 1997, already had three cities: Liberty City, San Andreas and Vice City.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. In that first top-down game, San Andreas was a single city based on San Francisco, not yet a whole state.",
        },
        {
          id: 8,
          image: "/images/q-gta-villes-08.webp",
          question: "The highest point on the GTA V map is Mount Chiliad.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. You can ride a cable car all the way to the top, then come back down by bike or by parachute.",
        },
        {
          id: 9,
          question: "In GTA IV, the borough that copies Manhattan is called Broker.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Manhattan is Algonquin. Broker copies Brooklyn, and that's where Niko arrives at the start of the game.",
        },
        {
          id: 10,
          question: "The GTA V map includes a city based on Las Vegas.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. GTA V only has Los Santos and the Blaine County countryside, with Sandy Shores, Paleto Bay and so on. Las Venturas only exists in San Andreas.",
        },
        {
          id: 11,
          question: "In GTA IV, the Bohan district is based on the Bronx.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Bohan is in the north of the city, just like the Bronx in New York. Dukes copies Queens, Broker is Brooklyn and Algonquin is Manhattan.",
        },
        {
          id: 12,
          question: "In GTA IV, Alderney, across the river, is based on New Jersey.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Alderney is even a separate state in the game, cut off from Liberty City by a river, just like New Jersey is from New York by the Hudson.",
        },
        {
          id: 13,
          question: "In GTA IV, the copy of the Statue of Liberty holds a coffee cup instead of a torch.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's called the Statue of Happiness, and it's one of the game's best-known jokes. You can even get inside, where a giant heart is hidden.",
        },
        {
          id: 14,
          question: "In GTA V, Sandy Shores is a small town on the shore of a big lake, the Alamo Sea.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's the run-down corner of Blaine County where Trevor lives in his trailer. The Alamo Sea is based on the Salton Sea, in California.",
        },
        {
          id: 15,
          question: "In GTA San Andreas, a secret military base in the desert, Area 69, copies Area 51.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. CJ has to sneak in to steal a jetpack, in one of the game's best-known missions. The real Area 51 is in the Nevada desert.",
        },
        {
          id: 16,
          question: "In Vice City, Tommy moves into a mansion on Starfish Island.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's the mansion of Ricardo Diaz, the drug lord Tommy takes out. Starfish Island is a small, posh island between the city's two big islands.",
        },
        {
          id: 17,
          question: "In GTA San Andreas, you can only get from one city to another by plane.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The three cities are linked by roads and bridges, and you can make the whole trip by car, motorbike or even bicycle.",
        },
        {
          id: 18,
          question: "In GTA V, Paleto Bay is right in the middle of Los Santos.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Paleto Bay is a small coastal town in the far north of the map, a long way from the city. Downtown Los Santos, with its skyscrapers, is in the south.",
        },
        {
          id: 19,
          question: "GTA Liberty City Stories uses the same Liberty City as GTA IV.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Liberty City Stories, released in 2005, uses the GTA III city, in 1998. GTA IV's Liberty City was redesigned from scratch, much closer to New York.",
        },
        {
          id: 20,
          question: "In GTA IV, you can drive all the way to Vice City.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. GTA IV's map is limited to Liberty City and Alderney. Each GTA has its own map, and you can't travel from one game's city to another's.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: las ciudades de GTA",
      description:
        "Liberty City, Vice City, Los Santos, San Fierro y más: veinte afirmaciones sobre las ciudades de GTA. ¿Sabes cuáles son falsas?",
      questions: [
        {
          id: 1,
          image: "/images/q-gta-villes-01.webp",
          question: "Liberty City está inspirada en Nueva York.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Tiene copias del Empire State Building, de la Estatua de la Libertad o de Times Square, con otros nombres.",
        },
        {
          id: 2,
          image: "/images/q-gta-villes-02.webp",
          question: "Vice City está inspirada en Los Ángeles.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Vice City es Miami, con sus playas, sus palmeras y sus edificios Art déco. Los Ángeles sirvió de modelo para Los Santos.",
        },
        {
          id: 3,
          question: "La ciudad de Los Santos, en GTA V, está inspirada en Los Ángeles.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Tiene un Vinewood que copia Hollywood, con su gran letrero en la colina, y la playa de Vespucci, que recuerda a Venice Beach.",
        },
        {
          id: 4,
          question: "El estado de GTA San Andreas tiene tres grandes ciudades.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero: Los Santos, San Fierro y Las Venturas. Se empieza en Los Santos, y las otras dos se desbloquean con la historia.",
        },
        {
          id: 5,
          image: "/images/q-gta-villes-05.webp",
          question: "En GTA San Andreas, San Fierro está inspirada en Las Vegas.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. San Fierro es San Francisco, con su gran puente rojo y sus calles empinadas. Las Vegas dio lugar a Las Venturas, la ciudad de los casinos.",
        },
        {
          id: 6,
          image: "/images/q-gta-villes-06.webp",
          question: "GTA VI transcurre en Leonida, un estado inventado inspirado en Florida.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Los tráileres muestran Vice City, pantanos y pequeñas islas que recuerdan a los Cayos de Florida.",
        },
        {
          id: 7,
          question: "El primer GTA, en 1997, ya tenía tres ciudades: Liberty City, San Andreas y Vice City.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. En ese primer juego con vista cenital, San Andreas era una ciudad inspirada en San Francisco, no todavía un estado entero.",
        },
        {
          id: 8,
          image: "/images/q-gta-villes-08.webp",
          question: "El punto más alto del mapa de GTA V es el monte Chiliad.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se puede subir hasta arriba en teleférico y luego bajar en bici o en paracaídas.",
        },
        {
          id: 9,
          question: "En GTA IV, el distrito que copia Manhattan se llama Broker.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Manhattan es Algonquin. Broker copia Brooklyn, y justo ahí llega Niko al principio del juego.",
        },
        {
          id: 10,
          question: "El mapa de GTA V incluye una ciudad inspirada en Las Vegas.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. GTA V se limita a Los Santos y al campo de Blaine County, con Sandy Shores o Paleto Bay. Las Venturas solo existe en San Andreas.",
        },
        {
          id: 11,
          question: "En GTA IV, el barrio de Bohan se inspira en el Bronx.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Bohan está al norte de la ciudad, como el Bronx en Nueva York. Dukes copia Queens, Broker es Brooklyn y Algonquin es Manhattan.",
        },
        {
          id: 12,
          question: "En GTA IV, Alderney, al otro lado del río, se inspira en Nueva Jersey.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Alderney es incluso un estado aparte en el juego, separado de Liberty City por un río, igual que Nueva Jersey de Nueva York por el Hudson.",
        },
        {
          id: 13,
          question: "En GTA IV, la copia de la Estatua de la Libertad sostiene una taza de café en lugar de la antorcha.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se llama la Estatua de la Felicidad, y es una de las bromas más famosas del juego. Hasta se puede entrar dentro, donde se esconde un corazón gigante.",
        },
        {
          id: 14,
          question: "En GTA V, Sandy Shores es un pueblo a orillas de un gran lago, el Alamo Sea.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es el rincón perdido de Blaine County donde vive Trevor, en su caravana. El Alamo Sea se inspira en el mar de Salton, en California.",
        },
        {
          id: 15,
          question: "En GTA San Andreas, una base militar secreta del desierto, el Área 69, copia el Área 51.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. CJ tiene que colarse para robar un jetpack, en una de las misiones más famosas del juego. El Área 51 de verdad está en el desierto de Nevada.",
        },
        {
          id: 16,
          question: "En Vice City, Tommy se instala en una mansión en Starfish Island.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es la mansión de Ricardo Diaz, el narcotraficante al que Tommy elimina. Starfish Island es una islita elegante entre las dos grandes islas de la ciudad.",
        },
        {
          id: 17,
          question: "En GTA San Andreas, solo se puede ir de una ciudad a otra en avión.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Las tres ciudades están unidas por carreteras y puentes, y se puede hacer todo el viaje en coche, en moto o incluso en bici.",
        },
        {
          id: 18,
          question: "En GTA V, Paleto Bay está en pleno centro de Los Santos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Paleto Bay es un pueblecito costero en el extremo norte del mapa, lejos de la ciudad. El centro de Los Santos, con sus rascacielos, está en el sur.",
        },
        {
          id: 19,
          question: "GTA Liberty City Stories usa la misma Liberty City que GTA IV.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Liberty City Stories, de 2005, usa la ciudad de GTA III, en 1998. La Liberty City de GTA IV se rediseñó desde cero, mucho más parecida a Nueva York.",
        },
        {
          id: 20,
          question: "En GTA IV se puede ir en coche hasta Vice City.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El mapa de GTA IV se limita a Liberty City y Alderney. Cada GTA tiene su propio mapa, y no se puede pasar de la ciudad de un juego a la de otro.",
        },
      ],
    },
  },
};

export default [quizGtaVilles] as TranslatedQuiz[];
