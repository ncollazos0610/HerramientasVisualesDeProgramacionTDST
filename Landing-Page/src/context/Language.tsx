import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface LanguageState {
  language: "es" | "en";
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageState | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguageContext debe usarse dentro de LanguageProvider");
  return context;
};
