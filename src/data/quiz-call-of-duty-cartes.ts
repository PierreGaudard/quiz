import type { TranslatedQuiz } from "./types";

/**
 * Quiz Call of Duty en mode chrono : les cartes, les modes de jeu et les
 * séries d'éliminations, du multijoueur à Warzone en passant par Zombies.
 *
 * Vingt questions pour une minute : le chrono s'arrête quand toutes les
 * questions sont jouées, et avec dix un bon joueur finissait avant la fin. Les
 * explications ne s'affichent qu'à l'écran de résultat (ChronoPlayer), donc les
 * questions restent courtes. Le quiz d'origine (quiz-call-of-duty.ts) porte
 * sur l'ordre de sortie des jeux, pas sur les cartes.
 */
export const quizCallOfDutyCartes: TranslatedQuiz = {
  slug: "quiz-call-of-duty-cartes",
  slugs: { en: "call-of-duty-maps-quiz", fr: "quiz-call-of-duty-cartes", es: "quiz-call-of-duty-mapas" },
  categorySlug: "jeux-video",
  subcategory: "Call of Duty",
  difficulty: "medium",
  coverImage: "/images/cover-call-of-duty-cartes.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 4800,
  translations: {
    fr: {
      title: "Chrono Call of Duty : cartes et modes",
      description:
        "Vingt questions sur les cartes et les modes de Call of Duty, de Nuketown au Goulag de Warzone, avec une minute au total. Pas le temps d'hésiter !",
      questions: [
        {
          id: 1,
          image: "/images/q-call-of-duty-cartes-01.webp",
          question: "Dans quel jeu apparaît Nuketown pour la première fois ?",
          answers: [
            { id: "a", text: "Black Ops" },
            { id: "b", text: "Modern Warfare 2" },
            { id: "c", text: "World at War" },
            { id: "d", text: "Ghosts" },
          ],
          correctAnswer: "a",
          explanation:
            "Black Ops, en 2010. Cette petite carte avec deux maisons face à face, dans une ville d'essais nucléaires, est revenue dans presque tous les Black Ops depuis.",
        },
        {
          id: 2,
          question: "Quelle est la toute première carte de Warzone ?",
          answers: [
            { id: "a", text: "Caldera" },
            { id: "b", text: "Al Mazrah" },
            { id: "c", text: "Verdansk" },
            { id: "d", text: "Urzikstan" },
          ],
          correctAnswer: "c",
          explanation:
            "Verdansk, en mars 2020. C'est une grande ville inventée, avec un stade, un aéroport et un barrage. Elle est même revenue dans le jeu en 2025.",
        },
        {
          id: 3,
          image: "/images/q-call-of-duty-cartes-03.webp",
          question: "Combien de joueurs dans une partie de Warzone à sa sortie ?",
          answers: [
            { id: "a", text: "100" },
            { id: "b", text: "150" },
            { id: "c", text: "200" },
            { id: "d", text: "64" },
          ],
          correctAnswer: "b",
          explanation:
            "150 joueurs, répartis en équipes. C'est plus que les 100 joueurs d'une partie de Fortnite.",
        },
        {
          id: 4,
          question: "Dans quel jeu apparaît la carte Rust ?",
          answers: [
            { id: "a", text: "Modern Warfare 2 (2009)" },
            { id: "b", text: "Call of Duty 4" },
            { id: "c", text: "Black Ops" },
            { id: "d", text: "Modern Warfare 3" },
          ],
          correctAnswer: "a",
          explanation:
            "Modern Warfare 2, en 2009. Rust est une toute petite carte dans le désert, autour d'une tour pétrolière rouillée.",
        },
        {
          id: 5,
          image: "/images/q-call-of-duty-cartes-05.webp",
          question: "Quelle carte de Call of Duty 4 se joue entre des conteneurs ?",
          answers: [
            { id: "a", text: "Crash" },
            { id: "b", text: "Rust" },
            { id: "c", text: "Nuketown" },
            { id: "d", text: "Shipment" },
          ],
          correctAnswer: "d",
          explanation:
            "Shipment, une carte minuscule sur un chantier naval, où on ne fait que croiser des ennemis. Elle est revenue dans plusieurs Modern Warfare récents.",
        },
        {
          id: 6,
          question: "Dans quel jeu est né le mode Zombies ?",
          answers: [
            { id: "a", text: "Black Ops" },
            { id: "b", text: "World at War" },
            { id: "c", text: "Black Ops II" },
            { id: "d", text: "Modern Warfare 3" },
          ],
          correctAnswer: "b",
          explanation:
            "World at War, en 2008. Le mode était caché au départ : il se débloquait en finissant la campagne.",
        },
        {
          id: 7,
          question: "Quelle est la toute première carte Zombies ?",
          answers: [
            { id: "a", text: "Nacht der Untoten" },
            { id: "b", text: "Kino der Toten" },
            { id: "c", text: "Der Riese" },
            { id: "d", text: "Shi No Numa" },
          ],
          correctAnswer: "a",
          explanation:
            "Nacht der Untoten, un petit bunker où on tient le plus de manches possible. Shi No Numa et Der Riese sont arrivées ensuite dans World at War.",
        },
        {
          id: 8,
          question: "Quelle carte a remplacé Verdansk dans Warzone en décembre 2021 ?",
          answers: [
            { id: "a", text: "Rebirth Island" },
            { id: "b", text: "Al Mazrah" },
            { id: "c", text: "Caldera" },
            { id: "d", text: "Fortune's Keep" },
          ],
          correctAnswer: "c",
          explanation:
            "Caldera, une île du Pacifique, arrivée avec Vanguard. Al Mazrah est venue ensuite avec Warzone 2.0, en novembre 2022.",
        },
        {
          id: 9,
          question: "En Recherche et destruction, que doit faire l'équipe qui attaque ?",
          answers: [
            { id: "a", text: "Capturer un drapeau" },
            { id: "b", text: "Poser une bombe" },
            { id: "c", text: "Tenir une colline" },
            { id: "d", text: "Escorter un otage" },
          ],
          correctAnswer: "b",
          explanation:
            "Poser une bombe sur l'un des deux objectifs, ou éliminer toute l'équipe adverse. Et chacun n'a qu'une vie par manche.",
        },
        {
          id: 10,
          question: "En Élimination confirmée, que ramasse-t-on sur les ennemis tués ?",
          answers: [
            { id: "a", text: "Des plaques d'identité" },
            { id: "b", text: "Des drapeaux" },
            { id: "c", text: "Des pièces d'or" },
            { id: "d", text: "Des munitions" },
          ],
          correctAnswer: "a",
          explanation:
            "Des plaques d'identité. L'élimination ne compte que si on va chercher la plaque, et l'adversaire peut la ramasser avant pour l'annuler. Le mode est arrivé avec Modern Warfare 3.",
        },
        {
          id: 11,
          question: "Combien d'éliminations d'affilée pour la bombe nucléaire de Modern Warfare 2 (2009) ?",
          answers: [
            { id: "a", text: "15" },
            { id: "b", text: "20" },
            { id: "c", text: "25" },
            { id: "d", text: "30" },
          ],
          correctAnswer: "c",
          explanation:
            "25 éliminations sans mourir. La bombe met fin à la partie tout de suite, et l'équipe de celui qui l'a lancée gagne.",
        },
        {
          id: 12,
          image: "/images/q-call-of-duty-cartes-12.webp",
          question: "Dans Warzone, où se bat-on en un contre un pour revenir en partie ?",
          answers: [
            { id: "a", text: "Au Bunker" },
            { id: "b", text: "Au Goulag" },
            { id: "c", text: "À l'Arène" },
            { id: "d", text: "Au Stade" },
          ],
          correctAnswer: "b",
          explanation:
            "Au Goulag. Quand on meurt pour la première fois, on y affronte un autre joueur, et le gagnant repart sur la carte.",
        },
        {
          id: 13,
          question: "En Domination, combien de zones y a-t-il à capturer ?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "Trois, appelées A, B et C. Chaque zone tenue rapporte des points à l'équipe tant qu'elle la garde.",
        },
        {
          id: 14,
          question: "Comment gagne-t-on un Match à mort par équipe ?",
          answers: [
            { id: "a", text: "En posant une bombe" },
            { id: "b", text: "En tenant une zone" },
            { id: "c", text: "En capturant un drapeau" },
            { id: "d", text: "En atteignant le score d'éliminations" },
          ],
          correctAnswer: "d",
          explanation:
            "En étant la première équipe à atteindre le score d'éliminations fixé, ou en menant à la fin du temps. C'est le mode le plus simple du multijoueur.",
        },
        {
          id: 15,
          question: "Quelle série d'éliminations montre les ennemis sur la minicarte ?",
          answers: [
            { id: "a", text: "Le drone" },
            { id: "b", text: "La frappe aérienne" },
            { id: "c", text: "L'hélicoptère" },
            { id: "d", text: "La bombe" },
          ],
          correctAnswer: "a",
          explanation:
            "Le drone de reconnaissance, l'UAV en anglais. C'est souvent la première série qu'on débloque, avec trois éliminations.",
        },
        {
          id: 16,
          question: "Dans World at War, quelle série d'éliminations lâche une meute sur la carte ?",
          answers: [
            { id: "a", text: "Des loups" },
            { id: "b", text: "Des zombies" },
            { id: "c", text: "Des chiens" },
            { id: "d", text: "Des ours" },
          ],
          correctAnswer: "c",
          explanation:
            "Des chiens d'attaque, qui demandent sept éliminations d'affilée. Ils parcourent la carte et foncent sur les ennemis.",
        },
        {
          id: 17,
          image: "/images/q-call-of-duty-cartes-17.webp",
          question: "Quelle carte Zombies de Black Ops se passe dans un cinéma ?",
          answers: [
            { id: "a", text: "Five" },
            { id: "b", text: "Kino der Toten" },
            { id: "c", text: "Ascension" },
            { id: "d", text: "Moon" },
          ],
          correctAnswer: "b",
          explanation:
            "Kino der Toten, qui veut justement dire « le cinéma des morts » en allemand. On y joue dans un vieux théâtre abandonné.",
        },
        {
          id: 18,
          question: "Quel président américain est jouable dans la carte Zombies « Five » ?",
          answers: [
            { id: "a", text: "John F. Kennedy" },
            { id: "b", text: "Ronald Reagan" },
            { id: "c", text: "Abraham Lincoln" },
            { id: "d", text: "Barack Obama" },
          ],
          correctAnswer: "a",
          explanation:
            "John F. Kennedy, avec Richard Nixon, Robert McNamara et Fidel Castro. La carte se passe au Pentagone.",
        },
        {
          id: 19,
          question: "En Gun Game, que se passe-t-il à chaque élimination ?",
          answers: [
            { id: "a", text: "On gagne une vie" },
            { id: "b", text: "On recharge" },
            { id: "c", text: "On change d'arme" },
            { id: "d", text: "On gagne un drone" },
          ],
          correctAnswer: "c",
          explanation:
            "On passe à l'arme suivante, et le premier qui fait une élimination avec la dernière arme gagne. Le mode est arrivé avec Black Ops.",
        },
        {
          id: 20,
          question: "En Zombies, que voit-on quand la boîte mystère change de place ?",
          answers: [
            { id: "a", text: "Un crâne" },
            { id: "b", text: "Un zombie doré" },
            { id: "c", text: "Un corbeau" },
            { id: "d", text: "Un ours en peluche" },
          ],
          correctAnswer: "d",
          explanation:
            "Un ours en peluche. Il sort de la boîte à la place d'une arme, puis la boîte s'envole vers un autre endroit de la carte.",
        },
      ],
    },
    en: {
      title: "Call of Duty speed quiz: maps and modes",
      description:
        "Twenty questions on Call of Duty maps and modes, from Nuketown to the Warzone Gulag, with one minute in total. No time to hesitate!",
      questions: [
        {
          id: 1,
          image: "/images/q-call-of-duty-cartes-01.webp",
          question: "In which game did Nuketown first appear?",
          answers: [
            { id: "a", text: "Black Ops" },
            { id: "b", text: "Modern Warfare 2" },
            { id: "c", text: "World at War" },
            { id: "d", text: "Ghosts" },
          ],
          correctAnswer: "a",
          explanation:
            "Black Ops, in 2010. This small map with two houses facing each other, in a nuclear test town, has come back in almost every Black Ops since.",
        },
        {
          id: 2,
          question: "What was the very first Warzone map?",
          answers: [
            { id: "a", text: "Caldera" },
            { id: "b", text: "Al Mazrah" },
            { id: "c", text: "Verdansk" },
            { id: "d", text: "Urzikstan" },
          ],
          correctAnswer: "c",
          explanation:
            "Verdansk, in March 2020. It's a big made-up city with a stadium, an airport and a dam. It even came back to the game in 2025.",
        },
        {
          id: 3,
          image: "/images/q-call-of-duty-cartes-03.webp",
          question: "How many players were in a Warzone match at launch?",
          answers: [
            { id: "a", text: "100" },
            { id: "b", text: "150" },
            { id: "c", text: "200" },
            { id: "d", text: "64" },
          ],
          correctAnswer: "b",
          explanation:
            "150 players, split into teams. That's more than the 100 players in a Fortnite match.",
        },
        {
          id: 4,
          question: "In which game does the Rust map appear?",
          answers: [
            { id: "a", text: "Modern Warfare 2 (2009)" },
            { id: "b", text: "Call of Duty 4" },
            { id: "c", text: "Black Ops" },
            { id: "d", text: "Modern Warfare 3" },
          ],
          correctAnswer: "a",
          explanation:
            "Modern Warfare 2, in 2009. Rust is a tiny desert map built around a rusty oil tower.",
        },
        {
          id: 5,
          image: "/images/q-call-of-duty-cartes-05.webp",
          question: "Which Call of Duty 4 map is played between shipping containers?",
          answers: [
            { id: "a", text: "Crash" },
            { id: "b", text: "Rust" },
            { id: "c", text: "Nuketown" },
            { id: "d", text: "Shipment" },
          ],
          correctAnswer: "d",
          explanation:
            "Shipment, a tiny map in a shipyard where you run into enemies nonstop. It came back in several recent Modern Warfare games.",
        },
        {
          id: 6,
          question: "In which game was Zombies mode born?",
          answers: [
            { id: "a", text: "Black Ops" },
            { id: "b", text: "World at War" },
            { id: "c", text: "Black Ops II" },
            { id: "d", text: "Modern Warfare 3" },
          ],
          correctAnswer: "b",
          explanation:
            "World at War, in 2008. The mode was hidden at first: you unlocked it by finishing the campaign.",
        },
        {
          id: 7,
          question: "What was the very first Zombies map?",
          answers: [
            { id: "a", text: "Nacht der Untoten" },
            { id: "b", text: "Kino der Toten" },
            { id: "c", text: "Der Riese" },
            { id: "d", text: "Shi No Numa" },
          ],
          correctAnswer: "a",
          explanation:
            "Nacht der Untoten, a small bunker where you try to survive as many rounds as you can. Shi No Numa and Der Riese came later in World at War.",
        },
        {
          id: 8,
          question: "Which map replaced Verdansk in Warzone in December 2021?",
          answers: [
            { id: "a", text: "Rebirth Island" },
            { id: "b", text: "Al Mazrah" },
            { id: "c", text: "Caldera" },
            { id: "d", text: "Fortune's Keep" },
          ],
          correctAnswer: "c",
          explanation:
            "Caldera, a Pacific island that arrived with Vanguard. Al Mazrah came after that with Warzone 2.0, in November 2022.",
        },
        {
          id: 9,
          question: "In Search and Destroy, what does the attacking team have to do?",
          answers: [
            { id: "a", text: "Capture a flag" },
            { id: "b", text: "Plant a bomb" },
            { id: "c", text: "Hold a hill" },
            { id: "d", text: "Escort a hostage" },
          ],
          correctAnswer: "b",
          explanation:
            "Plant a bomb on one of the two objectives, or wipe out the other team. And everyone only gets one life per round.",
        },
        {
          id: 10,
          question: "In Kill Confirmed, what do you pick up from dead enemies?",
          answers: [
            { id: "a", text: "Dog tags" },
            { id: "b", text: "Flags" },
            { id: "c", text: "Gold coins" },
            { id: "d", text: "Ammo" },
          ],
          correctAnswer: "a",
          explanation:
            "Dog tags. The kill only counts if you grab the tag, and the other team can pick it up first to cancel it. The mode arrived with Modern Warfare 3.",
        },
        {
          id: 11,
          question: "How many kills in a row for the Tactical Nuke in Modern Warfare 2 (2009)?",
          answers: [
            { id: "a", text: "15" },
            { id: "b", text: "20" },
            { id: "c", text: "25" },
            { id: "d", text: "30" },
          ],
          correctAnswer: "c",
          explanation:
            "25 kills without dying. The nuke ends the match right away, and the team of the player who called it wins.",
        },
        {
          id: 12,
          image: "/images/q-call-of-duty-cartes-12.webp",
          question: "In Warzone, where do you fight one-on-one to get back into the match?",
          answers: [
            { id: "a", text: "The Bunker" },
            { id: "b", text: "The Gulag" },
            { id: "c", text: "The Arena" },
            { id: "d", text: "The Stadium" },
          ],
          correctAnswer: "b",
          explanation:
            "The Gulag. The first time you die, you face another player there, and the winner gets dropped back onto the map.",
        },
        {
          id: 13,
          question: "In Domination, how many zones are there to capture?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "Three, called A, B and C. Each zone you hold earns your team points for as long as you keep it.",
        },
        {
          id: 14,
          question: "How do you win a Team Deathmatch?",
          answers: [
            { id: "a", text: "By planting a bomb" },
            { id: "b", text: "By holding a zone" },
            { id: "c", text: "By capturing a flag" },
            { id: "d", text: "By reaching the kill target" },
          ],
          correctAnswer: "d",
          explanation:
            "By being the first team to hit the kill target, or by leading when time runs out. It's the simplest mode in multiplayer.",
        },
        {
          id: 15,
          question: "Which killstreak shows enemies on the minimap?",
          answers: [
            { id: "a", text: "The UAV" },
            { id: "b", text: "The airstrike" },
            { id: "c", text: "The helicopter" },
            { id: "d", text: "The nuke" },
          ],
          correctAnswer: "a",
          explanation:
            "The UAV, a recon drone. It's often the first streak you unlock, at three kills.",
        },
        {
          id: 16,
          question: "In World at War, which killstreak sends a pack onto the map?",
          answers: [
            { id: "a", text: "Wolves" },
            { id: "b", text: "Zombies" },
            { id: "c", text: "Dogs" },
            { id: "d", text: "Bears" },
          ],
          correctAnswer: "c",
          explanation:
            "Attack dogs, which take seven kills in a row. They run around the map and go straight for enemies.",
        },
        {
          id: 17,
          image: "/images/q-call-of-duty-cartes-17.webp",
          question: "Which Black Ops Zombies map is set in a movie theater?",
          answers: [
            { id: "a", text: "Five" },
            { id: "b", text: "Kino der Toten" },
            { id: "c", text: "Ascension" },
            { id: "d", text: "Moon" },
          ],
          correctAnswer: "b",
          explanation:
            "Kino der Toten, which means \"cinema of the dead\" in German. You play in an old abandoned theater.",
        },
        {
          id: 18,
          question: "Which US president is playable in the Zombies map \"Five\"?",
          answers: [
            { id: "a", text: "John F. Kennedy" },
            { id: "b", text: "Ronald Reagan" },
            { id: "c", text: "Abraham Lincoln" },
            { id: "d", text: "Barack Obama" },
          ],
          correctAnswer: "a",
          explanation:
            "John F. Kennedy, along with Richard Nixon, Robert McNamara and Fidel Castro. The map is set in the Pentagon.",
        },
        {
          id: 19,
          question: "In Gun Game, what happens with every kill?",
          answers: [
            { id: "a", text: "You get an extra life" },
            { id: "b", text: "You reload" },
            { id: "c", text: "You switch weapons" },
            { id: "d", text: "You get a UAV" },
          ],
          correctAnswer: "c",
          explanation:
            "You move on to the next weapon, and the first player to get a kill with the last one wins. The mode arrived with Black Ops.",
        },
        {
          id: 20,
          question: "In Zombies, what do you see when the Mystery Box moves?",
          answers: [
            { id: "a", text: "A skull" },
            { id: "b", text: "A golden zombie" },
            { id: "c", text: "A crow" },
            { id: "d", text: "A teddy bear" },
          ],
          correctAnswer: "d",
          explanation:
            "A teddy bear. It pops out of the box instead of a weapon, then the box flies off to another spot on the map.",
        },
      ],
    },
    es: {
      title: "Contrarreloj Call of Duty: mapas y modos",
      description:
        "Veinte preguntas sobre los mapas y modos de Call of Duty, de Nuketown al Gulag de Warzone, con un minuto en total. ¡No hay tiempo para dudar!",
      questions: [
        {
          id: 1,
          image: "/images/q-call-of-duty-cartes-01.webp",
          question: "¿En qué juego apareció Nuketown por primera vez?",
          answers: [
            { id: "a", text: "Black Ops" },
            { id: "b", text: "Modern Warfare 2" },
            { id: "c", text: "World at War" },
            { id: "d", text: "Ghosts" },
          ],
          correctAnswer: "a",
          explanation:
            "Black Ops, en 2010. Este mapa pequeño con dos casas frente a frente, en un pueblo de pruebas nucleares, ha vuelto en casi todos los Black Ops desde entonces.",
        },
        {
          id: 2,
          question: "¿Cuál fue el primer mapa de Warzone?",
          answers: [
            { id: "a", text: "Caldera" },
            { id: "b", text: "Al Mazrah" },
            { id: "c", text: "Verdansk" },
            { id: "d", text: "Urzikstan" },
          ],
          correctAnswer: "c",
          explanation:
            "Verdansk, en marzo de 2020. Es una gran ciudad inventada, con un estadio, un aeropuerto y una presa. Incluso volvió al juego en 2025.",
        },
        {
          id: 3,
          image: "/images/q-call-of-duty-cartes-03.webp",
          question: "¿Cuántos jugadores había en una partida de Warzone en su lanzamiento?",
          answers: [
            { id: "a", text: "100" },
            { id: "b", text: "150" },
            { id: "c", text: "200" },
            { id: "d", text: "64" },
          ],
          correctAnswer: "b",
          explanation:
            "150 jugadores, repartidos en equipos. Son más que los 100 jugadores de una partida de Fortnite.",
        },
        {
          id: 4,
          question: "¿En qué juego aparece el mapa Rust?",
          answers: [
            { id: "a", text: "Modern Warfare 2 (2009)" },
            { id: "b", text: "Call of Duty 4" },
            { id: "c", text: "Black Ops" },
            { id: "d", text: "Modern Warfare 3" },
          ],
          correctAnswer: "a",
          explanation:
            "Modern Warfare 2, en 2009. Rust es un mapa diminuto en el desierto, alrededor de una torre petrolera oxidada.",
        },
        {
          id: 5,
          image: "/images/q-call-of-duty-cartes-05.webp",
          question: "¿Qué mapa de Call of Duty 4 se juega entre contenedores?",
          answers: [
            { id: "a", text: "Crash" },
            { id: "b", text: "Rust" },
            { id: "c", text: "Nuketown" },
            { id: "d", text: "Shipment" },
          ],
          correctAnswer: "d",
          explanation:
            "Shipment, un mapa diminuto en un astillero donde uno no para de cruzarse con enemigos. Volvió en varios Modern Warfare recientes.",
        },
        {
          id: 6,
          question: "¿En qué juego nació el modo Zombis?",
          answers: [
            { id: "a", text: "Black Ops" },
            { id: "b", text: "World at War" },
            { id: "c", text: "Black Ops II" },
            { id: "d", text: "Modern Warfare 3" },
          ],
          correctAnswer: "b",
          explanation:
            "World at War, en 2008. Al principio el modo estaba oculto: se desbloqueaba terminando la campaña.",
        },
        {
          id: 7,
          question: "¿Cuál fue el primer mapa de Zombis?",
          answers: [
            { id: "a", text: "Nacht der Untoten" },
            { id: "b", text: "Kino der Toten" },
            { id: "c", text: "Der Riese" },
            { id: "d", text: "Shi No Numa" },
          ],
          correctAnswer: "a",
          explanation:
            "Nacht der Untoten, un pequeño búnker donde hay que aguantar el máximo de rondas. Shi No Numa y Der Riese llegaron después en World at War.",
        },
        {
          id: 8,
          question: "¿Qué mapa sustituyó a Verdansk en Warzone en diciembre de 2021?",
          answers: [
            { id: "a", text: "Rebirth Island" },
            { id: "b", text: "Al Mazrah" },
            { id: "c", text: "Caldera" },
            { id: "d", text: "Fortune's Keep" },
          ],
          correctAnswer: "c",
          explanation:
            "Caldera, una isla del Pacífico que llegó con Vanguard. Al Mazrah vino después con Warzone 2.0, en noviembre de 2022.",
        },
        {
          id: 9,
          question: "En Buscar y destruir, ¿qué tiene que hacer el equipo atacante?",
          answers: [
            { id: "a", text: "Capturar una bandera" },
            { id: "b", text: "Colocar una bomba" },
            { id: "c", text: "Controlar una colina" },
            { id: "d", text: "Escoltar a un rehén" },
          ],
          correctAnswer: "b",
          explanation:
            "Colocar una bomba en uno de los dos objetivos, o eliminar a todo el equipo rival. Y cada uno solo tiene una vida por ronda.",
        },
        {
          id: 10,
          question: "En Baja confirmada, ¿qué se recoge de los enemigos abatidos?",
          answers: [
            { id: "a", text: "Placas de identificación" },
            { id: "b", text: "Banderas" },
            { id: "c", text: "Monedas de oro" },
            { id: "d", text: "Munición" },
          ],
          correctAnswer: "a",
          explanation:
            "Placas de identificación. La baja solo cuenta si se recoge la placa, y el rival puede cogerla antes para anularla. El modo llegó con Modern Warfare 3.",
        },
        {
          id: 11,
          question: "¿Cuántas bajas seguidas hacen falta para la bomba nuclear de Modern Warfare 2 (2009)?",
          answers: [
            { id: "a", text: "15" },
            { id: "b", text: "20" },
            { id: "c", text: "25" },
            { id: "d", text: "30" },
          ],
          correctAnswer: "c",
          explanation:
            "25 bajas sin morir. La bomba termina la partida al instante, y gana el equipo de quien la lanzó.",
        },
        {
          id: 12,
          image: "/images/q-call-of-duty-cartes-12.webp",
          question: "En Warzone, ¿dónde se lucha uno contra uno para volver a la partida?",
          answers: [
            { id: "a", text: "En el Búnker" },
            { id: "b", text: "En el Gulag" },
            { id: "c", text: "En la Arena" },
            { id: "d", text: "En el Estadio" },
          ],
          correctAnswer: "b",
          explanation:
            "En el Gulag. La primera vez que mueres, te enfrentas allí a otro jugador, y el ganador vuelve al mapa.",
        },
        {
          id: 13,
          question: "En Dominio, ¿cuántas zonas hay que capturar?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "Tres, llamadas A, B y C. Cada zona controlada da puntos al equipo mientras la mantenga.",
        },
        {
          id: 14,
          question: "¿Cómo se gana un Duelo por equipos?",
          answers: [
            { id: "a", text: "Colocando una bomba" },
            { id: "b", text: "Controlando una zona" },
            { id: "c", text: "Capturando una bandera" },
            { id: "d", text: "Llegando al número de bajas" },
          ],
          correctAnswer: "d",
          explanation:
            "Siendo el primer equipo en llegar al número de bajas fijado, o yendo por delante cuando se acaba el tiempo. Es el modo más sencillo del multijugador.",
        },
        {
          id: 15,
          question: "¿Qué racha de bajas muestra a los enemigos en el minimapa?",
          answers: [
            { id: "a", text: "El dron" },
            { id: "b", text: "El ataque aéreo" },
            { id: "c", text: "El helicóptero" },
            { id: "d", text: "La bomba" },
          ],
          correctAnswer: "a",
          explanation:
            "El dron de reconocimiento, el UAV en inglés. Suele ser la primera racha que se desbloquea, con tres bajas.",
        },
        {
          id: 16,
          question: "En World at War, ¿qué racha de bajas suelta una jauría en el mapa?",
          answers: [
            { id: "a", text: "Lobos" },
            { id: "b", text: "Zombis" },
            { id: "c", text: "Perros" },
            { id: "d", text: "Osos" },
          ],
          correctAnswer: "c",
          explanation:
            "Perros de ataque, que piden siete bajas seguidas. Recorren el mapa y se lanzan contra los enemigos.",
        },
        {
          id: 17,
          image: "/images/q-call-of-duty-cartes-17.webp",
          question: "¿Qué mapa de Zombis de Black Ops transcurre en un cine?",
          answers: [
            { id: "a", text: "Five" },
            { id: "b", text: "Kino der Toten" },
            { id: "c", text: "Ascension" },
            { id: "d", text: "Moon" },
          ],
          correctAnswer: "b",
          explanation:
            "Kino der Toten, que significa justamente «el cine de los muertos» en alemán. Se juega en un viejo teatro abandonado.",
        },
        {
          id: 18,
          question: "¿Qué presidente estadounidense se puede usar en el mapa de Zombis «Five»?",
          answers: [
            { id: "a", text: "John F. Kennedy" },
            { id: "b", text: "Ronald Reagan" },
            { id: "c", text: "Abraham Lincoln" },
            { id: "d", text: "Barack Obama" },
          ],
          correctAnswer: "a",
          explanation:
            "John F. Kennedy, junto a Richard Nixon, Robert McNamara y Fidel Castro. El mapa transcurre en el Pentágono.",
        },
        {
          id: 19,
          question: "En Gun Game, ¿qué pasa con cada baja?",
          answers: [
            { id: "a", text: "Ganas una vida" },
            { id: "b", text: "Recargas" },
            { id: "c", text: "Cambias de arma" },
            { id: "d", text: "Ganas un dron" },
          ],
          correctAnswer: "c",
          explanation:
            "Pasas al arma siguiente, y gana el primero que consigue una baja con la última. El modo llegó con Black Ops.",
        },
        {
          id: 20,
          question: "En Zombis, ¿qué se ve cuando la caja misteriosa cambia de sitio?",
          answers: [
            { id: "a", text: "Una calavera" },
            { id: "b", text: "Un zombi dorado" },
            { id: "c", text: "Un cuervo" },
            { id: "d", text: "Un osito de peluche" },
          ],
          correctAnswer: "d",
          explanation:
            "Un osito de peluche. Sale de la caja en lugar de un arma, y luego la caja se va volando a otro punto del mapa.",
        },
      ],
    },
  },
};

export default [quizCallOfDutyCartes] as TranslatedQuiz[];
