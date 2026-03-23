import { useState, useEffect } from "react";
import { getLevelFromXp } from "../lib/levels";

interface Friend { id: number; username: string; xp: number; avatar: string | null; }
interface FriendRequest { friendship_id: number; id: number; username: string; avatar: string | null; }

const t: Record<string, Record<string, string>> = {
  friends: { en: "Friends", fr: "Amis", es: "Amigos" },
  addFriend: { en: "Add a friend", fr: "Ajouter un ami", es: "Agregar amigo" },
  search: { en: "Search username...", fr: "Rechercher un pseudo...", es: "Buscar usuario..." },
  send: { en: "Add", fr: "Ajouter", es: "Agregar" },
  sent: { en: "Sent!", fr: "Envoye !", es: "Enviado!" },
  requests: { en: "Friend Requests", fr: "Demandes d'amis", es: "Solicitudes" },
  accept: { en: "Accept", fr: "Accepter", es: "Aceptar" },
  decline: { en: "Decline", fr: "Refuser", es: "Rechazar" },
  noFriends: { en: "No friends yet", fr: "Pas encore d'amis", es: "Sin amigos todavia" },
  pending: { en: "Pending", fr: "En attente", es: "Pendiente" },
  level: { en: "Lv.", fr: "Nv.", es: "Nv." },
};

export default function FriendsSidebar({ locale = "en" }: { locale?: string }) {
  const tt = (key: string) => t[key]?.[locale] || t[key]?.en || key;

  const [friends, setFriends] = useState<Friend[]>([]);
  const [requests, setRequests] = useState<FriendRequest[]>([]);
  const [pending, setPending] = useState<any[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Friend[]>([]);
  const [sentTo, setSentTo] = useState<Set<number>>(new Set());

  const loadFriends = () => {
    fetch("/api/friends").then((r) => r.json()).then((data) => {
      setFriends(data.friends || []);
      setRequests(data.requests || []);
      setPending(data.pending || []);
    });
  };

  useEffect(() => { loadFriends(); }, []);

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    if (q.length < 2) { setSearchResults([]); return; }
    fetch("/api/friends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "search", username: q }),
    }).then((r) => r.json()).then((data) => setSearchResults(data.users || []));
  };

  const sendRequest = (username: string, userId: number) => {
    fetch("/api/friends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "send", username }),
    }).then((r) => r.json()).then((data) => {
      if (data.ok) setSentTo((s) => new Set(s).add(userId));
    });
  };

  const acceptRequest = (friendshipId: number) => {
    fetch("/api/friends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "accept", friendshipId }),
    }).then(() => loadFriends());
  };

  const declineRequest = (friendshipId: number) => {
    fetch("/api/friends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "decline", friendshipId }),
    }).then(() => loadFriends());
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-4 py-3 flex items-center justify-between">
        <h3 className="font-display font-bold text-white text-sm">{tt("friends")} ({friends.length})</h3>
        <button onClick={() => setShowAdd(!showAdd)} className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>

      {/* Add friend */}
      {showAdd && (
        <div className="p-3 border-b border-gray-100 space-y-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={tt("search")}
            className="w-full h-9 px-3 rounded-lg border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          {searchResults.length > 0 && (
            <div className="space-y-1">
              {searchResults.map((u) => (
                <div key={u.id} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                  <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-xs font-bold overflow-hidden">
                    {u.avatar ? <img src={u.avatar} alt={u.username} width={40} height={40} className="w-full h-full object-cover" /> : u.username[0].toUpperCase()}
                  </div>
                  <span className="text-xs font-medium text-gray-900 flex-1 truncate">{u.username}</span>
                  {sentTo.has(u.id) ? (
                    <span className="text-[10px] text-green-600 font-bold">{tt("sent")}</span>
                  ) : (
                    <button onClick={() => sendRequest(u.username, u.id)} className="text-[10px] font-bold text-violet-600 hover:text-violet-800 cursor-pointer">{tt("send")}</button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Pending requests */}
      {requests.length > 0 && (
        <div className="p-3 border-b border-gray-100">
          <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-2">{tt("requests")} ({requests.length})</p>
          <div className="space-y-1.5">
            {requests.map((r) => (
              <div key={r.friendship_id} className="flex items-center gap-2 p-2 rounded-lg bg-amber-50 border border-amber-100">
                <div className="w-7 h-7 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 text-xs font-bold overflow-hidden">
                  {r.avatar ? <img src={r.avatar} alt={r.username} width={40} height={40} className="w-full h-full object-cover" /> : r.username[0].toUpperCase()}
                </div>
                <span className="text-xs font-medium text-gray-900 flex-1 truncate">{r.username}</span>
                <button onClick={() => acceptRequest(r.friendship_id)} className="text-[10px] font-bold text-green-600 hover:text-green-800 cursor-pointer">{tt("accept")}</button>
                <button onClick={() => declineRequest(r.friendship_id)} className="text-[10px] font-bold text-red-500 hover:text-red-700 cursor-pointer">{tt("decline")}</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Friends list */}
      <div className="p-3">
        {friends.length === 0 ? (
          <p className="text-xs text-gray-400 text-center py-3">{tt("noFriends")}</p>
        ) : (
          <div className="space-y-1">
            {friends.sort((a, b) => (b.xp || 0) - (a.xp || 0)).map((f) => {
              const lv = getLevelFromXp(f.xp || 0);
              const profileHref = locale === "fr" ? `/fr/profil/${f.username}/` : locale === "es" ? `/es/perfil/${f.username}/` : `/profile/${f.username}/`;
              return (
                <a key={f.id} href={profileHref} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors block">
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-xs font-bold overflow-hidden">
                    {f.avatar ? <img src={f.avatar} alt={f.username} width={40} height={40} className="w-full h-full object-cover" /> : f.username[0].toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-900 truncate">{f.username}</p>
                    <p className="text-[10px] text-gray-400">{f.xp || 0} XP</p>
                  </div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded text-white ${lv.color}`}>
                    {tt("level")}{lv.level}
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
