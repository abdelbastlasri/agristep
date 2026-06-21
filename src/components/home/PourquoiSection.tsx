"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PourquoiSection() {
  const t = useTranslations("home.why");
  const { ref, isVisible } = useScrollReveal();

  const items = [
    {
      key: "expertise",
      icon: (
        <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      key: "quality",
      icon: (
        <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      key: "innovation",
      icon: (
        <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      key: "planet",
      icon: (
        <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-premium-sand">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-premium-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold">
              Pourquoi nous
            </span>
            <span className="w-8 h-px bg-premium-gold" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-premium-dark mt-2 mb-4">
            {t("title")}
          </h2>
          <div className="w-12 h-0.5 bg-premium-gold mx-auto" />
        </div>

        <div ref={ref} className={`grid sm:grid-cols-2 md:grid-cols-4 gap-6 stagger-children ${isVisible ? 'visible' : ''}`}>
          {items.map((item) => (
            <div
              key={item.key}
              className="card-premium p-5 sm:p-6 text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-premium-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-premium-gold/20 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg text-premium-dark mb-3">
                {t(`${item.key}.title`)}
              </h3>
              <p className="text-sm text-premium-muted leading-relaxed">
                {t(`${item.key}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
