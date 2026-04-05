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
    title: "Reacter",
    description:
      "AI-powered platform that generates complete React applications from user prompts. Includes live preview, terminal access, and file system for interactive development with real-time refinement.",
    tech: [
      "Next.js",
      "TypeScript",
      "Monaco Editor",
      "WebContainers",
      "xterm.js",
      "Redis",
      "Upstash",
      "Gemini API",
    ],
    github: "https://github.com/KushalGoyal09/Reacter",
    live: "https://www.reacter.codes/",
    featured: true,
  },
  {
    title: "HealthHub",
    description:
      "Full-stack doctor-patient appointment platform with secure video consultations and online payments. Streamlines booking, communication, and healthcare access.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Razorpay",
      "WebRTC",
    ],
    github: "https://github.com/KushalGoyal09/HealthHub",
    live: "", // add if deployed
    featured: true,
  },
  {
    title: "Short.ly",
    description:
      "URL shortening service with custom and auto-generated links using Base62 encoding and Snowflake IDs. Includes detailed analytics for tracking usage.",
    tech: [
      "TypeScript",
      "React",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
    ],
    github: "https://github.com/KushalGoyal09/Shortly",
    live: "https://shortly.kushalgoyal.tech",
    featured: true,
  },
];
