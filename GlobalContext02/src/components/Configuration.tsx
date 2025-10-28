import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";

const Settings = () => {
    const { theme, toggleTheme } = useThemeContext();
    const { language, toggleLanguage } = useLanguageContext();

    return (
        <div style={{ marginTop: "40px" }}>
            <h2>Configuraciones actuales</h2>
            <p>
                Tema actual: <strong>{theme}</strong>
            </p>
            <p>
                Idioma actual: <strong>{language === "es" ? "Español" : "English"}</strong>
            </p>

            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={toggleTheme}
                    style={{
                        backgroundColor: theme === "oscuro" ? "#333" : "#ddd",
                        color: theme === "oscuro" ? "white" : "black",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        border: "dashed",
                        cursor: "pointer",
                        marginRight: "10px",
                    }}
                >
                    Cambiar tema
                </button>

                <button
                    onClick={toggleLanguage}
                    style={{
                        backgroundColor: language === "es" ? "#007bff" : "#28a745",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        border: "dashed",
                        cursor: "pointer",
                    }}
                >
                    Cambiar idioma
                </button>
            </div>
        </div>
    );
};

export default Settings;
