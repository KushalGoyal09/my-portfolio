import { Terminal, Code2, Layers } from "lucide-react";
import { aboutParagraphs, infoCards } from "@/data/about";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="about" />

        <div className="grid gap-12 md:grid-cols-2">
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

          <div className="space-y-4">
            {infoCards.map((card) => (
              <InfoCard
                key={card.title}
                icon={<IconMap name={card.iconName} />}
                title={card.title}
                description={card.description}
              />
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
      <h2 className="font-mono text-sm text-accent">
        <span className="text-muted">// </span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/30 hover:bg-card-hover">
      <div className="mb-2 flex items-center gap-3">
        <span className="text-accent">{icon}</span>
        <h3 className="font-mono text-sm font-medium">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export { SectionHeader };
