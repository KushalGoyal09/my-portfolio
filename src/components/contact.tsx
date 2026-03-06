import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { SectionHeader } from "./about";
import { socials, email } from "@/data/contact";

const icons = { Github, Linkedin, Twitter, Mail };

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="contact" />

        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 font-mono text-sm text-muted">
            <span className="text-accent">$</span> echo &quot;Let&apos;s build
            something together&quot;
          </div>

          <h3 className="mb-4 text-3xl font-bold">Get In Touch</h3>
          <p className="mb-8 leading-relaxed text-muted">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something great. Feel free to reach out.
          </p>

          <a
            href={`mailto:${email}`}
            className="mb-10 inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-6 py-3 font-mono text-sm text-accent transition-all hover:bg-accent/20"
          >
            <Mail size={16} />
            send_message()
          </a>

          <div className="flex items-center justify-center gap-6 pt-6">
            {socials.map((social) => {
              const Icon = icons[social.iconName];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
