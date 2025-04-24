import "./HomeViewStyles.css";

import NavigateForView from "../../components/NavigateForView/NavigateForView";
import { ReactRef } from "@gsap/react";

interface HomeViewProp {
  containerRef: ReactRef | null;
}

function HomeView({containerRef} : HomeViewProp) {
  return (
    <section className="home-container" ref={containerRef}>
      <div className="home-name">
        <h1>UCIEL DARÓ</h1>
        <h4>FULLSTACK DEVELOR</h4>
      </div>
      <NavigateForView to="/select-page" select_text={1} />
      <div className="bg-decor" aria-hidden="true">
        <div className="bg-shape"></div>
      </div>
      <div className="bg-decor-2" aria-hidden="true">
        <div className="bg-shape-2"></div>
      </div>
    </section>
  );
}

export default HomeView;
