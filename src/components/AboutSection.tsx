import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ABOUT_DESCRIPTION, ABOUT_TITLE, SKILLS } from "../content";

const skillsListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
};

const skillsBubbleVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease: "easeOut" as const },
  },
};

export const AboutSection = () => {
  return (
    <section
      className="mb-3 grid items-start gap-[22px] border-b border-white/10 py-[30px] max-[920px]:grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
      id="about"
    >
      <SectionHeading className="mb-0" eyebrow="About" title={ABOUT_TITLE} />
      <div className="grid gap-[18px]">
        <motion.p
          className="text-[0.95rem] leading-[1.65] text-[#9ba4ab]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {ABOUT_DESCRIPTION}
        </motion.p>
        <motion.ul
          className="m-0 flex w-full list-none flex-wrap justify-evenly gap-3 p-0"
          aria-label="Skills"
          variants={skillsListVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SKILLS.map((skill) => (
            <motion.li
              className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 font-semibold text-[#f7f2ff] max-[640px]:text-sm"
              key={skill}
              variants={skillsBubbleVariants}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
