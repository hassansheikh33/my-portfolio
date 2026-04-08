import { useNavbarMenu } from '../hooks/navbar'

type NavigationProps = {
  brand: string
}

function Navigation({ brand }: NavigationProps) {
  const { isOpen, toggle, close } = useNavbarMenu()

  return (
    <header className="relative sticky top-0 z-20 mb-2 flex items-center justify-between gap-4 rounded-b-[24px] px-5 pb-6 pt-2 backdrop-blur-[14px] max-[768px]:rounded-none max-[768px]:px-0 max-[768px]:pb-4 max-[768px]:pt-2">
      <a
        className="whitespace-nowrap pl-2 text-[1.1rem] font-bold tracking-[0.08em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif] max-[640px]:text-[0.9rem]"
        href="#home"
      >
        {brand}
      </a>
      <nav
        className="flex flex-wrap items-center gap-7 text-[0.92rem] font-medium text-[#9ba4ab] max-[768px]:hidden"
        aria-label="Primary"
      >
        <a className="transition-colors duration-200 hover:text-[#f7f2ff]" href="#work">
          Work
        </a>
        <a
          className="transition-colors duration-200 hover:text-[#f7f2ff]"
          href="#services"
        >
          Services
        </a>
        <a className="transition-colors duration-200 hover:text-[#f7f2ff]" href="#about">
          About
        </a>
        <a
          className="transition-colors duration-200 hover:text-[#f7f2ff]"
          href="#contact"
        >
          Contact
        </a>
      </nav>

      <button
        className="hidden flex-col items-center justify-center gap-[6px] p-2 max-[768px]:flex"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={toggle}
      >
        <span
          className={`block h-[2px] w-6 rounded bg-[#f7f2ff] transition-all duration-200 ${
            isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        ></span>
        <span
          className={`block h-[2px] w-6 rounded bg-[#f7f2ff] transition-all duration-200 ${
            isOpen ? 'scale-x-0 opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block h-[2px] w-6 rounded bg-[#f7f2ff] transition-all duration-200 ${
            isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        ></span>
      </button>

      <nav
        className={`pointer-events-none absolute left-0 right-0 top-full hidden flex-col gap-3 border-b border-white/10 bg-[rgba(18,19,38,0.98)] p-5 opacity-0 backdrop-blur-[14px] transition-all duration-200 max-[768px]:flex ${
          isOpen
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : '-translate-y-2 scale-[0.98]'
        }`}
        aria-label="Mobile navigation"
      >
        <a
          className={`py-2 text-[0.92rem] font-medium text-[#9ba4ab] transition-all duration-200 hover:text-[#f7f2ff] ${
            isOpen ? 'translate-x-0 opacity-100 delay-75' : '-translate-x-1 opacity-0'
          }`}
          href="#work"
          onClick={close}
        >
          Work
        </a>
        <a
          className={`py-2 text-[0.92rem] font-medium text-[#9ba4ab] transition-all duration-200 hover:text-[#f7f2ff] ${
            isOpen ? 'translate-x-0 opacity-100 delay-100' : '-translate-x-1 opacity-0'
          }`}
          href="#services"
          onClick={close}
        >
          Services
        </a>
        <a
          className={`py-2 text-[0.92rem] font-medium text-[#9ba4ab] transition-all duration-200 hover:text-[#f7f2ff] ${
            isOpen ? 'translate-x-0 opacity-100 delay-150' : '-translate-x-1 opacity-0'
          }`}
          href="#about"
          onClick={close}
        >
          About
        </a>
        <a
          className={`py-2 text-[0.92rem] font-medium text-[#9ba4ab] transition-all duration-200 hover:text-[#f7f2ff] ${
            isOpen ? 'translate-x-0 opacity-100 delay-[180ms]' : '-translate-x-1 opacity-0'
          }`}
          href="#contact"
          onClick={close}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navigation
