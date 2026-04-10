import { useNavbarMenu } from "../hooks/navbar";
import CodeIcon from "@mui/icons-material/Code";
import { BRAND_NAME } from "../content";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const { isOpen, toggle, close } = useNavbarMenu();

  return (
    <header className="sticky top-0 z-20 mb-2 flex items-center justify-between gap-4 rounded-b-[24px] px-5 pb-6 pt-2 backdrop-blur-[14px] max-[768px]:rounded-none max-[768px]:px-0 max-[768px]:pb-4 max-[768px]:pt-2">
      <a
        className="whitespace-nowrap pl-2 text-[1.1rem] font-bold tracking-[0.08em] text-[#f7f2ff] [font-family:'Space_Grotesk',sans-serif] max-[640px]:text-[0.9rem] flex items-center"
        href="#home"
      >
        <CodeIcon className="mr-2 h-5 w-5" />
        {BRAND_NAME}
      </a>
      <nav
        className="flex flex-wrap items-center gap-7 text-[0.92rem] font-medium text-[#9ba4ab] max-[768px]:hidden"
        aria-label="Primary"
      >
        {navLinks.map((link) => (
          <a
            className="transition-colors duration-200 hover:text-[#f7f2ff]"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="hidden flex-col items-center justify-center gap-[6px] p-2 max-[768px]:flex"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={toggle}
      >
        <span
          className={`block h-[2px] w-6 rounded bg-[#f7f2ff] transition-all duration-200 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block h-[2px] w-6 rounded bg-[#f7f2ff] transition-all duration-200 ${
            isOpen ? "scale-x-0 opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-[2px] w-6 rounded bg-[#f7f2ff] transition-all duration-200 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        ></span>
      </button>

      <nav
        className={`absolute left-0 right-0 top-full z-30 hidden flex-col gap-3 border-b border-white/10 bg-[rgba(18,19,38,0.98)] p-5 opacity-0 backdrop-blur-[14px] transition-all duration-200 max-[768px]:flex ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.98]"
        }`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link, index) => (
          <a
            className={`py-2 text-[0.92rem] font-medium text-[#9ba4ab] transition-all duration-200 hover:text-[#f7f2ff] ${
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
            }`}
            href={link.href}
            key={link.href}
            onClick={close}
            style={
              isOpen ? { transitionDelay: `${75 + index * 35}ms` } : undefined
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
