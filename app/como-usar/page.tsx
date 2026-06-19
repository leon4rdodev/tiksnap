import type { Metadata } from "next";
import Script from "next/script";
import {
  Laptop,
  Smartphone,
  Apple,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Video,
  Music,
} from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Cómo Descargar Videos de TikTok Sin Marca de Agua | Guía Completa",
  description:
    "Guía paso a paso para descargar videos de TikTok sin marca de agua en PC, Android e iPhone. Aprende el método más rápido y fácil. 100% gratis, sin apps.",
  keywords: [
    "cómo descargar tiktok",
    "descargar tiktok sin marca de agua",
    "bajar videos tiktok pc",
    "descargar tiktok android",
    "descargar tiktok iphone",
    "tutorial tiktok downloader",
  ],
  openGraph: {
    title: "Cómo Descargar Videos de TikTok Sin Marca de Agua - Tutorial Completo",
    description: "Aprende a descargar videos de TikTok en cualquier dispositivo. Guía paso a paso.",
  },
};

export default function HowToUsePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo Descargar Videos de TikTok Sin Marca de Agua",
    description: "Guía paso a paso para descargar videos de TikTok sin marca de agua desde cualquier dispositivo",
    step: [
      { "@type": "HowToStep", position: 1, name: "Abre TikTok", text: "Abre la aplicación o el sitio web de TikTok y busca el video que quieres descargar" },
      { "@type": "HowToStep", position: 2, name: "Copia el enlace", text: "Toca 'Compartir' y selecciona 'Copiar enlace'" },
      { "@type": "HowToStep", position: 3, name: "Pega en TikSnap", text: "Pega la URL en el campo de búsqueda de TikSnap y haz clic en 'Buscar'" },
      { "@type": "HowToStep", position: 4, name: "Descarga el video", text: "Selecciona Video HD o Audio MP3 y descarga directamente a tu dispositivo" },
    ],
    totalTime: "PT1M",
  };

  const steps = [
    { num: "1", title: "Abre TikTok", desc: "Busca el video que quieres guardar en la app o web de TikTok" },
    { num: "2", title: "Copia el Enlace", desc: "Toca 'Compartir' → 'Copiar enlace'. Tarda solo 2 segundos" },
    { num: "3", title: "Pega en TikSnap", desc: "Vuelve aquí, pega el enlace arriba y presiona 'Buscar'" },
    { num: "4", title: "¡Descarga!", desc: "Elige Video HD o Audio MP3 y descarga directo a tu dispositivo" },
  ];

  const guides = [
    {
      icon: Laptop,
      title: "Descargar en PC (Windows, Mac, Linux)",
      steps: [
        "Abre TikTok en tu navegador y navega hasta el video que quieres descargar.",
        "Haz clic en 'Compartir' y selecciona 'Copiar enlace'.",
        "Vuelve a TikSnap, pega la URL en el campo de búsqueda y haz clic en 'Buscar'.",
        "Elige Video HD sin marca de agua o Audio MP3. El archivo se guardará en tu carpeta de Descargas.",
      ],
      tip: "Usa Ctrl+V (Windows/Linux) o Cmd+V (Mac) para pegar más rápido.",
    },
    {
      icon: Smartphone,
      title: "Descargar en Android",
      steps: [
        "Inicia la aplicación oficial de TikTok en tu teléfono o tablet Android.",
        "Encuentra el video que quieres guardar y toca el botón 'Compartir'.",
        "En el menú, desliza hacia la derecha y toca 'Copiar enlace'.",
        "Abre Chrome, Firefox o cualquier navegador. Ve a tiksnap.es y pega el enlace.",
        "Toca 'Descargar' y el video se guardará en tu galería o carpeta de Descargas.",
      ],
      tip: "Los videos descargados aparecen automáticamente en tu app de Galería.",
    },
    {
      icon: Apple,
      title: "Descargar en iPhone o iPad",
      steps: [
        "Abre TikTok, encuentra tu video, toca 'Compartir' → 'Copiar enlace'.",
        "Abre Safari. Es importante usar Safari para que las descargas funcionen.",
        "Escribe tiksnap.es en la barra de direcciones y pega el enlace copiado.",
        "Toca 'Descargar'. Safari mostrará una ventana emergente, confirma la descarga.",
        "El video se guarda en la app Archivos. Desde ahí puedes guardarlo en Fotos.",
      ],
      tip: "Importante: Debes usar Safari. Chrome o Firefox no funcionarán para descargas en iPhone.",
    },
  ];

  return (
    <>
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-12 text-gray-300">
        {/* Hero */}
        <div className="text-center pt-3 md:pt-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Cómo Descargar Videos de TikTok
            <span className="block text-[#FE2C55] mt-2">Sin Marca de Agua</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mt-4">
            Guía completa y actualizada para descargar tus videos favoritos en cualquier dispositivo.
            <strong className="text-white"> Sin apps, sin registro, 100% gratis.</strong>
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-8">
            {[
              { icon: Zap, value: "30 seg", label: "Tiempo promedio" },
              { icon: Shield, value: "100%", label: "Seguro y privado" },
              { icon: Video, value: "HD", label: "Calidad máxima" },
            ].map((s) => (
              <div key={s.label} className="p-3 md:p-4 rounded-xl border border-gray-700">
                <s.icon className="w-5 h-5 text-[#FE2C55] mx-auto mb-2" />
                <p className="text-xl md:text-2xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Método Rápido */}
        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center mb-4">
            <Zap className="w-6 h-6 text-[#FE2C55] mr-3" />
            Método Rápido (Todos los Dispositivos)
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-6">
            Este método funciona en <strong className="text-white">PC, Mac, Android, iPhone y tablets</strong>.
            Es el más rápido y no requiere instalar nada.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="p-4 md:p-6 rounded-xl border border-gray-700">
                <div className="text-3xl md:text-4xl font-bold text-[#FE2C55] mb-2 md:mb-3">{s.num}</div>
                <h3 className="font-bold text-white mb-2 text-sm md:text-base">{s.title}</h3>
                <p className="text-xs md:text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-[#FE2C55] hover:bg-[#FE2C55]/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FE2C55]/25 cursor-pointer"
            >
              <span>Probar Ahora</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Guías por Dispositivo */}
        <section className="mt-8 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
            Guías Detalladas por Dispositivo
          </h2>

          {guides.map((g) => (
            <div key={g.title} className="border border-gray-700 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-white flex items-center mb-6">
                <g.icon className="w-6 h-6 text-[#FE2C55] mr-3 flex-shrink-0" />
                {g.title}
              </h3>
              <ol className="space-y-4">
                {g.steps.map((step, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 w-7 h-7 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-0.5">{i + 1}</span>
                    <p className="text-sm md:text-base text-gray-400">{step}</p>
                  </li>
                ))}
              </ol>
              {g.tip && (
                <div className="mt-4 border border-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-300"><strong>Tip:</strong> {g.tip}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Tips */}
        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            Tips y Trucos
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, title: "Descarga Múltiple", desc: "Puedes descargar tantos videos como quieras. No hay límites diarios ni restricciones." },
              { icon: CheckCircle, title: "Calidad Original", desc: "Siempre descargamos en la máxima calidad disponible (hasta 1080p HD)." },
              { icon: Music, title: "Solo Audio (MP3)", desc: "Si solo necesitas la música, selecciona la opción MP3 para descargar únicamente el audio." },
              { icon: CheckCircle, title: "Fotos y Carruseles", desc: "También puedes descargar sliders de fotos de TikTok como imágenes individuales." },
            ].map((t) => (
              <div key={t.title} className="p-5 rounded-xl border border-gray-700">
                <t.icon className="w-6 h-6 text-[#FE2C55] mb-3" />
                <h3 className="font-bold text-white mb-2">{t.title}</h3>
                <p className="text-sm text-gray-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="my-20">
          <FinalCTA />
        </div>
      </div>
    </>
  );
}
