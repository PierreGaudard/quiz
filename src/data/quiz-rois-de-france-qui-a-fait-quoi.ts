import type { TranslatedQuiz } from "./types";

/**
 * Quiz duel sur les rois de France : deux rois, et il faut dire lequel a
 * fait construire un monument, fondé une institution ou vécu un épisode
 * précis.
 *
 * Le premier quiz Rois de France (quiz-rois-de-france.ts) remet des règnes
 * et des événements dans l'ordre : celui-ci ne demande jamais qui a régné
 * avant l'autre. Le moteur n'affiche que answers[0] et answers[1]
 * (DuelPlayer.tsx), la bonne réponse change donc de place d'une question à
 * l'autre.
 */
export const quizRoisDeFranceQuiAFaitQuoi: TranslatedQuiz = {
  slug: "quiz-rois-de-france-qui-a-fait-quoi",
  slugs: {
    en: "french-kings-who-did-what-quiz",
    fr: "quiz-rois-de-france-qui-a-fait-quoi",
    es: "quiz-reyes-de-francia-quien-hizo-que",
  },
  categorySlug: "histoire",
  subcategory: "Rois de France",
  difficulty: "medium",
  coverImage: "/images/cover-rois-de-france-qui-a-fait-quoi.webp",
  gameType: "duel",
  playCount: 3900,
  translations: {
    fr: {
      title: "Duel des rois de France : qui a fait quoi ?",
      description:
        "Dix duels entre deux rois de France : lequel a fait bâtir Chambord, fondé les Invalides ou épousé Anne de Bretagne en premier ?",
      questions: [
        {
          id: 1,
          question: "Qui a lancé la construction du château de Chambord ?",
          answers: [
            { id: "a", text: "François Ier" },
            { id: "b", text: "Louis XII" },
          ],
          correctAnswer: "a",
          explanation:
            "François Ier, en 1519. Le chantier dure des dizaines d'années, et le roi n'y séjourne en tout que quelques semaines.",
        },
        {
          id: 2,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-02.webp",
          question: "Sous quel roi le cardinal de Richelieu fonde-t-il l'Académie française, en 1635 ?",
          answers: [
            { id: "a", text: "Louis XIV" },
            { id: "b", text: "Louis XIII" },
          ],
          correctAnswer: "b",
          explanation:
            "Louis XIII, dont Richelieu était le principal ministre. Louis XIV n'était même pas encore né : il naît en 1638.",
        },
        {
          id: 3,
          question: "Quel roi meurt en 1559 après avoir été blessé à l'œil pendant un tournoi ?",
          answers: [
            { id: "a", text: "Henri II" },
            { id: "b", text: "Henri III" },
          ],
          correctAnswer: "a",
          explanation:
            "Henri II. La lance du comte de Montgomery se brise et un éclat le touche à l'œil, le 30 juin 1559. Il meurt dix jours plus tard.",
        },
        {
          id: 4,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-04.webp",
          question: "Qui a fondé l'hôtel des Invalides, pour loger les anciens soldats ?",
          answers: [
            { id: "a", text: "Louis XV" },
            { id: "b", text: "Louis XIV" },
          ],
          correctAnswer: "b",
          explanation:
            "Louis XIV, en 1670. Les Invalides abritent aujourd'hui le musée de l'Armée et le tombeau de Napoléon.",
        },
        {
          id: 5,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-05.webp",
          question: "Qui a fait construire la Sainte-Chapelle, à Paris, pour y garder la couronne d'épines ?",
          answers: [
            { id: "a", text: "Louis IX" },
            { id: "b", text: "Philippe Auguste" },
          ],
          correctAnswer: "a",
          explanation:
            "Louis IX, c'est-à-dire Saint Louis. La chapelle est consacrée en 1248, et ses vitraux sont parmi les plus célèbres du monde.",
        },
        {
          id: 6,
          question: "Qui a fait bâtir la première forteresse du Louvre, vers 1190 ?",
          answers: [
            { id: "a", text: "Charles V" },
            { id: "b", text: "Philippe Auguste" },
          ],
          correctAnswer: "b",
          explanation:
            "Philippe Auguste, pour protéger Paris avant de partir en croisade. Charles V la transforme plus tard en résidence royale. On voit encore ses fondations sous le musée.",
        },
        {
          id: 7,
          question: "Quel roi est assassiné en 1589 par le moine Jacques Clément ?",
          answers: [
            { id: "a", text: "Henri III" },
            { id: "b", text: "Henri IV" },
          ],
          correctAnswer: "a",
          explanation:
            "Henri III, poignardé à Saint-Cloud. Henri IV, qui lui succède, sera lui aussi assassiné, mais en 1610 et par Ravaillac.",
        },
        {
          id: 8,
          question: "Lequel des deux a épousé Anne de Bretagne en premier ?",
          answers: [
            { id: "a", text: "Louis XII" },
            { id: "b", text: "Charles VIII" },
          ],
          correctAnswer: "b",
          explanation:
            "Charles VIII, en 1491. Après sa mort, Anne épouse son successeur Louis XII, en 1499. Elle a donc été deux fois reine de France.",
        },
        {
          id: 9,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-09.webp",
          question: "Quel roi a fait construire le Petit Trianon, à Versailles ?",
          answers: [
            { id: "a", text: "Louis XV" },
            { id: "b", text: "Louis XVI" },
          ],
          correctAnswer: "a",
          explanation:
            "Louis XV, entre 1762 et 1768, d'abord pour Madame de Pompadour. Louis XVI l'offre ensuite à Marie-Antoinette.",
        },
        {
          id: 10,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-10.webp",
          question: "Quel roi a lancé la place Royale, l'actuelle place des Vosges, à Paris ?",
          answers: [
            { id: "a", text: "Louis XIV" },
            { id: "b", text: "Henri IV" },
          ],
          correctAnswer: "b",
          explanation:
            "Henri IV, en 1605. Il meurt avant la fin des travaux, et la place est inaugurée en 1612, sous Louis XIII.",
        },
      ],
    },
    en: {
      title: "French kings duel: who did what?",
      description:
        "Ten duels between two French kings: which one built Chambord, founded Les Invalides or married Anne of Brittany first?",
      questions: [
        {
          id: 1,
          question: "Who started building the Château de Chambord?",
          answers: [
            { id: "a", text: "Francis I" },
            { id: "b", text: "Louis XII" },
          ],
          correctAnswer: "a",
          explanation:
            "Francis I, in 1519. The work went on for decades, and the king only spent a few weeks there in total.",
        },
        {
          id: 2,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-02.webp",
          question: "Under which king did Cardinal Richelieu found the Académie française in 1635?",
          answers: [
            { id: "a", text: "Louis XIV" },
            { id: "b", text: "Louis XIII" },
          ],
          correctAnswer: "b",
          explanation:
            "Louis XIII, whose chief minister was Richelieu. Louis XIV wasn't even born yet: he arrived in 1638.",
        },
        {
          id: 3,
          question: "Which king died in 1559 after being wounded in the eye at a tournament?",
          answers: [
            { id: "a", text: "Henry II" },
            { id: "b", text: "Henry III" },
          ],
          correctAnswer: "a",
          explanation:
            "Henry II. The Count of Montgomery's lance broke and a splinter hit him in the eye on 30 June 1559. He died ten days later.",
        },
        {
          id: 4,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-04.webp",
          question: "Who founded Les Invalides in Paris, to house old soldiers?",
          answers: [
            { id: "a", text: "Louis XV" },
            { id: "b", text: "Louis XIV" },
          ],
          correctAnswer: "b",
          explanation:
            "Louis XIV, in 1670. Today Les Invalides houses the Army Museum and Napoleon's tomb.",
        },
        {
          id: 5,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-05.webp",
          question: "Who had the Sainte-Chapelle built in Paris to hold the Crown of Thorns?",
          answers: [
            { id: "a", text: "Louis IX" },
            { id: "b", text: "Philip Augustus" },
          ],
          correctAnswer: "a",
          explanation:
            "Louis IX, better known as Saint Louis. The chapel was consecrated in 1248, and its stained glass is among the most famous in the world.",
        },
        {
          id: 6,
          question: "Who built the first Louvre fortress, around 1190?",
          answers: [
            { id: "a", text: "Charles V" },
            { id: "b", text: "Philip Augustus" },
          ],
          correctAnswer: "b",
          explanation:
            "Philip Augustus, to protect Paris before he left on crusade. Charles V later turned it into a royal residence. Its foundations can still be seen under the museum.",
        },
        {
          id: 7,
          question: "Which king was assassinated in 1589 by the monk Jacques Clément?",
          answers: [
            { id: "a", text: "Henry III" },
            { id: "b", text: "Henry IV" },
          ],
          correctAnswer: "a",
          explanation:
            "Henry III, stabbed at Saint-Cloud. Henry IV, who came after him, was assassinated too, but in 1610 and by Ravaillac.",
        },
        {
          id: 8,
          question: "Which of the two married Anne of Brittany first?",
          answers: [
            { id: "a", text: "Louis XII" },
            { id: "b", text: "Charles VIII" },
          ],
          correctAnswer: "b",
          explanation:
            "Charles VIII, in 1491. After his death Anne married his successor Louis XII, in 1499, so she was queen of France twice.",
        },
        {
          id: 9,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-09.webp",
          question: "Which king had the Petit Trianon built at Versailles?",
          answers: [
            { id: "a", text: "Louis XV" },
            { id: "b", text: "Louis XVI" },
          ],
          correctAnswer: "a",
          explanation:
            "Louis XV, between 1762 and 1768, first for Madame de Pompadour. Louis XVI later gave it to Marie Antoinette.",
        },
        {
          id: 10,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-10.webp",
          question: "Which king started the Place Royale, today's Place des Vosges in Paris?",
          answers: [
            { id: "a", text: "Louis XIV" },
            { id: "b", text: "Henry IV" },
          ],
          correctAnswer: "b",
          explanation:
            "Henry IV, in 1605. He died before it was finished, and the square was opened in 1612, under Louis XIII.",
        },
      ],
    },
    es: {
      title: "Duelo de reyes de Francia: ¿quién hizo qué?",
      description:
        "Diez duelos entre dos reyes de Francia: ¿cuál construyó Chambord, fundó los Inválidos o se casó primero con Ana de Bretaña?",
      questions: [
        {
          id: 1,
          question: "¿Quién empezó a construir el castillo de Chambord?",
          answers: [
            { id: "a", text: "Francisco I" },
            { id: "b", text: "Luis XII" },
          ],
          correctAnswer: "a",
          explanation:
            "Francisco I, en 1519. Las obras duraron décadas, y el rey solo pasó allí unas pocas semanas en total.",
        },
        {
          id: 2,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-02.webp",
          question: "¿Con qué rey fundó el cardenal Richelieu la Academia Francesa, en 1635?",
          answers: [
            { id: "a", text: "Luis XIV" },
            { id: "b", text: "Luis XIII" },
          ],
          correctAnswer: "b",
          explanation:
            "Con Luis XIII, cuyo primer ministro era Richelieu. Luis XIV ni siquiera había nacido: nació en 1638.",
        },
        {
          id: 3,
          question: "¿Qué rey murió en 1559 tras recibir una herida en el ojo durante un torneo?",
          answers: [
            { id: "a", text: "Enrique II" },
            { id: "b", text: "Enrique III" },
          ],
          correctAnswer: "a",
          explanation:
            "Enrique II. La lanza del conde de Montgomery se rompió y una astilla le dio en el ojo el 30 de junio de 1559. Murió diez días después.",
        },
        {
          id: 4,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-04.webp",
          question: "¿Quién fundó el palacio de los Inválidos, para alojar a los viejos soldados?",
          answers: [
            { id: "a", text: "Luis XV" },
            { id: "b", text: "Luis XIV" },
          ],
          correctAnswer: "b",
          explanation:
            "Luis XIV, en 1670. Hoy los Inválidos albergan el Museo del Ejército y la tumba de Napoleón.",
        },
        {
          id: 5,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-05.webp",
          question: "¿Quién mandó construir la Sainte-Chapelle de París para guardar la corona de espinas?",
          answers: [
            { id: "a", text: "Luis IX" },
            { id: "b", text: "Felipe Augusto" },
          ],
          correctAnswer: "a",
          explanation:
            "Luis IX, es decir, San Luis. La capilla se consagró en 1248, y sus vidrieras están entre las más famosas del mundo.",
        },
        {
          id: 6,
          question: "¿Quién levantó la primera fortaleza del Louvre, hacia 1190?",
          answers: [
            { id: "a", text: "Carlos V" },
            { id: "b", text: "Felipe Augusto" },
          ],
          correctAnswer: "b",
          explanation:
            "Felipe Augusto, para proteger París antes de irse a la cruzada. Carlos V la convirtió después en residencia real. Sus cimientos todavía se ven bajo el museo.",
        },
        {
          id: 7,
          question: "¿Qué rey fue asesinado en 1589 por el monje Jacques Clément?",
          answers: [
            { id: "a", text: "Enrique III" },
            { id: "b", text: "Enrique IV" },
          ],
          correctAnswer: "a",
          explanation:
            "Enrique III, apuñalado en Saint-Cloud. Enrique IV, que le sucedió, también fue asesinado, pero en 1610 y por Ravaillac.",
        },
        {
          id: 8,
          question: "¿Cuál de los dos se casó primero con Ana de Bretaña?",
          answers: [
            { id: "a", text: "Luis XII" },
            { id: "b", text: "Carlos VIII" },
          ],
          correctAnswer: "b",
          explanation:
            "Carlos VIII, en 1491. Cuando él murió, Ana se casó con su sucesor Luis XII, en 1499. Así que fue dos veces reina de Francia.",
        },
        {
          id: 9,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-09.webp",
          question: "¿Qué rey mandó construir el Petit Trianon, en Versalles?",
          answers: [
            { id: "a", text: "Luis XV" },
            { id: "b", text: "Luis XVI" },
          ],
          correctAnswer: "a",
          explanation:
            "Luis XV, entre 1762 y 1768, en principio para Madame de Pompadour. Luis XVI se lo regaló después a María Antonieta.",
        },
        {
          id: 10,
          image: "/images/q-rois-de-france-qui-a-fait-quoi-10.webp",
          question: "¿Qué rey impulsó la plaza Real, la actual plaza de los Vosgos de París?",
          answers: [
            { id: "a", text: "Luis XIV" },
            { id: "b", text: "Enrique IV" },
          ],
          correctAnswer: "b",
          explanation:
            "Enrique IV, en 1605. Murió antes de que se terminara, y la plaza se inauguró en 1612, con Luis XIII.",
        },
      ],
    },
  },
};

export default [quizRoisDeFranceQuiAFaitQuoi] as TranslatedQuiz[];
