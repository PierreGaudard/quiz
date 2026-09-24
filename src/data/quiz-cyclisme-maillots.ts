import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur les maillots du cyclisme : jaune, vert, à pois, blanc,
 * rose du Giro, rouge de la Vuelta, arc-en-ciel du champion du monde.
 *
 * Moteur VraiFauxPlayer : « vrai » = id a, « faux » = id b, dans les trois
 * langues. Cinq affirmations vraies et cinq fausses. Le quiz existant sur le
 * cyclisme joue sur les chiffres du Tour : ici on ne demande aucune date du
 * premier Tour ni aucun palmarès chiffré.
 */
export const quizCyclismeMaillots: TranslatedQuiz = {
  slug: "quiz-cyclisme-maillots",
  slugs: { en: "cycling-jerseys-quiz", fr: "quiz-cyclisme-maillots", es: "quiz-ciclismo-maillots" },
  categorySlug: "sport",
  subcategory: "Cyclisme",
  difficulty: "easy",
  coverImage: "/images/cover-cyclisme-maillots.webp",
  gameType: "vrai-faux",
  playCount: 3500,
  translations: {
    fr: {
      title: "Vrai ou faux : les maillots du cyclisme",
      description:
        "Dix affirmations sur les maillots du cyclisme : le jaune, le vert, le maillot à pois, le rose du Giro ou encore l'arc-en-ciel.",
      questions: [
        {
          id: 1,
          image: "/images/q-cyclisme-maillots-01.webp",
          question: "Sur le Tour de France, le maillot à pois récompense le meilleur grimpeur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il va au leader du classement de la montagne : des points sont donnés aux premiers coureurs au sommet des cols.",
        },
        {
          id: 2,
          question: "Sur le Tour de France, le maillot vert récompense le meilleur jeune.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le maillot vert, c'est le classement par points, celui des sprinteurs la plupart du temps. Le meilleur jeune porte le maillot blanc.",
        },
        {
          id: 3,
          image: "/images/q-cyclisme-maillots-02.webp",
          question: "Le leader du Tour d'Italie porte un maillot rose.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, c'est la maglia rosa. Le rose vient de la couleur du papier de La Gazzetta dello Sport, le journal qui a créé la course.",
        },
        {
          id: 4,
          question: "Aujourd'hui, le leader du Tour d'Espagne porte un maillot jaune.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Depuis 2010, le leader de la Vuelta porte un maillot rouge. Il a été jaune pendant longtemps, puis doré, avant de passer au rouge.",
        },
        {
          id: 5,
          question: "Le maillot jaune existe depuis le tout premier Tour de France.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Il est apparu en 1919, et c'est Eugène Christophe qui l'a porté le premier, au départ de Grenoble. Avant ça, rien ne distinguait le leader dans le peloton.",
        },
        {
          id: 6,
          question: "Le jaune du maillot vient de la couleur du papier du journal L'Auto, qui organisait le Tour.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. L'Auto, l'ancêtre de L'Équipe, était imprimé sur du papier jaune. Le maillot servait aussi de publicité au journal.",
        },
        {
          id: 7,
          image: "/images/q-cyclisme-maillots-03.webp",
          question: "Le champion du monde sur route court toute l'année avec un maillot blanc barré de bandes aux couleurs de l'arc-en-ciel.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il le porte dans toutes les courses de sa spécialité jusqu'aux Mondiaux suivants. Julian Alaphilippe l'a gardé deux ans de suite, après ses titres de 2020 et 2021.",
        },
        {
          id: 8,
          question: "Le maillot à pois est porté depuis la création du classement de la montagne, en 1933.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le classement existe depuis 1933, mais le maillot blanc à pois rouges n'est arrivé qu'en 1975. Pendant plus de quarante ans, le meilleur grimpeur n'avait pas de maillot à lui.",
        },
        {
          id: 9,
          question: "En 1969, Eddy Merckx a gagné le classement général, celui des points et celui de la montagne sur le même Tour.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, et personne ne l'a refait depuis. C'était son premier Tour de France, et il l'a gagné avec près de 18 minutes d'avance.",
        },
        {
          id: 10,
          image: "/images/q-cyclisme-maillots-04.webp",
          question: "Sur le Tour, le coureur le plus combatif de l'étape reçoit un maillot blanc.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le plus combatif n'a pas de maillot, il porte un dossard d'une autre couleur le lendemain. Le maillot blanc, c'est celui du meilleur jeune, pour les coureurs de moins de 26 ans.",
        },
      ],
    },
    en: {
      title: "True or false: cycling jerseys",
      description:
        "Ten statements about cycling jerseys: the yellow, the green, the polka dots, the Giro's pink or the rainbow stripes. True or false?",
      questions: [
        {
          id: 1,
          image: "/images/q-cyclisme-maillots-01.webp",
          question: "At the Tour de France, the polka-dot jersey goes to the best climber.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It goes to the leader of the mountains classification, where points are handed out to the first riders over each climb.",
        },
        {
          id: 2,
          question: "At the Tour de France, the green jersey goes to the best young rider.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Green is the points classification, which usually goes to a sprinter. The best young rider wears white.",
        },
        {
          id: 3,
          image: "/images/q-cyclisme-maillots-02.webp",
          question: "The leader of the Giro d'Italia wears a pink jersey.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, it's the maglia rosa. The pink comes from the paper of La Gazzetta dello Sport, the newspaper that created the race.",
        },
        {
          id: 4,
          question: "Today, the leader of the Vuelta a España wears a yellow jersey.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Since 2010 the Vuelta leader has worn red. The jersey was yellow for a long time, then gold, before it switched to red.",
        },
        {
          id: 5,
          question: "The yellow jersey has existed since the very first Tour de France.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It first appeared in 1919, when Eugène Christophe pulled it on at the start in Grenoble. Before that, nothing marked out the leader in the bunch.",
        },
        {
          id: 6,
          question: "The yellow comes from the colour of the paper of L'Auto, the newspaper that ran the Tour.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. L'Auto, which later became L'Équipe, was printed on yellow paper. The jersey was free advertising for the paper too.",
        },
        {
          id: 7,
          image: "/images/q-cyclisme-maillots-03.webp",
          question: "The road world champion races all year in a white jersey with rainbow-coloured stripes.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. They wear it in every race of that discipline until the next Worlds. Julian Alaphilippe kept it two years running, after winning in 2020 and 2021.",
        },
        {
          id: 8,
          question: "The polka-dot jersey has been worn since the mountains classification began in 1933.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The classification goes back to 1933, but the white jersey with red dots only arrived in 1975. For more than forty years the best climber had no jersey of his own.",
        },
        {
          id: 9,
          question: "In 1969, Eddy Merckx won the overall, the points and the mountains classifications in the same Tour.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, and nobody has done it since. It was his first Tour de France, and he won it by almost 18 minutes.",
        },
        {
          id: 10,
          image: "/images/q-cyclisme-maillots-04.webp",
          question: "At the Tour, the most aggressive rider of the stage gets a white jersey.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The most combative rider gets no jersey, just a race number in a different colour the next day. White is for the best young rider, under 26.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: los maillots del ciclismo",
      description:
        "Diez afirmaciones sobre los maillots del ciclismo: el amarillo, el verde, el de lunares, el rosa del Giro o el arcoíris. ¿Verdadero o falso?",
      questions: [
        {
          id: 1,
          image: "/images/q-cyclisme-maillots-01.webp",
          question: "En el Tour de Francia, el maillot de lunares es para el mejor escalador.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Lo lleva el líder de la clasificación de la montaña, que da puntos a los primeros en pasar por cada puerto.",
        },
        {
          id: 2,
          question: "En el Tour de Francia, el maillot verde es para el mejor joven.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El verde es la clasificación por puntos, que casi siempre gana un velocista. El mejor joven viste de blanco.",
        },
        {
          id: 3,
          image: "/images/q-cyclisme-maillots-02.webp",
          question: "El líder del Giro de Italia lleva un maillot rosa.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, es la maglia rosa. El rosa viene del color del papel de La Gazzetta dello Sport, el periódico que creó la carrera.",
        },
        {
          id: 4,
          question: "Hoy en día, el líder de la Vuelta a España lleva un maillot amarillo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Desde 2010 el líder de la Vuelta viste de rojo. Durante muchos años fue amarillo, luego dorado, y al final pasó al rojo.",
        },
        {
          id: 5,
          question: "El maillot amarillo existe desde el primer Tour de Francia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Apareció en 1919, y el primero en ponérselo fue Eugène Christophe, en la salida de Grenoble. Antes no había nada que distinguiera al líder en el pelotón.",
        },
        {
          id: 6,
          question: "El amarillo del maillot viene del color del papel de L'Auto, el periódico que organizaba el Tour.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. L'Auto, el antecesor de L'Équipe, se imprimía en papel amarillo. Así el maillot hacía también publicidad del periódico.",
        },
        {
          id: 7,
          image: "/images/q-cyclisme-maillots-03.webp",
          question: "El campeón del mundo en ruta corre todo el año con un maillot blanco con franjas de los colores del arcoíris.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Lo lleva en todas las carreras de su especialidad hasta el siguiente Mundial. Julian Alaphilippe lo vistió dos años seguidos, tras ganar en 2020 y 2021.",
        },
        {
          id: 8,
          question: "El maillot de lunares se lleva desde que se creó la clasificación de la montaña, en 1933.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La clasificación existe desde 1933, pero el maillot blanco de lunares rojos no llegó hasta 1975. Durante más de cuarenta años, el mejor escalador no tuvo maillot propio.",
        },
        {
          id: 9,
          question: "En 1969, Eddy Merckx ganó la general, la de puntos y la de la montaña en el mismo Tour.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, y nadie lo ha vuelto a hacer. Era su primer Tour de Francia, y lo ganó con casi 18 minutos de ventaja.",
        },
        {
          id: 10,
          image: "/images/q-cyclisme-maillots-04.webp",
          question: "En el Tour, el corredor más combativo de la etapa recibe un maillot blanco.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El más combativo no tiene maillot, lleva un dorsal de otro color al día siguiente. El blanco es para el mejor joven, menor de 26 años.",
        },
      ],
    },
  },
};

export default [quizCyclismeMaillots] as TranslatedQuiz[];
