import type { QuizData } from "./types";

export const sampleQuiz: QuizData = {
  slug: "culture-generale-sport",
  title: "Quiz culture générale : sport",
  description:
    "Teste tes connaissances sportives avec ce quiz de 10 questions ! Du football au bobsleigh, montre que tu es incollable.",
  category: "Sport",
  difficulty: "Moyen",
  timePerQuestion: 20,
  coverImage: "/images/cover-sport.jpg",
  questions: [
    {
      id: 1,
      question:
        "Aux Jeux olympiques, combien de membres composent au maximum une équipe masculine de bobsleigh ?",
      image: "/images/q1-bobsleigh.jpg",
      answers: [
        { id: "a", text: "2 personnes" },
        { id: "b", text: "3 personnes" },
        { id: "c", text: "4 personnes" },
        { id: "d", text: "5 personnes" },
      ],
      correctAnswer: "c",
      explanation:
        "L'épreuve de bob à 4 est la plus grande équipe en bobsleigh olympique.",
      hint: "Pense au nombre maximum de places dans un bobsleigh.",
    },
    {
      id: 2,
      question: "Dans quel sport utilise-t-on un volant ?",
      image: "/images/q2-badminton.jpg",
      answers: [
        { id: "a", text: "Tennis" },
        { id: "b", text: "Badminton" },
        { id: "c", text: "Squash" },
        { id: "d", text: "Ping-pong" },
      ],
      correctAnswer: "b",
      explanation:
        "Le volant (ou shuttlecock) est l'objet utilisé au badminton.",
      hint: "Ce sport se joue souvent en extérieur, dans les jardins.",
    },
    {
      id: 3,
      question: "Combien de joueurs composent une équipe de rugby à XV ?",
      image: "/images/q3-rugby.jpg",
      answers: [
        { id: "a", text: "13 joueurs" },
        { id: "b", text: "14 joueurs" },
        { id: "c", text: "15 joueurs" },
        { id: "d", text: "16 joueurs" },
      ],
      correctAnswer: "c",
      explanation: "Comme son nom l'indique, le rugby à XV se joue avec 15 joueurs.",
      hint: "La réponse est dans le nom du sport...",
    },
    {
      id: 4,
      question: "Quel pays a remporté la Coupe du Monde de football en 2022 ?",
      image: "/images/q4-football.jpg",
      answers: [
        { id: "a", text: "Brésil" },
        { id: "b", text: "France" },
        { id: "c", text: "Argentine" },
        { id: "d", text: "Croatie" },
      ],
      correctAnswer: "c",
      explanation:
        "L'Argentine a remporté la Coupe du Monde 2022 au Qatar, menée par Lionel Messi.",
      hint: "Pense à Messi et son rêve enfin réalisé.",
    },
    {
      id: 5,
      question: "Quelle est la distance d'un marathon ?",
      image: "/images/q5-marathon.jpg",
      answers: [
        { id: "a", text: "40,195 km" },
        { id: "b", text: "42,195 km" },
        { id: "c", text: "44,195 km" },
        { id: "d", text: "38,195 km" },
      ],
      correctAnswer: "b",
      explanation:
        "Le marathon fait exactement 42,195 km, distance fixée depuis les JO de Londres en 1908.",
      hint: "C'est un peu plus de 42 km.",
    },
    {
      id: 6,
      question: "Au tennis, comment appelle-t-on un score de 40-40 ?",
      image: "/images/q6-tennis.jpg",
      answers: [
        { id: "a", text: "Tie-break" },
        { id: "b", text: "Deuce" },
        { id: "c", text: "Match point" },
        { id: "d", text: "Avantage" },
      ],
      correctAnswer: "b",
      explanation: "Le score 40-40 s'appelle 'deuce' (ou égalité en français).",
      hint: "C'est un mot anglais qui signifie 'deux' ou 'égalité'.",
    },
    {
      id: 7,
      question: "Quel sport se pratique sur un tatami ?",
      image: "/images/q7-judo.jpg",
      answers: [
        { id: "a", text: "Escrime" },
        { id: "b", text: "Boxe" },
        { id: "c", text: "Judo" },
        { id: "d", text: "Lutte" },
      ],
      correctAnswer: "c",
      explanation:
        "Le judo se pratique sur un tatami, un tapis japonais traditionnel.",
      hint: "C'est un art martial japonais.",
    },
    {
      id: 8,
      question: "Combien de sets faut-il gagner pour remporter un match de volleyball ?",
      image: "/images/q8-volleyball.jpg",
      answers: [
        { id: "a", text: "2 sets" },
        { id: "b", text: "3 sets" },
        { id: "c", text: "4 sets" },
        { id: "d", text: "5 sets" },
      ],
      correctAnswer: "b",
      explanation:
        "Il faut gagner 3 sets sur 5 possibles pour remporter un match.",
      hint: "Le match se joue en 5 sets maximum.",
    },
    {
      id: 9,
      question: "Dans quel pays le cricket est-il le sport national ?",
      image: "/images/q9-cricket.jpg",
      answers: [
        { id: "a", text: "Australie" },
        { id: "b", text: "Angleterre" },
        { id: "c", text: "Inde" },
        { id: "d", text: "Afrique du Sud" },
      ],
      correctAnswer: "c",
      explanation:
        "Le cricket est considéré comme le sport national en Inde.",
      hint: "C'est le pays le plus peuplé au monde.",
    },
    {
      id: 10,
      question: "Quel nageur détient le record du plus grand nombre de médailles olympiques ?",
      image: "/images/q10-swimming.jpg",
      answers: [
        { id: "a", text: "Ian Thorpe" },
        { id: "b", text: "Mark Spitz" },
        { id: "c", text: "Michael Phelps" },
        { id: "d", text: "Ryan Lochte" },
      ],
      correctAnswer: "c",
      explanation:
        "Michael Phelps détient le record avec 28 médailles olympiques, dont 23 en or.",
      hint: "Il est surnommé 'The Baltimore Bullet'.",
    },
  ],
};
