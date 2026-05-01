import { vocabulary } from "@/data/vocabulary";
import { useFavorites } from "@/hooks/useStorage";

interface Props {
  onBack: () => void;
  onPractice: () => void;
}

export default function Favorites({ onBack, onPractice }: Props) {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const favoriteWords = vocabulary.filter((v) => favorites.includes(v.german));

  const levelColor: Record<string, string> = {
    A1: "bg-emerald-100 text-emerald-700",
    A2: "bg-blue-100 text-blue-700",
    B1: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-6">
      <div className="w-full max-w-md mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium"
          >
            ← Geri
          </button>
          <h1 className="text-lg font-bold text-gray-800">⭐ Favorilerim</h1>
          <div className="text-sm text-gray-400 font-medium">{favoriteWords.length} kelime</div>
        </div>

        {/* Practice button */}
        {favoriteWords.length >= 4 && (
          <button
            onClick={onPractice}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-200 active:scale-95 mb-5"
          >
            ⭐ Favorilerle Quiz Yap
          </button>
        )}

        {favoriteWords.length < 4 && favoriteWords.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 mb-5 text-amber-700 text-sm text-center">
            Quiz başlatmak için en az 4 favori kelime gerekiyor. ({4 - favoriteWords.length} tane daha ekle)
          </div>
        )}

        {/* Empty state */}
        {favoriteWords.length === 0 && (
          <div className="bg-white rounded-3xl shadow-sm p-10 text-center mb-5">
            <div className="text-5xl mb-4">⭐</div>
            <p className="text-gray-600 font-semibold mb-1">Henüz favori yok</p>
            <p className="text-gray-400 text-sm">
              Quiz sırasında kelime kartındaki ★ simgesine tıklayarak favori ekleyebilirsin.
            </p>
          </div>
        )}

        {/* Word list */}
        <div className="flex flex-col gap-3">
          {favoriteWords.map((word) => (
            <div
              key={word.german}
              className="bg-white rounded-2xl shadow-sm border border-indigo-50 px-5 py-4 flex items-start justify-between gap-3"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-bold text-gray-900 text-base">{word.german}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor[word.level]}`}>
                    {word.level}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{word.turkish}</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed italic">{word.exampleDe}</p>
              </div>
              <button
                onClick={() => toggleFavorite(word.german)}
                title="Favorilerden çıkar"
                className={`text-2xl flex-shrink-0 mt-0.5 transition-all duration-200 active:scale-110 ${
                  isFavorite(word.german) ? "text-yellow-400" : "text-gray-200 hover:text-yellow-300"
                }`}
              >
                ★
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
