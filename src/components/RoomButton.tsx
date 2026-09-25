/**
 * Lien « Jouer entre amis » posé à côté du bouton de départ d'un quiz. La page
 * du quiz calcule `href` (null si le mode ne se joue pas en salle, cf.
 * isRoomEligible) : le lien ouvre la page des parties entre amis avec ce quiz
 * déjà choisi.
 */
const LABEL: Record<string, string> = { en: "Play with friends", fr: "Jouer entre amis", es: "Jugar con amigos" };

export default function RoomButton({ href, locale = "en" }: { href?: string | null; locale?: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      className="sm:w-auto w-full flex items-center justify-center gap-2 bg-white border-2 border-brand text-brand-700 hover:bg-brand-50 font-semibold text-base py-3.5 px-6 rounded-xl transition-colors"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {LABEL[locale] ?? LABEL.en}
    </a>
  );
}
