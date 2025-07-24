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
import ProjectView from "./views/Projects/views/Project/ProjectView";

interface PageTransitionProps {
  children: ReactNode;
  transition: number;
}

function PageTransition({ children, transition }: PageTransitionProps) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = containerRef.current;
    switch (transition) {
      case 1:
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
        break;
      case 2:
        if (el) {
          // Desactivar scroll temporalmente
          document.body.style.overflow = "hidden";

          gsap.fromTo(
            el,
            { y: "100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.8,
              ease: "power4.out",
              onComplete: () => {
                document.body.style.overflow = "auto";
              },
            }
          );
        }
        break;
    }
  }, [location]);

  return <main ref={containerRef}>{children}</main>;
}

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={
            <PageTransition transition={1}>
              <HomeView />
            </PageTransition>
          }
        />
        <Route
          path="/select-page"
          element={
            <PageTransition transition={1}>
              <SelectPageView />
            </PageTransition>
          }
        />
        <Route
          path="/about-us"
          element={
            <PageTransition transition={2}>
              <AboutView />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition transition={2}>
              <ProjectsView />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition transition={2}>
              <ContactView />
            </PageTransition>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <PageTransition transition={2}>
              <ProjectView />
            </PageTransition>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
