import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Servicio - TikSnap",
  description:
    "Lee los Términos y Condiciones de uso de TikSnap. Conoce las reglas, limitaciones y responsabilidades al usar nuestro servicio gratuito de descarga de videos de TikTok.",
  alternates: {
    canonical: "https://www.tiksnap.es/terminos",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-300 space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">
          Términos y Condiciones de Servicio
        </h1>
        <p className="text-sm text-gray-500">
          Última actualización: 2 de marzo de 2026
        </p>
        <p className="mt-4 leading-relaxed">
          Bienvenido a TikSnap. Al acceder y utilizar nuestro sitio web (
          <a
            href="https://www.tiksnap.es"
            className="text-[#FE2C55] hover:underline"
          >
            www.tiksnap.es
          </a>
          ) y los servicios que ofrecemos (en adelante, el &quot;Servicio&quot;),
          aceptas cumplir con estos Términos y Condiciones. Si no estás de
          acuerdo con alguna parte de estos términos, te rogamos que no utilices
          nuestro Servicio.
        </p>
      </div>

      {/* 1. Descripción del Servicio */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          1. Descripción del Servicio
        </h2>
        <p className="leading-relaxed">
          TikSnap es una herramienta web gratuita que permite a los usuarios
          descargar videos y extraer audio de la plataforma TikTok. Nuestro
          servicio actúa como un intermediario técnico que facilita la descarga
          de contenido público disponible en TikTok. TikSnap no aloja, almacena
          ni redistribuye contenido de TikTok en sus propios servidores.
        </p>
        <p className="leading-relaxed">
          El Servicio se ofrece de forma gratuita y está disponible tal como se
          presenta (&quot;as is&quot;). Nos reservamos el derecho de modificar,
          suspender o discontinuar cualquier aspecto del Servicio en cualquier
          momento sin previo aviso.
        </p>
      </section>

      {/* 2. Uso Aceptable */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          2. Uso Aceptable del Servicio
        </h2>
        <p className="leading-relaxed">
          Al usar TikSnap, te comprometes a utilizar el Servicio de manera
          responsable y legal. En particular, aceptas que:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            Utilizarás el contenido descargado principalmente para{" "}
            <strong>uso personal y no comercial</strong>, salvo que cuentes con
            la autorización expresa del titular de los derechos de autor.
          </li>
          <li>
            No utilizarás el Servicio para descargar contenido con el fin de
            redistribuirlo de forma masiva, venderlo o usarlo de manera que
            infrinja los derechos de terceros.
          </li>
          <li>
            Es tu responsabilidad verificar que tienes los derechos necesarios
            para descargar y utilizar cualquier contenido obtenido a través de
            TikSnap.
          </li>
          <li>
            Darás crédito al creador original cuando compartas contenido
            descargado de TikTok.
          </li>
          <li>
            No intentarás interferir, sobrecargar ni comprometer la seguridad
            o el funcionamiento del Servicio mediante técnicas automatizadas,
            bots o actividades maliciosas.
          </li>
        </ul>
      </section>

      {/* 3. Usos Prohibidos */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          3. Usos Prohibidos
        </h2>
        <p className="leading-relaxed">
          Queda expresamente prohibido utilizar TikSnap para los siguientes
          fines:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            Descargar contenido protegido por derechos de autor con el propósito
            de infringir dichos derechos
          </li>
          <li>
            Replicar, revender o reutilizar comercialmente el contenido
            descargado sin la debida autorización
          </li>
          <li>
            Crear servicios competidores o derivados utilizando nuestra
            infraestructura
          </li>
          <li>
            Enviar solicitudes automatizadas masivas que puedan sobrecargar
            nuestros sistemas
          </li>
          <li>
            Cualquier actividad que viole las leyes locales, nacionales o
            internacionales aplicables
          </li>
          <li>
            Intentar eludir las medidas de seguridad o restricciones del
            Servicio
          </li>
        </ul>
        <p className="leading-relaxed">
          Nos reservamos el derecho de restringir o bloquear el acceso a
          cualquier usuario que incumpla estos términos.
        </p>
      </section>

      {/* 4. Propiedad Intelectual */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          4. Propiedad Intelectual
        </h2>
        <p className="leading-relaxed">
          Todo el contenido del sitio web de TikSnap, incluyendo pero no
          limitado al diseño, logotipos, textos, gráficos, código fuente,
          interfaces de usuario y la marca &quot;TikSnap&quot;, es propiedad
          intelectual de TikSnap y está protegido por las leyes de derechos de
          autor y marcas registradas.
        </p>
        <p className="leading-relaxed">
          Los videos descargados a través de nuestro Servicio son propiedad de
          sus respectivos creadores y/o titulares de derechos de autor. TikSnap
          no reclama ningún derecho de propiedad sobre el contenido de TikTok.
          TikTok y su logotipo son marcas registradas de ByteDance Ltd. TikSnap
          no está afiliado, patrocinado ni asociado con TikTok o ByteDance.
        </p>
      </section>

      {/* 5. DMCA */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          5. Política de Derechos de Autor y DMCA
        </h2>
        <p className="leading-relaxed">
          TikSnap respeta los derechos de propiedad intelectual de terceros. Si
          eres titular de derechos de autor y consideras que nuestro servicio
          facilita el acceso no autorizado a tu contenido, puedes enviarnos una
          notificación de infracción conforme a la Ley de Derechos de Autor de
          la Era Digital (DMCA). Tu notificación debe incluir:
        </p>
        <ol className="list-decimal list-inside space-y-2 pl-4">
          <li>
            Identificación de la obra protegida por derechos de autor que
            consideras ha sido infringida
          </li>
          <li>
            Descripción del material que consideras infractor y su ubicación en
            nuestro sitio
          </li>
          <li>Tu información de contacto (nombre, dirección, email, teléfono)</li>
          <li>
            Una declaración de buena fe de que el uso no está autorizado por el
            titular de los derechos
          </li>
          <li>
            Una declaración bajo pena de perjurio de que la información en tu
            notificación es exacta
          </li>
          <li>Tu firma física o electrónica</li>
        </ol>
        <p className="leading-relaxed mt-3">
          Las notificaciones de DMCA deben enviarse a:{" "}
          <a
            href="mailto:tiksnap.es@gmail.com"
            className="text-[#FE2C55] hover:underline"
          >
            tiksnap.es@gmail.com
          </a>{" "}
          con el asunto &quot;Notificación DMCA&quot;. Nos comprometemos a
          responder a todas las notificaciones válidas en un plazo máximo de 48
          horas.
        </p>
      </section>

      {/* 6. Limitación de Responsabilidad */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          6. Limitación de Responsabilidad
        </h2>
        <div className="bg-yellow-900/20 border border-yellow-700 p-6 rounded-lg">
          <p className="text-yellow-200 leading-relaxed">
            El Servicio se proporciona &quot;TAL CUAL&quot; y &quot;SEGÚN
            DISPONIBILIDAD&quot;, sin garantías de ningún tipo, ya sean
            expresas o implícitas, incluyendo, entre otras, las garantías de
            comerciabilidad, idoneidad para un propósito particular y no
            infracción.
          </p>
        </div>
        <p className="leading-relaxed mt-3">
          TikSnap no será responsable en ningún caso de:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            Daños directos, indirectos, incidentales, especiales o
            consecuentes derivados del uso o la imposibilidad de usar el
            Servicio
          </li>
          <li>
            La precisión, integridad o utilidad de la información proporcionada
            por el Servicio
          </li>
          <li>
            Interrupciones, errores, virus u otros elementos nocivos que puedan
            afectar tu dispositivo
          </li>
          <li>
            El contenido de los videos descargados, que es responsabilidad
            exclusiva de los creadores originales y de TikTok
          </li>
          <li>
            Las acciones de los usuarios con el contenido descargado a través
            de nuestro Servicio
          </li>
        </ul>
      </section>

      {/* 7. Indemnización */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">7. Indemnización</h2>
        <p className="leading-relaxed">
          Aceptas defender, indemnizar y eximir de responsabilidad a TikSnap, sus
          directores, empleados, agentes y afiliados, frente a cualquier
          reclamación, demanda, pérdida, responsabilidad y gasto (incluyendo
          honorarios razonables de abogados) que surjan de o estén relacionados
          con tu uso del Servicio, tu violación de estos Términos, o tu
          infracción de los derechos de terceros, incluyendo derechos de
          propiedad intelectual.
        </p>
      </section>

      {/* 8. Enlaces Externos */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          8. Enlaces a Sitios Externos
        </h2>
        <p className="leading-relaxed">
          Nuestro Servicio puede contener enlaces a sitios web de terceros que no
          son propiedad ni están controlados por TikSnap. No tenemos control
          sobre el contenido, las políticas de privacidad ni las prácticas de
          sitios web de terceros, y no asumimos ninguna responsabilidad por
          ellos. Te recomendamos leer los términos y condiciones de cada sitio
          web que visites.
        </p>
      </section>

      {/* 9. Modificaciones */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          9. Modificaciones a los Términos
        </h2>
        <p className="leading-relaxed">
          Nos reservamos el derecho de modificar o reemplazar estos Términos en
          cualquier momento a nuestra entera discreción. Si realizamos cambios
          materiales, publicaremos los nuevos Términos en esta página con una
          fecha de &quot;última actualización&quot; revisada. Es tu
          responsabilidad revisar estos Términos periódicamente. El uso
          continuado del Servicio después de la publicación de cualquier cambio
          constituye la aceptación de dichos cambios.
        </p>
      </section>

      {/* 10. Ley Aplicable */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          10. Ley Aplicable y Jurisdicción
        </h2>
        <p className="leading-relaxed">
          Estos Términos se regirán e interpretarán de conformidad con las leyes
          vigentes en la República Dominicana, sin tener en cuenta las
          disposiciones sobre conflictos de leyes. Cualquier controversia
          derivada de estos Términos se someterá a la jurisdicción exclusiva de
          los tribunales competentes de la República Dominicana.
        </p>
      </section>

      {/* 11. Divisibilidad */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          11. Divisibilidad
        </h2>
        <p className="leading-relaxed">
          Si alguna disposición de estos Términos se considera inválida, ilegal o
          inaplicable por un tribunal competente, dicha disposición será
          modificada e interpretada de manera que cumpla los objetivos de la
          disposición original en la mayor medida posible según la ley
          aplicable, y las disposiciones restantes continuarán en pleno vigor y
          efecto.
        </p>
      </section>

      {/* 12. Acuerdo Completo */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">
          12. Acuerdo Completo
        </h2>
        <p className="leading-relaxed">
          Estos Términos constituyen el acuerdo completo entre tú y TikSnap con
          respecto al uso del Servicio, y reemplazan cualquier acuerdo anterior,
          ya sea escrito u oral, entre las partes. La renuncia a cualquier
          disposición de estos Términos no se considerará una renuncia adicional o
          continuada de dicha disposición ni de cualquier otra.
        </p>
      </section>

      {/* Contacto */}
      <section className="bg-gradient-to-r from-[#FE2C55]/10 to-purple-600/10 p-6 rounded-lg border border-[#FE2C55]/30 mt-8">
        <h2 className="text-xl font-semibold text-white mb-3">
          ¿Preguntas sobre estos Términos?
        </h2>
        <p className="leading-relaxed mb-4">
          Si tienes alguna pregunta o inquietud sobre estos Términos y
          Condiciones, no dudes en contactarnos:
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
