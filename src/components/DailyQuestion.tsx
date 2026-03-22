import { useState } from "react";

interface Answer {
  id: string;
  text: string;
}

interface Props {
  question: string;
  answers: Answer[];
  correctAnswer: string;
  explanation?: string;
  image?: string;
  locale?: "en" | "fr" | "es";
}

const labels = {
  win: { en: "Correct!", fr: "Bien joué !", es: "¡Correcto!" },
  lose: { en: "Wrong!", fr: "Raté !", es: "¡Fallaste!" },
};

export default function DailyQuestion({ question, answers, correctAnswer, explanation, image, locale = "en" }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === correctAnswer;

  return (
    <div className="space-y-3">
      {image && <img src={image} alt={question} className="w-full aspect-video object-cover rounded-lg" fetchPriority="high" />}
      <p className="font-display font-bold text-gray-900 text-sm leading-snug">{question}</p>
      <div className="grid grid-cols-2 gap-2">
        {answers.map((a) => (
          <button
            key={a.id}
            onClick={() => !answered && setSelected(a.id)}
            disabled={answered}
            className={`text-left text-xs font-semibold px-3 py-2.5 rounded-lg border transition-all cursor-pointer ${
              answered
                ? a.id === correctAnswer
                  ? "bg-green-50 border-green-400 text-green-700"
                  : a.id === selected
                    ? "bg-red-50 border-red-400 text-red-700"
                    : "bg-gray-50 border-gray-100 text-gray-400"
                : "border-gray-200 text-gray-700 hover:border-violet-400 hover:bg-violet-50"
            }`}
          >
            {a.text}
          </button>
        ))}
      </div>
      {answered && (
        <div className={`text-xs leading-relaxed p-3 rounded-lg ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          <span className="font-bold">{isCorrect ? labels.win[locale] : labels.lose[locale]}</span>{" "}
          {explanation || ""}
        </div>
      )}
    </div>
  );
}
