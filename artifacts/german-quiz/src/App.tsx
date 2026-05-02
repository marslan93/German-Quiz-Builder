import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LevelSelect from "@/pages/LevelSelect";
import Quiz from "@/pages/Quiz";
import Favorites from "@/pages/Favorites";
import Mistakes from "@/pages/Mistakes";
import Notes from "@/pages/Notes";
import { Level, vocabulary } from "@/data/vocabulary";

const queryClient = new QueryClient();

type Screen =
  | { type: "home" }
  | { type: "quiz"; level: Level; quizLength: number }
  | { type: "favorites" }
  | { type: "mistakes" }
  | { type: "notes" }
  | { type: "practice-favorites" }
  | { type: "practice-mistakes" };

function AppInner() {
  const [screen, setScreen] = useState<Screen>({ type: "home" });

  const home = () => setScreen({ type: "home" });

  const getFavPool = () =>
    vocabulary.filter((v) => {
      try {
        const stored: string[] = JSON.parse(
          localStorage.getItem("gq_favorites") || "[]"
        );
        return stored.includes(v.german);
      } catch {
        return false;
      }
    });

  const getMistakePool = () =>
    vocabulary.filter((v) => {
      try {
        const stored: string[] = JSON.parse(
          localStorage.getItem("gq_mistakes") || "[]"
        );
        return stored.includes(v.german);
      } catch {
        return false;
      }
    });

  if (screen.type === "home") {
    return (
      <LevelSelect
        onSelectQuiz={(level, quizLength) =>
          setScreen({ type: "quiz", level, quizLength })
        }
        onFavorites={() => setScreen({ type: "favorites" })}
        onMistakes={() => setScreen({ type: "mistakes" })}
        onNotes={() => setScreen({ type: "notes" })}
      />
    );
  }

  if (screen.type === "quiz") {
    return (
      <Quiz
        level={screen.level}
        quizLength={screen.quizLength}
        onBack={home}
      />
    );
  }

  if (screen.type === "favorites") {
    return (
      <Favorites
        onBack={home}
        onPractice={() => setScreen({ type: "practice-favorites" })}
      />
    );
  }

  if (screen.type === "mistakes") {
    return (
      <Mistakes
        onBack={home}
        onPractice={() => setScreen({ type: "practice-mistakes" })}
      />
    );
  }

  if (screen.type === "notes") {
    return <Notes onBack={home} />;
  }

  if (screen.type === "practice-favorites") {
    return (
      <Quiz
        customPool={getFavPool()}
        quizTitle="⭐ Favoriten-Quiz"
        quizEmoji="⭐"
        quizLength={10}
        onBack={() => setScreen({ type: "favorites" })}
      />
    );
  }

  if (screen.type === "practice-mistakes") {
    return (
      <Quiz
        customPool={getMistakePool()}
        quizTitle="❌ Fehler-Quiz"
        quizEmoji="❌"
        quizLength={10}
        onBack={() => setScreen({ type: "mistakes" })}
      />
    );
  }

  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppInner />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
