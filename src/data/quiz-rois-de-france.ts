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
        "Vingt suites à remettre dans l'ordre chronologique : des rois, des dynasties et des grands événements, de Clovis à Louis-Philippe.",
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
        {
          id: 11,
          question: "Remets ces rois du haut Moyen Âge dans l'ordre de leur règne.",
          answers: [
            { id: "a", text: "Dagobert Ier" },
            { id: "b", text: "Pépin le Bref" },
            { id: "c", text: "Louis le Pieux" },
            { id: "d", text: "Charles le Chauve" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dagobert Ier, un Mérovingien, devient roi des Francs en 629. Pépin le Bref prend la couronne en 751, Louis le Pieux succède à son père Charlemagne en 814, et Charles le Chauve, son fils, reçoit la Francie occidentale en 843.",
        },
        {
          id: 12,
          question: "Remets ces premiers Capétiens dans l'ordre de leur règne.",
          answers: [
            { id: "a", text: "Robert II le Pieux" },
            { id: "b", text: "Henri Ier" },
            { id: "c", text: "Philippe Ier" },
            { id: "d", text: "Louis VI le Gros" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Robert II succède à son père Hugues Capet en 996. Henri Ier devient roi en 1031, Philippe Ier en 1060 et Louis VI le Gros en 1108. Le fils succède chaque fois au père.",
        },
        {
          id: 13,
          question: "Remets ces rois des XIIIe et XIVe siècles dans l'ordre de leur règne.",
          answers: [
            { id: "a", text: "Louis VIII" },
            { id: "b", text: "Philippe III" },
            { id: "c", text: "Louis X" },
            { id: "d", text: "Philippe VI" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Louis VIII devient roi en 1223 et Philippe III en 1270. Louis X monte sur le trône en 1314, et Philippe VI en 1328 : c'est le premier roi de la dynastie des Valois.",
        },
        {
          id: 14,
          question: "Remets ces batailles dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "La bataille de Castillon" },
            { id: "b", text: "La bataille d'Ivry" },
            { id: "c", text: "La bataille de Rocroi" },
            { id: "d", text: "La bataille de Fontenoy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Castillon, en 1453, met fin à la guerre de Cent Ans. Henri IV gagne à Ivry en 1590. Rocroi, en 1643, est une victoire des premiers jours du règne de Louis XIV, et Fontenoy, en 1745, une victoire de l'armée de Louis XV.",
        },
        {
          id: 15,
          question: "Remets ces reines dans l'ordre où elles ont été reines de France.",
          answers: [
            { id: "a", text: "Aliénor d'Aquitaine" },
            { id: "b", text: "Blanche de Castille" },
            { id: "c", text: "Anne d'Autriche" },
            { id: "d", text: "Marie-Antoinette" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Aliénor d'Aquitaine devient reine en 1137, en épousant Louis VII. Blanche de Castille l'est en 1223, avec Louis VIII, Anne d'Autriche en 1615, en épousant Louis XIII, et Marie-Antoinette en 1774, quand Louis XVI monte sur le trône.",
        },
        {
          id: 16,
          question: "Remets ces chantiers dans l'ordre où ils ont commencé.",
          answers: [
            { id: "a", text: "Le château de Fontainebleau de François Ier" },
            { id: "b", text: "Le Pont-Neuf, à Paris" },
            { id: "c", text: "Le palais du Luxembourg" },
            { id: "d", text: "La galerie des Glaces de Versailles" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "François Ier fait rebâtir Fontainebleau à partir de 1528. Le Pont-Neuf est commencé en 1578 sous Henri III et terminé sous Henri IV. Marie de Médicis lance le palais du Luxembourg en 1615, et la galerie des Glaces est construite de 1678 à 1684.",
        },
        {
          id: 17,
          question: "Remets ces événements du règne de Louis XIII dans l'ordre.",
          answers: [
            { id: "a", text: "Le siège de La Rochelle" },
            { id: "b", text: "La journée des Dupes" },
            { id: "c", text: "L'entrée en guerre ouverte contre l'Espagne" },
            { id: "d", text: "La mort de Richelieu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le siège de La Rochelle, ville protestante, dure de 1627 à 1628. La journée des Dupes, en novembre 1630, conforte Richelieu face à la reine mère. La France déclare la guerre à l'Espagne en 1635, et Richelieu meurt en décembre 1642.",
        },
        {
          id: 18,
          question: "Remets ces événements des guerres de Religion dans l'ordre.",
          answers: [
            { id: "a", text: "Le massacre de Wassy" },
            { id: "b", text: "La paix de Saint-Germain" },
            { id: "c", text: "La journée des Barricades, à Paris" },
            { id: "d", text: "L'abjuration d'Henri IV" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le massacre de protestants à Wassy, en 1562, lance les guerres de Religion. La paix de Saint-Germain est signée en 1570, la journée des Barricades chasse Henri III de Paris en mai 1588, et Henri IV renonce au protestantisme en 1593.",
        },
        {
          id: 19,
          question: "Remets ces événements du XVIIIe siècle dans l'ordre.",
          answers: [
            { id: "a", text: "Le début de la Régence de Philippe d'Orléans" },
            { id: "b", text: "L'attentat de Damiens contre Louis XV" },
            { id: "c", text: "Le traité de Paris, qui fait perdre le Canada" },
            { id: "d", text: "Le sacre de Louis XVI à Reims" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Régence commence en 1715, à la mort de Louis XIV, car Louis XV n'a que 5 ans. Damiens blesse Louis XV d'un coup de couteau en 1757. Le traité de Paris est signé en 1763, et Louis XVI est sacré à Reims en 1775.",
        },
        {
          id: 20,
          question: "Remets ces provinces dans l'ordre où elles sont rattachées au royaume.",
          answers: [
            { id: "a", text: "La Normandie" },
            { id: "b", text: "Le Dauphiné" },
            { id: "c", text: "La Bretagne" },
            { id: "d", text: "La Franche-Comté" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Philippe Auguste reprend la Normandie aux Plantagenêts en 1204. Le Dauphiné est cédé au roi en 1349. La Bretagne est unie à la France en 1532, et Louis XIV obtient la Franche-Comté en 1678, au traité de Nimègue.",
        },
      ],
    },
    en: {
      title: "Kings of France in chronological order",
      description:
        "Twenty sets to put in chronological order: kings, dynasties and big events in French history, from Clovis to Louis-Philippe.",
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
        {
          id: 11,
          question: "Put these early medieval kings in the order of their reigns.",
          answers: [
            { id: "a", text: "Dagobert I" },
            { id: "b", text: "Pepin the Short" },
            { id: "c", text: "Louis the Pious" },
            { id: "d", text: "Charles the Bald" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dagobert I, a Merovingian, became king of the Franks in 629. Pepin the Short took the crown in 751, Louis the Pious succeeded his father Charlemagne in 814, and Charles the Bald, his son, received West Francia in 843.",
        },
        {
          id: 12,
          question: "Put these early Capetian kings in the order of their reigns.",
          answers: [
            { id: "a", text: "Robert II the Pious" },
            { id: "b", text: "Henry I" },
            { id: "c", text: "Philip I" },
            { id: "d", text: "Louis VI the Fat" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Robert II succeeded his father Hugh Capet in 996. Henry I became king in 1031, Philip I in 1060 and Louis VI the Fat in 1108. Each time, the son followed the father.",
        },
        {
          id: 13,
          question: "Put these 13th and 14th century kings in the order of their reigns.",
          answers: [
            { id: "a", text: "Louis VIII" },
            { id: "b", text: "Philip III" },
            { id: "c", text: "Louis X" },
            { id: "d", text: "Philip VI" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Louis VIII became king in 1223 and Philip III in 1270. Louis X came to the throne in 1314 and Philip VI in 1328, as the first king of the Valois dynasty.",
        },
        {
          id: 14,
          question: "Put these battles in chronological order.",
          answers: [
            { id: "a", text: "The battle of Castillon" },
            { id: "b", text: "The battle of Ivry" },
            { id: "c", text: "The battle of Rocroi" },
            { id: "d", text: "The battle of Fontenoy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Castillon, in 1453, ended the Hundred Years' War. Henry IV won at Ivry in 1590. Rocroi, in 1643, was a victory in the very first days of Louis XIV's reign, and Fontenoy, in 1745, a victory for the army of Louis XV.",
        },
        {
          id: 15,
          question: "Put these queens in the order in which they were Queen of France.",
          answers: [
            { id: "a", text: "Eleanor of Aquitaine" },
            { id: "b", text: "Blanche of Castile" },
            { id: "c", text: "Anne of Austria" },
            { id: "d", text: "Marie Antoinette" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eleanor of Aquitaine became queen in 1137 when she married Louis VII. Blanche of Castile became queen in 1223 with Louis VIII, Anne of Austria in 1615 when she married Louis XIII, and Marie Antoinette in 1774, when Louis XVI came to the throne.",
        },
        {
          id: 16,
          question: "Put these building projects in the order they were started.",
          answers: [
            { id: "a", text: "Francis I's Château de Fontainebleau" },
            { id: "b", text: "The Pont Neuf in Paris" },
            { id: "c", text: "The Luxembourg Palace" },
            { id: "d", text: "The Hall of Mirrors at Versailles" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Francis I had Fontainebleau rebuilt from 1528. The Pont Neuf was begun in 1578 under Henry III and finished under Henry IV. Marie de' Medici started the Luxembourg Palace in 1615, and the Hall of Mirrors was built from 1678 to 1684.",
        },
        {
          id: 17,
          question: "Put these events from the reign of Louis XIII in order.",
          answers: [
            { id: "a", text: "The siege of La Rochelle" },
            { id: "b", text: "The Day of the Dupes" },
            { id: "c", text: "Open war with Spain" },
            { id: "d", text: "The death of Richelieu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The siege of the Protestant town of La Rochelle lasted from 1627 to 1628. The Day of the Dupes, in November 1630, left Richelieu stronger than the queen mother. France declared war on Spain in 1635, and Richelieu died in December 1642.",
        },
        {
          id: 18,
          question: "Put these events of the Wars of Religion in order.",
          answers: [
            { id: "a", text: "The massacre of Wassy" },
            { id: "b", text: "The Peace of Saint-Germain" },
            { id: "c", text: "The Day of the Barricades in Paris" },
            { id: "d", text: "Henry IV gives up Protestantism" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The massacre of Protestants at Wassy, in 1562, started the Wars of Religion. The Peace of Saint-Germain was signed in 1570, the Day of the Barricades drove Henry III out of Paris in May 1588, and Henry IV gave up Protestantism in 1593.",
        },
        {
          id: 19,
          question: "Put these 18th century events in order.",
          answers: [
            { id: "a", text: "The start of the Regency of Philippe d'Orléans" },
            { id: "b", text: "Damiens's attack on Louis XV" },
            { id: "c", text: "The Treaty of Paris, in which France loses Canada" },
            { id: "d", text: "The coronation of Louis XVI at Reims" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Regency began in 1715, when Louis XIV died, because Louis XV was only 5. Damiens stabbed Louis XV with a knife in 1757. The Treaty of Paris was signed in 1763, and Louis XVI was crowned at Reims in 1775.",
        },
        {
          id: 20,
          question: "Put these provinces in the order they became part of the kingdom.",
          answers: [
            { id: "a", text: "Normandy" },
            { id: "b", text: "The Dauphiné" },
            { id: "c", text: "Brittany" },
            { id: "d", text: "Franche-Comté" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Philip Augustus took Normandy back from the Plantagenets in 1204. The Dauphiné was handed over to the king in 1349. Brittany was united with France in 1532, and Louis XIV gained Franche-Comté in 1678, by the Treaty of Nijmegen.",
        },
      ],
    },
    es: {
      title: "Los reyes de Francia en orden",
      description:
        "Veinte series para ordenar cronológicamente: reyes, dinastías y grandes momentos de la historia de Francia, de Clodoveo a Luis Felipe.",
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
        {
          id: 11,
          question: "Ordena a estos reyes de la Alta Edad Media según su reinado.",
          answers: [
            { id: "a", text: "Dagoberto I" },
            { id: "b", text: "Pipino el Breve" },
            { id: "c", text: "Luis el Piadoso" },
            { id: "d", text: "Carlos el Calvo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dagoberto I, un merovingio, llega a rey de los francos en 629. Pipino el Breve toma la corona en 751, Luis el Piadoso sucede a su padre Carlomagno en 814, y Carlos el Calvo, su hijo, recibe la Francia occidental en 843.",
        },
        {
          id: 12,
          question: "Ordena a estos primeros Capetos según su reinado.",
          answers: [
            { id: "a", text: "Roberto II el Piadoso" },
            { id: "b", text: "Enrique I" },
            { id: "c", text: "Felipe I" },
            { id: "d", text: "Luis VI el Gordo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Roberto II sucede a su padre Hugo Capeto en 996. Enrique I llega a rey en 1031, Felipe I en 1060 y Luis VI el Gordo en 1108. Cada vez, el hijo sucede al padre.",
        },
        {
          id: 13,
          question: "Ordena a estos reyes de los siglos XIII y XIV según su reinado.",
          answers: [
            { id: "a", text: "Luis VIII" },
            { id: "b", text: "Felipe III" },
            { id: "c", text: "Luis X" },
            { id: "d", text: "Felipe VI" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luis VIII llega a rey en 1223 y Felipe III en 1270. Luis X sube al trono en 1314, y Felipe VI en 1328: es el primer rey de la dinastía Valois.",
        },
        {
          id: 14,
          question: "Ordena estas batallas cronológicamente.",
          answers: [
            { id: "a", text: "La batalla de Castillon" },
            { id: "b", text: "La batalla de Ivry" },
            { id: "c", text: "La batalla de Rocroi" },
            { id: "d", text: "La batalla de Fontenoy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Castillon, en 1453, pone fin a la guerra de los Cien Años. Enrique IV vence en Ivry en 1590. Rocroi, en 1643, es una victoria de los primeros días del reinado de Luis XIV, y Fontenoy, en 1745, una victoria del ejército de Luis XV.",
        },
        {
          id: 15,
          question: "Ordena a estas reinas según la época en que fueron reinas de Francia.",
          answers: [
            { id: "a", text: "Leonor de Aquitania" },
            { id: "b", text: "Blanca de Castilla" },
            { id: "c", text: "Ana de Austria" },
            { id: "d", text: "María Antonieta" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Leonor de Aquitania es reina desde 1137, al casarse con Luis VII. Blanca de Castilla lo es en 1223, con Luis VIII, Ana de Austria en 1615, al casarse con Luis XIII, y María Antonieta en 1774, cuando Luis XVI sube al trono.",
        },
        {
          id: 16,
          question: "Ordena estas obras según el momento en que empezaron.",
          answers: [
            { id: "a", text: "El castillo de Fontainebleau de Francisco I" },
            { id: "b", text: "El Pont-Neuf, en París" },
            { id: "c", text: "El palacio de Luxemburgo" },
            { id: "d", text: "La galería de los Espejos de Versalles" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Francisco I manda reconstruir Fontainebleau a partir de 1528. El Pont-Neuf se empieza en 1578, con Enrique III, y se termina con Enrique IV. María de Médici inicia el palacio de Luxemburgo en 1615, y la galería de los Espejos se construye de 1678 a 1684.",
        },
        {
          id: 17,
          question: "Ordena estos hechos del reinado de Luis XIII.",
          answers: [
            { id: "a", text: "El asedio de La Rochelle" },
            { id: "b", text: "La jornada de los Engañados" },
            { id: "c", text: "La guerra abierta contra España" },
            { id: "d", text: "La muerte de Richelieu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El asedio de La Rochelle, ciudad protestante, dura de 1627 a 1628. La jornada de los Engañados, en noviembre de 1630, refuerza a Richelieu frente a la reina madre. Francia declara la guerra a España en 1635, y Richelieu muere en diciembre de 1642.",
        },
        {
          id: 18,
          question: "Ordena estos hechos de las guerras de religión.",
          answers: [
            { id: "a", text: "La matanza de Wassy" },
            { id: "b", text: "La paz de Saint-Germain" },
            { id: "c", text: "La jornada de las Barricadas, en París" },
            { id: "d", text: "La abjuración de Enrique IV" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La matanza de protestantes en Wassy, en 1562, abre las guerras de religión. La paz de Saint-Germain se firma en 1570, la jornada de las Barricadas echa a Enrique III de París en mayo de 1588, y Enrique IV renuncia al protestantismo en 1593.",
        },
        {
          id: 19,
          question: "Ordena estos hechos del siglo XVIII.",
          answers: [
            { id: "a", text: "El inicio de la Regencia de Felipe de Orleans" },
            { id: "b", text: "El atentado de Damiens contra Luis XV" },
            { id: "c", text: "El tratado de París, por el que Francia pierde Canadá" },
            { id: "d", text: "La coronación de Luis XVI en Reims" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Regencia empieza en 1715, a la muerte de Luis XIV, porque Luis XV solo tiene 5 años. Damiens hiere a Luis XV con un cuchillo en 1757. El tratado de París se firma en 1763, y Luis XVI es coronado en Reims en 1775.",
        },
        {
          id: 20,
          question: "Ordena estas provincias según su incorporación al reino.",
          answers: [
            { id: "a", text: "Normandía" },
            { id: "b", text: "El Delfinado" },
            { id: "c", text: "Bretaña" },
            { id: "d", text: "El Franco Condado" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Felipe Augusto recupera Normandía de los Plantagenet en 1204. El Delfinado se cede al rey en 1349. Bretaña se une a Francia en 1532, y Luis XIV obtiene el Franco Condado en 1678, por el tratado de Nimega.",
        },
      ],
    },
  },
};

export default [quizRoisDeFrance] as TranslatedQuiz[];
