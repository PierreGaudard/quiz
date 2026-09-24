import type { TranslatedQuiz } from "./types";

/**
 * Quiz estimation sur le Moyen Âge : des années de batailles et de traités,
 * et quelques chiffres sur des monuments (tours de Carcassonne, longueur de
 * la tapisserie de Bayeux, hauteur des tours de Notre-Dame).
 *
 * Le moteur accepte une réponse à 5 % près, en 5 essais : les années se
 * jouent donc avec un peu de marge, les petits nombres presque au chiffre
 * exact. La bataille de Poitiers est datée de 732 par la tradition, certains
 * historiens penchent pour 733 : la tolérance couvre les deux, et
 * l'explication le dit.
 */
export const quizMoyenAgeDates: TranslatedQuiz = {
  slug: "quiz-moyen-age-dates",
  slugs: { en: "middle-ages-dates-quiz", fr: "quiz-moyen-age-dates", es: "quiz-edad-media-fechas" },
  categorySlug: "histoire",
  subcategory: "Moyen Âge",
  difficulty: "hard",
  coverImage: "/images/cover-moyen-age-dates.webp",
  gameType: "estimation",
  playCount: 3600,
  translations: {
    fr: {
      title: "Moyen Âge : les dates et les chiffres",
      description:
        "Dix nombres à trouver sur le Moyen Âge : des années de batailles, la longueur de la tapisserie de Bayeux, les tours de Carcassonne, etc.",
      questions: [
        {
          id: 1,
          question: "En quelle année Charles Martel arrête-t-il une armée venue d'Al-Andalus, près de Poitiers ?",
          answers: [],
          correctAnswer: "732",
          correctValue: 732,
          explanation:
            "En 732, selon la date retenue par la tradition. Quelques historiens la placent plutôt en 733. La bataille a lieu en octobre, entre Tours et Poitiers.",
        },
        {
          id: 2,
          question: "En quelle année le traité de Verdun partage-t-il l'empire de Charlemagne entre ses trois petits-fils ?",
          answers: [],
          correctAnswer: "843",
          correctValue: 843,
          explanation:
            "En 843. Charles le Chauve reçoit la partie ouest, Louis le Germanique la partie est, et Lothaire une bande au milieu, avec le titre d'empereur.",
        },
        {
          id: 3,
          image: "/images/q-moyen-age-dates-03.webp",
          question: "Combien de tours compte la double enceinte de la cité de Carcassonne ?",
          answers: [],
          correctAnswer: "52",
          correctValue: 52,
          explanation:
            "52 tours, réparties sur près de 3 km de remparts. La cité est inscrite au patrimoine mondial de l'Unesco depuis 1997.",
        },
        {
          id: 4,
          image: "/images/q-moyen-age-dates-04.webp",
          question: "Combien de mètres mesure, environ, la tapisserie de Bayeux ?",
          answers: [],
          correctAnswer: "68",
          correctValue: 68,
          explanation:
            "68,38 mètres exactement, pour une cinquantaine de centimètres de haut. Elle raconte la conquête de l'Angleterre par Guillaume le Conquérant, en 1066.",
        },
        {
          id: 5,
          question: "En quelle année a lieu la bataille d'Azincourt, pendant la guerre de Cent Ans ?",
          answers: [],
          correctAnswer: "1415",
          correctValue: 1415,
          explanation:
            "En 1415, le 25 octobre. L'armée anglaise d'Henri V bat une armée française bien plus nombreuse, surtout grâce à ses archers.",
        },
        {
          id: 6,
          question: "En quelle année a lieu la bataille de Crécy, l'une des premières grandes défaites françaises de la guerre de Cent Ans ?",
          answers: [],
          correctAnswer: "1346",
          correctValue: 1346,
          explanation:
            "En 1346, le 26 août. Le roi d'Angleterre Édouard III y bat Philippe VI de Valois.",
        },
        {
          id: 7,
          image: "/images/q-moyen-age-dates-07.webp",
          question: "En quelle année l'arrière-garde de Charlemagne tombe-t-elle dans une embuscade au col de Roncevaux ?",
          answers: [],
          correctAnswer: "778",
          correctValue: 778,
          explanation:
            "En 778, le 15 août. Le comte Roland y meurt, et l'épisode inspire trois siècles plus tard la Chanson de Roland.",
        },
        {
          id: 8,
          image: "/images/q-moyen-age-dates-08.webp",
          question: "Combien de mètres de haut font les tours de Notre-Dame de Paris ?",
          answers: [],
          correctAnswer: "69",
          correctValue: 69,
          explanation:
            "69 mètres. Elles ont été construites au XIIIe siècle et elles ont résisté à l'incendie d'avril 2019, qui a détruit la flèche et la toiture.",
        },
        {
          id: 9,
          question: "En quelle année meurt Charlemagne, à Aix-la-Chapelle ?",
          answers: [],
          correctAnswer: "814",
          correctValue: 814,
          explanation:
            "En 814, le 28 janvier, à Aix-la-Chapelle, sa capitale. Son fils Louis le Pieux lui succède.",
        },
        {
          id: 10,
          image: "/images/q-moyen-age-dates-10.webp",
          question: "Quel âge avait environ Jeanne d'Arc à sa mort, en 1431 ?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "Environ 19 ans. Elle est née vers 1412 à Domrémy, et lors de son procès elle dit elle-même avoir « environ 19 ans ».",
        },
      ],
    },
    en: {
      title: "The Middle Ages in dates and numbers",
      description:
        "Ten numbers to guess about the Middle Ages: the years of battles, the length of the Bayeux Tapestry, the towers of Carcassonne, and more.",
      questions: [
        {
          id: 1,
          question: "In what year did Charles Martel stop an army from Al-Andalus near Poitiers?",
          answers: [],
          correctAnswer: "732",
          correctValue: 732,
          explanation:
            "In 732, the traditional date. Some historians place it in 733 instead. The battle took place in October, between Tours and Poitiers.",
        },
        {
          id: 2,
          question: "In what year did the Treaty of Verdun split Charlemagne's empire between his three grandsons?",
          answers: [],
          correctAnswer: "843",
          correctValue: 843,
          explanation:
            "In 843. Charles the Bald got the west, Louis the German the east, and Lothair a strip in the middle, with the title of emperor.",
        },
        {
          id: 3,
          image: "/images/q-moyen-age-dates-03.webp",
          question: "How many towers are there on the double walls of the Cité de Carcassonne?",
          answers: [],
          correctAnswer: "52",
          correctValue: 52,
          explanation:
            "52 towers, spread along nearly 3 km of ramparts. The Cité has been a UNESCO World Heritage Site since 1997.",
        },
        {
          id: 4,
          image: "/images/q-moyen-age-dates-04.webp",
          question: "Roughly how many metres long is the Bayeux Tapestry?",
          answers: [],
          correctAnswer: "68",
          correctValue: 68,
          explanation:
            "68.38 metres exactly, and about fifty centimetres high. It tells the story of William the Conqueror's conquest of England in 1066.",
        },
        {
          id: 5,
          question: "In what year was the Battle of Agincourt, during the Hundred Years' War?",
          answers: [],
          correctAnswer: "1415",
          correctValue: 1415,
          explanation:
            "In 1415, on 25 October. Henry V's English army beat a much larger French army, largely thanks to its archers.",
        },
        {
          id: 6,
          question: "In what year was the Battle of Crécy, one of the first big French defeats of the Hundred Years' War?",
          answers: [],
          correctAnswer: "1346",
          correctValue: 1346,
          explanation:
            "In 1346, on 26 August. King Edward III of England defeated Philip VI of France there.",
        },
        {
          id: 7,
          image: "/images/q-moyen-age-dates-07.webp",
          question: "In what year was Charlemagne's rearguard ambushed at the Roncevaux Pass?",
          answers: [],
          correctAnswer: "778",
          correctValue: 778,
          explanation:
            "In 778, on 15 August. Count Roland died there, and three centuries later the episode inspired the Song of Roland.",
        },
        {
          id: 8,
          image: "/images/q-moyen-age-dates-08.webp",
          question: "How many metres tall are the towers of Notre-Dame de Paris?",
          answers: [],
          correctAnswer: "69",
          correctValue: 69,
          explanation:
            "69 metres. They were built in the 13th century and they survived the fire of April 2019, which destroyed the spire and the roof.",
        },
        {
          id: 9,
          question: "In what year did Charlemagne die, in Aachen?",
          answers: [],
          correctAnswer: "814",
          correctValue: 814,
          explanation:
            "In 814, on 28 January, in Aachen, his capital. His son Louis the Pious succeeded him.",
        },
        {
          id: 10,
          image: "/images/q-moyen-age-dates-10.webp",
          question: "Roughly how old was Joan of Arc when she died in 1431?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "About 19. She was born around 1412 in Domrémy, and at her trial she said herself she was \"about 19\".",
        },
      ],
    },
    es: {
      title: "La Edad Media en fechas y cifras",
      description:
        "Diez números que adivinar sobre la Edad Media: años de batallas, la longitud del tapiz de Bayeux, las torres de Carcasona, etc.",
      questions: [
        {
          id: 1,
          question: "¿En qué año frenó Carlos Martel a un ejército llegado de al-Ándalus, cerca de Poitiers?",
          answers: [],
          correctAnswer: "732",
          correctValue: 732,
          explanation:
            "En 732, la fecha que da la tradición. Algunos historiadores la sitúan más bien en 733. La batalla fue en octubre, entre Tours y Poitiers.",
        },
        {
          id: 2,
          question: "¿En qué año el tratado de Verdún repartió el imperio de Carlomagno entre sus tres nietos?",
          answers: [],
          correctAnswer: "843",
          correctValue: 843,
          explanation:
            "En 843. Carlos el Calvo se quedó con el oeste, Luis el Germánico con el este y Lotario con una franja en el centro, junto con el título de emperador.",
        },
        {
          id: 3,
          image: "/images/q-moyen-age-dates-03.webp",
          question: "¿Cuántas torres tiene la doble muralla de la ciudadela de Carcasona?",
          answers: [],
          correctAnswer: "52",
          correctValue: 52,
          explanation:
            "52 torres, repartidas por casi 3 km de murallas. La ciudadela es Patrimonio de la Humanidad de la Unesco desde 1997.",
        },
        {
          id: 4,
          image: "/images/q-moyen-age-dates-04.webp",
          question: "¿Cuántos metros mide, más o menos, el tapiz de Bayeux?",
          answers: [],
          correctAnswer: "68",
          correctValue: 68,
          explanation:
            "68,38 metros exactamente, por unos cincuenta centímetros de alto. Cuenta la conquista de Inglaterra por Guillermo el Conquistador, en 1066.",
        },
        {
          id: 5,
          question: "¿En qué año fue la batalla de Azincourt, durante la guerra de los Cien Años?",
          answers: [],
          correctAnswer: "1415",
          correctValue: 1415,
          explanation:
            "En 1415, el 25 de octubre. El ejército inglés de Enrique V venció a un ejército francés mucho más numeroso, sobre todo gracias a sus arqueros.",
        },
        {
          id: 6,
          question: "¿En qué año fue la batalla de Crécy, una de las primeras grandes derrotas francesas de la guerra de los Cien Años?",
          answers: [],
          correctAnswer: "1346",
          correctValue: 1346,
          explanation:
            "En 1346, el 26 de agosto. El rey Eduardo III de Inglaterra derrotó allí a Felipe VI de Francia.",
        },
        {
          id: 7,
          image: "/images/q-moyen-age-dates-07.webp",
          question: "¿En qué año la retaguardia de Carlomagno cayó en una emboscada en Roncesvalles?",
          answers: [],
          correctAnswer: "778",
          correctValue: 778,
          explanation:
            "En 778, el 15 de agosto. Allí murió el conde Roldán, y tres siglos después el episodio inspiró el Cantar de Roldán.",
        },
        {
          id: 8,
          image: "/images/q-moyen-age-dates-08.webp",
          question: "¿Cuántos metros de alto tienen las torres de Notre-Dame de París?",
          answers: [],
          correctAnswer: "69",
          correctValue: 69,
          explanation:
            "69 metros. Se construyeron en el siglo XIII y aguantaron el incendio de abril de 2019, que destruyó la aguja y el tejado.",
        },
        {
          id: 9,
          question: "¿En qué año murió Carlomagno, en Aquisgrán?",
          answers: [],
          correctAnswer: "814",
          correctValue: 814,
          explanation:
            "En 814, el 28 de enero, en Aquisgrán, su capital. Le sucedió su hijo Luis el Piadoso.",
        },
        {
          id: 10,
          image: "/images/q-moyen-age-dates-10.webp",
          question: "¿Qué edad tenía más o menos Juana de Arco cuando murió, en 1431?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "Unos 19 años. Nació hacia 1412 en Domrémy, y en su juicio ella misma dijo tener «unos 19 años».",
        },
      ],
    },
  },
};

export default [quizMoyenAgeDates] as TranslatedQuiz[];
