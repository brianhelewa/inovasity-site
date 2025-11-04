'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";

const LOGO_SRC = "/brand/inovasity-logo.png"; // <- put your PNG here
const LOGO_W = 180;              // desktop (not scrolled)
const LOGO_H = 64;
const LOGO_W_SCROLLED = 150;     // desktop (scrolled)
const LOGO_H_SCROLLED = 48;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["product", "clinical", "roadmap", "about", "faq"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 150 && r.bottom >= 150;
      });
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  };

  const navLinks = [
    { id: "product", label: "Product" },
    { id: "clinical", label: "Clinical" },
    { id: "roadmap", label: "Roadmap" },
    { id: "about", label: "About" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      {/* Top utility strip */}
      <div
        className="hidden md:block border-b"
        style={{ backgroundColor: "var(--neutral-light)", borderColor: "var(--color-border)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-end gap-6 h-8">
            <a href="#clinical" className="text-caption transition-colors hover:opacity-70" style={{ color: "var(--text-muted)", fontWeight: 500 }}>
              For Clinicians
            </a>
            <span style={{ color: "var(--color-border)" }}>•</span>
            <a href="#contact" className="text-caption transition-colors hover:opacity-70" style={{ color: "var(--text-muted)", fontWeight: 500 }}>
              For Partners
            </a>
            <span style={{ color: "var(--color-border)" }}>•</span>
            <a href="#faq" className="text-caption transition-colors hover:opacity-70" style={{ color: "var(--text-muted)", fontWeight: 500 }}>
              Security & Privacy
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
          isScrolled ? "bg-white/98 backdrop-blur-sm shadow-md mt-0" : "bg-white/95 md:mt-8"
        }`}
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-200 ${isScrolled ? "h-16" : "h-20"}`}>
            {/* Logo */}
            <Link href="/" aria-label="Inovasity home" className="flex items-center gap-3 shrink-0">
                <Image
                    src={LOGO_SRC}
                    alt="Inovasity"
                    // give a generous intrinsic size; we'll override with style height
                    width={1000}
                    height={250}
                    priority
                    sizes="(max-width: 768px) 180px, 260px"
                    style={{
                    height: isScrolled ? LOGO_H_SCROLLED : LOGO_H, // controls visual size
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                    }}
                />
                </Link>
            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative transition-colors group"
                  style={{ color: "var(--text-secondary)" }}
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  <span
                    className="group-hover:opacity-100"
                    style={{ color: activeSection === link.id ? "var(--brand-blue)" : "inherit" }}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--brand-blue)] transition-all duration-200 ${
                      activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ borderRadius: "2px", height: "3px" }}
                  />
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex text-white hover:opacity-90 hover:translate-y-[-1px] transition-all"
              style={{
                backgroundColor: "var(--brand-navy)",
                borderRadius: "var(--radius-lg)",
                height: isScrolled ? "40px" : "44px",
                boxShadow: "0 2px 8px rgba(17, 45, 79, 0.15)",
              }}
            >
              Request Early Access
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" style={{ color: "var(--brand-navy)" }}>
                  <Menu style={{ width: "24px", height: "24px" }} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full border-0 p-0" style={{ backgroundColor: "var(--brand-navy)" }}>
                {/* Mobile header */}
                <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
                  <div className="flex items-center gap-2">
                    <Image src={LOGO_SRC} alt="Inovasity" width={180} height={40} priority className="h-auto w-auto" />
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="transition-opacity hover:opacity-70">
                    <X style={{ width: "24px", height: "24px", color: "white" }} />
                  </button>
                </div>

                {/* Mobile links */}
                <div className="flex flex-col p-6 space-y-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-left py-4 px-4 rounded-lg transition-colors"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: activeSection === link.id ? 600 : 400,
                        backgroundColor: activeSection === link.id ? "rgba(255, 255, 255, 0.1)" : "transparent",
                      }}
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="pt-6">
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="w-full text-navy hover:opacity-90 transition-opacity"
                      style={{
                        backgroundColor: "white",
                        borderRadius: "var(--radius-lg)",
                        height: "48px",
                        color: "var(--brand-navy)",
                        fontWeight: 600,
                      }}
                    >
                      Request Early Access
                    </Button>
                  </div>
                </div>

                {/* Mobile footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
                  <div className="flex flex-col gap-3 text-caption" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    <a href="#clinical" className="hover:underline">For Clinicians</a>
                    <a href="#contact" className="hover:underline">For Partners</a>
                    <a href="#faq" className="hover:underline">Security & Privacy</a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
