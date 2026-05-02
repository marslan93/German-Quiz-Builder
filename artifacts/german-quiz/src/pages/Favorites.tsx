import { vocabulary } from "@/data/vocabulary";
import { useFavorites } from "@/hooks/useStorage";

interface Props {
  onBack: () => void;
  onPractice: () => void;
}

const levelColor: Record<string, string> = {
  A1: "bg-emerald-100 text-emerald-700",
  A2: "bg-blue-100 text-blue-700",
  B1: "bg-purple-100 text-purple-700",
  B2: "bg-orange-100 text-orange-700",
};

export default function Favorites({ onBack, onPractice }: Props) {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const favoriteWords = vocabulary.filter((v) => favorites.includes(v.german));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-6">
      <div className="w-full max-w-md mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium px-2 py-1 -ml-2 rounded-xl hover:bg-white/70"
          >
            ← Zurück
          </button>
          <h1 className="text-base font-bold text-gray-800">⭐ Favoriten</h1>
          <div className="text-sm text-gray-400 font-medium">
            {favoriteWords.length} Wörter
          </div>
        </div>

        {/* Practice button */}
        {favoriteWords.length >= 4 && (
          <button
            onClick={onPractice}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold text-base shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-200 active:scale-95 mb-4"
          >
            ⭐ Mit Favoriten üben
          </button>
        )}

        {favoriteWords.length < 4 && favoriteWords.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 mb-4 text-amber-700 text-sm text-center">
            Mindestens 4 Favoriten für das Quiz erforderlich. (Noch {4 - favoriteWords.length} fehlen)
          </div>
        )}

        {/* Empty state */}
        {favoriteWords.length === 0 && (
          <div className="bg-white rounded-3xl shadow-sm p-10 text-center mb-4">
            <div className="text-5xl mb-4">⭐</div>
            <p className="text-gray-600 font-semibold mb-1">Noch keine Favoriten</p>
            <p className="text-gray-400 text-sm">
              Klicke während des Quizes auf ★ um Wörter als Favoriten zu speichern.
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
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColor[word.level] ?? "bg-gray-100 text-gray-600"}`}>
                    {word.level}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{word.turkish}</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed italic">{word.exampleDe}</p>
              </div>
              <button
                onClick={() => toggleFavorite(word.german)}
                title="Aus Favoriten entfernen"
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
