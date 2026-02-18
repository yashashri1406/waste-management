import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Infrastructure from "./pages/Infrastructure";
import Schedule from "./pages/Schedule";
import Map from "./pages/Map";
import Awareness from "./pages/Awareness";
import Centers from "./pages/Centers";
import Resources from "./pages/Resources";
import Achievements from "./pages/Achievements";
import Reporting from "./pages/Reporting";
import Impact from "./pages/Impact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/map" element={<Map />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/centers" element={<Centers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/report" element={<Reporting />} />
            <Route path="/impact" element={<Impact />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;