export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "CloudSync",
    description:
      "A real-time collaborative document editor with conflict resolution, live cursors, and version history. Built for teams that move fast.",
    tech: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "DevMetrics",
    description:
      "Analytics dashboard for developer productivity. Tracks commits, PRs, code reviews, and deployment frequency across teams.",
    tech: ["React", "D3.js", "Node.js", "GraphQL", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Taskflow CLI",
    description:
      "A blazing-fast command-line task manager with git-like workflows. Supports branching, merging tasks, and team sync.",
    tech: ["Go", "SQLite", "Cobra", "Bubble Tea"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "PixelForge",
    description:
      "AI-powered image optimization pipeline. Automatically compresses, resizes, and converts images for web delivery.",
    tech: ["Python", "FastAPI", "Pillow", "AWS S3", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AuthGuard",
    description:
      "Drop-in authentication library with support for OAuth 2.0, MFA, and session management. Zero-config setup.",
    tech: ["TypeScript", "JWT", "Redis", "Express"],
    github: "https://github.com",
  },
  {
    title: "NetWatch",
    description:
      "Network monitoring tool with real-time alerts, uptime tracking, and incident management for microservices.",
    tech: ["Go", "Prometheus", "Grafana", "Docker", "gRPC"],
    github: "https://github.com",
  },
];
