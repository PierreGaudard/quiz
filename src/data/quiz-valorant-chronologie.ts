import type { TranslatedQuiz } from "./types";

/**
 * Quiz Valorant en mode ordre : l'ordre d'arrivée des cartes et des agents
 * de 2020 à 2026 (aussi rôle par rôle), l'histoire des Champions et des
 * Masters, et quelques étapes de la vie du jeu.
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
        {
          id: 11,
          question: "Remets ces équipes dans l'ordre où elles ont gagné un Masters.",
          answers: [
            { id: "a", text: "Sentinels" },
            { id: "b", text: "Gambit Esports" },
            { id: "c", text: "OpTic Gaming" },
            { id: "d", text: "FunPlus Phoenix" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sentinels à Reykjavik en mai 2021, Gambit à Berlin en septembre 2021, OpTic de nouveau à Reykjavik en 2022, puis FunPlus Phoenix à Copenhague en juillet 2022. Ce sont les quatre premiers Masters de l'histoire du jeu.",
        },
        {
          id: 12,
          question: "Remets ces villes dans l'ordre où elles ont accueilli un Masters.",
          answers: [
            { id: "a", text: "Reykjavik" },
            { id: "b", text: "Tokyo" },
            { id: "c", text: "Shanghai" },
            { id: "d", text: "Toronto" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Reykjavik en 2021, Tokyo en 2023, Shanghai en 2024, puis Toronto en 2025. Le Masters de Tokyo se jouait en fait à Chiba, juste à côté, et c'est Fnatic qui l'a gagné.",
        },
        {
          id: 13,
          question: "Remets ces équipes dans l'ordre où elles ont gagné un Masters.",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Gen.G" },
            { id: "c", text: "Paper Rex" },
            { id: "d", text: "Leviatán" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Fnatic à Tokyo en 2023, Gen.G à Shanghai en 2024, Paper Rex à Toronto en 2025, puis Leviatán à Londres en juin 2026, en battant justement Paper Rex en finale.",
        },
        {
          id: 14,
          question: "Remets ces victoires en tournoi international dans l'ordre.",
          answers: [
            { id: "a", text: "Sentinels au Masters Madrid" },
            { id: "b", text: "T1 au Masters Bangkok" },
            { id: "c", text: "NRG aux Champions de Paris" },
            { id: "d", text: "Nongshim RedForce au Masters Santiago" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Madrid en mars 2024, Bangkok début 2025, Paris en octobre 2025, puis Santiago en mars 2026. NRG a battu Fnatic 3 à 2 en finale à Paris.",
        },
        {
          id: 15,
          question: "Remets ces étapes de l'histoire de Valorant dans l'ordre.",
          answers: [
            { id: "a", text: "Le premier Masters, à Reykjavik" },
            { id: "b", text: "Le tournoi LOCK//IN à São Paulo" },
            { id: "c", text: "La sortie de Valorant Mobile en Chine" },
            { id: "d", text: "Le Masters de Londres" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mai 2021, début 2023, août 2025, puis juin 2026. Le LOCK//IN a ouvert la saison 2023 avec toutes les équipes partenaires, et Fnatic l'a gagné contre LOUD.",
        },
        {
          id: 16,
          question: "Remets ces sentinelles dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "Killjoy" },
            { id: "b", text: "Chamber" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Veto" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Killjoy en 2020, Chamber en 2021, Deadlock en 2023, puis Veto, la plus récente des quatre, arrivée après Waylay. Veto vient du Sénégal et coupe les capacités des ennemis.",
        },
        {
          id: 17,
          question: "Remets ces contrôleurs dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "Brimstone" },
            { id: "b", text: "Astra" },
            { id: "c", text: "Harbor" },
            { id: "d", text: "Miks" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Brimstone est là depuis la sortie du jeu en 2020, Astra arrive en 2021, Harbor en 2022, et Miks, le contrôleur croate, est le plus récent des quatre.",
        },
        {
          id: 18,
          question: "Remets ces initiateurs dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "Sova" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Fade" },
            { id: "d", text: "Tejo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sova est là depuis la sortie en juin 2020, Skye arrive en octobre 2020, Fade en avril 2022, puis Tejo en janvier 2025.",
        },
        {
          id: 19,
          question: "Remets ces duellistes dans leur ordre d'arrivée dans le jeu.",
          answers: [
            { id: "a", text: "Reyna" },
            { id: "b", text: "Neon" },
            { id: "c", text: "Iso" },
            { id: "d", text: "Waylay" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Reyna est là depuis la sortie du jeu en 2020, Neon arrive en janvier 2022, Iso en octobre 2023, puis Waylay en mars 2025.",
        },
        {
          id: 20,
          question: "Remets ces villes dans l'ordre où elles ont accueilli un Masters.",
          answers: [
            { id: "a", text: "Berlin" },
            { id: "b", text: "Copenhague" },
            { id: "c", text: "Madrid" },
            { id: "d", text: "Bangkok" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Berlin en 2021, Copenhague en 2022, Madrid en 2024, puis Bangkok en 2025. Berlin a aussi accueilli les tout premiers Champions, à la fin de 2021.",
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
        {
          id: 11,
          question: "Put these teams in the order they won a Masters.",
          answers: [
            { id: "a", text: "Sentinels" },
            { id: "b", text: "Gambit Esports" },
            { id: "c", text: "OpTic Gaming" },
            { id: "d", text: "FunPlus Phoenix" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sentinels in Reykjavik in May 2021, Gambit in Berlin in September 2021, OpTic back in Reykjavik in 2022, then FunPlus Phoenix in Copenhagen in July 2022. Those were the first four Masters in the game's history.",
        },
        {
          id: 12,
          question: "Put these cities in the order they hosted a Masters.",
          answers: [
            { id: "a", text: "Reykjavik" },
            { id: "b", text: "Tokyo" },
            { id: "c", text: "Shanghai" },
            { id: "d", text: "Toronto" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Reykjavik in 2021, Tokyo in 2023, Shanghai in 2024, then Toronto in 2025. Masters Tokyo was actually played in Chiba, right next door, and Fnatic won it.",
        },
        {
          id: 13,
          question: "Put these teams in the order they won a Masters.",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Gen.G" },
            { id: "c", text: "Paper Rex" },
            { id: "d", text: "Leviatán" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Fnatic in Tokyo in 2023, Gen.G in Shanghai in 2024, Paper Rex in Toronto in 2025, then Leviatán in London in June 2026, beating Paper Rex in the final.",
        },
        {
          id: 14,
          question: "Put these international tournament wins in order.",
          answers: [
            { id: "a", text: "Sentinels at Masters Madrid" },
            { id: "b", text: "T1 at Masters Bangkok" },
            { id: "c", text: "NRG at Champions Paris" },
            { id: "d", text: "Nongshim RedForce at Masters Santiago" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Madrid in March 2024, Bangkok in early 2025, Paris in October 2025, then Santiago in March 2026. NRG beat Fnatic 3-2 in the Paris final.",
        },
        {
          id: 15,
          question: "Put these moments in Valorant's history in order.",
          answers: [
            { id: "a", text: "The first Masters, in Reykjavik" },
            { id: "b", text: "The LOCK//IN tournament in São Paulo" },
            { id: "c", text: "The launch of Valorant Mobile in China" },
            { id: "d", text: "Masters London" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "May 2021, early 2023, August 2025, then June 2026. LOCK//IN opened the 2023 season with every partner team, and Fnatic won it against LOUD.",
        },
        {
          id: 16,
          question: "Put these sentinels in the order they were added to the game.",
          answers: [
            { id: "a", text: "Killjoy" },
            { id: "b", text: "Chamber" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Veto" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Killjoy in 2020, Chamber in 2021, Deadlock in 2023, then Veto, the newest of the four, who arrived after Waylay. Veto comes from Senegal and shuts down enemy abilities.",
        },
        {
          id: 17,
          question: "Put these controllers in the order they were added to the game.",
          answers: [
            { id: "a", text: "Brimstone" },
            { id: "b", text: "Astra" },
            { id: "c", text: "Harbor" },
            { id: "d", text: "Miks" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Brimstone has been there since launch in 2020, Astra arrived in 2021, Harbor in 2022, and Miks, the Croatian controller, is the newest of the four.",
        },
        {
          id: 18,
          question: "Put these initiators in the order they were added to the game.",
          answers: [
            { id: "a", text: "Sova" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Fade" },
            { id: "d", text: "Tejo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sova has been there since launch in June 2020, Skye arrived in October 2020, Fade in April 2022, then Tejo in January 2025.",
        },
        {
          id: 19,
          question: "Put these duelists in the order they were added to the game.",
          answers: [
            { id: "a", text: "Reyna" },
            { id: "b", text: "Neon" },
            { id: "c", text: "Iso" },
            { id: "d", text: "Waylay" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Reyna has been there since launch in 2020, Neon arrived in January 2022, Iso in October 2023, then Waylay in March 2025.",
        },
        {
          id: 20,
          question: "Put these cities in the order they hosted a Masters.",
          answers: [
            { id: "a", text: "Berlin" },
            { id: "b", text: "Copenhagen" },
            { id: "c", text: "Madrid" },
            { id: "d", text: "Bangkok" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Berlin in 2021, Copenhagen in 2022, Madrid in 2024, then Bangkok in 2025. Berlin also hosted the very first Champions at the end of 2021.",
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
        {
          id: 11,
          question: "Ordena estos equipos según cuándo ganaron un Masters.",
          answers: [
            { id: "a", text: "Sentinels" },
            { id: "b", text: "Gambit Esports" },
            { id: "c", text: "OpTic Gaming" },
            { id: "d", text: "FunPlus Phoenix" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sentinels en Reikiavik en mayo de 2021, Gambit en Berlín en septiembre de 2021, OpTic otra vez en Reikiavik en 2022 y luego FunPlus Phoenix en Copenhague en julio de 2022. Son los cuatro primeros Masters de la historia del juego.",
        },
        {
          id: 12,
          question: "Ordena estas ciudades según cuándo acogieron un Masters.",
          answers: [
            { id: "a", text: "Reikiavik" },
            { id: "b", text: "Tokio" },
            { id: "c", text: "Shanghái" },
            { id: "d", text: "Toronto" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Reikiavik en 2021, Tokio en 2023, Shanghái en 2024 y luego Toronto en 2025. El Masters de Tokio se jugó en realidad en Chiba, justo al lado, y lo ganó Fnatic.",
        },
        {
          id: 13,
          question: "Ordena estos equipos según cuándo ganaron un Masters.",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "Gen.G" },
            { id: "c", text: "Paper Rex" },
            { id: "d", text: "Leviatán" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Fnatic en Tokio en 2023, Gen.G en Shanghái en 2024, Paper Rex en Toronto en 2025 y luego Leviatán en Londres en junio de 2026, ganando precisamente a Paper Rex en la final.",
        },
        {
          id: 14,
          question: "Ordena estas victorias en torneos internacionales.",
          answers: [
            { id: "a", text: "Sentinels en el Masters Madrid" },
            { id: "b", text: "T1 en el Masters Bangkok" },
            { id: "c", text: "NRG en los Champions de París" },
            { id: "d", text: "Nongshim RedForce en el Masters Santiago" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Madrid en marzo de 2024, Bangkok a principios de 2025, París en octubre de 2025 y luego Santiago en marzo de 2026. NRG ganó 3-2 a Fnatic en la final de París.",
        },
        {
          id: 15,
          question: "Ordena estos momentos de la historia de Valorant.",
          answers: [
            { id: "a", text: "El primer Masters, en Reikiavik" },
            { id: "b", text: "El torneo LOCK//IN en São Paulo" },
            { id: "c", text: "El lanzamiento de Valorant Mobile en China" },
            { id: "d", text: "El Masters de Londres" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mayo de 2021, principios de 2023, agosto de 2025 y luego junio de 2026. El LOCK//IN abrió la temporada 2023 con todos los equipos socios, y Fnatic lo ganó contra LOUD.",
        },
        {
          id: 16,
          question: "Ordena estos centinelas según su llegada al juego.",
          answers: [
            { id: "a", text: "Killjoy" },
            { id: "b", text: "Chamber" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Veto" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Killjoy en 2020, Chamber en 2021, Deadlock en 2023 y luego Veto, el más reciente de los cuatro, que llegó después de Waylay. Veto es de Senegal y anula las habilidades de los enemigos.",
        },
        {
          id: 17,
          question: "Ordena estos controladores según su llegada al juego.",
          answers: [
            { id: "a", text: "Brimstone" },
            { id: "b", text: "Astra" },
            { id: "c", text: "Harbor" },
            { id: "d", text: "Miks" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Brimstone está desde el lanzamiento en 2020, Astra llegó en 2021, Harbor en 2022, y Miks, el controlador croata, es el más reciente de los cuatro.",
        },
        {
          id: 18,
          question: "Ordena estos iniciadores según su llegada al juego.",
          answers: [
            { id: "a", text: "Sova" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Fade" },
            { id: "d", text: "Tejo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sova está desde el lanzamiento en junio de 2020, Skye llegó en octubre de 2020, Fade en abril de 2022 y Tejo en enero de 2025.",
        },
        {
          id: 19,
          question: "Ordena estos duelistas según su llegada al juego.",
          answers: [
            { id: "a", text: "Reyna" },
            { id: "b", text: "Neon" },
            { id: "c", text: "Iso" },
            { id: "d", text: "Waylay" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Reyna está desde el lanzamiento en 2020, Neon llegó en enero de 2022, Iso en octubre de 2023 y Waylay en marzo de 2025.",
        },
        {
          id: 20,
          question: "Ordena estas ciudades según cuándo acogieron un Masters.",
          answers: [
            { id: "a", text: "Berlín" },
            { id: "b", text: "Copenhague" },
            { id: "c", text: "Madrid" },
            { id: "d", text: "Bangkok" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Berlín en 2021, Copenhague en 2022, Madrid en 2024 y luego Bangkok en 2025. Berlín también acogió los primeros Champions, a finales de 2021.",
        },
      ],
    },
  },
};

export default [quizValorantChronologie] as TranslatedQuiz[];
