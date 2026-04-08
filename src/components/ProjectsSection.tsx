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
    <section className="mb-3 border-b border-white/10 py-[30px]" id="work">
      <div className="mb-5 grid gap-3 text-[#9ba4ab]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#f9a66c]">
          Selected work
        </p>
        <h2 className="max-w-[14ch] text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[0.95] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
          Projects shaped to balance product goals, speed, and clarity.
        </h2>
      </div>
      <div className="grid gap-[18px] max-[920px]:grid-cols-1 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            className="flex min-h-full flex-col gap-[14px] rounded-[22px] border border-white/10 bg-white/[0.035] p-5 max-[640px]:rounded-[18px]"
            key={project.name}
          >
            <span className="text-[0.78rem] font-extrabold tracking-[0.22em] text-[#f9a66c]">
              0{index + 1}
            </span>
            <p className="text-[0.76rem] font-bold uppercase tracking-[0.16em] text-[#ff6f59]">
              {project.type}
            </p>
            <h3 className="text-[1.4rem] tracking-[-0.04em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
              {project.name}
            </h3>
            <p className="text-[0.95rem] leading-[1.65] text-[#9ba4ab]">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
