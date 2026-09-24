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
        "Vingt questions sur Valorant, ses agents, ses cartes et ses règles, avec une minute au total. Pas le temps d'hésiter !",
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
        {
          id: 11,
          question: "Avec quoi achète-t-on ses armes en partie ?",
          answers: [
            { id: "a", text: "Des Valorant Points" },
            { id: "b", text: "Des crédits" },
            { id: "c", text: "De la radianite" },
            { id: "d", text: "Des gemmes" },
          ],
          correctAnswer: "b",
          explanation:
            "Des crédits, gagnés à chaque manche selon les éliminations et le résultat. Les Valorant Points servent à la boutique.",
        },
        {
          id: 12,
          question: "Quel type d'arme est l'Operator ?",
          answers: [
            { id: "a", text: "Un fusil à pompe" },
            { id: "b", text: "Une mitraillette" },
            { id: "c", text: "Un fusil de précision" },
            { id: "d", text: "Un pistolet" },
          ],
          correctAnswer: "c",
          explanation:
            "Un fusil de précision, l'arme la plus chère du jeu. Une balle dans le corps suffit à tuer.",
        },
        {
          id: 13,
          question: "Après combien de manches change-t-on de camp ?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "13" },
            { id: "d", text: "15" },
          ],
          correctAnswer: "b",
          explanation:
            "Après 12 manches. Les attaquants passent en défense, et les défenseurs en attaque.",
        },
        {
          id: 14,
          question: "Combien de temps avant que le Spike explose ?",
          answers: [
            { id: "a", text: "30 secondes" },
            { id: "b", text: "45 secondes" },
            { id: "c", text: "60 secondes" },
            { id: "d", text: "90 secondes" },
          ],
          correctAnswer: "b",
          explanation:
            "45 secondes après la pose. Pour le désamorcer, il faut 7 secondes.",
        },
        {
          id: 15,
          question: "Quelle carte a trois sites ?",
          answers: [
            { id: "a", text: "Bind" },
            { id: "b", text: "Ascent" },
            { id: "c", text: "Split" },
            { id: "d", text: "Haven" },
          ],
          correctAnswer: "d",
          explanation:
            "Haven, avec ses sites A, B et C. La plupart des cartes n'en ont que deux.",
        },
        {
          id: 16,
          question: "Quelle carte a des téléporteurs ?",
          answers: [
            { id: "a", text: "Haven" },
            { id: "b", text: "Ascent" },
            { id: "c", text: "Bind" },
            { id: "d", text: "Icebox" },
          ],
          correctAnswer: "c",
          explanation:
            "Bind. Elle n'a pas de milieu, mais deux téléporteurs à sens unique.",
        },
        {
          id: 17,
          question: "Comment s'appelle le championnat du monde de Valorant ?",
          answers: [
            { id: "a", text: "Worlds" },
            { id: "b", text: "The International" },
            { id: "c", text: "Valorant Champions" },
            { id: "d", text: "Le Major" },
          ],
          correctAnswer: "c",
          explanation:
            "Valorant Champions. Les Worlds, c'est League of Legends, et The International, c'est Dota 2.",
        },
        {
          id: 18,
          question: "De quel pays vient Raze ?",
          answers: [
            { id: "a", text: "Du Mexique" },
            { id: "b", text: "Du Brésil" },
            { id: "c", text: "D'Argentine" },
            { id: "d", text: "Du Portugal" },
          ],
          correctAnswer: "b",
          explanation:
            "Du Brésil, de Salvador de Bahia. C'est la spécialiste des explosifs.",
        },
        {
          id: 19,
          question: "De quel pays vient Sova ?",
          answers: [
            { id: "a", text: "De Russie" },
            { id: "b", text: "D'Ukraine" },
            { id: "c", text: "De Suède" },
            { id: "d", text: "De Norvège" },
          ],
          correctAnswer: "a",
          explanation:
            "De Russie. C'est l'archer du jeu, et ses flèches servent à repérer les ennemis.",
        },
        {
          id: 20,
          question: "Quel est le rôle de Viper ?",
          answers: [
            { id: "a", text: "Duelliste" },
            { id: "b", text: "Initiateur" },
            { id: "c", text: "Contrôleur" },
            { id: "d", text: "Sentinelle" },
          ],
          correctAnswer: "c",
          explanation:
            "Contrôleur. Viper bloque la vue des ennemis avec ses nuages et ses murs de gaz toxique.",
        },
      ],
    },
    en: {
      title: "Valorant Chrono: 60 seconds",
      description:
        "Twenty questions on Valorant, its agents, its maps and its rules, with one minute on the clock. No time to hesitate!",
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
        {
          id: 11,
          question: "What do you buy weapons with during a match?",
          answers: [
            { id: "a", text: "Valorant Points" },
            { id: "b", text: "Credits" },
            { id: "c", text: "Radianite" },
            { id: "d", text: "Gems" },
          ],
          correctAnswer: "b",
          explanation:
            "Credits, earned every round from kills and the round result. Valorant Points are for the store.",
        },
        {
          id: 12,
          question: "What kind of weapon is the Operator?",
          answers: [
            { id: "a", text: "A shotgun" },
            { id: "b", text: "An SMG" },
            { id: "c", text: "A sniper rifle" },
            { id: "d", text: "A pistol" },
          ],
          correctAnswer: "c",
          explanation:
            "A sniper rifle, and the most expensive gun in the game. One body shot is enough to kill.",
        },
        {
          id: 13,
          question: "After how many rounds do teams swap sides?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "13" },
            { id: "d", text: "15" },
          ],
          correctAnswer: "b",
          explanation:
            "After 12 rounds. Attackers move to defence, and defenders move to attack.",
        },
        {
          id: 14,
          question: "How long until a planted Spike explodes?",
          answers: [
            { id: "a", text: "30 seconds" },
            { id: "b", text: "45 seconds" },
            { id: "c", text: "60 seconds" },
            { id: "d", text: "90 seconds" },
          ],
          correctAnswer: "b",
          explanation:
            "45 seconds after the plant. Defusing it takes 7 seconds.",
        },
        {
          id: 15,
          question: "Which map has three sites?",
          answers: [
            { id: "a", text: "Bind" },
            { id: "b", text: "Ascent" },
            { id: "c", text: "Split" },
            { id: "d", text: "Haven" },
          ],
          correctAnswer: "d",
          explanation:
            "Haven, with its A, B and C sites. Most maps only have two.",
        },
        {
          id: 16,
          question: "Which map has teleporters?",
          answers: [
            { id: "a", text: "Haven" },
            { id: "b", text: "Ascent" },
            { id: "c", text: "Bind" },
            { id: "d", text: "Icebox" },
          ],
          correctAnswer: "c",
          explanation:
            "Bind. It has no mid, but it has two one-way teleporters.",
        },
        {
          id: 17,
          question: "What is the Valorant world championship called?",
          answers: [
            { id: "a", text: "Worlds" },
            { id: "b", text: "The International" },
            { id: "c", text: "Valorant Champions" },
            { id: "d", text: "The Major" },
          ],
          correctAnswer: "c",
          explanation:
            "Valorant Champions. Worlds is League of Legends, and The International is Dota 2.",
        },
        {
          id: 18,
          question: "Which country is Raze from?",
          answers: [
            { id: "a", text: "Mexico" },
            { id: "b", text: "Brazil" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Portugal" },
          ],
          correctAnswer: "b",
          explanation:
            "Brazil, from Salvador in Bahia. She is the explosives expert.",
        },
        {
          id: 19,
          question: "Which country is Sova from?",
          answers: [
            { id: "a", text: "Russia" },
            { id: "b", text: "Ukraine" },
            { id: "c", text: "Sweden" },
            { id: "d", text: "Norway" },
          ],
          correctAnswer: "a",
          explanation:
            "Russia. He is the game's archer, and he uses his arrows to spot enemies.",
        },
        {
          id: 20,
          question: "What is Viper's role?",
          answers: [
            { id: "a", text: "Duelist" },
            { id: "b", text: "Initiator" },
            { id: "c", text: "Controller" },
            { id: "d", text: "Sentinel" },
          ],
          correctAnswer: "c",
          explanation:
            "Controller. Viper blocks the enemy's vision with her clouds and walls of toxic gas.",
        },
      ],
    },
    es: {
      title: "Crono Valorant: 60 segundos",
      description:
        "Veinte preguntas sobre Valorant, sus agentes, sus mapas y sus reglas, con un minuto en total. ¡No hay tiempo para dudar!",
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
        {
          id: 11,
          question: "¿Con qué se compran las armas durante la partida?",
          answers: [
            { id: "a", text: "Valorant Points" },
            { id: "b", text: "Créditos" },
            { id: "c", text: "Radianita" },
            { id: "d", text: "Gemas" },
          ],
          correctAnswer: "b",
          explanation:
            "Con créditos, que se ganan cada ronda según las bajas y el resultado. Los Valorant Points son para la tienda.",
        },
        {
          id: 12,
          question: "¿Qué tipo de arma es el Operator?",
          answers: [
            { id: "a", text: "Una escopeta" },
            { id: "b", text: "Un subfusil" },
            { id: "c", text: "Un rifle de francotirador" },
            { id: "d", text: "Una pistola" },
          ],
          correctAnswer: "c",
          explanation:
            "Un rifle de francotirador, el arma más cara del juego. Un disparo en el cuerpo basta para matar.",
        },
        {
          id: 13,
          question: "¿Tras cuántas rondas se cambia de bando?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "13" },
            { id: "d", text: "15" },
          ],
          correctAnswer: "b",
          explanation:
            "Tras 12 rondas. Los atacantes pasan a defender, y los defensores a atacar.",
        },
        {
          id: 14,
          question: "¿Cuánto tarda en explotar la Spike?",
          answers: [
            { id: "a", text: "30 segundos" },
            { id: "b", text: "45 segundos" },
            { id: "c", text: "60 segundos" },
            { id: "d", text: "90 segundos" },
          ],
          correctAnswer: "b",
          explanation:
            "45 segundos desde que se planta. Desactivarla lleva 7 segundos.",
        },
        {
          id: 15,
          question: "¿Qué mapa tiene tres sitios?",
          answers: [
            { id: "a", text: "Bind" },
            { id: "b", text: "Ascent" },
            { id: "c", text: "Split" },
            { id: "d", text: "Haven" },
          ],
          correctAnswer: "d",
          explanation:
            "Haven, con sus sitios A, B y C. La mayoría de los mapas solo tienen dos.",
        },
        {
          id: 16,
          question: "¿Qué mapa tiene teletransportadores?",
          answers: [
            { id: "a", text: "Haven" },
            { id: "b", text: "Ascent" },
            { id: "c", text: "Bind" },
            { id: "d", text: "Icebox" },
          ],
          correctAnswer: "c",
          explanation:
            "Bind. No tiene zona central, pero sí dos teletransportadores de un solo sentido.",
        },
        {
          id: 17,
          question: "¿Cómo se llama el campeonato mundial de Valorant?",
          answers: [
            { id: "a", text: "Worlds" },
            { id: "b", text: "The International" },
            { id: "c", text: "Valorant Champions" },
            { id: "d", text: "El Major" },
          ],
          correctAnswer: "c",
          explanation:
            "Valorant Champions. Worlds es el de League of Legends, y The International, el de Dota 2.",
        },
        {
          id: 18,
          question: "¿De qué país es Raze?",
          answers: [
            { id: "a", text: "De México" },
            { id: "b", text: "De Brasil" },
            { id: "c", text: "De Argentina" },
            { id: "d", text: "De Portugal" },
          ],
          correctAnswer: "b",
          explanation:
            "De Brasil, de Salvador de Bahía. Es la experta en explosivos.",
        },
        {
          id: 19,
          question: "¿De qué país es Sova?",
          answers: [
            { id: "a", text: "De Rusia" },
            { id: "b", text: "De Ucrania" },
            { id: "c", text: "De Suecia" },
            { id: "d", text: "De Noruega" },
          ],
          correctAnswer: "a",
          explanation:
            "De Rusia. Es el arquero del juego y usa sus flechas para localizar a los enemigos.",
        },
        {
          id: 20,
          question: "¿Qué rol tiene Viper?",
          answers: [
            { id: "a", text: "Duelista" },
            { id: "b", text: "Iniciador" },
            { id: "c", text: "Controlador" },
            { id: "d", text: "Centinela" },
          ],
          correctAnswer: "c",
          explanation:
            "Controlador. Viper tapa la visión de los enemigos con sus nubes y sus muros de gas tóxico.",
        },
      ],
    },
  },
};

export default [quizValorant] as TranslatedQuiz[];
