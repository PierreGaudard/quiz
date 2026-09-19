import type { Locale } from "../../i18n/config";

/**
 * Les minis-jeux, a cote des quiz.
 *
 * Un quiz est fini : dix questions, un score, c'est joue. Un mini-jeu tire ses
 * manches au hasard dans un gros lot et ne se termine que sur une erreur, donc
 * on y revient. Les deux cohabitent, ils ne se remplacent pas : le quiz amene
 * la requete precise (« quiz Dragon Ball »), le mini-jeu amene le temps passe
 * et le partage.
 *
 * Chaque jeu est un produit avec sa page, sa requete et ses regles, pas un
 * format pose sur un quiz. C'est la difference avec `gameType` dans
 * src/data/types.ts, qui decrit la forme des questions d'un quiz donne.
 */

/** Un element comparable : un nom traduit et une valeur numerique. */
export interface GameItem {
  id: string;
  /** La valeur comparee. Jamais affichee avant la reponse du joueur. */
  value: number;
  image?: string;
  labels: Record<Locale, string>;
}

/**
 * Un lot d'elements comparables entre eux sur une meme metrique.
 *
 * Tous les elements d'un lot doivent se comparer sans ambiguite : on ne
 * melange pas des superficies et des populations dans le meme lot, sinon la
 * question posee au-dessus des deux cartes n'a plus de sens.
 */
export interface ComparisonSet {
  id: string;
  /** La categorie du site a laquelle le lot se rattache, pour le maillage. */
  categorySlug: string;
  /** La question posee au-dessus des deux cartes. */
  question: Record<Locale, string>;
  /** L'unite affichee apres la valeur. Vide pour une annee. */
  unit: Record<Locale, string>;
  /** Le libelle des deux boutons, qui ne dit pas « plus haut » pour une date. */
  higherLabel: Record<Locale, string>;
  lowerLabel: Record<Locale, string>;
  /**
   * L'annee de reference de la donnee, affichee sous les cartes.
   *
   * Une population change tous les ans. Sans cette mention, un joueur qui
   * connait un chiffre plus recent croit que le jeu se trompe, et il a raison
   * de le croire : c'est la source qui manque, pas lui.
   */
  asOf?: string;
  items: GameItem[];
}

/** Ce qu'une locale dit d'un mini-jeu : son nom, sa page, ses regles. */
export interface MiniGameLocaleContent {
  /** Le nom du jeu, tel qu'il apparait dans le hub et le fil d'Ariane. */
  name: string;
  /** Une phrase pour la carte du hub. */
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  /** Le H1 de la page du jeu. */
  heading: string;
  /** Le paragraphe d'introduction, sous le H1. */
  intro: string;
  /** Les regles, en etapes numerotees. */
  steps: { title: string; text: string }[];
  /** Les questions frequentes de la page du jeu. */
  faq: { q: string; a: string }[];
}

/** Un mini-jeu du catalogue. */
export interface MiniGameDef {
  id: string;
  /** Le slug de la page, different par langue. */
  slugs: Record<Locale, string>;
  /** Un accent Tailwind, comme pour les categories. */
  color: string;
  coverImage?: string;
  translations: Record<Locale, MiniGameLocaleContent>;
}

/** Un mini-jeu resolu dans une langue, ce que les pages recoivent. */
export interface MiniGameData extends MiniGameLocaleContent {
  id: string;
  slug: string;
  /** Le chemin complet, prefixe de langue compris. */
  path: string;
  color: string;
  coverImage?: string;
}
