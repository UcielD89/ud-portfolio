import { MdOutlineArrowOutward } from "react-icons/md";
import "./ProjectViewStyles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectsBySlug } from "../../../../services/projectsServices";

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface ProjectProps {
  cliente: string;
  servicios: string;
  tecnologias: string;
  empresa: string;
  descripcion: string;
  foto: string;
  nombre: string;
  link: string;
};

function ProjectView() {
  // Hooks
  const { slug } = useParams();
  const navigate = useNavigate();

  // States
  const [project, setProject] = useState<ProjectProps | any>(null);
  const [loading, setLoading] = useState(true);

  // UseEffect implement
  useEffect(() => {
    if (slug) {
      getProjectsBySlug(slug)
      .then((data) => {
        if (data) {
          setProject(data);
        } else {
          navigate("/projects");
        }
      })
      .finally(() => setLoading(false));
    }
  }, [slug])
  
  return (
    <section className="project-container">
      {!loading ? (
        <div className="project-content">
        <h1>
          PROYECTO /
          <br />
          <span>{project.nombre}</span>
        </h1>
        <div className="project-image">
          <img
            src={project.foto}
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className="project-caracteristics">
          <div className="project-caracteristics-item">
            <h2>SERVICIOS</h2>
            <p>
              {project.servicios.join(" / ")}
            </p>
          </div>
          <div className="project-caracteristics-item">
            <h2>TECNOLOGÍAS</h2>
            <p>{project.tecnologias.join(" / ")}</p>
          </div>
          <div className="project-caracteristics-item">
            <h2>CLIENTE</h2>
            <p>{project.cliente}</p>
          </div>
          <Link
            to={project.link}
            className="link-project"
          >
            <MdOutlineArrowOutward size={20} color="#F2F2F2" /> IR AL SITIO
          </Link>
        </div>
        <div className="project-description">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {project.descripcion}
          </ReactMarkdown>
        </div>
      </div>
      ) : (
        <></>
      ) }
    </section>
  );
}

export default ProjectView;
