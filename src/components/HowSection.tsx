"use client";

import { useLang } from "@/lib/LangContext";

export default function HowSection() {
  const { t } = useLang();

  const steps = [
    {
      num: "1",
      title: t.how.step1Title,
      desc: t.how.step1Desc,
    },
    {
      num: "2",
      title: t.how.step2Title,
      desc: t.how.step2Desc,
    },
    {
      num: "3",
      title: t.how.step3Title,
      desc: t.how.step3Desc,
    },
  ];

  return (
    <section id="how" className="bg-cream px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="text-[10px] tracking-[2.5px] uppercase text-amber font-medium mb-3">
          {t.how.label}
        </div>
        <h2 className="font-serif text-2xl md:text-[34px] font-medium text-green-dark leading-[1.2]">
          {t.how.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-4xl mx-auto relative">
        {/* Connecting line on desktop */}
        <div className="hidden md:block absolute top-[38px] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-green-mist via-green-mid/30 to-green-mist z-0" />
        {steps.map((step) => (
          <div key={step.num} className="text-center relative z-10 px-4">
            <div className="w-[76px] h-[76px] rounded-full bg-green-dark text-white font-serif text-[24px] font-medium flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-dark/15 ring-4 ring-green-mist/30">
              {step.num}
            </div>
            <div className="text-[15px] font-medium text-green-dark mb-2 leading-snug">
              {step.title}
            </div>
            <p className="text-[13px] text-text-light leading-[1.75]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
