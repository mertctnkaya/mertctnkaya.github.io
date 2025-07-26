import { createContext, useContext, useState, useEffect } from "react";
import type { Language } from "./translates";

const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
}>({ language: "en", toggleLanguage: () => {} });

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language;
    if (saved) setLanguage(saved);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "tr" : "en";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook ile kolayca eriş
export const useLanguage = () => useContext(LanguageContext);
