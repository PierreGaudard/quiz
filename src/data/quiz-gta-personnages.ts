import type { TranslatedQuiz } from "./types";

/**
 * Quiz GTA en QCM : les héros et les personnages secondaires de la série,
 * de GTA III à GTA VI.
 *
 * Le quiz d'origine (quiz-gta.ts) joue sur les chiffres et les dates : ici on
 * ne parle que des personnages. On laisse de côté le trio de GTA V déjà cité
 * là-bas, sauf pour leur entourage (Chop, Jimmy). Pour GTA VI, pas encore
 * sorti en septembre 2026, on s'en tient à ce que les bandes-annonces ont
 * montré.
 */
export const quizGtaPersonnages: TranslatedQuiz = {
  slug: "quiz-gta-personnages",
  slugs: { en: "gta-characters-quiz", fr: "quiz-gta-personnages", es: "quiz-gta-personajes" },
  categorySlug: "jeux-video",
  subcategory: "GTA",
  difficulty: "medium",
  coverImage: "/images/cover-gta-personnages.webp",
  gameType: "qcm",
  playCount: 6200,
  translations: {
    fr: {
      title: "Quiz GTA : les personnages de la série",
      description:
        "Niko, Tommy, CJ, Lucia ou encore Chop : dix questions sur les héros de GTA et leur entourage. Tu les reconnais tous ?",
      questions: [
        {
          id: 1,
          image: "/images/q-gta-personnages-01.webp",
          question: "Comment s'appelle le héros de GTA IV ?",
          answers: [
            { id: "a", text: "Tommy Vercetti" },
            { id: "b", text: "Niko Bellic" },
            { id: "c", text: "Luis Lopez" },
            { id: "d", text: "Claude" },
          ],
          correctAnswer: "b",
          explanation:
            "Niko Bellic, un ancien soldat d'Europe de l'Est qui débarque à Liberty City. Luis Lopez, c'est le héros de l'extension The Ballad of Gay Tony.",
        },
        {
          id: 2,
          image: "/images/q-gta-personnages-02.webp",
          question: "Qui est le héros de GTA Vice City ?",
          answers: [
            { id: "a", text: "Tommy Vercetti" },
            { id: "b", text: "Victor Vance" },
            { id: "c", text: "Toni Cipriani" },
            { id: "d", text: "Ken Rosenberg" },
          ],
          correctAnswer: "a",
          explanation:
            "Tommy Vercetti, qui sort de prison au début du jeu. Victor Vance est le héros de Vice City Stories, et Ken Rosenberg est l'avocat de Tommy.",
        },
        {
          id: 3,
          question: "Que veut dire « CJ », le surnom du héros de San Andreas ?",
          answers: [
            { id: "a", text: "Chris Jackson" },
            { id: "b", text: "Calvin James" },
            { id: "c", text: "Carl Johnson" },
            { id: "d", text: "Carl Jones" },
          ],
          correctAnswer: "c",
          explanation:
            "Carl Johnson. Presque personne ne l'appelle par son prénom dans le jeu, tout le monde dit CJ.",
        },
        {
          id: 4,
          question: "Comment s'appelle le héros muet de GTA III ?",
          answers: [
            { id: "a", text: "Huang Lee" },
            { id: "b", text: "Johnny Klebitz" },
            { id: "c", text: "Toni Cipriani" },
            { id: "d", text: "Claude" },
          ],
          correctAnswer: "d",
          explanation:
            "Claude. Il ne dit pas un mot de tout le jeu. On le revoit d'ailleurs rapidement dans San Andreas, où il ne parle toujours pas.",
        },
        {
          id: 5,
          question: "Comment s'appelle le grand frère de CJ ?",
          answers: [
            { id: "a", text: "Big Smoke" },
            { id: "b", text: "Sweet" },
            { id: "c", text: "Ryder" },
            { id: "d", text: "OG Loc" },
          ],
          correctAnswer: "b",
          explanation:
            "Sweet, de son vrai nom Sean Johnson. Big Smoke et Ryder sont des amis de la bande, et OG Loc est le rappeur raté du quartier.",
        },
        {
          id: 6,
          question: "Dans GTA IV, qui accueille Niko quand il arrive à Liberty City ?",
          answers: [
            { id: "a", text: "Son cousin Roman" },
            { id: "b", text: "Son frère Mikhail" },
            { id: "c", text: "Son ami Lester" },
            { id: "d", text: "Son oncle Dimitri" },
          ],
          correctAnswer: "a",
          explanation:
            "Son cousin Roman Bellic, qui lui avait promis la belle vie en Amérique. En vrai, Roman tient une petite compagnie de taxis et croule sous les dettes de jeu.",
        },
        {
          id: 7,
          image: "/images/q-gta-personnages-07.webp",
          question: "Comment s'appelle le chien de Franklin dans GTA V ?",
          answers: [
            { id: "a", text: "Rex" },
            { id: "b", text: "Buster" },
            { id: "c", text: "Chop" },
            { id: "d", text: "Max" },
          ],
          correctAnswer: "c",
          explanation:
            "Chop, un rottweiler. Au départ c'est le chien de Lamar, l'ami de Franklin, puis Franklin le garde avec lui.",
        },
        {
          id: 8,
          question: "Dans GTA V, lequel des trois héros est un braqueur à la retraite, caché sous une fausse identité ?",
          answers: [
            { id: "a", text: "Michael" },
            { id: "b", text: "Franklin" },
            { id: "c", text: "Trevor" },
            { id: "d", text: "Lamar" },
          ],
          correctAnswer: "a",
          explanation:
            "Michael De Santa. Il vit dans une grande maison de Rockford Hills grâce à un arrangement avec le FIB, qui le protège en échange de ses services.",
        },
        {
          id: 9,
          image: "/images/q-gta-personnages-09.webp",
          question: "Comment s'appelle l'héroïne de GTA VI, montrée dans la première bande-annonce ?",
          answers: [
            { id: "a", text: "Maria" },
            { id: "b", text: "Elena" },
            { id: "c", text: "Sofia" },
            { id: "d", text: "Lucia" },
          ],
          correctAnswer: "d",
          explanation:
            "Lucia Caminos. C'est la première héroïne principale d'un GTA numéroté, et elle fait équipe avec Jason Duval.",
        },
        {
          id: 10,
          question: "Dans GTA V, comment s'appelle le fils de Michael ?",
          answers: [
            { id: "a", text: "Jimmy" },
            { id: "b", text: "Tracey" },
            { id: "c", text: "Dave" },
            { id: "d", text: "Lamar" },
          ],
          correctAnswer: "a",
          explanation:
            "Jimmy, un ado qui passe ses journées sur les jeux vidéo. Tracey est sa sœur, et Dave Norton est l'agent du FIB qui surveille Michael.",
        },
      ],
    },
    en: {
      title: "GTA quiz: the characters of the series",
      description:
        "Niko, Tommy, CJ, Lucia, Chop and more: ten questions about the GTA heroes and the people around them. Can you name them all?",
      questions: [
        {
          id: 1,
          image: "/images/q-gta-personnages-01.webp",
          question: "What's the name of the hero of GTA IV?",
          answers: [
            { id: "a", text: "Tommy Vercetti" },
            { id: "b", text: "Niko Bellic" },
            { id: "c", text: "Luis Lopez" },
            { id: "d", text: "Claude" },
          ],
          correctAnswer: "b",
          explanation:
            "Niko Bellic, a former soldier from Eastern Europe who lands in Liberty City. Luis Lopez is the hero of The Ballad of Gay Tony expansion.",
        },
        {
          id: 2,
          image: "/images/q-gta-personnages-02.webp",
          question: "Who's the hero of GTA Vice City?",
          answers: [
            { id: "a", text: "Tommy Vercetti" },
            { id: "b", text: "Victor Vance" },
            { id: "c", text: "Toni Cipriani" },
            { id: "d", text: "Ken Rosenberg" },
          ],
          correctAnswer: "a",
          explanation:
            "Tommy Vercetti, who's just out of prison when the game starts. Victor Vance is the hero of Vice City Stories, and Ken Rosenberg is Tommy's lawyer.",
        },
        {
          id: 3,
          question: "What does \"CJ\", the San Andreas hero's nickname, stand for?",
          answers: [
            { id: "a", text: "Chris Jackson" },
            { id: "b", text: "Calvin James" },
            { id: "c", text: "Carl Johnson" },
            { id: "d", text: "Carl Jones" },
          ],
          correctAnswer: "c",
          explanation:
            "Carl Johnson. Hardly anyone calls him Carl in the game, everybody just says CJ.",
        },
        {
          id: 4,
          question: "What's the name of the silent hero of GTA III?",
          answers: [
            { id: "a", text: "Huang Lee" },
            { id: "b", text: "Johnny Klebitz" },
            { id: "c", text: "Toni Cipriani" },
            { id: "d", text: "Claude" },
          ],
          correctAnswer: "d",
          explanation:
            "Claude. He doesn't say a single word in the whole game. He even shows up briefly in San Andreas, and he still doesn't talk.",
        },
        {
          id: 5,
          question: "What's the name of CJ's older brother?",
          answers: [
            { id: "a", text: "Big Smoke" },
            { id: "b", text: "Sweet" },
            { id: "c", text: "Ryder" },
            { id: "d", text: "OG Loc" },
          ],
          correctAnswer: "b",
          explanation:
            "Sweet, whose real name is Sean Johnson. Big Smoke and Ryder are friends from the gang, and OG Loc is the neighborhood's failed rapper.",
        },
        {
          id: 6,
          question: "In GTA IV, who takes Niko in when he arrives in Liberty City?",
          answers: [
            { id: "a", text: "His cousin Roman" },
            { id: "b", text: "His brother Mikhail" },
            { id: "c", text: "His friend Lester" },
            { id: "d", text: "His uncle Dimitri" },
          ],
          correctAnswer: "a",
          explanation:
            "His cousin Roman Bellic, who had promised him the good life in America. In reality, Roman runs a small taxi company and is buried in gambling debts.",
        },
        {
          id: 7,
          image: "/images/q-gta-personnages-07.webp",
          question: "What's the name of Franklin's dog in GTA V?",
          answers: [
            { id: "a", text: "Rex" },
            { id: "b", text: "Buster" },
            { id: "c", text: "Chop" },
            { id: "d", text: "Max" },
          ],
          correctAnswer: "c",
          explanation:
            "Chop, a Rottweiler. He starts out as the dog of Lamar, Franklin's friend, and then Franklin keeps him.",
        },
        {
          id: 8,
          question: "In GTA V, which of the three heroes is a retired bank robber living under a false identity?",
          answers: [
            { id: "a", text: "Michael" },
            { id: "b", text: "Franklin" },
            { id: "c", text: "Trevor" },
            { id: "d", text: "Lamar" },
          ],
          correctAnswer: "a",
          explanation:
            "Michael De Santa. He lives in a big house in Rockford Hills thanks to a deal with the FIB, which protects him in exchange for favors.",
        },
        {
          id: 9,
          image: "/images/q-gta-personnages-09.webp",
          question: "What's the name of the GTA VI heroine shown in the first trailer?",
          answers: [
            { id: "a", text: "Maria" },
            { id: "b", text: "Elena" },
            { id: "c", text: "Sofia" },
            { id: "d", text: "Lucia" },
          ],
          correctAnswer: "d",
          explanation:
            "Lucia Caminos. She's the first female lead of a numbered GTA game, and she teams up with Jason Duval.",
        },
        {
          id: 10,
          question: "In GTA V, what's the name of Michael's son?",
          answers: [
            { id: "a", text: "Jimmy" },
            { id: "b", text: "Tracey" },
            { id: "c", text: "Dave" },
            { id: "d", text: "Lamar" },
          ],
          correctAnswer: "a",
          explanation:
            "Jimmy, a teenager who spends his days playing video games. Tracey is his sister, and Dave Norton is the FIB agent keeping an eye on Michael.",
        },
      ],
    },
    es: {
      title: "Quiz GTA: los personajes de la saga",
      description:
        "Niko, Tommy, CJ, Lucia, Chop y muchos más: diez preguntas sobre los protagonistas de GTA y su entorno. ¿Los conoces a todos?",
      questions: [
        {
          id: 1,
          image: "/images/q-gta-personnages-01.webp",
          question: "¿Cómo se llama el protagonista de GTA IV?",
          answers: [
            { id: "a", text: "Tommy Vercetti" },
            { id: "b", text: "Niko Bellic" },
            { id: "c", text: "Luis Lopez" },
            { id: "d", text: "Claude" },
          ],
          correctAnswer: "b",
          explanation:
            "Niko Bellic, un exsoldado de Europa del Este que llega a Liberty City. Luis Lopez es el protagonista de la expansión The Ballad of Gay Tony.",
        },
        {
          id: 2,
          image: "/images/q-gta-personnages-02.webp",
          question: "¿Quién es el protagonista de GTA Vice City?",
          answers: [
            { id: "a", text: "Tommy Vercetti" },
            { id: "b", text: "Victor Vance" },
            { id: "c", text: "Toni Cipriani" },
            { id: "d", text: "Ken Rosenberg" },
          ],
          correctAnswer: "a",
          explanation:
            "Tommy Vercetti, que acaba de salir de la cárcel al empezar el juego. Victor Vance es el protagonista de Vice City Stories, y Ken Rosenberg es el abogado de Tommy.",
        },
        {
          id: 3,
          question: "¿Qué significa «CJ», el apodo del protagonista de San Andreas?",
          answers: [
            { id: "a", text: "Chris Jackson" },
            { id: "b", text: "Calvin James" },
            { id: "c", text: "Carl Johnson" },
            { id: "d", text: "Carl Jones" },
          ],
          correctAnswer: "c",
          explanation:
            "Carl Johnson. Casi nadie lo llama Carl en el juego, todo el mundo le dice CJ.",
        },
        {
          id: 4,
          question: "¿Cómo se llama el protagonista mudo de GTA III?",
          answers: [
            { id: "a", text: "Huang Lee" },
            { id: "b", text: "Johnny Klebitz" },
            { id: "c", text: "Toni Cipriani" },
            { id: "d", text: "Claude" },
          ],
          correctAnswer: "d",
          explanation:
            "Claude. No dice ni una palabra en todo el juego. Incluso sale un momento en San Andreas, y tampoco habla.",
        },
        {
          id: 5,
          question: "¿Cómo se llama el hermano mayor de CJ?",
          answers: [
            { id: "a", text: "Big Smoke" },
            { id: "b", text: "Sweet" },
            { id: "c", text: "Ryder" },
            { id: "d", text: "OG Loc" },
          ],
          correctAnswer: "b",
          explanation:
            "Sweet, cuyo nombre real es Sean Johnson. Big Smoke y Ryder son amigos de la banda, y OG Loc es el rapero fracasado del barrio.",
        },
        {
          id: 6,
          question: "En GTA IV, ¿quién recibe a Niko cuando llega a Liberty City?",
          answers: [
            { id: "a", text: "Su primo Roman" },
            { id: "b", text: "Su hermano Mikhail" },
            { id: "c", text: "Su amigo Lester" },
            { id: "d", text: "Su tío Dimitri" },
          ],
          correctAnswer: "a",
          explanation:
            "Su primo Roman Bellic, que le había prometido la buena vida en América. En realidad, Roman tiene una pequeña empresa de taxis y está lleno de deudas de juego.",
        },
        {
          id: 7,
          image: "/images/q-gta-personnages-07.webp",
          question: "¿Cómo se llama el perro de Franklin en GTA V?",
          answers: [
            { id: "a", text: "Rex" },
            { id: "b", text: "Buster" },
            { id: "c", text: "Chop" },
            { id: "d", text: "Max" },
          ],
          correctAnswer: "c",
          explanation:
            "Chop, un rottweiler. Al principio es el perro de Lamar, el amigo de Franklin, y luego Franklin se queda con él.",
        },
        {
          id: 8,
          question: "En GTA V, ¿cuál de los tres protagonistas es un atracador retirado que vive con una identidad falsa?",
          answers: [
            { id: "a", text: "Michael" },
            { id: "b", text: "Franklin" },
            { id: "c", text: "Trevor" },
            { id: "d", text: "Lamar" },
          ],
          correctAnswer: "a",
          explanation:
            "Michael De Santa. Vive en una casa enorme en Rockford Hills gracias a un trato con el FIB, que lo protege a cambio de favores.",
        },
        {
          id: 9,
          image: "/images/q-gta-personnages-09.webp",
          question: "¿Cómo se llama la protagonista de GTA VI que aparece en el primer tráiler?",
          answers: [
            { id: "a", text: "Maria" },
            { id: "b", text: "Elena" },
            { id: "c", text: "Sofia" },
            { id: "d", text: "Lucia" },
          ],
          correctAnswer: "d",
          explanation:
            "Lucia Caminos. Es la primera protagonista femenina de un GTA numerado, y forma pareja con Jason Duval.",
        },
        {
          id: 10,
          question: "En GTA V, ¿cómo se llama el hijo de Michael?",
          answers: [
            { id: "a", text: "Jimmy" },
            { id: "b", text: "Tracey" },
            { id: "c", text: "Dave" },
            { id: "d", text: "Lamar" },
          ],
          correctAnswer: "a",
          explanation:
            "Jimmy, un adolescente que se pasa el día jugando a videojuegos. Tracey es su hermana, y Dave Norton es el agente del FIB que vigila a Michael.",
        },
      ],
    },
  },
};

export default [quizGtaPersonnages] as TranslatedQuiz[];
