import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acerca de TikSnap - Quiénes Somos",
  description:
    "Conoce más sobre TikSnap, la herramienta gratuita para descargar videos de TikTok sin marca de agua. Nuestra misión es facilitar el acceso al contenido de forma responsable.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-12 text-gray-300 pt-3 md:pt-16 pb-20">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Acerca de TikSnap
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mt-4">
          Conoce más sobre nuestra herramienta gratuita para descargar videos de TikTok sin marca de agua.
        </p>
      </div>

      <div className="space-y-8 mt-8">
        <section className="border border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            ¿Qué es TikSnap?
          </h2>
          <p className="leading-relaxed text-gray-400">
            TikSnap es una herramienta web gratuita y de código abierto que permite a los usuarios descargar
            videos de TikTok sin marca de agua en alta calidad. Fundada en 2024, nuestra plataforma ha ayudado
            a miles de creadores de contenido, estudiantes y entusiastas de las redes sociales a guardar y
            utilizar videos de TikTok de manera responsable.
          </p>
        </section>

        <section className="border border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Nuestra Misión
          </h2>
          <p className="leading-relaxed text-gray-400">
            Creemos que el contenido digital debe ser accesible y portátil. Nuestra misión es proporcionar
            una herramienta simple, rápida y confiable que permita a las personas:
          </p>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Guardar contenido educativo para uso personal</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Crear compilaciones con crédito apropiado a los creadores originales</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Acceder a videos para proyectos escolares o académicos</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Preservar memorias y momentos especiales</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Reutilizar su propio contenido en otras plataformas</span>
            </li>
          </ul>
        </section>

        <section className="border border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Uso Responsable y Ético
          </h2>
          <div className="border border-yellow-700 rounded-2xl p-5 mb-4">
            <p className="text-yellow-200 leading-relaxed text-sm">
              <strong>Importante:</strong> TikSnap es una herramienta neutral que facilita el acceso a
              contenido público de TikTok. <strong>NO promovemos ni apoyamos la infracción de derechos de autor.</strong>
              Los usuarios son completamente responsables de asegurarse de que tienen el derecho legal de
              descargar y utilizar cualquier contenido.
            </p>
          </div>
          <p className="leading-relaxed text-gray-400 mb-4">
            Recomendamos encarecidamente:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Usar el contenido descargado solo para fines personales</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Dar crédito al creador original si compartes el contenido</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Pedir permiso explícito para uso comercial</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Respetar los derechos de autor y propiedad intelectual</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-700 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Simplicidad</h3>
              <p className="text-sm text-gray-400">
                Sin registro, sin límites, sin complicaciones. Una herramienta que funciona.
              </p>
            </div>
            <div className="border border-gray-700 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Privacidad</h3>
              <p className="text-sm text-gray-400">
                No almacenamos tus videos ni tu historial. Tu privacidad es sagrada.
              </p>
            </div>
            <div className="border border-gray-700 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Velocidad</h3>
              <p className="text-sm text-gray-400">
                Descargas instantáneas en HD. Sin esperas, sin anuncios invasivos.
              </p>
            </div>
            <div className="border border-gray-700 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Accesibilidad</h3>
              <p className="text-sm text-gray-400">
                100% gratis, para siempre. Funciona en cualquier dispositivo.
              </p>
            </div>
          </div>
        </section>

        <section className="border border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Nuestro Equipo Editorial
          </h2>
          <p className="leading-relaxed text-gray-400 mb-4">
            Detrás de las guías, artículos técnicos y tutoriales que publicamos, hay un equipo dedicado de expertos en marketing digital y desarrollo. Nos aseguramos de mantener un estándar de calidad riguroso (E-E-A-T) para proporcionarte información veraz, actualizada y útil sobre el ecosistema de creadores.
          </p>
          <div className="border border-gray-700 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex-shrink-0 border-2 border-[#FE2C55] overflow-hidden">
               <img src="https://ui-avatars.com/api/?name=Equipo+TikSnap&background=FE2C55&color=fff" alt="Logo Editorial" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-white text-xl mb-1">El Equipo TikSnap</h3>
              <p className="text-sm text-[#FE2C55] uppercase font-semibold tracking-wider mb-2">Expertos en Social Media y Desarrollo</p>
              <p className="text-sm text-gray-400">Nuestro compromiso es investigar a fondo los últimos cambios en algoritmos y proveer herramientas que realmente funcionen. Si lees una de nuestras guías, ten la certeza de que fue escrita y validada por creadores, para creadores.</p>
            </div>
          </div>
        </section>

          <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            Cómo Funciona Nuestro Sistema
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-gray-700 rounded-2xl p-6">
              <div className="text-3xl font-bold text-[#FE2C55] mb-3">1</div>
              <h3 className="font-bold text-white mb-2">Análisis de URL</h3>
              <p className="text-sm text-gray-400">
                Cuando pegas un enlace de TikTok, nuestro sistema analiza la URL para identificar
                el video específico. Este proceso es instantáneo y no se almacena ningún dato después
                de completar la solicitud.
              </p>
            </div>
            <div className="border border-gray-700 rounded-2xl p-6">
              <div className="text-3xl font-bold text-[#FE2C55] mb-3">2</div>
              <h3 className="font-bold text-white mb-2">Procesamiento del Contenido</h3>
              <p className="text-sm text-gray-400">
                Nuestro servidor procesa la solicitud para obtener la versión del video sin marca de
                agua o extraer la pista de audio en formato MP3. Todo el procesamiento ocurre en
                tiempo real, sin almacenamiento intermedio.
              </p>
            </div>
            <div className="border border-gray-700 rounded-2xl p-6">
              <div className="text-3xl font-bold text-[#FE2C55] mb-3">3</div>
              <h3 className="font-bold text-white mb-2">Descarga Directa</h3>
              <p className="text-sm text-gray-400">
                El archivo se transfiere directamente a tu dispositivo. No pasa por nuestros
                servidores de almacenamiento, lo que garantiza velocidades máximas y protege tu
                privacidad completamente.
              </p>
            </div>
          </div>
        </section>

        <section className="border border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Nuestra Historia
          </h2>
          <p className="leading-relaxed text-gray-400 mb-3">
            TikSnap nació en 2024 de una necesidad real: como creadores de contenido, nos frustraba
            la falta de herramientas confiables y seguras para descargar nuestros propios videos de
            TikTok sin la marca de agua. Las alternativas existentes estaban plagadas de anuncios
            invasivos, pop-ups engañosos e incluso malware.
          </p>
          <p className="leading-relaxed text-gray-400 mb-3">
            Decidimos crear algo mejor. Algo limpio, rápido y respetuoso con la privacidad del
            usuario. El resultado fue TikSnap: una herramienta que pone la experiencia del usuario
            por encima de todo, sin requerir registros, sin almacenar datos y sin comprometer la
            calidad del video.
          </p>
          <p className="leading-relaxed text-gray-400">
            Desde entonces, TikSnap ha crecido orgánicamente gracias a las recomendaciones de
            usuarios satisfechos. Continuamos mejorando la plataforma día a día, optimizando la
            velocidad de descarga, la compatibilidad con diferentes dispositivos y la calidad
            general del servicio.
          </p>
        </section>

        <section className="border border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Tecnología y Rendimiento
          </h2>
          <p className="leading-relaxed text-gray-400 mb-3">
            TikSnap está construido con tecnologías web de última generación para garantizar la
            mejor experiencia posible:
          </p>
          <ul className="space-y-2 mb-3">
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-white">Next.js y React:</strong> Para una interfaz rápida, responsiva y moderna</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-white">TypeScript:</strong> Para mayor seguridad y fiabilidad del código</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-white">Conexión HTTPS:</strong> Todas las comunicaciones están cifradas de extremo a extremo</span>
            </li>
            <li className="flex items-start">
              <Sparkles className="w-5 h-5 text-[#FE2C55] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400"><strong className="text-white">Diseño Responsivo:</strong> Experiencia óptima en cualquier tamaño de pantalla</span>
            </li>
          </ul>
          <p className="leading-relaxed text-gray-400">
            Nuestro sitio alcanza puntuaciones excelentes en Google PageSpeed Insights y cumple con los
            estándares de accesibilidad web (WCAG 2.1) para garantizar que cualquier persona pueda
            usar TikSnap sin barreras.
          </p>
        </section>

        <section className="border border-gray-700 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Compromiso Legal
          </h2>
          <p className="leading-relaxed text-gray-400">
            TikSnap es un servicio independiente y <strong className="text-white">no está afiliado, patrocinado ni asociado con
            TikTok o ByteDance Ltd.</strong> Cumplimos con todas las regulaciones aplicables, incluyendo
            el RGPD (Reglamento General de Protección de Datos) para usuarios europeos y la LOPD
            (Ley Orgánica de Protección de Datos) para usuarios en España.
          </p>
          <p className="mt-3 leading-relaxed text-gray-400">
            Respondemos rápidamente a solicitudes válidas de DMCA (Digital Millennium Copyright Act) y
            cooperamos activamente con los titulares de derechos de autor para proteger su contenido.
            Si eres creador de contenido y consideras que tu material está siendo utilizado de forma
            indebida, contáctanos y actuaremos en un plazo máximo de 48 horas.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            Formatos Soportados
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-700 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Video MP4 (HD)</h3>
              <p className="text-sm text-gray-400 mb-2">
                Descarga el video completo sin marca de agua en la máxima calidad disponible,
                generalmente 1080p Full HD.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>Resolución: hasta 1080p</li>
                <li>Formato: MP4 (H.264)</li>
                <li>Audio incluido</li>
              </ul>
            </div>
            <div className="border border-gray-700 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Audio MP3</h3>
              <p className="text-sm text-gray-400 mb-2">
                Extrae únicamente la pista de audio del video para reproducirla en cualquier
                reproductor de música.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>Calidad: alta fidelidad</li>
                <li>Formato: MP3</li>
                <li>Compatible universalmente</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border border-gray-700 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            ¿Tienes Preguntas?
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-6">
            Estamos aquí para ayudarte. Si tienes alguna pregunta, inquietud o sugerencia, no dudes en
            contactarnos.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center bg-[#FE2C55] hover:bg-[#FE2C55]/90 text-white font-bold px-8 py-4 rounded-full"
          >
            <span>Contáctanos</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </section>
      </div>
    </div>
  );
}
