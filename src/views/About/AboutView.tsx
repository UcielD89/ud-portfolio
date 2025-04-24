import "./AboutViewStyles.css";

import { ReactRef } from "@gsap/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// Image
import perfil from "../../assets/img/perfil.webp";

// Logos - Languages
import html from "../../assets/svg/language/html-logo.svg";
import css from "../../assets/svg/language/css-logo.svg";
import js from "../../assets/svg/language/js-logo.svg";
import php from "../../assets/svg/language/php-logo.svg";
import typescript from "../../assets/svg/language/typescript-logo.svg";

// Logos - Technologies
import react from "../../assets/svg/technologies/react-logo.svg";
import react_native from "../../assets/svg/technologies/react-native-logo.svg";
import tailwindcss from "../../assets/svg/technologies/tailwindcss-logo.svg";
import boostrap from "../../assets/svg/technologies/bootstrap-logo.svg";
import material_ui from "../../assets/svg/technologies/material-ui-logo.svg";

import nodejs from "../../assets/svg/technologies/node-logo.svg";
import express from "../../assets/svg/technologies/express-logo.svg";
import firebase from "../../assets/svg/technologies/firebase-logo.svg";
import mysql from "../../assets/svg/technologies/mysql-logo.svg";
import prisma from "../../assets/svg/technologies/prisma-orm-logo.svg";

// Logos - Tools
import figma from "../../assets/svg/tools/figma-logo.svg";
import canva from "../../assets/svg/tools/canva-logo.svg";
import bitbucket from "../../assets/svg/tools/bitbucket-logo.svg";
import chatgpt from "../../assets/svg/tools/chatgpt-logo.svg";
import github from "../../assets/svg/tools/github-logo.svg";
import google_docs from "../../assets/svg/tools/google-docs-logo.svg";
import google_drive from "../../assets/svg/tools/google-drive-logo.svg";
import notion from "../../assets/svg/tools/notion-logo.svg";
import trello from "../../assets/svg/tools/trello-logo.svg";

const hard_skills = [
  {
    title: "LENGUAJES",
    items: [
      {
        name: "HTML",
        image: html,
      },
      {
        name: "CSS",
        image: css,
      },
      {
        name: "JAVASCRIP",
        image: js,
      },
      {
        name: "PHP",
        image: php,
      },
      {
        name: "TYPESCRIPT",
        image: typescript,
      },
    ],
  },
  {
    title: "TECNOLOGIAS FRONTEND",
    items: [
      {
        name: "REACT",
        image: react,
      },
      {
        name: "REACT NATIVE",
        image: react_native,
      },
      {
        name: "TAILWIND CSS",
        image: tailwindcss,
      },
      {
        name: "BOOSTRAP",
        image: boostrap,
      },
      {
        name: "MATERIAL UI",
        image: material_ui,
      },
    ],
  },
  {
    title: "TECNOLOGIAS BACKEND",
    items: [
      {
        name: "NODE JS",
        image: nodejs,
      },
      {
        name: "EXPRESS",
        image: express,
      },
      {
        name: "FIREBASE",
        image: firebase,
      },
      {
        name: "MYSQL",
        image: mysql,
      },
      {
        name: "PRISMA ORM",
        image: prisma,
      },
    ],
  },
  {
    title: "HERRAMIENTAS",
    items: [
      {
        name: "FIGMA",
        image: figma,
      },
      {
        name: "CANVA",
        image: canva,
      },
      {
        name: "GITHUB",
        image: github,
      },
      {
        name: "BITBUCKET",
        image: bitbucket,
      },
      {
        name: "TRELLO",
        image: trello,
      },
      {
        name: "NOTION",
        image: notion,
      },
      {
        name: "GOOGLE DOCS",
        image: google_docs,
      },
      {
        name: "GOOGLE DIRVE",
        image: google_drive,
      },
      {
        name: "CHAT GPT",
        image: chatgpt,
      },
    ],
  },
];

const soft_skills = [
  {
    title: "Comunicación activa",
    description:
      "Puedo expresar ideas de forma clara y escuchar activamente, ayudando al entendimiento mutuo en cualquier equipo.",
    icono: "💬",
  },
  {
    title: "Trabajo en equipo",
    description:
      "Disposición para colaborar, compartir responsabilidades y contribuir al logro de objetivos comunes en ambientes diversos.",
    icono: "🤝",
  },
  {
    title: "Autodidacta",
    description:
      "Desde el principio y hasta ahora me encuentro en un constante aprendizaje y dispuesto a capasitarme en lo que necesite un proyecto.",
    icono: "🚀",
  },
  {
    title: "Pensamiento Crítico",
    description:
      "Analizo las problematicas desde diferentes perspectivas y a partir de esto tomo desiciones logicas y objetivas.",
    icono: "🧠",
  },
  {
    title: "Adaptabilidad",
    description:
      "Me capasito rapidamente a nuevos proyectos o antiguos, aprendiendo sus herramientas y metodologías implementadas.",
    icono: "🔄",
  },
  {
    title: "Creatividad",
    description:
      "Busco en lo posible soluciones originales y mejoras de procesos.",
    icono: "💡",
  },
];

const studies = [
  {
    title: "Licienciatura en Gestión de Tecnología Informática",
    date: "2024 - 2026",
    institute: "UAI - Universidad Abierta Interamericana",
    habilitates: [
      {
        name: "Gestión de Proyectos",
      },
      {
        name: "Metodologías Agiles",
      },
      {
        name: "Comunicación",
      },
      {
        name: "Marketing Digital",
      },
      {
        name: "Desarrollo de Software",
      },
    ],
  },
  {
    title: "Tecnico Superior en Desarrollo de Software",
    date: "2022 - 2024",
    institute: "Instituto Zona Oeste",
    habilitates: [
      {
        name: "Backend",
      },
      {
        name: "Frontend",
      },
      {
        name: "Analisis de requerimientos",
      },
      {
        name: "Patrones de Dieño",
      },
      {
        name: "Arquitecturas de Software",
      },
      {
        name: "Bases de Datos",
      },
      {
        name: "Redes",
      },
      {
        name: "Logica",
      },
      {
        name: "Administración de proyectos",
      },
    ],
  },
  {
    title: "Desarrollador Web Full Stack Junior",
    date: "2022",
    institute: "Argentina Programa - Programa #YoProgramo",
    habilitates: [
      {
        name: "Frontned",
      },
      {
        name: "Backend",
      },
      {
        name: "Base de datos",
      },
      {
        name: "Gestión de repositorios",
      },
    ],
  },
  {
    title: "Diseño UX/UI",
    date: "Septiembre 2023",
    institute: "Programa Codo a Codo 4.0",
    habilitates: [
      {
        name: "UX / UI",
      },
      {
        name: "Figma",
      },
      {
        name: "Sistemas de Diseño",
      },
      {
        name: "Prototipado",
      },
    ],
  },
];

interface AboutViewProps {
  containerRef: ReactRef | null;
}

function AboutView({ containerRef }: AboutViewProps) {
  return (
    <section className="about-us" ref={containerRef}>
      <div className="about-us-info">
        <h1 className="about-us-title">SOBRE MI.</h1>
        <div className="about-us-profile-img">
          <img src={perfil} alt="Imagen de Perfil" width={100} height={100} />
        </div>
        <div className="about-us-description">
          <p className="about-us-slogan">
            <RiDoubleQuotesL />
            Soy un apaciado del diseño y desarrollo web
            <RiDoubleQuotesR />
          </p>
          <p>
            Cada proyecto es el punto de inicio para crear nuevas experiencias
            tanto para los clientes como los usuarios, siempre intento reflejar
            eso. Amante de la tecnologia y principalmente el desarrollo de
            software, trabajo tanto en desarrollos de paginas webs y
            aplicaciones como implementaciones de servicios del lado del
            servidor (APIs).
          </p>
        </div>
      </div>
      <article className="about-us-hard-skills">
        <h2>HABILIDADES FUERTES</h2>
        {hard_skills.map((i, index) => (
          <div className="about-us-hard-skills-types" key={index}>
            <h3 className="about-us-hard-skills-title">{i.title}</h3>
            <ul className="about-us-hard-skills-items">
              {i.items.map((i, index) => (
                <li className="about-us-hard-skills-card" key={index}>
                  <img
                    className="about-us-hard-skills-card-content"
                    src={i.image}
                    width={60}
                    height={60}
                    alt={i.name}
                  />
                  <p className="about-us-hard-skills-card-title">{i.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </article>
      <article className="about-us-soft-skills">
        <h2>HABILIDADES BLANDAS</h2>
        <ul className="about-us-soft-skills-items">
          {soft_skills.map((i, index) => (
            <li className="about-us-soft-skills-card" key={index}>
              <span className="about-us-soft-skills-card-icon">{i.icono}</span>
              <h4 className="about-us-soft-skills-card-title">{i.title}</h4>
              <p className="about-us-soft-skills-card-content">
                {i.description}
              </p>
            </li>
          ))}
        </ul>
      </article>
      <article className="about-us-studies">
        <h2>ESTUDIOS</h2>
        <ul className="about-us-studies-items">
          {studies.map((i, index) => (
            <li className="about-us-studies-card" key={index}>
              <h4 className="about-us-studies-card-title">{i.title}</h4>
              <p className="about-us-studies-card-content">
                {i.date} / {i.institute}
              </p>
              <div className="about-us-studies-card-abilities">
                {i.habilitates.map((i, index) => (
                  <span key={index} className="about-us-studies-card-ability">
                    {i.name}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default AboutView;
