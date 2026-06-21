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

      {/* Golden hour glow — warm sun from upper-right */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-premium-warm/20 via-premium-warm/10 to-transparent blur-[100px]" />
      </div>

      {/* Cinematic dust particles — golden specks floating up */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 rounded-full bg-premium-warm/20 blur-[1px]" style={{ left: '15%', top: '70%', animation: 'dust 8s ease-in-out infinite', animationDelay: '0s' }} />
        <div className="absolute w-3 h-3 rounded-full bg-premium-warm/20 blur-[1.5px]" style={{ left: '40%', top: '80%', animation: 'dust 10s ease-in-out infinite', animationDelay: '1.2s' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-premium-accent/15 blur-[1px]" style={{ left: '70%', top: '60%', animation: 'dust 7s ease-in-out infinite', animationDelay: '2.5s' }} />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-premium-warm/15 blur-[1px]" style={{ left: '25%', top: '90%', animation: 'dust 9s ease-in-out infinite', animationDelay: '0.8s' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-premium-accent/20 blur-[0.5px]" style={{ left: '55%', top: '75%', animation: 'dust 11s ease-in-out infinite', animationDelay: '3.5s' }} />
        <div className="absolute w-3 h-3 rounded-full bg-premium-warm/15 blur-[1.5px]" style={{ left: '85%', top: '85%', animation: 'dust 8.5s ease-in-out infinite', animationDelay: '1.8s' }} />
        <div className="absolute w-2 h-2 rounded-full bg-premium-accent/15 blur-[1px]" style={{ left: '10%', top: '85%', animation: 'dust 7.5s ease-in-out infinite', animationDelay: '4s' }} />
        <div className="absolute w-1 h-1 rounded-full bg-premium-warm/25 blur-[0.5px]" style={{ left: '50%', top: '65%', animation: 'dust 9.5s ease-in-out infinite', animationDelay: '0.3s' }} />
      </div>

      {/* Earth Brown gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-premium-warm/60 via-premium-dark/30 to-transparent" />

      <div className="relative z-10 w-full pt-16 md:pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-px bg-premium-accent/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-premium-accent font-medium">
                SARL Agricole — Chtouka Ait Baha
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8">
              {t("title")}
              <span className="inline text-premium-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-4 font-sans font-light">{t("subtitle")}</span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-12 max-w-xl">
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
                className="btn-premium btn-shine btn-lift text-sm text-white/70 border border-white/20 hover:bg-white/10 hover:text-white"
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

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-warm/30 to-transparent" />
    </section>
  );
}
