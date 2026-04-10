import { useEffect, useRef, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'

type Project = {
  name: string
  type: string
  description: string
}

type ProjectsSectionProps = {
  projects: Project[]
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const scrollingProjects = [...projects, ...projects]
  const trackRef = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const [halfTrackWidth, setHalfTrackWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const isPaused = isHovered || isPressed
  const safeProjectCount = Math.max(projects.length, 1)

  useEffect(() => {
    const updateTrackWidth = () => {
      const fullWidth = trackRef.current?.scrollWidth ?? 0
      setHalfTrackWidth(fullWidth / 2)
    }

    updateTrackWidth()
    window.addEventListener('resize', updateTrackWidth)

    return () => {
      window.removeEventListener('resize', updateTrackWidth)
    }
  }, [projects.length])

  useAnimationFrame((_, delta) => {
    if (isPaused || halfTrackWidth === 0) return

    const speed = 34
    const next = x.get() - (speed * delta) / 1000

    if (Math.abs(next) >= halfTrackWidth) {
      x.set(next + halfTrackWidth)
      return
    }

    x.set(next)
  })

  return (
    <motion.section
      className="mb-3 border-b border-white/10 py-[30px]"
      id="work"
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
          Selected work
        </p>
        <h2 className="max-w-[14ch] text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[0.95] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
          Projects shaped to balance product goals, speed, and clarity.
        </h2>
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
          {scrollingProjects.map((project, index) => (
            <motion.article
              className="w-[88vw] max-w-[360px] shrink-0 max-[640px]:w-[84vw]"
              key={`${project.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: (index % safeProjectCount) * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
            >
              <div className="flex min-h-full flex-col gap-[14px] rounded-[22px] border border-white/10 bg-white/[0.035] p-5 max-[640px]:rounded-[18px]">
                <span className="text-[0.78rem] font-extrabold tracking-[0.22em] text-[#f9a66c]">
                  0{(index % safeProjectCount) + 1}
                </span>
                <p className="text-[0.76rem] font-bold uppercase tracking-[0.16em] text-[#ff6f59]">
                  {project.type}
                </p>
                <h3 className="text-[1.4rem] tracking-[-0.04em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
                  {project.name}
                </h3>
                <p className="text-[0.95rem] leading-[1.65] text-[#9ba4ab]">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

