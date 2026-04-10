type SectionHeadingProps = {
  eyebrow: string
  title: string
  className?: string
}

export const SectionHeading = ({ eyebrow, title, className = 'mb-5' }: SectionHeadingProps) => {
  return (
    <div className={`${className} grid gap-3 text-[#9ba4ab]`}>
      <p className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#f9a66c]">
        {eyebrow}
      </p>
      <h2 className="max-w-[14ch] text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[0.95] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
        {title}
      </h2>
    </div>
  )
}
