"use client";

import { useLang } from "@/lib/LangContext";

export default function LangStrip() {
  const { t } = useLang();

  return (
    <div className="bg-gradient-to-r from-green-pale/60 via-white to-green-pale/60 border-y border-border/20 px-6 md:px-12 lg:px-16 py-4">
      <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
        <span className="text-[10px] tracking-[2px] uppercase text-text-faint font-semibold mr-1">
          {t.langStrip.label}
        </span>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-green-dark bg-white rounded-full px-3.5 py-1.5 shadow-sm border border-border/30 font-medium">
            <span className="text-base leading-none">🇦🇪</span>
            {t.langStrip.arabic}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-green-dark bg-white rounded-full px-3.5 py-1.5 shadow-sm border border-border/30 font-medium">
            <span className="text-base leading-none">🇦🇺</span>
            {t.langStrip.english}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-green-dark bg-white rounded-full px-3.5 py-1.5 shadow-sm border border-border/30 font-medium">
            <span className="text-base leading-none">🇫🇷</span>
            {t.langStrip.french}
          </span>
        </div>
        <span className="text-[11px] text-text-faint italic ml-auto hidden lg:block">
          {t.langStrip.area}
        </span>
      </div>
    </div>
  );
}
