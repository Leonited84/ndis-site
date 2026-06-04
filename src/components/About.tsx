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
    <section id="about" className="bg-cream px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — text */}
          <div>
            <div className="inline-block text-[10px] tracking-[2.5px] uppercase text-amber font-semibold mb-3 bg-amber/8 rounded-full px-4 py-1.5">
              {t.about.label}
            </div>
            <h2 className="font-serif text-2xl md:text-[36px] font-medium text-green-dark mb-3 leading-[1.2]">
              {t.about.title}{" "}
              <span className="text-amber">{t.about.titleEm}</span>
            </h2>
            <p className="text-[15px] text-text-muted leading-[1.85] mb-8">
              {t.about.sub}
            </p>
            <div className="space-y-3">
              {quals.map((q, i) => (
                <div key={i} className="flex items-start gap-3 text-[13px] text-text-muted leading-[1.65]">
                  <div className="w-2 h-2 rounded-full bg-amber mt-1.5 flex-shrink-0" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats box */}
          <div className="bg-green-dark rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-green-dark/15 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/[0.02] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="font-serif text-[12px] text-amber-light/60 uppercase tracking-[2.5px] mb-8">
                {t.about.statsTitle}
              </div>
              <div className="space-y-4 mb-8">
                {[
                  { num: t.about.stat1Num, label: t.about.stat1Label },
                  { num: t.about.stat2Num, label: t.about.stat2Label },
                  { num: t.about.stat3Num, label: t.about.stat3Label },
                  { num: t.about.stat4Num, label: t.about.stat4Label },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/6 backdrop-blur rounded-xl p-4 border border-white/5">
                    <div className="font-serif text-[24px] text-white font-medium w-16 text-center flex-shrink-0">
                      {stat.num}
                    </div>
                    <div className="text-[12px] text-white/50 leading-[1.4]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/8 pt-6 text-center">
                <div className="text-[16px] text-white/12 font-serif" dir="rtl">
                  {t.about.arabicQuote}
                </div>
                <div className="text-[10px] text-white/20 mt-1.5 italic">
                  {t.about.arabicCaption}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
