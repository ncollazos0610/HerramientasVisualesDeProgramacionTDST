import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/Language";
import { useCounter } from "../hooks/useCounter";

const Settings = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { language, toggleLanguage } = useLanguageContext();
  const { count, increase, reset } = useCounter();

  const texts = {
    es: {
      title: "Configuraciones",
      theme: `Tema actual: ${theme}`,
      language: `Idioma actual: Español`,
      like: "Me gusta",
      reset: "Reiniciar",
    },
    en: {
      title: "Settings",
      theme: `Current theme: ${theme}`,
      language: `Current language: English`,
      like: "Like :3",
      reset: "Reset",
    },
  };

  const t = texts[language];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        borderTop: "2px solid gray",
        marginTop: "50px",
      }}
    >
      <h2>{t.title}</h2>
      <p>{t.theme}</p>
      <p>{t.language}</p>

      <button onClick={toggleTheme} style={{ margin: "10px" }}>
        {theme === "claro" ? " Oscuro" : " Claro"}
      </button>
      <button onClick={toggleLanguage} style={{ margin: "10px" }}>
        {language === "es" ? "Switch to English" : "Cambiar a Español"}
      </button>

      <hr style={{ margin: "20px 0" }} />

      <h3>❤️ {count}</h3>
      <button onClick={increase} style={{ margin: "5px" }}>{t.like}</button>
      <button onClick={reset} style={{ margin: "5px" }}>{t.reset}</button>
    </div>
  );
};

export default Settings;
