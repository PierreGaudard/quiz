import type { TranslatedQuiz } from "./types";

/**
 * Quiz Call of Duty en mode duel : vingt questions à deux propositions sur les
 * personnages des campagnes et du mode Zombies.
 *
 * Le moteur n'affiche que answers[0] et answers[1] (DuelPlayer), donc exactement
 * deux réponses par question, et la bonne réponse change de place. Le quiz
 * d'origine (quiz-call-of-duty.ts) joue sur l'ordre de sortie des jeux : ici on
 * ne parle que des personnages, de Price à Reznov.
 */
export const quizCallOfDutyPersonnages: TranslatedQuiz = {
  slug: "quiz-call-of-duty-personnages",
  slugs: { en: "call-of-duty-characters-quiz", fr: "quiz-call-of-duty-personnages", es: "quiz-call-of-duty-personajes" },
  categorySlug: "jeux-video",
  subcategory: "Call of Duty",
  difficulty: "medium",
  coverImage: "/images/cover-call-of-duty-personnages.webp",
  gameType: "duel",
  playCount: 5300,
  translations: {
    fr: {
      title: "Duel Call of Duty : les personnages",
      description:
        "Price, Ghost, Soap, Makarov, Mason ou encore Reznov : vingt duels sur les personnages de Call of Duty. Une seule des deux réponses est la bonne !",
      questions: [
        {
          id: 1,
          image: "/images/q-call-of-duty-personnages-01.webp",
          question: "Quel est le prénom du capitaine Price ?",
          answers: [
            { id: "a", text: "John" },
            { id: "b", text: "James" },
          ],
          correctAnswer: "a",
          explanation:
            "John. Le capitaine John Price apparaît dès Call of Duty 4, et c'est lui qui dirige la Task Force 141 dans les Modern Warfare.",
        },
        {
          id: 2,
          image: "/images/q-call-of-duty-personnages-02.webp",
          question: "Quel est le vrai nom de Ghost, le soldat au masque de tête de mort ?",
          answers: [
            { id: "a", text: "John MacTavish" },
            { id: "b", text: "Simon Riley" },
          ],
          correctAnswer: "b",
          explanation:
            "Simon Riley. John MacTavish, c'est Soap, un autre membre de la Task Force 141.",
        },
        {
          id: 3,
          image: "/images/q-call-of-duty-personnages-03.webp",
          question: "Quel acteur joue Jonathan Irons, le grand méchant d'Advanced Warfare ?",
          answers: [
            { id: "a", text: "Keanu Reeves" },
            { id: "b", text: "Kevin Spacey" },
          ],
          correctAnswer: "b",
          explanation:
            "Kevin Spacey, qui a prêté sa voix et son visage au patron de la société militaire Atlas. Keanu Reeves, lui, a joué dans Cyberpunk 2077.",
        },
        {
          id: 4,
          question: "Dans Modern Warfare 2 (2009), qui trahit la Task Force 141 et abat Ghost et Roach ?",
          answers: [
            { id: "a", text: "Le général Shepherd" },
            { id: "b", text: "Vladimir Makarov" },
          ],
          correctAnswer: "a",
          explanation:
            "Le général Shepherd, un général américain. C'est l'une des scènes les plus connues de la série, et Price et Soap passent la fin du jeu à le traquer.",
        },
        {
          id: 5,
          question: "Qui mène l'attaque de l'aéroport dans la mission « Pas de russe » de Modern Warfare 2 ?",
          answers: [
            { id: "a", text: "Imran Zakhaev" },
            { id: "b", text: "Vladimir Makarov" },
          ],
          correctAnswer: "b",
          explanation:
            "Vladimir Makarov, un terroriste russe. Imran Zakhaev, c'est le méchant de Call of Duty 4, et Makarov était d'ailleurs l'un de ses fidèles.",
        },
        {
          id: 6,
          image: "/images/q-call-of-duty-personnages-06.webp",
          question: "Qui est le héros de Black Ops, sorti en 2010 ?",
          answers: [
            { id: "a", text: "Alex Mason" },
            { id: "b", text: "David Mason" },
          ],
          correctAnswer: "a",
          explanation:
            "Alex Mason, un agent de la CIA hanté par une suite de nombres. David Mason est son fils, le héros de Black Ops II.",
        },
        {
          id: 7,
          question: "Qui est le grand méchant de Black Ops II ?",
          answers: [
            { id: "a", text: "Nikita Dragovich" },
            { id: "b", text: "Raul Menendez" },
          ],
          correctAnswer: "b",
          explanation:
            "Raul Menendez, un trafiquant nicaraguayen qui veut se venger de la famille Mason. Dragovich, c'est le général soviétique du premier Black Ops.",
        },
        {
          id: 8,
          image: "/images/q-call-of-duty-personnages-08.webp",
          question: "Dans quel jeu apparaît Viktor Reznov pour la première fois ?",
          answers: [
            { id: "a", text: "World at War" },
            { id: "b", text: "Black Ops" },
          ],
          correctAnswer: "a",
          explanation:
            "World at War, en 2008, où ce soldat soviétique se bat jusqu'à Berlin. On le retrouve ensuite dans Black Ops, aux côtés d'Alex Mason au goulag de Vorkouta.",
        },
        {
          id: 9,
          question: "Dans les missions à Tchernobyl de Call of Duty 4, qui accompagne le jeune Price ?",
          answers: [
            { id: "a", text: "Le sergent Griggs" },
            { id: "b", text: "Le capitaine MacMillan" },
          ],
          correctAnswer: "b",
          explanation:
            "Le capitaine MacMillan, son supérieur à l'époque. Les deux avancent en tenue de camouflage dans Prypiat pour tenter d'abattre Zakhaev.",
        },
        {
          id: 10,
          question: "En mode Zombies, quel personnage est un scientifique allemand ?",
          answers: [
            { id: "a", text: "Edward Richtofen" },
            { id: "b", text: "Tank Dempsey" },
          ],
          correctAnswer: "a",
          explanation:
            "Edward Richtofen, un savant du Groupe 935, l'organisation qui a créé les zombies. Tank Dempsey est un marine américain.",
        },
        {
          id: 11,
          question: "Dans Call of Duty 4, quel soldat du SAS le joueur incarne-t-il ?",
          answers: [
            { id: "a", text: "Le capitaine Price" },
            { id: "b", text: "Soap MacTavish" },
          ],
          correctAnswer: "b",
          explanation:
            "Soap MacTavish, un jeune sergent qui vient d'arriver dans l'équipe du capitaine Price. Price est le chef de son équipe.",
        },
        {
          id: 12,
          question: "Dans Call of Duty 4, quel marine américain meurt après l'explosion de la bombe nucléaire ?",
          answers: [
            { id: "a", text: "Paul Jackson" },
            { id: "b", text: "Frank Woods" },
          ],
          correctAnswer: "a",
          explanation:
            "Le sergent Paul Jackson. Son hélicoptère s'écrase à cause du souffle de la bombe, et il meurt quelques instants plus tard dans les ruines. C'est l'une des scènes les plus marquantes du jeu.",
        },
        {
          id: 13,
          question: "Quel membre de la Task Force 141 meurt dans Modern Warfare 3 (2011) ?",
          answers: [
            { id: "a", text: "Le capitaine Price" },
            { id: "b", text: "Soap MacTavish" },
          ],
          correctAnswer: "b",
          explanation:
            "Soap MacTavish. Blessé pendant une mission à Prague, il meurt dans les bras de Price après lui avoir dit que Makarov connaissait Yuri, un autre membre du groupe.",
        },
        {
          id: 14,
          question: "Qui tue Makarov à la fin de Modern Warfare 3 (2011) ?",
          answers: [
            { id: "a", text: "Le capitaine Price" },
            { id: "b", text: "Le général Shepherd" },
          ],
          correctAnswer: "a",
          explanation:
            "Le capitaine Price, sur le toit d'un hôtel de Dubaï, en le pendant avec un câble. Shepherd ne pouvait pas le faire : Price l'avait déjà tué à la fin de Modern Warfare 2.",
        },
        {
          id: 15,
          question: "Dans World at War, avec quel soldat soviétique Reznov se bat-il jusqu'à Berlin ?",
          answers: [
            { id: "a", text: "Dimitri Petrenko" },
            { id: "b", text: "Alex Mason" },
          ],
          correctAnswer: "a",
          explanation:
            "Dimitri Petrenko, le soldat que joue le joueur dans la campagne soviétique. Reznov le sauve au début du jeu, à Stalingrad. Alex Mason n'arrive qu'avec Black Ops.",
        },
        {
          id: 16,
          question: "Dans Black Ops, quel soldat américain accompagne Alex Mason dans ses missions ?",
          answers: [
            { id: "a", text: "Soap MacTavish" },
            { id: "b", text: "Frank Woods" },
          ],
          correctAnswer: "b",
          explanation:
            "Frank Woods, son meilleur ami et son partenaire sur le terrain. On le retrouve dans Black Ops II, âgé, dans une maison de retraite où il raconte ses souvenirs.",
        },
        {
          id: 17,
          question: "Quel acteur de Game of Thrones joue le méchant d'Infinite Warfare ?",
          answers: [
            { id: "a", text: "Kit Harington" },
            { id: "b", text: "Sean Bean" },
          ],
          correctAnswer: "a",
          explanation:
            "Kit Harington, le Jon Snow de la série. Il joue l'amiral Salen Kotch, le chef des forces qui attaquent la Terre depuis Mars.",
        },
        {
          id: 18,
          question: "Dans Modern Warfare (2019), qui dirige les combattants qui libèrent l'Urzikstan ?",
          answers: [
            { id: "a", text: "Valeria Garza" },
            { id: "b", text: "Farah Karim" },
          ],
          correctAnswer: "b",
          explanation:
            "Farah Karim, qui se bat depuis l'enfance contre l'armée russe dans son pays. Valeria Garza, c'est la cheffe de cartel de Modern Warfare II, sorti en 2022.",
        },
        {
          id: 19,
          question: "Dans Black Ops Cold War, quel espion soviétique la CIA traque-t-elle ?",
          answers: [
            { id: "a", text: "Perseus" },
            { id: "b", text: "Makarov" },
          ],
          correctAnswer: "a",
          explanation:
            "Perseus, un agent soviétique dont on ne connaît que le nom de code. Le jeu se passe en 1981, et l'équipe de Russell Adler essaie de l'empêcher de faire exploser des bombes nucléaires en Europe.",
        },
        {
          id: 20,
          question: "Dans quel jeu un capitaine Price apparaît-il pour la toute première fois ?",
          answers: [
            { id: "a", text: "Call of Duty 4" },
            { id: "b", text: "Le premier Call of Duty (2003)" },
          ],
          correctAnswer: "b",
          explanation:
            "Le premier Call of Duty, en 2003. Il y commande les soldats britanniques pendant la Seconde Guerre mondiale. Le John Price de Call of Duty 4 est arrivé ensuite.",
        },
      ],
    },
    en: {
      title: "Call of Duty duel: the characters",
      description:
        "Price, Ghost, Soap, Makarov, Mason, Reznov and more: twenty duels about Call of Duty characters. Only one of the two answers is right!",
      questions: [
        {
          id: 1,
          image: "/images/q-call-of-duty-personnages-01.webp",
          question: "What is Captain Price's first name?",
          answers: [
            { id: "a", text: "John" },
            { id: "b", text: "James" },
          ],
          correctAnswer: "a",
          explanation:
            "John. Captain John Price shows up from Call of Duty 4 onward, and he's the one leading Task Force 141 in the Modern Warfare games.",
        },
        {
          id: 2,
          image: "/images/q-call-of-duty-personnages-02.webp",
          question: "What is the real name of Ghost, the soldier with the skull mask?",
          answers: [
            { id: "a", text: "John MacTavish" },
            { id: "b", text: "Simon Riley" },
          ],
          correctAnswer: "b",
          explanation:
            "Simon Riley. John MacTavish is Soap, another member of Task Force 141.",
        },
        {
          id: 3,
          image: "/images/q-call-of-duty-personnages-03.webp",
          question: "Which actor plays Jonathan Irons, the main villain of Advanced Warfare?",
          answers: [
            { id: "a", text: "Keanu Reeves" },
            { id: "b", text: "Kevin Spacey" },
          ],
          correctAnswer: "b",
          explanation:
            "Kevin Spacey, who gave his voice and face to the head of the private military company Atlas. Keanu Reeves was in Cyberpunk 2077.",
        },
        {
          id: 4,
          question: "In Modern Warfare 2 (2009), who betrays Task Force 141 and shoots Ghost and Roach?",
          answers: [
            { id: "a", text: "General Shepherd" },
            { id: "b", text: "Vladimir Makarov" },
          ],
          correctAnswer: "a",
          explanation:
            "General Shepherd, an American general. It's one of the best-known scenes in the series, and Price and Soap spend the end of the game hunting him down.",
        },
        {
          id: 5,
          question: "Who leads the airport attack in the \"No Russian\" mission of Modern Warfare 2?",
          answers: [
            { id: "a", text: "Imran Zakhaev" },
            { id: "b", text: "Vladimir Makarov" },
          ],
          correctAnswer: "b",
          explanation:
            "Vladimir Makarov, a Russian terrorist. Imran Zakhaev is the villain of Call of Duty 4, and Makarov used to be one of his loyal men.",
        },
        {
          id: 6,
          image: "/images/q-call-of-duty-personnages-06.webp",
          question: "Who's the hero of Black Ops, released in 2010?",
          answers: [
            { id: "a", text: "Alex Mason" },
            { id: "b", text: "David Mason" },
          ],
          correctAnswer: "a",
          explanation:
            "Alex Mason, a CIA operative haunted by a string of numbers. David Mason is his son, the hero of Black Ops II.",
        },
        {
          id: 7,
          question: "Who's the main villain of Black Ops II?",
          answers: [
            { id: "a", text: "Nikita Dragovich" },
            { id: "b", text: "Raul Menendez" },
          ],
          correctAnswer: "b",
          explanation:
            "Raul Menendez, a Nicaraguan arms dealer out for revenge on the Mason family. Dragovich is the Soviet general from the first Black Ops.",
        },
        {
          id: 8,
          image: "/images/q-call-of-duty-personnages-08.webp",
          question: "In which game does Viktor Reznov first appear?",
          answers: [
            { id: "a", text: "World at War" },
            { id: "b", text: "Black Ops" },
          ],
          correctAnswer: "a",
          explanation:
            "World at War, in 2008, where the Soviet soldier fights all the way to Berlin. He's back in Black Ops, alongside Alex Mason in the Vorkuta gulag.",
        },
        {
          id: 9,
          question: "In the Chernobyl missions of Call of Duty 4, who's with young Price?",
          answers: [
            { id: "a", text: "Sergeant Griggs" },
            { id: "b", text: "Captain MacMillan" },
          ],
          correctAnswer: "b",
          explanation:
            "Captain MacMillan, his commanding officer at the time. The two of them sneak through Pripyat in ghillie suits to try to take out Zakhaev.",
        },
        {
          id: 10,
          question: "In Zombies mode, which character is a German scientist?",
          answers: [
            { id: "a", text: "Edward Richtofen" },
            { id: "b", text: "Tank Dempsey" },
          ],
          correctAnswer: "a",
          explanation:
            "Edward Richtofen, a scientist from Group 935, the organization that created the zombies. Tank Dempsey is an American marine.",
        },
        {
          id: 11,
          question: "In Call of Duty 4, which SAS soldier does the player control?",
          answers: [
            { id: "a", text: "Captain Price" },
            { id: "b", text: "Soap MacTavish" },
          ],
          correctAnswer: "b",
          explanation:
            "Soap MacTavish, a young sergeant who has just joined Captain Price's team. Price is his team leader.",
        },
        {
          id: 12,
          question: "In Call of Duty 4, which US Marine dies after the nuclear bomb goes off?",
          answers: [
            { id: "a", text: "Paul Jackson" },
            { id: "b", text: "Frank Woods" },
          ],
          correctAnswer: "a",
          explanation:
            "Sergeant Paul Jackson. His helicopter goes down in the blast, and he dies a few moments later in the ruins. It's one of the most memorable scenes in the game.",
        },
        {
          id: 13,
          question: "Which Task Force 141 member dies in Modern Warfare 3 (2011)?",
          answers: [
            { id: "a", text: "Captain Price" },
            { id: "b", text: "Soap MacTavish" },
          ],
          correctAnswer: "b",
          explanation:
            "Soap MacTavish. Wounded during a mission in Prague, he dies in Price's arms after telling him that Makarov knew Yuri, another member of the group.",
        },
        {
          id: 14,
          question: "Who kills Makarov at the end of Modern Warfare 3 (2011)?",
          answers: [
            { id: "a", text: "Captain Price" },
            { id: "b", text: "General Shepherd" },
          ],
          correctAnswer: "a",
          explanation:
            "Captain Price, on the roof of a hotel in Dubai, by hanging him with a cable. Shepherd couldn't have done it: Price had already killed him at the end of Modern Warfare 2.",
        },
        {
          id: 15,
          question: "In World at War, which Soviet soldier fights alongside Reznov all the way to Berlin?",
          answers: [
            { id: "a", text: "Dimitri Petrenko" },
            { id: "b", text: "Alex Mason" },
          ],
          correctAnswer: "a",
          explanation:
            "Dimitri Petrenko, the soldier you play in the Soviet campaign. Reznov saves him at the start of the game, in Stalingrad. Alex Mason only shows up in Black Ops.",
        },
        {
          id: 16,
          question: "In Black Ops, which American soldier goes on missions with Alex Mason?",
          answers: [
            { id: "a", text: "Soap MacTavish" },
            { id: "b", text: "Frank Woods" },
          ],
          correctAnswer: "b",
          explanation:
            "Frank Woods, his best friend and partner in the field. He's back in Black Ops II as an old man in a retirement home, telling his memories.",
        },
        {
          id: 17,
          question: "Which Game of Thrones actor plays the villain in Infinite Warfare?",
          answers: [
            { id: "a", text: "Kit Harington" },
            { id: "b", text: "Sean Bean" },
          ],
          correctAnswer: "a",
          explanation:
            "Kit Harington, Jon Snow in the show. He plays Admiral Salen Kotch, the leader of the forces attacking Earth from Mars.",
        },
        {
          id: 18,
          question: "In Modern Warfare (2019), who leads the fighters freeing Urzikstan?",
          answers: [
            { id: "a", text: "Valeria Garza" },
            { id: "b", text: "Farah Karim" },
          ],
          correctAnswer: "b",
          explanation:
            "Farah Karim, who has been fighting the Russian army in her country since childhood. Valeria Garza is the cartel boss from Modern Warfare II, released in 2022.",
        },
        {
          id: 19,
          question: "In Black Ops Cold War, which Soviet spy is the CIA hunting?",
          answers: [
            { id: "a", text: "Perseus" },
            { id: "b", text: "Makarov" },
          ],
          correctAnswer: "a",
          explanation:
            "Perseus, a Soviet agent known only by his code name. The game is set in 1981, and Russell Adler's team tries to stop him from setting off nuclear bombs in Europe.",
        },
        {
          id: 20,
          question: "In which game does a Captain Price appear for the very first time?",
          answers: [
            { id: "a", text: "Call of Duty 4" },
            { id: "b", text: "The first Call of Duty (2003)" },
          ],
          correctAnswer: "b",
          explanation:
            "The first Call of Duty, in 2003. He leads the British soldiers during the Second World War. The John Price of Call of Duty 4 came later.",
        },
      ],
    },
    es: {
      title: "Duelo Call of Duty: los personajes",
      description:
        "Price, Ghost, Soap, Makarov, Mason o Reznov: veinte duelos sobre los personajes de Call of Duty. ¡Solo una de las dos respuestas es la buena!",
      questions: [
        {
          id: 1,
          image: "/images/q-call-of-duty-personnages-01.webp",
          question: "¿Cuál es el nombre del capitán Price?",
          answers: [
            { id: "a", text: "John" },
            { id: "b", text: "James" },
          ],
          correctAnswer: "a",
          explanation:
            "John. El capitán John Price aparece desde Call of Duty 4, y es quien dirige la Task Force 141 en los Modern Warfare.",
        },
        {
          id: 2,
          image: "/images/q-call-of-duty-personnages-02.webp",
          question: "¿Cuál es el nombre real de Ghost, el soldado de la máscara de calavera?",
          answers: [
            { id: "a", text: "John MacTavish" },
            { id: "b", text: "Simon Riley" },
          ],
          correctAnswer: "b",
          explanation:
            "Simon Riley. John MacTavish es Soap, otro miembro de la Task Force 141.",
        },
        {
          id: 3,
          image: "/images/q-call-of-duty-personnages-03.webp",
          question: "¿Qué actor interpreta a Jonathan Irons, el gran villano de Advanced Warfare?",
          answers: [
            { id: "a", text: "Keanu Reeves" },
            { id: "b", text: "Kevin Spacey" },
          ],
          correctAnswer: "b",
          explanation:
            "Kevin Spacey, que puso voz y cara al jefe de la empresa militar Atlas. Keanu Reeves salió en Cyberpunk 2077.",
        },
        {
          id: 4,
          question: "En Modern Warfare 2 (2009), ¿quién traiciona a la Task Force 141 y dispara a Ghost y a Roach?",
          answers: [
            { id: "a", text: "El general Shepherd" },
            { id: "b", text: "Vladimir Makarov" },
          ],
          correctAnswer: "a",
          explanation:
            "El general Shepherd, un general estadounidense. Es una de las escenas más conocidas de la saga, y Price y Soap pasan el final del juego persiguiéndolo.",
        },
        {
          id: 5,
          question: "¿Quién dirige el ataque al aeropuerto en la misión «Nada de ruso» de Modern Warfare 2?",
          answers: [
            { id: "a", text: "Imran Zakhaev" },
            { id: "b", text: "Vladimir Makarov" },
          ],
          correctAnswer: "b",
          explanation:
            "Vladimir Makarov, un terrorista ruso. Imran Zakhaev es el villano de Call of Duty 4, y Makarov era justamente uno de sus fieles.",
        },
        {
          id: 6,
          image: "/images/q-call-of-duty-personnages-06.webp",
          question: "¿Quién es el protagonista de Black Ops, lanzado en 2010?",
          answers: [
            { id: "a", text: "Alex Mason" },
            { id: "b", text: "David Mason" },
          ],
          correctAnswer: "a",
          explanation:
            "Alex Mason, un agente de la CIA obsesionado con una serie de números. David Mason es su hijo, el protagonista de Black Ops II.",
        },
        {
          id: 7,
          question: "¿Quién es el gran villano de Black Ops II?",
          answers: [
            { id: "a", text: "Nikita Dragovich" },
            { id: "b", text: "Raul Menendez" },
          ],
          correctAnswer: "b",
          explanation:
            "Raul Menendez, un traficante nicaragüense que quiere vengarse de la familia Mason. Dragovich es el general soviético del primer Black Ops.",
        },
        {
          id: 8,
          image: "/images/q-call-of-duty-personnages-08.webp",
          question: "¿En qué juego aparece Viktor Reznov por primera vez?",
          answers: [
            { id: "a", text: "World at War" },
            { id: "b", text: "Black Ops" },
          ],
          correctAnswer: "a",
          explanation:
            "World at War, en 2008, donde este soldado soviético lucha hasta Berlín. Vuelve en Black Ops, junto a Alex Mason en el gulag de Vorkutá.",
        },
        {
          id: 9,
          question: "En las misiones de Chernóbil de Call of Duty 4, ¿quién acompaña al joven Price?",
          answers: [
            { id: "a", text: "El sargento Griggs" },
            { id: "b", text: "El capitán MacMillan" },
          ],
          correctAnswer: "b",
          explanation:
            "El capitán MacMillan, su superior en aquella época. Los dos avanzan con traje de camuflaje por Prípiat para intentar acabar con Zakhaev.",
        },
        {
          id: 10,
          question: "En el modo Zombis, ¿qué personaje es un científico alemán?",
          answers: [
            { id: "a", text: "Edward Richtofen" },
            { id: "b", text: "Tank Dempsey" },
          ],
          correctAnswer: "a",
          explanation:
            "Edward Richtofen, un científico del Grupo 935, la organización que creó a los zombis. Tank Dempsey es un marine estadounidense.",
        },
        {
          id: 11,
          question: "En Call of Duty 4, ¿qué soldado del SAS controla el jugador?",
          answers: [
            { id: "a", text: "El capitán Price" },
            { id: "b", text: "Soap MacTavish" },
          ],
          correctAnswer: "b",
          explanation:
            "Soap MacTavish, un joven sargento que acaba de llegar al equipo del capitán Price. Price es el jefe de su equipo.",
        },
        {
          id: 12,
          question: "En Call of Duty 4, ¿qué marine estadounidense muere tras la explosión de la bomba nuclear?",
          answers: [
            { id: "a", text: "Paul Jackson" },
            { id: "b", text: "Frank Woods" },
          ],
          correctAnswer: "a",
          explanation:
            "El sargento Paul Jackson. Su helicóptero cae por la onda expansiva, y muere unos instantes después entre las ruinas. Es una de las escenas más recordadas del juego.",
        },
        {
          id: 13,
          question: "¿Qué miembro de la Task Force 141 muere en Modern Warfare 3 (2011)?",
          answers: [
            { id: "a", text: "El capitán Price" },
            { id: "b", text: "Soap MacTavish" },
          ],
          correctAnswer: "b",
          explanation:
            "Soap MacTavish. Herido durante una misión en Praga, muere en brazos de Price después de decirle que Makarov conocía a Yuri, otro miembro del grupo.",
        },
        {
          id: 14,
          question: "¿Quién mata a Makarov al final de Modern Warfare 3 (2011)?",
          answers: [
            { id: "a", text: "El capitán Price" },
            { id: "b", text: "El general Shepherd" },
          ],
          correctAnswer: "a",
          explanation:
            "El capitán Price, en la azotea de un hotel de Dubái, ahorcándolo con un cable. Shepherd no podía ser: Price ya lo había matado al final de Modern Warfare 2.",
        },
        {
          id: 15,
          question: "En World at War, ¿con qué soldado soviético lucha Reznov hasta Berlín?",
          answers: [
            { id: "a", text: "Dimitri Petrenko" },
            { id: "b", text: "Alex Mason" },
          ],
          correctAnswer: "a",
          explanation:
            "Dimitri Petrenko, el soldado que maneja el jugador en la campaña soviética. Reznov lo salva al principio del juego, en Stalingrado. Alex Mason no aparece hasta Black Ops.",
        },
        {
          id: 16,
          question: "En Black Ops, ¿qué soldado estadounidense acompaña a Alex Mason en sus misiones?",
          answers: [
            { id: "a", text: "Soap MacTavish" },
            { id: "b", text: "Frank Woods" },
          ],
          correctAnswer: "b",
          explanation:
            "Frank Woods, su mejor amigo y compañero sobre el terreno. Vuelve en Black Ops II ya mayor, en una residencia, contando sus recuerdos.",
        },
        {
          id: 17,
          question: "¿Qué actor de Juego de tronos interpreta al villano de Infinite Warfare?",
          answers: [
            { id: "a", text: "Kit Harington" },
            { id: "b", text: "Sean Bean" },
          ],
          correctAnswer: "a",
          explanation:
            "Kit Harington, el Jon Nieve de la serie. Interpreta al almirante Salen Kotch, el jefe de las fuerzas que atacan la Tierra desde Marte.",
        },
        {
          id: 18,
          question: "En Modern Warfare (2019), ¿quién dirige a los combatientes que liberan Urzikistán?",
          answers: [
            { id: "a", text: "Valeria Garza" },
            { id: "b", text: "Farah Karim" },
          ],
          correctAnswer: "b",
          explanation:
            "Farah Karim, que lucha contra el ejército ruso en su país desde que era niña. Valeria Garza es la jefa del cártel de Modern Warfare II, de 2022.",
        },
        {
          id: 19,
          question: "En Black Ops Cold War, ¿a qué espía soviético persigue la CIA?",
          answers: [
            { id: "a", text: "Perseus" },
            { id: "b", text: "Makarov" },
          ],
          correctAnswer: "a",
          explanation:
            "Perseus, un agente soviético del que solo se conoce el nombre en clave. El juego transcurre en 1981, y el equipo de Russell Adler intenta impedir que haga estallar bombas nucleares en Europa.",
        },
        {
          id: 20,
          question: "¿En qué juego aparece por primera vez un capitán Price?",
          answers: [
            { id: "a", text: "Call of Duty 4" },
            { id: "b", text: "El primer Call of Duty (2003)" },
          ],
          correctAnswer: "b",
          explanation:
            "En el primer Call of Duty, de 2003. Allí dirige a los soldados británicos durante la Segunda Guerra Mundial. El John Price de Call of Duty 4 llegó después.",
        },
      ],
    },
  },
};

export default [quizCallOfDutyPersonnages] as TranslatedQuiz[];
