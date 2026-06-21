import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#064E3B",
};

export const metadata: Metadata = {
  title: "Agristep — Solutions Agricoles Biologiques",
  description:
    "Agristep est spécialisée dans la commercialisation d'insectes auxiliaires, biostimulants, et produits phytosanitaires pour une agriculture durable au Maroc.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/images/logo_agristep.png", type: "image/png" },
    ],
    apple: "/images/logo_agristep.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${fraunces.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agristep",
              url: "https://agristep.ma",
              logo: "https://agristep.ma/images/logo_agristep.png",
              description: "Solutions agricoles biologiques au Maroc",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chtouka Ait Baha",
                addressCountry: "MA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+212-528-815-207",
                contactType: "sales",
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var o=new MutationObserver(function(m){m.forEach(function(m){if(m.type==="attributes"&&m.attributeName==="bis_skin_checked"){m.target.removeAttribute("bis_skin_checked")}})});o.observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:["bis_skin_checked"]})})()`,
          }}
        />
      </head>
      <body
        className="font-sans antialiased text-premium-text min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-premium-dark focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}