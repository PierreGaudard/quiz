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
        "Dix listes à remettre dans l'ordre sur L'Attaque des Titans : événements, Titans, commandants et dates de sortie.",
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
      ],
    },
    en: {
      title: "Attack on Titan in order",
      description:
        "Ten lists to put in the right order about Attack on Titan: key events, Titans, commanders and release dates.",
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
      ],
    },
    es: {
      title: "Ataque a los Titanes en orden",
      description:
        "Diez listas para poner en orden sobre Ataque a los Titanes: sucesos, Titanes, comandantes y fechas de estreno.",
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
      ],
    },
  },
};

export default [quizAttaqueDesTitans] as TranslatedQuiz[];
