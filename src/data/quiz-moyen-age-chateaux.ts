import type { TranslatedQuiz } from "./types";

/**
 * Quiz QCM sur les châteaux forts et les chevaliers : le vocabulaire du
 * château (donjon, herse, mâchicoulis...), la féodalité et deux châteaux
 * précis, Château-Gaillard et Guédelon.
 *
 * Le premier quiz Moyen Âge (quiz-moyen-age.ts) est un vrai-faux sur les
 * grandes dates et les grands personnages : celui-ci n'en reprend aucune.
 */
export const quizMoyenAgeChateaux: TranslatedQuiz = {
  slug: "quiz-moyen-age-chateaux",
  slugs: { en: "middle-ages-castles-quiz", fr: "quiz-moyen-age-chateaux", es: "quiz-edad-media-castillos" },
  categorySlug: "histoire",
  subcategory: "Moyen Âge",
  difficulty: "medium",
  coverImage: "/images/cover-moyen-age-chateaux.webp",
  gameType: "qcm",
  playCount: 4900,
  translations: {
    fr: {
      title: "Quiz Moyen Âge : châteaux forts et chevaliers",
      description:
        "Vingt questions sur les châteaux forts et la vie des chevaliers : le donjon, la herse, l'adoubement, le fief, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-moyen-age-chateaux-01.webp",
          question: "Comment s'appelle la grande tour d'un château fort, où vit le seigneur et où l'on se réfugie en dernier ?",
          answers: [
            { id: "a", text: "Le donjon" },
            { id: "b", text: "Le beffroi" },
            { id: "c", text: "Le clocher" },
            { id: "d", text: "Le minaret" },
          ],
          correctAnswer: "a",
          explanation:
            "Le donjon. C'est la tour la plus solide du château, et la dernière à tenir pendant un siège. Le beffroi, lui, est la tour d'une ville, où l'on garde la cloche et les archives.",
        },
        {
          id: 2,
          question: "Comment appelle-t-on le fossé, souvent rempli d'eau, qui entoure un château fort ?",
          answers: [
            { id: "a", text: "Les lices" },
            { id: "b", text: "Les douves" },
            { id: "c", text: "Les créneaux" },
            { id: "d", text: "La courtine" },
          ],
          correctAnswer: "b",
          explanation:
            "Les douves. Elles empêchent l'ennemi d'approcher les murs et de creuser dessous. On les franchit par un pont-levis.",
        },
        {
          id: 3,
          question: "Comment s'appelle l'ouverture étroite dans un mur, par laquelle on tire à l'arc sans se montrer ?",
          answers: [
            { id: "a", text: "Une poterne" },
            { id: "b", text: "Une échauguette" },
            { id: "c", text: "Une meurtrière" },
            { id: "d", text: "Une barbacane" },
          ],
          correctAnswer: "c",
          explanation:
            "Une meurtrière. Elle est étroite dehors et plus large dedans, pour que le tireur puisse viser dans plusieurs directions. La poterne est une petite porte discrète.",
        },
        {
          id: 4,
          image: "/images/q-moyen-age-chateaux-04.webp",
          question: "Quelle grille en bois ou en fer descend pour fermer l'entrée du château ?",
          answers: [
            { id: "a", text: "La herse" },
            { id: "b", text: "Le pont-levis" },
            { id: "c", text: "Le chemin de ronde" },
            { id: "d", text: "Le merlon" },
          ],
          correctAnswer: "a",
          explanation:
            "La herse. Elle glisse dans des rainures, de haut en bas, et bloque la porte d'un coup. Le pont-levis, lui, se relève au-dessus des douves.",
        },
        {
          id: 5,
          question: "Comment appelle-t-on la galerie en surplomb en haut des murs, percée de trous pour lancer des projectiles au pied de la muraille ?",
          answers: [
            { id: "a", text: "Les créneaux" },
            { id: "b", text: "Le chemin de ronde" },
            { id: "c", text: "Le rempart" },
            { id: "d", text: "Les mâchicoulis" },
          ],
          correctAnswer: "d",
          explanation:
            "Les mâchicoulis. Ce sont des galeries en pierre qui dépassent du mur, avec des ouvertures dans le sol. Ils remplacent les hourds en bois et se répandent surtout à la fin du XIVe siècle.",
        },
        {
          id: 6,
          question: "Comment s'appelle la cérémonie par laquelle un jeune homme devient chevalier ?",
          answers: [
            { id: "a", text: "Le sacre" },
            { id: "b", text: "L'adoubement" },
            { id: "c", text: "L'investiture" },
            { id: "d", text: "La croisade" },
          ],
          correctAnswer: "b",
          explanation:
            "L'adoubement. Le futur chevalier reçoit ses armes, son épée surtout, souvent des mains de son seigneur. Le sacre, c'est la cérémonie qui fait un roi.",
        },
        {
          id: 7,
          image: "/images/q-moyen-age-chateaux-07.webp",
          question: "Quelle machine de siège utilise un contrepoids pour lancer de grosses pierres ?",
          answers: [
            { id: "a", text: "Le bélier" },
            { id: "b", text: "La tour de siège" },
            { id: "c", text: "Le trébuchet" },
            { id: "d", text: "L'arbalète" },
          ],
          correctAnswer: "c",
          explanation:
            "Le trébuchet. Un lourd contrepoids fait basculer un long bras, qui envoie le projectile par-dessus les murs. Le bélier, lui, sert à enfoncer les portes.",
        },
        {
          id: 8,
          image: "/images/q-moyen-age-chateaux-08.webp",
          question: "Quel roi d'Angleterre a fait construire Château-Gaillard, en Normandie, à la fin du XIIe siècle ?",
          answers: [
            { id: "a", text: "Richard Cœur de Lion" },
            { id: "b", text: "Guillaume le Conquérant" },
            { id: "c", text: "Jean sans Terre" },
            { id: "d", text: "Henri V" },
          ],
          correctAnswer: "a",
          explanation:
            "Richard Cœur de Lion, qui était aussi duc de Normandie. Le château est bâti en moins de deux ans, vers 1197-1198. Le roi de France Philippe Auguste le prend en 1204, sous le règne de Jean sans Terre.",
        },
        {
          id: 9,
          image: "/images/q-moyen-age-chateaux-09.webp",
          question: "Quel château fort est construit depuis 1997 dans l'Yonne, avec les techniques du Moyen Âge ?",
          answers: [
            { id: "a", text: "Pierrefonds" },
            { id: "b", text: "Guédelon" },
            { id: "c", text: "Carcassonne" },
            { id: "d", text: "Castelnaud" },
          ],
          correctAnswer: "b",
          explanation:
            "Guédelon, à Treigny. Le chantier a commencé en 1997 et les ouvriers travaillent comme au XIIIe siècle, sans machines modernes. La fin des travaux est prévue vers 2029.",
        },
        {
          id: 10,
          question: "Comment s'appelle la terre qu'un seigneur confie à son vassal en échange de sa fidélité ?",
          answers: [
            { id: "a", text: "La dîme" },
            { id: "b", text: "La taille" },
            { id: "c", text: "Le bailliage" },
            { id: "d", text: "Le fief" },
          ],
          correctAnswer: "d",
          explanation:
            "Le fief. En échange, le vassal doit aider son seigneur, à la guerre surtout. La dîme et la taille sont des impôts, versés à l'Église pour la dîme et au seigneur ou au roi pour la taille.",
        },
        {
          id: 11,
          question: "Comment s'appelle le pont qu'on relève pour fermer l'accès au château ?",
          answers: [
            { id: "a", text: "Le pont-levis" },
            { id: "b", text: "Le pont-canal" },
            { id: "c", text: "Le pont de bateaux" },
            { id: "d", text: "Le viaduc" },
          ],
          correctAnswer: "a",
          explanation:
            "Le pont-levis. Il passe au-dessus des douves et se relève avec des chaînes ou des poutres, ce qui bloque en même temps la porte.",
        },
        {
          id: 12,
          question: "Comment appelle-t-on le jeune noble qui sert un chevalier et porte son bouclier, avant d'être lui-même adoubé ?",
          answers: [
            { id: "a", text: "Le bailli" },
            { id: "b", text: "Le sénéchal" },
            { id: "c", text: "L'écuyer" },
            { id: "d", text: "Le troubadour" },
          ],
          correctAnswer: "c",
          explanation:
            "L'écuyer. Le mot vient de « écu », le bouclier du chevalier. L'écuyer s'occupe aussi des chevaux et des armes de son maître, et le suit au combat.",
        },
        {
          id: 13,
          question: "Comment s'appelle le combat où deux chevaliers à cheval foncent l'un vers l'autre, lance en avant ?",
          answers: [
            { id: "a", text: "La soule" },
            { id: "b", text: "La joute" },
            { id: "c", text: "Le jeu de paume" },
            { id: "d", text: "L'escrime" },
          ],
          correctAnswer: "b",
          explanation:
            "La joute. Le but est de désarçonner l'adversaire ou de briser sa lance sur lui. Les joutes avaient lieu pendant les tournois, qui réunissaient de nombreux chevaliers.",
        },
        {
          id: 14,
          question: "Comment s'appelle la longue chemise en mailles de fer que porte le chevalier ?",
          answers: [
            { id: "a", text: "Le haubert" },
            { id: "b", text: "Le plastron" },
            { id: "c", text: "L'écu" },
            { id: "d", text: "Le tabard" },
          ],
          correctAnswer: "a",
          explanation:
            "Le haubert, c'est-à-dire la cotte de mailles. Il est fait de milliers de petits anneaux de fer entrelacés et peut peser une dizaine de kilos.",
        },
        {
          id: 15,
          question: "Comment s'appellent les ouvertures régulières en haut d'une muraille, entre lesquelles les défenseurs s'abritent ?",
          answers: [
            { id: "a", text: "Les courtines" },
            { id: "b", text: "Les hourds" },
            { id: "c", text: "Les barbacanes" },
            { id: "d", text: "Les créneaux" },
          ],
          correctAnswer: "d",
          explanation:
            "Les créneaux. Les parties pleines entre deux créneaux s'appellent les merlons : on tire par le créneau, puis on se cache derrière le merlon.",
        },
        {
          id: 16,
          question: "Comment appelle-t-on le passage en haut des murailles où circulent les soldats qui montent la garde ?",
          answers: [
            { id: "a", text: "La poterne" },
            { id: "b", text: "Le chemin de ronde" },
            { id: "c", text: "La lice" },
            { id: "d", text: "Le glacis" },
          ],
          correctAnswer: "b",
          explanation:
            "Le chemin de ronde. Il fait le tour des remparts, derrière les créneaux, et permet de surveiller les alentours et de se rendre vite à l'endroit attaqué.",
        },
        {
          id: 17,
          question: "Comment s'appelle la cérémonie où le vassal s'agenouille, met ses mains dans celles de son seigneur et lui jure fidélité ?",
          answers: [
            { id: "a", text: "L'hommage" },
            { id: "b", text: "L'investiture papale" },
            { id: "c", text: "Le ban" },
            { id: "d", text: "La taille" },
          ],
          correctAnswer: "a",
          explanation:
            "L'hommage. Le vassal devient « l'homme » de son seigneur, d'où le nom. En échange de sa fidélité et de son aide, le seigneur lui doit protection.",
        },
        {
          id: 18,
          question: "Comment s'appelle le casque fermé qui couvre toute la tête du chevalier ?",
          answers: [
            { id: "a", text: "Le morion" },
            { id: "b", text: "La cervelière" },
            { id: "c", text: "Le heaume" },
            { id: "d", text: "Le képi" },
          ],
          correctAnswer: "c",
          explanation:
            "Le heaume. Il enveloppe toute la tête et ne laisse qu'une fente pour les yeux. Comme on ne reconnaît plus personne, les chevaliers se distinguent grâce aux armoiries peintes sur leur écu.",
        },
        {
          id: 19,
          question: "Quel roi fait bâtir la tour Blanche, le grand donjon de la tour de Londres, à partir des années 1070 ?",
          answers: [
            { id: "a", text: "Richard Cœur de Lion" },
            { id: "b", text: "Guillaume le Conquérant" },
            { id: "c", text: "Henri VIII" },
            { id: "d", text: "Édouard Ier" },
          ],
          correctAnswer: "b",
          explanation:
            "Guillaume le Conquérant, le duc de Normandie devenu roi d'Angleterre en 1066. Les travaux commencent vers 1075-1080, pour tenir Londres en respect. La tour Blanche est achevée vers 1100.",
        },
        {
          id: 20,
          question: "Comment s'appelle le gros tronc d'arbre qu'on lance contre une porte pour l'enfoncer ?",
          answers: [
            { id: "a", text: "Le mangonneau" },
            { id: "b", text: "La baliste" },
            { id: "c", text: "La tour de siège" },
            { id: "d", text: "Le bélier" },
          ],
          correctAnswer: "d",
          explanation:
            "Le bélier, souvent protégé par un toit en bois recouvert de peaux mouillées contre les flèches enflammées. Son bout était parfois garni de fer en forme de tête de bélier, d'où le nom.",
        },
      ],
    },
    en: {
      title: "Middle Ages quiz: castles and knights",
      description:
        "Twenty questions about medieval castles and the life of knights: the keep, the portcullis, the dubbing ceremony, the fief, and more.",
      questions: [
        {
          id: 1,
          image: "/images/q-moyen-age-chateaux-01.webp",
          question: "What is the big tower of a castle called, where the lord lives and where people take shelter last?",
          answers: [
            { id: "a", text: "The keep" },
            { id: "b", text: "The belfry" },
            { id: "c", text: "The steeple" },
            { id: "d", text: "The minaret" },
          ],
          correctAnswer: "a",
          explanation:
            "The keep, or donjon in French. It's the strongest tower of the castle and the last one to hold out in a siege. A belfry is a town tower where the bell and the records were kept.",
        },
        {
          id: 2,
          question: "What is the ditch around a castle called, often filled with water?",
          answers: [
            { id: "a", text: "The bailey" },
            { id: "b", text: "The moat" },
            { id: "c", text: "The battlements" },
            { id: "d", text: "The curtain wall" },
          ],
          correctAnswer: "b",
          explanation:
            "The moat. It stops the enemy from getting close to the walls or digging under them. You cross it on a drawbridge.",
        },
        {
          id: 3,
          question: "What is the narrow opening in a wall called, used to shoot arrows without being seen?",
          answers: [
            { id: "a", text: "A postern" },
            { id: "b", text: "A bartizan" },
            { id: "c", text: "An arrow slit" },
            { id: "d", text: "A barbican" },
          ],
          correctAnswer: "c",
          explanation:
            "An arrow slit. It's narrow on the outside and wider on the inside, so the archer can aim in several directions. A postern is a small, discreet back door.",
        },
        {
          id: 4,
          image: "/images/q-moyen-age-chateaux-04.webp",
          question: "Which wooden or iron grille drops down to close the castle entrance?",
          answers: [
            { id: "a", text: "The portcullis" },
            { id: "b", text: "The drawbridge" },
            { id: "c", text: "The wall walk" },
            { id: "d", text: "The merlon" },
          ],
          correctAnswer: "a",
          explanation:
            "The portcullis. It slides down in grooves and blocks the gate in one go. The drawbridge is the one that lifts up over the moat.",
        },
        {
          id: 5,
          question: "What is the overhanging gallery at the top of a wall called, with holes in the floor to drop things on attackers below?",
          answers: [
            { id: "a", text: "The crenels" },
            { id: "b", text: "The wall walk" },
            { id: "c", text: "The rampart" },
            { id: "d", text: "Machicolations" },
          ],
          correctAnswer: "d",
          explanation:
            "Machicolations. They're stone galleries sticking out from the wall with openings in the floor. They replaced wooden hoardings and spread mostly in the late 14th century.",
        },
        {
          id: 6,
          question: "What is the ceremony called in which a young man becomes a knight?",
          answers: [
            { id: "a", text: "Coronation" },
            { id: "b", text: "Dubbing" },
            { id: "c", text: "Investiture" },
            { id: "d", text: "Crusade" },
          ],
          correctAnswer: "b",
          explanation:
            "Dubbing. The future knight receives his weapons, above all his sword, often from his lord. A coronation is the ceremony that makes a king.",
        },
        {
          id: 7,
          image: "/images/q-moyen-age-chateaux-07.webp",
          question: "Which siege engine uses a counterweight to hurl large stones?",
          answers: [
            { id: "a", text: "The battering ram" },
            { id: "b", text: "The siege tower" },
            { id: "c", text: "The trebuchet" },
            { id: "d", text: "The crossbow" },
          ],
          correctAnswer: "c",
          explanation:
            "The trebuchet. A heavy counterweight swings a long arm, which throws the stone over the walls. The battering ram was used to break down gates.",
        },
        {
          id: 8,
          image: "/images/q-moyen-age-chateaux-08.webp",
          question: "Which English king had Château-Gaillard built in Normandy at the end of the 12th century?",
          answers: [
            { id: "a", text: "Richard the Lionheart" },
            { id: "b", text: "William the Conqueror" },
            { id: "c", text: "John Lackland" },
            { id: "d", text: "Henry V" },
          ],
          correctAnswer: "a",
          explanation:
            "Richard the Lionheart, who was also Duke of Normandy. The castle went up in less than two years, around 1197-1198. The French king Philip Augustus took it in 1204, under King John.",
        },
        {
          id: 9,
          image: "/images/q-moyen-age-chateaux-09.webp",
          question: "Which castle has been under construction in Burgundy since 1997, using medieval techniques?",
          answers: [
            { id: "a", text: "Pierrefonds" },
            { id: "b", text: "Guédelon" },
            { id: "c", text: "Carcassonne" },
            { id: "d", text: "Castelnaud" },
          ],
          correctAnswer: "b",
          explanation:
            "Guédelon, in Treigny. Work started in 1997 and the builders work the way people did in the 13th century, without modern machines. It's due to be finished around 2029.",
        },
        {
          id: 10,
          question: "What is the land called that a lord gives his vassal in exchange for loyalty?",
          answers: [
            { id: "a", text: "The tithe" },
            { id: "b", text: "The tallage" },
            { id: "c", text: "The bailiwick" },
            { id: "d", text: "The fief" },
          ],
          correctAnswer: "d",
          explanation:
            "The fief. In return, the vassal has to help his lord, mainly in war. The tithe and the tallage are taxes, the tithe paid to the Church and the tallage to the lord or the king.",
        },
        {
          id: 11,
          question: "What is the bridge that can be raised to close off the castle called?",
          answers: [
            { id: "a", text: "The drawbridge" },
            { id: "b", text: "The aqueduct" },
            { id: "c", text: "The pontoon bridge" },
            { id: "d", text: "The viaduct" },
          ],
          correctAnswer: "a",
          explanation:
            "The drawbridge. It crosses the moat and is pulled up with chains or beams, which also blocks the gateway.",
        },
        {
          id: 12,
          question: "What do you call the young noble who serves a knight and carries his shield, before being knighted himself?",
          answers: [
            { id: "a", text: "The bailiff" },
            { id: "b", text: "The seneschal" },
            { id: "c", text: "The squire" },
            { id: "d", text: "The troubadour" },
          ],
          correctAnswer: "c",
          explanation:
            "The squire. He also looks after his master's horses and weapons and follows him into battle. The French word, écuyer, comes from écu, the knight's shield.",
        },
        {
          id: 13,
          question: "What is the contest where two mounted knights charge at each other, lances forward?",
          answers: [
            { id: "a", text: "Folk football" },
            { id: "b", text: "The joust" },
            { id: "c", text: "Real tennis" },
            { id: "d", text: "Fencing" },
          ],
          correctAnswer: "b",
          explanation:
            "The joust. The aim is to knock the opponent off his horse or break your lance on him. Jousts took place at tournaments, which brought many knights together.",
        },
        {
          id: 14,
          question: "What is the long shirt of iron rings worn by a knight called?",
          answers: [
            { id: "a", text: "The hauberk" },
            { id: "b", text: "The breastplate" },
            { id: "c", text: "The shield" },
            { id: "d", text: "The tabard" },
          ],
          correctAnswer: "a",
          explanation:
            "The hauberk, in other words the coat of mail. It is made of thousands of small interlinked iron rings and can weigh around ten kilos.",
        },
        {
          id: 15,
          question: "What are the regular gaps at the top of a castle wall, between which defenders take cover, called?",
          answers: [
            { id: "a", text: "Curtain walls" },
            { id: "b", text: "Hoardings" },
            { id: "c", text: "Barbicans" },
            { id: "d", text: "Crenels" },
          ],
          correctAnswer: "d",
          explanation:
            "Crenels, which give a wall its battlements. The solid parts between them are called merlons: defenders shoot through the gap, then hide behind the merlon.",
        },
        {
          id: 16,
          question: "What is the walkway along the top of the walls, used by soldiers on guard duty, called?",
          answers: [
            { id: "a", text: "The postern" },
            { id: "b", text: "The wall walk" },
            { id: "c", text: "The lists" },
            { id: "d", text: "The glacis" },
          ],
          correctAnswer: "b",
          explanation:
            "The wall walk, also called the allure. It runs around the ramparts behind the battlements, so guards can watch the surroundings and get quickly to any point under attack.",
        },
        {
          id: 17,
          question: "What is the ceremony where a vassal kneels, places his hands in his lord's and swears loyalty to him?",
          answers: [
            { id: "a", text: "Homage" },
            { id: "b", text: "Papal investiture" },
            { id: "c", text: "The ban" },
            { id: "d", text: "The tallage" },
          ],
          correctAnswer: "a",
          explanation:
            "Homage. The vassal becomes his lord's \"man\" (homme in French), hence the name. In return for his loyalty and help, the lord owes him protection.",
        },
        {
          id: 18,
          question: "What is the closed helmet covering the knight's whole head called?",
          answers: [
            { id: "a", text: "The morion" },
            { id: "b", text: "The skullcap" },
            { id: "c", text: "The great helm" },
            { id: "d", text: "The kepi" },
          ],
          correctAnswer: "c",
          explanation:
            "The great helm. It covers the whole head, with just a slit for the eyes. Since faces could no longer be seen, knights were recognised by the coat of arms painted on their shield.",
        },
        {
          id: 19,
          question: "Which king had the White Tower, the great keep of the Tower of London, built from the 1070s?",
          answers: [
            { id: "a", text: "Richard the Lionheart" },
            { id: "b", text: "William the Conqueror" },
            { id: "c", text: "Henry VIII" },
            { id: "d", text: "Edward I" },
          ],
          correctAnswer: "b",
          explanation:
            "William the Conqueror, the Duke of Normandy who became King of England in 1066. Work started around 1075 to 1080, to keep London under control. The White Tower was finished around 1100.",
        },
        {
          id: 20,
          question: "What is the heavy tree trunk swung against a gate to break it down called?",
          answers: [
            { id: "a", text: "The mangonel" },
            { id: "b", text: "The ballista" },
            { id: "c", text: "The siege tower" },
            { id: "d", text: "The battering ram" },
          ],
          correctAnswer: "d",
          explanation:
            "The battering ram, often protected by a wooden roof covered with wet hides against fire arrows. Its tip was sometimes capped with iron shaped like a ram's head, hence the name.",
        },
      ],
    },
    es: {
      title: "Quiz Edad Media: castillos y caballeros",
      description:
        "Veinte preguntas sobre los castillos medievales y la vida de los caballeros: la torre del homenaje, el rastrillo, el feudo, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-moyen-age-chateaux-01.webp",
          question: "¿Cómo se llama la gran torre de un castillo, donde vive el señor y donde se resiste hasta el final?",
          answers: [
            { id: "a", text: "La torre del homenaje" },
            { id: "b", text: "El campanario" },
            { id: "c", text: "La atalaya" },
            { id: "d", text: "El minarete" },
          ],
          correctAnswer: "a",
          explanation:
            "La torre del homenaje. Es la torre más sólida del castillo y la última en caer durante un asedio. La atalaya es una torre de vigilancia, casi siempre aislada.",
        },
        {
          id: 2,
          question: "¿Cómo se llama la zanja, muchas veces llena de agua, que rodea un castillo?",
          answers: [
            { id: "a", text: "La liza" },
            { id: "b", text: "El foso" },
            { id: "c", text: "Las almenas" },
            { id: "d", text: "La cortina" },
          ],
          correctAnswer: "b",
          explanation:
            "El foso. Impide que el enemigo se acerque a las murallas o cave por debajo. Se cruza por un puente levadizo.",
        },
        {
          id: 3,
          question: "¿Cómo se llama la abertura estrecha en un muro por la que se dispara con arco sin dejarse ver?",
          answers: [
            { id: "a", text: "Un postigo" },
            { id: "b", text: "Una garita" },
            { id: "c", text: "Una saetera" },
            { id: "d", text: "Una barbacana" },
          ],
          correctAnswer: "c",
          explanation:
            "Una saetera. Es estrecha por fuera y más ancha por dentro, para que el arquero pueda apuntar en varias direcciones. El postigo es una puerta pequeña y discreta.",
        },
        {
          id: 4,
          image: "/images/q-moyen-age-chateaux-04.webp",
          question: "¿Qué reja de madera o de hierro baja para cerrar la entrada del castillo?",
          answers: [
            { id: "a", text: "El rastrillo" },
            { id: "b", text: "El puente levadizo" },
            { id: "c", text: "El adarve" },
            { id: "d", text: "El merlón" },
          ],
          correctAnswer: "a",
          explanation:
            "El rastrillo. Baja por unas ranuras y bloquea la puerta de golpe. El puente levadizo es el que se levanta sobre el foso.",
        },
        {
          id: 5,
          question: "¿Cómo se llama la galería saliente en lo alto de los muros, con agujeros en el suelo para lanzar objetos al pie de la muralla?",
          answers: [
            { id: "a", text: "Las almenas" },
            { id: "b", text: "El adarve" },
            { id: "c", text: "La muralla" },
            { id: "d", text: "Los matacanes" },
          ],
          correctAnswer: "d",
          explanation:
            "Los matacanes. Son galerías de piedra que sobresalen del muro, con aberturas en el suelo. Sustituyen a los cadalsos de madera y se extienden sobre todo a finales del siglo XIV.",
        },
        {
          id: 6,
          question: "¿Cómo se llama la ceremonia en la que un joven se convierte en caballero?",
          answers: [
            { id: "a", text: "La coronación" },
            { id: "b", text: "La investidura de armas" },
            { id: "c", text: "La consagración" },
            { id: "d", text: "La cruzada" },
          ],
          correctAnswer: "b",
          explanation:
            "La investidura de armas, también llamada armar caballero. El futuro caballero recibe sus armas, sobre todo la espada, a menudo de manos de su señor. La coronación es la ceremonia que hace a un rey.",
        },
        {
          id: 7,
          image: "/images/q-moyen-age-chateaux-07.webp",
          question: "¿Qué máquina de asedio usa un contrapeso para lanzar piedras grandes?",
          answers: [
            { id: "a", text: "El ariete" },
            { id: "b", text: "La torre de asedio" },
            { id: "c", text: "El fundíbulo" },
            { id: "d", text: "La ballesta" },
          ],
          correctAnswer: "c",
          explanation:
            "El fundíbulo, o trabuquete. Un contrapeso pesado hace girar un brazo largo, que lanza la piedra por encima de las murallas. El ariete servía para derribar puertas.",
        },
        {
          id: 8,
          image: "/images/q-moyen-age-chateaux-08.webp",
          question: "¿Qué rey de Inglaterra mandó construir Château-Gaillard, en Normandía, a finales del siglo XII?",
          answers: [
            { id: "a", text: "Ricardo Corazón de León" },
            { id: "b", text: "Guillermo el Conquistador" },
            { id: "c", text: "Juan sin Tierra" },
            { id: "d", text: "Enrique V" },
          ],
          correctAnswer: "a",
          explanation:
            "Ricardo Corazón de León, que también era duque de Normandía. El castillo se levantó en menos de dos años, hacia 1197-1198. El rey de Francia Felipe Augusto lo tomó en 1204, ya con Juan sin Tierra en el trono.",
        },
        {
          id: 9,
          image: "/images/q-moyen-age-chateaux-09.webp",
          question: "¿Qué castillo se construye desde 1997 en Borgoña con las técnicas de la Edad Media?",
          answers: [
            { id: "a", text: "Pierrefonds" },
            { id: "b", text: "Guédelon" },
            { id: "c", text: "Carcasona" },
            { id: "d", text: "Castelnaud" },
          ],
          correctAnswer: "b",
          explanation:
            "Guédelon, en Treigny. La obra empezó en 1997 y se trabaja como en el siglo XIII, sin máquinas modernas. Está previsto terminarlo hacia 2029.",
        },
        {
          id: 10,
          question: "¿Cómo se llama la tierra que un señor le entrega a su vasallo a cambio de su fidelidad?",
          answers: [
            { id: "a", text: "El diezmo" },
            { id: "b", text: "La talla" },
            { id: "c", text: "La bailía" },
            { id: "d", text: "El feudo" },
          ],
          correctAnswer: "d",
          explanation:
            "El feudo. A cambio, el vasallo tiene que ayudar a su señor, sobre todo en la guerra. El diezmo y la talla son impuestos: el diezmo se pagaba a la Iglesia y la talla al señor o al rey.",
        },
        {
          id: 11,
          question: "¿Cómo se llama el puente que se levanta para cerrar el acceso al castillo?",
          answers: [
            { id: "a", text: "El puente levadizo" },
            { id: "b", text: "El acueducto" },
            { id: "c", text: "El puente de barcas" },
            { id: "d", text: "El viaducto" },
          ],
          correctAnswer: "a",
          explanation:
            "El puente levadizo. Pasa por encima del foso y se levanta con cadenas o vigas, lo que además bloquea la puerta.",
        },
        {
          id: 12,
          question: "¿Cómo se llama el joven noble que sirve a un caballero y lleva su escudo, antes de ser armado caballero?",
          answers: [
            { id: "a", text: "El alguacil" },
            { id: "b", text: "El senescal" },
            { id: "c", text: "El escudero" },
            { id: "d", text: "El trovador" },
          ],
          correctAnswer: "c",
          explanation:
            "El escudero, palabra que viene de «escudo». También cuida los caballos y las armas de su señor y lo acompaña en combate.",
        },
        {
          id: 13,
          question: "¿Cómo se llama el combate en el que dos caballeros a caballo cargan uno contra otro, lanza en ristre?",
          answers: [
            { id: "a", text: "La soule" },
            { id: "b", text: "La justa" },
            { id: "c", text: "El juego de pelota" },
            { id: "d", text: "La esgrima" },
          ],
          correctAnswer: "b",
          explanation:
            "La justa. El objetivo es derribar al rival del caballo o romper la lanza contra él. Las justas se celebraban en los torneos, que reunían a muchos caballeros.",
        },
        {
          id: 14,
          question: "¿Cómo se llama la larga camisa de mallas de hierro que lleva el caballero?",
          answers: [
            { id: "a", text: "La cota de malla" },
            { id: "b", text: "El peto" },
            { id: "c", text: "El escudo" },
            { id: "d", text: "El tabardo" },
          ],
          correctAnswer: "a",
          explanation:
            "La cota de malla, que en francés se llama haubert. Está hecha de miles de pequeñas anillas de hierro entrelazadas y puede pesar unos diez kilos.",
        },
        {
          id: 15,
          question: "¿Cómo se llaman los bloques regulares en lo alto de una muralla, detrás de los que se protegen los defensores?",
          answers: [
            { id: "a", text: "Las cortinas" },
            { id: "b", text: "Los cadalsos" },
            { id: "c", text: "Las barbacanas" },
            { id: "d", text: "Las almenas" },
          ],
          correctAnswer: "d",
          explanation:
            "Las almenas. Entre dos almenas queda un hueco por el que se dispara, antes de volver a esconderse detrás de la almena.",
        },
        {
          id: 16,
          question: "¿Cómo se llama el pasillo en lo alto de las murallas por donde circulan los soldados de guardia?",
          answers: [
            { id: "a", text: "La poterna" },
            { id: "b", text: "El adarve" },
            { id: "c", text: "La liza" },
            { id: "d", text: "El glacis" },
          ],
          correctAnswer: "b",
          explanation:
            "El adarve, también llamado camino de ronda. Recorre las murallas detrás de las almenas y permite vigilar los alrededores y llegar rápido al punto atacado.",
        },
        {
          id: 17,
          question: "¿Cómo se llama la ceremonia en la que el vasallo se arrodilla, pone sus manos entre las de su señor y le jura fidelidad?",
          answers: [
            { id: "a", text: "El homenaje" },
            { id: "b", text: "La investidura papal" },
            { id: "c", text: "El bando" },
            { id: "d", text: "La talla" },
          ],
          correctAnswer: "a",
          explanation:
            "El homenaje. El vasallo pasa a ser el «hombre» de su señor, de ahí el nombre. A cambio de su fidelidad y su ayuda, el señor le debe protección.",
        },
        {
          id: 18,
          question: "¿Cómo se llama el casco cerrado que cubre toda la cabeza del caballero?",
          answers: [
            { id: "a", text: "El morrión" },
            { id: "b", text: "La cervillera" },
            { id: "c", text: "El yelmo" },
            { id: "d", text: "El quepis" },
          ],
          correctAnswer: "c",
          explanation:
            "El yelmo. Envuelve toda la cabeza y solo deja una ranura para los ojos. Como ya no se reconocía a nadie, los caballeros se distinguían por el escudo de armas pintado en su escudo.",
        },
        {
          id: 19,
          question: "¿Qué rey mandó construir la Torre Blanca, la gran torre del homenaje de la Torre de Londres, a partir de la década de 1070?",
          answers: [
            { id: "a", text: "Ricardo Corazón de León" },
            { id: "b", text: "Guillermo el Conquistador" },
            { id: "c", text: "Enrique VIII" },
            { id: "d", text: "Eduardo I" },
          ],
          correctAnswer: "b",
          explanation:
            "Guillermo el Conquistador, el duque de Normandía que se convirtió en rey de Inglaterra en 1066. Las obras empezaron hacia 1075-1080, para tener Londres bajo control. La Torre Blanca se terminó hacia el año 1100.",
        },
        {
          id: 20,
          question: "¿Cómo se llama el gran tronco que se lanza contra una puerta para derribarla?",
          answers: [
            { id: "a", text: "La catapulta" },
            { id: "b", text: "La balista" },
            { id: "c", text: "La torre de asedio" },
            { id: "d", text: "El ariete" },
          ],
          correctAnswer: "d",
          explanation:
            "El ariete, a menudo protegido por un techo de madera cubierto de pieles mojadas contra las flechas incendiarias. Su punta a veces llevaba hierro con forma de cabeza de carnero, que en latín se decía aries.",
        },
      ],
    },
  },
};

export default [quizMoyenAgeChateaux] as TranslatedQuiz[];
