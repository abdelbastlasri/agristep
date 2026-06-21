import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Icon } from "@/components/ui/IconSvg";

export const metadata: Metadata = {
  title: "Contact — Agristep",
  description: "Contactez Agristep par téléphone, email ou WhatsApp. Notre équipe vous répond sous 24h.",
  openGraph: {
    title: "Contact — Agristep",
    description: "Contactez Agristep par téléphone, email ou WhatsApp. Notre équipe vous répond sous 24h.",
  },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const pt = await getTranslations({ locale, namespace: "pages" });

  const whatsappMessage = encodeURIComponent(
    "Bonjour, j'ai besoin de plus d'informations à propos de vos produits et leurs fonctionnalités"
  );

  return (
    <div className="section-padding bg-premium-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-premium-green" />
            <span className="text-xs uppercase tracking-[0.2em] text-premium-green font-semibold">
              {pt("hero.contactLabel")}
            </span>
            <span className="w-8 h-px bg-premium-green" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-white mt-2 mb-4">
            {t("title")}
          </h1>
          <div className="w-12 h-0.5 bg-premium-green mx-auto mb-6" />
          <p className="text-premium-text max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div className="bg-premium-card/60 backdrop-blur-sm border border-premium-border rounded-2xl p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                {pt("contact.coord")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-premium-green/15 flex items-center justify-center flex-shrink-0">
                    <Icon name="mapPin" size={18} className="text-premium-green" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                      {pt("contact.address")}
                    </h4>
                    <p className="text-sm text-premium-text leading-relaxed">
                      {t("info.address")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-premium-green/15 flex items-center justify-center flex-shrink-0">
                    <Icon name="phone" size={18} className="text-premium-green" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                      {pt("contact.phone")}
                    </h4>
                    <p className="text-sm text-premium-text">{t("info.phone")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-premium-green/15 flex items-center justify-center flex-shrink-0">
                    <Icon name="mail" size={18} className="text-premium-green" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                      {pt("contact.email")}
                    </h4>
                    <p className="text-sm text-premium-text">{t("info.email")}</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/212528815207?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-premium-card/60 backdrop-blur-sm border border-premium-border rounded-2xl p-5 sm:p-6 flex items-center gap-4 hover:border-premium-green/40 group transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-premium-green/15 flex items-center justify-center flex-shrink-0 group-hover:bg-premium-green/25 transition-colors group-hover:scale-110 transition-all duration-300">
                <Icon name="messageCircle" size={22} className="text-premium-green" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {t("whatsapp")}
                </h4>
                  <p className="text-xs text-premium-muted mt-1">
                    {pt("contact.responseTime")}
                  </p>
              </div>
              <span className="ml-auto text-premium-green group-hover:translate-x-1 transition-transform">
                <Icon name="arrowRight" size={18} />
              </span>
            </a>

            <div className="bg-premium-card/60 backdrop-blur-sm border border-premium-border rounded-2xl overflow-hidden">
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
      </div>
    </div>
  );
}
