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
        "Vingt duels entre deux rois de France : lequel a fait bâtir Chambord, fondé les Invalides ou épousé Anne de Bretagne en premier ?",
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
        {
          id: 11,
          question: "Qui signe l'édit de Nantes, en 1598, pour mettre fin aux guerres de Religion ?",
          answers: [
            { id: "a", text: "Henri III" },
            { id: "b", text: "Henri IV" },
          ],
          correctAnswer: "b",
          explanation:
            "Henri IV, ancien protestant devenu catholique en 1593. L'édit accorde aux protestants la liberté de culte dans certains lieux et des places fortes pour se protéger.",
        },
        {
          id: 12,
          question: "Quel roi a épousé Catherine de Médicis ?",
          answers: [
            { id: "a", text: "Henri II" },
            { id: "b", text: "François II" },
          ],
          correctAnswer: "a",
          explanation:
            "Henri II, qu'elle épouse en 1533, quand il n'est encore que le second fils de François Ier. Elle est ensuite la mère de trois rois, François II, Charles IX et Henri III. François II avait épousé Marie Stuart.",
        },
        {
          id: 13,
          question: "Quel roi est fait prisonnier à la bataille de Pavie, en 1525 ?",
          answers: [
            { id: "a", text: "Louis XII" },
            { id: "b", text: "François Ier" },
          ],
          correctAnswer: "b",
          explanation:
            "François Ier, battu par l'armée de Charles Quint en Italie. Il reste prisonnier à Madrid pendant près d'un an, et doit laisser ses deux fils en otage pour être libéré.",
        },
        {
          id: 14,
          question: "Quel roi meurt en 1498 à Amboise, après s'être cogné la tête contre le haut d'une porte ?",
          answers: [
            { id: "a", text: "Charles VIII" },
            { id: "b", text: "Louis XII" },
          ],
          correctAnswer: "a",
          explanation:
            "Charles VIII. Il se heurte à un linteau de pierre en allant voir une partie de jeu de paume, et meurt quelques heures plus tard, à 27 ans. Son cousin Louis XII lui succède.",
        },
        {
          id: 15,
          question: "Quel roi des Francs est baptisé à Reims par l'évêque Remi ?",
          answers: [
            { id: "a", text: "Charlemagne" },
            { id: "b", text: "Clovis" },
          ],
          correctAnswer: "b",
          explanation:
            "Clovis, vers la fin du Ve siècle ou au tout début du VIe, la date exacte est discutée. C'est pour ça que les rois de France se font ensuite sacrer à Reims.",
        },
        {
          id: 16,
          question: "Quel roi fait arrêter tous les Templiers de France, le 13 octobre 1307 ?",
          answers: [
            { id: "a", text: "Philippe le Bel" },
            { id: "b", text: "Philippe Auguste" },
          ],
          correctAnswer: "a",
          explanation:
            "Philippe le Bel, qui veut notamment mettre la main sur les richesses de l'ordre. Le procès dure des années, et le grand maître Jacques de Molay est brûlé à Paris en 1314.",
        },
        {
          id: 17,
          question: "Sous quel roi est creusé le canal du Midi, qui relie Toulouse à la Méditerranée ?",
          answers: [
            { id: "a", text: "Henri IV" },
            { id: "b", text: "Louis XIV" },
          ],
          correctAnswer: "b",
          explanation:
            "Louis XIV. Les travaux, menés par Pierre-Paul Riquet, commencent en 1666 et durent une quinzaine d'années. Le canal est inscrit au patrimoine mondial de l'Unesco depuis 1996.",
        },
        {
          id: 18,
          question: "Quel roi est fait prisonnier par les Anglais à la bataille de Poitiers, en 1356 ?",
          answers: [
            { id: "a", text: "Jean le Bon" },
            { id: "b", text: "Philippe VI" },
          ],
          correctAnswer: "a",
          explanation:
            "Jean le Bon, capturé par l'armée du Prince noir. Il est emmené à Londres, et sa rançon est si élevée qu'il faut créer une nouvelle monnaie, le franc, pour la payer.",
        },
        {
          id: 19,
          question: "Quel roi part pour la troisième croisade avec Richard Cœur de Lion, en 1190 ?",
          answers: [
            { id: "a", text: "Louis VII" },
            { id: "b", text: "Philippe Auguste" },
          ],
          correctAnswer: "b",
          explanation:
            "Philippe Auguste. Les deux rois partent ensemble en 1190, mais Philippe rentre en France dès 1191, après la prise d'Acre. Louis VII, son père, avait mené la deuxième croisade, en 1147.",
        },
        {
          id: 20,
          question: "Quel roi est renversé par la révolution de juillet 1830, les « Trois Glorieuses » ?",
          answers: [
            { id: "a", text: "Charles X" },
            { id: "b", text: "Louis-Philippe Ier" },
          ],
          correctAnswer: "a",
          explanation:
            "Charles X, le dernier frère de Louis XVI. Après trois jours d'insurrection à Paris, il abdique et part en exil. Son cousin Louis-Philippe devient alors « roi des Français ».",
        },
      ],
    },
    en: {
      title: "French kings duel: who did what?",
      description:
        "Twenty duels between two French kings: which one built Chambord, founded Les Invalides or married Anne of Brittany first?",
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
        {
          id: 11,
          question: "Who signed the Edict of Nantes in 1598 to end the Wars of Religion?",
          answers: [
            { id: "a", text: "Henry III" },
            { id: "b", text: "Henry IV" },
          ],
          correctAnswer: "b",
          explanation:
            "Henry IV, a former Protestant who became Catholic in 1593. The edict gave Protestants freedom of worship in certain places and fortified towns to protect themselves.",
        },
        {
          id: 12,
          question: "Which king married Catherine de' Medici?",
          answers: [
            { id: "a", text: "Henry II" },
            { id: "b", text: "Francis II" },
          ],
          correctAnswer: "a",
          explanation:
            "Henry II, whom she married in 1533, when he was still only the second son of Francis I. She went on to be the mother of three kings: Francis II, Charles IX and Henry III. Francis II married Mary, Queen of Scots.",
        },
        {
          id: 13,
          question: "Which king was taken prisoner at the battle of Pavia in 1525?",
          answers: [
            { id: "a", text: "Louis XII" },
            { id: "b", text: "Francis I" },
          ],
          correctAnswer: "b",
          explanation:
            "Francis I, beaten by the army of Charles V in Italy. He was held in Madrid for almost a year and had to hand over his two sons as hostages to be released.",
        },
        {
          id: 14,
          question: "Which king died at Amboise in 1498 after hitting his head on a doorway?",
          answers: [
            { id: "a", text: "Charles VIII" },
            { id: "b", text: "Louis XII" },
          ],
          correctAnswer: "a",
          explanation:
            "Charles VIII. He struck his head on a stone lintel on his way to watch a game of real tennis and died a few hours later, aged 27. His cousin Louis XII succeeded him.",
        },
        {
          id: 15,
          question: "Which king of the Franks was baptised at Reims by Bishop Remigius?",
          answers: [
            { id: "a", text: "Charlemagne" },
            { id: "b", text: "Clovis" },
          ],
          correctAnswer: "b",
          explanation:
            "Clovis, at the end of the 5th century or the very start of the 6th; the exact date is debated. That is why the kings of France were later crowned at Reims.",
        },
        {
          id: 16,
          question: "Which king had all the Templars in France arrested on 13 October 1307?",
          answers: [
            { id: "a", text: "Philip the Fair" },
            { id: "b", text: "Philip Augustus" },
          ],
          correctAnswer: "a",
          explanation:
            "Philip the Fair, who among other things wanted to get hold of the order's wealth. The trial dragged on for years, and the Grand Master Jacques de Molay was burned in Paris in 1314.",
        },
        {
          id: 17,
          question: "Under which king was the Canal du Midi, linking Toulouse to the Mediterranean, dug?",
          answers: [
            { id: "a", text: "Henry IV" },
            { id: "b", text: "Louis XIV" },
          ],
          correctAnswer: "b",
          explanation:
            "Louis XIV. The work, led by Pierre-Paul Riquet, began in 1666 and took about fifteen years. The canal has been a UNESCO World Heritage Site since 1996.",
        },
        {
          id: 18,
          question: "Which king was captured by the English at the battle of Poitiers in 1356?",
          answers: [
            { id: "a", text: "John the Good" },
            { id: "b", text: "Philip VI" },
          ],
          correctAnswer: "a",
          explanation:
            "John the Good, taken by the Black Prince's army. He was carried off to London, and his ransom was so large that a new coin, the franc, was created to help pay it.",
        },
        {
          id: 19,
          question: "Which king set off on the Third Crusade with Richard the Lionheart in 1190?",
          answers: [
            { id: "a", text: "Louis VII" },
            { id: "b", text: "Philip Augustus" },
          ],
          correctAnswer: "b",
          explanation:
            "Philip Augustus. The two kings set off together in 1190, but Philip went back to France in 1191, after the capture of Acre. His father, Louis VII, had led the Second Crusade in 1147.",
        },
        {
          id: 20,
          question: "Which king was overthrown by the July Revolution of 1830, the \"Three Glorious Days\"?",
          answers: [
            { id: "a", text: "Charles X" },
            { id: "b", text: "Louis-Philippe I" },
          ],
          correctAnswer: "a",
          explanation:
            "Charles X, the last surviving brother of Louis XVI. After three days of uprising in Paris, he abdicated and went into exile. His cousin Louis-Philippe then became \"King of the French\".",
        },
      ],
    },
    es: {
      title: "Duelo de reyes de Francia: ¿quién hizo qué?",
      description:
        "Veinte duelos entre dos reyes de Francia: ¿cuál construyó Chambord, fundó los Inválidos o se casó primero con Ana de Bretaña?",
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
        {
          id: 11,
          question: "¿Quién firmó el edicto de Nantes, en 1598, para poner fin a las guerras de religión?",
          answers: [
            { id: "a", text: "Enrique III" },
            { id: "b", text: "Enrique IV" },
          ],
          correctAnswer: "b",
          explanation:
            "Enrique IV, antiguo protestante convertido al catolicismo en 1593. El edicto daba a los protestantes libertad de culto en ciertos lugares y plazas fuertes para protegerse.",
        },
        {
          id: 12,
          question: "¿Qué rey se casó con Catalina de Médici?",
          answers: [
            { id: "a", text: "Enrique II" },
            { id: "b", text: "Francisco II" },
          ],
          correctAnswer: "a",
          explanation:
            "Enrique II, con quien se casó en 1533, cuando todavía era el segundo hijo de Francisco I. Después fue madre de tres reyes: Francisco II, Carlos IX y Enrique III. Francisco II se casó con María Estuardo.",
        },
        {
          id: 13,
          question: "¿Qué rey cayó prisionero en la batalla de Pavía, en 1525?",
          answers: [
            { id: "a", text: "Luis XII" },
            { id: "b", text: "Francisco I" },
          ],
          correctAnswer: "b",
          explanation:
            "Francisco I, derrotado por el ejército de Carlos V en Italia. Estuvo preso en Madrid casi un año y tuvo que dejar a sus dos hijos como rehenes para ser liberado.",
        },
        {
          id: 14,
          question: "¿Qué rey murió en 1498 en Amboise tras golpearse la cabeza contra el dintel de una puerta?",
          answers: [
            { id: "a", text: "Carlos VIII" },
            { id: "b", text: "Luis XII" },
          ],
          correctAnswer: "a",
          explanation:
            "Carlos VIII. Se dio contra un dintel de piedra cuando iba a ver un partido de juego de pelota y murió pocas horas después, con 27 años. Le sucedió su primo Luis XII.",
        },
        {
          id: 15,
          question: "¿Qué rey de los francos fue bautizado en Reims por el obispo Remigio?",
          answers: [
            { id: "a", text: "Carlomagno" },
            { id: "b", text: "Clodoveo" },
          ],
          correctAnswer: "b",
          explanation:
            "Clodoveo, a finales del siglo V o a principios del VI; la fecha exacta se discute. Por eso los reyes de Francia se hicieron coronar después en Reims.",
        },
        {
          id: 16,
          question: "¿Qué rey mandó detener a todos los templarios de Francia el 13 de octubre de 1307?",
          answers: [
            { id: "a", text: "Felipe el Hermoso" },
            { id: "b", text: "Felipe Augusto" },
          ],
          correctAnswer: "a",
          explanation:
            "Felipe el Hermoso, que entre otras cosas quería hacerse con las riquezas de la orden. El proceso duró años, y el gran maestre Jacques de Molay murió en la hoguera en París en 1314.",
        },
        {
          id: 17,
          question: "¿Bajo qué rey se excavó el canal del Midi, que une Toulouse con el Mediterráneo?",
          answers: [
            { id: "a", text: "Enrique IV" },
            { id: "b", text: "Luis XIV" },
          ],
          correctAnswer: "b",
          explanation:
            "Luis XIV. Las obras, dirigidas por Pierre-Paul Riquet, empezaron en 1666 y duraron unos quince años. El canal es patrimonio mundial de la Unesco desde 1996.",
        },
        {
          id: 18,
          question: "¿Qué rey cayó prisionero de los ingleses en la batalla de Poitiers, en 1356?",
          answers: [
            { id: "a", text: "Juan el Bueno" },
            { id: "b", text: "Felipe VI" },
          ],
          correctAnswer: "a",
          explanation:
            "Juan el Bueno, capturado por el ejército del Príncipe Negro. Se lo llevaron a Londres, y su rescate era tan alto que se creó una moneda nueva, el franco, para pagarlo.",
        },
        {
          id: 19,
          question: "¿Qué rey partió a la tercera cruzada con Ricardo Corazón de León, en 1190?",
          answers: [
            { id: "a", text: "Luis VII" },
            { id: "b", text: "Felipe Augusto" },
          ],
          correctAnswer: "b",
          explanation:
            "Felipe Augusto. Los dos reyes partieron juntos en 1190, pero Felipe volvió a Francia en 1191, tras la toma de Acre. Su padre, Luis VII, había dirigido la segunda cruzada, en 1147.",
        },
        {
          id: 20,
          question: "¿Qué rey fue derrocado por la revolución de julio de 1830, las «Tres Gloriosas»?",
          answers: [
            { id: "a", text: "Carlos X" },
            { id: "b", text: "Luis Felipe I" },
          ],
          correctAnswer: "a",
          explanation:
            "Carlos X, el último hermano de Luis XVI. Tras tres días de insurrección en París, abdicó y se marchó al exilio. Su primo Luis Felipe se convirtió entonces en «rey de los franceses».",
        },
      ],
    },
  },
};

export default [quizRoisDeFranceQuiAFaitQuoi] as TranslatedQuiz[];
