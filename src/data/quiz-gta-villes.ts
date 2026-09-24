import type { TranslatedQuiz } from "./types";

/**
 * Quiz GTA en vrai-faux : les villes de la série et les vraies villes qui
 * les ont inspirées.
 *
 * Réponse « vrai » = id « a », « faux » = id « b » (VraiFauxPlayer). Six vraies,
 * quatre fausses. Le quiz d'origine (quiz-gta.ts) parle des dates et des
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
        "Liberty City, Vice City, Los Santos ou encore San Fierro : dix affirmations sur les villes de GTA. À toi de trier le vrai du faux !",
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
      ],
    },
    en: {
      title: "True or false: the cities of GTA",
      description:
        "Liberty City, Vice City, Los Santos, San Fierro and more: ten statements about the cities of GTA. Can you spot the fake ones?",
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
      ],
    },
    es: {
      title: "Verdadero o falso: las ciudades de GTA",
      description:
        "Liberty City, Vice City, Los Santos, San Fierro y más: diez afirmaciones sobre las ciudades de GTA. ¿Sabes cuáles son falsas?",
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
      ],
    },
  },
};

export default [quizGtaVilles] as TranslatedQuiz[];
