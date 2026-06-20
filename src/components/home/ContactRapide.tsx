"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactRapide() {
  const t = useTranslations("home.contact");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-premium-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-premium-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold">
              Notre Emplacement
            </span>
            <span className="w-8 h-px bg-premium-gold" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            Notre Emplacement sur la Carte
          </h2>
          <div className="w-12 h-0.5 bg-premium-gold mx-auto" />
        </div>

        <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="card-premium p-5 text-center group">
              <div className="w-10 h-10 rounded-full bg-premium-gold/10 flex items-center justify-center text-lg mx-auto mb-3 group-hover:scale-110 group-hover:bg-premium-gold/20 transition-all duration-300">
                📍
              </div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                Adresse
              </h4>
              <p className="text-xs text-premium-muted leading-relaxed">
                LOCALE COMMERCIALE RDC, ROUTE NATIONALE N°1, DOUAR DRAID, CHTOUKA-AIT BAHA
              </p>
            </div>
            <div className="card-premium p-5 text-center group">
              <div className="w-10 h-10 rounded-full bg-premium-gold/10 flex items-center justify-center text-lg mx-auto mb-3 group-hover:scale-110 group-hover:bg-premium-gold/20 transition-all duration-300">
                📞
              </div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                Téléphone
              </h4>
              <p className="text-xs text-premium-muted">{t("phone")}</p>
            </div>
            <div className="card-premium p-5 text-center group">
              <div className="w-10 h-10 rounded-full bg-premium-gold/10 flex items-center justify-center text-lg mx-auto mb-3 group-hover:scale-110 group-hover:bg-premium-gold/20 transition-all duration-300">
                ✉️
              </div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                Email
              </h4>
              <p className="text-xs text-premium-muted">{t("emailAddr")}</p>
            </div>
          </div>

          <div className="card-premium overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4044.361990643596!2d-9.53378!3d30.2195696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3eb9200f7e08f%3A0xb6218764cb1186ff!2sSte%20AGRISTEP%20sarl!5e1!3m2!1sfr!2sma!4v1"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Agristep Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
