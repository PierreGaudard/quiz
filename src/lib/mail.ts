/**
 * Envoi d'e-mails par Cloudflare Email Service (binding `send_email` nomme
 * EMAIL dans wrangler.toml, expediteur sur le domaine wizyquiz.com).
 *
 * Tant que le binding n'est pas declare, ou que le domaine n'est pas encore
 * valide comme domaine d'envoi, l'envoi echoue : la fonction renvoie false et
 * l'appelant decide. Elle ne leve jamais, un e-mail rate ne doit pas faire
 * tomber une route.
 */
export const MAIL_FROM = "WizyQuiz <noreply@wizyquiz.com>";

export async function sendMail(msg: { to: string; subject: string; text: string; html: string }): Promise<boolean> {
  try {
    const { env } = await import("cloudflare:workers");
    const binding = (env as any).EMAIL;
    if (!binding?.send) return false;
    await binding.send({ from: MAIL_FROM, ...msg });
    return true;
  } catch (e: any) {
    console.error("sendMail", e?.code || "", e?.message || e);
    return false;
  }
}
