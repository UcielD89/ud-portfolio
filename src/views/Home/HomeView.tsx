import { Link } from "react-router-dom";
import "./HomeViewStyles.css";

import arrow_1 from "../../assets/svg/arrow_1.svg";
import NavigateForView from "../../components/NavigateForView/NavigateForView";

function HomeView() {
  return (
    <section className="home-container">
      <div className="home-name">
        <h1>UCIEL DARÓ</h1>
        <h4>FULLSTACK DEVELOR</h4>
      </div>
      <NavigateForView to="/select-page" select_text={1} orientation={1} />
    </section>
  );
}

export default HomeView;
