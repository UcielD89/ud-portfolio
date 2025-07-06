import { MdOutlineArrowOutward } from "react-icons/md";
import "./ProjectViewStyles.css";
import { Link } from "react-router-dom";

function ProjectView() {
  const htmlContent = `
    <p>Este es un texto con <strong>negrita</strong> y un salto de línea.<br><br></p>
    <p>Acá hay una imagen:</p>
    <img src="https://picsum.photos/200/300" alt="ejemplo" style="max-width: 100%; height: auto;" />
    <br><br>
    <p>Y acá sigue el contenido con otra imagen:</p>
    <img src="https://picsum.photos/200/300" alt="segunda imagen" style="max-width: 100%; height: auto;" />
    <img src="https://picsum.photos/200/300" alt="ejemplo" style="max-width: 100%; height: auto;" />
    <br><br>
    <p>Y acá sigue el contenido con otra imagen:</p>
    <img src="https://picsum.photos/200/300" alt="segunda imagen" style="max-width: 100%; height: auto;" />
    <img src="https://picsum.photos/200/300" alt="ejemplo" style="max-width: 100%; height: auto;" />
    <br><br>
    <p>Y acá sigue el contenido con otra imagen:</p>
    <img src="https://picsum.photos/200/300" alt="segunda imagen" style="max-width: 100%; height: auto;" />
    <img src="https://picsum.photos/200/300" alt="ejemplo" style="max-width: 100%; height: auto;" />
    <br><br>
    <p>Y acá sigue el contenido con otra imagen:</p>
    <img src="https://picsum.photos/200/300" alt="segunda imagen" style="max-width: 100%; height: auto;" />
    <img src="https://picsum.photos/200/300" alt="ejemplo" style="max-width: 100%; height: auto;" />
    <br><br>
    <p>Y acá sigue el contenido con otra imagen:</p>
    <img src="https://picsum.photos/200/300" alt="segunda imagen" style="max-width: 100%; height: auto;" />
    <img src="https://picsum.photos/200/300" alt="ejemplo" style="max-width: 100%; height: auto;" />
    <br><br>
    <p>Y acá sigue el contenido con otra imagen:</p>
    <img src="https://picsum.photos/200/300" alt="segunda imagen" style="max-width: 100%; height: auto;" />
  `;
  return (
    <section className="project-container">
      
      <div className="project-content">
        <h1>
          PROYECTO /
          <br />
          <span>VERVERDE</span>
        </h1>
        <div className="project-image">
          <img
            src="https://images.pexels.com/photos/32862970/pexels-photo-32862970.jpeg"
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className="project-caracteristics">
          <div className="project-caracteristics-item">
            <h2>SERVICIOS</h2>
            <p>
              Diseño Web / Diseño logotipo / Desarrollo Web / Implementación /
              Mantemiento{" "}
            </p>
          </div>
          <div className="project-caracteristics-item">
            <h2>TECNOLOGÍAS</h2>
            <p>React / Material UI / MySQL / NodeJS</p>
          </div>
          <div className="project-caracteristics-item">
            <h2>CLIENTE</h2>
            <p>UBISat Tecnologías</p>
          </div>
          <Link
            to="https://expenses-control-b4dbb.web.app/"
            className="link-project"
          >
            <MdOutlineArrowOutward size={20} color="#F2F2F2" /> IR AL SITIO
          </Link>
        </div>
        <div className="project-description">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
      </div>
    </section>
  );
}

export default ProjectView;
