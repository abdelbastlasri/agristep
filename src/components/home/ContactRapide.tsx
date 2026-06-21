"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactRapide() {
  const t = useTranslations("home.contact");

  return (
    <section className="section-padding bg-premium-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-premium-green" />
            <span className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold">
              Notre Emplacement
            </span>
            <span className="w-10 h-px bg-premium-green" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            Notre Emplacement sur la Carte
          </h2>
          <div className="w-16 h-0.5 bg-premium-green/50 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-premium p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-premium-green/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-premium-green/20 transition-all duration-300">
                <MapPin size={22} className="text-premium-green" />
              </div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Adresse
              </h4>
              <p className="text-xs text-premium-muted leading-relaxed">
                LOCALE COMMERCIALE RDC, ROUTE NATIONALE N°1, DOUAR DRAID, CHTOUKA-AIT BAHA
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-premium p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-premium-green/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-premium-green/20 transition-all duration-300">
                <Phone size={22} className="text-premium-green" />
              </div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Téléphone
              </h4>
              <p className="text-xs text-premium-muted">{t("phone")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-premium p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-premium-green/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-premium-green/20 transition-all duration-300">
                <Mail size={22} className="text-premium-green" />
              </div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Email
              </h4>
              <p className="text-xs text-premium-muted">{t("emailAddr")}</p>
            </motion.div>
          </div>

          <div className="card-premium overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4044.361990643596!2d-9.53378!3d30.2195696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3eb9200f7e08f%3A0xb6218764cb1186ff!2sSte%20AGRISTEP%20sarl!5e1!3m2!1sfr!2sma!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Agristep Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
