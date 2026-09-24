import type { TranslatedQuiz } from "./types";

/**
 * Quiz duel sur les grands clubs européens : surnoms, stades, villes et
 * quelques exploits en Ligue des champions.
 *
 * Deux propositions exactement par question (DuelPlayer). Le palmares de la
 * C1 est pose en comparaison (Real Madrid contre AC Milan) plutot qu'en
 * nombre exact, qui change des qu'un des deux la regagne. Le PSG, vainqueur
 * en 2025 et 2026, est cite dans l'explication de la question 2.
 */
export const quizFootballClubs: TranslatedQuiz = {
  slug: "quiz-football-clubs",
  slugs: { en: "football-clubs-quiz", fr: "quiz-football-clubs", es: "quiz-futbol-clubes" },
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "easy",
  coverImage: "/images/cover-football-clubs.webp",
  gameType: "duel",
  playCount: 5800,
  translations: {
    fr: {
      title: "Duel foot : les grands clubs européens",
      description:
        "Dix duels sur les grands clubs d'Europe : leurs stades, leurs surnoms, leurs villes et leurs soirées de Ligue des champions.",
      questions: [
        {
          id: 1,
          image: "/images/q-football-clubs-03.webp",
          question: "Quel club a gagné le plus de Ligues des champions ?",
          answers: [
            { id: "a", text: "Real Madrid" },
            { id: "b", text: "AC Milan" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Real Madrid, avec 15 titres, soit plus du double de l'AC Milan, qui en a 7. Le Milan reste quand même le deuxième club le plus titré.",
        },
        {
          id: 2,
          question: "Quel club français a gagné la Ligue des champions le premier ?",
          answers: [
            { id: "a", text: "Paris Saint-Germain" },
            { id: "b", text: "Olympique de Marseille" },
          ],
          correctAnswer: "b",
          explanation:
            "L'OM, en 1993, contre l'AC Milan grâce à un but de Basile Boli. Le PSG a dû attendre 2025 pour gagner la sienne, puis il l'a regagnée en 2026.",
        },
        {
          id: 3,
          image: "/images/q-football-clubs-02.webp",
          question: "Dans quel stade joue le FC Barcelone ?",
          answers: [
            { id: "a", text: "Le Camp Nou" },
            { id: "b", text: "Le Santiago Bernabéu" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Camp Nou. Le Santiago Bernabéu, c'est le stade du Real Madrid, le grand rival.",
        },
        {
          id: 4,
          question: "Quel club est surnommé « la Vieille Dame » ?",
          answers: [
            { id: "a", text: "L'Inter Milan" },
            { id: "b", text: "La Juventus" },
          ],
          correctAnswer: "b",
          explanation:
            "La Juventus, le club de Turin, qu'on appelle la Vecchia Signora en Italie. C'est aussi le club le plus titré du championnat italien.",
        },
        {
          id: 5,
          question: "Quel a été le premier club anglais à gagner la Coupe des clubs champions ?",
          answers: [
            { id: "a", text: "Manchester United" },
            { id: "b", text: "Liverpool" },
          ],
          correctAnswer: "a",
          explanation:
            "Manchester United, en 1968, contre Benfica à Wembley. C'était dix ans après le crash aérien de Munich, qui avait tué huit joueurs de l'équipe. Liverpool a gagné sa première en 1977.",
        },
        {
          id: 6,
          image: "/images/q-football-clubs-01.webp",
          question: "Quel club a gagné le championnat, la coupe nationale et la Ligue des champions en 2023 ?",
          answers: [
            { id: "a", text: "Manchester City" },
            { id: "b", text: "Real Madrid" },
          ],
          correctAnswer: "a",
          explanation:
            "Manchester City, avec Pep Guardiola. Le club a battu l'Inter 1-0 en finale à Istanbul, et c'était sa toute première Ligue des champions.",
        },
        {
          id: 7,
          question: "Comment s'appelle le stade du Bayern Munich ?",
          answers: [
            { id: "a", text: "Le Signal Iduna Park" },
            { id: "b", text: "L'Allianz Arena" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Allianz Arena, le stade qui s'illumine en rouge les soirs de match. Le Signal Iduna Park, c'est celui du Borussia Dortmund.",
        },
        {
          id: 8,
          question: "Quel club anglais a fini la saison 2003-2004 de Premier League sans perdre un seul match ?",
          answers: [
            { id: "a", text: "Chelsea" },
            { id: "b", text: "Arsenal" },
          ],
          correctAnswer: "b",
          explanation:
            "Arsenal, avec Thierry Henry et Arsène Wenger : 26 victoires et 12 nuls. En Angleterre, on appelle cette équipe les « Invincibles ».",
        },
        {
          id: 9,
          question: "Dans quelle ville joue l'Ajax ?",
          answers: [
            { id: "a", text: "Amsterdam" },
            { id: "b", text: "Rotterdam" },
          ],
          correctAnswer: "a",
          explanation:
            "À Amsterdam. Rotterdam, c'est la ville du Feyenoord, son grand rival aux Pays-Bas.",
        },
        {
          id: 10,
          image: "/images/q-football-clubs-04.webp",
          question: "Quel club affronte le Real Madrid dans le « Clásico » ?",
          answers: [
            { id: "a", text: "Le FC Barcelone" },
            { id: "b", text: "L'Atlético de Madrid" },
          ],
          correctAnswer: "a",
          explanation:
            "Le FC Barcelone. Le match entre le Real et l'Atlético, les deux clubs de Madrid, s'appelle le derby madrilène.",
        },
      ],
    },
    en: {
      title: "Football duel: Europe's big clubs",
      description:
        "Ten head-to-heads on Europe's biggest clubs: their grounds, their nicknames, their cities and their Champions League nights.",
      questions: [
        {
          id: 1,
          image: "/images/q-football-clubs-03.webp",
          question: "Which club has won more Champions League titles?",
          answers: [
            { id: "a", text: "Real Madrid" },
            { id: "b", text: "AC Milan" },
          ],
          correctAnswer: "a",
          explanation:
            "Real Madrid, with 15, more than twice AC Milan's 7. Milan are still the second most successful club in the competition.",
        },
        {
          id: 2,
          question: "Which French club won the Champions League first?",
          answers: [
            { id: "a", text: "Paris Saint-Germain" },
            { id: "b", text: "Olympique de Marseille" },
          ],
          correctAnswer: "b",
          explanation:
            "Marseille, in 1993, against AC Milan, thanks to a Basile Boli header. PSG had to wait until 2025 for theirs, then won it again in 2026.",
        },
        {
          id: 3,
          image: "/images/q-football-clubs-02.webp",
          question: "Which stadium is FC Barcelona's home?",
          answers: [
            { id: "a", text: "Camp Nou" },
            { id: "b", text: "Santiago Bernabéu" },
          ],
          correctAnswer: "a",
          explanation:
            "Camp Nou. The Santiago Bernabéu belongs to Real Madrid, their great rivals.",
        },
        {
          id: 4,
          question: "Which club is nicknamed \"the Old Lady\"?",
          answers: [
            { id: "a", text: "Inter Milan" },
            { id: "b", text: "Juventus" },
          ],
          correctAnswer: "b",
          explanation:
            "Juventus, the Turin club known as la Vecchia Signora in Italy. They've also won more Italian league titles than anyone.",
        },
        {
          id: 5,
          question: "Which was the first English club to win the European Cup?",
          answers: [
            { id: "a", text: "Manchester United" },
            { id: "b", text: "Liverpool" },
          ],
          correctAnswer: "a",
          explanation:
            "Manchester United, in 1968, against Benfica at Wembley. It came ten years after the Munich air disaster, which killed eight of the club's players. Liverpool won their first in 1977.",
        },
        {
          id: 6,
          image: "/images/q-football-clubs-01.webp",
          question: "Which club won the league, the domestic cup and the Champions League in 2023?",
          answers: [
            { id: "a", text: "Manchester City" },
            { id: "b", text: "Real Madrid" },
          ],
          correctAnswer: "a",
          explanation:
            "Manchester City, under Pep Guardiola. They beat Inter 1-0 in the final in Istanbul, and it was the club's very first Champions League.",
        },
        {
          id: 7,
          question: "What is Bayern Munich's stadium called?",
          answers: [
            { id: "a", text: "Signal Iduna Park" },
            { id: "b", text: "Allianz Arena" },
          ],
          correctAnswer: "b",
          explanation:
            "The Allianz Arena, the ground that lights up red on match nights. Signal Iduna Park is Borussia Dortmund's home.",
        },
        {
          id: 8,
          question: "Which English club went through the 2003-04 Premier League season unbeaten?",
          answers: [
            { id: "a", text: "Chelsea" },
            { id: "b", text: "Arsenal" },
          ],
          correctAnswer: "b",
          explanation:
            "Arsenal, with Thierry Henry and Arsène Wenger: 26 wins and 12 draws. That side is known as the Invincibles.",
        },
        {
          id: 9,
          question: "Which city do Ajax play in?",
          answers: [
            { id: "a", text: "Amsterdam" },
            { id: "b", text: "Rotterdam" },
          ],
          correctAnswer: "a",
          explanation:
            "Amsterdam. Rotterdam is home to Feyenoord, their big Dutch rivals.",
        },
        {
          id: 10,
          image: "/images/q-football-clubs-04.webp",
          question: "Which club plays Real Madrid in El Clásico?",
          answers: [
            { id: "a", text: "FC Barcelona" },
            { id: "b", text: "Atlético Madrid" },
          ],
          correctAnswer: "a",
          explanation:
            "FC Barcelona. When Real play Atlético, the other big Madrid club, it's called the Madrid derby.",
        },
      ],
    },
    es: {
      title: "Duelo de fútbol: los grandes clubes europeos",
      description:
        "Diez duelos sobre los grandes clubes de Europa: sus estadios, sus apodos, sus ciudades y sus noches de Liga de Campeones.",
      questions: [
        {
          id: 1,
          image: "/images/q-football-clubs-03.webp",
          question: "¿Qué club ha ganado más Ligas de Campeones?",
          answers: [
            { id: "a", text: "Real Madrid" },
            { id: "b", text: "AC Milan" },
          ],
          correctAnswer: "a",
          explanation:
            "El Real Madrid, con 15, más del doble que el AC Milan, que tiene 7. Aun así, el Milan sigue siendo el segundo club con más títulos.",
        },
        {
          id: 2,
          question: "¿Qué club francés ganó antes la Liga de Campeones?",
          answers: [
            { id: "a", text: "Paris Saint-Germain" },
            { id: "b", text: "Olympique de Marsella" },
          ],
          correctAnswer: "b",
          explanation:
            "El Marsella, en 1993, contra el AC Milan, con un gol de cabeza de Basile Boli. El PSG tuvo que esperar a 2025 para ganar la suya, y la volvió a ganar en 2026.",
        },
        {
          id: 3,
          image: "/images/q-football-clubs-02.webp",
          question: "¿En qué estadio juega el FC Barcelona?",
          answers: [
            { id: "a", text: "El Camp Nou" },
            { id: "b", text: "El Santiago Bernabéu" },
          ],
          correctAnswer: "a",
          explanation:
            "En el Camp Nou. El Santiago Bernabéu es el estadio del Real Madrid, su gran rival.",
        },
        {
          id: 4,
          question: "¿A qué club llaman «la Vieja Señora»?",
          answers: [
            { id: "a", text: "Inter de Milán" },
            { id: "b", text: "Juventus" },
          ],
          correctAnswer: "b",
          explanation:
            "A la Juventus, el club de Turín, la Vecchia Signora en Italia. También es el club con más ligas italianas.",
        },
        {
          id: 5,
          question: "¿Cuál fue el primer club inglés en ganar la Copa de Europa?",
          answers: [
            { id: "a", text: "Manchester United" },
            { id: "b", text: "Liverpool" },
          ],
          correctAnswer: "a",
          explanation:
            "El Manchester United, en 1968, contra el Benfica en Wembley. Fue diez años después del accidente aéreo de Múnich, en el que murieron ocho jugadores del equipo. El Liverpool ganó la suya en 1977.",
        },
        {
          id: 6,
          image: "/images/q-football-clubs-01.webp",
          question: "¿Qué club ganó la liga, la copa y la Liga de Campeones en 2023?",
          answers: [
            { id: "a", text: "Manchester City" },
            { id: "b", text: "Real Madrid" },
          ],
          correctAnswer: "a",
          explanation:
            "El Manchester City de Pep Guardiola. Ganó la final 1-0 al Inter en Estambul, y era su primera Liga de Campeones.",
        },
        {
          id: 7,
          question: "¿Cómo se llama el estadio del Bayern de Múnich?",
          answers: [
            { id: "a", text: "Signal Iduna Park" },
            { id: "b", text: "Allianz Arena" },
          ],
          correctAnswer: "b",
          explanation:
            "El Allianz Arena, el estadio que se ilumina de rojo en las noches de partido. El Signal Iduna Park es el del Borussia Dortmund.",
        },
        {
          id: 8,
          question: "¿Qué club inglés terminó la Premier League 2003-2004 sin perder ni un partido?",
          answers: [
            { id: "a", text: "Chelsea" },
            { id: "b", text: "Arsenal" },
          ],
          correctAnswer: "b",
          explanation:
            "El Arsenal de Thierry Henry y Arsène Wenger: 26 victorias y 12 empates. A ese equipo lo llaman «los Invencibles».",
        },
        {
          id: 9,
          question: "¿En qué ciudad juega el Ajax?",
          answers: [
            { id: "a", text: "Ámsterdam" },
            { id: "b", text: "Róterdam" },
          ],
          correctAnswer: "a",
          explanation:
            "En Ámsterdam. Róterdam es la ciudad del Feyenoord, su gran rival en los Países Bajos.",
        },
        {
          id: 10,
          image: "/images/q-football-clubs-04.webp",
          question: "¿Qué club se enfrenta al Real Madrid en el Clásico?",
          answers: [
            { id: "a", text: "FC Barcelona" },
            { id: "b", text: "Atlético de Madrid" },
          ],
          correctAnswer: "a",
          explanation:
            "El FC Barcelona. Cuando el Real juega contra el Atlético, el otro gran club de Madrid, se habla del derbi madrileño.",
        },
      ],
    },
  },
};

export default [quizFootballClubs] as TranslatedQuiz[];
