"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Lang } from "./translations";

type TranslationType = typeof translations.en | typeof translations.ar;

interface LangContextType {
  lang: Lang;
  t: TranslationType;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
  isRTL: boolean;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  const isRTL = lang === "ar";

  // Update html dir and lang attributes
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const value: LangContextType = {
    lang,
    t: translations[lang],
    toggleLang,
    setLang,
    isRTL,
  };

  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
