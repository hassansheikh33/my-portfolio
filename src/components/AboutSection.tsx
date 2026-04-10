import { SectionHeading } from "./SectionHeading";
import { ABOUT_DESCRIPTION, SKILLS } from "../content";

export const AboutSection = () => {
  return (
    <section
      className="mb-3 grid items-start gap-[22px] border-b border-white/10 py-[30px] max-[920px]:grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
      id="about"
    >
      <SectionHeading
        className="mb-0"
        eyebrow="About"
        title="Focused on useful systems, readable interfaces, and smooth delivery."
      />
      <div className="grid animate-[rise_700ms_ease_both] gap-[18px]">
        <p className="text-[0.95rem] leading-[1.65] text-[#9ba4ab]">
          {ABOUT_DESCRIPTION}
        </p>
        <ul
          className="m-0 flex list-none flex-wrap gap-3 p-0"
          aria-label="Skills"
        >
          {SKILLS.map((skill) => (
            <li
              className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 font-semibold text-[#f7f2ff]"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
