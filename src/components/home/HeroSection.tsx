"use client";

import { useTranslations } from "next-intl";
import ImageSlideshow from "./ImageSlideshow";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-premium-dark">
      <div className="absolute inset-0">
        <ImageSlideshow />
      </div>

      {/* Subtle light glow from upper-right */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-premium-green/10 via-transparent to-transparent blur-[100px]" />
      </div>

      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 w-full pt-16 md:pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-px bg-premium-green/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-premium-green font-medium">
                SARL Agricole — Chtouka Ait Baha
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              {t("title")}
              <span className="inline text-premium-green-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-4 font-sans font-light">{t("subtitle")}</span>
            </h1>

            <p className="text-base sm:text-lg text-premium-heading/80 font-light leading-relaxed mb-12 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Spécialiste en solutions agricoles biologiques : auxiliaires, biostimulants et conseil personnalisé pour une agriculture durable au Maroc.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="/produits"
                className="btn-premium btn-premium-primary btn-shine text-sm"
              >
                {t("cta")}
                <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/catalogue-agristep-2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-shine btn-lift text-sm text-white border border-white/40 hover:bg-white/10 hover:text-white"
              >
                <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Notre catalogue
              </a>
              <a
                href="/a-propos"
                className="btn-premium btn-lift text-sm text-white/60 border border-white/15 hover:bg-white/10 hover:text-white"
              >
                Notre histoire
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-green/30 to-transparent" />
    </section>
  );
}
