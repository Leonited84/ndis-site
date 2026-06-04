"use client";

import { useLang } from "@/lib/LangContext";

export default function WhySection() {
  const { t } = useLang();

  const cards = [
    {
      num: "01",
      title: t.why.card1Title,
      desc: t.why.card1Desc,
    },
    {
      num: "02",
      title: t.why.card2Title,
      desc: t.why.card2Desc,
    },
    {
      num: "03",
      title: t.why.card3Title,
      desc: t.why.card3Desc,
    },
  ];

  return (
    <section id="why" className="bg-white px-6 md:px-12 py-16 md:py-20">
      <div className="text-[10px] tracking-[2.5px] uppercase text-amber font-medium mb-2">
        {t.why.label}
      </div>
      <h2 className="font-serif text-2xl md:text-[32px] font-medium text-green-dark mb-3 leading-[1.2]">
        {t.why.title}<br />
        <em className="not-italic">{t.why.titleEm}</em>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {cards.map((card) => (
          <div
            key={card.num}
            className="border border-border rounded-xl p-7 bg-cream"
          >
            <div className="font-serif text-[36px] text-green-light font-medium mb-3">
              {card.num}
            </div>
            <div className="text-[15px] font-medium text-green-dark mb-2">
              {card.title}
            </div>
            <p className="text-[13px] text-text-muted leading-[1.7]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
