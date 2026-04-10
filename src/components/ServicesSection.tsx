import { motion } from 'framer-motion'

type ServicesSectionProps = {
  services: string[]
}

export const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <motion.section
      className="mb-3 border-b border-white/10 py-[30px]"
      id="services"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <motion.div
        className="mb-5 grid gap-3 text-[#9ba4ab]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#f9a66c]">
          Services
        </p>
        <h2 className="max-w-[14ch] text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[0.95] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
          Full-stack delivery with clean UI, reliable APIs, and practical structure.
        </h2>
      </motion.div>
      <div className="grid gap-[18px] max-[920px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5 max-[640px]:rounded-[18px]"
            key={service}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -5, borderColor: 'rgba(249, 166, 108, 0.38)' }}
          >
            <p className="text-[0.95rem] leading-[1.65] text-[#9ba4ab]">{service}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

