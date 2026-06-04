"use client";

import { useLang } from "@/lib/LangContext";

const iconPaths = {
  support: "M3 12h18M3 6l9-3 9 3M3 18l9 3 9-3M12 3v18",
  plan: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  family: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  review: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
};

const cardStyles = [
  { iconBg: "bg-green-pale", iconColor: "text-green-dark", border: "border-green-mist/20" },
  { iconBg: "bg-amber/10", iconColor: "text-amber", border: "border-amber/15" },
  { iconBg: "bg-green-mist/30", iconColor: "text-green-mid", border: "border-green-mist/25" },
  { iconBg: "bg-green-pale", iconColor: "text-green-dark", border: "border-green-mist/20" },
];

export default function Services() {
  const { t } = useLang();

  const services = [
    { icon: iconPaths.support, title: t.services.svc1Title, desc: t.services.svc1Desc, rate: t.services.svc1Rate },
    { icon: iconPaths.plan, title: t.services.svc2Title, desc: t.services.svc2Desc, rate: t.services.svc2Rate },
    { icon: iconPaths.family, title: t.services.svc3Title, desc: t.services.svc3Desc, rate: t.services.svc3Rate },
    { icon: iconPaths.review, title: t.services.svc4Title, desc: t.services.svc4Desc, rate: t.services.svc4Rate },
  ];

  return (
    <section id="services" className="bg-white px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-[10px] tracking-[2.5px] uppercase text-amber font-semibold mb-3 bg-amber/8 rounded-full px-4 py-1.5">
            {t.services.label}
          </div>
          <h2 className="font-serif text-2xl md:text-[36px] font-medium text-green-dark leading-[1.2] mb-3">
            {t.services.title}
          </h2>
          <p className="text-[16px] text-amber font-medium">
            {t.services.titleEm}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`group card-hover bg-cream rounded-2xl p-8 border ${cardStyles[i].border} relative overflow-hidden`}
            >
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-xl ${cardStyles[i].iconBg} ${cardStyles[i].iconColor} flex items-center justify-center flex-shrink-0`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={svc.icon} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-[17px] font-medium text-green-dark mb-2 leading-snug">
                    {svc.title}
                  </div>
                  <p className="text-[13px] text-text-muted leading-[1.75] mb-4">
                    {svc.desc}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[12px] text-amber font-medium bg-amber/8 rounded-full px-3 py-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {svc.rate}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
