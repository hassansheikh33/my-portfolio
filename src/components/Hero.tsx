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
    <section
      className="mb-3 grid items-start gap-10 border-b border-white/10 py-6 max-[920px]:grid-cols-1 max-[920px]:gap-6 max-[920px]:pb-6 max-[768px]:gap-5 max-[768px]:py-4 lg:grid-cols-2"
      id="home"
    >
      <div className="animate-[rise_700ms_ease_both]">
        <p className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#f9a66c]">
          {designation}
        </p>
        <h1 className="max-w-[12ch] text-[clamp(2.4rem,5vw,4.3rem)] leading-[0.95] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
          {title}
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
          {stats.map((stat) => (
            <article
              className="rounded-[18px] border border-white/10 bg-white/[0.035] px-[14px] py-4 max-[768px]:px-3 max-[768px]:py-[14px]"
              key={stat.label}
            >
              <strong className="block text-[1.45rem] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif] max-[768px]:text-[1.3rem]">
                {stat.value}
              </strong>
              <span className="mt-1.5 block text-[0.92rem] leading-[1.45] text-[#9ba4ab]">
                {stat.label}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
