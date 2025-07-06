import "./ProjectsViewStyles.css";

import ververde_logo from "../../assets/svg/logo_ververde.svg";
import ubisat_logo from "../../assets/img/ubisat_logo.webp";
import logo_izo from "../../assets/img/logo_izo.webp";
import logo_ec from "../../assets/svg/logo_ec.svg";
import { Link } from "react-router-dom";


function ProjectsView() {
  return (
    <section className="projects-container">
      <h1>PROYECTOS</h1>
      <div className="projects-list">
        <Link to="/projects/expenses-control" className="projects-list-item">
          <div></div>
          <img src={ververde_logo} alt="" width={200} height={100} />
          <div className="projects-item-description">
            <h2>VerVerde</h2>
            <div className="projects-item-details">
              <h3>Admin Dashboard / Entreprise Page</h3>
              <h4>2023</h4>
            </div>
          </div>
        </Link>
        <Link to="/projects/expenses-control" className="projects-list-item">
          <div></div>
          <img src={ubisat_logo} alt="" width={200} height={100} />
          <div className="projects-item-description">
            <h2>UBISat Tecnologias</h2>
            <div className="projects-item-details">
              <h3>System Management GPS</h3>
              <h4>2023</h4>
            </div>
          </div>
        </Link>
        <Link to="/projects/expenses-control" className="projects-list-item">
          <div></div>
          <img src={logo_izo} alt="" width={200} height={100} />
          <div className="projects-item-description">
            <h2>Instituto Zona Oeste</h2>
            <div className="projects-item-details">
              <h3>Institutional Page</h3>
              <h4>2023</h4>
            </div>
          </div>
        </Link>
        <Link to="/projects/expenses-control" className="projects-list-item">
          <div></div>
          <img src={logo_ec} alt="" width={200} height={100} />
          <div className="projects-item-description">
            <h2>Expenses Control</h2>
            <div className="projects-item-details">
              <h3>Expense Management System</h3>
              <h4>2024</h4>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ProjectsView;
