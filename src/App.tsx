import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components and pages
import NavbarComponent from "./components/Navbar/NavbarComponent";
import HomeView from "./views/Home/HomeView";
import AboutView from "./views/About/AboutView";
import ProjectsView from "./views/Projects/ProjectsView";
import ContactView from "./views/Contact/ContactView";
import SelectPageView from "./views/SelectPage/SelectPageView";
import PageTransition from "./components/PageTransition/PageTransition";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);
  return (
    <main>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition
                orientation="horizontal"
                animation="power4.out"
                containerRef={containerRef}
              >
                <HomeView containerRef={containerRef} />
              </PageTransition>
            }
          />
          <Route
            path="/select-page"
            element={
              <PageTransition
                orientation="horizontal"
                animation="power4.out"
                containerRef={containerRef}
              >
                <SelectPageView containerRef={containerRef} />
              </PageTransition>
            }
          />
          <Route
            path="/about-us"
            element={
              <PageTransition
                orientation="vertical"
                animation="power4.out"
                containerRef={containerRef}
              >
                <AboutView containerRef={containerRef} />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition
                orientation="vertical"
                animation="power4.out"
                containerRef={containerRef}
              >
                <ProjectsView containerRef={containerRef} />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition
                orientation="vertical"
                animation="power4.in"
                containerRef={containerRef}
              >
                <ContactView containerRef={containerRef} />
              </PageTransition>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
