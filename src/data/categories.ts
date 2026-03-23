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
        description: "Football, basketball, Formula 1, tennis... Test your sports knowledge!",
        subcategories: ["Basketball", "Cycling", "Football", "Formula 1", "Olympics", "Rugby", "Tennis", "Horse Riding", "Boxing"],
        seoIntro: "Want to test your sports knowledge? Whether you're a football fan, tennis enthusiast, or a Formula 1 expert, our sports quizzes cover every discipline. From beginner to expert, pick your level and challenge your friends.",
        seoFooter: "Our sports quizzes are designed for all levels. Questions are written by passionate fans and updated after every major competition.",
      },
      fr: {
        name: "Sport",
        description: "Football, basketball, Formule 1, tennis... Teste tes connaissances sportives !",
        subcategories: ["Basketball", "Cyclisme", "Football", "Formule 1", "Jeux olympiques", "Rugby", "Tennis", "Equitation", "Boxe"],
        seoIntro: "Envie de tester tes connaissances en sport ? Que tu sois fan de football, passionné de tennis ou incollable sur la Formule 1, nos quiz sportifs couvrent toutes les disciplines.",
        seoFooter: "Nos quiz sport sont pensés pour tous les profils : que tu regardes un match de temps en temps ou que tu connaisses les stats de chaque joueur par coeur, tu trouveras des quiz adaptés à ton niveau.",
      },
      es: {
        name: "Deportes",
        description: "Futbol, baloncesto, Formula 1, tenis... Pon a prueba tus conocimientos deportivos!",
        subcategories: ["Baloncesto", "Ciclismo", "Futbol", "Formula 1", "Juegos Olimpicos", "Rugby", "Tenis", "Equitacion", "Boxeo"],
        seoIntro: "Quieres poner a prueba tus conocimientos deportivos? Ya seas fan del futbol, apasionado del tenis o experto en Formula 1, nuestros quizzes deportivos cubren todas las disciplinas.",
        seoFooter: "Nuestros quizzes deportivos están diseñados para todos los niveles. Las preguntas están escritas por apasionados y se actualizan después de cada gran competición.",
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
        description: "Capitals, flags, departments... Does the world hold no secrets for you?",
        subcategories: ["French Departments", "Europe", "Capitals", "Flags", "United States"],
        seoIntro: "Can you place every country on a map? Do you know all the world capitals? Our geography quizzes will take you around the world, from the trickiest flags to the most obscure departments.",
        seoFooter: "Our geography quizzes cover all levels: from easy European capitals to the trickiest flags. Ideal for exam prep, travel planning, or just impressing your friends.",
      },
      fr: {
        name: "Geographie",
        description: "Capitales, drapeaux, departements... Le monde n'a plus de secrets pour toi ?",
        subcategories: ["Departements francais", "Europe", "Capitales", "Drapeaux", "Etats-Unis"],
        seoIntro: "Tu sais placer tous les pays sur une carte ? Tu connais toutes les capitales du monde ? Nos quiz geographie vont te faire voyager a travers les continents.",
        seoFooter: "Nos quiz geographie couvrent tous les niveaux : des capitales europeennes faciles aux drapeaux les plus pieges. Ideal pour reviser ou juste briller en soiree.",
      },
      es: {
        name: "Geografia",
        description: "Capitales, banderas, departamentos... El mundo ya no tiene secretos para ti?",
        subcategories: ["Departamentos franceses", "Europa", "Capitales", "Banderas", "Estados Unidos"],
        seoIntro: "Puedes ubicar todos los paises en un mapa? Conoces todas las capitales del mundo? Nuestros quizzes de geografia te harán viajar por los continentes.",
        seoFooter: "Nuestros quizzes de geografia cubren todos los niveles: desde capitales europeas faciles hasta las banderas mas dificiles.",
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
        description: "Dragon Ball, Naruto, One Piece, Attack on Titan... Are you a true otaku?",
        subcategories: ["Demon Slayer", "Jujutsu Kaisen", "Death Note", "Kpop Demon Hunters", "Fullmetal Alchemist", "Tokyo Revengers", "My Hero Academia", "Attack on Titan", "Naruto", "One Piece", "Dragon Ball"],
        seoIntro: "Are you a true anime and manga fan? From Dragon Ball to Attack on Titan, our anime quizzes test your knowledge of the greatest series. Challenge your friends and prove you're the ultimate otaku!",
        seoFooter: "Our anime quizzes cover the most popular series: Naruto, One Piece, Dragon Ball, Death Note, and many more. Perfect for all fans, from beginners to experts.",
      },
      fr: {
        name: "Anime",
        description: "Dragon Ball, Naruto, One Piece, L'Attaque des Titans... Es-tu un vrai otaku ?",
        subcategories: ["Demon Slayer", "Jujutsu Kaisen", "Death Note", "Kpop Demon Hunters", "Fullmetal Alchemist", "Tokyo Revengers", "My Hero Academia", "L'Attaque des Titans", "Naruto", "One Piece", "Dragon Ball"],
        seoIntro: "Tu es un vrai fan d'anime et manga ? De Dragon Ball a L'Attaque des Titans, nos quiz anime testent tes connaissances sur les plus grandes series. Defie tes amis et prouve que tu es le meilleur otaku !",
        seoFooter: "Nos quiz anime couvrent les series les plus populaires : Naruto, One Piece, Dragon Ball, Death Note et bien d'autres. Parfait pour tous les fans, du debutant a l'expert.",
      },
      es: {
        name: "Anime",
        description: "Dragon Ball, Naruto, One Piece, Ataque a los Titanes... Eres un verdadero otaku?",
        subcategories: ["Demon Slayer", "Jujutsu Kaisen", "Death Note", "Kpop Demon Hunters", "Fullmetal Alchemist", "Tokyo Revengers", "My Hero Academia", "Ataque a los Titanes", "Naruto", "One Piece", "Dragon Ball"],
        seoIntro: "Eres un verdadero fan del anime y manga? De Dragon Ball a Ataque a los Titanes, nuestros quizzes de anime ponen a prueba tus conocimientos sobre las mejores series.",
        seoFooter: "Nuestros quizzes de anime cubren las series mas populares: Naruto, One Piece, Dragon Ball, Death Note y muchas mas. Perfecto para todos los fans.",
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
        description: "Harry Potter, Marvel, Star Wars... Are you a true cinephile?",
        subcategories: ["Harry Potter", "Marvel", "Star Wars", "Lord of the Rings"],
        seoIntro: "Do you know every detail of the Harry Potter universe? Are you a Marvel expert? Our cinema quizzes test your movie culture across the greatest franchises.",
        seoFooter: "Our cinema quizzes cover the greatest movie franchises: Harry Potter, Marvel, Star Wars, and Lord of the Rings. Perfect for cinephiles of all levels.",
      },
      fr: {
        name: "Cinema",
        description: "Harry Potter, Marvel, Star Wars... Es-tu un vrai cinephile ?",
        subcategories: ["Harry Potter", "Marvel", "Star Wars", "Seigneur des Anneaux"],
        seoIntro: "Tu connais chaque detail de l'univers Harry Potter ? Tu es un expert Marvel ? Nos quiz cinema testent ta culture cine a travers les plus grandes sagas.",
        seoFooter: "Nos quiz cinema couvrent les plus grandes sagas du 7e art : Harry Potter, Marvel, Star Wars et le Seigneur des Anneaux. Parfait pour les cinephiles de tous niveaux.",
      },
      es: {
        name: "Cine",
        description: "Harry Potter, Marvel, Star Wars... Eres un verdadero cinefilo?",
        subcategories: ["Harry Potter", "Marvel", "Star Wars", "El Senor de los Anillos"],
        seoIntro: "Conoces cada detalle del universo Harry Potter? Eres un experto en Marvel? Nuestros quizzes de cine ponen a prueba tu cultura cinematografica.",
        seoFooter: "Nuestros quizzes de cine cubren las mas grandes sagas: Harry Potter, Marvel, Star Wars y El Senor de los Anillos. Perfecto para cinefilos de todos los niveles.",
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
        description: "Minecraft, Fortnite, Pokemon, Zelda... Are you the ultimate gamer?",
        subcategories: ["Minecraft", "GTA", "Fortnite", "Call of Duty", "Pokemon", "League of Legends", "World of Warcraft", "Counter Strike", "Brawl Stars", "FIFA", "Zelda", "Roblox", "Valorant"],
        seoIntro: "Are you a true gamer? From Minecraft to Zelda, our video game quizzes test your knowledge across the greatest titles. Challenge your friends and prove you are the ultimate player!",
        seoFooter: "Our video game quizzes cover the most popular titles: Minecraft, Fortnite, Pokemon, League of Legends, and many more. Perfect for gamers of all levels.",
      },
      fr: {
        name: "Jeux Video",
        description: "Minecraft, Fortnite, Pokemon, Zelda... Es-tu le gamer ultime ?",
        subcategories: ["Minecraft", "GTA", "Fortnite", "Call of Duty", "Pokemon", "League of Legends", "World of Warcraft", "Counter Strike", "Brawl Stars", "FIFA", "Zelda", "Roblox", "Valorant"],
        seoIntro: "Tu es un vrai gamer ? De Minecraft a Zelda, nos quiz jeux video testent tes connaissances sur les plus grands titres. Defie tes amis et prouve que tu es le meilleur joueur !",
        seoFooter: "Nos quiz jeux video couvrent les titres les plus populaires : Minecraft, Fortnite, Pokemon, League of Legends et bien d'autres. Parfait pour les gamers de tous niveaux.",
      },
      es: {
        name: "Videojuegos",
        description: "Minecraft, Fortnite, Pokemon, Zelda... Eres el gamer definitivo?",
        subcategories: ["Minecraft", "GTA", "Fortnite", "Call of Duty", "Pokemon", "League of Legends", "World of Warcraft", "Counter Strike", "Brawl Stars", "FIFA", "Zelda", "Roblox", "Valorant"],
        seoIntro: "Eres un verdadero gamer? De Minecraft a Zelda, nuestros quizzes de videojuegos ponen a prueba tus conocimientos sobre los mejores titulos.",
        seoFooter: "Nuestros quizzes de videojuegos cubren los titulos mas populares: Minecraft, Fortnite, Pokemon, League of Legends y muchos mas. Perfecto para gamers de todos los niveles.",
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
