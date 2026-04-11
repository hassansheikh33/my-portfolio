import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { PROJECTS } from "../content";
import { SectionHeading } from "./SectionHeading";

export const ProjectsSection = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isPaused = isHovered || isPressed;

  useEffect(() => {
    const updateTrackWidth = () => {
      const fullWidth = trackRef.current?.scrollWidth ?? 0;
      setTrackWidth(fullWidth);
    };

    updateTrackWidth();
    window.addEventListener("resize", updateTrackWidth);

    return () => {
      window.removeEventListener("resize", updateTrackWidth);
    };
  }, []);

  useAnimationFrame((_, delta) => {
    if (isPaused || trackWidth === 0) return;

    const speed = 34;
    const next = x.get() - (speed * delta) / 1000;

    if (Math.abs(next) >= trackWidth) {
      x.set(0);
      return;
    }

    x.set(next);
  });

  return (
    <motion.section
      className="mb-3 border-b border-white/10 py-[30px]"
      id="work"
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
          eyebrow="Selected work"
          title="Projects shaped to balance product goals, speed, and clarity."
        />
      </motion.div>
      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-4"
          ref={trackRef}
          style={{ x }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onPointerDown={() => setIsPressed(true)}
          onPointerUp={() => setIsPressed(false)}
          onPointerCancel={() => setIsPressed(false)}
          onLostPointerCapture={() => setIsPressed(false)}
        >
          {PROJECTS.map((project, index) => (
            <motion.article
              className="w-[88vw] max-w-[360px] shrink-0 max-[640px]:w-[84vw]"
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
            >
              <div className="flex min-h-full flex-col gap-[14px] rounded-[22px] border border-white/10 bg-white/[0.035] p-5 max-[640px]:rounded-[18px]">
                <span className="text-[0.78rem] font-extrabold tracking-[0.22em] text-[#f9a66c]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.76rem] font-bold uppercase tracking-[0.16em] text-[#ff6f59]">
                  {project.type}
                </p>
                <h3 className="text-[1.4rem] tracking-[-0.04em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
                  {project.url ? (
                    <a
                      className="inline-flex cursor-pointer items-center gap-2 underline-offset-4 hover:underline"
                      href={project.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>{project.name}</span>
                      {project.url && (
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 opacity-85"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 5h5v5m0-5-8 8M10 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                          />
                        </svg>
                      )}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="text-[0.95rem] leading-[1.65] text-[#9ba4ab]">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
