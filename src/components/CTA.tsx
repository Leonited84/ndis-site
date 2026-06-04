"use client";

import { useLang } from "@/lib/LangContext";

export default function CTA() {
  const { t } = useLang();

  return (
    <div id="contact" className="bg-green-dark px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-12 items-center">
      <div>
        <h2 className="font-serif text-2xl md:text-[32px] text-white font-medium leading-[1.2]">
          {t.cta.title}<br />
          <em className="text-amber-light not-italic">{t.cta.titleEm}</em>
        </h2>
        <p className="text-sm text-white/60 mt-3 leading-[1.8] max-w-[500px]">
          {t.cta.sub}
        </p>
      </div>
      <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
        <div className="font-serif text-[28px] text-white whitespace-nowrap">
          0466 202 000
        </div>
        <a
          href="mailto:leohoussami@gmail.com"
          className="inline-block bg-amber text-white px-8 py-3 rounded-md text-sm font-medium whitespace-nowrap hover:bg-[#a3672c] transition-colors"
        >
          {t.cta.bookOnline}
        </a>
        <div className="text-[11px] text-white/40 text-center">
          {t.cta.note}
        </div>
      </div>
    </div>
  );
}
