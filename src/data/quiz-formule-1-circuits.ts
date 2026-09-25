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
        "Vingt questions sur les circuits de Formule 1 : Spa, Monza, Suzuka, Monaco, Silverstone, Interlagos ou encore le nouveau circuit de Madrid.",
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
        {
          id: 11,
          question: "Dans quel pays se trouve le circuit de Zandvoort ?",
          answers: [
            { id: "a", text: "La Belgique" },
            { id: "b", text: "L'Allemagne" },
            { id: "c", text: "Les Pays-Bas" },
            { id: "d", text: "Le Danemark" },
          ],
          correctAnswer: "c",
          explanation:
            "Aux Pays-Bas, au bord de la mer du Nord, au milieu des dunes. Il a retrouvé le calendrier en 2021, après 36 ans d'absence, avec des virages relevés.",
        },
        {
          id: 12,
          question: "Quel Grand Prix se court sur le circuit de Yas Marina ?",
          answers: [
            { id: "a", text: "Bahreïn" },
            { id: "b", text: "Qatar" },
            { id: "c", text: "Arabie saoudite" },
            { id: "d", text: "Abu Dhabi" },
          ],
          correctAnswer: "d",
          explanation:
            "Le Grand Prix d'Abu Dhabi, depuis 2009. La course commence en fin d'après-midi et finit de nuit, et c'est souvent la dernière de la saison.",
        },
        {
          id: 13,
          question: "Près de quelle capitale se trouve le Hungaroring ?",
          answers: [
            { id: "a", text: "Budapest" },
            { id: "b", text: "Prague" },
            { id: "c", text: "Vienne" },
            { id: "d", text: "Bratislava" },
          ],
          correctAnswer: "a",
          explanation:
            "Budapest. Le Grand Prix de Hongrie existe depuis 1986 : c'était le premier Grand Prix organisé derrière le rideau de fer.",
        },
        {
          id: 14,
          question: "Dans quel pays se trouve le Red Bull Ring ?",
          answers: [
            { id: "a", text: "L'Allemagne" },
            { id: "b", text: "L'Autriche" },
            { id: "c", text: "La Suisse" },
            { id: "d", text: "L'Italie" },
          ],
          correctAnswer: "b",
          explanation:
            "En Autriche, à Spielberg, en Styrie. Le circuit s'appelait autrefois l'Österreichring, puis l'A1-Ring, avant d'être racheté par Red Bull.",
        },
        {
          id: 15,
          question: "Dans quelle ville se trouve le Circuit des Amériques ?",
          answers: [
            { id: "a", text: "Austin" },
            { id: "b", text: "Miami" },
            { id: "c", text: "Indianapolis" },
            { id: "d", text: "Las Vegas" },
          ],
          correctAnswer: "a",
          explanation:
            "À Austin, au Texas. Il accueille le Grand Prix des États-Unis depuis 2012, et son premier virage monte en côte, très raide.",
        },
        {
          id: 16,
          question: "Dans quelle ville se court le Grand Prix d'Australie, autour du lac d'Albert Park ?",
          answers: [
            { id: "a", text: "Sydney" },
            { id: "b", text: "Melbourne" },
            { id: "c", text: "Adélaïde" },
            { id: "d", text: "Perth" },
          ],
          correctAnswer: "b",
          explanation:
            "À Melbourne, depuis 1996. Avant, le Grand Prix d'Australie se courait dans les rues d'Adélaïde.",
        },
        {
          id: 17,
          question: "Quel circuit italien porte le nom d'Enzo Ferrari et de son fils Dino ?",
          answers: [
            { id: "a", text: "Monza" },
            { id: "b", text: "Mugello" },
            { id: "c", text: "Imola" },
            { id: "d", text: "Misano" },
          ],
          correctAnswer: "c",
          explanation:
            "Imola, dont le nom complet est Autodromo Enzo e Dino Ferrari. Il a accueilli le Grand Prix de Saint-Marin puis celui d'Émilie-Romagne.",
        },
        {
          id: 18,
          question: "Dans quelle ville se court le Grand Prix d'Azerbaïdjan, en partie dans la vieille ville ?",
          answers: [
            { id: "a", text: "Bakou" },
            { id: "b", text: "Tbilissi" },
            { id: "c", text: "Erevan" },
            { id: "d", text: "Astana" },
          ],
          correctAnswer: "a",
          explanation:
            "À Bakou, depuis 2016. Le tracé passe dans une portion très étroite le long des remparts de la vieille ville, et sa ligne droite fait plus de 2 km.",
        },
        {
          id: 19,
          question: "Quel Grand Prix se court de nuit, le samedi, sur une piste qui longe les casinos du Strip ?",
          answers: [
            { id: "a", text: "Miami" },
            { id: "b", text: "Singapour" },
            { id: "c", text: "Las Vegas" },
            { id: "d", text: "Macao" },
          ],
          correctAnswer: "c",
          explanation:
            "Las Vegas, depuis 2023. Les F1 passent devant les grands hôtels-casinos du Strip, et la course a lieu le samedi soir, heure locale.",
        },
        {
          id: 20,
          question: "Près de quelle grande ville se trouve le circuit de Monza ?",
          answers: [
            { id: "a", text: "Turin" },
            { id: "b", text: "Rome" },
            { id: "c", text: "Bologne" },
            { id: "d", text: "Milan" },
          ],
          correctAnswer: "d",
          explanation:
            "Milan. Le circuit est construit dans le parc de Monza, à une quinzaine de kilomètres au nord de la ville, et il date de 1922.",
        },
      ],
    },
    en: {
      title: "F1 quiz: legendary circuits",
      description:
        "Twenty questions on Formula 1 circuits: Spa, Monza, Suzuka, Monaco, Silverstone, Interlagos and the new track in Madrid.",
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
        {
          id: 11,
          question: "Which country is the Zandvoort circuit in?",
          answers: [
            { id: "a", text: "Belgium" },
            { id: "b", text: "Germany" },
            { id: "c", text: "The Netherlands" },
            { id: "d", text: "Denmark" },
          ],
          correctAnswer: "c",
          explanation:
            "The Netherlands, among the dunes by the North Sea. It returned to the calendar in 2021, after 36 years away, with banked corners.",
        },
        {
          id: 12,
          question: "Which Grand Prix is held at the Yas Marina circuit?",
          answers: [
            { id: "a", text: "Bahrain" },
            { id: "b", text: "Qatar" },
            { id: "c", text: "Saudi Arabia" },
            { id: "d", text: "Abu Dhabi" },
          ],
          correctAnswer: "d",
          explanation:
            "The Abu Dhabi Grand Prix, since 2009. The race starts late in the afternoon and ends under the lights, and it is often the last one of the season.",
        },
        {
          id: 13,
          question: "Which capital city is the Hungaroring close to?",
          answers: [
            { id: "a", text: "Budapest" },
            { id: "b", text: "Prague" },
            { id: "c", text: "Vienna" },
            { id: "d", text: "Bratislava" },
          ],
          correctAnswer: "a",
          explanation:
            "Budapest. The Hungarian Grand Prix started in 1986, the first Grand Prix held behind the Iron Curtain.",
        },
        {
          id: 14,
          question: "Which country is the Red Bull Ring in?",
          answers: [
            { id: "a", text: "Germany" },
            { id: "b", text: "Austria" },
            { id: "c", text: "Switzerland" },
            { id: "d", text: "Italy" },
          ],
          correctAnswer: "b",
          explanation:
            "Austria, at Spielberg in Styria. It used to be called the Österreichring, then the A1-Ring, before Red Bull bought it.",
        },
        {
          id: 15,
          question: "Which city is the Circuit of the Americas in?",
          answers: [
            { id: "a", text: "Austin" },
            { id: "b", text: "Miami" },
            { id: "c", text: "Indianapolis" },
            { id: "d", text: "Las Vegas" },
          ],
          correctAnswer: "a",
          explanation:
            "Austin, Texas. It has hosted the United States Grand Prix since 2012, and its first corner sits at the top of a steep climb.",
        },
        {
          id: 16,
          question: "Which city hosts the Australian Grand Prix, around the lake at Albert Park?",
          answers: [
            { id: "a", text: "Sydney" },
            { id: "b", text: "Melbourne" },
            { id: "c", text: "Adelaide" },
            { id: "d", text: "Perth" },
          ],
          correctAnswer: "b",
          explanation:
            "Melbourne, since 1996. Before that, the Australian Grand Prix was held on the streets of Adelaide.",
        },
        {
          id: 17,
          question: "Which Italian circuit is named after Enzo Ferrari and his son Dino?",
          answers: [
            { id: "a", text: "Monza" },
            { id: "b", text: "Mugello" },
            { id: "c", text: "Imola" },
            { id: "d", text: "Misano" },
          ],
          correctAnswer: "c",
          explanation:
            "Imola, whose full name is Autodromo Enzo e Dino Ferrari. It hosted the San Marino Grand Prix and later the Emilia-Romagna Grand Prix.",
        },
        {
          id: 18,
          question: "Which city hosts the Azerbaijan Grand Prix, partly through its old town?",
          answers: [
            { id: "a", text: "Baku" },
            { id: "b", text: "Tbilisi" },
            { id: "c", text: "Yerevan" },
            { id: "d", text: "Astana" },
          ],
          correctAnswer: "a",
          explanation:
            "Baku, since 2016. The track squeezes through a very narrow section along the old city walls, and its main straight is over 2 km long.",
        },
        {
          id: 19,
          question: "Which Grand Prix runs at night on a Saturday, on a track that goes past the casinos of the Strip?",
          answers: [
            { id: "a", text: "Miami" },
            { id: "b", text: "Singapore" },
            { id: "c", text: "Las Vegas" },
            { id: "d", text: "Macau" },
          ],
          correctAnswer: "c",
          explanation:
            "Las Vegas, since 2023. The cars race past the big casino hotels on the Strip, and the race takes place on Saturday night, local time.",
        },
        {
          id: 20,
          question: "Which big city is the Monza circuit close to?",
          answers: [
            { id: "a", text: "Turin" },
            { id: "b", text: "Rome" },
            { id: "c", text: "Bologna" },
            { id: "d", text: "Milan" },
          ],
          correctAnswer: "d",
          explanation:
            "Milan. The track was built in 1922 inside the park of Monza, about fifteen kilometres north of the city.",
        },
      ],
    },
    es: {
      title: "Quiz de F1: circuitos de leyenda",
      description:
        "Veinte preguntas sobre los circuitos de Fórmula 1: Spa, Monza, Suzuka, Mónaco, Silverstone, Interlagos o el nuevo trazado de Madrid.",
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
        {
          id: 11,
          question: "¿En qué país está el circuito de Zandvoort?",
          answers: [
            { id: "a", text: "Bélgica" },
            { id: "b", text: "Alemania" },
            { id: "c", text: "Países Bajos" },
            { id: "d", text: "Dinamarca" },
          ],
          correctAnswer: "c",
          explanation:
            "En los Países Bajos, entre dunas junto al mar del Norte. Volvió al calendario en 2021, tras 36 años de ausencia, con curvas peraltadas.",
        },
        {
          id: 12,
          question: "¿Qué Gran Premio se corre en el circuito de Yas Marina?",
          answers: [
            { id: "a", text: "Baréin" },
            { id: "b", text: "Catar" },
            { id: "c", text: "Arabia Saudí" },
            { id: "d", text: "Abu Dabi" },
          ],
          correctAnswer: "d",
          explanation:
            "El Gran Premio de Abu Dabi, desde 2009. Empieza al final de la tarde, acaba de noche y muchas veces cierra la temporada.",
        },
        {
          id: 13,
          question: "¿Cerca de qué capital está el Hungaroring?",
          answers: [
            { id: "a", text: "Budapest" },
            { id: "b", text: "Praga" },
            { id: "c", text: "Viena" },
            { id: "d", text: "Bratislava" },
          ],
          correctAnswer: "a",
          explanation:
            "De Budapest. El Gran Premio de Hungría se corre desde 1986 y fue el primero organizado al otro lado del telón de acero.",
        },
        {
          id: 14,
          question: "¿En qué país está el Red Bull Ring?",
          answers: [
            { id: "a", text: "Alemania" },
            { id: "b", text: "Austria" },
            { id: "c", text: "Suiza" },
            { id: "d", text: "Italia" },
          ],
          correctAnswer: "b",
          explanation:
            "En Austria, en Spielberg, en la región de Estiria. Antes se llamaba Österreichring y luego A1-Ring, hasta que lo compró Red Bull.",
        },
        {
          id: 15,
          question: "¿En qué ciudad está el Circuito de las Américas?",
          answers: [
            { id: "a", text: "Austin" },
            { id: "b", text: "Miami" },
            { id: "c", text: "Indianápolis" },
            { id: "d", text: "Las Vegas" },
          ],
          correctAnswer: "a",
          explanation:
            "En Austin, Texas. Recibe el Gran Premio de Estados Unidos desde 2012 y su primera curva está en lo alto de una subida muy empinada.",
        },
        {
          id: 16,
          question: "¿En qué ciudad se corre el Gran Premio de Australia, alrededor del lago de Albert Park?",
          answers: [
            { id: "a", text: "Sídney" },
            { id: "b", text: "Melbourne" },
            { id: "c", text: "Adelaida" },
            { id: "d", text: "Perth" },
          ],
          correctAnswer: "b",
          explanation:
            "En Melbourne, desde 1996. Antes, el Gran Premio de Australia se disputaba en las calles de Adelaida.",
        },
        {
          id: 17,
          question: "¿Qué circuito italiano lleva el nombre de Enzo Ferrari y de su hijo Dino?",
          answers: [
            { id: "a", text: "Monza" },
            { id: "b", text: "Mugello" },
            { id: "c", text: "Imola" },
            { id: "d", text: "Misano" },
          ],
          correctAnswer: "c",
          explanation:
            "Imola, cuyo nombre completo es Autodromo Enzo e Dino Ferrari. Acogió el Gran Premio de San Marino y después el de Emilia-Romaña.",
        },
        {
          id: 18,
          question: "¿En qué ciudad se corre el Gran Premio de Azerbaiyán, en parte por el casco antiguo?",
          answers: [
            { id: "a", text: "Bakú" },
            { id: "b", text: "Tiflis" },
            { id: "c", text: "Ereván" },
            { id: "d", text: "Astaná" },
          ],
          correctAnswer: "a",
          explanation:
            "En Bakú, desde 2016. El trazado pasa por un tramo muy estrecho junto a las murallas del casco antiguo, y su recta mide más de 2 km.",
        },
        {
          id: 19,
          question: "¿Qué Gran Premio se corre de noche, un sábado, por un trazado que pasa junto a los casinos del Strip?",
          answers: [
            { id: "a", text: "Miami" },
            { id: "b", text: "Singapur" },
            { id: "c", text: "Las Vegas" },
            { id: "d", text: "Macao" },
          ],
          correctAnswer: "c",
          explanation:
            "Las Vegas, desde 2023. Los coches pasan delante de los grandes hoteles casino del Strip y la carrera es el sábado por la noche, hora local.",
        },
        {
          id: 20,
          question: "¿Cerca de qué gran ciudad está el circuito de Monza?",
          answers: [
            { id: "a", text: "Turín" },
            { id: "b", text: "Roma" },
            { id: "c", text: "Bolonia" },
            { id: "d", text: "Milán" },
          ],
          correctAnswer: "d",
          explanation:
            "De Milán. El circuito se construyó en 1922 dentro del parque de Monza, a unos quince kilómetros al norte de la ciudad.",
        },
      ],
    },
  },
};

export default [quizFormule1Circuits] as TranslatedQuiz[];
