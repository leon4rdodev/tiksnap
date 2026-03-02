import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - TikSnap",
  description:
    "Lee la Política de Privacidad de TikSnap. Conoce cómo recopilamos, usamos y protegemos tu información personal al usar nuestro servicio de descarga de videos.",
  alternates: {
    canonical: "https://www.tiksnap.es/privacidad",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-300 space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">
          Política de Privacidad
        </h1>
        <p className="text-sm text-gray-500">
          Última actualización: 2 de marzo de 2026
        </p>
        <p className="mt-4 leading-relaxed">
          En TikSnap (accesible desde{" "}
          <a
            href="https://www.tiksnap.es"
            className="text-[#FE2C55] hover:underline"
          >
            www.tiksnap.es
          </a>
          ), la privacidad de nuestros visitantes es una prioridad fundamental.
          Esta Política de Privacidad describe de manera detallada qué
          información recopilamos, cómo la utilizamos, con quién la compartimos
          y cuáles son tus derechos en relación con tus datos personales.
        </p>
      </div>

      {/* 1. Responsable del Tratamiento */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          1. Responsable del Tratamiento de Datos
        </h2>
        <p className="leading-relaxed">
          El responsable del tratamiento de los datos personales recogidos a
          través de este sitio web es TikSnap, con domicilio operativo en
          República Dominicana. Para cualquier consulta relacionada con la
          privacidad, puedes contactarnos a través del correo electrónico:{" "}
          <a
            href="mailto:tiksnap.es@gmail.com"
            className="text-[#FE2C55] hover:underline"
          >
            tiksnap.es@gmail.com
          </a>
          .
        </p>
      </section>

      {/* 2. Información que Recopilamos */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          2. Información que Recopilamos
        </h2>
        <p className="leading-relaxed">
          TikSnap se diseñó con la privacidad como principio fundamental. No
          requerimos registro de cuentas ni solicitamos datos personales para
          utilizar nuestra herramienta de descarga. A continuación, detallamos
          los tipos de información que podemos recopilar:
        </p>

        <h3 className="text-lg font-semibold text-white mt-4">
          2.1 Información proporcionada voluntariamente
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Formulario de Contacto:</strong> Si nos envías un mensaje a
            través de nuestra página de contacto, recopilaremos tu nombre,
            dirección de correo electrónico y el contenido de tu mensaje. Esta
            información se utiliza exclusivamente para responder a tu consulta.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4">
          2.2 Información recopilada automáticamente
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Datos de Registro (Log Files):</strong> Nuestros servidores
            registran automáticamente cierta información técnica cuando visitas
            nuestro sitio, incluyendo tu dirección IP, tipo y versión de
            navegador, sistema operativo, páginas visitadas, fecha y hora de
            acceso, y la URL de referencia. Estos datos se utilizan para
            analizar tendencias, administrar el sitio y garantizar la seguridad
            del servicio. No están vinculados a información de identificación
            personal.
          </li>
          <li>
            <strong>Datos de Uso del Servicio:</strong> Cuando utilizas nuestra
            herramienta de descarga, procesamos temporalmente la URL del video de
            TikTok que proporcionas. Esta URL no se almacena de forma permanente
            ni se asocia con tu identidad. El procesamiento se realiza en tiempo
            real y los datos se eliminan inmediatamente después de completar la
            descarga.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-4">
          2.3 Información que NO recopilamos
        </h3>
        <p className="leading-relaxed">
          Es importante destacar que TikSnap <strong>NO</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Almacena videos descargados en nuestros servidores</li>
          <li>Guarda tu historial de descargas</li>
          <li>Requiere la creación de cuentas de usuario</li>
          <li>Recopila datos financieros o de pago</li>
          <li>Accede a tu cuenta de TikTok ni a tus credenciales</li>
        </ul>
      </section>

      {/* 3. Cookies */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          3. Uso de Cookies y Tecnologías Similares
        </h2>
        <p className="leading-relaxed">
          TikSnap utiliza cookies y tecnologías de seguimiento similares para
          mejorar tu experiencia de navegación y permitir el funcionamiento de
          servicios de terceros. A continuación, describimos los tipos de cookies
          que utilizamos:
        </p>

        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden mt-4">
          <div className="grid grid-cols-3 gap-0 border-b border-gray-700 bg-gray-800">
            <div className="p-3 font-semibold text-white text-sm">
              Tipo de Cookie
            </div>
            <div className="p-3 font-semibold text-white text-sm">
              Propósito
            </div>
            <div className="p-3 font-semibold text-white text-sm">
              Duración
            </div>
          </div>
          <div className="grid grid-cols-3 gap-0 border-b border-gray-700">
            <div className="p-3 text-sm">Esenciales</div>
            <div className="p-3 text-sm">
              Necesarias para el funcionamiento del sitio (ej: preferencia de
              consentimiento de cookies)
            </div>
            <div className="p-3 text-sm">1 año</div>
          </div>
          <div className="grid grid-cols-3 gap-0 border-b border-gray-700">
            <div className="p-3 text-sm">Analíticas</div>
            <div className="p-3 text-sm">
              Nos ayudan a entender cómo los visitantes interactúan con el
              sitio para mejorar la experiencia
            </div>
            <div className="p-3 text-sm">2 años</div>
          </div>
          <div className="grid grid-cols-3 gap-0">
            <div className="p-3 text-sm">Publicitarias</div>
            <div className="p-3 text-sm">
              Utilizadas por Google AdSense para mostrar anuncios relevantes y
              personalizados
            </div>
            <div className="p-3 text-sm">Variable</div>
          </div>
        </div>

        <p className="leading-relaxed mt-4">
          Puedes gestionar tus preferencias de cookies a través del banner de
          consentimiento que aparece al visitar nuestro sitio por primera vez.
          También puedes configurar tu navegador para bloquear o eliminar
          cookies, aunque esto podría afectar la funcionalidad del sitio.
        </p>
      </section>

      {/* 4. Publicidad */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          4. Publicidad de Terceros (Google AdSense)
        </h2>
        <p className="leading-relaxed">
          TikSnap utiliza Google AdSense para mostrar anuncios en nuestro sitio
          web. Google, como proveedor de publicidad externo, puede utilizar
          cookies y tecnologías de seguimiento para personalizar los anuncios que
          ves en función de tus visitas a este y otros sitios web. El uso de
          cookies publicitarias por parte de Google está regulado por sus propias
          políticas de privacidad. Para obtener más información sobre cómo Google
          utiliza tus datos y cómo puedes controlar la personalización de
          anuncios, visita:{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FE2C55] hover:underline break-all"
          >
            policies.google.com/technologies/ads
          </a>
          .
        </p>
        <p className="leading-relaxed">
          Puedes desactivar la publicidad personalizada visitando la{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FE2C55] hover:underline"
          >
            Configuración de Anuncios de Google
          </a>{" "}
          o mediante la plataforma{" "}
          <a
            href="https://optout.aboutads.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FE2C55] hover:underline"
          >
            Digital Advertising Alliance
          </a>
          .
        </p>
      </section>

      {/* 5. Uso de la Información */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          5. Cómo Utilizamos tu Información
        </h2>
        <p className="leading-relaxed">
          La información que recopilamos se utiliza exclusivamente para los
          siguientes fines:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            Proporcionar y mantener el servicio de descarga de videos
          </li>
          <li>
            Responder a tus consultas y solicitudes de soporte técnico
          </li>
          <li>
            Analizar el uso del sitio para mejorar la experiencia del usuario
          </li>
          <li>
            Detectar, prevenir y abordar problemas técnicos y de seguridad
          </li>
          <li>
            Cumplir con obligaciones legales aplicables
          </li>
          <li>
            Mostrar anuncios relevantes a través de Google AdSense
          </li>
        </ul>
      </section>

      {/* 6. Compartir Información */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          6. Compartir Información con Terceros
        </h2>
        <p className="leading-relaxed">
          TikSnap no vende, alquila ni comercializa tu información personal.
          Solo compartimos información con terceros en las siguientes
          circunstancias limitadas:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Proveedores de servicios:</strong> Compartimos datos
            técnicos limitados con proveedores de alojamiento web y servicios de
            infraestructura necesarios para operar el sitio.
          </li>
          <li>
            <strong>Publicidad:</strong> Google AdSense puede recopilar datos
            de navegación a través de cookies para personalizar anuncios, según
            se describe en la sección anterior.
          </li>
          <li>
            <strong>Requerimientos legales:</strong> Podemos divulgar
            información si la ley lo requiere o en respuesta a solicitudes
            legales válidas de autoridades públicas.
          </li>
        </ul>
      </section>

      {/* 7. Seguridad */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          7. Seguridad de los Datos
        </h2>
        <p className="leading-relaxed">
          La seguridad de tu información es importante para nosotros.
          Implementamos medidas de seguridad técnicas y organizativas estándar de
          la industria para proteger tus datos, incluyendo cifrado HTTPS/TLS en
          todas las comunicaciones, acceso restringido a los servidores y
          monitoreo continuo de actividad sospechosa. Sin embargo, ningún método
          de transmisión por Internet es 100% seguro, por lo que no podemos
          garantizar su seguridad absoluta.
        </p>
      </section>

      {/* 8. Retención de Datos */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          8. Retención de Datos
        </h2>
        <p className="leading-relaxed">
          Conservamos los datos personales únicamente durante el tiempo necesario
          para cumplir con los fines para los que fueron recopilados:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Datos de contacto:</strong> Se conservan hasta que se
            resuelva la consulta y durante un período adicional de 12 meses
            como referencia.
          </li>
          <li>
            <strong>Datos de registro (logs):</strong> Se conservan durante un
            máximo de 90 días y luego se eliminan automáticamente.
          </li>
          <li>
            <strong>URLs de descarga:</strong> No se almacenan; se procesan en
            tiempo real y se eliminan inmediatamente.
          </li>
        </ul>
      </section>

      {/* 9. Derechos del Usuario */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          9. Tus Derechos (RGPD / GDPR)
        </h2>
        <p className="leading-relaxed">
          Si eres residente de la Unión Europea o del Espacio Económico Europeo,
          tienes los siguientes derechos en relación con tus datos personales,
          garantizados por el Reglamento General de Protección de Datos (RGPD):
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h4 className="font-bold text-white mb-1">📋 Derecho de Acceso</h4>
            <p className="text-sm text-gray-400">
              Tienes derecho a solicitar una copia de los datos personales que
              tengamos sobre ti.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h4 className="font-bold text-white mb-1">
              ✏️ Derecho de Rectificación
            </h4>
            <p className="text-sm text-gray-400">
              Puedes solicitar la corrección de datos inexactos o incompletos.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h4 className="font-bold text-white mb-1">
              🗑️ Derecho de Supresión
            </h4>
            <p className="text-sm text-gray-400">
              Puedes solicitar la eliminación de tus datos personales cuando ya
              no sean necesarios.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h4 className="font-bold text-white mb-1">
              📦 Derecho de Portabilidad
            </h4>
            <p className="text-sm text-gray-400">
              Tienes derecho a recibir tus datos en un formato estructurado y
              legible por máquina.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h4 className="font-bold text-white mb-1">
              ⛔ Derecho de Oposición
            </h4>
            <p className="text-sm text-gray-400">
              Puedes oponerte al procesamiento de tus datos en determinadas
              circunstancias.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h4 className="font-bold text-white mb-1">
              🔒 Derecho de Limitación
            </h4>
            <p className="text-sm text-gray-400">
              Puedes solicitar la limitación del tratamiento de tus datos en
              ciertos casos.
            </p>
          </div>
        </div>
        <p className="leading-relaxed mt-4">
          Para ejercer cualquiera de estos derechos, contáctanos en{" "}
          <a
            href="mailto:tiksnap.es@gmail.com"
            className="text-[#FE2C55] hover:underline"
          >
            tiksnap.es@gmail.com
          </a>
          . Responderemos a tu solicitud dentro de los 30 días siguientes.
          También tienes derecho a presentar una reclamación ante la autoridad de
          protección de datos competente de tu país.
        </p>
      </section>

      {/* 10. Privacidad de Menores */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          10. Privacidad de Menores
        </h2>
        <p className="leading-relaxed">
          TikSnap no está dirigido a personas menores de 13 años. No recopilamos
          intencionadamente información personal de niños menores de 13 años. Si
          eres padre o tutor y descubres que tu hijo nos ha proporcionado datos
          personales, contáctanos inmediatamente en{" "}
          <a
            href="mailto:tiksnap.es@gmail.com"
            className="text-[#FE2C55] hover:underline"
          >
            tiksnap.es@gmail.com
          </a>{" "}
          y tomaremos las medidas necesarias para eliminar dicha información de
          nuestros servidores.
        </p>
      </section>

      {/* 11. Enlaces a Terceros */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          11. Enlaces a Sitios de Terceros
        </h2>
        <p className="leading-relaxed">
          Nuestro sitio puede contener enlaces a otros sitios web que no son
          operados por nosotros (incluyendo TikTok, redes sociales y servicios de
          publicidad). No tenemos control sobre el contenido ni las prácticas de
          privacidad de esos sitios. Te recomendamos revisar la Política de
          Privacidad de cada sitio que visites. TikSnap no se hace responsable
          del contenido, las políticas de privacidad o las prácticas de sitios web
          de terceros.
        </p>
      </section>

      {/* 12. Cambios en la Política */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          12. Cambios en Esta Política de Privacidad
        </h2>
        <p className="leading-relaxed">
          Nos reservamos el derecho de actualizar esta Política de Privacidad en
          cualquier momento. Cualquier cambio será publicado en esta página con
          una fecha de &quot;última actualización&quot; revisada. Te recomendamos
          revisar esta política periódicamente para mantenerte informado sobre
          cómo protegemos tu información. El uso continuado del servicio después
          de la publicación de los cambios constituye tu aceptación de la
          política revisada.
        </p>
      </section>

      {/* 13. Consentimiento */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">13. Consentimiento</h2>
        <p className="leading-relaxed">
          Al utilizar nuestro sitio web, aceptas nuestra Política de Privacidad y
          consientes el tratamiento de la información según lo descrito en este
          documento. Si no estás de acuerdo con esta política, te rogamos que no
          utilices nuestro servicio.
        </p>
      </section>

      {/* Contacto */}
      <section className="bg-gradient-to-r from-[#FE2C55]/10 to-purple-600/10 p-6 rounded-lg border border-[#FE2C55]/30 mt-8">
        <h2 className="text-xl font-semibold text-white mb-3">
          ¿Preguntas sobre Privacidad?
        </h2>
        <p className="leading-relaxed mb-4">
          Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad
          o sobre el tratamiento de tus datos personales, no dudes en
          contactarnos:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:tiksnap.es@gmail.com"
              className="text-[#FE2C55] hover:underline"
            >
              tiksnap.es@gmail.com
            </a>
          </li>
          <li>
            <strong>Página de contacto:</strong>{" "}
            <a href="/contacto" className="text-[#FE2C55] hover:underline">
              tiksnap.es/contacto
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
