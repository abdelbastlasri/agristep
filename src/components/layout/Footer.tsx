"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { Icon } from "@/components/ui/IconSvg";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative bg-premium-charcoal text-premium-text overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url(/images/leaf-pattern.svg)`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px 400px",
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-green/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="md:hidden space-y-10">
          <div className="text-center space-y-4">
            <Image
              src="/images/logo_agristep.png"
              alt="Agristep"
              width={160}
              height={56}
              className="h-14 w-auto brightness-0 invert opacity-90 mx-auto"
            />
            <p className="text-sm leading-relaxed text-premium-muted max-w-sm mx-auto">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold mb-5">
                {t("navigation")}
              </h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-sm text-premium-muted hover:text-white transition-colors">{t("home")}</Link></li>
                <li><Link href="/produits" className="text-sm text-premium-muted hover:text-white transition-colors">{t("products")}</Link></li>
                <li><Link href="/a-propos" className="text-sm text-premium-muted hover:text-white transition-colors">{t("about")}</Link></li>
                <li><Link href="/contact" className="text-sm text-premium-muted hover:text-white transition-colors">{t("contact")}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold mb-5">
                {t("contact")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="text-premium-green flex-shrink-0 mt-0.5" />
                  <span className="text-premium-muted text-xs leading-relaxed">{t("address")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-premium-green flex-shrink-0" />
                  <a href="tel:+212666568879" className="text-premium-muted text-xs hover:text-white transition-colors">{t("phone")}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-premium-green flex-shrink-0" />
                  <a href="mailto:contact@agristep.ma" className="text-premium-muted text-xs hover:text-white transition-colors">{t("email")}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="linkedin" size={14} className="text-premium-green flex-shrink-0" />
                  <a href="https://www.linkedin.com/in/ste-agristep-69b1931b5/?locale=en" target="_blank" rel="noopener noreferrer" className="text-premium-muted text-xs hover:text-white transition-colors">{t("linkedin")}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Image src="/images/logo_agristep.png" alt="Agristep" width={160} height={56} className="h-14 w-auto brightness-0 invert opacity-90" />
            <p className="text-sm leading-relaxed text-premium-muted max-w-sm">{t("description")}</p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold mb-6">{t("navigation")}</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="underline-link text-sm text-premium-muted hover:text-white transition-colors">{t("home")}</Link></li>
              <li><Link href="/produits" className="underline-link text-sm text-premium-muted hover:text-white transition-colors">{t("products")}</Link></li>
              <li><Link href="/a-propos" className="underline-link text-sm text-premium-muted hover:text-white transition-colors">{t("about")}</Link></li>
              <li><Link href="/contact" className="underline-link text-sm text-premium-muted hover:text-white transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold mb-6">{t("contact")}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-premium-green flex-shrink-0 mt-0.5" />
                <span className="text-premium-muted leading-relaxed">{t("address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-premium-green flex-shrink-0" />
                <a href="tel:+212666568879" className="text-premium-muted hover:text-white transition-colors">{t("phone")}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-premium-green flex-shrink-0" />
                <a href="mailto:contact@agristep.ma" className="text-premium-muted hover:text-white transition-colors">{t("email")}</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Icon name="linkedin" size={16} className="text-premium-green flex-shrink-0" />
                <a href="https://www.linkedin.com/in/ste-agristep-69b1931b5/?locale=en" target="_blank" rel="noopener noreferrer" className="text-premium-muted hover:text-white transition-colors">{t("linkedin")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold mb-6">{t("followUs")}</h3>
              <div className="flex gap-3">
              <a href="https://www.facebook.com/agristep" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-premium-green/10 flex items-center justify-center hover:bg-premium-green/20 transition-all duration-300 hover:scale-110">
                <Icon name="facebook" size={18} className="text-premium-green" />
              </a>
              <a href="https://www.instagram.com/agristep" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-premium-green/10 flex items-center justify-center hover:bg-premium-green/20 transition-all duration-300 hover:scale-110">
                <Icon name="instagram" size={18} className="text-premium-green" />
              </a>
              <a href="https://www.linkedin.com/in/ste-agristep-69b1931b5/?locale=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-premium-green/10 flex items-center justify-center hover:bg-premium-green/20 transition-all duration-300 hover:scale-110">
                <Icon name="linkedin" size={18} className="text-premium-green" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-premium-border text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-premium-green/40 to-transparent mx-auto mb-6" />
          <p className="text-xs text-premium-muted/60">
            &copy; {new Date().getFullYear()} Agristep. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
