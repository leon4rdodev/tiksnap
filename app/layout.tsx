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
    default: "TikSnap - Descargar Videos y Fotos de TikTok Sin Marca de Agua en HD Gratis",
    template: "%s | TikSnap",
  },
  description:
    "Descarga videos de TikTok sin marca de agua en HD gratis. También baja carruseles de fotos y sliders de TikTok como imágenes. TikTok downloader online rápido para toda LATAM y República Dominicana.",
  keywords: [
    "descargar videos de tiktok sin marca de agua",
    "tiktok video downloader",
    "descargar tiktok sin marca de agua",
    "descargar carrusel de fotos tiktok",
    "descargar slider tiktok",
    "descargar fotos de tiktok",
    "descargar imagenes tiktok",
    "descargar videos de tiktok",
    "descargar tik tok",
    "bajar videos de tiktok",
    "quitar marca de agua tiktok",
    "eliminar marca de agua tiktok",
    "descargar video tiktok",
    "tiktok downloader",
    "descargar tiktok mp4",
    "descargar tiktok mp3",
    "tiktok sin marca de agua",
    "guardar videos de tiktok",
    "descargar musica de tiktok",
    "descargar audio tiktok",
    "descargar canciones de tiktok",
    "tiktok a mp3",
    "convertir tiktok a mp3",
    "tiktok downloader sin marca de agua",
    "descargar tiktok hd",
    "bajar tiktok sin marca de agua",
    "descargar videos tiktok hd gratis",
    "descargar tiktok republica dominicana",
    "descargar tiktok rd",
    "tiktok downloader latam",
    "descargar tiktok colombia",
    "descargar tiktok mexico",
    "descargar tiktok argentina",
    "descargar tiktok chile",
    "descargar tiktok peru",
    "tiksnap",
    "ssstik",
    "snaptik",
    "alternativa a ssstik",
    "como descargar videos de tiktok",
    "como descargar tiktok sin marca de agua",
    "descargador de tiktok",
    "descargador de videos tiktok",
    "bajar videos de tik tok",
    "guardar tiktok en galeria",
    "tiktok photo downloader",
    "descargar slideshow tiktok",
    "tiktok video download sin watermark",
  ],
  authors: [{ name: "TikSnap" }],
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
    title: "TikSnap - Descargar Videos y Fotos de TikTok Sin Marca de Agua en HD Gratis",
    description:
      "Descarga videos de TikTok sin marca de agua en HD gratis. También baja carruseles de fotos y sliders de TikTok. TikTok downloader online sin límites.",
    siteName: "TikSnap",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TikSnap - Descargador de TikTok Sin Marca de Agua",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikSnap - Descargar Videos y Fotos de TikTok Sin Marca de Agua en HD Gratis",
    description:
      "Descarga videos de TikTok sin marca de agua en HD gratis. Baja carruseles de fotos de TikTok también. TikTok downloader online sin límites.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "53pnwwnlo4z5",
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
