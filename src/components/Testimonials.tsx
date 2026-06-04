"use client";

import { useLang } from "@/lib/LangContext";

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section id="testimonials" className="bg-white px-6 md:px-12 py-16 md:py-20">
      <div className="text-[10px] tracking-[2.5px] uppercase text-amber font-medium mb-2">
        {t.testimonials.label}
      </div>
      <h2 className="font-serif text-2xl md:text-[32px] font-medium text-green-dark mb-3 leading-[1.2]">
        {t.testimonials.title}<br />
        <em className="not-italic">{t.testimonials.titleEm}</em>
      </h2>
      <p className="text-[13px] text-text-faint italic mb-8 max-w-[560px] leading-[1.7] border-l-[3px] border-green-mist pl-4">
        {t.testimonials.context}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-border rounded-xl p-7 bg-cream">
          <div className="font-serif text-[36px] text-green-mist leading-none mb-3">"</div>
          <p className="text-sm text-text-mid leading-[1.8] mb-4">
            {t.testimonials.quote1.split("calm environment").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <strong className="text-amber font-medium">calm environment</strong>}
              </span>
            ))}
          </p>
          <div className="border-t border-border pt-3">
            <div className="text-[12px] text-text-faint">{t.testimonials.source1}</div>
            <div className="text-[11px] text-[#bbb] mt-0.5">{t.testimonials.date1}</div>
          </div>
        </div>
        <div className="border border-border rounded-xl p-7 bg-cream">
          <div className="font-serif text-[36px] text-green-mist leading-none mb-3">"</div>
          <p className="text-sm text-text-mid leading-[1.8] mb-4">
            {t.testimonials.quote2.split("Another standout").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <strong className="text-amber font-medium">Another standout</strong>}
              </span>
            ))}
          </p>
          <div className="border-t border-border pt-3">
            <div className="text-[12px] text-text-faint">{t.testimonials.source2}</div>
            <div className="text-[11px] text-[#bbb] mt-0.5">{t.testimonials.date2}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
