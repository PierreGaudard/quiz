import type { TranslatedQuiz } from "./types";

/**
 * Quiz Counter-Strike en qcm sur les cartes : leur décor, leurs recoins
 * connus des joueurs (Banana sur Inferno, les deux étages de Nuke) et les
 * objectifs selon le préfixe de_ ou cs_.
 *
 * Le quiz vrai-faux quiz-counter-strike.ts parle déjà de Dust II : cette carte
 * n'est donc pas interrogée ici.
 */
export const quizCounterStrikeCartes: TranslatedQuiz = {
  slug: "quiz-counter-strike-cartes",
  slugs: { en: "counter-strike-maps-quiz", fr: "quiz-counter-strike-cartes", es: "quiz-counter-strike-mapas" },
  categorySlug: "jeux-video",
  subcategory: "Counter-Strike",
  difficulty: "medium",
  coverImage: "/images/cover-counter-strike-cartes.webp",
  gameType: "qcm",
  playCount: 5200,
  translations: {
    fr: {
      title: "Quiz Counter-Strike : les cartes",
      description:
        "Inferno, Nuke, Mirage, Overpass, Ancient… Vingt questions sur les cartes de Counter-Strike, leur décor et leurs coins les plus connus.",
      questions: [
        {
          id: 1,
          image: "/images/q-counter-strike-cartes-01.webp",
          question: "Dans quel pays se passe la carte Inferno ?",
          answers: [
            { id: "a", text: "En Espagne" },
            { id: "b", text: "En Italie" },
            { id: "c", text: "En Grèce" },
            { id: "d", text: "Au Mexique" },
          ],
          correctAnswer: "b",
          explanation:
            "En Italie. Inferno est un petit village italien avec ses ruelles pavées, sa place et son église, et c'est une des plus vieilles cartes de la série.",
        },
        {
          id: 2,
          question: "Sur Inferno, comment les joueurs appellent-ils le couloir en courbe qui mène au site B ?",
          answers: [
            { id: "a", text: "Banana" },
            { id: "b", text: "Catwalk" },
            { id: "c", text: "Palace" },
            { id: "d", text: "Ramp" },
          ],
          correctAnswer: "a",
          explanation:
            "Banana, à cause de sa forme en banane. C'est là que se jouent la plupart des combats pour le site B, souvent à coups de grenades incendiaires.",
        },
        {
          id: 3,
          image: "/images/q-counter-strike-cartes-03.webp",
          question: "Quel est le décor de la carte Nuke ?",
          answers: [
            { id: "a", text: "Un aéroport" },
            { id: "b", text: "Une gare de triage" },
            { id: "c", text: "Une centrale nucléaire" },
            { id: "d", text: "Un port de pêche" },
          ],
          correctAnswer: "c",
          explanation:
            "Une centrale nucléaire, d'où le nom. On se bat entre les bâtiments, sur les toits et jusque dans les salles de contrôle.",
        },
        {
          id: 4,
          question: "Sur Nuke, où se trouve le site B par rapport au site A ?",
          answers: [
            { id: "a", text: "À l'autre bout de la carte" },
            { id: "b", text: "Sur le toit" },
            { id: "c", text: "Juste à côté, au même niveau" },
            { id: "d", text: "Juste en dessous" },
          ],
          correctAnswer: "d",
          explanation:
            "Juste en dessous. Les deux sites sont empilés l'un sur l'autre, du coup on entend souvent les ennemis marcher au-dessus ou en dessous de soi.",
        },
        {
          id: 5,
          image: "/images/q-counter-strike-cartes-05.webp",
          question: "Dans quelle ville se passe la carte Overpass ?",
          answers: [
            { id: "a", text: "Berlin" },
            { id: "b", text: "Londres" },
            { id: "c", text: "Paris" },
            { id: "d", text: "Prague" },
          ],
          correctAnswer: "a",
          explanation:
            "Berlin. Overpass se joue dans un parc de la ville, autour d'un canal et sous un grand pont routier, ce qui lui donne son nom.",
        },
        {
          id: 6,
          image: "/images/q-counter-strike-cartes-06.webp",
          question: "Sur la carte Vertigo, où se bat-on ?",
          answers: [
            { id: "a", text: "Dans une mine" },
            { id: "b", text: "En haut d'un gratte-ciel en construction" },
            { id: "c", text: "Sur un bateau" },
            { id: "d", text: "Dans un sous-marin" },
          ],
          correctAnswer: "b",
          explanation:
            "En haut d'un gratte-ciel en chantier. Si on tombe du bord, on meurt tout de suite, d'où le nom de la carte.",
        },
        {
          id: 7,
          image: "/images/q-counter-strike-cartes-07.webp",
          question: "Quel est le décor de la carte Ancient ?",
          answers: [
            { id: "a", text: "Un château médiéval" },
            { id: "b", text: "Une ville du Far West" },
            { id: "c", text: "Des ruines de temple dans la jungle" },
            { id: "d", text: "Une station de ski" },
          ],
          correctAnswer: "c",
          explanation:
            "Des ruines de temple dans la jungle, inspirées des cités mayas d'Amérique centrale. La carte est arrivée dans le mode compétitif en 2021.",
        },
        {
          id: 8,
          question: "La carte Anubis porte le nom d'un dieu de quel pays ?",
          answers: [
            { id: "a", text: "La Grèce" },
            { id: "b", text: "L'Égypte" },
            { id: "c", text: "L'Inde" },
            { id: "d", text: "Le Pérou" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Égypte. Anubis est le dieu à tête de chacal, et la carte reprend le décor d'une ville égyptienne au bord de l'eau. Au départ, c'était une carte créée par des joueurs.",
        },
        {
          id: 9,
          question: "Sur une carte dont le nom commence par « de_ », comme de_mirage, quel est l'objectif ?",
          answers: [
            { id: "a", text: "Sauver des otages" },
            { id: "b", text: "Escorter un VIP" },
            { id: "c", text: "Capturer un drapeau" },
            { id: "d", text: "Poser ou désamorcer une bombe" },
          ],
          correctAnswer: "d",
          explanation:
            "Poser ou désamorcer une bombe. « de » vient de « defuse », désamorcer en anglais. C'est le mode de la plupart des cartes jouées en compétition.",
        },
        {
          id: 10,
          question: "Sur la carte cs_office, que doivent faire les contre-terroristes ?",
          answers: [
            { id: "a", text: "Libérer des otages" },
            { id: "b", text: "Désamorcer une bombe" },
            { id: "c", text: "Protéger un coffre" },
            { id: "d", text: "Tenir une zone" },
          ],
          correctAnswer: "a",
          explanation:
            "Libérer des otages, enfermés dans un immeuble de bureaux sous la neige. Le préfixe « cs_ » désigne justement les cartes avec des otages.",
        },
        {
          id: 11,
          question: "Sur Mirage, par où passent souvent les terroristes pour rejoindre le site B ?",
          answers: [
            { id: "a", text: "Par Banana" },
            { id: "b", text: "Par le Palace" },
            { id: "c", text: "Par les appartements" },
            { id: "d", text: "Par les égouts" },
          ],
          correctAnswer: "c",
          explanation:
            "Par les appartements, que les joueurs appellent « Apps ». C'est un couloir à l'étage qui débouche tout près du site B. Banana, c'est sur Inferno.",
        },
        {
          id: 12,
          question: "Sur Mirage, comment s'appelle le bâtiment à étage par lequel on arrive sur le site A ?",
          answers: [
            { id: "a", text: "Palace" },
            { id: "b", text: "Castle" },
            { id: "c", text: "Tower" },
            { id: "d", text: "Temple" },
          ],
          correctAnswer: "a",
          explanation:
            "Palace. Les terroristes y montent un escalier puis sautent sur le site A. Les contre-terroristes le surveillent de près, parce que c'est une des entrées les plus utilisées.",
        },
        {
          id: 13,
          question: "Quel est le décor de la carte Train ?",
          answers: [
            { id: "a", text: "Une station de métro" },
            { id: "b", text: "Un port" },
            { id: "c", text: "Un aéroport" },
            { id: "d", text: "Une gare de triage" },
          ],
          correctAnswer: "d",
          explanation:
            "Une gare de triage, avec des rangées de wagons et de locomotives. On se bat entre les trains, et on peut même passer dessous ou monter dessus.",
        },
        {
          id: 14,
          question: "Quel est le décor de la carte Cobblestone ?",
          answers: [
            { id: "a", text: "Un village de pêcheurs" },
            { id: "b", text: "Un château" },
            { id: "c", text: "Une mine" },
            { id: "d", text: "Un monastère dans la montagne" },
          ],
          correctAnswer: "b",
          explanation:
            "Un château, avec ses cours pavées, d'où le nom de la carte. Cobblestone a longtemps fait partie des cartes des tournois sur CS:GO.",
        },
        {
          id: 15,
          question: "Près de quelle ville abandonnée se passe la carte Cache ?",
          answers: [
            { id: "a", text: "Detroit" },
            { id: "b", text: "Hashima" },
            { id: "c", text: "Prypiat" },
            { id: "d", text: "Varosha" },
          ],
          correctAnswer: "c",
          explanation:
            "Prypiat, en Ukraine, la ville vidée après l'accident de la centrale de Tchernobyl. La carte a d'abord été créée par des joueurs, avant d'entrer dans le jeu officiel.",
        },
        {
          id: 16,
          question: "Sur la carte cs_assault, où sont retenus les otages ?",
          answers: [
            { id: "a", text: "Dans un entrepôt" },
            { id: "b", text: "Dans une banque" },
            { id: "c", text: "Dans un hôtel" },
            { id: "d", text: "Dans un bateau" },
          ],
          correctAnswer: "a",
          explanation:
            "Dans un entrepôt, que les contre-terroristes attaquent par le toit, les portes du garage ou encore les conduits d'aération. C'est l'une des plus vieilles cartes du jeu.",
        },
        {
          id: 17,
          question: "Sur les cartes « as_ » des premiers Counter-Strike, comme as_oilrig, que devaient faire les contre-terroristes ?",
          answers: [
            { id: "a", text: "Désamorcer une bombe" },
            { id: "b", text: "Escorter un VIP" },
            { id: "c", text: "Voler des documents" },
            { id: "d", text: "Libérer des otages" },
          ],
          correctAnswer: "b",
          explanation:
            "Escorter un VIP jusqu'à une zone de sortie, pendant que les terroristes essayaient de l'abattre. « as » voulait dire « assassination ». Le mode n'existe plus dans CS2.",
        },
        {
          id: 18,
          question: "Sur une carte dont le nom commence par « aim_ », à quoi sert-elle ?",
          answers: [
            { id: "a", text: "À courir le plus vite possible" },
            { id: "b", text: "À jouer au couteau seulement" },
            { id: "c", text: "À s'entraîner à lancer des grenades" },
            { id: "d", text: "À s'entraîner à viser en duel" },
          ],
          correctAnswer: "d",
          explanation:
            "À s'entraîner à viser, en duel, sur une petite carte toute simple où les deux équipes se voient presque tout de suite. Ce sont des cartes créées par les joueurs.",
        },
        {
          id: 19,
          question: "En mode Wingman, le 2 contre 2 de Counter-Strike, combien de sites de bombe y a-t-il sur la carte ?",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ],
          correctAnswer: "a",
          explanation:
            "Un seul. Les cartes du Wingman sont plus petites que les cartes classiques, et souvent tirées d'un bout d'une carte connue, comme Shortdust, un morceau de Dust II.",
        },
        {
          id: 20,
          question: "Combien de cartes compte la liste des cartes jouées en tournoi, l'Active Duty ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "7" },
            { id: "c", text: "9" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "Sept. Valve fait tourner les cartes de temps en temps : quand une carte entre dans la liste, une autre en sort, mais le total reste à sept.",
        },
      ],
    },
    en: {
      title: "Counter-Strike quiz: the maps",
      description:
        "Inferno, Nuke, Overpass, Ancient and more. Twenty questions on Counter-Strike maps, where they are set and their best-known spots.",
      questions: [
        {
          id: 1,
          image: "/images/q-counter-strike-cartes-01.webp",
          question: "Which country is the map Inferno set in?",
          answers: [
            { id: "a", text: "Spain" },
            { id: "b", text: "Italy" },
            { id: "c", text: "Greece" },
            { id: "d", text: "Mexico" },
          ],
          correctAnswer: "b",
          explanation:
            "Italy. Inferno is a small Italian village with cobbled streets, a square and a church, and it's one of the oldest maps in the series.",
        },
        {
          id: 2,
          question: "On Inferno, what do players call the curved lane that leads to B site?",
          answers: [
            { id: "a", text: "Banana" },
            { id: "b", text: "Catwalk" },
            { id: "c", text: "Palace" },
            { id: "d", text: "Ramp" },
          ],
          correctAnswer: "a",
          explanation:
            "Banana, because it's shaped like one. Most of the fights for B site happen there, usually with a lot of molotovs thrown in.",
        },
        {
          id: 3,
          image: "/images/q-counter-strike-cartes-03.webp",
          question: "What is the setting of the map Nuke?",
          answers: [
            { id: "a", text: "An airport" },
            { id: "b", text: "A rail yard" },
            { id: "c", text: "A nuclear power plant" },
            { id: "d", text: "A fishing harbour" },
          ],
          correctAnswer: "c",
          explanation:
            "A nuclear power plant, hence the name. You fight between the buildings, on the roofs and right inside the control rooms.",
        },
        {
          id: 4,
          question: "On Nuke, where is B site compared with A site?",
          answers: [
            { id: "a", text: "At the other end of the map" },
            { id: "b", text: "On the roof" },
            { id: "c", text: "Right next to it, on the same level" },
            { id: "d", text: "Directly below it" },
          ],
          correctAnswer: "d",
          explanation:
            "Directly below it. The two sites are stacked on top of each other, so you often hear enemies walking above or below you.",
        },
        {
          id: 5,
          image: "/images/q-counter-strike-cartes-05.webp",
          question: "Which city is the map Overpass set in?",
          answers: [
            { id: "a", text: "Berlin" },
            { id: "b", text: "London" },
            { id: "c", text: "Paris" },
            { id: "d", text: "Prague" },
          ],
          correctAnswer: "a",
          explanation:
            "Berlin. Overpass takes place in a city park, around a canal and under a big road bridge, which is where the name comes from.",
        },
        {
          id: 6,
          image: "/images/q-counter-strike-cartes-06.webp",
          question: "On Vertigo, where does the fight take place?",
          answers: [
            { id: "a", text: "In a mine" },
            { id: "b", text: "At the top of a skyscraper under construction" },
            { id: "c", text: "On a ship" },
            { id: "d", text: "In a submarine" },
          ],
          correctAnswer: "b",
          explanation:
            "At the top of a skyscraper that's still being built. If you fall off the edge you die straight away, hence the name.",
        },
        {
          id: 7,
          image: "/images/q-counter-strike-cartes-07.webp",
          question: "What is the setting of the map Ancient?",
          answers: [
            { id: "a", text: "A medieval castle" },
            { id: "b", text: "A Wild West town" },
            { id: "c", text: "Temple ruins in the jungle" },
            { id: "d", text: "A ski resort" },
          ],
          correctAnswer: "c",
          explanation:
            "Temple ruins in the jungle, inspired by the Maya cities of Central America. The map joined the competitive pool in 2021.",
        },
        {
          id: 8,
          question: "The map Anubis is named after a god from which country?",
          answers: [
            { id: "a", text: "Greece" },
            { id: "b", text: "Egypt" },
            { id: "c", text: "India" },
            { id: "d", text: "Peru" },
          ],
          correctAnswer: "b",
          explanation:
            "Egypt. Anubis is the jackal-headed god, and the map is an Egyptian town by the water. It started out as a map made by players.",
        },
        {
          id: 9,
          question: "On a map whose name starts with \"de_\", like de_mirage, what is the objective?",
          answers: [
            { id: "a", text: "Rescue hostages" },
            { id: "b", text: "Escort a VIP" },
            { id: "c", text: "Capture a flag" },
            { id: "d", text: "Plant or defuse a bomb" },
          ],
          correctAnswer: "d",
          explanation:
            "Plant or defuse a bomb. The \"de\" stands for \"defuse\". Most of the maps played in competitive use this mode.",
        },
        {
          id: 10,
          question: "On cs_office, what do the Counter-Terrorists have to do?",
          answers: [
            { id: "a", text: "Rescue hostages" },
            { id: "b", text: "Defuse a bomb" },
            { id: "c", text: "Protect a safe" },
            { id: "d", text: "Hold a zone" },
          ],
          correctAnswer: "a",
          explanation:
            "Rescue hostages, who are held in a snowy office building. The \"cs_\" prefix is used for exactly these hostage maps.",
        },
        {
          id: 11,
          question: "On Mirage, which way do terrorists often take to reach B site?",
          answers: [
            { id: "a", text: "Through Banana" },
            { id: "b", text: "Through Palace" },
            { id: "c", text: "Through Apartments" },
            { id: "d", text: "Through the sewers" },
          ],
          correctAnswer: "c",
          explanation:
            "Through Apartments, which players call \"Apps\". It's an upstairs corridor that comes out right next to B site. Banana is on Inferno.",
        },
        {
          id: 12,
          question: "On Mirage, what's the name of the upstairs building you take to get onto A site?",
          answers: [
            { id: "a", text: "Palace" },
            { id: "b", text: "Castle" },
            { id: "c", text: "Tower" },
            { id: "d", text: "Temple" },
          ],
          correctAnswer: "a",
          explanation:
            "Palace. Terrorists go up a staircase there and drop down onto A site. Counter-terrorists watch it closely, because it's one of the most used ways in.",
        },
        {
          id: 13,
          question: "What's the setting of the Train map?",
          answers: [
            { id: "a", text: "A subway station" },
            { id: "b", text: "A port" },
            { id: "c", text: "An airport" },
            { id: "d", text: "A rail yard" },
          ],
          correctAnswer: "d",
          explanation:
            "A rail yard, with rows of carriages and locomotives. The fighting happens between the trains, and you can even go under them or climb on top.",
        },
        {
          id: 14,
          question: "What's the setting of the Cobblestone map?",
          answers: [
            { id: "a", text: "A fishing village" },
            { id: "b", text: "A castle" },
            { id: "c", text: "A mine" },
            { id: "d", text: "A mountain monastery" },
          ],
          correctAnswer: "b",
          explanation:
            "A castle, with its cobbled courtyards, which is where the map's name comes from. Cobblestone was a tournament map for a long time in CS:GO.",
        },
        {
          id: 15,
          question: "Near which abandoned city is the Cache map set?",
          answers: [
            { id: "a", text: "Detroit" },
            { id: "b", text: "Hashima" },
            { id: "c", text: "Pripyat" },
            { id: "d", text: "Varosha" },
          ],
          correctAnswer: "c",
          explanation:
            "Pripyat, in Ukraine, the town that was emptied after the Chernobyl power plant accident. The map was first made by players, before it became part of the official game.",
        },
        {
          id: 16,
          question: "On cs_assault, where are the hostages held?",
          answers: [
            { id: "a", text: "In a warehouse" },
            { id: "b", text: "In a bank" },
            { id: "c", text: "In a hotel" },
            { id: "d", text: "On a boat" },
          ],
          correctAnswer: "a",
          explanation:
            "In a warehouse, which counter-terrorists attack through the roof, the garage doors or the air vents. It's one of the oldest maps in the game.",
        },
        {
          id: 17,
          question: "On the \"as_\" maps of the early Counter-Strike games, like as_oilrig, what did counter-terrorists have to do?",
          answers: [
            { id: "a", text: "Defuse a bomb" },
            { id: "b", text: "Escort a VIP" },
            { id: "c", text: "Steal documents" },
            { id: "d", text: "Rescue hostages" },
          ],
          correctAnswer: "b",
          explanation:
            "Escort a VIP to an escape zone, while terrorists tried to take him out. \"as\" stood for \"assassination\". The mode no longer exists in CS2.",
        },
        {
          id: 18,
          question: "What is a map whose name starts with \"aim_\" for?",
          answers: [
            { id: "a", text: "Running as fast as possible" },
            { id: "b", text: "Knife fights only" },
            { id: "c", text: "Practicing grenade throws" },
            { id: "d", text: "Practicing your aim in duels" },
          ],
          correctAnswer: "d",
          explanation:
            "Practicing your aim in duels, on a small and very simple map where both teams see each other almost straight away. These maps are made by players.",
        },
        {
          id: 19,
          question: "In Wingman, Counter-Strike's 2v2 mode, how many bomb sites does a map have?",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ],
          correctAnswer: "a",
          explanation:
            "Just one. Wingman maps are smaller than the usual maps, and often cut from part of a well-known one, like Shortdust, a slice of Dust II.",
        },
        {
          id: 20,
          question: "How many maps are in the Active Duty pool, the list of maps played in tournaments?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "7" },
            { id: "c", text: "9" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "Seven. Valve rotates maps from time to time: when one comes into the pool, another one goes out, but the total stays at seven.",
        },
      ],
    },
    es: {
      title: "Quiz de Counter-Strike: los mapas",
      description:
        "Inferno, Nuke, Overpass, Ancient y más. Veinte preguntas sobre los mapas de Counter-Strike, dónde se ambientan y sus rincones más famosos.",
      questions: [
        {
          id: 1,
          image: "/images/q-counter-strike-cartes-01.webp",
          question: "¿En qué país se ambienta el mapa Inferno?",
          answers: [
            { id: "a", text: "En España" },
            { id: "b", text: "En Italia" },
            { id: "c", text: "En Grecia" },
            { id: "d", text: "En México" },
          ],
          correctAnswer: "b",
          explanation:
            "En Italia. Inferno es un pueblito italiano con calles empedradas, una plaza y una iglesia, y es uno de los mapas más antiguos de la saga.",
        },
        {
          id: 2,
          question: "En Inferno, ¿cómo llaman los jugadores al pasillo curvo que lleva al site B?",
          answers: [
            { id: "a", text: "Banana" },
            { id: "b", text: "Catwalk" },
            { id: "c", text: "Palace" },
            { id: "d", text: "Ramp" },
          ],
          correctAnswer: "a",
          explanation:
            "Banana, por su forma de plátano. Ahí se juegan casi todos los combates por el site B, muchas veces a base de molotovs.",
        },
        {
          id: 3,
          image: "/images/q-counter-strike-cartes-03.webp",
          question: "¿Dónde se ambienta el mapa Nuke?",
          answers: [
            { id: "a", text: "En un aeropuerto" },
            { id: "b", text: "En una estación de tren" },
            { id: "c", text: "En una central nuclear" },
            { id: "d", text: "En un puerto pesquero" },
          ],
          correctAnswer: "c",
          explanation:
            "En una central nuclear, de ahí el nombre. Se pelea entre los edificios, en los tejados y hasta en las salas de control.",
        },
        {
          id: 4,
          question: "En Nuke, ¿dónde está el site B respecto al site A?",
          answers: [
            { id: "a", text: "En la otra punta del mapa" },
            { id: "b", text: "En el tejado" },
            { id: "c", text: "Justo al lado, en el mismo nivel" },
            { id: "d", text: "Justo debajo" },
          ],
          correctAnswer: "d",
          explanation:
            "Justo debajo. Los dos sites están uno encima del otro, así que a menudo se oye a los enemigos caminar por arriba o por abajo.",
        },
        {
          id: 5,
          image: "/images/q-counter-strike-cartes-05.webp",
          question: "¿En qué ciudad se ambienta el mapa Overpass?",
          answers: [
            { id: "a", text: "Berlín" },
            { id: "b", text: "Londres" },
            { id: "c", text: "París" },
            { id: "d", text: "Praga" },
          ],
          correctAnswer: "a",
          explanation:
            "Berlín. Overpass transcurre en un parque de la ciudad, junto a un canal y bajo un gran paso elevado, que es lo que da nombre al mapa.",
        },
        {
          id: 6,
          image: "/images/q-counter-strike-cartes-06.webp",
          question: "En el mapa Vertigo, ¿dónde se combate?",
          answers: [
            { id: "a", text: "En una mina" },
            { id: "b", text: "En lo alto de un rascacielos en obras" },
            { id: "c", text: "En un barco" },
            { id: "d", text: "En un submarino" },
          ],
          correctAnswer: "b",
          explanation:
            "En lo alto de un rascacielos en construcción. Si te caes por el borde mueres al instante, de ahí el nombre.",
        },
        {
          id: 7,
          image: "/images/q-counter-strike-cartes-07.webp",
          question: "¿Dónde se ambienta el mapa Ancient?",
          answers: [
            { id: "a", text: "En un castillo medieval" },
            { id: "b", text: "En un pueblo del Lejano Oeste" },
            { id: "c", text: "En unas ruinas de templo en la selva" },
            { id: "d", text: "En una estación de esquí" },
          ],
          correctAnswer: "c",
          explanation:
            "En unas ruinas de templo en plena selva, inspiradas en las ciudades mayas de Centroamérica. El mapa llegó al competitivo en 2021.",
        },
        {
          id: 8,
          question: "¿De qué país es el dios que da nombre al mapa Anubis?",
          answers: [
            { id: "a", text: "Grecia" },
            { id: "b", text: "Egipto" },
            { id: "c", text: "India" },
            { id: "d", text: "Perú" },
          ],
          correctAnswer: "b",
          explanation:
            "Egipto. Anubis es el dios con cabeza de chacal, y el mapa recrea una ciudad egipcia junto al agua. Al principio era un mapa hecho por jugadores.",
        },
        {
          id: 9,
          question: "En un mapa cuyo nombre empieza por «de_», como de_mirage, ¿cuál es el objetivo?",
          answers: [
            { id: "a", text: "Rescatar rehenes" },
            { id: "b", text: "Escoltar a un VIP" },
            { id: "c", text: "Capturar una bandera" },
            { id: "d", text: "Plantar o desactivar una bomba" },
          ],
          correctAnswer: "d",
          explanation:
            "Plantar o desactivar una bomba. El «de» viene de «defuse», desactivar en inglés. Es el modo de casi todos los mapas del competitivo.",
        },
        {
          id: 10,
          question: "En el mapa cs_office, ¿qué tienen que hacer los antiterroristas?",
          answers: [
            { id: "a", text: "Rescatar rehenes" },
            { id: "b", text: "Desactivar una bomba" },
            { id: "c", text: "Proteger una caja fuerte" },
            { id: "d", text: "Mantener una zona" },
          ],
          correctAnswer: "a",
          explanation:
            "Rescatar a los rehenes, retenidos en un edificio de oficinas nevado. El prefijo «cs_» es justo el de los mapas con rehenes.",
        },
        {
          id: 11,
          question: "En Mirage, ¿por dónde suelen pasar los terroristas para llegar al sitio B?",
          answers: [
            { id: "a", text: "Por Banana" },
            { id: "b", text: "Por Palace" },
            { id: "c", text: "Por los apartamentos" },
            { id: "d", text: "Por las alcantarillas" },
          ],
          correctAnswer: "c",
          explanation:
            "Por los apartamentos, que los jugadores llaman \"Apps\". Es un pasillo en el primer piso que sale justo al lado del sitio B. Banana está en Inferno.",
        },
        {
          id: 12,
          question: "En Mirage, ¿cómo se llama el edificio con planta alta por el que se llega al sitio A?",
          answers: [
            { id: "a", text: "Palace" },
            { id: "b", text: "Castle" },
            { id: "c", text: "Tower" },
            { id: "d", text: "Temple" },
          ],
          correctAnswer: "a",
          explanation:
            "Palace. Los terroristas suben una escalera y saltan al sitio A. Los antiterroristas lo vigilan mucho, porque es una de las entradas más usadas.",
        },
        {
          id: 13,
          question: "¿Cuál es el escenario del mapa Train?",
          answers: [
            { id: "a", text: "Una estación de metro" },
            { id: "b", text: "Un puerto" },
            { id: "c", text: "Un aeropuerto" },
            { id: "d", text: "Una playa de vías de tren" },
          ],
          correctAnswer: "d",
          explanation:
            "Una playa de vías, con filas de vagones y locomotoras. Se pelea entre los trenes, y hasta se puede pasar por debajo o subirse encima.",
        },
        {
          id: 14,
          question: "¿Cuál es el escenario del mapa Cobblestone?",
          answers: [
            { id: "a", text: "Un pueblo de pescadores" },
            { id: "b", text: "Un castillo" },
            { id: "c", text: "Una mina" },
            { id: "d", text: "Un monasterio en la montaña" },
          ],
          correctAnswer: "b",
          explanation:
            "Un castillo, con sus patios empedrados, de ahí el nombre del mapa. Cobblestone fue durante mucho tiempo un mapa de torneos en CS:GO.",
        },
        {
          id: 15,
          question: "¿Cerca de qué ciudad abandonada transcurre el mapa Cache?",
          answers: [
            { id: "a", text: "Detroit" },
            { id: "b", text: "Hashima" },
            { id: "c", text: "Prípiat" },
            { id: "d", text: "Varosha" },
          ],
          correctAnswer: "c",
          explanation:
            "Prípiat, en Ucrania, la ciudad que se vació tras el accidente de la central de Chernóbil. El mapa lo crearon primero unos jugadores, antes de entrar en el juego oficial.",
        },
        {
          id: 16,
          question: "En el mapa cs_assault, ¿dónde están los rehenes?",
          answers: [
            { id: "a", text: "En un almacén" },
            { id: "b", text: "En un banco" },
            { id: "c", text: "En un hotel" },
            { id: "d", text: "En un barco" },
          ],
          correctAnswer: "a",
          explanation:
            "En un almacén, que los antiterroristas asaltan por el tejado, las puertas del garaje o los conductos de ventilación. Es uno de los mapas más antiguos del juego.",
        },
        {
          id: 17,
          question: "En los mapas \"as_\" de los primeros Counter-Strike, como as_oilrig, ¿qué tenían que hacer los antiterroristas?",
          answers: [
            { id: "a", text: "Desactivar una bomba" },
            { id: "b", text: "Escoltar a un VIP" },
            { id: "c", text: "Robar documentos" },
            { id: "d", text: "Liberar rehenes" },
          ],
          correctAnswer: "b",
          explanation:
            "Escoltar a un VIP hasta una zona de salida, mientras los terroristas intentaban abatirlo. \"as\" venía de \"assassination\", asesinato en inglés. El modo ya no existe en CS2.",
        },
        {
          id: 18,
          question: "¿Para qué sirve un mapa cuyo nombre empieza por \"aim_\"?",
          answers: [
            { id: "a", text: "Para correr lo más rápido posible" },
            { id: "b", text: "Para pelear solo a cuchillo" },
            { id: "c", text: "Para practicar el lanzamiento de granadas" },
            { id: "d", text: "Para practicar la puntería en duelos" },
          ],
          correctAnswer: "d",
          explanation:
            "Para practicar la puntería en duelos, en un mapa pequeño y muy sencillo donde los dos equipos se ven casi al instante. Son mapas creados por los jugadores.",
        },
        {
          id: 19,
          question: "En el modo Wingman, el 2 contra 2 de Counter-Strike, ¿cuántos sitios de bomba hay en el mapa?",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ],
          correctAnswer: "a",
          explanation:
            "Solo uno. Los mapas de Wingman son más pequeños que los normales, y muchas veces salen de un trozo de un mapa conocido, como Shortdust, un pedazo de Dust II.",
        },
        {
          id: 20,
          question: "¿Cuántos mapas tiene la lista de mapas de torneo, el Active Duty?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "7" },
            { id: "c", text: "9" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "Siete. Valve va rotando los mapas: cuando uno entra en la lista, otro sale, pero el total sigue siendo siete.",
        },
      ],
    },
  },
};

export default [quizCounterStrikeCartes] as TranslatedQuiz[];
