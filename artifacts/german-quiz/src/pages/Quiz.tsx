import { useState, useCallback, useEffect } from "react";
import { vocabulary, VocabItem, Level } from "@/data/vocabulary";
import { useFavorites, useMistakes } from "@/hooks/useStorage";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getWrongOptions(correct: VocabItem, pool: VocabItem[]): string[] {
  const others = pool.filter((v) => v.turkish !== correct.turkish);
  const picked = shuffle(others).slice(0, 3).map((v) => v.turkish);
  if (picked.length < 3) {
    const fallback = shuffle(vocabulary.filter((v) => v.turkish !== correct.turkish))
      .slice(0, 3 - picked.length)
      .map((v) => v.turkish);
    return [...new Set([...picked, ...fallback])].slice(0, 3);
  }
  return picked;
}

interface Question {
  item: VocabItem;
  options: string[];
  correct: string;
}

function buildQuestion(item: VocabItem, pool: VocabItem[]): Question {
  const wrong = getWrongOptions(item, pool);
  const options = shuffle([item.turkish, ...wrong]);
  return { item, options, correct: item.turkish };
}

type AnswerState = "idle" | "correct" | "wrong";

const TOTAL_QUESTIONS = 10;

const LEVEL_META: Record<Level, { emoji: string; label: string; color: string }> = {
  A1: { emoji: "🌱", label: "A1 – Başlangıç", color: "text-emerald-600" },
  A2: { emoji: "🌿", label: "A2 – Temel", color: "text-blue-600" },
  B1: { emoji: "🌳", label: "B1 – Orta", color: "text-purple-600" },
};

export interface QuizProps {
  level?: Level;
  customPool?: VocabItem[];
  quizTitle?: string;
  quizEmoji?: string;
  onBack: () => void;
}

export default function Quiz({ level, customPool, quizTitle, quizEmoji, onBack }: QuizProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addMistake } = useMistakes();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [finished, setFinished] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [starred, setStarred] = useState(false);
  const [tooFew, setTooFew] = useState(false);
  const [flashKey, setFlashKey] = useState(0);
  const [flashType, setFlashType] = useState<"correct" | "wrong" | null>(null);

  const initQuiz = useCallback(() => {
    const pool = customPool ?? vocabulary.filter((v) => v.level === level);
    if (pool.length < 4) {
      setTooFew(true);
      return;
    }
    const count = Math.min(TOTAL_QUESTIONS, pool.length);
    const shuffled = shuffle(pool).slice(0, count);
    const qs = shuffled.map((item) => buildQuestion(item, pool));
    setQuestions(qs);
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setAnswerState("idle");
    setFinished(false);
    setStreak(0);
    setBestStreak(0);
    setTooFew(false);
  }, [level, customPool]);

  useEffect(() => {
    initQuiz();
  }, [initQuiz]);

  useEffect(() => {
    if (questions[currentIndex]) {
      setStarred(isFavorite(questions[currentIndex].item.german));
    }
  }, [currentIndex, questions, isFavorite]);

  const current = questions[currentIndex];

  const handleStar = () => {
    if (!current) return;
    toggleFavorite(current.item.german);
    setStarred((s) => !s);
  };

  const triggerFlash = (type: "correct" | "wrong") => {
    setFlashType(type);
    setFlashKey((k) => k + 1);
    setTimeout(() => setFlashType(null), 600);
  };

  const handleSelect = (option: string) => {
    if (answerState !== "idle") return;
    setSelected(option);
    const isCorrect = option === current.correct;
    if (isCorrect) {
      triggerFlash("correct");
      setScore((s) => s + 1);
      setStreak((s) => {
        const next = s + 1;
        setBestStreak((b) => Math.max(b, next));
        return next;
      });
      setAnswerState("correct");
    } else {
      triggerFlash("wrong");
      setStreak(0);
      setAnswerState("wrong");
      addMistake(current.item.german);
    }
  };

  const handleNext = () => {
    const totalQ = questions.length;
    if (currentIndex + 1 >= totalQ) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setAnswerState("idle");
    }
  };

  const getButtonClass = (option: string): string => {
    const base =
      "w-full text-left px-5 py-4 rounded-2xl border-2 text-base font-medium transition-all duration-200 focus:outline-none select-none ";

    if (answerState === "idle") {
      return (
        base +
        "border-indigo-100 bg-white text-gray-800 hover:border-indigo-400 hover:bg-indigo-50 active:scale-95 cursor-pointer shadow-sm"
      );
    }

    if (option === current.correct) {
      return base + "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-md";
    }

    if (option === selected && answerState === "wrong") {
      return base + "border-rose-500 bg-rose-50 text-rose-800 shadow-md";
    }

    return base + "border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed";
  };

  const totalQ = questions.length;
  const progress = totalQ > 0 ? (currentIndex / totalQ) * 100 : 0;
  const meta = level ? LEVEL_META[level] : null;
  const displayTitle = quizTitle ?? (meta ? `${meta.emoji} ${meta.label}` : "Quiz");
  const displayEmoji = quizEmoji ?? (meta?.emoji ?? "📝");

  const getScoreEmoji = () => {
    const pct = score / totalQ;
    if (pct >= 0.9) return "🏆";
    if (pct >= 0.7) return "🌟";
    if (pct >= 0.5) return "👍";
    return "📚";
  };

  const getScoreMessage = () => {
    const pct = score / totalQ;
    if (pct >= 0.9) return "Mükemmel! Harika bir performans!";
    if (pct >= 0.7) return "Çok iyi! Devam et!";
    if (pct >= 0.5) return "İyi gidiyorsun!";
    return "Daha fazla pratik yapabilirsin!";
  };

  if (tooFew) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Yeterli Kelime Yok</h2>
          <p className="text-gray-500 mb-6">
            Quiz başlatmak için en az 4 kelimeye ihtiyaç var. Önce kelime ekleyin.
          </p>
          <button
            onClick={onBack}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Geri Dön
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="text-center text-indigo-400 text-xl font-medium">Yükleniyor...</div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="text-7xl mb-4">{getScoreEmoji()}</div>
            <div className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-indigo-50 mb-3 text-indigo-600">
              {displayTitle}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Bitti!</h2>
            <p className="text-gray-500 mb-6">{getScoreMessage()}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-indigo-50 rounded-2xl p-4">
                <p className="text-3xl font-bold text-indigo-600">
                  {score}/{totalQ}
                </p>
                <p className="text-sm text-indigo-400 mt-1">Skor</p>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4">
                <p className="text-3xl font-bold text-amber-600">{bestStreak}</p>
                <p className="text-sm text-amber-400 mt-1">En Uzun Seri</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Başarı Oranı</span>
                <span>{Math.round((score / totalQ) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
                  style={{ width: `${(score / totalQ) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={initQuiz}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 active:scale-95"
              >
                Tekrar Oyna
              </button>
              <button
                onClick={onBack}
                className="w-full py-3 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 active:scale-95"
              >
                ← Geri Dön
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col px-4 py-6 relative">

      {/* Full-screen flash overlay */}
      {flashType && (
        <div
          key={flashKey}
          className={`fixed inset-0 pointer-events-none z-50 ${
            flashType === "correct" ? "quiz-flash-correct" : "quiz-flash-wrong"
          }`}
          style={{
            backgroundColor: flashType === "correct"
              ? "rgba(52, 211, 153, 0.28)"
              : "rgba(251, 113, 133, 0.28)",
          }}
        />
      )}

      <div className="w-full max-w-md mx-auto flex flex-col flex-1">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium"
          >
            ← Geri
          </button>
          <div className="text-sm font-semibold text-indigo-600">
            {displayEmoji} {level ?? ""}
          </div>
          <div className="flex items-center gap-2">
            {streak >= 2 && (
              <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-sm font-semibold">
                🔥 {streak}
              </div>
            )}
            <div className="bg-white rounded-full px-3 py-1 shadow-sm text-sm font-semibold text-gray-600">
              {score} <span className="text-gray-300">/</span> {totalQ}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-5">
          <div className="flex justify-between text-xs text-gray-400 mb-1.5">
            <span>Soru {currentIndex + 1} / {totalQ}</span>
            <span>{current.item.category}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Word card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-5 text-center flex-shrink-0 relative">
          {/* Star button */}
          <button
            onClick={handleStar}
            title={starred ? "Favorilerden çıkar" : "Favorilere ekle"}
            className={`absolute top-4 right-4 text-2xl transition-all duration-200 active:scale-110 ${
              starred ? "text-yellow-400" : "text-gray-200 hover:text-yellow-300"
            }`}
          >
            ★
          </button>

          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">Almanca</p>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight leading-tight break-words">
            {current.item.german}
          </h1>
          <p className="text-sm text-gray-400 mt-3">Türkçe karşılığı nedir?</p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3 mb-4">
          {current.options.map((option) => (
            <button
              key={option}
              className={getButtonClass(option)}
              onClick={() => handleSelect(option)}
            >
              <span className="flex items-center gap-3">
                {answerState !== "idle" && option === current.correct && (
                  <span className="text-emerald-500 font-bold text-lg leading-none">✓</span>
                )}
                {answerState === "wrong" && option === selected && option !== current.correct && (
                  <span className="text-rose-500 font-bold text-lg leading-none">✗</span>
                )}
                {option}
              </span>
            </button>
          ))}
        </div>

        {/* Feedback + example sentence + next button */}
        {answerState !== "idle" && (
          <div className="mt-auto flex flex-col gap-3">
            {/* Result banner */}
            <div
              className={`rounded-2xl px-5 py-3 text-center font-semibold text-sm ${
                answerState === "correct"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-rose-100 text-rose-700"
              }`}
            >
              {answerState === "correct"
                ? streak >= 3
                  ? `🔥 ${streak} seri! Harika gidiyorsun!`
                  : "✓ Doğru! Tebrikler!"
                : `✗ Yanlış. Doğru cevap: ${current.correct}`}
            </div>

            {/* Example sentence */}
            <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">Örnek Cümle</p>
              <p className="text-gray-800 font-medium text-sm leading-relaxed">
                🇩🇪 {current.item.exampleDe}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mt-1">
                🇹🇷 {current.item.exampleTr}
              </p>
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 active:scale-95"
            >
              {currentIndex + 1 >= totalQ ? "Sonuçları Gör →" : "Sonraki Soru →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
