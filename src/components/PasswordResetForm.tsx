import { useEffect, useState } from "react";
import { isStrongPassword } from "../lib/password-policy";

/**
 * Les deux ecrans de la reinitialisation du mot de passe.
 *
 * mode="request" : on saisit son e-mail, on recoit un lien (la reponse est
 * la meme que le compte existe ou non). mode="reset" : la page ouverte par le
 * lien, avec le jeton dans ?token=, ou l'on choisit le nouveau mot de passe.
 */

type Locale = "en" | "fr" | "es";

const T: Record<string, Record<Locale, string>> = {
  email: { en: "E-mail address", fr: "Adresse e-mail", es: "Correo electrónico" },
  emailPh: { en: "you@example.com", fr: "vous@exemple.com", es: "tu@ejemplo.com" },
  send: { en: "Send me a link", fr: "M'envoyer un lien", es: "Enviarme un enlace" },
  sending: { en: "Sending…", fr: "Envoi…", es: "Enviando…" },
  sent: {
    en: "If an account uses this address, an e-mail with a link is on its way. The link works for one hour. Check your spam folder if you don't see it.",
    fr: "Si un compte utilise cette adresse, un e-mail avec un lien vient de partir. Le lien marche pendant une heure. Pensez à regarder dans les indésirables si vous ne le voyez pas.",
    es: "Si hay una cuenta con esta dirección, te acabamos de enviar un correo con un enlace. El enlace funciona durante una hora. Mira en la carpeta de spam si no lo ves.",
  },
  newPw: { en: "New password", fr: "Nouveau mot de passe", es: "Nueva contraseña" },
  confirmPw: { en: "Confirm the password", fr: "Confirmer le mot de passe", es: "Confirma la contraseña" },
  save: { en: "Save the new password", fr: "Enregistrer le mot de passe", es: "Guardar la contraseña" },
  saving: { en: "Saving…", fr: "Enregistrement…", es: "Guardando…" },
  done: {
    en: "Your password has been changed. You can now log in with it.",
    fr: "Votre mot de passe a été changé. Vous pouvez maintenant vous connecter avec.",
    es: "Tu contraseña se ha cambiado. Ya puedes iniciar sesión con ella.",
  },
  login: { en: "Log in", fr: "Se connecter", es: "Iniciar sesión" },
  errShort: { en: "The password needs at least 8 characters, mixing 3 kinds: lowercase, uppercase, digits or symbols.", fr: "Le mot de passe doit faire au moins 8 caractères et mêler 3 types : minuscules, majuscules, chiffres ou symboles.", es: "La contraseña debe tener al menos 8 caracteres y mezclar 3 tipos: minúsculas, mayúsculas, números o símbolos." },
  errMatch: { en: "The two passwords don't match.", fr: "Les deux mots de passe ne sont pas identiques.", es: "Las dos contraseñas no coinciden." },
  errToken: {
    en: "This link is invalid, already used or expired. Ask for a new one.",
    fr: "Ce lien est invalide, déjà utilisé ou expiré. Demandez-en un nouveau.",
    es: "Este enlace no es válido, ya se ha usado o ha caducado. Pide uno nuevo.",
  },
  askNew: { en: "Ask for a new link", fr: "Demander un nouveau lien", es: "Pedir un enlace nuevo" },
  errDown: { en: "Something went wrong. Try again in a moment.", fr: "Une erreur est survenue. Réessayez dans un instant.", es: "Algo ha fallado. Inténtalo de nuevo en un momento." },
};

const PATHS: Record<Locale, { login: string; forgot: string }> = {
  en: { login: "/login/", forgot: "/forgot-password/" },
  fr: { login: "/fr/connexion/", forgot: "/fr/mot-de-passe-oublie/" },
  es: { login: "/es/iniciar-sesion/", forgot: "/es/contrasena-olvidada/" },
};

const input = "w-full h-11 px-4 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent";
const btn = "w-full h-11 bg-sun hover:bg-sun-dark text-ink font-display font-bold text-sm rounded-lg transition-colors disabled:opacity-60";

export default function PasswordResetForm({ mode, locale = "en" }: { mode: "request" | "reset"; locale?: Locale }) {
  const tt = (k: string) => T[k]?.[locale] ?? T[k]?.en ?? k;
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (mode === "reset") setToken(new URLSearchParams(window.location.search).get("token"));
  }, [mode]);

  const box = (cls: string, text: string) => <p role="status" className={`p-3 rounded-lg text-sm ${cls}`}>{text}</p>;

  if (mode === "request") {
    if (done) return box("bg-green-50 border border-green-200 text-green-800", tt("sent"));
    return (
      <form
        className="space-y-5"
        onSubmit={async (e) => {
          e.preventDefault();
          setBusy(true);
          setError(null);
          try {
            const r = await fetch("/api/auth/forgot", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, locale }) });
            if (!r.ok) throw new Error();
            setDone(true);
          } catch {
            setError(tt("errDown"));
          } finally {
            setBusy(false);
          }
        }}
      >
        {error && box("bg-red-50 border border-red-200 text-red-700", error)}
        <div>
          <label htmlFor="reset-email" className="block text-sm font-semibold text-gray-700 mb-1.5">{tt("email")}</label>
          <input id="reset-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={tt("emailPh")} className={input} />
        </div>
        <button type="submit" disabled={busy} className={btn}>{busy ? tt("sending") : tt("send")}</button>
      </form>
    );
  }

  if (done) {
    return (
      <div className="space-y-4">
        {box("bg-green-50 border border-green-200 text-green-800", tt("done"))}
        <a href={PATHS[locale].login} className={`${btn} flex items-center justify-center`}>{tt("login")}</a>
      </div>
    );
  }
  const tokenMissing = token !== null && !/^[a-f0-9]{64}$/.test(token);
  if (tokenMissing || error === "errToken") {
    return (
      <div className="space-y-4">
        {box("bg-red-50 border border-red-200 text-red-700", tt("errToken"))}
        <a href={PATHS[locale].forgot} className={`${btn} flex items-center justify-center`}>{tt("askNew")}</a>
      </div>
    );
  }
  return (
    <form
      className="space-y-5"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!isStrongPassword(pw)) { setError("errShort"); return; }
        if (pw !== pw2) { setError("errMatch"); return; }
        setBusy(true);
        setError(null);
        try {
          const r = await fetch("/api/auth/reset", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token, password: pw }) });
          const d = await r.json().catch(() => ({}));
          if (r.ok) setDone(true);
          else setError(d?.error === "invalid_token" ? "errToken" : d?.error === "weak_password" ? "errShort" : "errDown");
        } catch {
          setError("errDown");
        } finally {
          setBusy(false);
        }
      }}
    >
      {error && box("bg-red-50 border border-red-200 text-red-700", tt(error))}
      <div>
        <label htmlFor="reset-pw" className="block text-sm font-semibold text-gray-700 mb-1.5">{tt("newPw")}</label>
        <input id="reset-pw" type="password" required minLength={8} autoComplete="new-password" value={pw} onChange={(e) => setPw(e.target.value)} className={input} />
      </div>
      <div>
        <label htmlFor="reset-pw2" className="block text-sm font-semibold text-gray-700 mb-1.5">{tt("confirmPw")}</label>
        <input id="reset-pw2" type="password" required minLength={8} autoComplete="new-password" value={pw2} onChange={(e) => setPw2(e.target.value)} className={input} />
      </div>
      <button type="submit" disabled={busy} className={btn}>{busy ? tt("saving") : tt("save")}</button>
    </form>
  );
}
