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
          {/* Fallback routes for unimplemented pages to keep UI functional */}
          <Route path="/schedule" element={<Index />} />
          <Route path="/centers" element={<Index />} />
          <Route path="/intelligence" element={<Admin />} />
          <Route path="/recommendations" element={<Admin />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;