type AboutSectionProps = {
  description: string
  skills: string[]
}

function AboutSection({ description, skills }: AboutSectionProps) {
  return (
    <section
      className="mb-3 grid items-start gap-[22px] border-b border-white/10 py-[30px] max-[920px]:grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
      id="about"
    >
      <div className="grid gap-3 text-[#9ba4ab]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#f9a66c]">
          About
        </p>
        <h2 className="max-w-[14ch] text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[0.95] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
          Focused on useful systems, readable interfaces, and smooth delivery.
        </h2>
      </div>
      <div className="grid animate-[rise_700ms_ease_both] gap-[18px]">
        <p className="text-[0.95rem] leading-[1.65] text-[#9ba4ab]">{description}</p>
        <ul className="m-0 flex list-none flex-wrap gap-3 p-0" aria-label="Skills">
          {skills.map((skill) => (
            <li
              className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 font-semibold text-[#f7f2ff]"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
