import type { TranslatedQuiz } from "./types";

/**
 * Quiz Pokémon en mode duel : les types, leurs forces et leurs faiblesses.
 *
 * La sous-catégorie s'écrit « Pokemon » sans accent dans categories.ts, les
 * textes écrivent Pokémon. Deux réponses exactement par question (DuelPlayer).
 * Les noms de types et de Pokémon suivent chaque langue (Électrik / Electric /
 * Eléctrico, Ectoplasma / Gengar). Le quiz d'origine (quiz-pokemon.ts) cite
 * déjà le type de Pikachu et les évolutions d'Évoli, on n'y revient pas.
 */
export const quizPokemonTypes: TranslatedQuiz = {
  slug: "quiz-pokemon-types",
  slugs: { en: "pokemon-types-quiz", fr: "quiz-pokemon-types", es: "quiz-pokemon-tipos" },
  categorySlug: "jeux-video",
  subcategory: "Pokémon",
  difficulty: "medium",
  coverImage: "/images/cover-pokemon-types.webp",
  gameType: "duel",
  playCount: 7300,
  translations: {
    fr: {
      title: "Duel Pokémon : les types",
      description:
        "Plante ou Feu, Sol ou Vol, Spectre ou Roche : vingt duels sur les types Pokémon et leurs faiblesses. À toi de choisir le bon !",
      questions: [
        {
          id: 1,
          question: "Quel type est super efficace contre le type Eau ?",
          answers: [
            { id: "a", text: "Plante" },
            { id: "b", text: "Feu" },
          ],
          correctAnswer: "a",
          explanation:
            "Plante, et aussi Électrik. Le Feu, lui, est faible contre l'Eau, c'est d'ailleurs pour ça qu'un Salamèche galère contre un Carapuce.",
        },
        {
          id: 2,
          question: "Sur quel type les attaques Électrik n'ont-elles aucun effet ?",
          answers: [
            { id: "a", text: "Vol" },
            { id: "b", text: "Sol" },
          ],
          correctAnswer: "b",
          explanation:
            "Sol. Un Pokémon Sol ne prend aucun dégât d'une attaque Électrik. Contre le type Vol, au contraire, l'Électrik est super efficace.",
        },
        {
          id: 3,
          image: "/images/q-pokemon-types-03.webp",
          question: "Quel type est arrivé avec la 6e génération, dans Pokémon X et Y ?",
          answers: [
            { id: "a", text: "Fée" },
            { id: "b", text: "Acier" },
          ],
          correctAnswer: "a",
          explanation:
            "Fée, en 2013. Nymphali, l'une des évolutions d'Évoli, fait partie des Pokémon de ce type. Acier et Ténèbres étaient arrivés bien avant, avec Or et Argent.",
        },
        {
          id: 4,
          question: "Sur quel type les attaques Normal n'ont-elles aucun effet ?",
          answers: [
            { id: "a", text: "Roche" },
            { id: "b", text: "Spectre" },
          ],
          correctAnswer: "b",
          explanation:
            "Spectre. Et c'est vrai dans les deux sens : les attaques Spectre ne touchent pas non plus les Pokémon Normal. Contre la Roche, le Normal fait juste moins de dégâts.",
        },
        {
          id: 5,
          image: "/images/q-pokemon-types-05.webp",
          question: "Quels sont les types de Dracaufeu ?",
          answers: [
            { id: "a", text: "Feu et Vol" },
            { id: "b", text: "Feu et Dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "Feu et Vol, malgré son allure de dragon. Du coup, il craint énormément les attaques Roche, qui lui font quatre fois plus de dégâts.",
        },
        {
          id: 6,
          question: "Quel type est super efficace contre le type Dragon ?",
          answers: [
            { id: "a", text: "Feu" },
            { id: "b", text: "Glace" },
          ],
          correctAnswer: "b",
          explanation:
            "Glace, comme les types Dragon et Fée. Le Feu, au contraire, ne fait pas grand-chose à un Dragon, qui le résiste.",
        },
        {
          id: 7,
          image: "/images/q-pokemon-types-07.webp",
          question: "Quels sont les types d'Ectoplasma ?",
          answers: [
            { id: "a", text: "Spectre et Poison" },
            { id: "b", text: "Spectre et Ténèbres" },
          ],
          correctAnswer: "a",
          explanation:
            "Spectre et Poison, depuis la première génération. Le type Ténèbres n'existait même pas quand Ectoplasma est apparu.",
        },
        {
          id: 8,
          question: "Combien de types différents existe-t-il aujourd'hui dans les jeux Pokémon ?",
          answers: [
            { id: "a", text: "17" },
            { id: "b", text: "18" },
          ],
          correctAnswer: "b",
          explanation:
            "18, depuis l'arrivée du type Fée en 2013. Il y en avait 15 dans les tout premiers jeux, puis 17 avec Or et Argent.",
        },
        {
          id: 9,
          image: "/images/q-pokemon-types-09.webp",
          question: "Quels sont les types de Léviator ?",
          answers: [
            { id: "a", text: "Eau et Vol" },
            { id: "b", text: "Eau et Dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "Eau et Vol, même s'il ressemble à un grand serpent de mer. Magicarpe, sa pré-évolution, est de type Eau tout court.",
        },
        {
          id: 10,
          question: "Quel type est super efficace contre le type Psy ?",
          answers: [
            { id: "a", text: "Combat" },
            { id: "b", text: "Ténèbres" },
          ],
          correctAnswer: "b",
          explanation:
            "Ténèbres, comme Insecte et Spectre. Le Combat, au contraire, est peu efficace contre un Pokémon Psy.",
        },
        {
          id: 11,
          question: "Sur quel type les attaques Dragon n'ont-elles aucun effet ?",
          answers: [
            { id: "a", text: "Acier" },
            { id: "b", text: "Fée" },
          ],
          correctAnswer: "b",
          explanation:
            "Fée. Un Pokémon Fée ne prend aucun dégât d'une attaque Dragon. L'Acier, de son côté, résiste au Dragon, mais il prend quand même un peu de dégâts.",
        },
        {
          id: 12,
          question: "Sur quel type les attaques Sol n'ont-elles aucun effet ?",
          answers: [
            { id: "a", text: "Vol" },
            { id: "b", text: "Eau" },
          ],
          correctAnswer: "a",
          explanation:
            "Vol. Un Pokémon qui vole ne se fait pas toucher par un Séisme, par exemple. Contre l'Eau, le Sol fait des dégâts normaux.",
        },
        {
          id: 13,
          question: "Quel type est super efficace contre le type Roche ?",
          answers: [
            { id: "a", text: "Feu" },
            { id: "b", text: "Eau" },
          ],
          correctAnswer: "b",
          explanation:
            "Eau, comme Plante, Combat, Sol et Acier. Le Feu, au contraire, est peu efficace contre la Roche.",
        },
        {
          id: 14,
          question: "Quels sont les types de Lokhlass ?",
          answers: [
            { id: "a", text: "Eau et Glace" },
            { id: "b", text: "Eau et Psy" },
          ],
          correctAnswer: "a",
          explanation:
            "Eau et Glace. Lokhlass, le grand Pokémon qui transporte les dresseurs sur son dos, connaît d'ailleurs souvent Laser Glace.",
        },
        {
          id: 15,
          question: "Quel type est super efficace contre le type Acier ?",
          answers: [
            { id: "a", text: "Glace" },
            { id: "b", text: "Feu" },
          ],
          correctAnswer: "b",
          explanation:
            "Feu, comme Combat et Sol. La Glace, elle, est peu efficace contre l'Acier, qui la résiste.",
        },
        {
          id: 16,
          question: "Quels sont les types de Tyranocif ?",
          answers: [
            { id: "a", text: "Roche et Ténèbres" },
            { id: "b", text: "Roche et Sol" },
          ],
          correctAnswer: "a",
          explanation:
            "Roche et Ténèbres. Il est arrivé avec Or et Argent, en même temps que le type Ténèbres. Du coup, il craint beaucoup les attaques Combat, qui lui font quatre fois plus de dégâts.",
        },
        {
          id: 17,
          question: "Sur quel type les attaques Poison n'ont-elles aucun effet ?",
          answers: [
            { id: "a", text: "Insecte" },
            { id: "b", text: "Acier" },
          ],
          correctAnswer: "b",
          explanation:
            "Acier. Un Pokémon Acier ne peut pas être empoisonné par une attaque Poison. Contre l'Insecte, le Poison fait des dégâts normaux.",
        },
        {
          id: 18,
          question: "Quel type est super efficace contre le type Glace ?",
          answers: [
            { id: "a", text: "Combat" },
            { id: "b", text: "Eau" },
          ],
          correctAnswer: "a",
          explanation:
            "Combat, comme Feu, Roche et Acier. L'Eau fait des dégâts normaux à un Pokémon Glace.",
        },
        {
          id: 19,
          question: "Quels sont les types de M. Mime depuis Pokémon X et Y ?",
          answers: [
            { id: "a", text: "Psy et Normal" },
            { id: "b", text: "Psy et Fée" },
          ],
          correctAnswer: "b",
          explanation:
            "Psy et Fée. Dans les cinq premières générations, M. Mime était de type Psy tout court. Il a reçu le type Fée quand celui-ci est apparu, en 2013.",
        },
        {
          id: 20,
          question: "Quels sont les types de Lucario ?",
          answers: [
            { id: "a", text: "Combat et Acier" },
            { id: "b", text: "Combat et Psy" },
          ],
          correctAnswer: "a",
          explanation:
            "Combat et Acier. Lucario vient de la 4e génération, dans Diamant et Perle, et il est connu pour maîtriser l'aura.",
        },
      ],
    },
    en: {
      title: "Pokémon duel: the types",
      description:
        "Grass or Fire, Ground or Flying, Ghost or Rock: twenty duels about Pokémon types and their weaknesses. Pick the right one!",
      questions: [
        {
          id: 1,
          question: "Which type is super effective against Water?",
          answers: [
            { id: "a", text: "Grass" },
            { id: "b", text: "Fire" },
          ],
          correctAnswer: "a",
          explanation:
            "Grass, and Electric too. Fire is weak to Water, which is why a Charmander struggles against a Squirtle.",
        },
        {
          id: 2,
          question: "Which type are Electric attacks completely useless against?",
          answers: [
            { id: "a", text: "Flying" },
            { id: "b", text: "Ground" },
          ],
          correctAnswer: "b",
          explanation:
            "Ground. A Ground-type Pokémon takes no damage at all from an Electric move. Against Flying, Electric is actually super effective.",
        },
        {
          id: 3,
          image: "/images/q-pokemon-types-03.webp",
          question: "Which type arrived with Generation 6, in Pokémon X and Y?",
          answers: [
            { id: "a", text: "Fairy" },
            { id: "b", text: "Steel" },
          ],
          correctAnswer: "a",
          explanation:
            "Fairy, in 2013. Sylveon, one of Eevee's evolutions, is one of the Pokémon of that type. Steel and Dark had arrived much earlier, with Gold and Silver.",
        },
        {
          id: 4,
          question: "Which type are Normal attacks completely useless against?",
          answers: [
            { id: "a", text: "Rock" },
            { id: "b", text: "Ghost" },
          ],
          correctAnswer: "b",
          explanation:
            "Ghost. It works both ways, too: Ghost moves don't hit Normal-type Pokémon either. Against Rock, Normal just does less damage.",
        },
        {
          id: 5,
          image: "/images/q-pokemon-types-05.webp",
          question: "What are Charizard's types?",
          answers: [
            { id: "a", text: "Fire and Flying" },
            { id: "b", text: "Fire and Dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "Fire and Flying, even though it looks like a dragon. That's why Rock moves hurt it so much: they do four times the damage.",
        },
        {
          id: 6,
          question: "Which type is super effective against Dragon?",
          answers: [
            { id: "a", text: "Fire" },
            { id: "b", text: "Ice" },
          ],
          correctAnswer: "b",
          explanation:
            "Ice, along with Dragon and Fairy. Fire barely does anything to a Dragon, which resists it.",
        },
        {
          id: 7,
          image: "/images/q-pokemon-types-07.webp",
          question: "What are Gengar's types?",
          answers: [
            { id: "a", text: "Ghost and Poison" },
            { id: "b", text: "Ghost and Dark" },
          ],
          correctAnswer: "a",
          explanation:
            "Ghost and Poison, ever since the first generation. The Dark type didn't even exist when Gengar first showed up.",
        },
        {
          id: 8,
          question: "How many different types are there in the Pokémon games today?",
          answers: [
            { id: "a", text: "17" },
            { id: "b", text: "18" },
          ],
          correctAnswer: "b",
          explanation:
            "18, since the Fairy type arrived in 2013. There were 15 in the very first games, then 17 with Gold and Silver.",
        },
        {
          id: 9,
          image: "/images/q-pokemon-types-09.webp",
          question: "What are Gyarados's types?",
          answers: [
            { id: "a", text: "Water and Flying" },
            { id: "b", text: "Water and Dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "Water and Flying, even though it looks like a giant sea serpent. Magikarp, which it evolves from, is just Water.",
        },
        {
          id: 10,
          question: "Which type is super effective against Psychic?",
          answers: [
            { id: "a", text: "Fighting" },
            { id: "b", text: "Dark" },
          ],
          correctAnswer: "b",
          explanation:
            "Dark, along with Bug and Ghost. Fighting, on the other hand, isn't very effective against a Psychic Pokémon.",
        },
        {
          id: 11,
          question: "Which type is completely immune to Dragon moves?",
          answers: [
            { id: "a", text: "Steel" },
            { id: "b", text: "Fairy" },
          ],
          correctAnswer: "b",
          explanation:
            "Fairy. A Fairy-type Pokémon takes no damage at all from a Dragon move. Steel resists Dragon, but it still takes a bit of damage.",
        },
        {
          id: 12,
          question: "Which type is completely immune to Ground moves?",
          answers: [
            { id: "a", text: "Flying" },
            { id: "b", text: "Water" },
          ],
          correctAnswer: "a",
          explanation:
            "Flying. A Pokémon in the air can't be hit by Earthquake, for example. Against Water, Ground moves do normal damage.",
        },
        {
          id: 13,
          question: "Which type is super effective against Rock?",
          answers: [
            { id: "a", text: "Fire" },
            { id: "b", text: "Water" },
          ],
          correctAnswer: "b",
          explanation:
            "Water, along with Grass, Fighting, Ground and Steel. Fire is the opposite: it's not very effective against Rock.",
        },
        {
          id: 14,
          question: "What are Lapras's types?",
          answers: [
            { id: "a", text: "Water and Ice" },
            { id: "b", text: "Water and Psychic" },
          ],
          correctAnswer: "a",
          explanation:
            "Water and Ice. Lapras, the big Pokémon that carries trainers across the sea on its back, often knows Ice Beam.",
        },
        {
          id: 15,
          question: "Which type is super effective against Steel?",
          answers: [
            { id: "a", text: "Ice" },
            { id: "b", text: "Fire" },
          ],
          correctAnswer: "b",
          explanation:
            "Fire, along with Fighting and Ground. Ice is not very effective against Steel, which resists it.",
        },
        {
          id: 16,
          question: "What are Tyranitar's types?",
          answers: [
            { id: "a", text: "Rock and Dark" },
            { id: "b", text: "Rock and Ground" },
          ],
          correctAnswer: "a",
          explanation:
            "Rock and Dark. It arrived in Gold and Silver, at the same time as the Dark type. That's why Fighting moves hurt it so much: they do four times the damage.",
        },
        {
          id: 17,
          question: "Which type is completely immune to Poison moves?",
          answers: [
            { id: "a", text: "Bug" },
            { id: "b", text: "Steel" },
          ],
          correctAnswer: "b",
          explanation:
            "Steel. Poison moves don't affect Steel-type Pokémon at all. Against Bug, Poison does normal damage.",
        },
        {
          id: 18,
          question: "Which type is super effective against Ice?",
          answers: [
            { id: "a", text: "Fighting" },
            { id: "b", text: "Water" },
          ],
          correctAnswer: "a",
          explanation:
            "Fighting, along with Fire, Rock and Steel. Water only does normal damage to an Ice-type Pokémon.",
        },
        {
          id: 19,
          question: "What have Mr. Mime's types been since Pokémon X and Y?",
          answers: [
            { id: "a", text: "Psychic and Normal" },
            { id: "b", text: "Psychic and Fairy" },
          ],
          correctAnswer: "b",
          explanation:
            "Psychic and Fairy. In the first five generations Mr. Mime was pure Psychic, and it got the Fairy type when that type was added in 2013.",
        },
        {
          id: 20,
          question: "What are Lucario's types?",
          answers: [
            { id: "a", text: "Fighting and Steel" },
            { id: "b", text: "Fighting and Psychic" },
          ],
          correctAnswer: "a",
          explanation:
            "Fighting and Steel. Lucario comes from the fourth generation, Diamond and Pearl, and it's known for controlling aura.",
        },
      ],
    },
    es: {
      title: "Duelo Pokémon: los tipos",
      description:
        "Planta o Fuego, Tierra o Volador, Fantasma o Roca: veinte duelos sobre los tipos Pokémon y sus debilidades. ¡Elige el bueno!",
      questions: [
        {
          id: 1,
          question: "¿Qué tipo es súper eficaz contra el tipo Agua?",
          answers: [
            { id: "a", text: "Planta" },
            { id: "b", text: "Fuego" },
          ],
          correctAnswer: "a",
          explanation:
            "Planta, y también Eléctrico. El Fuego es débil ante el Agua, por eso un Charmander lo pasa mal contra un Squirtle.",
        },
        {
          id: 2,
          question: "¿Contra qué tipo no tienen ningún efecto los ataques Eléctricos?",
          answers: [
            { id: "a", text: "Volador" },
            { id: "b", text: "Tierra" },
          ],
          correctAnswer: "b",
          explanation:
            "Tierra. Un Pokémon de tipo Tierra no recibe ningún daño de un ataque Eléctrico. Contra el tipo Volador, en cambio, el Eléctrico es súper eficaz.",
        },
        {
          id: 3,
          image: "/images/q-pokemon-types-03.webp",
          question: "¿Qué tipo llegó con la 6.ª generación, en Pokémon X e Y?",
          answers: [
            { id: "a", text: "Hada" },
            { id: "b", text: "Acero" },
          ],
          correctAnswer: "a",
          explanation:
            "Hada, en 2013. Sylveon, una de las evoluciones de Eevee, es uno de los Pokémon de ese tipo. Acero y Siniestro habían llegado mucho antes, con Oro y Plata.",
        },
        {
          id: 4,
          question: "¿Contra qué tipo no tienen ningún efecto los ataques de tipo Normal?",
          answers: [
            { id: "a", text: "Roca" },
            { id: "b", text: "Fantasma" },
          ],
          correctAnswer: "b",
          explanation:
            "Fantasma. Y funciona en los dos sentidos: los ataques Fantasma tampoco afectan a los Pokémon Normal. Contra la Roca, el Normal solo hace menos daño.",
        },
        {
          id: 5,
          image: "/images/q-pokemon-types-05.webp",
          question: "¿De qué tipos es Charizard?",
          answers: [
            { id: "a", text: "Fuego y Volador" },
            { id: "b", text: "Fuego y Dragón" },
          ],
          correctAnswer: "a",
          explanation:
            "Fuego y Volador, aunque parezca un dragón. Por eso le hacen tanto daño los ataques de tipo Roca: le quitan cuatro veces más.",
        },
        {
          id: 6,
          question: "¿Qué tipo es súper eficaz contra el tipo Dragón?",
          answers: [
            { id: "a", text: "Fuego" },
            { id: "b", text: "Hielo" },
          ],
          correctAnswer: "b",
          explanation:
            "Hielo, igual que Dragón y Hada. El Fuego, en cambio, apenas le hace nada a un Dragón, que lo resiste.",
        },
        {
          id: 7,
          image: "/images/q-pokemon-types-07.webp",
          question: "¿De qué tipos es Gengar?",
          answers: [
            { id: "a", text: "Fantasma y Veneno" },
            { id: "b", text: "Fantasma y Siniestro" },
          ],
          correctAnswer: "a",
          explanation:
            "Fantasma y Veneno, desde la primera generación. El tipo Siniestro ni siquiera existía cuando apareció Gengar.",
        },
        {
          id: 8,
          question: "¿Cuántos tipos distintos hay hoy en los juegos Pokémon?",
          answers: [
            { id: "a", text: "17" },
            { id: "b", text: "18" },
          ],
          correctAnswer: "b",
          explanation:
            "18, desde la llegada del tipo Hada en 2013. Había 15 en los primeros juegos, y luego 17 con Oro y Plata.",
        },
        {
          id: 9,
          image: "/images/q-pokemon-types-09.webp",
          question: "¿De qué tipos es Gyarados?",
          answers: [
            { id: "a", text: "Agua y Volador" },
            { id: "b", text: "Agua y Dragón" },
          ],
          correctAnswer: "a",
          explanation:
            "Agua y Volador, aunque parezca una gran serpiente marina. Magikarp, del que evoluciona, es solo de tipo Agua.",
        },
        {
          id: 10,
          question: "¿Qué tipo es súper eficaz contra el tipo Psíquico?",
          answers: [
            { id: "a", text: "Lucha" },
            { id: "b", text: "Siniestro" },
          ],
          correctAnswer: "b",
          explanation:
            "Siniestro, igual que Bicho y Fantasma. La Lucha, en cambio, es poco eficaz contra un Pokémon Psíquico.",
        },
        {
          id: 11,
          question: "¿Qué tipo no recibe ningún daño de los ataques de tipo Dragón?",
          answers: [
            { id: "a", text: "Acero" },
            { id: "b", text: "Hada" },
          ],
          correctAnswer: "b",
          explanation:
            "Hada. Un Pokémon de tipo Hada no recibe nada de daño de un ataque Dragón. El Acero resiste al Dragón, pero aun así recibe algo de daño.",
        },
        {
          id: 12,
          question: "¿Qué tipo no recibe ningún daño de los ataques de tipo Tierra?",
          answers: [
            { id: "a", text: "Volador" },
            { id: "b", text: "Agua" },
          ],
          correctAnswer: "a",
          explanation:
            "Volador. A un Pokémon que vuela no le afecta un Terremoto, por ejemplo. Contra el Agua, la Tierra hace un daño normal.",
        },
        {
          id: 13,
          question: "¿Qué tipo es súper eficaz contra el tipo Roca?",
          answers: [
            { id: "a", text: "Fuego" },
            { id: "b", text: "Agua" },
          ],
          correctAnswer: "b",
          explanation:
            "Agua, igual que Planta, Lucha, Tierra y Acero. El Fuego, en cambio, es poco eficaz contra la Roca.",
        },
        {
          id: 14,
          question: "¿De qué tipos es Lapras?",
          answers: [
            { id: "a", text: "Agua y Hielo" },
            { id: "b", text: "Agua y Psíquico" },
          ],
          correctAnswer: "a",
          explanation:
            "Agua y Hielo. Lapras, el gran Pokémon que lleva a los entrenadores por el mar a su espalda, suele saber Rayo Hielo.",
        },
        {
          id: 15,
          question: "¿Qué tipo es súper eficaz contra el tipo Acero?",
          answers: [
            { id: "a", text: "Hielo" },
            { id: "b", text: "Fuego" },
          ],
          correctAnswer: "b",
          explanation:
            "Fuego, igual que Lucha y Tierra. El Hielo es poco eficaz contra el Acero, que lo resiste.",
        },
        {
          id: 16,
          question: "¿De qué tipos es Tyranitar?",
          answers: [
            { id: "a", text: "Roca y Siniestro" },
            { id: "b", text: "Roca y Tierra" },
          ],
          correctAnswer: "a",
          explanation:
            "Roca y Siniestro. Llegó con Oro y Plata, a la vez que el tipo Siniestro. Por eso los ataques de tipo Lucha le hacen tanto daño: cuatro veces más de lo normal.",
        },
        {
          id: 17,
          question: "¿Qué tipo no recibe ningún daño de los ataques de tipo Veneno?",
          answers: [
            { id: "a", text: "Bicho" },
            { id: "b", text: "Acero" },
          ],
          correctAnswer: "b",
          explanation:
            "Acero. Los ataques de tipo Veneno no le hacen nada a un Pokémon de tipo Acero. Contra el tipo Bicho, el Veneno hace un daño normal.",
        },
        {
          id: 18,
          question: "¿Qué tipo es súper eficaz contra el tipo Hielo?",
          answers: [
            { id: "a", text: "Lucha" },
            { id: "b", text: "Agua" },
          ],
          correctAnswer: "a",
          explanation:
            "Lucha, igual que Fuego, Roca y Acero. El Agua solo hace un daño normal a un Pokémon de tipo Hielo.",
        },
        {
          id: 19,
          question: "¿De qué tipos es Mr. Mime desde Pokémon X e Y?",
          answers: [
            { id: "a", text: "Psíquico y Normal" },
            { id: "b", text: "Psíquico y Hada" },
          ],
          correctAnswer: "b",
          explanation:
            "Psíquico y Hada. En las cinco primeras generaciones Mr. Mime era solo de tipo Psíquico, y recibió el tipo Hada cuando este apareció, en 2013.",
        },
        {
          id: 20,
          question: "¿De qué tipos es Lucario?",
          answers: [
            { id: "a", text: "Lucha y Acero" },
            { id: "b", text: "Lucha y Psíquico" },
          ],
          correctAnswer: "a",
          explanation:
            "Lucha y Acero. Lucario es de la cuarta generación, la de Diamante y Perla, y es famoso por controlar el aura.",
        },
      ],
    },
  },
};

export default [quizPokemonTypes] as TranslatedQuiz[];
