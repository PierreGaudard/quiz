import type { TranslatedQuiz } from "./types";

/**
 * Premier quiz en mode estimation du catalogue.
 *
 * Le moteur ne propose pas de reponses : le joueur saisit un nombre et on lui
 * dit « plus haut » ou « plus bas », avec une tolerance de 5 % et cinq essais
 * (src/components/EstimationPlayer.tsx:26). Le champ `answers` reste vide, il
 * n'est pas lu par ce mode, et `correctValue` porte la reponse.
 *
 * Consequence sur le choix des questions : une tolerance de 5 % sur un petit
 * nombre ne laisse aucune marge (5 anneaux se joue au nombre exact) alors
 * qu'elle est genereuse sur une annee. Les questions melangent les deux
 * exprès, pour que le mode ne soit pas toujours facile ni toujours sec.
 */
export const quizJO: TranslatedQuiz = {
  slug: "quiz-jeux-olympiques",
  slugs: { en: "olympics-quiz", fr: "quiz-jeux-olympiques", es: "quiz-juegos-olimpicos" },
  categorySlug: "sport",
  subcategory: "Jeux olympiques",
  difficulty: "medium",
  coverImage: "/images/sub-jeux-olympiques.webp",
  gameType: "estimation",
  playCount: 11000,
  translations: {
    fr: {
      title: "Estimation : les chiffres des Jeux olympiques",
      description:
        "Vingt nombres à trouver sur les Jeux. Tu proposes, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-olympics-rings.webp",
          question: "En quelle année ont eu lieu les premiers Jeux olympiques modernes ?",
          answers: [],
          correctAnswer: "1896",
          correctValue: 1896,
          explanation:
            "1896, à Athènes, sous l'impulsion de Pierre de Coubertin. Quatorze pays y participaient.",
        },
        {
          id: 2,
          question: "Combien d'anneaux compte le drapeau olympique ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinq anneaux entrelacés, un par continent habité au sens du Comité international olympique.",
        },
        {
          id: 3,
          question: "Combien de médailles d'or Michael Phelps a-t-il remportées au total ?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 médailles d'or sur quatre olympiades, de 2004 à 2016. Personne n'en a autant, dans aucun sport.",
        },
        {
          id: 4,
          question: "Tous les combien d'années les Jeux olympiques d'été ont-ils lieu ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Tous les quatre ans. Cet intervalle porte un nom, l'olympiade, et il n'a été rompu que par les guerres et par le report de Tokyo.",
        },
        {
          id: 5,
          question: "En quelle année Paris avait-il accueilli les Jeux avant 2024 ?",
          answers: [],
          correctAnswer: "1924",
          correctValue: 1924,
          explanation:
            "1924. Cent ans jour pour jour avant les Jeux de 2024, ce qui explique le choix de la date.",
        },
        {
          id: 6,
          question: "Combien de sports étaient au programme des Jeux de Paris 2024 ?",
          answers: [],
          correctAnswer: "32",
          correctValue: 32,
          explanation:
            "32 sports, dont le breaking pour la première et sans doute la dernière fois, puisqu'il ne figure pas au programme de Los Angeles 2028.",
        },
        {
          id: 7,
          question: "Combien de médailles d'or la France a-t-elle gagnées à Paris 2024 ?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16 médailles d'or, et 64 médailles au total, le meilleur résultat français de l'histoire des Jeux.",
        },
        {
          id: 8,
          question: "Combien de secondes dure le record du monde du 100 mètres d'Usain Bolt ? (à un centième près)",
          answers: [],
          correctAnswer: "9.58",
          correctValue: 9.58,
          explanation:
            "9,58 secondes, à Berlin en 2009. Le record tient toujours, et de loin.",
        },
        {
          id: 9,
          question: "En quelle année les Jeux de Tokyo, reportés d'un an, ont-ils finalement eu lieu ?",
          answers: [],
          correctAnswer: "2021",
          correctValue: 2021,
          explanation:
            "2021, alors qu'ils gardaient le nom de Tokyo 2020. C'est le seul report de l'histoire des Jeux modernes.",
        },
        {
          id: 10,
          question: "Combien de minutes dure un match de basket aux Jeux olympiques ?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "40 minutes, en quatre quarts-temps de dix. C'est huit minutes de moins qu'en NBA, où les quarts-temps durent douze minutes.",
        },
        {
          id: 11,
          question: "Combien de médailles, toutes couleurs confondues, la France a-t-elle gagnées à Paris 2024 ?",
          answers: [],
          correctAnswer: "64",
          correctValue: 64,
          explanation:
            "64 : 16 en or, 26 en argent et 22 en bronze. C'est le meilleur total de la France aux Jeux depuis 1900.",
        },
        {
          id: 12,
          question: "Combien de médailles d'or individuelles Léon Marchand a-t-il gagnées à Paris 2024 ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Quatre : le 400 m quatre nages, le 200 m papillon, le 200 m brasse et le 200 m quatre nages. Il a aussi eu le bronze avec le relais 4 x 100 m quatre nages.",
        },
        {
          id: 13,
          question: "Combien de mètres fait un tour de piste d'athlétisme, dans le couloir 1 ?",
          answers: [],
          correctAnswer: "400",
          correctValue: 400,
          explanation:
            "400 mètres. C'est pour ça que le 400 m se court en un seul tour, avec des départs décalés pour que tout le monde fasse la même distance.",
        },
        {
          id: 14,
          question: "Combien de mètres de long mesure un bassin de natation olympique ?",
          answers: [],
          correctAnswer: "50",
          correctValue: 50,
          explanation:
            "50 mètres, avec 10 couloirs dont 8 utilisés en finale. Une course de 100 m, c'est donc un aller-retour.",
        },
        {
          id: 15,
          question: "Combien de kilomètres mesure un marathon ?",
          answers: [],
          correctAnswer: "42.195",
          correctValue: 42.195,
          explanation:
            "42,195 km. La distance a été fixée aux Jeux de Londres en 1908 et elle est officielle depuis 1921.",
        },
        {
          id: 16,
          question: "Combien de médailles d'or olympiques Teddy Riner a-t-il gagnées, en individuel et par équipes ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinq : trois en individuel, en 2012, 2016 et 2024, et deux par équipes mixtes, en 2021 et 2024. Il a aussi deux médailles de bronze.",
        },
        {
          id: 17,
          question: "Combien de fois Usain Bolt a-t-il été champion olympique du 100 mètres ?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Trois fois : à Pékin en 2008, à Londres en 2012 et à Rio en 2016. Personne d'autre n'a gagné le 100 m olympique trois fois.",
        },
        {
          id: 18,
          question: "Combien d'épreuves compte le décathlon ?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "Dix, sur deux jours : quatre courses, trois sauts et trois lancers. Chez les femmes, l'épreuve olympique est l'heptathlon, en sept épreuves.",
        },
        {
          id: 19,
          question: "À combien de mètres de la cible tirent les archers aux Jeux olympiques ?",
          answers: [],
          correctAnswer: "70",
          correctValue: 70,
          explanation:
            "À 70 mètres, pour l'arc classique. La cible mesure 1,22 m de diamètre et le cercle du 10, au centre, ne fait que 12,2 cm.",
        },
        {
          id: 20,
          question: "Combien de kilos pèse le poids que lancent les hommes aux Jeux ? (à un dixième près)",
          answers: [],
          correctAnswer: "7.26",
          correctValue: 7.26,
          explanation:
            "7,26 kg, soit 16 livres. Chez les femmes, le poids fait 4 kg.",
        },
      ],
    },
    en: {
      title: "Estimation: the numbers behind the Olympics",
      description:
        "Twenty numbers to find about the Games. You guess, we tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-olympics-rings.webp",
          question: "In what year were the first modern Olympic Games held?",
          answers: [],
          correctAnswer: "1896",
          correctValue: 1896,
          explanation:
            "1896, in Athens, driven by Pierre de Coubertin. Fourteen countries took part.",
        },
        {
          id: 2,
          question: "How many rings are on the Olympic flag?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Five interlocking rings, one for each inhabited continent as the International Olympic Committee counts them.",
        },
        {
          id: 3,
          question: "How many gold medals did Michael Phelps win in total?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 golds across four Games, from 2004 to 2016. Nobody has as many, in any sport.",
        },
        {
          id: 4,
          question: "How many years apart are the Summer Olympic Games held?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Every four years. That gap has a name, an Olympiad, and only the wars and the Tokyo postponement have broken it.",
        },
        {
          id: 5,
          question: "In what year had Paris hosted the Games before 2024?",
          answers: [],
          correctAnswer: "1924",
          correctValue: 1924,
          explanation:
            "1924. Exactly a hundred years before the 2024 Games, which is why that date was chosen.",
        },
        {
          id: 6,
          question: "How many sports were on the programme at Paris 2024?",
          answers: [],
          correctAnswer: "32",
          correctValue: 32,
          explanation:
            "32 sports, including breaking for the first and probably the last time, as it is not on the Los Angeles 2028 programme.",
        },
        {
          id: 7,
          question: "How many gold medals did France win at Paris 2024?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16 golds and 64 medals in total, the best French result in Olympic history.",
        },
        {
          id: 8,
          question: "How many seconds is Usain Bolt's 100 metres world record? (to the hundredth)",
          answers: [],
          correctAnswer: "9.58",
          correctValue: 9.58,
          explanation:
            "9.58 seconds, in Berlin in 2009. The record still stands, and not by a small margin.",
        },
        {
          id: 9,
          question: "In what year did the Tokyo Games, postponed by a year, actually take place?",
          answers: [],
          correctAnswer: "2021",
          correctValue: 2021,
          explanation:
            "2021, while still being called Tokyo 2020. It is the only postponement in the history of the modern Games.",
        },
        {
          id: 10,
          question: "How many minutes does an Olympic basketball game last?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "40 minutes, in four ten-minute quarters. That is eight minutes shorter than the NBA, where quarters run twelve minutes.",
        },
        {
          id: 11,
          question: "How many medals in total did France win at Paris 2024?",
          answers: [],
          correctAnswer: "64",
          correctValue: 64,
          explanation:
            "64: 16 gold, 26 silver and 22 bronze. It was France's best total at the Games since 1900.",
        },
        {
          id: 12,
          question: "How many individual gold medals did Léon Marchand win at Paris 2024?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Four: the 400 m individual medley, the 200 m butterfly, the 200 m breaststroke and the 200 m individual medley. He also took bronze in the 4 x 100 m medley relay.",
        },
        {
          id: 13,
          question: "How many metres is one lap of an athletics track, in lane 1?",
          answers: [],
          correctAnswer: "400",
          correctValue: 400,
          explanation:
            "400 metres. That is why the 400 m is a single lap, with staggered starts so everyone runs the same distance.",
        },
        {
          id: 14,
          question: "How many metres long is an Olympic swimming pool?",
          answers: [],
          correctAnswer: "50",
          correctValue: 50,
          explanation:
            "50 metres, with 10 lanes, 8 of which are used in a final. So a 100 m race is one length there and back.",
        },
        {
          id: 15,
          question: "How many kilometres is a marathon?",
          answers: [],
          correctAnswer: "42.195",
          correctValue: 42.195,
          explanation:
            "42.195 km. The distance was set at the 1908 London Games and has been official since 1921.",
        },
        {
          id: 16,
          question: "How many Olympic gold medals has Teddy Riner won, individual and team events together?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Five: three individual golds, in 2012, 2016 and 2024, and two in the mixed team event, in 2021 and 2024. He also has two bronze medals.",
        },
        {
          id: 17,
          question: "How many times was Usain Bolt Olympic 100 metres champion?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Three times: Beijing 2008, London 2012 and Rio 2016. Nobody else has won the Olympic 100 m three times.",
        },
        {
          id: 18,
          question: "How many events are there in the decathlon?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "Ten, over two days: four races, three jumps and three throws. For women, the Olympic version is the heptathlon, with seven events.",
        },
        {
          id: 19,
          question: "How many metres from the target do archers shoot at the Olympics?",
          answers: [],
          correctAnswer: "70",
          correctValue: 70,
          explanation:
            "70 metres, with the recurve bow. The target is 1.22 m across and the 10 ring in the middle is only 12.2 cm wide.",
        },
        {
          id: 20,
          question: "How many kilograms does the men's shot weigh at the Olympics? (to one decimal place)",
          answers: [],
          correctAnswer: "7.26",
          correctValue: 7.26,
          explanation:
            "7.26 kg, which is 16 pounds. The women's shot weighs 4 kg.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras de los Juegos Olímpicos",
      description:
        "Veinte números que encontrar sobre los Juegos. Propones y te decimos más alto o más bajo.",
      questions: [
        {
          id: 1,
          image: "/images/q-olympics-rings.webp",
          question: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
          answers: [],
          correctAnswer: "1896",
          correctValue: 1896,
          explanation:
            "1896, en Atenas, impulsados por Pierre de Coubertin. Participaron catorce países.",
        },
        {
          id: 2,
          question: "¿Cuántos aros tiene la bandera olímpica?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinco aros entrelazados, uno por cada continente habitado según el Comité Olímpico Internacional.",
        },
        {
          id: 3,
          question: "¿Cuántas medallas de oro ganó Michael Phelps en total?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 oros en cuatro Juegos, de 2004 a 2016. Nadie tiene tantos, en ningún deporte.",
        },
        {
          id: 4,
          question: "¿Cada cuántos años se celebran los Juegos Olímpicos de verano?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Cada cuatro años. Ese intervalo tiene nombre, la olimpiada, y solo lo han roto las guerras y el aplazamiento de Tokio.",
        },
        {
          id: 5,
          question: "¿En qué año había acogido París los Juegos antes de 2024?",
          answers: [],
          correctAnswer: "1924",
          correctValue: 1924,
          explanation:
            "1924. Exactamente cien años antes de los Juegos de 2024, de ahí la elección de la fecha.",
        },
        {
          id: 6,
          question: "¿Cuántos deportes había en el programa de París 2024?",
          answers: [],
          correctAnswer: "32",
          correctValue: 32,
          explanation:
            "32 deportes, incluido el breaking por primera y probablemente última vez, ya que no está en el programa de Los Ángeles 2028.",
        },
        {
          id: 7,
          question: "¿Cuántas medallas de oro ganó Francia en París 2024?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16 oros y 64 medallas en total, el mejor resultado francés de la historia olímpica.",
        },
        {
          id: 8,
          question: "¿Cuántos segundos marca el récord mundial de 100 metros de Usain Bolt? (a la centésima)",
          answers: [],
          correctAnswer: "9.58",
          correctValue: 9.58,
          explanation:
            "9,58 segundos, en Berlín en 2009. El récord sigue en pie, y por bastante margen.",
        },
        {
          id: 9,
          question: "¿En qué año se celebraron finalmente los Juegos de Tokio, aplazados un año?",
          answers: [],
          correctAnswer: "2021",
          correctValue: 2021,
          explanation:
            "2021, aunque seguían llamándose Tokio 2020. Es el único aplazamiento de la historia de los Juegos modernos.",
        },
        {
          id: 10,
          question: "¿Cuántos minutos dura un partido de baloncesto olímpico?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "40 minutos, en cuatro cuartos de diez. Son ocho minutos menos que en la NBA, donde los cuartos duran doce.",
        },
        {
          id: 11,
          question: "¿Cuántas medallas en total ganó Francia en París 2024?",
          answers: [],
          correctAnswer: "64",
          correctValue: 64,
          explanation:
            "64: 16 de oro, 26 de plata y 22 de bronce. Es el mejor total de Francia en unos Juegos desde 1900.",
        },
        {
          id: 12,
          question: "¿Cuántas medallas de oro individuales ganó Léon Marchand en París 2024?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Cuatro: los 400 m estilos, los 200 m mariposa, los 200 m braza y los 200 m estilos. También se colgó el bronce en el relevo 4 x 100 m estilos.",
        },
        {
          id: 13,
          question: "¿Cuántos metros mide una vuelta a la pista de atletismo, por la calle 1?",
          answers: [],
          correctAnswer: "400",
          correctValue: 400,
          explanation:
            "400 metros. Por eso los 400 m son una sola vuelta, con salidas escalonadas para que todos corran la misma distancia.",
        },
        {
          id: 14,
          question: "¿Cuántos metros de largo mide una piscina olímpica?",
          answers: [],
          correctAnswer: "50",
          correctValue: 50,
          explanation:
            "50 metros, con 10 calles, de las que se usan 8 en una final. Una prueba de 100 m es, por tanto, ida y vuelta.",
        },
        {
          id: 15,
          question: "¿Cuántos kilómetros mide un maratón?",
          answers: [],
          correctAnswer: "42.195",
          correctValue: 42.195,
          explanation:
            "42,195 km. La distancia se fijó en los Juegos de Londres de 1908 y es oficial desde 1921.",
        },
        {
          id: 16,
          question: "¿Cuántas medallas de oro olímpicas ha ganado Teddy Riner, sumando individual y por equipos?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Cinco: tres individuales, en 2012, 2016 y 2024, y dos por equipos mixtos, en 2021 y 2024. También tiene dos bronces.",
        },
        {
          id: 17,
          question: "¿Cuántas veces fue Usain Bolt campeón olímpico de los 100 metros?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Tres veces: en Pekín 2008, Londres 2012 y Río 2016. Nadie más ha ganado tres veces los 100 m olímpicos.",
        },
        {
          id: 18,
          question: "¿Cuántas pruebas tiene el decatlón?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "Diez, en dos días: cuatro carreras, tres saltos y tres lanzamientos. En mujeres, la prueba olímpica es el heptatlón, con siete pruebas.",
        },
        {
          id: 19,
          question: "¿A cuántos metros de la diana tiran los arqueros en los Juegos Olímpicos?",
          answers: [],
          correctAnswer: "70",
          correctValue: 70,
          explanation:
            "A 70 metros, con arco recurvo. La diana mide 1,22 m de diámetro y el círculo del 10, en el centro, solo 12,2 cm.",
        },
        {
          id: 20,
          question: "¿Cuántos kilos pesa la bala que lanzan los hombres en los Juegos? (con un decimal)",
          answers: [],
          correctAnswer: "7.26",
          correctValue: 7.26,
          explanation:
            "7,26 kg, es decir, 16 libras. La de las mujeres pesa 4 kg.",
        },
      ],
    },
  },
};

export default [quizJO] as TranslatedQuiz[];
