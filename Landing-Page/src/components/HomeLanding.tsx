import { useLanguageContext } from "../context/Language";
import { useThemeContext } from "../context/ThemeContext";
import LikeButton from "./LikeButton";

export default function Landing() {
  const { language, toggleLanguage } = useLanguageContext();
  const { theme, toggleTheme } = useThemeContext();

  const text = {
    es: {
      // --- Banner ---
      title: "Bienestar natural a tu alcance",
      description:
        "Descubre el poder de la medicina natural con productos 100% Naturales de alta calidad. El mejor socio en un plan de vida saludable.",
      catalog: "Ver Catálogo",
      changeLang: "Cambiar a inglés 🇬🇧",

      // --- CTA ---
      ctaTitle: "Crea un usuario en Samada",
      ctaText:
        "Crea tu cuenta para almacenar tu información y acceder a compras online y ofertas exclusivas.",
      register: "Registrarse",
      haveAccount: "Ya tengo cuenta",

      // --- Like ---
      likeMessage: "¡Apoya nuestros productos naturales!",

      // --- Menu ---
      navHome: "Inicio",
      navProducts: "Productos",
      navClients: "Clientes",
      navSuppliers: "Proveedores",
      navSales: "Ventas",
      login: "Iniciar Sesión",
      signup: "Registrarse",

      // --- Beneficios ---
      benefitsTitle: "Beneficios",
      benefit1Title: "100% Natural",
      benefit1Desc:
        "Productos naturales y orgánicos, libres de químicos dañinos.",
      benefit2Title: "Calidad Garantizada",
      benefit2Desc:
        "Certificados y probados en laboratorio para asegurar eficacia.",
      benefit3Title: "Atención Médica",
      benefit3Desc:
        "Especialistas que te guiarán hacia el mejor tratamiento natural.",

      // --- Footer ---
      footerContact: "Información de Contacto",
      footerHours: "Horarios de Atención",
      footerAbout: "Natural's SAMADA",
      footerDesc: "El mejor socio para un plan de vida saludable",
      footerLicense: "Licencia sanitaria: COFEPRIS-123456",
      footerCopy:
        "© 2025 Natural's Samada Farmacia Naturista. Todos los derechos reservados.",
    },
    en: {
      // --- Banner ---
      title: "Natural wellness within reach",
      description:
        "Discover the power of natural medicine with 100% Natural, high-quality products. Your best partner for a healthy lifestyle.",
      catalog: "View Catalog",
      changeLang: "Cambiar a español 🇪🇸",

      // --- CTA ---
      ctaTitle: "Create a Samada account",
      ctaText:
        "Create your account to store your information and gain access to online purchases and exclusive offers.",
      register: "Sign up",
      haveAccount: "I already have an account",

      // --- Like ---
      likeMessage: "Support our natural products!",

      // --- Menu ---
      navHome: "Home",
      navProducts: "Products",
      navClients: "Clients",
      navSuppliers: "Suppliers",
      navSales: "Sales",
      login: "Login",
      signup: "Sign up",

      // --- Benefits ---
      benefitsTitle: "Benefits",
      benefit1Title: "100% Natural",
      benefit1Desc:
        "Natural and organic products, free from harmful chemicals.",
      benefit2Title: "Guaranteed Quality",
      benefit2Desc:
        "Certified and lab-tested to ensure effectiveness and safety.",
      benefit3Title: "Medical Guidance",
      benefit3Desc:
        "Specialists to guide you toward the best natural treatment.",

      // --- Footer ---
      footerContact: "Contact Information",
      footerHours: "Service Hours",
      footerAbout: "Natural's SAMADA",
      footerDesc: "Your best partner for a healthy lifestyle",
      footerLicense: "Health license: COFEPRIS-123456",
      footerCopy:
        "© 2025 Natural's Samada Natural Pharmacy. All rights reserved.",
    },
  };

  const t = text[language];

  const buttonPrimary =
    "px-6 py-2 bg-white text-black font-semibold rounded-full border-2 border-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-800 hover:text-white transition duration-300";
  const buttonSecondary =
    "px-6 py-2 bg-white text-black font-semibold rounded-full border-2 border-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-800 hover:text-white transition duration-300";

  return (
    <main className="font transition-all duration-500">
      {/* ---------- HEADER ---------- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          theme === "oscuro"
            ? "bg-transparent-700/90 backdrop-blur-md border-b border-gray-700"
            : "bg-green-700/50 backdrop-blur-md shadow-sm text-red"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-8">
          <div className="flex items-center gap-2">
            <img src="/logotipo.png" alt="Logo Samada" className="h-10 w-10" />
            <span
              className={`font-semibold text-lg ${
                theme === "oscuro" ? "text-green-200" : "text-green-100"
              }`}
            >
              Natural's Samada
            </span>
          </div>

          <nav
            className={`flex items-center gap-6 text-[15px] ${
              theme === "oscuro" ? "text-gray-200" : "text-gray-100"
            }`}
          >
            <a href="/">{t.navHome}</a>
            <a href="/productos">{t.navProducts}</a>
            <a href="/clientes">{t.navClients}</a>
            <a href="/proveedores">{t.navSuppliers}</a>
            <a href="/ventas">{t.navSales}</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="px-4 py-1 bg-white text-black font-semibold rounded-full border-2 border-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-800 hover:text-white transition duration-300"
            >
              {t.login}
            </a>
            <a
              href="/registro"
              className="px-4 py-1 bg-white text-black font-semibold rounded-full border-2 border-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-800 hover:text-white transition duration-300"
            >
              {t.signup}
            </a>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full hover:scale-110 transition"
            >
              <img src="/tema.png" alt="Tema" className="w-10 h-10" />
            </button>
            <button
              onClick={toggleLanguage}
              title={t.changeLang}
              className="w-12 h-12 text-3xl flex items-center justify-center hover:scale-110 transition"
            >
              🌐
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Banner ---------- */}
      <section
        className="relative flex flex-col items-start justify-center h-[100vh] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/Products.png')" }}
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
            <a href="#catalogo" className={buttonPrimary}>
              {t.catalog}
            </a>
          </div>
          <LikeButton
            label="🌿 Like"
            color="green"
            message={t.likeMessage}
            initialCount={10}
          />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className={`text-center py-16 px-6 mt-20 rounded-2xl shadow-lg max-w-4xl mx-auto ${
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

      {/* ---------- BENEFITS ---------- */}
      <section
        id="beneficios"
        className={`py-20 px-10 text-center ${
          theme === "oscuro"
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-50 text-gray-800"
        }`}
      >
        <h2 className="text-3xl font-bold mb-12">{t.benefitsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-3">🌿</div>
            <h3 className="text-xl font-semibold mb-2">{t.benefit1Title}</h3>
            <p>{t.benefit1Desc}</p>
          </div>
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-3">🔬</div>
            <h3 className="text-xl font-semibold mb-2">{t.benefit2Title}</h3>
            <p>{t.benefit2Desc}</p>
          </div>
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-3">👨‍⚕️</div>
            <h3 className="text-xl font-semibold mb-2">{t.benefit3Title}</h3>
            <p>{t.benefit3Desc}</p>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer
        id="contacto"
        className={`py-10 px-6 ${
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
            <p>
              {language === "es"
                ? "Lunes a Viernes: 9:00 AM - 6:00 PM"
                : "Mon–Fri: 9:00 AM - 6:00 PM"}
            </p>
            <p>
              {language === "es"
                ? "Sábados: 9:00 AM - 6:00 PM"
                : "Saturdays: 9:00 AM - 6:00 PM"}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">{t.footerAbout}</h3>
            <p>{t.footerDesc}</p>
            <p className="text-sm opacity-70 mt-2">{t.footerLicense}</p>
          </div>
        </div>
        <div className="mt-10 text-center text-sm opacity-70 border-t pt-4">
          {t.footerCopy}
        </div>
      </footer>
    </main>
  );
}
