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
        "Vingt nombres à trouver sur le Moyen Âge : des années de batailles, la longueur de la tapisserie de Bayeux, les tours de Carcassonne, etc.",
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
        {
          id: 11,
          question: "En quelle année le roi Charles le Simple confie-t-il au chef viking Rollon la région qui deviendra la Normandie ?",
          answers: [],
          correctAnswer: "911",
          correctValue: 911,
          explanation:
            "En 911, au traité de Saint-Clair-sur-Epte. Rollon reçoit les terres autour de Rouen et promet en échange de défendre le royaume contre les autres Vikings.",
        },
        {
          id: 12,
          question: "En quelle année est fondée l'abbaye de Cluny, en Bourgogne ?",
          answers: [],
          correctAnswer: "910",
          correctValue: 910,
          explanation:
            "En 910, par le duc Guillaume d'Aquitaine. Cluny devient ensuite l'une des abbayes les plus puissantes d'Europe, à la tête de centaines de monastères.",
        },
        {
          id: 13,
          question: "Quel âge a Louis IX, le futur Saint Louis, quand il devient roi en 1226 ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 ans. Né en 1214, il monte sur le trône à la mort de son père Louis VIII, et c'est sa mère, Blanche de Castille, qui gouverne pendant sa jeunesse.",
        },
        {
          id: 14,
          question: "En quelle année le pape Clément V s'installe-t-il à Avignon ?",
          answers: [],
          correctAnswer: "1309",
          correctValue: 1309,
          explanation:
            "En 1309. Les papes restent à Avignon jusqu'en 1377, et c'est là qu'ils font construire l'immense palais des Papes.",
        },
        {
          id: 15,
          question: "Combien d'arches reste-t-il aujourd'hui au pont d'Avignon, le pont Saint-Bénézet ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4. Le pont en comptait 22 à l'origine et traversait tout le Rhône. Les crues ont emporté les autres arches, et une grande crue en 1669 a laissé à peu près ce qu'on voit aujourd'hui.",
        },
        {
          id: 16,
          question: "En quelle année Jeanne d'Arc fait-elle lever le siège d'Orléans ?",
          answers: [],
          correctAnswer: "1429",
          correctValue: 1429,
          explanation:
            "En 1429. Les Anglais assiègent la ville depuis octobre 1428, et ils lèvent le siège le 8 mai 1429. Orléans fête encore Jeanne d'Arc chaque année à cette date.",
        },
        {
          id: 17,
          question: "Combien de mètres de haut mesure la flèche de la cathédrale de Strasbourg, achevée en 1439 ?",
          answers: [],
          correctAnswer: "142",
          correctValue: 142,
          explanation:
            "Environ 142 mètres. De 1647 à 1874, la cathédrale de Strasbourg a été le plus haut édifice du monde.",
        },
        {
          id: 18,
          question: "Combien de mètres de haut mesure le donjon du château de Vincennes, construit au XIVe siècle ?",
          answers: [],
          correctAnswer: "52",
          correctValue: 52,
          explanation:
            "52 mètres. Commencé sous Jean le Bon et terminé par Charles V vers 1370, c'est le plus haut donjon de France encore debout.",
        },
        {
          id: 19,
          question: "Combien de mètres mesure environ le chœur de la cathédrale de Beauvais, sous la voûte ?",
          answers: [],
          correctAnswer: "48",
          correctValue: 48,
          explanation:
            "Environ 48 mètres, 48,50 pour être exact. C'est le chœur gothique le plus haut du monde. La voûte s'est d'ailleurs effondrée en 1284, et il a fallu la reconstruire.",
        },
        {
          id: 20,
          question: "En quelle année les Rois catholiques prennent-ils Grenade, le dernier royaume musulman d'Espagne ?",
          answers: [],
          correctAnswer: "1492",
          correctValue: 1492,
          explanation:
            "En 1492, le 2 janvier. C'est la fin de la Reconquista, et la même année Christophe Colomb part pour son premier voyage, financé par ces mêmes souverains, Isabelle et Ferdinand.",
        },
      ],
    },
    en: {
      title: "The Middle Ages in dates and numbers",
      description:
        "Twenty numbers to guess about the Middle Ages: the years of battles, the length of the Bayeux Tapestry, the towers of Carcassonne, and more.",
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
        {
          id: 11,
          question: "In what year did King Charles the Simple grant the Viking leader Rollo the land that would become Normandy?",
          answers: [],
          correctAnswer: "911",
          correctValue: 911,
          explanation:
            "In 911, by the treaty of Saint-Clair-sur-Epte. Rollo received the land around Rouen and in return promised to defend the kingdom against other Vikings.",
        },
        {
          id: 12,
          question: "In what year was the abbey of Cluny, in Burgundy, founded?",
          answers: [],
          correctAnswer: "910",
          correctValue: 910,
          explanation:
            "In 910, by Duke William of Aquitaine. Cluny went on to become one of the most powerful abbeys in Europe, at the head of hundreds of monasteries.",
        },
        {
          id: 13,
          question: "How old was Louis IX, the future Saint Louis, when he became king in 1226?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12. Born in 1214, he came to the throne when his father Louis VIII died, and his mother, Blanche of Castile, ruled for him while he was young.",
        },
        {
          id: 14,
          question: "In what year did Pope Clement V settle in Avignon?",
          answers: [],
          correctAnswer: "1309",
          correctValue: 1309,
          explanation:
            "In 1309. The popes stayed in Avignon until 1377, and that is where they built the huge Palace of the Popes.",
        },
        {
          id: 15,
          question: "How many arches does the bridge of Avignon, the Pont Saint-Bénézet, have today?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4. It originally had 22 and crossed the whole Rhône. Floods carried the other arches away, and a big flood in 1669 left roughly what you see today.",
        },
        {
          id: 16,
          question: "In what year did Joan of Arc lift the siege of Orléans?",
          answers: [],
          correctAnswer: "1429",
          correctValue: 1429,
          explanation:
            "In 1429. The English had besieged the city since October 1428 and they withdrew on 8 May 1429. Orléans still celebrates Joan of Arc on that date every year.",
        },
        {
          id: 17,
          question: "How many metres tall is the spire of Strasbourg Cathedral, finished in 1439?",
          answers: [],
          correctAnswer: "142",
          correctValue: 142,
          explanation:
            "About 142 metres. From 1647 to 1874, Strasbourg Cathedral was the tallest building in the world.",
        },
        {
          id: 18,
          question: "How many metres tall is the keep of the Château de Vincennes, built in the 14th century?",
          answers: [],
          correctAnswer: "52",
          correctValue: 52,
          explanation:
            "52 metres. Begun under John the Good and finished by Charles V around 1370, it is the tallest keep still standing in France.",
        },
        {
          id: 19,
          question: "Roughly how many metres high is the choir of Beauvais Cathedral, up to the vault?",
          answers: [],
          correctAnswer: "48",
          correctValue: 48,
          explanation:
            "About 48 metres, 48.5 to be exact. It is the tallest Gothic choir in the world. The vault actually collapsed in 1284 and had to be rebuilt.",
        },
        {
          id: 20,
          question: "In what year did the Catholic Monarchs take Granada, the last Muslim kingdom in Spain?",
          answers: [],
          correctAnswer: "1492",
          correctValue: 1492,
          explanation:
            "In 1492, on 2 January. That marked the end of the Reconquista, and the same year Christopher Columbus set off on his first voyage, paid for by the same rulers, Isabella and Ferdinand.",
        },
      ],
    },
    es: {
      title: "La Edad Media en fechas y cifras",
      description:
        "Veinte números que adivinar sobre la Edad Media: años de batallas, la longitud del tapiz de Bayeux, las torres de Carcasona, etc.",
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
        {
          id: 11,
          question: "¿En qué año el rey Carlos el Simple cede al jefe vikingo Rollón la región que se convertirá en Normandía?",
          answers: [],
          correctAnswer: "911",
          correctValue: 911,
          explanation:
            "En 911, con el tratado de Saint-Clair-sur-Epte. Rollón recibe las tierras alrededor de Ruan y promete a cambio defender el reino frente a los demás vikingos.",
        },
        {
          id: 12,
          question: "¿En qué año se fundó la abadía de Cluny, en Borgoña?",
          answers: [],
          correctAnswer: "910",
          correctValue: 910,
          explanation:
            "En 910, por el duque Guillermo de Aquitania. Cluny llegó a ser una de las abadías más poderosas de Europa, al frente de cientos de monasterios.",
        },
        {
          id: 13,
          question: "¿Qué edad tenía Luis IX, el futuro San Luis, cuando se convirtió en rey en 1226?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 años. Nacido en 1214, subió al trono a la muerte de su padre, Luis VIII, y su madre, Blanca de Castilla, gobernó durante su juventud.",
        },
        {
          id: 14,
          question: "¿En qué año se instala el papa Clemente V en Aviñón?",
          answers: [],
          correctAnswer: "1309",
          correctValue: 1309,
          explanation:
            "En 1309. Los papas se quedan en Aviñón hasta 1377, y allí construyen el inmenso Palacio de los Papas.",
        },
        {
          id: 15,
          question: "¿Cuántos arcos le quedan hoy al puente de Aviñón, el puente Saint-Bénézet?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4. Al principio tenía 22 y cruzaba todo el Ródano. Las crecidas se llevaron los demás arcos, y una gran riada en 1669 dejó más o menos lo que se ve hoy.",
        },
        {
          id: 16,
          question: "¿En qué año levanta Juana de Arco el asedio de Orleans?",
          answers: [],
          correctAnswer: "1429",
          correctValue: 1429,
          explanation:
            "En 1429. Los ingleses sitiaban la ciudad desde octubre de 1428 y levantaron el asedio el 8 de mayo de 1429. Orleans sigue celebrando a Juana de Arco cada año en esa fecha.",
        },
        {
          id: 17,
          question: "¿Cuántos metros de altura tiene la aguja de la catedral de Estrasburgo, terminada en 1439?",
          answers: [],
          correctAnswer: "142",
          correctValue: 142,
          explanation:
            "Unos 142 metros. De 1647 a 1874, la catedral de Estrasburgo fue el edificio más alto del mundo.",
        },
        {
          id: 18,
          question: "¿Cuántos metros de altura tiene la torre del homenaje del castillo de Vincennes, construida en el siglo XIV?",
          answers: [],
          correctAnswer: "52",
          correctValue: 52,
          explanation:
            "52 metros. Empezada bajo Juan el Bueno y terminada por Carlos V hacia 1370, es la torre del homenaje más alta que sigue en pie en Francia.",
        },
        {
          id: 19,
          question: "¿Cuántos metros mide aproximadamente el coro de la catedral de Beauvais, hasta la bóveda?",
          answers: [],
          correctAnswer: "48",
          correctValue: 48,
          explanation:
            "Unos 48 metros, 48,50 para ser exactos. Es el coro gótico más alto del mundo. La bóveda se hundió en 1284 y hubo que reconstruirla.",
        },
        {
          id: 20,
          question: "¿En qué año toman los Reyes Católicos Granada, el último reino musulmán de España?",
          answers: [],
          correctAnswer: "1492",
          correctValue: 1492,
          explanation:
            "En 1492, el 2 de enero. Es el final de la Reconquista, y ese mismo año Cristóbal Colón parte en su primer viaje, financiado por los mismos reyes, Isabel y Fernando.",
        },
      ],
    },
  },
};

export default [quizMoyenAgeDates] as TranslatedQuiz[];
