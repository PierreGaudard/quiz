import type { CategoryDef, CategoryData, GameTypeInfo, Difficulty } from "./types";
import type { Locale } from "../i18n/config";
import { t } from "../i18n/ui";

export const gameTypes: GameTypeInfo[] = [
  { id: "qcm", name: "QCM", description: "", icon: "?", color: "bg-violet-500" },
  { id: "vrai-faux", name: "Vrai/Faux", description: "", icon: "VF", color: "bg-emerald-500" },
  { id: "chrono", name: "Chrono", description: "", icon: "CH", color: "bg-amber-500" },
  { id: "estimation", name: "Estimation", description: "", icon: "#", color: "bg-cyan-500" },
  { id: "duel", name: "Duel", description: "", icon: "VS", color: "bg-rose-500" },
  { id: "ordre", name: "Ordre", description: "", icon: "OR", color: "bg-indigo-500" },
];

export function getGameTypes(locale: Locale): GameTypeInfo[] {
  return gameTypes.map((gt) => ({
    ...gt,
    name: t(locale, `gameType.${gt.id}` as any),
  }));
}

export const difficultyLabels: Record<Locale, Record<Difficulty, string>> = {
  en: { easy: "Easy", medium: "Medium", hard: "Hard" },
  fr: { easy: "Facile", medium: "Moyen", hard: "Difficile" },
  es: { easy: "Fácil", medium: "Medio", hard: "Difícil" },
};

export const categoryDefs: CategoryDef[] = [
  {
    slug: "sport",
    slugs: { en: "sports", fr: "sport", es: "deportes" },
    icon: "SP",
    color: "bg-emerald-500",
    coverImage: "/images/cover-sport.webp",
    translations: {
      en: {
        name: "Sports",
        description: "Football, from the players to the big tournaments. Test your sports knowledge!",
        subcategories: ["Basketball", "Cycling", "Football", "Formula 1", "Olympics", "Rugby", "Tennis", "Horse Riding", "Boxing"],
        seoIntro: "For now the sports section is all football, with 16 questions that run from the players to the big tournaments. The other disciplines will be added later.",
        seoFooter: "The quiz sits at medium difficulty. If you watch the odd match you will get through it, and if you know the stats by heart it should go fast.",
      },
      fr: {
        name: "Sport",
        description: "Le football, des joueurs aux grandes compétitions. Teste tes connaissances !",
        subcategories: ["Basketball", "Cyclisme", "Football", "Formule 1", "Jeux olympiques", "Rugby", "Tennis", "Equitation", "Boxe"],
        seoIntro: "Pour l'instant, le sport ici c'est du football, avec 16 questions qui vont des joueurs aux grandes compétitions. Les autres disciplines viendront s'ajouter.",
        seoFooter: "Le quiz est en difficulté moyenne. Si tu regardes un match de temps en temps tu t'en sortiras, et si tu connais les stats par coeur ça devrait aller vite.",
      },
      es: {
        name: "Deportes",
        description: "Fútbol, de los jugadores a las grandes competiciones. Pon a prueba tus conocimientos!",
        subcategories: ["Baloncesto", "Ciclismo", "Futbol", "Formula 1", "Juegos Olimpicos", "Rugby", "Tenis", "Equitacion", "Boxeo"],
        seoIntro: "Por ahora, el deporte aquí es fútbol, con 16 preguntas que van desde los jugadores hasta las grandes competiciones. Las demás disciplinas llegarán después.",
        seoFooter: "El quiz está en dificultad media. Si ves algún partido de vez en cuando te irá bien, y si te sabes las estadísticas de memoria irá rápido.",
      },
    },
  },
  {
    slug: "geographie",
    slugs: { en: "geography", fr: "geographie", es: "geografia" },
    icon: "GE",
    color: "bg-teal-500",
    coverImage: "/images/cover-geographie.webp",
    translations: {
      en: {
        name: "Geography",
        description: "World flags, the obvious ones and the ones everybody mixes up.",
        subcategories: ["French Departments", "Europe", "Capitals", "Flags", "United States"],
        seoIntro: "Some flags you recognise instantly. Others you mix up with their neighbour every single time. The geography quiz has 17 questions and plays on exactly that.",
        seoFooter: "Every answer comes with an explanation, so the flag sticks next time. Capitals and countries will fill out the category later.",
      },
      fr: {
        name: "Geographie",
        description: "Les drapeaux du monde, les évidents et ceux que tout le monde confond.",
        subcategories: ["Departements francais", "Europe", "Capitales", "Drapeaux", "Etats-Unis"],
        seoIntro: "Il y a les drapeaux qu'on reconnaît du premier coup, et ceux qu'on confond toujours avec le voisin. Le quiz géographie compte 17 questions et joue là-dessus.",
        seoFooter: "Chaque réponse est expliquée, du coup on retient le drapeau la fois suivante. Les capitales et les pays compléteront la catégorie plus tard.",
      },
      es: {
        name: "Geografia",
        description: "Las banderas del mundo, las evidentes y las que todos confunden.",
        subcategories: ["Departamentos franceses", "Europa", "Capitales", "Banderas", "Estados Unidos"],
        seoIntro: "Hay banderas que reconoces al instante y otras que confundes siempre con la del país vecino. El quiz de geografía tiene 17 preguntas y juega con eso.",
        seoFooter: "Cada respuesta viene explicada, así que la próxima vez te acuerdas de la bandera. Las capitales y los países llegarán más adelante.",
      },
    },
  },
  {
    slug: "anime",
    slugs: { en: "anime", fr: "anime", es: "anime" },
    icon: "AN",
    color: "bg-pink-500",
    coverImage: "/images/cover-anime.webp",
    translations: {
      en: {
        name: "Anime",
        description: "Dragon Ball, from the Saiyan names to the techniques. Are you a true otaku?",
        subcategories: ["Demon Slayer", "Jujutsu Kaisen", "Death Note", "Kpop Demon Hunters", "Fullmetal Alchemist", "Tokyo Revengers", "My Hero Academia", "Attack on Titan", "Naruto", "One Piece", "Dragon Ball"],
        seoIntro: "The anime category starts with Dragon Ball, Akira Toriyama's series: 10 questions that go from the Saiyan names to the techniques, and a couple of them catch out even the fans.",
        seoFooter: "You need to have watched the series, but you do not need to know the volumes by heart. More series will follow.",
      },
      fr: {
        name: "Anime",
        description: "Dragon Ball, des noms saiyans aux techniques. Es-tu un vrai otaku ?",
        subcategories: ["Demon Slayer", "Jujutsu Kaisen", "Death Note", "Kpop Demon Hunters", "Fullmetal Alchemist", "Tokyo Revengers", "My Hero Academia", "L'Attaque des Titans", "Naruto", "One Piece", "Dragon Ball"],
        seoIntro: "L'anime démarre avec Dragon Ball, la série d'Akira Toriyama : 10 questions qui vont des noms saiyans aux techniques, et certaines piègent même les fans.",
        seoFooter: "Il faut avoir vu la série, mais pas connaître les tomes par coeur. D'autres séries suivront.",
      },
      es: {
        name: "Anime",
        description: "Dragon Ball, de los nombres saiyan a las técnicas. Eres un verdadero otaku?",
        subcategories: ["Demon Slayer", "Jujutsu Kaisen", "Death Note", "Kpop Demon Hunters", "Fullmetal Alchemist", "Tokyo Revengers", "My Hero Academia", "Ataque a los Titanes", "Naruto", "One Piece", "Dragon Ball"],
        seoIntro: "El anime empieza con Dragon Ball, la serie de Akira Toriyama: 10 preguntas que van de los nombres saiyan a las técnicas, y algunas pillan incluso a los fans.",
        seoFooter: "Hay que haber visto la serie, pero no hace falta saberse los tomos de memoria. Vendrán más series.",
      },
    },
  },
  {
    slug: "cinema",
    slugs: { en: "cinema", fr: "cinema", es: "cine" },
    icon: "CI",
    color: "bg-red-500",
    coverImage: "/images/cover-cinema.webp",
    translations: {
      en: {
        name: "Cinema",
        description: "Harry Potter, all eight films. Are you a true cinephile?",
        subcategories: ["Harry Potter", "Marvel", "Star Wars", "Lord of the Rings"],
        seoIntro: "Harry Potter opens the cinema category with 18 questions on the eight films. It is the biggest quiz on the site right now.",
        seoFooter: "If you have rewatched the saga a few times you will be fine. If not, the explanation under each answer covers for you.",
      },
      fr: {
        name: "Cinema",
        description: "Harry Potter, les huit films. Es-tu un vrai cinéphile ?",
        subcategories: ["Harry Potter", "Marvel", "Star Wars", "Seigneur des Anneaux"],
        seoIntro: "Harry Potter ouvre la catégorie cinéma avec 18 questions sur les huit films. C'est le plus gros quiz du site pour le moment.",
        seoFooter: "Si tu as revu la saga plusieurs fois, ça devrait bien se passer. Sinon, l'explication sous chaque réponse rattrape le coup.",
      },
      es: {
        name: "Cine",
        description: "Harry Potter, las ocho películas. Eres un verdadero cinéfilo?",
        subcategories: ["Harry Potter", "Marvel", "Star Wars", "El Senor de los Anillos"],
        seoIntro: "Harry Potter abre la categoría de cine con 18 preguntas sobre las ocho películas. Es el quiz más grande de la web ahora mismo.",
        seoFooter: "Si has vuelto a ver la saga varias veces, te irá bien. Si no, la explicación debajo de cada respuesta lo compensa.",
      },
    },
  },
  {
    slug: "jeux-video",
    slugs: { en: "video-games", fr: "jeux-video", es: "videojuegos" },
    icon: "JV",
    color: "bg-purple-500",
    coverImage: "/images/cover-jeux-video.webp",
    translations: {
      en: {
        name: "Video Games",
        description: "Minecraft, from the blocks to the rarer mobs. Are you the ultimate gamer?",
        subcategories: ["Minecraft", "GTA", "Fortnite", "Call of Duty", "Pokemon", "League of Legends", "World of Warcraft", "Counter Strike", "Brawl Stars", "FIFA", "Zelda", "Roblox", "Valorant"],
        seoIntro: "Video games kick off with Minecraft, 10 questions on the Mojang game, from the blocks to the rarer mobs.",
        seoFooter: "You do not need 500 hours in the game, but you do need to have played it. More titles are coming.",
      },
      fr: {
        name: "Jeux Video",
        description: "Minecraft, des blocs aux mobs les plus rares. Es-tu le gamer ultime ?",
        subcategories: ["Minecraft", "GTA", "Fortnite", "Call of Duty", "Pokemon", "League of Legends", "World of Warcraft", "Counter Strike", "Brawl Stars", "FIFA", "Zelda", "Roblox", "Valorant"],
        seoIntro: "Les jeux vidéo commencent par Minecraft, 10 questions sur le jeu de Mojang, des blocs aux mobs les plus rares.",
        seoFooter: "Pas besoin d'avoir 500 heures de jeu, mais il faut y avoir joué. Les autres titres arrivent.",
      },
      es: {
        name: "Videojuegos",
        description: "Minecraft, de los bloques a los mobs más raros. Eres el gamer definitivo?",
        subcategories: ["Minecraft", "GTA", "Fortnite", "Call of Duty", "Pokemon", "League of Legends", "World of Warcraft", "Counter Strike", "Brawl Stars", "FIFA", "Zelda", "Roblox", "Valorant"],
        seoIntro: "Los videojuegos empiezan por Minecraft, 10 preguntas sobre el juego de Mojang, desde los bloques hasta los mobs más raros.",
        seoFooter: "No hace falta tener 500 horas de juego, pero sí haber jugado. Los demás títulos llegarán.",
      },
    },
  },
];

export function getCategories(locale: Locale): CategoryData[] {
  return categoryDefs.map((def) => {
    const content = def.translations[locale] || def.translations.en;
    return {
      slug: def.slugs?.[locale] || def.slug,
      name: content.name,
      description: content.description,
      icon: def.icon,
      color: def.color,
      coverImage: def.coverImage,
      subcategories: content.subcategories,
      seoIntro: content.seoIntro,
      seoFooter: content.seoFooter,
    };
  });
}

export function getCategory(slug: string, locale: Locale): CategoryData | undefined {
  return getCategories(locale).find((c) => c.slug === slug);
}

export function findCategoryDef(slug: string): CategoryDef | undefined {
  return categoryDefs.find((def) => {
    if (def.slug === slug) return true;
    if (def.slugs) return Object.values(def.slugs).includes(slug);
    return false;
  });
}

export function getCategoryName(slug: string, locale: Locale): string {
  const def = categoryDefs.find((c) => c.slug === slug);
  if (!def) return slug;
  const content = def.translations[locale] || def.translations.en;
  return content.name;
}

function slugify(name: string): string {
  return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/**
 * Get the image slug for a subcategory.
 * Images are named with FR slugs, so we map any locale's subcategory name to its FR equivalent.
 */
export function getSubcategoryImageSlug(subName: string, locale: Locale): string {
  if (locale === "fr") return slugify(subName);
  for (const def of categoryDefs) {
    const localeContent = def.translations[locale] || def.translations.en;
    const idx = localeContent.subcategories.indexOf(subName);
    if (idx !== -1) {
      const frSub = def.translations.fr.subcategories[idx];
      return slugify(frSub);
    }
  }
  return slugify(subName);
}

export const categories = getCategories("fr");
