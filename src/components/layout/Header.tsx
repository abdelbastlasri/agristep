"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import HeaderTopBar from "./HeaderTopBar";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/produits", label: t("products") },
    { href: "/a-propos", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isHome = pathname === "/";

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.location.reload();
    }
  };

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const panel = document.getElementById("mobile-menu");
    if (!panel) return;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", trap);
    first.focus();
    return () => document.removeEventListener("keydown", trap);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <HeaderTopBar />
      <div className="h-px bg-gradient-to-r from-transparent via-premium-green/30 to-transparent" />
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0" onClick={handleLogoClick}>
            <img
              src="/images/logo_agristep.png"
              alt="Agristep"
              width={160}
              height={56}
              className="h-14 w-auto transition-transform duration-300 hover:scale-105 active:scale-95"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-all duration-300 relative py-1 group ${
                    active
                      ? "text-premium-green font-medium"
                      : "text-premium-dark hover:text-premium-green"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-premium-green transition-all duration-300 ${
                    active ? "right-0" : "right-full group-hover:right-0"
                  }`} />
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden p-2 text-2xl text-premium-dark transition-transform duration-150 active:scale-90 hover:text-premium-green"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation"
          className="md:hidden bg-white border-t border-gray-200 transition-all duration-300"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-wide py-2 transition-all duration-200 hover:translate-x-1 ${
                  pathname === link.href
                    ? "text-premium-green font-medium"
                    : "text-premium-dark hover:text-premium-green"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
