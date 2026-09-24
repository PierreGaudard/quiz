import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode ordre sur les arcs et les îles de One Piece.
 *
 * Chaque question remet quatre étapes du voyage de Luffy dans l'ordre du
 * récit : les arcs, les îles, les recrues de l'équipage, les adversaires.
 * Le moteur mélange lui-même les propositions à l'affichage, seul
 * `correctOrder` compte.
 */
export const quizOnePieceArcs: TranslatedQuiz = {
  slug: "quiz-one-piece-arcs",
  slugs: { en: "one-piece-arcs-quiz", fr: "quiz-one-piece-arcs", es: "quiz-one-piece-arcos" },
  categorySlug: "anime",
  subcategory: "One Piece",
  difficulty: "medium",
  coverImage: "/images/cover-one-piece-arcs.webp",
  gameType: "ordre",
  playCount: 5800,
  translations: {
    fr: {
      title: "Quiz One Piece : les arcs dans l'ordre",
      description:
        "Remets dans l'ordre les arcs, les îles et les recrues de l'équipage de Luffy, de l'East Blue jusqu'à Egghead.",
      questions: [
        {
          id: 1,
          question: "Remets ces arcs dans l'ordre du récit.",
          answers: [
            { id: "a", text: "Arlong Park" },
            { id: "b", text: "Alabasta" },
            { id: "c", text: "Enies Lobby" },
            { id: "d", text: "Marineford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Arlong Park ferme la saga East Blue, Alabasta arrive dans la première moitié de Grand Line, Enies Lobby vient après Water Seven, et Marineford clôt la première partie avant l'ellipse de deux ans.",
        },
        {
          id: 2,
          question: "Remets ces arcs de l'East Blue dans l'ordre.",
          answers: [
            { id: "a", text: "Orange Town, contre Baggy" },
            { id: "b", text: "Le village de Sirop, contre Kuro" },
            { id: "c", text: "Le Baratie, contre Don Krieg" },
            { id: "d", text: "Arlong Park, contre Arlong" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Baggy d'abord, puis Kuro au village d'Usopp, puis Don Krieg au restaurant où travaille Sanji, et enfin Arlong, qui retient Nami depuis des années.",
        },
        {
          id: 3,
          image: "/images/q-one-piece-arcs-03.webp",
          question: "Remets ces étapes du début de Grand Line dans l'ordre.",
          answers: [
            { id: "a", text: "Reverse Mountain" },
            { id: "b", text: "Whisky Peak" },
            { id: "c", text: "Little Garden" },
            { id: "d", text: "L'île de Drum" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "On entre dans Grand Line par Reverse Mountain, où vit la baleine Laboon. Viennent ensuite Whisky Peak, Little Garden et ses deux géants, puis Drum, où Chopper rejoint l'équipage.",
        },
        {
          id: 4,
          image: "/images/q-one-piece-arcs-04.webp",
          question: "Remets ces îles dans l'ordre où l'équipage les visite.",
          answers: [
            { id: "a", text: "Jaya" },
            { id: "b", text: "Skypiea" },
            { id: "c", text: "Water Seven" },
            { id: "d", text: "Thriller Bark" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "À Jaya, l'équipage apprend l'existence de l'île céleste, puis monte à Skypiea. Ensuite il y a Water Seven, où l'on construit le Thousand Sunny, et Thriller Bark, où Brook arrive.",
        },
        {
          id: 5,
          image: "/images/q-one-piece-arcs-05.webp",
          question: "Remets ces arcs d'après l'ellipse dans l'ordre.",
          answers: [
            { id: "a", text: "L'île des Hommes-Poissons" },
            { id: "b", text: "Punk Hazard" },
            { id: "c", text: "Dressrosa" },
            { id: "d", text: "Whole Cake Island" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Après les deux ans d'entraînement, l'équipage descend sous la mer vers l'île des Hommes-Poissons. Il entre ensuite dans le Nouveau Monde par Punk Hazard, puis vient Dressrosa, et Whole Cake Island, le territoire de Big Mom.",
        },
        {
          id: 6,
          image: "/images/q-one-piece-arcs-06.webp",
          question: "Remets ces arcs dans l'ordre du récit.",
          answers: [
            { id: "a", text: "Dressrosa" },
            { id: "b", text: "Whole Cake Island" },
            { id: "c", text: "Wano" },
            { id: "d", text: "Egghead" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dressrosa, puis Whole Cake Island, puis Wano et le combat contre Kaido, et enfin Egghead, l'île du docteur Vegapunk.",
        },
        {
          id: 7,
          question: "Remets ces membres dans l'ordre où ils rejoignent l'équipage.",
          answers: [
            { id: "a", text: "Zoro" },
            { id: "b", text: "Nami" },
            { id: "c", text: "Usopp" },
            { id: "d", text: "Sanji" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zoro est le premier, dès le début. Nami suit Luffy à partir d'Orange Town, Usopp embarque au village de Sirop, et Sanji quitte le Baratie pour les rejoindre.",
        },
        {
          id: 8,
          question: "Et ceux-là, dans quel ordre rejoignent-ils l'équipage ?",
          answers: [
            { id: "a", text: "Chopper" },
            { id: "b", text: "Nico Robin" },
            { id: "c", text: "Franky" },
            { id: "d", text: "Brook" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Chopper arrive à Drum, Robin après Alabasta, Franky à la fin de l'arc Water Seven et Brook à Thriller Bark. Jinbe, le dixième, ne les rejoint qu'à Wano.",
        },
        {
          id: 9,
          image: "/images/q-one-piece-arcs-09.webp",
          question: "Remets ces adversaires dans l'ordre où Luffy les bat.",
          answers: [
            { id: "a", text: "Arlong" },
            { id: "b", text: "Crocodile" },
            { id: "c", text: "Rob Lucci" },
            { id: "d", text: "Doflamingo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Arlong à Arlong Park, Crocodile à Alabasta, Rob Lucci du CP9 à Enies Lobby, puis Doflamingo à Dressrosa, bien après l'ellipse.",
        },
        {
          id: 10,
          question: "Remets ces dates de la série dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "Premier chapitre du manga" },
            { id: "b", text: "Premier épisode de l'anime" },
            { id: "c", text: "1000e épisode de l'anime" },
            { id: "d", text: "Sortie de la série Netflix" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le manga démarre en 1997 dans le Weekly Shōnen Jump, l'anime en 1999, le 1000e épisode passe à la télévision japonaise en 2021 et la série Netflix sort en 2023.",
        },
      ],
    },
    en: {
      title: "One Piece Quiz: Put the Arcs in Order",
      description:
        "Put the arcs, islands and crew recruits of Luffy's journey back in order, from East Blue all the way to Egghead.",
      questions: [
        {
          id: 1,
          question: "Put these arcs in story order.",
          answers: [
            { id: "a", text: "Arlong Park" },
            { id: "b", text: "Alabasta" },
            { id: "c", text: "Enies Lobby" },
            { id: "d", text: "Marineford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Arlong Park ends the East Blue saga, Alabasta comes in the first half of the Grand Line, Enies Lobby follows Water Seven, and Marineford closes the first part before the two year timeskip.",
        },
        {
          id: 2,
          question: "Put these East Blue arcs in order.",
          answers: [
            { id: "a", text: "Orange Town, against Buggy" },
            { id: "b", text: "Syrup Village, against Kuro" },
            { id: "c", text: "Baratie, against Don Krieg" },
            { id: "d", text: "Arlong Park, against Arlong" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Buggy first, then Kuro in Usopp's village, then Don Krieg at the restaurant where Sanji works, and finally Arlong, who had kept Nami under his control for years.",
        },
        {
          id: 3,
          image: "/images/q-one-piece-arcs-03.webp",
          question: "Put these early Grand Line stops in order.",
          answers: [
            { id: "a", text: "Reverse Mountain" },
            { id: "b", text: "Whisky Peak" },
            { id: "c", text: "Little Garden" },
            { id: "d", text: "Drum Island" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The crew enters the Grand Line through Reverse Mountain, where Laboon the whale lives. Then comes Whisky Peak, Little Garden with its two giants, and Drum, where Chopper joins.",
        },
        {
          id: 4,
          image: "/images/q-one-piece-arcs-04.webp",
          question: "Put these islands in the order the crew visits them.",
          answers: [
            { id: "a", text: "Jaya" },
            { id: "b", text: "Skypiea" },
            { id: "c", text: "Water Seven" },
            { id: "d", text: "Thriller Bark" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "On Jaya the crew hears about the sky island and then goes up to Skypiea. After that comes Water Seven, where the Thousand Sunny gets built, and Thriller Bark, where Brook shows up.",
        },
        {
          id: 5,
          image: "/images/q-one-piece-arcs-05.webp",
          question: "Put these post-timeskip arcs in order.",
          answers: [
            { id: "a", text: "Fish-Man Island" },
            { id: "b", text: "Punk Hazard" },
            { id: "c", text: "Dressrosa" },
            { id: "d", text: "Whole Cake Island" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "After two years of training, the crew dives under the sea to Fish-Man Island. They enter the New World through Punk Hazard, then comes Dressrosa, then Whole Cake Island, Big Mom's territory.",
        },
        {
          id: 6,
          image: "/images/q-one-piece-arcs-06.webp",
          question: "Put these arcs in story order.",
          answers: [
            { id: "a", text: "Dressrosa" },
            { id: "b", text: "Whole Cake Island" },
            { id: "c", text: "Wano" },
            { id: "d", text: "Egghead" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dressrosa, then Whole Cake Island, then Wano and the fight against Kaido, and finally Egghead, Dr. Vegapunk's island.",
        },
        {
          id: 7,
          question: "Put these crew members in the order they join.",
          answers: [
            { id: "a", text: "Zoro" },
            { id: "b", text: "Nami" },
            { id: "c", text: "Usopp" },
            { id: "d", text: "Sanji" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zoro is the first, right at the start. Nami travels with Luffy from Orange Town on, Usopp comes aboard in Syrup Village, and Sanji leaves the Baratie to join them.",
        },
        {
          id: 8,
          question: "And these ones, in what order do they join the crew?",
          answers: [
            { id: "a", text: "Chopper" },
            { id: "b", text: "Nico Robin" },
            { id: "c", text: "Franky" },
            { id: "d", text: "Brook" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Chopper joins on Drum, Robin after Alabasta, Franky at the end of the Water Seven arc and Brook on Thriller Bark. Jinbe, the tenth member, only joins in Wano.",
        },
        {
          id: 9,
          image: "/images/q-one-piece-arcs-09.webp",
          question: "Put these enemies in the order Luffy beats them.",
          answers: [
            { id: "a", text: "Arlong" },
            { id: "b", text: "Crocodile" },
            { id: "c", text: "Rob Lucci" },
            { id: "d", text: "Doflamingo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Arlong at Arlong Park, Crocodile in Alabasta, Rob Lucci of CP9 at Enies Lobby, then Doflamingo in Dressrosa, long after the timeskip.",
        },
        {
          id: 10,
          question: "Put these milestones of the series in chronological order.",
          answers: [
            { id: "a", text: "First chapter of the manga" },
            { id: "b", text: "First episode of the anime" },
            { id: "c", text: "1,000th episode of the anime" },
            { id: "d", text: "Release of the Netflix series" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The manga started in 1997 in Weekly Shōnen Jump, the anime in 1999, episode 1,000 aired on Japanese TV in 2021 and the Netflix series came out in 2023.",
        },
      ],
    },
    es: {
      title: "Quiz One Piece: los arcos en orden",
      description:
        "Ordena los arcos, las islas y los fichajes de la tripulación de Luffy, desde el East Blue hasta Egghead.",
      questions: [
        {
          id: 1,
          question: "Ordena estos arcos según la historia.",
          answers: [
            { id: "a", text: "Arlong Park" },
            { id: "b", text: "Alabasta" },
            { id: "c", text: "Enies Lobby" },
            { id: "d", text: "Marineford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Arlong Park cierra la saga del East Blue, Alabasta llega en la primera mitad del Grand Line, Enies Lobby viene después de Water Seven y Marineford cierra la primera parte antes del salto de dos años.",
        },
        {
          id: 2,
          question: "Ordena estos arcos del East Blue.",
          answers: [
            { id: "a", text: "Orange Town, contra Buggy" },
            { id: "b", text: "Villa Syrup, contra Kuro" },
            { id: "c", text: "El Baratie, contra Don Krieg" },
            { id: "d", text: "Arlong Park, contra Arlong" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Primero Buggy, luego Kuro en el pueblo de Usopp, después Don Krieg en el restaurante donde trabaja Sanji y, por último, Arlong, que tenía a Nami a su servicio desde hacía años.",
        },
        {
          id: 3,
          image: "/images/q-one-piece-arcs-03.webp",
          question: "Ordena estas paradas del principio del Grand Line.",
          answers: [
            { id: "a", text: "Reverse Mountain" },
            { id: "b", text: "Whisky Peak" },
            { id: "c", text: "Little Garden" },
            { id: "d", text: "La isla de Drum" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Se entra en el Grand Line por Reverse Mountain, donde vive la ballena Laboon. Luego vienen Whisky Peak, Little Garden con sus dos gigantes y Drum, donde Chopper se une a la tripulación.",
        },
        {
          id: 4,
          image: "/images/q-one-piece-arcs-04.webp",
          question: "Ordena estas islas según el orden en que las visita la tripulación.",
          answers: [
            { id: "a", text: "Jaya" },
            { id: "b", text: "Skypiea" },
            { id: "c", text: "Water Seven" },
            { id: "d", text: "Thriller Bark" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "En Jaya la tripulación oye hablar de la isla del cielo y sube a Skypiea. Después llega Water Seven, donde se construye el Thousand Sunny, y Thriller Bark, donde aparece Brook.",
        },
        {
          id: 5,
          image: "/images/q-one-piece-arcs-05.webp",
          question: "Ordena estos arcos de después del salto temporal.",
          answers: [
            { id: "a", text: "La isla Gyojin" },
            { id: "b", text: "Punk Hazard" },
            { id: "c", text: "Dressrosa" },
            { id: "d", text: "Whole Cake Island" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tras dos años de entrenamiento, la tripulación baja bajo el mar hasta la isla Gyojin. Entra en el Nuevo Mundo por Punk Hazard, luego viene Dressrosa y después Whole Cake Island, el territorio de Big Mom.",
        },
        {
          id: 6,
          image: "/images/q-one-piece-arcs-06.webp",
          question: "Ordena estos arcos según la historia.",
          answers: [
            { id: "a", text: "Dressrosa" },
            { id: "b", text: "Whole Cake Island" },
            { id: "c", text: "Wano" },
            { id: "d", text: "Egghead" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dressrosa, luego Whole Cake Island, después Wano y la pelea contra Kaido y, por último, Egghead, la isla del doctor Vegapunk.",
        },
        {
          id: 7,
          question: "Ordena a estos miembros según cuándo se unen a la tripulación.",
          answers: [
            { id: "a", text: "Zoro" },
            { id: "b", text: "Nami" },
            { id: "c", text: "Usopp" },
            { id: "d", text: "Sanji" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zoro es el primero, desde el principio. Nami acompaña a Luffy desde Orange Town, Usopp sube a bordo en Villa Syrup y Sanji deja el Baratie para unirse a ellos.",
        },
        {
          id: 8,
          question: "¿Y estos? ¿En qué orden se unen a la tripulación?",
          answers: [
            { id: "a", text: "Chopper" },
            { id: "b", text: "Nico Robin" },
            { id: "c", text: "Franky" },
            { id: "d", text: "Brook" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Chopper llega en Drum, Robin después de Alabasta, Franky al final del arco de Water Seven y Brook en Thriller Bark. Jinbe, el décimo, no se une hasta Wano.",
        },
        {
          id: 9,
          image: "/images/q-one-piece-arcs-09.webp",
          question: "Ordena a estos enemigos según el orden en que Luffy los derrota.",
          answers: [
            { id: "a", text: "Arlong" },
            { id: "b", text: "Crocodile" },
            { id: "c", text: "Rob Lucci" },
            { id: "d", text: "Doflamingo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Arlong en Arlong Park, Crocodile en Alabasta, Rob Lucci del CP9 en Enies Lobby y Doflamingo en Dressrosa, mucho después del salto temporal.",
        },
        {
          id: 10,
          question: "Ordena estos momentos de la serie de forma cronológica.",
          answers: [
            { id: "a", text: "Primer capítulo del manga" },
            { id: "b", text: "Primer episodio del anime" },
            { id: "c", text: "Episodio 1000 del anime" },
            { id: "d", text: "Estreno de la serie de Netflix" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El manga empieza en 1997 en la Weekly Shōnen Jump, el anime en 1999, el episodio 1000 se emite en la tele japonesa en 2021 y la serie de Netflix se estrena en 2023.",
        },
      ],
    },
  },
};

export default [quizOnePieceArcs] as TranslatedQuiz[];
