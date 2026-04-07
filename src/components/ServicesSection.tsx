type ServicesSectionProps = {
  services: string[]
}

function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Full-stack delivery with clean UI, reliable APIs, and practical structure.</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="card" key={service}>
            <p>{service}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
