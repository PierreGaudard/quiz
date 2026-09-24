import type { TranslatedQuiz } from "./types";

/**
 * Quiz Pokémon en QCM : dix questions sur les premières générations, les jeux
 * et le dessin animé.
 *
 * La sous-catégorie s'écrit « Pokemon » sans accent dans categories.ts : le
 * champ `subcategory` la reprend telle quelle, les textes écrivent Pokémon.
 * Les noms de Pokémon et de lieux suivent chaque langue (Bulbizarre en
 * français, Bulbasaur en anglais et en espagnol, Bourg Palette / Pallet Town /
 * Pueblo Paleta).
 */
export const quizPokemon: TranslatedQuiz = {
  slug: "quiz-pokemon",
  slugs: { en: "pokemon-quiz", fr: "quiz-pokemon", es: "quiz-pokemon" },
  categorySlug: "jeux-video",
  subcategory: "Pokemon",
  difficulty: "easy",
  coverImage: "/images/sub-pokemon.webp",
  gameType: "qcm",
  playCount: 8800,
  translations: {
    fr: {
      title: "Quiz Pokémon : connais-tu Kanto ?",
      description:
        "Dix questions sur Pokémon : le Pokédex, les premiers jeux, Sacha, Évoli ou encore Pokémon GO. De quoi voir si tu es un vrai dresseur !",
      questions: [
        {
          id: 1,
          image: "/images/q-pokemon-01.webp",
          question: "Quel Pokémon porte le numéro 1 du Pokédex ?",
          answers: [
            { id: "a", text: "Pikachu" },
            { id: "b", text: "Salamèche" },
            { id: "c", text: "Bulbizarre" },
            { id: "d", text: "Mew" },
          ],
          correctAnswer: "c",
          explanation:
            "Bulbizarre, le Pokémon de type Plante et Poison. Pikachu, lui, porte le numéro 25.",
        },
        {
          id: 2,
          question: "De quel type est Pikachu ?",
          answers: [
            { id: "a", text: "Électrik" },
            { id: "b", text: "Feu" },
            { id: "c", text: "Normal" },
            { id: "d", text: "Fée" },
          ],
          correctAnswer: "a",
          explanation:
            "Électrik. C'est d'ailleurs pour ça que ses attaques les plus connues sont Éclair et Tonnerre.",
        },
        {
          id: 3,
          question: "En quelle année les premiers jeux Pokémon sont-ils sortis au Japon ?",
          answers: [
            { id: "a", text: "1994" },
            { id: "b", text: "1996" },
            { id: "c", text: "1998" },
            { id: "d", text: "1999" },
          ],
          correctAnswer: "b",
          explanation:
            "En 1996. Pokémon Rouge et Vert sont sortis au Japon le 27 février 1996 sur Game Boy. En Europe, Rouge et Bleu ne sont arrivés qu'en 1999.",
        },
        {
          id: 4,
          question: "Qui a créé Pokémon ?",
          answers: [
            { id: "a", text: "Shigeru Miyamoto" },
            { id: "b", text: "Hideo Kojima" },
            { id: "c", text: "Akira Toriyama" },
            { id: "d", text: "Satoshi Tajiri" },
          ],
          correctAnswer: "d",
          explanation:
            "Satoshi Tajiri, le fondateur du studio Game Freak. Il a eu l'idée en repensant à sa passion d'enfant pour la chasse aux insectes.",
        },
        {
          id: 5,
          image: "/images/q-pokemon-05.webp",
          question: "Quel Pokémon légendaire est sur la jaquette de Pokémon Or ?",
          answers: [
            { id: "a", text: "Lugia" },
            { id: "b", text: "Ho-Oh" },
            { id: "c", text: "Mewtwo" },
            { id: "d", text: "Suicune" },
          ],
          correctAnswer: "b",
          explanation:
            "Ho-Oh, le grand oiseau aux couleurs de l'arc-en-ciel. Lugia est sur la jaquette de la version Argent, et Suicune sur celle de Cristal.",
        },
        {
          id: 6,
          question: "Combien de Pokémon compte la première génération ?",
          answers: [
            { id: "a", text: "100" },
            { id: "b", text: "151" },
            { id: "c", text: "200" },
            { id: "d", text: "251" },
          ],
          correctAnswer: "b",
          explanation:
            "151, de Bulbizarre à Mew. 251, c'est le total une fois la deuxième génération ajoutée, avec Or et Argent.",
        },
        {
          id: 7,
          image: "/images/q-pokemon-07.webp",
          question: "En quoi évolue Évoli si on lui donne une Pierre Eau ?",
          answers: [
            { id: "a", text: "Voltali" },
            { id: "b", text: "Pyroli" },
            { id: "c", text: "Aquali" },
            { id: "d", text: "Mentali" },
          ],
          correctAnswer: "c",
          explanation:
            "Aquali. Avec une Pierre Foudre, Évoli devient Voltali, et avec une Pierre Feu il devient Pyroli.",
        },
        {
          id: 8,
          question: "De quelle ville vient Sacha, le héros du dessin animé ?",
          answers: [
            { id: "a", text: "Jadielle" },
            { id: "b", text: "Bourg Palette" },
            { id: "c", text: "Azuria" },
            { id: "d", text: "Carmin sur Mer" },
          ],
          correctAnswer: "b",
          explanation:
            "Bourg Palette, le petit village où se trouve aussi le laboratoire du Professeur Chen. C'est là qu'il reçoit Pikachu.",
        },
        {
          id: 9,
          question: "Quel est le Pokémon de départ de type Eau dans Pokémon Rouge et Bleu ?",
          answers: [
            { id: "a", text: "Carapuce" },
            { id: "b", text: "Psykokwak" },
            { id: "c", text: "Salamèche" },
            { id: "d", text: "Magicarpe" },
          ],
          correctAnswer: "a",
          explanation:
            "Carapuce. Les deux autres Pokémon de départ sont Bulbizarre pour le type Plante et Salamèche pour le type Feu.",
        },
        {
          id: 10,
          image: "/images/q-pokemon-10.webp",
          question: "En quelle année est sorti Pokémon GO sur smartphone ?",
          answers: [
            { id: "a", text: "2014" },
            { id: "b", text: "2016" },
            { id: "c", text: "2018" },
            { id: "d", text: "2019" },
          ],
          correctAnswer: "b",
          explanation:
            "En juillet 2016. Pendant l'été, on voyait des groupes entiers de joueurs dans les parcs, téléphone à la main, à chasser les Pokémon.",
        },
      ],
    },
    en: {
      title: "Pokémon quiz: do you know Kanto?",
      description:
        "Ten questions about Pokémon: the Pokédex, the first games, Ash, Eevee and Pokémon GO. A good way to see if you're a real trainer!",
      questions: [
        {
          id: 1,
          image: "/images/q-pokemon-01.webp",
          question: "Which Pokémon is number 1 in the Pokédex?",
          answers: [
            { id: "a", text: "Pikachu" },
            { id: "b", text: "Charmander" },
            { id: "c", text: "Bulbasaur" },
            { id: "d", text: "Mew" },
          ],
          correctAnswer: "c",
          explanation:
            "Bulbasaur, the Grass and Poison type Pokémon. Pikachu is number 25.",
        },
        {
          id: 2,
          question: "What type is Pikachu?",
          answers: [
            { id: "a", text: "Electric" },
            { id: "b", text: "Fire" },
            { id: "c", text: "Normal" },
            { id: "d", text: "Fairy" },
          ],
          correctAnswer: "a",
          explanation:
            "Electric. That's why its best-known moves are Thunder Shock and Thunderbolt.",
        },
        {
          id: 3,
          question: "In what year did the first Pokémon games come out in Japan?",
          answers: [
            { id: "a", text: "1994" },
            { id: "b", text: "1996" },
            { id: "c", text: "1998" },
            { id: "d", text: "1999" },
          ],
          correctAnswer: "b",
          explanation:
            "1996. Pokémon Red and Green came out in Japan on February 27, 1996, on Game Boy. Red and Blue only reached North America in 1998.",
        },
        {
          id: 4,
          question: "Who created Pokémon?",
          answers: [
            { id: "a", text: "Shigeru Miyamoto" },
            { id: "b", text: "Hideo Kojima" },
            { id: "c", text: "Akira Toriyama" },
            { id: "d", text: "Satoshi Tajiri" },
          ],
          correctAnswer: "d",
          explanation:
            "Satoshi Tajiri, the founder of Game Freak. The idea came from his childhood hobby of collecting insects.",
        },
        {
          id: 5,
          image: "/images/q-pokemon-05.webp",
          question: "Which legendary Pokémon is on the cover of Pokémon Gold?",
          answers: [
            { id: "a", text: "Lugia" },
            { id: "b", text: "Ho-Oh" },
            { id: "c", text: "Mewtwo" },
            { id: "d", text: "Suicune" },
          ],
          correctAnswer: "b",
          explanation:
            "Ho-Oh, the big rainbow-colored bird. Lugia is on the Silver cover, and Suicune on Crystal.",
        },
        {
          id: 6,
          question: "How many Pokémon are there in the first generation?",
          answers: [
            { id: "a", text: "100" },
            { id: "b", text: "151" },
            { id: "c", text: "200" },
            { id: "d", text: "251" },
          ],
          correctAnswer: "b",
          explanation:
            "151, from Bulbasaur to Mew. 251 is the total once the second generation from Gold and Silver is added.",
        },
        {
          id: 7,
          image: "/images/q-pokemon-07.webp",
          question: "What does Eevee evolve into with a Water Stone?",
          answers: [
            { id: "a", text: "Jolteon" },
            { id: "b", text: "Flareon" },
            { id: "c", text: "Vaporeon" },
            { id: "d", text: "Espeon" },
          ],
          correctAnswer: "c",
          explanation:
            "Vaporeon. With a Thunder Stone Eevee becomes Jolteon, and with a Fire Stone it becomes Flareon.",
        },
        {
          id: 8,
          question: "What town is Ash, the hero of the anime, from?",
          answers: [
            { id: "a", text: "Viridian City" },
            { id: "b", text: "Pallet Town" },
            { id: "c", text: "Cerulean City" },
            { id: "d", text: "Vermilion City" },
          ],
          correctAnswer: "b",
          explanation:
            "Pallet Town, the small village where Professor Oak has his lab. That's where Ash gets Pikachu.",
        },
        {
          id: 9,
          question: "Which is the Water-type starter in Pokémon Red and Blue?",
          answers: [
            { id: "a", text: "Squirtle" },
            { id: "b", text: "Psyduck" },
            { id: "c", text: "Charmander" },
            { id: "d", text: "Magikarp" },
          ],
          correctAnswer: "a",
          explanation:
            "Squirtle. The other two starters are Bulbasaur for Grass and Charmander for Fire.",
        },
        {
          id: 10,
          image: "/images/q-pokemon-10.webp",
          question: "In what year did Pokémon GO come out on phones?",
          answers: [
            { id: "a", text: "2014" },
            { id: "b", text: "2016" },
            { id: "c", text: "2018" },
            { id: "d", text: "2019" },
          ],
          correctAnswer: "b",
          explanation:
            "July 2016. That summer you could see whole crowds of players in parks, phone in hand, chasing Pokémon.",
        },
      ],
    },
    es: {
      title: "Quiz Pokémon: ¿conoces Kanto?",
      description:
        "Diez preguntas sobre Pokémon: la Pokédex, los primeros juegos, Ash, Eevee o Pokémon GO. ¡Así verás si eres un buen entrenador!",
      questions: [
        {
          id: 1,
          image: "/images/q-pokemon-01.webp",
          question: "¿Qué Pokémon tiene el número 1 de la Pokédex?",
          answers: [
            { id: "a", text: "Pikachu" },
            { id: "b", text: "Charmander" },
            { id: "c", text: "Bulbasaur" },
            { id: "d", text: "Mew" },
          ],
          correctAnswer: "c",
          explanation:
            "Bulbasaur, el Pokémon de tipo Planta y Veneno. Pikachu tiene el número 25.",
        },
        {
          id: 2,
          question: "¿De qué tipo es Pikachu?",
          answers: [
            { id: "a", text: "Eléctrico" },
            { id: "b", text: "Fuego" },
            { id: "c", text: "Normal" },
            { id: "d", text: "Hada" },
          ],
          correctAnswer: "a",
          explanation:
            "Eléctrico. Por eso sus ataques más conocidos son Impactrueno y Rayo.",
        },
        {
          id: 3,
          question: "¿En qué año salieron en Japón los primeros juegos de Pokémon?",
          answers: [
            { id: "a", text: "1994" },
            { id: "b", text: "1996" },
            { id: "c", text: "1998" },
            { id: "d", text: "1999" },
          ],
          correctAnswer: "b",
          explanation:
            "En 1996. Pokémon Rojo y Verde salieron en Japón el 27 de febrero de 1996, en Game Boy. En España, Rojo y Azul no llegaron hasta 1999.",
        },
        {
          id: 4,
          question: "¿Quién creó Pokémon?",
          answers: [
            { id: "a", text: "Shigeru Miyamoto" },
            { id: "b", text: "Hideo Kojima" },
            { id: "c", text: "Akira Toriyama" },
            { id: "d", text: "Satoshi Tajiri" },
          ],
          correctAnswer: "d",
          explanation:
            "Satoshi Tajiri, el fundador de Game Freak. La idea le vino de su afición de niño por cazar insectos.",
        },
        {
          id: 5,
          image: "/images/q-pokemon-05.webp",
          question: "¿Qué Pokémon legendario aparece en la portada de Pokémon Oro?",
          answers: [
            { id: "a", text: "Lugia" },
            { id: "b", text: "Ho-Oh" },
            { id: "c", text: "Mewtwo" },
            { id: "d", text: "Suicune" },
          ],
          correctAnswer: "b",
          explanation:
            "Ho-Oh, el gran pájaro de colores del arcoíris. Lugia sale en la portada de Plata, y Suicune en la de Cristal.",
        },
        {
          id: 6,
          question: "¿Cuántos Pokémon tiene la primera generación?",
          answers: [
            { id: "a", text: "100" },
            { id: "b", text: "151" },
            { id: "c", text: "200" },
            { id: "d", text: "251" },
          ],
          correctAnswer: "b",
          explanation:
            "151, de Bulbasaur a Mew. 251 es el total cuando se suma la segunda generación, la de Oro y Plata.",
        },
        {
          id: 7,
          image: "/images/q-pokemon-07.webp",
          question: "¿En qué evoluciona Eevee si se le da una Piedra Agua?",
          answers: [
            { id: "a", text: "Jolteon" },
            { id: "b", text: "Flareon" },
            { id: "c", text: "Vaporeon" },
            { id: "d", text: "Espeon" },
          ],
          correctAnswer: "c",
          explanation:
            "En Vaporeon. Con una Piedra Trueno Eevee se convierte en Jolteon, y con una Piedra Fuego en Flareon.",
        },
        {
          id: 8,
          question: "¿De qué pueblo es Ash, el protagonista del anime?",
          answers: [
            { id: "a", text: "Ciudad Verde" },
            { id: "b", text: "Pueblo Paleta" },
            { id: "c", text: "Ciudad Celeste" },
            { id: "d", text: "Ciudad Carmín" },
          ],
          correctAnswer: "b",
          explanation:
            "De Pueblo Paleta, el pueblecito donde está también el laboratorio del Profesor Oak. Allí es donde recibe a Pikachu.",
        },
        {
          id: 9,
          question: "¿Cuál es el Pokémon inicial de tipo Agua en Pokémon Rojo y Azul?",
          answers: [
            { id: "a", text: "Squirtle" },
            { id: "b", text: "Psyduck" },
            { id: "c", text: "Charmander" },
            { id: "d", text: "Magikarp" },
          ],
          correctAnswer: "a",
          explanation:
            "Squirtle. Los otros dos iniciales son Bulbasaur, de tipo Planta, y Charmander, de tipo Fuego.",
        },
        {
          id: 10,
          image: "/images/q-pokemon-10.webp",
          question: "¿En qué año salió Pokémon GO para móviles?",
          answers: [
            { id: "a", text: "2014" },
            { id: "b", text: "2016" },
            { id: "c", text: "2018" },
            { id: "d", text: "2019" },
          ],
          correctAnswer: "b",
          explanation:
            "En julio de 2016. Ese verano se veían grupos enteros de jugadores en los parques, con el móvil en la mano, cazando Pokémon.",
        },
      ],
    },
  },
};

export default [quizPokemon] as TranslatedQuiz[];
