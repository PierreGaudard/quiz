/** XP-based level system. */

export interface LevelInfo {
  level: number;
  name: Record<string, string>;
  minXp: number;
  color: string;
  icon: string;
}

export const LEVELS: LevelInfo[] = [
  { level: 1, name: { en: "Beginner", fr: "Debutant", es: "Principiante" }, minXp: 0, color: "bg-gray-400", icon: "1" },
  { level: 2, name: { en: "Apprentice", fr: "Apprenti", es: "Aprendiz" }, minXp: 500, color: "bg-green-500", icon: "2" },
  { level: 3, name: { en: "Skilled", fr: "Confirme", es: "Habil" }, minXp: 1500, color: "bg-blue-500", icon: "3" },
  { level: 4, name: { en: "Expert", fr: "Expert", es: "Experto" }, minXp: 3500, color: "bg-violet-500", icon: "4" },
  { level: 5, name: { en: "Legend", fr: "Legende", es: "Leyenda" }, minXp: 7000, color: "bg-amber-500", icon: "5" },
];

export function getLevelFromXp(xp: number): LevelInfo {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXp) return LEVELS[i];
  }
  return LEVELS[0];
}

export function getXpProgress(xp: number): { current: number; next: number; percent: number } {
  const level = getLevelFromXp(xp);
  const nextLevel = LEVELS.find((l) => l.minXp > level.minXp);
  if (!nextLevel) return { current: xp - level.minXp, next: 0, percent: 100 };
  const current = xp - level.minXp;
  const needed = nextLevel.minXp - level.minXp;
  return { current, next: needed, percent: Math.round((current / needed) * 100) };
}
