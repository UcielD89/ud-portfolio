import { Link } from "react-router-dom";
import "./SelectPageStyles.css";
import NavigateForView from "../../components/NavigateForView/NavigateForView";
import { ReactRef, useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

interface SelectPageViewProps {
  containerRef: ReactRef | null
}

function SelectPageView({containerRef} : SelectPageViewProps) {
  const container = useRef<HTMLDivElement | null>(null);
  
  useGSAP(
    () => {
      gsap.from(".select-page-item", {
        y: 75,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
      });
    },
    { scope: container }
  );
  return (
    <section ref={containerRef}>
      <article className="select-page-container" ref={container}>
        <div className="select-page-item">
          <Link to="/about-us">SOBRE MI</Link>
        </div>
        <div className="select-page-item">
          <Link to="/projects">PROYECTOS</Link>
        </div>
        <div className="select-page-item">
          <Link to="/contact">CONTACTO</Link>
        </div>
        <div className="select-page-footer">
          <NavigateForView to="/" select_text={2} />
          <p>UCIEL DARÓ</p>
        </div>
      </article>
    </section>
  );
}

export default SelectPageView;
