import { useLanguageContext } from "../context/Language";
import { useThemeContext } from "../context/ThemeContext";
import LikeButton from "./LikeButton";

export default function Landing() {
  const { language, toggleLanguage } = useLanguageContext();
  const { theme, themeImage, toggleTheme } = useThemeContext();

  const text = {
    es: {
      title: "Bienestar natural a tu alcance",
      description:
        "Descubre el poder de la medicina natural con productos 100% Naturales de alta calidad. El mejor socio en un plan de vida saludable.",
      catalog: "Ver Catálogo",
      ctaTitle: "Crea un usuario en Samada",
      ctaText:
        "Crea tu cuenta para almacenar tu información y acceder a compras online y ofertas exclusivas.",
      register: "Registrarse",
      haveAccount: "Ya tengo cuenta",
      likeMessage: "¡Apoya nuestros productos naturales!",
      changeLang: "Cambiar a inglés",
      benefitsTitle: "Beneficios",
      footerContact: "Información de Contacto",
      footerHours: "Horarios de Atención",
      footerAbout: "Natural's SAMADA",
    },
    en: {
      title: "Natural wellness within reach",
      description:
        "Discover the power of natural medicine with 100% Natural, high-quality products. Your best partner for a healthy lifestyle.",
      catalog: "View Catalog",
      ctaTitle: "Create a Samada account",
      ctaText:
        "Create your account to store your information and gain access to online purchases and exclusive offers.",
      register: "Sign up",
      haveAccount: "I already have an account",
      likeMessage: "Support our natural products!",
      changeLang: "Switch to Spanish 🇪🇸",
      benefitsTitle: "Benefits",
      footerContact: "Contact Information",
      footerHours: "Service Hours",
      footerAbout: "Natural's SAMADA",
    },
  };

  const t = text[language];

  const buttonPrimary =
    "px-6 py-2 bg-white text-black font-semibold rounded-full border-2 border-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-800 hover:text-white transition duration-300";
  const buttonSecondary =
    "px-6 py-2 bg-white text-black font-semibold rounded-full border-2 border-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-800 hover:text-white transition duration-300";

  return (
    <main className="font transition-all duration-500">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          theme === "oscuro"
            ? "bg-transparent-900/90 backdrop-blur-md border-b border-gray-700"
            : "bg-white/50 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-8">
          {/* Logo Natural's Samada */}
          <div className="flex items-center gap-2">
            <img src="/logotipo.png" alt="Logo Samada" className="h-10 w-10" />
            <span
              className={`font-semibold text-lg ${
                theme === "oscuro" ? "text-green-200" : "text-green-200"
              }`}
            >
              Natural's Samada
            </span>
          </div>

          {/* Menu */}
          <nav
            className={`flex items-center gap-6 text-[15px] ${
              theme === "oscuro" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <a href="/" className="hover:text-green-500 font-medium">
              Inicio
            </a>
            <a href="/productos" className="hover:text-green-500 font-medium">
              Productos
            </a>
            <a href="/clientes" className="hover:text-green-500 font-medium">
              Clientes
            </a>
            <a href="/proveedores" className="hover:text-green-500 font-medium">
              Proveedores
            </a>
            <a href="/ventas" className="hover:text-green-500 font-medium">
              Ventas
            </a>
          </nav>

          {/* Botones */}
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300
      ${
        theme === "oscuro"
          ? "border-white text-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-800  hover:-translate-y-[3px]"
          : "border-black text-black hover:bg-gradient-to-br hover:from-green-500 hover:to-green-700 hover:text-white hover:-translate-y-[3px]"
      }`}
            >
              Iniciar Sesión
            </a>

            <a
              href="/registro"
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300
              ${
                theme === "oscuro"
                  ? "border-white text-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-800  hover:-translate-y-[3px]"
                  : "border-black text-black hover:bg-gradient-to-br hover:from-green-500 hover:to-green-700 hover:text-white hover:-translate-y-[3px]"
              }`}
            >
              Registrarse
            </a>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full hover:scale-110 transition"
              title={theme === "oscuro" ? "Modo claro" : "Modo oscuro"}
            >
              <img src="/tema.png" alt="Tema" className="w-10 h-10" />
            </button>

            <img src="/car.png" alt="Carrito" className="h-10 w-10" />
          </div>
        </div>
      </header>

      {/* ===== BANNER PRINCIPAL ===== */}
      <section
        className="relative flex flex-col items-start justify-center h-[100vh] bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/Products.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-3xl px-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 leading-snug">
            {t.title}
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button onClick={toggleLanguage} className={buttonSecondary}>
              {t.changeLang}
            </button>
            <a href="#catalogo" className={buttonPrimary}>
              {t.catalog}
            </a>
          </div>

          <LikeButton />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className={`text-center py-16 px-6 mt-20 rounded-2xl shadow-lg max-w-4xl mx-auto transition-all duration-500 ${
          theme === "oscuro"
            ? "bg-gradient-to-r from-gray-900 to-gray-400 text-white"
            : "bg-gradient-to-r from-green-700 to-green-800 text-white"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-3">{t.ctaTitle}</h2>
        <p className="text-lg mb-6 opacity-90">{t.ctaText}</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className={buttonPrimary}>{t.register}</button>
          <button className={buttonSecondary}>{t.haveAccount}</button>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section
        id="beneficios"
        className={`py-20 px-10 text-center transition-all duration-500 ${
          theme === "oscuro"
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-50 text-gray-800"
        }`}
      >
        <h2 className="text-3xl font-bold mb-12">{t.benefitsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-3">🌿</div>
            <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
            <p>Productos naturales y orgánicos, libres de químicos dañinos.</p>
          </div>

          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-3">🔬</div>
            <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
            <p>
              Certificados y probados en laboratorio para asegurar eficacia.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-3">👨‍⚕️</div>
            <h3 className="text-xl font-semibold mb-2">Atención Médica</h3>
            <p>
              Especialistas que te guiarán hacia el mejor tratamiento natural.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        id="contacto"
        className={`mt-0 py-10 px-6 transition-all duration-500 ${
          theme === "oscuro"
            ? "bg-gray-800 text-gray-200"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold text-lg mb-2">{t.footerContact}</h3>
            <p>📞 +57 3166412518</p>
            <p>📧 samadagmail.com</p>
            <p>📍 Popayán, Cauca</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">{t.footerHours}</h3>
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p>Sábados: 9:00 AM - 6:00 PM</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">{t.footerAbout}</h3>
            <p>El mejor socio para un plan de vida saludable</p>
            <p className="text-sm opacity-70 mt-2">
              Licencia sanitaria: COFEPRIS-123456
            </p>
          </div>
        </div>

        <div className="mt-10 text-center text-sm opacity-70 border-t pt-4">
          © 2025 Natural's Samada Farmacia Naturista. Todos los derechos
          reservados.
        </div>
      </footer>
    </main>
  );
}
