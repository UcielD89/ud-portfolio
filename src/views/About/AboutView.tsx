import "./AboutViewStyles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { ReactRef } from "@gsap/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const hard_skills = [
  {
    title: "LENGUAJES",
    items: [
      {
        name: "HTML",
        image: "/svg/language/html-logo.svg",
      },
      {
        name: "CSS",
        image: "/svg/language/css-logo.svg",
      },
      {
        name: "JAVASCRIP",
        image: "/svg/language/js-logo.svg",
      },
      {
        name: "PHP",
        image: "/svg/language/php-logo.svg",
      },
      {
        name: "TYPESCRIPT",
        image: "/svg/language/ts-logo.svg",
      },
    ],
  },
  {
    title: "TECNOLOGIAS FRONTEND",
    items: [
      {
        name: "REACT",
        image: "/svg/technologies/react-logo.svg",
      },
      {
        name: "REACT NATIVE",
        image: "/svg/technologies/react-native-logo.svg",
      },
      {
        name: "TAILWIND CSS",
        image: "/svg/technologies/tailwindcss-logo.svg",
      },
      {
        name: "BOOSTRAP",
        image: "/svg/technologies/bootstrap-logo.svg",
      },
      {
        name: "MATERIAL UI",
        image: "/svg/technologies/material-ui-logo.svg",
      },
    ],
  },
  {
    title: "TECNOLOGIAS BACKEND",
    items: [
      {
        name: "NODE JS",
        image: "/svg/technologies/node-logo.svg",
      },
      {
        name: "EXPRESS",
        image: "/svg/technologies/express-logo.svg",
      },
      {
        name: "FIREBASE",
        image: "/svg/technologies/firebase-logo.svg",
      },
      {
        name: "MYSQL",
        image: "/svg/technologies/mysql-logo.svg",
      },
      {
        name: "PRISMA ORM",
        image: "/svg/technologies/prisma-orm-logo.svg",
      },
    ],
  },
  {
    title: "HERRAMIENTAS",
    items: [
      {
        name: "FIGMA",
        image: "/svg/tools/figma-logo.svg",
      },
      {
        name: "CANVA",
        image: "/svg/tools/canva-logo.svg",
      },
      {
        name: "GITHUB",
        image: "/svg/tools/github-logo.svg",
      },
      {
        name: "BITBUCKET",
        image: "/svg/tools/bitbucket-logo.svg",
      },
      {
        name: "TRELLO",
        image: "/svg/tools/trello-logo.svg",
      },
      {
        name: "NOTION",
        image: "/svg/tools/notion-logo.svg",
      },
      {
        name: "GOOGLE DOCS",
        image: "/svg/tools/google-docs-logo.svg",
      },
      {
        name: "GOOGLE DIRVE",
        image: "/svg/tools/google-drive-logo.svg",
      },
      {
        name: "CHAT GPT",
        image: "/svg/tools/chatgpt-logo.svg",
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

const certificates = [
  {
    title: "Curso de Diseño Gráfico Digital - Nivel Inicial",
    date: "Junio 2024",
    institute: "Centro de e-Learning UTN FRBA",
    habilitates: [
      {
        name: "Diseño Grafico",
      },
      {
        name: "Diseño de Logotipos",
      },
    ],
  },
  {
    title: "Introducción al Desarrollo Web 1",
    date: "Junio 2023",
    institute: "Google Activate",
    habilitates: [
      {
        name: "Historia de la Web",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
    ],
  },
  {
    title: "Introducción a Python y Programación Orientada a Objetos (POO)",
    date: "Mayo 2023",
    institute: "Instituto Zona Oeste",
    habilitates: [
      {
        name: "Python",
      },
      {
        name: "CRUD",
      },
      {
        name: "Pogramación Orientada a Objetos",
      },
    ],
  },
  {
    title: "Programación Aplicada",
    date: "Octubre 2022",
    institute: "Trabajadores Informáticos",
    habilitates: [
      {
        name: "Desarrollo de Software",
      },
      {
        name: "Metodologías",
      },
      {
        name: "Patrones de diseño",
      },
      {
        name: "Arquitecturas de Software",
      },
    ],
  },
  {
    title: "Programador Python",
    date: "Octubre 2022",
    institute: "Edutin Academy",
    habilitates: [
      {
        name: "Fundamentos de la programación",
      },
      {
        name: "Python",
      },
      {
        name: "Algoritmos",
      },
      {
        name: "Logíca",
      },
    ],
  },
  {
    title: "Introducción a la Programación",
    date: "Abril 2022",
    institute: "EducacionIT",
    habilitates: [
      {
        name: "Fundamentos de la programación",
      },
    ],
  },
  {
    title: "Argentina Programa - #SéProgrmar",
    date: "Diciembre 2021",
    institute: "Mumuki",
    habilitates: [
      {
        name: "Algoritmos",
      },
      {
        name: "Logíca",
      },
      {
        name: "Introducción en JavaScript",
      },
      {
        name: "Introducción en Ruby",
      },
    ],
  },
  {
    title: "Introducción a la programación en Android Kotlin",
    date: "Octubre 2021",
    institute: "Centro de e-Learning UTN FRBA",
    habilitates: [
      {
        name: "Plataforma Android",
      },
      {
        name: "Introducción a Kotlin",
      },
      {
        name: "XML",
      },
      {
        name: "Patron MVVM",
      },
      {
        name: "Base de Datos",
      },
      {
        name: "Retrofit",
      },
      {
        name: "Room Data Base",
      },
    ],
  },
  {
    title: "Diplomado en Kotlin",
    date: "Julio 2021",
    institute: "Edutin Academy",
    habilitates: [
      {
        name: "Plataforma Android",
      },
      {
        name: "Introducción a Kotlin",
      },
      {
        name: "Fundamentos de la programación",
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
      <article className="about-us-info">
        <h1 className="about-us-title">SOBRE MI</h1>
        <div className="about-us-profile-img">
          <img
            src="/img/perfil.webp"
            alt="Imagen de Perfil"
            width={150}
            height={150}
          />
          <div></div>
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
      </article>
      <article className="about-us-hard-skills">
        <h2>HABILIDADES FUERTES.</h2>
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
        <h2>HABILIDADES BLANDAS.</h2>
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
        <h2>EDUCACIÓN.</h2>
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
      <article className="about-us-certificates">
        <h2>LICIENCIAS Y CERTIFICADOS.</h2>
        <ul className="about-us-certificates-items">
          {certificates.map((i, index) => (
            <li key={index} className="about-us-certificates-card">
              <div className="about-us-certificates-img">
                <ImageGallery
                  showFullscreenButton={true}
                  showPlayButton={false}
                  items={[
                    {
                      original: "https://picsum.photos/id/1018/1000/600/",
                    },
                  ]}
                />
              </div>
              <h3 className="about-us-certificates-card-title">{i.title}</h3>
              <p className="about-us-certificates-card-content">
                {i.date} / {i.institute}
              </p>
              <div className="about-us-certificates-card-abilities">
                {i.habilitates.map((i, index) => (
                  <span
                    key={index}
                    className="about-us-certificates-card-ability"
                  >
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
