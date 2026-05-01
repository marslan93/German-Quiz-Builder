import { useState, useCallback, useEffect } from "react";
import { vocabulary, VocabItem } from "@/data/vocabulary";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getWrongOptions(correct: VocabItem, all: VocabItem[]): string[] {
  const pool = all.filter((v) => v.turkish !== correct.turkish);
  return shuffle(pool)
    .slice(0, 3)
    .map((v) => v.turkish);
}

interface Question {
  item: VocabItem;
  options: string[];
  correct: string;
}

function buildQuestion(item: VocabItem, all: VocabItem[]): Question {
  const wrong = getWrongOptions(item, all);
  const options = shuffle([item.turkish, ...wrong]);
  return { item, options, correct: item.turkish };
}

type AnswerState = "idle" | "correct" | "wrong";

const TOTAL_QUESTIONS = 10;

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [finished, setFinished] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const initQuiz = useCallback(() => {
    const shuffled = shuffle(vocabulary).slice(0, TOTAL_QUESTIONS);
    const qs = shuffled.map((item) => buildQuestion(item, vocabulary));
    setQuestions(qs);
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setAnswerState("idle");
    setFinished(false);
    setStreak(0);
    setBestStreak(0);
  }, []);

  useEffect(() => {
    initQuiz();
  }, [initQuiz]);

  const current = questions[currentIndex];

  const handleSelect = (option: string) => {
    if (answerState !== "idle") return;
    setSelected(option);
    const isCorrect = option === current.correct;
    if (isCorrect) {
      setScore((s) => s + 1);
      setStreak((s) => {
        const newStreak = s + 1;
        setBestStreak((b) => Math.max(b, newStreak));
        return newStreak;
      });
      setAnswerState("correct");
    } else {
      setStreak(0);
      setAnswerState("wrong");
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= TOTAL_QUESTIONS) {
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
      return base + "border-indigo-100 bg-white text-gray-800 hover:border-indigo-400 hover:bg-indigo-50 active:scale-95 cursor-pointer shadow-sm";
    }

    if (option === current.correct) {
      return base + "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-md";
    }

    if (option === selected && answerState === "wrong") {
      return base + "border-rose-500 bg-rose-50 text-rose-800 shadow-md";
    }

    return base + "border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed";
  };

  const progress = questions.length > 0 ? ((currentIndex) / TOTAL_QUESTIONS) * 100 : 0;

  const getScoreEmoji = () => {
    if (score >= 9) return "🏆";
    if (score >= 7) return "🌟";
    if (score >= 5) return "👍";
    return "📚";
  };

  const getScoreMessage = () => {
    if (score >= 9) return "Mükemmel! Harika bir performans!";
    if (score >= 7) return "Çok iyi! Devam et!";
    if (score >= 5) return "İyi gidiyorsun!";
    return "Daha fazla pratik yapabilirsin!";
  };

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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Bitti!</h2>
            <p className="text-gray-500 mb-6">{getScoreMessage()}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-indigo-50 rounded-2xl p-4">
                <p className="text-3xl font-bold text-indigo-600">{score}/{TOTAL_QUESTIONS}</p>
                <p className="text-sm text-indigo-400 mt-1">Skor</p>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4">
                <p className="text-3xl font-bold text-amber-600">{bestStreak}</p>
                <p className="text-sm text-amber-400 mt-1">En Uzun Seri</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Başarı Oranı</span>
                <span>{Math.round((score / TOTAL_QUESTIONS) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
                  style={{ width: `${(score / TOTAL_QUESTIONS) * 100}%` }}
                />
              </div>
            </div>

            <button
              onClick={initQuiz}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 active:scale-95"
            >
              Tekrar Oyna
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col px-4 py-6">
      <div className="w-full max-w-md mx-auto flex flex-col flex-1">

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              🇩🇪 Quiz
            </span>
          </div>
          <div className="flex items-center gap-3">
            {streak >= 2 && (
              <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                🔥 {streak}
              </div>
            )}
            <div className="bg-white rounded-full px-3 py-1 shadow-sm text-sm font-semibold text-gray-600">
              {score} <span className="text-gray-300">/</span> {TOTAL_QUESTIONS}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-400 mb-1.5">
            <span>Soru {currentIndex + 1}/{TOTAL_QUESTIONS}</span>
            <span>{current.item.category}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6 text-center flex-shrink-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">Almanca</p>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight leading-tight break-words">
            {current.item.german}
          </h1>
          <p className="text-sm text-gray-400 mt-3">Türkçe karşılığı nedir?</p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {current.options.map((option) => (
            <button
              key={option}
              className={getButtonClass(option)}
              onClick={() => handleSelect(option)}
            >
              <span className="flex items-center gap-3">
                {answerState !== "idle" && option === current.correct && (
                  <span className="text-emerald-500 font-bold text-lg">✓</span>
                )}
                {answerState === "wrong" && option === selected && option !== current.correct && (
                  <span className="text-rose-500 font-bold text-lg">✗</span>
                )}
                {option}
              </span>
            </button>
          ))}
        </div>

        {answerState !== "idle" && (
          <div className="mt-auto">
            <div className={`rounded-2xl p-4 mb-4 text-center font-semibold ${answerState === "correct" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>
              {answerState === "correct"
                ? streak >= 3
                  ? `🔥 ${streak} seri! Harika!`
                  : "Doğru! Tebrikler!"
                : `Yanlış. Doğru cevap: ${current.correct}`}
            </div>
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 active:scale-95"
            >
              {currentIndex + 1 >= TOTAL_QUESTIONS ? "Sonuçları Gör" : "Sonraki Soru →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
