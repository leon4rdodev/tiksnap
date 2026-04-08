// tiktok-downloader-main/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tiksnap.es"),
  title: {
    default: "TikSnap - Recursos, Herramientas y Descargas para Creadores de TikTok",
    template: "%s | TikSnap",
  },
  description:
    "El portal definitivo para creadores de TikTok. Encuentra guías, trucos de algoritmo y herramientas gratuitas para descargar videos sin marca de agua en HD.",
  keywords: [
    "descargar fotos de tiktok",
    "descargar imagenes tiktok",
    "descargar videos de tiktok",
    "tiktok sin marca de agua",
    "bajar videos de tiktok",
    "convertir tiktok a mp3",
    "tiktok downloader",
    "descargar tiktok mp4",
    "guardar videos de tiktok",
    "tiksnap",
    "ssstik",
    "snaptik",
  ],
  authors: [{ name: "TikSnap Team" }],
  creator: "TikSnap",
  publisher: "TikSnap",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.tiksnap.es",
    title: "TikSnap - Recursos, Guías y Herramientas para Creadores de TikTok",
    description:
      "Lleva tu cuenta al siguiente nivel con nuestras guías estratégicas y herramientas gratuitas para descargar videos en alta calidad HD.",
    siteName: "TikSnap",
    images: [
      {
        url: "/og-image.png", // Make sure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "TikSnap - Descargador de TikTok",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikSnap - Recursos, Guías y Herramientas para Creadores de TikTok",
    description:
      "El portal para dominar TikTok. Guías, análisis y herramientas de descarga gratuitas.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "-GLBeiN6eJGBLTtMFeJKw8gSQ5TUbGNn8kkgeP7mUQo",
  },
  alternates: {
    canonical: "https://www.tiksnap.es",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TikSnap",
    url: "https://www.tiksnap.es",
    description:
      "Descarga videos y fotos de TikTok sin marca de agua. Herramienta gratuita y rápida.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.tiksnap.es/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "es-ES",
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TikSnap",
    url: "https://www.tiksnap.es",
    logo: "https://www.tiksnap.es/icon.png",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      availableLanguage: ["Spanish", "English", "Portuguese", "French"],
    },
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://adservice.google.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <meta
          name="google-adsense-account"
          content="ca-pub-7809217955853774"
        ></meta>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7809217955853774"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <div className="relative min-h-screen bg-black text-white flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70" />
          <div className="relative z-10 flex flex-col flex-1">
            <Header />
            <main className="flex-1 w-full pt-20">{children}</main>
            <Footer />
          </div>
          <CookieBanner />
        </div>
        <Analytics />
        <Script id="pwa-install-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {},
                  function(err) {
                    console.log('Service Worker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
