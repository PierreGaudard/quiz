import type { TranslatedQuiz } from "./types";

/**
 * Quiz Valorant en mode ordre : l'ordre d'arrivée des cartes et des agents
 * de 2020 à 2025, et l'histoire des Champions, le championnat du monde.
 *
 * Le moteur mélange lui-même les propositions (cf. quiz-star-wars.ts) : les
 * `answers` sont écrites dans le bon ordre et `correctOrder` vaut a, b, c, d.
 * Ascent, déjà posée dans le chrono quiz-valorant.ts, n'est pas reprise. Les
 * dates sont celles des patchs d'arrivée sur les serveurs.
 */
export const quizValorantChronologie: TranslatedQuiz = {
  slug: "quiz-valorant-chronologie",
  slugs: { en: "valorant-timeline-quiz", fr: "quiz-valorant-chronologie", es: "quiz-valorant-cronologia" },
  categorySlug: "jeux-video",
  subcategory: "Valorant",
  difficulty: "hard",
  coverImage: "/images/cover-valorant-chronologie.webp",
  gameType: "ordre",
  playCount: 3600,
  translations: {
    fr: {
      title: "Valorant dans l'ordre : cartes et agents",
      description:
        "Icebox, Lotus, Killjoy, Clove, les Champions de Berlin à Séoul : remets dans l'ordre l'arrivée des cartes, des agents et des champions de Valorant.",
      questions: [
        {
          id: 1,
          image: "/images/q-valorant-chronologie-01.webp",
          question: "Remets ces cartes dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "Icebox" },
            { id: "b", text: "Breeze" },
            { id: "c", text: "Fracture" },
            { id: "d", text: "Pearl" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Octobre 2020, avril 2021, septembre 2021, puis juin 2022. Icebox se passe sur une île gelée de Russie, et Pearl dans une ville sous la mer, au Portugal.",
        },
        {
          id: 2,
          image: "/images/q-valorant-chronologie-02.webp",
          question: "Remets ces cartes dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "Lotus" },
            { id: "b", text: "Sunset" },
            { id: "c", text: "Abyss" },
            { id: "d", text: "Corrode" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Janvier 2023, août 2023, juin 2024, puis juin 2025. Abyss est la première carte sans murs sur les bords : on peut tomber dans le vide.",
        },
        {
          id: 3,
          question: "Remets ces cartes dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "Breeze" },
            { id: "b", text: "Pearl" },
            { id: "c", text: "Sunset" },
            { id: "d", text: "Corrode" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2021, 2022, 2023, puis 2025. Depuis la sortie du jeu, au moins une nouvelle carte est arrivée chaque année.",
        },
        {
          id: 4,
          image: "/images/q-valorant-chronologie-04.webp",
          question: "Remets ces agents dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "Killjoy" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Astra" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Août 2020, octobre 2020, janvier 2021, puis mars 2021. Ce sont les quatre premiers agents ajoutés après la sortie du jeu.",
        },
        {
          id: 5,
          question: "Remets ces agents dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "KAY/O" },
            { id: "b", text: "Chamber" },
            { id: "c", text: "Neon" },
            { id: "d", text: "Fade" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Juin 2021, novembre 2021, janvier 2022, puis avril 2022. Neon et Fade sont arrivés à trois mois d'écart seulement.",
        },
        {
          id: 6,
          question: "Remets ces agents dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "Harbor" },
            { id: "b", text: "Gekko" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Iso" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Octobre 2022, mars 2023, juin 2023, puis octobre 2023. Trois agents sont sortis rien qu'en 2023.",
        },
        {
          id: 7,
          image: "/images/q-valorant-chronologie-07.webp",
          question: "Remets ces agents dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "Clove" },
            { id: "b", text: "Vyse" },
            { id: "c", text: "Tejo" },
            { id: "d", text: "Waylay" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mars 2024, août 2024, janvier 2025, puis mars 2025. Tejo vient de Colombie et Waylay de Thaïlande.",
        },
        {
          id: 8,
          question: "Remets ces villes dans l'ordre où elles ont accueilli les Champions, le championnat du monde de Valorant.",
          answers: [
            { id: "a", text: "Berlin" },
            { id: "b", text: "Istanbul" },
            { id: "c", text: "Los Angeles" },
            { id: "d", text: "Séoul" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2021 à Berlin, 2022 à Istanbul, 2023 à Los Angeles et 2024 à Séoul. En 2025, les Champions se sont joués à Paris.",
        },
        {
          id: 9,
          question: "Remets ces équipes dans l'ordre où elles ont gagné les Champions.",
          answers: [
            { id: "a", text: "Acend" },
            { id: "b", text: "LOUD" },
            { id: "c", text: "Evil Geniuses" },
            { id: "d", text: "EDward Gaming" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Acend en 2021, les Brésiliens de LOUD en 2022, les Américains d'Evil Geniuses en 2023, puis les Chinois d'EDward Gaming en 2024.",
        },
        {
          id: 10,
          question: "Remets ces étapes de l'histoire de Valorant dans l'ordre.",
          answers: [
            { id: "a", text: "La bêta fermée" },
            { id: "b", text: "La sortie sur PC" },
            { id: "c", text: "Les premiers Champions, à Berlin" },
            { id: "d", text: "La sortie sur consoles" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Avril 2020, juin 2020, décembre 2021, puis 2024 pour la PS5 et les Xbox Series. Le jeu a donc attendu quatre ans avant d'arriver sur console.",
        },
      ],
    },
    en: {
      title: "Valorant in order: maps and agents",
      description:
        "Icebox, Lotus, Killjoy, Clove, the Champions from Berlin to Seoul: put the arrival of Valorant's maps, agents and world champions in order.",
      questions: [
        {
          id: 1,
          image: "/images/q-valorant-chronologie-01.webp",
          question: "Put these maps in the order they were added to the game.",
          answers: [
            { id: "a", text: "Icebox" },
            { id: "b", text: "Breeze" },
            { id: "c", text: "Fracture" },
            { id: "d", text: "Pearl" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "October 2020, April 2021, September 2021, then June 2022. Icebox is set on a frozen island in Russia, and Pearl in an underwater city in Portugal.",
        },
        {
          id: 2,
          image: "/images/q-valorant-chronologie-02.webp",
          question: "Put these maps in the order they were added to the game.",
          answers: [
            { id: "a", text: "Lotus" },
            { id: "b", text: "Sunset" },
            { id: "c", text: "Abyss" },
            { id: "d", text: "Corrode" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "January 2023, August 2023, June 2024, then June 2025. Abyss was the first map with no walls around the edges, so you can fall off.",
        },
        {
          id: 3,
          question: "Put these maps in the order they were added to the game.",
          answers: [
            { id: "a", text: "Breeze" },
            { id: "b", text: "Pearl" },
            { id: "c", text: "Sunset" },
            { id: "d", text: "Corrode" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2021, 2022, 2023, then 2025. Since the game came out, at least one new map has arrived every year.",
        },
        {
          id: 4,
          image: "/images/q-valorant-chronologie-04.webp",
          question: "Put these agents in the order they were added to the game.",
          answers: [
            { id: "a", text: "Killjoy" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Astra" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "August 2020, October 2020, January 2021, then March 2021. These are the first four agents added after the game came out.",
        },
        {
          id: 5,
          question: "Put these agents in the order they were added to the game.",
          answers: [
            { id: "a", text: "KAY/O" },
            { id: "b", text: "Chamber" },
            { id: "c", text: "Neon" },
            { id: "d", text: "Fade" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "June 2021, November 2021, January 2022, then April 2022. Neon and Fade arrived just three months apart.",
        },
        {
          id: 6,
          question: "Put these agents in the order they were added to the game.",
          answers: [
            { id: "a", text: "Harbor" },
            { id: "b", text: "Gekko" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Iso" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "October 2022, March 2023, June 2023, then October 2023. Three agents came out in 2023 alone.",
        },
        {
          id: 7,
          image: "/images/q-valorant-chronologie-07.webp",
          question: "Put these agents in the order they were added to the game.",
          answers: [
            { id: "a", text: "Clove" },
            { id: "b", text: "Vyse" },
            { id: "c", text: "Tejo" },
            { id: "d", text: "Waylay" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "March 2024, August 2024, January 2025, then March 2025. Tejo is from Colombia and Waylay from Thailand.",
        },
        {
          id: 8,
          question: "Put these cities in the order they hosted Champions, the Valorant world championship.",
          answers: [
            { id: "a", text: "Berlin" },
            { id: "b", text: "Istanbul" },
            { id: "c", text: "Los Angeles" },
            { id: "d", text: "Seoul" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2021 in Berlin, 2022 in Istanbul, 2023 in Los Angeles and 2024 in Seoul. In 2025, Champions was held in Paris.",
        },
        {
          id: 9,
          question: "Put these teams in the order they won Champions.",
          answers: [
            { id: "a", text: "Acend" },
            { id: "b", text: "LOUD" },
            { id: "c", text: "Evil Geniuses" },
            { id: "d", text: "EDward Gaming" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Acend in 2021, Brazil's LOUD in 2022, America's Evil Geniuses in 2023, then China's EDward Gaming in 2024.",
        },
        {
          id: 10,
          question: "Put these moments in Valorant's history in order.",
          answers: [
            { id: "a", text: "The closed beta" },
            { id: "b", text: "The PC release" },
            { id: "c", text: "The first Champions, in Berlin" },
            { id: "d", text: "The console release" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "April 2020, June 2020, December 2021, then 2024 for PS5 and Xbox Series. So the game waited four years before reaching consoles.",
        },
      ],
    },
    es: {
      title: "Valorant en orden: mapas y agentes",
      description:
        "Icebox, Lotus, Killjoy, Clove, los Champions de Berlín a Seúl: ordena la llegada de los mapas, los agentes y los campeones de Valorant.",
      questions: [
        {
          id: 1,
          image: "/images/q-valorant-chronologie-01.webp",
          question: "Ordena estos mapas según su llegada al juego.",
          answers: [
            { id: "a", text: "Icebox" },
            { id: "b", text: "Breeze" },
            { id: "c", text: "Fracture" },
            { id: "d", text: "Pearl" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Octubre de 2020, abril de 2021, septiembre de 2021 y junio de 2022. Icebox está en una isla helada de Rusia, y Pearl en una ciudad bajo el mar, en Portugal.",
        },
        {
          id: 2,
          image: "/images/q-valorant-chronologie-02.webp",
          question: "Ordena estos mapas según su llegada al juego.",
          answers: [
            { id: "a", text: "Lotus" },
            { id: "b", text: "Sunset" },
            { id: "c", text: "Abyss" },
            { id: "d", text: "Corrode" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Enero de 2023, agosto de 2023, junio de 2024 y junio de 2025. Abyss fue el primer mapa sin paredes en los bordes, así que puedes caerte al vacío.",
        },
        {
          id: 3,
          question: "Ordena estos mapas según su llegada al juego.",
          answers: [
            { id: "a", text: "Breeze" },
            { id: "b", text: "Pearl" },
            { id: "c", text: "Sunset" },
            { id: "d", text: "Corrode" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2021, 2022, 2023 y luego 2025. Desde el lanzamiento, ha llegado al menos un mapa nuevo cada año.",
        },
        {
          id: 4,
          image: "/images/q-valorant-chronologie-04.webp",
          question: "Ordena estos agentes según su llegada al juego.",
          answers: [
            { id: "a", text: "Killjoy" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Astra" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Agosto de 2020, octubre de 2020, enero de 2021 y marzo de 2021. Son los cuatro primeros agentes que llegaron después del lanzamiento.",
        },
        {
          id: 5,
          question: "Ordena estos agentes según su llegada al juego.",
          answers: [
            { id: "a", text: "KAY/O" },
            { id: "b", text: "Chamber" },
            { id: "c", text: "Neon" },
            { id: "d", text: "Fade" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Junio de 2021, noviembre de 2021, enero de 2022 y abril de 2022. Entre Neon y Fade solo pasaron tres meses.",
        },
        {
          id: 6,
          question: "Ordena estos agentes según su llegada al juego.",
          answers: [
            { id: "a", text: "Harbor" },
            { id: "b", text: "Gekko" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Iso" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Octubre de 2022, marzo de 2023, junio de 2023 y octubre de 2023. Solo en 2023 salieron tres agentes.",
        },
        {
          id: 7,
          image: "/images/q-valorant-chronologie-07.webp",
          question: "Ordena estos agentes según su llegada al juego.",
          answers: [
            { id: "a", text: "Clove" },
            { id: "b", text: "Vyse" },
            { id: "c", text: "Tejo" },
            { id: "d", text: "Waylay" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Marzo de 2024, agosto de 2024, enero de 2025 y marzo de 2025. Tejo es de Colombia y Waylay de Tailandia.",
        },
        {
          id: 8,
          question: "Ordena estas ciudades según cuándo acogieron los Champions, el mundial de Valorant.",
          answers: [
            { id: "a", text: "Berlín" },
            { id: "b", text: "Estambul" },
            { id: "c", text: "Los Ángeles" },
            { id: "d", text: "Seúl" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2021 en Berlín, 2022 en Estambul, 2023 en Los Ángeles y 2024 en Seúl. En 2025, los Champions se jugaron en París.",
        },
        {
          id: 9,
          question: "Ordena estos equipos según cuándo ganaron los Champions.",
          answers: [
            { id: "a", text: "Acend" },
            { id: "b", text: "LOUD" },
            { id: "c", text: "Evil Geniuses" },
            { id: "d", text: "EDward Gaming" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Acend en 2021, los brasileños de LOUD en 2022, los estadounidenses de Evil Geniuses en 2023 y los chinos de EDward Gaming en 2024.",
        },
        {
          id: 10,
          question: "Ordena estos momentos de la historia de Valorant.",
          answers: [
            { id: "a", text: "La beta cerrada" },
            { id: "b", text: "El lanzamiento en PC" },
            { id: "c", text: "Los primeros Champions, en Berlín" },
            { id: "d", text: "El lanzamiento en consolas" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Abril de 2020, junio de 2020, diciembre de 2021 y luego 2024 para PS5 y Xbox Series. El juego tardó cuatro años en llegar a consolas.",
        },
      ],
    },
  },
};

export default [quizValorantChronologie] as TranslatedQuiz[];
