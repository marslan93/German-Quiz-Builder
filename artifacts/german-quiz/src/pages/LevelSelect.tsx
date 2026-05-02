import { useState } from "react";
import { Level } from "@/data/vocabulary";
import { useFavorites, useMistakes } from "@/hooks/useStorage";
import DtzLogo from "@/components/DtzLogo";
import Footer from "@/components/Footer";

interface Props {
  onSelectQuiz: (level: Level, quizLength: number) => void;
  onFavorites: () => void;
  onMistakes: () => void;
  onNotes: () => void;
}

const levels: {
  id: Level;
  emoji: string;
  label: string;
  desc: string;
  color: string;
  bg: string;
  border: string;
}[] = [
  {
    id: "A1",
    emoji: "🌱",
    label: "A1 – Başlangıç",
    desc: "Temel kelimeler: renkler, aile, hayvanlar, yiyecekler ve günlük nesneler.",
    color: "text-emerald-700",
    bg: "bg-emerald-50 hover:bg-emerald-100",
    border: "border-emerald-200 hover:border-emerald-400",
  },
  {
    id: "A2",
    emoji: "🌿",
    label: "A2 – Temel",
    desc: "Meslekler, şehir hayatı, aylar, fiiller ve biraz daha karmaşık sıfatlar.",
    color: "text-blue-700",
    bg: "bg-blue-50 hover:bg-blue-100",
    border: "border-blue-200 hover:border-blue-400",
  },
  {
    id: "B1",
    emoji: "🌳",
    label: "B1 – Orta",
    desc: "Soyut kavramlar, iş dünyası, çevre konuları ve zengin fiil yapıları.",
    color: "text-purple-700",
    bg: "bg-purple-50 hover:bg-purple-100",
    border: "border-purple-200 hover:border-purple-400",
  },
  {
    id: "B2",
    emoji: "🏢",
    label: "B2 – Berufssprache",
    desc: "Beruf, Bewerbung, Arbeitsplatz, Kommunikation und Geschäftsdeutsch.",
    color: "text-orange-700",
    bg: "bg-orange-50 hover:bg-orange-100",
    border: "border-orange-200 hover:border-orange-400",
  },
];

const QUIZ_LENGTHS = [5, 10, 15];

export default function LevelSelect({ onSelectQuiz, onFavorites, onMistakes, onNotes }: Props) {
  const [quizLength, setQuizLength] = useState(10);
  const [menuOpen, setMenuOpen] = useState(false);
  const { favorites } = useFavorites();
  const { mistakes } = useMistakes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center px-4 py-7">
      <div className="w-full max-w-md flex flex-col flex-1">

        {/* Logo + Title */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <DtzLogo size={72} />
          </div>
          <h1 className="text-[1.55rem] font-extrabold text-gray-900 leading-tight tracking-tight">
            Deutsch Wortschatz Trainer
          </h1>
          <p className="text-xs font-bold text-indigo-400 mt-1 tracking-widest uppercase">
            A1–B2 &bull; DTZ
          </p>
        </div>

        {/* Level cards */}
        <div className="flex flex-col gap-3 mb-4">
          {levels.map((lv) => (
            <button
              key={lv.id}
              onClick={() => onSelectQuiz(lv.id, quizLength)}
              className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200 active:scale-95 shadow-sm ${lv.bg} ${lv.border}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl flex-shrink-0">{lv.emoji}</span>
                <div>
                  <p className={`text-base font-bold ${lv.color}`}>{lv.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">{lv.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Quiz length selector */}
        <div className="bg-white/70 rounded-2xl px-5 py-3.5 shadow-sm border border-white mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2.5">
            Anzahl der Fragen
          </p>
          <div className="flex gap-2">
            {QUIZ_LENGTHS.map((n) => (
              <button
                key={n}
                onClick={() => setQuizLength(n)}
                className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all duration-150 active:scale-95 ${
                  quizLength === n
                    ? "bg-indigo-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {n} Fragen
              </button>
            ))}
          </div>
        </div>

        {/* Lernbereich expandable menu */}
        <div className="mb-4">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white/70 border border-white shadow-sm hover:bg-white transition-all duration-200 active:scale-95"
          >
            <span className="text-sm font-bold text-indigo-700">📚 Lernbereich</span>
            <span
              className={`text-indigo-400 text-lg font-light transition-transform duration-200 ${
                menuOpen ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>
          </button>

          {menuOpen && (
            <div className="mt-1.5 bg-white rounded-2xl shadow-sm border border-indigo-50 overflow-hidden">
              <button
                onClick={onFavorites}
                className="w-full flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-amber-50 transition-colors border-b border-gray-50 active:bg-amber-100"
              >
                <span className="text-lg">⭐</span>
                <span className="flex-1 text-left">Favoriten</span>
                <span className="text-xs text-gray-400 font-normal">{favorites.length} Wörter</span>
              </button>

              <button
                onClick={onMistakes}
                className="w-full flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-rose-50 transition-colors border-b border-gray-50 active:bg-rose-100"
              >
                <span className="text-lg">❌</span>
                <span className="flex-1 text-left">Fehler üben</span>
                <span className="text-xs text-gray-400 font-normal">{mistakes.length} Wörter</span>
              </button>

              <button
                onClick={onNotes}
                className="w-full flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-indigo-50 transition-colors active:bg-indigo-100"
              >
                <span className="text-lg">📝</span>
                <span className="flex-1 text-left">Notizen & eigene Sätze</span>
                <span className="text-xs text-gray-300">→</span>
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-400">
          4 Antwortmöglichkeiten pro Frage &bull; Quiz mit {quizLength} Fragen
        </p>

        <Footer />
      </div>
    </div>
  );
}
