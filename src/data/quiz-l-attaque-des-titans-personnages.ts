import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode duel sur les personnages de L'Attaque des Titans.
 *
 * DuelPlayer n'affiche que answers[0] et answers[1] : chaque question a donc
 * exactement deux propositions. On teste qui est qui (familles, surnoms,
 * rôles), pas l'ordre des morts ni l'ordre des révélations, déjà dans le
 * quiz en mode ordre.
 */
export const quizAttaqueDesTitansPersonnages: TranslatedQuiz = {
  slug: "quiz-l-attaque-des-titans-personnages",
  slugs: {
    en: "attack-on-titan-characters-quiz",
    fr: "quiz-l-attaque-des-titans-personnages",
    es: "quiz-ataque-a-los-titanes-personajes",
  },
  categorySlug: "anime",
  subcategory: "L'Attaque des Titans",
  difficulty: "easy",
  coverImage: "/images/cover-l-attaque-des-titans-personnages.webp",
  gameType: "duel",
  playCount: 6200,
  translations: {
    fr: {
      title: "Duel L'Attaque des Titans : les personnages",
      description:
        "Dix duels sur les personnages de L'Attaque des Titans, d'Eren à Livaï. Deux noms à chaque fois, un seul est le bon.",
      questions: [
        {
          id: 1,
          image: "/images/q-l-attaque-des-titans-personnages-01.webp",
          question: "Lequel des deux appartient au clan Ackerman ?",
          answers: [
            { id: "a", text: "Erwin Smith" },
            { id: "b", text: "Livaï" },
          ],
          correctAnswer: "b",
          explanation:
            "Livaï. Comme Mikasa et Kenny, il est un Ackerman, ce qui explique sa force hors du commun. Erwin, le commandant, n'a rien de ça.",
        },
        {
          id: 2,
          question: "Qui a donné son écharpe rouge à Mikasa ?",
          answers: [
            { id: "a", text: "Eren" },
            { id: "b", text: "Armin" },
          ],
          correctAnswer: "a",
          explanation:
            "Eren. Il la lui met autour du cou le jour où il la sauve de ses ravisseurs, et elle ne la quitte presque plus jamais.",
        },
        {
          id: 3,
          image: "/images/q-l-attaque-des-titans-personnages-03.webp",
          question: "Qui mange une pomme de terre en plein discours de l'instructeur, le premier jour ?",
          answers: [
            { id: "a", text: "Sasha Braus" },
            { id: "b", text: "Connie Springer" },
          ],
          correctAnswer: "a",
          explanation:
            "Sasha. Punie, elle doit courir jusqu'à épuisement, et elle garde depuis le surnom de « la fille à la patate ».",
        },
        {
          id: 4,
          question: "Qui a grandi à Shiganshina avec Eren et Mikasa ?",
          answers: [
            { id: "a", text: "Jean Kirschtein" },
            { id: "b", text: "Armin Arlert" },
          ],
          correctAnswer: "b",
          explanation:
            "Armin. C'est l'ami d'enfance d'Eren, et c'est lui qui lui parle le premier de la mer, au-delà des murs. Jean, lui, vient de Trost.",
        },
        {
          id: 5,
          image: "/images/q-l-attaque-des-titans-personnages-05.webp",
          question: "Qui devient reine à l'intérieur des murs ?",
          answers: [
            { id: "a", text: "Historia Reiss" },
            { id: "b", text: "Annie Leonhart" },
          ],
          correctAnswer: "a",
          explanation:
            "Historia, qui se faisait appeler Krista Lenz dans la 104e brigade. Elle est la vraie héritière de la famille royale.",
        },
        {
          id: 6,
          question: "Lequel des deux est le père d'Historia ?",
          answers: [
            { id: "a", text: "Uri Reiss" },
            { id: "b", text: "Rod Reiss" },
          ],
          correctAnswer: "b",
          explanation:
            "Rod Reiss. Uri est son petit frère, qui a porté le Titan Originel avant de le transmettre à sa nièce Frieda.",
        },
        {
          id: 7,
          question: "Qui a élevé Livaï quand il était enfant dans la ville souterraine ?",
          answers: [
            { id: "a", text: "Keith Shadis" },
            { id: "b", text: "Kenny Ackerman" },
          ],
          correctAnswer: "b",
          explanation:
            "Kenny, son oncle, un tueur redouté. Il lui apprend à se battre et à survivre, puis le laisse se débrouiller seul.",
        },
        {
          id: 8,
          image: "/images/q-l-attaque-des-titans-personnages-08.webp",
          question: "Qui passe ses journées à étudier les Titans et leur donne même des prénoms ?",
          answers: [
            { id: "a", text: "Hansi Zoe" },
            { id: "b", text: "Mike Zacharias" },
          ],
          correctAnswer: "a",
          explanation:
            "Hansi. Elle capture deux Titans, qu'elle appelle Sawney et Bean, pour faire des expériences dessus. Elle devient plus tard commandante du Bataillon d'exploration.",
        },
        {
          id: 9,
          question: "Lequel des deux fait partie de la famille de Reiner Braun ?",
          answers: [
            { id: "a", text: "Falco Grice" },
            { id: "b", text: "Gabi Braun" },
          ],
          correctAnswer: "b",
          explanation:
            "Gabi, sa cousine. Elle est candidate pour hériter de son Titan Cuirassé, et c'est elle qui tire sur Sasha à bord du dirigeable.",
        },
        {
          id: 10,
          image: "/images/q-l-attaque-des-titans-personnages-10.webp",
          question: "Qui voulait entrer dans les Brigades spéciales pour vivre à l'abri, avant de rejoindre le Bataillon d'exploration ?",
          answers: [
            { id: "a", text: "Jean Kirschtein" },
            { id: "b", text: "Marco Bott" },
          ],
          correctAnswer: "a",
          explanation:
            "Jean. Il change d'avis après la mort de Marco à Trost. Marco, lui, voulait entrer dans les Brigades spéciales pour servir le roi.",
        },
      ],
    },
    en: {
      title: "Attack on Titan Duel: The Characters",
      description:
        "Ten duels on the characters of Attack on Titan, from Eren to Levi. Two names each time, and only one is right.",
      questions: [
        {
          id: 1,
          image: "/images/q-l-attaque-des-titans-personnages-01.webp",
          question: "Which of the two belongs to the Ackerman clan?",
          answers: [
            { id: "a", text: "Erwin Smith" },
            { id: "b", text: "Levi" },
          ],
          correctAnswer: "b",
          explanation:
            "Levi. Like Mikasa and Kenny, he's an Ackerman, which explains his incredible strength. Erwin, the commander, has nothing like that.",
        },
        {
          id: 2,
          question: "Who gave Mikasa her red scarf?",
          answers: [
            { id: "a", text: "Eren" },
            { id: "b", text: "Armin" },
          ],
          correctAnswer: "a",
          explanation:
            "Eren. He wraps it around her neck the day he saves her from her kidnappers, and she hardly ever takes it off after that.",
        },
        {
          id: 3,
          image: "/images/q-l-attaque-des-titans-personnages-03.webp",
          question: "Who eats a potato in the middle of the instructor's speech on day one?",
          answers: [
            { id: "a", text: "Sasha Blouse" },
            { id: "b", text: "Connie Springer" },
          ],
          correctAnswer: "a",
          explanation:
            "Sasha. As punishment she has to run until she drops, and she's been stuck with the nickname Potato Girl ever since.",
        },
        {
          id: 4,
          question: "Who grew up in Shiganshina with Eren and Mikasa?",
          answers: [
            { id: "a", text: "Jean Kirstein" },
            { id: "b", text: "Armin Arlert" },
          ],
          correctAnswer: "b",
          explanation:
            "Armin. He's Eren's childhood friend, and he's the one who first tells him about the ocean beyond the walls. Jean comes from Trost.",
        },
        {
          id: 5,
          image: "/images/q-l-attaque-des-titans-personnages-05.webp",
          question: "Who becomes queen inside the walls?",
          answers: [
            { id: "a", text: "Historia Reiss" },
            { id: "b", text: "Annie Leonhart" },
          ],
          correctAnswer: "a",
          explanation:
            "Historia, who went by Krista Lenz in the 104th Cadet Corps. She's the true heir of the royal family.",
        },
        {
          id: 6,
          question: "Which of the two is Historia's father?",
          answers: [
            { id: "a", text: "Uri Reiss" },
            { id: "b", text: "Rod Reiss" },
          ],
          correctAnswer: "b",
          explanation:
            "Rod Reiss. Uri is his younger brother, who held the Founding Titan before passing it to his niece Frieda.",
        },
        {
          id: 7,
          question: "Who raised Levi as a child in the Underground?",
          answers: [
            { id: "a", text: "Keith Shadis" },
            { id: "b", text: "Kenny Ackerman" },
          ],
          correctAnswer: "b",
          explanation:
            "Kenny, his uncle, a feared killer. He teaches him to fight and survive, then leaves him to fend for himself.",
        },
        {
          id: 8,
          image: "/images/q-l-attaque-des-titans-personnages-08.webp",
          question: "Who spends all day studying Titans and even gives them names?",
          answers: [
            { id: "a", text: "Hange Zoë" },
            { id: "b", text: "Mike Zacharias" },
          ],
          correctAnswer: "a",
          explanation:
            "Hange. They capture two Titans, named Sawney and Bean, to run experiments on them. Later on Hange becomes commander of the Survey Corps.",
        },
        {
          id: 9,
          question: "Which of the two is related to Reiner Braun?",
          answers: [
            { id: "a", text: "Falco Grice" },
            { id: "b", text: "Gabi Braun" },
          ],
          correctAnswer: "b",
          explanation:
            "Gabi, his cousin. She's a candidate to inherit his Armored Titan, and she's the one who shoots Sasha on the airship.",
        },
        {
          id: 10,
          image: "/images/q-l-attaque-des-titans-personnages-10.webp",
          question: "Who wanted to join the Military Police to live a safe life, before joining the Survey Corps?",
          answers: [
            { id: "a", text: "Jean Kirstein" },
            { id: "b", text: "Marco Bott" },
          ],
          correctAnswer: "a",
          explanation:
            "Jean. He changes his mind after Marco dies in Trost. Marco wanted to join the Military Police too, but to serve the king.",
        },
      ],
    },
    es: {
      title: "Duelo Ataque a los Titanes: los personajes",
      description:
        "Diez duelos sobre los personajes de Ataque a los Titanes, de Eren a Levi. Dos nombres cada vez, y solo uno es el bueno.",
      questions: [
        {
          id: 1,
          image: "/images/q-l-attaque-des-titans-personnages-01.webp",
          question: "¿Cuál de los dos pertenece al clan Ackerman?",
          answers: [
            { id: "a", text: "Erwin Smith" },
            { id: "b", text: "Levi" },
          ],
          correctAnswer: "b",
          explanation:
            "Levi. Igual que Mikasa y Kenny, es un Ackerman, y eso explica su fuerza fuera de lo normal. Erwin, el comandante, no tiene nada de eso.",
        },
        {
          id: 2,
          question: "¿Quién le dio a Mikasa su bufanda roja?",
          answers: [
            { id: "a", text: "Eren" },
            { id: "b", text: "Armin" },
          ],
          correctAnswer: "a",
          explanation:
            "Eren. Se la pone alrededor del cuello el día que la salva de sus secuestradores, y ella casi no se la quita nunca más.",
        },
        {
          id: 3,
          image: "/images/q-l-attaque-des-titans-personnages-03.webp",
          question: "¿Quién se come una patata en pleno discurso del instructor el primer día?",
          answers: [
            { id: "a", text: "Sasha Blouse" },
            { id: "b", text: "Connie Springer" },
          ],
          correctAnswer: "a",
          explanation:
            "Sasha. De castigo tiene que correr hasta caer rendida, y desde entonces se queda con el mote de «la chica patata».",
        },
        {
          id: 4,
          question: "¿Quién creció en Shiganshina con Eren y Mikasa?",
          answers: [
            { id: "a", text: "Jean Kirstein" },
            { id: "b", text: "Armin Arlert" },
          ],
          correctAnswer: "b",
          explanation:
            "Armin. Es el amigo de la infancia de Eren, y es quien le habla por primera vez del mar que hay más allá de los muros. Jean viene de Trost.",
        },
        {
          id: 5,
          image: "/images/q-l-attaque-des-titans-personnages-05.webp",
          question: "¿Quién se convierte en reina dentro de los muros?",
          answers: [
            { id: "a", text: "Historia Reiss" },
            { id: "b", text: "Annie Leonhart" },
          ],
          correctAnswer: "a",
          explanation:
            "Historia, que se hacía llamar Krista Lenz en la Tropa de Reclutas 104. Es la verdadera heredera de la familia real.",
        },
        {
          id: 6,
          question: "¿Cuál de los dos es el padre de Historia?",
          answers: [
            { id: "a", text: "Uri Reiss" },
            { id: "b", text: "Rod Reiss" },
          ],
          correctAnswer: "b",
          explanation:
            "Rod Reiss. Uri es su hermano pequeño, que llevó el Titán Fundador antes de pasárselo a su sobrina Frieda.",
        },
        {
          id: 7,
          question: "¿Quién crió a Levi de niño en la Ciudad Subterránea?",
          answers: [
            { id: "a", text: "Keith Shadis" },
            { id: "b", text: "Kenny Ackerman" },
          ],
          correctAnswer: "b",
          explanation:
            "Kenny, su tío, un asesino temido. Le enseña a pelear y a sobrevivir, y luego lo deja que se las apañe solo.",
        },
        {
          id: 8,
          image: "/images/q-l-attaque-des-titans-personnages-08.webp",
          question: "¿Quién se pasa el día estudiando a los Titanes y hasta les pone nombre?",
          answers: [
            { id: "a", text: "Hange Zoë" },
            { id: "b", text: "Mike Zacharias" },
          ],
          correctAnswer: "a",
          explanation:
            "Hange. Captura a dos Titanes, a los que llama Sawney y Bean, para hacer experimentos con ellos. Más adelante llega a ser comandante de la Legión de Reconocimiento.",
        },
        {
          id: 9,
          question: "¿Cuál de los dos es pariente de Reiner Braun?",
          answers: [
            { id: "a", text: "Falco Grice" },
            { id: "b", text: "Gabi Braun" },
          ],
          correctAnswer: "b",
          explanation:
            "Gabi, su prima. Es candidata a heredar su Titán Acorazado, y es ella quien dispara a Sasha en el dirigible.",
        },
        {
          id: 10,
          image: "/images/q-l-attaque-des-titans-personnages-10.webp",
          question: "¿Quién quería entrar en la Policía Militar para vivir tranquilo, antes de unirse a la Legión de Reconocimiento?",
          answers: [
            { id: "a", text: "Jean Kirstein" },
            { id: "b", text: "Marco Bott" },
          ],
          correctAnswer: "a",
          explanation:
            "Jean. Cambia de idea después de la muerte de Marco en Trost. Marco también quería entrar en la Policía Militar, pero para servir al rey.",
        },
      ],
    },
  },
};

export default [quizAttaqueDesTitansPersonnages] as TranslatedQuiz[];
