import { useThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
    const { theme, toggleTheme, themeImage } = useThemeContext();

    return (
        <div style={{ textAlign: "center", paddingTop: "60px" }}>
            <h1>El tema actual es: {theme}</h1>

            <button
                onClick={toggleTheme}
                style={{
                    backgroundColor: theme === "oscuro" ? "#333" : "#ddd",
                    color: theme === "oscuro" ? "white" : "black",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "dashed",
                    cursor: "pointer",
                    marginTop: "10px",
                }}
            >
                Cambiar a {theme === "claro" ? "oscuro" : "claro"}
            </button>

            <div style={{ marginTop: "20px" }}>
                <img
                    src={themeImage}
                    alt={theme === "oscuro" ? "Tema oscuro" : "Tema claro"}
                    width={150}
                    height={150}
                    style={{
                        marginTop: "25px",
                        marginLeft: "46%",
                        display: "block",
                        transition: "all 0.9s ease-in-out",
                    }}
                />  
            </div>
        </div>
    );
};

export default ThemeSwitcher;
