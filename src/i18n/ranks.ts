/**
 * Les rangs de fin de partie (S, A, B, C, D), dans les trois langues.
 *
 * Chrono, estimation, duel et ordre les ecrivaient en anglais en dur : un
 * joueur francais finissait sa partie en « Beginner ». Le qcm et le vrai-faux
 * ont leurs propres libelles dans leur dictionnaire.
 */
const RANKS: Record<string, Record<string, string>> = {
  legend: { en: "Legend", fr: "Légende", es: "Leyenda" },
  expert: { en: "Expert", fr: "Expert", es: "Experto" },
  skilled: { en: "Skilled", fr: "Confirmé", es: "Hábil" },
  apprentice: { en: "Apprentice", fr: "Apprenti", es: "Aprendiz" },
  beginner: { en: "Beginner", fr: "Débutant", es: "Principiante" },
};

export function rankLabel(key: keyof typeof RANKS | string, locale = "en"): string {
  return RANKS[key]?.[locale] || RANKS[key]?.en || key;
}
