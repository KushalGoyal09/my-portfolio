import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./about";
import { projects, type Project } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="projects" />

        {/* Featured projects */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Other projects */}
        <div className="mb-4 font-mono text-xs text-muted">
          // other noteworthy projects
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {other.map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  compact,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div
      className={`group rounded-lg border border-border bg-card transition-all hover:border-accent/30 hover:bg-card-hover ${
        compact ? "p-4" : "p-5"
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <h3
          className={`font-semibold ${compact ? "text-sm" : "text-base"}`}
        >
          {project.title}
        </h3>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              <Github size={compact ? 14 : 16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={compact ? 14 : 16} />
            </a>
          )}
        </div>
      </div>

      <p
        className={`mb-4 leading-relaxed text-muted ${
          compact ? "text-xs" : "text-sm"
        }`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
