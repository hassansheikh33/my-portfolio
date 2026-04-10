import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { SERVICES } from "../content";

export const ServicesSection = () => {
  return (
    <motion.section
      className="mb-3 border-b border-white/10 py-[30px]"
      id="services"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Services"
          title="Full-stack delivery with clean UI, reliable APIs, and practical structure."
        />
      </motion.div>
      <div className="grid gap-[18px] max-[920px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <motion.article
            className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5 max-[640px]:rounded-[18px]"
            key={service}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -5, borderColor: "rgba(249, 166, 108, 0.38)" }}
          >
            <p className="text-[0.95rem] leading-[1.65] text-[#9ba4ab]">
              {service}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};
