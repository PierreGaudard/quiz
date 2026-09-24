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
  subcategory: "Pokemon",
  difficulty: "medium",
  coverImage: "/images/cover-pokemon-types.webp",
  gameType: "duel",
  playCount: 7300,
  translations: {
    fr: {
      title: "Duel Pokémon : les types",
      description:
        "Plante ou Feu, Sol ou Vol, Spectre ou Roche : dix duels sur les types Pokémon et leurs faiblesses. À toi de choisir le bon !",
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
      ],
    },
    en: {
      title: "Pokémon duel: the types",
      description:
        "Grass or Fire, Ground or Flying, Ghost or Rock: ten duels about Pokémon types and their weaknesses. Pick the right one!",
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
      ],
    },
    es: {
      title: "Duelo Pokémon: los tipos",
      description:
        "Planta o Fuego, Tierra o Volador, Fantasma o Roca: diez duelos sobre los tipos Pokémon y sus debilidades. ¡Elige el bueno!",
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
      ],
    },
  },
};

export default [quizPokemonTypes] as TranslatedQuiz[];
