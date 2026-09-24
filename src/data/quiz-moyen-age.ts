import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur le Moyen Âge, de Charlemagne à la chute de
 * Constantinople.
 *
 * Comme dans quiz-europe.ts, « vrai » porte l'id « a » et « faux » l'id « b »
 * (src/components/VraiFauxPlayer.tsx). Cinq affirmations vraies, cinq
 * fausses. Pour la Peste noire, les estimations de mortalité varient selon
 * les historiens : l'explication donne une fourchette plutôt qu'un chiffre.
 */
const VF = {
  fr: [
    { id: "a", text: "Vrai" },
    { id: "b", text: "Faux" },
  ],
  en: [
    { id: "a", text: "True" },
    { id: "b", text: "False" },
  ],
  es: [
    { id: "a", text: "Verdadero" },
    { id: "b", text: "Falso" },
  ],
};

export const quizMoyenAge: TranslatedQuiz = {
  slug: "quiz-moyen-age",
  slugs: { en: "middle-ages-quiz", fr: "quiz-moyen-age", es: "quiz-edad-media" },
  categorySlug: "histoire",
  subcategory: "Moyen Âge",
  difficulty: "medium",
  coverImage: "/images/sub-moyen-age.webp",
  gameType: "vrai-faux",
  playCount: 5400,
  translations: {
    fr: {
      title: "Vrai ou faux : le Moyen Âge",
      description:
        "Dix affirmations sur le Moyen Âge, de Charlemagne à Jeanne d'Arc. À toi de dire lesquelles sont vraies.",
      questions: [
        {
          id: 1,
          image: "/images/q-moyen-age-01.webp",
          question: "Charlemagne a été couronné empereur à Rome le jour de Noël de l'an 800.",
          answers: [...VF.fr],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le pape Léon III l'a couronné dans la basilique Saint-Pierre, le 25 décembre 800. Charlemagne était déjà roi des Francs depuis 768.",
        },
        {
          id: 2,
          image: "/images/q-moyen-age-02.webp",
          question: "Jeanne d'Arc a été brûlée vive à Paris.",
          answers: [...VF.fr],
          correctAnswer: "b",
          explanation:
            "C'est faux. Jeanne d'Arc a été brûlée à Rouen, place du Vieux-Marché, le 30 mai 1431, à 19 ans environ. La statue dorée de la photo se trouve bien à Paris, place des Pyramides.",
        },
        {
          id: 3,
          question: "La guerre de Cent Ans a duré exactement cent ans.",
          answers: [...VF.fr],
          correctAnswer: "b",
          explanation:
            "C'est faux. Elle a duré 116 ans, de 1337 à 1453, avec de longues trêves entre les combats. Le nom lui a été donné bien plus tard par les historiens.",
        },
        {
          id: 4,
          image: "/images/q-moyen-age-04.webp",
          question: "En 1066, à Hastings, Guillaume le Conquérant a battu le roi d'Angleterre Harold.",
          answers: [...VF.fr],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Guillaume, duc de Normandie, a gagné la bataille le 14 octobre 1066, et Harold y a été tué. La tapisserie de Bayeux raconte toute cette conquête.",
        },
        {
          id: 5,
          question: "La Peste noire est arrivée en Europe au XVIe siècle.",
          answers: [...VF.fr],
          correctAnswer: "b",
          explanation:
            "C'est faux. Elle est arrivée en 1347, au milieu du XIVe siècle, par des ports de la Méditerranée comme Messine et Marseille. En cinq ans environ, elle a tué entre un quart et la moitié des Européens, selon les estimations.",
        },
        {
          id: 6,
          image: "/images/q-moyen-age-06.webp",
          question: "Les Vikings ont posé le pied en Amérique du Nord avant Christophe Colomb.",
          answers: [...VF.fr],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le site de L'Anse aux Meadows, à Terre-Neuve, au Canada, montre qu'ils y étaient en l'an 1021. C'est presque cinq siècles avant le voyage de Colomb, en 1492.",
        },
        {
          id: 7,
          question: "La Grande Charte, la Magna Carta de 1215, a été accordée par Richard Cœur de Lion.",
          answers: [...VF.fr],
          correctAnswer: "b",
          explanation:
            "C'est faux. C'est son frère Jean sans Terre qui l'a acceptée, en juin 1215, sous la pression de ses barons. Richard Cœur de Lion était mort en 1199.",
        },
        {
          id: 8,
          image: "/images/q-moyen-age-08.webp",
          question: "La construction de Notre-Dame de Paris a commencé au XIIe siècle.",
          answers: [...VF.fr],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le chantier a été lancé en 1163 par l'évêque Maurice de Sully, et il a duré près de deux siècles.",
        },
        {
          id: 9,
          question: "Constantinople a été prise par les Ottomans la même année que le premier voyage de Christophe Colomb.",
          answers: [...VF.fr],
          correctAnswer: "b",
          explanation:
            "C'est faux. Constantinople est tombée en 1453, prise par le sultan Mehmed II. Colomb a traversé l'Atlantique en 1492, soit 39 ans plus tard.",
        },
        {
          id: 10,
          question: "La première croisade a été lancée par le pape Urbain II.",
          answers: [...VF.fr],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Urbain II l'a appelée au concile de Clermont, en 1095. Les croisés ont pris Jérusalem en 1099.",
        },
      ],
    },
    en: {
      title: "True or false: the Middle Ages",
      description:
        "Ten statements about the Middle Ages, from Charlemagne to Joan of Arc. Can you tell which ones are true?",
      questions: [
        {
          id: 1,
          image: "/images/q-moyen-age-01.webp",
          question: "Charlemagne was crowned emperor in Rome on Christmas Day in the year 800.",
          answers: [...VF.en],
          correctAnswer: "a",
          explanation:
            "True. Pope Leo III crowned him in St Peter's Basilica on 25 December 800. Charlemagne had already been king of the Franks since 768.",
        },
        {
          id: 2,
          image: "/images/q-moyen-age-02.webp",
          question: "Joan of Arc was burned at the stake in Paris.",
          answers: [...VF.en],
          correctAnswer: "b",
          explanation:
            "False. Joan of Arc was burned in Rouen, in the Old Market Square, on 30 May 1431, when she was about 19. The golden statue in the photo does stand in Paris, on the Place des Pyramides.",
        },
        {
          id: 3,
          question: "The Hundred Years' War lasted exactly one hundred years.",
          answers: [...VF.en],
          correctAnswer: "b",
          explanation:
            "False. It lasted 116 years, from 1337 to 1453, with long truces between the fighting. Historians came up with the name much later.",
        },
        {
          id: 4,
          image: "/images/q-moyen-age-04.webp",
          question: "In 1066, at Hastings, William the Conqueror defeated the English king Harold.",
          answers: [...VF.en],
          correctAnswer: "a",
          explanation:
            "True. William, Duke of Normandy, won the battle on 14 October 1066, and Harold was killed there. The Bayeux Tapestry tells the whole story of the conquest.",
        },
        {
          id: 5,
          question: "The Black Death reached Europe in the 16th century.",
          answers: [...VF.en],
          correctAnswer: "b",
          explanation:
            "False. It arrived in 1347, in the middle of the 14th century, through Mediterranean ports like Messina and Marseille. In about five years it killed between a quarter and half of Europe's population, depending on the estimate.",
        },
        {
          id: 6,
          image: "/images/q-moyen-age-06.webp",
          question: "The Vikings reached North America before Christopher Columbus.",
          answers: [...VF.en],
          correctAnswer: "a",
          explanation:
            "True. The site of L'Anse aux Meadows, in Newfoundland, Canada, shows they were there in the year 1021. That's almost five centuries before Columbus sailed in 1492.",
        },
        {
          id: 7,
          question: "Magna Carta, in 1215, was granted by Richard the Lionheart.",
          answers: [...VF.en],
          correctAnswer: "b",
          explanation:
            "False. It was his brother, King John, who agreed to it in June 1215 under pressure from his barons. Richard the Lionheart had died in 1199.",
        },
        {
          id: 8,
          image: "/images/q-moyen-age-08.webp",
          question: "Work on Notre-Dame de Paris began in the 12th century.",
          answers: [...VF.en],
          correctAnswer: "a",
          explanation:
            "True. Bishop Maurice de Sully started the building work in 1163, and it went on for nearly two hundred years.",
        },
        {
          id: 9,
          question: "Constantinople fell to the Ottomans in the same year as Columbus's first voyage.",
          answers: [...VF.en],
          correctAnswer: "b",
          explanation:
            "False. Constantinople fell in 1453, taken by Sultan Mehmed II. Columbus crossed the Atlantic in 1492, 39 years later.",
        },
        {
          id: 10,
          question: "The First Crusade was launched by Pope Urban II.",
          answers: [...VF.en],
          correctAnswer: "a",
          explanation:
            "True. Urban II called for it at the Council of Clermont in 1095. The crusaders took Jerusalem in 1099.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: la Edad Media",
      description:
        "Diez afirmaciones sobre la Edad Media, de Carlomagno a Juana de Arco. Te toca decir cuáles son verdaderas.",
      questions: [
        {
          id: 1,
          image: "/images/q-moyen-age-01.webp",
          question: "Carlomagno fue coronado emperador en Roma el día de Navidad del año 800.",
          answers: [...VF.es],
          correctAnswer: "a",
          explanation:
            "Verdadero. El papa León III lo coronó en la basílica de San Pedro el 25 de diciembre del 800. Carlomagno ya era rey de los francos desde 768.",
        },
        {
          id: 2,
          image: "/images/q-moyen-age-02.webp",
          question: "Juana de Arco murió en la hoguera en París.",
          answers: [...VF.es],
          correctAnswer: "b",
          explanation:
            "Falso. Juana de Arco murió en la hoguera en Ruan, en la plaza del Mercado Viejo, el 30 de mayo de 1431, con unos 19 años. La estatua dorada de la foto sí está en París, en la plaza de las Pirámides.",
        },
        {
          id: 3,
          question: "La guerra de los Cien Años duró exactamente cien años.",
          answers: [...VF.es],
          correctAnswer: "b",
          explanation:
            "Falso. Duró 116 años, de 1337 a 1453, con largas treguas entre los combates. El nombre se lo pusieron los historiadores mucho después.",
        },
        {
          id: 4,
          image: "/images/q-moyen-age-04.webp",
          question: "En 1066, en Hastings, Guillermo el Conquistador venció al rey inglés Haroldo.",
          answers: [...VF.es],
          correctAnswer: "a",
          explanation:
            "Verdadero. Guillermo, duque de Normandía, ganó la batalla el 14 de octubre de 1066, y Haroldo murió en ella. El tapiz de Bayeux cuenta toda esa conquista.",
        },
        {
          id: 5,
          question: "La peste negra llegó a Europa en el siglo XVI.",
          answers: [...VF.es],
          correctAnswer: "b",
          explanation:
            "Falso. Llegó en 1347, a mediados del siglo XIV, por puertos del Mediterráneo como Mesina y Marsella. En unos cinco años mató a entre un cuarto y la mitad de los europeos, según las estimaciones.",
        },
        {
          id: 6,
          image: "/images/q-moyen-age-06.webp",
          question: "Los vikingos llegaron a América del Norte antes que Cristóbal Colón.",
          answers: [...VF.es],
          correctAnswer: "a",
          explanation:
            "Verdadero. El yacimiento de L'Anse aux Meadows, en Terranova (Canadá), demuestra que estaban allí en el año 1021. Es casi cinco siglos antes del viaje de Colón, en 1492.",
        },
        {
          id: 7,
          question: "La Carta Magna de 1215 la concedió Ricardo Corazón de León.",
          answers: [...VF.es],
          correctAnswer: "b",
          explanation:
            "Falso. Fue su hermano Juan sin Tierra quien la aceptó, en junio de 1215, presionado por sus barones. Ricardo Corazón de León había muerto en 1199.",
        },
        {
          id: 8,
          image: "/images/q-moyen-age-08.webp",
          question: "La construcción de Notre-Dame de París empezó en el siglo XII.",
          answers: [...VF.es],
          correctAnswer: "a",
          explanation:
            "Verdadero. El obispo Mauricio de Sully puso en marcha las obras en 1163, y duraron casi dos siglos.",
        },
        {
          id: 9,
          question: "Constantinopla cayó en manos de los otomanos el mismo año del primer viaje de Colón.",
          answers: [...VF.es],
          correctAnswer: "b",
          explanation:
            "Falso. Constantinopla cayó en 1453, tomada por el sultán Mehmed II. Colón cruzó el Atlántico en 1492, 39 años después.",
        },
        {
          id: 10,
          question: "La primera cruzada la convocó el papa Urbano II.",
          answers: [...VF.es],
          correctAnswer: "a",
          explanation:
            "Verdadero. Urbano II la proclamó en el concilio de Clermont, en 1095. Los cruzados tomaron Jerusalén en 1099.",
        },
      ],
    },
  },
};

export default [quizMoyenAge] as TranslatedQuiz[];
