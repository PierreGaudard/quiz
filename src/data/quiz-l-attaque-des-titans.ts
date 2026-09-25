import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode ordre sur L'Attaque des Titans : dates de sortie, événements
 * du récit, tailles des Titans, successions de commandants et de porteurs.
 *
 * Le moteur mélange lui-même les propositions (cf. quiz-star-wars.ts), seul
 * `correctOrder` compte. Chaque question dit dans quel sens trier, parce que
 * la moitié se classe dans le temps et l'autre moitié par taille ou par lieu.
 */
export const quizAttaqueDesTitans: TranslatedQuiz = {
  slug: "quiz-l-attaque-des-titans",
  slugs: { en: "attack-on-titan-quiz", fr: "quiz-l-attaque-des-titans", es: "quiz-ataque-a-los-titanes" },
  categorySlug: "anime",
  subcategory: "L'Attaque des Titans",
  difficulty: "medium",
  coverImage: "/images/sub-l-attaque-des-titans.webp",
  gameType: "ordre",
  playCount: 6400,
  translations: {
    fr: {
      title: "L'Attaque des Titans dans l'ordre",
      description:
        "Vingt listes à remettre dans l'ordre sur L'Attaque des Titans : événements, Titans, commandants et dates de sortie.",
      questions: [
        {
          id: 1,
          image: "/images/q-l-attaque-des-titans-01.webp",
          question: "Remets ces saisons de l'anime dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Saison 1 (2013)" },
            { id: "b", text: "Saison 2 (2017)" },
            { id: "c", text: "Saison 3 (2018)" },
            { id: "d", text: "Saison finale (2020)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La saison 1 sort en 2013, la 2 en 2017, la 3 en 2018 et la saison finale démarre en décembre 2020. Les trois premières sont animées par Wit Studio, la dernière par MAPPA.",
        },
        {
          id: 2,
          question: "Remets ces événements dans l'ordre du récit.",
          answers: [
            { id: "a", text: "La chute de Shiganshina" },
            { id: "b", text: "La bataille de Trost" },
            { id: "c", text: "La 57e expédition et le Titan Féminin" },
            { id: "d", text: "La reconquête du Mur Maria" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Shiganshina tombe en 845. Cinq ans plus tard, en 850, Trost est attaquée, puis le Bataillon d'exploration croise le Titan Féminin pendant la 57e expédition. La reconquête du Mur Maria arrive ensuite, à la fin de la saison 3.",
        },
        {
          id: 3,
          image: "/images/q-l-attaque-des-titans-03.webp",
          question: "Classe ces Titans du plus grand au plus petit.",
          answers: [
            { id: "a", text: "Le Titan Colossal" },
            { id: "b", text: "Le Titan Bestial" },
            { id: "c", text: "Le Titan Féminin" },
            { id: "d", text: "Le Titan Mâchoire" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Colossal fait 60 mètres, le Bestial 17, le Féminin 14 et le Mâchoire seulement 5. Le Mâchoire est petit, mais c'est l'un des plus rapides.",
        },
        {
          id: 4,
          image: "/images/q-l-attaque-des-titans-04.webp",
          question: "Remets ces commandants du Bataillon d'exploration dans l'ordre où ils se succèdent.",
          answers: [
            { id: "a", text: "Keith Shadis" },
            { id: "b", text: "Erwin Smith" },
            { id: "c", text: "Hansi Zoe" },
            { id: "d", text: "Armin Arlert" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Keith Shadis est le 12e commandant, Erwin le 13e, Hansi la 14e et Armin le 15e et dernier. Shadis est le seul à avoir quitté son poste de son vivant.",
        },
        {
          id: 5,
          question: "Remets ces morts dans l'ordre où elles arrivent dans l'histoire.",
          answers: [
            { id: "a", text: "Marco Bott" },
            { id: "b", text: "Erwin Smith" },
            { id: "c", text: "Sasha" },
            { id: "d", text: "Hansi Zoe" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Marco meurt juste après la bataille de Trost. Erwin tombe pendant la reconquête du Mur Maria, Sasha est abattue par Gabi dans la saison finale, et Hansi se sacrifie pendant le Grand Terrassement.",
        },
        {
          id: 6,
          image: "/images/q-l-attaque-des-titans-06.webp",
          question: "Dans quel ordre découvre-t-on que ces personnages peuvent se changer en Titan ?",
          answers: [
            { id: "a", text: "Eren" },
            { id: "b", text: "Annie" },
            { id: "c", text: "Ymir" },
            { id: "d", text: "Reiner" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eren se transforme pour la première fois à Trost, et Annie est démasquée à la fin de la saison 1. Dans la saison 2, Ymir se transforme deux épisodes avant que Reiner avoue être le Titan Cuirassé.",
        },
        {
          id: 7,
          question: "Remets ces porteurs du Titan Originel dans l'ordre.",
          answers: [
            { id: "a", text: "Uri Reiss" },
            { id: "b", text: "Frieda Reiss" },
            { id: "c", text: "Grisha Jäger" },
            { id: "d", text: "Eren Jäger" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Frieda reçoit le pouvoir de son oncle Uri. En 845, Grisha le lui prend en la dévorant, puis il le transmet à son fils Eren.",
        },
        {
          id: 8,
          image: "/images/q-l-attaque-des-titans-08.webp",
          question: "Classe ces lieux du plus extérieur au plus central.",
          answers: [
            { id: "a", text: "Shiganshina" },
            { id: "b", text: "Trost" },
            { id: "c", text: "Stohess" },
            { id: "d", text: "Mitras" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Shiganshina est un district du Mur Maria, le mur extérieur. Trost dépend du Mur Rose, Stohess du Mur Sina, et Mitras, la capitale, se trouve au centre, à l'intérieur du Mur Sina.",
        },
        {
          id: 9,
          image: "/images/q-l-attaque-des-titans-09.webp",
          question: "Remets ces moments de la fin de la série dans l'ordre.",
          answers: [
            { id: "a", text: "L'attaque de Liberio" },
            { id: "b", text: "L'assaut de Mahr sur Shiganshina" },
            { id: "c", text: "Le début du Grand Terrassement" },
            { id: "d", text: "Le combat final contre Eren" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eren attaque d'abord Liberio, en plein territoire de Mahr. L'armée de Mahr riposte à Shiganshina, et c'est là qu'Eren lance le Grand Terrassement. Le combat final, devant la forteresse de Slatoa, sert à l'arrêter.",
        },
        {
          id: 10,
          question: "Remets ces dates dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "Début du manga" },
            { id: "b", text: "Première diffusion de l'anime" },
            { id: "c", text: "Fin du manga" },
            { id: "d", text: "Dernier épisode de l'anime" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le manga d'Hajime Isayama démarre en 2009, l'anime arrive en 2013, le manga se termine en 2021 et le dernier épisode de l'anime sort en novembre 2023.",
        },
        {
          id: 11,
          question: "Remets ces génériques d'ouverture dans l'ordre de leur saison.",
          answers: [
            { id: "a", text: "Guren no Yumiya" },
            { id: "b", text: "Shinzou wo Sasageyo!" },
            { id: "c", text: "Red Swan" },
            { id: "d", text: "Boku no Sensou" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Guren no Yumiya ouvre la saison 1, Shinzou wo Sasageyo! la saison 2 et Red Swan la première partie de la saison 3. Boku no Sensou, du groupe Shinsei Kamattechan, ouvre la saison finale.",
        },
        {
          id: 12,
          question: "Remets ces grands moments de l'histoire du monde dans l'ordre.",
          answers: [
            { id: "a", text: "Ymir Fritz reçoit le pouvoir des Titans" },
            { id: "b", text: "La Grande Guerre des Titans" },
            { id: "c", text: "La construction des trois Murs" },
            { id: "d", text: "La chute de Shiganshina" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ymir reçoit son pouvoir il y a environ 2 000 ans. La Grande Guerre des Titans oppose bien plus tard Eldia et Marley, puis les Murs sont bâtis sur Paradis, une centaine d'années avant la chute de Shiganshina en 845.",
        },
        {
          id: 13,
          question: "Remets ces moments de la vie de Grisha Jäger dans l'ordre.",
          answers: [
            { id: "a", text: "La naissance de Zeke" },
            { id: "b", text: "Grisha reçoit le Titan Assaillant" },
            { id: "c", text: "La naissance d'Eren" },
            { id: "d", text: "Grisha disparaît pendant la chute de Shiganshina" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zeke naît à Marley. Quand Grisha est dénoncé et exilé sur Paradis, Eren Kruger lui transmet le Titan Assaillant. Il épouse ensuite Carla, Eren naît, et Grisha disparaît en 845.",
        },
        {
          id: 14,
          question: "Remets ces événements de la saison 3 dans l'ordre.",
          answers: [
            { id: "a", text: "Eren et Historia sont enlevés" },
            { id: "b", text: "Historia refuse de devenir un Titan" },
            { id: "c", text: "Rod Reiss se change en Titan géant" },
            { id: "d", text: "Historia est couronnée reine" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eren et Historia sont enlevés et emmenés dans la grotte des Reiss. Historia refuse de dévorer Eren, Rod Reiss se change alors lui-même en Titan géant, et après sa mort Historia devient reine.",
        },
        {
          id: 15,
          question: "Remets ces événements de la saison 2 dans l'ordre.",
          answers: [
            { id: "a", text: "Des Titans apparaissent à l'intérieur du Mur Rose" },
            { id: "b", text: "Le siège du château d'Utgard" },
            { id: "c", text: "Reiner et Bertholdt enlèvent Eren" },
            { id: "d", text: "Eren fait attaquer un Titan par d'autres Titans" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Des Titans surgissent dans le Mur Rose, et une partie de la 104e brigade se retrouve assiégée au château d'Utgard. Reiner et Bertholdt enlèvent ensuite Eren, et pendant son sauvetage, il envoie des Titans sur celui qui a dévoré sa mère.",
        },
        {
          id: 16,
          question: "Remets ces parties de la fin de l'anime dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Saison finale, partie 1" },
            { id: "b", text: "Saison finale, partie 2" },
            { id: "c", text: "Chapitres finaux, partie 1" },
            { id: "d", text: "Le film The Last Attack" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La partie 1 démarre en décembre 2020 et la partie 2 en janvier 2022. Les Chapitres finaux sortent en deux épisodes spéciaux en 2023, et le film The Last Attack, qui les reprend, arrive au cinéma en novembre 2024.",
        },
        {
          id: 17,
          question: "Classe ces recrues de la 104e brigade selon leur rang de sortie, du premier au dernier.",
          answers: [
            { id: "a", text: "Mikasa" },
            { id: "b", text: "Reiner" },
            { id: "c", text: "Eren" },
            { id: "d", text: "Jean" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mikasa sort première, devant Reiner. Bertholdt et Annie prennent les places 3 et 4, Eren finit cinquième et Jean sixième.",
        },
        {
          id: 18,
          question: "Remets ces étapes de la bataille de Trost dans l'ordre.",
          answers: [
            { id: "a", text: "Le Titan Colossal détruit la porte de Trost" },
            { id: "b", text: "Eren se fait avaler en sauvant Armin" },
            { id: "c", text: "Un Titan inconnu se met à tuer les autres Titans" },
            { id: "d", text: "Eren bouche la brèche avec un rocher" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Colossal ouvre la porte, et Eren est avalé en sauvant Armin. Un Titan se met ensuite à abattre les autres Titans, et on découvre que c'est Eren. Sous cette forme, il finit par boucher le trou avec un énorme rocher.",
        },
        {
          id: 19,
          question: "Remets ces étapes de la reconquête du Mur Maria dans l'ordre.",
          answers: [
            { id: "a", text: "Le Bataillon quitte Trost de nuit" },
            { id: "b", text: "La charge d'Erwin face au Titan Bestial" },
            { id: "c", text: "La découverte de la cave de Grisha" },
            { id: "d", text: "Le Bataillon voit la mer pour la première fois" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Bataillon part de nuit pour ne pas croiser de Titans. Erwin mène sa charge à Shiganshina pour laisser Livaï atteindre le Titan Bestial. Après la bataille, on ouvre enfin la cave de Grisha, et quelque temps plus tard le Bataillon arrive devant la mer.",
        },
        {
          id: 20,
          question: "Remets ces étapes de la vie de Livaï dans l'ordre.",
          answers: [
            { id: "a", text: "Il grandit avec Kenny dans la ville souterraine" },
            { id: "b", text: "Il entre au Bataillon d'exploration" },
            { id: "c", text: "Il prend la tête de l'escouade spéciale chargée d'Eren" },
            { id: "d", text: "Il affronte Zeke dans la forêt aux arbres géants" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Livaï grandit sous terre avec Kenny, puis Erwin le fait entrer au Bataillon d'exploration. En 850, il dirige l'escouade qui surveille Eren, et c'est dans la saison finale qu'il garde Zeke dans la forêt aux arbres géants, où Zeke se retourne contre lui.",
        },
      ],
    },
    en: {
      title: "Attack on Titan in order",
      description:
        "Twenty lists to put in the right order about Attack on Titan: key events, Titans, commanders and release dates.",
      questions: [
        {
          id: 1,
          image: "/images/q-l-attaque-des-titans-01.webp",
          question: "Put these seasons of the anime in release order.",
          answers: [
            { id: "a", text: "Season 1 (2013)" },
            { id: "b", text: "Season 2 (2017)" },
            { id: "c", text: "Season 3 (2018)" },
            { id: "d", text: "The Final Season (2020)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Season 1 came out in 2013, season 2 in 2017, season 3 in 2018, and The Final Season started in December 2020. Wit Studio made the first three, MAPPA made the last one.",
        },
        {
          id: 2,
          question: "Put these events in story order.",
          answers: [
            { id: "a", text: "The fall of Shiganshina" },
            { id: "b", text: "The Battle of Trost" },
            { id: "c", text: "The 57th expedition and the Female Titan" },
            { id: "d", text: "The Return to Shiganshina" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Shiganshina falls in 845. Five years later, in 850, Trost is attacked, then the Survey Corps runs into the Female Titan on the 57th expedition. The Return to Shiganshina, to retake Wall Maria, comes at the end of season 3.",
        },
        {
          id: 3,
          image: "/images/q-l-attaque-des-titans-03.webp",
          question: "Rank these Titans from tallest to shortest.",
          answers: [
            { id: "a", text: "The Colossal Titan" },
            { id: "b", text: "The Beast Titan" },
            { id: "c", text: "The Female Titan" },
            { id: "d", text: "The Jaw Titan" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Colossal is 60 meters tall, the Beast 17, the Female 14 and the Jaw only 5. The Jaw is small, but it's one of the fastest.",
        },
        {
          id: 4,
          image: "/images/q-l-attaque-des-titans-04.webp",
          question: "Put these Survey Corps commanders in the order they held the post.",
          answers: [
            { id: "a", text: "Keith Shadis" },
            { id: "b", text: "Erwin Smith" },
            { id: "c", text: "Hange Zoë" },
            { id: "d", text: "Armin Arlert" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Keith Shadis is the 12th commander, Erwin the 13th, Hange the 14th and Armin the 15th and last. Shadis is the only one who stepped down while still alive.",
        },
        {
          id: 5,
          question: "Put these deaths in the order they happen in the story.",
          answers: [
            { id: "a", text: "Marco Bott" },
            { id: "b", text: "Erwin Smith" },
            { id: "c", text: "Sasha Blouse" },
            { id: "d", text: "Hange Zoë" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Marco dies right after the Battle of Trost. Erwin falls during the Return to Shiganshina, Sasha is shot by Gabi in The Final Season, and Hange gives their life during the Rumbling.",
        },
        {
          id: 6,
          image: "/images/q-l-attaque-des-titans-06.webp",
          question: "In what order do we learn that these characters can turn into Titans?",
          answers: [
            { id: "a", text: "Eren" },
            { id: "b", text: "Annie" },
            { id: "c", text: "Ymir" },
            { id: "d", text: "Reiner" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eren first transforms in Trost, and Annie is unmasked at the end of season 1. In season 2, Ymir transforms two episodes before Reiner admits he's the Armored Titan.",
        },
        {
          id: 7,
          question: "Put these holders of the Founding Titan in order.",
          answers: [
            { id: "a", text: "Uri Reiss" },
            { id: "b", text: "Frieda Reiss" },
            { id: "c", text: "Grisha Yeager" },
            { id: "d", text: "Eren Yeager" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Frieda inherits the power from her uncle Uri. In 845, Grisha takes it from her by eating her, then passes it on to his son Eren.",
        },
        {
          id: 8,
          image: "/images/q-l-attaque-des-titans-08.webp",
          question: "Rank these places from the outermost to the most central.",
          answers: [
            { id: "a", text: "Shiganshina" },
            { id: "b", text: "Trost" },
            { id: "c", text: "Stohess" },
            { id: "d", text: "Mitras" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Shiganshina is a district on Wall Maria, the outer wall. Trost belongs to Wall Rose, Stohess to Wall Sina, and Mitras, the capital, sits right in the middle, inside Wall Sina.",
        },
        {
          id: 9,
          image: "/images/q-l-attaque-des-titans-09.webp",
          question: "Put these moments from the end of the series in order.",
          answers: [
            { id: "a", text: "The raid on Liberio" },
            { id: "b", text: "Marley's attack on Shiganshina" },
            { id: "c", text: "The start of the Rumbling" },
            { id: "d", text: "The Battle of Heaven and Earth" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eren first attacks Liberio, deep in Marley. Marley's army strikes back at Shiganshina, and that's where Eren starts the Rumbling. The Battle of Heaven and Earth is the last fight to stop him.",
        },
        {
          id: 10,
          question: "Put these dates in chronological order.",
          answers: [
            { id: "a", text: "The manga starts" },
            { id: "b", text: "The anime first airs" },
            { id: "c", text: "The manga ends" },
            { id: "d", text: "The last anime episode airs" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Hajime Isayama's manga starts in 2009, the anime arrives in 2013, the manga ends in 2021 and the final anime episode comes out in November 2023.",
        },
        {
          id: 11,
          question: "Put these opening songs in order of their season.",
          answers: [
            { id: "a", text: "Guren no Yumiya" },
            { id: "b", text: "Shinzou wo Sasageyo!" },
            { id: "c", text: "Red Swan" },
            { id: "d", text: "My War" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Guren no Yumiya opens season 1, Shinzou wo Sasageyo! opens season 2, and Red Swan opens the first part of season 3. My War, by the band Shinsei Kamattechan, opens The Final Season.",
        },
        {
          id: 12,
          question: "Put these big moments in the history of the world in order.",
          answers: [
            { id: "a", text: "Ymir Fritz gets the power of the Titans" },
            { id: "b", text: "The Great Titan War" },
            { id: "c", text: "The three Walls are built" },
            { id: "d", text: "The fall of Shiganshina" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ymir gets her power about 2,000 years ago. The Great Titan War between Eldia and Marley comes much later, then the Walls are built on Paradis, around a hundred years before Shiganshina falls in 845.",
        },
        {
          id: 13,
          question: "Put these moments in Grisha Yeager's life in order.",
          answers: [
            { id: "a", text: "Zeke is born" },
            { id: "b", text: "Grisha gets the Attack Titan" },
            { id: "c", text: "Eren is born" },
            { id: "d", text: "Grisha disappears during the fall of Shiganshina" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zeke is born in Marley. When Grisha is turned in and exiled to Paradis, Eren Kruger passes the Attack Titan on to him. He then marries Carla, Eren is born, and Grisha disappears in 845.",
        },
        {
          id: 14,
          question: "Put these season 3 events in order.",
          answers: [
            { id: "a", text: "Eren and Historia are kidnapped" },
            { id: "b", text: "Historia refuses to become a Titan" },
            { id: "c", text: "Rod Reiss turns into a giant Titan" },
            { id: "d", text: "Historia is crowned queen" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eren and Historia are kidnapped and taken to the Reiss family's cavern. Historia refuses to eat Eren, so Rod Reiss turns himself into a giant Titan, and after he dies Historia becomes queen.",
        },
        {
          id: 15,
          question: "Put these season 2 events in order.",
          answers: [
            { id: "a", text: "Titans show up inside Wall Rose" },
            { id: "b", text: "The siege of Utgard Castle" },
            { id: "c", text: "Reiner and Bertholdt kidnap Eren" },
            { id: "d", text: "Eren makes other Titans attack a Titan" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Titans appear inside Wall Rose, and part of the 104th ends up trapped at Utgard Castle. Reiner and Bertholdt then kidnap Eren, and during his rescue he sends Titans after the one that ate his mother.",
        },
        {
          id: 16,
          question: "Put these parts of the anime's ending in release order.",
          answers: [
            { id: "a", text: "The Final Season Part 1" },
            { id: "b", text: "The Final Season Part 2" },
            { id: "c", text: "The Final Chapters Special 1" },
            { id: "d", text: "The Last Attack movie" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Part 1 starts in December 2020 and Part 2 in January 2022. The Final Chapters come out as two specials in 2023, and The Last Attack, a movie built from those two specials, hits theaters in November 2024.",
        },
        {
          id: 17,
          question: "Rank these 104th cadets by their graduation rank, from first to last.",
          answers: [
            { id: "a", text: "Mikasa" },
            { id: "b", text: "Reiner" },
            { id: "c", text: "Eren" },
            { id: "d", text: "Jean" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mikasa graduates first, ahead of Reiner. Bertholdt and Annie take 3rd and 4th, Eren comes 5th and Jean 6th.",
        },
        {
          id: 18,
          question: "Put these moments of the Battle of Trost in order.",
          answers: [
            { id: "a", text: "The Colossal Titan breaks the Trost gate" },
            { id: "b", text: "Eren gets swallowed saving Armin" },
            { id: "c", text: "A mystery Titan starts killing other Titans" },
            { id: "d", text: "Eren plugs the hole with a boulder" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Colossal breaks open the gate, and Eren gets swallowed saving Armin. A Titan then starts taking down the other Titans, and it turns out to be Eren. In that form he ends up sealing the hole with a huge boulder.",
        },
        {
          id: 19,
          question: "Put these steps of the retaking of Wall Maria in order.",
          answers: [
            { id: "a", text: "The Survey Corps leaves Trost at night" },
            { id: "b", text: "Erwin's charge against the Beast Titan" },
            { id: "c", text: "Grisha's basement is opened" },
            { id: "d", text: "The Survey Corps sees the ocean for the first time" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Survey Corps leaves at night to avoid Titans. Erwin leads his charge in Shiganshina so Levi can reach the Beast Titan. After the battle they finally open Grisha's basement, and some time later the Survey Corps reaches the ocean.",
        },
        {
          id: 20,
          question: "Put these steps of Levi's life in order.",
          answers: [
            { id: "a", text: "He grows up with Kenny in the Underground" },
            { id: "b", text: "He joins the Survey Corps" },
            { id: "c", text: "He leads the special squad guarding Eren" },
            { id: "d", text: "He faces Zeke in the forest of giant trees" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Levi grows up underground with Kenny, then Erwin brings him into the Survey Corps. In 850 he leads the squad keeping watch on Eren, and in The Final Season he guards Zeke in the forest of giant trees, where Zeke turns on him.",
        },
      ],
    },
    es: {
      title: "Ataque a los Titanes en orden",
      description:
        "Veinte listas para poner en orden sobre Ataque a los Titanes: sucesos, Titanes, comandantes y fechas de estreno.",
      questions: [
        {
          id: 1,
          image: "/images/q-l-attaque-des-titans-01.webp",
          question: "Ordena estas temporadas del anime por fecha de estreno.",
          answers: [
            { id: "a", text: "Temporada 1 (2013)" },
            { id: "b", text: "Temporada 2 (2017)" },
            { id: "c", text: "Temporada 3 (2018)" },
            { id: "d", text: "Temporada final (2020)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La temporada 1 se estrena en 2013, la 2 en 2017, la 3 en 2018 y la temporada final empieza en diciembre de 2020. Las tres primeras son de Wit Studio y la última de MAPPA.",
        },
        {
          id: 2,
          question: "Ordena estos sucesos según la historia.",
          answers: [
            { id: "a", text: "La caída de Shiganshina" },
            { id: "b", text: "La batalla de Trost" },
            { id: "c", text: "La 57.ª expedición y la Titán Hembra" },
            { id: "d", text: "La reconquista de la Muralla María" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Shiganshina cae en el año 845. Cinco años después, en 850, atacan Trost, y luego la Legión de Reconocimiento se cruza con la Titán Hembra en la 57.ª expedición. La reconquista de la Muralla María llega al final de la temporada 3.",
        },
        {
          id: 3,
          image: "/images/q-l-attaque-des-titans-03.webp",
          question: "Ordena estos Titanes del más alto al más bajo.",
          answers: [
            { id: "a", text: "El Titán Colosal" },
            { id: "b", text: "El Titán Bestia" },
            { id: "c", text: "La Titán Hembra" },
            { id: "d", text: "El Titán Mandíbula" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Colosal mide 60 metros, el Bestia 17, la Hembra 14 y el Mandíbula solo 5. El Mandíbula es pequeño, pero es de los más rápidos.",
        },
        {
          id: 4,
          image: "/images/q-l-attaque-des-titans-04.webp",
          question: "Ordena a estos comandantes de la Legión de Reconocimiento según se van sucediendo.",
          answers: [
            { id: "a", text: "Keith Shadis" },
            { id: "b", text: "Erwin Smith" },
            { id: "c", text: "Hange Zoë" },
            { id: "d", text: "Armin Arlert" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Keith Shadis es el 12.º comandante, Erwin el 13.º, Hange el 14.º y Armin el 15.º y último. Shadis es el único que dejó el puesto estando vivo.",
        },
        {
          id: 5,
          question: "Ordena estas muertes según pasan en la historia.",
          answers: [
            { id: "a", text: "Marco Bott" },
            { id: "b", text: "Erwin Smith" },
            { id: "c", text: "Sasha Blouse" },
            { id: "d", text: "Hange Zoë" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Marco muere justo después de la batalla de Trost. Erwin cae en la reconquista de la Muralla María, Gabi mata a Sasha de un disparo en la temporada final, y Hange se sacrifica durante el Retumbar.",
        },
        {
          id: 6,
          image: "/images/q-l-attaque-des-titans-06.webp",
          question: "¿En qué orden descubrimos que estos personajes pueden convertirse en Titán?",
          answers: [
            { id: "a", text: "Eren" },
            { id: "b", text: "Annie" },
            { id: "c", text: "Ymir" },
            { id: "d", text: "Reiner" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eren se transforma por primera vez en Trost, y a Annie la desenmascaran al final de la temporada 1. En la temporada 2, Ymir se transforma dos episodios antes de que Reiner confiese que es el Titán Acorazado.",
        },
        {
          id: 7,
          question: "Ordena a estos portadores del Titán Fundador.",
          answers: [
            { id: "a", text: "Uri Reiss" },
            { id: "b", text: "Frieda Reiss" },
            { id: "c", text: "Grisha Jaeger" },
            { id: "d", text: "Eren Jaeger" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Frieda recibe el poder de su tío Uri. En el año 845, Grisha se lo quita devorándola y luego se lo pasa a su hijo Eren.",
        },
        {
          id: 8,
          image: "/images/q-l-attaque-des-titans-08.webp",
          question: "Ordena estos lugares del más exterior al más céntrico.",
          answers: [
            { id: "a", text: "Shiganshina" },
            { id: "b", text: "Trost" },
            { id: "c", text: "Stohess" },
            { id: "d", text: "Mitras" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Shiganshina es un distrito de la Muralla María, la exterior. Trost está en la Muralla Rose, Stohess en la Muralla Sina, y Mitras, la capital, queda en el centro, dentro de la Muralla Sina.",
        },
        {
          id: 9,
          image: "/images/q-l-attaque-des-titans-09.webp",
          question: "Ordena estos momentos del final de la serie.",
          answers: [
            { id: "a", text: "El ataque a Liberio" },
            { id: "b", text: "El asalto de Marley a Shiganshina" },
            { id: "c", text: "El comienzo del Retumbar" },
            { id: "d", text: "La batalla del Cielo y la Tierra" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eren ataca primero Liberio, en pleno territorio de Marley. El ejército de Marley responde atacando Shiganshina, y ahí Eren desata el Retumbar. La batalla del Cielo y la Tierra es el último combate para detenerlo.",
        },
        {
          id: 10,
          question: "Ordena estas fechas de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Empieza el manga" },
            { id: "b", text: "Se estrena el anime" },
            { id: "c", text: "Termina el manga" },
            { id: "d", text: "Sale el último episodio del anime" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El manga de Hajime Isayama empieza en 2009, el anime llega en 2013, el manga termina en 2021 y el último episodio del anime sale en noviembre de 2023.",
        },
        {
          id: 11,
          question: "Pon estos openings en el orden de su temporada.",
          answers: [
            { id: "a", text: "Guren no Yumiya" },
            { id: "b", text: "Shinzou wo Sasageyo!" },
            { id: "c", text: "Red Swan" },
            { id: "d", text: "Boku no Sensou" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Guren no Yumiya abre la temporada 1, Shinzou wo Sasageyo! la temporada 2 y Red Swan la primera parte de la temporada 3. Boku no Sensou, del grupo Shinsei Kamattechan, abre la temporada final.",
        },
        {
          id: 12,
          question: "Pon en orden estos grandes momentos de la historia del mundo.",
          answers: [
            { id: "a", text: "Ymir Fritz recibe el poder de los Titanes" },
            { id: "b", text: "La Gran Guerra de los Titanes" },
            { id: "c", text: "La construcción de las tres Murallas" },
            { id: "d", text: "La caída de Shiganshina" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ymir recibe su poder hace unos 2.000 años. La Gran Guerra de los Titanes enfrenta mucho después a Eldia y Marley, y luego se levantan las Murallas en Paradis, unos cien años antes de la caída de Shiganshina en el 845.",
        },
        {
          id: 13,
          question: "Pon en orden estos momentos de la vida de Grisha Jaeger.",
          answers: [
            { id: "a", text: "Nace Zeke" },
            { id: "b", text: "Grisha recibe el Titán de Ataque" },
            { id: "c", text: "Nace Eren" },
            { id: "d", text: "Grisha desaparece durante la caída de Shiganshina" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Zeke nace en Marley. Cuando denuncian a Grisha y lo destierran a Paradis, Eren Kruger le pasa el Titán de Ataque. Después se casa con Carla, nace Eren, y Grisha desaparece en el 845.",
        },
        {
          id: 14,
          question: "Pon en orden estos sucesos de la temporada 3.",
          answers: [
            { id: "a", text: "Secuestran a Eren y a Historia" },
            { id: "b", text: "Historia se niega a convertirse en Titán" },
            { id: "c", text: "Rod Reiss se transforma en un Titán gigante" },
            { id: "d", text: "Coronan reina a Historia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Secuestran a Eren y a Historia y se los llevan a la cueva de los Reiss. Historia se niega a devorar a Eren, así que Rod Reiss se transforma él mismo en un Titán gigante, y cuando muere Historia pasa a ser reina.",
        },
        {
          id: 15,
          question: "Pon en orden estos sucesos de la temporada 2.",
          answers: [
            { id: "a", text: "Aparecen Titanes dentro de la Muralla Rose" },
            { id: "b", text: "El asedio del castillo de Utgard" },
            { id: "c", text: "Reiner y Bertholdt secuestran a Eren" },
            { id: "d", text: "Eren hace que otros Titanes ataquen a un Titán" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Aparecen Titanes dentro de la Muralla Rose, y parte de la Tropa 104 queda atrapada en el castillo de Utgard. Luego Reiner y Bertholdt secuestran a Eren, y durante su rescate él lanza a varios Titanes contra el que devoró a su madre.",
        },
        {
          id: 16,
          question: "Pon estas partes del final del anime en su orden de estreno.",
          answers: [
            { id: "a", text: "Temporada final, parte 1" },
            { id: "b", text: "Temporada final, parte 2" },
            { id: "c", text: "Capítulos finales, parte 1" },
            { id: "d", text: "La película The Last Attack" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La parte 1 empieza en diciembre de 2020 y la parte 2 en enero de 2022. Los Capítulos finales salen en dos especiales en 2023, y la película The Last Attack, que junta esos dos especiales, llega a los cines en noviembre de 2024.",
        },
        {
          id: 17,
          question: "Ordena a estos reclutas de la Tropa 104 según su puesto al graduarse, del primero al último.",
          answers: [
            { id: "a", text: "Mikasa" },
            { id: "b", text: "Reiner" },
            { id: "c", text: "Eren" },
            { id: "d", text: "Jean" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mikasa se gradúa la primera, por delante de Reiner. Bertholdt y Annie ocupan los puestos 3 y 4, Eren queda quinto y Jean sexto.",
        },
        {
          id: 18,
          question: "Pon en orden estos momentos de la batalla de Trost.",
          answers: [
            { id: "a", text: "El Titán Colosal rompe la puerta de Trost" },
            { id: "b", text: "Eren es tragado al salvar a Armin" },
            { id: "c", text: "Un Titán desconocido empieza a matar a otros Titanes" },
            { id: "d", text: "Eren tapa el agujero con una roca" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Colosal abre la puerta, y Eren es tragado al salvar a Armin. Luego un Titán empieza a acabar con los demás Titanes, y resulta ser Eren. En esa forma termina tapando el agujero con una roca enorme.",
        },
        {
          id: 19,
          question: "Pon en orden estas etapas de la reconquista de la Muralla María.",
          answers: [
            { id: "a", text: "La Legión sale de Trost de noche" },
            { id: "b", text: "La carga de Erwin contra el Titán Bestia" },
            { id: "c", text: "Se abre el sótano de Grisha" },
            { id: "d", text: "La Legión ve el mar por primera vez" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Legión sale de noche para no cruzarse con Titanes. Erwin lanza su carga en Shiganshina para que Levi pueda llegar hasta el Titán Bestia. Después de la batalla por fin abren el sótano de Grisha, y un tiempo más tarde la Legión llega al mar.",
        },
        {
          id: 20,
          question: "Pon en orden estas etapas de la vida de Levi.",
          answers: [
            { id: "a", text: "Crece con Kenny en la Ciudad Subterránea" },
            { id: "b", text: "Entra en la Legión de Reconocimiento" },
            { id: "c", text: "Dirige el escuadrón especial que vigila a Eren" },
            { id: "d", text: "Se enfrenta a Zeke en el bosque de árboles gigantes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Levi crece bajo tierra con Kenny, y luego Erwin lo mete en la Legión de Reconocimiento. En el 850 dirige el escuadrón que vigila a Eren, y en la temporada final custodia a Zeke en el bosque de árboles gigantes, donde Zeke se vuelve contra él.",
        },
      ],
    },
  },
};

export default [quizAttaqueDesTitans] as TranslatedQuiz[];
