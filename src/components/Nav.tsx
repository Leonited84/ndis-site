"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";

export default function Nav() {
  const { t, toggleLang, isRTL } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#why", label: t.nav.why },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-4 bg-white/95 backdrop-blur-md border-b border-border/30 sticky top-0 z-50">
        <a href="#" className="font-serif text-lg font-medium text-green-dark flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-dark text-white flex items-center justify-center text-sm font-bold">
            LH
          </div>
          <span className="hidden sm:inline">
            Leo <span className="text-amber">Houssami</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6" dir={isRTL ? "rtl" : "ltr"}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-text-muted hover:text-green-dark transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-[13px] text-amber font-medium border border-amber/40 px-3 py-1.5 rounded-lg hover:bg-amber hover:text-white transition-all"
          >
            {isRTL ? "English" : "عربي"}
          </button>
          <a
            href="tel:0466202000"
            className="btn-press text-[13px] bg-green-dark text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-mid transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs text-amber font-medium border border-amber/40 px-2.5 py-1 rounded-md"
          >
            {isRTL ? "EN" : "عربي"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-green-pale transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-green-dark transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-green-dark transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-green-dark transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute top-[65px] left-0 right-0 bg-white border-b border-border shadow-xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] text-text-dark hover:text-green-dark py-3 px-4 rounded-lg hover:bg-green-pale transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-border my-3" />
              <a
                href="tel:0466202000"
                className="btn-press text-center bg-green-dark text-white px-5 py-3.5 rounded-xl font-medium hover:bg-green-mid transition-colors"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
