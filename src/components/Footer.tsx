"use client";

import { useLang } from "@/lib/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-green-deep px-6 md:px-12 lg:px-16 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
        <div className="text-[12px] text-white/30 leading-[2]">
          {t.footer.copyright}<br />
          {t.footer.location} · 0466 202 000 · leohoussami@gmail.com<br />
          {t.footer.compliance}
        </div>
        <div className="text-left md:text-right">
          <div className="font-serif text-base text-white/40">Leo Houssami</div>
          <div className="text-[10px] text-white/20 mt-1.5 leading-[2]">
            {t.footer.qualLine}<br />
            {t.footer.checks}
          </div>
        </div>
      </div>
    </footer>
  );
}
