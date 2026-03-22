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

/** Get localized game types. */
export function getGameTypes(locale: Locale): GameTypeInfo[] {
  return gameTypes.map((gt) => ({
    ...gt,
    name: t(locale, `gameType.${gt.id}` as any),
  }));
}

/** Difficulty label per locale. */
export const difficultyLabels: Record<Locale, Record<Difficulty, string>> = {
  en: { easy: "Easy", medium: "Medium", hard: "Hard" },
  fr: { easy: "Facile", medium: "Moyen", hard: "Difficile" },
  es: { easy: "Fácil", medium: "Medio", hard: "Difícil" },
};

/* ── Category definitions with translations ──────────────────────── */

export const categoryDefs: CategoryDef[] = [
  {
    slug: "sport",
    icon: "SP",
    color: "bg-emerald-500",
    coverImage: "/images/cover-sport.jpg",
    translations: {
      en: {
        name: "Sports",
        description: "Football, tennis, Olympics, extreme sports... Test your sports knowledge!",
        subcategories: ["Football", "Tennis", "Olympics", "US Sports", "Winter Sports", "Combat Sports"],
        seoIntro: "Want to test your sports knowledge? Whether you're a football fan, tennis enthusiast, or an Olympics expert, our sports quizzes cover every discipline. From beginner to expert, pick your level and challenge your friends.",
        seoFooter: "Our sports quizzes are designed for all levels. Questions are written by passionate fans and updated after every major competition.",
      },
      fr: {
        name: "Sport",
        description: "Football, tennis, JO, sports extrêmes... Teste tes connaissances sportives !",
        subcategories: ["Football", "Tennis", "JO & Athlétisme", "Sports US", "Sports d'hiver", "Sports de combat"],
        seoIntro: "Envie de tester tes connaissances en sport ? Que tu sois fan de football, passionné de tennis ou incollable sur les Jeux Olympiques, nos quiz sportifs couvrent toutes les disciplines. Du débutant à l'expert, choisis ton niveau et défie tes amis.",
        seoFooter: "Nos quiz sport sont pensés pour tous les profils : que tu regardes un match de temps en temps ou que tu connaisses les stats de chaque joueur par coeur, tu trouveras des quiz adaptés à ton niveau.",
      },
      es: {
        name: "Deportes",
        description: "Fútbol, tenis, Juegos Olímpicos, deportes extremos... ¡Pon a prueba tus conocimientos deportivos!",
        subcategories: ["Fútbol", "Tenis", "Juegos Olímpicos", "Deportes US", "Deportes de invierno", "Deportes de combate"],
        seoIntro: "¿Quieres poner a prueba tus conocimientos deportivos? Ya seas fan del fútbol, apasionado del tenis o experto en los Juegos Olímpicos, nuestros quizzes deportivos cubren todas las disciplinas.",
        seoFooter: "Nuestros quizzes deportivos están diseñados para todos los niveles. Las preguntas están escritas por apasionados y se actualizan después de cada gran competición.",
      },
    },
  },
  {
    slug: "cinema",
    icon: "CI",
    color: "bg-red-500",
    coverImage: "/images/cover-cinema.jpg",
    translations: {
      en: {
        name: "Cinema",
        description: "Blockbusters, cult classics, directors... Are you a true cinephile?",
        subcategories: ["Cult Classics", "Directors", "Actors", "TV Series", "Animation", "Oscars"],
        seoIntro: "Are you more of a blockbuster or art film person? Do you know all the iconic quotes by heart? Our cinema quizzes test your movie culture, from classics to the latest releases.",
        seoFooter: "Our cinema quizzes cover the entire world of film: cult classics, legendary directors, iconic actors, TV series and the Oscars ceremony. Perfect for cinephiles of all levels.",
      },
      fr: {
        name: "Cinéma",
        description: "Blockbusters, films cultes, réalisateurs... Es-tu un vrai cinéphile ?",
        subcategories: ["Films cultes", "Réalisateurs", "Acteurs", "Séries TV", "Animation", "Oscars"],
        seoIntro: "Tu es plutôt blockbuster ou film d'auteur ? Tu connais les répliques cultes par coeur ? Nos quiz cinéma testent ta culture ciné, des classiques aux dernières sorties.",
        seoFooter: "Nos quiz cinéma couvrent tout l'univers du 7e art : films cultes, réalisateurs légendaires, acteurs iconiques, séries TV et cérémonie des Oscars.",
      },
      es: {
        name: "Cine",
        description: "Éxitos de taquilla, clásicos de culto, directores... ¿Eres un verdadero cinéfilo?",
        subcategories: ["Clásicos de culto", "Directores", "Actores", "Series de TV", "Animación", "Oscars"],
        seoIntro: "¿Eres más de blockbusters o cine de autor? ¿Conoces las frases icónicas de memoria? Nuestros quizzes de cine ponen a prueba tu cultura cinematográfica.",
        seoFooter: "Nuestros quizzes de cine cubren todo el universo del séptimo arte: clásicos de culto, directores legendarios, actores icónicos, series de TV y los Oscars.",
      },
    },
  },
  {
    slug: "histoire",
    icon: "HI",
    color: "bg-amber-600",
    coverImage: "/images/cover-histoire.jpg",
    translations: {
      en: {
        name: "History",
        description: "From Antiquity to the modern era, dive back into the great moments of History.",
        subcategories: ["Antiquity", "Middle Ages", "World Wars", "Revolutions", "Kings of France", "Modern History"],
        seoIntro: "Do you know the year of the storming of the Bastille? Our history quizzes take you through the great moments that shaped the world, from Antiquity to the present day.",
        seoFooter: "Our history quizzes cover all eras: Antiquity, Middle Ages, Renaissance, Revolutions, World Wars and contemporary history. Perfect for exams or general knowledge.",
      },
      fr: {
        name: "Histoire",
        description: "De l'Antiquité à nos jours, replonge dans les grands moments de l'Histoire.",
        subcategories: ["Antiquité", "Moyen Âge", "Guerres mondiales", "Révolutions", "Rois de France", "Histoire moderne"],
        seoIntro: "Tu sais en quelle année a eu lieu la prise de la Bastille ? Nos quiz histoire te replongent dans les grands moments qui ont façonné le monde, de l'Antiquité à nos jours.",
        seoFooter: "Nos quiz histoire couvrent toutes les époques : Antiquité, Moyen Âge, Renaissance, Révolutions, guerres mondiales et histoire contemporaine.",
      },
      es: {
        name: "Historia",
        description: "Desde la Antigüedad hasta nuestros días, revive los grandes momentos de la Historia.",
        subcategories: ["Antigüedad", "Edad Media", "Guerras mundiales", "Revoluciones", "Reyes de Francia", "Historia moderna"],
        seoIntro: "¿Sabes en qué año tuvo lugar la toma de la Bastilla? Nuestros quizzes de historia te llevan por los grandes momentos que moldearon el mundo.",
        seoFooter: "Nuestros quizzes de historia cubren todas las épocas: Antigüedad, Edad Media, Renacimiento, Revoluciones, guerras mundiales e historia contemporánea.",
      },
    },
  },
  {
    slug: "culture-generale",
    icon: "CU",
    color: "bg-yellow-500",
    coverImage: "/images/cover-sciences.jpg",
    translations: {
      en: {
        name: "General Knowledge",
        description: "A bit of everything: religion, society, traditions... The quiz for the curious!",
        subcategories: ["Society", "Religion", "Traditions", "Current Events", "Celebrities", "Miscellaneous"],
        seoIntro: "General knowledge is what helps you shine everywhere: at parties, in interviews, in exams. Our quizzes cover varied subjects, from religion to traditions to current events.",
        seoFooter: "Whether you're preparing for a competition, an exam, or just want to test how much you know, our general knowledge quizzes are made for you.",
      },
      fr: {
        name: "Culture Générale",
        description: "Un peu de tout : religion, société, traditions... Le quiz pour les curieux !",
        subcategories: ["Société", "Religion", "Traditions", "Actualité", "Personnalités", "Divers"],
        seoIntro: "La culture générale, c'est ce qui te permet de briller partout : en soirée, en entretien, au brevet. Nos quiz couvrent des sujets variés, de la religion aux traditions en passant par l'actualité.",
        seoFooter: "Que tu prépares un concours, un examen ou que tu veuilles juste tester l'étendue de tes connaissances, nos quiz culture générale sont faits pour toi.",
      },
      es: {
        name: "Cultura General",
        description: "Un poco de todo: religión, sociedad, tradiciones... ¡El quiz para los curiosos!",
        subcategories: ["Sociedad", "Religión", "Tradiciones", "Actualidad", "Celebridades", "Varios"],
        seoIntro: "La cultura general es lo que te permite brillar en todas partes: en fiestas, en entrevistas, en exámenes. Nuestros quizzes cubren temas variados.",
        seoFooter: "Ya sea que estés preparando un concurso, un examen, o simplemente quieras poner a prueba tus conocimientos, nuestros quizzes de cultura general son para ti.",
      },
    },
  },
  {
    slug: "geographie",
    icon: "GE",
    color: "bg-teal-500",
    coverImage: "/images/cover-geographie.jpg",
    translations: {
      en: {
        name: "Geography",
        description: "Capitals, flags, continents... Does the world hold no secrets for you?",
        subcategories: ["Capitals", "Flags", "Europe", "Asia", "Americas", "Africa"],
        seoIntro: "Can you place Moldova on a map? Do you still confuse the flags of Monaco and Indonesia? Our geography quizzes will take you around the world, from the most obscure capitals to the trickiest flags.",
        seoFooter: "Our geography quizzes cover all levels: from easy European capitals to the trickiest African borders. Ideal for exam prep, travel planning, or just impressing your friends.",
      },
      fr: {
        name: "Géographie",
        description: "Capitales, drapeaux, continents... Le monde n'a plus de secrets pour toi ?",
        subcategories: ["Capitales", "Drapeaux", "Europe", "Asie", "Amérique", "Afrique"],
        seoIntro: "Tu sais placer la Moldavie sur une carte ? Tu confonds encore le drapeau de Monaco et celui de l'Indonésie ? Nos quiz géographie vont te faire voyager à travers les continents.",
        seoFooter: "Nos quiz géographie couvrent tous les niveaux : des capitales européennes faciles aux frontières africaines les plus piégeuses. Idéal pour réviser le brevet, préparer un voyage, ou juste briller en soirée.",
      },
      es: {
        name: "Geografía",
        description: "Capitales, banderas, continentes... ¿El mundo ya no tiene secretos para ti?",
        subcategories: ["Capitales", "Banderas", "Europa", "Asia", "América", "África"],
        seoIntro: "¿Puedes ubicar Moldavia en un mapa? ¿Todavía confundes las banderas de Mónaco e Indonesia? Nuestros quizzes de geografía te harán viajar por los continentes.",
        seoFooter: "Nuestros quizzes de geografía cubren todos los niveles: desde capitales europeas fáciles hasta las fronteras africanas más difíciles.",
      },
    },
  },
];

/* ── Resolver functions ──────────────────────────────────────────── */

/** Resolve categories for a given locale. */
export function getCategories(locale: Locale): CategoryData[] {
  return categoryDefs.map((def) => {
    const content = def.translations[locale] || def.translations.en;
    return {
      slug: def.slug,
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

/** Get a single resolved category. */
export function getCategory(slug: string, locale: Locale): CategoryData | undefined {
  return getCategories(locale).find((c) => c.slug === slug);
}

/** Get category name for a given slug and locale. */
export function getCategoryName(slug: string, locale: Locale): string {
  const def = categoryDefs.find((c) => c.slug === slug);
  if (!def) return slug;
  const content = def.translations[locale] || def.translations.en;
  return content.name;
}

// Legacy export for backward compatibility during migration
export const categories = getCategories("fr");
