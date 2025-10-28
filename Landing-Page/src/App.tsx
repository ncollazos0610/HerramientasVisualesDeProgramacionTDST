import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/Language";
import Landing from "./components/HomeLanding";
import Settings from "./components/Settings";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Landing />
          <Settings />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
