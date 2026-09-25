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
        "Wingardium Leviosa, Polynectar, Pensine… Vingt questions sur les sortilèges, les potions et les objets magiques de Harry Potter.",
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
        {
          id: 11,
          question: "Quel sort fait fuir un Épouvantard en le rendant ridicule ?",
          answers: [
            { id: "a", text: "Expelliarmus" },
            { id: "b", text: "Riddikulus" },
            { id: "c", text: "Protego" },
            { id: "d", text: "Stupefix" },
          ],
          correctAnswer: "b",
          explanation:
            "Riddikulus. Lupin l'apprend à sa classe en troisième année : il faut penser à quelque chose de drôle, et l'Épouvantard prend cette forme.",
        },
        {
          id: 12,
          question: "Quel sort allume le bout d'une baguette ?",
          answers: [
            { id: "a", text: "Nox" },
            { id: "b", text: "Incendio" },
            { id: "c", text: "Lumos" },
            { id: "d", text: "Accio" },
          ],
          correctAnswer: "c",
          explanation:
            "Lumos. Pour éteindre la lumière, on dit Nox, et Incendio sert à allumer un vrai feu.",
        },
        {
          id: 13,
          question: "Quelle potion oblige celui qui la boit à dire la vérité ?",
          answers: [
            { id: "a", text: "Le Veritaserum" },
            { id: "b", text: "La Goutte du Mort vivant" },
            { id: "c", text: "Le Polynectar" },
            { id: "d", text: "L'Amortentia" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Veritaserum. Trois gouttes suffisent, et c'est avec ça que Dumbledore fait avouer Barty Croupton Jr. dans La Coupe de feu.",
        },
        {
          id: 14,
          question: "Quel sort Harry lance sur Drago dans les toilettes, dans Le Prince de sang-mêlé ?",
          answers: [
            { id: "a", text: "Sectumsempra" },
            { id: "b", text: "Levicorpus" },
            { id: "c", text: "Petrificus Totalus" },
            { id: "d", text: "Confringo" },
          ],
          correctAnswer: "a",
          explanation:
            "Sectumsempra, un sort qu'il a trouvé dans le vieux livre du Prince de sang-mêlé. Drago est gravement blessé, et c'est Rogue qui le soigne.",
        },
        {
          id: 15,
          question: "Comment s'appelle un objet qui transporte d'un endroit à un autre dès qu'on le touche ?",
          answers: [
            { id: "a", text: "Un Rapeltout" },
            { id: "b", text: "Un Scrutoscope" },
            { id: "c", text: "Un Portoloin" },
            { id: "d", text: "Un Vif d'or" },
          ],
          correctAnswer: "c",
          explanation:
            "Un Portoloin. Dans La Coupe de feu, Harry et les Weasley touchent une vieille botte pour aller à la Coupe du monde de Quidditch.",
        },
        {
          id: 16,
          question: "Selon Slughorn, quelle est la potion d'amour la plus puissante du monde ?",
          answers: [
            { id: "a", text: "Le Felix Felicis" },
            { id: "b", text: "L'Amortentia" },
            { id: "c", text: "Le Veritaserum" },
            { id: "d", text: "La Pimentine" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Amortentia. Son odeur change selon la personne : Hermione y sent l'herbe fraîchement coupée, le parchemin neuf et les cheveux de quelqu'un.",
        },
        {
          id: 17,
          question: "Quel sort Harry utilise pour faire venir son Éclair de feu pendant la première tâche du Tournoi ?",
          answers: [
            { id: "a", text: "Accio" },
            { id: "b", text: "Alohomora" },
            { id: "c", text: "Wingardium Leviosa" },
            { id: "d", text: "Lumos" },
          ],
          correctAnswer: "a",
          explanation:
            "Accio, le sortilège d'attraction. Hermione l'a fait répéter à Harry pendant des heures pour qu'il puisse échapper au dragon.",
        },
        {
          id: 18,
          question: "En plus de l'or, que permet de fabriquer la pierre philosophale ?",
          answers: [
            { id: "a", text: "Du Felix Felicis" },
            { id: "b", text: "De la poudre de Cheminette" },
            { id: "c", text: "L'élixir de longue vie" },
            { id: "d", text: "Du Polynectar" },
          ],
          correctAnswer: "c",
          explanation:
            "L'élixir de longue vie, qui rend immortel tant qu'on en boit. Nicolas Flamel l'a utilisé pour vivre plus de 600 ans.",
        },
        {
          id: 19,
          question: "Quel sort répare un objet cassé ?",
          answers: [
            { id: "a", text: "Reparo" },
            { id: "b", text: "Diffindo" },
            { id: "c", text: "Protego" },
            { id: "d", text: "Obliviate" },
          ],
          correctAnswer: "a",
          explanation:
            "Reparo. Diffindo sert au contraire à couper ou déchirer, et Obliviate efface la mémoire.",
        },
        {
          id: 20,
          question: "Qu'est-ce que Dumbledore lègue à Harry dans son testament, dans Les Reliques de la Mort ?",
          answers: [
            { id: "a", text: "Le Déluminateur" },
            { id: "b", text: "Les Contes de Beedle le Barde" },
            { id: "c", text: "Le premier Vif d'or qu'il a attrapé" },
            { id: "d", text: "La Pensine" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Vif d'or de son premier match à Poudlard, qui cache la Pierre de résurrection. Le Déluminateur va à Ron et les Contes de Beedle le Barde à Hermione.",
        },
      ],
    },
    en: {
      title: "Harry Potter quiz: spells, potions and objects",
      description:
        "Wingardium Leviosa, Polyjuice, the Pensieve… Twenty questions on the spells, potions and magical objects of Harry Potter.",
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
        {
          id: 11,
          question: "Which spell defeats a Boggart by making it look ridiculous?",
          answers: [
            { id: "a", text: "Expelliarmus" },
            { id: "b", text: "Riddikulus" },
            { id: "c", text: "Protego" },
            { id: "d", text: "Stupefix" },
          ],
          correctAnswer: "b",
          explanation:
            "Riddikulus. Lupin teaches it to his class in third year: you picture something funny and the Boggart turns into it.",
        },
        {
          id: 12,
          question: "Which spell lights up the tip of a wand?",
          answers: [
            { id: "a", text: "Nox" },
            { id: "b", text: "Incendio" },
            { id: "c", text: "Lumos" },
            { id: "d", text: "Accio" },
          ],
          correctAnswer: "c",
          explanation:
            "Lumos. To turn the light off you say Nox, and Incendio is for starting an actual fire.",
        },
        {
          id: 13,
          question: "Which potion forces the drinker to tell the truth?",
          answers: [
            { id: "a", text: "Veritaserum" },
            { id: "b", text: "The Draught of Living Death" },
            { id: "c", text: "Polyjuice Potion" },
            { id: "d", text: "Amortentia" },
          ],
          correctAnswer: "a",
          explanation:
            "Veritaserum. Three drops are enough, and Dumbledore uses it to make Barty Crouch Jr. confess in Goblet of Fire.",
        },
        {
          id: 14,
          question: "Which spell does Harry cast on Draco in the bathroom in Half-Blood Prince?",
          answers: [
            { id: "a", text: "Sectumsempra" },
            { id: "b", text: "Levicorpus" },
            { id: "c", text: "Petrificus Totalus" },
            { id: "d", text: "Confringo" },
          ],
          correctAnswer: "a",
          explanation:
            "Sectumsempra, a spell he found in the Half-Blood Prince's old book. Draco is badly hurt and Snape is the one who heals him.",
        },
        {
          id: 15,
          question: "What do you call an object that carries you to another place as soon as you touch it?",
          answers: [
            { id: "a", text: "A Remembrall" },
            { id: "b", text: "A Sneakoscope" },
            { id: "c", text: "A Portkey" },
            { id: "d", text: "A Golden Snitch" },
          ],
          correctAnswer: "c",
          explanation:
            "A Portkey. In Goblet of Fire, Harry and the Weasleys grab an old boot to get to the Quidditch World Cup.",
        },
        {
          id: 16,
          question: "According to Slughorn, what is the most powerful love potion in the world?",
          answers: [
            { id: "a", text: "Felix Felicis" },
            { id: "b", text: "Amortentia" },
            { id: "c", text: "Veritaserum" },
            { id: "d", text: "Pepperup Potion" },
          ],
          correctAnswer: "b",
          explanation:
            "Amortentia. It smells different to each person: Hermione picks up freshly mown grass, new parchment and someone's hair.",
        },
        {
          id: 17,
          question: "Which spell does Harry use to summon his Firebolt during the first task of the Tournament?",
          answers: [
            { id: "a", text: "Accio" },
            { id: "b", text: "Alohomora" },
            { id: "c", text: "Wingardium Leviosa" },
            { id: "d", text: "Lumos" },
          ],
          correctAnswer: "a",
          explanation:
            "Accio, the Summoning Charm. Hermione made him practise it for hours so he could get away from the dragon.",
        },
        {
          id: 18,
          question: "Apart from gold, what can the Philosopher's Stone produce?",
          answers: [
            { id: "a", text: "Felix Felicis" },
            { id: "b", text: "Floo powder" },
            { id: "c", text: "The Elixir of Life" },
            { id: "d", text: "Polyjuice Potion" },
          ],
          correctAnswer: "c",
          explanation:
            "The Elixir of Life, which keeps you alive as long as you keep drinking it. Nicolas Flamel used it to live more than 600 years.",
        },
        {
          id: 19,
          question: "Which spell fixes a broken object?",
          answers: [
            { id: "a", text: "Reparo" },
            { id: "b", text: "Diffindo" },
            { id: "c", text: "Protego" },
            { id: "d", text: "Obliviate" },
          ],
          correctAnswer: "a",
          explanation:
            "Reparo. Diffindo does the opposite and cuts or rips things, and Obliviate wipes someone's memory.",
        },
        {
          id: 20,
          question: "What does Dumbledore leave Harry in his will in Deathly Hallows?",
          answers: [
            { id: "a", text: "The Deluminator" },
            { id: "b", text: "The Tales of Beedle the Bard" },
            { id: "c", text: "The first Snitch he ever caught" },
            { id: "d", text: "The Pensieve" },
          ],
          correctAnswer: "c",
          explanation:
            "The Snitch from his first Quidditch match at Hogwarts, which hides the Resurrection Stone. The Deluminator goes to Ron and The Tales of Beedle the Bard to Hermione.",
        },
      ],
    },
    es: {
      title: "Harry Potter: hechizos, pociones y objetos",
      description:
        "Wingardium Leviosa, multijugos, el pensadero… Veinte preguntas sobre los hechizos, las pociones y los objetos mágicos de Harry Potter.",
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
        {
          id: 11,
          question: "¿Qué hechizo vence a un boggart volviéndolo ridículo?",
          answers: [
            { id: "a", text: "Expelliarmus" },
            { id: "b", text: "Riddikulus" },
            { id: "c", text: "Protego" },
            { id: "d", text: "Stupefix" },
          ],
          correctAnswer: "b",
          explanation:
            "Riddikulus. Lupin se lo enseña a su clase en tercer curso: hay que pensar en algo gracioso y el boggart adopta esa forma.",
        },
        {
          id: 12,
          question: "¿Qué hechizo enciende la punta de la varita?",
          answers: [
            { id: "a", text: "Nox" },
            { id: "b", text: "Incendio" },
            { id: "c", text: "Lumos" },
            { id: "d", text: "Accio" },
          ],
          correctAnswer: "c",
          explanation:
            "Lumos. Para apagar la luz se dice Nox, e Incendio sirve para prender fuego de verdad.",
        },
        {
          id: 13,
          question: "¿Qué poción obliga a quien la bebe a decir la verdad?",
          answers: [
            { id: "a", text: "El veritaserum" },
            { id: "b", text: "El filtro de muertos en vida" },
            { id: "c", text: "La poción multijugos" },
            { id: "d", text: "La amortentia" },
          ],
          correctAnswer: "a",
          explanation:
            "El veritaserum. Bastan tres gotas, y Dumbledore lo usa para que Barty Crouch Jr. confiese en El cáliz de fuego.",
        },
        {
          id: 14,
          question: "¿Qué hechizo le lanza Harry a Draco en el baño en El misterio del príncipe?",
          answers: [
            { id: "a", text: "Sectumsempra" },
            { id: "b", text: "Levicorpus" },
            { id: "c", text: "Petrificus Totalus" },
            { id: "d", text: "Confringo" },
          ],
          correctAnswer: "a",
          explanation:
            "Sectumsempra, un hechizo que encontró en el viejo libro del Príncipe Mestizo. Draco queda malherido y es Snape quien lo cura.",
        },
        {
          id: 15,
          question: "¿Cómo se llama el objeto que te lleva a otro lugar en cuanto lo tocas?",
          answers: [
            { id: "a", text: "Una recordadora" },
            { id: "b", text: "Un chivatoscopio" },
            { id: "c", text: "Un traslador" },
            { id: "d", text: "Una snitch dorada" },
          ],
          correctAnswer: "c",
          explanation:
            "Un traslador. En El cáliz de fuego, Harry y los Weasley tocan una bota vieja para ir a los Mundiales de quidditch.",
        },
        {
          id: 16,
          question: "Según Slughorn, ¿cuál es el filtro de amor más poderoso del mundo?",
          answers: [
            { id: "a", text: "El felix felicis" },
            { id: "b", text: "La amortentia" },
            { id: "c", text: "El veritaserum" },
            { id: "d", text: "La poción pimentónica" },
          ],
          correctAnswer: "b",
          explanation:
            "La amortentia. Huele distinto para cada persona: Hermione nota el olor a césped recién cortado, a pergamino nuevo y al pelo de alguien.",
        },
        {
          id: 17,
          question: "¿Qué hechizo usa Harry para atraer su Saeta de Fuego en la primera prueba del Torneo?",
          answers: [
            { id: "a", text: "Accio" },
            { id: "b", text: "Alohomora" },
            { id: "c", text: "Wingardium Leviosa" },
            { id: "d", text: "Lumos" },
          ],
          correctAnswer: "a",
          explanation:
            "Accio, el encantamiento convocador. Hermione le hizo practicarlo durante horas para que pudiera escapar del dragón.",
        },
        {
          id: 18,
          question: "Además de oro, ¿qué permite fabricar la piedra filosofal?",
          answers: [
            { id: "a", text: "Felix felicis" },
            { id: "b", text: "Polvos flu" },
            { id: "c", text: "El elixir de la vida" },
            { id: "d", text: "Poción multijugos" },
          ],
          correctAnswer: "c",
          explanation:
            "El elixir de la vida, que te mantiene con vida mientras lo sigas bebiendo. Nicolas Flamel lo usó para vivir más de 600 años.",
        },
        {
          id: 19,
          question: "¿Qué hechizo arregla un objeto roto?",
          answers: [
            { id: "a", text: "Reparo" },
            { id: "b", text: "Diffindo" },
            { id: "c", text: "Protego" },
            { id: "d", text: "Obliviate" },
          ],
          correctAnswer: "a",
          explanation:
            "Reparo. Diffindo hace lo contrario, corta o rasga, y Obliviate borra la memoria.",
        },
        {
          id: 20,
          question: "¿Qué le deja Dumbledore a Harry en su testamento en Las reliquias de la Muerte?",
          answers: [
            { id: "a", text: "El desiluminador" },
            { id: "b", text: "Los cuentos de Beedle el Bardo" },
            { id: "c", text: "La primera snitch que atrapó" },
            { id: "d", text: "El pensadero" },
          ],
          correctAnswer: "c",
          explanation:
            "La snitch de su primer partido en Hogwarts, que esconde la piedra de la resurrección. El desiluminador es para Ron y Los cuentos de Beedle el Bardo para Hermione.",
        },
      ],
    },
  },
};

export default [quizHarryPotterMagie] as TranslatedQuiz[];
