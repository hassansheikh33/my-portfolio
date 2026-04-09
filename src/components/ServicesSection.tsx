type ServicesSectionProps = {
  services: string[]
}

export const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section className="mb-3 border-b border-white/10 py-[30px]" id="services">
      <div className="mb-5 grid gap-3 text-[#9ba4ab]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#f9a66c]">
          Services
        </p>
        <h2 className="max-w-[14ch] text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[0.95] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
          Full-stack delivery with clean UI, reliable APIs, and practical structure.
        </h2>
      </div>
      <div className="grid gap-[18px] max-[920px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5 max-[640px]:rounded-[18px]"
            key={service}
          >
            <p className="text-[0.95rem] leading-[1.65] text-[#9ba4ab]">{service}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

