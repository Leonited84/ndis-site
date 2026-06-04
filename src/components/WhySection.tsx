"use client";

import { useLang } from "@/lib/LangContext";

function IconUser() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

export default function WhySection() {
  const { t } = useLang();

  const cards = [
    {
      icon: <IconUser />,
      title: t.why.card1Title,
      desc: t.why.card1Desc,
    },
    {
      icon: <IconShield />,
      title: t.why.card2Title,
      desc: t.why.card2Desc,
    },
    {
      icon: <IconHeart />,
      title: t.why.card3Title,
      desc: t.why.card3Desc,
    },
  ];

  return (
    <section id="why" className="bg-white px-6 md:px-12 lg:px-16 py-16 md:py-24 relative">
      <div className="pattern-bg absolute inset-0 pointer-events-none" />
      <div className="relative z-10">
        <div className="max-w-2xl">
          <div className="text-[10px] tracking-[2.5px] uppercase text-amber font-medium mb-3">
            {t.why.label}
          </div>
          <h2 className="font-serif text-2xl md:text-[34px] font-medium text-green-dark mb-3 leading-[1.2]">
            {t.why.title}{" "}
            <em className="not-italic text-amber">{t.why.titleEm}</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 stagger-children">
          {cards.map((card, i) => (
            <div
              key={i}
              className="card-hover group bg-cream rounded-2xl p-8 border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-pale flex items-center justify-center mb-5 text-green-dark group-hover:bg-green-dark group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
              <div className="text-[15px] font-medium text-green-dark mb-3 leading-snug">
                {card.title}
              </div>
              <p className="text-[13px] text-text-muted leading-[1.75]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
