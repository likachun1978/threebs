import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "zh-TW" | "zh-CN";

const htmlLangMap: Record<Language, string> = {
  en: "en",
  "zh-TW": "zh-Hant",
  "zh-CN": "zh-Hans",
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = htmlLangMap[language];
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export const langLabel: Record<Language, string> = {
  en: "EN",
  "zh-TW": "繁中",
  "zh-CN": "简中",
};
