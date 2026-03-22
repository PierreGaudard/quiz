import type { TranslatedQuiz } from "./types";

const sportCultureGenerale: TranslatedQuiz = {
  slug: "culture-generale-sport",
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "medium",
  coverImage: "/images/cover-sport.webp",
  timePerQuestion: 20,
  gameType: "qcm",
  featured: true,
  playCount: 15420,
  translations: {
    fr: {
      title: "Quiz culture générale : sport",
      description:
        "Teste tes connaissances sportives avec ce quiz de 10 questions ! Du football au bobsleigh, montre que tu es incollable.",
      questions: [
        {
          id: 1,
          question:
            "Aux Jeux olympiques, combien de membres composent au maximum une équipe masculine de bobsleigh ?",
          image: "/images/q1-bobsleigh.webp",
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
          image: "/images/q2-badminton.webp",
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
          image: "/images/q3-rugby.webp",
          answers: [
            { id: "a", text: "13 joueurs" },
            { id: "b", text: "14 joueurs" },
            { id: "c", text: "15 joueurs" },
            { id: "d", text: "16 joueurs" },
          ],
          correctAnswer: "c",
          explanation:
            "Comme son nom l'indique, le rugby à XV se joue avec 15 joueurs.",
          hint: "La réponse est dans le nom du sport...",
        },
        {
          id: 4,
          question:
            "Quel pays a remporté la Coupe du Monde de football en 2022 ?",
          image: "/images/q4-football.webp",
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
          image: "/images/q5-marathon.webp",
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
          question:
            "Au tennis, comment appelle-t-on un score de 40-40 ?",
          image: "/images/q6-tennis.webp",
          answers: [
            { id: "a", text: "Tie-break" },
            { id: "b", text: "Deuce" },
            { id: "c", text: "Match point" },
            { id: "d", text: "Avantage" },
          ],
          correctAnswer: "b",
          explanation:
            "Le score 40-40 s'appelle 'deuce' (ou égalité en français).",
          hint: "C'est un mot anglais qui signifie 'deux' ou 'égalité'.",
        },
        {
          id: 7,
          question: "Quel sport se pratique sur un tatami ?",
          image: "/images/q7-judo.webp",
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
          question:
            "Combien de sets faut-il gagner pour remporter un match de volleyball ?",
          image: "/images/q8-volleyball.webp",
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
          image: "/images/q9-cricket.webp",
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
          question:
            "Quel nageur détient le record du plus grand nombre de médailles olympiques ?",
          image: "/images/q10-swimming.webp",
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
    },
    en: {
      title: "General Knowledge Quiz: Sport",
      description:
        "Test your sports knowledge with this 10-question quiz! From football to bobsled, show you know it all.",
      questions: [
        {
          id: 1,
          question:
            "At the Olympics, what is the maximum number of members in a men's bobsled team?",
          image: "/images/q1-bobsleigh.webp",
          answers: [
            { id: "a", text: "2 people" },
            { id: "b", text: "3 people" },
            { id: "c", text: "4 people" },
            { id: "d", text: "5 people" },
          ],
          correctAnswer: "c",
          explanation:
            "The four-man bobsled is the largest team event in Olympic bobsled.",
          hint: "Think about the maximum number of seats in a bobsled.",
        },
        {
          id: 2,
          question: "In which sport is a shuttlecock used?",
          image: "/images/q2-badminton.webp",
          answers: [
            { id: "a", text: "Tennis" },
            { id: "b", text: "Badminton" },
            { id: "c", text: "Squash" },
            { id: "d", text: "Table tennis" },
          ],
          correctAnswer: "b",
          explanation:
            "The shuttlecock (or birdie) is the object used in badminton.",
          hint: "This sport is often played outdoors, in backyards.",
        },
        {
          id: 3,
          question: "How many players make up a rugby union team?",
          image: "/images/q3-rugby.webp",
          answers: [
            { id: "a", text: "13 players" },
            { id: "b", text: "14 players" },
            { id: "c", text: "15 players" },
            { id: "d", text: "16 players" },
          ],
          correctAnswer: "c",
          explanation:
            "As its name suggests, rugby union (XV) is played with 15 players.",
          hint: "The answer is in the name of the sport...",
        },
        {
          id: 4,
          question:
            "Which country won the 2022 FIFA World Cup?",
          image: "/images/q4-football.webp",
          answers: [
            { id: "a", text: "Brazil" },
            { id: "b", text: "France" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Croatia" },
          ],
          correctAnswer: "c",
          explanation:
            "Argentina won the 2022 World Cup in Qatar, led by Lionel Messi.",
          hint: "Think of Messi and his dream finally coming true.",
        },
        {
          id: 5,
          question: "What is the distance of a marathon?",
          image: "/images/q5-marathon.webp",
          answers: [
            { id: "a", text: "40.195 km" },
            { id: "b", text: "42.195 km" },
            { id: "c", text: "44.195 km" },
            { id: "d", text: "38.195 km" },
          ],
          correctAnswer: "b",
          explanation:
            "A marathon is exactly 42.195 km, a distance fixed since the 1908 London Olympics.",
          hint: "It's a little over 42 km.",
        },
        {
          id: 6,
          question:
            "In tennis, what do you call a score of 40-40?",
          image: "/images/q6-tennis.webp",
          answers: [
            { id: "a", text: "Tie-break" },
            { id: "b", text: "Deuce" },
            { id: "c", text: "Match point" },
            { id: "d", text: "Advantage" },
          ],
          correctAnswer: "b",
          explanation:
            "A score of 40-40 is called 'deuce' in tennis.",
          hint: "It's an English word meaning 'two' or 'equal'.",
        },
        {
          id: 7,
          question: "Which sport is practiced on a tatami?",
          image: "/images/q7-judo.webp",
          answers: [
            { id: "a", text: "Fencing" },
            { id: "b", text: "Boxing" },
            { id: "c", text: "Judo" },
            { id: "d", text: "Wrestling" },
          ],
          correctAnswer: "c",
          explanation:
            "Judo is practiced on a tatami, a traditional Japanese mat.",
          hint: "It's a Japanese martial art.",
        },
        {
          id: 8,
          question:
            "How many sets do you need to win to take a volleyball match?",
          image: "/images/q8-volleyball.webp",
          answers: [
            { id: "a", text: "2 sets" },
            { id: "b", text: "3 sets" },
            { id: "c", text: "4 sets" },
            { id: "d", text: "5 sets" },
          ],
          correctAnswer: "b",
          explanation:
            "You need to win 3 out of 5 possible sets to win a match.",
          hint: "The match is played as best of 5 sets.",
        },
        {
          id: 9,
          question: "In which country is cricket the national sport?",
          image: "/images/q9-cricket.webp",
          answers: [
            { id: "a", text: "Australia" },
            { id: "b", text: "England" },
            { id: "c", text: "India" },
            { id: "d", text: "South Africa" },
          ],
          correctAnswer: "c",
          explanation:
            "Cricket is considered the national sport in India.",
          hint: "It's the most populous country in the world.",
        },
        {
          id: 10,
          question:
            "Which swimmer holds the record for the most Olympic medals?",
          image: "/images/q10-swimming.webp",
          answers: [
            { id: "a", text: "Ian Thorpe" },
            { id: "b", text: "Mark Spitz" },
            { id: "c", text: "Michael Phelps" },
            { id: "d", text: "Ryan Lochte" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps holds the record with 28 Olympic medals, including 23 gold.",
          hint: "He is nicknamed 'The Baltimore Bullet'.",
        },
      ],
    },
    es: {
      title: "Quiz de cultura general: deporte",
      description:
        "¡Pon a prueba tus conocimientos deportivos con este quiz de 10 preguntas! Del fútbol al bobsled, demuestra que lo sabes todo.",
      questions: [
        {
          id: 1,
          question:
            "En los Juegos Olímpicos, ¿cuántos miembros componen como máximo un equipo masculino de bobsled?",
          image: "/images/q1-bobsleigh.webp",
          answers: [
            { id: "a", text: "2 personas" },
            { id: "b", text: "3 personas" },
            { id: "c", text: "4 personas" },
            { id: "d", text: "5 personas" },
          ],
          correctAnswer: "c",
          explanation:
            "La prueba de bob a 4 es el equipo más grande en bobsled olímpico.",
          hint: "Piensa en el número máximo de plazas en un bobsled.",
        },
        {
          id: 2,
          question: "¿En qué deporte se usa un volante (plumilla)?",
          image: "/images/q2-badminton.webp",
          answers: [
            { id: "a", text: "Tenis" },
            { id: "b", text: "Bádminton" },
            { id: "c", text: "Squash" },
            { id: "d", text: "Tenis de mesa" },
          ],
          correctAnswer: "b",
          explanation:
            "El volante (o shuttlecock) es el objeto utilizado en bádminton.",
          hint: "Este deporte se juega a menudo al aire libre, en jardines.",
        },
        {
          id: 3,
          question: "¿Cuántos jugadores componen un equipo de rugby XV?",
          image: "/images/q3-rugby.webp",
          answers: [
            { id: "a", text: "13 jugadores" },
            { id: "b", text: "14 jugadores" },
            { id: "c", text: "15 jugadores" },
            { id: "d", text: "16 jugadores" },
          ],
          correctAnswer: "c",
          explanation:
            "Como su nombre indica, el rugby XV se juega con 15 jugadores.",
          hint: "La respuesta está en el nombre del deporte...",
        },
        {
          id: 4,
          question:
            "¿Qué país ganó la Copa del Mundo de fútbol en 2022?",
          image: "/images/q4-football.webp",
          answers: [
            { id: "a", text: "Brasil" },
            { id: "b", text: "Francia" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Croacia" },
          ],
          correctAnswer: "c",
          explanation:
            "Argentina ganó la Copa del Mundo 2022 en Catar, liderada por Lionel Messi.",
          hint: "Piensa en Messi y su sueño finalmente cumplido.",
        },
        {
          id: 5,
          question: "¿Cuál es la distancia de un maratón?",
          image: "/images/q5-marathon.webp",
          answers: [
            { id: "a", text: "40,195 km" },
            { id: "b", text: "42,195 km" },
            { id: "c", text: "44,195 km" },
            { id: "d", text: "38,195 km" },
          ],
          correctAnswer: "b",
          explanation:
            "El maratón mide exactamente 42,195 km, distancia fijada desde los JJ.OO. de Londres en 1908.",
          hint: "Es un poco más de 42 km.",
        },
        {
          id: 6,
          question:
            "En tenis, ¿cómo se llama una puntuación de 40-40?",
          image: "/images/q6-tennis.webp",
          answers: [
            { id: "a", text: "Tie-break" },
            { id: "b", text: "Deuce" },
            { id: "c", text: "Match point" },
            { id: "d", text: "Ventaja" },
          ],
          correctAnswer: "b",
          explanation:
            "La puntuación 40-40 se llama 'deuce' (o iguales en español).",
          hint: "Es una palabra inglesa que significa 'dos' o 'igualdad'.",
        },
        {
          id: 7,
          question: "¿Qué deporte se practica sobre un tatami?",
          image: "/images/q7-judo.webp",
          answers: [
            { id: "a", text: "Esgrima" },
            { id: "b", text: "Boxeo" },
            { id: "c", text: "Judo" },
            { id: "d", text: "Lucha" },
          ],
          correctAnswer: "c",
          explanation:
            "El judo se practica sobre un tatami, una estera tradicional japonesa.",
          hint: "Es un arte marcial japonés.",
        },
        {
          id: 8,
          question:
            "¿Cuántos sets hay que ganar para ganar un partido de voleibol?",
          image: "/images/q8-volleyball.webp",
          answers: [
            { id: "a", text: "2 sets" },
            { id: "b", text: "3 sets" },
            { id: "c", text: "4 sets" },
            { id: "d", text: "5 sets" },
          ],
          correctAnswer: "b",
          explanation:
            "Hay que ganar 3 sets de 5 posibles para ganar un partido.",
          hint: "El partido se juega al mejor de 5 sets.",
        },
        {
          id: 9,
          question: "¿En qué país el críquet es el deporte nacional?",
          image: "/images/q9-cricket.webp",
          answers: [
            { id: "a", text: "Australia" },
            { id: "b", text: "Inglaterra" },
            { id: "c", text: "India" },
            { id: "d", text: "Sudáfrica" },
          ],
          correctAnswer: "c",
          explanation:
            "El críquet es considerado el deporte nacional en India.",
          hint: "Es el país más poblado del mundo.",
        },
        {
          id: 10,
          question:
            "¿Qué nadador tiene el récord de más medallas olímpicas?",
          image: "/images/q10-swimming.webp",
          answers: [
            { id: "a", text: "Ian Thorpe" },
            { id: "b", text: "Mark Spitz" },
            { id: "c", text: "Michael Phelps" },
            { id: "d", text: "Ryan Lochte" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps tiene el récord con 28 medallas olímpicas, de las cuales 23 son de oro.",
          hint: "Es apodado 'The Baltimore Bullet'.",
        },
      ],
    },
  },
};

const footballLegendes: TranslatedQuiz = {
  slug: "football-legendes",
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "medium",
  coverImage: "/images/cover-football.webp",
  timePerQuestion: 20,
  gameType: "qcm",
  playCount: 23150,
  translations: {
    fr: {
      title: "Quiz football : les légendes",
      description:
        "De Pelé à Mbappé, connais-tu les plus grandes légendes du football mondial ?",
      questions: [
        {
          id: 1,
          question: "Quel joueur détient le record de Ballons d'Or ?",
          image: "/images/q-messi.webp",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Michel Platini" },
            { id: "d", text: "Johan Cruyff" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi détient 8 Ballons d'Or, un record absolu.",
        },
        {
          id: 2,
          question:
            "Quelle équipe a remporté la première Coupe du Monde en 1930 ?",
          image: "/images/q-worldcup.webp",
          answers: [
            { id: "a", text: "Brésil" },
            { id: "b", text: "Argentine" },
            { id: "c", text: "Uruguay" },
            { id: "d", text: "Italie" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Uruguay a remporté la première Coupe du Monde organisée sur son sol en 1930.",
        },
        {
          id: 3,
          question:
            "Combien de buts Pelé a-t-il marqué en carrière officielle ?",
          answers: [
            { id: "a", text: "512" },
            { id: "b", text: "757" },
            { id: "c", text: "643" },
            { id: "d", text: "892" },
          ],
          correctAnswer: "b",
          explanation:
            "Pelé a inscrit 757 buts officiels en carrière professionnelle.",
        },
        {
          id: 4,
          question:
            "Quel club a remporté le plus de Ligues des Champions ?",
          image: "/images/q-stadium.webp",
          answers: [
            { id: "a", text: "AC Milan" },
            { id: "b", text: "FC Barcelone" },
            { id: "c", text: "Real Madrid" },
            { id: "d", text: "Liverpool" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Real Madrid est le club le plus titré avec 15 Ligues des Champions.",
        },
        {
          id: 5,
          question:
            "Qui est le meilleur buteur de l'histoire de la Ligue des Champions ?",
          answers: [
            { id: "a", text: "Lionel Messi" },
            { id: "b", text: "Robert Lewandowski" },
            { id: "c", text: "Cristiano Ronaldo" },
            { id: "d", text: "Raúl" },
          ],
          correctAnswer: "c",
          explanation:
            "Cristiano Ronaldo est le meilleur buteur de l'histoire de la compétition avec 140 buts.",
        },
        {
          id: 6,
          question: "Quel pays a remporté le plus de Coupes du Monde ?",
          image: "/images/q-worldcup.webp",
          answers: [
            { id: "a", text: "Allemagne" },
            { id: "b", text: "Italie" },
            { id: "c", text: "Argentine" },
            { id: "d", text: "Brésil" },
          ],
          correctAnswer: "d",
          explanation:
            "Le Brésil est le pays le plus titré avec 5 Coupes du Monde.",
        },
        {
          id: 7,
          question:
            "En quelle année Zinédine Zidane a-t-il mis son fameux coup de tête en finale ?",
          image: "/images/q4-football.webp",
          answers: [
            { id: "a", text: "2002" },
            { id: "b", text: "2006" },
            { id: "c", text: "2004" },
            { id: "d", text: "2008" },
          ],
          correctAnswer: "b",
          explanation:
            "Le coup de tête de Zidane sur Materazzi a eu lieu en finale de la Coupe du Monde 2006.",
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
          explanation:
            "Lev Yachine, seul gardien à avoir remporté le Ballon d'Or, était surnommé 'l'araignée noire' ou 'le mur'.",
        },
        {
          id: 9,
          question:
            "Combien de joueurs composent une équipe de football sur le terrain ?",
          image: "/images/q-stadium.webp",
          answers: [
            { id: "a", text: "9" },
            { id: "b", text: "10" },
            { id: "c", text: "11" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "Une équipe de football est composée de 11 joueurs sur le terrain.",
        },
        {
          id: 10,
          question:
            "Quel joueur français a inscrit un triplé en finale de Coupe du Monde 2022 ?",
          image: "/images/q4-football.webp",
          answers: [
            { id: "a", text: "Antoine Griezmann" },
            { id: "b", text: "Kylian Mbappé" },
            { id: "c", text: "Olivier Giroud" },
            { id: "d", text: "Ousmane Dembélé" },
          ],
          correctAnswer: "b",
          explanation:
            "Kylian Mbappé a inscrit un triplé historique en finale contre l'Argentine.",
        },
      ],
    },
    en: {
      title: "Football Quiz: The Legends",
      description:
        "From Pelé to Mbappé, do you know the greatest legends of world football?",
      questions: [
        {
          id: 1,
          question: "Which player holds the record for Ballon d'Or awards?",
          image: "/images/q-messi.webp",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Michel Platini" },
            { id: "d", text: "Johan Cruyff" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi holds 8 Ballon d'Or awards, an all-time record.",
        },
        {
          id: 2,
          question: "Which team won the first World Cup in 1930?",
          image: "/images/q-worldcup.webp",
          answers: [
            { id: "a", text: "Brazil" },
            { id: "b", text: "Argentina" },
            { id: "c", text: "Uruguay" },
            { id: "d", text: "Italy" },
          ],
          correctAnswer: "c",
          explanation:
            "Uruguay won the first World Cup held on its home soil in 1930.",
        },
        {
          id: 3,
          question:
            "How many goals did Pelé score in his official career?",
          answers: [
            { id: "a", text: "512" },
            { id: "b", text: "757" },
            { id: "c", text: "643" },
            { id: "d", text: "892" },
          ],
          correctAnswer: "b",
          explanation:
            "Pelé scored 757 official goals in his professional career.",
        },
        {
          id: 4,
          question:
            "Which club has won the most Champions League titles?",
          image: "/images/q-stadium.webp",
          answers: [
            { id: "a", text: "AC Milan" },
            { id: "b", text: "FC Barcelona" },
            { id: "c", text: "Real Madrid" },
            { id: "d", text: "Liverpool" },
          ],
          correctAnswer: "c",
          explanation:
            "Real Madrid is the most decorated club with 15 Champions League titles.",
        },
        {
          id: 5,
          question:
            "Who is the all-time top scorer in Champions League history?",
          answers: [
            { id: "a", text: "Lionel Messi" },
            { id: "b", text: "Robert Lewandowski" },
            { id: "c", text: "Cristiano Ronaldo" },
            { id: "d", text: "Raúl" },
          ],
          correctAnswer: "c",
          explanation:
            "Cristiano Ronaldo is the all-time top scorer in the competition with 140 goals.",
        },
        {
          id: 6,
          question: "Which country has won the most World Cups?",
          image: "/images/q-worldcup.webp",
          answers: [
            { id: "a", text: "Germany" },
            { id: "b", text: "Italy" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Brazil" },
          ],
          correctAnswer: "d",
          explanation:
            "Brazil is the most successful nation with 5 World Cup titles.",
        },
        {
          id: 7,
          question:
            "In what year did Zinédine Zidane deliver his infamous headbutt in the final?",
          image: "/images/q4-football.webp",
          answers: [
            { id: "a", text: "2002" },
            { id: "b", text: "2006" },
            { id: "c", text: "2004" },
            { id: "d", text: "2008" },
          ],
          correctAnswer: "b",
          explanation:
            "Zidane's headbutt on Materazzi took place in the 2006 World Cup final.",
        },
        {
          id: 8,
          question: "Which goalkeeper is nicknamed 'the wall'?",
          answers: [
            { id: "a", text: "Manuel Neuer" },
            { id: "b", text: "Gianluigi Buffon" },
            { id: "c", text: "Lev Yashin" },
            { id: "d", text: "Oliver Kahn" },
          ],
          correctAnswer: "c",
          explanation:
            "Lev Yashin, the only goalkeeper to win the Ballon d'Or, was nicknamed 'the Black Spider' or 'the Wall'.",
        },
        {
          id: 9,
          question:
            "How many players make up a football team on the pitch?",
          image: "/images/q-stadium.webp",
          answers: [
            { id: "a", text: "9" },
            { id: "b", text: "10" },
            { id: "c", text: "11" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "A football team is made up of 11 players on the pitch.",
        },
        {
          id: 10,
          question:
            "Which French player scored a hat-trick in the 2022 World Cup final?",
          image: "/images/q4-football.webp",
          answers: [
            { id: "a", text: "Antoine Griezmann" },
            { id: "b", text: "Kylian Mbappé" },
            { id: "c", text: "Olivier Giroud" },
            { id: "d", text: "Ousmane Dembélé" },
          ],
          correctAnswer: "b",
          explanation:
            "Kylian Mbappé scored a historic hat-trick in the final against Argentina.",
        },
      ],
    },
    es: {
      title: "Quiz de fútbol: las leyendas",
      description:
        "De Pelé a Mbappé, ¿conoces a las mayores leyendas del fútbol mundial?",
      questions: [
        {
          id: 1,
          question: "¿Qué jugador tiene el récord de Balones de Oro?",
          image: "/images/q-messi.webp",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Michel Platini" },
            { id: "d", text: "Johan Cruyff" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi tiene 8 Balones de Oro, un récord absoluto.",
        },
        {
          id: 2,
          question: "¿Qué equipo ganó la primera Copa del Mundo en 1930?",
          image: "/images/q-worldcup.webp",
          answers: [
            { id: "a", text: "Brasil" },
            { id: "b", text: "Argentina" },
            { id: "c", text: "Uruguay" },
            { id: "d", text: "Italia" },
          ],
          correctAnswer: "c",
          explanation:
            "Uruguay ganó la primera Copa del Mundo celebrada en su suelo en 1930.",
        },
        {
          id: 3,
          question:
            "¿Cuántos goles marcó Pelé en su carrera oficial?",
          answers: [
            { id: "a", text: "512" },
            { id: "b", text: "757" },
            { id: "c", text: "643" },
            { id: "d", text: "892" },
          ],
          correctAnswer: "b",
          explanation:
            "Pelé anotó 757 goles oficiales en su carrera profesional.",
        },
        {
          id: 4,
          question:
            "¿Qué club ha ganado más Ligas de Campeones?",
          image: "/images/q-stadium.webp",
          answers: [
            { id: "a", text: "AC Milan" },
            { id: "b", text: "FC Barcelona" },
            { id: "c", text: "Real Madrid" },
            { id: "d", text: "Liverpool" },
          ],
          correctAnswer: "c",
          explanation:
            "El Real Madrid es el club más laureado con 15 Ligas de Campeones.",
        },
        {
          id: 5,
          question:
            "¿Quién es el máximo goleador de la historia de la Liga de Campeones?",
          answers: [
            { id: "a", text: "Lionel Messi" },
            { id: "b", text: "Robert Lewandowski" },
            { id: "c", text: "Cristiano Ronaldo" },
            { id: "d", text: "Raúl" },
          ],
          correctAnswer: "c",
          explanation:
            "Cristiano Ronaldo es el máximo goleador de la historia de la competición con 140 goles.",
        },
        {
          id: 6,
          question: "¿Qué país ha ganado más Copas del Mundo?",
          image: "/images/q-worldcup.webp",
          answers: [
            { id: "a", text: "Alemania" },
            { id: "b", text: "Italia" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Brasil" },
          ],
          correctAnswer: "d",
          explanation:
            "Brasil es el país más laureado con 5 Copas del Mundo.",
        },
        {
          id: 7,
          question:
            "¿En qué año Zinédine Zidane dio su famoso cabezazo en la final?",
          image: "/images/q4-football.webp",
          answers: [
            { id: "a", text: "2002" },
            { id: "b", text: "2006" },
            { id: "c", text: "2004" },
            { id: "d", text: "2008" },
          ],
          correctAnswer: "b",
          explanation:
            "El cabezazo de Zidane a Materazzi tuvo lugar en la final de la Copa del Mundo 2006.",
        },
        {
          id: 8,
          question: "¿Qué portero es apodado 'el muro'?",
          answers: [
            { id: "a", text: "Manuel Neuer" },
            { id: "b", text: "Gianluigi Buffon" },
            { id: "c", text: "Lev Yashin" },
            { id: "d", text: "Oliver Kahn" },
          ],
          correctAnswer: "c",
          explanation:
            "Lev Yashin, único portero en ganar el Balón de Oro, fue apodado 'la Araña Negra' o 'el Muro'.",
        },
        {
          id: 9,
          question:
            "¿Cuántos jugadores componen un equipo de fútbol en el campo?",
          image: "/images/q-stadium.webp",
          answers: [
            { id: "a", text: "9" },
            { id: "b", text: "10" },
            { id: "c", text: "11" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "Un equipo de fútbol está compuesto por 11 jugadores en el campo.",
        },
        {
          id: 10,
          question:
            "¿Qué jugador francés marcó un triplete en la final de la Copa del Mundo 2022?",
          image: "/images/q4-football.webp",
          answers: [
            { id: "a", text: "Antoine Griezmann" },
            { id: "b", text: "Kylian Mbappé" },
            { id: "c", text: "Olivier Giroud" },
            { id: "d", text: "Ousmane Dembélé" },
          ],
          correctAnswer: "b",
          explanation:
            "Kylian Mbappé anotó un triplete histórico en la final contra Argentina.",
        },
      ],
    },
  },
};

const joQuizFacile: TranslatedQuiz = {
  slug: "jeux-olympiques-facile",
  categorySlug: "sport",
  subcategory: "JO & Athlétisme",
  difficulty: "easy",
  coverImage: "/images/cover-olympics.webp",
  timePerQuestion: 25,
  gameType: "qcm",
  playCount: 8730,
  translations: {
    fr: {
      title: "Quiz jeux olympiques : les bases",
      description:
        "Les anneaux, les sports, les records... Connais-tu les fondamentaux des JO ?",
      questions: [
        {
          id: 1,
          question: "Combien d'anneaux olympiques y a-t-il ?",
          image: "/images/q-olympics-rings.webp",
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
          explanation:
            "Les Jeux Olympiques d'été ont lieu tous les 4 ans.",
        },
        {
          id: 3,
          question:
            "Dans quel pays sont nés les Jeux Olympiques antiques ?",
          image: "/images/q-stadium.webp",
          answers: [
            { id: "a", text: "Italie" },
            { id: "b", text: "Égypte" },
            { id: "c", text: "Grèce" },
            { id: "d", text: "Turquie" },
          ],
          correctAnswer: "c",
          explanation:
            "Les JO antiques sont nés à Olympie, en Grèce, vers 776 av. J.-C.",
        },
        {
          id: 4,
          question: "Quelle ville a accueilli les JO d'été 2024 ?",
          image: "/images/q-olympics-rings.webp",
          answers: [
            { id: "a", text: "Tokyo" },
            { id: "b", text: "Los Angeles" },
            { id: "c", text: "Paris" },
            { id: "d", text: "Londres" },
          ],
          correctAnswer: "c",
          explanation:
            "Paris a accueilli les Jeux Olympiques d'été 2024.",
        },
        {
          id: 5,
          question: "Quelle est la devise olympique ?",
          image: "/images/q-running-track.webp",
          answers: [
            { id: "a", text: "Plus vite, plus haut, plus fort – ensemble" },
            { id: "b", text: "L'important c'est de participer" },
            { id: "c", text: "Un monde, un rêve" },
            { id: "d", text: "La victoire avant tout" },
          ],
          correctAnswer: "a",
          explanation:
            "La devise 'Citius, Altius, Fortius – Communiter' a été mise à jour en 2021.",
        },
        {
          id: 6,
          question: "Quel sportif a gagné 23 médailles d'or olympiques ?",
          image: "/images/q-swimming-pool.webp",
          answers: [
            { id: "a", text: "Carl Lewis" },
            { id: "b", text: "Usain Bolt" },
            { id: "c", text: "Michael Phelps" },
            { id: "d", text: "Mark Spitz" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps est l'athlète le plus médaillé de l'histoire olympique.",
        },
        {
          id: 7,
          question: "Quel sport a été ajouté aux JO de Paris 2024 ?",
          image: "/images/q-running-track.webp",
          answers: [
            { id: "a", text: "Escalade" },
            { id: "b", text: "Breaking" },
            { id: "c", text: "Padel" },
            { id: "d", text: "E-sport" },
          ],
          correctAnswer: "b",
          explanation:
            "Le breaking (breakdance) a fait ses débuts olympiques à Paris 2024.",
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
    },
    en: {
      title: "Olympic Games Quiz: The Basics",
      description:
        "The rings, the sports, the records... Do you know the fundamentals of the Olympics?",
      questions: [
        {
          id: 1,
          question: "How many Olympic rings are there?",
          image: "/images/q-olympics-rings.webp",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation: "The 5 rings represent the 5 continents.",
        },
        {
          id: 2,
          question: "How often do the Summer Olympics take place?",
          answers: [
            { id: "a", text: "Every 2 years" },
            { id: "b", text: "Every 3 years" },
            { id: "c", text: "Every 4 years" },
            { id: "d", text: "Every 5 years" },
          ],
          correctAnswer: "c",
          explanation:
            "The Summer Olympic Games take place every 4 years.",
        },
        {
          id: 3,
          question:
            "In which country were the ancient Olympic Games born?",
          image: "/images/q-stadium.webp",
          answers: [
            { id: "a", text: "Italy" },
            { id: "b", text: "Egypt" },
            { id: "c", text: "Greece" },
            { id: "d", text: "Turkey" },
          ],
          correctAnswer: "c",
          explanation:
            "The ancient Olympics were born in Olympia, Greece, around 776 BC.",
        },
        {
          id: 4,
          question: "Which city hosted the 2024 Summer Olympics?",
          image: "/images/q-olympics-rings.webp",
          answers: [
            { id: "a", text: "Tokyo" },
            { id: "b", text: "Los Angeles" },
            { id: "c", text: "Paris" },
            { id: "d", text: "London" },
          ],
          correctAnswer: "c",
          explanation: "Paris hosted the 2024 Summer Olympic Games.",
        },
        {
          id: 5,
          question: "What is the Olympic motto?",
          image: "/images/q-running-track.webp",
          answers: [
            { id: "a", text: "Faster, Higher, Stronger – Together" },
            { id: "b", text: "The important thing is to participate" },
            { id: "c", text: "One World, One Dream" },
            { id: "d", text: "Victory above all" },
          ],
          correctAnswer: "a",
          explanation:
            "The motto 'Citius, Altius, Fortius – Communiter' was updated in 2021.",
        },
        {
          id: 6,
          question: "Which athlete won 23 Olympic gold medals?",
          image: "/images/q-swimming-pool.webp",
          answers: [
            { id: "a", text: "Carl Lewis" },
            { id: "b", text: "Usain Bolt" },
            { id: "c", text: "Michael Phelps" },
            { id: "d", text: "Mark Spitz" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps is the most decorated athlete in Olympic history.",
        },
        {
          id: 7,
          question: "Which sport was added to the Paris 2024 Olympics?",
          image: "/images/q-running-track.webp",
          answers: [
            { id: "a", text: "Climbing" },
            { id: "b", text: "Breaking" },
            { id: "c", text: "Padel" },
            { id: "d", text: "E-sports" },
          ],
          correctAnswer: "b",
          explanation:
            "Breaking (breakdancing) made its Olympic debut at Paris 2024.",
        },
        {
          id: 8,
          question: "What color is the medal for 3rd place?",
          answers: [
            { id: "a", text: "Gold" },
            { id: "b", text: "Silver" },
            { id: "c", text: "Bronze" },
            { id: "d", text: "Copper" },
          ],
          correctAnswer: "c",
          explanation: "Third place receives the bronze medal.",
        },
      ],
    },
    es: {
      title: "Quiz de los Juegos Olímpicos: lo básico",
      description:
        "Los anillos, los deportes, los récords... ¿Conoces los fundamentos de los JJ.OO.?",
      questions: [
        {
          id: 1,
          question: "¿Cuántos anillos olímpicos hay?",
          image: "/images/q-olympics-rings.webp",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation: "Los 5 anillos representan los 5 continentes.",
        },
        {
          id: 2,
          question: "¿Cada cuántos años se celebran los JJ.OO. de verano?",
          answers: [
            { id: "a", text: "2 años" },
            { id: "b", text: "3 años" },
            { id: "c", text: "4 años" },
            { id: "d", text: "5 años" },
          ],
          correctAnswer: "c",
          explanation:
            "Los Juegos Olímpicos de verano se celebran cada 4 años.",
        },
        {
          id: 3,
          question:
            "¿En qué país nacieron los Juegos Olímpicos antiguos?",
          image: "/images/q-stadium.webp",
          answers: [
            { id: "a", text: "Italia" },
            { id: "b", text: "Egipto" },
            { id: "c", text: "Grecia" },
            { id: "d", text: "Turquía" },
          ],
          correctAnswer: "c",
          explanation:
            "Los JJ.OO. antiguos nacieron en Olimpia, Grecia, hacia el 776 a.C.",
        },
        {
          id: 4,
          question: "¿Qué ciudad acogió los JJ.OO. de verano de 2024?",
          image: "/images/q-olympics-rings.webp",
          answers: [
            { id: "a", text: "Tokio" },
            { id: "b", text: "Los Ángeles" },
            { id: "c", text: "París" },
            { id: "d", text: "Londres" },
          ],
          correctAnswer: "c",
          explanation:
            "París acogió los Juegos Olímpicos de verano de 2024.",
        },
        {
          id: 5,
          question: "¿Cuál es el lema olímpico?",
          image: "/images/q-running-track.webp",
          answers: [
            { id: "a", text: "Más rápido, más alto, más fuerte – juntos" },
            { id: "b", text: "Lo importante es participar" },
            { id: "c", text: "Un mundo, un sueño" },
            { id: "d", text: "La victoria ante todo" },
          ],
          correctAnswer: "a",
          explanation:
            "El lema 'Citius, Altius, Fortius – Communiter' fue actualizado en 2021.",
        },
        {
          id: 6,
          question: "¿Qué deportista ganó 23 medallas de oro olímpicas?",
          image: "/images/q-swimming-pool.webp",
          answers: [
            { id: "a", text: "Carl Lewis" },
            { id: "b", text: "Usain Bolt" },
            { id: "c", text: "Michael Phelps" },
            { id: "d", text: "Mark Spitz" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps es el atleta más condecorado de la historia olímpica.",
        },
        {
          id: 7,
          question: "¿Qué deporte fue añadido a los JJ.OO. de París 2024?",
          image: "/images/q-running-track.webp",
          answers: [
            { id: "a", text: "Escalada" },
            { id: "b", text: "Breaking" },
            { id: "c", text: "Pádel" },
            { id: "d", text: "E-sports" },
          ],
          correctAnswer: "b",
          explanation:
            "El breaking (breakdance) hizo su debut olímpico en París 2024.",
        },
        {
          id: 8,
          question: "¿De qué color es la medalla del 3.er puesto?",
          answers: [
            { id: "a", text: "Oro" },
            { id: "b", text: "Plata" },
            { id: "c", text: "Bronce" },
            { id: "d", text: "Cobre" },
          ],
          correctAnswer: "c",
          explanation: "El 3.er puesto recibe la medalla de bronce.",
        },
      ],
    },
  },
};

const tennisQuiz: TranslatedQuiz = {
  slug: "tennis-grands-chelems",
  categorySlug: "sport",
  subcategory: "Tennis",
  difficulty: "medium",
  coverImage: "/images/cover-tennis.webp",
  timePerQuestion: 20,
  gameType: "qcm",
  playCount: 6280,
  translations: {
    fr: {
      title: "Quiz tennis : les grands chelems",
      description:
        "Roland-Garros, Wimbledon, Open d'Australie... Tu connais les tournois majeurs ?",
      questions: [
        {
          id: 1,
          question: "Combien de tournois du Grand Chelem existe-t-il ?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "b",
          explanation:
            "Les 4 Grand Chelems : Open d'Australie, Roland-Garros, Wimbledon, US Open.",
        },
        {
          id: 2,
          question: "Sur quelle surface joue-t-on à Roland-Garros ?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "Gazon" },
            { id: "b", text: "Dur" },
            { id: "c", text: "Terre battue" },
            { id: "d", text: "Synthétique" },
          ],
          correctAnswer: "c",
          explanation:
            "Roland-Garros se joue sur terre battue, une surface lente favorisant les échanges.",
        },
        {
          id: 3,
          question:
            "Qui détient le record de victoires à Roland-Garros (hommes) ?",
          image: "/images/q-tennis-racket.webp",
          answers: [
            { id: "a", text: "Roger Federer" },
            { id: "b", text: "Novak Djokovic" },
            { id: "c", text: "Rafael Nadal" },
            { id: "d", text: "Björn Borg" },
          ],
          correctAnswer: "c",
          explanation:
            "Rafael Nadal a remporté 14 fois Roland-Garros, un record absolu.",
        },
        {
          id: 4,
          question:
            "À Wimbledon, quelle couleur les joueurs doivent-ils porter ?",
          answers: [
            { id: "a", text: "Bleu" },
            { id: "b", text: "Blanc" },
            { id: "c", text: "Vert" },
            { id: "d", text: "Noir" },
          ],
          correctAnswer: "b",
          explanation:
            "Le dress code de Wimbledon impose une tenue presque entièrement blanche.",
        },
        {
          id: 5,
          question:
            "Combien de sets faut-il gagner pour remporter un match de Grand Chelem (hommes) ?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "En Grand Chelem, les hommes jouent au meilleur des 5 sets (il faut en gagner 3).",
        },
        {
          id: 6,
          question:
            "Quelle joueuse française a gagné Roland-Garros en 2000 ?",
          image: "/images/q-tennis-racket.webp",
          answers: [
            { id: "a", text: "Amélie Mauresmo" },
            { id: "b", text: "Mary Pierce" },
            { id: "c", text: "Marion Bartoli" },
            { id: "d", text: "Nathalie Dechy" },
          ],
          correctAnswer: "b",
          explanation:
            "Mary Pierce a remporté Roland-Garros en 2000, dernière Française à l'avoir fait.",
        },
        {
          id: 7,
          question: "Quel est le surnom de Rafael Nadal ?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "Le Maestro" },
            { id: "b", text: "Le Roi de la Terre" },
            { id: "c", text: "Le Taureau de Manacor" },
            { id: "d", text: "Le Djoker" },
          ],
          correctAnswer: "c",
          explanation:
            "Nadal est surnommé le Taureau de Manacor, du nom de sa ville natale à Majorque.",
        },
        {
          id: 8,
          question: "Que signifie 'love' au tennis ?",
          image: "/images/q6-tennis.webp",
          answers: [
            { id: "a", text: "15 points" },
            { id: "b", text: "30 points" },
            { id: "c", text: "0 point" },
            { id: "d", text: "Avantage" },
          ],
          correctAnswer: "c",
          explanation:
            "'Love' signifie zéro au tennis, probablement dérivé du français 'l'œuf' (forme du 0).",
        },
      ],
    },
    en: {
      title: "Tennis Quiz: The Grand Slams",
      description:
        "Roland-Garros, Wimbledon, Australian Open... Do you know the major tournaments?",
      questions: [
        {
          id: 1,
          question: "How many Grand Slam tournaments are there?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "b",
          explanation:
            "The 4 Grand Slams: Australian Open, Roland-Garros, Wimbledon, US Open.",
        },
        {
          id: 2,
          question: "On what surface is Roland-Garros played?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "Grass" },
            { id: "b", text: "Hard court" },
            { id: "c", text: "Clay" },
            { id: "d", text: "Synthetic" },
          ],
          correctAnswer: "c",
          explanation:
            "Roland-Garros is played on clay, a slow surface that favors long rallies.",
        },
        {
          id: 3,
          question:
            "Who holds the record for the most Roland-Garros titles (men)?",
          image: "/images/q-tennis-racket.webp",
          answers: [
            { id: "a", text: "Roger Federer" },
            { id: "b", text: "Novak Djokovic" },
            { id: "c", text: "Rafael Nadal" },
            { id: "d", text: "Björn Borg" },
          ],
          correctAnswer: "c",
          explanation:
            "Rafael Nadal won Roland-Garros 14 times, an all-time record.",
        },
        {
          id: 4,
          question:
            "At Wimbledon, what color must players wear?",
          answers: [
            { id: "a", text: "Blue" },
            { id: "b", text: "White" },
            { id: "c", text: "Green" },
            { id: "d", text: "Black" },
          ],
          correctAnswer: "b",
          explanation:
            "Wimbledon's dress code requires players to wear almost entirely white clothing.",
        },
        {
          id: 5,
          question:
            "How many sets must you win to take a men's Grand Slam match?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "In Grand Slams, men play best of 5 sets (you need to win 3).",
        },
        {
          id: 6,
          question:
            "Which French female player won Roland-Garros in 2000?",
          image: "/images/q-tennis-racket.webp",
          answers: [
            { id: "a", text: "Amélie Mauresmo" },
            { id: "b", text: "Mary Pierce" },
            { id: "c", text: "Marion Bartoli" },
            { id: "d", text: "Nathalie Dechy" },
          ],
          correctAnswer: "b",
          explanation:
            "Mary Pierce won Roland-Garros in 2000, the last Frenchwoman to do so.",
        },
        {
          id: 7,
          question: "What is Rafael Nadal's nickname?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "The Maestro" },
            { id: "b", text: "The King of Clay" },
            { id: "c", text: "The Bull of Manacor" },
            { id: "d", text: "The Djoker" },
          ],
          correctAnswer: "c",
          explanation:
            "Nadal is nicknamed the Bull of Manacor, after his hometown in Mallorca.",
        },
        {
          id: 8,
          question: "What does 'love' mean in tennis?",
          image: "/images/q6-tennis.webp",
          answers: [
            { id: "a", text: "15 points" },
            { id: "b", text: "30 points" },
            { id: "c", text: "0 points" },
            { id: "d", text: "Advantage" },
          ],
          correctAnswer: "c",
          explanation:
            "'Love' means zero in tennis, probably derived from the French word 'l'oeuf' (egg, shaped like a 0).",
        },
      ],
    },
    es: {
      title: "Quiz de tenis: los Grand Slams",
      description:
        "Roland-Garros, Wimbledon, Open de Australia... ¿Conoces los grandes torneos?",
      questions: [
        {
          id: 1,
          question: "¿Cuántos torneos de Grand Slam existen?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "b",
          explanation:
            "Los 4 Grand Slams: Open de Australia, Roland-Garros, Wimbledon, US Open.",
        },
        {
          id: 2,
          question: "¿Sobre qué superficie se juega en Roland-Garros?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "Hierba" },
            { id: "b", text: "Pista dura" },
            { id: "c", text: "Tierra batida" },
            { id: "d", text: "Sintético" },
          ],
          correctAnswer: "c",
          explanation:
            "Roland-Garros se juega sobre tierra batida, una superficie lenta que favorece los intercambios.",
        },
        {
          id: 3,
          question:
            "¿Quién tiene el récord de victorias en Roland-Garros (hombres)?",
          image: "/images/q-tennis-racket.webp",
          answers: [
            { id: "a", text: "Roger Federer" },
            { id: "b", text: "Novak Djokovic" },
            { id: "c", text: "Rafael Nadal" },
            { id: "d", text: "Björn Borg" },
          ],
          correctAnswer: "c",
          explanation:
            "Rafael Nadal ganó 14 veces Roland-Garros, un récord absoluto.",
        },
        {
          id: 4,
          question:
            "En Wimbledon, ¿de qué color deben vestir los jugadores?",
          answers: [
            { id: "a", text: "Azul" },
            { id: "b", text: "Blanco" },
            { id: "c", text: "Verde" },
            { id: "d", text: "Negro" },
          ],
          correctAnswer: "b",
          explanation:
            "El código de vestimenta de Wimbledon exige ropa casi completamente blanca.",
        },
        {
          id: 5,
          question:
            "¿Cuántos sets hay que ganar para ganar un partido de Grand Slam (hombres)?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
          explanation:
            "En Grand Slam, los hombres juegan al mejor de 5 sets (hay que ganar 3).",
        },
        {
          id: 6,
          question:
            "¿Qué jugadora francesa ganó Roland-Garros en 2000?",
          image: "/images/q-tennis-racket.webp",
          answers: [
            { id: "a", text: "Amélie Mauresmo" },
            { id: "b", text: "Mary Pierce" },
            { id: "c", text: "Marion Bartoli" },
            { id: "d", text: "Nathalie Dechy" },
          ],
          correctAnswer: "b",
          explanation:
            "Mary Pierce ganó Roland-Garros en 2000, la última francesa en lograrlo.",
        },
        {
          id: 7,
          question: "¿Cuál es el apodo de Rafael Nadal?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "El Maestro" },
            { id: "b", text: "El Rey de la Tierra" },
            { id: "c", text: "El Toro de Manacor" },
            { id: "d", text: "El Djoker" },
          ],
          correctAnswer: "c",
          explanation:
            "Nadal es apodado el Toro de Manacor, por el nombre de su ciudad natal en Mallorca.",
        },
        {
          id: 8,
          question: "¿Qué significa 'love' en tenis?",
          image: "/images/q6-tennis.webp",
          answers: [
            { id: "a", text: "15 puntos" },
            { id: "b", text: "30 puntos" },
            { id: "c", text: "0 puntos" },
            { id: "d", text: "Ventaja" },
          ],
          correctAnswer: "c",
          explanation:
            "'Love' significa cero en tenis, probablemente derivado del francés 'l'oeuf' (huevo, con forma de 0).",
        },
      ],
    },
  },
};

const sportVraiFaux: TranslatedQuiz = {
  slug: "sport-vrai-ou-faux",
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "easy",
  coverImage: "/images/cover-vraifaux.webp",
  timePerQuestion: 15,
  gameType: "vrai-faux",
  playCount: 12400,
  translations: {
    fr: {
      title: "Quiz sport : vrai ou faux ?",
      description:
        "Ces affirmations sportives sont-elles vraies ou fausses ? Attention aux pièges !",
      questions: [
        {
          id: 1,
          question: "Le marathon fait exactement 42 km.",
          image: "/images/q5-marathon.webp",
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
          image: "/images/q3-rugby.webp",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Un match de rugby à XV dure bien 80 minutes (2 × 40 min).",
        },
        {
          id: 3,
          question: "Le basketball a été inventé au Canada.",
          image: "/images/q-basketball-court.webp",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Il a été inventé aux États-Unis par James Naismith (un Canadien), à Springfield en 1891.",
        },
        {
          id: 4,
          question: "Usain Bolt a couru le 100m en moins de 9,5 secondes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Usain Bolt détient le record en 9,58 secondes depuis 2009.",
        },
        {
          id: 5,
          question: "Le Tour de France a toujours lieu en juillet.",
          image: "/images/q-cycling.webp",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "En 2020, le Tour a eu lieu en septembre à cause du Covid-19.",
        },
        {
          id: 6,
          question:
            "Le handball se joue avec 7 joueurs par équipe sur le terrain.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "7 joueurs par équipe : 6 joueurs de champ + 1 gardien.",
        },
      ],
    },
    en: {
      title: "Sport Quiz: True or False?",
      description:
        "Are these sports statements true or false? Watch out for trick questions!",
      questions: [
        {
          id: 1,
          question: "A marathon is exactly 42 km.",
          image: "/images/q5-marathon.webp",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation: "A marathon is exactly 42.195 km.",
        },
        {
          id: 2,
          question: "A rugby match lasts 80 minutes.",
          image: "/images/q3-rugby.webp",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "A rugby union match lasts 80 minutes (2 x 40 min).",
        },
        {
          id: 3,
          question: "Basketball was invented in Canada.",
          image: "/images/q-basketball-court.webp",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "It was invented in the United States by James Naismith (a Canadian) in Springfield in 1891.",
        },
        {
          id: 4,
          question: "Usain Bolt ran the 100m in under 9.5 seconds.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "Usain Bolt holds the record at 9.58 seconds since 2009.",
        },
        {
          id: 5,
          question: "The Tour de France always takes place in July.",
          image: "/images/q-cycling.webp",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "In 2020, the Tour took place in September due to Covid-19.",
        },
        {
          id: 6,
          question:
            "Handball is played with 7 players per team on the court.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "7 players per team: 6 field players + 1 goalkeeper.",
        },
      ],
    },
    es: {
      title: "Quiz de deporte: ¿verdadero o falso?",
      description:
        "¿Son verdaderas o falsas estas afirmaciones deportivas? ¡Cuidado con las trampas!",
      questions: [
        {
          id: 1,
          question: "El maratón mide exactamente 42 km.",
          image: "/images/q5-marathon.webp",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation: "El maratón mide exactamente 42,195 km.",
        },
        {
          id: 2,
          question: "Un partido de rugby dura 80 minutos.",
          image: "/images/q3-rugby.webp",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Un partido de rugby XV dura 80 minutos (2 x 40 min).",
        },
        {
          id: 3,
          question: "El baloncesto fue inventado en Canadá.",
          image: "/images/q-basketball-court.webp",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Fue inventado en Estados Unidos por James Naismith (un canadiense), en Springfield en 1891.",
        },
        {
          id: 4,
          question: "Usain Bolt corrió los 100m en menos de 9,5 segundos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Usain Bolt tiene el récord en 9,58 segundos desde 2009.",
        },
        {
          id: 5,
          question: "El Tour de Francia siempre se celebra en julio.",
          image: "/images/q-cycling.webp",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "En 2020, el Tour se celebró en septiembre por el Covid-19.",
        },
        {
          id: 6,
          question:
            "El balonmano se juega con 7 jugadores por equipo en la cancha.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "7 jugadores por equipo: 6 jugadores de campo + 1 portero.",
        },
      ],
    },
  },
};

const sportsExtremesQuiz: TranslatedQuiz = {
  slug: "sports-extremes",
  categorySlug: "sport",
  subcategory: "Sports de combat",
  difficulty: "hard",
  coverImage: "/images/cover-extreme.webp",
  timePerQuestion: 20,
  gameType: "qcm",
  playCount: 4320,
  translations: {
    fr: {
      title: "Quiz sports extrêmes",
      description:
        "Surf, escalade, parachutisme... Es-tu calé sur les sports qui font monter l'adrénaline ?",
      questions: [
        {
          id: 1,
          question:
            "Quelle est la hauteur de la plus grande vague jamais surfée (record 2024) ?",
          image: "/images/q-surfing.webp",
          answers: [
            { id: "a", text: "18 mètres" },
            { id: "b", text: "22 mètres" },
            { id: "c", text: "26,2 mètres" },
            { id: "d", text: "30 mètres" },
          ],
          correctAnswer: "c",
          explanation:
            "Sebastian Steudtner a surfé une vague de 26,2 m à Nazaré au Portugal.",
        },
        {
          id: 2,
          question:
            "En wingsuit, quelle vitesse maximale peut-on atteindre ?",
          image: "/images/q-parachute.webp",
          answers: [
            { id: "a", text: "150 km/h" },
            { id: "b", text: "250 km/h" },
            { id: "c", text: "400 km/h" },
            { id: "d", text: "550 km/h" },
          ],
          correctAnswer: "c",
          explanation:
            "Les meilleurs wingsuiters atteignent environ 400 km/h en piqué.",
        },
        {
          id: 3,
          question:
            "Quelle est la discipline reine du triathlon Ironman ?",
          image: "/images/q-cycling.webp",
          answers: [
            { id: "a", text: "3,8 km natation + 180 km vélo + 42 km course" },
            { id: "b", text: "1,5 km natation + 40 km vélo + 10 km course" },
            { id: "c", text: "5 km natation + 200 km vélo + 50 km course" },
            { id: "d", text: "2 km natation + 90 km vélo + 21 km course" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Ironman complet est : 3,8 km de nage, 180 km de vélo et un marathon (42,195 km).",
        },
        {
          id: 4,
          question:
            "À quelle altitude se fait un saut en parachute classique ?",
          image: "/images/q-parachute.webp",
          answers: [
            { id: "a", text: "1 000 m" },
            { id: "b", text: "2 500 m" },
            { id: "c", text: "4 000 m" },
            { id: "d", text: "8 000 m" },
          ],
          correctAnswer: "c",
          explanation:
            "Un saut tandem classique se fait à environ 4 000 mètres d'altitude.",
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
          explanation:
            "Le parkour a été développé en France par David Belle dans les années 1990.",
        },
        {
          id: 6,
          question:
            "Quel sport extrême consiste à sauter d'un pont avec un élastique ?",
          answers: [
            { id: "a", text: "Base jump" },
            { id: "b", text: "Bungee jumping" },
            { id: "c", text: "Cliff diving" },
            { id: "d", text: "Zip-lining" },
          ],
          correctAnswer: "b",
          explanation:
            "Le bungee jumping (saut à l'élastique) consiste à sauter attaché par un élastique.",
        },
        {
          id: 7,
          question:
            "En escalade sportive, combien de disciplines aux JO 2024 ?",
          image: "/images/q-climbing.webp",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ],
          correctAnswer: "b",
          explanation:
            "Aux JO 2024, il y avait 2 disciplines : le combiné (bloc + difficulté) et la vitesse.",
        },
        {
          id: 8,
          question:
            "Le free solo consiste à escalader sans aucune...",
          image: "/images/q-climbing.webp",
          answers: [
            { id: "a", text: "Chaussure spéciale" },
            { id: "b", text: "Protection ni corde" },
            { id: "c", text: "Préparation physique" },
            { id: "d", text: "Assurance" },
          ],
          correctAnswer: "b",
          explanation:
            "Le free solo est l'escalade sans corde ni protection, rendu célèbre par Alex Honnold.",
        },
      ],
    },
    en: {
      title: "Extreme Sports Quiz",
      description:
        "Surfing, climbing, skydiving... Are you an expert on adrenaline-pumping sports?",
      questions: [
        {
          id: 1,
          question:
            "What is the height of the biggest wave ever surfed (2024 record)?",
          image: "/images/q-surfing.webp",
          answers: [
            { id: "a", text: "18 meters" },
            { id: "b", text: "22 meters" },
            { id: "c", text: "26.2 meters" },
            { id: "d", text: "30 meters" },
          ],
          correctAnswer: "c",
          explanation:
            "Sebastian Steudtner surfed a 26.2 m wave at Nazaré in Portugal.",
        },
        {
          id: 2,
          question:
            "In wingsuit flying, what maximum speed can be reached?",
          image: "/images/q-parachute.webp",
          answers: [
            { id: "a", text: "150 km/h" },
            { id: "b", text: "250 km/h" },
            { id: "c", text: "400 km/h" },
            { id: "d", text: "550 km/h" },
          ],
          correctAnswer: "c",
          explanation:
            "The best wingsuit flyers reach about 400 km/h in a dive.",
        },
        {
          id: 3,
          question:
            "What are the distances in a full Ironman triathlon?",
          image: "/images/q-cycling.webp",
          answers: [
            { id: "a", text: "3.8 km swim + 180 km bike + 42 km run" },
            { id: "b", text: "1.5 km swim + 40 km bike + 10 km run" },
            { id: "c", text: "5 km swim + 200 km bike + 50 km run" },
            { id: "d", text: "2 km swim + 90 km bike + 21 km run" },
          ],
          correctAnswer: "a",
          explanation:
            "A full Ironman consists of a 3.8 km swim, 180 km bike ride, and a marathon (42.195 km).",
        },
        {
          id: 4,
          question:
            "At what altitude is a standard skydive performed?",
          image: "/images/q-parachute.webp",
          answers: [
            { id: "a", text: "1,000 m" },
            { id: "b", text: "2,500 m" },
            { id: "c", text: "4,000 m" },
            { id: "d", text: "8,000 m" },
          ],
          correctAnswer: "c",
          explanation:
            "A standard tandem skydive is performed at approximately 4,000 meters altitude.",
        },
        {
          id: 5,
          question: "Parkour originated in which country?",
          answers: [
            { id: "a", text: "United States" },
            { id: "b", text: "Japan" },
            { id: "c", text: "France" },
            { id: "d", text: "United Kingdom" },
          ],
          correctAnswer: "c",
          explanation:
            "Parkour was developed in France by David Belle in the 1990s.",
        },
        {
          id: 6,
          question:
            "Which extreme sport involves jumping from a bridge with an elastic cord?",
          answers: [
            { id: "a", text: "Base jumping" },
            { id: "b", text: "Bungee jumping" },
            { id: "c", text: "Cliff diving" },
            { id: "d", text: "Zip-lining" },
          ],
          correctAnswer: "b",
          explanation:
            "Bungee jumping involves jumping while attached to an elastic cord.",
        },
        {
          id: 7,
          question:
            "In sport climbing, how many disciplines were there at the 2024 Olympics?",
          image: "/images/q-climbing.webp",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ],
          correctAnswer: "b",
          explanation:
            "At the 2024 Olympics, there were 2 disciplines: the combined (bouldering + lead) and speed.",
        },
        {
          id: 8,
          question:
            "Free soloing involves climbing without any...",
          image: "/images/q-climbing.webp",
          answers: [
            { id: "a", text: "Special shoes" },
            { id: "b", text: "Protection or rope" },
            { id: "c", text: "Physical training" },
            { id: "d", text: "Insurance" },
          ],
          correctAnswer: "b",
          explanation:
            "Free soloing is climbing without ropes or protection, made famous by Alex Honnold.",
        },
      ],
    },
    es: {
      title: "Quiz de deportes extremos",
      description:
        "Surf, escalada, paracaidismo... ¿Eres experto en deportes que suben la adrenalina?",
      questions: [
        {
          id: 1,
          question:
            "¿Cuál es la altura de la ola más grande jamás surfeada (récord 2024)?",
          image: "/images/q-surfing.webp",
          answers: [
            { id: "a", text: "18 metros" },
            { id: "b", text: "22 metros" },
            { id: "c", text: "26,2 metros" },
            { id: "d", text: "30 metros" },
          ],
          correctAnswer: "c",
          explanation:
            "Sebastian Steudtner surfeó una ola de 26,2 m en Nazaré, Portugal.",
        },
        {
          id: 2,
          question:
            "En wingsuit, ¿qué velocidad máxima se puede alcanzar?",
          image: "/images/q-parachute.webp",
          answers: [
            { id: "a", text: "150 km/h" },
            { id: "b", text: "250 km/h" },
            { id: "c", text: "400 km/h" },
            { id: "d", text: "550 km/h" },
          ],
          correctAnswer: "c",
          explanation:
            "Los mejores pilotos de wingsuit alcanzan unos 400 km/h en picado.",
        },
        {
          id: 3,
          question:
            "¿Cuáles son las distancias en un triatlón Ironman completo?",
          image: "/images/q-cycling.webp",
          answers: [
            { id: "a", text: "3,8 km natación + 180 km bici + 42 km carrera" },
            { id: "b", text: "1,5 km natación + 40 km bici + 10 km carrera" },
            { id: "c", text: "5 km natación + 200 km bici + 50 km carrera" },
            { id: "d", text: "2 km natación + 90 km bici + 21 km carrera" },
          ],
          correctAnswer: "a",
          explanation:
            "El Ironman completo consta de 3,8 km de natación, 180 km de bicicleta y un maratón (42,195 km).",
        },
        {
          id: 4,
          question:
            "¿A qué altitud se realiza un salto en paracaídas estándar?",
          image: "/images/q-parachute.webp",
          answers: [
            { id: "a", text: "1.000 m" },
            { id: "b", text: "2.500 m" },
            { id: "c", text: "4.000 m" },
            { id: "d", text: "8.000 m" },
          ],
          correctAnswer: "c",
          explanation:
            "Un salto tándem estándar se realiza a unos 4.000 metros de altitud.",
        },
        {
          id: 5,
          question: "¿En qué país se originó el parkour?",
          answers: [
            { id: "a", text: "Estados Unidos" },
            { id: "b", text: "Japón" },
            { id: "c", text: "Francia" },
            { id: "d", text: "Reino Unido" },
          ],
          correctAnswer: "c",
          explanation:
            "El parkour fue desarrollado en Francia por David Belle en los años 1990.",
        },
        {
          id: 6,
          question:
            "¿Qué deporte extremo consiste en saltar de un puente con una cuerda elástica?",
          answers: [
            { id: "a", text: "Salto base" },
            { id: "b", text: "Puenting" },
            { id: "c", text: "Salto de acantilado" },
            { id: "d", text: "Tirolina" },
          ],
          correctAnswer: "b",
          explanation:
            "El puenting (bungee jumping) consiste en saltar atado a una cuerda elástica.",
        },
        {
          id: 7,
          question:
            "En escalada deportiva, ¿cuántas disciplinas hubo en los JJ.OO. 2024?",
          image: "/images/q-climbing.webp",
          answers: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ],
          correctAnswer: "b",
          explanation:
            "En los JJ.OO. 2024 hubo 2 disciplinas: el combinado (bloque + dificultad) y velocidad.",
        },
        {
          id: 8,
          question:
            "El free solo consiste en escalar sin ninguna...",
          image: "/images/q-climbing.webp",
          answers: [
            { id: "a", text: "Zapatilla especial" },
            { id: "b", text: "Protección ni cuerda" },
            { id: "c", text: "Preparación física" },
            { id: "d", text: "Seguro" },
          ],
          correctAnswer: "b",
          explanation:
            "El free solo es la escalada sin cuerda ni protección, popularizado por Alex Honnold.",
        },
      ],
    },
  },
};

const nbaQuiz: TranslatedQuiz = {
  slug: "nba-culture",
  categorySlug: "sport",
  subcategory: "Sports US",
  difficulty: "hard",
  coverImage: "/images/cover-basketball.webp",
  timePerQuestion: 18,
  gameType: "qcm",
  playCount: 9870,
  translations: {
    fr: {
      title: "Quiz NBA : culture basket US",
      description:
        "Michael Jordan, LeBron, les Lakers... Teste tes connaissances NBA !",
      questions: [
        {
          id: 1,
          question:
            "Combien de titres NBA Michael Jordan a-t-il remportés ?",
          image: "/images/q-basketball-court.webp",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Jordan a remporté 6 titres NBA avec les Chicago Bulls.",
        },
        {
          id: 2,
          question:
            "Quelle franchise NBA a remporté le plus de titres ?",
          answers: [
            { id: "a", text: "Los Angeles Lakers" },
            { id: "b", text: "Boston Celtics" },
            { id: "c", text: "Chicago Bulls" },
            { id: "d", text: "Golden State Warriors" },
          ],
          correctAnswer: "b",
          explanation:
            "Les Boston Celtics détiennent le record avec 18 titres NBA.",
        },
        {
          id: 3,
          question:
            "Quel est le meilleur scoreur de l'histoire de la NBA ?",
          image: "/images/q-basketball-hoop.webp",
          answers: [
            { id: "a", text: "Michael Jordan" },
            { id: "b", text: "Kareem Abdul-Jabbar" },
            { id: "c", text: "LeBron James" },
            { id: "d", text: "Kobe Bryant" },
          ],
          correctAnswer: "c",
          explanation:
            "LeBron James a dépassé Kareem Abdul-Jabbar en 2023 avec plus de 40 000 points.",
        },
        {
          id: 4,
          question:
            "Combien de joueurs d'une équipe NBA sont sur le terrain en même temps ?",
          image: "/images/q-basketball-hoop.webp",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "5 joueurs de chaque équipe sont sur le terrain simultanément.",
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
          explanation:
            "La NBA (initialement BAA) a été fondée en 1946.",
        },
        {
          id: 6,
          question:
            "Quel joueur français a été nommé MVP de la NBA ?",
          image: "/images/q-basketball-court.webp",
          answers: [
            { id: "a", text: "Rudy Gobert" },
            { id: "b", text: "Tony Parker" },
            { id: "c", text: "Victor Wembanyama" },
            { id: "d", text: "Aucun" },
          ],
          correctAnswer: "d",
          explanation:
            "Aucun joueur français n'a encore été nommé MVP de la NBA (à date de 2025).",
        },
      ],
    },
    en: {
      title: "NBA Quiz: US Basketball Culture",
      description:
        "Michael Jordan, LeBron, the Lakers... Test your NBA knowledge!",
      questions: [
        {
          id: 1,
          question:
            "How many NBA titles did Michael Jordan win?",
          image: "/images/q-basketball-court.webp",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Jordan won 6 NBA titles with the Chicago Bulls.",
        },
        {
          id: 2,
          question:
            "Which NBA franchise has won the most titles?",
          answers: [
            { id: "a", text: "Los Angeles Lakers" },
            { id: "b", text: "Boston Celtics" },
            { id: "c", text: "Chicago Bulls" },
            { id: "d", text: "Golden State Warriors" },
          ],
          correctAnswer: "b",
          explanation:
            "The Boston Celtics hold the record with 18 NBA titles.",
        },
        {
          id: 3,
          question:
            "Who is the all-time leading scorer in NBA history?",
          image: "/images/q-basketball-hoop.webp",
          answers: [
            { id: "a", text: "Michael Jordan" },
            { id: "b", text: "Kareem Abdul-Jabbar" },
            { id: "c", text: "LeBron James" },
            { id: "d", text: "Kobe Bryant" },
          ],
          correctAnswer: "c",
          explanation:
            "LeBron James surpassed Kareem Abdul-Jabbar in 2023 with over 40,000 points.",
        },
        {
          id: 4,
          question:
            "How many players from an NBA team are on the court at the same time?",
          image: "/images/q-basketball-hoop.webp",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "5 players from each team are on the court simultaneously.",
        },
        {
          id: 5,
          question: "In what year was the NBA founded?",
          answers: [
            { id: "a", text: "1936" },
            { id: "b", text: "1946" },
            { id: "c", text: "1956" },
            { id: "d", text: "1966" },
          ],
          correctAnswer: "b",
          explanation:
            "The NBA (originally the BAA) was founded in 1946.",
        },
        {
          id: 6,
          question:
            "Which French player has been named NBA MVP?",
          image: "/images/q-basketball-court.webp",
          answers: [
            { id: "a", text: "Rudy Gobert" },
            { id: "b", text: "Tony Parker" },
            { id: "c", text: "Victor Wembanyama" },
            { id: "d", text: "None" },
          ],
          correctAnswer: "d",
          explanation:
            "No French player has been named NBA MVP yet (as of 2025).",
        },
      ],
    },
    es: {
      title: "Quiz NBA: cultura del baloncesto estadounidense",
      description:
        "Michael Jordan, LeBron, los Lakers... ¡Pon a prueba tus conocimientos de la NBA!",
      questions: [
        {
          id: 1,
          question:
            "¿Cuántos títulos NBA ganó Michael Jordan?",
          image: "/images/q-basketball-court.webp",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Jordan ganó 6 títulos NBA con los Chicago Bulls.",
        },
        {
          id: 2,
          question:
            "¿Qué franquicia NBA ha ganado más títulos?",
          answers: [
            { id: "a", text: "Los Angeles Lakers" },
            { id: "b", text: "Boston Celtics" },
            { id: "c", text: "Chicago Bulls" },
            { id: "d", text: "Golden State Warriors" },
          ],
          correctAnswer: "b",
          explanation:
            "Los Boston Celtics tienen el récord con 18 títulos NBA.",
        },
        {
          id: 3,
          question:
            "¿Quién es el máximo anotador de la historia de la NBA?",
          image: "/images/q-basketball-hoop.webp",
          answers: [
            { id: "a", text: "Michael Jordan" },
            { id: "b", text: "Kareem Abdul-Jabbar" },
            { id: "c", text: "LeBron James" },
            { id: "d", text: "Kobe Bryant" },
          ],
          correctAnswer: "c",
          explanation:
            "LeBron James superó a Kareem Abdul-Jabbar en 2023 con más de 40.000 puntos.",
        },
        {
          id: 4,
          question:
            "¿Cuántos jugadores de un equipo NBA están en la cancha al mismo tiempo?",
          image: "/images/q-basketball-hoop.webp",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "5" },
            { id: "c", text: "6" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "5 jugadores de cada equipo están en la cancha simultáneamente.",
        },
        {
          id: 5,
          question: "¿En qué año se fundó la NBA?",
          answers: [
            { id: "a", text: "1936" },
            { id: "b", text: "1946" },
            { id: "c", text: "1956" },
            { id: "d", text: "1966" },
          ],
          correctAnswer: "b",
          explanation:
            "La NBA (originalmente BAA) fue fundada en 1946.",
        },
        {
          id: 6,
          question:
            "¿Qué jugador francés ha sido nombrado MVP de la NBA?",
          image: "/images/q-basketball-court.webp",
          answers: [
            { id: "a", text: "Rudy Gobert" },
            { id: "b", text: "Tony Parker" },
            { id: "c", text: "Victor Wembanyama" },
            { id: "d", text: "Ninguno" },
          ],
          correctAnswer: "d",
          explanation:
            "Ningún jugador francés ha sido nombrado MVP de la NBA aún (a fecha de 2025).",
        },
      ],
    },
  },
};

const chronoSportQuiz: TranslatedQuiz = {
  slug: "chrono-sport-general",
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "medium",
  coverImage: "/images/cover-chrono.webp",
  timePerQuestion: 8,
  gameType: "chrono",
  playCount: 18200,
  translations: {
    fr: {
      title: "Quiz chrono sport : 60 secondes",
      description:
        "Réponds au maximum de questions sportives en 60 secondes ! Chaque seconde compte.",
      questions: [
        {
          id: 1,
          question: "Combien de joueurs dans une équipe de volleyball ?",
          image: "/images/q8-volleyball.webp",
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
          image: "/images/q-cycling.webp",
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
          question:
            "La surface d'un terrain de tennis s'appelle... ?",
          image: "/images/q-tennis-court.webp",
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
          image: "/images/q-golf.webp",
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
          question:
            "En boxe, combien de rounds au maximum en professionnel ?",
          image: "/images/q-boxing.webp",
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
          question:
            "Combien de périodes dans un match de hockey sur glace ?",
          image: "/images/q-hockey.webp",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
        },
      ],
    },
    en: {
      title: "Sport Speed Quiz: 60 Seconds",
      description:
        "Answer as many sports questions as possible in 60 seconds! Every second counts.",
      questions: [
        {
          id: 1,
          question: "How many players are on a volleyball team?",
          image: "/images/q8-volleyball.webp",
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
          question: "The Tour de France is a race of... ?",
          image: "/images/q-cycling.webp",
          answers: [
            { id: "a", text: "Cycling" },
            { id: "b", text: "Motorcycling" },
            { id: "c", text: "Running" },
            { id: "d", text: "Driving" },
          ],
          correctAnswer: "a",
        },
        {
          id: 3,
          question:
            "The playing area of a tennis venue is called a... ?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "Pitch" },
            { id: "b", text: "Court" },
            { id: "c", text: "Ring" },
            { id: "d", text: "Green" },
          ],
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "What sport does Tiger Woods play?",
          image: "/images/q-golf.webp",
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
          question:
            "In professional boxing, what is the maximum number of rounds?",
          image: "/images/q-boxing.webp",
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
          question: "The Super Bowl is the final of which sport?",
          answers: [
            { id: "a", text: "Baseball" },
            { id: "b", text: "Basketball" },
            { id: "c", text: "American football" },
            { id: "d", text: "Hockey" },
          ],
          correctAnswer: "c",
        },
        {
          id: 7,
          question: "Which country invented judo?",
          answers: [
            { id: "a", text: "China" },
            { id: "b", text: "Korea" },
            { id: "c", text: "Japan" },
            { id: "d", text: "Thailand" },
          ],
          correctAnswer: "c",
        },
        {
          id: 8,
          question:
            "How many periods are there in an ice hockey game?",
          image: "/images/q-hockey.webp",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
        },
      ],
    },
    es: {
      title: "Quiz cronómetro deporte: 60 segundos",
      description:
        "¡Responde al máximo de preguntas deportivas en 60 segundos! Cada segundo cuenta.",
      questions: [
        {
          id: 1,
          question: "¿Cuántos jugadores hay en un equipo de voleibol?",
          image: "/images/q8-volleyball.webp",
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
          question: "El Tour de Francia es una carrera de... ?",
          image: "/images/q-cycling.webp",
          answers: [
            { id: "a", text: "Ciclismo" },
            { id: "b", text: "Motos" },
            { id: "c", text: "Carrera a pie" },
            { id: "d", text: "Coches" },
          ],
          correctAnswer: "a",
        },
        {
          id: 3,
          question:
            "La superficie donde se juega al tenis se llama... ?",
          image: "/images/q-tennis-court.webp",
          answers: [
            { id: "a", text: "Pitch" },
            { id: "b", text: "Pista" },
            { id: "c", text: "Ring" },
            { id: "d", text: "Green" },
          ],
          correctAnswer: "b",
        },
        {
          id: 4,
          question: "¿Qué deporte practica Tiger Woods?",
          image: "/images/q-golf.webp",
          answers: [
            { id: "a", text: "Tenis" },
            { id: "b", text: "Críquet" },
            { id: "c", text: "Golf" },
            { id: "d", text: "Polo" },
          ],
          correctAnswer: "c",
        },
        {
          id: 5,
          question:
            "En boxeo profesional, ¿cuántos asaltos hay como máximo?",
          image: "/images/q-boxing.webp",
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
          question: "El Super Bowl es la final de ¿qué deporte?",
          answers: [
            { id: "a", text: "Béisbol" },
            { id: "b", text: "Baloncesto" },
            { id: "c", text: "Fútbol americano" },
            { id: "d", text: "Hockey" },
          ],
          correctAnswer: "c",
        },
        {
          id: 7,
          question: "¿Qué país inventó el judo?",
          answers: [
            { id: "a", text: "China" },
            { id: "b", text: "Corea" },
            { id: "c", text: "Japón" },
            { id: "d", text: "Tailandia" },
          ],
          correctAnswer: "c",
        },
        {
          id: 8,
          question:
            "¿Cuántos períodos hay en un partido de hockey sobre hielo?",
          image: "/images/q-hockey.webp",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "b",
        },
      ],
    },
  },
};

const blindTestSport: TranslatedQuiz = {
  slug: "blind-test-logos-sport",
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "hard",
  coverImage: "/images/cover-blindtest.webp",
  timePerQuestion: 15,
  gameType: "qcm",
  playCount: 7650,
  translations: {
    fr: {
      title: "Quiz blind test : logos sportifs",
      description:
        "Reconnais les logos des plus grandes équipes et fédérations sportives mondiales !",
      questions: [
        {
          id: 1,
          question: "Quel est le sport dont le ballon est ovale ?",
          image: "/images/q3-rugby.webp",
          answers: [
            { id: "a", text: "Football" },
            { id: "b", text: "Rugby" },
            { id: "c", text: "Handball" },
            { id: "d", text: "Volleyball" },
          ],
          correctAnswer: "b",
          explanation:
            "Le ballon de rugby est ovale pour faciliter les passes et la prise en main.",
        },
        {
          id: 2,
          question:
            "Quel sport utilise un club et une petite balle blanche ?",
          image: "/images/q-golf.webp",
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
          question:
            "Dans quel sport porte-t-on un casque, des gants et on se bat ?",
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
          question:
            "Quel sport se pratique dans une piscine avec un bonnet ?",
          image: "/images/q-swimming-pool.webp",
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
          question:
            "Quel équipement est nécessaire pour faire de l'escrime ?",
          image: "/images/q-fencing.webp",
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
          question:
            "Quel sport se pratique sur une planche et des vagues ?",
          answers: [
            { id: "a", text: "Wakeboard" },
            { id: "b", text: "Surf" },
            { id: "c", text: "Ski nautique" },
            { id: "d", text: "Kitesurf" },
          ],
          correctAnswer: "b",
        },
      ],
    },
    en: {
      title: "Blind Test Quiz: Sports Logos",
      description:
        "Recognize the logos of the world's greatest sports teams and federations!",
      questions: [
        {
          id: 1,
          question: "Which sport uses an oval-shaped ball?",
          image: "/images/q3-rugby.webp",
          answers: [
            { id: "a", text: "Football" },
            { id: "b", text: "Rugby" },
            { id: "c", text: "Handball" },
            { id: "d", text: "Volleyball" },
          ],
          correctAnswer: "b",
          explanation:
            "The rugby ball is oval-shaped to make passing and handling easier.",
        },
        {
          id: 2,
          question:
            "Which sport uses a club and a small white ball?",
          image: "/images/q-golf.webp",
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
          question:
            "In which sport do you wear a helmet, gloves, and fight?",
          answers: [
            { id: "a", text: "Fencing" },
            { id: "b", text: "Boxing" },
            { id: "c", text: "Wrestling" },
            { id: "d", text: "Taekwondo" },
          ],
          correctAnswer: "b",
        },
        {
          id: 4,
          question:
            "Which sport is practiced in a pool wearing a cap?",
          image: "/images/q-swimming-pool.webp",
          answers: [
            { id: "a", text: "Diving" },
            { id: "b", text: "Water polo" },
            { id: "c", text: "Swimming" },
            { id: "d", text: "Surfing" },
          ],
          correctAnswer: "c",
        },
        {
          id: 5,
          question:
            "What equipment is needed for fencing?",
          image: "/images/q-fencing.webp",
          answers: [
            { id: "a", text: "A bow" },
            { id: "b", text: "A foil" },
            { id: "c", text: "A stick" },
            { id: "d", text: "A glove" },
          ],
          correctAnswer: "b",
        },
        {
          id: 6,
          question:
            "Which sport is practiced on a board riding waves?",
          answers: [
            { id: "a", text: "Wakeboarding" },
            { id: "b", text: "Surfing" },
            { id: "c", text: "Water skiing" },
            { id: "d", text: "Kitesurfing" },
          ],
          correctAnswer: "b",
        },
      ],
    },
    es: {
      title: "Quiz a ciegas: logos deportivos",
      description:
        "¡Reconoce los logos de los mejores equipos y federaciones deportivas del mundo!",
      questions: [
        {
          id: 1,
          question: "¿En qué deporte el balón es ovalado?",
          image: "/images/q3-rugby.webp",
          answers: [
            { id: "a", text: "Fútbol" },
            { id: "b", text: "Rugby" },
            { id: "c", text: "Balonmano" },
            { id: "d", text: "Voleibol" },
          ],
          correctAnswer: "b",
          explanation:
            "El balón de rugby es ovalado para facilitar los pases y el agarre.",
        },
        {
          id: 2,
          question:
            "¿Qué deporte usa un palo y una pequeña bola blanca?",
          image: "/images/q-golf.webp",
          answers: [
            { id: "a", text: "Críquet" },
            { id: "b", text: "Béisbol" },
            { id: "c", text: "Golf" },
            { id: "d", text: "Hockey" },
          ],
          correctAnswer: "c",
        },
        {
          id: 3,
          question:
            "¿En qué deporte se usa casco, guantes y se pelea?",
          answers: [
            { id: "a", text: "Esgrima" },
            { id: "b", text: "Boxeo" },
            { id: "c", text: "Lucha" },
            { id: "d", text: "Taekwondo" },
          ],
          correctAnswer: "b",
        },
        {
          id: 4,
          question:
            "¿Qué deporte se practica en una piscina con gorro?",
          image: "/images/q-swimming-pool.webp",
          answers: [
            { id: "a", text: "Salto" },
            { id: "b", text: "Waterpolo" },
            { id: "c", text: "Natación" },
            { id: "d", text: "Surf" },
          ],
          correctAnswer: "c",
        },
        {
          id: 5,
          question:
            "¿Qué equipamiento se necesita para la esgrima?",
          image: "/images/q-fencing.webp",
          answers: [
            { id: "a", text: "Un arco" },
            { id: "b", text: "Un florete" },
            { id: "c", text: "Un bastón" },
            { id: "d", text: "Un guante" },
          ],
          correctAnswer: "b",
        },
        {
          id: 6,
          question:
            "¿Qué deporte se practica sobre una tabla y olas?",
          answers: [
            { id: "a", text: "Wakeboard" },
            { id: "b", text: "Surf" },
            { id: "c", text: "Esquí acuático" },
            { id: "d", text: "Kitesurf" },
          ],
          correctAnswer: "b",
        },
      ],
    },
  },
};

const estimationSport: TranslatedQuiz = {
  slug: "estimation-records-sport",
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "medium",
  coverImage: "/images/cover-sport.webp",
  timePerQuestion: 120,
  gameType: "estimation",
  playCount: 11350,
  translations: {
    fr: {
      title: "Quiz estimation : les records sportifs",
      description:
        "Trouve le bon chiffre ! C'est plus haut ou plus bas ? Le chrono tourne...",
      questions: [
        {
          id: 1,
          question:
            "Combien de buts Cristiano Ronaldo a-t-il marqués en carrière professionnelle (clubs + sélection) ?",
          image: "/images/q4-football.webp",
          answers: [],
          correctAnswer: "850",
          correctValue: 850,
          explanation:
            "Cristiano Ronaldo a dépassé les 850 buts en carrière professionnelle.",
        },
      ],
    },
    en: {
      title: "Estimation Quiz: Sports Records",
      description:
        "Find the right number! Is it higher or lower? The clock is ticking...",
      questions: [
        {
          id: 1,
          question:
            "How many goals has Cristiano Ronaldo scored in his professional career (clubs + national team)?",
          image: "/images/q4-football.webp",
          answers: [],
          correctAnswer: "850",
          correctValue: 850,
          explanation:
            "Cristiano Ronaldo has surpassed 850 goals in his professional career.",
        },
      ],
    },
    es: {
      title: "Quiz de estimación: récords deportivos",
      description:
        "¡Encuentra la cifra correcta! ¿Es más alto o más bajo? El cronómetro corre...",
      questions: [
        {
          id: 1,
          question:
            "¿Cuántos goles ha marcado Cristiano Ronaldo en su carrera profesional (clubes + selección)?",
          image: "/images/q4-football.webp",
          answers: [],
          correctAnswer: "850",
          correctValue: 850,
          explanation:
            "Cristiano Ronaldo ha superado los 850 goles en su carrera profesional.",
        },
      ],
    },
  },
};

const duelSport: TranslatedQuiz = {
  slug: "duel-legendes-sport",
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "hard",
  coverImage: "/images/cover-football.webp",
  timePerQuestion: 15,
  gameType: "duel",
  playCount: 14600,
  translations: {
    fr: {
      title: "Quiz duel : légendes du sport",
      description:
        "Deux champions, un seul gagnant. Qui a le plus de titres, records ou victoires ?",
      questions: [
        {
          id: 1,
          question: "Qui a remporté le plus de Ballons d'Or ?",
          answers: [
            { id: "a", text: "Lionel Messi", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Cristiano Ronaldo", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation: "Messi : 8 Ballons d'Or. Ronaldo : 5 Ballons d'Or.",
        },
        {
          id: 2,
          question: "Qui a gagné le plus de tournois du Grand Chelem ?",
          answers: [
            { id: "a", text: "Rafael Nadal", image: "/images/duel-tennis-a.webp" },
            { id: "b", text: "Novak Djokovic", image: "/images/duel-tennis-b.webp" },
          ],
          correctAnswer: "b",
          explanation:
            "Djokovic : 24 Grand Chelems. Nadal : 22 Grand Chelems.",
        },
        {
          id: 3,
          question: "Qui a marqué le plus de buts en Coupe du Monde ?",
          answers: [
            { id: "a", text: "Miroslav Klose", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Ronaldo (R9)", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Klose : 16 buts en Coupe du Monde. Ronaldo : 15 buts.",
        },
        {
          id: 4,
          question:
            "Qui a le plus de médailles d'or olympiques (sprint) ?",
          answers: [
            { id: "a", text: "Carl Lewis", image: "/images/duel-running-a.webp" },
            { id: "b", text: "Usain Bolt", image: "/images/duel-running-b.webp" },
          ],
          correctAnswer: "b",
          explanation:
            "Bolt : 8 médailles d'or. Lewis : 9 au total mais en comptant le saut en longueur.",
        },
        {
          id: 5,
          question: "Qui a remporté le plus de titres NBA ?",
          answers: [
            { id: "a", text: "Michael Jordan", image: "/images/duel-basketball-a.webp" },
            { id: "b", text: "Bill Russell", image: "/images/duel-basketball-b.webp" },
          ],
          correctAnswer: "b",
          explanation:
            "Bill Russell : 11 titres NBA. Michael Jordan : 6 titres.",
        },
        {
          id: 6,
          question: "Qui a le plus de victoires en Formule 1 ?",
          answers: [
            { id: "a", text: "Lewis Hamilton", image: "/images/duel-f1-a.webp" },
            { id: "b", text: "Michael Schumacher", image: "/images/duel-f1-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Hamilton : 103 victoires. Schumacher : 91 victoires.",
        },
        {
          id: 7,
          question:
            "Qui a marqué le plus de buts en une saison de Liga ?",
          answers: [
            { id: "a", text: "Lionel Messi", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Cristiano Ronaldo", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Messi : 50 buts en Liga (2011-2012). Ronaldo : 48 buts (2014-2015).",
        },
        {
          id: 8,
          question: "Qui a gagné le plus de Tours de France ?",
          answers: [
            { id: "a", text: "Eddy Merckx", image: "/images/duel-cycling-a.webp" },
            { id: "b", text: "Jacques Anquetil", image: "/images/duel-cycling-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Les deux ont 5 victoires, mais Merckx a aussi 11 victoires d'étapes de plus.",
        },
        {
          id: 9,
          question: "Qui détient le record du 200m ?",
          answers: [
            { id: "a", text: "Usain Bolt", image: "/images/duel-running-a.webp" },
            { id: "b", text: "Yohan Blake", image: "/images/duel-running-b.webp" },
          ],
          correctAnswer: "a",
          explanation: "Bolt : 19,19s (Berlin 2009). Blake : 19,26s.",
        },
        {
          id: 10,
          question:
            "Qui a remporté le plus de Coupes du Monde (sélections) ?",
          answers: [
            { id: "a", text: "Brésil", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Allemagne", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation: "Brésil : 5 titres. Allemagne : 4 titres.",
        },
      ],
    },
    en: {
      title: "Duel Quiz: Sports Legends",
      description:
        "Two champions, one winner. Who has the most titles, records, or victories?",
      questions: [
        {
          id: 1,
          question: "Who has won the most Ballon d'Or awards?",
          answers: [
            { id: "a", text: "Lionel Messi", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Cristiano Ronaldo", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation: "Messi: 8 Ballon d'Or awards. Ronaldo: 5 Ballon d'Or awards.",
        },
        {
          id: 2,
          question: "Who has won the most Grand Slam tournaments?",
          answers: [
            { id: "a", text: "Rafael Nadal", image: "/images/duel-tennis-a.webp" },
            { id: "b", text: "Novak Djokovic", image: "/images/duel-tennis-b.webp" },
          ],
          correctAnswer: "b",
          explanation:
            "Djokovic: 24 Grand Slams. Nadal: 22 Grand Slams.",
        },
        {
          id: 3,
          question: "Who has scored the most goals in the World Cup?",
          answers: [
            { id: "a", text: "Miroslav Klose", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Ronaldo (R9)", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Klose: 16 World Cup goals. Ronaldo: 15 goals.",
        },
        {
          id: 4,
          question:
            "Who has the most Olympic gold medals (sprinting)?",
          answers: [
            { id: "a", text: "Carl Lewis", image: "/images/duel-running-a.webp" },
            { id: "b", text: "Usain Bolt", image: "/images/duel-running-b.webp" },
          ],
          correctAnswer: "b",
          explanation:
            "Bolt: 8 gold medals. Lewis: 9 total but including long jump.",
        },
        {
          id: 5,
          question: "Who has won the most NBA titles?",
          answers: [
            { id: "a", text: "Michael Jordan", image: "/images/duel-basketball-a.webp" },
            { id: "b", text: "Bill Russell", image: "/images/duel-basketball-b.webp" },
          ],
          correctAnswer: "b",
          explanation:
            "Bill Russell: 11 NBA titles. Michael Jordan: 6 titles.",
        },
        {
          id: 6,
          question: "Who has the most Formula 1 victories?",
          answers: [
            { id: "a", text: "Lewis Hamilton", image: "/images/duel-f1-a.webp" },
            { id: "b", text: "Michael Schumacher", image: "/images/duel-f1-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Hamilton: 103 victories. Schumacher: 91 victories.",
        },
        {
          id: 7,
          question:
            "Who scored the most goals in a single La Liga season?",
          answers: [
            { id: "a", text: "Lionel Messi", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Cristiano Ronaldo", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Messi: 50 goals in La Liga (2011-2012). Ronaldo: 48 goals (2014-2015).",
        },
        {
          id: 8,
          question: "Who has won the most Tours de France?",
          answers: [
            { id: "a", text: "Eddy Merckx", image: "/images/duel-cycling-a.webp" },
            { id: "b", text: "Jacques Anquetil", image: "/images/duel-cycling-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Both have 5 victories, but Merckx also has 11 more stage wins.",
        },
        {
          id: 9,
          question: "Who holds the 200m record?",
          answers: [
            { id: "a", text: "Usain Bolt", image: "/images/duel-running-a.webp" },
            { id: "b", text: "Yohan Blake", image: "/images/duel-running-b.webp" },
          ],
          correctAnswer: "a",
          explanation: "Bolt: 19.19s (Berlin 2009). Blake: 19.26s.",
        },
        {
          id: 10,
          question:
            "Who has won the most World Cups (national teams)?",
          answers: [
            { id: "a", text: "Brazil", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Germany", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation: "Brazil: 5 titles. Germany: 4 titles.",
        },
      ],
    },
    es: {
      title: "Quiz duelo: leyendas del deporte",
      description:
        "Dos campeones, un solo ganador. ¿Quién tiene más títulos, récords o victorias?",
      questions: [
        {
          id: 1,
          question: "¿Quién ha ganado más Balones de Oro?",
          answers: [
            { id: "a", text: "Lionel Messi", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Cristiano Ronaldo", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation: "Messi: 8 Balones de Oro. Ronaldo: 5 Balones de Oro.",
        },
        {
          id: 2,
          question: "¿Quién ha ganado más torneos de Grand Slam?",
          answers: [
            { id: "a", text: "Rafael Nadal", image: "/images/duel-tennis-a.webp" },
            { id: "b", text: "Novak Djokovic", image: "/images/duel-tennis-b.webp" },
          ],
          correctAnswer: "b",
          explanation:
            "Djokovic: 24 Grand Slams. Nadal: 22 Grand Slams.",
        },
        {
          id: 3,
          question: "¿Quién ha marcado más goles en la Copa del Mundo?",
          answers: [
            { id: "a", text: "Miroslav Klose", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Ronaldo (R9)", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Klose: 16 goles en la Copa del Mundo. Ronaldo: 15 goles.",
        },
        {
          id: 4,
          question:
            "¿Quién tiene más medallas de oro olímpicas (sprint)?",
          answers: [
            { id: "a", text: "Carl Lewis", image: "/images/duel-running-a.webp" },
            { id: "b", text: "Usain Bolt", image: "/images/duel-running-b.webp" },
          ],
          correctAnswer: "b",
          explanation:
            "Bolt: 8 medallas de oro. Lewis: 9 en total pero contando el salto de longitud.",
        },
        {
          id: 5,
          question: "¿Quién ha ganado más títulos NBA?",
          answers: [
            { id: "a", text: "Michael Jordan", image: "/images/duel-basketball-a.webp" },
            { id: "b", text: "Bill Russell", image: "/images/duel-basketball-b.webp" },
          ],
          correctAnswer: "b",
          explanation:
            "Bill Russell: 11 títulos NBA. Michael Jordan: 6 títulos.",
        },
        {
          id: 6,
          question: "¿Quién tiene más victorias en Fórmula 1?",
          answers: [
            { id: "a", text: "Lewis Hamilton", image: "/images/duel-f1-a.webp" },
            { id: "b", text: "Michael Schumacher", image: "/images/duel-f1-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Hamilton: 103 victorias. Schumacher: 91 victorias.",
        },
        {
          id: 7,
          question:
            "¿Quién marcó más goles en una temporada de La Liga?",
          answers: [
            { id: "a", text: "Lionel Messi", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Cristiano Ronaldo", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Messi: 50 goles en La Liga (2011-2012). Ronaldo: 48 goles (2014-2015).",
        },
        {
          id: 8,
          question: "¿Quién ha ganado más Tours de Francia?",
          answers: [
            { id: "a", text: "Eddy Merckx", image: "/images/duel-cycling-a.webp" },
            { id: "b", text: "Jacques Anquetil", image: "/images/duel-cycling-b.webp" },
          ],
          correctAnswer: "a",
          explanation:
            "Ambos tienen 5 victorias, pero Merckx tiene 11 victorias de etapa más.",
        },
        {
          id: 9,
          question: "¿Quién tiene el récord de los 200m?",
          answers: [
            { id: "a", text: "Usain Bolt", image: "/images/duel-running-a.webp" },
            { id: "b", text: "Yohan Blake", image: "/images/duel-running-b.webp" },
          ],
          correctAnswer: "a",
          explanation: "Bolt: 19,19s (Berlín 2009). Blake: 19,26s.",
        },
        {
          id: 10,
          question:
            "¿Quién ha ganado más Copas del Mundo (selecciones)?",
          answers: [
            { id: "a", text: "Brasil", image: "/images/duel-football-a.webp" },
            { id: "b", text: "Alemania", image: "/images/duel-football-b.webp" },
          ],
          correctAnswer: "a",
          explanation: "Brasil: 5 títulos. Alemania: 4 títulos.",
        },
      ],
    },
  },
};

const ordreSport: TranslatedQuiz = {
  slug: "ordre-chronologique-sport",
  categorySlug: "sport",
  subcategory: "JO & Athlétisme",
  difficulty: "hard",
  coverImage: "/images/cover-olympics.webp",
  timePerQuestion: 45,
  gameType: "ordre",
  playCount: 8900,
  translations: {
    fr: {
      title: "Quiz ordre chronologique : histoire du sport",
      description:
        "Replace ces grands moments sportifs dans le bon ordre chronologique !",
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
          explanation:
            "JO modernes (1896) → Tour de France (1903) → Coupe du Monde (1930) → NBA (1946)",
        },
        {
          id: 2,
          question:
            "Classe ces titres de la France du plus ancien au plus récent",
          answers: [
            { id: "a", text: "France championne du monde (football)" },
            { id: "b", text: "France championne du monde (2ème fois)" },
            { id: "c", text: "France championne d'Europe (1ère fois)" },
            { id: "d", text: "France championne d'Europe (2ème fois)" },
          ],
          correctAnswer: "c",
          correctOrder: ["c", "a", "d", "b"],
          explanation:
            "Euro 1984 → Mondial 1998 → Euro 2000 → Mondial 2018",
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
          explanation:
            "100m < 10s (1968) → Perche > 6m (1985) → 100m < 9,6s (2009) → Marathon < 2h (2019)",
        },
        {
          id: 4,
          question:
            "Classe ces transferts de football du plus ancien au plus récent",
          answers: [
            { id: "a", text: "Zidane au Real Madrid" },
            { id: "b", text: "Neymar au PSG" },
            { id: "c", text: "Ronaldo au Real Madrid" },
            { id: "d", text: "Mbappé au Real Madrid" },
          ],
          correctAnswer: "a",
          correctOrder: ["a", "c", "b", "d"],
          explanation:
            "Zidane (2001) → Ronaldo (2009) → Neymar (2017) → Mbappé (2024)",
        },
        {
          id: 5,
          question:
            "Classe ces sports par leur entrée aux JO (du plus ancien au plus récent)",
          answers: [
            { id: "a", text: "Basketball" },
            { id: "b", text: "Judo" },
            { id: "c", text: "Taekwondo" },
            { id: "d", text: "Tennis de table" },
          ],
          correctAnswer: "a",
          correctOrder: ["a", "b", "d", "c"],
          explanation:
            "Basketball (1936) → Judo (1964) → Tennis de table (1988) → Taekwondo (2000)",
        },
        {
          id: 6,
          question:
            "Classe ces compétitions de la plus ancienne à la plus récente",
          answers: [
            { id: "a", text: "Ligue des Champions" },
            { id: "b", text: "Super Bowl" },
            { id: "c", text: "Roland-Garros" },
            { id: "d", text: "Coupe Davis" },
          ],
          correctAnswer: "c",
          correctOrder: ["c", "d", "a", "b"],
          explanation:
            "Roland-Garros (1891) → Coupe Davis (1900) → Ligue des Champions (1955) → Super Bowl (1967)",
        },
      ],
    },
    en: {
      title: "Chronological Order Quiz: Sports History",
      description:
        "Put these great sports moments in the right chronological order!",
      questions: [
        {
          id: 1,
          question: "Rank these events from oldest to most recent",
          answers: [
            { id: "a", text: "First FIFA World Cup" },
            { id: "b", text: "First modern Olympic Games" },
            { id: "c", text: "Creation of the NBA" },
            { id: "d", text: "First Tour de France" },
          ],
          correctAnswer: "b",
          correctOrder: ["b", "d", "a", "c"],
          explanation:
            "Modern Olympics (1896) → Tour de France (1903) → World Cup (1930) → NBA (1946)",
        },
        {
          id: 2,
          question:
            "Rank these French titles from oldest to most recent",
          answers: [
            { id: "a", text: "France World Cup champions (football)" },
            { id: "b", text: "France World Cup champions (2nd time)" },
            { id: "c", text: "France European champions (1st time)" },
            { id: "d", text: "France European champions (2nd time)" },
          ],
          correctAnswer: "c",
          correctOrder: ["c", "a", "d", "b"],
          explanation:
            "Euro 1984 → World Cup 1998 → Euro 2000 → World Cup 2018",
        },
        {
          id: 3,
          question: "Rank these records from oldest to most recent",
          answers: [
            { id: "a", text: "100m under 10 seconds" },
            { id: "b", text: "Marathon under 2 hours" },
            { id: "c", text: "Pole vault above 6m" },
            { id: "d", text: "100m under 9.6 seconds" },
          ],
          correctAnswer: "a",
          correctOrder: ["a", "c", "d", "b"],
          explanation:
            "100m < 10s (1968) → Pole vault > 6m (1985) → 100m < 9.6s (2009) → Marathon < 2h (2019)",
        },
        {
          id: 4,
          question:
            "Rank these football transfers from oldest to most recent",
          answers: [
            { id: "a", text: "Zidane to Real Madrid" },
            { id: "b", text: "Neymar to PSG" },
            { id: "c", text: "Ronaldo to Real Madrid" },
            { id: "d", text: "Mbappé to Real Madrid" },
          ],
          correctAnswer: "a",
          correctOrder: ["a", "c", "b", "d"],
          explanation:
            "Zidane (2001) → Ronaldo (2009) → Neymar (2017) → Mbappé (2024)",
        },
        {
          id: 5,
          question:
            "Rank these sports by their entry into the Olympics (oldest to most recent)",
          answers: [
            { id: "a", text: "Basketball" },
            { id: "b", text: "Judo" },
            { id: "c", text: "Taekwondo" },
            { id: "d", text: "Table tennis" },
          ],
          correctAnswer: "a",
          correctOrder: ["a", "b", "d", "c"],
          explanation:
            "Basketball (1936) → Judo (1964) → Table tennis (1988) → Taekwondo (2000)",
        },
        {
          id: 6,
          question:
            "Rank these competitions from oldest to most recent",
          answers: [
            { id: "a", text: "Champions League" },
            { id: "b", text: "Super Bowl" },
            { id: "c", text: "Roland-Garros" },
            { id: "d", text: "Davis Cup" },
          ],
          correctAnswer: "c",
          correctOrder: ["c", "d", "a", "b"],
          explanation:
            "Roland-Garros (1891) → Davis Cup (1900) → Champions League (1955) → Super Bowl (1967)",
        },
      ],
    },
    es: {
      title: "Quiz de orden cronológico: historia del deporte",
      description:
        "¡Ordena estos grandes momentos deportivos en el orden cronológico correcto!",
      questions: [
        {
          id: 1,
          question: "Ordena estos eventos del más antiguo al más reciente",
          answers: [
            { id: "a", text: "Primera Copa del Mundo de fútbol" },
            { id: "b", text: "Primeros Juegos Olímpicos modernos" },
            { id: "c", text: "Creación de la NBA" },
            { id: "d", text: "Primer Tour de Francia" },
          ],
          correctAnswer: "b",
          correctOrder: ["b", "d", "a", "c"],
          explanation:
            "JJ.OO. modernos (1896) → Tour de Francia (1903) → Copa del Mundo (1930) → NBA (1946)",
        },
        {
          id: 2,
          question:
            "Ordena estos títulos de Francia del más antiguo al más reciente",
          answers: [
            { id: "a", text: "Francia campeona del mundo (fútbol)" },
            { id: "b", text: "Francia campeona del mundo (2.ª vez)" },
            { id: "c", text: "Francia campeona de Europa (1.ª vez)" },
            { id: "d", text: "Francia campeona de Europa (2.ª vez)" },
          ],
          correctAnswer: "c",
          correctOrder: ["c", "a", "d", "b"],
          explanation:
            "Euro 1984 → Mundial 1998 → Euro 2000 → Mundial 2018",
        },
        {
          id: 3,
          question: "Ordena estos récords del más antiguo al más reciente",
          answers: [
            { id: "a", text: "100m en menos de 10 segundos" },
            { id: "b", text: "Maratón en menos de 2 horas" },
            { id: "c", text: "Salto con pértiga por encima de 6m" },
            { id: "d", text: "100m en menos de 9,6 segundos" },
          ],
          correctAnswer: "a",
          correctOrder: ["a", "c", "d", "b"],
          explanation:
            "100m < 10s (1968) → Pértiga > 6m (1985) → 100m < 9,6s (2009) → Maratón < 2h (2019)",
        },
        {
          id: 4,
          question:
            "Ordena estos fichajes de fútbol del más antiguo al más reciente",
          answers: [
            { id: "a", text: "Zidane al Real Madrid" },
            { id: "b", text: "Neymar al PSG" },
            { id: "c", text: "Ronaldo al Real Madrid" },
            { id: "d", text: "Mbappé al Real Madrid" },
          ],
          correctAnswer: "a",
          correctOrder: ["a", "c", "b", "d"],
          explanation:
            "Zidane (2001) → Ronaldo (2009) → Neymar (2017) → Mbappé (2024)",
        },
        {
          id: 5,
          question:
            "Ordena estos deportes por su entrada en los JJ.OO. (del más antiguo al más reciente)",
          answers: [
            { id: "a", text: "Baloncesto" },
            { id: "b", text: "Judo" },
            { id: "c", text: "Taekwondo" },
            { id: "d", text: "Tenis de mesa" },
          ],
          correctAnswer: "a",
          correctOrder: ["a", "b", "d", "c"],
          explanation:
            "Baloncesto (1936) → Judo (1964) → Tenis de mesa (1988) → Taekwondo (2000)",
        },
        {
          id: 6,
          question:
            "Ordena estas competiciones de la más antigua a la más reciente",
          answers: [
            { id: "a", text: "Liga de Campeones" },
            { id: "b", text: "Super Bowl" },
            { id: "c", text: "Roland-Garros" },
            { id: "d", text: "Copa Davis" },
          ],
          correctAnswer: "c",
          correctOrder: ["c", "d", "a", "b"],
          explanation:
            "Roland-Garros (1891) → Copa Davis (1900) → Liga de Campeones (1955) → Super Bowl (1967)",
        },
      ],
    },
  },
};

export default [
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
] as TranslatedQuiz[];
