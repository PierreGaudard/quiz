import type { Locale } from "../i18n/config";

export const RESET_TTL_MINUTES = 60;
/** Au-dela, les demandes pour une meme adresse sont ignorees pendant une heure. */
export const RESET_MAX_PER_HOUR = 3;

export function randomToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function sha256(s: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

export const RESET_PATHS: Record<Locale, string> = {
  en: "/reset-password/",
  fr: "/fr/nouveau-mot-de-passe/",
  es: "/es/nueva-contrasena/",
};

const COPY: Record<Locale, { subject: string; hello: string; body: string; cta: string; ignore: string }> = {
  en: {
    subject: "Reset your WizyQuiz password",
    hello: "Hi {name},",
    body: "Someone asked to reset the password of your WizyQuiz account. Click the link below to choose a new one. It works for one hour, and only once.",
    cta: "Choose a new password",
    ignore: "If you didn't ask for this, you can ignore this e-mail: your password stays the same.",
  },
  fr: {
    subject: "Réinitialiser votre mot de passe WizyQuiz",
    hello: "Bonjour {name},",
    body: "Quelqu'un a demandé à réinitialiser le mot de passe de votre compte WizyQuiz. Cliquez sur le lien ci-dessous pour en choisir un nouveau. Il marche pendant une heure, et une seule fois.",
    cta: "Choisir un nouveau mot de passe",
    ignore: "Si vous n'êtes pas à l'origine de cette demande, ignorez cet e-mail : votre mot de passe ne change pas.",
  },
  es: {
    subject: "Restablece tu contraseña de WizyQuiz",
    hello: "Hola, {name}:",
    body: "Alguien ha pedido restablecer la contraseña de tu cuenta de WizyQuiz. Haz clic en el enlace de abajo para elegir una nueva. Funciona durante una hora y una sola vez.",
    cta: "Elegir una nueva contraseña",
    ignore: "Si no lo has pedido tú, ignora este correo: tu contraseña no cambia.",
  },
};

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export function resetEmail(locale: Locale, name: string, link: string) {
  const c = COPY[locale];
  const hello = c.hello.replace("{name}", name);
  const text = `${hello}\n\n${c.body}\n\n${link}\n\n${c.ignore}\n\nWizyQuiz`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#1a0e42;max-width:520px">
<p>${esc(hello)}</p><p>${esc(c.body)}</p>
<p><a href="${esc(link)}" style="display:inline-block;background:#5b35d5;color:#fff;text-decoration:none;font-weight:bold;padding:12px 20px;border-radius:10px">${esc(c.cta)}</a></p>
<p style="font-size:13px;color:#555">${esc(link)}</p><p style="font-size:13px;color:#555">${esc(c.ignore)}</p><p>WizyQuiz</p></div>`;
  return { subject: c.subject, text, html };
}
