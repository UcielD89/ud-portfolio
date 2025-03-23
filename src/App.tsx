import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// Components and pages
import NavbarComponent from "./components/Navbar/NavbarComponent";
import HomeView from "./views/Home/HomeView";
import AboutView from "./views/About/AboutView";
import ProjectsView from "./views/Projects/ProjectsView";
import ContactView from "./views/Contact/ContactView";
import SelectPageView from "./views/SelectPage/SelectPageView";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      // Desactivar scroll temporalmente
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        el,
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          onComplete: () => {
            document.body.style.overflow = "auto";
          },
        }
      );
    }
  }, [location]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        width: "100%",
        minHeight: "100%", 
        top: 0,
        left: 0,
      }}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavbarComponent />
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/select-page" element={<SelectPageView />} />
            <Route path="/about-us" element={<AboutView />} />
            <Route path="/projects" element={<ProjectsView />} />
            <Route path="/contact" element={<ContactView />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </main>
  );
}

export default App;
