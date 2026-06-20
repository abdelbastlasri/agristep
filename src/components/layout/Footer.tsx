import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gradient-to-br from-premium-dark via-[#1a2e22] to-premium-green/20 text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <img
              src="/images/logo_agristep.png"
              alt="Agristep"
              className="h-10 sm:h-12 lg:h-14 w-auto brightness-0 invert opacity-90"
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
                <Link
                  href="/produits"
                  className="underline-link text-sm hover:text-white transition-colors"
                >
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="underline-link text-sm hover:text-white transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="underline-link text-sm hover:text-white transition-colors"
                >
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
                <a
                  href="tel:+212528815207"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  +212 5 28 81 52 07
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-premium-gold flex-shrink-0">✉️</span>
                <a
                  href="mailto:ste.agristep@gmail.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  ste.agristep@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="text-premium-gold flex-shrink-0 social-icon">💼</span>
                <a
                  href="https://www.linkedin.com/in/ste-agristep-69b1931b5/?locale=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors social-icon"
                >
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
