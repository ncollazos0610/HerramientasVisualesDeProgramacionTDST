import { useLanguageContext } from "../context/Language";
import LikeButton from "./LikeButton";

export default function Landing() {
  const { language, toggleLanguage } = useLanguageContext();

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
      changeLang: "Cambiar a inglés 🇬🇧",
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
    },
  };

  const t = text[language];

  // 🎨 Estilo de botón equivalente a tu CSS
  const buttonStyle =
    "px-5 py-2 m-1 rounded-lg font-semibold text-white bg-indigo-600 transition-all duration-300 ease-in-out hover:opacity-85 hover:scale-105 border-none";

  return (
    <main className="flex flex-col items-center justify-center text-center font-[Nunito]">
      {/* ===== BANNER PRINCIPAL ===== */}
      <section
        className="relative flex flex-col items-center justify-center w-full h-[90vh] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/Products.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl px-8 text-center">
          <button onClick={toggleLanguage} className={buttonStyle}>
            {t.changeLang}
          </button>

          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">{t.title}</h1>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            {t.description}
          </p>

          <a href="#catalogo" className={buttonStyle}>
            {t.catalog}
          </a>

          <div className="mt-8">
            <p className="mb-2 text-gray-300">{t.likeMessage}</p>
            <LikeButton />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white text-center py-16 px-6 rounded-xl mt-16 max-w-3xl shadow-lg mx-4">
        <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
        <p className="text-lg mb-6">{t.ctaText}</p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className={buttonStyle}>{t.register}</button>
          <button className={buttonStyle}>{t.haveAccount}</button>
        </div>
      </section>
    </main>
  );
}
