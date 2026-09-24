import type { TranslatedQuiz } from "./types";

/**
 * Quiz Valorant en mode chrono : le jeu de tir tactique de Riot Games, ses
 * règles de base, ses agents les plus connus et ses premières cartes.
 *
 * Comme dans quiz-naruto.ts, le chrono n'affiche les explications qu'à la
 * fin, les questions restent donc courtes. Rien ici ne dépend de la saison
 * en cours : ni classement, ni liste d'agents à jour.
 */
export const quizValorant: TranslatedQuiz = {
  slug: "quiz-valorant",
  slugs: { en: "valorant-quiz", fr: "quiz-valorant", es: "quiz-valorant" },
  categorySlug: "jeux-video",
  subcategory: "Valorant",
  difficulty: "medium",
  coverImage: "/images/sub-valorant.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 6100,
  translations: {
    fr: {
      title: "Chrono Valorant : 60 secondes",
      description:
        "Dix questions sur Valorant, ses agents, ses cartes et ses règles, avec une minute au total. Pas le temps d'hésiter !",
      questions: [
        {
          id: 1,
          question: "Quel studio a créé Valorant ?",
          answers: [
            { id: "a", text: "Blizzard" },
            { id: "b", text: "Valve" },
            { id: "c", text: "Riot Games" },
            { id: "d", text: "Ubisoft" },
          ],
          correctAnswer: "c",
          explanation:
            "Riot Games, le studio de League of Legends. Valve, c'est Counter-Strike, le jeu auquel Valorant est souvent comparé.",
        },
        {
          id: 2,
          question: "En quelle année Valorant est-il sorti ?",
          answers: [
            { id: "a", text: "2018" },
            { id: "b", text: "2019" },
            { id: "c", text: "2020" },
            { id: "d", text: "2021" },
          ],
          correctAnswer: "c",
          explanation:
            "Le 2 juin 2020, sur PC. Les versions console sont arrivées bien plus tard, en 2024.",
        },
        {
          id: 3,
          image: "/images/q-valorant-03.webp",
          question: "Comment s'appelle la bombe que posent les attaquants ?",
          answers: [
            { id: "a", text: "Le C4" },
            { id: "b", text: "Le Spike" },
            { id: "c", text: "Le Noyau" },
            { id: "d", text: "La Charge" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Spike. Les attaquants doivent l'activer sur un site, et les défenseurs doivent les en empêcher ou le désamorcer. Le C4, c'est la bombe de Counter-Strike.",
        },
        {
          id: 4,
          question: "Combien de joueurs compte une équipe ?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "c",
          explanation:
            "5 joueurs par équipe, donc 10 dans une partie classique.",
        },
        {
          id: 5,
          question: "Combien de manches faut-il gagner pour remporter une partie classique ?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "13" },
            { id: "d", text: "16" },
          ],
          correctAnswer: "c",
          explanation:
            "13 manches. La première équipe qui arrive à 13 gagne la partie.",
        },
        {
          id: 6,
          image: "/images/q-valorant-06.webp",
          question: "De quel pays vient Jett ?",
          answers: [
            { id: "a", text: "Du Japon" },
            { id: "b", text: "De Corée du Sud" },
            { id: "c", text: "De Chine" },
            { id: "d", text: "Du Vietnam" },
          ],
          correctAnswer: "b",
          explanation:
            "De Corée du Sud. Jett est une duelliste très rapide qui se déplace avec le vent.",
        },
        {
          id: 7,
          image: "/images/q-valorant-07.webp",
          question: "Quelle agente peut ressusciter un coéquipier ?",
          answers: [
            { id: "a", text: "Sage" },
            { id: "b", text: "Jett" },
            { id: "c", text: "Viper" },
            { id: "d", text: "Raze" },
          ],
          correctAnswer: "a",
          explanation:
            "Sage, avec son ultime Résurrection. Elle vient de Chine et peut aussi soigner ses alliés.",
        },
        {
          id: 8,
          question: "Lequel n'est pas un rôle d'agent dans Valorant ?",
          answers: [
            { id: "a", text: "Duelliste" },
            { id: "b", text: "Sentinelle" },
            { id: "c", text: "Contrôleur" },
            { id: "d", text: "Tank" },
          ],
          correctAnswer: "d",
          explanation:
            "Tank. Les quatre rôles du jeu sont Duelliste, Initiateur, Contrôleur et Sentinelle.",
        },
        {
          id: 9,
          image: "/images/q-valorant-09.webp",
          question: "Quelle carte a été ajoutée pour la sortie du jeu, après la bêta ?",
          answers: [
            { id: "a", text: "Bind" },
            { id: "b", text: "Haven" },
            { id: "c", text: "Split" },
            { id: "d", text: "Ascent" },
          ],
          correctAnswer: "d",
          explanation:
            "Ascent, arrivée le 2 juin 2020. Bind, Haven et Split étaient déjà là pendant la bêta fermée.",
        },
        {
          id: 10,
          question: "Quel pistolet a-t-on gratuitement au début de chaque manche ?",
          answers: [
            { id: "a", text: "Le Ghost" },
            { id: "b", text: "Le Classic" },
            { id: "c", text: "Le Sheriff" },
            { id: "d", text: "Le Frenzy" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Classic. Tout le monde commence chaque manche avec, les autres pistolets s'achètent.",
        },
      ],
    },
    en: {
      title: "Valorant Chrono: 60 seconds",
      description:
        "Ten questions on Valorant, its agents, its maps and its rules, with one minute on the clock. No time to hesitate!",
      questions: [
        {
          id: 1,
          question: "Which studio made Valorant?",
          answers: [
            { id: "a", text: "Blizzard" },
            { id: "b", text: "Valve" },
            { id: "c", text: "Riot Games" },
            { id: "d", text: "Ubisoft" },
          ],
          correctAnswer: "c",
          explanation:
            "Riot Games, the League of Legends studio. Valve makes Counter-Strike, the game Valorant is often compared to.",
        },
        {
          id: 2,
          question: "In what year did Valorant come out?",
          answers: [
            { id: "a", text: "2018" },
            { id: "b", text: "2019" },
            { id: "c", text: "2020" },
            { id: "d", text: "2021" },
          ],
          correctAnswer: "c",
          explanation:
            "On June 2, 2020, on PC. The console versions came much later, in 2024.",
        },
        {
          id: 3,
          image: "/images/q-valorant-03.webp",
          question: "What is the bomb the attackers plant called?",
          answers: [
            { id: "a", text: "The C4" },
            { id: "b", text: "The Spike" },
            { id: "c", text: "The Core" },
            { id: "d", text: "The Charge" },
          ],
          correctAnswer: "b",
          explanation:
            "The Spike. Attackers have to activate it on a site, and defenders have to stop them or defuse it. The C4 is the Counter-Strike bomb.",
        },
        {
          id: 4,
          question: "How many players are on a team?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "c",
          explanation:
            "5 players per team, so 10 in a standard match.",
        },
        {
          id: 5,
          question: "How many rounds do you need to win a standard match?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "13" },
            { id: "d", text: "16" },
          ],
          correctAnswer: "c",
          explanation:
            "13 rounds. The first team to reach 13 wins the match.",
        },
        {
          id: 6,
          image: "/images/q-valorant-06.webp",
          question: "Which country is Jett from?",
          answers: [
            { id: "a", text: "Japan" },
            { id: "b", text: "South Korea" },
            { id: "c", text: "China" },
            { id: "d", text: "Vietnam" },
          ],
          correctAnswer: "b",
          explanation:
            "South Korea. Jett is a very fast duelist who moves with the wind.",
        },
        {
          id: 7,
          image: "/images/q-valorant-07.webp",
          question: "Which agent can bring a teammate back to life?",
          answers: [
            { id: "a", text: "Sage" },
            { id: "b", text: "Jett" },
            { id: "c", text: "Viper" },
            { id: "d", text: "Raze" },
          ],
          correctAnswer: "a",
          explanation:
            "Sage, with her ultimate, Resurrection. She comes from China and can heal her allies too.",
        },
        {
          id: 8,
          question: "Which one is not an agent role in Valorant?",
          answers: [
            { id: "a", text: "Duelist" },
            { id: "b", text: "Sentinel" },
            { id: "c", text: "Controller" },
            { id: "d", text: "Tank" },
          ],
          correctAnswer: "d",
          explanation:
            "Tank. The four roles in the game are Duelist, Initiator, Controller and Sentinel.",
        },
        {
          id: 9,
          image: "/images/q-valorant-09.webp",
          question: "Which map was added for the launch, after the beta?",
          answers: [
            { id: "a", text: "Bind" },
            { id: "b", text: "Haven" },
            { id: "c", text: "Split" },
            { id: "d", text: "Ascent" },
          ],
          correctAnswer: "d",
          explanation:
            "Ascent, added on June 2, 2020. Bind, Haven and Split were already in the closed beta.",
        },
        {
          id: 10,
          question: "Which pistol do you get for free at the start of every round?",
          answers: [
            { id: "a", text: "Ghost" },
            { id: "b", text: "Classic" },
            { id: "c", text: "Sheriff" },
            { id: "d", text: "Frenzy" },
          ],
          correctAnswer: "b",
          explanation:
            "The Classic. Everyone starts each round with it, and the other pistols have to be bought.",
        },
      ],
    },
    es: {
      title: "Crono Valorant: 60 segundos",
      description:
        "Diez preguntas sobre Valorant, sus agentes, sus mapas y sus reglas, con un minuto en total. ¡No hay tiempo para dudar!",
      questions: [
        {
          id: 1,
          question: "¿Qué estudio creó Valorant?",
          answers: [
            { id: "a", text: "Blizzard" },
            { id: "b", text: "Valve" },
            { id: "c", text: "Riot Games" },
            { id: "d", text: "Ubisoft" },
          ],
          correctAnswer: "c",
          explanation:
            "Riot Games, el estudio de League of Legends. Valve es el de Counter-Strike, el juego con el que más se compara a Valorant.",
        },
        {
          id: 2,
          question: "¿En qué año salió Valorant?",
          answers: [
            { id: "a", text: "2018" },
            { id: "b", text: "2019" },
            { id: "c", text: "2020" },
            { id: "d", text: "2021" },
          ],
          correctAnswer: "c",
          explanation:
            "El 2 de junio de 2020, en PC. Las versiones de consola llegaron mucho después, en 2024.",
        },
        {
          id: 3,
          image: "/images/q-valorant-03.webp",
          question: "¿Cómo se llama la bomba que colocan los atacantes?",
          answers: [
            { id: "a", text: "El C4" },
            { id: "b", text: "La Spike" },
            { id: "c", text: "El Núcleo" },
            { id: "d", text: "La Carga" },
          ],
          correctAnswer: "b",
          explanation:
            "La Spike. Los atacantes tienen que activarla en un sitio y los defensores, impedirlo o desactivarla. El C4 es la bomba de Counter-Strike.",
        },
        {
          id: 4,
          question: "¿Cuántos jugadores tiene un equipo?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "c",
          explanation:
            "5 jugadores por equipo, o sea 10 en una partida normal.",
        },
        {
          id: 5,
          question: "¿Cuántas rondas hay que ganar para llevarse una partida normal?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "13" },
            { id: "d", text: "16" },
          ],
          correctAnswer: "c",
          explanation:
            "13 rondas. El primer equipo que llega a 13 gana la partida.",
        },
        {
          id: 6,
          image: "/images/q-valorant-06.webp",
          question: "¿De qué país es Jett?",
          answers: [
            { id: "a", text: "De Japón" },
            { id: "b", text: "De Corea del Sur" },
            { id: "c", text: "De China" },
            { id: "d", text: "De Vietnam" },
          ],
          correctAnswer: "b",
          explanation:
            "De Corea del Sur. Jett es una duelista muy rápida que se mueve con el viento.",
        },
        {
          id: 7,
          image: "/images/q-valorant-07.webp",
          question: "¿Qué agente puede resucitar a un compañero?",
          answers: [
            { id: "a", text: "Sage" },
            { id: "b", text: "Jett" },
            { id: "c", text: "Viper" },
            { id: "d", text: "Raze" },
          ],
          correctAnswer: "a",
          explanation:
            "Sage, con su definitiva, Resurrección. Viene de China y además puede curar a sus aliados.",
        },
        {
          id: 8,
          question: "¿Cuál no es un rol de agente en Valorant?",
          answers: [
            { id: "a", text: "Duelista" },
            { id: "b", text: "Centinela" },
            { id: "c", text: "Controlador" },
            { id: "d", text: "Tanque" },
          ],
          correctAnswer: "d",
          explanation:
            "Tanque. Los cuatro roles del juego son Duelista, Iniciador, Controlador y Centinela.",
        },
        {
          id: 9,
          image: "/images/q-valorant-09.webp",
          question: "¿Qué mapa se añadió para el lanzamiento, después de la beta?",
          answers: [
            { id: "a", text: "Bind" },
            { id: "b", text: "Haven" },
            { id: "c", text: "Split" },
            { id: "d", text: "Ascent" },
          ],
          correctAnswer: "d",
          explanation:
            "Ascent, que llegó el 2 de junio de 2020. Bind, Haven y Split ya estaban en la beta cerrada.",
        },
        {
          id: 10,
          question: "¿Qué pistola tienes gratis al empezar cada ronda?",
          answers: [
            { id: "a", text: "Ghost" },
            { id: "b", text: "Classic" },
            { id: "c", text: "Sheriff" },
            { id: "d", text: "Frenzy" },
          ],
          correctAnswer: "b",
          explanation:
            "La Classic. Todo el mundo empieza cada ronda con ella, y las demás pistolas hay que comprarlas.",
        },
      ],
    },
  },
};

export default [quizValorant] as TranslatedQuiz[];
