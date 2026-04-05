"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "glass border-b-0 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="font-mono text-sm text-gradient font-semibold">
          ~/kushal
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-3 py-1.5 font-mono text-sm text-muted transition-all duration-300 hover:text-foreground hover:bg-white/5"
            >
              .{link.label}()
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-muted transition-colors hover:text-foreground md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass border-t border-white/5 md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 font-mono text-sm text-muted transition-all hover:text-foreground hover:bg-white/5"
              >
                .{link.label}()
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
