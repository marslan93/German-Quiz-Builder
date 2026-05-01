import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LevelSelect from "@/pages/LevelSelect";
import Quiz from "@/pages/Quiz";
import { Level } from "@/data/vocabulary";

const queryClient = new QueryClient();

function App() {
  const [level, setLevel] = useState<Level | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {level === null ? (
          <LevelSelect onSelect={setLevel} />
        ) : (
          <Quiz level={level} onBack={() => setLevel(null)} />
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
