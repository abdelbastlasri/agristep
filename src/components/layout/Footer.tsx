import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative bg-gradient-to-br from-premium-green-soft via-premium-green to-premium-green-dark text-white/80 overflow-hidden">
      {/* Leaf pattern overlay */}
      <div className="absolute inset-0 opacity-[0.10]" style={{
        backgroundImage: `url(/images/leaf-pattern.svg)`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px 400px",
      }} />
      {/* Wheat pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url(/images/wheat-pattern.svg)`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px 400px",
      }} />
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-gold/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="md:hidden space-y-10">
          <div className="text-center space-y-4">
            <img
              src="/images/logo_agristep.png"
              alt="Agristep"
              className="h-14 w-auto brightness-0 invert opacity-90 mx-auto"
            />
            <p className="text-sm leading-relaxed text-white/60 max-w-sm mx-auto">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold mb-5">
                {t("navigation")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm hover:text-white transition-colors">
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link href="/produits" className="text-sm hover:text-white transition-colors">
                    {t("products")}
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos" className="text-sm hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-white transition-colors">
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold mb-5">
                {t("contact")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-premium-gold flex-shrink-0">📍</span>
                  <span className="text-white/60 text-xs leading-relaxed">
                    Route National N°1, Draid Sidi Bibi, Chtouka Ait Baha
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-premium-gold flex-shrink-0">📞</span>
                  <a href="tel:+212528815207" className="text-white/60 text-xs hover:text-white transition-colors">
                    +212 5 28 81 52 07
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-premium-gold flex-shrink-0">✉️</span>
                  <a href="mailto:ste.agristep@gmail.com" className="text-white/60 text-xs hover:text-white transition-colors">
                    ste.agristep@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-premium-gold flex-shrink-0 social-icon">💼</span>
                  <a href="https://www.linkedin.com/in/ste-agristep-69b1931b5/?locale=en" target="_blank" rel="noopener noreferrer" className="text-white/60 text-xs hover:text-white transition-colors social-icon">
                    {t("linkedin")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <img
              src="/images/logo_agristep.png"
              alt="Agristep"
              className="h-14 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold mb-6">
              {t("navigation")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="underline-link text-sm hover:text-white transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/produits" className="underline-link text-sm hover:text-white transition-colors">
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="underline-link text-sm hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="underline-link text-sm hover:text-white transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold mb-6">
              {t("contact")}
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-premium-gold flex-shrink-0 mt-0.5">📍</span>
                <span className="text-white/60 leading-relaxed">
                  Route National N°1, Draid Sidi Bibi, Chtouka Ait Baha
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-premium-gold flex-shrink-0">📞</span>
                <a href="tel:+212528815207" className="text-white/60 hover:text-white transition-colors">
                  +212 5 28 81 52 07
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-premium-gold flex-shrink-0">✉️</span>
                <a href="mailto:ste.agristep@gmail.com" className="text-white/60 hover:text-white transition-colors">
                  ste.agristep@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="text-premium-gold flex-shrink-0 social-icon">💼</span>
                <a href="https://www.linkedin.com/in/ste-agristep-69b1931b5/?locale=en" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors social-icon">
                  {t("linkedin")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-premium-gold/50 to-transparent mx-auto mb-6" />
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Agristep. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
