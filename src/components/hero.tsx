"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { heroData } from "@/data/hero";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = heroData.roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentRole.length) {
            setText(currentRole.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (text.length > 0) {
            setText(text.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-3xl">
        <div className="mb-4 font-mono text-sm text-muted animate-fade-in">
          <span className="text-accent">const</span> developer ={" "}
          <span className="text-accent">{"{"}</span>
        </div>

        <h1 className="mb-2 text-5xl font-bold tracking-tight animate-fade-in sm:text-6xl lg:text-7xl">
          {heroData.name}
        </h1>

        <div className="mb-6 flex items-center gap-2 font-mono text-lg text-muted sm:text-xl">
          <span className="text-accent">role:</span>
          <span className="text-foreground">&quot;{text}&quot;</span>
          <span className="inline-block w-0.5 h-5 bg-accent animate-[blink_1s_step-end_infinite]" />
        </div>

        <div className="mb-8 font-mono text-sm text-muted animate-fade-in">
          <span className="text-accent">{"}"}</span>;
        </div>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted animate-fade-in">
          {heroData.tagline}
        </p>

        <div className="flex gap-4 animate-fade-in">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-6 py-3 font-mono text-sm text-accent transition-all hover:bg-accent/20"
          >
            view_projects()
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-sm text-muted transition-all hover:border-muted hover:text-foreground"
          >
            get_in_touch()
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
