type HeroStats = {
  value: string
  label: string
}

type HeroProps = {
  designation: string
  title: string
  summary: string
  name: string
  stats: HeroStats[]
}

function Hero({ designation, title, summary, name, stats }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">{designation}</p>
        <h1>{title}</h1>
        <p className="hero-text">{summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            View projects
          </a>
          <a className="button button-secondary" href="#contact">
            Start a project
          </a>
        </div>
      </div>

      <div className="hero-panel">
        <div className="profile-card">
          <div className="avatar" aria-hidden="true">
            {name}
          </div>
          <div>
            <p className="card-label">Available for freelance</p>
            <p className="card-value">Building full-stack experiences end to end</p>
          </div>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
