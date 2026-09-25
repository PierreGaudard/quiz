import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur le Moyen Âge, de Charlemagne à la chute de
 * Constantinople.
 *
 * Comme dans quiz-europe.ts, « vrai » porte l'id « a » et « faux » l'id « b »
 * (src/components/VraiFauxPlayer.tsx). Dix affirmations vraies, dix
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
        "Vingt affirmations sur le Moyen Âge, de Charlemagne à Jeanne d'Arc. À toi de dire lesquelles sont vraies.",
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
        {
          id: 11,
          question: "Les Vikings portaient des casques à cornes au combat.",
          answers: [...VF.fr],
          correctAnswer: "b",
          explanation:
            "C'est faux. Aucun casque viking à cornes n'a été retrouvé. Cette image vient surtout du XIXe siècle, des costumes de l'opéra de Wagner et des peintres romantiques.",
        },
        {
          id: 12,
          question: "Aliénor d'Aquitaine a été reine de France, puis reine d'Angleterre.",
          answers: [...VF.fr],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Elle épouse d'abord le roi de France Louis VII, en 1137. Leur mariage est annulé en 1152, et elle se remarie la même année avec Henri Plantagenêt, qui devient roi d'Angleterre en 1154.",
        },
        {
          id: 13,
          question: "Au Moyen Âge, les gens instruits pensaient que la Terre était plate.",
          answers: [...VF.fr],
          correctAnswer: "b",
          explanation:
            "C'est faux. Depuis les Grecs de l'Antiquité, les savants savent que la Terre est ronde, et les auteurs du Moyen Âge le répètent. L'idée d'un Moyen Âge qui croyait à une Terre plate est née au XIXe siècle.",
        },
        {
          id: 14,
          question: "Marco Polo était un marchand vénitien qui a voyagé jusqu'en Chine.",
          answers: [...VF.fr],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Il part en 1271 avec son père et son oncle, vit de longues années à la cour de l'empereur mongol Kubilai Khan, et rentre à Venise en 1295. Le récit de son voyage devient le Livre des merveilles.",
        },
        {
          id: 15,
          question: "L'existence du roi Arthur est prouvée par des documents de son époque.",
          answers: [...VF.fr],
          correctAnswer: "b",
          explanation:
            "C'est faux. Aucun texte de l'époque où il aurait vécu, vers l'an 500, ne parle de lui. Sa légende, avec la Table ronde et Merlin, se construit surtout à partir du XIIe siècle.",
        },
        {
          id: 16,
          question: "Dans les monastères, les moines recopiaient les livres à la main.",
          answers: [...VF.fr],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Ils travaillaient dans une salle appelée le scriptorium, sur du parchemin fait de peau d'animal. Copier une Bible entière pouvait prendre des années.",
        },
        {
          id: 17,
          question: "Les gens du Moyen Âge appelaient eux-mêmes leur époque « le Moyen Âge ».",
          answers: [...VF.fr],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le nom a été inventé plus tard, par les savants de la Renaissance, pour désigner la période « du milieu » entre l'Antiquité et leur propre temps.",
        },
        {
          id: 18,
          question: "Jeanne d'Arc a été déclarée sainte au XXe siècle.",
          answers: [...VF.fr],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Elle est canonisée par le pape Benoît XV en 1920, près de cinq cents ans après sa mort. Elle avait déjà été réhabilitée par un second procès en 1456.",
        },
        {
          id: 19,
          question: "Au Moyen Âge, on ne se lavait presque jamais.",
          answers: [...VF.fr],
          correctAnswer: "b",
          explanation:
            "C'est faux. Les villes avaient des étuves, des bains publics où l'on allait se laver et se détendre, et Paris en comptait près de trente à la fin du XIIIe siècle. Elles déclinent surtout à partir du XVIe siècle.",
        },
        {
          id: 20,
          question: "Des Vikings ont assiégé Paris au IXe siècle.",
          answers: [...VF.fr],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Ils remontent la Seine et pillent Paris en 845, puis assiègent la ville pendant près d'un an en 885 et 886. Le comte Eudes la défend, et il devient roi quelques années plus tard.",
        },
      ],
    },
    en: {
      title: "True or false: the Middle Ages",
      description:
        "Twenty statements about the Middle Ages, from Charlemagne to Joan of Arc. Can you tell which ones are true?",
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
        {
          id: 11,
          question: "Vikings wore horned helmets in battle.",
          answers: [...VF.en],
          correctAnswer: "b",
          explanation:
            "False. No horned Viking helmet has ever been found. The image mostly comes from the 19th century, from the costumes of Wagner's operas and from Romantic painters.",
        },
        {
          id: 12,
          question: "Eleanor of Aquitaine was Queen of France and then Queen of England.",
          answers: [...VF.en],
          correctAnswer: "a",
          explanation:
            "True. She first married King Louis VII of France in 1137. The marriage was annulled in 1152, and that same year she married Henry Plantagenet, who became King of England in 1154.",
        },
        {
          id: 13,
          question: "In the Middle Ages, educated people believed the Earth was flat.",
          answers: [...VF.en],
          correctAnswer: "b",
          explanation:
            "False. Scholars had known the Earth was round since the ancient Greeks, and medieval writers said so too. The idea of a flat-Earth Middle Ages was born in the 19th century.",
        },
        {
          id: 14,
          question: "Marco Polo was a Venetian merchant who travelled as far as China.",
          answers: [...VF.en],
          correctAnswer: "a",
          explanation:
            "True. He left in 1271 with his father and uncle, spent many years at the court of the Mongol emperor Kublai Khan and got back to Venice in 1295. His account of the journey became known as The Travels of Marco Polo.",
        },
        {
          id: 15,
          question: "King Arthur's existence is proven by documents from his own time.",
          answers: [...VF.en],
          correctAnswer: "b",
          explanation:
            "False. No text from the time he is supposed to have lived, around AD 500, mentions him. His legend, with the Round Table and Merlin, took shape mainly from the 12th century.",
        },
        {
          id: 16,
          question: "In monasteries, monks copied books out by hand.",
          answers: [...VF.en],
          correctAnswer: "a",
          explanation:
            "True. They worked in a room called the scriptorium, on parchment made from animal skin. Copying a whole Bible could take years.",
        },
        {
          id: 17,
          question: "People in the Middle Ages called their own time \"the Middle Ages\".",
          answers: [...VF.en],
          correctAnswer: "b",
          explanation:
            "False. The name was invented later by Renaissance scholars, to describe the period \"in the middle\" between antiquity and their own time.",
        },
        {
          id: 18,
          question: "Joan of Arc was declared a saint in the 20th century.",
          answers: [...VF.en],
          correctAnswer: "a",
          explanation:
            "True. Pope Benedict XV canonised her in 1920, nearly five hundred years after her death. A second trial had already cleared her name in 1456.",
        },
        {
          id: 19,
          question: "In the Middle Ages, people almost never washed.",
          answers: [...VF.en],
          correctAnswer: "b",
          explanation:
            "False. Towns had bathhouses, called étuves in France, where people went to wash and relax, and Paris had nearly thirty of them at the end of the 13th century. They mostly declined from the 16th century.",
        },
        {
          id: 20,
          question: "Vikings laid siege to Paris in the 9th century.",
          answers: [...VF.en],
          correctAnswer: "a",
          explanation:
            "True. They sailed up the Seine and sacked Paris in 845, then besieged the city for almost a year in 885 and 886. Count Odo defended it, and he became king a few years later.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: la Edad Media",
      description:
        "Veinte afirmaciones sobre la Edad Media, de Carlomagno a Juana de Arco. Te toca decir cuáles son verdaderas.",
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
        {
          id: 11,
          question: "Los vikingos llevaban cascos con cuernos en combate.",
          answers: [...VF.es],
          correctAnswer: "b",
          explanation:
            "Falso. Nunca se ha encontrado un casco vikingo con cuernos. Esa imagen viene sobre todo del siglo XIX, del vestuario de las óperas de Wagner y de los pintores románticos.",
        },
        {
          id: 12,
          question: "Leonor de Aquitania fue reina de Francia y después reina de Inglaterra.",
          answers: [...VF.es],
          correctAnswer: "a",
          explanation:
            "Verdadero. Primero se casó con el rey de Francia Luis VII, en 1137. El matrimonio se anuló en 1152, y ese mismo año se casó con Enrique Plantagenet, que fue rey de Inglaterra desde 1154.",
        },
        {
          id: 13,
          question: "En la Edad Media, la gente culta creía que la Tierra era plana.",
          answers: [...VF.es],
          correctAnswer: "b",
          explanation:
            "Falso. Los sabios sabían que la Tierra es redonda desde los griegos de la Antigüedad, y los autores medievales lo repiten. La idea de una Edad Media que creía en una Tierra plana nació en el siglo XIX.",
        },
        {
          id: 14,
          question: "Marco Polo fue un mercader veneciano que viajó hasta China.",
          answers: [...VF.es],
          correctAnswer: "a",
          explanation:
            "Verdadero. Partió en 1271 con su padre y su tío, vivió muchos años en la corte del emperador mongol Kublai Kan y volvió a Venecia en 1295. El relato de su viaje se conoce como el Libro de las maravillas.",
        },
        {
          id: 15,
          question: "La existencia del rey Arturo está demostrada por documentos de su época.",
          answers: [...VF.es],
          correctAnswer: "b",
          explanation:
            "Falso. Ningún texto de la época en que habría vivido, hacia el año 500, habla de él. Su leyenda, con la Mesa Redonda y Merlín, se forma sobre todo a partir del siglo XII.",
        },
        {
          id: 16,
          question: "En los monasterios, los monjes copiaban los libros a mano.",
          answers: [...VF.es],
          correctAnswer: "a",
          explanation:
            "Verdadero. Trabajaban en una sala llamada scriptorium, sobre pergamino hecho de piel de animal. Copiar una Biblia entera podía llevar años.",
        },
        {
          id: 17,
          question: "La gente de la Edad Media ya llamaba a su época «la Edad Media».",
          answers: [...VF.es],
          correctAnswer: "b",
          explanation:
            "Falso. El nombre lo inventaron más tarde los eruditos del Renacimiento, para designar el periodo «del medio» entre la Antigüedad y su propia época.",
        },
        {
          id: 18,
          question: "Juana de Arco fue declarada santa en el siglo XX.",
          answers: [...VF.es],
          correctAnswer: "a",
          explanation:
            "Verdadero. El papa Benedicto XV la canonizó en 1920, casi quinientos años después de su muerte. Un segundo juicio ya la había rehabilitado en 1456.",
        },
        {
          id: 19,
          question: "En la Edad Media casi nadie se lavaba.",
          answers: [...VF.es],
          correctAnswer: "b",
          explanation:
            "Falso. Las ciudades tenían baños públicos donde la gente iba a lavarse y a relajarse, y París tenía casi treinta a finales del siglo XIII. Empezaron a desaparecer sobre todo a partir del siglo XVI.",
        },
        {
          id: 20,
          question: "Los vikingos asediaron París en el siglo IX.",
          answers: [...VF.es],
          correctAnswer: "a",
          explanation:
            "Verdadero. Remontaron el Sena y saquearon París en 845, y luego sitiaron la ciudad durante casi un año, en 885 y 886. El conde Eudes la defendió, y pocos años después fue rey.",
        },
      ],
    },
  },
};

export default [quizMoyenAge] as TranslatedQuiz[];
