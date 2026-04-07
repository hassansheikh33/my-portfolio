type Project = {
  name: string
  type: string
  description: string
}

type ProjectsSectionProps = {
  projects: Project[]
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="section" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Projects shaped to balance product goals, speed, and clarity.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <span className="project-index">0{index + 1}</span>
            <p className="project-type">{project.type}</p>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
