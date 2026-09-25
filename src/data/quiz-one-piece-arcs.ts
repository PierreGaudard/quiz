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
        {
          id: 11,
          question: "Remets ces transformations de Luffy dans l'ordre de leur première apparition.",
          answers: [
            { id: "a", text: "Gear 2" },
            { id: "b", text: "Gear 3" },
            { id: "c", text: "Gear 4" },
            { id: "d", text: "Gear 5" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Gear 2 et le Gear 3 apparaissent tous les deux à Enies Lobby, contre Blueno, le Gear 2 en premier. Le Gear 4 arrive à Dressrosa contre Doflamingo, et le Gear 5 à Wano, pendant le combat contre Kaido.",
        },
        {
          id: 12,
          question: "Remets ces étapes de la saga de Marineford dans l'ordre.",
          answers: [
            { id: "a", text: "L'archipel Sabaody" },
            { id: "b", text: "Amazon Lily" },
            { id: "c", text: "Impel Down" },
            { id: "d", text: "Marineford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "À Sabaody, Kuma disperse l'équipage. Luffy atterrit sur Amazon Lily, l'île de Boa Hancock, puis s'infiltre dans la prison d'Impel Down pour sauver Ace, avant la guerre au sommet de Marineford.",
        },
        {
          id: 13,
          question: "Encore des adversaires : dans quel ordre Luffy les bat-il ?",
          answers: [
            { id: "a", text: "Wapol" },
            { id: "b", text: "Enel" },
            { id: "c", text: "Foxy" },
            { id: "d", text: "Gecko Moria" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Wapol sur l'île de Drum, Enel à Skypiea, Foxy pendant le Davy Back Fight qui suit juste après, puis Gecko Moria à Thriller Bark.",
        },
        {
          id: 14,
          question: "Et après l'ellipse, dans quel ordre Luffy bat-il ces adversaires ?",
          answers: [
            { id: "a", text: "Hody Jones" },
            { id: "b", text: "Caesar Clown" },
            { id: "c", text: "Charlotte Katakuri" },
            { id: "d", text: "Kaido" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Hody Jones sur l'île des Hommes-Poissons, Caesar Clown à Punk Hazard, Katakuri à Whole Cake Island et enfin Kaido à Wano.",
        },
        {
          id: 15,
          question: "Remets ces sabres dans l'ordre où Zoro les obtient.",
          answers: [
            { id: "a", text: "Wado Ichimonji" },
            { id: "b", text: "Sandai Kitetsu" },
            { id: "c", text: "Shusui" },
            { id: "d", text: "Enma" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Wado Ichimonji appartenait à Kuina, son amie d'enfance. Zoro obtient le Sandai Kitetsu à Loguetown, récupère Shusui, le sabre de Ryuma, à Thriller Bark, puis reçoit Enma, le sabre d'Oden, à Wano.",
        },
        {
          id: 16,
          question: "Remets ces moments de l'enfance de Luffy dans l'ordre.",
          answers: [
            { id: "a", text: "Luffy mange le Gomu Gomu no Mi" },
            { id: "b", text: "Shanks lui laisse son chapeau et quitte le village" },
            { id: "c", text: "Luffy rencontre Ace" },
            { id: "d", text: "Luffy prend la mer" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luffy mange le fruit par accident, pendant que l'équipage de Shanks est au village. Shanks repart en lui laissant son chapeau, puis Garp confie Luffy à Dadan, chez qui vit Ace. Luffy prend la mer à 17 ans.",
        },
        {
          id: 17,
          question: "Remets ces moments de la vie du Vogue Merry dans l'ordre.",
          answers: [
            { id: "a", text: "Kaya offre le navire à l'équipage" },
            { id: "b", text: "À Water Seven, on apprend qu'il ne peut plus être réparé" },
            { id: "c", text: "Les adieux au Merry après Enies Lobby" },
            { id: "d", text: "Le premier départ du Thousand Sunny" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kaya donne le Vogue Merry à l'équipage au village de Sirop. À Water Seven, on découvre que sa quille est trop abîmée, et l'équipage lui fait ses adieux en le brûlant après Enies Lobby. Le Thousand Sunny prend ensuite la relève.",
        },
        {
          id: 18,
          question: "Remets ces moments de l'histoire d'Ace dans l'ordre.",
          answers: [
            { id: "a", text: "Ace retrouve Luffy à Alabasta" },
            { id: "b", text: "Barbe Noire bat Ace" },
            { id: "c", text: "Luffy s'infiltre à Impel Down" },
            { id: "d", text: "Ace meurt à Marineford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ace croise Luffy à Alabasta alors qu'il traque Barbe Noire. Barbe Noire finit par le battre et le livre à la Marine. Luffy entre alors à Impel Down pour le sauver, mais Ace meurt à Marineford.",
        },
        {
          id: 19,
          question: "Remets ces événements du passé dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "L'incident de God Valley" },
            { id: "b", text: "Roger atteint Laugh Tale" },
            { id: "c", text: "L'exécution de Roger" },
            { id: "d", text: "La naissance de Luffy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'incident de God Valley a lieu 38 ans avant le début de l'histoire. Roger atteint Laugh Tale peu de temps avant son exécution à Loguetown, qui a lieu 24 ans avant le début de l'histoire. Luffy naît quelques années plus tard.",
        },
        {
          id: 20,
          question: "Remets ces films One Piece dans l'ordre de sortie.",
          answers: [
            { id: "a", text: "Strong World" },
            { id: "b", text: "One Piece Z" },
            { id: "c", text: "One Piece Gold" },
            { id: "d", text: "One Piece Red" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Strong World sort en 2009, One Piece Z en 2012, Gold en 2016 et Red en 2022. Red est d'ailleurs le film de la série qui a rapporté le plus d'argent.",
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
        {
          id: 11,
          question: "Put Luffy's transformations in the order they first appear.",
          answers: [
            { id: "a", text: "Gear 2" },
            { id: "b", text: "Gear 3" },
            { id: "c", text: "Gear 4" },
            { id: "d", text: "Gear 5" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gear 2 and Gear 3 both show up at Enies Lobby against Blueno, with Gear 2 coming first. Gear 4 comes in Dressrosa against Doflamingo, and Gear 5 in Wano, during the fight against Kaido.",
        },
        {
          id: 12,
          question: "Put these steps of the Marineford saga in order.",
          answers: [
            { id: "a", text: "Sabaody Archipelago" },
            { id: "b", text: "Amazon Lily" },
            { id: "c", text: "Impel Down" },
            { id: "d", text: "Marineford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "On Sabaody, Kuma scatters the crew. Luffy lands on Amazon Lily, Boa Hancock's island, then breaks into Impel Down prison to save Ace, before the Summit War at Marineford.",
        },
        {
          id: 13,
          question: "More enemies: in what order does Luffy beat them?",
          answers: [
            { id: "a", text: "Wapol" },
            { id: "b", text: "Enel" },
            { id: "c", text: "Foxy" },
            { id: "d", text: "Gecko Moria" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Wapol on Drum Island, Enel on Skypiea, Foxy in the Davy Back Fight right after that, then Gecko Moria on Thriller Bark.",
        },
        {
          id: 14,
          question: "And after the timeskip, in what order does Luffy beat these enemies?",
          answers: [
            { id: "a", text: "Hody Jones" },
            { id: "b", text: "Caesar Clown" },
            { id: "c", text: "Charlotte Katakuri" },
            { id: "d", text: "Kaido" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Hody Jones on Fish-Man Island, Caesar Clown on Punk Hazard, Katakuri on Whole Cake Island and finally Kaido in Wano.",
        },
        {
          id: 15,
          question: "Put these swords in the order Zoro gets them.",
          answers: [
            { id: "a", text: "Wado Ichimonji" },
            { id: "b", text: "Sandai Kitetsu" },
            { id: "c", text: "Shusui" },
            { id: "d", text: "Enma" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Wado Ichimonji belonged to Kuina, his childhood friend. Zoro gets the Sandai Kitetsu in Loguetown, takes Shusui, Ryuma's sword, on Thriller Bark, and receives Enma, Oden's sword, in Wano.",
        },
        {
          id: 16,
          question: "Put these moments from Luffy's childhood in order.",
          answers: [
            { id: "a", text: "Luffy eats the Gum-Gum Fruit" },
            { id: "b", text: "Shanks leaves him his hat and sails away" },
            { id: "c", text: "Luffy meets Ace" },
            { id: "d", text: "Luffy sets sail" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luffy eats the fruit by accident while Shanks' crew is staying in his village. Shanks leaves and gives him his hat, then Garp drops Luffy off with Dadan, where Ace lives. Luffy sets sail at 17.",
        },
        {
          id: 17,
          question: "Put these moments in the life of the Going Merry in order.",
          answers: [
            { id: "a", text: "Kaya gives the ship to the crew" },
            { id: "b", text: "In Water 7, they learn it can't be repaired" },
            { id: "c", text: "The crew says goodbye to the Merry after Enies Lobby" },
            { id: "d", text: "The Thousand Sunny sets sail for the first time" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kaya gives the Going Merry to the crew in Syrup Village. In Water 7 they find out its keel is too damaged, and after Enies Lobby the crew says goodbye by burning it at sea. The Thousand Sunny takes over after that.",
        },
        {
          id: 18,
          question: "Put these moments in Ace's story in order.",
          answers: [
            { id: "a", text: "Ace meets Luffy in Alabasta" },
            { id: "b", text: "Blackbeard beats Ace" },
            { id: "c", text: "Luffy breaks into Impel Down" },
            { id: "d", text: "Ace dies at Marineford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ace runs into Luffy in Alabasta while he's hunting Blackbeard. Blackbeard ends up beating him and hands him over to the Marines. Luffy then goes into Impel Down to save him, but Ace dies at Marineford.",
        },
        {
          id: 19,
          question: "Put these past events in chronological order.",
          answers: [
            { id: "a", text: "The God Valley Incident" },
            { id: "b", text: "Roger reaches Laugh Tale" },
            { id: "c", text: "Roger's execution" },
            { id: "d", text: "Luffy is born" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The God Valley Incident happens 38 years before the story starts. Roger reaches Laugh Tale not long before his execution in Loguetown, which takes place 24 years before the story. Luffy is born a few years later.",
        },
        {
          id: 20,
          question: "Put these One Piece movies in release order.",
          answers: [
            { id: "a", text: "Strong World" },
            { id: "b", text: "One Piece Film: Z" },
            { id: "c", text: "One Piece Film: Gold" },
            { id: "d", text: "One Piece Film: Red" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Strong World came out in 2009, Z in 2012, Gold in 2016 and Red in 2022. Red is also the highest grossing movie of the series.",
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
        {
          id: 11,
          question: "Ordena estas transformaciones de Luffy según su primera aparición.",
          answers: [
            { id: "a", text: "Gear 2" },
            { id: "b", text: "Gear 3" },
            { id: "c", text: "Gear 4" },
            { id: "d", text: "Gear 5" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Gear 2 y el Gear 3 aparecen los dos en Enies Lobby, contra Blueno, primero el Gear 2. El Gear 4 llega en Dressrosa contra Doflamingo, y el Gear 5 en Wano, durante la pelea contra Kaido.",
        },
        {
          id: 12,
          question: "Ordena estas etapas de la saga de Marineford.",
          answers: [
            { id: "a", text: "El archipiélago Sabaody" },
            { id: "b", text: "Amazon Lily" },
            { id: "c", text: "Impel Down" },
            { id: "d", text: "Marineford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "En Sabaody, Kuma dispersa a la tripulación. Luffy cae en Amazon Lily, la isla de Boa Hancock, y luego se cuela en la prisión de Impel Down para salvar a Ace, antes de la guerra en la cumbre de Marineford.",
        },
        {
          id: 13,
          question: "Más enemigos: ¿en qué orden los derrota Luffy?",
          answers: [
            { id: "a", text: "Wapol" },
            { id: "b", text: "Enel" },
            { id: "c", text: "Foxy" },
            { id: "d", text: "Gecko Moria" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Wapol en la isla de Drum, Enel en Skypiea, Foxy en el Davy Back Fight que viene justo después y Gecko Moria en Thriller Bark.",
        },
        {
          id: 14,
          question: "Y después del salto temporal, ¿en qué orden derrota Luffy a estos enemigos?",
          answers: [
            { id: "a", text: "Hody Jones" },
            { id: "b", text: "Caesar Clown" },
            { id: "c", text: "Charlotte Katakuri" },
            { id: "d", text: "Kaido" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Hody Jones en la isla Gyojin, Caesar Clown en Punk Hazard, Katakuri en Whole Cake Island y, por último, Kaido en Wano.",
        },
        {
          id: 15,
          question: "Ordena estas espadas según cuándo las consigue Zoro.",
          answers: [
            { id: "a", text: "Wado Ichimonji" },
            { id: "b", text: "Sandai Kitetsu" },
            { id: "c", text: "Shusui" },
            { id: "d", text: "Enma" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Wado Ichimonji era de Kuina, su amiga de la infancia. Zoro consigue la Sandai Kitetsu en Loguetown, se queda con Shusui, la espada de Ryuma, en Thriller Bark, y recibe Enma, la espada de Oden, en Wano.",
        },
        {
          id: 16,
          question: "Ordena estos momentos de la infancia de Luffy.",
          answers: [
            { id: "a", text: "Luffy se come la Gomu Gomu no Mi" },
            { id: "b", text: "Shanks le deja su sombrero y se va del pueblo" },
            { id: "c", text: "Luffy conoce a Ace" },
            { id: "d", text: "Luffy se hace a la mar" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luffy se come la fruta sin querer mientras la tripulación de Shanks está en su pueblo. Shanks se marcha y le deja el sombrero, y luego Garp lleva a Luffy con Dadan, donde vive Ace. Luffy se hace a la mar a los 17 años.",
        },
        {
          id: 17,
          question: "Ordena estos momentos de la vida del Going Merry.",
          answers: [
            { id: "a", text: "Kaya le regala el barco a la tripulación" },
            { id: "b", text: "En Water Seven se enteran de que ya no tiene arreglo" },
            { id: "c", text: "La despedida del Merry después de Enies Lobby" },
            { id: "d", text: "El primer viaje del Thousand Sunny" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kaya le regala el Going Merry a la tripulación en Villa Syrup. En Water Seven descubren que la quilla está demasiado dañada, y después de Enies Lobby la tripulación se despide de él quemándolo en el mar. Luego el Thousand Sunny toma el relevo.",
        },
        {
          id: 18,
          question: "Ordena estos momentos de la historia de Ace.",
          answers: [
            { id: "a", text: "Ace se encuentra con Luffy en Alabasta" },
            { id: "b", text: "Barbanegra derrota a Ace" },
            { id: "c", text: "Luffy se cuela en Impel Down" },
            { id: "d", text: "Ace muere en Marineford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ace se cruza con Luffy en Alabasta mientras persigue a Barbanegra. Barbanegra acaba venciéndolo y se lo entrega a la Marina. Luffy entra entonces en Impel Down para salvarlo, pero Ace muere en Marineford.",
        },
        {
          id: 19,
          question: "Ordena estos hechos del pasado de forma cronológica.",
          answers: [
            { id: "a", text: "El incidente de God Valley" },
            { id: "b", text: "Roger llega a Laugh Tale" },
            { id: "c", text: "La ejecución de Roger" },
            { id: "d", text: "El nacimiento de Luffy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El incidente de God Valley ocurre 38 años antes del inicio de la historia. Roger llega a Laugh Tale poco antes de su ejecución en Loguetown, que tiene lugar 24 años antes del inicio de la historia. Luffy nace unos años después.",
        },
        {
          id: 20,
          question: "Ordena estas películas de One Piece por fecha de estreno.",
          answers: [
            { id: "a", text: "Strong World" },
            { id: "b", text: "One Piece Z" },
            { id: "c", text: "One Piece Gold" },
            { id: "d", text: "One Piece Red" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Strong World se estrena en 2009, Z en 2012, Gold en 2016 y Red en 2022. Red es, además, la película de la serie que más ha recaudado.",
        },
      ],
    },
  },
};

export default [quizOnePieceArcs] as TranslatedQuiz[];
