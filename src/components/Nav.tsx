"use client";

import { useLang } from "@/lib/LangContext";

export default function Nav() {
  const { t, toggleLang, isRTL } = useLang();

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-4 bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <a href="#" className="font-serif text-lg font-medium text-green-dark">
        Leo <span className="text-amber">Houssami</span>
      </a>
      <div className="flex items-center gap-4 md:gap-6" dir={isRTL ? "rtl" : "ltr"}>
        <a href="#why" className="text-[13px] text-text-muted hover:text-green-dark transition-colors hidden md:block font-medium">
          {t.nav.why}
        </a>
        <a href="#services" className="text-[13px] text-text-muted hover:text-green-dark transition-colors hidden md:block font-medium">
          {t.nav.services}
        </a>
        <a href="#about" className="text-[13px] text-text-muted hover:text-green-dark transition-colors hidden md:block font-medium">
          {t.nav.about}
        </a>
        <button
          onClick={toggleLang}
          className="text-[13px] text-amber font-medium border border-amber/40 px-3.5 py-1.5 rounded-lg hover:bg-amber hover:text-white transition-all"
        >
          {isRTL ? "English" : "عربي"}
        </button>
        <a
          href="tel:0466202000"
          className="btn-press text-[13px] bg-green-dark text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-mid transition-colors hidden sm:block"
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );
}
