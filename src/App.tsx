import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About pages
import AboutUs from "./pages/about/AboutUs";
import ThePeople from "./pages/about/ThePeople";
import TheMission from "./pages/about/TheMission";
import PersonProfile from "./pages/about/PersonProfile";

// Resource pages
import Documents from "./pages/resources/Documents";
import Bylaws from "./pages/resources/Bylaws";
import ForTeachers from "./pages/resources/ForTeachers";
import ForStudents from "./pages/resources/ForStudents";
import StartBoard from "./pages/resources/StartBoard";

// Blog
import BlogIndex from "./pages/blog/BlogIndex";
import BlogPost from "./pages/blog/BlogPost";

// Legislation pages
import LegislationIndex from "./pages/legislation/LegislationIndex";
import WhyAutoEnroll from "./pages/legislation/WhyAutoEnroll";
import PromoteLegislation from "./pages/legislation/PromoteLegislation";

// Applications
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/people" element={<ThePeople />} />
          <Route path="/about/people/:personId" element={<PersonProfile />} />
          <Route path="/about/mission" element={<TheMission />} />
          
          {/* Resource Routes */}
          <Route path="/resources/documents" element={<Documents />} />
          <Route path="/resources/documents/bylaws" element={<Bylaws />} />
          <Route path="/resources/teachers" element={<ForTeachers />} />
          <Route path="/resources/students" element={<ForStudents />} />
          <Route path="/resources/start-board" element={<StartBoard />} />
          
          {/* Blog */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Legislation Routes */}
          <Route path="/legislation" element={<LegislationIndex />} />
          <Route path="/legislation/why" element={<WhyAutoEnroll />} />
          <Route path="/legislation/promote" element={<PromoteLegislation />} />
          
          {/* Applications */}
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
