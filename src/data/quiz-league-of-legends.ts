import type { TranslatedQuiz } from "./types";

/**
 * Quiz League of Legends en mode duel : vingt questions à deux propositions.
 *
 * Le moteur n'affiche que answers[0] et answers[1] (DuelPlayer), donc
 * exactement deux réponses par question. La bonne réponse alterne entre la
 * première et la seconde place. Le palmarès de Faker est daté (six titres
 * après les Worlds 2025) dans l'explication, la question elle-même ne bouge
 * pas d'une saison à l'autre.
 */
export const quizLeagueOfLegends: TranslatedQuiz = {
  slug: "quiz-league-of-legends",
  slugs: { en: "league-of-legends-quiz", fr: "quiz-league-of-legends", es: "quiz-league-of-legends" },
  categorySlug: "jeux-video",
  subcategory: "League of Legends",
  difficulty: "medium",
  coverImage: "/images/sub-league-of-legends.webp",
  gameType: "duel",
  playCount: 6300,
  translations: {
    fr: {
      title: "Duel League of Legends : lequel des deux ?",
      description:
        "Vingt duels sur League of Legends : la Faille, les Worlds, Faker, Arcane... Deux propositions à chaque fois, une seule est la bonne.",
      questions: [
        {
          id: 1,
          question: "Quel studio a créé League of Legends ?",
          answers: [
            { id: "a", text: "Riot Games" },
            { id: "b", text: "Blizzard Entertainment" },
          ],
          correctAnswer: "a",
          explanation:
            "Riot Games, un studio américain fondé en 2006. Blizzard, c'est World of Warcraft, Overwatch ou encore Diablo.",
        },
        {
          id: 2,
          question: "En quelle année League of Legends est-il sorti ?",
          answers: [
            { id: "a", text: "2012" },
            { id: "b", text: "2009" },
          ],
          correctAnswer: "b",
          explanation:
            "En 2009, le 27 octobre. Le jeu est gratuit depuis le début, et Riot se rémunère avec les skins.",
        },
        {
          id: 3,
          question: "Sur quelle carte se joue le mode classique en 5 contre 5 ?",
          answers: [
            { id: "a", text: "La Faille de l'invocateur" },
            { id: "b", text: "L'Abîme hurlant" },
          ],
          correctAnswer: "a",
          explanation:
            "La Faille de l'invocateur, avec ses trois voies et sa jungle. L'Abîme hurlant, c'est la carte à une seule voie du mode ARAM.",
        },
        {
          id: 4,
          image: "/images/q-league-of-legends-04.webp",
          question: "Quel joueur a gagné le plus de championnats du monde ?",
          answers: [
            { id: "a", text: "Uzi" },
            { id: "b", text: "Faker" },
          ],
          correctAnswer: "b",
          explanation:
            "Faker, avec T1. Il a six titres après les Worlds 2025 : 2013, 2015, 2016, 2023, 2024 et 2025. Uzi, lui, n'a jamais gagné les Worlds.",
        },
        {
          id: 5,
          image: "/images/q-league-of-legends-05.webp",
          question: "Dans la série Arcane, qui est la sœur de Vi ?",
          answers: [
            { id: "a", text: "Caitlyn" },
            { id: "b", text: "Jinx" },
          ],
          correctAnswer: "b",
          explanation:
            "Jinx, qui s'appelait Powder quand elle était petite. Caitlyn est l'enquêtrice de Piltover qui fait équipe avec Vi.",
        },
        {
          id: 6,
          question: "Combien de joueurs compte une équipe en partie classique ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
          ],
          correctAnswer: "a",
          explanation:
            "Cinq : un joueur en haut, un dans la jungle, un au milieu, et deux en bas, le tireur et le support.",
        },
        {
          id: 7,
          image: "/images/q-league-of-legends-07.webp",
          question: "Le nom du Baron Nashor est l'anagramme d'un monstre de quel jeu ?",
          answers: [
            { id: "a", text: "World of Warcraft" },
            { id: "b", text: "DotA" },
          ],
          correctAnswer: "b",
          explanation:
            "DotA. Nashor s'écrit avec les lettres de Roshan, le gros monstre neutre de DotA. Plusieurs créateurs de League of Legends venaient justement de la communauté DotA.",
        },
        {
          id: 8,
          question: "Quelle équipe a gagné le tout premier championnat du monde, en 2011 ?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "SK Telecom T1" },
          ],
          correctAnswer: "a",
          explanation:
            "Fnatic, une équipe européenne, à la DreamHack en Suède. SK Telecom T1, l'équipe de Faker, n'a gagné son premier titre qu'en 2013.",
        },
        {
          id: 9,
          question: "Quel bâtiment faut-il détruire pour gagner une partie ?",
          answers: [
            { id: "a", text: "L'inhibiteur" },
            { id: "b", text: "Le Nexus" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Nexus, dans la base adverse. Détruire un inhibiteur fait apparaître des super sbires, mais ça ne suffit pas pour gagner.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-10.webp",
          question: "Dans quelle ville s'est jouée la finale des Worlds 2019 ?",
          answers: [
            { id: "a", text: "Paris" },
            { id: "b", text: "Berlin" },
          ],
          correctAnswer: "a",
          explanation:
            "Paris, à l'AccorHotels Arena de Bercy. FunPlus Phoenix y a battu G2 Esports 3 à 0.",
        },
        {
          id: 11,
          question: "Quel studio français a animé la série Arcane ?",
          answers: [
            { id: "a", text: "Fortiche" },
            { id: "b", text: "Ubisoft" },
          ],
          correctAnswer: "a",
          explanation:
            "Fortiche, un studio basé à Paris. Il travaille avec Riot Games depuis 2013, d'abord sur des clips pour League of Legends.",
        },
        {
          id: 12,
          question: "Comment s'appelle le monde où se passent les histoires de League of Legends ?",
          answers: [
            { id: "a", text: "Azeroth" },
            { id: "b", text: "Runeterra" },
          ],
          correctAnswer: "b",
          explanation:
            "Runeterra, avec ses régions comme Demacia, Ionia ou encore Freljord. Azeroth, c'est le monde de World of Warcraft.",
        },
        {
          id: 13,
          question: "Quelle entreprise chinoise possède Riot Games ?",
          answers: [
            { id: "a", text: "Tencent" },
            { id: "b", text: "Alibaba" },
          ],
          correctAnswer: "a",
          explanation:
            "Tencent. Le groupe a acheté 93 % de Riot en 2011, puis le reste en 2015.",
        },
        {
          id: 14,
          question: "Combien de saisons compte la série Arcane ?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "2" },
          ],
          correctAnswer: "b",
          explanation:
            "Deux. La première est sortie sur Netflix en novembre 2021, la seconde en novembre 2024, et l'histoire de Vi et Jinx s'arrête là.",
        },
        {
          id: 15,
          question: "Quel groupe virtuel de League of Legends chante « Pop/Stars » ?",
          answers: [
            { id: "a", text: "K/DA" },
            { id: "b", text: "True Damage" },
          ],
          correctAnswer: "a",
          explanation:
            "K/DA, avec Ahri, Akali, Evelynn et Kai'Sa. La chanson a été jouée pour la première fois à la cérémonie d'ouverture des Worlds 2018, en Corée du Sud.",
        },
        {
          id: 16,
          question: "Quelle actrice prête sa voix à Jinx dans Arcane, en version originale ?",
          answers: [
            { id: "a", text: "Hailee Steinfeld" },
            { id: "b", text: "Ella Purnell" },
          ],
          correctAnswer: "b",
          explanation:
            "Ella Purnell. Hailee Steinfeld, elle aussi au casting, fait la voix de Vi.",
        },
        {
          id: 17,
          question: "Combien de dragons élémentaires faut-il tuer pour obtenir l'âme du dragon ?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
          ],
          correctAnswer: "a",
          explanation:
            "Quatre. La première équipe qui en tue quatre gagne l'âme, un bonus qui dépend de l'élément qui domine la carte.",
        },
        {
          id: 18,
          question: "Quel jeu adapte League of Legends sur téléphone, avec des parties plus courtes ?",
          answers: [
            { id: "a", text: "Legends of Runeterra" },
            { id: "b", text: "Wild Rift" },
          ],
          correctAnswer: "b",
          explanation:
            "Wild Rift, sorti en 2020 sur Android et iOS. Legends of Runeterra, c'est un jeu de cartes dans le même univers.",
        },
        {
          id: 19,
          question: "Quel sort d'invocateur téléporte le champion à courte distance ?",
          answers: [
            { id: "a", text: "Saut éclair" },
            { id: "b", text: "Soins" },
          ],
          correctAnswer: "a",
          explanation:
            "Saut éclair, Flash en anglais. Il se recharge en 5 minutes, et presque tous les joueurs le prennent. Soins, lui, redonne de la vie.",
        },
        {
          id: 20,
          question: "Quel mode de Riot, sorti en 2019, consiste à placer des champions sur un plateau ?",
          answers: [
            { id: "a", text: "Arena" },
            { id: "b", text: "Teamfight Tactics" },
          ],
          correctAnswer: "b",
          explanation:
            "Teamfight Tactics, qu'on appelle souvent TFT. Les combats se jouent tout seuls, le joueur choisit les champions et leur place sur le plateau.",
        },
      ],
    },
    en: {
      title: "League of Legends duel: which one is it?",
      description:
        "Twenty League of Legends duels: the Rift, Worlds, Faker, Arcane and more. Two options each time, and only one is right.",
      questions: [
        {
          id: 1,
          question: "Which studio made League of Legends?",
          answers: [
            { id: "a", text: "Riot Games" },
            { id: "b", text: "Blizzard Entertainment" },
          ],
          correctAnswer: "a",
          explanation:
            "Riot Games, an American studio founded in 2006. Blizzard is the studio behind World of Warcraft, Overwatch and Diablo.",
        },
        {
          id: 2,
          question: "In what year did League of Legends come out?",
          answers: [
            { id: "a", text: "2012" },
            { id: "b", text: "2009" },
          ],
          correctAnswer: "b",
          explanation:
            "2009, on October 27. The game has been free from the start, and Riot makes its money from skins.",
        },
        {
          id: 3,
          question: "Which map is the classic 5v5 mode played on?",
          answers: [
            { id: "a", text: "Summoner's Rift" },
            { id: "b", text: "Howling Abyss" },
          ],
          correctAnswer: "a",
          explanation:
            "Summoner's Rift, with its three lanes and its jungle. Howling Abyss is the single-lane map used for ARAM.",
        },
        {
          id: 4,
          image: "/images/q-league-of-legends-04.webp",
          question: "Which player has won the most World Championships?",
          answers: [
            { id: "a", text: "Uzi" },
            { id: "b", text: "Faker" },
          ],
          correctAnswer: "b",
          explanation:
            "Faker, with T1. He has six titles after Worlds 2025: 2013, 2015, 2016, 2023, 2024 and 2025. Uzi never won Worlds.",
        },
        {
          id: 5,
          image: "/images/q-league-of-legends-05.webp",
          question: "In Arcane, who is Vi's sister?",
          answers: [
            { id: "a", text: "Caitlyn" },
            { id: "b", text: "Jinx" },
          ],
          correctAnswer: "b",
          explanation:
            "Jinx, who was called Powder as a kid. Caitlyn is the Piltover enforcer who teams up with Vi.",
        },
        {
          id: 6,
          question: "How many players are on a team in a classic match?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
          ],
          correctAnswer: "a",
          explanation:
            "Five: one in the top lane, one in the jungle, one in mid, and two in the bottom lane, the marksman and the support.",
        },
        {
          id: 7,
          image: "/images/q-league-of-legends-07.webp",
          question: "Baron Nashor's name is an anagram of a monster from which game?",
          answers: [
            { id: "a", text: "World of Warcraft" },
            { id: "b", text: "DotA" },
          ],
          correctAnswer: "b",
          explanation:
            "DotA. Nashor uses the letters of Roshan, the big neutral monster in DotA. Several of League's creators came from the DotA community.",
        },
        {
          id: 8,
          question: "Which team won the very first World Championship, in 2011?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "SK Telecom T1" },
          ],
          correctAnswer: "a",
          explanation:
            "Fnatic, a European team, at DreamHack in Sweden. SK Telecom T1, Faker's team, only won its first title in 2013.",
        },
        {
          id: 9,
          question: "Which structure do you have to destroy to win a match?",
          answers: [
            { id: "a", text: "The inhibitor" },
            { id: "b", text: "The Nexus" },
          ],
          correctAnswer: "b",
          explanation:
            "The Nexus, inside the enemy base. Taking down an inhibitor spawns super minions, but it doesn't win you the game.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-10.webp",
          question: "In which city was the Worlds 2019 final played?",
          answers: [
            { id: "a", text: "Paris" },
            { id: "b", text: "Berlin" },
          ],
          correctAnswer: "a",
          explanation:
            "Paris, at the AccorHotels Arena. FunPlus Phoenix beat G2 Esports 3-0 there.",
        },
        {
          id: 11,
          question: "Which French studio animated the series Arcane?",
          answers: [
            { id: "a", text: "Fortiche" },
            { id: "b", text: "Ubisoft" },
          ],
          correctAnswer: "a",
          explanation:
            "Fortiche, a studio based in Paris. It has worked with Riot Games since 2013, starting with music videos for League of Legends.",
        },
        {
          id: 12,
          question: "What's the name of the world where League of Legends stories take place?",
          answers: [
            { id: "a", text: "Azeroth" },
            { id: "b", text: "Runeterra" },
          ],
          correctAnswer: "b",
          explanation:
            "Runeterra, with regions like Demacia, Ionia and the Freljord. Azeroth is the world of World of Warcraft.",
        },
        {
          id: 13,
          question: "Which Chinese company owns Riot Games?",
          answers: [
            { id: "a", text: "Tencent" },
            { id: "b", text: "Alibaba" },
          ],
          correctAnswer: "a",
          explanation:
            "Tencent. It bought 93% of Riot in 2011, then the rest in 2015.",
        },
        {
          id: 14,
          question: "How many seasons does Arcane have?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "2" },
          ],
          correctAnswer: "b",
          explanation:
            "Two. The first came out on Netflix in November 2021, the second in November 2024, and that's where Vi and Jinx's story ends.",
        },
        {
          id: 15,
          question: "Which League of Legends virtual group sings \"Pop/Stars\"?",
          answers: [
            { id: "a", text: "K/DA" },
            { id: "b", text: "True Damage" },
          ],
          correctAnswer: "a",
          explanation:
            "K/DA, made up of Ahri, Akali, Evelynn and Kai'Sa. The song was first performed at the Worlds 2018 opening ceremony, in South Korea.",
        },
        {
          id: 16,
          question: "Which actress voices Jinx in the original version of Arcane?",
          answers: [
            { id: "a", text: "Hailee Steinfeld" },
            { id: "b", text: "Ella Purnell" },
          ],
          correctAnswer: "b",
          explanation:
            "Ella Purnell. Hailee Steinfeld is also in the cast, as the voice of Vi.",
        },
        {
          id: 17,
          question: "How many elemental dragons do you need to kill to get the Dragon Soul?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
          ],
          correctAnswer: "a",
          explanation:
            "Four. The first team to kill four gets the soul, a bonus that depends on the element ruling the map.",
        },
        {
          id: 18,
          question: "Which game brings League of Legends to phones, with shorter matches?",
          answers: [
            { id: "a", text: "Legends of Runeterra" },
            { id: "b", text: "Wild Rift" },
          ],
          correctAnswer: "b",
          explanation:
            "Wild Rift, released in 2020 on Android and iOS. Legends of Runeterra is a card game set in the same universe.",
        },
        {
          id: 19,
          question: "Which summoner spell teleports your champion a short distance?",
          answers: [
            { id: "a", text: "Flash" },
            { id: "b", text: "Heal" },
          ],
          correctAnswer: "a",
          explanation:
            "Flash. It has a 5-minute cooldown and almost every player takes it. Heal gives back some health.",
        },
        {
          id: 20,
          question: "Which Riot mode, released in 2019, has you place champions on a board?",
          answers: [
            { id: "a", text: "Arena" },
            { id: "b", text: "Teamfight Tactics" },
          ],
          correctAnswer: "b",
          explanation:
            "Teamfight Tactics, often called TFT. The fights play out on their own: the player picks the champions and where they stand on the board.",
        },
      ],
    },
    es: {
      title: "Duelo League of Legends: ¿cuál de los dos?",
      description:
        "Veinte duelos sobre League of Legends: la Grieta, los Worlds, Faker, Arcane... Dos opciones cada vez y solo una es la buena.",
      questions: [
        {
          id: 1,
          question: "¿Qué estudio creó League of Legends?",
          answers: [
            { id: "a", text: "Riot Games" },
            { id: "b", text: "Blizzard Entertainment" },
          ],
          correctAnswer: "a",
          explanation:
            "Riot Games, un estudio estadounidense fundado en 2006. Blizzard es el de World of Warcraft, Overwatch o Diablo.",
        },
        {
          id: 2,
          question: "¿En qué año salió League of Legends?",
          answers: [
            { id: "a", text: "2012" },
            { id: "b", text: "2009" },
          ],
          correctAnswer: "b",
          explanation:
            "En 2009, el 27 de octubre. El juego es gratuito desde el principio y Riot gana dinero con las skins.",
        },
        {
          id: 3,
          question: "¿En qué mapa se juega el modo clásico de 5 contra 5?",
          answers: [
            { id: "a", text: "La Grieta del Invocador" },
            { id: "b", text: "El Abismo de los Lamentos" },
          ],
          correctAnswer: "a",
          explanation:
            "La Grieta del Invocador, con sus tres calles y su jungla. El Abismo de los Lamentos es el mapa de una sola calle del modo ARAM.",
        },
        {
          id: 4,
          image: "/images/q-league-of-legends-04.webp",
          question: "¿Qué jugador ha ganado más campeonatos del mundo?",
          answers: [
            { id: "a", text: "Uzi" },
            { id: "b", text: "Faker" },
          ],
          correctAnswer: "b",
          explanation:
            "Faker, con T1. Tiene seis títulos tras los Worlds 2025: 2013, 2015, 2016, 2023, 2024 y 2025. Uzi nunca ganó los Worlds.",
        },
        {
          id: 5,
          image: "/images/q-league-of-legends-05.webp",
          question: "En la serie Arcane, ¿quién es la hermana de Vi?",
          answers: [
            { id: "a", text: "Caitlyn" },
            { id: "b", text: "Jinx" },
          ],
          correctAnswer: "b",
          explanation:
            "Jinx, que de pequeña se llamaba Powder. Caitlyn es la agente de Piltover que hace equipo con Vi.",
        },
        {
          id: 6,
          question: "¿Cuántos jugadores tiene un equipo en una partida clásica?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
          ],
          correctAnswer: "a",
          explanation:
            "Cinco: uno en la calle superior, uno en la jungla, uno en medio y dos en la calle inferior, el tirador y el apoyo.",
        },
        {
          id: 7,
          image: "/images/q-league-of-legends-07.webp",
          question: "El nombre del Barón Nashor es el anagrama de un monstruo, ¿de qué juego?",
          answers: [
            { id: "a", text: "World of Warcraft" },
            { id: "b", text: "DotA" },
          ],
          correctAnswer: "b",
          explanation:
            "De DotA. Nashor se escribe con las letras de Roshan, el gran monstruo neutral de DotA. Varios creadores de League of Legends venían de la comunidad de DotA.",
        },
        {
          id: 8,
          question: "¿Qué equipo ganó el primer campeonato del mundo, en 2011?",
          answers: [
            { id: "a", text: "Fnatic" },
            { id: "b", text: "SK Telecom T1" },
          ],
          correctAnswer: "a",
          explanation:
            "Fnatic, un equipo europeo, en la DreamHack de Suecia. SK Telecom T1, el equipo de Faker, no ganó su primer título hasta 2013.",
        },
        {
          id: 9,
          question: "¿Qué estructura hay que destruir para ganar una partida?",
          answers: [
            { id: "a", text: "El inhibidor" },
            { id: "b", text: "El Nexo" },
          ],
          correctAnswer: "b",
          explanation:
            "El Nexo, dentro de la base enemiga. Destruir un inhibidor hace aparecer supersúbditos, pero no basta para ganar.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-10.webp",
          question: "¿En qué ciudad se jugó la final de los Worlds 2019?",
          answers: [
            { id: "a", text: "París" },
            { id: "b", text: "Berlín" },
          ],
          correctAnswer: "a",
          explanation:
            "En París, en el AccorHotels Arena. FunPlus Phoenix ganó allí a G2 Esports por 3 a 0.",
        },
        {
          id: 11,
          question: "¿Qué estudio francés animó la serie Arcane?",
          answers: [
            { id: "a", text: "Fortiche" },
            { id: "b", text: "Ubisoft" },
          ],
          correctAnswer: "a",
          explanation:
            "Fortiche, un estudio con sede en París. Trabaja con Riot Games desde 2013, primero con videoclips de League of Legends.",
        },
        {
          id: 12,
          question: "¿Cómo se llama el mundo donde pasan las historias de League of Legends?",
          answers: [
            { id: "a", text: "Azeroth" },
            { id: "b", text: "Runeterra" },
          ],
          correctAnswer: "b",
          explanation:
            "Runeterra, con regiones como Demacia, Jonia o Freljord. Azeroth es el mundo de World of Warcraft.",
        },
        {
          id: 13,
          question: "¿Qué empresa china es dueña de Riot Games?",
          answers: [
            { id: "a", text: "Tencent" },
            { id: "b", text: "Alibaba" },
          ],
          correctAnswer: "a",
          explanation:
            "Tencent. Compró el 93 % de Riot en 2011 y el resto en 2015.",
        },
        {
          id: 14,
          question: "¿Cuántas temporadas tiene la serie Arcane?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "2" },
          ],
          correctAnswer: "b",
          explanation:
            "Dos. La primera salió en Netflix en noviembre de 2021, la segunda en noviembre de 2024, y ahí termina la historia de Vi y Jinx.",
        },
        {
          id: 15,
          question: "¿Qué grupo virtual de League of Legends canta «Pop/Stars»?",
          answers: [
            { id: "a", text: "K/DA" },
            { id: "b", text: "True Damage" },
          ],
          correctAnswer: "a",
          explanation:
            "K/DA, formado por Ahri, Akali, Evelynn y Kai'Sa. La canción se estrenó en la ceremonia de apertura del Mundial 2018, en Corea del Sur.",
        },
        {
          id: 16,
          question: "¿Qué actriz pone la voz de Jinx en la versión original de Arcane?",
          answers: [
            { id: "a", text: "Hailee Steinfeld" },
            { id: "b", text: "Ella Purnell" },
          ],
          correctAnswer: "b",
          explanation:
            "Ella Purnell. Hailee Steinfeld también está en el reparto: es la voz de Vi.",
        },
        {
          id: 17,
          question: "¿Cuántos dragones elementales hay que matar para conseguir el alma del dragón?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
          ],
          correctAnswer: "a",
          explanation:
            "Cuatro. El primer equipo que mata cuatro se lleva el alma, una mejora que depende del elemento que domina el mapa.",
        },
        {
          id: 18,
          question: "¿Qué juego lleva League of Legends al móvil, con partidas más cortas?",
          answers: [
            { id: "a", text: "Legends of Runeterra" },
            { id: "b", text: "Wild Rift" },
          ],
          correctAnswer: "b",
          explanation:
            "Wild Rift, que salió en 2020 para Android e iOS. Legends of Runeterra es un juego de cartas del mismo universo.",
        },
        {
          id: 19,
          question: "¿Qué hechizo de invocador teletransporta al campeón a poca distancia?",
          answers: [
            { id: "a", text: "Destello" },
            { id: "b", text: "Curar" },
          ],
          correctAnswer: "a",
          explanation:
            "Destello, Flash en inglés. Tarda 5 minutos en recargarse y casi todos los jugadores lo llevan. Curar devuelve algo de vida.",
        },
        {
          id: 20,
          question: "¿Qué modo de Riot, lanzado en 2019, consiste en colocar campeones en un tablero?",
          answers: [
            { id: "a", text: "Arena" },
            { id: "b", text: "Teamfight Tactics" },
          ],
          correctAnswer: "b",
          explanation:
            "Teamfight Tactics, al que muchos llaman TFT. Los combates se juegan solos: el jugador elige los campeones y dónde colocarlos.",
        },
      ],
    },
  },
};

export default [quizLeagueOfLegends] as TranslatedQuiz[];
