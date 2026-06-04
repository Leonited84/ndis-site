"use client";

import { useLang } from "@/lib/LangContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLang();

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] min-h-[520px] md:min-h-[620px]">
        {/* Left panel */}
        <div className="bg-green-dark px-6 md:px-14 lg:px-16 py-14 md:py-20 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle Arabic watermark */}
          <div className="absolute top-8 right-8 text-[100px] md:text-[140px] text-white/[0.04] font-serif leading-none pointer-events-none select-none hidden md:block" dir="rtl">
            مساعدتك
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-amber-light animate-pulse" />
              <span className="text-[11px] tracking-[1.5px] uppercase text-white/70 font-medium">
                {t.hero.tag}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-[46px] lg:text-[50px] font-medium text-white leading-[1.1] mb-5">
              {t.hero.title}{" "}
              <em className="text-amber-light not-italic block mt-2">
                {t.hero.titleEm}
              </em>
            </h1>

            <p className="text-sm md:text-[15px] text-white/60 leading-[1.9] mb-8 max-w-[440px]">
              {t.hero.sub}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="tel:0466202000"
                className="btn-press inline-flex items-center gap-2.5 bg-amber text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-amber-warm transition-colors shadow-lg shadow-amber/25"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.hero.cta}
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm py-4 px-4"
              >
                {t.hero.howItWorks}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/35">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-mist/60" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                NDIS Registered
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-mist/60" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Arabic Spoken
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-mist/60" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-mist/60" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No Agency Markup
              </span>
            </div>
          </div>
        </div>

        {/* Right panel — photo */}
        <div className="relative bg-green-deep min-h-[320px] md:min-h-0 overflow-hidden">
          <Image
            src="/leo-photo.jpg"
            alt="Leo Houssami — NDIS Support Coordinator"
            fill
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          {/* Subtle gradient — much lighter */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/30 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
