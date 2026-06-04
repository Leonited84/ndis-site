"use client";

import { useLang } from "@/lib/LangContext";

export default function LangStrip() {
  const { t } = useLang();

  return (
    <div className="bg-white border-b border-border px-6 md:px-12 py-3 flex items-center gap-2 flex-wrap">
      <span className="text-[10px] tracking-[1.5px] uppercase text-text-faint mr-1">
        {t.langStrip.label}
      </span>
      <span className="text-xs text-green-dark flex items-center gap-1 px-3 py-1 bg-green-pale rounded-full">
        <span className="text-[10px] text-green-600">✓</span> {t.langStrip.arabic}
      </span>
      <span className="text-xs text-green-dark flex items-center gap-1 px-3 py-1 bg-green-pale rounded-full">
        <span className="text-[10px] text-green-600">✓</span> {t.langStrip.english}
      </span>
      <span className="text-xs text-green-dark flex items-center gap-1 px-3 py-1 bg-green-pale rounded-full">
        <span className="text-[10px] text-green-600">✓</span> {t.langStrip.french}
      </span>
      <span className="text-xs text-text-faint italic ml-auto hidden md:block">
        {t.langStrip.area}
      </span>
    </div>
  );
}
