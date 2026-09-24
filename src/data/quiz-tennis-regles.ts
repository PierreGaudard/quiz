import type { TranslatedQuiz } from "./types";

/**
 * Vrai ou faux sur les règles du tennis : service, filet, lignes, tie-break.
 *
 * Deuxième quiz du sous-thème Tennis, à côté du duel sur les palmarès
 * (quiz-tennis.ts). Ici on ne parle ni de joueurs ni de titres, seulement du
 * règlement. Même moteur que quiz-europe.ts : « vrai » = id a, « faux » = id b.
 * Le super tie-break à 6-6 dans le dernier set est la règle commune aux quatre
 * tournois du Grand Chelem depuis 2022.
 */
export const quizTennisRegles: TranslatedQuiz = {
  slug: "quiz-tennis-regles",
  slugs: { en: "tennis-rules-quiz", fr: "quiz-tennis-regles", es: "quiz-tenis-reglas" },
  categorySlug: "sport",
  subcategory: "Tennis",
  difficulty: "easy",
  coverImage: "/images/cover-tennis-regles.webp",
  gameType: "vrai-faux",
  playCount: 4200,
  translations: {
    fr: {
      title: "Vrai ou faux : les règles du tennis",
      description:
        "Dix affirmations sur les règles du tennis : le service, le filet, les lignes ou encore le tie-break. À toi de trier le vrai du faux.",
      questions: [
        {
          id: 1,
          image: "/images/q-tennis-regles-01.webp",
          question: "Un service qui touche le filet puis tombe dans le bon carré se rejoue.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. On appelle ça un « let » : le service ne compte pas et le serveur le rejoue, sans perdre son premier ou son deuxième service.",
        },
        {
          id: 2,
          question: "Au tennis, on a droit à trois services pour chaque point.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "b",
          explanation:
            "Faux, on n'en a que deux. Si le deuxième service est faute aussi, c'est une double faute et le point va à l'adversaire.",
        },
        {
          id: 3,
          image: "/images/q-tennis-regles-02.webp",
          question: "Le filet est plus bas au centre que près des poteaux.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. Il mesure 0,914 m au centre et 1,07 m aux poteaux. C'est pour ça qu'on joue souvent les passings au milieu du filet.",
        },
        {
          id: 4,
          question: "Une balle qui touche la ligne est faute.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "b",
          explanation:
            "Faux. La ligne fait partie du terrain, donc une balle qui la touche, même à peine, est bonne.",
        },
        {
          id: 5,
          question: "Dans les tournois du Grand Chelem, les hommes jouent en trois sets gagnants.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. En simple messieurs, il faut gagner trois sets, donc un match peut durer cinq sets. Les femmes jouent en deux sets gagnants.",
        },
        {
          id: 6,
          image: "/images/q-tennis-regles-03.webp",
          question: "Un ace est un service que l'adversaire n'arrive même pas à toucher.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. Le service est bon et le receveur ne touche pas la balle avec sa raquette : le point est gagné directement.",
        },
        {
          id: 7,
          question: "Un joueur a le droit de toucher le filet avec sa raquette pendant l'échange.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "b",
          explanation:
            "Faux. Toucher le filet avec la raquette, le corps ou les vêtements pendant que la balle est en jeu fait perdre le point.",
        },
        {
          id: 8,
          question: "Le joueur qui reçoit le service peut reprendre la balle de volée, sans attendre le rebond.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "b",
          explanation:
            "Faux. Le retour de service se joue forcément après un rebond. La volée n'est permise qu'à partir du coup suivant.",
        },
        {
          id: 9,
          image: "/images/q-tennis-regles-04.webp",
          question: "Wimbledon a toujours joué avec des balles jaunes.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "b",
          explanation:
            "Faux. Wimbledon a gardé les balles blanches jusqu'en 1986, alors que les balles jaunes existaient depuis 1972. Elles se voyaient mieux à la télé.",
        },
        {
          id: 10,
          question: "Depuis 2022, à 6-6 dans le dernier set, les quatre tournois du Grand Chelem jouent un tie-break en 10 points.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. Avant 2022, chaque tournoi avait sa règle, et Roland-Garros n'avait même pas de tie-break dans le dernier set. Depuis, c'est le même super tie-break partout.",
        },
      ],
    },
    en: {
      title: "True or false: the rules of tennis",
      description:
        "Ten statements about the rules of tennis, from serving and the net to the lines and the tiebreak. Can you tell which ones are true?",
      questions: [
        {
          id: 1,
          image: "/images/q-tennis-regles-01.webp",
          question: "A serve that clips the net and lands in the correct box is replayed.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. That's a \"let\": the serve doesn't count and the server takes it again, without losing a first or second serve.",
        },
        {
          id: 2,
          question: "In tennis you get three serves for every point.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "b",
          explanation:
            "False, you only get two. If the second serve is also out, it's a double fault and the point goes to the other player.",
        },
        {
          id: 3,
          image: "/images/q-tennis-regles-02.webp",
          question: "The net is lower in the middle than at the posts.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. It's 3 feet (0.914 m) high in the center and 3.5 feet (1.07 m) at the posts. That's why so many passing shots go over the middle.",
        },
        {
          id: 4,
          question: "A ball that lands on the line is out.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "b",
          explanation:
            "False. The lines are part of the court, so a ball that touches the line, even just barely, is in.",
        },
        {
          id: 5,
          question: "At Grand Slam tournaments, men's singles matches are best of five sets.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. A player has to win three sets, so a match can go to five. Women's matches are best of three.",
        },
        {
          id: 6,
          image: "/images/q-tennis-regles-03.webp",
          question: "An ace is a serve the returner doesn't even manage to touch.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. The serve is in and the returner doesn't get a racket on it, so the server wins the point straight away.",
        },
        {
          id: 7,
          question: "A player is allowed to touch the net with their racket during a rally.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "b",
          explanation:
            "False. Touching the net with your racket, body or clothes while the ball is in play means you lose the point.",
        },
        {
          id: 8,
          question: "The returner can volley the serve without letting it bounce.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "b",
          explanation:
            "False. The serve has to bounce before it's returned. Volleys are only allowed from the next shot on.",
        },
        {
          id: 9,
          image: "/images/q-tennis-regles-04.webp",
          question: "Wimbledon has always used yellow balls.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "b",
          explanation:
            "False. Wimbledon stuck with white balls until 1986, even though yellow ones had been around since 1972 because they were easier to see on TV.",
        },
        {
          id: 10,
          question: "Since 2022, all four Grand Slams play a 10-point tiebreak at 6-6 in the final set.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. Before 2022 each major had its own rule, and the French Open had no final-set tiebreak at all. Now it's the same one everywhere.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: las reglas del tenis",
      description:
        "Diez afirmaciones sobre las reglas del tenis: el saque, la red, las líneas o el tie-break. Tú decides cuáles son verdad y cuáles no.",
      questions: [
        {
          id: 1,
          image: "/images/q-tennis-regles-01.webp",
          question: "Un saque que toca la red y cae en el cuadro correcto se repite.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es un « let »: el saque no cuenta y se vuelve a jugar, sin perder el primer ni el segundo servicio.",
        },
        {
          id: 2,
          question: "En tenis tienes tres saques en cada punto.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "b",
          explanation:
            "Falso, solo hay dos. Si el segundo también va fuera, es doble falta y el punto es para el rival.",
        },
        {
          id: 3,
          image: "/images/q-tennis-regles-02.webp",
          question: "La red es más baja en el centro que junto a los postes.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. Mide 0,914 m en el centro y 1,07 m en los postes. Por eso muchos passing shots pasan por el medio.",
        },
        {
          id: 4,
          question: "Una bola que toca la línea es mala.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "b",
          explanation:
            "Falso. La línea forma parte de la pista, así que si la bola la toca, aunque sea un poquito, es buena.",
        },
        {
          id: 5,
          question: "En los Grand Slam, los hombres juegan al mejor de cinco sets.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hay que ganar tres sets, así que un partido puede llegar a cinco. Las mujeres juegan al mejor de tres.",
        },
        {
          id: 6,
          image: "/images/q-tennis-regles-03.webp",
          question: "Un ace es un saque que el rival ni siquiera llega a tocar.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. El saque entra y el que resta no toca la bola con la raqueta, así que el punto es directo para el que saca.",
        },
        {
          id: 7,
          question: "Un jugador puede tocar la red con la raqueta durante el punto.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "b",
          explanation:
            "Falso. Si tocas la red con la raqueta, el cuerpo o la ropa mientras la bola está en juego, pierdes el punto.",
        },
        {
          id: 8,
          question: "El que resta puede devolver el saque de volea, sin dejar que bote.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "b",
          explanation:
            "Falso. El saque tiene que botar antes de devolverlo. La volea solo vale a partir del golpe siguiente.",
        },
        {
          id: 9,
          image: "/images/q-tennis-regles-04.webp",
          question: "En Wimbledon siempre se ha jugado con bolas amarillas.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "b",
          explanation:
            "Falso. Wimbledon siguió con bolas blancas hasta 1986, aunque las amarillas existían desde 1972 porque se veían mejor en la tele.",
        },
        {
          id: 10,
          question: "Desde 2022, con 6-6 en el último set, los cuatro Grand Slam juegan un tie-break a 10 puntos.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. Antes de 2022 cada torneo tenía su regla, y Roland Garros ni siquiera tenía tie-break en el último set. Ahora es igual en todos.",
        },
      ],
    },
  },
};

export default [quizTennisRegles] as TranslatedQuiz[];
