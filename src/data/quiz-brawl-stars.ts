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
        "Dix questions sur Brawl Stars, ses brawlers et ses modes de jeu, avec une minute au total. Il faut répondre vite !",
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
      ],
    },
    en: {
      title: "Brawl Stars Chrono: 60 seconds",
      description:
        "Ten questions on Brawl Stars, its brawlers and its game modes, with one minute on the clock. Answer fast!",
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
      ],
    },
    es: {
      title: "Crono Brawl Stars: 60 segundos",
      description:
        "Diez preguntas sobre Brawl Stars, sus brawlers y sus modos de juego, con un minuto en total. ¡Hay que responder rápido!",
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
      ],
    },
  },
};

export default [quizBrawlStars] as TranslatedQuiz[];
