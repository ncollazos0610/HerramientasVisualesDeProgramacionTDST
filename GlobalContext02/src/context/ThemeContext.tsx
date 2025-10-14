import { createContext, useContext, useState  } from "react";
import type { ReactNode } from 'react';

interface ThemeState {
  theme: "claro" | "oscuro";
  themeImage: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeState | undefined>(undefined);
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"claro" | "oscuro">("claro");
  const [themeImage, setThemeImage] = useState<string>("/sun.png"); 

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "claro" ? "oscuro" : "claro";
      setThemeImage(newTheme === "oscuro" ? "/moon.png" : "/sun.png");
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, themeImage, toggleTheme }}>
      <div
        className={theme === "oscuro" ? "bg-gray-900 text-white" : "bg-white text-black"}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext debe usarse dentro de ThemeProvider");
  return context;
};
