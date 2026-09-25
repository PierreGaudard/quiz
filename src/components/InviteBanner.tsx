import { useEffect, useState } from "react";

/**
 * Bandeau d'invitation à une partie entre amis, posé sur toutes les pages par
 * le Layout. Il interroge /api/room/invites au chargement, puis toutes les
 * 45 secondes tant que l'onglet est visible, et seulement si le joueur est
 * connecté (la première réponse le dit).
 */
const T: Record<string, Record<string, string>> = {
  invites: { en: "invites you to play", fr: "t'invite à jouer à", es: "te invita a jugar a" },
  join: { en: "Join", fr: "Rejoindre", es: "Unirme" },
  ignore: { en: "Ignore", fr: "Ignorer", es: "Ignorar" },
};
const ROOM_PATHS: Record<string, string> = { en: "/play-with-friends/", fr: "/fr/jouer-entre-amis/", es: "/es/jugar-con-amigos/" };
const POLL_MS = 45000;

interface Invite { id: number; code: string; from: string; quizTitle: string; locale: string }

export default function InviteBanner({ locale = "en" }: { locale?: string }) {
  const tt = (k: string) => T[k]?.[locale] || T[k]?.en || k;
  const [invite, setInvite] = useState<Invite | null>(null);

  useEffect(() => {
    let stop = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onRoomPage = Object.values(ROOM_PATHS).some((p) => window.location.pathname.startsWith(p));
    const load = async () => {
      if (stop) return;
      let loggedIn = false;
      if (document.visibilityState === "visible") {
        try {
          const d = await (await fetch("/api/room/invites")).json();
          loggedIn = !!d?.loggedIn;
          const next: Invite | undefined = (d?.invites || []).find((i: Invite) => !(onRoomPage && window.location.search.includes(i.code)));
          setInvite(next ?? null);
        } catch {}
      } else loggedIn = true;
      if (loggedIn && !stop) timer = setTimeout(load, POLL_MS);
    };
    load();
    return () => { stop = true; if (timer) clearTimeout(timer); };
  }, []);

  if (!invite) return null;

  const dismiss = () => {
    setInvite(null);
    fetch("/api/room/invites", { method: "POST", keepalive: true, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: invite.id }) }).catch(() => {});
  };
  const href = `${ROOM_PATHS[locale] ?? ROOM_PATHS.en}?code=${invite.code}`;

  return (
    <div role="status" className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-sm z-50 bg-white border border-line rounded-2xl shadow-lg p-4">
      <p className="text-sm text-gray-800">
        <strong>{invite.from}</strong> {tt("invites")} <strong>{invite.quizTitle}</strong>
      </p>
      <div className="flex gap-2 mt-3">
        <a href={href} onClick={dismiss} className="flex-1 text-center bg-brand hover:bg-brand-dark text-white font-semibold text-sm py-2.5 rounded-xl">
          {tt("join")}
        </a>
        <button onClick={dismiss} className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-semibold text-gray-700 cursor-pointer">
          {tt("ignore")}
        </button>
      </div>
    </div>
  );
}
