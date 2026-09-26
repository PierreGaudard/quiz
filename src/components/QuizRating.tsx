import { useEffect, useRef, useState } from "react";
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
  error: { en: "Your vote couldn't be saved. Try again.", fr: "Votre note n'a pas pu être enregistrée. Réessayez.", es: "No se ha podido guardar tu voto. Inténtalo de nuevo." },
  // Fenetre d'inscription
  modalTitle: { en: "Sign up to vote", fr: "Inscrivez-vous pour voter", es: "Regístrate para votar" },
  modalLoginTitle: { en: "Log in to vote", fr: "Connectez-vous pour voter", es: "Inicia sesión para votar" },
  modalText: {
    en: "Your {n}/5 will be saved as soon as you're in. It takes 20 seconds, and your results, XP and friends come with it.",
    fr: "Votre {n}/5 sera enregistré dès que vous serez connecté. C'est gratuit, ça prend 20 secondes, et vos résultats, votre XP et vos amis vous suivent.",
    es: "Tu {n}/5 se guardará en cuanto entres. Es gratis, tarda 20 segundos y te llevas tus resultados, tu XP y tus amigos.",
  },
  close: { en: "Close", fr: "Fermer", es: "Cerrar" },
  username: { en: "Username", fr: "Nom d'utilisateur", es: "Nombre de usuario" },
  email: { en: "Email", fr: "Adresse e-mail", es: "Correo electrónico" },
  emailOrUsername: { en: "Email or username", fr: "E-mail ou nom d'utilisateur", es: "Correo o nombre de usuario" },
  password: { en: "Password", fr: "Mot de passe", es: "Contraseña" },
  passwordHint: {
    en: "At least 8 characters, mixing 3 kinds: lowercase, uppercase, digits or symbols.",
    fr: "Au moins 8 caractères, en mêlant 3 types : minuscules, majuscules, chiffres ou symboles.",
    es: "Al menos 8 caracteres, mezclando 3 tipos: minúsculas, mayúsculas, números o símbolos.",
  },
  captcha: { en: "What is {a} + {b}?", fr: "Combien font {a} + {b} ?", es: "¿Cuánto es {a} + {b}?" },
  captchaWrong: { en: "Wrong answer to the sum.", fr: "Mauvaise réponse au calcul.", es: "Respuesta incorrecta a la suma." },
  signupCta: { en: "Create my account and vote", fr: "Créer mon compte et voter", es: "Crear mi cuenta y votar" },
  loginCta: { en: "Log in and vote", fr: "Me connecter et voter", es: "Iniciar sesión y votar" },
  hasAccount: { en: "Already have an account?", fr: "Déjà un compte ?", es: "¿Ya tienes cuenta?" },
  noAccount: { en: "No account yet?", fr: "Pas encore de compte ?", es: "¿Aún no tienes cuenta?" },
  toLogin: { en: "Log in", fr: "Se connecter", es: "Iniciar sesión" },
  toSignup: { en: "Sign up", fr: "S'inscrire", es: "Registrarse" },
  forgot: { en: "Forgot your password?", fr: "Mot de passe oublié ?", es: "¿Has olvidado tu contraseña?" },
  legal: {
    en: "By creating an account, you accept the {terms} and confirm you are 15 or have a parent's consent. See the {privacy}.",
    fr: "En créant un compte, vous acceptez les {terms} et confirmez avoir 15 ans ou l'accord d'un parent. Voir la {privacy}.",
    es: "Al crear una cuenta, aceptas las {terms} y confirmas que tienes 15 años o el permiso de tus padres. Consulta la {privacy}.",
  },
  terms: { en: "terms of use", fr: "conditions d'utilisation", es: "condiciones de uso" },
  privacy: { en: "privacy policy", fr: "politique de confidentialité", es: "política de privacidad" },
  network: { en: "Network error. Try again.", fr: "Erreur réseau. Réessayez.", es: "Error de red. Inténtalo de nuevo." },
};

/** Messages d'erreur des routes /api/auth, traduits comme sur les pages d'inscription. */
const AUTH_ERRORS: Record<string, Record<Lang, string>> = {
  "An account already exists with this email": { en: "An account already exists with this email.", fr: "Un compte existe déjà avec cette adresse e-mail.", es: "Ya existe una cuenta con este correo." },
  "This username is already taken": { en: "This username is already taken.", fr: "Ce nom d'utilisateur est déjà pris.", es: "Este nombre de usuario ya está en uso." },
  "Invalid credentials": { en: "Wrong email or password.", fr: "Adresse e-mail ou mot de passe incorrect.", es: "Correo o contraseña incorrectos." },
  "Missing fields": { en: "Fill in all the fields.", fr: "Remplissez tous les champs.", es: "Rellena todos los campos." },
  "Password must be at least 8 characters and mix 3 kinds of characters": {
    en: "The password must be at least 8 characters and mix 3 kinds: lowercase, uppercase, digits or symbols.",
    fr: "Le mot de passe doit faire au moins 8 caractères et mêler 3 types : minuscules, majuscules, chiffres ou symboles.",
    es: "La contraseña debe tener al menos 8 caracteres y mezclar 3 tipos: minúsculas, mayúsculas, números o símbolos.",
  },
  "Too many attempts, try again in 15 minutes": { en: "Too many attempts. Try again in 15 minutes.", fr: "Trop de tentatives. Réessayez dans 15 minutes.", es: "Demasiados intentos. Inténtalo dentro de 15 minutos." },
  "Username can only contain letters, numbers and underscores": {
    en: "The username can only contain letters, numbers and underscores.",
    fr: "Le nom d'utilisateur ne peut contenir que des lettres, des chiffres et des tirets bas.",
    es: "El nombre de usuario solo puede contener letras, números y guiones bajos.",
  },
  "Username must be 3-30 characters": { en: "The username must be 3 to 30 characters.", fr: "Le nom d'utilisateur doit faire entre 3 et 30 caractères.", es: "El nombre de usuario debe tener entre 3 y 30 caracteres." },
  "Database not available": { en: "The service is unavailable right now. Try again in a moment.", fr: "Le service est indisponible pour le moment. Réessayez dans un instant.", es: "El servicio no está disponible ahora mismo. Inténtalo en un momento." },
};

const PATHS: Record<string, Record<Lang, string>> = {
  terms: { en: "/terms-of-use/", fr: "/fr/cgu/", es: "/es/condiciones-uso/" },
  privacy: { en: "/privacy-policy/", fr: "/fr/confidentialite/", es: "/es/politica-privacidad/" },
  forgot: { en: "/forgot-password/", fr: "/fr/mot-de-passe-oublie/", es: "/es/contrasena-olvidada/" },
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
          value={pending}
          onClose={() => setPending(null)}
          onAuthenticated={onAuthenticated}
        />
      )}
    </div>
  );
}

function AuthModal({ lang, value, onClose, onAuthenticated }: {
  lang: Lang;
  value: number;
  onClose: () => void;
  onAuthenticated: () => void;
}) {
  const tt = (key: string) => T[key]?.[lang] ?? key;
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [captcha] = useState(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return { a, b };
  });
  const firstField = useRef<HTMLInputElement>(null);
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    firstField.current?.focus();
  }, [mode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Garde le focus dans la fenetre au clavier.
      if (e.key === "Tab" && dialog.current) {
        const items = dialog.current.querySelectorAll<HTMLElement>("button, a[href], input");
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) || "").trim();
    if (mode === "signup" && parseInt(get("captcha"), 10) !== captcha.a + captcha.b) {
      setErr(tt("captchaWrong"));
      return;
    }
    const body = mode === "signup"
      ? { username: get("username"), email: get("email"), password: String(f.get("password") || "") }
      : { email: get("email"), password: String(f.get("password") || "") };
    setBusy(true);
    try {
      const r = await fetch(mode === "signup" ? "/api/auth/register" : "/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) {
        setErr(AUTH_ERRORS[d?.error]?.[lang] || d?.error || tt("network"));
        setBusy(false);
        return;
      }
      // Le header passe en mode connecte sans recharger la page (Layout.astro).
      if (d?.user) window.dispatchEvent(new CustomEvent("wizy-auth", { detail: { user: d.user } }));
      onAuthenticated();
    } catch {
      setErr(tt("network"));
      setBusy(false);
    }
  }

  const input = "w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent";
  const label = "block text-sm font-semibold text-gray-700 mb-1.5";
  const legal = tt("legal").split(/(\{terms\}|\{privacy\})/);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rating-auth-title"
        className="relative w-full sm:max-w-md max-h-[92vh] overflow-y-auto bg-white rounded-t-2xl sm:rounded-2xl p-6"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={tt("close")}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>

        <div className="flex items-center gap-0.5 mb-3" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((n) => <StarIcon key={n} filled={n <= value} className="w-6 h-6" />)}
        </div>
        <h2 id="rating-auth-title" className="font-display text-xl font-bold text-gray-900 pr-8">
          {mode === "signup" ? tt("modalTitle") : tt("modalLoginTitle")}
        </h2>
        <p className="text-sm text-gray-600 mt-1.5 mb-5">{tt("modalText").replace("{n}", String(value))}</p>

        {err && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 font-medium">{err}</div>}

        <form key={mode} onSubmit={submit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label htmlFor="ra-username" className={label}>{tt("username")}</label>
              <input ref={firstField} id="ra-username" name="username" required minLength={3} maxLength={30} autoComplete="username" className={input} />
            </div>
          )}
          <div>
            <label htmlFor="ra-email" className={label}>{mode === "signup" ? tt("email") : tt("emailOrUsername")}</label>
            <input
              ref={mode === "login" ? firstField : undefined}
              id="ra-email"
              name="email"
              type={mode === "signup" ? "email" : "text"}
              required
              autoComplete={mode === "signup" ? "email" : "username"}
              className={input}
            />
          </div>
          <div>
            <label htmlFor="ra-password" className={label}>{tt("password")}</label>
            <input
              id="ra-password"
              name="password"
              type="password"
              required
              minLength={mode === "signup" ? 8 : undefined}
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              aria-describedby={mode === "signup" ? "ra-password-hint" : undefined}
              className={input}
            />
            {mode === "signup" ? (
              <p id="ra-password-hint" className="text-xs text-gray-500 mt-1.5">{tt("passwordHint")}</p>
            ) : (
              <a href={PATHS.forgot[lang]} className="inline-block text-xs text-brand-600 hover:underline mt-1.5">{tt("forgot")}</a>
            )}
          </div>
          {mode === "signup" && (
            <>
              <div>
                <label htmlFor="ra-captcha" className={label}>
                  {tt("captcha").replace("{a}", String(captcha.a)).replace("{b}", String(captcha.b))}
                </label>
                <input id="ra-captcha" name="captcha" inputMode="numeric" required className={input} />
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {legal.map((part, i) =>
                  part === "{terms}" ? <a key={i} href={PATHS.terms[lang]} target="_blank" rel="noopener" className="text-brand-600 hover:underline">{tt("terms")}</a>
                  : part === "{privacy}" ? <a key={i} href={PATHS.privacy[lang]} target="_blank" rel="noopener" className="text-brand-600 hover:underline">{tt("privacy")}</a>
                  : part
                )}
              </p>
            </>
          )}
          <button type="submit" disabled={busy} className="w-full h-11 bg-sun hover:bg-sun-dark text-ink font-bold text-sm rounded-lg transition-colors disabled:opacity-60">
            {busy ? "…" : mode === "signup" ? tt("signupCta") : tt("loginCta")}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          {mode === "signup" ? tt("hasAccount") : tt("noAccount")}{" "}
          <button
            type="button"
            onClick={() => { setErr(null); setMode(mode === "signup" ? "login" : "signup"); }}
            className="font-bold text-brand-600 hover:text-brand-800"
          >
            {mode === "signup" ? tt("toLogin") : tt("toSignup")}
          </button>
        </p>
      </div>
    </div>
  );
}
