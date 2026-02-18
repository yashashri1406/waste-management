import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Education from "./pages/Education";
import Marketplace from "./pages/Marketplace";
import CitizenScore from "./pages/CitizenScore";
import Reporting from "./pages/Reporting";
import Admin from "./pages/Admin";
import Schedule from "./pages/Schedule";
import Centers from "./pages/Centers";
import Intelligence from "./pages/Intelligence";
import Recommendations from "./pages/Recommendations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/education" element={<Education />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/credits" element={<CitizenScore />} />
          <Route path="/report" element={<Reporting />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/recommendations" element={<Recommendations />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;