import type { TranslatedQuiz } from "./types";

/**
 * Quiz Pokémon en QCM : vingt questions sur les premières générations, les jeux
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
  subcategory: "Pokémon",
  difficulty: "easy",
  coverImage: "/images/sub-pokemon.webp",
  gameType: "qcm",
  playCount: 8800,
  translations: {
    fr: {
      title: "Quiz Pokémon : connais-tu Kanto ?",
      description:
        "Vingt questions sur Pokémon : le Pokédex, les premiers jeux, Sacha, Évoli ou encore Pokémon GO. De quoi voir si tu es un vrai dresseur !",
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
        {
          id: 11,
          question: "Comment s'appelle le professeur qui donne son premier Pokémon au joueur dans Pokémon Rouge et Bleu ?",
          answers: [
            { id: "a", text: "Professeur Orme" },
            { id: "b", text: "Professeur Chen" },
            { id: "c", text: "Professeur Seko" },
            { id: "d", text: "Professeur Keteleeria" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Professeur Chen, qui a son laboratoire à Bourg Palette. Le Professeur Orme est celui de Johto, dans Or et Argent, et le Professeur Seko celui de Hoenn.",
        },
        {
          id: 12,
          question: "Quel objet faut-il utiliser pour faire évoluer Pikachu en Raichu ?",
          answers: [
            { id: "a", text: "Une Pierre Foudre" },
            { id: "b", text: "Une Pierre Lune" },
            { id: "c", text: "Une Pierre Soleil" },
            { id: "d", text: "Une Pierre Plante" },
          ],
          correctAnswer: "a",
          explanation:
            "Une Pierre Foudre. Pikachu n'évolue pas en montant de niveau, il lui faut cette pierre pour devenir Raichu.",
        },
        {
          id: 13,
          question: "Quel Pokémon accompagne Jessie et James dans la Team Rocket du dessin animé ?",
          answers: [
            { id: "a", text: "Abo" },
            { id: "b", text: "Smogo" },
            { id: "c", text: "Miaouss" },
            { id: "d", text: "Qulbutoké" },
          ],
          correctAnswer: "c",
          explanation:
            "Miaouss, le Pokémon chat qui parle comme un humain. Abo et Smogo sont bien à Jessie et James, mais ce sont leurs Pokémon de combat.",
        },
        {
          id: 14,
          question: "Quelle Poké Ball attrape un Pokémon sauvage à coup sûr ?",
          answers: [
            { id: "a", text: "La Super Ball" },
            { id: "b", text: "L'Hyper Ball" },
            { id: "c", text: "La Master Ball" },
            { id: "d", text: "La Safari Ball" },
          ],
          correctAnswer: "c",
          explanation:
            "La Master Ball, violette avec un M dessus. Elle ne rate jamais, mais on n'en trouve la plupart du temps qu'une seule par partie.",
        },
        {
          id: 15,
          question: "Comment s'appelle le grand rival de Sacha au début du dessin animé ?",
          answers: [
            { id: "a", text: "Régis" },
            { id: "b", text: "Pierre" },
            { id: "c", text: "Tracey" },
            { id: "d", text: "Paul" },
          ],
          correctAnswer: "a",
          explanation:
            "Régis, le petit-fils du Professeur Chen. Il part de Bourg Palette le même jour que Sacha et le nargue pendant toute la première saison.",
        },
        {
          id: 16,
          question: "Combien de badges faut-il réunir pour affronter la Ligue Pokémon dans Pokémon Rouge et Bleu ?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
            { id: "c", text: "8" },
            { id: "d", text: "10" },
          ],
          correctAnswer: "c",
          explanation:
            "8, un par arène de Kanto. C'est resté la règle dans presque tous les jeux principaux qui ont suivi.",
        },
        {
          id: 17,
          question: "De quels mots japonais vient le nom « Pokémon » ?",
          answers: [
            { id: "a", text: "Poketto Monsutā, « monstres de poche »" },
            { id: "b", text: "Pokkē Mondai, « problème de poche »" },
            { id: "c", text: "Pokē Monogatari, « histoire de poche »" },
            { id: "d", text: "Poketto Monban, « gardien de poche »" },
          ],
          correctAnswer: "a",
          explanation:
            "De Poketto Monsutā, c'est-à-dire « Pocket Monsters », les monstres de poche. Au Japon, les premiers jeux s'appelaient d'ailleurs Pocket Monsters Rouge et Vert.",
        },
        {
          id: 18,
          question: "Dans quelle région se déroulent Pokémon Écarlate et Violet ?",
          answers: [
            { id: "a", text: "Galar" },
            { id: "b", text: "Paldea" },
            { id: "c", text: "Alola" },
            { id: "d", text: "Kalos" },
          ],
          correctAnswer: "b",
          explanation:
            "Paldea, une région inspirée de l'Espagne et du Portugal. Les jeux sont sortis sur Switch en novembre 2022.",
        },
        {
          id: 19,
          question: "Qui soigne les Pokémon de Sacha dans les Centres Pokémon du dessin animé ?",
          answers: [
            { id: "a", text: "L'Agent Jenny" },
            { id: "b", text: "Ondine" },
            { id: "c", text: "L'Infirmière Joëlle" },
            { id: "d", text: "Flora" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Infirmière Joëlle, souvent aidée d'un Leveinard. Il y en a une dans chaque ville, et elles se ressemblent toutes comme des sœurs.",
        },
        {
          id: 20,
          question: "Quel Pokémon endort tout le monde en chantant, puis dessine sur le visage de ceux qui se sont endormis ?",
          answers: [
            { id: "a", text: "Rondoudou" },
            { id: "b", text: "Mélofée" },
            { id: "c", text: "Psykokwak" },
            { id: "d", text: "Ronflex" },
          ],
          correctAnswer: "a",
          explanation:
            "Rondoudou. Dans le dessin animé, il se vexe quand son public s'endort et lui gribouille la figure au feutre.",
        },
      ],
    },
    en: {
      title: "Pokémon quiz: do you know Kanto?",
      description:
        "Twenty questions about Pokémon: the Pokédex, the first games, Ash, Eevee and Pokémon GO. A good way to see if you're a real trainer!",
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
        {
          id: 11,
          question: "What's the name of the professor who gives you your first Pokémon in Pokémon Red and Blue?",
          answers: [
            { id: "a", text: "Professor Elm" },
            { id: "b", text: "Professor Oak" },
            { id: "c", text: "Professor Birch" },
            { id: "d", text: "Professor Sycamore" },
          ],
          correctAnswer: "b",
          explanation:
            "Professor Oak, whose lab is in Pallet Town. Professor Elm is the one from Johto in Gold and Silver, and Professor Birch the one from Hoenn.",
        },
        {
          id: 12,
          question: "Which item do you need to evolve Pikachu into Raichu?",
          answers: [
            { id: "a", text: "A Thunder Stone" },
            { id: "b", text: "A Moon Stone" },
            { id: "c", text: "A Sun Stone" },
            { id: "d", text: "A Leaf Stone" },
          ],
          correctAnswer: "a",
          explanation:
            "A Thunder Stone. Pikachu doesn't evolve by leveling up, so it needs that stone to become Raichu.",
        },
        {
          id: 13,
          question: "Which Pokémon travels with Jessie and James in Team Rocket in the anime?",
          answers: [
            { id: "a", text: "Ekans" },
            { id: "b", text: "Koffing" },
            { id: "c", text: "Meowth" },
            { id: "d", text: "Wobbuffet" },
          ],
          correctAnswer: "c",
          explanation:
            "Meowth, the cat Pokémon that talks like a human. Ekans and Koffing do belong to Jessie and James, but they're the ones they send out to battle.",
        },
        {
          id: 14,
          question: "Which Poké Ball always catches a wild Pokémon?",
          answers: [
            { id: "a", text: "The Great Ball" },
            { id: "b", text: "The Ultra Ball" },
            { id: "c", text: "The Master Ball" },
            { id: "d", text: "The Safari Ball" },
          ],
          correctAnswer: "c",
          explanation:
            "The Master Ball, the purple one with an M on it. It never fails, but most games only give you one.",
        },
        {
          id: 15,
          question: "Who is Ash's big rival at the start of the anime?",
          answers: [
            { id: "a", text: "Gary" },
            { id: "b", text: "Brock" },
            { id: "c", text: "Tracey" },
            { id: "d", text: "Paul" },
          ],
          correctAnswer: "a",
          explanation:
            "Gary, Professor Oak's grandson. He leaves Pallet Town on the same day as Ash and keeps teasing him all through the first season.",
        },
        {
          id: 16,
          question: "How many badges do you need to take on the Pokémon League in Pokémon Red and Blue?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
            { id: "c", text: "8" },
            { id: "d", text: "10" },
          ],
          correctAnswer: "c",
          explanation:
            "8, one for each Kanto gym. Almost every main game since then has kept the same rule.",
        },
        {
          id: 17,
          question: "Which Japanese words does the name \"Pokémon\" come from?",
          answers: [
            { id: "a", text: "Poketto Monsutā, \"pocket monsters\"" },
            { id: "b", text: "Pokkē Mondai, \"pocket problem\"" },
            { id: "c", text: "Pokē Monogatari, \"pocket story\"" },
            { id: "d", text: "Poketto Monban, \"pocket guard\"" },
          ],
          correctAnswer: "a",
          explanation:
            "Poketto Monsutā, which is just \"Pocket Monsters\". In Japan, the first games were actually called Pocket Monsters Red and Green.",
        },
        {
          id: 18,
          question: "Which region are Pokémon Scarlet and Violet set in?",
          answers: [
            { id: "a", text: "Galar" },
            { id: "b", text: "Paldea" },
            { id: "c", text: "Alola" },
            { id: "d", text: "Kalos" },
          ],
          correctAnswer: "b",
          explanation:
            "Paldea, a region based on Spain and Portugal. The games came out on Switch in November 2022.",
        },
        {
          id: 19,
          question: "Who heals Ash's Pokémon at the Pokémon Centers in the anime?",
          answers: [
            { id: "a", text: "Officer Jenny" },
            { id: "b", text: "Misty" },
            { id: "c", text: "Nurse Joy" },
            { id: "d", text: "May" },
          ],
          correctAnswer: "c",
          explanation:
            "Nurse Joy, often with a Chansey to help her. There's one in every town, and they all look like sisters.",
        },
        {
          id: 20,
          question: "Which Pokémon sings everyone to sleep, then draws on the faces of those who fell asleep?",
          answers: [
            { id: "a", text: "Jigglypuff" },
            { id: "b", text: "Clefairy" },
            { id: "c", text: "Psyduck" },
            { id: "d", text: "Snorlax" },
          ],
          correctAnswer: "a",
          explanation:
            "Jigglypuff. In the anime it gets upset when its audience dozes off and scribbles on their faces with a marker.",
        },
      ],
    },
    es: {
      title: "Quiz Pokémon: ¿conoces Kanto?",
      description:
        "Veinte preguntas sobre Pokémon: la Pokédex, los primeros juegos, Ash, Eevee o Pokémon GO. ¡Así verás si eres un buen entrenador!",
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
        {
          id: 11,
          question: "¿Cómo se llama el profesor que te da tu primer Pokémon en Pokémon Rojo y Azul?",
          answers: [
            { id: "a", text: "Profesor Elm" },
            { id: "b", text: "Profesor Oak" },
            { id: "c", text: "Profesor Abedul" },
            { id: "d", text: "Profesor Ciprés" },
          ],
          correctAnswer: "b",
          explanation:
            "El Profesor Oak, que tiene su laboratorio en Pueblo Paleta. El Profesor Elm es el de Johto, en Oro y Plata, y el Profesor Abedul el de Hoenn.",
        },
        {
          id: 12,
          question: "¿Qué objeto hace falta para que Pikachu evolucione en Raichu?",
          answers: [
            { id: "a", text: "Una Piedra Trueno" },
            { id: "b", text: "Una Piedra Lunar" },
            { id: "c", text: "Una Piedra Solar" },
            { id: "d", text: "Una Piedra Hoja" },
          ],
          correctAnswer: "a",
          explanation:
            "Una Piedra Trueno. Pikachu no evoluciona subiendo de nivel, necesita esa piedra para convertirse en Raichu.",
        },
        {
          id: 13,
          question: "¿Qué Pokémon acompaña a Jessie y James en el Team Rocket del anime?",
          answers: [
            { id: "a", text: "Ekans" },
            { id: "b", text: "Koffing" },
            { id: "c", text: "Meowth" },
            { id: "d", text: "Wobbuffet" },
          ],
          correctAnswer: "c",
          explanation:
            "Meowth, el Pokémon gato que habla como una persona. Ekans y Koffing también son de Jessie y James, pero son los que sacan para combatir.",
        },
        {
          id: 14,
          question: "¿Qué Poké Ball atrapa siempre a un Pokémon salvaje?",
          answers: [
            { id: "a", text: "La Super Ball" },
            { id: "b", text: "La Ultra Ball" },
            { id: "c", text: "La Master Ball" },
            { id: "d", text: "La Safari Ball" },
          ],
          correctAnswer: "c",
          explanation:
            "La Master Ball, la morada con una M. Nunca falla, pero en la mayoría de los juegos solo te dan una.",
        },
        {
          id: 15,
          question: "¿Quién es el gran rival de Ash al principio del anime?",
          answers: [
            { id: "a", text: "Gary" },
            { id: "b", text: "Brock" },
            { id: "c", text: "Tracey" },
            { id: "d", text: "Paul" },
          ],
          correctAnswer: "a",
          explanation:
            "Gary, el nieto del Profesor Oak. Sale de Pueblo Paleta el mismo día que Ash y se burla de él durante toda la primera temporada.",
        },
        {
          id: 16,
          question: "¿Cuántas medallas hacen falta para enfrentarse a la Liga Pokémon en Pokémon Rojo y Azul?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
            { id: "c", text: "8" },
            { id: "d", text: "10" },
          ],
          correctAnswer: "c",
          explanation:
            "8, una por cada gimnasio de Kanto. Casi todos los juegos principales que vinieron después mantienen la misma regla.",
        },
        {
          id: 17,
          question: "¿De qué palabras japonesas viene el nombre «Pokémon»?",
          answers: [
            { id: "a", text: "Poketto Monsutā, «monstruos de bolsillo»" },
            { id: "b", text: "Pokkē Mondai, «problema de bolsillo»" },
            { id: "c", text: "Pokē Monogatari, «historia de bolsillo»" },
            { id: "d", text: "Poketto Monban, «guardián de bolsillo»" },
          ],
          correctAnswer: "a",
          explanation:
            "De Poketto Monsutā, o sea «Pocket Monsters», monstruos de bolsillo. En Japón, los primeros juegos se llamaban de hecho Pocket Monsters Rojo y Verde.",
        },
        {
          id: 18,
          question: "¿En qué región transcurren Pokémon Escarlata y Púrpura?",
          answers: [
            { id: "a", text: "Galar" },
            { id: "b", text: "Paldea" },
            { id: "c", text: "Alola" },
            { id: "d", text: "Kalos" },
          ],
          correctAnswer: "b",
          explanation:
            "En Paldea, una región inspirada en España y Portugal. Los juegos salieron para Switch en noviembre de 2022.",
        },
        {
          id: 19,
          question: "¿Quién cura a los Pokémon de Ash en los Centros Pokémon del anime?",
          answers: [
            { id: "a", text: "La Oficial Jenny" },
            { id: "b", text: "Misty" },
            { id: "c", text: "La Enfermera Joy" },
            { id: "d", text: "Aura" },
          ],
          correctAnswer: "c",
          explanation:
            "La Enfermera Joy, muchas veces con un Chansey que la ayuda. Hay una en cada ciudad, y todas se parecen como hermanas.",
        },
        {
          id: 20,
          question: "¿Qué Pokémon duerme a todo el mundo cantando y luego pinta la cara de los que se han dormido?",
          answers: [
            { id: "a", text: "Jigglypuff" },
            { id: "b", text: "Clefairy" },
            { id: "c", text: "Psyduck" },
            { id: "d", text: "Snorlax" },
          ],
          correctAnswer: "a",
          explanation:
            "Jigglypuff. En el anime se enfada cuando el público se queda dormido y les pinta la cara con un rotulador.",
        },
      ],
    },
  },
};

export default [quizPokemon] as TranslatedQuiz[];
