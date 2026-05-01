import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LevelSelect from "@/pages/LevelSelect";
import Quiz from "@/pages/Quiz";
import Favorites from "@/pages/Favorites";
import Mistakes from "@/pages/Mistakes";
import { Level, vocabulary } from "@/data/vocabulary";

const queryClient = new QueryClient();

type Screen =
  | { type: "home" }
  | { type: "quiz"; level: Level }
  | { type: "favorites" }
  | { type: "mistakes" }
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
        onSelect={(level) => setScreen({ type: "quiz", level })}
        onFavorites={() => setScreen({ type: "favorites" })}
        onMistakes={() => setScreen({ type: "mistakes" })}
      />
    );
  }

  if (screen.type === "quiz") {
    return <Quiz level={screen.level} onBack={home} />;
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

  if (screen.type === "practice-favorites") {
    return (
      <Quiz
        customPool={getFavPool()}
        quizTitle="⭐ Favorilerle Quiz"
        quizEmoji="⭐"
        onBack={() => setScreen({ type: "favorites" })}
      />
    );
  }

  if (screen.type === "practice-mistakes") {
    return (
      <Quiz
        customPool={getMistakePool()}
        quizTitle="❌ Hatalarla Quiz"
        quizEmoji="❌"
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
