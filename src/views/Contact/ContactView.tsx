import { ReactRef } from '@gsap/react';
import './ContactViewStyles.css';

interface AboutViewProps {
  containerRef: ReactRef | null;
}

function ContactView({containerRef}: AboutViewProps) {
  return (
    <section className="contact-container" ref={containerRef}>
      ContactView
    </section>
  )
}

export default ContactView