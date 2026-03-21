import type { QuizData } from "./types";
import { sampleQuiz } from "./sample-quiz";
import { quizDrapeaux, quizDepartementsFrancais, quizPaysEurope } from "./quiz-geographie";
import { quizDisney, quizHarryPotter, quizOnePiece, quizNaruto, quizAnime } from "./quiz-cinema";
import { quizPokemon, quizBrawlStars, quizGamer } from "./quiz-jeux-video";
import { quizIslam, quizAnimaux, quizLogos, quizAnglais, quizBrevetHistoire, quizAmitie } from "./quiz-autres";
import { quizFootball } from "./quiz-football";

// Re-export the original quiz with extra metadata
const sportCultureGenerale: QuizData = {
  ...sampleQuiz,
  gameType: "qcm",
  featured: true,
  playCount: 15420,
};

const footballLegendes: QuizData = {
  slug: "football-legendes",
  title: "Quiz football : les légendes",
  description: "De Pelé à Mbappé, connais-tu les plus grandes légendes du football mondial ?",
  category: "Sport",
  difficulty: "Moyen",
  timePerQuestion: 20,
  coverImage: "/images/cover-football.jpg",
  gameType: "qcm",
  playCount: 23150,
  questions: [
    {
      id: 1,
      question: "Quel joueur détient le record de Ballons d'Or ?",
      image: "/images/q-messi.jpg",
      answers: [
        { id: "a", text: "Cristiano Ronaldo" },
        { id: "b", text: "Lionel Messi" },
        { id: "c", text: "Michel Platini" },
        { id: "d", text: "Johan Cruyff" },
      ],
      correctAnswer: "b",
      explanation: "Lionel Messi détient 8 Ballons d'Or, un record absolu.",
    },
    {
      id: 2,
      question: "Quelle équipe a remporté la première Coupe du Monde en 1930 ?",
      image: "/images/q-worldcup.jpg",
      answers: [
        { id: "a", text: "Brésil" },
        { id: "b", text: "Argentine" },
        { id: "c", text: "Uruguay" },
        { id: "d", text: "Italie" },
      ],
      correctAnswer: "c",
      explanation: "L'Uruguay a remporté la première Coupe du Monde organisée sur son sol en 1930.",
    },
    {
      id: 3,
      question: "Combien de buts Pelé a-t-il marqué en carrière officielle ?",
      answers: [
        { id: "a", text: "512" },
        { id: "b", text: "757" },
        { id: "c", text: "643" },
        { id: "d", text: "892" },
      ],
      correctAnswer: "b",
      explanation: "Pelé a inscrit 757 buts officiels en carrière professionnelle.",
    },
    {
      id: 4,
      question: "Quel club a remporté le plus de Ligues des Champions ?",
      image: "/images/q-stadium.jpg",
      answers: [
        { id: "a", text: "AC Milan" },
        { id: "b", text: "FC Barcelone" },
        { id: "c", text: "Real Madrid" },
        { id: "d", text: "Liverpool" },
      ],
      correctAnswer: "c",
      explanation: "Le Real Madrid est le club le plus titré avec 15 Ligues des Champions.",
    },
    {
      id: 5,
      question: "Qui est le meilleur buteur de l'histoire de la Ligue des Champions ?",
      answers: [
        { id: "a", text: "Lionel Messi" },
        { id: "b", text: "Robert Lewandowski" },
        { id: "c", text: "Cristiano Ronaldo" },
        { id: "d", text: "Raúl" },
      ],
      correctAnswer: "c",
      explanation: "Cristiano Ronaldo est le meilleur buteur de l'histoire de la compétition avec 140 buts.",
    },
    {
      id: 6,
      question: "Quel pays a remporté le plus de Coupes du Monde ?",
      image: "/images/q-worldcup.jpg",
      answers: [
        { id: "a", text: "Allemagne" },
        { id: "b", text: "Italie" },
        { id: "c", text: "Argentine" },
        { id: "d", text: "Brésil" },
      ],
      correctAnswer: "d",
      explanation: "Le Brésil est le pays le plus titré avec 5 Coupes du Monde.",
    },
    {
      id: 7,
      question: "En quelle année Zinédine Zidane a-t-il mis son fameux coup de tête en finale ?",
      image: "/images/q4-football.jpg",
      answers: [
        { id: "a", text: "2002" },
        { id: "b", text: "2006" },
        { id: "c", text: "2004" },
        { id: "d", text: "2008" },
      ],
      correctAnswer: "b",
      explanation: "Le coup de tête de Zidane sur Materazzi a eu lieu en finale de la Coupe du Monde 2006.",
    },
    {
      id: 8,
      question: "Quel gardien est surnommé 'le mur' ?",
      answers: [
        { id: "a", text: "Manuel Neuer" },
        { id: "b", text: "Gianluigi Buffon" },
        { id: "c", text: "Lev Yachine" },
        { id: "d", text: "Oliver Kahn" },
      ],
      correctAnswer: "c",
      explanation: "Lev Yachine, seul gardien à avoir remporté le Ballon d'Or, était surnommé 'l'araignée noire' ou 'le mur'.",
    },
    {
      id: 9,
      question: "Combien de joueurs composent une équipe de football sur le terrain ?",
      image: "/images/q-stadium.jpg",
      answers: [
        { id: "a", text: "9" },
        { id: "b", text: "10" },
        { id: "c", text: "11" },
        { id: "d", text: "12" },
      ],
      correctAnswer: "c",
      explanation: "Une équipe de football est composée de 11 joueurs sur le terrain.",
    },
    {
      id: 10,
      question: "Quel joueur français a inscrit un triplé en finale de Coupe du Monde 2022 ?",
      image: "/images/q4-football.jpg",
      answers: [
        { id: "a", text: "Antoine Griezmann" },
        { id: "b", text: "Kylian Mbappé" },
        { id: "c", text: "Olivier Giroud" },
        { id: "d", text: "Ousmane Dembélé" },
      ],
      correctAnswer: "b",
      explanation: "Kylian Mbappé a inscrit un triplé historique en finale contre l'Argentine.",
    },
  ],
};

const joQuizFacile: QuizData = {
  slug: "jeux-olympiques-facile",
  title: "Quiz jeux olympiques : les bases",
  description: "Les anneaux, les sports, les records... Connais-tu les fondamentaux des JO ?",
  category: "Sport",
  difficulty: "Facile",
  timePerQuestion: 25,
  coverImage: "/images/cover-olympics.jpg",
  gameType: "qcm",
  playCount: 8730,
  questions: [
    {
      id: 1,
      question: "Combien d'anneaux olympiques y a-t-il ?",
      image: "/images/q-olympics-rings.jpg",
      answers: [
        { id: "a", text: "4" },
        { id: "b", text: "5" },
        { id: "c", text: "6" },
        { id: "d", text: "7" },
      ],
      correctAnswer: "b",
      explanation: "Les 5 anneaux représentent les 5 continents.",
    },
    {
      id: 2,
      question: "Tous les combien d'années ont lieu les JO d'été ?",
      answers: [
        { id: "a", text: "2 ans" },
        { id: "b", text: "3 ans" },
        { id: "c", text: "4 ans" },
        { id: "d", text: "5 ans" },
      ],
      correctAnswer: "c",
      explanation: "Les Jeux Olympiques d'été ont lieu tous les 4 ans.",
    },
    {
      id: 3,
      question: "Dans quel pays sont nés les Jeux Olympiques antiques ?",
      image: "/images/q-stadium.jpg",
      answers: [
        { id: "a", text: "Italie" },
        { id: "b", text: "Égypte" },
        { id: "c", text: "Grèce" },
        { id: "d", text: "Turquie" },
      ],
      correctAnswer: "c",
      explanation: "Les JO antiques sont nés à Olympie, en Grèce, vers 776 av. J.-C.",
    },
    {
      id: 4,
      question: "Quelle ville a accueilli les JO d'été 2024 ?",
      image: "/images/q-olympics-rings.jpg",
      answers: [
        { id: "a", text: "Tokyo" },
        { id: "b", text: "Los Angeles" },
        { id: "c", text: "Paris" },
        { id: "d", text: "Londres" },
      ],
      correctAnswer: "c",
      explanation: "Paris a accueilli les Jeux Olympiques d'été 2024.",
    },
    {
      id: 5,
      question: "Quelle est la devise olympique ?",
      image: "/images/q-running-track.jpg",
      answers: [
        { id: "a", text: "Plus vite, plus haut, plus fort – ensemble" },
        { id: "b", text: "L'important c'est de participer" },
        { id: "c", text: "Un monde, un rêve" },
        { id: "d", text: "La victoire avant tout" },
      ],
      correctAnswer: "a",
      explanation: "La devise 'Citius, Altius, Fortius – Communiter' a été mise à jour en 2021.",
    },
    {
      id: 6,
      question: "Quel sportif a gagné 23 médailles d'or olympiques ?",
      image: "/images/q-swimming-pool.jpg",
      answers: [
        { id: "a", text: "Carl Lewis" },
        { id: "b", text: "Usain Bolt" },
        { id: "c", text: "Michael Phelps" },
        { id: "d", text: "Mark Spitz" },
      ],
      correctAnswer: "c",
      explanation: "Michael Phelps est l'athlète le plus médaillé de l'histoire olympique.",
    },
    {
      id: 7,
      question: "Quel sport a été ajouté aux JO de Paris 2024 ?",
      image: "/images/q-running-track.jpg",
      answers: [
        { id: "a", text: "Escalade" },
        { id: "b", text: "Breaking" },
        { id: "c", text: "Padel" },
        { id: "d", text: "E-sport" },
      ],
      correctAnswer: "b",
      explanation: "Le breaking (breakdance) a fait ses débuts olympiques à Paris 2024.",
    },
    {
      id: 8,
      question: "De quelle couleur est la médaille pour la 3e place ?",
      answers: [
        { id: "a", text: "Or" },
        { id: "b", text: "Argent" },
        { id: "c", text: "Bronze" },
        { id: "d", text: "Cuivre" },
      ],
      correctAnswer: "c",
      explanation: "La 3e place reçoit la médaille de bronze.",
    },
  ],
};

const tennisQuiz: QuizData = {
  slug: "tennis-grands-chelems",
  title: "Quiz tennis : les grands chelems",
  description: "Roland-Garros, Wimbledon, Open d'Australie... Tu connais les tournois majeurs ?",
  category: "Sport",
  difficulty: "Moyen",
  timePerQuestion: 20,
  coverImage: "/images/cover-tennis.jpg",
  gameType: "qcm",
  playCount: 6280,
  questions: [
    {
      id: 1,
      question: "Combien de tournois du Grand Chelem existe-t-il ?",
      image: "/images/q-tennis-court.jpg",
      answers: [
        { id: "a", text: "3" },
        { id: "b", text: "4" },
        { id: "c", text: "5" },
        { id: "d", text: "6" },
      ],
      correctAnswer: "b",
      explanation: "Les 4 Grand Chelems : Open d'Australie, Roland-Garros, Wimbledon, US Open.",
    },
    {
      id: 2,
      question: "Sur quelle surface joue-t-on à Roland-Garros ?",
      image: "/images/q-tennis-court.jpg",
      answers: [
        { id: "a", text: "Gazon" },
        { id: "b", text: "Dur" },
        { id: "c", text: "Terre battue" },
        { id: "d", text: "Synthétique" },
      ],
      correctAnswer: "c",
      explanation: "Roland-Garros se joue sur terre battue, une surface lente favorisant les échanges.",
    },
    {
      id: 3,
      question: "Qui détient le record de victoires à Roland-Garros (hommes) ?",
      image: "/images/q-tennis-racket.jpg",
      answers: [
        { id: "a", text: "Roger Federer" },
        { id: "b", text: "Novak Djokovic" },
        { id: "c", text: "Rafael Nadal" },
        { id: "d", text: "Björn Borg" },
      ],
      correctAnswer: "c",
      explanation: "Rafael Nadal a remporté 14 fois Roland-Garros, un record absolu.",
    },
    {
      id: 4,
      question: "À Wimbledon, quelle couleur les joueurs doivent-ils porter ?",
      answers: [
        { id: "a", text: "Bleu" },
        { id: "b", text: "Blanc" },
        { id: "c", text: "Vert" },
        { id: "d", text: "Noir" },
      ],
      correctAnswer: "b",
      explanation: "Le dress code de Wimbledon impose une tenue presque entièrement blanche.",
    },
    {
      id: 5,
      question: "Combien de sets faut-il gagner pour remporter un match de Grand Chelem (hommes) ?",
      answers: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "5" },
      ],
      correctAnswer: "b",
      explanation: "En Grand Chelem, les hommes jouent au meilleur des 5 sets (il faut en gagner 3).",
    },
    {
      id: 6,
      question: "Quelle joueuse française a gagné Roland-Garros en 2000 ?",
      image: "/images/q-tennis-racket.jpg",
      answers: [
        { id: "a", text: "Amélie Mauresmo" },
        { id: "b", text: "Mary Pierce" },
        { id: "c", text: "Marion Bartoli" },
        { id: "d", text: "Nathalie Dechy" },
      ],
      correctAnswer: "b",
      explanation: "Mary Pierce a remporté Roland-Garros en 2000, dernière Française à l'avoir fait.",
    },
    {
      id: 7,
      question: "Quel est le surnom de Rafael Nadal ?",
      image: "/images/q-tennis-court.jpg",
      answers: [
        { id: "a", text: "Le Maestro" },
        { id: "b", text: "Le Roi de la Terre" },
        { id: "c", text: "Le Taureau de Manacor" },
        { id: "d", text: "Le Djoker" },
      ],
      correctAnswer: "c",
      explanation: "Nadal est surnommé le Taureau de Manacor, du nom de sa ville natale à Majorque.",
    },
    {
      id: 8,
      question: "Que signifie 'love' au tennis ?",
      image: "/images/q6-tennis.jpg",
      answers: [
        { id: "a", text: "15 points" },
        { id: "b", text: "30 points" },
        { id: "c", text: "0 point" },
        { id: "d", text: "Avantage" },
      ],
      correctAnswer: "c",
      explanation: "'Love' signifie zéro au tennis, probablement dérivé du français 'l'œuf' (forme du 0).",
    },
  ],
};

const sportVraiFaux: QuizData = {
  slug: "sport-vrai-ou-faux",
  title: "Quiz sport : vrai ou faux ?",
  description: "Ces affirmations sportives sont-elles vraies ou fausses ? Attention aux pièges !",
  category: "Sport",
  difficulty: "Facile",
  timePerQuestion: 15,
  gameType: "vrai-faux",
  playCount: 12400,
  coverImage: "/images/cover-vraifaux.jpg",
  questions: [
    {
      id: 1,
      question: "Le marathon fait exactement 42 km.",
      image: "/images/q5-marathon.jpg",
      answers: [
        { id: "a", text: "Vrai" },
        { id: "b", text: "Faux" },
      ],
      correctAnswer: "b",
      explanation: "Le marathon fait 42,195 km exactement.",
    },
    {
      id: 2,
      question: "Un match de rugby dure 80 minutes.",
      image: "/images/q3-rugby.jpg",
      answers: [
        { id: "a", text: "Vrai" },
        { id: "b", text: "Faux" },
      ],
      correctAnswer: "a",
      explanation: "Un match de rugby à XV dure bien 80 minutes (2 × 40 min).",
    },
    {
      id: 3,
      question: "Le basketball a été inventé au Canada.",
      image: "/images/q-basketball-court.jpg",
      answers: [
        { id: "a", text: "Vrai" },
        { id: "b", text: "Faux" },
      ],
      correctAnswer: "b",
      explanation: "Il a été inventé aux États-Unis par James Naismith (un Canadien), à Springfield en 1891.",
    },
    {
      id: 4,
      question: "Usain Bolt a couru le 100m en moins de 9,5 secondes.",
      answers: [
        { id: "a", text: "Vrai" },
        { id: "b", text: "Faux" },
      ],
      correctAnswer: "a",
      explanation: "Usain Bolt détient le record en 9,58 secondes depuis 2009.",
    },
    {
      id: 5,
      question: "Le Tour de France a toujours lieu en juillet.",
      image: "/images/q-cycling.jpg",
      answers: [
        { id: "a", text: "Vrai" },
        { id: "b", text: "Faux" },
      ],
      correctAnswer: "b",
      explanation: "En 2020, le Tour a eu lieu en septembre à cause du Covid-19.",
    },
    {
      id: 6,
      question: "Le handball se joue avec 7 joueurs par équipe sur le terrain.",
      answers: [
        { id: "a", text: "Vrai" },
        { id: "b", text: "Faux" },
      ],
      correctAnswer: "a",
      explanation: "7 joueurs par équipe : 6 joueurs de champ + 1 gardien.",
    },
  ],
};

const sportsExtremesQuiz: QuizData = {
  slug: "sports-extremes",
  title: "Quiz sports extrêmes",
  description: "Surf, escalade, parachutisme... Es-tu calé sur les sports qui font monter l'adrénaline ?",
  category: "Sport",
  difficulty: "Difficile",
  timePerQuestion: 20,
  gameType: "qcm",
  playCount: 4320,
  coverImage: "/images/cover-extreme.jpg",
  questions: [
    {
      id: 1,
      question: "Quelle est la hauteur de la plus grande vague jamais surfée (record 2024) ?",
      image: "/images/q-surfing.jpg",
      answers: [
        { id: "a", text: "18 mètres" },
        { id: "b", text: "22 mètres" },
        { id: "c", text: "26,2 mètres" },
        { id: "d", text: "30 mètres" },
      ],
      correctAnswer: "c",
      explanation: "Sebastian Steudtner a surfé une vague de 26,2 m à Nazaré au Portugal.",
    },
    {
      id: 2,
      question: "En wingsuit, quelle vitesse maximale peut-on atteindre ?",
      image: "/images/q-parachute.jpg",
      answers: [
        { id: "a", text: "150 km/h" },
        { id: "b", text: "250 km/h" },
        { id: "c", text: "400 km/h" },
        { id: "d", text: "550 km/h" },
      ],
      correctAnswer: "c",
      explanation: "Les meilleurs wingsuiters atteignent environ 400 km/h en piqué.",
    },
    {
      id: 3,
      question: "Quelle est la discipline reine du triathlon Ironman ?",
      image: "/images/q-cycling.jpg",
      answers: [
        { id: "a", text: "3,8 km natation + 180 km vélo + 42 km course" },
        { id: "b", text: "1,5 km natation + 40 km vélo + 10 km course" },
        { id: "c", text: "5 km natation + 200 km vélo + 50 km course" },
        { id: "d", text: "2 km natation + 90 km vélo + 21 km course" },
      ],
      correctAnswer: "a",
      explanation: "L'Ironman complet est : 3,8 km de nage, 180 km de vélo et un marathon (42,195 km).",
    },
    {
      id: 4,
      question: "À quelle altitude se fait un saut en parachute classique ?",
      image: "/images/q-parachute.jpg",
      answers: [
        { id: "a", text: "1 000 m" },
        { id: "b", text: "2 500 m" },
        { id: "c", text: "4 000 m" },
        { id: "d", text: "8 000 m" },
      ],
      correctAnswer: "c",
      explanation: "Un saut tandem classique se fait à environ 4 000 mètres d'altitude.",
    },
    {
      id: 5,
      question: "Le parkour est originaire de quel pays ?",
      answers: [
        { id: "a", text: "États-Unis" },
        { id: "b", text: "Japon" },
        { id: "c", text: "France" },
        { id: "d", text: "Royaume-Uni" },
      ],
      correctAnswer: "c",
      explanation: "Le parkour a été développé en France par David Belle dans les années 1990.",
    },
    {
      id: 6,
      question: "Quel sport extrême consiste à sauter d'un pont avec un élastique ?",
      answers: [
        { id: "a", text: "Base jump" },
        { id: "b", text: "Bungee jumping" },
        { id: "c", text: "Cliff diving" },
        { id: "d", text: "Zip-lining" },
      ],
      correctAnswer: "b",
      explanation: "Le bungee jumping (saut à l'élastique) consiste à sauter attaché par un élastique.",
    },
    {
      id: 7,
      question: "En escalade sportive, combien de disciplines aux JO 2024 ?",
      image: "/images/q-climbing.jpg",
      answers: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "3" },
        { id: "d", text: "4" },
      ],
      correctAnswer: "b",
      explanation: "Aux JO 2024, il y avait 2 disciplines : le combiné (bloc + difficulté) et la vitesse.",
    },
    {
      id: 8,
      question: "Le free solo consiste à escalader sans aucune...",
      image: "/images/q-climbing.jpg",
      answers: [
        { id: "a", text: "Chaussure spéciale" },
        { id: "b", text: "Protection ni corde" },
        { id: "c", text: "Préparation physique" },
        { id: "d", text: "Assurance" },
      ],
      correctAnswer: "b",
      explanation: "Le free solo est l'escalade sans corde ni protection, rendu célèbre par Alex Honnold.",
    },
  ],
};

const nbaQuiz: QuizData = {
  slug: "nba-culture",
  title: "Quiz NBA : culture basket US",
  description: "Michael Jordan, LeBron, les Lakers... Teste tes connaissances NBA !",
  category: "Sport",
  difficulty: "Difficile",
  timePerQuestion: 18,
  gameType: "qcm",
  playCount: 9870,
  coverImage: "/images/cover-basketball.jpg",
  questions: [
    {
      id: 1,
      question: "Combien de titres NBA Michael Jordan a-t-il remportés ?",
      image: "/images/q-basketball-court.jpg",
      answers: [
        { id: "a", text: "4" },
        { id: "b", text: "5" },
        { id: "c", text: "6" },
        { id: "d", text: "7" },
      ],
      correctAnswer: "c",
      explanation: "Michael Jordan a remporté 6 titres NBA avec les Chicago Bulls.",
    },
    {
      id: 2,
      question: "Quelle franchise NBA a remporté le plus de titres ?",
      answers: [
        { id: "a", text: "Los Angeles Lakers" },
        { id: "b", text: "Boston Celtics" },
        { id: "c", text: "Chicago Bulls" },
        { id: "d", text: "Golden State Warriors" },
      ],
      correctAnswer: "b",
      explanation: "Les Boston Celtics détiennent le record avec 18 titres NBA.",
    },
    {
      id: 3,
      question: "Quel est le meilleur scoreur de l'histoire de la NBA ?",
      image: "/images/q-basketball-hoop.jpg",
      answers: [
        { id: "a", text: "Michael Jordan" },
        { id: "b", text: "Kareem Abdul-Jabbar" },
        { id: "c", text: "LeBron James" },
        { id: "d", text: "Kobe Bryant" },
      ],
      correctAnswer: "c",
      explanation: "LeBron James a dépassé Kareem Abdul-Jabbar en 2023 avec plus de 40 000 points.",
    },
    {
      id: 4,
      question: "Combien de joueurs d'une équipe NBA sont sur le terrain en même temps ?",
      image: "/images/q-basketball-hoop.jpg",
      answers: [
        { id: "a", text: "4" },
        { id: "b", text: "5" },
        { id: "c", text: "6" },
        { id: "d", text: "7" },
      ],
      correctAnswer: "b",
      explanation: "5 joueurs de chaque équipe sont sur le terrain simultanément.",
    },
    {
      id: 5,
      question: "En quelle année a été créée la NBA ?",
      answers: [
        { id: "a", text: "1936" },
        { id: "b", text: "1946" },
        { id: "c", text: "1956" },
        { id: "d", text: "1966" },
      ],
      correctAnswer: "b",
      explanation: "La NBA (initialement BAA) a été fondée en 1946.",
    },
    {
      id: 6,
      question: "Quel joueur français a été nommé MVP de la NBA ?",
      image: "/images/q-basketball-court.jpg",
      answers: [
        { id: "a", text: "Rudy Gobert" },
        { id: "b", text: "Tony Parker" },
        { id: "c", text: "Victor Wembanyama" },
        { id: "d", text: "Aucun" },
      ],
      correctAnswer: "d",
      explanation: "Aucun joueur français n'a encore été nommé MVP de la NBA (à date de 2025).",
    },
  ],
};

const chronoSportQuiz: QuizData = {
  slug: "chrono-sport-general",
  title: "Quiz chrono sport : 60 secondes",
  description: "Réponds au maximum de questions sportives en 60 secondes ! Chaque seconde compte.",
  category: "Sport",
  difficulty: "Moyen",
  timePerQuestion: 8,
  gameType: "chrono",
  playCount: 18200,
  coverImage: "/images/cover-chrono.jpg",
  questions: [
    {
      id: 1,
      question: "Combien de joueurs dans une équipe de volleyball ?",
      image: "/images/q8-volleyball.jpg",
      answers: [
        { id: "a", text: "5" },
        { id: "b", text: "6" },
        { id: "c", text: "7" },
        { id: "d", text: "8" },
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question: "Le Tour de France est une course de... ?",
      image: "/images/q-cycling.jpg",
      answers: [
        { id: "a", text: "Vélo" },
        { id: "b", text: "Moto" },
        { id: "c", text: "Course à pied" },
        { id: "d", text: "Voiture" },
      ],
      correctAnswer: "a",
    },
    {
      id: 3,
      question: "La surface d'un terrain de tennis s'appelle... ?",
      image: "/images/q-tennis-court.jpg",
      answers: [
        { id: "a", text: "Un pitch" },
        { id: "b", text: "Un court" },
        { id: "c", text: "Un ring" },
        { id: "d", text: "Un green" },
      ],
      correctAnswer: "b",
    },
    {
      id: 4,
      question: "Quel sport pratique Tiger Woods ?",
      image: "/images/q-golf.jpg",
      answers: [
        { id: "a", text: "Tennis" },
        { id: "b", text: "Cricket" },
        { id: "c", text: "Golf" },
        { id: "d", text: "Polo" },
      ],
      correctAnswer: "c",
    },
    {
      id: 5,
      question: "En boxe, combien de rounds au maximum en professionnel ?",
      image: "/images/q-boxing.jpg",
      answers: [
        { id: "a", text: "8" },
        { id: "b", text: "10" },
        { id: "c", text: "12" },
        { id: "d", text: "15" },
      ],
      correctAnswer: "c",
    },
    {
      id: 6,
      question: "Le Super Bowl est la finale de quel sport ?",
      answers: [
        { id: "a", text: "Baseball" },
        { id: "b", text: "Basketball" },
        { id: "c", text: "Football américain" },
        { id: "d", text: "Hockey" },
      ],
      correctAnswer: "c",
    },
    {
      id: 7,
      question: "Quel pays a inventé le judo ?",
      answers: [
        { id: "a", text: "Chine" },
        { id: "b", text: "Corée" },
        { id: "c", text: "Japon" },
        { id: "d", text: "Thaïlande" },
      ],
      correctAnswer: "c",
    },
    {
      id: 8,
      question: "Combien de périodes dans un match de hockey sur glace ?",
      image: "/images/q-hockey.jpg",
      answers: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "5" },
      ],
      correctAnswer: "b",
    },
  ],
};

const blindTestSport: QuizData = {
  slug: "blind-test-logos-sport",
  title: "Quiz blind test : logos sportifs",
  description: "Reconnais les logos des plus grandes équipes et fédérations sportives mondiales !",
  category: "Sport",
  difficulty: "Difficile",
  timePerQuestion: 15,
  gameType: "qcm",
  playCount: 7650,
  coverImage: "/images/cover-blindtest.jpg",
  questions: [
    {
      id: 1,
      question: "Quel est le sport dont le ballon est ovale ?",
      image: "/images/q3-rugby.jpg",
      answers: [
        { id: "a", text: "Football" },
        { id: "b", text: "Rugby" },
        { id: "c", text: "Handball" },
        { id: "d", text: "Volleyball" },
      ],
      correctAnswer: "b",
      explanation: "Le ballon de rugby est ovale pour faciliter les passes et la prise en main.",
    },
    {
      id: 2,
      question: "Quel sport utilise un club et une petite balle blanche ?",
      image: "/images/q-golf.jpg",
      answers: [
        { id: "a", text: "Cricket" },
        { id: "b", text: "Baseball" },
        { id: "c", text: "Golf" },
        { id: "d", text: "Hockey" },
      ],
      correctAnswer: "c",
    },
    {
      id: 3,
      question: "Dans quel sport porte-t-on un casque, des gants et on se bat ?",
      answers: [
        { id: "a", text: "Escrime" },
        { id: "b", text: "Boxe" },
        { id: "c", text: "Lutte" },
        { id: "d", text: "Taekwondo" },
      ],
      correctAnswer: "b",
    },
    {
      id: 4,
      question: "Quel sport se pratique dans une piscine avec un bonnet ?",
      image: "/images/q-swimming-pool.jpg",
      answers: [
        { id: "a", text: "Plongeon" },
        { id: "b", text: "Water-polo" },
        { id: "c", text: "Natation" },
        { id: "d", text: "Surf" },
      ],
      correctAnswer: "c",
    },
    {
      id: 5,
      question: "Quel équipement est nécessaire pour faire de l'escrime ?",
      image: "/images/q-fencing.jpg",
      answers: [
        { id: "a", text: "Un arc" },
        { id: "b", text: "Un fleuret" },
        { id: "c", text: "Un bâton" },
        { id: "d", text: "Un gant" },
      ],
      correctAnswer: "b",
    },
    {
      id: 6,
      question: "Quel sport se pratique sur une planche et des vagues ?",
      answers: [
        { id: "a", text: "Wakeboard" },
        { id: "b", text: "Surf" },
        { id: "c", text: "Ski nautique" },
        { id: "d", text: "Kitesurf" },
      ],
      correctAnswer: "b",
    },
  ],
};

const estimationSport: QuizData = {
  slug: "estimation-records-sport",
  title: "Quiz estimation : les records sportifs",
  description: "Trouve le bon chiffre ! C'est plus haut ou plus bas ? Le chrono tourne...",
  category: "Sport",
  difficulty: "Moyen",
  timePerQuestion: 120,
  gameType: "estimation",
  playCount: 11350,
  coverImage: "/images/cover-sport.jpg",
  questions: [
    {
      id: 1,
      question: "Combien de buts Cristiano Ronaldo a-t-il marqués en carrière professionnelle (clubs + sélection) ?",
      image: "/images/q4-football.jpg",
      answers: [],
      correctAnswer: "850",
      correctValue: 850,
      explanation: "Cristiano Ronaldo a dépassé les 850 buts en carrière professionnelle.",
    },
  ],
};

const duelSport: QuizData = {
  slug: "duel-legendes-sport",
  title: "Quiz duel : légendes du sport",
  description: "Deux champions, un seul gagnant. Qui a le plus de titres, records ou victoires ?",
  category: "Sport",
  difficulty: "Difficile",
  timePerQuestion: 15,
  gameType: "duel",
  playCount: 14600,
  coverImage: "/images/cover-football.jpg",
  questions: [
    {
      id: 1,
      question: "Qui a remporté le plus de Ballons d'Or ?",
      answers: [
        { id: "a", text: "Lionel Messi", image: "/images/duel-football-a.jpg" },
        { id: "b", text: "Cristiano Ronaldo", image: "/images/duel-football-b.jpg" },
      ],
      correctAnswer: "a",
      explanation: "Messi : 8 Ballons d'Or. Ronaldo : 5 Ballons d'Or.",
    },
    {
      id: 2,
      question: "Qui a gagné le plus de tournois du Grand Chelem ?",
      answers: [
        { id: "a", text: "Rafael Nadal", image: "/images/duel-tennis-a.jpg" },
        { id: "b", text: "Novak Djokovic", image: "/images/duel-tennis-b.jpg" },
      ],
      correctAnswer: "b",
      explanation: "Djokovic : 24 Grand Chelems. Nadal : 22 Grand Chelems.",
    },
    {
      id: 3,
      question: "Qui a marqué le plus de buts en Coupe du Monde ?",
      answers: [
        { id: "a", text: "Miroslav Klose", image: "/images/duel-football-a.jpg" },
        { id: "b", text: "Ronaldo (R9)", image: "/images/duel-football-b.jpg" },
      ],
      correctAnswer: "a",
      explanation: "Klose : 16 buts en Coupe du Monde. Ronaldo : 15 buts.",
    },
    {
      id: 4,
      question: "Qui a le plus de médailles d'or olympiques (sprint) ?",
      answers: [
        { id: "a", text: "Carl Lewis", image: "/images/duel-running-a.jpg" },
        { id: "b", text: "Usain Bolt", image: "/images/duel-running-b.jpg" },
      ],
      correctAnswer: "b",
      explanation: "Bolt : 8 médailles d'or. Lewis : 9 au total mais en comptant le saut en longueur.",
    },
    {
      id: 5,
      question: "Qui a remporté le plus de titres NBA ?",
      answers: [
        { id: "a", text: "Michael Jordan", image: "/images/duel-basketball-a.jpg" },
        { id: "b", text: "Bill Russell", image: "/images/duel-basketball-b.jpg" },
      ],
      correctAnswer: "b",
      explanation: "Bill Russell : 11 titres NBA. Michael Jordan : 6 titres.",
    },
    {
      id: 6,
      question: "Qui a le plus de victoires en Formule 1 ?",
      answers: [
        { id: "a", text: "Lewis Hamilton", image: "/images/duel-f1-a.jpg" },
        { id: "b", text: "Michael Schumacher", image: "/images/duel-f1-b.jpg" },
      ],
      correctAnswer: "a",
      explanation: "Hamilton : 103 victoires. Schumacher : 91 victoires.",
    },
    {
      id: 7,
      question: "Qui a marqué le plus de buts en une saison de Liga ?",
      answers: [
        { id: "a", text: "Lionel Messi", image: "/images/duel-football-a.jpg" },
        { id: "b", text: "Cristiano Ronaldo", image: "/images/duel-football-b.jpg" },
      ],
      correctAnswer: "a",
      explanation: "Messi : 50 buts en Liga (2011-2012). Ronaldo : 48 buts (2014-2015).",
    },
    {
      id: 8,
      question: "Qui a gagné le plus de Tours de France ?",
      answers: [
        { id: "a", text: "Eddy Merckx", image: "/images/duel-cycling-a.jpg" },
        { id: "b", text: "Jacques Anquetil", image: "/images/duel-cycling-b.jpg" },
      ],
      correctAnswer: "a",
      explanation: "Les deux ont 5 victoires, mais Merckx a aussi 11 victoires d'étapes de plus.",
    },
    {
      id: 9,
      question: "Qui détient le record du 200m ?",
      answers: [
        { id: "a", text: "Usain Bolt", image: "/images/duel-running-a.jpg" },
        { id: "b", text: "Yohan Blake", image: "/images/duel-running-b.jpg" },
      ],
      correctAnswer: "a",
      explanation: "Bolt : 19,19s (Berlin 2009). Blake : 19,26s.",
    },
    {
      id: 10,
      question: "Qui a remporté le plus de Coupes du Monde (sélections) ?",
      answers: [
        { id: "a", text: "Brésil", image: "/images/duel-football-a.jpg" },
        { id: "b", text: "Allemagne", image: "/images/duel-football-b.jpg" },
      ],
      correctAnswer: "a",
      explanation: "Brésil : 5 titres. Allemagne : 4 titres.",
    },
  ],
};

const ordreSport: QuizData = {
  slug: "ordre-chronologique-sport",
  title: "Quiz ordre chronologique : histoire du sport",
  description: "Replace ces grands moments sportifs dans le bon ordre chronologique !",
  category: "Sport",
  difficulty: "Difficile",
  timePerQuestion: 45,
  gameType: "ordre",
  playCount: 8900,
  coverImage: "/images/cover-olympics.jpg",
  questions: [
    {
      id: 1,
      question: "Classe ces événements du plus ancien au plus récent",
      answers: [
        { id: "a", text: "Première Coupe du Monde de football" },
        { id: "b", text: "Premiers Jeux Olympiques modernes" },
        { id: "c", text: "Création de la NBA" },
        { id: "d", text: "Premier Tour de France" },
      ],
      correctAnswer: "b",
      correctOrder: ["b", "d", "a", "c"],
      explanation: "JO modernes (1896) → Tour de France (1903) → Coupe du Monde (1930) → NBA (1946)",
    },
    {
      id: 2,
      question: "Classe ces titres de la France du plus ancien au plus récent",
      answers: [
        { id: "a", text: "France championne du monde (football)" },
        { id: "b", text: "France championne du monde (2ème fois)" },
        { id: "c", text: "France championne d'Europe (1ère fois)" },
        { id: "d", text: "France championne d'Europe (2ème fois)" },
      ],
      correctAnswer: "c",
      correctOrder: ["c", "a", "d", "b"],
      explanation: "Euro 1984 → Mondial 1998 → Euro 2000 → Mondial 2018",
    },
    {
      id: 3,
      question: "Classe ces records du plus ancien au plus récent",
      answers: [
        { id: "a", text: "100m sous les 10 secondes" },
        { id: "b", text: "Marathon sous les 2 heures" },
        { id: "c", text: "Saut à la perche au-dessus de 6m" },
        { id: "d", text: "100m sous les 9,6 secondes" },
      ],
      correctAnswer: "a",
      correctOrder: ["a", "c", "d", "b"],
      explanation: "100m < 10s (1968) → Perche > 6m (1985) → 100m < 9,6s (2009) → Marathon < 2h (2019)",
    },
    {
      id: 4,
      question: "Classe ces transferts de football du plus ancien au plus récent",
      answers: [
        { id: "a", text: "Zidane au Real Madrid" },
        { id: "b", text: "Neymar au PSG" },
        { id: "c", text: "Ronaldo au Real Madrid" },
        { id: "d", text: "Mbappé au Real Madrid" },
      ],
      correctAnswer: "a",
      correctOrder: ["a", "c", "b", "d"],
      explanation: "Zidane (2001) → Ronaldo (2009) → Neymar (2017) → Mbappé (2024)",
    },
    {
      id: 5,
      question: "Classe ces sports par leur entrée aux JO (du plus ancien au plus récent)",
      answers: [
        { id: "a", text: "Basketball" },
        { id: "b", text: "Judo" },
        { id: "c", text: "Taekwondo" },
        { id: "d", text: "Tennis de table" },
      ],
      correctAnswer: "a",
      correctOrder: ["a", "b", "d", "c"],
      explanation: "Basketball (1936) → Judo (1964) → Tennis de table (1988) → Taekwondo (2000)",
    },
    {
      id: 6,
      question: "Classe ces compétitions de la plus ancienne à la plus récente",
      answers: [
        { id: "a", text: "Ligue des Champions" },
        { id: "b", text: "Super Bowl" },
        { id: "c", text: "Roland-Garros" },
        { id: "d", text: "Coupe Davis" },
      ],
      correctAnswer: "c",
      correctOrder: ["c", "d", "a", "b"],
      explanation: "Roland-Garros (1891) → Coupe Davis (1900) → Ligue des Champions (1955) → Super Bowl (1967)",
    },
  ],
};

// All quizzes exported
export const allQuizzes: QuizData[] = [
  // Sport
  sportCultureGenerale,
  footballLegendes,
  joQuizFacile,
  tennisQuiz,
  sportVraiFaux,
  sportsExtremesQuiz,
  nbaQuiz,
  chronoSportQuiz,
  blindTestSport,
  estimationSport,
  duelSport,
  ordreSport,
  // Géographie
  quizDrapeaux,
  quizDepartementsFrancais,
  quizPaysEurope,
  // Cinéma
  quizDisney,
  quizHarryPotter,
  quizOnePiece,
  quizNaruto,
  quizAnime,
  // Jeux Vidéo
  quizPokemon,
  quizBrawlStars,
  quizGamer,
  // Culture Générale
  quizIslam,
  // Animaux & Nature
  quizAnimaux,
  // Logos & Marques
  quizLogos,
  // Scolaire
  quizAnglais,
  quizBrevetHistoire,
  // Amour & Amitié
  quizAmitie,
  // Football
  quizFootball,
];

// Get quizzes by category
export const getQuizzesByCategory = (categorySlug: string): QuizData[] => {
  const categoryMap: Record<string, string> = {
    sport: "Sport",
    cinema: "Cinéma",
    histoire: "Histoire",
    sciences: "Sciences",
    musique: "Musique",
    geographie: "Géographie",
    "culture-generale": "Culture Générale",
    "jeux-video": "Jeux Vidéo",
    animaux: "Animaux & Nature",
    logos: "Logos & Marques",
    scolaire: "Scolaire",
    amour: "Amour & Amitié",
    // New specific categories
    drapeaux: "Drapeaux",
    disney: "Disney",
    islam: "Islam",
    "departements-francais": "Départements français",
    "one-piece": "One Piece",
    "harry-potter": "Harry Potter",
    football: "Football",
    pokemon: "Pokémon",
    anglais: "Anglais",
    naruto: "Naruto",
    gamer: "Gamer",
    "brevet-histoire": "Brevet Histoire",
    "pays-europe": "Pays d'Europe",
    "brawl-stars": "Brawl Stars",
    anime: "Anime & Manga",
    amitie: "Amitié",
  };
  const categoryName = categoryMap[categorySlug] || categorySlug;
  return allQuizzes.filter((q) => q.category === categoryName);
};

// Get featured quiz for a category
export const getFeaturedQuiz = (categorySlug: string): QuizData | undefined => {
  const quizzes = getQuizzesByCategory(categorySlug);
  return quizzes.find((q) => q.featured) || quizzes.sort((a, b) => (b.playCount || 0) - (a.playCount || 0))[0];
};
