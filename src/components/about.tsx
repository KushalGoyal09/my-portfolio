import { Terminal, Code2, Layers } from "lucide-react";
import { aboutParagraphs, infoCards } from "@/data/about";
import { TiltCard } from "./tilt-card";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="about" />

        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              {aboutParagraphs.map((text, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-muted ${i < aboutParagraphs.length - 1 ? "mb-4" : ""}`}
                >
                  {text}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="space-y-4">
            {infoCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 120}>
                <TiltCard className="glass glass-hover rounded-xl">
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <IconMap name={card.iconName} />
                      </div>
                      <h3 className="font-mono text-sm font-medium">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {card.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const icons = { Terminal, Code2, Layers };

function IconMap({ name }: { name: keyof typeof icons }) {
  const Icon = icons[name];
  return <Icon size={18} />;
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="font-mono text-sm text-accent shrink-0">
        <span className="text-muted">// </span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-accent/30 via-accent-secondary/20 to-transparent" />
    </div>
  );
}

export { SectionHeader };
