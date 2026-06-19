"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [display, setDisplay] = useState("");
  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(num);

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(num / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(String(start) + suffix);
      }
    }, duration / 60);
    return () => clearInterval(timer);
  }, []);

  return <>{display}</>;
}

const stats = [
  { number: "2020", label: "Fondation" },
  { number: "16", label: "Produits" },
  { number: "5+", label: "Ans d'expérience" },
  { number: "Bio", label: "Solutions durables" },
];

export default function PresentationSection() {
  const t = useTranslations("home.presentation");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-premium-warm" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-24 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-premium-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold">
                À propos
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-8 leading-tight">
              {t("title")}
            </h2>
            <div className="w-16 h-0.5 bg-premium-gold mb-8" />
            <p className="text-premium-muted leading-relaxed text-lg mb-10">
              {t("text")}
            </p>
            <a
              href="/a-propos"
              className="btn-premium btn-premium-primary btn-shine btn-lift text-sm"
            >
              {t("link")}
              <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-premium p-4 sm:p-6 md:p-8 text-center"
              >
                <div className="font-heading text-3xl md:text-4xl text-gradient-green mb-2">
                  {isVisible ? <AnimatedNumber value={stat.number} /> : "0"}
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-premium-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
