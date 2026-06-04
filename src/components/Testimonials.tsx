"use client";

import { useLang } from "@/lib/LangContext";

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section id="testimonials" className="bg-white px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-[10px] tracking-[2.5px] uppercase text-amber font-semibold mb-3 bg-amber/8 rounded-full px-4 py-1.5">
            {t.testimonials.label}
          </div>
          <h2 className="font-serif text-2xl md:text-[36px] font-medium text-green-dark leading-[1.2]">
            {t.testimonials.title}{" "}
            <span className="text-amber">{t.testimonials.titleEm}</span>
          </h2>
        </div>

        <p className="text-[13px] text-text-faint italic mb-10 max-w-[560px] leading-[1.75] border-l-[3px] border-amber/25 pl-5 mx-auto text-center">
          {t.testimonials.context}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {[
            { quote: t.testimonials.quote1, source: t.testimonials.source1, date: t.testimonials.date1, initial: "S", color: "bg-green-pale text-green-dark" },
            { quote: t.testimonials.quote2, source: t.testimonials.source2, date: t.testimonials.date2, initial: "E", color: "bg-amber/10 text-amber" },
          ].map((item, i) => (
            <div key={i} className="card-hover bg-cream rounded-2xl p-8 border border-border/40 relative">
              <div className="absolute top-5 right-6 font-serif text-[52px] text-green-mist/20 leading-none select-none">
                &ldquo;
              </div>
              <p className="text-sm text-text-mid leading-[1.85] mb-6 relative z-10">
                {item.quote}
              </p>
              <div className="border-t border-border/50 pt-4 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center text-xs font-bold`}>
                  {item.initial}
                </div>
                <div>
                  <div className="text-[12px] text-text-faint font-medium">{item.source}</div>
                  <div className="text-[11px] text-text-faint/50">{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
