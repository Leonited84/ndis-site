"use client";

import { useLang } from "@/lib/LangContext";

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="bg-green-deep px-6 md:px-12 lg:px-16 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center text-sm font-bold">
                LH
              </div>
              <div>
                <div className="font-serif text-base text-white/80">Leo Houssami</div>
                <div className="text-[10px] text-white/30 uppercase tracking-[1px]">NDIS Support Coordination</div>
              </div>
            </div>
            <p className="text-[12px] text-white/25 leading-[1.8]">
              {t.footer.compliance}
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] text-white/40 uppercase tracking-[1.5px] font-semibold mb-4">
              {lang === "en" ? "Contact" : "اتصل"}
            </div>
            <div className="space-y-2.5 text-[13px] text-white/35">
              <div>Moonee Ponds VIC 3039</div>
              <div>0466 202 000</div>
              <div>leohoussami@gmail.com</div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[11px] text-white/40 uppercase tracking-[1.5px] font-semibold mb-4">
              {lang === "en" ? "Registration" : "التسجيل"}
            </div>
            <div className="space-y-2 text-[12px] text-white/25 leading-[1.7]">
              <div>ABN 27 218 061 213</div>
              <div>{t.footer.qualLine}</div>
              <div>{t.footer.checks}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 text-center">
          <p className="text-[11px] text-white/20">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
