"use client";

import { useLang } from "@/lib/LangContext";

function SvgIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-green-dark" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

export default function Services() {
  const { t } = useLang();

  const services = [
    {
      icon: "M3 12h18M3 6l9-3 9 3M3 18l9 3 9-3",
      title: t.services.svc1Title,
      desc: t.services.svc1Desc,
      rate: t.services.svc1Rate,
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      title: t.services.svc2Title,
      desc: t.services.svc2Desc,
      rate: t.services.svc2Rate,
    },
    {
      icon: "M3 5h12M9 3v2M3 10h6M3 15h3M14 15s0-3 3-3 3 3 3 3v6h-6v-6z",
      title: t.services.svc3Title,
      desc: t.services.svc3Desc,
      rate: t.services.svc3Rate,
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: t.services.svc4Title,
      desc: t.services.svc4Desc,
      rate: t.services.svc4Rate,
    },
  ];

  return (
    <section id="services" className="bg-white px-6 md:px-12 py-16 md:py-20">
      <div className="text-[10px] tracking-[2.5px] uppercase text-amber font-medium mb-2">
        {t.services.label}
      </div>
      <h2 className="font-serif text-2xl md:text-[32px] font-medium text-green-dark mb-3 leading-[1.2]">
        {t.services.title}<br />
        <em className="not-italic">{t.services.titleEm}</em>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {services.map((svc) => (
          <div
            key={svc.title}
            className="border border-border rounded-xl p-7 bg-cream"
          >
            <div className="w-10 h-10 bg-green-light rounded-[10px] flex items-center justify-center mb-4">
              <SvgIcon d={svc.icon} />
            </div>
            <div className="font-serif text-lg font-medium text-green-dark mb-2">
              {svc.title}
            </div>
            <p className="text-[13px] text-text-muted leading-[1.75]">
              {svc.desc}
            </p>
            <div className="text-[12px] text-amber font-medium mt-3">
              {svc.rate}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
