import { AnimatePresence } from "motion/react";
import { Route, Routes } from "react-router-dom";

// Components and pages
import HomeView from "../../views/Home/HomeView";
import AboutView from "../../views/About/AboutView";
import ProjectsView from "../../views/Projects/ProjectsView";
import ContactView from "../../views/Contact/ContactView";
import SelectPageView from "../../views/SelectPage/SelectPageView";
import ProjectView from "../../views/Projects/views/Project/ProjectView";

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/select-page" element={<SelectPageView />} />
        <Route path="/about-us" element={<AboutView />} />
        <Route path="/projects" element={<ProjectsView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/projects/:slug" element={<ProjectView />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
