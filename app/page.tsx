import DownloaderTool from "@/components/DownloaderTool";
import DownloadCounter from "@/components/DownloadCounter";
import FAQItem from "@/components/FAQItem";
import FinalCTA from "@/components/FinalCTA";
import { CheckCircle, Shield, BookOpen, Smartphone, Globe, Headphones } from "lucide-react";
import Script from "next/script";
import { getAllPosts } from "@/lib/blog-data";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

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
      "Descarga videos y fotos de TikTok sin marca de agua en HD gratis. TikTok downloader online rápido y seguro para bajar videos TikTok MP4, MP3 y carruseles de imágenes en segundos.",
    url: "https://www.tiksnap.es",
    publisher: {
      "@type": "Organization",
      name: "TikSnap",
      url: "https://www.tiksnap.es",
    },
    screenshot: "https://www.tiksnap.es/og-image.png",
    softwareHelp: {
      "@type": "CreativeWork",
      url: "https://www.tiksnap.es/como-usar",
    },
  };

  // HowTo Schema for the 3-step guide
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo Descargar Videos y Fotos de TikTok Sin Marca de Agua",
    description:
      "Guía paso a paso para descargar TikTok sin marca de agua en HD y bajar carruseles de fotos con TikSnap, el mejor TikTok downloader online gratuito",
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
        text: "Elige el formato que prefieras (Video HD, Audio MP3, o Imágenes individuales) y haz clic para iniciar la descarga instantánea.",
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
        name: "¿Es legal descargar videos o imágenes de TikTok con TikSnap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TikSnap permite descargar contenido público de TikTok. Es tu responsabilidad usar el contenido descargado de manera ética y respetar los derechos de autor. Recomendamos usar los videos para uso personal, crear compilaciones con crédito al autor original, o pedir permiso si planeas uso comercial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo descargar carruseles de fotos y sliders de TikTok?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, TikSnap detecta automáticamente los carruseles de fotos de TikTok. Cuando pegas el enlace de un slider, la herramienta muestra todas las imágenes disponibles y puedes descargar cada una individualmente en alta resolución JPG sin marca de agua.",
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
          text: "No. TikSnap no almacena ningún video o imagen en nuestros servidores. El proceso de descarga es directo: desde los servidores de TikTok hacia tu dispositivo. Esto garantiza tu privacidad y velocidades de descarga más rápidas.",
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
          text: "TikSnap ofrece descargas sin marca de agua en HD, descarga de carruseles de fotos, funciona en todos los dispositivos, no tiene límites de descargas, es completamente gratis, respeta tu privacidad (no guardamos datos), y tiene una interfaz limpia sin pop-ups molestos. Además, ofrecemos conversión a MP3 integrada.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo descargar solo el audio de un TikTok en MP3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, TikSnap te permite extraer y descargar el audio de cualquier video TikTok en formato MP3 de alta calidad. Es perfecto para descargar música de TikTok, canciones virales, efectos de sonido y cualquier audio sin marca de agua.",
        },
      },
      {
        "@type": "Question",
        name: "¿TikSnap funciona en República Dominicana y Latinoamérica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, TikSnap funciona sin restricciones en República Dominicana y todos los países de LATAM incluyendo México, Colombia, Argentina, Chile, Perú, Ecuador y Venezuela. No hay bloqueos geográficos ni límites de descarga por región.",
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
      <div className="flex flex-col items-center px-4 md:px-12">
        {/* Hero Section - Hub de Creadores */}
        <section className="w-full max-w-2xl text-center mb-6 pt-3 md:pt-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Descargar Videos y Fotos de <span className="text-[#FE2C55]">TikTok</span> Sin Marca de Agua en HD
          </h1>

          <p className="text-sm md:text-base text-gray-400">
            Descarga videos de TikTok sin marca de agua gratis en HD. También baja carruseles de fotos y sliders de TikTok como imágenes individuales. TikTok downloader online rápido para toda LATAM y República Dominicana.
          </p>
        </section>

        {/* La Herramienta Principal */}
        <section
          id="descargador"
          aria-label="Descargador de TikTok"
          className="w-full flex justify-center"
        >
          <DownloaderTool />
        </section>
      </div>

      {/* Resto del contenido */}
      <div className="flex flex-col items-center justify-center px-4 md:px-12">
        
        {/* Sección de Blog Destacado Arriba */}
        <section className="w-full max-w-6xl mx-auto mt-8">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">
              Aprende a Dominar TikTok
            </h2>
            <p className="text-gray-400 text-center max-w-xl">
              Nuestras guías más recientes para entender el algoritmo, 
              mejorar tu retención y viralizarte rápidamente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <div key={post.slug} className=" border border-gray-700 rounded-xl overflow-hidden hover:border-[#FE2C55] transition-colors p-5 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-semibold text-[#FE2C55] mb-2">{post.tags[0]}</div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug"><a href={`/blog/${post.slug}`} className="hover:underline">{post.title}</a></h3>
                  <p className="text-sm text-gray-400 line-clamp-3 mb-4">{post.description}</p>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="font-medium mr-2">{post.author.name}</span> • <span className="ml-2">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/blog" className="text-[#FE2C55] hover:underline font-semibold text-sm">Ver todas las guías y consejos →</a>
          </div>
        </section>
        {/* 2. Sección "Cómo Funciona" */}
        <section
          className="max-w-3xl w-full text-center mt-8"
          aria-labelledby="how-it-works-heading"
        >
          <h2 id="how-it-works-heading" className="text-3xl font-bold mb-2">
            Cómo Descargar Videos y Fotos de TikTok Sin Marca de Agua
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Solo 3 pasos para descargar TikTok sin marca de agua en HD o bajar carruseles de imágenes
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <article className=" p-6 rounded-lg border border-gray-700 hover:border-[#FE2C55] transition-all">
              <div className="text-4xl font-bold text-[#FE2C55] mb-3">1</div>
              <h3 className="font-bold text-lg mb-2 text-white">
                Copia el Enlace del Video
              </h3>
              <p className="text-sm text-gray-400">
                En TikTok, toca el botón "Compartir" del video que quieres
                descargar y selecciona "Copiar enlace". ¡Listo en 2 segundos!
              </p>
            </article>
            <article className=" p-6 rounded-lg border border-gray-700 hover:border-[#FE2C55] transition-all">
              <div className="text-4xl font-bold text-[#FE2C55] mb-3">2</div>
              <h3 className="font-bold text-lg mb-2 text-white">
                Pégalo Aquí Arriba
              </h3>
              <p className="text-sm text-gray-400">
                Pega el enlace en el campo de búsqueda de arriba y presiona
                "Buscar". Nuestro sistema procesará el video al instante.
              </p>
            </article>
            <article className=" p-6 rounded-lg border border-gray-700 hover:border-[#FE2C55] transition-all">
              <div className="text-4xl font-bold text-[#FE2C55] mb-3">3</div>
              <h3 className="font-bold text-lg mb-2 text-white">
                Descarga y Disfruta
              </h3>
              <p className="text-sm text-gray-400">
                Elige Video HD, Audio MP3 o Imágenes si es un carrusel de fotos.
                Descarga directa a tu dispositivo. Sin esperas ni anuncios.
              </p>
            </article>
          </div>
        </section>

        {/* Download Counter */}
        <div className="max-w-3xl w-full mt-8">
          <DownloadCounter />
        </div>

        {/* Copyright Disclaimer */}
        <div className="max-w-3xl w-full mt-8">
          <div className=" border border-yellow-700/50 rounded-lg p-6">
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
          className="max-w-3xl w-full text-left mt-8 space-y-6 text-gray-300"
          aria-labelledby="features-heading"
        >
          <h2
            id="features-heading"
            className="text-3xl font-bold text-white text-center"
          >
            ¿Por Qué Elegir TikSnap Como Tu TikTok Downloader Sin Marca de Agua?
          </h2>
          <p className="text-center text-lg">
            TikSnap es el mejor descargador de TikTok sin marca de agua: gratis, rápido, sin límites y compatible con todos los dispositivos.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className=" p-6 rounded-lg border border-gray-700">
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

            <div className=" p-6 rounded-lg border border-gray-700">
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

            <div className=" p-6 rounded-lg border border-gray-700">
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

            <div className=" p-6 rounded-lg border border-gray-700">
              <CheckCircle className="w-8 h-8 text-[#FE2C55] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Descarga Carruseles de Fotos
              </h3>
              <p className="text-sm text-gray-400">
                ¿Ese TikTok es un slider de imágenes? TikSnap detecta automáticamente los carruseles de fotos y te permite descargar cada imagen individualmente en alta resolución.
              </p>
            </div>

            <div className=" p-6 rounded-lg border border-gray-700">
              <CheckCircle className="w-8 h-8 text-[#FE2C55] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Totalmente Gratis, Sin Límites
              </h3>
              <p className="text-sm text-gray-400">
                Descarga ilimitados videos y fotos al día. No pedimos registro, no hay
                suscripciones ocultas ni restricciones. TikSnap es y siempre
                será 100% gratuito.
              </p>
            </div>

            <div className=" p-6 rounded-lg border border-gray-700">
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

            <div className=" p-6 rounded-lg border border-gray-700">
              <CheckCircle className="w-8 h-8 text-[#FE2C55] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                Privacidad y Seguridad
              </h3>
              <p className="text-sm text-gray-400">
                No guardamos tus videos, fotos ni tu historial. El proceso es directo
                desde TikTok a tu dispositivo. Tu privacidad es nuestra
                prioridad máxima.
              </p>
            </div>
          </div>
        </section>

        {/* Guía Completa - SEO Editorial Content */}
        <section
          id="guia-completa"
          className="max-w-3xl w-full text-left mt-8 space-y-8 text-gray-300"
          aria-labelledby="guia-heading"
        >
          <h2
            id="guia-heading"
            className="text-3xl font-bold text-white text-center"
          >
            Guía Completa para Descargar Videos y Fotos de TikTok Sin Marca de Agua
          </h2>
          <p className="text-center text-lg text-gray-400">
            Todo lo que necesitas saber sobre cómo descargar TikTok sin marca de agua, descargar carruseles de fotos, formatos MP4, MP3 y calidad HD.
          </p>

          <div className="space-y-8 mt-8">
            {/* ¿Por qué descargar? */}
            <div className=" p-6 md:p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6 text-left">
                <div className="bg-[#FE2C55]/10 p-4 rounded-full flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-[#FE2C55]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    ¿Por Qué Descargar Videos de TikTok?
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                    TikTok se ha convertido en una de las plataformas de contenido más influyentes del mundo, con más de mil millones de usuarios activos mensuales. Cada día se suben millones de videos creativos, educativos, divertidos e inspiradores. Sin embargo, la plataforma no siempre ofrece opciones nativas de descarga sin marca de agua, lo que crea la necesidad de herramientas especializadas como TikSnap.
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Los creadores de contenido necesitan descargar sus propios videos para reutilizarlos en otras plataformas como Instagram Reels, YouTube Shorts o para archivarlos en su portafolio. Los educadores guardan contenido didáctico para compartir en entornos sin conexión a internet. Y los usuarios cotidianos simplemente quieren conservar sus videos favoritos para verlos offline o compartirlos con amigos y familia a través de otras aplicaciones de mensajería.
                  </p>
                </div>
              </div>
            </div>

            {/* Formatos */}
            <div className=" p-6 md:p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6 text-left">
                <div className="bg-[#FE2C55]/10 p-4 rounded-full flex-shrink-0">
                  <Headphones className="w-8 h-8 text-[#FE2C55]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Formatos de Descarga: MP4 vs MP3
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                    TikSnap ofrece dos formatos principales de descarga para cubrir diferentes necesidades. El formato <strong className="text-white">MP4 (Video)</strong> mantiene tanto la imagen como el audio del video original, descargándolo en la máxima calidad disponible (hasta 1080p Full HD). Es el formato ideal cuando necesitas el video completo para compartir, editar o archivar.
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    El formato <strong className="text-white">MP3 (Audio)</strong> extrae únicamente la pista de audio del video. Es perfecto cuando te interesa una canción, un efecto de sonido o un fragmento de voz de un TikTok. El audio se descarga en alta calidad, listo para reproducir en cualquier reproductor de música o usar en tus propios proyectos creativos.
                  </p>
                </div>
              </div>
            </div>

            {/* Carruseles de Fotos */}
            <div className=" p-6 md:p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6 text-left">
                <div className="bg-[#FE2C55]/10 p-4 rounded-full flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-[#FE2C55]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Cómo Descargar Carruseles de Fotos y Sliders de TikTok
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                    Muchos creadores publican carruseles de fotos (slideshows) en TikTok, conocidos como "photo dumps" o sliders de imágenes. Con TikSnap puedes descargar cada foto del carrusel individualmente en alta resolución, sin marca de agua. Solo pega el enlace del TikTok, y si es un carrusel, la herramienta mostrará automáticamente todas las imágenes disponibles para descargar una por una.
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Esto es ideal si quieres guardar fotos de tus creadores favoritos, descargar imágenes de referencia para inspiración, o conservar sliders de productos, moda, arte, recetas y más. Cada imagen se descarga en formato JPG con la máxima calidad disponible.
                  </p>
                </div>
              </div>
            </div>

            {/* Quitar Marca de Agua */}
            <div className=" p-6 md:p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6 text-left">
                <div className="bg-[#FE2C55]/10 p-4 rounded-full flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-[#FE2C55]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Cómo Quitar la Marca de Agua de Videos TikTok
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                    Una de las principales razones por las que los usuarios buscan un TikTok downloader es para quitar la marca de agua de los videos de TikTok. TikSnap elimina automáticamente el logo y el nombre de usuario que TikTok superpone en los videos descargados. No necesitas editar ni recortar nada: el video se descarga limpio, listo para usar.
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Olvídate de otras herramientas complicadas. Con TikSnap puedes bajar videos de TikTok sin marca de agua en un solo clic. Ya sea que quieras descargar un TikTok sin logo para reutilizarlo en Instagram Reels, YouTube Shorts, o simplemente guardarlo en tu galería sin el watermark, nuestro TikTok downloader sin marca de agua te lo permite al instante.
                  </p>
                </div>
              </div>
            </div>

            {/* Descargar Música */}
            <div className=" p-6 md:p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6 text-left">
                <div className="bg-[#FE2C55]/10 p-4 rounded-full flex-shrink-0">
                  <Headphones className="w-8 h-8 text-[#FE2C55]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Descargar Música y Audio de TikTok en MP3
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                    ¿Escuchaste una canción en TikTok y quieres descargarla? Con TikSnap puedes extraer el audio de cualquier video TikTok y descargarlo en formato MP3 de alta calidad. Es perfecto para descargar música de TikTok, guardar audios virales, efectos de sonido, voces, fragmentos de podcasts y más. Todo sin necesidad de instalar aplicaciones.
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Para descargar audio de TikTok solo tienes que pegar el enlace del video, seleccionar la opción "MP3" y la descarga comenzará al instante. Puedes descargar canciones de TikTok para escucharlas offline, crear tu propia biblioteca de música viral, o usar los audios en tus propios proyectos creativos. TikSnap es el mejor convertidor de TikTok a MP3 gratis y online.
                  </p>
                </div>
              </div>
            </div>

            {/* LATAM / República Dominicana */}
            <div className=" p-6 md:p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6 text-left">
                <div className="bg-[#FE2C55]/10 p-4 rounded-full flex-shrink-0">
                  <Globe className="w-8 h-8 text-[#FE2C55]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Descargar TikTok en República Dominicana y toda LATAM
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                    TikSnap está disponible para toda Latinoamérica y especialmente optimizado para usuarios en República Dominicana. No importa si estás en Santo Domingo, Santiago, Punta Cana, Ciudad de México, Bogotá, Buenos Aires, Lima o Santiago de Chile — puedes descargar videos de TikTok sin marca de agua sin restricciones geográficas ni bloqueos por país.
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Miles de usuarios en RD y LATAM ya usan TikSnap a diario para bajar videos TikTok, descargar carruseles de fotos, guardar música y audio, y compartir contenido viral con amigos y familiares por WhatsApp, Telegram y otras redes. Rápido, gratis y sin límites de descarga. Si buscas un TikTok downloader que funcione en República Dominicana, Argentina, Colombia, México, Perú, Chile o cualquier país de habla hispana, TikSnap es tu mejor opción.
                  </p>
                </div>
              </div>
            </div>

            {/* Compatibilidad */}
            <div className=" p-6 md:p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6 text-left">
                <div className="bg-[#FE2C55]/10 p-4 rounded-full flex-shrink-0">
                  <Smartphone className="w-8 h-8 text-[#FE2C55]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Compatibilidad con Dispositivos
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                    TikSnap funciona directamente desde el navegador web, lo que significa que es compatible con prácticamente cualquier dispositivo moderno. En <strong className="text-white">ordenadores</strong> (Windows, macOS, Linux), simplemente abre tu navegador preferido — Chrome, Firefox, Safari, Edge o Brave — y visita tiksnap.es. En <strong className="text-white">dispositivos Android</strong> (Samsung, Xiaomi, Huawei, OnePlus y más), los videos se descargan directamente a la galería o carpeta de descargas.
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Para usuarios de <strong className="text-white">iPhone y iPad</strong>, recomendamos usar el navegador Safari para garantizar la mejor experiencia de descarga. Los archivos se guardan en la app Archivos de iOS, desde donde puedes moverlos fácilmente a tu galería de Fotos. No necesitas instalar ninguna aplicación adicional ni extensión de navegador en ningún dispositivo.
                  </p>
                </div>
              </div>
            </div>

            {/* Uso responsable */}
            <div className=" p-6 md:p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6 text-left">
                <div className="bg-[#FE2C55]/10 p-4 rounded-full flex-shrink-0">
                  <Globe className="w-8 h-8 text-[#FE2C55]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Mejores Prácticas y Uso Responsable
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                    En TikSnap creemos firmemente en el uso ético del contenido digital. Cuando descargues videos de TikTok, te recomendamos siempre dar crédito al creador original si compartes el contenido en otras plataformas. Incluir el nombre de usuario del creador (@usuario) en la descripción o comentarios es una forma sencilla y respetuosa de reconocer su trabajo.
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    Si planeas usar contenido descargado con fines comerciales — como anuncios, campañas de marketing o contenido de marca — te sugerimos obtener permiso directo del creador original. Para uso educativo o personal (compilaciones privadas, material de estudio, uso offline), la descarga generalmente se considera un uso razonable, aunque siempre recomendamos respetar los términos de servicio de TikTok y las leyes de derechos de autor de tu jurisdicción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Sección de Preguntas Frecuentes (FAQ) */}
        <section
          id="faq"
          className="max-w-3xl w-full text-left mt-8"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            className="text-3xl font-bold text-white text-center mb-3"
          >
            Preguntas Frecuentes sobre Descargar TikTok Sin Marca de Agua
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Resuelve tus dudas sobre cómo descargar videos y fotos de TikTok sin marca de agua gratis
          </p>
          <div className="rounded-xl border border-gray-700 divide-y divide-gray-800">
            <FAQItem
              question="¿Es legal descargar videos de TikTok con TikSnap?"
              answer="TikSnap permite descargar contenido público de TikTok. Es tu responsabilidad usar el contenido descargado de manera ética y respetar los derechos de autor. Recomendamos usar los videos para uso personal, crear compilaciones con crédito al autor original, o pedir permiso si planeas uso comercial."
            />

            <FAQItem
              question="¿Puedo descargar carruseles de fotos y sliders de TikTok?"
              answer="¡Sí! TikSnap detecta automáticamente los carruseles de fotos (sliders) de TikTok. Cuando pegas el enlace de un TikTok que contiene múltiples imágenes, la herramienta te mostrará todas las fotos disponibles y podrás descargar cada una individualmente en alta resolución JPG sin marca de agua."
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
              answer="TikSnap ofrece descargas sin marca de agua en HD, descarga de carruseles de fotos, funciona en todos los dispositivos, no tiene límites de descargas, es completamente gratis, respeta tu privacidad (no guardamos datos), y tiene una interfaz limpia sin pop-ups molestos. Además, ofrecemos conversión a MP3 integrada."
            />

            <FAQItem
              question="¿Puedo descargar solo el audio de un TikTok en MP3?"
              answer="Sí, TikSnap te permite descargar el audio de cualquier video TikTok en formato MP3 de alta calidad. Solo pega el enlace, selecciona la opción MP3 y obtén la pista de audio limpia, sin marca de agua. Ideal para descargar música y canciones de TikTok."
            />

            <FAQItem
              question="¿TikSnap funciona en República Dominicana y Latinoamérica?"
              answer="Sí, TikSnap funciona perfectamente en República Dominicana y todos los países de LATAM: México, Colombia, Argentina, Chile, Perú, Ecuador, Venezuela y más. No hay restricciones geográficas ni bloqueos. Puedes descargar videos TikTok sin marca de agua desde cualquier país sin límites."
            />
          </div>
        </section>

        {/* Final CTA */}
        <div className="my-20">
          <FinalCTA />
        </div>
      </div>
    </>
  );
}
