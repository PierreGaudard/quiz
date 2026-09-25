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
        "Phoenix, Chamber, Cypher, Raze, KAY/O ou encore Clove : vingt questions sur les agents de Valorant, leur pays et leurs capacités.",
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
        {
          id: 11,
          question: "Quel agent vient du Japon ?",
          answers: [
            { id: "a", text: "Neon" },
            { id: "b", text: "Iso" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Harbor" },
          ],
          correctAnswer: "c",
          explanation:
            "Yoru, un duelliste qui crée des failles pour se téléporter et des leurres pour tromper l'adversaire. Neon vient des Philippines, Iso de Chine et Harbor d'Inde.",
        },
        {
          id: 12,
          question: "Quel agent se sert de l'eau pour créer des murs et des boucliers ?",
          answers: [
            { id: "a", text: "Harbor" },
            { id: "b", text: "Viper" },
            { id: "c", text: "Astra" },
            { id: "d", text: "Deadlock" },
          ],
          correctAnswer: "a",
          explanation:
            "Harbor, un contrôleur venu d'Inde. Il fait monter des murs d'eau qui bloquent la vue. Viper fait à peu près la même chose, mais avec du gaz toxique.",
        },
        {
          id: 13,
          question: "Quel est le rôle de Brimstone ?",
          answers: [
            { id: "a", text: "Sentinelle" },
            { id: "b", text: "Duelliste" },
            { id: "c", text: "Initiateur" },
            { id: "d", text: "Contrôleur" },
          ],
          correctAnswer: "d",
          explanation:
            "Contrôleur. Brimstone, l'Américain du jeu, envoie ses fumigènes depuis une carte tactique et peut appeler une frappe orbitale avec son ultime.",
        },
        {
          id: 14,
          question: "De quel pays vient Astra ?",
          answers: [
            { id: "a", text: "Du Nigeria" },
            { id: "b", text: "Du Ghana" },
            { id: "c", text: "Du Kenya" },
            { id: "d", text: "D'Afrique du Sud" },
          ],
          correctAnswer: "b",
          explanation:
            "Du Ghana. Astra est une contrôleuse qui place des étoiles sur la carte depuis une vue astrale, puis les transforme en fumigènes ou en pièges.",
        },
        {
          id: 15,
          question: "Quel agent court très vite et lance des éclairs grâce à l'électricité ?",
          answers: [
            { id: "a", text: "Jett" },
            { id: "b", text: "Raze" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Neon" },
          ],
          correctAnswer: "d",
          explanation:
            "Neon, une duelliste venue des Philippines. Elle peut sprinter et glisser, et son ultime lui fait tirer un rayon électrique.",
        },
        {
          id: 16,
          question: "Comment s'appelle la créature de Gekko qui peut poser ou désamorcer le Spike à sa place ?",
          answers: [
            { id: "a", text: "Dizzy" },
            { id: "b", text: "Wingman" },
            { id: "c", text: "Thrash" },
            { id: "d", text: "Mosh" },
          ],
          correctAnswer: "b",
          explanation:
            "Wingman. Gekko peut l'envoyer poser le Spike ou le désamorcer pendant que lui reste à couvert. Dizzy, Thrash et Mosh sont ses trois autres créatures.",
        },
        {
          id: 17,
          question: "Quel agent vient du Sénégal ?",
          answers: [
            { id: "a", text: "Tejo" },
            { id: "b", text: "Waylay" },
            { id: "c", text: "Veto" },
            { id: "d", text: "Vyse" },
          ],
          correctAnswer: "c",
          explanation:
            "Veto, une sentinelle qui neutralise les capacités adverses. Tejo vient de Colombie et Waylay de Thaïlande.",
        },
        {
          id: 18,
          question: "Quel agent envoie un tigre de Tasmanie et des faucons pour aider son équipe ?",
          answers: [
            { id: "a", text: "Fade" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Sova" },
            { id: "d", text: "KAY/O" },
          ],
          correctAnswer: "b",
          explanation:
            "Skye, une initiatrice venue d'Australie. Ses faucons aveuglent les ennemis, son tigre les étourdit, et elle peut aussi soigner ses coéquipiers.",
        },
        {
          id: 19,
          question: "Quel agent a des bras bioniques qui envoient des ondes de choc à travers les murs ?",
          answers: [
            { id: "a", text: "Breach" },
            { id: "b", text: "KAY/O" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Gekko" },
          ],
          correctAnswer: "a",
          explanation:
            "Breach, l'initiateur suédois. Ses attaques traversent les murs pour aveugler ou étourdir les ennemis qui attendent derrière.",
        },
        {
          id: 20,
          question: "Quel agent vient de Croatie ?",
          answers: [
            { id: "a", text: "Chamber" },
            { id: "b", text: "Miks" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Vyse" },
          ],
          correctAnswer: "b",
          explanation:
            "Miks, un contrôleur arrivé après Veto. Chamber vient de France et Deadlock de Norvège.",
        },
      ],
    },
    en: {
      title: "Valorant quiz: the agents",
      description:
        "Phoenix, Chamber, Cypher, Raze, KAY/O, Clove and more: twenty questions on the Valorant agents, where they come from and what they do.",
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
        {
          id: 11,
          question: "Which agent comes from Japan?",
          answers: [
            { id: "a", text: "Neon" },
            { id: "b", text: "Iso" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Harbor" },
          ],
          correctAnswer: "c",
          explanation:
            "Yoru, a duelist who opens rifts to teleport and sends out decoys to fool the enemy. Neon is from the Philippines, Iso from China and Harbor from India.",
        },
        {
          id: 12,
          question: "Which agent uses water to build walls and shields?",
          answers: [
            { id: "a", text: "Harbor" },
            { id: "b", text: "Viper" },
            { id: "c", text: "Astra" },
            { id: "d", text: "Deadlock" },
          ],
          correctAnswer: "a",
          explanation:
            "Harbor, a controller from India. He raises walls of water that block vision. Viper does something similar, but with toxic gas.",
        },
        {
          id: 13,
          question: "What is Brimstone's role?",
          answers: [
            { id: "a", text: "Sentinel" },
            { id: "b", text: "Duelist" },
            { id: "c", text: "Initiator" },
            { id: "d", text: "Controller" },
          ],
          correctAnswer: "d",
          explanation:
            "Controller. Brimstone, the game's American veteran, drops his smokes from a tactical map and can call in an orbital strike with his ultimate.",
        },
        {
          id: 14,
          question: "Which country does Astra come from?",
          answers: [
            { id: "a", text: "Nigeria" },
            { id: "b", text: "Ghana" },
            { id: "c", text: "Kenya" },
            { id: "d", text: "South Africa" },
          ],
          correctAnswer: "b",
          explanation:
            "Ghana. Astra is a controller who places stars on the map from an astral view, then turns them into smokes or traps.",
        },
        {
          id: 15,
          question: "Which agent runs very fast and throws lightning thanks to electricity?",
          answers: [
            { id: "a", text: "Jett" },
            { id: "b", text: "Raze" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Neon" },
          ],
          correctAnswer: "d",
          explanation:
            "Neon, a duelist from the Philippines. She can sprint and slide, and her ultimate lets her fire an electric beam.",
        },
        {
          id: 16,
          question: "What's the name of Gekko's creature that can plant or defuse the Spike for him?",
          answers: [
            { id: "a", text: "Dizzy" },
            { id: "b", text: "Wingman" },
            { id: "c", text: "Thrash" },
            { id: "d", text: "Mosh" },
          ],
          correctAnswer: "b",
          explanation:
            "Wingman. Gekko can send it to plant or defuse the Spike while he stays in cover. Dizzy, Thrash and Mosh are his three other creatures.",
        },
        {
          id: 17,
          question: "Which agent comes from Senegal?",
          answers: [
            { id: "a", text: "Tejo" },
            { id: "b", text: "Waylay" },
            { id: "c", text: "Veto" },
            { id: "d", text: "Vyse" },
          ],
          correctAnswer: "c",
          explanation:
            "Veto, a sentinel who shuts down enemy abilities. Tejo is from Colombia and Waylay from Thailand.",
        },
        {
          id: 18,
          question: "Which agent sends a Tasmanian tiger and hawks to help the team?",
          answers: [
            { id: "a", text: "Fade" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Sova" },
            { id: "d", text: "KAY/O" },
          ],
          correctAnswer: "b",
          explanation:
            "Skye, an initiator from Australia. Her hawks blind enemies, her tiger stuns them, and she can also heal her teammates.",
        },
        {
          id: 19,
          question: "Which agent has bionic arms that send shockwaves through walls?",
          answers: [
            { id: "a", text: "Breach" },
            { id: "b", text: "KAY/O" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Gekko" },
          ],
          correctAnswer: "a",
          explanation:
            "Breach, the Swedish initiator. His blasts go through walls to blind or stun the enemies waiting on the other side.",
        },
        {
          id: 20,
          question: "Which agent comes from Croatia?",
          answers: [
            { id: "a", text: "Chamber" },
            { id: "b", text: "Miks" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Vyse" },
          ],
          correctAnswer: "b",
          explanation:
            "Miks, a controller who arrived after Veto. Chamber is from France and Deadlock from Norway.",
        },
      ],
    },
    es: {
      title: "Quiz de Valorant: los agentes",
      description:
        "Phoenix, Chamber, Cypher, Raze, KAY/O, Clove y más: veinte preguntas sobre los agentes de Valorant, su país y sus habilidades.",
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
        {
          id: 11,
          question: "¿Qué agente es de Japón?",
          answers: [
            { id: "a", text: "Neon" },
            { id: "b", text: "Iso" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Harbor" },
          ],
          correctAnswer: "c",
          explanation:
            "Yoru, un duelista que abre grietas para teletransportarse y lanza señuelos para engañar al rival. Neon es de Filipinas, Iso de China y Harbor de India.",
        },
        {
          id: 12,
          question: "¿Qué agente usa el agua para crear muros y escudos?",
          answers: [
            { id: "a", text: "Harbor" },
            { id: "b", text: "Viper" },
            { id: "c", text: "Astra" },
            { id: "d", text: "Deadlock" },
          ],
          correctAnswer: "a",
          explanation:
            "Harbor, un controlador que viene de India. Levanta muros de agua que tapan la visión. Viper hace algo parecido, pero con gas tóxico.",
        },
        {
          id: 13,
          question: "¿Cuál es el rol de Brimstone?",
          answers: [
            { id: "a", text: "Centinela" },
            { id: "b", text: "Duelista" },
            { id: "c", text: "Iniciador" },
            { id: "d", text: "Controlador" },
          ],
          correctAnswer: "d",
          explanation:
            "Controlador. Brimstone, el veterano estadounidense del juego, lanza sus humos desde un mapa táctico y con su definitiva puede pedir un ataque orbital.",
        },
        {
          id: 14,
          question: "¿De qué país es Astra?",
          answers: [
            { id: "a", text: "De Nigeria" },
            { id: "b", text: "De Ghana" },
            { id: "c", text: "De Kenia" },
            { id: "d", text: "De Sudáfrica" },
          ],
          correctAnswer: "b",
          explanation:
            "De Ghana. Astra es una controladora que coloca estrellas en el mapa desde una vista astral y luego las convierte en humos o trampas.",
        },
        {
          id: 15,
          question: "¿Qué agente corre muy rápido y lanza rayos gracias a la electricidad?",
          answers: [
            { id: "a", text: "Jett" },
            { id: "b", text: "Raze" },
            { id: "c", text: "Yoru" },
            { id: "d", text: "Neon" },
          ],
          correctAnswer: "d",
          explanation:
            "Neon, una duelista de Filipinas. Puede esprintar y deslizarse, y con su definitiva dispara un rayo eléctrico.",
        },
        {
          id: 16,
          question: "¿Cómo se llama la criatura de Gekko que puede plantar o desactivar la Spike por él?",
          answers: [
            { id: "a", text: "Dizzy" },
            { id: "b", text: "Wingman" },
            { id: "c", text: "Thrash" },
            { id: "d", text: "Mosh" },
          ],
          correctAnswer: "b",
          explanation:
            "Wingman. Gekko puede mandarlo a plantar o desactivar la Spike mientras él se queda a cubierto. Dizzy, Thrash y Mosh son sus otras tres criaturas.",
        },
        {
          id: 17,
          question: "¿Qué agente es de Senegal?",
          answers: [
            { id: "a", text: "Tejo" },
            { id: "b", text: "Waylay" },
            { id: "c", text: "Veto" },
            { id: "d", text: "Vyse" },
          ],
          correctAnswer: "c",
          explanation:
            "Veto, un centinela que anula las habilidades del rival. Tejo es de Colombia y Waylay de Tailandia.",
        },
        {
          id: 18,
          question: "¿Qué agente manda un tigre de Tasmania y unos halcones para ayudar a su equipo?",
          answers: [
            { id: "a", text: "Fade" },
            { id: "b", text: "Skye" },
            { id: "c", text: "Sova" },
            { id: "d", text: "KAY/O" },
          ],
          correctAnswer: "b",
          explanation:
            "Skye, una iniciadora de Australia. Sus halcones ciegan a los enemigos, su tigre los aturde, y además puede curar a sus compañeros.",
        },
        {
          id: 19,
          question: "¿Qué agente tiene brazos biónicos que lanzan ondas de choque a través de las paredes?",
          answers: [
            { id: "a", text: "Breach" },
            { id: "b", text: "KAY/O" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Gekko" },
          ],
          correctAnswer: "a",
          explanation:
            "Breach, el iniciador sueco. Sus ataques atraviesan las paredes para cegar o aturdir a los enemigos que esperan al otro lado.",
        },
        {
          id: 20,
          question: "¿Qué agente es de Croacia?",
          answers: [
            { id: "a", text: "Chamber" },
            { id: "b", text: "Miks" },
            { id: "c", text: "Deadlock" },
            { id: "d", text: "Vyse" },
          ],
          correctAnswer: "b",
          explanation:
            "Miks, un controlador que llegó después de Veto. Chamber es de Francia y Deadlock de Noruega.",
        },
      ],
    },
  },
};

export default [quizValorantAgents] as TranslatedQuiz[];
