import type { Locale } from "../../i18n/config";

/**
 * Les drapeaux du « drapeau mystere », traces en SVG.
 *
 * Pas d'images : un drapeau est de la geometrie, et le SVG le rend net a
 * toutes les tailles sans une seule requete reseau. Le lot s'arrete aux
 * drapeaux dont la construction est exacte, bandes, croix nordiques, disques
 * et etoiles. Les blasons et armoiries (Espagne, Portugal, Bresil, Mexique)
 * sont ecartes : un blason approximatif sur un jeu qui demande justement de
 * reconnaitre un drapeau est une faute qu'on voit au premier coup d'oeil.
 *
 * Les planches sont toutes au format 3:2, sauf la suisse qui est carree.
 * Ce n'est pas la proportion officielle de chacun : c'est un choix assume
 * pour que la grille reste reguliere et que la proportion ne devienne pas
 * elle-meme un indice.
 */
export interface FlagItem {
  id: string;
  /** Le trace SVG complet, insere tel quel. Donnee du depot, pas d'entree utilisateur. */
  svg: string;
  labels: Record<Locale, string>;
}

export const flagItems: FlagItem[] = [
  {
    id: "france",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#002395"/><rect x="1" width="1" height="2" fill="#FFFFFF"/><rect x="2" width="1" height="2" fill="#ED2939"/></svg>',
    labels: { en: "France", fr: "France", es: "Francia" },
  },
  {
    id: "italy",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#FFFFFF"/><rect x="2" width="1" height="2" fill="#CE2B37"/></svg>',
    labels: { en: "Italy", fr: "Italie", es: "Italia" },
  },
  {
    id: "ireland",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#169B62"/><rect x="1" width="1" height="2" fill="#FFFFFF"/><rect x="2" width="1" height="2" fill="#FF883E"/></svg>',
    labels: { en: "Ireland", fr: "Irlande", es: "Irlanda" },
  },
  {
    id: "belgium",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#000000"/><rect x="1" width="1" height="2" fill="#FDDA24"/><rect x="2" width="1" height="2" fill="#EF3340"/></svg>',
    labels: { en: "Belgium", fr: "Belgique", es: "Bélgica" },
  },
  {
    id: "romania",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#002B7F"/><rect x="1" width="1" height="2" fill="#FCD116"/><rect x="2" width="1" height="2" fill="#CE1126"/></svg>',
    labels: { en: "Romania", fr: "Roumanie", es: "Rumanía" },
  },
  {
    id: "nigeria",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#008751"/><rect x="1" width="1" height="2" fill="#FFFFFF"/><rect x="2" width="1" height="2" fill="#008751"/></svg>',
    labels: { en: "Nigeria", fr: "Nigeria", es: "Nigeria" },
  },
  {
    id: "peru",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#D91023"/><rect x="1" width="1" height="2" fill="#FFFFFF"/><rect x="2" width="1" height="2" fill="#D91023"/></svg>',
    labels: { en: "Peru", fr: "Pérou", es: "Perú" },
  },
  {
    id: "mali",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#14B53A"/><rect x="1" width="1" height="2" fill="#FCD116"/><rect x="2" width="1" height="2" fill="#CE1126"/></svg>',
    labels: { en: "Mali", fr: "Mali", es: "Malí" },
  },
  {
    id: "netherlands",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="0.666667" fill="#AE1C28"/><rect y="0.666667" width="3" height="0.666667" fill="#FFFFFF"/><rect y="1.33333" width="3" height="0.666667" fill="#21468B"/></svg>',
    labels: { en: "Netherlands", fr: "Pays-Bas", es: "Países Bajos" },
  },
  {
    id: "russia",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="0.666667" fill="#FFFFFF"/><rect y="0.666667" width="3" height="0.666667" fill="#0039A6"/><rect y="1.33333" width="3" height="0.666667" fill="#D52B1E"/></svg>',
    labels: { en: "Russia", fr: "Russie", es: "Rusia" },
  },
  {
    id: "germany",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="0.666667" fill="#000000"/><rect y="0.666667" width="3" height="0.666667" fill="#DD0000"/><rect y="1.33333" width="3" height="0.666667" fill="#FFCE00"/></svg>',
    labels: { en: "Germany", fr: "Allemagne", es: "Alemania" },
  },
  {
    id: "austria",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="0.666667" fill="#ED2939"/><rect y="0.666667" width="3" height="0.666667" fill="#FFFFFF"/><rect y="1.33333" width="3" height="0.666667" fill="#ED2939"/></svg>',
    labels: { en: "Austria", fr: "Autriche", es: "Austria" },
  },
  {
    id: "hungary",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="0.666667" fill="#CE2939"/><rect y="0.666667" width="3" height="0.666667" fill="#FFFFFF"/><rect y="1.33333" width="3" height="0.666667" fill="#477050"/></svg>',
    labels: { en: "Hungary", fr: "Hongrie", es: "Hungría" },
  },
  {
    id: "bulgaria",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="0.666667" fill="#FFFFFF"/><rect y="0.666667" width="3" height="0.666667" fill="#00966E"/><rect y="1.33333" width="3" height="0.666667" fill="#D62612"/></svg>',
    labels: { en: "Bulgaria", fr: "Bulgarie", es: "Bulgaria" },
  },
  {
    id: "lithuania",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="0.666667" fill="#FDB913"/><rect y="0.666667" width="3" height="0.666667" fill="#006A44"/><rect y="1.33333" width="3" height="0.666667" fill="#C1272D"/></svg>',
    labels: { en: "Lithuania", fr: "Lituanie", es: "Lituania" },
  },
  {
    id: "estonia",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="0.666667" fill="#0072CE"/><rect y="0.666667" width="3" height="0.666667" fill="#000000"/><rect y="1.33333" width="3" height="0.666667" fill="#FFFFFF"/></svg>',
    labels: { en: "Estonia", fr: "Estonie", es: "Estonia" },
  },
  {
    id: "ukraine",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="1" fill="#0057B7"/><rect y="1" width="3" height="1" fill="#FFD700"/></svg>',
    labels: { en: "Ukraine", fr: "Ukraine", es: "Ucrania" },
  },
  {
    id: "poland",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="1" fill="#FFFFFF"/><rect y="1" width="3" height="1" fill="#DC143C"/></svg>',
    labels: { en: "Poland", fr: "Pologne", es: "Polonia" },
  },
  {
    id: "indonesia",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="1" fill="#FF0000"/><rect y="1" width="3" height="1" fill="#FFFFFF"/></svg>',
    labels: { en: "Indonesia", fr: "Indonésie", es: "Indonesia" },
  },
  {
    id: "denmark",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#C60C30"/><rect x="0.93" width="0.3" height="2" fill="#FFFFFF"/><rect y="0.85" width="3" height="0.3" fill="#FFFFFF"/></svg>',
    labels: { en: "Denmark", fr: "Danemark", es: "Dinamarca" },
  },
  {
    id: "sweden",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#006AA7"/><rect x="0.93" width="0.3" height="2" fill="#FECC00"/><rect y="0.85" width="3" height="0.3" fill="#FECC00"/></svg>',
    labels: { en: "Sweden", fr: "Suède", es: "Suecia" },
  },
  {
    id: "norway",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#BA0C2F"/><rect x="0.93" width="0.3" height="2" fill="#FFFFFF"/><rect y="0.85" width="3" height="0.3" fill="#FFFFFF"/><rect x="1.0125" width="0.135" height="2" fill="#00205B"/><rect y="0.9325" width="3" height="0.135" fill="#00205B"/></svg>',
    labels: { en: "Norway", fr: "Norvège", es: "Noruega" },
  },
  {
    id: "finland",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#FFFFFF"/><rect x="0.93" width="0.3" height="2" fill="#003580"/><rect y="0.85" width="3" height="0.3" fill="#003580"/></svg>',
    labels: { en: "Finland", fr: "Finlande", es: "Finlandia" },
  },
  {
    id: "iceland",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#02529C"/><rect x="0.93" width="0.3" height="2" fill="#FFFFFF"/><rect y="0.85" width="3" height="0.3" fill="#FFFFFF"/><rect x="1.0125" width="0.135" height="2" fill="#DC1E35"/><rect y="0.9325" width="3" height="0.135" fill="#DC1E35"/></svg>',
    labels: { en: "Iceland", fr: "Islande", es: "Islandia" },
  },
  {
    id: "japan",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#FFFFFF"/><circle cx="1.5" cy="1" r="0.42" fill="#BC002D"/></svg>',
    labels: { en: "Japan", fr: "Japon", es: "Japón" },
  },
  {
    id: "bangladesh",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#006A4E"/><circle cx="1.35" cy="1" r="0.4" fill="#F42A41"/></svg>',
    labels: { en: "Bangladesh", fr: "Bangladesh", es: "Bangladés" },
  },
  {
    id: "switzerland",
    svg:
      '<svg viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="#FF0000"/><rect x="0.45" y="0.34" width="0.1" height="0.32" fill="#fff"/><rect x="0.34" y="0.45" width="0.32" height="0.1" fill="#fff"/></svg>',
    labels: { en: "Switzerland", fr: "Suisse", es: "Suiza" },
  },
  {
    id: "turkey",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#E30A17"/><circle cx="1.05" cy="1" r="0.40" fill="#fff"/><circle cx="1.18" cy="1" r="0.32" fill="#E30A17"/><polygon points="1.720,0.800 1.767,0.935 1.910,0.938 1.796,1.025 1.838,1.162 1.720,1.080 1.602,1.162 1.644,1.025 1.530,0.938 1.673,0.935" fill="#fff"/></svg>',
    labels: { en: "Turkey", fr: "Turquie", es: "Turquía" },
  },
  {
    id: "vietnam",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#DA251D"/><polygon points="1.500,0.450 1.629,0.822 2.023,0.830 1.709,1.068 1.823,1.445 1.500,1.220 1.177,1.445 1.291,1.068 0.977,0.830 1.371,0.822" fill="#FFFF00"/></svg>',
    labels: { en: "Vietnam", fr: "Viêt Nam", es: "Vietnam" },
  },
  {
    id: "morocco",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#C1272D"/><polygon points="1.500,0.480 1.617,0.839 1.995,0.839 1.689,1.061 1.806,1.421 1.500,1.199 1.194,1.421 1.311,1.061 1.005,0.839 1.383,0.839" fill="none" stroke="#006233" stroke-width="0.07"/></svg>',
    labels: { en: "Morocco", fr: "Maroc", es: "Marruecos" },
  },
  {
    id: "greece",
    svg:
      '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="3" height="0.222222" fill="#0D5EAF"/><rect y="0.222222" width="3" height="0.222222" fill="#fff"/><rect y="0.444444" width="3" height="0.222222" fill="#0D5EAF"/><rect y="0.666667" width="3" height="0.222222" fill="#fff"/><rect y="0.888889" width="3" height="0.222222" fill="#0D5EAF"/><rect y="1.11111" width="3" height="0.222222" fill="#fff"/><rect y="1.33333" width="3" height="0.222222" fill="#0D5EAF"/><rect y="1.55556" width="3" height="0.222222" fill="#fff"/><rect y="1.77778" width="3" height="0.222222" fill="#0D5EAF"/><rect width="1.11111" height="1.11111" fill="#0D5EAF"/><rect x="0.444444" width="0.222222" height="1.11111" fill="#fff"/><rect y="0.444444" width="1.11111" height="0.222222" fill="#fff"/></svg>',
    labels: { en: "Greece", fr: "Grèce", es: "Grecia" },
  },
];
