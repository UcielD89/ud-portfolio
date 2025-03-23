import "./AboutViewStyles.css";
import Tilt from "react-parallax-tilt";

import perfil_img from "../../assets/img/perfil_img.png";

import react_logo from "../../assets/svg/react-logo.svg";
import bootstrap_logo from "../../assets/svg/bootstrap-logo.svg";
import material_ui_logo from "../../assets/svg/material-ui-logo.svg";

import js_logo from "../../assets/svg/js-logo.svg";
import css_logo from "../../assets/svg/css-3-logo.svg";
import html_logo from "../../assets/svg/html-5-logo.svg";
import php_logo from "../../assets/svg/php3-logo.svg";

import node_js_logo from "../../assets/svg/node-js-logo.svg";
import express_logo from "../../assets/svg/express-logo.svg";
import prisma_logo from "../../assets/svg/prisma-logo.svg";
import mysql_logo from "../../assets/svg/mysql-logo.svg";
import xampp_logo from "../../assets/svg/xampp-logo.svg";
import firebase_logo from "../../assets/svg/firebase-logo.svg";

import figma_logo from "../../assets/svg/figma-logo.svg";
import canva_logo from "../../assets/svg/canva-logo.svg";
import github_logo from "../../assets/svg/github-logo.svg";
import bitbucket_logo from "../../assets/svg/bitbucket-logo.svg";
import trello_logo from "../../assets/svg/trello-logo.svg";
import google_docs_logo from "../../assets/svg/google-docs-logo.svg";
import google_sheets_logo from "../../assets/svg/google-sheets-logo.svg";
import google_slides_logo from "../../assets/svg/google-slides-logo.svg";

function AboutView() {
  return (
    <section className="about-us-container">
      <div className="about-us-title">
        <h1>SOBRE MI</h1>
      </div>
      <div className="about-us-content">
        <div className="about-us-presentation">
          <div className="about-us-profile-img">
            <img
              src={perfil_img}
              alt="Imagen de perfil"
              width={250}
              height={250}
            />
          </div>
          <div className="about-us-presentation-description">
            <p>
              <strong>“Soy un apaciado del diseño y desarrollo web”</strong>
            </p>
            <p>
              Cada proyecto es el punto de inicio para crear nuevas experiencias
              tanto para los clientes como los usuarios, siempre intento
              reflejar eso. Amante de la tecnologia y principalmente el
              desarrollo de software, trabajo tanto en desarrollos de paginas
              webs y aplicaciones como implementaciones de servicios del lado
              del servidor (APIs)
            </p>
          </div>
        </div>
        <article className="about-us-experience">
          <h2>EXPERIENCIA</h2>
          <div className="about-us-experience-list">
            <div className="about-us-experience-item">
              <h3>Desarrollador Freelance</h3>
              <p>2023 - Actualidad / UBISat Tecnologías</p>
              <ul>
                <li>
                  <p>Desarrollo de nuevas funcionalidades</p>
                </li>
                <li>
                  <p>Manteamiento de funcionalidades y procesos</p>
                </li>
                <li>
                  <p>Control de versiones por medio de GIT y Bitbucket</p>
                </li>
                <li>
                  <p>Diseño de diferentes interfaces</p>
                </li>
              </ul>
            </div>
            <div className="about-us-experience-item">
              <h3>Desarrollador Freelance</h3>
              <p>2023 - Actualidad / VerVerde</p>
              <ul>
                <li>
                  Desarrollo de nuevas funcionalidades - Funcionalidades para la
                  aplicación del cliente (frontend) como para la aplicación del
                  servidor (backend).
                </li>
                <li>
                  Análisis de nuevos requerimientos funcionales y no
                  funcionales.
                </li>
                <li>Gestión de versiones por medio de GIT y GitHub.</li>
                <li>Diseño de las diferentes interfaces.</li>
                <li>Mantenibilidad de los sistemas.</li>
                <li>Gestión del hosting donde están alojados los sistemas.</li>
              </ul>
            </div>
            <div className="about-us-experience-item">
              <h3>Desarrollador Frontend</h3>
              <p>2023 / Instituto Zone Oeste</p>
              <ul>
                <li>Desarrollo Frontend del Sitio Oficial</li>
                <li>Diseño integral del todas las secciones</li>
                <li>Análisis de requerimientos con el cliente</li>
              </ul>
            </div>
          </div>
        </article>
        <article className="about-us-skills">
          <h2>HARD SKILLS</h2>
          <div className="about-us-skills-item">
            <h3>FRONTEND</h3>
            <ul className="about-us-skills-list">
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={js_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#F7DF1E" }}>JAVASCRIPT</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={css_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#33AADD" }}>CSS3</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={html_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#F16529" }}>HTML5</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={php_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#8993BE" }}>PHP</p>
                </li>
              </Tilt>
            </ul>
          </div>
          <div className="about-us-skills-item">
            <h3>FRONTEND</h3>
            <ul className="about-us-skills-list">
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={react_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#53c1de" }}>REACT</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={bootstrap_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#8F68CB" }}>BOOTSTRAP</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={material_ui_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#00B0FF" }}>MATERIAL UI</p>
                </li>
              </Tilt>
            </ul>
          </div>
          <div className="about-us-skills-item">
            <h3>BACKEND</h3>
            <ul className="about-us-skills-list">
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={node_js_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#8cc84b" }}>NODE JS</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={express_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p>EXPRESS FRAMEWORK</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={mysql_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#00B9E2" }}>MYSQL</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={prisma_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p>PRISMA ORM</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={xampp_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#fb7a24" }}>XAMPP</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={firebase_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#fcca3f" }}>FIREBASE</p>
                </li>
              </Tilt>
            </ul>
          </div>
          <div className="about-us-skills-item">
            <h3>TOOLS</h3>
            <ul className="about-us-skills-list">
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={figma_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p>
                    <span style={{ color: "#F24E1E" }}>F</span>
                    <span style={{ color: "#FF7262" }}>I</span>
                    <span style={{ color: "#A259FF" }}>G</span>
                    <span style={{ color: "#1ABCFE" }}>M</span>
                    <span style={{ color: "#0ACF83" }}>A</span>
                  </p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={canva_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p
                    style={{
                      background: "linear-gradient(180deg, #04BECF, #7536EC)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    CANVA
                  </p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={github_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p>GITHUB</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={bitbucket_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#2684ff" }}>BITBUCKET</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={trello_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#008fe3" }}>TRELLO</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={google_docs_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#4285f4" }}>GOOGLE DOCS</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={google_sheets_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#34a853" }}>GOOGLE SHEETS</p>
                </li>
              </Tilt>
              <Tilt>
                <li className="about-us-skills-element">
                  <img
                    src={google_slides_logo}
                    alt="Javascript Logo"
                    width={100}
                    height={100}
                  />
                  <p style={{ color: "#f5b912" }}>GOOGLE SLIDES</p>
                </li>
              </Tilt>
            </ul>
          </div>
        </article>
        <article className="about-us-soft-skills">
          <h2>SOFT SKILLS</h2>
          <div className="about-us-soft-skills-list">
            <div className="about-us-soft-skills-item">
              <span>🧩</span>
              <h3>Autodidacta</h3>
              <p>
                Investigación de nuevas herramientas, aprendizaje continuo y
                adaptación a cambios en el entorno tecnológico.
              </p>
            </div>
            <div className="about-us-soft-skills-item">
              <span>🚀</span>
              <h3>Resolución de Problemas</h3>
              <p>
                Identificación de cuellos de botella en proyectos, optimización
                de código y toma de decisiones basadas en datos.
              </p>
            </div>
            <div className="about-us-soft-skills-item">
              <span>🤝</span>
              <h3>Trabajo Colaborativo</h3>
              <p>
                Desarrollo de proyectos en conjunto, participación activa en
                reuniones y comunicación asertiva dentro del equipo.
              </p>
            </div>
          </div>
        </article>
        <article className="about-us-studies">
          <h2>ESTUDIOS</h2>
          <div></div>
        </article>
      </div>
    </section>
  );
}

export default AboutView;
