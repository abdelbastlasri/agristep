import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Agristep",
  description: "Découvrez Agristep, votre partenaire en solutions agricoles au Maroc : innovation, qualité et proximité.",
  openGraph: {
    title: "À propos — Agristep",
    description: "Découvrez Agristep, votre partenaire en solutions agricoles au Maroc : innovation, qualité et proximité.",
  },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  const values = [
    { key: "quality", icon: "✅" },
    { key: "innovation", icon: "🔬" },
    { key: "sustainability", icon: "🌍" },
    { key: "proximity", icon: "🤝" },
  ];

  const convincePoints = [
    { key: "point1", icon: "⚡" },
    { key: "point2", icon: "🌿" },
    { key: "point3", icon: "🤝" },
    { key: "point4", icon: "📈" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-premium-dark py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-dark via-premium-dark to-premium-dark" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-premium-gold/60" />
            <span className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold">
              Agristep
            </span>
            <span className="w-8 h-px bg-premium-gold/60" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mt-2">
            {t("title")}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-gold/30 to-transparent" />
      </section>

      {/* Histoire */}
      <section className="section-padding bg-premium-warm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-premium-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold">
                Notre parcours
              </span>
              <span className="w-8 h-px bg-premium-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-white mt-2 mb-4">
              {t("history.title")}
            </h2>
            <div className="w-12 h-0.5 bg-premium-gold mx-auto" />
          </div>

          <div className="bg-premium-warm border border-premium-border rounded-2xl p-5 sm:p-6 md:p-12">
            <div className="space-y-6 text-premium-muted leading-relaxed">
              <p className="text-lg">{t("history.p1")}</p>
              <p className="text-lg">{t("history.p2")}</p>
              <p className="text-lg">{t("history.p3")}</p>
              <p className="text-lg">{t("history.p4")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* A propos notre Société */}
      <section className="section-padding bg-premium-warm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-premium-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold">
                Agristep
              </span>
              <span className="w-8 h-px bg-premium-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-white mt-2 mb-4">
              {t("societe.title")}
            </h2>
            <div className="w-12 h-0.5 bg-premium-gold mx-auto" />
          </div>

          <div className="bg-premium-warm border border-premium-border rounded-2xl p-5 sm:p-6 md:p-12">
            <div className="text-premium-muted leading-relaxed">
              <p className="text-lg">{t("societe.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Persuasive */}
      <section className="section-padding bg-premium-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-dark via-premium-dark to-premium-warm/50" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-premium-gold/60" />
              <span className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold">
                Performance
              </span>
              <span className="w-8 h-px bg-premium-gold/60" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
              {t("convince.title")}
            </h2>
            <div className="w-12 h-0.5 bg-premium-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {convincePoints.map((pt, i) => (
              <div
                key={pt.key}
                className="flex items-start gap-5 p-6 rounded-xl border border-white/10 hover:bg-white/[0.03] hover:border-premium-gold/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-premium-gold/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 group-hover:bg-premium-gold/20 transition-all duration-300">
                  {pt.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg text-white mb-2">
                    {t(`convince.${pt.key}_title`)}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {t(`convince.${pt.key}_text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-white/70 italic leading-relaxed font-light">
              {t("testimonial.text")}
            </p>
          </div>

          {/* CTA Button with Shine */}
          <div className="text-center">
            <a
              href="/produits"
                className="btn-premium btn-premium-gold btn-shine btn-lift text-sm"
              >
                <span>✦</span>
                {t("convince.cta")}
                <span>✦</span>
            </a>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding bg-premium-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-premium-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold">
                {t("values.title")}
              </span>
              <span className="w-8 h-px bg-premium-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-white mt-2 mb-4">
              {t("values.title")}
            </h2>
            <div className="w-12 h-0.5 bg-premium-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.key}
                className="card-premium p-5 sm:p-6 md:p-8 text-center hover:border-premium-gold/30"
              >
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3 className="font-heading text-lg text-white mb-3">
                  {t(`values.${v.key}.title`)}
                </h3>
                <p className="text-sm text-premium-muted">
                  {t(`values.${v.key}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations légales */}
      <section className="section-padding bg-premium-dark">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-premium-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-premium-gold font-semibold">
                Légal
              </span>
              <span className="w-8 h-px bg-premium-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-white mt-2 mb-4">
              {t("info.title")}
            </h2>
            <div className="w-12 h-0.5 bg-premium-gold mx-auto" />
          </div>

          <div className="bg-premium-warm border border-premium-border rounded-2xl p-5 sm:p-6 md:p-12 space-y-8">
            <div className="flex items-start gap-5">
              <span className="text-2xl flex-shrink-0">📍</span>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                  Adresse
                </h3>
                <p className="text-sm text-premium-muted leading-relaxed">
                  {t("info.address")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <span className="text-2xl flex-shrink-0">🏢</span>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                  Secteur d&apos;activité
                </h3>
                <p className="text-sm text-premium-muted leading-relaxed">
                  {t("info.sector")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
