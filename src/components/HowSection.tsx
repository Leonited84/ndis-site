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
    <section id="how" className="bg-cream px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-[10px] tracking-[2.5px] uppercase text-amber font-semibold mb-3 bg-amber/8 rounded-full px-4 py-1.5">
            {t.how.label}
          </div>
          <h2 className="font-serif text-2xl md:text-[36px] font-medium text-green-dark leading-[1.2]">
            {t.how.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-[44px] left-[18%] right-[18%] h-[2px] bg-gradient-to-r from-green-mist/50 via-green-mid/20 to-green-mist/50 z-0" />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative z-10 px-6">
              <div className="w-[88px] h-[88px] rounded-full bg-green-dark text-white font-serif text-[26px] font-medium flex items-center justify-center mx-auto mb-7 shadow-xl shadow-green-dark/15 ring-4 ring-green-mist/25">
                {step.num}
              </div>
              <div className="text-[15px] font-semibold text-green-dark mb-3 leading-snug">
                {step.title}
              </div>
              <p className="text-[13px] text-text-light leading-[1.8]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
