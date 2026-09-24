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
        "Dix questions sur les châteaux forts et la vie des chevaliers : le donjon, la herse, l'adoubement, le fief, etc.",
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
      ],
    },
    en: {
      title: "Middle Ages quiz: castles and knights",
      description:
        "Ten questions about medieval castles and the life of knights: the keep, the portcullis, the dubbing ceremony, the fief, and more.",
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
      ],
    },
    es: {
      title: "Quiz Edad Media: castillos y caballeros",
      description:
        "Diez preguntas sobre los castillos medievales y la vida de los caballeros: la torre del homenaje, el rastrillo, el feudo, etc.",
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
      ],
    },
  },
};

export default [quizMoyenAgeChateaux] as TranslatedQuiz[];
