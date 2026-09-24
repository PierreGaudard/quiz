import type { TranslatedQuiz } from "./types";

/**
 * Quiz Valorant en qcm sur les agents : leur pays d'origine, leur rôle et
 * une capacité marquante.
 *
 * Jett et Sage sont déjà dans le chrono quiz-valorant.ts, et la liste des
 * rôles y est posée aussi : ici, on demande le rôle d'un agent précis. Les
 * capacités citées sont celles qui définissent l'agent et n'ont pas changé
 * depuis sa sortie.
 */
export const quizValorantAgents: TranslatedQuiz = {
  slug: "quiz-valorant-agents",
  slugs: { en: "valorant-agents-quiz", fr: "quiz-valorant-agents", es: "quiz-valorant-agentes" },
  categorySlug: "jeux-video",
  subcategory: "Valorant",
  difficulty: "medium",
  coverImage: "/images/cover-valorant-agents.webp",
  gameType: "qcm",
  playCount: 6300,
  translations: {
    fr: {
      title: "Quiz Valorant : les agents",
      description:
        "Phoenix, Chamber, Cypher, Raze, KAY/O ou encore Clove : dix questions sur les agents de Valorant, leur pays et leurs capacités.",
      questions: [
        {
          id: 1,
          image: "/images/q-valorant-agents-01.webp",
          question: "De quel pays vient Phoenix ?",
          answers: [
            { id: "a", text: "Des États-Unis" },
            { id: "b", text: "Du Royaume-Uni" },
            { id: "c", text: "D'Irlande" },
            { id: "d", text: "D'Australie" },
          ],
          correctAnswer: "b",
          explanation:
            "Du Royaume-Uni, de Londres. Phoenix est un duelliste qui se bat avec le feu, et son ultime lui permet de revenir à la vie s'il se fait tuer.",
        },
        {
          id: 2,
          question: "Quel agent vient de France ?",
          answers: [
            { id: "a", text: "Chamber" },
            { id: "b", text: "Deadlock" },
            { id: "c", text: "Breach" },
            { id: "d", text: "Fade" },
          ],
          correctAnswer: "a",
          explanation:
            "Chamber, une sentinelle très chic qui fabrique ses propres armes. Deadlock vient de Norvège, Breach de Suède et Fade de Turquie.",
        },
        {
          id: 3,
          image: "/images/q-valorant-agents-03.webp",
          question: "De quel pays vient Cypher, l'espion aux caméras ?",
          answers: [
            { id: "a", text: "D'Égypte" },
            { id: "b", text: "De Turquie" },
            { id: "c", text: "D'Inde" },
            { id: "d", text: "Du Maroc" },
          ],
          correctAnswer: "d",
          explanation:
            "Du Maroc. Cypher pose des caméras et des fils pièges, et son ultime révèle la position de toute l'équipe adverse.",
        },
        {
          id: 4,
          question: "De quel pays vient Raze, la spécialiste des explosifs ?",
          answers: [
            { id: "a", text: "Du Mexique" },
            { id: "b", text: "D'Espagne" },
            { id: "c", text: "Du Brésil" },
            { id: "d", text: "De Colombie" },
          ],
          correctAnswer: "c",
          explanation:
            "Du Brésil. Raze lance des grenades, un petit robot explosif, et son ultime est un lance-roquettes.",
        },
        {
          id: 5,
          question: "Quel agent est un robot ?",
          answers: [
            { id: "a", text: "Viper" },
            { id: "b", text: "KAY/O" },
            { id: "c", text: "Harbor" },
            { id: "d", text: "Astra" },
          ],
          correctAnswer: "b",
          explanation:
            "KAY/O, un robot de combat venu d'un futur alternatif. Son couteau empêche les ennemis touchés d'utiliser leurs capacités pendant quelques secondes.",
        },
        {
          id: 6,
          question: "Quel a été le premier agent ajouté après la sortie du jeu ?",
          answers: [
            { id: "a", text: "Killjoy" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Astra" },
          ],
          correctAnswer: "a",
          explanation:
            "Killjoy, arrivée le 4 août 2020, deux mois après la sortie. C'est une ingénieure allemande qui pose des tourelles et des robots.",
        },
        {
          id: 7,
          question: "Quel agent peut encore poser ses fumigènes après sa mort ?",
          answers: [
            { id: "a", text: "Viper" },
            { id: "b", text: "Omen" },
            { id: "c", text: "Brimstone" },
            { id: "d", text: "Clove" },
          ],
          correctAnswer: "d",
          explanation:
            "Clove, un agent contrôleur venu d'Écosse et arrivé en 2024. Son ultime lui permet même de revenir à la vie, à condition de faire vite une élimination.",
        },
        {
          id: 8,
          image: "/images/q-valorant-agents-08.webp",
          question: "Quel est le rôle de Sova, l'archer russe ?",
          answers: [
            { id: "a", text: "Duelliste" },
            { id: "b", text: "Sentinelle" },
            { id: "c", text: "Initiateur" },
            { id: "d", text: "Contrôleur" },
          ],
          correctAnswer: "c",
          explanation:
            "Initiateur. Sova tire des flèches qui révèlent les ennemis et envoie un drone pour repérer le terrain avant que son équipe entre sur un site.",
        },
        {
          id: 9,
          question: "Quel agent peut se téléporter n'importe où sur la carte avec son ultime ?",
          answers: [
            { id: "a", text: "Yoru" },
            { id: "b", text: "Omen" },
            { id: "c", text: "Jett" },
            { id: "d", text: "Neon" },
          ],
          correctAnswer: "b",
          explanation:
            "Omen, avec son ultime : il choisit un point sur la carte et il y apparaît quelques secondes plus tard. Yoru se téléporte aussi, mais sur de courtes distances, avec une capacité normale.",
        },
        {
          id: 10,
          image: "/images/q-valorant-agents-10.webp",
          question: "De quel pays vient Reyna ?",
          answers: [
            { id: "a", text: "Du Mexique" },
            { id: "b", text: "Du Pérou" },
            { id: "c", text: "D'Argentine" },
            { id: "d", text: "D'Espagne" },
          ],
          correctAnswer: "a",
          explanation:
            "Du Mexique. Reyna est une duelliste qui se soigne ou devient intouchable un court moment en absorbant l'âme des ennemis qu'elle vient de tuer.",
        },
      ],
    },
    en: {
      title: "Valorant quiz: the agents",
      description:
        "Phoenix, Chamber, Cypher, Raze, KAY/O, Clove and more: ten questions on the Valorant agents, where they come from and what they do.",
      questions: [
        {
          id: 1,
          image: "/images/q-valorant-agents-01.webp",
          question: "Which country is Phoenix from?",
          answers: [
            { id: "a", text: "The United States" },
            { id: "b", text: "The United Kingdom" },
            { id: "c", text: "Ireland" },
            { id: "d", text: "Australia" },
          ],
          correctAnswer: "b",
          explanation:
            "The United Kingdom, London to be exact. Phoenix is a Duelist who fights with fire, and his ultimate lets him come back to life if he gets killed.",
        },
        {
          id: 2,
          question: "Which agent is from France?",
          answers: [
            { id: "a", text: "Chamber" },
            { id: "b", text: "Deadlock" },
            { id: "c", text: "Breach" },
            { id: "d", text: "Fade" },
          ],
          correctAnswer: "a",
          explanation:
            "Chamber, a very stylish Sentinel who makes his own guns. Deadlock is from Norway, Breach from Sweden and Fade from Turkey.",
        },
        {
          id: 3,
          image: "/images/q-valorant-agents-03.webp",
          question: "Which country is Cypher, the spy with the cameras, from?",
          answers: [
            { id: "a", text: "Egypt" },
            { id: "b", text: "Turkey" },
            { id: "c", text: "India" },
            { id: "d", text: "Morocco" },
          ],
          correctAnswer: "d",
          explanation:
            "Morocco. Cypher sets up cameras and tripwires, and his ultimate reveals where the whole enemy team is.",
        },
        {
          id: 4,
          question: "Which country is Raze, the explosives expert, from?",
          answers: [
            { id: "a", text: "Mexico" },
            { id: "b", text: "Spain" },
            { id: "c", text: "Brazil" },
            { id: "d", text: "Colombia" },
          ],
          correctAnswer: "c",
          explanation:
            "Brazil. Raze throws grenades and a little explosive robot, and her ultimate is a rocket launcher.",
        },
        {
          id: 5,
          question: "Which agent is a robot?",
          answers: [
            { id: "a", text: "Viper" },
            { id: "b", text: "KAY/O" },
            { id: "c", text: "Harbor" },
            { id: "d", text: "Astra" },
          ],
          correctAnswer: "b",
          explanation:
            "KAY/O, a war machine from an alternate future. His knife stops the enemies it hits from using their abilities for a few seconds.",
        },
        {
          id: 6,
          question: "Which was the first agent added after the game's release?",
          answers: [
            { id: "a", text: "Killjoy" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Astra" },
          ],
          correctAnswer: "a",
          explanation:
            "Killjoy, who arrived on 4 August 2020, two months after launch. She's a German engineer who sets up turrets and bots.",
        },
        {
          id: 7,
          question: "Which agent can still place their smokes after dying?",
          answers: [
            { id: "a", text: "Viper" },
            { id: "b", text: "Omen" },
            { id: "c", text: "Brimstone" },
            { id: "d", text: "Clove" },
          ],
          correctAnswer: "d",
          explanation:
            "Clove, a Scottish Controller who arrived in 2024. Their ultimate even lets them come back to life, as long as they get a kill quickly.",
        },
        {
          id: 8,
          image: "/images/q-valorant-agents-08.webp",
          question: "What is the role of Sova, the Russian archer?",
          answers: [
            { id: "a", text: "Duelist" },
            { id: "b", text: "Sentinel" },
            { id: "c", text: "Initiator" },
            { id: "d", text: "Controller" },
          ],
          correctAnswer: "c",
          explanation:
            "Initiator. Sova shoots arrows that reveal enemies and sends a drone to scout before his team goes onto a site.",
        },
        {
          id: 9,
          question: "Which agent can teleport anywhere on the map with their ultimate?",
          answers: [
            { id: "a", text: "Yoru" },
            { id: "b", text: "Omen" },
            { id: "c", text: "Jett" },
            { id: "d", text: "Neon" },
          ],
          correctAnswer: "b",
          explanation:
            "Omen, with his ultimate From the Shadows: he picks a spot on the map and appears there a few seconds later. Yoru can teleport too, but only over short distances, with a basic ability.",
        },
        {
          id: 10,
          image: "/images/q-valorant-agents-10.webp",
          question: "Which country is Reyna from?",
          answers: [
            { id: "a", text: "Mexico" },
            { id: "b", text: "Peru" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Spain" },
          ],
          correctAnswer: "a",
          explanation:
            "Mexico. Reyna is a Duelist who heals herself, or becomes untouchable for a moment, by absorbing the souls of enemies she has just killed.",
        },
      ],
    },
    es: {
      title: "Quiz de Valorant: los agentes",
      description:
        "Phoenix, Chamber, Cypher, Raze, KAY/O, Clove y más: diez preguntas sobre los agentes de Valorant, su país y sus habilidades.",
      questions: [
        {
          id: 1,
          image: "/images/q-valorant-agents-01.webp",
          question: "¿De qué país es Phoenix?",
          answers: [
            { id: "a", text: "De Estados Unidos" },
            { id: "b", text: "Del Reino Unido" },
            { id: "c", text: "De Irlanda" },
            { id: "d", text: "De Australia" },
          ],
          correctAnswer: "b",
          explanation:
            "Del Reino Unido, de Londres. Phoenix es un duelista que pelea con fuego, y su definitiva le deja volver a la vida si lo matan.",
        },
        {
          id: 2,
          question: "¿Qué agente es de Francia?",
          answers: [
            { id: "a", text: "Chamber" },
            { id: "b", text: "Deadlock" },
            { id: "c", text: "Breach" },
            { id: "d", text: "Fade" },
          ],
          correctAnswer: "a",
          explanation:
            "Chamber, un centinela muy elegante que fabrica sus propias armas. Deadlock es de Noruega, Breach de Suecia y Fade de Turquía.",
        },
        {
          id: 3,
          image: "/images/q-valorant-agents-03.webp",
          question: "¿De qué país es Cypher, el espía de las cámaras?",
          answers: [
            { id: "a", text: "De Egipto" },
            { id: "b", text: "De Turquía" },
            { id: "c", text: "De India" },
            { id: "d", text: "De Marruecos" },
          ],
          correctAnswer: "d",
          explanation:
            "De Marruecos. Cypher coloca cámaras y cables trampa, y su definitiva revela dónde está todo el equipo rival.",
        },
        {
          id: 4,
          question: "¿De qué país es Raze, la experta en explosivos?",
          answers: [
            { id: "a", text: "De México" },
            { id: "b", text: "De España" },
            { id: "c", text: "De Brasil" },
            { id: "d", text: "De Colombia" },
          ],
          correctAnswer: "c",
          explanation:
            "De Brasil. Raze lanza granadas y un pequeño robot explosivo, y su definitiva es un lanzacohetes.",
        },
        {
          id: 5,
          question: "¿Qué agente es un robot?",
          answers: [
            { id: "a", text: "Viper" },
            { id: "b", text: "KAY/O" },
            { id: "c", text: "Harbor" },
            { id: "d", text: "Astra" },
          ],
          correctAnswer: "b",
          explanation:
            "KAY/O, una máquina de guerra que viene de un futuro alternativo. Su cuchillo impide a los enemigos alcanzados usar sus habilidades durante unos segundos.",
        },
        {
          id: 6,
          question: "¿Cuál fue el primer agente añadido después del lanzamiento?",
          answers: [
            { id: "a", text: "Killjoy" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Astra" },
          ],
          correctAnswer: "a",
          explanation:
            "Killjoy, que llegó el 4 de agosto de 2020, dos meses después del lanzamiento. Es una ingeniera alemana que coloca torretas y robots.",
        },
        {
          id: 7,
          question: "¿Qué agente puede seguir poniendo sus humos después de morir?",
          answers: [
            { id: "a", text: "Viper" },
            { id: "b", text: "Omen" },
            { id: "c", text: "Brimstone" },
            { id: "d", text: "Clove" },
          ],
          correctAnswer: "d",
          explanation:
            "Clove, agente controlador de Escocia que llegó en 2024. Su definitiva le permite incluso volver a la vida, siempre que consiga una eliminación rápido.",
        },
        {
          id: 8,
          image: "/images/q-valorant-agents-08.webp",
          question: "¿Cuál es el rol de Sova, el arquero ruso?",
          answers: [
            { id: "a", text: "Duelista" },
            { id: "b", text: "Centinela" },
            { id: "c", text: "Iniciador" },
            { id: "d", text: "Controlador" },
          ],
          correctAnswer: "c",
          explanation:
            "Iniciador. Sova dispara flechas que revelan a los enemigos y manda un dron para explorar antes de que su equipo entre en un site.",
        },
        {
          id: 9,
          question: "¿Qué agente puede teletransportarse a cualquier parte del mapa con su definitiva?",
          answers: [
            { id: "a", text: "Yoru" },
            { id: "b", text: "Omen" },
            { id: "c", text: "Jett" },
            { id: "d", text: "Neon" },
          ],
          correctAnswer: "b",
          explanation:
            "Omen, con su definitiva: elige un punto del mapa y aparece allí unos segundos después. Yoru también se teletransporta, pero a poca distancia y con una habilidad normal.",
        },
        {
          id: 10,
          image: "/images/q-valorant-agents-10.webp",
          question: "¿De qué país es Reyna?",
          answers: [
            { id: "a", text: "De México" },
            { id: "b", text: "De Perú" },
            { id: "c", text: "De Argentina" },
            { id: "d", text: "De España" },
          ],
          correctAnswer: "a",
          explanation:
            "De México. Reyna es una duelista que se cura, o se vuelve intocable un momento, absorbiendo el alma de los enemigos que acaba de matar.",
        },
      ],
    },
  },
};

export default [quizValorantAgents] as TranslatedQuiz[];
