"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
          language: data.get("language"),
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-border/60 rounded-xl px-5 py-3.5 text-sm bg-white focus:ring-2 focus:ring-green-dark/15 focus:border-green-dark/30 outline-none transition-all placeholder:text-text-faint/50";

  return (
    <section className="bg-cream px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block text-[10px] tracking-[2.5px] uppercase text-amber font-semibold mb-3 bg-amber/8 rounded-full px-4 py-1.5">
            {t.contact.label}
          </div>
          <h2 className="font-serif text-2xl md:text-[36px] font-medium text-green-dark leading-[1.2]">
            {t.contact.title}
          </h2>
        </div>

        {status === "success" ? (
          <div className="bg-green-pale border border-green-light/50 rounded-2xl p-10 text-center animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-green-dark text-white flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-[15px] text-green-dark font-medium mb-2">{t.contact.success}</p>
            <p className="text-[13px] text-text-muted">I'll respond within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">{t.contact.nameLabel}</label>
              <input type="text" name="name" required placeholder={t.contact.namePlaceholder} className={inputClass} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">{t.contact.phoneLabel}</label>
                <input type="tel" name="phone" placeholder={t.contact.phonePlaceholder} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">{t.contact.emailLabel}</label>
                <input type="email" name="email" required placeholder={t.contact.emailPlaceholder} className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">{t.contact.messageLabel}</label>
              <textarea name="message" required rows={4} placeholder={t.contact.messagePlaceholder} className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">{t.contact.langLabel}</label>
              <select name="language" defaultValue="en" className={inputClass}>
                <option value="en">{t.contact.langEn}</option>
                <option value="ar">{t.contact.langAr}</option>
              </select>
            </div>
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-3 text-sm text-red-700">
                {t.contact.error}
              </div>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-press w-full bg-green-dark text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-green-mid transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t.contact.sending}
                </>
              ) : (
                t.contact.submit
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
