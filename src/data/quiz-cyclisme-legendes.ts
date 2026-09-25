import type { TranslatedQuiz } from "./types";

/**
 * Quiz duel sur les grands noms du cyclisme sur route, de Merckx et
 * Anquetil a Pogacar, Vingegaard et Van Vleuten.
 *
 * Le moteur n'affiche que answers[0] et answers[1] : exactement deux
 * propositions par question. Pas de palmares du Tour chiffre (deja dans le
 * quiz estimation sur le Tour) : on compare deux coureurs sur un fait date.
 */
export const quizCyclismeLegendes: TranslatedQuiz = {
  slug: "quiz-cyclisme-legendes",
  slugs: { en: "cycling-legends-quiz", fr: "quiz-cyclisme-legendes", es: "quiz-ciclismo-leyendas" },
  categorySlug: "sport",
  subcategory: "Cyclisme",
  difficulty: "medium",
  coverImage: "/images/cover-cyclisme-legendes.webp",
  gameType: "duel",
  playCount: 3100,
  translations: {
    fr: {
      title: "Duel cyclisme : les légendes de la route",
      description:
        "Vingt duels entre grands coureurs, de Merckx et Anquetil à Pogačar et Vingegaard. Deux noms à chaque fois, un seul est le bon.",
      questions: [
        {
          id: 1,
          question: "Quel coureur était surnommé « le Cannibale » ?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Miguel Indurain" },
          ],
          correctAnswer: "a",
          explanation:
            "Eddy Merckx, parce qu'il voulait tout gagner, même les courses où il n'avait plus besoin de rien. Indurain, on l'appelait plutôt « Big Mig ».",
        },
        {
          id: 2,
          question: "Lequel a gagné le plus de Tours d'Italie ?",
          answers: [
            { id: "a", text: "Bernard Hinault" },
            { id: "b", text: "Eddy Merckx" },
          ],
          correctAnswer: "b",
          explanation:
            "Eddy Merckx, avec cinq Giro, dont trois de suite de 1972 à 1974. Bernard Hinault en a gagné trois.",
        },
        {
          id: 3,
          image: "/images/q-cyclisme-legendes-02.webp",
          question: "Qui a gagné cinq Tours de France d'affilée ?",
          answers: [
            { id: "a", text: "Miguel Indurain" },
            { id: "b", text: "Jacques Anquetil" },
          ],
          correctAnswer: "a",
          explanation:
            "Miguel Indurain, de 1991 à 1995. Anquetil a aussi gagné cinq Tours, mais pas à la suite : en 1957, puis de 1961 à 1964.",
        },
        {
          id: 4,
          image: "/images/q-cyclisme-legendes-01.webp",
          question: "Qui a été le premier coureur à gagner cinq Tours de France ?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Jacques Anquetil" },
          ],
          correctAnswer: "b",
          explanation:
            "Jacques Anquetil, en 1964. Merckx l'a rejoint dix ans plus tard, en 1974.",
        },
        {
          id: 5,
          question: "Quel Français était surnommé « l'éternel second » ?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Raymond Poulidor" },
          ],
          correctAnswer: "b",
          explanation:
            "Raymond Poulidor, monté huit fois sur le podium du Tour sans jamais le gagner, et sans jamais porter le maillot jaune. Ça ne l'a pas empêché d'être l'un des coureurs les plus aimés du public.",
        },
        {
          id: 6,
          question: "Qui a perdu le Tour 1989 pour huit secondes, lors du dernier contre-la-montre ?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Greg LeMond" },
          ],
          correctAnswer: "a",
          explanation:
            "Laurent Fignon. Il avait 50 secondes d'avance avant le chrono final à Paris, et Greg LeMond l'a battu de 58 secondes. C'est toujours le plus petit écart de l'histoire du Tour.",
        },
        {
          id: 7,
          question: "Lequel des deux a gagné son premier Tour de France avant l'autre ?",
          answers: [
            { id: "a", text: "Bernard Hinault" },
            { id: "b", text: "Laurent Fignon" },
          ],
          correctAnswer: "a",
          explanation:
            "Bernard Hinault, en 1978. Laurent Fignon a gagné son premier Tour en 1983, l'année où Hinault, blessé, n'était pas au départ.",
        },
        {
          id: 8,
          image: "/images/q-cyclisme-legendes-03.webp",
          question: "Quel Français a été champion du monde sur route en 2020 et en 2021 ?",
          answers: [
            { id: "a", text: "Julian Alaphilippe" },
            { id: "b", text: "Romain Bardet" },
          ],
          correctAnswer: "a",
          explanation:
            "Julian Alaphilippe, à Imola en 2020 puis en Belgique, à Louvain, en 2021. Romain Bardet, lui, a surtout brillé sur le Tour, où il a fini deuxième en 2016.",
        },
        {
          id: 9,
          image: "/images/q-cyclisme-legendes-04.webp",
          question: "Qui a gagné le Tour d'Italie et le Tour de France la même année, en 2024 ?",
          answers: [
            { id: "a", text: "Jonas Vingegaard" },
            { id: "b", text: "Tadej Pogačar" },
          ],
          correctAnswer: "b",
          explanation:
            "Tadej Pogačar. Personne n'avait réussi ce doublé depuis Marco Pantani en 1998. Vingegaard a fini deuxième du Tour cette année-là.",
        },
        {
          id: 10,
          question: "Qui a gagné le premier Tour de France Femmes, en 2022 ?",
          answers: [
            { id: "a", text: "Annemiek van Vleuten" },
            { id: "b", text: "Marianne Vos" },
          ],
          correctAnswer: "a",
          explanation:
            "Annemiek van Vleuten, une Néerlandaise de 39 ans, qui a gagné les deux étapes de montagne. Marianne Vos, néerlandaise elle aussi, avait pris le maillot vert.",
        },
        {
          id: 11,
          question: "Quel coureur était surnommé « le Blaireau » ?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Bernard Hinault" },
          ],
          correctAnswer: "b",
          explanation:
            "Bernard Hinault. On l'appelait comme ça pour son caractère de bagarreur, qui ne lâchait jamais rien. Laurent Fignon, avec ses lunettes, était plutôt « le Professeur ».",
        },
        {
          id: 12,
          question: "Quel grimpeur italien était surnommé « le Pirate » ?",
          answers: [
            { id: "a", text: "Marco Pantani" },
            { id: "b", text: "Claudio Chiappucci" },
          ],
          correctAnswer: "a",
          explanation:
            "Marco Pantani, à cause de son bandana et de sa boucle d'oreille. Claudio Chiappucci, lui, avait pour surnom « El Diablo ».",
        },
        {
          id: 13,
          question: "Lequel a gagné le plus de Tours d'Espagne ?",
          answers: [
            { id: "a", text: "Alberto Contador" },
            { id: "b", text: "Primož Roglič" },
          ],
          correctAnswer: "b",
          explanation:
            "Primož Roglič, avec quatre Vuelta : 2019, 2020, 2021 et 2024. Il partage le record avec l'Espagnol Roberto Heras. Alberto Contador en a gagné trois.",
        },
        {
          id: 14,
          question: "Qui a gagné Milan-San Remo à sept reprises ?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Roger De Vlaeminck" },
          ],
          correctAnswer: "a",
          explanation:
            "Eddy Merckx, entre 1966 et 1976, et c'est toujours le record. Roger De Vlaeminck a gagné la course trois fois.",
        },
        {
          id: 15,
          question: "Lequel a gagné le plus de Paris-Roubaix ?",
          answers: [
            { id: "a", text: "Fabian Cancellara" },
            { id: "b", text: "Tom Boonen" },
          ],
          correctAnswer: "b",
          explanation:
            "Tom Boonen, avec quatre victoires (2005, 2008, 2009 et 2012), autant que Roger De Vlaeminck. Fabian Cancellara l'a gagné trois fois.",
        },
        {
          id: 16,
          question: "Qui est devenu en 2019 le premier Colombien à gagner le Tour de France ?",
          answers: [
            { id: "a", text: "Egan Bernal" },
            { id: "b", text: "Nairo Quintana" },
          ],
          correctAnswer: "a",
          explanation:
            "Egan Bernal, à 22 ans. Nairo Quintana est monté trois fois sur le podium du Tour, mais sans jamais le gagner.",
        },
        {
          id: 17,
          question: "Qui a gagné le Tour de France en 2022 et en 2023 ?",
          answers: [
            { id: "a", text: "Tadej Pogačar" },
            { id: "b", text: "Jonas Vingegaard" },
          ],
          correctAnswer: "b",
          explanation:
            "Jonas Vingegaard, le Danois de l'équipe Jumbo-Visma. Les deux fois, Tadej Pogačar a fini deuxième.",
        },
        {
          id: 18,
          question: "Qui a été le premier Américain à gagner le Tour de France, en 1986 ?",
          answers: [
            { id: "a", text: "Greg LeMond" },
            { id: "b", text: "Lance Armstrong" },
          ],
          correctAnswer: "a",
          explanation:
            "Greg LeMond, qui a encore gagné en 1989 et en 1990. Lance Armstrong a perdu ses sept titres en 2012, pour dopage.",
        },
        {
          id: 19,
          question: "Quelle Française a gagné le Tour de France Femmes en 2025 ?",
          answers: [
            { id: "a", text: "Juliette Labous" },
            { id: "b", text: "Pauline Ferrand-Prévot" },
          ],
          correctAnswer: "b",
          explanation:
            "Pauline Ferrand-Prévot, première Française à gagner cette course. Elle a fait la différence dans les Alpes, sur les deux dernières étapes de montagne.",
        },
        {
          id: 20,
          question: "Lequel des deux a gagné le Tour de France, le Tour d'Italie et le Tour d'Espagne dans sa carrière ?",
          answers: [
            { id: "a", text: "Miguel Indurain" },
            { id: "b", text: "Alberto Contador" },
          ],
          correctAnswer: "b",
          explanation:
            "Alberto Contador, qui a gagné les trois grands tours plusieurs fois. Miguel Indurain a gagné cinq Tours et deux Giro, mais jamais la Vuelta.",
        },
      ],
    },
    en: {
      title: "Cycling duel: legends of the road",
      description:
        "Twenty head-to-heads between great riders, from Merckx and Anquetil to Pogačar and Vingegaard. Two names each time, only one is right.",
      questions: [
        {
          id: 1,
          question: "Which rider was nicknamed \"the Cannibal\"?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Miguel Indurain" },
          ],
          correctAnswer: "a",
          explanation:
            "Eddy Merckx, because he wanted to win everything, even races where he had nothing left to prove. Indurain was known as \"Big Mig\".",
        },
        {
          id: 2,
          question: "Which one won more Giros d'Italia?",
          answers: [
            { id: "a", text: "Bernard Hinault" },
            { id: "b", text: "Eddy Merckx" },
          ],
          correctAnswer: "b",
          explanation:
            "Eddy Merckx, with five, including three in a row from 1972 to 1974. Bernard Hinault won three.",
        },
        {
          id: 3,
          image: "/images/q-cyclisme-legendes-02.webp",
          question: "Who won five Tours de France in a row?",
          answers: [
            { id: "a", text: "Miguel Indurain" },
            { id: "b", text: "Jacques Anquetil" },
          ],
          correctAnswer: "a",
          explanation:
            "Miguel Indurain, from 1991 to 1995. Anquetil also won five, but not back to back: in 1957, then from 1961 to 1964.",
        },
        {
          id: 4,
          image: "/images/q-cyclisme-legendes-01.webp",
          question: "Who was the first rider to win five Tours de France?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Jacques Anquetil" },
          ],
          correctAnswer: "b",
          explanation:
            "Jacques Anquetil, in 1964. Merckx joined him ten years later, in 1974.",
        },
        {
          id: 5,
          question: "Which French rider was known as \"the eternal second\"?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Raymond Poulidor" },
          ],
          correctAnswer: "b",
          explanation:
            "Raymond Poulidor, who made the Tour podium eight times without ever winning it, and never wore the yellow jersey. French fans loved him all the same.",
        },
        {
          id: 6,
          question: "Who lost the 1989 Tour by eight seconds in the final time trial?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Greg LeMond" },
          ],
          correctAnswer: "a",
          explanation:
            "Laurent Fignon. He led by 50 seconds before the last time trial in Paris, and Greg LeMond beat him by 58. It's still the smallest winning margin in Tour history.",
        },
        {
          id: 7,
          question: "Which of the two won his first Tour de France earlier?",
          answers: [
            { id: "a", text: "Bernard Hinault" },
            { id: "b", text: "Laurent Fignon" },
          ],
          correctAnswer: "a",
          explanation:
            "Bernard Hinault, in 1978. Laurent Fignon won his first in 1983, the year an injured Hinault wasn't at the start.",
        },
        {
          id: 8,
          image: "/images/q-cyclisme-legendes-03.webp",
          question: "Which Frenchman was road world champion in 2020 and 2021?",
          answers: [
            { id: "a", text: "Julian Alaphilippe" },
            { id: "b", text: "Romain Bardet" },
          ],
          correctAnswer: "a",
          explanation:
            "Julian Alaphilippe, in Imola in 2020 and then in Leuven, Belgium, in 2021. Romain Bardet made his name at the Tour, where he finished second in 2016.",
        },
        {
          id: 9,
          image: "/images/q-cyclisme-legendes-04.webp",
          question: "Who won the Giro and the Tour de France in the same year, in 2024?",
          answers: [
            { id: "a", text: "Jonas Vingegaard" },
            { id: "b", text: "Tadej Pogačar" },
          ],
          correctAnswer: "b",
          explanation:
            "Tadej Pogačar. Nobody had pulled off that double since Marco Pantani in 1998. Vingegaard finished second in the Tour that year.",
        },
        {
          id: 10,
          question: "Who won the first Tour de France Femmes, in 2022?",
          answers: [
            { id: "a", text: "Annemiek van Vleuten" },
            { id: "b", text: "Marianne Vos" },
          ],
          correctAnswer: "a",
          explanation:
            "Annemiek van Vleuten, a 39-year-old Dutch rider, who won both mountain stages. Marianne Vos, also Dutch, took the green jersey.",
        },
        {
          id: 11,
          question: "Which rider was nicknamed \"the Badger\"?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Bernard Hinault" },
          ],
          correctAnswer: "b",
          explanation:
            "Bernard Hinault. He got the name for his fighting spirit and for never giving an inch. Laurent Fignon, with his glasses, was known as \"the Professor\".",
        },
        {
          id: 12,
          question: "Which Italian climber was nicknamed \"the Pirate\"?",
          answers: [
            { id: "a", text: "Marco Pantani" },
            { id: "b", text: "Claudio Chiappucci" },
          ],
          correctAnswer: "a",
          explanation:
            "Marco Pantani, because of his bandana and his earring. Claudio Chiappucci's nickname was \"El Diablo\".",
        },
        {
          id: 13,
          question: "Which one won more Vueltas a España?",
          answers: [
            { id: "a", text: "Alberto Contador" },
            { id: "b", text: "Primož Roglič" },
          ],
          correctAnswer: "b",
          explanation:
            "Primož Roglič, with four wins: 2019, 2020, 2021 and 2024. He shares the record with Spain's Roberto Heras. Alberto Contador won three.",
        },
        {
          id: 14,
          question: "Who won Milan-San Remo seven times?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Roger De Vlaeminck" },
          ],
          correctAnswer: "a",
          explanation:
            "Eddy Merckx, between 1966 and 1976, and it's still the record. Roger De Vlaeminck won the race three times.",
        },
        {
          id: 15,
          question: "Which one won more editions of Paris-Roubaix?",
          answers: [
            { id: "a", text: "Fabian Cancellara" },
            { id: "b", text: "Tom Boonen" },
          ],
          correctAnswer: "b",
          explanation:
            "Tom Boonen, with four wins (2005, 2008, 2009 and 2012), the same as Roger De Vlaeminck. Fabian Cancellara won it three times.",
        },
        {
          id: 16,
          question: "Who became the first Colombian to win the Tour de France, in 2019?",
          answers: [
            { id: "a", text: "Egan Bernal" },
            { id: "b", text: "Nairo Quintana" },
          ],
          correctAnswer: "a",
          explanation:
            "Egan Bernal, at 22. Nairo Quintana finished on the Tour podium three times but never won it.",
        },
        {
          id: 17,
          question: "Who won the Tour de France in both 2022 and 2023?",
          answers: [
            { id: "a", text: "Tadej Pogačar" },
            { id: "b", text: "Jonas Vingegaard" },
          ],
          correctAnswer: "b",
          explanation:
            "Jonas Vingegaard, the Dane riding for Jumbo-Visma. Both times, Tadej Pogačar came second.",
        },
        {
          id: 18,
          question: "Who was the first American to win the Tour de France, in 1986?",
          answers: [
            { id: "a", text: "Greg LeMond" },
            { id: "b", text: "Lance Armstrong" },
          ],
          correctAnswer: "a",
          explanation:
            "Greg LeMond, who won again in 1989 and 1990. Lance Armstrong was stripped of his seven titles in 2012 for doping.",
        },
        {
          id: 19,
          question: "Which French rider won the Tour de France Femmes in 2025?",
          answers: [
            { id: "a", text: "Juliette Labous" },
            { id: "b", text: "Pauline Ferrand-Prévot" },
          ],
          correctAnswer: "b",
          explanation:
            "Pauline Ferrand-Prévot, the first French winner of the race. She made the difference in the Alps, on the last two mountain stages.",
        },
        {
          id: 20,
          question: "Which of the two won the Tour de France, the Giro d'Italia and the Vuelta during his career?",
          answers: [
            { id: "a", text: "Miguel Indurain" },
            { id: "b", text: "Alberto Contador" },
          ],
          correctAnswer: "b",
          explanation:
            "Alberto Contador, who won all three grand tours, some of them more than once. Miguel Indurain won five Tours and two Giros but never the Vuelta.",
        },
      ],
    },
    es: {
      title: "Duelo de ciclismo: leyendas de la ruta",
      description:
        "Veinte duelos entre grandes ciclistas, de Merckx y Anquetil a Pogačar y Vingegaard. Dos nombres cada vez, y solo uno es el bueno.",
      questions: [
        {
          id: 1,
          question: "¿A qué ciclista apodaban «el Caníbal»?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Miguel Induráin" },
          ],
          correctAnswer: "a",
          explanation:
            "A Eddy Merckx, porque lo quería ganar todo, incluso las carreras en las que ya no necesitaba nada. A Induráin lo llamaban «Big Mig».",
        },
        {
          id: 2,
          question: "¿Quién ganó más Giros de Italia?",
          answers: [
            { id: "a", text: "Bernard Hinault" },
            { id: "b", text: "Eddy Merckx" },
          ],
          correctAnswer: "b",
          explanation:
            "Eddy Merckx, con cinco, tres de ellos seguidos entre 1972 y 1974. Bernard Hinault ganó tres.",
        },
        {
          id: 3,
          image: "/images/q-cyclisme-legendes-02.webp",
          question: "¿Quién ganó cinco Tours de Francia seguidos?",
          answers: [
            { id: "a", text: "Miguel Induráin" },
            { id: "b", text: "Jacques Anquetil" },
          ],
          correctAnswer: "a",
          explanation:
            "Miguel Induráin, de 1991 a 1995. Anquetil también ganó cinco, pero no seguidos: en 1957 y luego de 1961 a 1964.",
        },
        {
          id: 4,
          image: "/images/q-cyclisme-legendes-01.webp",
          question: "¿Quién fue el primer ciclista en ganar cinco Tours de Francia?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Jacques Anquetil" },
          ],
          correctAnswer: "b",
          explanation:
            "Jacques Anquetil, en 1964. Merckx lo igualó diez años después, en 1974.",
        },
        {
          id: 5,
          question: "¿A qué ciclista francés llamaban «el eterno segundo»?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Raymond Poulidor" },
          ],
          correctAnswer: "b",
          explanation:
            "A Raymond Poulidor, que subió ocho veces al podio del Tour sin ganarlo nunca, y sin llevar nunca el maillot amarillo. Aun así, fue uno de los ciclistas más queridos por el público francés.",
        },
        {
          id: 6,
          question: "¿Quién perdió el Tour de 1989 por ocho segundos en la última contrarreloj?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Greg LeMond" },
          ],
          correctAnswer: "a",
          explanation:
            "Laurent Fignon. Llegaba con 50 segundos de ventaja a la crono final de París, y Greg LeMond le sacó 58. Sigue siendo la diferencia más pequeña de la historia del Tour.",
        },
        {
          id: 7,
          question: "¿Cuál de los dos ganó antes su primer Tour de Francia?",
          answers: [
            { id: "a", text: "Bernard Hinault" },
            { id: "b", text: "Laurent Fignon" },
          ],
          correctAnswer: "a",
          explanation:
            "Bernard Hinault, en 1978. Laurent Fignon ganó el suyo en 1983, el año en que Hinault, lesionado, no tomó la salida.",
        },
        {
          id: 8,
          image: "/images/q-cyclisme-legendes-03.webp",
          question: "¿Qué francés fue campeón del mundo en ruta en 2020 y en 2021?",
          answers: [
            { id: "a", text: "Julian Alaphilippe" },
            { id: "b", text: "Romain Bardet" },
          ],
          correctAnswer: "a",
          explanation:
            "Julian Alaphilippe, en Imola en 2020 y en Lovaina, Bélgica, en 2021. Romain Bardet destacó sobre todo en el Tour, donde fue segundo en 2016.",
        },
        {
          id: 9,
          image: "/images/q-cyclisme-legendes-04.webp",
          question: "¿Quién ganó el Giro y el Tour de Francia el mismo año, en 2024?",
          answers: [
            { id: "a", text: "Jonas Vingegaard" },
            { id: "b", text: "Tadej Pogačar" },
          ],
          correctAnswer: "b",
          explanation:
            "Tadej Pogačar. Nadie hacía ese doblete desde Marco Pantani en 1998. Vingegaard fue segundo en el Tour ese año.",
        },
        {
          id: 10,
          question: "¿Quién ganó el primer Tour de Francia Femenino, en 2022?",
          answers: [
            { id: "a", text: "Annemiek van Vleuten" },
            { id: "b", text: "Marianne Vos" },
          ],
          correctAnswer: "a",
          explanation:
            "Annemiek van Vleuten, una neerlandesa de 39 años que ganó las dos etapas de montaña. Marianne Vos, también neerlandesa, se llevó el maillot verde.",
        },
        {
          id: 11,
          question: "¿A qué ciclista apodaban «el Tejón»?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Bernard Hinault" },
          ],
          correctAnswer: "b",
          explanation:
            "A Bernard Hinault, por su carácter peleón: no se rendía nunca. A Laurent Fignon, con sus gafas, lo llamaban más bien «el Profesor».",
        },
        {
          id: 12,
          question: "¿A qué escalador italiano apodaban «el Pirata»?",
          answers: [
            { id: "a", text: "Marco Pantani" },
            { id: "b", text: "Claudio Chiappucci" },
          ],
          correctAnswer: "a",
          explanation:
            "A Marco Pantani, por su pañuelo en la cabeza y su pendiente. A Claudio Chiappucci lo llamaban «El Diablo».",
        },
        {
          id: 13,
          question: "¿Quién ganó más Vueltas a España?",
          answers: [
            { id: "a", text: "Alberto Contador" },
            { id: "b", text: "Primož Roglič" },
          ],
          correctAnswer: "b",
          explanation:
            "Primož Roglič, con cuatro: 2019, 2020, 2021 y 2024. Comparte el récord con Roberto Heras. Alberto Contador ganó tres.",
        },
        {
          id: 14,
          question: "¿Quién ganó la Milán-San Remo siete veces?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Roger De Vlaeminck" },
          ],
          correctAnswer: "a",
          explanation:
            "Eddy Merckx, entre 1966 y 1976, y sigue siendo el récord. Roger De Vlaeminck la ganó tres veces.",
        },
        {
          id: 15,
          question: "¿Quién ganó más veces la París-Roubaix?",
          answers: [
            { id: "a", text: "Fabian Cancellara" },
            { id: "b", text: "Tom Boonen" },
          ],
          correctAnswer: "b",
          explanation:
            "Tom Boonen, con cuatro victorias (2005, 2008, 2009 y 2012), las mismas que Roger De Vlaeminck. Fabian Cancellara la ganó tres veces.",
        },
        {
          id: 16,
          question: "¿Quién fue en 2019 el primer colombiano en ganar el Tour de Francia?",
          answers: [
            { id: "a", text: "Egan Bernal" },
            { id: "b", text: "Nairo Quintana" },
          ],
          correctAnswer: "a",
          explanation:
            "Egan Bernal, con 22 años. Nairo Quintana subió tres veces al podio del Tour, pero nunca lo ganó.",
        },
        {
          id: 17,
          question: "¿Quién ganó el Tour de Francia en 2022 y en 2023?",
          answers: [
            { id: "a", text: "Tadej Pogačar" },
            { id: "b", text: "Jonas Vingegaard" },
          ],
          correctAnswer: "b",
          explanation:
            "Jonas Vingegaard, el danés del Jumbo-Visma. Las dos veces, Tadej Pogačar terminó segundo.",
        },
        {
          id: 18,
          question: "¿Quién fue el primer estadounidense en ganar el Tour de Francia, en 1986?",
          answers: [
            { id: "a", text: "Greg LeMond" },
            { id: "b", text: "Lance Armstrong" },
          ],
          correctAnswer: "a",
          explanation:
            "Greg LeMond, que volvió a ganar en 1989 y en 1990. A Lance Armstrong le quitaron sus siete títulos en 2012 por dopaje.",
        },
        {
          id: 19,
          question: "¿Qué francesa ganó el Tour de Francia Femenino en 2025?",
          answers: [
            { id: "a", text: "Juliette Labous" },
            { id: "b", text: "Pauline Ferrand-Prévot" },
          ],
          correctAnswer: "b",
          explanation:
            "Pauline Ferrand-Prévot, la primera francesa en ganar esta carrera. Marcó la diferencia en los Alpes, en las dos últimas etapas de montaña.",
        },
        {
          id: 20,
          question: "¿Cuál de los dos ganó el Tour, el Giro y la Vuelta a lo largo de su carrera?",
          answers: [
            { id: "a", text: "Miguel Induráin" },
            { id: "b", text: "Alberto Contador" },
          ],
          correctAnswer: "b",
          explanation:
            "Alberto Contador, que ganó las tres grandes vueltas, algunas más de una vez. Miguel Induráin ganó cinco Tours y dos Giros, pero nunca la Vuelta.",
        },
      ],
    },
  },
};

export default [quizCyclismeLegendes] as TranslatedQuiz[];
