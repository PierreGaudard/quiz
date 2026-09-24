import type { TranslatedQuiz } from "./types";

/**
 * Quiz chrono sur la boxe anglaise : grands combats, grands noms et
 * quelques regles de base.
 *
 * Comme dans quiz-naruto.ts, le mode enchaine les questions sans explication
 * entre deux : questions et reponses sont donc courtes. Pas de question sur
 * le bilan de Mayweather (50-0) : sa revanche contre Pacquiao, annoncee
 * comme un combat professionnel pour septembre 2026, peut le changer.
 */
export const quizBoxe: TranslatedQuiz = {
  slug: "quiz-boxe",
  slugs: { en: "boxing-quiz", fr: "quiz-boxe", es: "quiz-boxeo" },
  categorySlug: "sport",
  subcategory: "Boxe",
  difficulty: "medium",
  coverImage: "/images/sub-boxe.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 4300,
  translations: {
    fr: {
      title: "Chrono boxe : 60 secondes sur le ring",
      description:
        "Dix questions sur la boxe, d'Ali à Tyson, et une minute au total pour y répondre. Il faut aller vite !",
      questions: [
        {
          id: 1,
          image: "/images/q-boxe-01.webp",
          question: "Quel était le nom de naissance de Mohamed Ali ?",
          answers: [
            { id: "a", text: "Cassius Clay" },
            { id: "b", text: "Joe Frazier" },
            { id: "c", text: "Sonny Liston" },
            { id: "d", text: "Floyd Patterson" },
          ],
          correctAnswer: "a",
          explanation:
            "Cassius Clay. Il a pris le nom de Mohamed Ali en 1964, juste après avoir battu Sonny Liston pour son premier titre mondial.",
        },
        {
          id: 2,
          question: "Combien de minutes dure un round en boxe pro masculine ?",
          answers: [
            { id: "a", text: "2 minutes" },
            { id: "b", text: "3 minutes" },
            { id: "c", text: "4 minutes" },
            { id: "d", text: "5 minutes" },
          ],
          correctAnswer: "b",
          explanation:
            "3 minutes, avec une minute de repos entre deux rounds.",
        },
        {
          id: 3,
          question: "Jusqu'à combien l'arbitre compte-t-il pour un K.-O. ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "8" },
            { id: "c", text: "10" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "Jusqu'à 10. Si le boxeur au sol ne s'est pas relevé en état de continuer à 10, il a perdu par K.-O.",
        },
        {
          id: 4,
          image: "/images/q-boxe-02.webp",
          question: "Dans quelle ville a eu lieu le combat Ali-Foreman de 1974 ?",
          answers: [
            { id: "a", text: "Manille" },
            { id: "b", text: "Las Vegas" },
            { id: "c", text: "Kinshasa" },
            { id: "d", text: "New York" },
          ],
          correctAnswer: "c",
          explanation:
            "À Kinshasa, au Zaïre, l'actuelle République démocratique du Congo. On l'appelle « Rumble in the Jungle ». Manille, c'est le combat Ali-Frazier de 1975.",
        },
        {
          id: 5,
          image: "/images/q-boxe-03.webp",
          question: "Qui a mordu l'oreille d'Evander Holyfield en 1997 ?",
          answers: [
            { id: "a", text: "Lennox Lewis" },
            { id: "b", text: "Mike Tyson" },
            { id: "c", text: "Riddick Bowe" },
            { id: "d", text: "George Foreman" },
          ],
          correctAnswer: "b",
          explanation:
            "Mike Tyson, lors de leur revanche à Las Vegas. Il a mordu Holyfield deux fois au troisième round et il a été disqualifié.",
        },
        {
          id: 6,
          question: "De quel pays vient Manny Pacquiao ?",
          answers: [
            { id: "a", text: "Thaïlande" },
            { id: "b", text: "Philippines" },
            { id: "c", text: "Indonésie" },
            { id: "d", text: "Mexique" },
          ],
          correctAnswer: "b",
          explanation:
            "Des Philippines. Il a été champion du monde dans huit catégories de poids différentes, et il a aussi été sénateur dans son pays.",
        },
        {
          id: 7,
          image: "/images/q-boxe-04.webp",
          question: "Dans quelle ville se passe le film Rocky ?",
          answers: [
            { id: "a", text: "Chicago" },
            { id: "b", text: "Boston" },
            { id: "c", text: "Détroit" },
            { id: "d", text: "Philadelphie" },
          ],
          correctAnswer: "d",
          explanation:
            "À Philadelphie. La statue de Rocky se trouve d'ailleurs au pied des marches du musée d'art de la ville, celles qu'il monte en courant dans le film.",
        },
        {
          id: 8,
          question: "Avec quelle chanteuse Marcel Cerdan a-t-il vécu une histoire d'amour ?",
          answers: [
            { id: "a", text: "Édith Piaf" },
            { id: "b", text: "Juliette Gréco" },
            { id: "c", text: "Dalida" },
            { id: "d", text: "Joséphine Baker" },
          ],
          correctAnswer: "a",
          explanation:
            "Édith Piaf. Cerdan, champion du monde des poids moyens en 1948, est mort l'année suivante dans un accident d'avion aux Açores.",
        },
        {
          id: 9,
          question: "Dans quelle catégorie Tony Yoka a-t-il été champion olympique en 2016 ?",
          answers: [
            { id: "a", text: "Poids moyens" },
            { id: "b", text: "Mi-lourds" },
            { id: "c", text: "Super-lourds" },
            { id: "d", text: "Poids welters" },
          ],
          correctAnswer: "c",
          explanation:
            "Chez les super-lourds, plus de 91 kg, aux JO de Rio. C'était la première fois qu'un Français gagnait l'or dans cette catégorie.",
        },
        {
          id: 10,
          question: "De quel pays vient Saúl « Canelo » Álvarez ?",
          answers: [
            { id: "a", text: "Mexique" },
            { id: "b", text: "Argentine" },
            { id: "c", text: "Espagne" },
            { id: "d", text: "Cuba" },
          ],
          correctAnswer: "a",
          explanation:
            "Du Mexique, de la région de Guadalajara. Son surnom, Canelo, veut dire « cannelle » en espagnol, à cause de ses cheveux roux.",
        },
      ],
    },
    en: {
      title: "Boxing chrono: 60 seconds in the ring",
      description:
        "Ten questions on boxing, from Ali to Tyson, and one minute in total to answer them. You have to be quick!",
      questions: [
        {
          id: 1,
          image: "/images/q-boxe-01.webp",
          question: "What was Muhammad Ali's birth name?",
          answers: [
            { id: "a", text: "Cassius Clay" },
            { id: "b", text: "Joe Frazier" },
            { id: "c", text: "Sonny Liston" },
            { id: "d", text: "Floyd Patterson" },
          ],
          correctAnswer: "a",
          explanation:
            "Cassius Clay. He took the name Muhammad Ali in 1964, right after beating Sonny Liston for his first world title.",
        },
        {
          id: 2,
          question: "How long is a round in men's pro boxing?",
          answers: [
            { id: "a", text: "2 minutes" },
            { id: "b", text: "3 minutes" },
            { id: "c", text: "4 minutes" },
            { id: "d", text: "5 minutes" },
          ],
          correctAnswer: "b",
          explanation:
            "3 minutes, with a minute of rest between rounds.",
        },
        {
          id: 3,
          question: "What number does the referee count to for a knockout?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "8" },
            { id: "c", text: "10" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "10. If the boxer on the canvas is not back up and fit to carry on by 10, he loses by knockout.",
        },
        {
          id: 4,
          image: "/images/q-boxe-02.webp",
          question: "In which city did Ali fight Foreman in 1974?",
          answers: [
            { id: "a", text: "Manila" },
            { id: "b", text: "Las Vegas" },
            { id: "c", text: "Kinshasa" },
            { id: "d", text: "New York" },
          ],
          correctAnswer: "c",
          explanation:
            "Kinshasa, in Zaire, now the Democratic Republic of the Congo. It is known as the Rumble in the Jungle. Manila was the Ali-Frazier fight of 1975.",
        },
        {
          id: 5,
          image: "/images/q-boxe-03.webp",
          question: "Who bit Evander Holyfield's ear in 1997?",
          answers: [
            { id: "a", text: "Lennox Lewis" },
            { id: "b", text: "Mike Tyson" },
            { id: "c", text: "Riddick Bowe" },
            { id: "d", text: "George Foreman" },
          ],
          correctAnswer: "b",
          explanation:
            "Mike Tyson, in their rematch in Las Vegas. He bit Holyfield twice in the third round and was disqualified.",
        },
        {
          id: 6,
          question: "Which country is Manny Pacquiao from?",
          answers: [
            { id: "a", text: "Thailand" },
            { id: "b", text: "The Philippines" },
            { id: "c", text: "Indonesia" },
            { id: "d", text: "Mexico" },
          ],
          correctAnswer: "b",
          explanation:
            "The Philippines. He won world titles in eight different weight classes, and he also served as a senator back home.",
        },
        {
          id: 7,
          image: "/images/q-boxe-04.webp",
          question: "Which city is the film Rocky set in?",
          answers: [
            { id: "a", text: "Chicago" },
            { id: "b", text: "Boston" },
            { id: "c", text: "Detroit" },
            { id: "d", text: "Philadelphia" },
          ],
          correctAnswer: "d",
          explanation:
            "Philadelphia. The Rocky statue stands at the foot of the steps of the city's art museum, the ones he runs up in the film.",
        },
        {
          id: 8,
          question: "Which singer did Marcel Cerdan have a love affair with?",
          answers: [
            { id: "a", text: "Édith Piaf" },
            { id: "b", text: "Juliette Gréco" },
            { id: "c", text: "Dalida" },
            { id: "d", text: "Josephine Baker" },
          ],
          correctAnswer: "a",
          explanation:
            "Édith Piaf. Cerdan, world middleweight champion in 1948, died the following year in a plane crash in the Azores.",
        },
        {
          id: 9,
          question: "In which weight class did Tony Yoka win Olympic gold in 2016?",
          answers: [
            { id: "a", text: "Middleweight" },
            { id: "b", text: "Light heavyweight" },
            { id: "c", text: "Super heavyweight" },
            { id: "d", text: "Welterweight" },
          ],
          correctAnswer: "c",
          explanation:
            "Super heavyweight, over 91 kg, at the Rio Games. He was the first Frenchman to win gold in that class.",
        },
        {
          id: 10,
          question: "Which country is Saúl \"Canelo\" Álvarez from?",
          answers: [
            { id: "a", text: "Mexico" },
            { id: "b", text: "Argentina" },
            { id: "c", text: "Spain" },
            { id: "d", text: "Cuba" },
          ],
          correctAnswer: "a",
          explanation:
            "Mexico, from the Guadalajara area. His nickname Canelo means cinnamon in Spanish, because of his red hair.",
        },
      ],
    },
    es: {
      title: "Crono boxeo: 60 segundos en el ring",
      description:
        "Diez preguntas sobre boxeo, de Ali a Tyson, y un minuto en total para responder. ¡Hay que ir rápido!",
      questions: [
        {
          id: 1,
          image: "/images/q-boxe-01.webp",
          question: "¿Cuál era el nombre de nacimiento de Muhammad Ali?",
          answers: [
            { id: "a", text: "Cassius Clay" },
            { id: "b", text: "Joe Frazier" },
            { id: "c", text: "Sonny Liston" },
            { id: "d", text: "Floyd Patterson" },
          ],
          correctAnswer: "a",
          explanation:
            "Cassius Clay. Adoptó el nombre de Muhammad Ali en 1964, justo después de ganar a Sonny Liston su primer título mundial.",
        },
        {
          id: 2,
          question: "¿Cuántos minutos dura un asalto en el boxeo profesional masculino?",
          answers: [
            { id: "a", text: "2 minutos" },
            { id: "b", text: "3 minutos" },
            { id: "c", text: "4 minutos" },
            { id: "d", text: "5 minutos" },
          ],
          correctAnswer: "b",
          explanation:
            "3 minutos, con un minuto de descanso entre asaltos.",
        },
        {
          id: 3,
          question: "¿Hasta cuánto cuenta el árbitro para un K.O.?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "8" },
            { id: "c", text: "10" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "Hasta 10. Si el boxeador que está en la lona no se ha levantado en condiciones de seguir al llegar a 10, pierde por K.O.",
        },
        {
          id: 4,
          image: "/images/q-boxe-02.webp",
          question: "¿En qué ciudad se enfrentaron Ali y Foreman en 1974?",
          answers: [
            { id: "a", text: "Manila" },
            { id: "b", text: "Las Vegas" },
            { id: "c", text: "Kinsasa" },
            { id: "d", text: "Nueva York" },
          ],
          correctAnswer: "c",
          explanation:
            "En Kinsasa, en Zaire, la actual República Democrática del Congo. Se le conoce como «Rumble in the Jungle». Manila fue el combate Ali-Frazier de 1975.",
        },
        {
          id: 5,
          image: "/images/q-boxe-03.webp",
          question: "¿Quién mordió la oreja de Evander Holyfield en 1997?",
          answers: [
            { id: "a", text: "Lennox Lewis" },
            { id: "b", text: "Mike Tyson" },
            { id: "c", text: "Riddick Bowe" },
            { id: "d", text: "George Foreman" },
          ],
          correctAnswer: "b",
          explanation:
            "Mike Tyson, en la revancha que disputaron en Las Vegas. Mordió a Holyfield dos veces en el tercer asalto y fue descalificado.",
        },
        {
          id: 6,
          question: "¿De qué país es Manny Pacquiao?",
          answers: [
            { id: "a", text: "Tailandia" },
            { id: "b", text: "Filipinas" },
            { id: "c", text: "Indonesia" },
            { id: "d", text: "México" },
          ],
          correctAnswer: "b",
          explanation:
            "De Filipinas. Fue campeón del mundo en ocho categorías de peso distintas y también fue senador en su país.",
        },
        {
          id: 7,
          image: "/images/q-boxe-04.webp",
          question: "¿En qué ciudad transcurre la película Rocky?",
          answers: [
            { id: "a", text: "Chicago" },
            { id: "b", text: "Boston" },
            { id: "c", text: "Detroit" },
            { id: "d", text: "Filadelfia" },
          ],
          correctAnswer: "d",
          explanation:
            "En Filadelfia. La estatua de Rocky está al pie de las escaleras del museo de arte de la ciudad, las mismas que sube corriendo en la película.",
        },
        {
          id: 8,
          question: "¿Con qué cantante tuvo Marcel Cerdan una historia de amor?",
          answers: [
            { id: "a", text: "Édith Piaf" },
            { id: "b", text: "Juliette Gréco" },
            { id: "c", text: "Dalida" },
            { id: "d", text: "Josephine Baker" },
          ],
          correctAnswer: "a",
          explanation:
            "Con Édith Piaf. Cerdan, campeón del mundo de los pesos medios en 1948, murió al año siguiente en un accidente de avión en las Azores.",
        },
        {
          id: 9,
          question: "¿En qué categoría fue campeón olímpico Tony Yoka en 2016?",
          answers: [
            { id: "a", text: "Peso medio" },
            { id: "b", text: "Peso semipesado" },
            { id: "c", text: "Peso superpesado" },
            { id: "d", text: "Peso wélter" },
          ],
          correctAnswer: "c",
          explanation:
            "En peso superpesado, más de 91 kg, en los Juegos de Río. Fue el primer francés en ganar el oro en esa categoría.",
        },
        {
          id: 10,
          question: "¿De qué país es Saúl «Canelo» Álvarez?",
          answers: [
            { id: "a", text: "México" },
            { id: "b", text: "Argentina" },
            { id: "c", text: "España" },
            { id: "d", text: "Cuba" },
          ],
          correctAnswer: "a",
          explanation:
            "De México, de la zona de Guadalajara. Lo llaman Canelo por su pelo pelirrojo, del color de la canela.",
        },
      ],
    },
  },
};

export default [quizBoxe] as TranslatedQuiz[];
