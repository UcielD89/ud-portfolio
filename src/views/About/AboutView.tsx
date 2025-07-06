import "./AboutViewStyles.css";

import perfil_img from "../../assets/img/perfil_img.png";

import js_logo from "../../assets/svg/js-logo.svg";
import css_logo from "../../assets/svg/css-3-logo.svg";
import html_logo from "../../assets/svg/html-5-logo.svg";
import php_logo from "../../assets/svg/php3-logo.svg";
import typescript_logo from "../../assets/svg/typecript-logo.svg";

import react_logo from "../../assets/svg/react-logo.svg";
import react_native_logo from "../../assets/svg/react-native-logo.svg";
import bootstrap_logo from "../../assets/svg/bootstrap-logo.svg";
import material_ui_logo from "../../assets/svg/material-ui-logo.svg";

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

import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
} from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";

function AboutView() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(container.current!!.querySelectorAll(".about-us-skills-item"), {
        y: 75,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          toggleActions: "restart none none none", // Reproduce la animación una sola vez
        },
      });

      gsap.from(container.current!!.querySelectorAll(".about-us-skills-element"), {
        y: 75,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          toggleActions: "restart none none none", // Reproduce la animación una sola vez
        },
      });
    },
    { scope: container }
  );

  return (
    <section className="about-us-container" ref={container}>
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
              <strong>
                <RiDoubleQuotesL />
                Soy un apaciado del diseño y desarrollo web
                <RiDoubleQuotesR />
              </strong>
            </p>
            <p>
              Cada proyecto es el punto de inicio para crear nuevas experiencias
              tanto para los clientes como los usuarios, siempre intento
              reflejar eso. Amante de la tecnologia y principalmente el
              desarrollo de software, trabajo tanto en desarrollos de paginas
              webs y aplicaciones como implementaciones de servicios del lado
              del servidor (APIs).
            </p>
          </div>
        </div>
        <article className="about-us-experience">
          <h2>EXPERIENCIA</h2>
          <div className="about-us-experience-list">
            <div className="about-us-experience-item">
              <BsFill1CircleFill size="3rem" />
              <h3>Desarrollador Freelance</h3>
              <h4>2023 - Actualidad / UBISat Tecnologías</h4>
              <p>
                Desarrollé nuevas funcionalidades y mantuve los procesos
                existentes, asegurando su eficiencia y optimización. Gestioné el
                control de versiones con Git y Bitbucket, y participé en el
                diseño y mejora de interfaces para una experiencia de usuario
                más intuitiva.
              </p>
            </div>
            <div className="about-us-experience-item">
              <BsFill2CircleFill size="3rem" />
              <h3>Desarrollador Freelance</h3>
              <h4>2023 - Actualidad / VerVerde</h4>
              <p>
                Desarrollé e implementé funcionalidades en frontend y backend,
                analizando requerimientos funcionales y no funcionales para
                optimizar el sistema. Gestioné versiones con Git y GitHub,
                asegurando un control eficiente del código. Diseñé interfaces
                centradas en la experiencia del usuario y trabajé en la
                mantenibilidad de los sistemas. Además, administré el hosting y
                gestioné el despliegue de los sistemas.
              </p>
            </div>
            <div className="about-us-experience-item">
              <BsFill3CircleFill size="3rem" />
              <h3>Desarrollador Frontend</h3>
              <h4>2023 / Instituto Zone Oeste</h4>
              <p>
                Desarrollé el frontend del sitio oficial, encargándome del
                diseño integral de todas sus secciones. Además, realicé un
                análisis de requerimientos junto a los stakeholders para
                asegurarme de que el producto final cumpliera con sus
                necesidades y expectativas.
              </p>
            </div>
          </div>
        </article>
        <article className="about-us-skills">
          <h2>STACK</h2>
          <div className="about-us-skills-item">
            <h3>LANGUAGES</h3>
            <ul className="about-us-skills-list">
              <li className="about-us-skills-element">
                <img
                  src={js_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#F7DF1E" }}>JAVASCRIPT</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={css_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#33AADD" }}>CSS3</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={html_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#F16529" }}>HTML5</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={php_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#8993BE" }}>PHP</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={typescript_logo}
                  alt="Typescript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#007acc" }}>TYPESCRIPT</p>
              </li>
            </ul>
          </div>
          <div className="about-us-skills-item">
            <h3>FRONTEND</h3>
            <ul className="about-us-skills-list">
              <li className="about-us-skills-element">
                <img
                  src={react_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#53c1de" }}>REACT</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={react_native_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#087ea4" }}>REACT NATIVE</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={bootstrap_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#8F68CB" }}>BOOTSTRAP</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={material_ui_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#00B0FF" }}>MATERIAL UI</p>
              </li>
            </ul>
          </div>
          <div className="about-us-skills-item">
            <h3>BACKEND</h3>
            <ul className="about-us-skills-list">
              <li className="about-us-skills-element">
                <img
                  src={node_js_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#8cc84b" }}>NODE JS</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={express_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p>EXPRESS FRAMEWORK</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={mysql_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#00B9E2" }}>MYSQL</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={prisma_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p>PRISMA ORM</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={xampp_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#fb7a24" }}>XAMPP</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={firebase_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#fcca3f" }}>FIREBASE</p>
              </li>
            </ul>
          </div>
          <div className="about-us-skills-item">
            <h3>TOOLS</h3>
            <ul className="about-us-skills-list">
              <li className="about-us-skills-element">
                <img
                  src={figma_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p>
                  <span style={{ color: "#F24E1E" }}>F</span>
                  <span style={{ color: "#FF7262" }}>I</span>
                  <span style={{ color: "#A259FF" }}>G</span>
                  <span style={{ color: "#1ABCFE" }}>M</span>
                  <span style={{ color: "#0ACF83" }}>A</span>
                </p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={canva_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
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

              <li className="about-us-skills-element">
                <img
                  src={github_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p>GITHUB</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={bitbucket_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#2684ff" }}>BITBUCKET</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={trello_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#008fe3" }}>TRELLO</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={google_docs_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#4285f4" }}>GOOGLE DOCS</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={google_sheets_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#34a853" }}>GOOGLE SHEETS</p>
              </li>

              <li className="about-us-skills-element">
                <img
                  src={google_slides_logo}
                  alt="Javascript Logo"
                  width={60}
                  height={60}
                />
                <p style={{ color: "#f5b912" }}>GOOGLE SLIDES</p>
              </li>
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
          <div className="about-us-studies-list">
            <div className="about-us-studies-item">
              <h3>Licienciatura en Gestión de Tecnología Informática</h3>
              <h4>2024 - Actualidad / Universidad Abierta Interamericana</h4>
              <ul className="about-us-studies-list-abilities">
                <li>Progración Web</li>
                <li>Base de datos</li>
                <li>Gestión de proyectos</li>
                <li>Planificación</li>
                <li>Análisis</li>
              </ul>
            </div>
            <div className="about-us-studies-item">
              <h3>Tecnicatura Superior en Desarrollo de Software</h3>
              <h4>2022 - 2024 / Instituo Zona Oeste</h4>
              <ul className="about-us-studies-list-abilities">
                <li>Arquitecturas</li>
                <li>Patrones de Diseño</li>
                <li>Gestión de proyectos</li>
                <li>Frontend</li>
                <li>Backend</li>
                <li>Redes</li>
                <li>Base de datos</li>
              </ul>
            </div>
            <div className="about-us-studies-item">
              <h3>Diseño UX - UI</h3>
              <h4>2023 / Codo a Codo 4.0</h4>
              <ul className="about-us-studies-list-abilities">
                <li>UX / UI</li>
                <li>Diseño de Logotipos</li>
                <li>Sistemas de Diseño</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="about-us-studies-item">
              <h3>Desarrollador Web Full Stack Junior</h3>
              <h4>2022 / Argentina Programa</h4>
              <ul className="about-us-studies-list-abilities">
                <li>
                  <p>Frontend</p>
                </li>
                <li>Backend</li>
                <li>Git y Github</li>
                <li>Metodologias Agiles</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutView;
