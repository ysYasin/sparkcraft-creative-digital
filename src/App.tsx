import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Ebook from "./pages/Ebook";
import Courses from "./pages/Courses";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebDevelopment from "./pages/WebDevelopment";
import ContentStrategy from "./pages/ContentStrategy";
import VideoProduction from "./pages/VideoProduction";
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
          <Route path="/about" element={<About />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/content-strategy" element={<ContentStrategy />} />
          <Route path="/video-production" element={<VideoProduction />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
