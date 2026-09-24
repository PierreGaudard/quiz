import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur les circuits de Formule 1 : Spa et son Eau Rouge, Monza,
 * Suzuka, Monaco, Silverstone, Interlagos, le Madring de Madrid, etc.
 *
 * Le quiz ordre existant classe quatre circuits par longueur : ici on ne
 * demande aucune longueur, seulement ou se trouve un circuit et ce qui le
 * rend connu. Le Grand Prix de Madrid est date (septembre 2026, premiere
 * course au Madring).
 */
export const quizFormule1Circuits: TranslatedQuiz = {
  slug: "quiz-formule-1-circuits",
  slugs: { en: "formula-1-circuits-quiz", fr: "quiz-formule-1-circuits", es: "quiz-formula-1-circuitos" },
  categorySlug: "sport",
  subcategory: "Formule 1",
  difficulty: "medium",
  coverImage: "/images/cover-formule-1-circuits.webp",
  gameType: "qcm",
  playCount: 4700,
  translations: {
    fr: {
      title: "Quiz F1 : les circuits de légende",
      description:
        "Dix questions sur les circuits de Formule 1 : Spa, Monza, Suzuka, Monaco, Silverstone, Interlagos ou encore le nouveau circuit de Madrid.",
      questions: [
        {
          id: 1,
          image: "/images/q-formule-1-circuits-01.webp",
          question: "Sur quel circuit se trouve le célèbre virage de l'Eau Rouge ?",
          answers: [
            { id: "a", text: "Monza" },
            { id: "b", text: "Silverstone" },
            { id: "c", text: "Spa-Francorchamps" },
            { id: "d", text: "Suzuka" },
          ],
          correctAnswer: "c",
          explanation:
            "À Spa-Francorchamps, en Belgique. Les pilotes le passent presque à fond, en montée, et c'est l'un des passages les plus impressionnants de la saison.",
        },
        {
          id: 2,
          question: "Quel circuit est surnommé « le Temple de la vitesse » ?",
          answers: [
            { id: "a", text: "Monza" },
            { id: "b", text: "Imola" },
            { id: "c", text: "Hockenheim" },
            { id: "d", text: "Le Castellet" },
          ],
          correctAnswer: "a",
          explanation:
            "Monza, près de Milan. Les pilotes y roulent à fond sur la plus grande partie du tour, avec de longues lignes droites, et les voitures y dépassent les 350 km/h.",
        },
        {
          id: 3,
          image: "/images/q-formule-1-circuits-02.webp",
          question: "Quel pays a accueilli la toute première course de F1 de nuit, en 2008 ?",
          answers: [
            { id: "a", text: "Bahreïn" },
            { id: "b", text: "Singapour" },
            { id: "c", text: "Abou Dhabi" },
            { id: "d", text: "Le Qatar" },
          ],
          correctAnswer: "b",
          explanation:
            "Singapour, sur le circuit urbain de Marina Bay, éclairé par des projecteurs. Fernando Alonso a gagné cette première course de nuit, le 28 septembre 2008.",
        },
        {
          id: 4,
          question: "Quel circuit du calendrier a un tracé en forme de 8, avec un pont où la piste passe au-dessus d'elle-même ?",
          answers: [
            { id: "a", text: "Suzuka" },
            { id: "b", text: "Interlagos" },
            { id: "c", text: "Zandvoort" },
            { id: "d", text: "Montréal" },
          ],
          correctAnswer: "a",
          explanation:
            "Suzuka, au Japon. La ligne droite du fond passe sur un pont au-dessus du début du circuit, et c'est le seul tracé en 8 du calendrier.",
        },
        {
          id: 5,
          question: "Dans quelle ville se trouve le circuit Gilles-Villeneuve ?",
          answers: [
            { id: "a", text: "Québec" },
            { id: "b", text: "Toronto" },
            { id: "c", text: "Montréal" },
            { id: "d", text: "Ottawa" },
          ],
          correctAnswer: "c",
          explanation:
            "À Montréal, sur l'île Notre-Dame. Il porte le nom du pilote québécois Gilles Villeneuve, mort en 1982.",
        },
        {
          id: 6,
          image: "/images/q-formule-1-circuits-03.webp",
          question: "Dans quelle ville se trouve le circuit d'Interlagos ?",
          answers: [
            { id: "a", text: "Rio de Janeiro" },
            { id: "b", text: "São Paulo" },
            { id: "c", text: "Buenos Aires" },
            { id: "d", text: "Mexico" },
          ],
          correctAnswer: "b",
          explanation:
            "À São Paulo, au Brésil. Le circuit porte officiellement le nom de José Carlos Pace, un pilote brésilien des années 1970.",
        },
        {
          id: 7,
          image: "/images/q-formule-1-circuits-04.webp",
          question: "Sur quel circuit en ville les F1 traversent-elles un tunnel, au bord de la mer ?",
          answers: [
            { id: "a", text: "Bakou" },
            { id: "b", text: "Las Vegas" },
            { id: "c", text: "Djeddah" },
            { id: "d", text: "Monaco" },
          ],
          correctAnswer: "d",
          explanation:
            "Monaco. Le tunnel passe sous l'hôtel Fairmont, et les pilotes y sortent de l'ombre à pleine vitesse avant de freiner pour la chicane du port.",
        },
        {
          id: 8,
          question: "Sur quel circuit s'est couru le dernier Grand Prix de France, en 2022 ?",
          answers: [
            { id: "a", text: "Magny-Cours" },
            { id: "b", text: "Paul-Ricard" },
            { id: "c", text: "Le Mans" },
            { id: "d", text: "Reims" },
          ],
          correctAnswer: "b",
          explanation:
            "Le circuit Paul-Ricard, au Castellet, dans le Var. Max Verstappen a gagné cette course, et depuis, la France n'a plus de Grand Prix au calendrier.",
        },
        {
          id: 9,
          question: "Quel circuit a accueilli la toute première course du championnat du monde, en 1950 ?",
          answers: [
            { id: "a", text: "Monaco" },
            { id: "b", text: "Monza" },
            { id: "c", text: "Silverstone" },
            { id: "d", text: "Spa-Francorchamps" },
          ],
          correctAnswer: "c",
          explanation:
            "Silverstone, en Angleterre, le 13 mai 1950. C'est un ancien aérodrome militaire, et c'est Giuseppe Farina qui a gagné, sur Alfa Romeo.",
        },
        {
          id: 10,
          question: "Dans quelle ville se trouve le Madring, qui a reçu son premier Grand Prix en septembre 2026 ?",
          answers: [
            { id: "a", text: "Barcelone" },
            { id: "b", text: "Valence" },
            { id: "c", text: "Séville" },
            { id: "d", text: "Madrid" },
          ],
          correctAnswer: "d",
          explanation:
            "À Madrid, autour du parc des expositions IFEMA. Kimi Antonelli a gagné la première course sur ce circuit, le 13 septembre 2026.",
        },
      ],
    },
    en: {
      title: "F1 quiz: legendary circuits",
      description:
        "Ten questions on Formula 1 circuits: Spa, Monza, Suzuka, Monaco, Silverstone, Interlagos and the new track in Madrid.",
      questions: [
        {
          id: 1,
          image: "/images/q-formule-1-circuits-01.webp",
          question: "Which circuit is home to the famous Eau Rouge corner?",
          answers: [
            { id: "a", text: "Monza" },
            { id: "b", text: "Silverstone" },
            { id: "c", text: "Spa-Francorchamps" },
            { id: "d", text: "Suzuka" },
          ],
          correctAnswer: "c",
          explanation:
            "Spa-Francorchamps, in Belgium. Drivers take it almost flat out, uphill, and it's one of the most spectacular bits of track all season.",
        },
        {
          id: 2,
          question: "Which circuit is nicknamed \"the Temple of Speed\"?",
          answers: [
            { id: "a", text: "Monza" },
            { id: "b", text: "Imola" },
            { id: "c", text: "Hockenheim" },
            { id: "d", text: "Paul Ricard" },
          ],
          correctAnswer: "a",
          explanation:
            "Monza, near Milan. Drivers are flat out for most of the lap, the straights are long, and the cars go past 350 km/h.",
        },
        {
          id: 3,
          image: "/images/q-formule-1-circuits-02.webp",
          question: "Which country hosted the first ever F1 night race, in 2008?",
          answers: [
            { id: "a", text: "Bahrain" },
            { id: "b", text: "Singapore" },
            { id: "c", text: "Abu Dhabi" },
            { id: "d", text: "Qatar" },
          ],
          correctAnswer: "b",
          explanation:
            "Singapore, on the floodlit Marina Bay street circuit. Fernando Alonso won that first night race on September 28, 2008.",
        },
        {
          id: 4,
          question: "Which circuit on the calendar is shaped like a figure 8, with a bridge where the track crosses over itself?",
          answers: [
            { id: "a", text: "Suzuka" },
            { id: "b", text: "Interlagos" },
            { id: "c", text: "Zandvoort" },
            { id: "d", text: "Montreal" },
          ],
          correctAnswer: "a",
          explanation:
            "Suzuka, in Japan. The back straight runs over a bridge above the first part of the lap, and it's the only figure-8 track on the calendar.",
        },
        {
          id: 5,
          question: "Which city is the Circuit Gilles Villeneuve in?",
          answers: [
            { id: "a", text: "Quebec City" },
            { id: "b", text: "Toronto" },
            { id: "c", text: "Montreal" },
            { id: "d", text: "Ottawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Montreal, on Île Notre-Dame. It's named after the Quebec driver Gilles Villeneuve, who died in 1982.",
        },
        {
          id: 6,
          image: "/images/q-formule-1-circuits-03.webp",
          question: "Which city is the Interlagos circuit in?",
          answers: [
            { id: "a", text: "Rio de Janeiro" },
            { id: "b", text: "São Paulo" },
            { id: "c", text: "Buenos Aires" },
            { id: "d", text: "Mexico City" },
          ],
          correctAnswer: "b",
          explanation:
            "São Paulo, in Brazil. Its official name honours José Carlos Pace, a Brazilian driver from the 1970s.",
        },
        {
          id: 7,
          image: "/images/q-formule-1-circuits-04.webp",
          question: "On which seaside street circuit do the cars go through a tunnel?",
          answers: [
            { id: "a", text: "Baku" },
            { id: "b", text: "Las Vegas" },
            { id: "c", text: "Jeddah" },
            { id: "d", text: "Monaco" },
          ],
          correctAnswer: "d",
          explanation:
            "Monaco. The tunnel runs under the Fairmont hotel, and the drivers come out of the dark at full speed before braking for the harbour chicane.",
        },
        {
          id: 8,
          question: "Which circuit hosted the last French Grand Prix, in 2022?",
          answers: [
            { id: "a", text: "Magny-Cours" },
            { id: "b", text: "Paul Ricard" },
            { id: "c", text: "Le Mans" },
            { id: "d", text: "Reims" },
          ],
          correctAnswer: "b",
          explanation:
            "Circuit Paul Ricard, at Le Castellet in the south of France. Max Verstappen won, and France hasn't had a Grand Prix on the calendar since.",
        },
        {
          id: 9,
          question: "Which circuit hosted the very first world championship race, in 1950?",
          answers: [
            { id: "a", text: "Monaco" },
            { id: "b", text: "Monza" },
            { id: "c", text: "Silverstone" },
            { id: "d", text: "Spa-Francorchamps" },
          ],
          correctAnswer: "c",
          explanation:
            "Silverstone, in England, on May 13, 1950. It's an old wartime airfield, and Giuseppe Farina won in an Alfa Romeo.",
        },
        {
          id: 10,
          question: "Which city is the Madring in, the track that held its first Grand Prix in September 2026?",
          answers: [
            { id: "a", text: "Barcelona" },
            { id: "b", text: "Valencia" },
            { id: "c", text: "Seville" },
            { id: "d", text: "Madrid" },
          ],
          correctAnswer: "d",
          explanation:
            "Madrid, around the IFEMA exhibition centre. Kimi Antonelli won the first race there on September 13, 2026.",
        },
      ],
    },
    es: {
      title: "Quiz de F1: circuitos de leyenda",
      description:
        "Diez preguntas sobre los circuitos de Fórmula 1: Spa, Monza, Suzuka, Mónaco, Silverstone, Interlagos o el nuevo trazado de Madrid.",
      questions: [
        {
          id: 1,
          image: "/images/q-formule-1-circuits-01.webp",
          question: "¿En qué circuito está la famosa curva de Eau Rouge?",
          answers: [
            { id: "a", text: "Monza" },
            { id: "b", text: "Silverstone" },
            { id: "c", text: "Spa-Francorchamps" },
            { id: "d", text: "Suzuka" },
          ],
          correctAnswer: "c",
          explanation:
            "En Spa-Francorchamps, en Bélgica. Los pilotos la pasan casi a fondo y cuesta arriba, y es uno de los tramos más impresionantes de la temporada.",
        },
        {
          id: 2,
          question: "¿A qué circuito llaman «el Templo de la velocidad»?",
          answers: [
            { id: "a", text: "Monza" },
            { id: "b", text: "Imola" },
            { id: "c", text: "Hockenheim" },
            { id: "d", text: "Paul Ricard" },
          ],
          correctAnswer: "a",
          explanation:
            "A Monza, cerca de Milán. Los pilotos van a fondo casi toda la vuelta, las rectas son largas y los coches pasan de 350 km/h.",
        },
        {
          id: 3,
          image: "/images/q-formule-1-circuits-02.webp",
          question: "¿Qué país acogió la primera carrera nocturna de la F1, en 2008?",
          answers: [
            { id: "a", text: "Baréin" },
            { id: "b", text: "Singapur" },
            { id: "c", text: "Abu Dabi" },
            { id: "d", text: "Catar" },
          ],
          correctAnswer: "b",
          explanation:
            "Singapur, en el circuito urbano de Marina Bay, iluminado con focos. Fernando Alonso ganó esa primera carrera de noche, el 28 de septiembre de 2008.",
        },
        {
          id: 4,
          question: "¿Qué circuito del calendario tiene forma de 8, con un puente donde la pista pasa por encima de sí misma?",
          answers: [
            { id: "a", text: "Suzuka" },
            { id: "b", text: "Interlagos" },
            { id: "c", text: "Zandvoort" },
            { id: "d", text: "Montreal" },
          ],
          correctAnswer: "a",
          explanation:
            "Suzuka, en Japón. La recta de atrás cruza por un puente sobre el principio del circuito, y es el único trazado en 8 del calendario.",
        },
        {
          id: 5,
          question: "¿En qué ciudad está el circuito Gilles Villeneuve?",
          answers: [
            { id: "a", text: "Quebec" },
            { id: "b", text: "Toronto" },
            { id: "c", text: "Montreal" },
            { id: "d", text: "Ottawa" },
          ],
          correctAnswer: "c",
          explanation:
            "En Montreal, en la isla de Notre-Dame. Lleva el nombre del piloto quebequés Gilles Villeneuve, que murió en 1982.",
        },
        {
          id: 6,
          image: "/images/q-formule-1-circuits-03.webp",
          question: "¿En qué ciudad está el circuito de Interlagos?",
          answers: [
            { id: "a", text: "Río de Janeiro" },
            { id: "b", text: "São Paulo" },
            { id: "c", text: "Buenos Aires" },
            { id: "d", text: "Ciudad de México" },
          ],
          correctAnswer: "b",
          explanation:
            "En São Paulo, Brasil. Su nombre oficial es José Carlos Pace, un piloto brasileño de los años setenta.",
        },
        {
          id: 7,
          image: "/images/q-formule-1-circuits-04.webp",
          question: "¿En qué circuito urbano junto al mar pasan los coches por un túnel?",
          answers: [
            { id: "a", text: "Bakú" },
            { id: "b", text: "Las Vegas" },
            { id: "c", text: "Yeda" },
            { id: "d", text: "Mónaco" },
          ],
          correctAnswer: "d",
          explanation:
            "En Mónaco. El túnel pasa bajo el hotel Fairmont, y los pilotos salen de la oscuridad a toda velocidad antes de frenar para la chicane del puerto.",
        },
        {
          id: 8,
          question: "¿En qué circuito se corrió el último Gran Premio de Francia, en 2022?",
          answers: [
            { id: "a", text: "Magny-Cours" },
            { id: "b", text: "Paul Ricard" },
            { id: "c", text: "Le Mans" },
            { id: "d", text: "Reims" },
          ],
          correctAnswer: "b",
          explanation:
            "En el circuito Paul Ricard, en Le Castellet, en el sur de Francia. Ganó Max Verstappen, y desde entonces Francia no tiene Gran Premio en el calendario.",
        },
        {
          id: 9,
          question: "¿Qué circuito acogió la primera carrera del campeonato del mundo, en 1950?",
          answers: [
            { id: "a", text: "Mónaco" },
            { id: "b", text: "Monza" },
            { id: "c", text: "Silverstone" },
            { id: "d", text: "Spa-Francorchamps" },
          ],
          correctAnswer: "c",
          explanation:
            "Silverstone, en Inglaterra, el 13 de mayo de 1950. Es un antiguo aeródromo militar, y ganó Giuseppe Farina con un Alfa Romeo.",
        },
        {
          id: 10,
          question: "¿En qué ciudad está el Madring, que estrenó su Gran Premio en septiembre de 2026?",
          answers: [
            { id: "a", text: "Barcelona" },
            { id: "b", text: "Valencia" },
            { id: "c", text: "Sevilla" },
            { id: "d", text: "Madrid" },
          ],
          correctAnswer: "d",
          explanation:
            "En Madrid, alrededor del recinto ferial de IFEMA. Kimi Antonelli ganó la primera carrera en este circuito, el 13 de septiembre de 2026.",
        },
      ],
    },
  },
};

export default [quizFormule1Circuits] as TranslatedQuiz[];
