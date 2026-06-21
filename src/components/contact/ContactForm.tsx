"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { generateWhatsAppUrl } from "@/lib/utils";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Agristep,\n- Prénom: ${form.firstName}\n- Nom: ${form.lastName}\n- Numéro: ${form.phone}\n- Email: ${form.email}\n- Message: ${form.message}`;
    window.location.href = generateWhatsAppUrl("212528815207", text);
  };

  return (
    <div className="bg-white border border-premium-warm/10 rounded-2xl shadow-sm p-5 sm:p-6 lg:p-10">
      <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-firstName" className="block text-xs uppercase tracking-wider text-premium-muted mb-2">
                {t("firstName")}
              </label>
              <input
                id="contact-firstName"
                type="text"
                required
                className="w-full px-4 py-3 bg-premium-warm/5 border border-premium-warm/15 rounded-lg input-glow text-sm text-premium-dark focus:border-premium-dark"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="contact-lastName" className="block text-xs uppercase tracking-wider text-premium-muted mb-2">
                {t("lastName")}
              </label>
              <input
                id="contact-lastName"
                type="text"
                required
                className="w-full px-4 py-3 bg-premium-warm/5 border border-premium-warm/15 rounded-lg input-glow text-sm text-premium-dark focus:border-premium-dark"
                value={form.lastName}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
              />
            </div>
          </div>
            <div>
              <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider text-premium-muted mb-2">
                {t("phone")}
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                className="w-full px-4 py-3 bg-premium-warm/5 border border-premium-warm/15 rounded-lg input-glow text-sm text-premium-dark focus:border-premium-dark"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-premium-muted mb-2">
                {t("email")}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                className="w-full px-4 py-3 bg-premium-warm/5 border border-premium-warm/15 rounded-lg input-glow text-sm text-premium-dark focus:border-premium-dark"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-premium-muted mb-2">
              {t("message")}
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg input-glow text-sm text-premium-dark resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="btn-premium btn-premium-primary w-full justify-center text-sm btn-shine"
          >
            {t("submit")}
          </button>
        </form>
    </div>
  );
}
