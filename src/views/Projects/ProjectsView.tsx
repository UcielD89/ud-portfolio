import { ReactRef } from '@gsap/react';
import './ProjectsViewStyles.css'

interface ProjectsViewProps {
  containerRef: ReactRef | null;
}

function ProjectsView({containerRef} : ProjectsViewProps) {
  return (
    <section className='projects-container' ref={containerRef}></section>
  )
}

export default ProjectsView