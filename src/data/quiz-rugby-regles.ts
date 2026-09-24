import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur les règles du rugby à XV (et un peu du rugby à VII).
 *
 * VraiFauxPlayer : « vrai » = id a, « faux » = id b. Cinq vraies, cinq
 * fausses. Le quiz qcm existant demande deja le nombre de joueurs et la
 * valeur d'un essai et d'un drop : ces trois points ne sont pas repris ici.
 */
export const quizRugbyRegles: TranslatedQuiz = {
  slug: "quiz-rugby-regles",
  slugs: { en: "rugby-rules-quiz", fr: "quiz-rugby-regles", es: "quiz-rugby-reglas" },
  categorySlug: "sport",
  subcategory: "Rugby",
  difficulty: "easy",
  coverImage: "/images/cover-rugby-regles.webp",
  gameType: "vrai-faux",
  playCount: 3700,
  translations: {
    fr: {
      title: "Vrai ou faux : les règles du rugby",
      description:
        "Dix affirmations sur les règles du rugby : la passe en avant, la mêlée, les cartons, la transformation ou encore le rugby à VII.",
      questions: [
        {
          id: 1,
          image: "/images/q-rugby-regles-01.webp",
          question: "Au rugby, on a le droit de faire une passe vers l'avant.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. La passe doit aller vers l'arrière ou à plat. Une passe vers l'avant, c'est un « en-avant », et l'arbitre donne une mêlée à l'autre équipe. Pour avancer vers l'avant, on court ou on tape au pied.",
        },
        {
          id: 2,
          question: "Une transformation réussie rapporte 2 points.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Après un essai, l'équipe tente un coup de pied entre les poteaux, face à l'endroit où le ballon a été aplati. S'il passe, ça fait 2 points de plus.",
        },
        {
          id: 3,
          image: "/images/q-rugby-regles-02.webp",
          question: "Dans une mêlée, chaque équipe engage huit joueurs.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ce sont les avants : les trois joueurs de première ligne, les deux deuxièmes lignes et les trois troisièmes lignes. Le demi de mêlée introduit le ballon au milieu.",
        },
        {
          id: 4,
          question: "Au rugby à XV, un carton jaune exclut le joueur pendant dix minutes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Son équipe joue à quatorze pendant dix minutes de jeu. Au rugby à VII, l'exclusion ne dure que deux minutes.",
        },
        {
          id: 5,
          question: "Un match de rugby à XV dure deux fois quarante minutes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, 80 minutes en tout, plus la mi-temps. Le temps perdu pour les blessures ou l'arbitrage vidéo est rajouté.",
        },
        {
          id: 6,
          image: "/images/q-rugby-regles-03.webp",
          question: "Un essai de pénalité vaut 5 points, comme un essai normal.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, il vaut 7 points, sans transformation à tenter. L'arbitre l'accorde quand une faute de la défense a empêché un essai qui allait sans doute être marqué.",
        },
        {
          id: 7,
          question: "Un coup de pied de pénalité réussi rapporte 2 points.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, une pénalité réussie vaut 3 points. C'est la transformation, après un essai, qui vaut 2 points.",
        },
        {
          id: 8,
          question: "On a le droit de plaquer un joueur qui n'a pas le ballon.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Seul le porteur du ballon peut être plaqué. Plaquer un joueur sans ballon, c'est une faute, sanctionnée d'une pénalité, voire d'un carton.",
        },
        {
          id: 9,
          image: "/images/q-rugby-regles-04.webp",
          question: "Aux JO de Paris 2024, le rugby se jouait à XV.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, c'était du rugby à VII, au programme olympique depuis 2016. L'équipe de France masculine a d'ailleurs gagné la médaille d'or, avec Antoine Dupont.",
        },
        {
          id: 10,
          question: "Au rugby à VII, une mi-temps dure sept minutes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, sept minutes par mi-temps, sauf en finale, où elles passent à dix minutes. Le terrain est pourtant le même qu'au rugby à XV, donc ça court beaucoup !",
        },
      ],
    },
    en: {
      title: "True or false: the rules of rugby",
      description:
        "Ten statements about the rules of rugby: forward passes, scrums, cards, conversions and a bit of rugby sevens. True or false?",
      questions: [
        {
          id: 1,
          image: "/images/q-rugby-regles-01.webp",
          question: "In rugby, you're allowed to pass the ball forwards.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. A pass has to go backwards or flat. A forward pass gives the other team a scrum. To move the ball forward, you run with it or kick it.",
        },
        {
          id: 2,
          question: "A successful conversion is worth 2 points.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. After a try, the team kicks at the posts from a spot in line with where the ball was grounded. If it goes over, that's 2 more points.",
        },
        {
          id: 3,
          image: "/images/q-rugby-regles-02.webp",
          question: "In a scrum, each team packs down with eight players.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Those are the forwards: three front-rowers, two locks and three back-rowers. The scrum-half feeds the ball in.",
        },
        {
          id: 4,
          question: "In rugby union, a yellow card sends a player off for ten minutes.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The team plays with fourteen for ten minutes of playing time. In sevens, a yellow card only lasts two minutes.",
        },
        {
          id: 5,
          question: "A rugby union match lasts two halves of forty minutes.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, 80 minutes in total, plus half-time. Time lost to injuries or video reviews gets added on.",
        },
        {
          id: 6,
          image: "/images/q-rugby-regles-03.webp",
          question: "A penalty try is worth 5 points, the same as a normal try.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's worth 7 points, with no conversion to take. The referee awards it when foul play stopped a try that would probably have been scored.",
        },
        {
          id: 7,
          question: "A successful penalty kick is worth 2 points.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, a penalty goal is worth 3 points. It's the conversion after a try that's worth 2.",
        },
        {
          id: 8,
          question: "You're allowed to tackle a player who doesn't have the ball.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Only the ball carrier can be tackled. Tackling a player without the ball is foul play, punished with a penalty or even a card.",
        },
        {
          id: 9,
          image: "/images/q-rugby-regles-04.webp",
          question: "At the Paris 2024 Olympics, rugby was played fifteen-a-side.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it was rugby sevens, which has been on the Olympic programme since 2016. France's men won gold, with Antoine Dupont in the side.",
        },
        {
          id: 10,
          question: "In rugby sevens, each half lasts seven minutes.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, seven minutes a half, except in finals, where it goes up to ten. The pitch is the same size as in fifteens, so there's a lot of running!",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: las reglas del rugby",
      description:
        "Diez afirmaciones sobre las reglas del rugby: el pase adelantado, la melé, las tarjetas, la conversión y algo de rugby a siete.",
      questions: [
        {
          id: 1,
          image: "/images/q-rugby-regles-01.webp",
          question: "En rugby se puede pasar el balón hacia delante.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El pase tiene que ir hacia atrás o en línea. Un pase adelantado da una melé al otro equipo. Para avanzar, hay que correr con el balón o darle una patada.",
        },
        {
          id: 2,
          question: "Una conversión acertada vale 2 puntos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Después de un ensayo, el equipo patea a palos desde la línea del punto donde se apoyó el balón. Si entra, suma 2 puntos más.",
        },
        {
          id: 3,
          image: "/images/q-rugby-regles-02.webp",
          question: "En una melé, cada equipo pone a ocho jugadores.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Son los delanteros: tres de primera línea, dos de segunda y tres de tercera. El medio melé introduce el balón.",
        },
        {
          id: 4,
          question: "En el rugby a quince, una tarjeta amarilla deja al jugador fuera diez minutos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Su equipo juega con catorce durante diez minutos de juego. En el rugby a siete, la exclusión dura solo dos minutos.",
        },
        {
          id: 5,
          question: "Un partido de rugby a quince dura dos tiempos de cuarenta minutos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, 80 minutos en total, más el descanso. El tiempo perdido por lesiones o revisiones de vídeo se añade.",
        },
        {
          id: 6,
          image: "/images/q-rugby-regles-03.webp",
          question: "Un ensayo de castigo vale 5 puntos, igual que un ensayo normal.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, vale 7 puntos y no hay que patear la conversión. El árbitro lo concede cuando una falta de la defensa impidió un ensayo que casi seguro iba a llegar.",
        },
        {
          id: 7,
          question: "Un golpe de castigo convertido vale 2 puntos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, un golpe de castigo a palos vale 3 puntos. La que vale 2 es la conversión después de un ensayo.",
        },
        {
          id: 8,
          question: "Se puede placar a un jugador que no lleva el balón.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Solo se puede placar al que lleva el balón. Placar a un jugador sin balón es juego sucio, y se castiga con golpe de castigo o incluso tarjeta.",
        },
        {
          id: 9,
          image: "/images/q-rugby-regles-04.webp",
          question: "En los Juegos de París 2024, el rugby se jugó a quince.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, fue rugby a siete, que está en el programa olímpico desde 2016. Francia ganó el oro masculino, con Antoine Dupont en el equipo.",
        },
        {
          id: 10,
          question: "En el rugby a siete, cada tiempo dura siete minutos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, siete minutos por tiempo, salvo en las finales, donde pasan a diez. El campo es igual de grande que en el rugby a quince, así que se corre muchísimo.",
        },
      ],
    },
  },
};

export default [quizRugbyRegles] as TranslatedQuiz[];
