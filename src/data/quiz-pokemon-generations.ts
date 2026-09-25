import type { TranslatedQuiz } from "./types";

/**
 * Quiz Pokémon en mode ordre : vingt suites de quatre éléments à ranger, sur les
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
  subcategory: "Pokémon",
  difficulty: "hard",
  coverImage: "/images/cover-pokemon-generations.webp",
  gameType: "ordre",
  playCount: 5600,
  translations: {
    fr: {
      title: "Pokémon dans l'ordre : régions et générations",
      description:
        "Kanto, Johto, Hoenn... Vingt suites Pokémon à remettre dans l'ordre : régions, jeux, Pokédex et tailles. Lis bien la consigne à chaque fois !",
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
        {
          id: 11,
          question: "Remets ces remakes dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Pokémon Rubis Oméga et Saphir Alpha" },
            { id: "b", text: "Pokémon Rouge Feu et Vert Feuille" },
            { id: "c", text: "Pokémon Diamant Étincelant et Perle Scintillante" },
            { id: "d", text: "Pokémon Or HeartGold et Argent SoulSilver" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Rouge Feu et Vert Feuille en 2004 sur Game Boy Advance, Or HeartGold et Argent SoulSilver en 2009 sur DS, Rubis Oméga et Saphir Alpha en 2014 sur 3DS, puis Diamant Étincelant et Perle Scintillante en 2021 sur Switch.",
        },
        {
          id: 12,
          question: "Range ces Pokémon de départ Feu selon leur génération, de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Poussifeu" },
            { id: "b", text: "Gruikui" },
            { id: "c", text: "Héricendre" },
            { id: "d", text: "Ouisticram" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Héricendre vient de la 2e génération (Or et Argent), Poussifeu de la 3e, Ouisticram de la 4e et Gruikui de la 5e, avec Noir et Blanc.",
        },
        {
          id: 13,
          question: "Range ces Pokémon de départ Eau selon leur génération, de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Coiffeton" },
            { id: "b", text: "Otaquin" },
            { id: "c", text: "Grenousse" },
            { id: "d", text: "Larméléon" },
          ],
          correctOrder: ["c", "b", "d", "a"],
          correctAnswer: "c",
          explanation:
            "Grenousse vient de la 6e génération (X et Y), Otaquin de la 7e (Soleil et Lune), Larméléon de la 8e (Épée et Bouclier) et Coiffeton de la 9e (Écarlate et Violet).",
        },
        {
          id: 14,
          question: "Range ces Pokémon par numéro du Pokédex, du plus petit au plus grand.",
          answers: [
            { id: "a", text: "Magicarpe" },
            { id: "b", text: "Roucool" },
            { id: "c", text: "Ptéra" },
            { id: "d", text: "Abra" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Roucool est le n° 16, Abra le n° 63, Magicarpe le n° 129 et Ptéra le n° 142.",
        },
        {
          id: 15,
          question: "Range ces Pokémon du plus léger au plus lourd, d'après le Pokédex.",
          answers: [
            { id: "a", text: "Lokhlass" },
            { id: "b", text: "Groudon" },
            { id: "c", text: "Évoli" },
            { id: "d", text: "Ronflex" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Évoli pèse 6,5 kg, Lokhlass 220 kg, Ronflex 460 kg et Groudon 950 kg.",
        },
        {
          id: 16,
          question: "Range ces champions d'arène de Kanto dans l'ordre où on les affronte dans Pokémon Rouge et Bleu.",
          answers: [
            { id: "a", text: "Major Bob" },
            { id: "b", text: "Pierre" },
            { id: "c", text: "Érika" },
            { id: "d", text: "Ondine" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Pierre à Argenta, Ondine à Azuria, Major Bob à Carmin sur Mer, puis Érika à Céladopole.",
        },
        {
          id: 17,
          question: "Range ces Pokémon par numéro du Pokédex, du plus petit au plus grand.",
          answers: [
            { id: "a", text: "Sulfura" },
            { id: "b", text: "Minidraco" },
            { id: "c", text: "Artikodin" },
            { id: "d", text: "Électhor" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Artikodin est le n° 144, Électhor le n° 145, Sulfura le n° 146 et Minidraco le n° 147. Les trois oiseaux légendaires se suivent dans le Pokédex.",
        },
        {
          id: 18,
          question: "Remets ces « troisièmes versions » dans leur ordre de sortie au Japon.",
          answers: [
            { id: "a", text: "Pokémon Cristal" },
            { id: "b", text: "Pokémon Platine" },
            { id: "c", text: "Pokémon Jaune" },
            { id: "d", text: "Pokémon Émeraude" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Jaune en 1998, Cristal en 2000, Émeraude en 2004 et Platine en 2008. Chacune reprend la génération de la paire sortie juste avant, avec des ajouts.",
        },
        {
          id: 19,
          question: "Range ces Pokémon fabuleux selon leur génération, de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Jirachi" },
            { id: "b", text: "Darkrai" },
            { id: "c", text: "Mew" },
            { id: "d", text: "Celebi" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Mew vient de la 1re génération, Celebi de la 2e, Jirachi de la 3e et Darkrai de la 4e. Ce sont des Pokémon qu'on obtenait surtout lors d'événements.",
        },
        {
          id: 20,
          question: "Range ces pseudo-légendaires selon leur génération, de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Carchacrok" },
            { id: "b", text: "Dracolosse" },
            { id: "c", text: "Drattak" },
            { id: "d", text: "Tyranocif" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Dracolosse vient de la 1re génération, Tyranocif de la 2e, Drattak de la 3e et Carchacrok de la 4e. On les appelle pseudo-légendaires parce qu'ils ont des statistiques de base totales de 600, presque autant que certains légendaires.",
        },
      ],
    },
    en: {
      title: "Pokémon in order: regions and generations",
      description:
        "Kanto, Johto, Hoenn... Twenty Pokémon sequences to put in order: regions, games, Pokédex numbers and sizes. Read each question carefully!",
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
        {
          id: 11,
          question: "Put these remakes in release order.",
          answers: [
            { id: "a", text: "Pokémon Omega Ruby and Alpha Sapphire" },
            { id: "b", text: "Pokémon FireRed and LeafGreen" },
            { id: "c", text: "Pokémon Brilliant Diamond and Shining Pearl" },
            { id: "d", text: "Pokémon HeartGold and SoulSilver" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "FireRed and LeafGreen in 2004 on Game Boy Advance, HeartGold and SoulSilver in 2009 on DS, Omega Ruby and Alpha Sapphire in 2014 on 3DS, then Brilliant Diamond and Shining Pearl in 2021 on Switch.",
        },
        {
          id: 12,
          question: "Sort these Fire-type starters by generation, from oldest to newest.",
          answers: [
            { id: "a", text: "Torchic" },
            { id: "b", text: "Tepig" },
            { id: "c", text: "Cyndaquil" },
            { id: "d", text: "Chimchar" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Cyndaquil comes from the 2nd generation (Gold and Silver), Torchic from the 3rd, Chimchar from the 4th and Tepig from the 5th, with Black and White.",
        },
        {
          id: 13,
          question: "Sort these Water-type starters by generation, from oldest to newest.",
          answers: [
            { id: "a", text: "Quaxly" },
            { id: "b", text: "Popplio" },
            { id: "c", text: "Froakie" },
            { id: "d", text: "Sobble" },
          ],
          correctOrder: ["c", "b", "d", "a"],
          correctAnswer: "c",
          explanation:
            "Froakie comes from the 6th generation (X and Y), Popplio from the 7th (Sun and Moon), Sobble from the 8th (Sword and Shield) and Quaxly from the 9th (Scarlet and Violet).",
        },
        {
          id: 14,
          question: "Sort these Pokémon by Pokédex number, from lowest to highest.",
          answers: [
            { id: "a", text: "Magikarp" },
            { id: "b", text: "Pidgey" },
            { id: "c", text: "Aerodactyl" },
            { id: "d", text: "Abra" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Pidgey is no. 16, Abra no. 63, Magikarp no. 129 and Aerodactyl no. 142.",
        },
        {
          id: 15,
          question: "Sort these Pokémon from lightest to heaviest, according to the Pokédex.",
          answers: [
            { id: "a", text: "Lapras" },
            { id: "b", text: "Groudon" },
            { id: "c", text: "Eevee" },
            { id: "d", text: "Snorlax" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Eevee weighs 6.5 kg, Lapras 220 kg, Snorlax 460 kg and Groudon 950 kg.",
        },
        {
          id: 16,
          question: "Sort these Kanto gym leaders in the order you face them in Pokémon Red and Blue.",
          answers: [
            { id: "a", text: "Lt. Surge" },
            { id: "b", text: "Brock" },
            { id: "c", text: "Erika" },
            { id: "d", text: "Misty" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Brock in Pewter City, Misty in Cerulean City, Lt. Surge in Vermilion City, then Erika in Celadon City.",
        },
        {
          id: 17,
          question: "Sort these Pokémon by Pokédex number, from lowest to highest.",
          answers: [
            { id: "a", text: "Moltres" },
            { id: "b", text: "Dratini" },
            { id: "c", text: "Articuno" },
            { id: "d", text: "Zapdos" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Articuno is no. 144, Zapdos no. 145, Moltres no. 146 and Dratini no. 147. The three legendary birds come one after the other in the Pokédex.",
        },
        {
          id: 18,
          question: "Put these \"third versions\" in order of their Japanese release.",
          answers: [
            { id: "a", text: "Pokémon Crystal" },
            { id: "b", text: "Pokémon Platinum" },
            { id: "c", text: "Pokémon Yellow" },
            { id: "d", text: "Pokémon Emerald" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Yellow in 1998, Crystal in 2000, Emerald in 2004 and Platinum in 2008. Each one takes the generation of the pair released just before and adds extra content.",
        },
        {
          id: 19,
          question: "Sort these Mythical Pokémon by generation, from oldest to newest.",
          answers: [
            { id: "a", text: "Jirachi" },
            { id: "b", text: "Darkrai" },
            { id: "c", text: "Mew" },
            { id: "d", text: "Celebi" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Mew comes from the 1st generation, Celebi from the 2nd, Jirachi from the 3rd and Darkrai from the 4th. They were mostly handed out at events.",
        },
        {
          id: 20,
          question: "Sort these pseudo-legendary Pokémon by generation, from oldest to newest.",
          answers: [
            { id: "a", text: "Garchomp" },
            { id: "b", text: "Dragonite" },
            { id: "c", text: "Salamence" },
            { id: "d", text: "Tyranitar" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Dragonite comes from the 1st generation, Tyranitar from the 2nd, Salamence from the 3rd and Garchomp from the 4th. Fans call them pseudo-legendaries because their base stats add up to 600, close to some legendaries.",
        },
      ],
    },
    es: {
      title: "Pokémon en orden: regiones y generaciones",
      description:
        "Kanto, Johto, Hoenn... Veinte series Pokémon para ordenar: regiones, juegos, Pokédex y tamaños. ¡Lee bien cada pregunta!",
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
        {
          id: 11,
          question: "Ordena estos remakes por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Pokémon Rubí Omega y Zafiro Alfa" },
            { id: "b", text: "Pokémon Rojo Fuego y Verde Hoja" },
            { id: "c", text: "Pokémon Diamante Brillante y Perla Reluciente" },
            { id: "d", text: "Pokémon Oro HeartGold y Plata SoulSilver" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Rojo Fuego y Verde Hoja en 2004 en Game Boy Advance, Oro HeartGold y Plata SoulSilver en 2009 en DS, Rubí Omega y Zafiro Alfa en 2014 en 3DS, y por último Diamante Brillante y Perla Reluciente en 2021 en Switch.",
        },
        {
          id: 12,
          question: "Ordena estos iniciales de tipo Fuego por generación, de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Torchic" },
            { id: "b", text: "Tepig" },
            { id: "c", text: "Cyndaquil" },
            { id: "d", text: "Chimchar" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Cyndaquil es de la 2.ª generación (Oro y Plata), Torchic de la 3.ª, Chimchar de la 4.ª y Tepig de la 5.ª, la de Negro y Blanco.",
        },
        {
          id: 13,
          question: "Ordena estos iniciales de tipo Agua por generación, de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Quaxly" },
            { id: "b", text: "Popplio" },
            { id: "c", text: "Froakie" },
            { id: "d", text: "Sobble" },
          ],
          correctOrder: ["c", "b", "d", "a"],
          correctAnswer: "c",
          explanation:
            "Froakie es de la 6.ª generación (X e Y), Popplio de la 7.ª (Sol y Luna), Sobble de la 8.ª (Espada y Escudo) y Quaxly de la 9.ª (Escarlata y Púrpura).",
        },
        {
          id: 14,
          question: "Ordena estos Pokémon por número de la Pokédex, de menor a mayor.",
          answers: [
            { id: "a", text: "Magikarp" },
            { id: "b", text: "Pidgey" },
            { id: "c", text: "Aerodactyl" },
            { id: "d", text: "Abra" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Pidgey es el n.º 16, Abra el n.º 63, Magikarp el n.º 129 y Aerodactyl el n.º 142.",
        },
        {
          id: 15,
          question: "Ordena estos Pokémon del más ligero al más pesado, según la Pokédex.",
          answers: [
            { id: "a", text: "Lapras" },
            { id: "b", text: "Groudon" },
            { id: "c", text: "Eevee" },
            { id: "d", text: "Snorlax" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Eevee pesa 6,5 kg, Lapras 220 kg, Snorlax 460 kg y Groudon 950 kg.",
        },
        {
          id: 16,
          question: "Ordena estos líderes de gimnasio de Kanto según el orden en que te enfrentas a ellos en Pokémon Rojo y Azul.",
          answers: [
            { id: "a", text: "Teniente Surge" },
            { id: "b", text: "Brock" },
            { id: "c", text: "Erika" },
            { id: "d", text: "Misty" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Brock en Ciudad Plateada, Misty en Ciudad Celeste, el Teniente Surge en Ciudad Carmín y luego Erika en Ciudad Azulona.",
        },
        {
          id: 17,
          question: "Ordena estos Pokémon por número de la Pokédex, de menor a mayor.",
          answers: [
            { id: "a", text: "Moltres" },
            { id: "b", text: "Dratini" },
            { id: "c", text: "Articuno" },
            { id: "d", text: "Zapdos" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Articuno es el n.º 144, Zapdos el n.º 145, Moltres el n.º 146 y Dratini el n.º 147. Las tres aves legendarias van seguidas en la Pokédex.",
        },
        {
          id: 18,
          question: "Ordena estas «terceras versiones» por su fecha de lanzamiento en Japón.",
          answers: [
            { id: "a", text: "Pokémon Cristal" },
            { id: "b", text: "Pokémon Platino" },
            { id: "c", text: "Pokémon Amarillo" },
            { id: "d", text: "Pokémon Esmeralda" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Amarillo en 1998, Cristal en 2000, Esmeralda en 2004 y Platino en 2008. Cada una retoma la generación de la pareja anterior y le añade contenido.",
        },
        {
          id: 19,
          question: "Ordena estos Pokémon singulares por generación, de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Jirachi" },
            { id: "b", text: "Darkrai" },
            { id: "c", text: "Mew" },
            { id: "d", text: "Celebi" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Mew es de la 1.ª generación, Celebi de la 2.ª, Jirachi de la 3.ª y Darkrai de la 4.ª. Casi siempre se conseguían en eventos.",
        },
        {
          id: 20,
          question: "Ordena estos pseudolegendarios por generación, de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Garchomp" },
            { id: "b", text: "Dragonite" },
            { id: "c", text: "Salamence" },
            { id: "d", text: "Tyranitar" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Dragonite es de la 1.ª generación, Tyranitar de la 2.ª, Salamence de la 3.ª y Garchomp de la 4.ª. Se les llama pseudolegendarios porque sus estadísticas base suman 600, casi como algunos legendarios.",
        },
      ],
    },
  },
};

export default [quizPokemonGenerations] as TranslatedQuiz[];
