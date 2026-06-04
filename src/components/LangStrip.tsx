"use client";

import { useLang } from "@/lib/LangContext";

export default function LangStrip() {
  const { t } = useLang();

  return (
    <div className="bg-green-pale/50 border-y border-border/30 px-6 md:px-12 lg:px-16 py-3.5 flex items-center gap-2 flex-wrap justify-center md:justify-start">
      <span className="text-[10px] tracking-[1.5px] uppercase text-text-faint mr-2 font-medium">
        {t.langStrip.label}:
      </span>
      <span className="inline-flex items-center gap-1.5 text-xs text-green-dark bg-white rounded-full px-3 py-1 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-green-mid" />
        {t.langStrip.arabic}
      </span>
      <span className="inline-flex items-center gap-1.5 text-xs text-green-dark bg-white rounded-full px-3 py-1 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-green-mid" />
        {t.langStrip.english}
      </span>
      <span className="inline-flex items-center gap-1.5 text-xs text-green-dark bg-white rounded-full px-3 py-1 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-green-mid" />
        {t.langStrip.french}
      </span>
      <span className="text-xs text-text-faint italic ml-auto hidden md:block">
        {t.langStrip.area}
      </span>
    </div>
  );
}
