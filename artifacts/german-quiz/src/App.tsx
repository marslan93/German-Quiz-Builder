import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Quiz from "@/pages/Quiz";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Quiz} />
      <Route path="*">
        <div className="min-h-screen flex items-center justify-center text-gray-500">
          Sayfa bulunamadı
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
