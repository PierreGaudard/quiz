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
        "Niko, Tommy, CJ, Lucia ou encore Chop : vingt questions sur les héros de GTA et leur entourage. Tu les reconnais tous ?",
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
        {
          id: 11,
          question: "Au tout début de GTA III, qui trahit Claude et lui tire dessus pendant un braquage ?",
          answers: [
            { id: "a", text: "Maria" },
            { id: "b", text: "Catalina" },
            { id: "c", text: "8-Ball" },
            { id: "d", text: "Misty" },
          ],
          correctAnswer: "b",
          explanation:
            "Catalina, sa petite amie, qui s'enfuit avec l'argent et le laisse pour mort. Claude passe ensuite une bonne partie du jeu à la retrouver.",
        },
        {
          id: 12,
          question: "Quel acteur prête sa voix à Tommy Vercetti dans GTA Vice City ?",
          answers: [
            { id: "a", text: "Ray Liotta" },
            { id: "b", text: "Al Pacino" },
            { id: "c", text: "Robert De Niro" },
            { id: "d", text: "Joe Pesci" },
          ],
          correctAnswer: "a",
          explanation:
            "Ray Liotta, l'acteur des Affranchis. Le jeu s'inspire d'ailleurs beaucoup des films de gangsters des années 80, comme Scarface.",
        },
        {
          id: 13,
          question: "À la fin de Vice City, quel ami de Tommy le trahit en passant du côté de Sonny Forelli ?",
          answers: [
            { id: "a", text: "Ken Rosenberg" },
            { id: "b", text: "Ricardo Diaz" },
            { id: "c", text: "Umberto Robina" },
            { id: "d", text: "Lance Vance" },
          ],
          correctAnswer: "d",
          explanation:
            "Lance Vance, avec qui Tommy avait monté toutes ses affaires. Tommy finit par l'abattre dans son manoir, pendant la dernière mission.",
        },
        {
          id: 14,
          question: "Quel acteur double l'officier Tenpenny, le policier corrompu de San Andreas ?",
          answers: [
            { id: "a", text: "Denzel Washington" },
            { id: "b", text: "Morgan Freeman" },
            { id: "c", text: "Samuel L. Jackson" },
            { id: "d", text: "Laurence Fishburne" },
          ],
          correctAnswer: "c",
          explanation:
            "Samuel L. Jackson. Frank Tenpenny fait chanter CJ pendant tout le jeu, et c'est lui le grand méchant de l'histoire.",
        },
        {
          id: 15,
          question: "Dans San Andreas, quel chef de triade est aveugle ?",
          answers: [
            { id: "a", text: "Kendl" },
            { id: "b", text: "Woozie" },
            { id: "c", text: "Zero" },
            { id: "d", text: "Toreno" },
          ],
          correctAnswer: "b",
          explanation:
            "Woozie, de son vrai nom Wu Zi Mu, qui dirige les Mountain Cloud Boys à San Fierro. Il est aveugle, mais il conduit quand même, et il ne le reconnaît pas volontiers.",
        },
        {
          id: 16,
          question: "Dans GTA IV, quel ami de Niko est un Jamaïcain rastafari ?",
          answers: [
            { id: "a", text: "Little Jacob" },
            { id: "b", text: "Brucie Kibbutz" },
            { id: "c", text: "Packie McReary" },
            { id: "d", text: "Dwayne Forge" },
          ],
          correctAnswer: "a",
          explanation:
            "Little Jacob, un trafiquant d'armes qu'on a parfois du mal à comprendre à cause de son accent. Brucie, lui, est le fan de musculation accro aux stéroïdes.",
        },
        {
          id: 17,
          question: "Qui est le héros de The Lost and Damned, la première extension de GTA IV ?",
          answers: [
            { id: "a", text: "Luis Lopez" },
            { id: "b", text: "Billy Grey" },
            { id: "c", text: "Johnny Klebitz" },
            { id: "d", text: "Jim Fitzgerald" },
          ],
          correctAnswer: "c",
          explanation:
            "Johnny Klebitz, le vice-président d'un gang de motards, The Lost. Luis Lopez est le héros de l'autre extension, The Ballad of Gay Tony.",
        },
        {
          id: 18,
          question: "Qui est le héros de GTA Liberty City Stories, sorti en 2005 sur PSP ?",
          answers: [
            { id: "a", text: "Victor Vance" },
            { id: "b", text: "Joey Leone" },
            { id: "c", text: "Salvatore Leone" },
            { id: "d", text: "Toni Cipriani" },
          ],
          correctAnswer: "d",
          explanation:
            "Toni Cipriani, un homme de main de la famille Leone. On le croisait déjà dans GTA III, où il donnait des missions à Claude.",
        },
        {
          id: 19,
          question: "Dans GTA V, comment s'appelle le hacker qui prépare les braquages et se déplace avec une canne ?",
          answers: [
            { id: "a", text: "Lester Crest" },
            { id: "b", text: "Ron Jakowski" },
            { id: "c", text: "Wade Hebert" },
            { id: "d", text: "Devin Weston" },
          ],
          correctAnswer: "a",
          explanation:
            "Lester Crest, un vieil ami de Michael. Il est atteint d'une maladie qui l'affaiblit, du coup il reste derrière son ordinateur pendant que les autres passent à l'action.",
        },
        {
          id: 20,
          question: "Dans GTA V, comment s'appelle la femme de Michael ?",
          answers: [
            { id: "a", text: "Tracey" },
            { id: "b", text: "Amanda" },
            { id: "c", text: "Patricia" },
            { id: "d", text: "Denise" },
          ],
          correctAnswer: "b",
          explanation:
            "Amanda De Santa. Le couple se dispute presque à chaque scène. Tracey, c'est leur fille, et Denise la tante de Franklin.",
        },
      ],
    },
    en: {
      title: "GTA quiz: the characters of the series",
      description:
        "Niko, Tommy, CJ, Lucia, Chop and more: twenty questions about the GTA heroes and the people around them. Can you name them all?",
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
        {
          id: 11,
          question: "At the very start of GTA III, who betrays Claude and shoots him during a robbery?",
          answers: [
            { id: "a", text: "Maria" },
            { id: "b", text: "Catalina" },
            { id: "c", text: "8-Ball" },
            { id: "d", text: "Misty" },
          ],
          correctAnswer: "b",
          explanation:
            "Catalina, his girlfriend, who runs off with the money and leaves him for dead. Claude then spends a good part of the game tracking her down.",
        },
        {
          id: 12,
          question: "Which actor voices Tommy Vercetti in GTA Vice City?",
          answers: [
            { id: "a", text: "Ray Liotta" },
            { id: "b", text: "Al Pacino" },
            { id: "c", text: "Robert De Niro" },
            { id: "d", text: "Joe Pesci" },
          ],
          correctAnswer: "a",
          explanation:
            "Ray Liotta, the star of Goodfellas. The game also borrows a lot from 1980s gangster films, like Scarface.",
        },
        {
          id: 13,
          question: "At the end of Vice City, which of Tommy's friends betrays him by siding with Sonny Forelli?",
          answers: [
            { id: "a", text: "Ken Rosenberg" },
            { id: "b", text: "Ricardo Diaz" },
            { id: "c", text: "Umberto Robina" },
            { id: "d", text: "Lance Vance" },
          ],
          correctAnswer: "d",
          explanation:
            "Lance Vance, who Tommy had built his whole business with. Tommy ends up shooting him in his mansion during the final mission.",
        },
        {
          id: 14,
          question: "Which actor voices Officer Tenpenny, the corrupt cop in San Andreas?",
          answers: [
            { id: "a", text: "Denzel Washington" },
            { id: "b", text: "Morgan Freeman" },
            { id: "c", text: "Samuel L. Jackson" },
            { id: "d", text: "Laurence Fishburne" },
          ],
          correctAnswer: "c",
          explanation:
            "Samuel L. Jackson. Frank Tenpenny blackmails CJ throughout the game, and he's the story's main villain.",
        },
        {
          id: 15,
          question: "In San Andreas, which triad boss is blind?",
          answers: [
            { id: "a", text: "Kendl" },
            { id: "b", text: "Woozie" },
            { id: "c", text: "Zero" },
            { id: "d", text: "Toreno" },
          ],
          correctAnswer: "b",
          explanation:
            "Woozie, whose real name is Wu Zi Mu, and who runs the Mountain Cloud Boys in San Fierro. He's blind, but he drives anyway, and he doesn't like to admit it.",
        },
        {
          id: 16,
          question: "In GTA IV, which of Niko's friends is a Jamaican Rastafarian?",
          answers: [
            { id: "a", text: "Little Jacob" },
            { id: "b", text: "Brucie Kibbutz" },
            { id: "c", text: "Packie McReary" },
            { id: "d", text: "Dwayne Forge" },
          ],
          correctAnswer: "a",
          explanation:
            "Little Jacob, an arms dealer who can be hard to understand because of his accent. Brucie is the gym-obsessed guy hooked on steroids.",
        },
        {
          id: 17,
          question: "Who is the hero of The Lost and Damned, GTA IV's first expansion?",
          answers: [
            { id: "a", text: "Luis Lopez" },
            { id: "b", text: "Billy Grey" },
            { id: "c", text: "Johnny Klebitz" },
            { id: "d", text: "Jim Fitzgerald" },
          ],
          correctAnswer: "c",
          explanation:
            "Johnny Klebitz, the vice president of a biker gang, The Lost. Luis Lopez is the hero of the other expansion, The Ballad of Gay Tony.",
        },
        {
          id: 18,
          question: "Who is the hero of GTA Liberty City Stories, released in 2005 on PSP?",
          answers: [
            { id: "a", text: "Victor Vance" },
            { id: "b", text: "Joey Leone" },
            { id: "c", text: "Salvatore Leone" },
            { id: "d", text: "Toni Cipriani" },
          ],
          correctAnswer: "d",
          explanation:
            "Toni Cipriani, a made man for the Leone family. He already appeared in GTA III, where he gave Claude missions.",
        },
        {
          id: 19,
          question: "In GTA V, what's the name of the hacker who plans the heists and walks with a cane?",
          answers: [
            { id: "a", text: "Lester Crest" },
            { id: "b", text: "Ron Jakowski" },
            { id: "c", text: "Wade Hebert" },
            { id: "d", text: "Devin Weston" },
          ],
          correctAnswer: "a",
          explanation:
            "Lester Crest, an old friend of Michael's. He has an illness that weakens him, so he stays behind his computer while the others go into action.",
        },
        {
          id: 20,
          question: "In GTA V, what's the name of Michael's wife?",
          answers: [
            { id: "a", text: "Tracey" },
            { id: "b", text: "Amanda" },
            { id: "c", text: "Patricia" },
            { id: "d", text: "Denise" },
          ],
          correctAnswer: "b",
          explanation:
            "Amanda De Santa. The couple argue in almost every scene. Tracey is their daughter, and Denise is Franklin's aunt.",
        },
      ],
    },
    es: {
      title: "Quiz GTA: los personajes de la saga",
      description:
        "Niko, Tommy, CJ, Lucia, Chop y muchos más: veinte preguntas sobre los protagonistas de GTA y su entorno. ¿Los conoces a todos?",
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
        {
          id: 11,
          question: "Al principio de GTA III, ¿quién traiciona a Claude y le dispara durante un atraco?",
          answers: [
            { id: "a", text: "Maria" },
            { id: "b", text: "Catalina" },
            { id: "c", text: "8-Ball" },
            { id: "d", text: "Misty" },
          ],
          correctAnswer: "b",
          explanation:
            "Catalina, su novia, que se escapa con el dinero y lo deja por muerto. Claude se pasa después buena parte del juego buscándola.",
        },
        {
          id: 12,
          question: "¿Qué actor pone la voz a Tommy Vercetti en GTA Vice City?",
          answers: [
            { id: "a", text: "Ray Liotta" },
            { id: "b", text: "Al Pacino" },
            { id: "c", text: "Robert De Niro" },
            { id: "d", text: "Joe Pesci" },
          ],
          correctAnswer: "a",
          explanation:
            "Ray Liotta, el actor de Uno de los nuestros. El juego además se inspira mucho en las películas de gánsteres de los 80, como El precio del poder.",
        },
        {
          id: 13,
          question: "Al final de Vice City, ¿qué amigo de Tommy lo traiciona poniéndose del lado de Sonny Forelli?",
          answers: [
            { id: "a", text: "Ken Rosenberg" },
            { id: "b", text: "Ricardo Diaz" },
            { id: "c", text: "Umberto Robina" },
            { id: "d", text: "Lance Vance" },
          ],
          correctAnswer: "d",
          explanation:
            "Lance Vance, con quien Tommy había montado todos sus negocios. Tommy acaba matándolo en su mansión durante la última misión.",
        },
        {
          id: 14,
          question: "¿Qué actor pone la voz al agente Tenpenny, el policía corrupto de San Andreas?",
          answers: [
            { id: "a", text: "Denzel Washington" },
            { id: "b", text: "Morgan Freeman" },
            { id: "c", text: "Samuel L. Jackson" },
            { id: "d", text: "Laurence Fishburne" },
          ],
          correctAnswer: "c",
          explanation:
            "Samuel L. Jackson. Frank Tenpenny chantajea a CJ durante todo el juego, y es el gran villano de la historia.",
        },
        {
          id: 15,
          question: "En San Andreas, ¿qué jefe de una tríada es ciego?",
          answers: [
            { id: "a", text: "Kendl" },
            { id: "b", text: "Woozie" },
            { id: "c", text: "Zero" },
            { id: "d", text: "Toreno" },
          ],
          correctAnswer: "b",
          explanation:
            "Woozie, cuyo nombre real es Wu Zi Mu, y que dirige a los Mountain Cloud Boys en San Fierro. Es ciego, pero conduce igual, y no le gusta admitirlo.",
        },
        {
          id: 16,
          question: "En GTA IV, ¿qué amigo de Niko es un rastafari jamaicano?",
          answers: [
            { id: "a", text: "Little Jacob" },
            { id: "b", text: "Brucie Kibbutz" },
            { id: "c", text: "Packie McReary" },
            { id: "d", text: "Dwayne Forge" },
          ],
          correctAnswer: "a",
          explanation:
            "Little Jacob, un traficante de armas al que a veces cuesta entender por su acento. Brucie es el obseso del gimnasio enganchado a los esteroides.",
        },
        {
          id: 17,
          question: "¿Quién es el protagonista de The Lost and Damned, la primera expansión de GTA IV?",
          answers: [
            { id: "a", text: "Luis Lopez" },
            { id: "b", text: "Billy Grey" },
            { id: "c", text: "Johnny Klebitz" },
            { id: "d", text: "Jim Fitzgerald" },
          ],
          correctAnswer: "c",
          explanation:
            "Johnny Klebitz, el vicepresidente de una banda de moteros, The Lost. Luis Lopez es el protagonista de la otra expansión, The Ballad of Gay Tony.",
        },
        {
          id: 18,
          question: "¿Quién es el protagonista de GTA Liberty City Stories, de 2005 en PSP?",
          answers: [
            { id: "a", text: "Victor Vance" },
            { id: "b", text: "Joey Leone" },
            { id: "c", text: "Salvatore Leone" },
            { id: "d", text: "Toni Cipriani" },
          ],
          correctAnswer: "d",
          explanation:
            "Toni Cipriani, un hombre de confianza de la familia Leone. Ya salía en GTA III, donde le daba misiones a Claude.",
        },
        {
          id: 19,
          question: "En GTA V, ¿cómo se llama el hacker que prepara los golpes y camina con bastón?",
          answers: [
            { id: "a", text: "Lester Crest" },
            { id: "b", text: "Ron Jakowski" },
            { id: "c", text: "Wade Hebert" },
            { id: "d", text: "Devin Weston" },
          ],
          correctAnswer: "a",
          explanation:
            "Lester Crest, un viejo amigo de Michael. Tiene una enfermedad que lo debilita, así que se queda frente al ordenador mientras los demás entran en acción.",
        },
        {
          id: 20,
          question: "En GTA V, ¿cómo se llama la mujer de Michael?",
          answers: [
            { id: "a", text: "Tracey" },
            { id: "b", text: "Amanda" },
            { id: "c", text: "Patricia" },
            { id: "d", text: "Denise" },
          ],
          correctAnswer: "b",
          explanation:
            "Amanda De Santa. La pareja discute casi en cada escena. Tracey es su hija, y Denise la tía de Franklin.",
        },
      ],
    },
  },
};

export default [quizGtaPersonnages] as TranslatedQuiz[];
