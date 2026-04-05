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
    <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* Grid background with radial fade */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Hero-local orbs for extra depth */}
      <div
        className="orb animate-float"
        style={{
          width: 300,
          height: 300,
          top: "15%",
          right: "10%",
          background: "rgba(34, 211, 238, 0.12)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="orb animate-float-reverse"
        style={{
          width: 250,
          height: 250,
          bottom: "20%",
          left: "5%",
          background: "rgba(167, 139, 250, 0.1)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-3xl w-full">
        {/* Glass code block */}
        <div className="glass rounded-2xl p-8 sm:p-10 mb-8 animate-fade-in-up border-gradient-hover">
          <div className="mb-4 font-mono text-sm text-muted">
            <span className="text-accent">const</span> developer ={" "}
            <span className="text-accent">{"{"}</span>
          </div>

          <h1 className="mb-3 text-5xl font-bold tracking-tight text-gradient sm:text-6xl lg:text-7xl">
            {heroData.name}
          </h1>

          <div className="mb-4 flex items-center gap-2 font-mono text-lg text-muted sm:text-xl">
            <span className="text-accent">role:</span>
            <span className="text-foreground">&quot;{text}&quot;</span>
            <span className="inline-block w-0.5 h-5 bg-accent animate-[blink_1s_step-end_infinite]" />
          </div>

          <div className="font-mono text-sm text-muted">
            <span className="text-accent">{"}"}</span>;
          </div>
        </div>

        <p
          className="mb-10 max-w-xl text-lg leading-relaxed text-muted animate-fade-in opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          {heroData.tagline}
        </p>

        <div
          className="flex flex-wrap gap-4 animate-fade-in opacity-0"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="btn-glow glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-mono text-sm text-accent transition-all duration-300 hover:text-foreground"
          >
            view_projects()
          </a>
          <a
            href="#contact"
            className="glass-subtle inline-flex items-center gap-2 rounded-xl px-6 py-3 font-mono text-sm text-muted transition-all duration-300 hover:text-foreground hover:border-white/15"
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
