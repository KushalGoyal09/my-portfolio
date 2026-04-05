import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Global ambient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="orb animate-float"
          style={{
            width: 600,
            height: 600,
            top: -200,
            right: -200,
            background: "rgba(34, 211, 238, 0.07)",
          }}
        />
        <div
          className="orb animate-float-reverse"
          style={{
            width: 800,
            height: 800,
            top: "25%",
            left: -300,
            background: "rgba(167, 139, 250, 0.05)",
          }}
        />
        <div
          className="orb animate-float-slow"
          style={{
            width: 500,
            height: 500,
            bottom: "20%",
            right: "15%",
            background: "rgba(34, 211, 238, 0.04)",
          }}
        />
        <div
          className="orb animate-float"
          style={{
            width: 400,
            height: 400,
            bottom: -100,
            left: "20%",
            background: "rgba(167, 139, 250, 0.04)",
            animationDelay: "-7s",
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
