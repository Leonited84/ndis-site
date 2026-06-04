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
    <section id="about" className="bg-cream px-6 md:px-12 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left — text */}
        <div>
          <div className="text-[10px] tracking-[2.5px] uppercase text-amber font-medium mb-2">
            {t.about.label}
          </div>
          <h2 className="font-serif text-2xl md:text-[32px] font-medium text-green-dark mb-3 leading-[1.2]">
            {t.about.title}<br />
            <em className="not-italic">{t.about.titleEm}</em>
          </h2>
          <p className="text-[15px] text-text-muted leading-[1.8] mb-5">
            {t.about.sub}
          </p>
          <div className="flex flex-col gap-2.5 mt-5">
            {quals.map((q, i) => (
              <div key={i} className="flex items-start gap-3 text-[13px] text-text-muted leading-[1.6]">
                <div className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 flex-shrink-0" />
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stats box */}
        <div className="bg-green-dark rounded-2xl p-8 md:p-9 text-white">
          <div className="font-serif text-lg text-amber-light italic mb-6">
            {t.about.statsTitle}
          </div>
          <div className="grid grid-cols-2 gap-3.5 mb-7">
            <div className="bg-white/7 rounded-[10px] p-4 text-center">
              <div className="font-serif text-[26px] text-white font-medium">{t.about.stat1Num}</div>
              <div className="text-[11px] text-white/50 mt-1 leading-[1.4]">{t.about.stat1Label}</div>
            </div>
            <div className="bg-white/7 rounded-[10px] p-4 text-center">
              <div className="font-serif text-[26px] text-white font-medium">{t.about.stat2Num}</div>
              <div className="text-[11px] text-white/50 mt-1 leading-[1.4]">{t.about.stat2Label}</div>
            </div>
            <div className="bg-white/7 rounded-[10px] p-4 text-center">
              <div className="font-serif text-[26px] text-white font-medium">{t.about.stat3Num}</div>
              <div className="text-[11px] text-white/50 mt-1 leading-[1.4]">{t.about.stat3Label}</div>
            </div>
            <div className="bg-white/7 rounded-[10px] p-4 text-center">
              <div className="font-serif text-[26px] text-white font-medium">{t.about.stat4Num}</div>
              <div className="text-[11px] text-white/50 mt-1 leading-[1.4]">{t.about.stat4Label}</div>
            </div>
          </div>
          <div className="text-[20px] text-center text-white/22" dir="rtl">
            {t.about.arabicQuote}
          </div>
          <div className="text-[11px] text-white/30 text-center mt-1 italic">
            {t.about.arabicCaption}
          </div>
        </div>
      </div>
    </section>
  );
}
