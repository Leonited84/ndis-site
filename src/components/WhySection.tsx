"use client";

import { useLang } from "@/lib/LangContext";

export default function WhySection() {
  const { t } = useLang();

  const cards = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: t.why.card1Title,
      desc: t.why.card1Desc,
      accent: "bg-green-pale text-green-dark",
      hoverAccent: "group-hover:bg-green-dark group-hover:text-white",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: t.why.card2Title,
      desc: t.why.card2Desc,
      accent: "bg-amber/10 text-amber",
      hoverAccent: "group-hover:bg-amber group-hover:text-white",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      title: t.why.card3Title,
      desc: t.why.card3Desc,
      accent: "bg-green-mist/40 text-green-mid",
      hoverAccent: "group-hover:bg-green-mid group-hover:text-white",
    },
  ];

  return (
    <section id="why" className="bg-white px-6 md:px-12 lg:px-16 py-20 md:py-28 relative">
      <div className="pattern-bg absolute inset-0 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-[10px] tracking-[2.5px] uppercase text-amber font-semibold mb-3 bg-amber/8 rounded-full px-4 py-1.5">
            {t.why.label}
          </div>
          <h2 className="font-serif text-2xl md:text-[36px] font-medium text-green-dark leading-[1.2]">
            {t.why.title}{" "}
            <span className="text-amber">{t.why.titleEm}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group card-hover bg-cream rounded-2xl p-8 border border-border/40 relative overflow-hidden"
            >
              {/* Card number */}
              <div className="absolute top-4 right-5 font-serif text-[56px] text-green-mist/15 font-bold leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className={`relative z-10 w-14 h-14 rounded-2xl ${card.accent} ${card.hoverAccent} flex items-center justify-center mb-6 transition-colors duration-300`}>
                {card.icon}
              </div>
              <div className="relative z-10 text-[15px] font-semibold text-green-dark mb-3 leading-snug">
                {card.title}
              </div>
              <p className="relative z-10 text-[13px] text-text-muted leading-[1.8]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
