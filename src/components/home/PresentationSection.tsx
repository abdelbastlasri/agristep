"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Package, Award, Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(num);
  const [display, setDisplay] = useState(isNumeric ? "0" : value);

  useEffect(() => {
    if (!isNumeric || num === 0) return;
    let i = 0;
    const duration = 1500;
    const step = Math.max(1, Math.ceil(num / 60));
    const timer = setInterval(() => {
      i += step;
      if (i >= num) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(String(i) + suffix);
      }
    }, duration / 60);
    return () => clearInterval(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{display}</>;
}

const statIcons = [Calendar, Package, Award, Leaf];

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
    <section className="section-padding bg-premium-secondary relative overflow-hidden section-wave section-wave-dark" ref={ref}>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url(/images/leaf-pattern.svg)`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px 400px",
      }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-premium-green" />
              <span className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold">
                À propos
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-8 leading-tight">
              {t("title")}
            </h2>
            <div className="w-16 h-0.5 bg-premium-green/50 mb-8" />
            <p className="text-premium-text leading-relaxed text-lg mb-10">
              {t("text")}
            </p>
            <Link
              href="/a-propos"
              className="btn-premium btn-premium-primary text-sm group"
            >
              {t("link")}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 md:gap-5"
          >
            {stats.map((stat, idx) => {
              const Icon = statIcons[idx];
              return (
                <div
                  key={stat.label}
                  className="card-premium p-5 sm:p-6 md:p-8 text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-premium-green/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-premium-green/20 transition-all duration-300">
                    <Icon size={22} className="text-premium-green" />
                  </div>
                  <div className="font-heading text-3xl md:text-4xl text-white mb-2">
                    {isVisible ? <AnimatedNumber value={stat.number} /> : "0"}
                  </div>
                  <div className="text-xs uppercase tracking-[0.15em] text-premium-muted">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
