import { SectionHeader } from "./about";
import { experiences } from "@/data/experience";
import { Reveal } from "./reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="experience" />

        <div className="space-y-1">
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="group relative border-l-2 border-white/10 py-6 pl-8 transition-all duration-500 hover:border-accent/50">
                {/* Glowing timeline dot */}
                <div className="absolute -left-[5px] top-8 h-2 w-2 rounded-full border-2 border-white/20 bg-background transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                <div className="mb-1 font-mono text-xs text-gradient font-semibold">
                  {exp.period}
                </div>
                <h3 className="mb-1 text-lg font-semibold">{exp.role}</h3>
                <div className="mb-3 font-mono text-sm text-muted">
                  @ {exp.company}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="glass-subtle rounded-md px-2 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
