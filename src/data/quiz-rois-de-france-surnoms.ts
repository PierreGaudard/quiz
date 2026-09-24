import type { TranslatedQuiz } from "./types";

/**
 * Quiz QCM sur les surnoms des rois de France : on donne le roi, il faut
 * retrouver son surnom.
 *
 * Les mauvaises réponses sont toutes de vrais surnoms portés par d'autres
 * rois, pour rester plausibles. Deux pièges évités : « le Bien-Aimé »
 * désigne Louis XV mais aussi Charles VI, et « le Pieux » Louis Ier comme
 * Robert II, donc aucun des deux n'est proposé à tort à côté de ces rois.
 * Les rois déjà nommés par leur surnom dans le premier quiz (Philippe
 * Auguste, Philippe le Bel, Jean le Bon, Saint Louis) ne sont pas repris.
 */
export const quizRoisDeFranceSurnoms: TranslatedQuiz = {
  slug: "quiz-rois-de-france-surnoms",
  slugs: { en: "french-kings-nicknames-quiz", fr: "quiz-rois-de-france-surnoms", es: "quiz-reyes-de-francia-apodos" },
  categorySlug: "histoire",
  subcategory: "Rois de France",
  difficulty: "medium",
  coverImage: "/images/cover-rois-de-france-surnoms.webp",
  gameType: "qcm",
  playCount: 4400,
  translations: {
    fr: {
      title: "Quiz : les surnoms des rois de France",
      description:
        "Dix rois de France et leur surnom à retrouver, du Bref au Bien-Aimé en passant par le Hutin et le Vert-Galant.",
      questions: [
        {
          id: 1,
          image: "/images/q-rois-de-france-surnoms-01.webp",
          question: "Quel est le surnom de Louis XV ?",
          answers: [
            { id: "a", text: "Le Bien-Aimé" },
            { id: "b", text: "Le Hardi" },
            { id: "c", text: "Le Long" },
            { id: "d", text: "Le Simple" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Bien-Aimé. Il reçoit ce surnom en 1744, quand toute la France prie pour lui pendant une grave maladie à Metz. Il sera beaucoup moins populaire à la fin de son règne.",
        },
        {
          id: 2,
          question: "Quel est le surnom de Charles V, roi de 1364 à 1380 ?",
          answers: [
            { id: "a", text: "Le Chauve" },
            { id: "b", text: "Le Sage" },
            { id: "c", text: "Le Gros" },
            { id: "d", text: "Le Bègue" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Sage. Charles V reprend une bonne partie des terres perdues face aux Anglais et réunit une grande bibliothèque au Louvre.",
        },
        {
          id: 3,
          question: "Quel est le surnom de Louis X, roi de 1314 à 1316 ?",
          answers: [
            { id: "a", text: "Le Jeune" },
            { id: "b", text: "Le Lion" },
            { id: "c", text: "Le Hutin" },
            { id: "d", text: "L'Affable" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Hutin, un vieux mot qui veut dire « le querelleur » ou « le bruyant ». C'est le fils aîné de Philippe le Bel, et il ne règne que deux ans.",
        },
        {
          id: 4,
          question: "Quel est le surnom de Charles II, petit-fils de Charlemagne ?",
          answers: [
            { id: "a", text: "Le Simple" },
            { id: "b", text: "Le Sage" },
            { id: "c", text: "Le Victorieux" },
            { id: "d", text: "Le Chauve" },
          ],
          correctAnswer: "d",
          explanation:
            "Le Chauve. C'est lui qui reçoit la partie ouest de l'empire de Charlemagne au traité de Verdun, en 843. « Le Simple », c'est Charles III.",
        },
        {
          id: 5,
          image: "/images/q-rois-de-france-surnoms-05.webp",
          question: "Quel roi est surnommé « le Roi-Soleil » ?",
          answers: [
            { id: "a", text: "Louis XIV" },
            { id: "b", text: "Louis XIII" },
            { id: "c", text: "Louis XV" },
            { id: "d", text: "Henri IV" },
          ],
          correctAnswer: "a",
          explanation:
            "Louis XIV. Il choisit lui-même le soleil comme emblème, et on le retrouve partout à Versailles.",
        },
        {
          id: 6,
          question: "Quel est le surnom de Charles VI, qui souffrait de crises de folie ?",
          answers: [
            { id: "a", text: "Le Chauve" },
            { id: "b", text: "Le Fol" },
            { id: "c", text: "Le Hardi" },
            { id: "d", text: "Le Lion" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Fol, ou le Fou. Ses crises commencent en 1392. Au début de son règne, on l'appelait d'ailleurs aussi le Bien-Aimé.",
        },
        {
          id: 7,
          question: "Quel est le surnom de Louis VI, roi de 1108 à 1137 ?",
          answers: [
            { id: "a", text: "Le Jeune" },
            { id: "b", text: "Le Hutin" },
            { id: "c", text: "Le Gros" },
            { id: "d", text: "Le Fainéant" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Gros. Il est devenu très corpulent en vieillissant. Son fils Louis VII, lui, est surnommé le Jeune.",
        },
        {
          id: 8,
          question: "Quel est le surnom de Pépin, le père de Charlemagne ?",
          answers: [
            { id: "a", text: "Le Long" },
            { id: "b", text: "Le Bègue" },
            { id: "c", text: "Le Gros" },
            { id: "d", text: "Le Bref" },
          ],
          correctAnswer: "d",
          explanation:
            "Le Bref, sans doute parce qu'il était petit. Il devient roi des Francs en 751 et fonde la dynastie des Carolingiens.",
        },
        {
          id: 9,
          image: "/images/q-rois-de-france-surnoms-09.webp",
          question: "Quel est le surnom d'Henri IV ?",
          answers: [
            { id: "a", text: "Le Vert-Galant" },
            { id: "b", text: "L'Affable" },
            { id: "c", text: "Le Victorieux" },
            { id: "d", text: "Le Juste" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Vert-Galant, à cause de ses nombreuses conquêtes amoureuses, même âgé. On l'appelle aussi « le bon roi Henri ».",
        },
        {
          id: 10,
          image: "/images/q-rois-de-france-surnoms-10.webp",
          question: "Quel est le surnom de Louis XIII ?",
          answers: [
            { id: "a", text: "Le Désiré" },
            { id: "b", text: "Le Sage" },
            { id: "c", text: "Le Juste" },
            { id: "d", text: "Le Bien-Aimé" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Juste. Louis XIII est le fils d'Henri IV et le père de Louis XIV. « Le Désiré », c'est Louis XVIII.",
        },
      ],
    },
    en: {
      title: "Quiz: the nicknames of French kings",
      description:
        "Ten French kings and the nickname you have to match to each one, from the Short to the Beloved by way of the Quarreller.",
      questions: [
        {
          id: 1,
          image: "/images/q-rois-de-france-surnoms-01.webp",
          question: "What was Louis XV's nickname?",
          answers: [
            { id: "a", text: "The Beloved" },
            { id: "b", text: "The Bold" },
            { id: "c", text: "The Tall" },
            { id: "d", text: "The Simple" },
          ],
          correctAnswer: "a",
          explanation:
            "The Beloved (le Bien-Aimé). He got it in 1744, when the whole country prayed for him during a serious illness in Metz. He was far less popular by the end of his reign.",
        },
        {
          id: 2,
          question: "What was the nickname of Charles V, king from 1364 to 1380?",
          answers: [
            { id: "a", text: "The Bald" },
            { id: "b", text: "The Wise" },
            { id: "c", text: "The Fat" },
            { id: "d", text: "The Stammerer" },
          ],
          correctAnswer: "b",
          explanation:
            "The Wise (le Sage). Charles V won back a good part of the land lost to the English and built up a large library at the Louvre.",
        },
        {
          id: 3,
          question: "What was the nickname of Louis X, king from 1314 to 1316?",
          answers: [
            { id: "a", text: "The Young" },
            { id: "b", text: "The Lion" },
            { id: "c", text: "The Quarreller" },
            { id: "d", text: "The Affable" },
          ],
          correctAnswer: "c",
          explanation:
            "The Quarreller (le Hutin, an old French word for quarrelsome or noisy). He was Philip the Fair's eldest son and only reigned for two years.",
        },
        {
          id: 4,
          question: "What was the nickname of Charles II, Charlemagne's grandson?",
          answers: [
            { id: "a", text: "The Simple" },
            { id: "b", text: "The Wise" },
            { id: "c", text: "The Victorious" },
            { id: "d", text: "The Bald" },
          ],
          correctAnswer: "d",
          explanation:
            "The Bald (le Chauve). He's the one who got the western part of Charlemagne's empire in the Treaty of Verdun, in 843. \"The Simple\" was Charles III.",
        },
        {
          id: 5,
          image: "/images/q-rois-de-france-surnoms-05.webp",
          question: "Which king was nicknamed \"the Sun King\"?",
          answers: [
            { id: "a", text: "Louis XIV" },
            { id: "b", text: "Louis XIII" },
            { id: "c", text: "Louis XV" },
            { id: "d", text: "Henry IV" },
          ],
          correctAnswer: "a",
          explanation:
            "Louis XIV. He picked the sun as his emblem himself, and you can see it all over Versailles.",
        },
        {
          id: 6,
          question: "What was the nickname of Charles VI, who suffered bouts of madness?",
          answers: [
            { id: "a", text: "The Bald" },
            { id: "b", text: "The Mad" },
            { id: "c", text: "The Bold" },
            { id: "d", text: "The Lion" },
          ],
          correctAnswer: "b",
          explanation:
            "The Mad (le Fol). His attacks began in 1392. Early in his reign he was also called the Beloved.",
        },
        {
          id: 7,
          question: "What was the nickname of Louis VI, king from 1108 to 1137?",
          answers: [
            { id: "a", text: "The Young" },
            { id: "b", text: "The Quarreller" },
            { id: "c", text: "The Fat" },
            { id: "d", text: "The Do-Nothing" },
          ],
          correctAnswer: "c",
          explanation:
            "The Fat (le Gros). He grew very heavy as he got older. His son Louis VII was known as the Young.",
        },
        {
          id: 8,
          question: "What was the nickname of Pepin, Charlemagne's father?",
          answers: [
            { id: "a", text: "The Tall" },
            { id: "b", text: "The Stammerer" },
            { id: "c", text: "The Fat" },
            { id: "d", text: "The Short" },
          ],
          correctAnswer: "d",
          explanation:
            "The Short (le Bref), probably because he wasn't tall. He became king of the Franks in 751 and founded the Carolingian dynasty.",
        },
        {
          id: 9,
          image: "/images/q-rois-de-france-surnoms-09.webp",
          question: "What was Henry IV's nickname?",
          answers: [
            { id: "a", text: "The Green Gallant" },
            { id: "b", text: "The Affable" },
            { id: "c", text: "The Victorious" },
            { id: "d", text: "The Just" },
          ],
          correctAnswer: "a",
          explanation:
            "The Green Gallant (le Vert-Galant), because of his many love affairs, even late in life. He's also remembered as \"Good King Henry\".",
        },
        {
          id: 10,
          image: "/images/q-rois-de-france-surnoms-10.webp",
          question: "What was Louis XIII's nickname?",
          answers: [
            { id: "a", text: "The Desired" },
            { id: "b", text: "The Wise" },
            { id: "c", text: "The Just" },
            { id: "d", text: "The Beloved" },
          ],
          correctAnswer: "c",
          explanation:
            "The Just (le Juste). Louis XIII was Henry IV's son and Louis XIV's father. \"The Desired\" was Louis XVIII.",
        },
      ],
    },
    es: {
      title: "Quiz: los apodos de los reyes de Francia",
      description:
        "Diez reyes de Francia y el apodo que hay que encontrar para cada uno, del Breve al Bienamado, pasando por el Obstinado.",
      questions: [
        {
          id: 1,
          image: "/images/q-rois-de-france-surnoms-01.webp",
          question: "¿Cuál es el apodo de Luis XV?",
          answers: [
            { id: "a", text: "El Bienamado" },
            { id: "b", text: "El Atrevido" },
            { id: "c", text: "El Largo" },
            { id: "d", text: "El Simple" },
          ],
          correctAnswer: "a",
          explanation:
            "El Bienamado. Se lo pusieron en 1744, cuando todo el país rezó por él durante una enfermedad grave en Metz. Al final de su reinado era mucho menos popular.",
        },
        {
          id: 2,
          question: "¿Cuál es el apodo de Carlos V, rey de 1364 a 1380?",
          answers: [
            { id: "a", text: "El Calvo" },
            { id: "b", text: "El Sabio" },
            { id: "c", text: "El Gordo" },
            { id: "d", text: "El Tartamudo" },
          ],
          correctAnswer: "b",
          explanation:
            "El Sabio. Carlos V recuperó buena parte de las tierras perdidas frente a los ingleses y reunió una gran biblioteca en el Louvre.",
        },
        {
          id: 3,
          question: "¿Cuál es el apodo de Luis X, rey de 1314 a 1316?",
          answers: [
            { id: "a", text: "El Joven" },
            { id: "b", text: "El León" },
            { id: "c", text: "El Obstinado" },
            { id: "d", text: "El Afable" },
          ],
          correctAnswer: "c",
          explanation:
            "El Obstinado, que en francés es «le Hutin», una palabra antigua que quiere decir pendenciero o ruidoso. Era el hijo mayor de Felipe el Hermoso y solo reinó dos años.",
        },
        {
          id: 4,
          question: "¿Cuál es el apodo de Carlos II, nieto de Carlomagno?",
          answers: [
            { id: "a", text: "El Simple" },
            { id: "b", text: "El Sabio" },
            { id: "c", text: "El Victorioso" },
            { id: "d", text: "El Calvo" },
          ],
          correctAnswer: "d",
          explanation:
            "El Calvo. Es el que recibió la parte oeste del imperio de Carlomagno en el tratado de Verdún, en 843. «El Simple» es Carlos III.",
        },
        {
          id: 5,
          image: "/images/q-rois-de-france-surnoms-05.webp",
          question: "¿Qué rey es conocido como «el Rey Sol»?",
          answers: [
            { id: "a", text: "Luis XIV" },
            { id: "b", text: "Luis XIII" },
            { id: "c", text: "Luis XV" },
            { id: "d", text: "Enrique IV" },
          ],
          correctAnswer: "a",
          explanation:
            "Luis XIV. Él mismo eligió el sol como emblema, y aparece por todas partes en Versalles.",
        },
        {
          id: 6,
          question: "¿Cuál es el apodo de Carlos VI, que sufría ataques de locura?",
          answers: [
            { id: "a", text: "El Calvo" },
            { id: "b", text: "El Loco" },
            { id: "c", text: "El Atrevido" },
            { id: "d", text: "El León" },
          ],
          correctAnswer: "b",
          explanation:
            "El Loco. Sus crisis empezaron en 1392. Al principio de su reinado también lo llamaban el Bienamado.",
        },
        {
          id: 7,
          question: "¿Cuál es el apodo de Luis VI, rey de 1108 a 1137?",
          answers: [
            { id: "a", text: "El Joven" },
            { id: "b", text: "El Obstinado" },
            { id: "c", text: "El Gordo" },
            { id: "d", text: "El Holgazán" },
          ],
          correctAnswer: "c",
          explanation:
            "El Gordo. Engordó mucho con los años. A su hijo Luis VII lo llamaban el Joven.",
        },
        {
          id: 8,
          question: "¿Cuál es el apodo de Pipino, el padre de Carlomagno?",
          answers: [
            { id: "a", text: "El Largo" },
            { id: "b", text: "El Tartamudo" },
            { id: "c", text: "El Gordo" },
            { id: "d", text: "El Breve" },
          ],
          correctAnswer: "d",
          explanation:
            "El Breve, seguramente porque era bajo. Se convirtió en rey de los francos en 751 y fundó la dinastía carolingia.",
        },
        {
          id: 9,
          image: "/images/q-rois-de-france-surnoms-09.webp",
          question: "¿Cuál es el apodo de Enrique IV?",
          answers: [
            { id: "a", text: "El Verde Galán" },
            { id: "b", text: "El Afable" },
            { id: "c", text: "El Victorioso" },
            { id: "d", text: "El Justo" },
          ],
          correctAnswer: "a",
          explanation:
            "El Verde Galán, por sus muchas conquistas amorosas, incluso ya mayor. También se le recuerda como «el buen rey Enrique».",
        },
        {
          id: 10,
          image: "/images/q-rois-de-france-surnoms-10.webp",
          question: "¿Cuál es el apodo de Luis XIII?",
          answers: [
            { id: "a", text: "El Deseado" },
            { id: "b", text: "El Sabio" },
            { id: "c", text: "El Justo" },
            { id: "d", text: "El Bienamado" },
          ],
          correctAnswer: "c",
          explanation:
            "El Justo. Luis XIII era hijo de Enrique IV y padre de Luis XIV. «El Deseado» es Luis XVIII.",
        },
      ],
    },
  },
};

export default [quizRoisDeFranceSurnoms] as TranslatedQuiz[];
