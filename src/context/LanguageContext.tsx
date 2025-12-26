"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "@/lib/translations";

type Lang = "en" | "id";

interface LanguageContextType {
  lang: Lang;
  t: typeof translations.en;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  const toggleLang = () => setLang((prev) => (prev === "id" ? "en" : "id"));

  return (
    <LanguageContext.Provider
      value={{
        lang,
        t: translations[lang],
        toggleLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
