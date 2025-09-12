import "./ContactViewStyles.css";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoIosSend } from "react-icons/io";
import { FaBehance, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactView() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const formSectionRef = useRef<HTMLFormElement>(null);

  // EmailJS submission handler
  const onSubmit = () => {
    if (!formRef.current) return;
    setLoading(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        gsap.to(formSectionRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          onComplete: () => {
            setSent(true);
            gsap.fromTo(
              ".success-message",
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6 }
            );
          },
        });
        reset();
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        setLoading(false);
        alert("Hubo un error al enviar el mensaje.");
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contacto</h1>
      <p className="contact-heading-intro">
        <strong>Tenés una idea en mente? ¡Hablemos!</strong> Completá el
        formulario y contame en qué puedo ayudarte. Ya sea un proyecto, una
        consulta o simplemente una idea para empezar, el primer paso es
        escribirnos. Estoy listo para escucharte.
      </p>
      {!sent ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact-form"
          ref={(el) => {
            formRef.current = el;
            formSectionRef.current = el;
          }}
        >
          <div className="input-group">
            <input
              type="text"
              placeholder="Nombre"
              {...register("nombre", { required: true })}
              disabled={loading}
            />
            {errors.nombre && (
              <span className="error">Este campo es requerido</span>
            )}
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              disabled={loading}
            />
            {errors.email && (
              <span className="error">Este campo es requerido</span>
            )}
          </div>

          <div className="input-group">
            <input
              type="asunto"
              placeholder="Asunto"
              {...register("asunto", { required: true })}
              disabled={loading}
            />
            {errors.email && (
              <span className="error">Este campo es requerido</span>
            )}
          </div>

          <div className="input-group">
            <textarea
              {...register("mensaje", { required: true })}
              rows={4}
              disabled={loading}
              placeholder="Escribí tu mensaje aquí..."
            />
            {errors.mensaje && (
              <span className="error">Este campo es requerido</span>
            )}
          </div>

          <button type="submit" className="send-button" disabled={loading}>
            {loading ? (
              <span className="loader"></span>
            ) : (
              <>
                <IoIosSend color="#f2f2f2" />
                Enviar
                <span></span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="success-message">
          <h2>✅ ¡Mensaje enviado con éxito!</h2>
          <p>Gracias por contactarte. Te responderé lo antes posible.</p>
          <button className="send-button">
            Enviar otro mensaje
          </button>
        </div>
      )}

      <div className="contact-info">
        <h2>Redes Sociales</h2>
        <div className="socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub size={24} color="#fefefe" />
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn size={24}  color="#fefefe" />
            LinkedIn
          </a>
          <a href="https://behance.net" target="_blank" rel="noreferrer">
            <FaBehance size={24}  color="#fefefe" />
            Behance
          </a>
        </div>
      </div>

      <div className="faq">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-item">
          <strong>¿En cuánto tiempo responden?</strong> En menos de 24 hs.
        </div>
        <div className="faq-item">
          <strong>¿Puedo agendar una reunión?</strong> ¡Claro! Coordinamos por
          correo.
        </div>
        <div className="faq-item">
          <strong>¿Hacen trabajos freelance?</strong> Sí, tanto individuales
          como por equipo.
        </div>
      </div>
    </div>
  );
}

export default ContactView;
