import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de TikSnap - Quiénes Somos",
  description:
    "Conoce más sobre TikSnap, la herramienta gratuita para descargar videos de TikTok sin marca de agua. Nuestra misión es facilitar el acceso al contenido de forma responsable.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-300 space-y-8">
      <h1 className="text-4xl font-bold text-white">
        Acerca de TikSnap
      </h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            ¿Qué es TikSnap?
          </h2>
          <p className="leading-relaxed">
            TikSnap es una herramienta web gratuita y de código abierto que permite a los usuarios descargar
            videos de TikTok sin marca de agua en alta calidad. Fundada en 2024, nuestra plataforma ha ayudado
            a miles de creadores de contenido, estudiantes y entusiastas de las redes sociales a guardar y
            utilizar videos de TikTok de manera responsable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nuestra Misión
          </h2>
          <p className="leading-relaxed">
            Creemos que el contenido digital debe ser accesible y portátil. Nuestra misión es proporcionar
            una herramienta simple, rápida y confiable que permita a las personas:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 pl-4">
            <li>Guardar contenido educativo para uso personal</li>
            <li>Crear compilaciones con crédito apropiado a los creadores originales</li>
            <li>Acceder a videos para proyectos escolares o académicos</li>
            <li>Preservar memorias y momentos especiales</li>
            <li>Reutilizar su propio contenido en otras plataformas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Uso Responsable y Ético
          </h2>
          <div className="bg-yellow-900/20 border border-yellow-700 p-6 rounded-lg">
            <p className="text-yellow-200 leading-relaxed">
              <strong>Importante:</strong> TikSnap es una herramienta neutral que facilita el acceso a
              contenido público de TikTok. <strong>NO promovemos ni apoyamos la infracción de derechos de autor.</strong> 
              Los usuarios son completamente responsables de asegurarse de que tienen el derecho legal de
              descargar y utilizar cualquier contenido.
            </p>
          </div>
          <p className="mt-4 leading-relaxed">
            Recomendamos encarecidamente:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 pl-4">
            <li>Usar el contenido descargado solo para fines personales</li>
            <li>Dar crédito al creador original si compartes el contenido</li>
            <li>Pedir permiso explícito para uso comercial</li>
            <li>Respetar los derechos de autor y propiedad intelectual</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-2">🚀 Simplicidad</h3>
              <p className="text-sm text-gray-400">
                Sin registro, sin límites, sin complicaciones. Una herramienta que funciona.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-2">🔒 Privacidad</h3>
              <p className="text-sm text-gray-400">
                No almacenamos tus videos ni tu historial. Tu privacidad es sagrada.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-2">⚡ Velocidad</h3>
              <p className="text-sm text-gray-400">
                Descargas instantáneas en HD. Sin esperas, sin anuncios invasivos.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white mb-2">🌍 Accesibilidad</h3>
              <p className="text-sm text-gray-400">
                100% gratis, para siempre. Funciona en cualquier dispositivo.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Tecnología
          </h2>
          <p className="leading-relaxed">
            TikSnap está construido con tecnologías web modernas (Next.js, React, TypeScript) para
            garantizar una experiencia rápida, segura y confiable. Nuestro sitio alcanza puntuaciones
            perfectas en Google PageSpeed Insights y cumple con los más altos estándares de accesibilidad
            (WCAG 2.1).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Compromiso Legal
          </h2>
          <p className="leading-relaxed">
            TikSnap es un servicio independiente y <strong>no está afiliado, patrocinado ni asociado con
            TikTok o ByteDance Ltd.</strong> Cumplimos con todas las regulaciones aplicables, incluyendo
            GDPR (Reglamento General de Protección de Datos) para usuarios europeos.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            Respondemos rápidamente a solicitudes válidas de DMCA (Digital Millennium Copyright Act) y
            cooperamos con los titulares de derechos de autor para proteger su contenido.
          </p>
        </section>

        <section className="bg-gradient-to-r from-[#FE2C55]/10 to-purple-600/10 p-8 rounded-lg border border-[#FE2C55]/30">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ¿Tienes Preguntas?
          </h2>
          <p className="leading-relaxed mb-4">
            Estamos aquí para ayudarte. Si tienes alguna pregunta, inquietud o sugerencia, no dudes en
            contactarnos a través de nuestra página de contacto.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center bg-[#FE2C55] hover:bg-[#FE2C55]/90 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            Contáctanos
          </a>
        </section>
      </div>
    </div>
  );
}
