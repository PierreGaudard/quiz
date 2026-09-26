/**
 * Mesure d'audience cote navigateur (route /api/t, src/lib/analytics.ts).
 *
 * Pas de cookie : un identifiant de visiteur aleatoire dans le stockage
 * local (renouvele au bout de 13 mois) et un identifiant de session par
 * onglet. Rien ne part si le visiteur s'y est oppose depuis la page cookies
 * (`wq-noanalytics`) ou si son navigateur envoie le signal Global Privacy
 * Control.
 *
 * Une partie coute deux ecritures en base, pas vingt : le debut, puis la fin
 * (ou l'abandon) avec le detail des reponses dans `extra`.
 */

const VID_KEY = "wq-vid";
const SID_KEY = "wq-sid";
const OPTOUT_KEY = "wq-noanalytics";
const VID_MAX_AGE = 395 * 24 * 3600 * 1000;

function rid(): string {
  const a = new Uint8Array(12);
  crypto.getRandomValues(a);
  return Array.from(a, (b) => b.toString(36).padStart(2, "0")).join("").slice(0, 20);
}

export function analyticsOptedOut(): boolean {
  try {
    if ((navigator as any).globalPrivacyControl) return true;
    return localStorage.getItem(OPTOUT_KEY) === "1";
  } catch {
    return false;
  }
}

export function setAnalyticsOptOut(out: boolean): void {
  try {
    if (out) {
      localStorage.setItem(OPTOUT_KEY, "1");
      localStorage.removeItem(VID_KEY);
    } else localStorage.removeItem(OPTOUT_KEY);
  } catch {}
}

function visitorId(): string | null {
  try {
    const raw = localStorage.getItem(VID_KEY);
    if (raw) {
      const [id, at] = raw.split(".");
      if (id && Date.now() - Number(at) < VID_MAX_AGE) return id;
    }
    const id = rid();
    localStorage.setItem(VID_KEY, `${id}.${Date.now()}`);
    return id;
  } catch {
    return null;
  }
}

function sessionId(): string | null {
  try {
    let id = sessionStorage.getItem(SID_KEY);
    if (!id) {
      id = rid();
      sessionStorage.setItem(SID_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}

export interface TrackFields {
  /** Slug du quiz (de page ou de quiz joueur). */
  q?: string;
  /** Quiz cree par un joueur. */
  custom?: boolean;
  m?: string;
  n?: number;
  tot?: number;
  d?: number;
  x?: Record<string, unknown>;
}

function send(payload: Record<string, unknown>): void {
  const body = JSON.stringify(payload);
  try {
    if (navigator.sendBeacon && navigator.sendBeacon("/api/t", body)) return;
  } catch {}
  try {
    fetch("/api/t", { method: "POST", body, keepalive: true, headers: { "Content-Type": "text/plain" } }).catch(() => {});
  } catch {}
}

export function track(type: string, fields: TrackFields = {}, extraBase: Record<string, unknown> = {}): void {
  if (typeof window === "undefined" || analyticsOptedOut()) return;
  send({ t: type, v: visitorId(), s: sessionId(), p: location.pathname, ...extraBase, ...fields });
}

/** Page vue, avec la provenance et les UTM. Appele une fois par page, depuis le Layout. */
export function trackPageView(): void {
  if (typeof window === "undefined" || analyticsOptedOut()) return;
  if (location.pathname.startsWith("/admin")) return;
  const params = new URLSearchParams(location.search);
  track("page_view", {}, {
    r: document.referrer || null,
    sw: window.screen?.width || null,
    l: navigator.language || null,
    us: params.get("utm_source"),
    um: params.get("utm_medium"),
    uc: params.get("utm_campaign"),
  });
  // Partages, reperes au libelle du bouton dans les trois langues : un
  // attribut par bouton aurait demande de toucher chaque lecteur.
  document.addEventListener("click", (e) => {
    const el = (e.target as Element | null)?.closest?.("button, a");
    const label = (el?.textContent || el?.getAttribute("aria-label") || "").trim();
    if (/^(Partager|Share|Compartir|Copier le lien|Copy the link|Copiar el enlace)/i.test(label)) {
      track("share", { x: { label: label.slice(0, 40) } });
    }
  }, { capture: true });
  // Temps passe sur la page, onglet visible seulement.
  let visibleMs = 0;
  let since = document.visibilityState === "visible" ? performance.now() : 0;
  let sent = false;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      if (since) visibleMs += performance.now() - since;
      since = 0;
    } else since = performance.now();
  });
  window.addEventListener("pagehide", () => {
    if (sent) return;
    sent = true;
    if (since) visibleMs += performance.now() - since;
    track("page_leave", { d: Math.round(visibleMs) });
  });
}

interface ActiveGame {
  slug: string;
  custom: boolean;
  start: number;
  answers: number[];
  ended: boolean;
}
let active: ActiveGame | null = null;
let abandonHooked = false;

function hookAbandon(): void {
  if (abandonHooked || typeof window === "undefined") return;
  abandonHooked = true;
  window.addEventListener("pagehide", () => {
    if (!active || active.ended) return;
    active.ended = true;
    track("quiz_abandon", {
      q: active.slug,
      custom: active.custom,
      n: active.answers.length,
      d: Date.now() - active.start,
      x: { a: active.answers.join("") },
    });
  });
}

/**
 * Partie commencee. Appele par les six lecteurs au lancement d'une partie
 * (et a chaque « rejouer »). Alimente aussi le compteur historique
 * quiz_starts (/api/quiz/start).
 */
export function trackQuizStart(quizSlug: string, opts: { custom?: boolean } = {}): void {
  const replay = !!active && active.slug === quizSlug && active.ended;
  active = { slug: quizSlug, custom: !!opts.custom, start: Date.now(), answers: [], ended: false };
  hookAbandon();
  track("quiz_start", { q: quizSlug, custom: opts.custom, x: replay ? { replay: 1 } : undefined });
  if (opts.custom) return;
  try {
    fetch("/api/quiz/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quizSlug }),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}

/** Une reponse donnee dans la partie en cours. Rien ne part : c'est envoye avec la fin ou l'abandon. */
export function trackAnswer(correct: boolean): void {
  if (active && !active.ended) active.answers.push(correct ? 1 : 0);
}

/** Partie terminee (ecran de resultat). */
export function trackQuizEnd(quizSlug: string, score: number, total?: number | null): void {
  const game = active && active.slug === quizSlug && !active.ended ? active : null;
  if (game) game.ended = true;
  track("quiz_end", {
    q: quizSlug,
    custom: game?.custom,
    n: Math.round(score),
    tot: total ?? undefined,
    d: game ? Date.now() - game.start : undefined,
    x: game && game.answers.length ? { a: game.answers.join("") } : undefined,
  });
}
