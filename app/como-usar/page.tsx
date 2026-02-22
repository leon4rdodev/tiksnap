import type { Metadata } from "next";
import Script from "next/script";
import {
  Laptop,
  Smartphone,
  Apple,
  Copy,
  MousePointer,
  Download as DownloadIcon,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Video,
} from "lucide-react";
import Link from "next/link";

// Metadata optimizada para SEO
export const metadata: Metadata = {
  title: "Cómo Descargar Videos de TikTok Sin Marca de Agua | Guía Completa 2024",
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
    description: "Aprende a descargar videos de TikTok en cualquier dispositivo. Guía paso a paso con capturas y tips.",
  },
};

export default function HowToUsePage() {
  // HowTo Schema para rich snippets
  const howToSchemaPC = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo Descargar Videos de TikTok en PC",
    description: "Guía paso a paso para descargar videos de TikTok sin marca de agua desde un ordenador",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Abre TikTok en tu navegador",
        text: "Ve a tiktok.com y busca el video que quieres descargar",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Copia el enlace del video",
        text: "Haz clic en 'Compartir' y selecciona 'Copiar enlace'",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Pega el enlace en TikSnap",
        text: "Pega la URL en el campo de búsqueda y haz clic en 'Buscar'",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Descarga el video",
        text: "Selecciona la calidad deseada y haz clic en descargar",
      },
    ],
    totalTime: "PT1M",
  };

  return (
    <>
      <Script
        id="howto-schema-pc"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchemaPC) }}
      />
      
      <div className="max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-6 text-gray-300 space-y-12 md:space-y-16 overflow-x-hidden">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Cómo Descargar Videos de TikTok
            <span className="block text-[#FE2C55] mt-2">Sin Marca de Agua</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Guía completa y actualizada para descargar tus videos favoritos en cualquier dispositivo. 
            <strong className="text-white">Sin apps, sin registro, 100% gratis.</strong>
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mt-8">
            <div className="bg-gray-900 p-3 md:p-4 rounded-lg border border-gray-700">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#FE2C55] mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-bold text-white">30 seg</p>
              <p className="text-xs text-gray-400">Tiempo promedio</p>
            </div>
            <div className="bg-gray-900 p-3 md:p-4 rounded-lg border border-gray-700">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#FE2C55] mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-gray-400">Seguro y privado</p>
            </div>
            <div className="bg-gray-900 p-3 md:p-4 rounded-lg border border-gray-700">
              <Video className="w-5 h-5 md:w-6 md:h-6 text-[#FE2C55] mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-bold text-white">HD</p>
              <p className="text-xs text-gray-400">Calidad máxima</p>
            </div>
          </div>
        </div>

        {/* Método Universal Rápido */}
        <div className="bg-gradient-to-br from-[#FE2C55]/10 to-transparent p-4 md:p-8 rounded-2xl border border-[#FE2C55]/30">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center">
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#FE2C55] mr-3" />
            Método Rápido (Todos los Dispositivos)
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-6">
            Este método funciona en <strong className="text-white">PC, Mac, Android, iPhone y tablets</strong>. 
            Es el más rápido y no requiere instalar nada.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="bg-gray-900 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-[#FE2C55] transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[#FE2C55] mb-2 md:mb-3">1</div>
              <h3 className="font-bold text-white mb-2 text-sm md:text-base">Abre TikTok</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Busca el video que quieres guardar en la app o web de TikTok
              </p>
            </div>
            
            <div className="bg-gray-900 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-[#FE2C55] transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[#FE2C55] mb-2 md:mb-3">2</div>
              <h3 className="font-bold text-white mb-2 text-sm md:text-base">Copia el Enlace</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Toca "Compartir" → "Copiar enlace". Tarda solo 2 segundos
              </p>
            </div>
            
            <div className="bg-gray-900 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-[#FE2C55] transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[#FE2C55] mb-2 md:mb-3">3</div>
              <h3 className="font-bold text-white mb-2 text-sm md:text-base">Pega en TikSnap</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Vuelve aquí, pega el enlace arriba y presiona "Buscar"
              </p>
            </div>
            
            <div className="bg-gray-900 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-[#FE2C55] transition-all">
              <div className="text-3xl md:text-4xl font-bold text-[#FE2C55] mb-2 md:mb-3">4</div>
              <h3 className="font-bold text-white mb-2 text-sm md:text-base">¡Descarga!</h3>
              <p className="text-xs md:text-sm text-gray-400">
                Elige HD o MP3 y descarga directamente a tu dispositivo
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link 
              href="/"
              className="inline-flex items-center bg-[#FE2C55] hover:bg-[#FE2C55]/90 text-white font-bold py-3 px-6 md:px-8 rounded-lg transition-all text-sm md:text-base"
            >
              Probar Ahora
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Guías Específicas por Dispositivo */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Guías Detalladas por Dispositivo
          </h2>

          {/* Guía para PC */}
          <div className="bg-gray-900 p-4 md:p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center mb-6">
              <Laptop className="w-6 h-6 md:w-8 md:h-8 text-[#FE2C55] mr-3 md:mr-4" />
              Descargar en PC (Windows, Mac, Linux)
            </h3>
            <ol className="space-y-4 md:space-y-6 text-base md:text-lg">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                <div>
                  <strong className="text-white block mb-1">Abre TikTok en tu navegador</strong>
                  <p className="text-gray-400">
                    Ve a{" "}
                    <a
                      href="https://www.tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FE2C55] hover:underline"
                    >
                      tiktok.com
                    </a>{" "}
                    y navega hasta el video que quieres descargar.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                <div>
                  <strong className="text-white block mb-1">Copia la URL del video</strong>
                  <p className="text-gray-400 mb-2">
                    Haz clic en el botón "Compartir" (icono de flecha) y selecciona "Copiar enlace".
                  </p>
                  <div className="flex items-start text-xs md:text-sm bg-gray-800 p-2 md:p-3 rounded-lg border border-gray-700">
                    <Copy className="w-4 h-4 mr-2 mt-0.5 text-[#FE2C55] flex-shrink-0" />
                    <code className="text-gray-300 break-all">https://www.tiktok.com/@usuario/video/123...</code>
                  </div>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                <div>
                  <strong className="text-white block mb-1">Pega el enlace en TikSnap</strong>
                  <p className="text-gray-400">
                    Vuelve a esta página, pega la URL en el campo de búsqueda de arriba y haz clic en "Buscar".
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                <div>
                  <strong className="text-white block mb-1">Descarga en tu formato preferido</strong>
                  <p className="text-gray-400">
                    Elige entre <strong className="text-white">Video HD sin marca de agua</strong> o{" "}
                    <strong className="text-white">Audio MP3</strong>. El archivo se guardará en tu carpeta de Descargas.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-6 bg-blue-900/20 border border-blue-700 p-4 rounded-lg">
              <p className="text-sm text-blue-300">
                <strong>💡 Tip Pro:</strong> Usa el atajo de teclado <kbd className="bg-gray-800 px-2 py-1 rounded">Ctrl+V</kbd> (Windows/Linux) 
                o <kbd className="bg-gray-800 px-2 py-1 rounded">Cmd+V</kbd> (Mac) para pegar más rápido.
              </p>
            </div>
          </div>

          {/* Guía para Android */}
          <div className="bg-gray-900 p-4 md:p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center mb-6">
              <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-[#FE2C55] mr-3 md:mr-4" />
              Descargar en Android (Samsung, Xiaomi, Huawei, etc.)
            </h3>
            <ol className="space-y-4 md:space-y-6 text-base md:text-lg">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                <div>
                  <strong className="text-white block mb-1">Abre la app de TikTok</strong>
                  <p className="text-gray-400">
                    Inicia la aplicación oficial de TikTok en tu teléfono o tablet Android.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                <div>
                  <strong className="text-white block mb-1">Comparte el video</strong>
                  <p className="text-gray-400">
                    Encuentra el video que quieres guardar y toca el botón <strong className="text-white">"Compartir"</strong> 
                    (flecha en la parte derecha de la pantalla).
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                <div>
                  <strong className="text-white block mb-1">Copia el enlace</strong>
                  <p className="text-gray-400">
                    En el menú que aparece, desliza hacia la derecha y toca <strong className="text-white">"Copiar enlace"</strong>.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                <div>
                  <strong className="text-white block mb-1">Abre tu navegador</strong>
                  <p className="text-gray-400">
                    Abre Chrome, Firefox o cualquier navegador. Ve a <strong className="text-white">tiksnap.es</strong> y pega el enlace.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                <div>
                  <strong className="text-white block mb-1">Descarga el video</strong>
                  <p className="text-gray-400">
                    Toca "Descargar" y el video se guardará en tu galería o carpeta de Descargas.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-6 bg-green-900/20 border border-green-700 p-4 rounded-lg">
              <p className="text-sm text-green-300">
                <strong>✅ Ventaja Android:</strong> Los videos descargados aparecen automáticamente en tu app de Galería.
              </p>
            </div>
          </div>

          {/* Guía para iPhone */}
          <div className="bg-gray-900 p-4 md:p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center mb-6">
              <Apple className="w-6 h-6 md:w-8 md:h-8 text-[#FE2C55] mr-3 md:mr-4" />
              Descargar en iPhone o iPad (iOS/iPadOS)
            </h3>
            
            <div className="bg-yellow-900/20 border border-yellow-700 p-4 rounded-lg mb-6">
              <p className="text-sm text-yellow-300">
                <strong>⚠️ Importante para usuarios de iPhone:</strong> Debes usar el navegador{" "}
                <strong>Safari</strong> para que las descargas funcionen correctamente. Chrome o Firefox no funcionarán.
              </p>
            </div>

            <ol className="space-y-4 md:space-y-6 text-base md:text-lg">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                <div>
                  <strong className="text-white block mb-1">Copia el enlace desde TikTok</strong>
                  <p className="text-gray-400">
                    Abre la app de TikTok, encuentra tu video, toca <strong className="text-white">"Compartir"</strong> → 
                    <strong className="text-white"> "Copiar enlace"</strong>.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                <div>
                  <strong className="text-white block mb-1">Abre Safari (obligatorio)</strong>
                  <p className="text-gray-400">
                    Cierra TikTok y abre el navegador <strong className="text-white">Safari</strong> (el icono de la brújula azul).
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                <div>
                  <strong className="text-white block mb-1">Ve a TikSnap en Safari</strong>
                  <p className="text-gray-400">
                    Escribe <strong className="text-white">tiksnap.es</strong> en la barra de direcciones y pega el enlace copiado.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                <div>
                  <strong className="text-white block mb-1">Descarga el video</strong>
                  <p className="text-gray-400">
                    Toca "Descargar". Safari mostrará una ventana emergente. Toca <strong className="text-white">"Descargar"</strong> para confirmar.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#FE2C55] text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                <div>
                  <strong className="text-white block mb-1">Encuentra tu video</strong>
                  <p className="text-gray-400 mb-2">
                    El video se guarda en la app <strong className="text-white">"Archivos"</strong> de tu iPhone:
                  </p>
                  <div className="flex items-center text-sm bg-gray-800 p-3 rounded-lg border border-gray-700">
                    <span className="text-gray-300">App Archivos</span>
                    <ArrowRight className="w-4 h-4 mx-2 text-[#FE2C55]" />
                    <span className="text-gray-300">Descargas</span>
                    <ArrowRight className="w-4 h-4 mx-2 text-[#FE2C55]" />
                    <span className="text-gray-300">Tu video</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Desde ahí puedes guardarlo en Fotos tocando el botón de compartir.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-6 bg-purple-900/20 border border-purple-700 p-4 rounded-lg">
              <p className="text-sm text-purple-300">
                <strong>📱 Guardar en Fotos:</strong> Abre el video desde Archivos, toca el botón compartir (cuadrado con flecha) 
                y selecciona "Guardar video" para añadirlo a tu galería de Fotos.
              </p>
            </div>
          </div>
        </div>

        {/* Tips y Trucos */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 md:p-8 rounded-2xl border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            💡 Tips y Trucos Profesionales
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <CheckCircle className="w-6 h-6 text-[#FE2C55] mb-3" />
              <h3 className="font-bold text-white mb-2">Descarga Múltiple</h3>
              <p className="text-sm text-gray-400">
                Puedes descargar tantos videos como quieras. No hay límites diarios ni restricciones.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <CheckCircle className="w-6 h-6 text-[#FE2C55] mb-3" />
              <h3 className="font-bold text-white mb-2">Calidad Original</h3>
              <p className="text-sm text-gray-400">
                Siempre descargamos en la máxima calidad disponible (hasta 1080p HD). Sin pérdida de calidad.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <CheckCircle className="w-6 h-6 text-[#FE2C55] mb-3" />
              <h3 className="font-bold text-white mb-2">Solo Audio (MP3)</h3>
              <p className="text-sm text-gray-400">
                Si solo necesitas la música, selecciona la opción MP3 para descargar únicamente el audio.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <CheckCircle className="w-6 h-6 text-[#FE2C55] mb-3" />
              <h3 className="font-bold text-white mb-2">Funciona con Fotos</h3>
              <p className="text-sm text-gray-400">
                También puedes descargar las presentaciones de fotos (slideshows) de TikTok como video o imágenes individuales.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-[#FE2C55]/20 to-purple-600/20 p-6 md:p-12 rounded-2xl border border-[#FE2C55]/30">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para Descargar tus Videos Favoritos?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Empieza ahora mismo. Es gratis, rápido y no requiere registro.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center bg-[#FE2C55] hover:bg-[#FE2C55]/90 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-lg text-base md:text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <DownloadIcon className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
            Ir al Descargador
          </Link>
        </div>
      </div>
    </>
  );
}
