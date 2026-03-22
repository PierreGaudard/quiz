/** XP-based level system with 1000 levels. */

export interface LevelInfo {
  level: number;
  name: Record<string, string>;
  minXp: number;
  color: string;
}

/** Calculate XP needed for a given level (exponential curve). */
function xpForLevel(level: number): number {
  if (level <= 1) return 0;
  // Smooth curve: ~6 months non-stop to reach Lv1000
  // Lv2=220, Lv5=400, Lv10=1100, Lv50=24700, Lv100=99200, Lv1000=9990200
  return Math.floor(10 * level * level - 10 * level + 200);
}

/** Get the color class for a level tier. */
function getLevelColor(level: number): string {
  if (level >= 900) return "bg-gradient-to-r from-red-500 to-yellow-500"; // Mythic
  if (level >= 700) return "bg-gradient-to-r from-amber-400 to-orange-500"; // Legendary
  if (level >= 500) return "bg-gradient-to-r from-violet-500 to-pink-500"; // Epic
  if (level >= 300) return "bg-gradient-to-r from-blue-500 to-cyan-400"; // Diamond
  if (level >= 200) return "bg-violet-500"; // Platinum
  if (level >= 100) return "bg-amber-500"; // Gold
  if (level >= 50) return "bg-blue-500"; // Silver
  if (level >= 20) return "bg-teal-500"; // Bronze
  if (level >= 10) return "bg-green-500"; // Iron
  if (level >= 5) return "bg-emerald-500"; // Copper
  return "bg-gray-400"; // Starter
}

/** Get tier name for a level. */
function getTierName(level: number): Record<string, string> {
  if (level >= 900) return { en: "Mythic", fr: "Mythique", es: "Mitico" };
  if (level >= 700) return { en: "Legendary", fr: "Legendaire", es: "Legendario" };
  if (level >= 500) return { en: "Epic", fr: "Epique", es: "Epico" };
  if (level >= 300) return { en: "Diamond", fr: "Diamant", es: "Diamante" };
  if (level >= 200) return { en: "Platinum", fr: "Platine", es: "Platino" };
  if (level >= 100) return { en: "Gold", fr: "Or", es: "Oro" };
  if (level >= 50) return { en: "Silver", fr: "Argent", es: "Plata" };
  if (level >= 20) return { en: "Bronze", fr: "Bronze", es: "Bronce" };
  if (level >= 10) return { en: "Iron", fr: "Fer", es: "Hierro" };
  if (level >= 5) return { en: "Copper", fr: "Cuivre", es: "Cobre" };
  return { en: "Beginner", fr: "Debutant", es: "Principiante" };
}

/** Get level info from XP. */
export function getLevelFromXp(xp: number): LevelInfo {
  let level = 1;
  for (let i = 2; i <= 1000; i++) {
    if (xp >= xpForLevel(i)) level = i;
    else break;
  }
  return {
    level,
    name: getTierName(level),
    minXp: xpForLevel(level),
    color: getLevelColor(level),
  };
}

/** Get XP progress towards next level. */
export function getXpProgress(xp: number): { current: number; next: number; percent: number } {
  const levelInfo = getLevelFromXp(xp);
  const nextLevelXp = xpForLevel(levelInfo.level + 1);
  if (levelInfo.level >= 1000) return { current: 0, next: 0, percent: 100 };
  const current = xp - levelInfo.minXp;
  const needed = nextLevelXp - levelInfo.minXp;
  return { current, next: needed, percent: Math.min(100, Math.round((current / needed) * 100)) };
}

/** Get XP needed for a specific level (exported for display). */
export function getXpForLevel(level: number): number {
  return xpForLevel(level);
}
