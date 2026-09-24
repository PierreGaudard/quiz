import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fortnite en vrai-faux : dix affirmations sur le jeu d'Epic Games.
 *
 * Reponse « vrai » = id « a », « faux » = id « b » (VraiFauxPlayer). Six vraies,
 * quatre fausses. On s'en tient a l'histoire du jeu (sorties, evenements,
 * Coupe du monde 2019) et pas a la carte ou aux armes, qui changent a chaque
 * saison.
 */
export const quizFortnite: TranslatedQuiz = {
  slug: "quiz-fortnite",
  slugs: { en: "fortnite-quiz", fr: "quiz-fortnite", es: "quiz-fortnite" },
  categorySlug: "jeux-video",
  subcategory: "Fortnite",
  difficulty: "easy",
  coverImage: "/images/sub-fortnite.webp",
  gameType: "vrai-faux",
  playCount: 8200,
  translations: {
    fr: {
      title: "Vrai ou faux : Fortnite",
      description:
        "Dix affirmations sur Fortnite, sa sortie, ses concerts et sa Coupe du monde. À toi de dire lesquelles sont vraies !",
      questions: [
        {
          id: 1,
          question: "Fortnite est développé par Epic Games.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Epic Games, le studio américain qui fait aussi l'Unreal Engine, développe et édite Fortnite.",
        },
        {
          id: 2,
          question: "Le mode Battle Royale de Fortnite est sorti en septembre 2017.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, le 26 septembre 2017. Il était gratuit dès le départ, et c'est ce mode qui a fait exploser le jeu.",
        },
        {
          id: 3,
          question: "Une partie classique de Battle Royale réunit jusqu'à 100 joueurs.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Jusqu'à 100 joueurs sautent sur l'île, et le dernier joueur ou la dernière équipe en vie gagne la partie.",
        },
        {
          id: 4,
          image: "/images/q-fortnite-04.webp",
          question: "Au début d'une partie, les joueurs sautent d'un avion.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Ils sautent d'un bus volant, le Battle Bus, un bus scolaire bleu accroché sous un ballon.",
        },
        {
          id: 5,
          question: "Fortnite tourne sur le moteur Unity.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Fortnite tourne sur l'Unreal Engine, le moteur maison d'Epic Games. Il est passé à l'Unreal Engine 5 en décembre 2021.",
        },
        {
          id: 6,
          image: "/images/q-fortnite-06.webp",
          question: "Le premier mode de Fortnite à sortir a été le Battle Royale.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le premier mode était Sauver le monde, un jeu en coopération contre des monstres, sorti en juillet 2017 en accès anticipé payant. Le Battle Royale est arrivé deux mois après.",
        },
        {
          id: 7,
          image: "/images/q-fortnite-07.webp",
          question: "Bugha a gagné 3 millions de dollars en remportant la Coupe du monde Fortnite en solo en 2019.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Kyle « Bugha » Giersdorf avait 16 ans quand il a gagné l'épreuve solo à New York, en juillet 2019.",
        },
        {
          id: 8,
          image: "/images/q-fortnite-08.webp",
          question: "Le concert de Travis Scott dans Fortnite, en avril 2020, a réuni plus de 12 millions de joueurs en même temps.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. L'événement Astronomical a réuni 12,3 millions de joueurs connectés en même temps lors de la première représentation, un record pour le jeu à l'époque.",
        },
        {
          id: 9,
          question: "La monnaie qu'on achète dans Fortnite s'appelle les V-Bucks.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Les V-Bucks servent à acheter les tenues, les emotes ou encore le passe de combat.",
        },
        {
          id: 10,
          question: "Fortnite n'a jamais été retiré de l'App Store d'Apple.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Apple l'a retiré en août 2020, après qu'Epic a ajouté son propre système de paiement dans le jeu. Ça a déclenché un long procès entre les deux entreprises.",
        },
      ],
    },
    en: {
      title: "True or false: Fortnite",
      description:
        "Ten statements about Fortnite, its launch, its concerts and its World Cup. Can you tell which ones are true?",
      questions: [
        {
          id: 1,
          question: "Fortnite is developed by Epic Games.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Epic Games, the American studio that also makes Unreal Engine, develops and publishes Fortnite.",
        },
        {
          id: 2,
          question: "Fortnite's Battle Royale mode came out in September 2017.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, on September 26, 2017. It was free from day one, and that's the mode that made the game blow up.",
        },
        {
          id: 3,
          question: "A classic Battle Royale match has up to 100 players.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Up to 100 players drop onto the island, and the last player or team standing wins.",
        },
        {
          id: 4,
          image: "/images/q-fortnite-04.webp",
          question: "At the start of a match, players jump out of a plane.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. They jump out of a flying bus, the Battle Bus, a blue school bus hanging under a balloon.",
        },
        {
          id: 5,
          question: "Fortnite runs on the Unity engine.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Fortnite runs on Unreal Engine, Epic's own engine. It moved to Unreal Engine 5 in December 2021.",
        },
        {
          id: 6,
          image: "/images/q-fortnite-06.webp",
          question: "The first Fortnite mode to come out was Battle Royale.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The first mode was Save the World, a co-op game against monsters, released in July 2017 as paid early access. Battle Royale came two months later.",
        },
        {
          id: 7,
          image: "/images/q-fortnite-07.webp",
          question: "Bugha won 3 million dollars by winning the 2019 Fortnite World Cup solo event.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Kyle \"Bugha\" Giersdorf was 16 when he won the solo event in New York in July 2019.",
        },
        {
          id: 8,
          image: "/images/q-fortnite-08.webp",
          question: "Travis Scott's Fortnite concert in April 2020 drew more than 12 million players at the same time.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The Astronomical event had 12.3 million concurrent players at its first show, a record for the game back then.",
        },
        {
          id: 9,
          question: "The currency you buy in Fortnite is called V-Bucks.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. V-Bucks are used to buy outfits, emotes or the battle pass, among other things.",
        },
        {
          id: 10,
          question: "Fortnite has never been removed from Apple's App Store.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Apple pulled it in August 2020, after Epic added its own payment system to the game. That started a long legal fight between the two companies.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: Fortnite",
      description:
        "Diez afirmaciones sobre Fortnite, su lanzamiento, sus conciertos y su Copa del Mundo. ¿Sabes cuáles son verdaderas?",
      questions: [
        {
          id: 1,
          question: "Fortnite está desarrollado por Epic Games.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Epic Games, el estudio estadounidense que también hace el Unreal Engine, desarrolla y publica Fortnite.",
        },
        {
          id: 2,
          question: "El modo Battle Royale de Fortnite salió en septiembre de 2017.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, el 26 de septiembre de 2017. Fue gratis desde el principio, y es el modo que hizo despegar el juego.",
        },
        {
          id: 3,
          question: "Una partida clásica de Battle Royale reúne hasta 100 jugadores.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hasta 100 jugadores saltan a la isla, y gana el último jugador o equipo que queda en pie.",
        },
        {
          id: 4,
          image: "/images/q-fortnite-04.webp",
          question: "Al principio de la partida, los jugadores saltan de un avión.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Saltan de un autobús volador, el Battle Bus, un autobús escolar azul colgado de un globo.",
        },
        {
          id: 5,
          question: "Fortnite funciona con el motor Unity.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Fortnite funciona con el Unreal Engine, el motor propio de Epic Games. Pasó al Unreal Engine 5 en diciembre de 2021.",
        },
        {
          id: 6,
          image: "/images/q-fortnite-06.webp",
          question: "El primer modo de Fortnite en salir fue el Battle Royale.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El primero fue Salvar el mundo, un modo cooperativo contra monstruos, que salió en julio de 2017 en acceso anticipado de pago. El Battle Royale llegó dos meses después.",
        },
        {
          id: 7,
          image: "/images/q-fortnite-07.webp",
          question: "Bugha ganó 3 millones de dólares al llevarse la Copa del Mundo de Fortnite en solitario en 2019.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Kyle «Bugha» Giersdorf tenía 16 años cuando ganó la prueba individual en Nueva York, en julio de 2019.",
        },
        {
          id: 8,
          image: "/images/q-fortnite-08.webp",
          question: "El concierto de Travis Scott en Fortnite, en abril de 2020, reunió a más de 12 millones de jugadores a la vez.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El evento Astronomical reunió a 12,3 millones de jugadores conectados a la vez en su primera función, un récord del juego en aquel momento.",
        },
        {
          id: 9,
          question: "La moneda que se compra en Fortnite se llama pavos, o V-Bucks.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Con los pavos se compran trajes, gestos o el pase de batalla, entre otras cosas.",
        },
        {
          id: 10,
          question: "Fortnite nunca ha sido retirado de la App Store de Apple.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Apple lo retiró en agosto de 2020, después de que Epic añadiera su propio sistema de pago en el juego. Eso abrió un largo juicio entre las dos empresas.",
        },
      ],
    },
  },
};

export default [quizFortnite] as TranslatedQuiz[];
