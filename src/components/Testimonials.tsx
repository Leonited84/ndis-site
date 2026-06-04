"use client";

import { useLang } from "@/lib/LangContext";

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section id="testimonials" className="bg-white px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[10px] tracking-[2.5px] uppercase text-amber font-medium mb-3">
            {t.testimonials.label}
          </div>
          <h2 className="font-serif text-2xl md:text-[34px] font-medium text-green-dark leading-[1.2]">
            {t.testimonials.title}{" "}
            <em className="not-italic text-amber">{t.testimonials.titleEm}</em>
          </h2>
        </div>
        <p className="text-[13px] text-text-faint italic mb-10 max-w-[560px] leading-[1.7] border-l-[3px] border-amber/30 pl-5 mx-auto text-center">
          {t.testimonials.context}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          <div className="card-hover bg-cream rounded-2xl p-8 border border-border/50 relative">
            <div className="absolute top-6 right-8 font-serif text-[48px] text-green-mist/30 leading-none">"</div>
            <p className="text-sm text-text-mid leading-[1.8] mb-5 relative z-10">
              {t.testimonials.quote1}
            </p>
            <div className="border-t border-border pt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-pale flex items-center justify-center text-green-dark text-xs font-bold">
                S
              </div>
              <div>
                <div className="text-[12px] text-text-faint">{t.testimonials.source1}</div>
                <div className="text-[11px] text-text-faint/60">{t.testimonials.date1}</div>
              </div>
            </div>
          </div>
          <div className="card-hover bg-cream rounded-2xl p-8 border border-border/50 relative">
            <div className="absolute top-6 right-8 font-serif text-[48px] text-green-mist/30 leading-none">"</div>
            <p className="text-sm text-text-mid leading-[1.8] mb-5 relative z-10">
              {t.testimonials.quote2}
            </p>
            <div className="border-t border-border pt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center text-amber text-xs font-bold">
                E
              </div>
              <div>
                <div className="text-[12px] text-text-faint">{t.testimonials.source2}</div>
                <div className="text-[11px] text-text-faint/60">{t.testimonials.date2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
