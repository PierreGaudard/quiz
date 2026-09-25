import { useEffect, useState } from "react";

/**
 * Dans la salle d'attente : la liste des amis du joueur connecté, avec un
 * bouton pour inviter chacun. Rien ne s'affiche sans compte ou sans ami.
 * L'invité voit l'invitation sur n'importe quelle page (InviteBanner).
 */
const T: Record<string, Record<string, string>> = {
  title: { en: "Invite a friend", fr: "Inviter un ami", es: "Invitar a un amigo" },
  invite: { en: "Invite", fr: "Inviter", es: "Invitar" },
  sent: { en: "Invited", fr: "Invité", es: "Invitado" },
  error: { en: "Could not send", fr: "Échec de l'envoi", es: "No se pudo enviar" },
  hint: {
    en: "The invitation shows up on their next visit to WizyQuiz.",
    fr: "L'invitation s'affiche à sa prochaine visite sur WizyQuiz.",
    es: "La invitación aparece en su próxima visita a WizyQuiz.",
  },
};

interface Friend { id: number; username: string; avatar?: string | null }

export default function RoomInvitePanel({ code, token, locale = "en" }: { code: string; token: string | null; locale?: string }) {
  const tt = (k: string) => T[k]?.[locale] || T[k]?.en || k;
  const [friends, setFriends] = useState<Friend[]>([]);
  const [state, setState] = useState<Record<number, "sent" | "error" | "busy">>({});

  useEffect(() => {
    fetch("/api/friends")
      .then((r) => r.json())
      .then((d) => setFriends(Array.isArray(d?.friends) ? d.friends : []))
      .catch(() => {});
  }, []);

  if (!token || friends.length === 0) return null;

  const invite = async (id: number) => {
    setState((s) => ({ ...s, [id]: "busy" }));
    try {
      const res = await fetch(`/api/room/${code}/invite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, friendId: id }),
      });
      setState((s) => ({ ...s, [id]: res.ok ? "sent" : "error" }));
    } catch {
      setState((s) => ({ ...s, [id]: "error" }));
    }
  };

  return (
    <div className="mt-5 pt-4 border-t border-gray-100">
      <h3 className="first-letter:uppercase text-xs font-bold text-gray-500 mb-1">{tt("title")}</h3>
      <p className="text-xs text-gray-500 mb-3">{tt("hint")}</p>
      <ul className="space-y-2">
        {friends.map((f) => {
          const st = state[f.id];
          return (
            <li key={f.id} className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-sm font-bold text-brand-700 shrink-0 overflow-hidden">
                {f.avatar ? <img src={f.avatar} alt="" className="w-full h-full object-cover" /> : f.username[0]?.toUpperCase()}
              </span>
              <span className="flex-1 min-w-0 truncate text-sm font-semibold text-gray-800">{f.username}</span>
              <button
                onClick={() => invite(f.id)}
                disabled={st === "busy" || st === "sent"}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  st === "sent" ? "bg-green-50 text-green-800" : st === "error" ? "bg-red-50 text-red-700" : "bg-brand text-white hover:bg-brand-dark"
                }`}
              >
                {st === "sent" ? tt("sent") : st === "error" ? tt("error") : tt("invite")}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
