import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fortnite en vrai-faux : vingt affirmations sur le jeu d'Epic Games.
 *
 * Reponse « vrai » = id « a », « faux » = id « b » (VraiFauxPlayer). Treize vraies,
 * sept fausses. On s'en tient a l'histoire du jeu (sorties, evenements,
 * Coupe du monde 2019) et aux regles qui ne bougent pas (construction,
 * tempete, soins), pas a la carte ou aux armes, qui changent a chaque saison.
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
        "Vingt affirmations sur Fortnite, sa sortie, ses concerts et sa Coupe du monde. À toi de dire lesquelles sont vraies !",
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
        {
          id: 11,
          question: "Dans Fortnite, on construit avec trois matériaux : le bois, la pierre et le métal.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. On les récolte avec la pioche, en tapant sur les arbres, les rochers ou encore les voitures. Le bois se construit le plus vite, le métal est le plus solide.",
        },
        {
          id: 12,
          question: "Pendant une partie, une tempête rétrécit peu à peu la zone où l'on peut jouer.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Rester dans la tempête fait perdre de la vie, du coup les joueurs sont poussés vers le centre de la zone, et les combats se rapprochent.",
        },
        {
          id: 13,
          question: "Gagner une partie de Battle Royale, ça s'appelle faire une « Victoire royale ».",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est le message qui s'affiche à l'écran quand on est le dernier joueur, ou la dernière équipe, encore en vie.",
        },
        {
          id: 14,
          question: "À sa sortie, le Battle Royale n'existait que sur Xbox.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Il est sorti en même temps sur PC, PlayStation 4 et Xbox One en septembre 2017. Les versions mobiles et Switch sont arrivées en 2018.",
        },
        {
          id: 15,
          question: "On peut jouer à Fortnite sur Nintendo Switch.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, depuis juin 2018. Le jeu a été annoncé et mis en ligne le même jour, pendant l'E3. Il est aussi sur la Switch 2.",
        },
        {
          id: 16,
          question: "Les lamas de ravitaillement donnent des ressources et des munitions quand on les casse.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ce sont des piñatas en forme de lama, assez rares, qu'on trouve sur la carte. Il suffit de les frapper pour récupérer tout ce qu'elles contiennent.",
        },
        {
          id: 17,
          question: "Peely, le skin célèbre de Fortnite, est un ananas.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Peely est une banane géante qui marche sur ses deux jambes. C'est l'un des skins les plus connus du jeu, et il a même eu droit à plusieurs versions.",
        },
        {
          id: 18,
          question: "Dans Fortnite, on peut conduire des voitures.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, depuis l'été 2020. Avant, on avait surtout des chariots de supermarché, des quads ou encore des karts de golf pour se déplacer.",
        },
        {
          id: 19,
          question: "Fortnite est interdit aux moins de 18 ans en Europe.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le jeu est classé PEGI 12 : la violence y est cartoon, sans sang, et les joueurs éliminés disparaissent simplement de la partie.",
        },
        {
          id: 20,
          question: "Dans Fortnite, on peut se soigner avec des bandages et des trousses de soins.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Les bandages rendent un peu de vie, la trousse de soins la remplit complètement mais prend plus de temps. Il y a aussi des potions de bouclier pour protéger sa barre de vie.",
        },
      ],
    },
    en: {
      title: "True or false: Fortnite",
      description:
        "Twenty statements about Fortnite, its launch, its concerts and its World Cup. Can you tell which ones are true?",
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
        {
          id: 11,
          question: "In Fortnite, you build with three materials: wood, stone and metal.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. You gather them with your pickaxe by hitting trees, rocks, cars and so on. Wood builds the fastest, metal is the toughest.",
        },
        {
          id: 12,
          question: "During a match, a storm slowly shrinks the area you can play in.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Staying in the storm drains your health, so players get pushed toward the middle of the zone and the fights get closer.",
        },
        {
          id: 13,
          question: "Winning a Battle Royale match is called getting a \"Victory Royale\".",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's the message that shows up on screen when you're the last player, or the last team, still standing.",
        },
        {
          id: 14,
          question: "When it came out, Battle Royale was only on Xbox.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It launched on PC, PlayStation 4 and Xbox One at the same time in September 2017. The mobile and Switch versions came in 2018.",
        },
        {
          id: 15,
          question: "You can play Fortnite on Nintendo Switch.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, since June 2018. The game was announced and released on the same day, during E3. It's on the Switch 2 as well.",
        },
        {
          id: 16,
          question: "Supply Llamas give you materials and ammo when you break them.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. They're fairly rare llama-shaped piñatas found around the map. You just hit them to get everything inside.",
        },
        {
          id: 17,
          question: "Peely, the famous Fortnite skin, is a pineapple.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Peely is a giant banana walking on two legs. It's one of the best-known skins in the game, and it has even had several versions.",
        },
        {
          id: 18,
          question: "In Fortnite, you can drive cars.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, since summer 2020. Before that, you mostly got around in shopping carts, quad bikes or golf carts.",
        },
        {
          id: 19,
          question: "Fortnite is rated for adults only (18+) in Europe.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The game is rated PEGI 12: the violence is cartoonish, with no blood, and eliminated players simply vanish from the match.",
        },
        {
          id: 20,
          question: "In Fortnite, you can heal with bandages and med kits.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Bandages give back a little health, and a med kit fills it all the way up but takes longer. There are also shield potions to protect your health bar.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: Fortnite",
      description:
        "Veinte afirmaciones sobre Fortnite, su lanzamiento, sus conciertos y su Copa del Mundo. ¿Sabes cuáles son verdaderas?",
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
        {
          id: 11,
          question: "En Fortnite se construye con tres materiales: madera, piedra y metal.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se recogen con el pico, golpeando árboles, rocas o coches. La madera es la más rápida de construir, y el metal el más resistente.",
        },
        {
          id: 12,
          question: "Durante una partida, una tormenta va reduciendo poco a poco la zona de juego.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Quedarse en la tormenta quita vida, así que los jugadores acaban empujados hacia el centro de la zona y los combates se acercan.",
        },
        {
          id: 13,
          question: "Ganar una partida de Battle Royale se llama conseguir una \"Victoria magistral\".",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es el mensaje que aparece en pantalla cuando eres el último jugador, o el último equipo, que sigue en pie.",
        },
        {
          id: 14,
          question: "Cuando salió, el Battle Royale solo estaba en Xbox.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Salió a la vez en PC, PlayStation 4 y Xbox One en septiembre de 2017. Las versiones para móvil y Switch llegaron en 2018.",
        },
        {
          id: 15,
          question: "Se puede jugar a Fortnite en Nintendo Switch.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, desde junio de 2018. El juego se anunció y salió el mismo día, durante el E3. También está en Switch 2.",
        },
        {
          id: 16,
          question: "Las llamas de suministros dan materiales y munición cuando las rompes.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Son piñatas con forma de llama, bastante raras, que aparecen por el mapa. Basta con golpearlas para llevarse todo lo que tienen dentro.",
        },
        {
          id: 17,
          question: "Peely, el famoso skin de Fortnite, es una piña.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Peely es un plátano gigante que camina sobre dos piernas. Es uno de los skins más conocidos del juego, y hasta ha tenido varias versiones.",
        },
        {
          id: 18,
          question: "En Fortnite se pueden conducir coches.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, desde el verano de 2020. Antes, para moverse había sobre todo carritos de supermercado, quads o carritos de golf.",
        },
        {
          id: 19,
          question: "Fortnite está prohibido para menores de 18 años en Europa.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El juego tiene la clasificación PEGI 12: la violencia es de dibujos animados, sin sangre, y los jugadores eliminados simplemente desaparecen de la partida.",
        },
        {
          id: 20,
          question: "En Fortnite te puedes curar con vendas y botiquines.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Las vendas devuelven un poco de vida, y el botiquín la llena del todo pero tarda más. También hay pociones de escudo para proteger la barra de vida.",
        },
      ],
    },
  },
};

export default [quizFortnite] as TranslatedQuiz[];
