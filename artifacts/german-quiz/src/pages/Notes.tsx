import { useState } from "react";
import { useNotes } from "@/hooks/useStorage";

interface Props {
  onBack: () => void;
}

type Tab = "notizen" | "saetze";

export default function Notes({ onBack }: Props) {
  const { freeText, saveFreeText, sentences, addSentence, removeSentence } =
    useNotes();

  const [tab, setTab] = useState<Tab>("notizen");
  const [german, setGerman] = useState("");
  const [translation, setTranslation] = useState("");

  const handleAdd = () => {
    const g = german.trim();
    if (!g) return;
    addSentence(g, translation.trim());
    setGerman("");
    setTranslation("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-6">
      <div className="w-full max-w-md mx-auto flex flex-col gap-4">

        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium px-2 py-1 -ml-2 rounded-xl hover:bg-white/70"
          >
            ← Zurück
          </button>
          <h1 className="text-base font-bold text-gray-800">📝 Notizen & eigene Sätze</h1>
          <div className="w-16" />
        </div>

        {/* Tabs */}
        <div className="flex bg-white rounded-2xl p-1 shadow-sm border border-indigo-50">
          <button
            onClick={() => setTab("notizen")}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${
              tab === "notizen"
                ? "bg-indigo-500 text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Notizen
          </button>
          <button
            onClick={() => setTab("saetze")}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${
              tab === "saetze"
                ? "bg-indigo-500 text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Eigene Sätze
          </button>
        </div>

        {/* Notizen tab */}
        {tab === "notizen" && (
          <div className="flex flex-col gap-3">
            <div className="bg-white rounded-2xl shadow-sm border border-indigo-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
                Freie Notizen
              </p>
              <textarea
                value={freeText}
                onChange={(e) => saveFreeText(e.target.value)}
                placeholder="Schreibe hier deine Notizen auf deutsch…"
                rows={12}
                className="w-full text-sm text-gray-800 placeholder-gray-300 resize-none outline-none leading-relaxed font-medium"
              />
            </div>
            <p className="text-xs text-gray-400 text-center">
              Wird automatisch gespeichert
            </p>
          </div>
        )}

        {/* Eigene Sätze tab */}
        {tab === "saetze" && (
          <div className="flex flex-col gap-3">
            {/* Input area */}
            <div className="bg-white rounded-2xl shadow-sm border border-indigo-50 p-4 flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Satz hinzufügen
              </p>
              <input
                type="text"
                value={german}
                onChange={(e) => setGerman(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                placeholder="Deutscher Satz …"
                className="w-full border-2 border-indigo-100 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-indigo-400 transition-colors"
              />
              <input
                type="text"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                placeholder="Übersetzung (optional) …"
                className="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 text-sm text-gray-500 placeholder-gray-300 outline-none focus:border-gray-300 transition-colors"
              />
              <button
                onClick={handleAdd}
                disabled={!german.trim()}
                className="w-full py-2.5 rounded-xl bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-600 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                + Hinzufügen
              </button>
            </div>

            {/* Empty state */}
            {sentences.length === 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-indigo-50 p-8 text-center">
                <div className="text-4xl mb-3">✍️</div>
                <p className="text-gray-500 font-medium text-sm">
                  Noch keine Sätze
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Füge eigene Beispielsätze hinzu und speichere sie hier.
                </p>
              </div>
            )}

            {/* Sentence list */}
            <div className="flex flex-col gap-2">
              {sentences
                .slice()
                .reverse()
                .map((s) => (
                  <div
                    key={s.id}
                    className="bg-white rounded-2xl shadow-sm border border-indigo-50 px-4 py-3 flex items-start justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 leading-snug">
                        🇩🇪 {s.german}
                      </p>
                      {s.translation && (
                        <p className="text-xs text-gray-400 mt-1">
                          🇹🇷 {s.translation}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeSentence(s.id)}
                      className="text-gray-300 hover:text-rose-400 transition-colors flex-shrink-0 text-lg leading-none mt-0.5"
                    >
                      ✕
                    </button>
                  </div>
                ))}
            </div>

            {sentences.length > 0 && (
              <p className="text-xs text-gray-400 text-center">
                {sentences.length} Satz/Sätze gespeichert
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
