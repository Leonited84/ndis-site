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
    <section id="how" className="bg-cream px-6 md:px-12 py-16 md:py-20">
      <div className="text-[10px] tracking-[2.5px] uppercase text-amber font-medium mb-2">
        {t.how.label}
      </div>
      <h2 className="font-serif text-2xl md:text-[32px] font-medium text-green-dark mb-3 leading-[1.2]">
        {t.how.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-12 relative">
        {/* Connecting line on desktop */}
        <div className="hidden md:block absolute top-[30px] left-[17%] right-[17%] h-px bg-green-mist z-0" />
        {steps.map((step) => (
          <div key={step.num} className="text-center relative z-10 px-4">
            <div className="w-[60px] h-[60px] rounded-full bg-green-dark text-white font-serif text-[22px] font-medium flex items-center justify-center mx-auto mb-5">
              {step.num}
            </div>
            <div className="text-[15px] font-medium text-green-dark mb-2">
              {step.title}
            </div>
            <p className="text-[13px] text-text-light leading-[1.7]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
