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
  subcategory: "Counter Strike",
  difficulty: "medium",
  coverImage: "/images/cover-counter-strike-cartes.webp",
  gameType: "qcm",
  playCount: 5200,
  translations: {
    fr: {
      title: "Quiz Counter-Strike : les cartes",
      description:
        "Inferno, Nuke, Mirage, Overpass, Ancient… Dix questions sur les cartes de Counter-Strike, leur décor et leurs coins les plus connus.",
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
      ],
    },
    en: {
      title: "Counter-Strike quiz: the maps",
      description:
        "Inferno, Nuke, Overpass, Ancient and more. Ten questions on Counter-Strike maps, where they are set and their best-known spots.",
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
      ],
    },
    es: {
      title: "Quiz de Counter-Strike: los mapas",
      description:
        "Inferno, Nuke, Overpass, Ancient y más. Diez preguntas sobre los mapas de Counter-Strike, dónde se ambientan y sus rincones más famosos.",
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
      ],
    },
  },
};

export default [quizCounterStrikeCartes] as TranslatedQuiz[];
