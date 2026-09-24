import type { CategoryDef, CategoryData, GameTypeInfo, Difficulty } from "./types";
import type { Locale } from "../i18n/config";
import { t } from "../i18n/ui";

export const gameTypes: GameTypeInfo[] = [
  { id: "qcm", name: "QCM", description: "", icon: "?", color: "bg-brand-500" },
  { id: "vrai-faux", name: "Vrai/Faux", description: "", icon: "VF", color: "bg-emerald-500" },
  { id: "chrono", name: "Chrono", description: "", icon: "CH", color: "bg-amber-500" },
  { id: "estimation", name: "Estimation", description: "", icon: "#", color: "bg-cyan-500" },
  { id: "duel", name: "Duel", description: "", icon: "VS", color: "bg-rose-500" },
  { id: "ordre", name: "Ordre", description: "", icon: "OR", color: "bg-brand-500" },
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
    slug: "culture-generale",
    slugs: { en: "general-knowledge", fr: "culture-generale", es: "cultura-general" },
    icon: "CG",
    color: "bg-amber-700",
    coverImage: "/images/cover-culture-generale.webp",
    translations: {
      en: {
        name: "General Knowledge",
        description: "Science, the human body, space, art, music and literature. Test your general knowledge!",
        subcategories: ["Science", "Human Body", "Space", "Art and Painting", "Music", "Literature"],
        seoIntro: "Science, the human body, space, painting, music and literature: free general knowledge quizzes with an explanation under every answer.",
        seoFooter: "These are the questions that come up at dinner or in pub quizzes: which planet is the biggest, who painted the Mona Lisa, how many bones in the body, etc. Every answer is explained, so what you get wrong this time you'll get right next time.",
      },
      fr: {
        name: "Culture générale",
        description: "Sciences, corps humain, espace, art, musique et littérature. Teste ta culture générale !",
        subcategories: ["Sciences", "Corps humain", "Espace", "Art et peinture", "Musique", "Littérature"],
        seoIntro: "Sciences, corps humain, espace, peinture, musique et littérature : des quiz de culture générale gratuits, avec une explication à chaque réponse.",
        seoFooter: "Ce sont les questions qui tombent au dîner ou dans les jeux télé : la plus grosse planète, l'auteur de La Joconde, le nombre d'os du corps humain, etc. Chaque réponse est expliquée, du coup ce qu'on rate cette fois, on le retient pour la suivante.",
      },
      es: {
        name: "Cultura general",
        description: "Ciencia, cuerpo humano, espacio, arte, música y literatura. ¡Pon a prueba tu cultura general!",
        subcategories: ["Ciencia", "Cuerpo humano", "Espacio", "Arte y pintura", "Música", "Literatura"],
        seoIntro: "Ciencia, cuerpo humano, espacio, pintura, música y literatura: quizzes de cultura general gratis, con una explicación en cada respuesta.",
        seoFooter: "Son las preguntas que salen en una cena o en los concursos de la tele: el planeta más grande, quién pintó La Gioconda, cuántos huesos tiene el cuerpo, etc. Cada respuesta viene explicada, así que lo que fallas hoy lo aciertas la próxima vez.",
      },
    },
  },
  {
    slug: "histoire",
    slugs: { en: "history", fr: "histoire", es: "historia" },
    icon: "HI",
    color: "bg-orange-700",
    coverImage: "/images/cover-histoire.webp",
    translations: {
      en: {
        name: "History",
        description: "Antiquity, the Middle Ages, the kings of France, the Revolution and the two world wars. Test your history!",
        subcategories: ["Antiquity", "Middle Ages", "Kings of France", "French Revolution", "World War I", "World War II"],
        seoIntro: "Antiquity, the Middle Ages, the kings of France, the French Revolution and the world wars: free history quizzes, every answer explained.",
        seoFooter: "The questions go from the pharaohs to the Normandy landings, with the dates, names and events that school taught you and that tend to get mixed up later. The explanation under each answer puts them back in order.",
      },
      fr: {
        name: "Histoire",
        description: "Antiquité, Moyen Âge, rois de France, Révolution et guerres mondiales. Teste tes connaissances en histoire !",
        subcategories: ["Antiquité", "Moyen Âge", "Rois de France", "Révolution française", "Première Guerre mondiale", "Seconde Guerre mondiale"],
        seoIntro: "Antiquité, Moyen Âge, rois de France, Révolution française et guerres mondiales : des quiz d'histoire gratuits, chaque réponse expliquée.",
        seoFooter: "Les questions vont des pharaons au Débarquement, avec les dates, les noms et les événements qu'on apprend à l'école et qu'on finit par mélanger. L'explication sous chaque réponse remet les choses dans l'ordre.",
      },
      es: {
        name: "Historia",
        description: "Antigüedad, Edad Media, reyes de Francia, Revolución y guerras mundiales. ¡Pon a prueba tu historia!",
        subcategories: ["Antigüedad", "Edad Media", "Reyes de Francia", "Revolución francesa", "Primera Guerra Mundial", "Segunda Guerra Mundial"],
        seoIntro: "Antigüedad, Edad Media, reyes de Francia, Revolución francesa y guerras mundiales: quizzes de historia gratis, cada respuesta explicada.",
        seoFooter: "Las preguntas van de los faraones al desembarco de Normandía, con las fechas, los nombres y los hechos que se aprenden en el colegio y que luego se mezclan. La explicación de cada respuesta vuelve a ponerlos en orden.",
      },
    },
  },
  {
    slug: "sport",
    slugs: { en: "sports", fr: "sport", es: "deportes" },
    icon: "SP",
    color: "bg-emerald-500",
    coverImage: "/images/cover-sport.webp",
    translations: {
      en: {
        name: "Sports",
        description: "Quizzes on football, basketball, tennis, rugby, Formula 1, boxing and more. Test your sports knowledge!",
        subcategories: ["Basketball", "Cycling", "Football", "Formula 1", "Olympics", "Rugby", "Tennis", "Horse Riding", "Boxing"],
        seoIntro: "Football, basketball, tennis, rugby, Formula 1, boxing, etc.: free sports quizzes with an explanation under every answer, no account needed.",
        seoFooter: "Each sport has its own quiz and its own game mode: a timed round for boxing, duels for tennis, number guessing for cycling, etc. When a question stumps you, the explanation gives you the right answer and the reason behind it.",
      },
      fr: {
        name: "Sport",
        description: "Des quiz sur le football, le basket, le tennis, le rugby, la F1, la boxe et d'autres sports. Teste tes connaissances !",
        subcategories: ["Basketball", "Cyclisme", "Football", "Formule 1", "Jeux olympiques", "Rugby", "Tennis", "Équitation", "Boxe"],
        seoIntro: "Football, basket, tennis, rugby, Formule 1, boxe, etc. : des quiz de sport gratuits, avec une explication sous chaque réponse et sans compte.",
        seoFooter: "Chaque sport a son quiz et son mode de jeu : un chrono pour la boxe, des duels pour le tennis, des estimations pour le cyclisme, etc. Quand une question bloque, l'explication donne la bonne réponse et le pourquoi.",
      },
      es: {
        name: "Deportes",
        description: "Quizzes de fútbol, baloncesto, tenis, rugby, Fórmula 1, boxeo y otros deportes. ¡Pon a prueba tus conocimientos!",
        subcategories: ["Baloncesto", "Ciclismo", "Futbol", "Formula 1", "Juegos Olímpicos", "Rugby", "Tenis", "Equitación", "Boxeo"],
        seoIntro: "Fútbol, baloncesto, tenis, rugby, Fórmula 1, boxeo, etc.: quizzes de deportes gratis, con una explicación en cada respuesta y sin cuenta.",
        seoFooter: "Cada deporte tiene su quiz y su modo de juego: contrarreloj para el boxeo, duelos para el tenis, estimaciones para el ciclismo, etc. Cuando una pregunta se te atraganta, la explicación te da la respuesta correcta y el porqué.",
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
        description: "Flags, capitals, Europe, the United States, the French departments... Test your geography!",
        subcategories: ["French Departments", "Europe", "Capitals", "Flags", "United States"],
        seoIntro: "Flags, capitals, Europe, the United States and the French departments: free geography quizzes with an explanation under every answer.",
        seoFooter: "Some flags you recognise instantly, others you mix up with the neighbour every time. Same with capitals: Canberra, Ottawa or Brasília catch out plenty of people. Every answer is explained, so it sticks next time.",
      },
      fr: {
        name: "Géographie",
        description: "Drapeaux, capitales, Europe, États-Unis, départements français... Teste ta géographie !",
        subcategories: ["Départements français", "Europe", "Capitales", "Drapeaux", "Etats-Unis"],
        seoIntro: "Drapeaux, capitales, Europe, États-Unis et départements français : des quiz de géographie gratuits, avec une explication sous chaque réponse.",
        seoFooter: "Il y a les drapeaux qu'on reconnaît du premier coup, et ceux qu'on confond toujours avec le voisin. Pareil pour les capitales : Canberra, Ottawa ou Brasília piègent pas mal de monde. Chaque réponse est expliquée, du coup ça reste la fois suivante.",
      },
      es: {
        name: "Geografía",
        description: "Banderas, capitales, Europa, Estados Unidos, los departamentos franceses... ¡Pon a prueba tu geografía!",
        subcategories: ["Departamentos franceses", "Europa", "Capitales", "Banderas", "Estados Unidos"],
        seoIntro: "Banderas, capitales, Europa, Estados Unidos y los departamentos franceses: quizzes de geografía gratis, con una explicación en cada respuesta.",
        seoFooter: "Hay banderas que reconoces al instante y otras que siempre confundes con la del vecino. Lo mismo pasa con las capitales: Canberra, Ottawa o Brasilia engañan a mucha gente. Cada respuesta viene explicada, así que la próxima vez te acuerdas.",
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
        description: "Dragon Ball, Naruto, One Piece, Demon Slayer, Jujutsu Kaisen and more. Are you a true otaku?",
        subcategories: ["Demon Slayer", "Jujutsu Kaisen", "Death Note", "Kpop Demon Hunters", "Fullmetal Alchemist", "Tokyo Revengers", "My Hero Academia", "Attack on Titan", "Naruto", "One Piece", "Dragon Ball"],
        seoIntro: "Dragon Ball, Naruto, One Piece, Demon Slayer, Death Note, Attack on Titan, etc.: free anime quizzes with an explanation under every answer.",
        seoFooter: "You need to have watched the series, but you don't need to know every volume by heart. The questions go from the main characters to the techniques and the big turning points, and a few of them catch out even the fans.",
      },
      fr: {
        name: "Anime",
        description: "Dragon Ball, Naruto, One Piece, Demon Slayer, Jujutsu Kaisen et d'autres. Es-tu un vrai otaku ?",
        subcategories: ["Demon Slayer", "Jujutsu Kaisen", "Death Note", "Kpop Demon Hunters", "Fullmetal Alchemist", "Tokyo Revengers", "My Hero Academia", "L'Attaque des Titans", "Naruto", "One Piece", "Dragon Ball"],
        seoIntro: "Dragon Ball, Naruto, One Piece, Demon Slayer, Death Note, L'Attaque des Titans, etc. : des quiz d'anime gratuits, avec une explication à chaque réponse.",
        seoFooter: "Il faut avoir vu la série, mais pas connaître chaque tome par cœur. Les questions vont des personnages principaux aux techniques et aux grands tournants de l'histoire, et quelques-unes piègent même les fans.",
      },
      es: {
        name: "Anime",
        description: "Dragon Ball, Naruto, One Piece, Demon Slayer, Jujutsu Kaisen y más. ¿Eres un verdadero otaku?",
        subcategories: ["Demon Slayer", "Jujutsu Kaisen", "Death Note", "Kpop Demon Hunters", "Fullmetal Alchemist", "Tokyo Revengers", "My Hero Academia", "Ataque a los Titanes", "Naruto", "One Piece", "Dragon Ball"],
        seoIntro: "Dragon Ball, Naruto, One Piece, Demon Slayer, Death Note, Ataque a los Titanes, etc.: quizzes de anime gratis, con una explicación en cada respuesta.",
        seoFooter: "Hay que haber visto la serie, pero no hace falta saberse cada tomo de memoria. Las preguntas van de los personajes principales a las técnicas y los grandes giros de la historia, y algunas pillan incluso a los fans.",
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
        description: "Harry Potter, Marvel, Star Wars, The Lord of the Rings: test what you remember of the big sagas!",
        subcategories: ["Harry Potter", "Marvel", "Star Wars", "Lord of the Rings"],
        seoIntro: "Harry Potter, Marvel, Star Wars and The Lord of the Rings: free movie quizzes on the big sagas, with an explanation under every answer.",
        seoFooter: "If you've rewatched the sagas a few times, you'll be fine. If not, the explanation under each answer covers for you. Each saga has its own game mode: duels for Marvel, putting the films in order for Star Wars, etc.",
      },
      fr: {
        name: "Cinéma",
        description: "Harry Potter, Marvel, Star Wars, Le Seigneur des Anneaux : teste ce que tu as retenu des grandes sagas !",
        subcategories: ["Harry Potter", "Marvel", "Star Wars", "Seigneur des Anneaux"],
        seoIntro: "Harry Potter, Marvel, Star Wars et Le Seigneur des Anneaux : des quiz de cinéma gratuits sur les grandes sagas, avec une explication à chaque réponse.",
        seoFooter: "Si tu as revu les sagas plusieurs fois, ça devrait bien se passer. Sinon, l'explication sous chaque réponse rattrape le coup. Chaque saga a son mode de jeu : des duels pour Marvel, les films à remettre dans l'ordre pour Star Wars, etc.",
      },
      es: {
        name: "Cine",
        description: "Harry Potter, Marvel, Star Wars, El Señor de los Anillos: ¡pon a prueba lo que recuerdas de las grandes sagas!",
        subcategories: ["Harry Potter", "Marvel", "Star Wars", "El Senor de los Anillos"],
        seoIntro: "Harry Potter, Marvel, Star Wars y El Señor de los Anillos: quizzes de cine gratis sobre las grandes sagas, con una explicación en cada respuesta.",
        seoFooter: "Si has vuelto a ver las sagas varias veces, te irá bien. Si no, la explicación debajo de cada respuesta lo compensa. Cada saga tiene su modo de juego: duelos para Marvel, ordenar las películas para Star Wars, etc.",
      },
    },
  },
  {
    slug: "jeux-video",
    slugs: { en: "video-games", fr: "jeux-video", es: "videojuegos" },
    icon: "JV",
    color: "bg-brand-500",
    coverImage: "/images/cover-jeux-video.webp",
    translations: {
      en: {
        name: "Video Games",
        description: "Minecraft, Pokémon, Zelda, GTA, Fortnite, League of Legends and more. Are you a real gamer?",
        subcategories: ["Minecraft", "GTA", "Fortnite", "Call of Duty", "Pokemon", "League of Legends", "World of Warcraft", "Counter Strike", "Brawl Stars", "FIFA", "Zelda", "Roblox", "Valorant"],
        seoIntro: "Minecraft, Pokémon, Zelda, GTA, Fortnite, Valorant, League of Legends, etc.: free video game quizzes with an explanation under every answer.",
        seoFooter: "You don't need 500 hours in each game, but you do need to have played them. The questions cover the characters, the maps, the release dates and the records that players talk about.",
      },
      fr: {
        name: "Jeux Vidéo",
        description: "Minecraft, Pokémon, Zelda, GTA, Fortnite, League of Legends et d'autres. Es-tu un vrai gamer ?",
        subcategories: ["Minecraft", "GTA", "Fortnite", "Call of Duty", "Pokemon", "League of Legends", "World of Warcraft", "Counter Strike", "Brawl Stars", "FIFA", "Zelda", "Roblox", "Valorant"],
        seoIntro: "Minecraft, Pokémon, Zelda, GTA, Fortnite, Valorant, League of Legends, etc. : des quiz de jeux vidéo gratuits, avec une explication à chaque réponse.",
        seoFooter: "Pas besoin d'avoir 500 heures sur chaque jeu, mais il faut y avoir joué. Les questions portent sur les personnages, les cartes, les dates de sortie et les records dont parlent les joueurs.",
      },
      es: {
        name: "Videojuegos",
        description: "Minecraft, Pokémon, Zelda, GTA, Fortnite, League of Legends y más. ¿Eres un verdadero gamer?",
        subcategories: ["Minecraft", "GTA", "Fortnite", "Call of Duty", "Pokemon", "League of Legends", "World of Warcraft", "Counter Strike", "Brawl Stars", "FIFA", "Zelda", "Roblox", "Valorant"],
        seoIntro: "Minecraft, Pokémon, Zelda, GTA, Fortnite, Valorant, League of Legends, etc.: quizzes de videojuegos gratis, con una explicación en cada respuesta.",
        seoFooter: "No hace falta tener 500 horas en cada juego, pero sí haber jugado. Las preguntas tratan de los personajes, los mapas, las fechas de lanzamiento y los récords de los que hablan los jugadores.",
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
