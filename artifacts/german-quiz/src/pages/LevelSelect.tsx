import { Level } from "@/data/vocabulary";

interface Props {
  onSelect: (level: Level) => void;
}

const levels: { id: Level; emoji: string; label: string; desc: string; color: string; bg: string; border: string }[] = [
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

export default function LevelSelect({ onSelect }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🇩🇪</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Almanca Quiz</h1>
          <p className="text-gray-500 text-base">Seviyeni seç ve öğrenmeye başla!</p>
        </div>

        <div className="flex flex-col gap-4">
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

        <p className="text-center text-xs text-gray-400 mt-8">Her soru için 4 şık • 10 soruluk quiz</p>
      </div>
    </div>
  );
}
