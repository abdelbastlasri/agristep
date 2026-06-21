import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

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

  const whatsappMessage = encodeURIComponent(
    "Bonjour, j'ai besoin de plus d'informations à propos de vos produits et leurs fonctionnalités"
  );

  return (
    <div className="section-padding bg-premium-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-premium-warm" />
            <span className="text-xs uppercase tracking-[0.2em] text-premium-warm font-semibold">
              Contact
            </span>
            <span className="w-8 h-px bg-premium-warm" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-premium-dark mt-2 mb-4">
            {t("title")}
          </h1>
          <div className="w-12 h-0.5 bg-premium-warm mx-auto mb-6" />
          <p className="text-premium-muted max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div className="bg-premium-cream border border-premium-border/20 rounded-2xl shadow-sm p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-premium-dark uppercase tracking-wider mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-premium-warm/10 flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-premium-dark uppercase tracking-wider mb-1">
                      Adresse
                    </h4>
                    <p className="text-sm text-premium-muted leading-relaxed">
                      {t("info.address")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-premium-warm/10 flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-premium-dark uppercase tracking-wider mb-1">
                      Téléphone / Fax
                    </h4>
                    <p className="text-sm text-premium-muted">{t("info.phone")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-premium-warm/10 flex items-center justify-center flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-premium-dark uppercase tracking-wider mb-1">
                      Email
                    </h4>
                    <p className="text-sm text-premium-muted">{t("info.email")}</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/212528815207?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-premium-cream border border-premium-warm/20 rounded-2xl shadow-sm p-5 sm:p-6 flex items-center gap-4 hover:border-premium-warm/40 hover:shadow-[0_0_30px_rgba(69,26,3,0.08)] group transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-premium-warm/10 flex items-center justify-center flex-shrink-0 group-hover:bg-premium-warm/20 transition-colors group-hover:scale-110 transition-all duration-300">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#064E3B"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-premium-dark">
                  {t("whatsapp")}
                </h4>
                <p className="text-xs text-premium-muted/60 mt-1">
                  Réponse sous 24h
                </p>
              </div>
              <span className="ml-auto text-premium-dark group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

              <div className="bg-premium-cream border border-premium-border/20 rounded-2xl shadow-sm overflow-hidden">
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
