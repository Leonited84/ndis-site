"use client";

import { useLang } from "@/lib/LangContext";

export default function CTA() {
  const { t } = useLang();

  return (
    <section className="bg-green-dark px-6 md:px-12 lg:px-16 py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-white/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white/[0.08]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-[40px] text-white font-medium leading-[1.2] mb-5">
          {t.cta.title}{" "}
          <span className="text-amber-light">{t.cta.titleEm}</span>
        </h2>
        <p className="text-sm text-white/50 leading-[1.85] max-w-[480px] mx-auto mb-10">
          {t.cta.sub}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:0466202000"
            className="btn-press inline-flex items-center gap-3 bg-white text-green-dark px-10 py-4 rounded-xl text-lg font-medium hover:bg-cream transition-colors shadow-xl shadow-black/10 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0466 202 000
          </a>
          <a
            href="mailto:leohoussami@gmail.com"
            className="btn-press inline-flex items-center gap-2.5 bg-amber text-white px-10 py-4 rounded-xl text-sm font-medium hover:bg-amber-warm transition-colors w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.cta.bookOnline}
          </a>
        </div>

        <p className="text-[11px] text-white/25 mt-6">
          {t.cta.note}
        </p>
      </div>
    </section>
  );
}
