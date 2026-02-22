import DownloaderTool from "@/components/DownloaderTool";
import DownloadCounter from "@/components/DownloadCounter";
import FAQItem from "@/components/FAQItem";
import FinalCTA from "@/components/FinalCTA";
import { CheckCircle, Shield } from "lucide-react";
import Script from "next/script";

export default function HomePage() {
  // Enhanced SoftwareApplication Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TikSnap",
    applicationCategory: "MultimediaApplication",
    operatingSystem: ["Windows", "macOS", "Linux", "Android", "iOS"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    description:
      "Descarga videos de TikTok sin marca de agua en alta calidad. Herramienta gratuita, rápida y segura para cualquier dispositivo.",
    url: "https://www.tiksnap.es",
    publisher: {
      "@type": "Organization",
      name: "TikSnap",
      url: "https://www.tiksnap.es",
    },
    screenshot: "https://www.tiksnap.es/og-image.jpg",
    softwareHelp: {
      "@type": "CreativeWork",
      url: "https://www.tiksnap.es/como-usar",
    },
  };

  // HowTo Schema for the 3-step guide
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo Descargar Videos de TikTok Sin Marca de Agua",
    description:
      "Guía paso a paso para descargar videos de TikTok sin marca de agua usando TikSnap",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Encuentra y Copia el Enlace",
        text: "Abre la aplicación de TikTok o su sitio web, busca el video que deseas y selecciona la opción 'Compartir', luego 'Copiar enlace'.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Pega el Enlace en TikSnap",
        text: "Vuelve a nuestro sitio, pega el enlace en el campo de búsqueda de arriba y haz clic en el botón 'Buscar'.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Descarga tu Contenido",
        text: "Elige el formato que prefieras (Video HD sin marca de agua o Audio MP3) y haz clic para iniciar la descarga instantánea.",
      },
    ],
    totalTime: "PT2M",
  };

  // FAQPage Schema - Actualizado con todas las nuevas FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Es legal descargar videos de TikTok con TikSnap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TikSnap permite descargar contenido público de TikTok. Es tu responsabilidad usar el contenido descargado de manera ética y respetar los derechos de autor. Recomendamos usar los videos para uso personal, crear compilaciones con crédito al autor original, o pedir permiso si planeas uso comercial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito crear una cuenta o instalar algo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "¡No! TikSnap es una herramienta 100% web que funciona directamente desde tu navegador. No necesitas registrarte, instalar extensiones ni descargar ningún programa. Solo abre la página, pega el enlace y descarga.",
        },
      },
      {
        "@type": "Question",
        name: "¿Guardan mis videos en sus servidores?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. TikSnap no almacena ningún video en nuestros servidores. El proceso de descarga es directo: desde los servidores de TikTok hacia tu dispositivo. Esto garantiza tu privacidad y velocidades de descarga más rápidas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Funciona en dispositivos móviles (iPhone y Android)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, TikSnap está completamente optimizado para móviles. Funciona perfectamente en iPhone (Safari), Android (Chrome), tablets y cualquier dispositivo con navegador moderno. La interfaz se adapta automáticamente a tu pantalla.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué calidad se descargan los videos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Descargamos videos en la máxima calidad disponible en TikTok, que generalmente es 1080p HD. La calidad final depende de cómo fue subido el video original. Siempre te ofrecemos la mejor resolución posible.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo descargar videos de cuentas privadas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, solo podemos descargar videos que son públicos en TikTok. Si un perfil es privado o el video tiene restricciones de privacidad, no podrás descargarlo. Esto es una limitación de TikTok, no de nuestra herramienta.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda en procesar un video?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El proceso es prácticamente instantáneo. En la mayoría de los casos, el video estará listo para descargar en menos de 5 segundos. El tiempo puede variar ligeramente según tu conexión a internet y el tamaño del video.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué TikSnap es mejor que otros descargadores?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TikSnap ofrece descargas sin marca de agua en HD, funciona en todos los dispositivos, no tiene límites de descargas, es completamente gratis, respeta tu privacidad (no guardamos datos), y tiene una interfaz limpia sin pop-ups molestos. Además, ofrecemos conversión a MP3 integrada.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        {/* Hero Section - Ultra Compacto */}
        <section className="w-full max-w-2xl text-center mb-6 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
            Descargador de Videos <span className="text-[#FE2C55]">TikTok</span>
          </h1>

          <p className="text-sm md:text-base text-gray-400">
            Descarga sin marca de agua • Gratis • HD • Rápido
          </p>
        </section>

        {/* La Herramienta Principal */}
        <section
          id="descargador"
          aria-label="Descargador de TikTok"
          className="w-full flex justify-center mb-4"
        >
          <DownloaderTool />
        </section>
      </div>

      {/* Resto del contenido */}
      <div className="flex flex-col items-center justify-center px-6 py-4">
        {/* 2. Sección "Cómo Funciona" */}
        <section
          className="max-w-3xl w-full text-center mt-0 px-4"
          aria-labelledby="how-it-works-heading"
        >
          <h2 id="how-it-works-heading" className="text-3xl font-bold mb-2">
            Descarga Videos de TikTok Sin Marca de Agua en Segundos
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Solo 3 pasos simples para obtener tus videos favoritos en HD
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <article className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-[#FE2C55] transition-all">
              <div className="text-4xl font-bold text-[#FE2C55] mb-3">1</div>
              <h3 className="font-bold text-lg mb-2 text-white">
                Copia el Enlace del Video
              </h3>
              <p className="text-sm text-gray-400">
                En TikTok, toca el botón "Compartir" del video que quieres
                descargar y selecciona "Copiar enlace". ¡Listo en 2 segundos!
              </p>
            </article>
            <article className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-[#FE2C55] transition-all">
              <div className="text-4xl font-bold text-[#FE2C55] mb-3">2</div>
              <h3 className="font-bold text-lg mb-2 text-white">
                Pégalo Aquí Arriba
              </h3>
              <p className="text-sm text-gray-400">
                Pega el enlace en el campo de búsqueda de arriba y presiona
                "Buscar". Nuestro sistema procesará el video al instante.
              </p>
            </article>
            <article className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-[#FE2C55] transition-all">
              <div className="text-4xl font-bold text-[#FE2C55] mb-3">3</div>
              <h3 className="font-bold text-lg mb-2 text-white">
                ¡Descarga y Disfruta!
              </h3>
              <p className="text-sm text-gray-400">
                Selecciona la calidad (Video HD o Audio MP3) y descarga
                directamente a tu dispositivo. Sin esperas, sin anuncios
                molestos.
              </p>
            </article>
          </div>
        </section>

        {/* Download Counter */}
        <div className="max-w-3xl w-full mt-16 px-4">
          <DownloadCounter />
        </div>

        {/* Copyright Disclaimer */}
        <div className="max-w-3xl w-full mt-8 px-4">
          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-200 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Uso Responsable y Legal
            </h3>
            <p className="text-sm text-yellow-100/90 leading-relaxed">
              TikSnap facilita la descarga de contenido <strong>público</strong>{" "}
              de TikTok. Los usuarios son responsables de cumplir con las leyes
              de derechos de autor y los términos de servicio de TikTok.
              Recomendamos usar el contenido descargado para{" "}
              <strong>uso personal</strong>, dar crédito al creador original, o
              solicitar permiso para uso comercial. No promovemos la infracción
              de derechos de autor.
            </p>
          </div>
        </div>

        {/* 3. Sección de Características / Texto SEO */}
        <section
          id="features"
          className="max-w-3xl w-full text-left mt-16 px-4 space-y-6 text-gray-300"
          aria-labelledby="features-heading"
        >
          <h2
            id="features-heading"
            className="text-3xl font-bold text-white text-center"
          >
            ¿Por Qué Elegir TikSnap Como Tu Descargador de TikTok?
          </h2>
          <p className="text-center text-lg">
            Nos diferenciamos de la competencia con características premium que
            hacen de TikSnap la mejor opción para descargar contenido de TikTok.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <CheckCircle className="w-8 h-8 text-[#FE2C55] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                100% Sin Marca de Agua
              </h3>
              <p className="text-sm text-gray-400">
                Descarga videos completamente limpios, sin el logo de TikTok.
                Ideal para reutilizar en otras plataformas como Instagram Reels,
                YouTube Shorts o para tu portfolio personal.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <CheckCircle className="w-8 h-8 text-[#FE2C55] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Calidad HD Garantizada
              </h3>
              <p className="text-sm text-gray-400">
                Descarga en la máxima resolución disponible (hasta 1080p).
                Preservamos cada detalle, color y nitidez del video original,
                sin compresión adicional.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <CheckCircle className="w-8 h-8 text-[#FE2C55] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Conversor MP3 Integrado
              </h3>
              <p className="text-sm text-gray-400">
                ¿Solo necesitas el audio? Extrae y descarga la música o sonido
                de cualquier video TikTok en formato MP3 de alta calidad con un
                solo clic.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <CheckCircle className="w-8 h-8 text-[#FE2C55] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Totalmente Gratis, Sin Límites
              </h3>
              <p className="text-sm text-gray-400">
                Descarga ilimitados videos al día. No pedimos registro, no hay
                suscripciones ocultas ni restricciones. TikSnap es y siempre
                será 100% gratuito.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <CheckCircle className="w-8 h-8 text-[#FE2C55] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Compatible Con Todos Los Dispositivos
              </h3>
              <p className="text-sm text-gray-400">
                Funciona perfectamente en iPhone, Android, Windows, Mac y Linux.
                Solo necesitas un navegador moderno. No requiere instalación de
                apps ni extensiones.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <CheckCircle className="w-8 h-8 text-[#FE2C55] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Privacidad y Seguridad
              </h3>
              <p className="text-sm text-gray-400">
                No guardamos tus videos ni tu historial. El proceso es directo
                desde TikTok a tu dispositivo. Tu privacidad es nuestra
                prioridad máxima.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Sección de Preguntas Frecuentes (FAQ) */}
        <section
          id="faq"
          className="max-w-3xl w-full text-left mt-16 px-4"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            className="text-3xl font-bold text-white text-center mb-3"
          >
            Preguntas Frecuentes
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Todo lo que necesitas saber sobre cómo descargar videos de TikTok
          </p>
          <div className="space-y-4">
            <FAQItem
              question="¿Es legal descargar videos de TikTok con TikSnap?"
              answer="TikSnap permite descargar contenido público de TikTok. Es tu responsabilidad usar el contenido descargado de manera ética y respetar los derechos de autor. Recomendamos usar los videos para uso personal, crear compilaciones con crédito al autor original, o pedir permiso si planeas uso comercial."
            />

            <FAQItem
              question="¿Necesito crear una cuenta o instalar algo?"
              answer="¡No! TikSnap es una herramienta 100% web que funciona directamente desde tu navegador. No necesitas registrarte, instalar extensiones ni descargar ningún programa. Solo abre la página, pega el enlace y descarga."
            />

            <FAQItem
              question="¿Guardan mis videos en sus servidores?"
              answer="No. TikSnap no almacena ningún video en nuestros servidores. El proceso de descarga es directo: desde los servidores de TikTok hacia tu dispositivo. Esto garantiza tu privacidad y velocidades de descarga más rápidas."
            />

            <FAQItem
              question="¿Funciona en dispositivos móviles (iPhone y Android)?"
              answer="Sí, TikSnap está completamente optimizado para móviles. Funciona perfectamente en iPhone (Safari), Android (Chrome), tablets y cualquier dispositivo con navegador moderno. La interfaz se adapta automáticamente a tu pantalla."
            />

            <FAQItem
              question="¿En qué calidad se descargan los videos?"
              answer="Descargamos videos en la máxima calidad disponible en TikTok, que generalmente es 1080p HD. La calidad final depende de cómo fue subido el video original. Siempre te ofrecemos la mejor resolución posible."
            />

            <FAQItem
              question="¿Puedo descargar videos de cuentas privadas?"
              answer="No, solo podemos descargar videos que son públicos en TikTok. Si un perfil es privado o el video tiene restricciones de privacidad, no podrás descargarlo. Esto es una limitación de TikTok, no de nuestra herramienta."
            />

            <FAQItem
              question="¿Cuánto tiempo tarda en procesar un video?"
              answer="El proceso es prácticamente instantáneo. En la mayoría de los casos, el video estará listo para descargar en menos de 5 segundos. El tiempo puede variar ligeramente según tu conexión a internet y el tamaño del video."
            />

            <FAQItem
              question="¿Por qué TikSnap es mejor que otros descargadores?"
              answer="TikSnap ofrece descargas sin marca de agua en HD, funciona en todos los dispositivos, no tiene límites de descargas, es completamente gratis, respeta tu privacidad (no guardamos datos), y tiene una interfaz limpia sin pop-ups molestos. Además, ofrecemos conversión a MP3 integrada."
            />
          </div>
        </section>

        {/* Final CTA + Latest Blog Posts */}
        <div className="mt-20">
          <FinalCTA />
        </div>
      </div>
    </>
  );
}
