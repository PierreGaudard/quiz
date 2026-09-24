import type { TranslatedQuiz } from "./types";

/**
 * Quiz Brawl Stars en mode chrono : les brawlers les plus connus, les modes
 * de jeu et leurs règles de base.
 *
 * Comme dans quiz-naruto.ts, le chrono n'affiche les explications qu'à la
 * fin : les questions restent courtes. Les modes portent leur nom officiel
 * dans chaque langue (Razzia de gemmes, Gem Grab, Atrapagemas, etc.).
 */
export const quizBrawlStars: TranslatedQuiz = {
  slug: "quiz-brawl-stars",
  slugs: { en: "brawl-stars-quiz", fr: "quiz-brawl-stars", es: "quiz-brawl-stars" },
  categorySlug: "jeux-video",
  subcategory: "Brawl Stars",
  difficulty: "easy",
  coverImage: "/images/sub-brawl-stars.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 7200,
  translations: {
    fr: {
      title: "Chrono Brawl Stars : 60 secondes",
      description:
        "Vingt questions sur Brawl Stars, ses brawlers et ses modes de jeu, avec une minute au total. Il faut répondre vite !",
      questions: [
        {
          id: 1,
          image: "/images/q-brawl-stars-01.webp",
          question: "Quel brawler a-t-on dès le début du jeu ?",
          answers: [
            { id: "a", text: "Shelly" },
            { id: "b", text: "Colt" },
            { id: "c", text: "Spike" },
            { id: "d", text: "Leon" },
          ],
          correctAnswer: "a",
          explanation:
            "Shelly, avec son fusil à pompe. C'est le premier brawler que tout le monde reçoit en lançant le jeu.",
        },
        {
          id: 2,
          question: "Quel studio a créé Brawl Stars ?",
          answers: [
            { id: "a", text: "Rovio" },
            { id: "b", text: "Supercell" },
            { id: "c", text: "King" },
            { id: "d", text: "Epic Games" },
          ],
          correctAnswer: "b",
          explanation:
            "Supercell, le studio finlandais qui a aussi fait Clash of Clans et Clash Royale. Rovio, c'est Angry Birds.",
        },
        {
          id: 3,
          question: "En quelle année Brawl Stars est-il sorti dans le monde entier ?",
          answers: [
            { id: "a", text: "2016" },
            { id: "b", text: "2017" },
            { id: "c", text: "2018" },
            { id: "d", text: "2020" },
          ],
          correctAnswer: "c",
          explanation:
            "Le 12 décembre 2018. Le jeu était en test au Canada depuis juin 2017, mais la sortie mondiale date bien de 2018.",
        },
        {
          id: 4,
          question: "En Razzia de gemmes, combien de gemmes faut-il tenir pour lancer le compte à rebours ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "10" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "b",
          explanation:
            "10 gemmes. Si ton équipe les garde pendant 15 secondes, elle gagne la partie.",
        },
        {
          id: 5,
          image: "/images/q-brawl-stars-05.webp",
          question: "Spike est…",
          answers: [
            { id: "a", text: "Un robot" },
            { id: "b", text: "Un champignon" },
            { id: "c", text: "Un cactus" },
            { id: "d", text: "Un squelette" },
          ],
          correctAnswer: "c",
          explanation:
            "Un cactus, avec une fleur rouge sur la tête. Il lance des épines, ce qui colle bien au personnage.",
        },
        {
          id: 6,
          question: "Combien de joueurs s'affrontent en Survivant solo ?",
          answers: [
            { id: "a", text: "6" },
            { id: "b", text: "10" },
            { id: "c", text: "16" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "b",
          explanation:
            "10 joueurs, et le dernier en vie gagne. C'est le mode battle royale de Brawl Stars.",
        },
        {
          id: 7,
          image: "/images/q-brawl-stars-07.webp",
          question: "El Primo est…",
          answers: [
            { id: "a", text: "Un cow-boy" },
            { id: "b", text: "Un catcheur mexicain" },
            { id: "c", text: "Un pirate" },
            { id: "d", text: "Un boxeur anglais" },
          ],
          correctAnswer: "b",
          explanation:
            "Un catcheur mexicain, un luchador, avec son masque bleu. Il se bat à coups de poing, de très près.",
        },
        {
          id: 8,
          image: "/images/q-brawl-stars-08.webp",
          question: "En Brawl Ball, combien de buts faut-il marquer pour gagner ?",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "2 buts. La première équipe qui marque deux fois remporte le match.",
        },
        {
          id: 9,
          question: "En Braquage, que faut-il détruire ?",
          answers: [
            { id: "a", text: "La tour adverse" },
            { id: "b", text: "Le drapeau adverse" },
            { id: "c", text: "Le coffre-fort adverse" },
            { id: "d", text: "Le robot adverse" },
          ],
          correctAnswer: "c",
          explanation:
            "Le coffre-fort de l'équipe d'en face, tout en protégeant le sien. Il encaisse beaucoup de dégâts, du coup il faut s'y mettre à plusieurs.",
        },
        {
          id: 10,
          question: "Que lance Dynamike ?",
          answers: [
            { id: "a", text: "Des flèches" },
            { id: "b", text: "Des boules de neige" },
            { id: "c", text: "Des tartes" },
            { id: "d", text: "De la dynamite" },
          ],
          correctAnswer: "d",
          explanation:
            "De la dynamite, d'où son nom. C'est un vieux mineur qui lance ses bâtons par-dessus les murs.",
        },
        {
          id: 11,
          question: "Que fait le Super de Leon ?",
          answers: [
            { id: "a", text: "Il le rend invisible" },
            { id: "b", text: "Il le fait voler" },
            { id: "c", text: "Il le soigne" },
            { id: "d", text: "Il pose une tourelle" },
          ],
          correctAnswer: "a",
          explanation:
            "Il le rend invisible pendant quelques secondes, de quoi surprendre ses adversaires.",
        },
        {
          id: 12,
          question: "De quel instrument joue Poco ?",
          answers: [
            { id: "a", text: "Du violon" },
            { id: "b", text: "De la trompette" },
            { id: "c", text: "De la guitare" },
            { id: "d", text: "De la batterie" },
          ],
          correctAnswer: "c",
          explanation:
            "D'une grosse guitare mexicaine, un guitarrón. Sa musique blesse les ennemis et soigne ses alliés.",
        },
        {
          id: 13,
          question: "Quel animal Nita fait-elle apparaître ?",
          answers: [
            { id: "a", text: "Un loup" },
            { id: "b", text: "Un ours" },
            { id: "c", text: "Un aigle" },
            { id: "d", text: "Un tigre" },
          ],
          correctAnswer: "b",
          explanation:
            "Un ours, avec son Super. Elle porte d'ailleurs un ours en peluche sur la tête.",
        },
        {
          id: 14,
          question: "Que pose Jessie avec son Super ?",
          answers: [
            { id: "a", text: "Un mur" },
            { id: "b", text: "Un piège" },
            { id: "c", text: "Une tourelle" },
            { id: "d", text: "Une bombe" },
          ],
          correctAnswer: "c",
          explanation:
            "Une tourelle, Scrappy, qui tire toute seule sur les ennemis proches.",
        },
        {
          id: 15,
          question: "Avec quoi Mortis attaque-t-il ?",
          answers: [
            { id: "a", text: "Une faux" },
            { id: "b", text: "Une pelle" },
            { id: "c", text: "Une épée" },
            { id: "d", text: "Un marteau" },
          ],
          correctAnswer: "b",
          explanation:
            "Une pelle. À chaque attaque, il se jette en avant en donnant un coup avec.",
        },
        {
          id: 16,
          question: "Que lance Barley ?",
          answers: [
            { id: "a", text: "Des bouteilles" },
            { id: "b", text: "Des grenades" },
            { id: "c", text: "Des tartes" },
            { id: "d", text: "Des cailloux" },
          ],
          correctAnswer: "a",
          explanation:
            "Des bouteilles, qui laissent au sol une flaque qui continue de faire des dégâts.",
        },
        {
          id: 17,
          question: "Avec quoi Crow empoisonne-t-il ses ennemis ?",
          answers: [
            { id: "a", text: "Des flèches" },
            { id: "b", text: "Des fléchettes" },
            { id: "c", text: "Des griffes" },
            { id: "d", text: "Des dagues" },
          ],
          correctAnswer: "d",
          explanation:
            "Des dagues. Il en lance trois à la fois, et le poison continue de faire des dégâts après.",
        },
        {
          id: 18,
          question: "En Razzia de gemmes, combien de joueurs compte chaque équipe ?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "3 joueurs. La Razzia de gemmes se joue en 3 contre 3.",
        },
        {
          id: 19,
          question: "Que gagne-t-on en cas de victoire et perd-on en cas de défaite ?",
          answers: [
            { id: "a", text: "Des gemmes" },
            { id: "b", text: "Des pièces" },
            { id: "c", text: "Des trophées" },
            { id: "d", text: "Des étoiles" },
          ],
          correctAnswer: "c",
          explanation:
            "Des trophées. Chaque brawler a son propre compteur, et le total donne le nombre de trophées du joueur.",
        },
        {
          id: 20,
          question: "Qui est la petite sœur de Leon ?",
          answers: [
            { id: "a", text: "Shelly" },
            { id: "b", text: "Nita" },
            { id: "c", text: "Piper" },
            { id: "d", text: "Jessie" },
          ],
          correctAnswer: "b",
          explanation:
            "Nita. Leon est plutôt solitaire, et sa petite sœur est la seule qui arrive à l'approcher.",
        },
      ],
    },
    en: {
      title: "Brawl Stars Chrono: 60 seconds",
      description:
        "Twenty questions on Brawl Stars, its brawlers and its game modes, with one minute on the clock. Answer fast!",
      questions: [
        {
          id: 1,
          image: "/images/q-brawl-stars-01.webp",
          question: "Which brawler do you get at the very start?",
          answers: [
            { id: "a", text: "Shelly" },
            { id: "b", text: "Colt" },
            { id: "c", text: "Spike" },
            { id: "d", text: "Leon" },
          ],
          correctAnswer: "a",
          explanation:
            "Shelly, with her shotgun. She is the first brawler everyone gets when they start the game.",
        },
        {
          id: 2,
          question: "Which studio made Brawl Stars?",
          answers: [
            { id: "a", text: "Rovio" },
            { id: "b", text: "Supercell" },
            { id: "c", text: "King" },
            { id: "d", text: "Epic Games" },
          ],
          correctAnswer: "b",
          explanation:
            "Supercell, the Finnish studio that also made Clash of Clans and Clash Royale. Rovio is the Angry Birds studio.",
        },
        {
          id: 3,
          question: "In what year did Brawl Stars launch worldwide?",
          answers: [
            { id: "a", text: "2016" },
            { id: "b", text: "2017" },
            { id: "c", text: "2018" },
            { id: "d", text: "2020" },
          ],
          correctAnswer: "c",
          explanation:
            "On December 12, 2018. The game had been in a test launch in Canada since June 2017, but the global release was in 2018.",
        },
        {
          id: 4,
          question: "In Gem Grab, how many gems must your team hold to start the countdown?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "10" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "b",
          explanation:
            "10 gems. If your team holds them for 15 seconds, you win the match.",
        },
        {
          id: 5,
          image: "/images/q-brawl-stars-05.webp",
          question: "Spike is…",
          answers: [
            { id: "a", text: "A robot" },
            { id: "b", text: "A mushroom" },
            { id: "c", text: "A cactus" },
            { id: "d", text: "A skeleton" },
          ],
          correctAnswer: "c",
          explanation:
            "A cactus, with a red flower on his head. He throws spikes, which fits the character nicely.",
        },
        {
          id: 6,
          question: "How many players fight in Solo Showdown?",
          answers: [
            { id: "a", text: "6" },
            { id: "b", text: "10" },
            { id: "c", text: "16" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "b",
          explanation:
            "10 players, and the last one standing wins. It is the battle royale mode of Brawl Stars.",
        },
        {
          id: 7,
          image: "/images/q-brawl-stars-07.webp",
          question: "El Primo is…",
          answers: [
            { id: "a", text: "A cowboy" },
            { id: "b", text: "A Mexican wrestler" },
            { id: "c", text: "A pirate" },
            { id: "d", text: "An English boxer" },
          ],
          correctAnswer: "b",
          explanation:
            "A Mexican wrestler, a luchador, in a blue mask. He fights with his fists at very close range.",
        },
        {
          id: 8,
          image: "/images/q-brawl-stars-08.webp",
          question: "In Brawl Ball, how many goals do you need to win?",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "2 goals. The first team to score twice wins the match.",
        },
        {
          id: 9,
          question: "In Heist, what do you have to destroy?",
          answers: [
            { id: "a", text: "The enemy tower" },
            { id: "b", text: "The enemy flag" },
            { id: "c", text: "The enemy safe" },
            { id: "d", text: "The enemy robot" },
          ],
          correctAnswer: "c",
          explanation:
            "The other team's safe, while you protect your own. It takes a lot of damage, so it usually needs the whole team.",
        },
        {
          id: 10,
          question: "What does Dynamike throw?",
          answers: [
            { id: "a", text: "Arrows" },
            { id: "b", text: "Snowballs" },
            { id: "c", text: "Pies" },
            { id: "d", text: "Dynamite" },
          ],
          correctAnswer: "d",
          explanation:
            "Dynamite, hence the name. He is an old miner who lobs his sticks over walls.",
        },
        {
          id: 11,
          question: "What does Leon's Super do?",
          answers: [
            { id: "a", text: "Turns him invisible" },
            { id: "b", text: "Makes him fly" },
            { id: "c", text: "Heals him" },
            { id: "d", text: "Places a turret" },
          ],
          correctAnswer: "a",
          explanation:
            "It turns him invisible for a few seconds, which is perfect for sneaking up on enemies.",
        },
        {
          id: 12,
          question: "What instrument does Poco play?",
          answers: [
            { id: "a", text: "Violin" },
            { id: "b", text: "Trumpet" },
            { id: "c", text: "Guitar" },
            { id: "d", text: "Drums" },
          ],
          correctAnswer: "c",
          explanation:
            "A big Mexican guitar called a guitarrón. His music hurts enemies and heals teammates.",
        },
        {
          id: 13,
          question: "Which animal does Nita summon?",
          answers: [
            { id: "a", text: "A wolf" },
            { id: "b", text: "A bear" },
            { id: "c", text: "An eagle" },
            { id: "d", text: "A tiger" },
          ],
          correctAnswer: "b",
          explanation:
            "A bear, with her Super. She even wears a teddy bear on her head.",
        },
        {
          id: 14,
          question: "What does Jessie place with her Super?",
          answers: [
            { id: "a", text: "A wall" },
            { id: "b", text: "A trap" },
            { id: "c", text: "A turret" },
            { id: "d", text: "A bomb" },
          ],
          correctAnswer: "c",
          explanation:
            "A turret called Scrappy, which shoots nearby enemies on its own.",
        },
        {
          id: 15,
          question: "What does Mortis attack with?",
          answers: [
            { id: "a", text: "A scythe" },
            { id: "b", text: "A shovel" },
            { id: "c", text: "A sword" },
            { id: "d", text: "A hammer" },
          ],
          correctAnswer: "b",
          explanation:
            "A shovel. Every attack makes him dash forward and swing it.",
        },
        {
          id: 16,
          question: "What does Barley throw?",
          answers: [
            { id: "a", text: "Bottles" },
            { id: "b", text: "Grenades" },
            { id: "c", text: "Pies" },
            { id: "d", text: "Rocks" },
          ],
          correctAnswer: "a",
          explanation:
            "Bottles, which leave a puddle on the ground that keeps dealing damage.",
        },
        {
          id: 17,
          question: "What does Crow poison his enemies with?",
          answers: [
            { id: "a", text: "Arrows" },
            { id: "b", text: "Darts" },
            { id: "c", text: "Claws" },
            { id: "d", text: "Daggers" },
          ],
          correctAnswer: "d",
          explanation:
            "Daggers. He throws three at a time, and the poison keeps hurting afterwards.",
        },
        {
          id: 18,
          question: "In Gem Grab, how many players are on each team?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "3 players. Gem Grab is a 3v3 mode.",
        },
        {
          id: 19,
          question: "What do you win when you win a match and lose when you lose?",
          answers: [
            { id: "a", text: "Gems" },
            { id: "b", text: "Coins" },
            { id: "c", text: "Trophies" },
            { id: "d", text: "Stars" },
          ],
          correctAnswer: "c",
          explanation:
            "Trophies. Each brawler has their own count, and the total is the player's trophy count.",
        },
        {
          id: 20,
          question: "Who is Leon's little sister?",
          answers: [
            { id: "a", text: "Shelly" },
            { id: "b", text: "Nita" },
            { id: "c", text: "Piper" },
            { id: "d", text: "Jessie" },
          ],
          correctAnswer: "b",
          explanation:
            "Nita. Leon is a bit of a loner, and his little sister is the only one who gets through to him.",
        },
      ],
    },
    es: {
      title: "Crono Brawl Stars: 60 segundos",
      description:
        "Veinte preguntas sobre Brawl Stars, sus brawlers y sus modos de juego, con un minuto en total. ¡Hay que responder rápido!",
      questions: [
        {
          id: 1,
          image: "/images/q-brawl-stars-01.webp",
          question: "¿Qué brawler tienes desde el principio?",
          answers: [
            { id: "a", text: "Shelly" },
            { id: "b", text: "Colt" },
            { id: "c", text: "Spike" },
            { id: "d", text: "Leon" },
          ],
          correctAnswer: "a",
          explanation:
            "Shelly, con su escopeta. Es el primer brawler que recibe todo el mundo al empezar a jugar.",
        },
        {
          id: 2,
          question: "¿Qué estudio creó Brawl Stars?",
          answers: [
            { id: "a", text: "Rovio" },
            { id: "b", text: "Supercell" },
            { id: "c", text: "King" },
            { id: "d", text: "Epic Games" },
          ],
          correctAnswer: "b",
          explanation:
            "Supercell, el estudio finlandés que también hizo Clash of Clans y Clash Royale. Rovio es el de Angry Birds.",
        },
        {
          id: 3,
          question: "¿En qué año salió Brawl Stars en todo el mundo?",
          answers: [
            { id: "a", text: "2016" },
            { id: "b", text: "2017" },
            { id: "c", text: "2018" },
            { id: "d", text: "2020" },
          ],
          correctAnswer: "c",
          explanation:
            "El 12 de diciembre de 2018. El juego estaba en pruebas en Canadá desde junio de 2017, pero el lanzamiento mundial fue en 2018.",
        },
        {
          id: 4,
          question: "En Atrapagemas, ¿cuántas gemas hay que tener para que empiece la cuenta atrás?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "10" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "b",
          explanation:
            "10 gemas. Si tu equipo las aguanta durante 15 segundos, gana la partida.",
        },
        {
          id: 5,
          image: "/images/q-brawl-stars-05.webp",
          question: "Spike es…",
          answers: [
            { id: "a", text: "Un robot" },
            { id: "b", text: "Una seta" },
            { id: "c", text: "Un cactus" },
            { id: "d", text: "Un esqueleto" },
          ],
          correctAnswer: "c",
          explanation:
            "Un cactus, con una flor roja en la cabeza. Lanza espinas, así que el personaje tiene todo el sentido.",
        },
        {
          id: 6,
          question: "¿Cuántos jugadores se enfrentan en Supervivencia en solitario?",
          answers: [
            { id: "a", text: "6" },
            { id: "b", text: "10" },
            { id: "c", text: "16" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "b",
          explanation:
            "10 jugadores, y gana el último que queda en pie. Es el modo battle royale de Brawl Stars.",
        },
        {
          id: 7,
          image: "/images/q-brawl-stars-07.webp",
          question: "El Primo es…",
          answers: [
            { id: "a", text: "Un vaquero" },
            { id: "b", text: "Un luchador mexicano" },
            { id: "c", text: "Un pirata" },
            { id: "d", text: "Un boxeador inglés" },
          ],
          correctAnswer: "b",
          explanation:
            "Un luchador mexicano de lucha libre, con su máscara azul. Pelea a puñetazos, muy de cerca.",
        },
        {
          id: 8,
          image: "/images/q-brawl-stars-08.webp",
          question: "En Balón Brawl, ¿cuántos goles hay que marcar para ganar?",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "2 goles. El primer equipo que marca dos veces gana el partido.",
        },
        {
          id: 9,
          question: "En Atraco, ¿qué hay que destruir?",
          answers: [
            { id: "a", text: "La torre rival" },
            { id: "b", text: "La bandera rival" },
            { id: "c", text: "La caja fuerte rival" },
            { id: "d", text: "El robot rival" },
          ],
          correctAnswer: "c",
          explanation:
            "La caja fuerte del otro equipo, mientras proteges la tuya. Aguanta mucho daño, por eso suele hacer falta todo el equipo.",
        },
        {
          id: 10,
          question: "¿Qué lanza Dynamike?",
          answers: [
            { id: "a", text: "Flechas" },
            { id: "b", text: "Bolas de nieve" },
            { id: "c", text: "Tartas" },
            { id: "d", text: "Dinamita" },
          ],
          correctAnswer: "d",
          explanation:
            "Dinamita, de ahí su nombre. Es un viejo minero que tira sus cartuchos por encima de los muros.",
        },
        {
          id: 11,
          question: "¿Qué hace el súper de Leon?",
          answers: [
            { id: "a", text: "Lo vuelve invisible" },
            { id: "b", text: "Lo hace volar" },
            { id: "c", text: "Lo cura" },
            { id: "d", text: "Coloca una torreta" },
          ],
          correctAnswer: "a",
          explanation:
            "Lo vuelve invisible durante unos segundos, ideal para pillar por sorpresa a los rivales.",
        },
        {
          id: 12,
          question: "¿Qué instrumento toca Poco?",
          answers: [
            { id: "a", text: "El violín" },
            { id: "b", text: "La trompeta" },
            { id: "c", text: "La guitarra" },
            { id: "d", text: "La batería" },
          ],
          correctAnswer: "c",
          explanation:
            "Un guitarrón, una guitarra mexicana grande. Su música daña a los enemigos y cura a los aliados.",
        },
        {
          id: 13,
          question: "¿Qué animal invoca Nita?",
          answers: [
            { id: "a", text: "Un lobo" },
            { id: "b", text: "Un oso" },
            { id: "c", text: "Un águila" },
            { id: "d", text: "Un tigre" },
          ],
          correctAnswer: "b",
          explanation:
            "Un oso, con su súper. De hecho, lleva un oso de peluche en la cabeza.",
        },
        {
          id: 14,
          question: "¿Qué coloca Jessie con su súper?",
          answers: [
            { id: "a", text: "Un muro" },
            { id: "b", text: "Una trampa" },
            { id: "c", text: "Una torreta" },
            { id: "d", text: "Una bomba" },
          ],
          correctAnswer: "c",
          explanation:
            "Una torreta, Scrappy, que dispara sola a los enemigos cercanos.",
        },
        {
          id: 15,
          question: "¿Con qué ataca Mortis?",
          answers: [
            { id: "a", text: "Una guadaña" },
            { id: "b", text: "Una pala" },
            { id: "c", text: "Una espada" },
            { id: "d", text: "Un martillo" },
          ],
          correctAnswer: "b",
          explanation:
            "Con una pala. En cada ataque se lanza hacia delante y da un golpe con ella.",
        },
        {
          id: 16,
          question: "¿Qué lanza Barley?",
          answers: [
            { id: "a", text: "Botellas" },
            { id: "b", text: "Granadas" },
            { id: "c", text: "Tartas" },
            { id: "d", text: "Piedras" },
          ],
          correctAnswer: "a",
          explanation:
            "Botellas, que dejan un charco en el suelo que sigue haciendo daño.",
        },
        {
          id: 17,
          question: "¿Con qué envenena Crow a sus enemigos?",
          answers: [
            { id: "a", text: "Flechas" },
            { id: "b", text: "Dardos" },
            { id: "c", text: "Garras" },
            { id: "d", text: "Dagas" },
          ],
          correctAnswer: "d",
          explanation:
            "Con dagas. Lanza tres a la vez, y el veneno sigue haciendo daño después.",
        },
        {
          id: 18,
          question: "En Atrapagemas, ¿cuántos jugadores tiene cada equipo?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "3 jugadores. Atrapagemas se juega en 3 contra 3.",
        },
        {
          id: 19,
          question: "¿Qué se gana al ganar una partida y se pierde al perderla?",
          answers: [
            { id: "a", text: "Gemas" },
            { id: "b", text: "Monedas" },
            { id: "c", text: "Trofeos" },
            { id: "d", text: "Estrellas" },
          ],
          correctAnswer: "c",
          explanation:
            "Trofeos. Cada brawler tiene su propio contador, y el total da los trofeos del jugador.",
        },
        {
          id: 20,
          question: "¿Quién es la hermana pequeña de Leon?",
          answers: [
            { id: "a", text: "Shelly" },
            { id: "b", text: "Nita" },
            { id: "c", text: "Piper" },
            { id: "d", text: "Jessie" },
          ],
          correctAnswer: "b",
          explanation:
            "Nita. Leon es bastante solitario, y su hermana pequeña es la única que consigue acercarse a él.",
        },
      ],
    },
  },
};

export default [quizBrawlStars] as TranslatedQuiz[];
