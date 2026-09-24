import type { TranslatedQuiz } from "./types";

/**
 * Harry Potter, troisieme quiz : sortileges, potions et objets magiques.
 *
 * Le qcm de quiz-cinema.ts pose deja Expelliarmus, Imperio, la cape
 * d'invisibilite et la baguette de Harry : ils sont laisses de cote. Les noms
 * suivent les traductions officielles (Polynectar, Poción multijugos, etc.).
 */
export const quizHarryPotterMagie: TranslatedQuiz = {
  slug: "quiz-harry-potter-magie",
  slugs: { en: "harry-potter-magic-quiz", fr: "quiz-harry-potter-magie", es: "quiz-harry-potter-magia" },
  categorySlug: "cinema",
  subcategory: "Harry Potter",
  difficulty: "medium",
  coverImage: "/images/cover-harry-potter-magie.webp",
  gameType: "qcm",
  playCount: 6100,
  translations: {
    fr: {
      title: "Quiz Harry Potter : sorts, potions et objets",
      description:
        "Wingardium Leviosa, Polynectar, Pensine… Dix questions sur les sortilèges, les potions et les objets magiques de Harry Potter.",
      questions: [
        {
          id: 1,
          question: "Quel sort fait léviter les objets ?",
          answers: [
            { id: "a", text: "Accio" },
            { id: "b", text: "Lumos" },
            { id: "c", text: "Wingardium Leviosa" },
            { id: "d", text: "Alohomora" },
          ],
          correctAnswer: "c",
          explanation:
            "Wingardium Leviosa, qu'on apprend dès la première année. C'est le sort qu'Hermione corrige à Ron : « Leviosa, pas Leviosaaa ».",
        },
        {
          id: 2,
          question: "Quel sort ouvre une porte fermée à clé ?",
          answers: [
            { id: "a", text: "Accio" },
            { id: "b", text: "Alohomora" },
            { id: "c", text: "Reducto" },
            { id: "d", text: "Silencio" },
          ],
          correctAnswer: "b",
          explanation:
            "Alohomora. Hermione s'en sert dès la première année pour ouvrir une porte et échapper à Rusard.",
        },
        {
          id: 3,
          question: "Quelle potion permet de prendre l'apparence de quelqu'un d'autre ?",
          answers: [
            { id: "a", text: "Le Veritaserum" },
            { id: "b", text: "Le Felix Felicis" },
            { id: "c", text: "Le Polynectar" },
            { id: "d", text: "L'Amortentia" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Polynectar. Il faut y ajouter un morceau de la personne, un cheveu la plupart du temps, et l'effet dure une heure.",
        },
        {
          id: 4,
          question: "Quelle potion porte chance à celui qui la boit ?",
          answers: [
            { id: "a", text: "L'Amortentia" },
            { id: "b", text: "Le Felix Felicis" },
            { id: "c", text: "Le Veritaserum" },
            { id: "d", text: "Le Polynectar" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Felix Felicis, qu'on appelle aussi « chance liquide ». Harry en gagne une fiole en cours de potions dans Le Prince de sang-mêlé.",
        },
        {
          id: 5,
          image: "/images/q-quiz-harry-potter-magie-05.webp",
          question: "Quel objet montre tout Poudlard et les gens qui s'y déplacent ?",
          answers: [
            { id: "a", text: "Le Miroir du Riséd" },
            { id: "b", text: "La Carte du Maraudeur" },
            { id: "c", text: "La Pensine" },
            { id: "d", text: "Le Choixpeau magique" },
          ],
          correctAnswer: "b",
          explanation:
            "La Carte du Maraudeur, dessinée par Lunard, Queudver, Patmol et Cornedrue. Fred et George la donnent à Harry en troisième année.",
        },
        {
          id: 6,
          image: "/images/q-quiz-harry-potter-magie-06.webp",
          question: "Quel objet permet à Hermione de suivre plus de cours en troisième année ?",
          answers: [
            { id: "a", text: "Un Rapeltout" },
            { id: "b", text: "Un Retourneur de temps" },
            { id: "c", text: "Un Portoloin" },
            { id: "d", text: "Un Scrutoscope" },
          ],
          correctAnswer: "b",
          explanation:
            "Un Retourneur de temps, qui fait remonter de quelques heures. Il sert aussi à sauver Buck et Sirius à la fin du film.",
        },
        {
          id: 7,
          image: "/images/q-quiz-harry-potter-magie-07.webp",
          question: "Quel miroir montre le désir le plus profond de celui qui s'y regarde ?",
          answers: [
            { id: "a", text: "Le Miroir du Riséd" },
            { id: "b", text: "Le Miroir à double sens" },
            { id: "c", text: "Le Miroir des Détraqueurs" },
            { id: "d", text: "Le Miroir de Gringotts" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Miroir du Riséd. Riséd, c'est « désir » écrit à l'envers. Harry y voit ses parents.",
        },
        {
          id: 8,
          question: "Quelle formule fait apparaître un Patronus ?",
          answers: [
            { id: "a", text: "Expecto Patronum" },
            { id: "b", text: "Protego" },
            { id: "c", text: "Riddikulus" },
            { id: "d", text: "Finite Incantatem" },
          ],
          correctAnswer: "a",
          explanation:
            "Expecto Patronum. Lupin l'apprend à Harry pour repousser les Détraqueurs.",
        },
        {
          id: 9,
          image: "/images/q-quiz-harry-potter-magie-09.webp",
          question: "Quelle plante pousse un cri qui peut être mortel quand on la déterre ?",
          answers: [
            { id: "a", text: "Le Filet du Diable" },
            { id: "b", text: "La Mandragore" },
            { id: "c", text: "Le Saule cogneur" },
            { id: "d", text: "La Branchiflore" },
          ],
          correctAnswer: "b",
          explanation:
            "La Mandragore. En cours de botanique, les élèves portent des cache-oreilles pour les rempoter.",
        },
        {
          id: 10,
          question: "Dans quel objet Dumbledore verse-t-il ses souvenirs pour les revoir ?",
          answers: [
            { id: "a", text: "Un Retourneur de temps" },
            { id: "b", text: "Une Pensine" },
            { id: "c", text: "Un Rapeltout" },
            { id: "d", text: "Un Choixpeau" },
          ],
          correctAnswer: "b",
          explanation:
            "Une Pensine, une bassine de pierre où on dépose ses souvenirs pour s'y replonger. Harry y découvre le passé de Rogue.",
        },
      ],
    },
    en: {
      title: "Harry Potter quiz: spells, potions and objects",
      description:
        "Wingardium Leviosa, Polyjuice, the Pensieve… Ten questions on the spells, potions and magical objects of Harry Potter.",
      questions: [
        {
          id: 1,
          question: "Which spell makes objects levitate?",
          answers: [
            { id: "a", text: "Accio" },
            { id: "b", text: "Lumos" },
            { id: "c", text: "Wingardium Leviosa" },
            { id: "d", text: "Alohomora" },
          ],
          correctAnswer: "c",
          explanation:
            "Wingardium Leviosa, taught in first year. It's the one Hermione corrects Ron on: \"It's Levi-O-sa, not Levio-SA\".",
        },
        {
          id: 2,
          question: "Which spell opens a locked door?",
          answers: [
            { id: "a", text: "Accio" },
            { id: "b", text: "Alohomora" },
            { id: "c", text: "Reducto" },
            { id: "d", text: "Silencio" },
          ],
          correctAnswer: "b",
          explanation:
            "Alohomora. Hermione uses it in first year to open a door and get away from Filch.",
        },
        {
          id: 3,
          question: "Which potion lets you take on someone else's appearance?",
          answers: [
            { id: "a", text: "Veritaserum" },
            { id: "b", text: "Felix Felicis" },
            { id: "c", text: "Polyjuice Potion" },
            { id: "d", text: "Amortentia" },
          ],
          correctAnswer: "c",
          explanation:
            "Polyjuice Potion. You add a bit of the person, usually a hair, and it lasts an hour.",
        },
        {
          id: 4,
          question: "Which potion brings luck to whoever drinks it?",
          answers: [
            { id: "a", text: "Amortentia" },
            { id: "b", text: "Felix Felicis" },
            { id: "c", text: "Veritaserum" },
            { id: "d", text: "Polyjuice Potion" },
          ],
          correctAnswer: "b",
          explanation:
            "Felix Felicis, also called \"liquid luck\". Harry wins a vial of it in Potions class in Half-Blood Prince.",
        },
        {
          id: 5,
          image: "/images/q-quiz-harry-potter-magie-05.webp",
          question: "Which object shows all of Hogwarts and the people moving around it?",
          answers: [
            { id: "a", text: "The Mirror of Erised" },
            { id: "b", text: "The Marauder's Map" },
            { id: "c", text: "The Pensieve" },
            { id: "d", text: "The Sorting Hat" },
          ],
          correctAnswer: "b",
          explanation:
            "The Marauder's Map, made by Moony, Wormtail, Padfoot and Prongs. Fred and George give it to Harry in third year.",
        },
        {
          id: 6,
          image: "/images/q-quiz-harry-potter-magie-06.webp",
          question: "Which object lets Hermione take extra classes in third year?",
          answers: [
            { id: "a", text: "A Remembrall" },
            { id: "b", text: "A Time-Turner" },
            { id: "c", text: "A Portkey" },
            { id: "d", text: "A Sneakoscope" },
          ],
          correctAnswer: "b",
          explanation:
            "A Time-Turner, which sends you back a few hours. It's also how Buckbeak and Sirius get saved at the end.",
        },
        {
          id: 7,
          image: "/images/q-quiz-harry-potter-magie-07.webp",
          question: "Which mirror shows the deepest desire of whoever looks into it?",
          answers: [
            { id: "a", text: "The Mirror of Erised" },
            { id: "b", text: "The two-way mirror" },
            { id: "c", text: "The Dementor's Mirror" },
            { id: "d", text: "The Gringotts Mirror" },
          ],
          correctAnswer: "a",
          explanation:
            "The Mirror of Erised. Erised is \"desire\" spelled backwards. Harry sees his parents in it.",
        },
        {
          id: 8,
          question: "Which incantation conjures a Patronus?",
          answers: [
            { id: "a", text: "Expecto Patronum" },
            { id: "b", text: "Protego" },
            { id: "c", text: "Riddikulus" },
            { id: "d", text: "Finite Incantatem" },
          ],
          correctAnswer: "a",
          explanation:
            "Expecto Patronum. Lupin teaches it to Harry to drive off the Dementors.",
        },
        {
          id: 9,
          image: "/images/q-quiz-harry-potter-magie-09.webp",
          question: "Which plant lets out a cry that can kill when it's pulled up?",
          answers: [
            { id: "a", text: "Devil's Snare" },
            { id: "b", text: "The Mandrake" },
            { id: "c", text: "The Whomping Willow" },
            { id: "d", text: "Gillyweed" },
          ],
          correctAnswer: "b",
          explanation:
            "The Mandrake. In Herbology, the students wear earmuffs to repot them.",
        },
        {
          id: 10,
          question: "What does Dumbledore pour his memories into to see them again?",
          answers: [
            { id: "a", text: "A Time-Turner" },
            { id: "b", text: "A Pensieve" },
            { id: "c", text: "A Remembrall" },
            { id: "d", text: "A Sorting Hat" },
          ],
          correctAnswer: "b",
          explanation:
            "A Pensieve, a stone basin where you put memories to dive back into them. Harry learns about Snape's past in one.",
        },
      ],
    },
    es: {
      title: "Harry Potter: hechizos, pociones y objetos",
      description:
        "Wingardium Leviosa, multijugos, el pensadero… Diez preguntas sobre los hechizos, las pociones y los objetos mágicos de Harry Potter.",
      questions: [
        {
          id: 1,
          question: "¿Qué hechizo hace levitar los objetos?",
          answers: [
            { id: "a", text: "Accio" },
            { id: "b", text: "Lumos" },
            { id: "c", text: "Wingardium Leviosa" },
            { id: "d", text: "Alohomora" },
          ],
          correctAnswer: "c",
          explanation:
            "Wingardium Leviosa, que se aprende en primer año. Es el hechizo que Hermione le corrige a Ron en clase.",
        },
        {
          id: 2,
          question: "¿Qué hechizo abre una puerta cerrada con llave?",
          answers: [
            { id: "a", text: "Accio" },
            { id: "b", text: "Alohomora" },
            { id: "c", text: "Reducto" },
            { id: "d", text: "Silencio" },
          ],
          correctAnswer: "b",
          explanation:
            "Alohomora. Hermione lo usa en primer año para abrir una puerta y escapar de Filch.",
        },
        {
          id: 3,
          question: "¿Qué poción permite tomar la apariencia de otra persona?",
          answers: [
            { id: "a", text: "El Veritaserum" },
            { id: "b", text: "El Felix Felicis" },
            { id: "c", text: "La poción multijugos" },
            { id: "d", text: "La Amortentia" },
          ],
          correctAnswer: "c",
          explanation:
            "La poción multijugos. Hay que añadirle algo de la persona, casi siempre un pelo, y el efecto dura una hora.",
        },
        {
          id: 4,
          question: "¿Qué poción da suerte a quien la bebe?",
          answers: [
            { id: "a", text: "La Amortentia" },
            { id: "b", text: "El Felix Felicis" },
            { id: "c", text: "El Veritaserum" },
            { id: "d", text: "La poción multijugos" },
          ],
          correctAnswer: "b",
          explanation:
            "El Felix Felicis, también llamado «suerte líquida». Harry gana un frasco en clase de Pociones en El misterio del príncipe.",
        },
        {
          id: 5,
          image: "/images/q-quiz-harry-potter-magie-05.webp",
          question: "¿Qué objeto muestra todo Hogwarts y a la gente que se mueve por él?",
          answers: [
            { id: "a", text: "El espejo de Oesed" },
            { id: "b", text: "El mapa del merodeador" },
            { id: "c", text: "El pensadero" },
            { id: "d", text: "El Sombrero Seleccionador" },
          ],
          correctAnswer: "b",
          explanation:
            "El mapa del merodeador, creado por Lunático, Colagusano, Canuto y Cornamenta. Fred y George se lo dan a Harry en tercer año.",
        },
        {
          id: 6,
          image: "/images/q-quiz-harry-potter-magie-06.webp",
          question: "¿Qué objeto permite a Hermione ir a más clases en tercer año?",
          answers: [
            { id: "a", text: "Una recordadora" },
            { id: "b", text: "Un giratiempo" },
            { id: "c", text: "Un traslador" },
            { id: "d", text: "Un chivatoscopio" },
          ],
          correctAnswer: "b",
          explanation:
            "Un giratiempo, que hace retroceder unas horas. También sirve para salvar a Buckbeak y a Sirius al final.",
        },
        {
          id: 7,
          image: "/images/q-quiz-harry-potter-magie-07.webp",
          question: "¿Qué espejo muestra el deseo más profundo de quien se mira en él?",
          answers: [
            { id: "a", text: "El espejo de Oesed" },
            { id: "b", text: "El espejo doble" },
            { id: "c", text: "El espejo de los dementores" },
            { id: "d", text: "El espejo de Gringotts" },
          ],
          correctAnswer: "a",
          explanation:
            "El espejo de Oesed. Oesed es «deseo» al revés. Harry ve en él a sus padres.",
        },
        {
          id: 8,
          question: "¿Qué fórmula hace aparecer un patronus?",
          answers: [
            { id: "a", text: "Expecto Patronum" },
            { id: "b", text: "Protego" },
            { id: "c", text: "Riddikulus" },
            { id: "d", text: "Finite Incantatem" },
          ],
          correctAnswer: "a",
          explanation:
            "Expecto Patronum. Lupin se lo enseña a Harry para ahuyentar a los dementores.",
        },
        {
          id: 9,
          image: "/images/q-quiz-harry-potter-magie-09.webp",
          question: "¿Qué planta suelta un grito que puede ser mortal cuando se arranca?",
          answers: [
            { id: "a", text: "El lazo del diablo" },
            { id: "b", text: "La mandrágora" },
            { id: "c", text: "El sauce boxeador" },
            { id: "d", text: "La branquialga" },
          ],
          correctAnswer: "b",
          explanation:
            "La mandrágora. En Herbología, los alumnos se ponen orejeras para trasplantarlas.",
        },
        {
          id: 10,
          question: "¿En qué objeto vierte Dumbledore sus recuerdos para volver a verlos?",
          answers: [
            { id: "a", text: "Un giratiempo" },
            { id: "b", text: "Un pensadero" },
            { id: "c", text: "Una recordadora" },
            { id: "d", text: "Un sombrero seleccionador" },
          ],
          correctAnswer: "b",
          explanation:
            "Un pensadero, una vasija de piedra donde se dejan los recuerdos para volver a vivirlos. Harry descubre ahí el pasado de Snape.",
        },
      ],
    },
  },
};

export default [quizHarryPotterMagie] as TranslatedQuiz[];
