export interface KeywordMapping {
  keywords: string[];
  categorySlug: string;
  subcategory?: string;
}

export const keywordMappings: KeywordMapping[] = [
  // Sport
  { keywords: ["messi", "ronaldo", "neymar", "mbappe", "ballon d'or", "ligue des champions", "champions league", "premier league", "la liga", "coupe du monde", "world cup"], categorySlug: "sport", subcategory: "Football" },
  { keywords: ["lebron", "jordan", "nba", "dunk", "lakers", "celtics"], categorySlug: "sport", subcategory: "Basketball" },
  { keywords: ["nadal", "djokovic", "federer", "roland garros", "wimbledon", "grand chelem"], categorySlug: "sport", subcategory: "Tennis" },
  { keywords: ["verstappen", "hamilton", "ferrari", "mercedes", "red bull", "grand prix", "f1"], categorySlug: "sport", subcategory: "Formule 1" },
  { keywords: ["tour de france", "giro", "vuelta", "pogacar", "velo"], categorySlug: "sport", subcategory: "Cyclisme" },
  { keywords: ["xv de france", "six nations", "all blacks", "coupe du monde rugby", "essai", "melee"], categorySlug: "sport", subcategory: "Rugby" },
  { keywords: ["usain bolt", "100m", "marathon", "athletisme", "medaille", "paris 2024"], categorySlug: "sport", subcategory: "Jeux olympiques" },
  { keywords: ["tyson", "ali", "mayweather", "ufc", "mma", "knockout", "ko"], categorySlug: "sport", subcategory: "Boxe" },
  { keywords: ["equitation", "cheval", "galop", "dressage", "saut d'obstacles"], categorySlug: "sport", subcategory: "Equitation" },

  // Cinema
  { keywords: ["voldemort", "dumbledore", "poudlard", "hogwarts", "gryffondor", "gryffindor", "quidditch", "hermione", "ron", "rogue", "snape", "sorcier", "baguette magique", "patronus"], categorySlug: "cinema", subcategory: "Harry Potter" },
  { keywords: ["avengers", "iron man", "spider-man", "spiderman", "thor", "hulk", "thanos", "captain america", "mcu", "marvel"], categorySlug: "cinema", subcategory: "Marvel" },
  { keywords: ["darth vader", "luke skywalker", "yoda", "jedi", "sith", "lightsaber", "sabre laser", "palpatine", "mandalorian"], categorySlug: "cinema", subcategory: "Star Wars" },
  { keywords: ["frodon", "frodo", "gandalf", "aragorn", "sauron", "mordor", "hobbit", "anneau", "ring", "legolas", "gollum"], categorySlug: "cinema", subcategory: "Seigneur des Anneaux" },

  // Anime
  { keywords: ["goku", "vegeta", "saiyan", "kamehameha", "freezer", "frieza", "cell", "buu", "bulma", "piccolo", "gohan", "trunks", "boule de cristal"], categorySlug: "anime", subcategory: "Dragon Ball" },
  { keywords: ["naruto", "sasuke", "kakashi", "sakura", "hokage", "sharingan", "jutsu", "konoha", "akatsuki", "itachi", "hinata", "boruto"], categorySlug: "anime", subcategory: "Naruto" },
  { keywords: ["luffy", "zoro", "nami", "sanji", "one piece", "pirate", "fruit du demon", "grand line", "gear", "shanks"], categorySlug: "anime", subcategory: "One Piece" },
  { keywords: ["tanjiro", "nezuko", "zenitsu", "inosuke", "hashira", "muzan", "demon slayer", "pourfendeur"], categorySlug: "anime", subcategory: "Demon Slayer" },
  { keywords: ["gojo", "itadori", "yuji", "sukuna", "megumi", "nobara", "jujutsu", "malediction"], categorySlug: "anime", subcategory: "Jujutsu Kaisen" },
  { keywords: ["light", "ryuk", "kira", "shinigami", "death note", "l lawliet", "misa"], categorySlug: "anime", subcategory: "Death Note" },
  { keywords: ["eren", "mikasa", "levi", "titan", "mur", "wall maria", "bataillon"], categorySlug: "anime", subcategory: "L'Attaque des Titans" },
  { keywords: ["deku", "all might", "bakugo", "todoroki", "alter", "quirk", "hero academia", "ua"], categorySlug: "anime", subcategory: "My Hero Academia" },
  { keywords: ["edward", "alphonse", "elric", "transmutation", "alchimiste", "homonculus", "equivalent"], categorySlug: "anime", subcategory: "Fullmetal Alchemist" },
  { keywords: ["takemichi", "mikey", "draken", "toman", "tokyo manji"], categorySlug: "anime", subcategory: "Tokyo Revengers" },

  // Jeux Video
  { keywords: ["pikachu", "dracaufeu", "charizard", "ash", "sacha", "pokeball", "pokedex", "mewtwo", "evoli", "eevee", "pokemon"], categorySlug: "jeux-video", subcategory: "Pokemon" },
  { keywords: ["steve", "creeper", "enderman", "ender dragon", "nether", "redstone", "crafting", "pickaxe", "minecraft", "notch"], categorySlug: "jeux-video", subcategory: "Minecraft" },
  { keywords: ["fortnite", "battle royale", "skin", "tilted towers", "victory royale", "epic games"], categorySlug: "jeux-video", subcategory: "Fortnite" },
  { keywords: ["trevor", "michael", "franklin", "los santos", "san andreas", "gta", "rockstar"], categorySlug: "jeux-video", subcategory: "GTA" },
  { keywords: ["warzone", "zombies", "prestige", "call of duty", "cod", "modern warfare", "black ops"], categorySlug: "jeux-video", subcategory: "Call of Duty" },
  { keywords: ["yasuo", "ahri", "lux", "jinx", "arcane", "summoner", "rift", "lol", "league"], categorySlug: "jeux-video", subcategory: "League of Legends" },
  { keywords: ["horde", "alliance", "azeroth", "wow", "warcraft", "sylvanas", "arthas", "lich king"], categorySlug: "jeux-video", subcategory: "World of Warcraft" },
  { keywords: ["ct", "terrorist", "dust2", "awp", "csgo", "cs2", "counter strike", "defuse"], categorySlug: "jeux-video", subcategory: "Counter Strike" },
  { keywords: ["brawl stars", "brawler", "supercell", "spike", "leon", "crow", "el primo"], categorySlug: "jeux-video", subcategory: "Brawl Stars" },
  { keywords: ["fifa", "fut", "ultimate team", "ea sports", "fc 24", "ea fc"], categorySlug: "jeux-video", subcategory: "FIFA" },
  { keywords: ["link", "zelda", "hyrule", "ganon", "triforce", "breath of the wild", "tears of the kingdom"], categorySlug: "jeux-video", subcategory: "Zelda" },
  { keywords: ["roblox", "robux", "obby", "adopt me", "blox"], categorySlug: "jeux-video", subcategory: "Roblox" },
  { keywords: ["valorant", "jett", "reyna", "sage", "omen", "viper", "riot", "agent"], categorySlug: "jeux-video", subcategory: "Valorant" },

  // Geographie
  { keywords: ["drapeau", "flag", "bandera", "couleurs", "etoile", "croix"], categorySlug: "geographie", subcategory: "Drapeaux" },
  { keywords: ["capitale", "capital", "ville", "city", "paris", "washington", "tokyo", "londres", "london"], categorySlug: "geographie", subcategory: "Capitales" },
  { keywords: ["departement", "prefecture", "region", "france", "ile de france", "bretagne", "alsace"], categorySlug: "geographie", subcategory: "Departements francais" },
  { keywords: ["europe", "union europeenne", "ue", "eu", "bruxelles", "schengen"], categorySlug: "geographie", subcategory: "Europe" },
  { keywords: ["etats-unis", "usa", "amerique", "america", "new york", "california", "texas", "washington"], categorySlug: "geographie", subcategory: "Etats-Unis" },
];
