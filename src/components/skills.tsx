import { SectionHeader } from "./about";
import { skillCategories } from "@/data/skills";
import { TiltCard } from "./tilt-card";
import { Reveal } from "./reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="skills" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.label} delay={i * 100}>
              <TiltCard className="glass glass-hover rounded-xl h-full">
                <div className="p-5">
                  <div className="mb-4 font-mono text-xs text-gradient font-semibold">
                    {category.label}/
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="glass-subtle rounded-lg px-2.5 py-1 font-mono text-xs text-muted transition-all duration-300 hover:text-foreground hover:border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
