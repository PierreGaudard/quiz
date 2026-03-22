import { useState, useEffect } from "react";

interface FriendScore {
  id: number;
  username: string;
  avatar: string | null;
  bestScore: number | null;
  totalQuestions: number | null;
}

interface QuizSocialBlockProps {
  quizSlug: string;
  userScore: number;
  totalQuestions: number;
  locale?: string;
}

const socialT: Record<string, Record<string, string>> = {
  ranking: { en: "Your ranking", fr: "Votre classement", es: "Tu clasificacion" },
  friendsScores: { en: "Friends' scores", fr: "Scores des amis", es: "Puntuaciones de amigos" },
  notPlayed: { en: "Not played", fr: "Non joue", es: "No jugado" },
  noFriends: { en: "Add friends to compare scores!", fr: "Ajoutez des amis pour comparer !", es: "Agrega amigos para comparar!" },
};

export default function QuizSocialBlock({ quizSlug, userScore, totalQuestions, locale = "en" }: QuizSocialBlockProps) {
  const [rank, setRank] = useState<{ rank: number; total: number } | null>(null);
  const [friends, setFriends] = useState<FriendScore[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const tt = (key: string) => socialT[key]?.[locale] || socialT[key]?.en || key;

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        const meRes = await fetch("/api/auth/me");
        const meData = await meRes.json();
        if (!meData.user || cancelled) { setLoading(false); return; }
        setIsLoggedIn(true);

        const [rankRes, friendsRes] = await Promise.all([
          fetch("/api/auth/rank"),
          fetch("/api/friends"),
        ]);
        const rankData = await rankRes.json();
        const friendsData = await friendsRes.json();
        if (cancelled) return;
        if (rankData?.rank) setRank(rankData);

        const friendsList = (friendsData.friends || []).slice(0, 5);
        const friendScores: FriendScore[] = await Promise.all(
          friendsList.map(async (f: any) => {
            try {
              const res = await fetch(`/api/quiz/progress?quiz=${encodeURIComponent(quizSlug)}&user=${f.id}`);
              const data = await res.json();
              const allAttempts = data.progress || [];
              const bestAttempt = allAttempts.reduce(
                (best: any, curr: any) => (!best || curr.score > best.score ? curr : best),
                null
              );
              return {
                id: f.id,
                username: f.username,
                avatar: f.avatar,
                bestScore: bestAttempt?.score ?? null,
                totalQuestions: bestAttempt?.total_questions ?? null,
              };
            } catch {
              return { id: f.id, username: f.username, avatar: f.avatar, bestScore: null, totalQuestions: null };
            }
          })
        );
        if (!cancelled) {
          setFriends(friendScores);
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => { cancelled = true; };
  }, [quizSlug]);

  if (loading || !isLoggedIn) return null;

  const leaderboardHref = locale === "fr" ? "/fr/classement/" : locale === "es" ? "/es/clasificacion/" : "/leaderboard/";

  return (
    <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {rank && (
        <a
          href={leaderboardHref}
          className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-violet-50 to-purple-50 border-b border-gray-100 hover:from-violet-100 hover:to-purple-100 transition-colors"
        >
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500 font-medium">{tt("ranking")}</p>
            <p className="text-sm font-bold text-gray-900">
              #{rank.rank} <span className="text-gray-400 font-normal">/ {rank.total}</span>
            </p>
          </div>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}

      {friends.length > 0 ? (
        <div className="px-4 py-3">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{tt("friendsScores")}</p>
          <div className="space-y-2">
            {friends.map((friend) => (
              <div key={friend.id} className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center overflow-hidden shrink-0">
                  {friend.avatar ? (
                    <img src={friend.avatar} className="w-full h-full object-cover" alt="" />
                  ) : (
                    <span className="text-xs font-bold text-violet-600">{friend.username[0].toUpperCase()}</span>
                  )}
                </div>
                <span className="flex-1 text-sm font-medium text-gray-700 truncate">{friend.username}</span>
                {friend.bestScore !== null ? (
                  <span
                    className={`text-sm font-bold ${
                      friend.bestScore > userScore
                        ? "text-red-500"
                        : friend.bestScore < userScore
                          ? "text-green-600"
                          : "text-amber-500"
                    }`}
                  >
                    {friend.bestScore}/{friend.totalQuestions}
                  </span>
                ) : (
                  <span className="text-xs text-gray-400 italic">{tt("notPlayed")}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="px-4 py-3 text-center">
          <p className="text-xs text-gray-400">{tt("noFriends")}</p>
        </div>
      )}
    </div>
  );
}
