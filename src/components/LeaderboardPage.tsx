import { useState, useEffect } from "react";
import { getLevelFromXp } from "../lib/levels";

interface Player {
  id: number;
  username: string;
  xp: number;
  avatar: string | null;
  quiz_count: number;
}

const t: Record<string, Record<string, string>> = {
  title: { en: "Leaderboard", fr: "Classement", es: "Clasificacion" },
  subtitle: { en: "The best quizzers on Wizy", fr: "Les meilleurs quizzeurs sur Wizy", es: "Los mejores quizzeros en Wizy" },
  rank: { en: "Rank", fr: "Rang", es: "Rango" },
  player: { en: "Player", fr: "Joueur", es: "Jugador" },
  level: { en: "Level", fr: "Niveau", es: "Nivel" },
  xp: { en: "XP", fr: "XP", es: "XP" },
  quizzes: { en: "Quizzes", fr: "Quiz", es: "Quizzes" },
  noPlayers: { en: "No players yet. Be the first!", fr: "Aucun joueur pour le moment. Sois le premier !", es: "Ningun jugador todavia. Se el primero!" },
  loading: { en: "Loading...", fr: "Chargement...", es: "Cargando..." },
  viewProfile: { en: "View profile", fr: "Voir le profil", es: "Ver perfil" },
  joinCta: { en: "Want to join the leaderboard?", fr: "Tu veux rejoindre le classement ?", es: "Quieres unirte al ranking?" },
  joinDesc: { en: "Play quizzes, earn XP and compete with other players. It's free.", fr: "Joue aux quiz, gagne des XP et affronte d'autres joueurs. C'est gratuit.", es: "Juega quizzes, gana XP y compite con otros jugadores. Es gratis." },
  startPlaying: { en: "Start playing now", fr: "Commencer a jouer", es: "Empezar a jugar" },
};

function formatXp(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return n.toString();
}

const RANK_STYLES: Record<number, { border: string; bg: string; badge: string; text: string }> = {
  1: { border: "border-yellow-400", bg: "bg-gradient-to-r from-yellow-400/10 to-yellow-500/5", badge: "bg-yellow-400 text-yellow-900", text: "text-yellow-500" },
  2: { border: "border-gray-300", bg: "bg-gradient-to-r from-gray-200/20 to-gray-300/10", badge: "bg-gray-300 text-gray-700", text: "text-gray-400" },
  3: { border: "border-amber-600", bg: "bg-gradient-to-r from-amber-600/10 to-amber-700/5", badge: "bg-amber-600 text-white", text: "text-amber-600" },
};

export default function LeaderboardPage({ locale = "en" }: { locale?: string }) {
  const tt = (key: string) => t[key]?.[locale] || t[key]?.en || key;
  const profileBase = locale === "fr" ? "/fr/profil" : locale === "es" ? "/es/perfil" : "/profile";

  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leaderboard?limit=100")
      .then((r) => r.json())
      .then((data) => { setPlayers(data.players || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-20 text-gray-400">{tt("loading")}</div>;

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1a0e42] via-[#2d1b69] to-[#1a0e42] pt-12 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-widest">{tt("title")}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-4">{tt("title")}</h1>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">{tt("subtitle")}</p>
        </div>
      </section>

      {players.length === 0 ? (
        <div className="text-center py-16 text-gray-400">{tt("noPlayers")}</div>
      ) : (
        <>
          {/* Top 3 podium */}
          <section className="max-w-4xl mx-auto px-4 pt-10 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {players.slice(0, 3).map((player, i) => {
                const rank = i + 1;
                const style = RANK_STYLES[rank]!;
                const isFirst = rank === 1;
                const lv = getLevelFromXp(player.xp || 0);
                return (
                  <a key={player.id} href={`${profileBase}/${player.username}/`}
                    className={`relative rounded-2xl border-2 ${style.border} ${style.bg} p-6 text-center ${isFirst ? "md:-mt-4 md:pb-8" : ""} transition-all hover:shadow-lg hover:-translate-y-1 block`}>
                    {isFirst && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <svg className="w-8 h-8 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
                      </div>
                    )}
                    <div className={`${isFirst ? "w-20 h-20" : "w-16 h-16"} mx-auto rounded-full overflow-hidden flex items-center justify-center mb-3 shadow-lg border-2 ${style.border} bg-violet-100`}>
                      {player.avatar ? (
                        <img src={player.avatar} alt={player.username} width={40} height={40} className="w-full h-full object-cover" />
                      ) : (
                        <span className={`${isFirst ? "text-3xl" : "text-2xl"} font-black text-violet-500`}>{player.username[0].toUpperCase()}</span>
                      )}
                    </div>
                    <span className={`inline-block text-xs font-black ${style.badge} px-3 py-1 rounded-full mb-2`}>#{rank}</span>
                    <h3 className="font-display font-bold text-gray-900 text-base mb-1">{player.username}</h3>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${lv.color}`}>Lv.{lv.level}</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm">
                      <div>
                        <p className={`font-black text-lg ${style.text}`}>{formatXp(player.xp)}</p>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase">{tt("xp")}</p>
                      </div>
                      <div className="w-px h-8 bg-gray-200"></div>
                      <div>
                        <p className="font-black text-lg text-gray-700">{player.quiz_count}</p>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase">{tt("quizzes")}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          {/* Full leaderboard */}
          {players.length > 3 && (
            <section className="max-w-4xl mx-auto px-4 pb-16">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="grid grid-cols-[50px_1fr_80px_80px_80px] md:grid-cols-[80px_1fr_120px_120px_120px] items-center px-4 md:px-6 py-3 bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>{tt("rank")}</span>
                  <span>{tt("player")}</span>
                  <span className="text-center">{tt("level")}</span>
                  <span className="text-center">{tt("xp")}</span>
                  <span className="text-center hidden md:block">{tt("quizzes")}</span>
                </div>
                {players.slice(3).map((player, i) => {
                  const rank = i + 4;
                  const lv = getLevelFromXp(player.xp || 0);
                  return (
                    <a key={player.id} href={`${profileBase}/${player.username}/`}
                      className={`grid grid-cols-[50px_1fr_80px_80px_80px] md:grid-cols-[80px_1fr_120px_120px_120px] items-center px-4 md:px-6 py-3.5 border-b border-gray-50 hover:bg-violet-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}>
                      <span className="text-sm font-black text-gray-300">#{rank}</span>
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-violet-100 flex items-center justify-center shrink-0">
                          {player.avatar ? (
                            <img src={player.avatar} alt={player.username} width={40} height={40} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-sm font-bold text-violet-500">{player.username[0].toUpperCase()}</span>
                          )}
                        </div>
                        <span className="text-sm font-bold text-gray-900 truncate">{player.username}</span>
                      </div>
                      <div className="text-center">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${lv.color}`}>Lv.{lv.level}</span>
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-black text-gray-700">{formatXp(player.xp)}</span>
                      </div>
                      <div className="text-center hidden md:block">
                        <span className="text-sm font-semibold text-gray-500">{player.quiz_count}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
          )}
        </>
      )}

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a0e42] to-[#5D2DC7] p-8 md:p-12 text-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
          <div className="relative space-y-4">
            <svg className="w-10 h-10 text-yellow-400 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
            <h2 className="font-display text-2xl md:text-3xl font-black text-white">{tt("joinCta")}</h2>
            <p className="text-white/50 text-sm max-w-md mx-auto">{tt("joinDesc")}</p>
            <a href={locale === "en" ? "/" : `/${locale}/`} className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors shadow-lg">{tt("startPlaying")}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
