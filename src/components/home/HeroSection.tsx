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

      <div className="absolute inset-0 bg-gradient-to-r from-premium-dark/80 via-premium-dark/60 to-premium-dark/30" />

      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating particles */}
      <div className="particles">
        <div className="particle leaf bg-premium-gold/30" style={{ top: '15%', left: '8%', '--dur': '5s', '--del': '0s' } as React.CSSProperties} />
        <div className="particle bg-premium-green/20" style={{ top: '25%', left: '85%', '--dur': '7s', '--del': '1s' } as React.CSSProperties} />
        <div className="particle leaf bg-premium-gold/20" style={{ top: '60%', left: '5%', '--dur': '6s', '--del': '2s' } as React.CSSProperties} />
        <div className="particle bg-white/10" style={{ top: '70%', left: '90%', '--dur': '8s', '--del': '0.5s' } as React.CSSProperties} />
        <div className="particle leaf bg-premium-gold/25" style={{ top: '40%', left: '92%', '--dur': '5.5s', '--del': '1.5s' } as React.CSSProperties} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-px bg-premium-gold/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-premium-gold font-medium">
                SARL Agricole — Chtouka Ait Baha
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8">
              {t("title")}
              <span className="inline text-gradient-gold text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-4 font-sans font-light">
                {t("subtitle")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/50 font-light leading-relaxed mb-12 max-w-xl">
              Spécialiste en solutions agricoles biologiques : auxiliaires, biostimulants et conseil personnalisé pour une agriculture durable au Maroc.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="/produits"
                className="btn-premium btn-premium-gold btn-shine text-sm"
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
                className="btn-premium btn-shine btn-lift text-sm text-white/70 border border-white/15 hover:bg-white/10 hover:text-white"
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
                className="btn-premium btn-lift text-sm text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
              >
                Notre histoire
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-gold/30 to-transparent" />
    </section>
  );
}
