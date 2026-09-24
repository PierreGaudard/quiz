import type { TranslatedQuiz } from "./types";

/**
 * Quiz Pokémon en mode ordre : dix suites de quatre éléments à ranger, sur les
 * régions, les générations de jeux, le Pokédex et la taille des Pokémon.
 *
 * Le moteur mélange les propositions (OrdrePlayer), seul `correctOrder` compte.
 * La sous-catégorie s'écrit « Pokemon » sans accent, les textes écrivent
 * Pokémon. Les dates de sortie sont celles du Japon. Le quiz d'origine
 * (quiz-pokemon.ts) cite déjà les numéros de Bulbizarre et de Pikachu : ici on
 * prend d'autres Pokémon.
 */
export const quizPokemonGenerations: TranslatedQuiz = {
  slug: "quiz-pokemon-generations",
  slugs: { en: "pokemon-generations-quiz", fr: "quiz-pokemon-generations", es: "quiz-pokemon-generaciones" },
  categorySlug: "jeux-video",
  subcategory: "Pokemon",
  difficulty: "hard",
  coverImage: "/images/cover-pokemon-generations.webp",
  gameType: "ordre",
  playCount: 5600,
  translations: {
    fr: {
      title: "Pokémon dans l'ordre : régions et générations",
      description:
        "Kanto, Johto, Hoenn... Dix suites Pokémon à remettre dans l'ordre : régions, jeux, Pokédex et tailles. Lis bien la consigne à chaque fois !",
      questions: [
        {
          id: 1,
          image: "/images/q-pokemon-generations-01.webp",
          question: "Range ces régions dans l'ordre où elles sont apparues dans les jeux.",
          answers: [
            { id: "a", text: "Kanto" },
            { id: "b", text: "Johto" },
            { id: "c", text: "Hoenn" },
            { id: "d", text: "Sinnoh" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kanto avec la 1re génération, Johto avec la 2e, Hoenn avec la 3e, puis Sinnoh avec la 4e. Une nouvelle région arrive à chaque génération.",
        },
        {
          id: 2,
          question: "Range ces régions dans l'ordre où elles sont apparues dans les jeux.",
          answers: [
            { id: "a", text: "Kalos" },
            { id: "b", text: "Galar" },
            { id: "c", text: "Unys" },
            { id: "d", text: "Alola" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Unys en 2010 (Noir et Blanc), Kalos en 2013 (X et Y), Alola en 2016 (Soleil et Lune), puis Galar en 2019 (Épée et Bouclier).",
        },
        {
          id: 3,
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Pokémon Rubis et Saphir" },
            { id: "b", text: "Pokémon Rouge et Bleu" },
            { id: "c", text: "Pokémon Diamant et Perle" },
            { id: "d", text: "Pokémon Or et Argent" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Rouge et Vert d'abord au Japon en 1996 (Rouge et Bleu chez nous), Or et Argent en 1999, Rubis et Saphir en 2002, puis Diamant et Perle en 2006.",
        },
        {
          id: 4,
          image: "/images/q-pokemon-generations-04.webp",
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Pokémon X et Y" },
            { id: "b", text: "Pokémon Épée et Bouclier" },
            { id: "c", text: "Pokémon Noir et Blanc" },
            { id: "d", text: "Pokémon Soleil et Lune" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Noir et Blanc en 2010, X et Y en 2013, Soleil et Lune en 2016, puis Épée et Bouclier en 2019, le premier jeu principal sur Switch.",
        },
        {
          id: 5,
          question: "Range ces Pokémon par numéro du Pokédex, du plus petit au plus grand.",
          answers: [
            { id: "a", text: "Miaouss" },
            { id: "b", text: "Rondoudou" },
            { id: "c", text: "Ronflex" },
            { id: "d", text: "Psykokwak" },
          ],
          correctOrder: ["b", "a", "d", "c"],
          correctAnswer: "b",
          explanation:
            "Rondoudou est le n° 39, Miaouss le n° 52, Psykokwak le n° 54, et Ronflex le n° 143.",
        },
        {
          id: 6,
          question: "Range ces Pokémon de départ Plante selon leur génération, de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Tortipouss" },
            { id: "b", text: "Arcko" },
            { id: "c", text: "Vipélierre" },
            { id: "d", text: "Germignon" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Germignon vient de la 2e génération, Arcko de la 3e, Tortipouss de la 4e et Vipélierre de la 5e.",
        },
        {
          id: 7,
          image: "/images/q-pokemon-generations-07.webp",
          question: "Range ces Pokémon du plus petit au plus grand, d'après le Pokédex.",
          answers: [
            { id: "a", text: "Salamèche" },
            { id: "b", text: "Onix" },
            { id: "c", text: "Pikachu" },
            { id: "d", text: "Dracaufeu" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Pikachu mesure 0,4 m, Salamèche 0,6 m, Dracaufeu 1,7 m, et Onix pas moins de 8,8 m.",
        },
        {
          id: 8,
          image: "/images/q-pokemon-generations-08.webp",
          question: "Range ces consoles dans l'ordre où elles ont reçu une nouvelle génération de Pokémon.",
          answers: [
            { id: "a", text: "Nintendo DS" },
            { id: "b", text: "Game Boy" },
            { id: "c", text: "Nintendo 3DS" },
            { id: "d", text: "Game Boy Advance" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Le Game Boy avec Rouge et Bleu, la Game Boy Advance avec Rubis et Saphir, la Nintendo DS avec Diamant et Perle, puis la 3DS avec X et Y.",
        },
        {
          id: 9,
          question: "Remets ces jeux dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Pokémon : Let's Go, Pikachu" },
            { id: "b", text: "Légendes Pokémon : Z-A" },
            { id: "c", text: "Pokémon GO" },
            { id: "d", text: "Légendes Pokémon : Arceus" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Pokémon GO en 2016 sur smartphone, Let's Go, Pikachu en 2018, Légendes Pokémon : Arceus en janvier 2022, puis Légendes Pokémon : Z-A en octobre 2025.",
        },
        {
          id: 10,
          image: "/images/q-pokemon-generations-10.webp",
          question: "Range ces Pokémon légendaires selon leur génération, de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Rayquaza" },
            { id: "b", text: "Mewtwo" },
            { id: "c", text: "Dialga" },
            { id: "d", text: "Lugia" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Mewtwo vient de la 1re génération, Lugia de la 2e, Rayquaza de la 3e et Dialga de la 4e.",
        },
      ],
    },
    en: {
      title: "Pokémon in order: regions and generations",
      description:
        "Kanto, Johto, Hoenn... Ten Pokémon sequences to put in order: regions, games, Pokédex numbers and sizes. Read each question carefully!",
      questions: [
        {
          id: 1,
          image: "/images/q-pokemon-generations-01.webp",
          question: "Put these regions in the order they first appeared in the games.",
          answers: [
            { id: "a", text: "Kanto" },
            { id: "b", text: "Johto" },
            { id: "c", text: "Hoenn" },
            { id: "d", text: "Sinnoh" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kanto in Generation 1, Johto in Gen 2, Hoenn in Gen 3, then Sinnoh in Gen 4. Each new generation brings a new region.",
        },
        {
          id: 2,
          question: "Put these regions in the order they first appeared in the games.",
          answers: [
            { id: "a", text: "Kalos" },
            { id: "b", text: "Galar" },
            { id: "c", text: "Unova" },
            { id: "d", text: "Alola" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Unova in 2010 (Black and White), Kalos in 2013 (X and Y), Alola in 2016 (Sun and Moon), then Galar in 2019 (Sword and Shield).",
        },
        {
          id: 3,
          question: "Put these games in release order.",
          answers: [
            { id: "a", text: "Pokémon Ruby and Sapphire" },
            { id: "b", text: "Pokémon Red and Blue" },
            { id: "c", text: "Pokémon Diamond and Pearl" },
            { id: "d", text: "Pokémon Gold and Silver" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Red and Green came first in Japan in 1996 (Red and Blue in the West), then Gold and Silver in 1999, Ruby and Sapphire in 2002, and Diamond and Pearl in 2006.",
        },
        {
          id: 4,
          image: "/images/q-pokemon-generations-04.webp",
          question: "Put these games in release order.",
          answers: [
            { id: "a", text: "Pokémon X and Y" },
            { id: "b", text: "Pokémon Sword and Shield" },
            { id: "c", text: "Pokémon Black and White" },
            { id: "d", text: "Pokémon Sun and Moon" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Black and White in 2010, X and Y in 2013, Sun and Moon in 2016, then Sword and Shield in 2019, the first main game on Switch.",
        },
        {
          id: 5,
          question: "Put these Pokémon in Pokédex order, from lowest number to highest.",
          answers: [
            { id: "a", text: "Meowth" },
            { id: "b", text: "Jigglypuff" },
            { id: "c", text: "Snorlax" },
            { id: "d", text: "Psyduck" },
          ],
          correctOrder: ["b", "a", "d", "c"],
          correctAnswer: "b",
          explanation:
            "Jigglypuff is No. 39, Meowth No. 52, Psyduck No. 54, and Snorlax No. 143.",
        },
        {
          id: 6,
          question: "Put these Grass starters in order of generation, oldest first.",
          answers: [
            { id: "a", text: "Turtwig" },
            { id: "b", text: "Treecko" },
            { id: "c", text: "Snivy" },
            { id: "d", text: "Chikorita" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Chikorita is from Generation 2, Treecko from Gen 3, Turtwig from Gen 4 and Snivy from Gen 5.",
        },
        {
          id: 7,
          image: "/images/q-pokemon-generations-07.webp",
          question: "Put these Pokémon from shortest to tallest, according to the Pokédex.",
          answers: [
            { id: "a", text: "Charmander" },
            { id: "b", text: "Onix" },
            { id: "c", text: "Pikachu" },
            { id: "d", text: "Charizard" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Pikachu is 0.4 m (1'04\"), Charmander 0.6 m (2'00\"), Charizard 1.7 m (5'07\"), and Onix a whopping 8.8 m (28'10\").",
        },
        {
          id: 8,
          image: "/images/q-pokemon-generations-08.webp",
          question: "Put these consoles in the order they got a new Pokémon generation.",
          answers: [
            { id: "a", text: "Nintendo DS" },
            { id: "b", text: "Game Boy" },
            { id: "c", text: "Nintendo 3DS" },
            { id: "d", text: "Game Boy Advance" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "The Game Boy with Red and Blue, the Game Boy Advance with Ruby and Sapphire, the Nintendo DS with Diamond and Pearl, then the 3DS with X and Y.",
        },
        {
          id: 9,
          question: "Put these games in release order.",
          answers: [
            { id: "a", text: "Pokémon: Let's Go, Pikachu!" },
            { id: "b", text: "Pokémon Legends: Z-A" },
            { id: "c", text: "Pokémon GO" },
            { id: "d", text: "Pokémon Legends: Arceus" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Pokémon GO in 2016 on phones, Let's Go, Pikachu! in 2018, Pokémon Legends: Arceus in January 2022, then Pokémon Legends: Z-A in October 2025.",
        },
        {
          id: 10,
          image: "/images/q-pokemon-generations-10.webp",
          question: "Put these legendary Pokémon in order of generation, oldest first.",
          answers: [
            { id: "a", text: "Rayquaza" },
            { id: "b", text: "Mewtwo" },
            { id: "c", text: "Dialga" },
            { id: "d", text: "Lugia" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Mewtwo is from Generation 1, Lugia from Gen 2, Rayquaza from Gen 3 and Dialga from Gen 4.",
        },
      ],
    },
    es: {
      title: "Pokémon en orden: regiones y generaciones",
      description:
        "Kanto, Johto, Hoenn... Diez series Pokémon para ordenar: regiones, juegos, Pokédex y tamaños. ¡Lee bien cada pregunta!",
      questions: [
        {
          id: 1,
          image: "/images/q-pokemon-generations-01.webp",
          question: "Ordena estas regiones según su aparición en los juegos.",
          answers: [
            { id: "a", text: "Kanto" },
            { id: "b", text: "Johto" },
            { id: "c", text: "Hoenn" },
            { id: "d", text: "Sinnoh" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kanto con la 1.ª generación, Johto con la 2.ª, Hoenn con la 3.ª y luego Sinnoh con la 4.ª. Cada generación trae una región nueva.",
        },
        {
          id: 2,
          question: "Ordena estas regiones según su aparición en los juegos.",
          answers: [
            { id: "a", text: "Kalos" },
            { id: "b", text: "Galar" },
            { id: "c", text: "Teselia" },
            { id: "d", text: "Alola" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Teselia en 2010 (Negro y Blanco), Kalos en 2013 (X e Y), Alola en 2016 (Sol y Luna), y luego Galar en 2019 (Espada y Escudo).",
        },
        {
          id: 3,
          question: "Ordena estos juegos por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Pokémon Rubí y Zafiro" },
            { id: "b", text: "Pokémon Rojo y Azul" },
            { id: "c", text: "Pokémon Diamante y Perla" },
            { id: "d", text: "Pokémon Oro y Plata" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Primero Rojo y Verde en Japón en 1996 (Rojo y Azul fuera de Japón), luego Oro y Plata en 1999, Rubí y Zafiro en 2002 y Diamante y Perla en 2006.",
        },
        {
          id: 4,
          image: "/images/q-pokemon-generations-04.webp",
          question: "Ordena estos juegos por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Pokémon X e Y" },
            { id: "b", text: "Pokémon Espada y Escudo" },
            { id: "c", text: "Pokémon Negro y Blanco" },
            { id: "d", text: "Pokémon Sol y Luna" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Negro y Blanco en 2010, X e Y en 2013, Sol y Luna en 2016, y luego Espada y Escudo en 2019, el primer juego principal en Switch.",
        },
        {
          id: 5,
          question: "Ordena estos Pokémon por número de la Pokédex, de menor a mayor.",
          answers: [
            { id: "a", text: "Meowth" },
            { id: "b", text: "Jigglypuff" },
            { id: "c", text: "Snorlax" },
            { id: "d", text: "Psyduck" },
          ],
          correctOrder: ["b", "a", "d", "c"],
          correctAnswer: "b",
          explanation:
            "Jigglypuff es el n.º 39, Meowth el n.º 52, Psyduck el n.º 54 y Snorlax el n.º 143.",
        },
        {
          id: 6,
          question: "Ordena estos Pokémon iniciales de tipo Planta por generación, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Turtwig" },
            { id: "b", text: "Treecko" },
            { id: "c", text: "Snivy" },
            { id: "d", text: "Chikorita" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Chikorita es de la 2.ª generación, Treecko de la 3.ª, Turtwig de la 4.ª y Snivy de la 5.ª.",
        },
        {
          id: 7,
          image: "/images/q-pokemon-generations-07.webp",
          question: "Ordena estos Pokémon del más bajo al más alto, según la Pokédex.",
          answers: [
            { id: "a", text: "Charmander" },
            { id: "b", text: "Onix" },
            { id: "c", text: "Pikachu" },
            { id: "d", text: "Charizard" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Pikachu mide 0,4 m, Charmander 0,6 m, Charizard 1,7 m y Onix nada menos que 8,8 m.",
        },
        {
          id: 8,
          image: "/images/q-pokemon-generations-08.webp",
          question: "Ordena estas consolas según recibieron una nueva generación de Pokémon.",
          answers: [
            { id: "a", text: "Nintendo DS" },
            { id: "b", text: "Game Boy" },
            { id: "c", text: "Nintendo 3DS" },
            { id: "d", text: "Game Boy Advance" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "La Game Boy con Rojo y Azul, la Game Boy Advance con Rubí y Zafiro, la Nintendo DS con Diamante y Perla, y luego la 3DS con X e Y.",
        },
        {
          id: 9,
          question: "Ordena estos juegos por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Pokémon: Let's Go, Pikachu!" },
            { id: "b", text: "Leyendas Pokémon: Z-A" },
            { id: "c", text: "Pokémon GO" },
            { id: "d", text: "Leyendas Pokémon: Arceus" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Pokémon GO en 2016 en móviles, Let's Go, Pikachu! en 2018, Leyendas Pokémon: Arceus en enero de 2022, y luego Leyendas Pokémon: Z-A en octubre de 2025.",
        },
        {
          id: 10,
          image: "/images/q-pokemon-generations-10.webp",
          question: "Ordena estos Pokémon legendarios por generación, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Rayquaza" },
            { id: "b", text: "Mewtwo" },
            { id: "c", text: "Dialga" },
            { id: "d", text: "Lugia" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Mewtwo es de la 1.ª generación, Lugia de la 2.ª, Rayquaza de la 3.ª y Dialga de la 4.ª.",
        },
      ],
    },
  },
};

export default [quizPokemonGenerations] as TranslatedQuiz[];
