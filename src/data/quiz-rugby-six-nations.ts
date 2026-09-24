import type { TranslatedQuiz } from "./types";

/**
 * Quiz chrono sur le Tournoi des Six Nations : trophees, stades, Grand
 * Chelem, points de bonus et records.
 *
 * 20 questions : le lecteur s'arrete quand toutes sont jouees, et avec 10 un
 * bon joueur finirait avant les 60 secondes. Les explications ne s'affichent
 * qu'a la fin, donc les questions restent courtes. Le quiz qcm existant
 * demande deja quel pays ne fait pas partie du Tournoi : pas repris ici.
 * Records (O'Driscoll, Parisse, Sexton) verifies en septembre 2026.
 */
export const quizRugbySixNations: TranslatedQuiz = {
  slug: "quiz-rugby-six-nations",
  slugs: { en: "six-nations-quiz", fr: "quiz-rugby-six-nations", es: "quiz-rugby-seis-naciones" },
  categorySlug: "sport",
  subcategory: "Rugby",
  difficulty: "medium",
  coverImage: "/images/cover-rugby-six-nations.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 4400,
  translations: {
    fr: {
      title: "Chrono rugby : le Tournoi des Six Nations",
      description:
        "Vingt questions en une minute sur le Tournoi des Six Nations : Grand Chelem, cuillère de bois, Crunch, stades et records.",
      questions: [
        {
          id: 1,
          image: "/images/q-rugby-six-nations-02.webp",
          question: "En quelle année l'Italie a-t-elle rejoint le Tournoi ?",
          answers: [
            { id: "a", text: "1994" },
            { id: "b", text: "2000" },
            { id: "c", text: "2004" },
            { id: "d", text: "2010" },
          ],
          correctAnswer: "b",
          explanation:
            "En 2000. Le Tournoi des Cinq Nations est alors devenu le Tournoi des Six Nations, et l'Italie a battu l'Écosse dès son premier match.",
        },
        {
          id: 2,
          question: "Comment appelle-t-on le fait de gagner tous ses matchs du Tournoi ?",
          answers: [
            { id: "a", text: "Le Grand Chelem" },
            { id: "b", text: "La Triple Couronne" },
            { id: "c", text: "Le carré d'as" },
            { id: "d", text: "Le sans-faute" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Grand Chelem : cinq matchs, cinq victoires. On peut gagner le Tournoi sans faire de Grand Chelem, mais pas l'inverse.",
        },
        {
          id: 3,
          question: "Que reçoit, symboliquement, l'équipe qui perd tous ses matchs ?",
          answers: [
            { id: "a", text: "Le bonnet d'âne" },
            { id: "b", text: "La lanterne rouge" },
            { id: "c", text: "La cuillère de bois" },
            { id: "d", text: "La médaille en chocolat" },
          ],
          correctAnswer: "c",
          explanation:
            "La cuillère de bois. Ce n'est pas un vrai trophée, juste une façon de désigner la dernière place quand on n'a gagné aucun match.",
        },
        {
          id: 4,
          question: "Quelles équipes s'affrontent pour la Calcutta Cup ?",
          answers: [
            { id: "a", text: "Angleterre et Écosse" },
            { id: "b", text: "Irlande et pays de Galles" },
            { id: "c", text: "France et Angleterre" },
            { id: "d", text: "Écosse et Irlande" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Angleterre et l'Écosse. C'est le plus vieux trophée entre deux équipes nationales de rugby, disputé depuis 1879.",
        },
        {
          id: 5,
          question: "Quel match a-t-on surnommé « le Crunch » ?",
          answers: [
            { id: "a", text: "Irlande-Angleterre" },
            { id: "b", text: "France-Angleterre" },
            { id: "c", text: "France-pays de Galles" },
            { id: "d", text: "Écosse-Angleterre" },
          ],
          correctAnswer: "b",
          explanation:
            "France-Angleterre, le match le plus attendu du Tournoi, en France comme en Angleterre.",
        },
        {
          id: 6,
          image: "/images/q-rugby-six-nations-01.webp",
          question: "Le trophée Garibaldi récompense le vainqueur de quel match ?",
          answers: [
            { id: "a", text: "France-Italie" },
            { id: "b", text: "Italie-Écosse" },
            { id: "c", text: "Italie-Irlande" },
            { id: "d", text: "France-Écosse" },
          ],
          correctAnswer: "a",
          explanation:
            "France-Italie, depuis 2007, pour les 200 ans de la naissance de Giuseppe Garibaldi, un héros de l'unité italienne né à Nice.",
        },
        {
          id: 7,
          image: "/images/q-rugby-six-nations-03.webp",
          question: "Dans quelle ville le pays de Galles joue-t-il ses matchs à domicile ?",
          answers: [
            { id: "a", text: "Swansea" },
            { id: "b", text: "Newport" },
            { id: "c", text: "Cardiff" },
            { id: "d", text: "Llanelli" },
          ],
          correctAnswer: "c",
          explanation:
            "À Cardiff, dans l'ancien Millennium Stadium, qui s'appelle aujourd'hui le Principality Stadium. Son toit peut se fermer.",
        },
        {
          id: 8,
          question: "En quelle année la France a-t-elle réussi son dernier Grand Chelem ?",
          answers: [
            { id: "a", text: "2010" },
            { id: "b", text: "2016" },
            { id: "c", text: "2022" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "En 2022, son dixième. La France a gagné le Tournoi en 2025 et en 2026, mais en perdant un match à chaque fois.",
        },
        {
          id: 9,
          question: "Quelle équipe a gagné le Tournoi des Six Nations 2026 ?",
          answers: [
            { id: "a", text: "L'Irlande" },
            { id: "b", text: "L'Angleterre" },
            { id: "c", text: "L'Écosse" },
            { id: "d", text: "La France" },
          ],
          correctAnswer: "d",
          explanation:
            "La France, qui a battu l'Angleterre 48 à 46 au Stade de France lors de la dernière journée. L'Irlande a fini deuxième.",
        },
        {
          id: 10,
          image: "/images/q-rugby-six-nations-04.webp",
          question: "Combien de matchs chaque équipe joue-t-elle pendant le Tournoi ?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "c",
          explanation:
            "Cinq : chaque équipe joue une fois contre chacune des cinq autres, à domicile ou à l'extérieur selon les années.",
        },
        {
          id: 11,
          question: "En quelle année la France a-t-elle rejoint le Tournoi ?",
          answers: [
            { id: "a", text: "1883" },
            { id: "b", text: "1910" },
            { id: "c", text: "1947" },
            { id: "d", text: "1959" },
          ],
          correctAnswer: "b",
          explanation:
            "En 1910. Le Tournoi des quatre nations britanniques et irlandaise est alors devenu le Tournoi des Cinq Nations.",
        },
        {
          id: 12,
          question: "Dans quel stade l'Irlande joue-t-elle à Dublin ?",
          answers: [
            { id: "a", text: "Croke Park" },
            { id: "b", text: "Thomond Park" },
            { id: "c", text: "L'Aviva Stadium" },
            { id: "d", text: "Ravenhill" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Aviva Stadium, construit à la place de l'ancien stade de Lansdowne Road et ouvert en 2010.",
        },
        {
          id: 13,
          question: "Comment s'appelle le stade de l'Angleterre ?",
          answers: [
            { id: "a", text: "Wembley" },
            { id: "b", text: "Twickenham" },
            { id: "c", text: "Murrayfield" },
            { id: "d", text: "Old Trafford" },
          ],
          correctAnswer: "b",
          explanation:
            "Twickenham, dans le sud-ouest de Londres. La fédération anglaise y a son siège, d'où son surnom de « HQ ».",
        },
        {
          id: 14,
          question: "Dans quelle ville joue l'Écosse ?",
          answers: [
            { id: "a", text: "Glasgow" },
            { id: "b", text: "Aberdeen" },
            { id: "c", text: "Édimbourg" },
            { id: "d", text: "Dundee" },
          ],
          correctAnswer: "c",
          explanation:
            "À Édimbourg, au stade de Murrayfield.",
        },
        {
          id: 15,
          question: "Combien d'essais faut-il marquer dans un match pour avoir le point de bonus offensif ?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "c",
          explanation:
            "Quatre essais. Il existe aussi un point de bonus défensif, pour une équipe qui perd de moins de sept points.",
        },
        {
          id: 16,
          question: "Combien de points de bonus rapporte un Grand Chelem au classement ?",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "c",
          explanation:
            "3 points. Sans ce bonus, une équipe qui gagne tous ses matchs pourrait finir derrière une autre, grâce aux points de bonus offensifs.",
        },
        {
          id: 17,
          question: "Qui a marqué le plus d'essais de l'histoire du Tournoi ?",
          answers: [
            { id: "a", text: "Brian O'Driscoll" },
            { id: "b", text: "Shane Williams" },
            { id: "c", text: "Antoine Dupont" },
            { id: "d", text: "Jonny Wilkinson" },
          ],
          correctAnswer: "a",
          explanation:
            "Brian O'Driscoll, le centre irlandais, avec 26 essais.",
        },
        {
          id: 18,
          question: "Quel joueur a disputé le plus de matchs dans le Tournoi ?",
          answers: [
            { id: "a", text: "Alun Wyn Jones" },
            { id: "b", text: "Sergio Parisse" },
            { id: "c", text: "Brian O'Driscoll" },
            { id: "d", text: "Fabien Pelous" },
          ],
          correctAnswer: "b",
          explanation:
            "Sergio Parisse, le troisième ligne italien, avec 69 matchs.",
        },
        {
          id: 19,
          question: "Qui a marqué le plus de points de l'histoire du Tournoi ?",
          answers: [
            { id: "a", text: "Jonny Wilkinson" },
            { id: "b", text: "Owen Farrell" },
            { id: "c", text: "Johnny Sexton" },
            { id: "d", text: "Ronan O'Gara" },
          ],
          correctAnswer: "c",
          explanation:
            "Johnny Sexton, l'ouvreur irlandais, avec 566 points.",
        },
        {
          id: 20,
          question: "Entre quelles équipes se joue la Triple Couronne ?",
          answers: [
            { id: "a", text: "Angleterre, Écosse, Irlande et pays de Galles" },
            { id: "b", text: "France, Italie et Écosse" },
            { id: "c", text: "Les trois derniers du classement" },
            { id: "d", text: "Les trois premiers du classement" },
          ],
          correctAnswer: "a",
          explanation:
            "Entre l'Angleterre, l'Écosse, l'Irlande et le pays de Galles. Celle qui bat les trois autres gagne la Triple Couronne.",
        },
      ],
    },
    en: {
      title: "Timed quiz: the Six Nations Championship",
      description:
        "Twenty questions in one minute on the Six Nations: Grand Slams, the wooden spoon, Le Crunch, grounds and records.",
      questions: [
        {
          id: 1,
          image: "/images/q-rugby-six-nations-02.webp",
          question: "In what year did Italy join the Championship?",
          answers: [
            { id: "a", text: "1994" },
            { id: "b", text: "2000" },
            { id: "c", text: "2004" },
            { id: "d", text: "2010" },
          ],
          correctAnswer: "b",
          explanation:
            "In 2000. The Five Nations became the Six Nations, and Italy beat Scotland in their very first game.",
        },
        {
          id: 2,
          question: "What do you call winning every one of your games in the Championship?",
          answers: [
            { id: "a", text: "A Grand Slam" },
            { id: "b", text: "A Triple Crown" },
            { id: "c", text: "A clean sheet" },
            { id: "d", text: "A perfect five" },
          ],
          correctAnswer: "a",
          explanation:
            "A Grand Slam: five games, five wins. You can win the Championship without a Grand Slam, but not the other way round.",
        },
        {
          id: 3,
          question: "What does the team that loses every game \"win\"?",
          answers: [
            { id: "a", text: "The dunce's cap" },
            { id: "b", text: "The red lantern" },
            { id: "c", text: "The wooden spoon" },
            { id: "d", text: "The booby prize" },
          ],
          correctAnswer: "c",
          explanation:
            "The wooden spoon. It isn't a real trophy, just a name for finishing last without a single win.",
        },
        {
          id: 4,
          question: "Which teams play for the Calcutta Cup?",
          answers: [
            { id: "a", text: "England and Scotland" },
            { id: "b", text: "Ireland and Wales" },
            { id: "c", text: "France and England" },
            { id: "d", text: "Scotland and Ireland" },
          ],
          correctAnswer: "a",
          explanation:
            "England and Scotland. It's the oldest trophy between two international rugby teams, played for since 1879.",
        },
        {
          id: 5,
          question: "Which fixture is known as \"Le Crunch\"?",
          answers: [
            { id: "a", text: "Ireland v England" },
            { id: "b", text: "France v England" },
            { id: "c", text: "France v Wales" },
            { id: "d", text: "Scotland v England" },
          ],
          correctAnswer: "b",
          explanation:
            "France v England, the most eagerly awaited game of the Championship on both sides of the Channel.",
        },
        {
          id: 6,
          image: "/images/q-rugby-six-nations-01.webp",
          question: "The Giuseppe Garibaldi Trophy goes to the winner of which game?",
          answers: [
            { id: "a", text: "France v Italy" },
            { id: "b", text: "Italy v Scotland" },
            { id: "c", text: "Italy v Ireland" },
            { id: "d", text: "France v Scotland" },
          ],
          correctAnswer: "a",
          explanation:
            "France v Italy, since 2007, marking 200 years since the birth of Giuseppe Garibaldi, a hero of Italian unification who was born in Nice.",
        },
        {
          id: 7,
          image: "/images/q-rugby-six-nations-03.webp",
          question: "Which city do Wales play their home games in?",
          answers: [
            { id: "a", text: "Swansea" },
            { id: "b", text: "Newport" },
            { id: "c", text: "Cardiff" },
            { id: "d", text: "Llanelli" },
          ],
          correctAnswer: "c",
          explanation:
            "Cardiff, at the old Millennium Stadium, now called the Principality Stadium. It has a roof that can close.",
        },
        {
          id: 8,
          question: "In what year did France last win a Grand Slam?",
          answers: [
            { id: "a", text: "2010" },
            { id: "b", text: "2016" },
            { id: "c", text: "2022" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "In 2022, their tenth. France won the Championship in 2025 and 2026 too, but lost one game each time.",
        },
        {
          id: 9,
          question: "Who won the 2026 Six Nations?",
          answers: [
            { id: "a", text: "Ireland" },
            { id: "b", text: "England" },
            { id: "c", text: "Scotland" },
            { id: "d", text: "France" },
          ],
          correctAnswer: "d",
          explanation:
            "France, who beat England 48-46 at the Stade de France on the final weekend. Ireland finished second.",
        },
        {
          id: 10,
          image: "/images/q-rugby-six-nations-04.webp",
          question: "How many games does each team play in the Championship?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "c",
          explanation:
            "Five: each team plays each of the other five once, at home or away depending on the year.",
        },
        {
          id: 11,
          question: "In what year did France join the Championship?",
          answers: [
            { id: "a", text: "1883" },
            { id: "b", text: "1910" },
            { id: "c", text: "1947" },
            { id: "d", text: "1959" },
          ],
          correctAnswer: "b",
          explanation:
            "In 1910. The Home Nations Championship then became the Five Nations.",
        },
        {
          id: 12,
          question: "Which stadium do Ireland play at in Dublin?",
          answers: [
            { id: "a", text: "Croke Park" },
            { id: "b", text: "Thomond Park" },
            { id: "c", text: "Aviva Stadium" },
            { id: "d", text: "Ravenhill" },
          ],
          correctAnswer: "c",
          explanation:
            "The Aviva Stadium, built on the site of the old Lansdowne Road ground and opened in 2010.",
        },
        {
          id: 13,
          question: "What is England's home ground called?",
          answers: [
            { id: "a", text: "Wembley" },
            { id: "b", text: "Twickenham" },
            { id: "c", text: "Murrayfield" },
            { id: "d", text: "Old Trafford" },
          ],
          correctAnswer: "b",
          explanation:
            "Twickenham, in south-west London. The RFU has its headquarters there, which is why it's called \"HQ\".",
        },
        {
          id: 14,
          question: "Which city do Scotland play in?",
          answers: [
            { id: "a", text: "Glasgow" },
            { id: "b", text: "Aberdeen" },
            { id: "c", text: "Edinburgh" },
            { id: "d", text: "Dundee" },
          ],
          correctAnswer: "c",
          explanation:
            "Edinburgh, at Murrayfield.",
        },
        {
          id: 15,
          question: "How many tries do you need in a game to get the attacking bonus point?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "c",
          explanation:
            "Four tries. There's also a losing bonus point for a team that loses by fewer than seven points.",
        },
        {
          id: 16,
          question: "How many bonus points does a Grand Slam earn in the table?",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "c",
          explanation:
            "3 points. Without it, a team that won every game could still finish behind another side thanks to try bonus points.",
        },
        {
          id: 17,
          question: "Who has scored the most tries in Championship history?",
          answers: [
            { id: "a", text: "Brian O'Driscoll" },
            { id: "b", text: "Shane Williams" },
            { id: "c", text: "Antoine Dupont" },
            { id: "d", text: "Jonny Wilkinson" },
          ],
          correctAnswer: "a",
          explanation:
            "Brian O'Driscoll, the Irish centre, with 26 tries.",
        },
        {
          id: 18,
          question: "Which player has played the most games in the Championship?",
          answers: [
            { id: "a", text: "Alun Wyn Jones" },
            { id: "b", text: "Sergio Parisse" },
            { id: "c", text: "Brian O'Driscoll" },
            { id: "d", text: "Fabien Pelous" },
          ],
          correctAnswer: "b",
          explanation:
            "Sergio Parisse, the Italian back-rower, with 69 games.",
        },
        {
          id: 19,
          question: "Who has scored the most points in Championship history?",
          answers: [
            { id: "a", text: "Jonny Wilkinson" },
            { id: "b", text: "Owen Farrell" },
            { id: "c", text: "Johnny Sexton" },
            { id: "d", text: "Ronan O'Gara" },
          ],
          correctAnswer: "c",
          explanation:
            "Johnny Sexton, the Irish fly-half, with 566 points.",
        },
        {
          id: 20,
          question: "Which teams compete for the Triple Crown?",
          answers: [
            { id: "a", text: "England, Scotland, Ireland and Wales" },
            { id: "b", text: "France, Italy and Scotland" },
            { id: "c", text: "The bottom three teams" },
            { id: "d", text: "The top three teams" },
          ],
          correctAnswer: "a",
          explanation:
            "England, Scotland, Ireland and Wales. Whoever beats the other three wins the Triple Crown.",
        },
      ],
    },
    es: {
      title: "Contrarreloj de rugby: el Seis Naciones",
      description:
        "Veinte preguntas en un minuto sobre el Seis Naciones: Grand Slam, cuchara de madera, el Crunch, estadios y récords.",
      questions: [
        {
          id: 1,
          image: "/images/q-rugby-six-nations-02.webp",
          question: "¿En qué año se unió Italia al Torneo?",
          answers: [
            { id: "a", text: "1994" },
            { id: "b", text: "2000" },
            { id: "c", text: "2004" },
            { id: "d", text: "2010" },
          ],
          correctAnswer: "b",
          explanation:
            "En 2000. El Cinco Naciones pasó a ser el Seis Naciones, e Italia ganó a Escocia en su primer partido.",
        },
        {
          id: 2,
          question: "¿Cómo se llama ganar todos los partidos del Torneo?",
          answers: [
            { id: "a", text: "Grand Slam" },
            { id: "b", text: "Triple Corona" },
            { id: "c", text: "Pleno de ases" },
            { id: "d", text: "Cinco de cinco" },
          ],
          correctAnswer: "a",
          explanation:
            "Grand Slam: cinco partidos, cinco victorias. Se puede ganar el Torneo sin Grand Slam, pero no al revés.",
        },
        {
          id: 3,
          question: "¿Qué «gana» el equipo que pierde todos sus partidos?",
          answers: [
            { id: "a", text: "El gorro de burro" },
            { id: "b", text: "El farolillo rojo" },
            { id: "c", text: "La cuchara de madera" },
            { id: "d", text: "La medalla de chocolate" },
          ],
          correctAnswer: "c",
          explanation:
            "La cuchara de madera. No es un trofeo de verdad, solo el nombre que se da al último cuando no ha ganado ningún partido.",
        },
        {
          id: 4,
          question: "¿Qué selecciones se juegan la Calcutta Cup?",
          answers: [
            { id: "a", text: "Inglaterra y Escocia" },
            { id: "b", text: "Irlanda y Gales" },
            { id: "c", text: "Francia e Inglaterra" },
            { id: "d", text: "Escocia e Irlanda" },
          ],
          correctAnswer: "a",
          explanation:
            "Inglaterra y Escocia. Es el trofeo más antiguo entre dos selecciones de rugby, en juego desde 1879.",
        },
        {
          id: 5,
          question: "¿Qué partido se conoce como «le Crunch»?",
          answers: [
            { id: "a", text: "Irlanda-Inglaterra" },
            { id: "b", text: "Francia-Inglaterra" },
            { id: "c", text: "Francia-Gales" },
            { id: "d", text: "Escocia-Inglaterra" },
          ],
          correctAnswer: "b",
          explanation:
            "Francia-Inglaterra, el partido más esperado del Torneo a los dos lados del canal de la Mancha.",
        },
        {
          id: 6,
          image: "/images/q-rugby-six-nations-01.webp",
          question: "¿Qué partido premia el trofeo Garibaldi?",
          answers: [
            { id: "a", text: "Francia-Italia" },
            { id: "b", text: "Italia-Escocia" },
            { id: "c", text: "Italia-Irlanda" },
            { id: "d", text: "Francia-Escocia" },
          ],
          correctAnswer: "a",
          explanation:
            "El Francia-Italia, desde 2007, por los 200 años del nacimiento de Giuseppe Garibaldi, héroe de la unificación italiana nacido en Niza.",
        },
        {
          id: 7,
          image: "/images/q-rugby-six-nations-03.webp",
          question: "¿En qué ciudad juega Gales sus partidos en casa?",
          answers: [
            { id: "a", text: "Swansea" },
            { id: "b", text: "Newport" },
            { id: "c", text: "Cardiff" },
            { id: "d", text: "Llanelli" },
          ],
          correctAnswer: "c",
          explanation:
            "En Cardiff, en el antiguo Millennium Stadium, que ahora se llama Principality Stadium. Tiene un techo que se puede cerrar.",
        },
        {
          id: 8,
          question: "¿En qué año logró Francia su último Grand Slam?",
          answers: [
            { id: "a", text: "2010" },
            { id: "b", text: "2016" },
            { id: "c", text: "2022" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "En 2022, el décimo. Francia ganó el Torneo en 2025 y en 2026, pero perdiendo un partido cada vez.",
        },
        {
          id: 9,
          question: "¿Quién ganó el Seis Naciones 2026?",
          answers: [
            { id: "a", text: "Irlanda" },
            { id: "b", text: "Inglaterra" },
            { id: "c", text: "Escocia" },
            { id: "d", text: "Francia" },
          ],
          correctAnswer: "d",
          explanation:
            "Francia, que ganó 48 a 46 a Inglaterra en el Stade de France en la última jornada. Irlanda fue segunda.",
        },
        {
          id: 10,
          image: "/images/q-rugby-six-nations-04.webp",
          question: "¿Cuántos partidos juega cada selección en el Torneo?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "c",
          explanation:
            "Cinco: cada equipo juega una vez contra cada uno de los otros cinco, en casa o fuera según el año.",
        },
        {
          id: 11,
          question: "¿En qué año entró Francia en el Torneo?",
          answers: [
            { id: "a", text: "1883" },
            { id: "b", text: "1910" },
            { id: "c", text: "1947" },
            { id: "d", text: "1959" },
          ],
          correctAnswer: "b",
          explanation:
            "En 1910. El torneo de las cuatro naciones británicas e irlandesa pasó entonces a ser el Cinco Naciones.",
        },
        {
          id: 12,
          question: "¿En qué estadio juega Irlanda en Dublín?",
          answers: [
            { id: "a", text: "Croke Park" },
            { id: "b", text: "Thomond Park" },
            { id: "c", text: "Aviva Stadium" },
            { id: "d", text: "Ravenhill" },
          ],
          correctAnswer: "c",
          explanation:
            "En el Aviva Stadium, construido donde estaba el viejo estadio de Lansdowne Road y abierto en 2010.",
        },
        {
          id: 13,
          question: "¿Cómo se llama el estadio de Inglaterra?",
          answers: [
            { id: "a", text: "Wembley" },
            { id: "b", text: "Twickenham" },
            { id: "c", text: "Murrayfield" },
            { id: "d", text: "Old Trafford" },
          ],
          correctAnswer: "b",
          explanation:
            "Twickenham, en el suroeste de Londres. La federación inglesa tiene allí su sede, por eso lo llaman «HQ».",
        },
        {
          id: 14,
          question: "¿En qué ciudad juega Escocia?",
          answers: [
            { id: "a", text: "Glasgow" },
            { id: "b", text: "Aberdeen" },
            { id: "c", text: "Edimburgo" },
            { id: "d", text: "Dundee" },
          ],
          correctAnswer: "c",
          explanation:
            "En Edimburgo, en el estadio de Murrayfield.",
        },
        {
          id: 15,
          question: "¿Cuántos ensayos hay que marcar en un partido para el punto de bonus ofensivo?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "c",
          explanation:
            "Cuatro ensayos. También hay un punto de bonus defensivo para quien pierde por menos de siete puntos.",
        },
        {
          id: 16,
          question: "¿Cuántos puntos de bonus da un Grand Slam en la clasificación?",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "c",
          explanation:
            "3 puntos. Sin ese bonus, un equipo que lo gana todo podría acabar detrás de otro gracias a los bonus ofensivos.",
        },
        {
          id: 17,
          question: "¿Quién ha marcado más ensayos en la historia del Torneo?",
          answers: [
            { id: "a", text: "Brian O'Driscoll" },
            { id: "b", text: "Shane Williams" },
            { id: "c", text: "Antoine Dupont" },
            { id: "d", text: "Jonny Wilkinson" },
          ],
          correctAnswer: "a",
          explanation:
            "Brian O'Driscoll, el centro irlandés, con 26 ensayos.",
        },
        {
          id: 18,
          question: "¿Qué jugador ha disputado más partidos en el Torneo?",
          answers: [
            { id: "a", text: "Alun Wyn Jones" },
            { id: "b", text: "Sergio Parisse" },
            { id: "c", text: "Brian O'Driscoll" },
            { id: "d", text: "Fabien Pelous" },
          ],
          correctAnswer: "b",
          explanation:
            "Sergio Parisse, el tercera línea italiano, con 69 partidos.",
        },
        {
          id: 19,
          question: "¿Quién ha anotado más puntos en la historia del Torneo?",
          answers: [
            { id: "a", text: "Jonny Wilkinson" },
            { id: "b", text: "Owen Farrell" },
            { id: "c", text: "Johnny Sexton" },
            { id: "d", text: "Ronan O'Gara" },
          ],
          correctAnswer: "c",
          explanation:
            "Johnny Sexton, el apertura irlandés, con 566 puntos.",
        },
        {
          id: 20,
          question: "¿Entre qué selecciones se juega la Triple Corona?",
          answers: [
            { id: "a", text: "Inglaterra, Escocia, Irlanda y Gales" },
            { id: "b", text: "Francia, Italia y Escocia" },
            { id: "c", text: "Los tres últimos de la tabla" },
            { id: "d", text: "Los tres primeros de la tabla" },
          ],
          correctAnswer: "a",
          explanation:
            "Entre Inglaterra, Escocia, Irlanda y Gales. La que gana a las otras tres se lleva la Triple Corona.",
        },
      ],
    },
  },
};

export default [quizRugbySixNations] as TranslatedQuiz[];
