type AboutSectionProps = {
  description: string
  skills: string[]
}

function AboutSection({ description, skills }: AboutSectionProps) {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading compact">
        <p className="eyebrow">About</p>
        <h2>Focused on useful systems, readable interfaces, and smooth delivery.</h2>
      </div>
      <div className="about-layout">
        <p>{description}</p>
        <ul className="skills-list" aria-label="Skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
