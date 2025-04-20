import { ReactRef } from '@gsap/react'
import './AboutViewStyles.css'

interface AboutViewProps {
  containerRef: ReactRef | null;
}

function AboutView({containerRef} : AboutViewProps) {
  return (
    <section className='about-us' ref={containerRef}>

    </section>
  )
}

export default AboutView