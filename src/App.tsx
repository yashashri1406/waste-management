import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Awareness from "./pages/Awareness";
import CircularEconomy from "./pages/CircularEconomy";
import CitizenScore from "./pages/CitizenScore";
import Reporting from "./pages/Reporting";
import Admin from "./pages/Admin";
import Schedule from "./pages/Schedule";
import Centers from "./pages/Centers";
import Map from "./pages/Map";
import Impact from "./pages/Impact";
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
          <Route path="/map" element={<Map />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/circular-economy" element={<CircularEconomy />} />
          <Route path="/credits" element={<CitizenScore />} />
          <Route path="/report" element={<Reporting />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/recommendations" element={<Recommendations />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;