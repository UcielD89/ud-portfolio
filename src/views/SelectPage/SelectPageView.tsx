import { Link } from "react-router-dom";
import "./SelectPageStyles.css";
import { MdArrowOutward, MdOutlineKeyboardArrowLeft } from "react-icons/md";

function SelectPageView() {
  return (
    <section className="select-page-container">
      <div className="select-return-page">
        <MdOutlineKeyboardArrowLeft />
        <span>VOLVER</span>
      </div>
      <article className="select-page-list">
        <Link className="select-page-item" to="/about-us">
          SOBRE MI <MdArrowOutward size={40} />
        </Link>
        <Link className="select-page-item" to="/projects">
          PROYECTOS <MdArrowOutward size={40} />
        </Link>
        <Link className="select-page-item" to="/contact">
          CONTACTO <MdArrowOutward size={40} />
        </Link>
      </article>
      <span>UCIEL DARÓ</span>
    </section>
  );
}

export default SelectPageView;
