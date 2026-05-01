import { Level } from "@/data/vocabulary";
import { useFavorites, useMistakes } from "@/hooks/useStorage";
import DtzLogo from "@/components/DtzLogo";
import Footer from "@/components/Footer";

interface Props {
  onSelect: (level: Level) => void;
  onFavorites: () => void;
  onMistakes: () => void;
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
];

export default function LevelSelect({ onSelect, onFavorites, onMistakes }: Props) {
  const { favorites } = useFavorites();
  const { mistakes } = useMistakes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-md flex flex-col flex-1">

        {/* Logo + Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <DtzLogo size={80} />
          </div>
          <h1 className="text-[1.6rem] font-extrabold text-gray-900 leading-tight tracking-tight">
            Deutsch Wortschatz Trainer
          </h1>
          <p className="text-sm font-semibold text-indigo-400 mt-1 tracking-widest uppercase">
            A1–B1 &bull; DTZ
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Learn German vocabulary for DTZ and B1 exams
          </p>
        </div>

        {/* Level buttons */}
        <div className="flex flex-col gap-4 mb-5">
          {levels.map((lv) => (
            <button
              key={lv.id}
              onClick={() => onSelect(lv.id)}
              className={`w-full text-left px-6 py-5 rounded-2xl border-2 transition-all duration-200 active:scale-95 shadow-sm ${lv.bg} ${lv.border}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{lv.emoji}</span>
                <div>
                  <p className={`text-lg font-bold ${lv.color}`}>{lv.label}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{lv.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium tracking-wider">KİŞİSEL ÇALIŞMA</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Favorites + Mistakes */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onFavorites}
            className="flex flex-col items-center gap-2 px-4 py-4 rounded-2xl border-2 border-amber-200 bg-amber-50 hover:bg-amber-100 hover:border-amber-400 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <span className="text-2xl">⭐</span>
            <span className="text-sm font-bold text-amber-700">Favorilerim</span>
            <span className="text-xs text-amber-500 font-medium">
              {favorites.length} kelime
            </span>
          </button>

          <button
            onClick={onMistakes}
            className="flex flex-col items-center gap-2 px-4 py-4 rounded-2xl border-2 border-rose-200 bg-rose-50 hover:bg-rose-100 hover:border-rose-400 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <span className="text-2xl">❌</span>
            <span className="text-sm font-bold text-rose-700">Hatalarım</span>
            <span className="text-xs text-rose-500 font-medium">
              {mistakes.length} kelime
            </span>
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          Her soru için 4 şık • 10 soruluk quiz
        </p>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
