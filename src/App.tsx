import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sports from "./pages/Sports";
import Cultural from "./pages/Cultural";
import Brochure from "./pages/Brochure";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Sports pages
import Football from "./pages/sports/Football";
import TableTennis from "./pages/sports/TableTennis";
import Basketball from "./pages/sports/Basketball";
import Badminton from "./pages/sports/Badminton";
import Athletics from "./pages/sports/Athletics";
import Chess from "./pages/sports/Chess";
import Volleyball from "./pages/sports/Volleyball";
import Carrom from "./pages/sports/Carrom";

// Cultural pages
import StepUp from "./pages/cultural/StepUp";
import Yugma from "./pages/cultural/Yugma";
import Breakfree from "./pages/cultural/Breakfree";
import Rangotsav from "./pages/cultural/Rangotsav";
import ArtAlive from "./pages/cultural/ArtAlive";
import Chromark from "./pages/cultural/Chromark";
import SketchSprint from "./pages/cultural/SketchSprint";
import CapturedCreations from "./pages/cultural/CapturedCreations";
import Galleria from "./pages/cultural/Galleria";
import MicDrop from "./pages/cultural/MicDrop";
import Synergy from "./pages/cultural/Synergy";
import Soundscapes from "./pages/cultural/Soundscapes";
import PlotTwist from "./pages/cultural/PlotTwist";
import SpotlightTales from "./pages/cultural/SpotlightTales";
import ColdWar from "./pages/cultural/ColdWar";
import HaHaHaveli from "./pages/cultural/HaHaHaveli";
import NoNotesNoMercy from "./pages/cultural/NoNotesNoMercy";
import VisualVerse from "./pages/cultural/VisualVerse";
import Aura from "./pages/cultural/Aura";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Sports Events */}
          <Route path="/sports/football" element={<Football />} />
          <Route path="/sports/table-tennis" element={<TableTennis />} />
          <Route path="/sports/basketball" element={<Basketball />} />
          <Route path="/sports/badminton" element={<Badminton />} />
          <Route path="/sports/athletics" element={<Athletics />} />
          <Route path="/sports/chess" element={<Chess />} />
          <Route path="/sports/volleyball" element={<Volleyball />} />
          <Route path="/sports/carrom" element={<Carrom />} />
          
          {/* Cultural Events */}
          <Route path="/cultural/step-up" element={<StepUp />} />
          <Route path="/cultural/yugma" element={<Yugma />} />
          <Route path="/cultural/breakfree" element={<Breakfree />} />
          <Route path="/cultural/rangotsav" element={<Rangotsav />} />
          <Route path="/cultural/art-alive" element={<ArtAlive />} />
          <Route path="/cultural/chromark" element={<Chromark />} />
          <Route path="/cultural/sketch-sprint" element={<SketchSprint />} />
          <Route path="/cultural/captured-creations" element={<CapturedCreations />} />
          <Route path="/cultural/galleria" element={<Galleria />} />
          <Route path="/cultural/mic-drop" element={<MicDrop />} />
          <Route path="/cultural/synergy" element={<Synergy />} />
          <Route path="/cultural/soundscapes" element={<Soundscapes />} />
          <Route path="/cultural/plot-twist" element={<PlotTwist />} />
          <Route path="/cultural/spotlight-tales" element={<SpotlightTales />} />
          <Route path="/cultural/cold-war" element={<ColdWar />} />
          <Route path="/cultural/ha-ha-haveli" element={<HaHaHaveli />} />
          <Route path="/cultural/no-notes-no-mercy" element={<NoNotesNoMercy />} />
          <Route path="/cultural/visual-verse" element={<VisualVerse />} />
          <Route path="/cultural/aura" element={<Aura />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
