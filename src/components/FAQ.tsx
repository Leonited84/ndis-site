"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";

const faqData = {
  en: [
    {
      q: "What is NDIS Support Coordination?",
      a: "Support coordination is a funded service in your NDIS plan that helps you understand and use your plan effectively. A support coordinator connects you with providers, helps you navigate the system, and ensures you're getting the most from your funded supports.",
    },
    {
      q: "Is there any cost to me?",
      a: "No. Support coordination is a funded line item in your NDIS plan. You pay nothing out of pocket. The cost is covered by your NDIS funding.",
    },
    {
      q: "Do you speak Arabic?",
      a: "Yes. I am a native Arabic speaker (Lebanese dialect) and can provide all services in Arabic, English, or French. No interpreter needed.",
    },
    {
      q: "What areas do you cover?",
      a: "I primarily serve Melbourne's northwest: Moonee Ponds, Essendon, Sunshine, Footscray, Broadmeadows, and surrounding areas. I can also work with clients remotely across Victoria.",
    },
    {
      q: "How do I get started?",
      a: "Book a free 30-minute plan review by calling 0466 202 000 or using the contact form on this site. I'll review your plan, identify any gaps or unused funding, and explain how I can help. No commitment required.",
    },
    {
      q: "What's the difference between a support coordinator and a plan manager?",
      a: "A support coordinator helps you find and connect with providers, understand your plan, and achieve your goals. A plan manager handles the financial side — paying invoices and tracking your budget. I offer both services.",
    },
  ],
  ar: [
    {
      q: "ما هو تنسيق دعم NDIS؟",
      a: "تنسيق الدعم هو خدمة ممولة في خطة NDIS الخاصة بك تساعدك على فهم خطتك واستخدامها بفعالية. يقوم منسق الدعم بربطك بمقدمي الخدمة، ومساعدتك في التنقل في النظام، والتأكد من حصولك على أقصى استفادة من الدعم الممول.",
    },
    {
      q: "هل هناك أي تكلفة علي؟",
      a: "لا. تنسيق الدعم هو بند ممول في خطة NDIS الخاصة بك. لا تدفع شيئاً من جيبك. التكلفة مغطاة بتمويل NDIS الخاص بك.",
    },
    {
      q: "هل تتحدث العربية؟",
      a: "نعم. أنا متحدث أصلي للغة العربية (اللهجة اللبنانية) ويمكنني تقديم جميع الخدمات بالعربية أو الإنجليزية أو الفرنسية. لا حاجة لمترجم.",
    },
    {
      q: "ما المناطق التي تغطيها؟",
      a: "أخدم بشكل أساسي شمال غرب ملبورن: مونيز بوندز، إيسندون، صنشاين، فوتسكراي، بروميدوز، والمناطق المحيطة. يمكنني أيضاً العمل مع عملاء عن بعد في جميع أنحاء فيكتوريا.",
    },
    {
      q: "كيف أبدأ؟",
      a: "احجز مراجعة خطة مجانية لمدة 30 دقيقة بالاتصال على 0466 202 000 أو استخدام نموذج الاتصال على هذا الموقع. سأراجع خطتك، أحدد أي ثغرات أو تمويل غير مستخدم، وأشرح كيف يمكنني المساعدة.",
    },
    {
      q: "ما الفرق بين منسق الدعم ومدير الخطة؟",
      a: "منسق الدعم يساعدك في العثور على مقدمي الخدمة والتواصل معهم، وفهم خطتك، وتحقيق أهدافك. مدير الخطة يتعامل مع الجانب المالي — دفع الفواتير وتتبع ميزانيتك. أقدم كلتا الخدمتين.",
    },
  ],
};

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-border/40 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-green-pale/30 transition-colors"
      >
        <span className="text-[14px] font-medium text-green-dark leading-snug">{question}</span>
        <svg
          className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-[13px] text-text-muted leading-[1.8]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = faqData[lang];

  return (
    <section id="faq" className="bg-cream px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block text-[10px] tracking-[2.5px] uppercase text-amber font-semibold mb-3 bg-amber/8 rounded-full px-4 py-1.5">
            FAQ
          </div>
          <h2 className="font-serif text-2xl md:text-[36px] font-medium text-green-dark leading-[1.2]">
            {lang === "en" ? "Common questions" : "أسئلة شائعة"}
          </h2>
        </div>

        <div className="space-y-3 stagger-children">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
