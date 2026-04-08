function ContactSection() {
  return (
    <section
      className="mb-3 mt-7 flex items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.035] p-[22px] shadow-[0_26px_70px_rgba(0,0,0,0.35)] max-[920px]:grid max-[920px]:grid-cols-1 max-[640px]:rounded-[18px]"
      id="contact"
    >
      <div>
        <p className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#f9a66c]">
          Contact
        </p>
        <h2 className="max-w-[10ch] text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[0.95] tracking-[-0.05em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif]">
          Have a project in mind?
        </h2>
      </div>
      <a
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-transparent bg-gradient-to-br from-[#f9a66c] to-[#ff6f59] px-5 font-bold text-[#f8f5ff] shadow-[0_26px_70px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-px hover:text-[#f8f5ff] max-[640px]:w-full max-[640px]:text-[0.92rem]"
        href="mailto:hello@example.com"
      >
        hello@example.com
      </a>
    </section>
  )
}

export default ContactSection
