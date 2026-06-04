"use client";

import { useLang } from "@/lib/LangContext";

export default function Nav() {
  const { t, toggleLang, isRTL } = useLang();

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white border-b border-border sticky top-0 z-50">
      <div className="font-serif text-lg font-medium text-green-dark">
        Leo <span className="text-amber">Houssami</span>
      </div>
      <div className="flex items-center gap-4 md:gap-7" dir={isRTL ? "rtl" : "ltr"}>
        <a href="#why" className="text-sm text-[#555] hover:text-green-dark transition-colors hidden md:block">
          {t.nav.why}
        </a>
        <a href="#services" className="text-sm text-[#555] hover:text-green-dark transition-colors hidden md:block">
          {t.nav.services}
        </a>
        <a href="#about" className="text-sm text-[#555] hover:text-green-dark transition-colors hidden md:block">
          {t.nav.about}
        </a>
        <button
          onClick={toggleLang}
          className="text-sm text-amber font-medium border border-amber px-3 py-1 rounded-md hover:bg-amber hover:text-white transition-colors"
        >
          {isRTL ? "English" : "عربي"}
        </button>
        <a
          href="#contact"
          className="text-sm bg-green-dark text-white px-5 py-2 rounded-md font-medium hover:bg-green-mid transition-colors"
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );
}
