"use client";

import { useLang } from "@/lib/LangContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLang();

  return (
    <div className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-mist/10 to-transparent pointer-events-none hidden lg:block" />

      <div className="grid grid-cols-1 md:grid-cols-[52%_48%]">
        {/* Left panel */}
        <div className="bg-green-dark px-6 md:px-14 lg:px-16 py-14 md:py-20 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative Arabic watermark */}
          <div className="absolute top-6 right-4 md:right-8 text-[90px] md:text-[130px] text-white/[0.035] font-serif leading-none pointer-events-none select-none hidden md:block" dir="rtl">
            مساعدتك
          </div>
          {/* Decorative circle */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/[0.02] pointer-events-none" />

          <div className="relative z-10 max-w-[480px]">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-amber-light animate-pulse-soft" />
              <span className="text-[11px] tracking-[1.5px] uppercase text-white/70 font-medium">
                {t.hero.tag}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-[44px] lg:text-[48px] font-medium text-white leading-[1.1] mb-5">
              {t.hero.title}
              <br />
              <span className="text-amber-light">{t.hero.titleEm}</span>
            </h1>

            <p className="text-sm md:text-[15px] text-white/55 leading-[1.9] mb-8">
              {t.hero.sub}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="tel:0466202000"
                className="btn-press inline-flex items-center gap-2.5 bg-amber text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-amber-warm transition-colors shadow-lg shadow-amber/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.hero.cta}
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 text-white/45 hover:text-white/80 transition-colors text-sm py-4 px-3"
              >
                {t.hero.howItWorks}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {[
                { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", label: "NDIS Registered" },
                { icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418", label: "Arabic · English · French" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Free 30-min review" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[11px] text-white/30">
                  <svg className="w-3.5 h-3.5 text-green-mist/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — photo */}
        <div className="relative bg-green-deep min-h-[340px] md:min-h-[500px] overflow-hidden">
          <Image
            src="/leo-photo.jpg"
            alt="Leo Houssami — NDIS Support Coordinator"
            fill
            style={{ objectFit: "cover", objectPosition: "center 10%" }}
            priority
            sizes="(max-width: 768px) 100vw, 48vw"
          />
          {/* Very subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-dark/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/25 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
