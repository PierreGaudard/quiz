import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode ordre sur les rois de France : remettre des rois, des
 * dynasties ou des événements dans l'ordre chronologique.
 *
 * Le moteur mélange les propositions à l'affichage (OrdrePlayer.tsx), seul
 * `correctOrder` compte. Pour le baptême de Clovis, dont la date exacte est
 * discutée (entre 496 et 508 selon les historiens), la question ne le met
 * jamais à côté d'un événement proche : il n'apparaît pas, et Clovis n'est
 * classé que par son avènement, en 481.
 */
export const quizRoisDeFrance: TranslatedQuiz = {
  slug: "quiz-rois-de-france",
  slugs: { en: "french-kings-quiz", fr: "quiz-rois-de-france", es: "quiz-reyes-de-francia" },
  categorySlug: "histoire",
  subcategory: "Rois de France",
  difficulty: "medium",
  coverImage: "/images/sub-rois-de-france.webp",
  gameType: "ordre",
  playCount: 5800,
  translations: {
    fr: {
      title: "Les rois de France dans l'ordre",
      description:
        "Dix suites à remettre dans l'ordre chronologique : des rois, des dynasties et des grands événements, de Clovis à Louis-Philippe.",
      questions: [
        {
          id: 1,
          image: "/images/q-rois-de-france-01.webp",
          question: "Remets ces rois dans l'ordre de leur règne.",
          answers: [
            { id: "a", text: "Clovis" },
            { id: "b", text: "Charlemagne" },
            { id: "c", text: "Hugues Capet" },
            { id: "d", text: "Saint Louis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Clovis devient roi des Francs en 481, Charlemagne en 768, Hugues Capet est élu en 987, et Saint Louis, c'est-à-dire Louis IX, monte sur le trône en 1226.",
        },
        {
          id: 2,
          question: "Remets ces rois du Moyen Âge dans l'ordre de leur règne.",
          answers: [
            { id: "a", text: "Philippe Auguste" },
            { id: "b", text: "Philippe le Bel" },
            { id: "c", text: "Jean le Bon" },
            { id: "d", text: "Charles VII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Philippe Auguste règne à partir de 1180, Philippe le Bel à partir de 1285, Jean le Bon à partir de 1350 et Charles VII à partir de 1422.",
        },
        {
          id: 3,
          question: "Remets ces rois de la Renaissance et du XVIIe siècle dans l'ordre de leur règne.",
          answers: [
            { id: "a", text: "François Ier" },
            { id: "b", text: "Henri II" },
            { id: "c", text: "Henri IV" },
            { id: "d", text: "Louis XIII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "François Ier monte sur le trône en 1515, son fils Henri II en 1547, Henri IV en 1589 et Louis XIII, le fils d'Henri IV, en 1610.",
        },
        {
          id: 4,
          image: "/images/q-rois-de-france-04.webp",
          question: "Remets ces rois nommés Louis dans l'ordre de leur règne.",
          answers: [
            { id: "a", text: "Louis XIV" },
            { id: "b", text: "Louis XV" },
            { id: "c", text: "Louis XVI" },
            { id: "d", text: "Louis XVIII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Louis XIV devient roi en 1643, à 4 ans, et règne 72 ans. Son arrière-petit-fils Louis XV lui succède en 1715, puis Louis XVI en 1774. Louis XVIII arrive en 1814, après la chute de Napoléon.",
        },
        {
          id: 5,
          question: "Remets ces événements dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "La bataille de Bouvines" },
            { id: "b", text: "La mort de Saint Louis devant Tunis" },
            { id: "c", text: "Le début de la guerre de Cent Ans" },
            { id: "d", text: "Le sacre de Charles VII à Reims" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Philippe Auguste gagne à Bouvines en 1214. Saint Louis meurt devant Tunis en 1270, pendant la huitième croisade. La guerre de Cent Ans commence en 1337, et Charles VII est sacré à Reims en 1429, avec Jeanne d'Arc à ses côtés.",
        },
        {
          id: 6,
          image: "/images/q-rois-de-france-06.webp",
          question: "Remets ces événements du XVIe siècle et du début du XVIIe dans l'ordre.",
          answers: [
            { id: "a", text: "La bataille de Marignan" },
            { id: "b", text: "Le massacre de la Saint-Barthélemy" },
            { id: "c", text: "L'édit de Nantes" },
            { id: "d", text: "L'assassinat d'Henri IV" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "François Ier gagne à Marignan en 1515. Le massacre de la Saint-Barthélemy a lieu en 1572, sous Charles IX. Henri IV signe l'édit de Nantes en 1598, et il est assassiné par Ravaillac en 1610.",
        },
        {
          id: 7,
          image: "/images/q-rois-de-france-07.webp",
          question: "Remets ces moments du règne de Louis XIV dans l'ordre.",
          answers: [
            { id: "a", text: "Le début de son règne personnel" },
            { id: "b", text: "L'installation de la cour à Versailles" },
            { id: "c", text: "La révocation de l'édit de Nantes" },
            { id: "d", text: "Sa mort" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Louis XIV gouverne seul à partir de 1661, à la mort de Mazarin. La cour s'installe à Versailles le 6 mai 1682, l'édit de Nantes est révoqué en octobre 1685, et le roi meurt en 1715.",
        },
        {
          id: 8,
          question: "Remets ces dynasties dans l'ordre où elles ont régné.",
          answers: [
            { id: "a", text: "Les Mérovingiens" },
            { id: "b", text: "Les Carolingiens" },
            { id: "c", text: "Les Capétiens directs" },
            { id: "d", text: "Les Valois" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les Mérovingiens règnent jusqu'en 751, quand Pépin le Bref fonde la dynastie carolingienne. Les Capétiens directs arrivent avec Hugues Capet en 987, et les Valois avec Philippe VI en 1328. Les Bourbons viennent ensuite, avec Henri IV.",
        },
        {
          id: 9,
          question: "Remets ces derniers rois dans l'ordre de leur règne.",
          answers: [
            { id: "a", text: "Louis XVI" },
            { id: "b", text: "Louis XVIII" },
            { id: "c", text: "Charles X" },
            { id: "d", text: "Louis-Philippe Ier" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Louis XVI règne de 1774 à 1792. Après la Révolution et l'Empire, Louis XVIII revient en 1814, puis son frère Charles X lui succède en 1824. Louis-Philippe arrive au pouvoir en 1830 et il est renversé en 1848 : c'est le dernier roi à avoir régné en France.",
        },
        {
          id: 10,
          question: "Remets ces rois de la dynastie des Valois dans l'ordre de leur règne.",
          answers: [
            { id: "a", text: "Charles V" },
            { id: "b", text: "Louis XI" },
            { id: "c", text: "Charles VIII" },
            { id: "d", text: "Henri III" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Charles V devient roi en 1364, Louis XI en 1461, Charles VIII en 1483 et Henri III en 1574. Henri III est le dernier des Valois, et Henri IV lui succède en 1589.",
        },
      ],
    },
    en: {
      title: "Kings of France in chronological order",
      description:
        "Ten sets to put in chronological order: kings, dynasties and big events in French history, from Clovis to Louis-Philippe.",
      questions: [
        {
          id: 1,
          image: "/images/q-rois-de-france-01.webp",
          question: "Put these kings in the order they reigned.",
          answers: [
            { id: "a", text: "Clovis" },
            { id: "b", text: "Charlemagne" },
            { id: "c", text: "Hugh Capet" },
            { id: "d", text: "Saint Louis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Clovis became king of the Franks in 481, Charlemagne in 768, Hugh Capet was elected in 987, and Saint Louis (Louis IX) came to the throne in 1226.",
        },
        {
          id: 2,
          question: "Put these medieval kings in the order they reigned.",
          answers: [
            { id: "a", text: "Philip Augustus" },
            { id: "b", text: "Philip the Fair" },
            { id: "c", text: "John the Good" },
            { id: "d", text: "Charles VII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Philip Augustus reigned from 1180, Philip the Fair from 1285, John the Good from 1350 and Charles VII from 1422.",
        },
        {
          id: 3,
          question: "Put these Renaissance and 17th-century kings in the order they reigned.",
          answers: [
            { id: "a", text: "Francis I" },
            { id: "b", text: "Henry II" },
            { id: "c", text: "Henry IV" },
            { id: "d", text: "Louis XIII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Francis I came to the throne in 1515, his son Henry II in 1547, Henry IV in 1589 and Louis XIII, Henry IV's son, in 1610.",
        },
        {
          id: 4,
          image: "/images/q-rois-de-france-04.webp",
          question: "Put these kings called Louis in the order they reigned.",
          answers: [
            { id: "a", text: "Louis XIV" },
            { id: "b", text: "Louis XV" },
            { id: "c", text: "Louis XVI" },
            { id: "d", text: "Louis XVIII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Louis XIV became king in 1643, aged 4, and reigned for 72 years. His great-grandson Louis XV followed in 1715, then Louis XVI in 1774. Louis XVIII came in 1814, after Napoleon's fall.",
        },
        {
          id: 5,
          question: "Put these events in chronological order.",
          answers: [
            { id: "a", text: "The Battle of Bouvines" },
            { id: "b", text: "The death of Saint Louis outside Tunis" },
            { id: "c", text: "The start of the Hundred Years' War" },
            { id: "d", text: "The coronation of Charles VII in Reims" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Philip Augustus won at Bouvines in 1214. Saint Louis died outside Tunis in 1270, during the Eighth Crusade. The Hundred Years' War began in 1337, and Charles VII was crowned in Reims in 1429, with Joan of Arc beside him.",
        },
        {
          id: 6,
          image: "/images/q-rois-de-france-06.webp",
          question: "Put these 16th and early 17th-century events in order.",
          answers: [
            { id: "a", text: "The Battle of Marignano" },
            { id: "b", text: "The St Bartholomew's Day massacre" },
            { id: "c", text: "The Edict of Nantes" },
            { id: "d", text: "The assassination of Henry IV" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Francis I won at Marignano in 1515. The St Bartholomew's Day massacre happened in 1572, under Charles IX. Henry IV signed the Edict of Nantes in 1598 and was assassinated by Ravaillac in 1610.",
        },
        {
          id: 7,
          image: "/images/q-rois-de-france-07.webp",
          question: "Put these moments from the reign of Louis XIV in order.",
          answers: [
            { id: "a", text: "The start of his personal rule" },
            { id: "b", text: "The court moves to Versailles" },
            { id: "c", text: "The revocation of the Edict of Nantes" },
            { id: "d", text: "His death" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Louis XIV ruled on his own from 1661, when Mazarin died. The court moved to Versailles on 6 May 1682, the Edict of Nantes was revoked in October 1685, and the king died in 1715.",
        },
        {
          id: 8,
          question: "Put these dynasties in the order they ruled.",
          answers: [
            { id: "a", text: "The Merovingians" },
            { id: "b", text: "The Carolingians" },
            { id: "c", text: "The direct Capetians" },
            { id: "d", text: "The Valois" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Merovingians ruled until 751, when Pepin the Short founded the Carolingian dynasty. The direct Capetians began with Hugh Capet in 987, and the Valois with Philip VI in 1328. The Bourbons came next, starting with Henry IV.",
        },
        {
          id: 9,
          question: "Put these last kings in the order they reigned.",
          answers: [
            { id: "a", text: "Louis XVI" },
            { id: "b", text: "Louis XVIII" },
            { id: "c", text: "Charles X" },
            { id: "d", text: "Louis-Philippe I" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Louis XVI reigned from 1774 to 1792. After the Revolution and the Empire, Louis XVIII returned in 1814, and his brother Charles X followed in 1824. Louis-Philippe took power in 1830 and was overthrown in 1848, which makes him the last king to rule France.",
        },
        {
          id: 10,
          question: "Put these kings of the Valois dynasty in the order they reigned.",
          answers: [
            { id: "a", text: "Charles V" },
            { id: "b", text: "Louis XI" },
            { id: "c", text: "Charles VIII" },
            { id: "d", text: "Henry III" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Charles V became king in 1364, Louis XI in 1461, Charles VIII in 1483 and Henry III in 1574. Henry III was the last Valois king, and Henry IV took over in 1589.",
        },
      ],
    },
    es: {
      title: "Los reyes de Francia en orden",
      description:
        "Diez series para ordenar cronológicamente: reyes, dinastías y grandes momentos de la historia de Francia, de Clodoveo a Luis Felipe.",
      questions: [
        {
          id: 1,
          image: "/images/q-rois-de-france-01.webp",
          question: "Ordena a estos reyes según su reinado.",
          answers: [
            { id: "a", text: "Clodoveo" },
            { id: "b", text: "Carlomagno" },
            { id: "c", text: "Hugo Capeto" },
            { id: "d", text: "San Luis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Clodoveo es rey de los francos desde 481, Carlomagno desde 768, Hugo Capeto es elegido en 987 y San Luis, es decir Luis IX, sube al trono en 1226.",
        },
        {
          id: 2,
          question: "Ordena a estos reyes medievales según su reinado.",
          answers: [
            { id: "a", text: "Felipe Augusto" },
            { id: "b", text: "Felipe el Hermoso" },
            { id: "c", text: "Juan el Bueno" },
            { id: "d", text: "Carlos VII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Felipe Augusto reina desde 1180, Felipe el Hermoso desde 1285, Juan el Bueno desde 1350 y Carlos VII desde 1422.",
        },
        {
          id: 3,
          question: "Ordena a estos reyes del Renacimiento y del siglo XVII según su reinado.",
          answers: [
            { id: "a", text: "Francisco I" },
            { id: "b", text: "Enrique II" },
            { id: "c", text: "Enrique IV" },
            { id: "d", text: "Luis XIII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Francisco I sube al trono en 1515, su hijo Enrique II en 1547, Enrique IV en 1589 y Luis XIII, hijo de Enrique IV, en 1610.",
        },
        {
          id: 4,
          image: "/images/q-rois-de-france-04.webp",
          question: "Ordena a estos reyes llamados Luis según su reinado.",
          answers: [
            { id: "a", text: "Luis XIV" },
            { id: "b", text: "Luis XV" },
            { id: "c", text: "Luis XVI" },
            { id: "d", text: "Luis XVIII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luis XIV es rey desde 1643, con 4 años, y reina 72 años. Su bisnieto Luis XV le sucede en 1715, y luego Luis XVI en 1774. Luis XVIII llega en 1814, tras la caída de Napoleón.",
        },
        {
          id: 5,
          question: "Ordena estos acontecimientos cronológicamente.",
          answers: [
            { id: "a", text: "La batalla de Bouvines" },
            { id: "b", text: "La muerte de San Luis ante Túnez" },
            { id: "c", text: "El comienzo de la guerra de los Cien Años" },
            { id: "d", text: "La coronación de Carlos VII en Reims" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Felipe Augusto gana en Bouvines en 1214. San Luis muere ante Túnez en 1270, durante la octava cruzada. La guerra de los Cien Años empieza en 1337, y Carlos VII es coronado en Reims en 1429, con Juana de Arco a su lado.",
        },
        {
          id: 6,
          image: "/images/q-rois-de-france-06.webp",
          question: "Ordena estos acontecimientos del siglo XVI y de comienzos del XVII.",
          answers: [
            { id: "a", text: "La batalla de Marignano" },
            { id: "b", text: "La matanza de San Bartolomé" },
            { id: "c", text: "El edicto de Nantes" },
            { id: "d", text: "El asesinato de Enrique IV" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Francisco I gana en Marignano en 1515. La matanza de San Bartolomé tiene lugar en 1572, con Carlos IX. Enrique IV firma el edicto de Nantes en 1598 y lo asesina Ravaillac en 1610.",
        },
        {
          id: 7,
          image: "/images/q-rois-de-france-07.webp",
          question: "Ordena estos momentos del reinado de Luis XIV.",
          answers: [
            { id: "a", text: "El inicio de su gobierno personal" },
            { id: "b", text: "La corte se instala en Versalles" },
            { id: "c", text: "La revocación del edicto de Nantes" },
            { id: "d", text: "Su muerte" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luis XIV gobierna solo desde 1661, cuando muere Mazarino. La corte se instala en Versalles el 6 de mayo de 1682, el edicto de Nantes se revoca en octubre de 1685 y el rey muere en 1715.",
        },
        {
          id: 8,
          question: "Ordena estas dinastías según el orden en que reinaron.",
          answers: [
            { id: "a", text: "Los merovingios" },
            { id: "b", text: "Los carolingios" },
            { id: "c", text: "Los Capetos directos" },
            { id: "d", text: "Los Valois" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los merovingios reinan hasta 751, cuando Pipino el Breve funda la dinastía carolingia. Los Capetos directos llegan con Hugo Capeto en 987, y los Valois con Felipe VI en 1328. Después vienen los Borbones, con Enrique IV.",
        },
        {
          id: 9,
          question: "Ordena a estos últimos reyes según su reinado.",
          answers: [
            { id: "a", text: "Luis XVI" },
            { id: "b", text: "Luis XVIII" },
            { id: "c", text: "Carlos X" },
            { id: "d", text: "Luis Felipe I" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luis XVI reina de 1774 a 1792. Tras la Revolución y el Imperio, Luis XVIII vuelve en 1814, y su hermano Carlos X le sucede en 1824. Luis Felipe llega al poder en 1830 y cae en 1848: es el último rey que reinó en Francia.",
        },
        {
          id: 10,
          question: "Ordena a estos reyes de la dinastía Valois según su reinado.",
          answers: [
            { id: "a", text: "Carlos V" },
            { id: "b", text: "Luis XI" },
            { id: "c", text: "Carlos VIII" },
            { id: "d", text: "Enrique III" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Carlos V es rey desde 1364, Luis XI desde 1461, Carlos VIII desde 1483 y Enrique III desde 1574. Enrique III es el último Valois, y Enrique IV le sucede en 1589.",
        },
      ],
    },
  },
};

export default [quizRoisDeFrance] as TranslatedQuiz[];
