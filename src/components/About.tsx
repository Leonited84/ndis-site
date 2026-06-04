"use client";

import { useLang } from "@/lib/LangContext";

export default function About() {
  const { t } = useLang();

  const quals = [
    t.about.qual1,
    t.about.qual2,
    t.about.qual3,
    t.about.qual4,
    t.about.qual5,
    t.about.qual6,
    t.about.qual7,
  ];

  return (
    <section id="about" className="bg-cream px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start max-w-5xl mx-auto">
        {/* Left — text */}
        <div>
          <div className="text-[10px] tracking-[2.5px] uppercase text-amber font-medium mb-3">
            {t.about.label}
          </div>
          <h2 className="font-serif text-2xl md:text-[34px] font-medium text-green-dark mb-3 leading-[1.2]">
            {t.about.title}{" "}
            <em className="not-italic text-amber">{t.about.titleEm}</em>
          </h2>
          <p className="text-[15px] text-text-muted leading-[1.8] mb-6">
            {t.about.sub}
          </p>
          <div className="space-y-3">
            {quals.map((q, i) => (
              <div key={i} className="flex items-start gap-3 text-[13px] text-text-muted leading-[1.6]">
                <div className="w-2 h-2 rounded-full bg-amber mt-1.5 flex-shrink-0" />
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stats box */}
        <div className="bg-green-dark rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-green-dark/10">
          <div className="font-serif text-[13px] text-amber-light/70 uppercase tracking-[2px] mb-8">
            {t.about.statsTitle}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/8 backdrop-blur rounded-2xl p-5 text-center border border-white/5">
              <div className="font-serif text-[28px] text-white font-medium">{t.about.stat1Num}</div>
              <div className="text-[11px] text-white/50 mt-1.5 leading-[1.4]">{t.about.stat1Label}</div>
            </div>
            <div className="bg-white/8 backdrop-blur rounded-2xl p-5 text-center border border-white/5">
              <div className="font-serif text-[28px] text-white font-medium">{t.about.stat2Num}</div>
              <div className="text-[11px] text-white/50 mt-1.5 leading-[1.4]">{t.about.stat2Label}</div>
            </div>
            <div className="bg-white/8 backdrop-blur rounded-2xl p-5 text-center border border-white/5">
              <div className="font-serif text-[28px] text-white font-medium">{t.about.stat3Num}</div>
              <div className="text-[11px] text-white/50 mt-1.5 leading-[1.4]">{t.about.stat3Label}</div>
            </div>
            <div className="bg-white/8 backdrop-blur rounded-2xl p-5 text-center border border-white/5">
              <div className="font-serif text-[28px] text-white font-medium">{t.about.stat4Num}</div>
              <div className="text-[11px] text-white/50 mt-1.5 leading-[1.4]">{t.about.stat4Label}</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center">
            <div className="text-[18px] text-white/15 font-serif" dir="rtl">
              {t.about.arabicQuote}
            </div>
            <div className="text-[11px] text-white/25 mt-1.5 italic">
              {t.about.arabicCaption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
