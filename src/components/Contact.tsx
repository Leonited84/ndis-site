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

  return (
    <section className="bg-cream px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-xl mx-auto">
        <div className="text-[10px] tracking-[2.5px] uppercase text-amber font-medium mb-2">
          {t.contact.label}
        </div>
        <h2 className="font-serif text-2xl md:text-[32px] font-medium text-green-dark mb-8 leading-[1.2]">
          {t.contact.title}
        </h2>

        {status === "success" ? (
          <div className="bg-green-pale border border-green-light rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">✓</div>
            <p className="text-sm text-green-dark font-medium">{t.contact.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1">{t.contact.nameLabel}</label>
              <input
                type="text"
                name="name"
                required
                placeholder={t.contact.namePlaceholder}
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">{t.contact.phoneLabel}</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.contact.phonePlaceholder}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">{t.contact.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1">{t.contact.messageLabel}</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder={t.contact.messagePlaceholder}
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1">{t.contact.langLabel}</label>
              <select
                name="language"
                defaultValue="en"
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-green-dark focus:border-transparent outline-none"
              >
                <option value="en">{t.contact.langEn}</option>
                <option value="ar">{t.contact.langAr}</option>
              </select>
            </div>
            {status === "error" && (
              <p className="text-sm text-red-600">{t.contact.error}</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-green-dark text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-green-mid transition-colors disabled:opacity-50"
            >
              {status === "sending" ? t.contact.sending : t.contact.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
