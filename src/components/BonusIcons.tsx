/**
 * Icônes des bonus du player QCM. Pleines et en deux tons, comme des objets de
 * jeu, dessinées pour être posées en blanc sur la pastille de couleur du bonus.
 */
type P = { className?: string };

/** 50/50 : une pièce coupée en deux, la moitié des réponses qui saute. */
export function Icon5050({ className = "w-5 h-5" }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 2.6A9.5 9.5 0 0011 21.4z" fill="currentColor" />
      <path d="M13 2.6a9.5 9.5 0 010 18.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeDasharray="3 2.6" strokeLinecap="round" />
    </svg>
  );
}

/** Seconde chance : un cœur avec un « + », la vie en plus. */
export function IconSecondChance({ className = "w-5 h-5" }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20.5s-7.5-4.6-9.2-9.3C1.6 7.9 3.7 4.5 7 4.5c2 0 3.6 1.1 5 2.9 1.4-1.8 3-2.9 5-2.9 3.3 0 5.4 3.4 4.2 6.7-1.7 4.7-9.2 9.3-9.2 9.3z"
        fill="currentColor"
      />
      <path d="M12 9.5v6M9 12.5h6" stroke="var(--bonus-tile, #2563eb)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/** Indice : une ampoule allumée, avec ses rayons. */
export function IconHint({ className = "w-5 h-5" }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5.5a5.5 5.5 0 00-3.3 9.9c.5.4.8 1 .8 1.6v.5h5v-.5c0-.6.3-1.2.8-1.6A5.5 5.5 0 0012 5.5z" fill="currentColor" />
      <rect x="9.5" y="18.3" width="5" height="2.4" rx="1.2" fill="currentColor" opacity=".55" />
      <path d="M12 1.6v1.6M4.2 4.8l1.1 1.1M19.8 4.8l-1.1 1.1M2 11.5h1.6M20.4 11.5H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
