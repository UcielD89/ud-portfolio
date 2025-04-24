import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useRef } from "react";

// Components and pages
import NavbarComponent from "./components/Navbar/NavbarComponent";
import PageTransition from "./components/PageTransition/PageTransition";

const HomeView = lazy(() => import('./views/Home/HomeView.tsx'));
const AboutView = lazy(() => import('./views/About/AboutView.tsx'));
const ProjectsView = lazy(() => import('./views/Projects/ProjectsView.tsx'));
const ContactView = lazy(() => import('./views/Contact/ContactView.tsx'));
const SelectPageView = lazy(() => import('./views/SelectPage/SelectPageView.tsx'));

function App() {
  const containerRef = useRef(null);
  return (
    <main>
      <Suspense fallback={<h1>Carga...</h1>}>
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
      </Suspense>
    </main>
  );
}

export default App;
