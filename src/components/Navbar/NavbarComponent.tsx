import { RiMenu4Fill } from "react-icons/ri";
import "./NavbarComponentStyles.css";
import { useEffect, useRef, useState } from "react";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { Link } from "react-router-dom";

import logo_ud from "../../assets/svg/logo_ud.svg";
import { GrGithub } from "react-icons/gr";
import { BsBehance, BsLinkedin } from "react-icons/bs";

function NavbarComponent() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  const container = useRef<HTMLDivElement | null>(null);

  const tl = useRef<TimelineLite | null>(null);

  const handleShowNavbar = () => {
    setShowNavbar(true);
  };

  const handleHideNavbar = () => {
    setShowNavbar(false);
  };

  useGSAP(
    () => {
      gsap.from(".navbar-a", {
        y: 75,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
      });
      tl.current = gsap.timeline({ paused: true }).to(".navbar-nav", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      });
    },
    { scope: container }
  );

  useEffect(() => {
    if (showNavbar) {
      tl.current!!.play();
    } else {
      tl.current!!.reverse();
    }
  }, [showNavbar]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "navbar-header-scrolled" : ""}`} ref={container}>
      <div className="navbar-logo">
        <img src={logo_ud} alt="Logo Uciel Daró" width={100} height={100} />
      </div>
      <div className="navbar-open-buttom">
        <RiMenu4Fill
          size={44}
          cursor="pointer"
          color="#F2F2F2"
          onClick={handleShowNavbar}
        />
      </div>
      <nav className="navbar-nav">
        <div>
          <div className="navbar-close-buttom">
            <MdClose size={44} onClick={handleHideNavbar} cursor="pointer" />
          </div>
          <ul className="navbar-ul">
            <li className="navbar-li">
              <Link to="/" className="navbar-a" onClick={handleHideNavbar}>
                INICIO
              </Link>
            </li>
            <li className="navbar-li">
              <Link
                to="about-us"
                className="navbar-a"
                onClick={handleHideNavbar}
              >
                SOBRE MI
              </Link>
            </li>
            <li className="navbar-li">
              <Link
                to="projects"
                className="navbar-a"
                onClick={handleHideNavbar}
              >
                PROYECTOS
              </Link>
            </li>
            <li className="navbar-li">
              <Link
                to="contact"
                className="navbar-a"
                onClick={handleHideNavbar}
              >
                CONTACTOS
              </Link>
            </li>
          </ul>
          <ul className="navbar-social-network">
            <li className="navbar-social-network-item">
              <GrGithub size={40} />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <MdArrowOutward size={40} />
            </li>
            <li className="navbar-social-network-item">
              <BsBehance size={40} />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Behance
              </a>
              <MdArrowOutward size={40} />
            </li>
            <li className="navbar-social-network-item">
              <BsLinkedin size={40} color="#0077B4"/>
              <div></div>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
              <MdArrowOutward size={40} />
            </li>
          </ul>
        </div>
        <div className="navbar-copyright">
          <p>&copy; 2025 Uciel Daró 🚀</p>
        </div>
      </nav>
    </header>
  );
}

export default NavbarComponent;
