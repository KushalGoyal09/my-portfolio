import { SectionHeader } from "./about";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="experience" />

        <div className="space-y-1">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative border-l-2 border-border py-6 pl-8 transition-all hover:border-accent/50"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-8 h-2 w-2 rounded-full border-2 border-border bg-background transition-colors group-hover:border-accent" />

              <div className="mb-1 font-mono text-xs text-accent">
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
                    className="rounded border border-border bg-card px-2 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
