"use client";

import { useLang } from "@/lib/LangContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLang();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[56%_44%] min-h-[480px] md:min-h-[560px]">
      {/* Left panel */}
      <div className="bg-green-dark px-6 md:px-14 py-12 md:py-16 flex flex-col justify-center">
        <div className="text-[10px] tracking-[2.5px] uppercase text-[#7dbfa0] font-medium mb-4">
          {t.hero.tag}
        </div>
        <h1 className="font-serif text-3xl md:text-[42px] font-medium text-white leading-[1.15] mb-3">
          {t.hero.title}<br />
          <em className="text-amber-light not-italic">{t.hero.titleEm}</em>
        </h1>
        <p className="text-sm md:text-[15px] text-white/68 leading-[1.8] mb-3 max-w-[400px]">
          {t.hero.sub}
        </p>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#7dbfa0] flex-shrink-0" />
          <span className="text-[11px] md:text-[13px] text-white/82">
            {t.hero.indicator}
          </span>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="tel:0466202000"
            className="inline-block bg-amber text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#a3672c] transition-colors"
          >
            {t.hero.cta}
          </a>
          <a
            href="#how"
            className="text-sm text-white/65 hover:text-white/90 transition-colors flex items-center gap-1"
          >
            {t.hero.howItWorks}
          </a>
        </div>
      </div>

      {/* Right panel — photo */}
      <div className="bg-green-deep overflow-hidden relative min-h-[300px] md:min-h-0">
        <Image
          src="/leo-photo.jpg"
          alt="Leo Houssami"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
          sizes="(max-width: 768px) 100vw, 44vw"
        />
      </div>
    </div>
  );
}
