import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'

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

const statPattern = /^([^\d]*)(\d+(?:\.\d+)?)(.*)$/

type AnimatedStatValueProps = {
  value: string
}

type TypewriterTextProps = {
  text: string
  speed?: number
}

const TypewriterText = ({ text, speed = 34 }: TypewriterTextProps) => {
  const [visibleChars, setVisibleChars] = useState(0)
  const restartDelay = 5000

  useEffect(() => {
    const timer = window.setTimeout(
      () => {
        if (visibleChars >= text.length) {
          setVisibleChars(0)
          return
        }

        setVisibleChars((current) => current + 1)
      },
      visibleChars >= text.length ? restartDelay : speed,
    )

    return () => {
      window.clearTimeout(timer)
    }
  }, [visibleChars, text.length, speed])

  return (
    <span className="relative inline-block align-top">
      <span className="invisible">{text}</span>
      <span className="absolute inset-0">
        {text.slice(0, visibleChars)}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          aria-hidden="true"
          transition={{ duration: 0.9, ease: 'linear', repeat: Infinity }}
        >
          |
        </motion.span>
      </span>
    </span>
  )
}

const AnimatedStatValue = ({ value }: AnimatedStatValueProps) => {
  const strongRef = useRef<HTMLElement | null>(null)
  const numberRef = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(strongRef, { once: true, amount: 0.8 })
  const parsedValue = value.match(statPattern)
  const decimals = parsedValue && parsedValue[2].includes('.') ? parsedValue[2].split('.')[1].length : 0

  useEffect(() => {
    if (!numberRef.current) return

    if (!parsedValue) {
      numberRef.current.textContent = value
      return
    }

    const prefix = parsedValue[1]
    const target = Number(parsedValue[2])
    const suffix = parsedValue[3]

    const formatValue = (latest: number) => {
      const rounded = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
      return `${prefix}${rounded}${suffix}`
    }

    numberRef.current.textContent = formatValue(0)

    if (!isInView) return

    const controls = animate(0, target, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (latest) => {
        if (numberRef.current) {
          numberRef.current.textContent = formatValue(latest)
        }
      },
    })

    return () => {
      controls.stop()
    }
  }, [decimals, isInView, parsedValue, value])

  return (
    <motion.strong
      className="block text-[1.45rem] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif] max-[768px]:text-[1.3rem]"
      ref={strongRef}
      initial={{ opacity: 0.45, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: [1, 1.08, 1] }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
    >
      <span ref={numberRef}>{parsedValue ? `${parsedValue[1]}${decimals > 0 ? '0.0' : '0'}${parsedValue[3]}` : value}</span>
    </motion.strong>
  )
}

export const Hero = ({ designation, title, summary, name, stats }: HeroProps) => {
  return (
    <section
      className="mb-3 grid items-start gap-10 border-b border-white/10 py-6 max-[920px]:grid-cols-1 max-[920px]:gap-6 max-[920px]:pb-6 max-[768px]:gap-5 max-[768px]:py-4 lg:grid-cols-2"
      id="home"
    >
      <div className="animate-[rise_700ms_ease_both]">
        <p className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#f9a66c]">
          {designation}
        </p>
        <h1 className="max-w-[12ch] text-[clamp(2.4rem,5vw,4.3rem)] leading-[0.95] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
          <TypewriterText key={title} text={title} />
        </h1>
        <p className="mt-4 max-w-[38ch] text-base leading-[1.55] text-[#9ba4ab]">{summary}</p>
        <div className="mt-7 flex flex-wrap gap-3 max-[640px]:items-stretch">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-transparent bg-gradient-to-br from-[#f9a66c] to-[#ff6f59] px-5 font-bold text-[#f8f5ff] shadow-[0_26px_70px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-px hover:text-[#f8f5ff] max-[640px]:w-full max-[640px]:text-[0.92rem]"
            href="#work"
          >
            View projects
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.035] px-5 font-bold text-[#f7f2ff] transition-all duration-200 hover:-translate-y-px hover:text-[#f7f2ff] max-[640px]:w-full max-[640px]:text-[0.92rem]"
            href="#contact"
          >
            Start a project
          </a>
        </div>
      </div>

      <div className="grid animate-[rise_700ms_ease_both] grid-rows-[auto_1fr] gap-3 rounded-3xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)),rgba(18,19,38,0.82)] p-[18px] shadow-[0_26px_70px_rgba(0,0,0,0.35)] max-[768px]:p-[14px] max-[640px]:rounded-[18px]">
        <div className="flex min-h-[130px] flex-col items-start justify-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.035] p-4 max-[768px]:min-h-[120px] max-[768px]:p-3">
          <div
            className="grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(247,194,110,0.95),rgba(255,122,89,0.95))] text-base font-extrabold tracking-[0.2em] text-[#1c1420] [font-family:'Space_Grotesk',sans-serif]"
            aria-hidden="true"
          >
            {name}
          </div>
          <div>
            <p className="mb-1 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#f9a66c]">
              Available for freelance
            </p>
            <p className="text-[0.92rem] font-medium leading-[1.5] text-[#9ba4ab]">
              Building full-stack experiences end to end
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-[14px] max-[920px]:grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.article
              className="rounded-[18px] border border-white/10 bg-white/[0.035] px-[14px] py-4 max-[768px]:px-3 max-[768px]:py-[14px]"
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{
                opacity: 1,
                y: 0,
                borderColor: 'rgba(249, 166, 108, 0.36)',
                boxShadow: [
                  '0 0 0 rgba(249,166,108,0)',
                  '0 0 24px rgba(249,166,108,0.2)',
                  '0 0 0 rgba(249,166,108,0)',
                ],
              }}
              viewport={{ once: true, amount: 0.75 }}
              transition={{ duration: 0.9, delay: index * 0.14, ease: 'easeOut' }}
            >
              <AnimatedStatValue value={stat.value} />
              <span className="mt-1.5 block text-[0.92rem] leading-[1.45] text-[#9ba4ab]">
                {stat.label}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

