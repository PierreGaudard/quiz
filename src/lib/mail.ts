/**
 * Envoi d'e-mails par Resend (API HTTP, offre gratuite : 3 000 e-mails par
 * mois, 100 par jour), expediteur sur le domaine wizyquiz.com, valide dans
 * Resend par les enregistrements DNS de la zone Cloudflare.
 *
 * La cle vit dans le secret Cloudflare RESEND_API_KEY, jamais dans le repo.
 * Sans cle, l'envoi echoue : la fonction renvoie false et l'appelant decide.
 * Elle ne leve jamais, un e-mail rate ne doit pas faire tomber une route.
 */
export const MAIL_FROM = "WizyQuiz <noreply@wizyquiz.com>";

export async function sendMail(msg: { to: string; subject: string; text: string; html: string }): Promise<boolean> {
  try {
    const { env } = await import("cloudflare:workers");
    const key = (env as any).RESEND_API_KEY;
    if (!key) return false;
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: MAIL_FROM, to: [msg.to], subject: msg.subject, text: msg.text, html: msg.html }),
    });
    if (!res.ok) {
      console.error("sendMail", res.status, (await res.text()).slice(0, 200));
      return false;
    }
    return true;
  } catch (e: any) {
    console.error("sendMail", e?.code || "", e?.message || e);
    return false;
  }
}
