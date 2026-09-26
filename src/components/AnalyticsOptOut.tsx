import { useEffect, useState } from "react";
import { analyticsOptedOut, setAnalyticsOptOut } from "../utils/track";

/** Bouton d'opposition a la mesure d'audience, sur la page cookies (trois langues). */

type Lang = "en" | "fr" | "es";
const T: Record<string, Record<Lang, string>> = {
  on: { en: "Audience measurement is on for this browser.", fr: "La mesure d'audience est active sur ce navigateur.", es: "La medición de audiencia está activa en este navegador." },
  off: { en: "You have opted out: nothing is measured on this browser.", fr: "Vous vous y êtes opposé : rien n'est mesuré sur ce navigateur.", es: "Te has opuesto: no se mide nada en este navegador." },
  gpc: { en: "Your browser sends the Global Privacy Control signal, so nothing is measured.", fr: "Votre navigateur envoie le signal Global Privacy Control : rien n'est mesuré.", es: "Tu navegador envía la señal Global Privacy Control: no se mide nada." },
  optOut: { en: "Opt out of audience measurement", fr: "Refuser la mesure d'audience", es: "Rechazar la medición de audiencia" },
  optIn: { en: "Allow audience measurement again", fr: "Réautoriser la mesure d'audience", es: "Volver a permitir la medición de audiencia" },
};

export default function AnalyticsOptOut({ locale = "en" }: { locale?: string }) {
  const lang: Lang = locale === "fr" || locale === "es" ? locale : "en";
  const [out, setOut] = useState<boolean | null>(null);
  const [gpc, setGpc] = useState(false);
  useEffect(() => {
    setGpc(!!(navigator as any).globalPrivacyControl);
    setOut(analyticsOptedOut());
  }, []);
  if (out === null) return null;
  if (gpc) return <p className="mt-3 p-3 rounded-lg bg-gray-100 text-gray-800" role="status">{T.gpc[lang]}</p>;
  return (
    <div className="mt-3 p-3 rounded-lg bg-gray-100 flex flex-wrap items-center gap-3">
      <p className="text-gray-800 flex-1 min-w-[12rem]" role="status">{out ? T.off[lang] : T.on[lang]}</p>
      <button
        type="button"
        onClick={() => { setAnalyticsOptOut(!out); setOut(!out); }}
        className="h-10 px-4 rounded-lg bg-brand text-white text-sm font-bold"
      >
        {out ? T.optIn[lang] : T.optOut[lang]}
      </button>
    </div>
  );
}
