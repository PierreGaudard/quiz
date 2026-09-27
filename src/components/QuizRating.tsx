import { useEffect, useState } from "react";
import AuthModal from "./AuthModal";
import { track } from "../utils/track";

/**
 * La note du quiz, de 1 a 5, sous l'ecran de resultat.
 *
 * Voter demande un compte. Un joueur sans session qui clique sur une etoile
 * voit s'ouvrir une fenetre d'inscription (ou de connexion) sur place : le
 * resultat de sa partie ne vit que dans l'etat React, l'envoyer sur la page
 * d'inscription le lui ferait perdre. Une fois le compte cree, la note
 * choisie part toute seule.
 */

interface Props {
  quizSlug: string;
  locale?: string;
}

interface Rating {
  count: number;
  average: number | null;
  mine: number | null;
  loggedIn: boolean;
}

type Lang = "en" | "fr" | "es";

const T: Record<string, Record<Lang, string>> = {
  title: { en: "Did you like this quiz?", fr: "Ce quiz vous a plu ?", es: "¿Te ha gustado este quiz?" },
  star: { en: "Rate {n} out of 5", fr: "Donner {n} sur 5", es: "Dar {n} de 5" },
  votes: { en: "{n} votes", fr: "{n} votes", es: "{n} votos" },
  vote: { en: "1 vote", fr: "1 vote", es: "1 voto" },
  none: { en: "No votes yet. Be the first!", fr: "Pas encore de vote. Soyez le premier !", es: "Todavía no hay votos. ¡Sé el primero!" },
  thanks: {
    en: "Thanks! You gave it {n}/5. Click another star to change your vote.",
    fr: "Merci ! Vous lui avez donné {n}/5. Cliquez sur une autre étoile pour changer votre note.",
    es: "¡Gracias! Le has dado {n}/5. Pulsa otra estrella para cambiar tu voto.",
  },
  loginToVote: { en: "Voting requires a free account.", fr: "Le vote demande un compte gratuit.", es: "Para votar necesitas una cuenta gratuita." },
  signupCta: { en: "Create my account and vote", fr: "Créer mon compte et voter", es: "Crear mi cuenta y votar" },
  loginCta: { en: "Log in and vote", fr: "Me connecter et voter", es: "Iniciar sesión y votar" },
  error: { en: "Your vote couldn't be saved. Try again.", fr: "Votre note n'a pas pu être enregistrée. Réessayez.", es: "No se ha podido guardar tu voto. Inténtalo de nuevo." },
  // Fenetre d'inscription
  modalTitle: { en: "Sign up to vote", fr: "Inscrivez-vous pour voter", es: "Regístrate para votar" },
  modalLoginTitle: { en: "Log in to vote", fr: "Connectez-vous pour voter", es: "Inicia sesión para votar" },
  modalText: {
    en: "Your {n}/5 will be saved as soon as you're in. It takes 20 seconds, and your results, XP and friends come with it.",
    fr: "Votre {n}/5 sera enregistré dès que vous serez connecté. C'est gratuit, ça prend 20 secondes, et vos résultats, votre XP et vos amis vous suivent.",
    es: "Tu {n}/5 se guardará en cuanto entres. Es gratis, tarda 20 segundos y te llevas tus resultados, tu XP y tus amigos.",
  },
};

const NUMBER_LOCALE: Record<Lang, string> = { en: "en-US", fr: "fr-FR", es: "es-ES" };

function StarIcon({ filled, className = "" }: { filled: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"
        fill={filled ? "#ffd84d" : "none"}
        stroke={filled ? "#1a0e42" : "#9ca3af"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function QuizRating({ quizSlug, locale = "en" }: Props) {
  const lang: Lang = locale === "fr" || locale === "es" ? locale : "en";
  const tt = (key: string) => T[key]?.[lang] ?? key;
  const nf = (n: number, digits = 0) =>
    n.toLocaleString(NUMBER_LOCALE[lang], { maximumFractionDigits: digits, minimumFractionDigits: digits });

  const [rating, setRating] = useState<Rating | null>(null);
  const [hover, setHover] = useState(0);
  const [pending, setPending] = useState<number | null>(null);
  const [justVoted, setJustVoted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/quiz/rating?quiz=${encodeURIComponent(quizSlug)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (!cancelled && d?.rating) setRating(d.rating); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [quizSlug]);

  async function send(value: number): Promise<"ok" | "auth" | "error"> {
    try {
      const r = await fetch("/api/quiz/rating", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizSlug, rating: value }),
      });
      if (r.status === 401) return "auth";
      if (!r.ok) return "error";
      const d = await r.json();
      if (d?.rating) setRating(d.rating);
      return "ok";
    } catch {
      return "error";
    }
  }

  async function vote(value: number) {
    setError(false);
    if (!rating?.loggedIn) { setPending(value); track("signup_prompt", { q: quizSlug, n: value, x: { from: "rating" } }); return; }
    const res = await send(value);
    if (res === "auth") { setPending(value); return; }
    if (res === "error") { setError(true); return; }
    setJustVoted(true);
  }

  async function onAuthenticated() {
    const value = pending;
    setPending(null);
    if (value === null) return;
    const res = await send(value);
    if (res === "ok") setJustVoted(true);
    else setError(true);
  }

  // La route ne repond pas (base absente) : pas de bloc plutot qu'un vote qui echoue.
  if (!rating) return null;

  const shown = hover || rating.mine || 0;

  return (
    <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-4">
      <p className="text-sm font-bold text-gray-900 mb-2">{tt("title")}</p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => vote(n)}
              onMouseEnter={() => setHover(n)}
              onFocus={() => setHover(n)}
              onBlur={() => setHover(0)}
              aria-label={tt("star").replace("{n}", String(n))}
              aria-pressed={rating.mine === n}
              className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <StarIcon filled={n <= shown} className="w-8 h-8" />
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          {rating.count > 0 && rating.average !== null ? (
            <>
              <span className="font-bold text-gray-900">{nf(rating.average, 1)} / 5</span>
              {" · "}
              {rating.count === 1 ? tt("vote") : tt("votes").replace("{n}", nf(rating.count))}
            </>
          ) : (
            tt("none")
          )}
        </p>
      </div>
      {justVoted && rating.mine ? (
        <p className="text-sm text-green-700 mt-2" role="status">{tt("thanks").replace("{n}", String(rating.mine))}</p>
      ) : !rating.loggedIn ? (
        <p className="text-xs text-gray-500 mt-2">{tt("loginToVote")}</p>
      ) : null}
      {error && <p className="text-sm text-red-700 mt-2" role="alert">{tt("error")}</p>}

      {pending !== null && (
        <AuthModal
          lang={lang}
          title={tt("modalTitle")}
          loginTitle={tt("modalLoginTitle")}
          text={tt("modalText").replace("{n}", String(pending))}
          signupCta={tt("signupCta")}
          loginCta={tt("loginCta")}
          header={
            <div className="flex items-center gap-0.5 mb-3" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((n) => <StarIcon key={n} filled={n <= pending} className="w-6 h-6" />)}
            </div>
          }
          onClose={() => setPending(null)}
          onAuthenticated={onAuthenticated}
        />
      )}
    </div>
  );
}
