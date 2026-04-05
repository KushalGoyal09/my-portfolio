import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { SectionHeader } from "./about";
import { socials, email } from "@/data/contact";
import { Reveal } from "./reveal";

const icons = { Github, Linkedin, Twitter, Mail };

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="contact" />

        <Reveal>
          <div className="mx-auto max-w-lg">
            <div className="glass rounded-2xl p-8 sm:p-10 text-center border-gradient-hover">
              <div className="mb-6 font-mono text-sm text-muted">
                <span className="text-accent">$</span> echo &quot;Let&apos;s
                build something together&quot;
              </div>

              <h3 className="mb-4 text-3xl font-bold text-gradient">
                Get In Touch
              </h3>
              <p className="mb-8 leading-relaxed text-muted">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of something great. Feel free to
                reach out.
              </p>

              <a
                href={`mailto:${email}`}
                className="btn-glow glass mb-10 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-mono text-sm text-accent transition-all duration-300 hover:text-foreground"
              >
                <Mail size={16} />
                send_message()
              </a>

              <div className="flex items-center justify-center gap-4 pt-6">
                {socials.map((social) => {
                  const Icon = icons[social.iconName];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="glass-subtle flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-all duration-300 hover:text-accent hover:border-accent/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
