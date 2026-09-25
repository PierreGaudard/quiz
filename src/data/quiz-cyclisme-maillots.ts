import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur les maillots du cyclisme : jaune, vert, à pois, blanc,
 * rose du Giro, rouge de la Vuelta, arc-en-ciel du champion du monde.
 *
 * Moteur VraiFauxPlayer : « vrai » = id a, « faux » = id b, dans les trois
 * langues. Dix affirmations vraies et dix fausses. Le quiz existant sur le
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
        "Vingt affirmations sur les maillots du cyclisme : le jaune, le vert, le maillot à pois, le rose du Giro ou encore l'arc-en-ciel.",
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
        {
          id: 11,
          question: "Le maillot vert du Tour de France a été créé en 1953, pour les 50 ans de la course.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Le classement par points a été lancé cette année-là pour fêter le cinquantenaire du Tour. Le vert était la couleur de son sponsor, La Belle Jardinière.",
        },
        {
          id: 12,
          question: "Quand un coureur est en tête de deux classements, il porte le maillot le plus important, et l'autre maillot passe au deuxième de ce classement.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. L'ordre est le suivant : jaune, vert, pois, puis blanc. Par exemple, un maillot jaune qui mène aussi le classement du meilleur jeune laisse le maillot blanc au deuxième jeune.",
        },
        {
          id: 13,
          question: "Le champion de France sur route court toute l'année avec un maillot bleu, blanc et rouge.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Chaque champion national porte un maillot aux couleurs de son pays jusqu'au championnat suivant, dans les courses de sa spécialité.",
        },
        {
          id: 14,
          question: "Sur le Tour d'Italie, le meilleur grimpeur porte un maillot bleu.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, c'est la maglia azzurra, depuis 2012. Avant, le maillot du meilleur grimpeur du Giro était vert.",
        },
        {
          id: 15,
          question: "Sur le Tour d'Italie, le classement par points est récompensé par un maillot vert.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le leader du classement par points du Giro porte la maglia ciclamino, un maillot violet. Le vert, sur le Giro, c'était l'ancien maillot du meilleur grimpeur.",
        },
        {
          id: 16,
          question: "La leader du Tour de France Femmes porte elle aussi un maillot jaune.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Le Tour de France Femmes, relancé en 2022, reprend les mêmes maillots que le Tour des hommes : jaune, vert, à pois et blanc.",
        },
        {
          id: 17,
          question: "Sur le Tour, l'équipe en tête du classement par équipes porte un maillot bleu.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Il n'y a pas de maillot pour les équipes. Les coureurs de l'équipe en tête portent un dossard jaune, et souvent un casque jaune.",
        },
        {
          id: 18,
          question: "La lanterne rouge, c'est-à-dire le dernier du classement général, porte un maillot rouge.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. La lanterne rouge n'a pas de maillot. Le surnom vient de la lampe rouge accrochée à l'arrière du dernier wagon des trains.",
        },
        {
          id: 19,
          question: "Mark Cavendish a gagné le maillot vert du Tour plus souvent que Peter Sagan.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Peter Sagan a le record avec sept maillots verts. Mark Cavendish en a gagné deux, en 2011 et en 2021, même s'il détient le record de victoires d'étapes.",
        },
        {
          id: 20,
          question: "Sur le Tour, le maillot jaune revient au coureur qui a gagné le plus d'étapes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le maillot jaune va au coureur qui a mis le moins de temps au total, en additionnant toutes les étapes. On peut d'ailleurs gagner le Tour sans gagner une seule étape.",
        },
      ],
    },
    en: {
      title: "True or false: cycling jerseys",
      description:
        "Twenty statements about cycling jerseys: the yellow, the green, the polka dots, the Giro's pink or the rainbow stripes. True or false?",
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
        {
          id: 11,
          question: "The Tour de France green jersey was created in 1953, for the race's 50th anniversary.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The points classification was launched that year to celebrate 50 years of the Tour. Green was the colour of its sponsor, La Belle Jardinière.",
        },
        {
          id: 12,
          question: "When a rider leads two classifications, he wears the more important jersey and the other one goes to the second-placed rider in that classification.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The order is yellow, green, polka dots, then white. For example, if the yellow jersey also leads the young rider classification, the white jersey goes to the second-best young rider.",
        },
        {
          id: 13,
          question: "The French road race champion wears a blue, white and red jersey all year.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Every national champion wears a jersey in their country's colours until the next championship, in races of their discipline.",
        },
        {
          id: 14,
          question: "At the Giro d'Italia, the best climber wears a blue jersey.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, it's the maglia azzurra, used since 2012. Before that, the Giro's best climber wore green.",
        },
        {
          id: 15,
          question: "At the Giro d'Italia, the points classification leader wears a green jersey.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Giro's points leader wears the maglia ciclamino, a purple jersey. Green at the Giro was the old climber's jersey.",
        },
        {
          id: 16,
          question: "The leader of the Tour de France Femmes also wears a yellow jersey.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The Tour de France Femmes, relaunched in 2022, uses the same jerseys as the men's Tour: yellow, green, polka dots and white.",
        },
        {
          id: 17,
          question: "At the Tour, the team leading the team classification wears a blue jersey.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. There's no team jersey. Riders from the leading team wear yellow race numbers, and often yellow helmets.",
        },
        {
          id: 18,
          question: "The lanterne rouge, the last rider on general classification, wears a red jersey.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The lanterne rouge doesn't get a jersey. The name comes from the red lamp hung on the back of the last carriage of a train.",
        },
        {
          id: 19,
          question: "Mark Cavendish won the Tour's green jersey more often than Peter Sagan.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Peter Sagan holds the record with seven green jerseys. Mark Cavendish won two, in 2011 and 2021, even though he holds the record for stage wins.",
        },
        {
          id: 20,
          question: "At the Tour, the yellow jersey goes to the rider who has won the most stages.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It goes to the rider with the lowest total time once all the stages are added up. You can even win the Tour without winning a single stage.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: los maillots del ciclismo",
      description:
        "Veinte afirmaciones sobre los maillots del ciclismo: el amarillo, el verde, el de lunares, el rosa del Giro o el arcoíris. ¿Verdadero o falso?",
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
        {
          id: 11,
          question: "El maillot verde del Tour de Francia se creó en 1953, para los 50 años de la carrera.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. La clasificación por puntos se lanzó ese año para celebrar el cincuentenario del Tour. El verde era el color de su patrocinador, La Belle Jardinière.",
        },
        {
          id: 12,
          question: "Cuando un ciclista lidera dos clasificaciones, lleva el maillot más importante y el otro pasa al segundo de esa clasificación.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El orden es amarillo, verde, lunares y blanco. Por ejemplo, si el maillot amarillo también lidera la clasificación de jóvenes, el blanco lo lleva el segundo mejor joven.",
        },
        {
          id: 13,
          question: "El campeón de Francia en ruta corre todo el año con un maillot azul, blanco y rojo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Cada campeón nacional lleva un maillot con los colores de su país hasta el campeonato siguiente, en las carreras de su especialidad.",
        },
        {
          id: 14,
          question: "En el Giro de Italia, el mejor escalador lleva un maillot azul.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, es la maglia azzurra, desde 2012. Antes, el mejor escalador del Giro vestía de verde.",
        },
        {
          id: 15,
          question: "En el Giro de Italia, el líder de la clasificación por puntos lleva un maillot verde.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El líder por puntos del Giro lleva la maglia ciclamino, de color morado. El verde, en el Giro, era el antiguo maillot del mejor escalador.",
        },
        {
          id: 16,
          question: "La líder del Tour de Francia Femenino también lleva un maillot amarillo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El Tour femenino, que volvió en 2022, usa los mismos maillots que el de los hombres: amarillo, verde, de lunares y blanco.",
        },
        {
          id: 17,
          question: "En el Tour, el equipo que lidera la clasificación por equipos lleva un maillot azul.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. No hay maillot por equipos. Los corredores del equipo líder llevan el dorsal amarillo, y a menudo también el casco amarillo.",
        },
        {
          id: 18,
          question: "El farolillo rojo, el último de la general, lleva un maillot rojo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El farolillo rojo no tiene maillot. El nombre viene de la luz roja que se colgaba en el último vagón de los trenes.",
        },
        {
          id: 19,
          question: "Mark Cavendish ganó el maillot verde del Tour más veces que Peter Sagan.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Peter Sagan tiene el récord con siete maillots verdes. Mark Cavendish ganó dos, en 2011 y en 2021, aunque tiene el récord de victorias de etapa.",
        },
        {
          id: 20,
          question: "En el Tour, el maillot amarillo es para el ciclista que ha ganado más etapas.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Es para el que lleva menos tiempo en total, sumando todas las etapas. De hecho, se puede ganar el Tour sin ganar ni una sola etapa.",
        },
      ],
    },
  },
};

export default [quizCyclismeMaillots] as TranslatedQuiz[];
