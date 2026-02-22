import React from "react";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    avatar: string; // URL al avatar
  };
  image: string; // URL a la imagen de portada
  tags: string[];
  content: React.ReactNode;
}

// --- BASE DE DATOS DE ARTÍCULOS ---
// Para añadir un nuevo post, simplemente añade un nuevo objeto a este array.

export const posts: Post[] = [
  // --- POST 1 ---
  {
    slug: "guia-definitiva-algoritmo-tiktok",
    title: "El Algoritmo de TikTok en 2025: La Guía Definitiva para Crecer",
    description:
      "Desentrañamos el misterioso algoritmo de TikTok. Aprende los factores clave que determinan la viralidad y cómo puedes usarlos a tu favor para crecer en la plataforma.",
    date: "15 de julio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiktok-algo/1200/630",
    tags: ["Algoritmo", "Marketing", "Crecimiento"],
    content: (
      <div className="space-y-6">
        <p>
          El algoritmo de TikTok es el motor que impulsa la plataforma, un
          sistema complejo diseñado para mantener a los usuarios enganchados
          mostrándoles un flujo interminable de contenido altamente
          personalizado. Entender cómo funciona es el primer paso para cualquier
          creador que aspire a la viralidad. En esta guía, desglosaremos sus
          componentes clave.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Factores Clave de Clasificación
        </h2>
        <p>
          TikTok considera cientos de señales, pero estas son las más
          importantes:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Interacciones del Usuario:</strong> La señal más fuerte.
            Incluye los videos que te gustan, compartes, comentas, y las cuentas
            que sigues. También considera el tiempo de visualización: si un
            usuario ve tu video completo o lo repite, es una señal muy positiva.
          </li>
          <li>
            <strong>Información del Video:</strong> Incluye los detalles de tu
            video, como los hashtags que usas, los sonidos o canciones, y los
            textos en pantalla. Usar sonidos y hashtags en tendencia es una
            forma directa de decirle al algoritmo a qué comunidad pertenece tu
            video.
          </li>
          <li>
            <strong>Configuración del Dispositivo y la Cuenta:</strong> Factores
            como el idioma de preferencia, la ubicación (país) y el tipo de
            dispositivo. Son señales más débiles pero ayudan a localizar el
            contenido.
          </li>
        </ul>
        <blockquote className="border-l-4 border-[#FE2C55] pl-4 italic text-gray-400">
          "El objetivo final del algoritmo no es encontrar videos que te gusten,
          sino crear un feed que te impida cerrar la aplicación."
        </blockquote>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Mitos Comunes vs. Realidad
        </h2>
        <p>Existen muchos mitos. Aclaremos algunos:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Mito:</strong> Necesitas tener muchos seguidores para ser
            viral. <strong>Realidad:</strong> Falso. El algoritmo prioriza la
            calidad y la relevancia del video individual sobre la popularidad de
            la cuenta.
          </li>
          <li>
            <strong>Mito:</strong> Publicar a una hora específica garantiza el
            éxito. <strong>Realidad:</strong> Ayuda, pero no lo garantiza. Es
            más importante la consistencia y la calidad del contenido.
          </li>
        </ul>
        <p>
          En conclusión, enfócate en crear contenido auténtico y de alta
          retención. Experimenta con tendencias, pero siempre aportando tu toque
          personal. El algoritmo recompensará tu creatividad.
        </p>
      </div>
    ),
  },
  // --- POST 2 ---
  {
    slug: "como-usar-pantalla-verde-tiktok",
    title: "Cómo Usar el Efecto Pantalla Verde de TikTok: Guía Paso a Paso",
    description:
      "El efecto de pantalla verde es una de las herramientas más creativas de TikTok. Te enseñamos paso a paso cómo usarlo para llevar tus videos al siguiente nivel.",
    date: "14 de julio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-greenscreen/1200/630",
    tags: ["Tutorial", "Edición", "Efectos"],
    content: (
      <div className="space-y-6">
        <p>
          El efecto Pantalla Verde (Green Screen) es tu pasaporte a la
          creatividad sin límites en TikTok. Te permite reemplazar tu fondo con
          cualquier imagen o video de tu galería. Es perfecto para reacciones,
          sketches, explicaciones y mucho más. Aquí te mostramos cómo dominarlo.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Guía de Uso Paso a Paso
        </h2>
        <ol className="list-decimal list-inside space-y-4 pl-4">
          <li>
            <strong>Abre la cámara de TikTok:</strong> Pulsa el botón '+' en la
            parte inferior de la pantalla para empezar a crear un nuevo video.
          </li>
          <li>
            <strong>Selecciona "Efectos":</strong> A la izquierda del botón de
            grabar, encontrarás el icono de "Efectos". Púlsalo.
          </li>
          <li>
            <strong>Encuentra el Efecto Pantalla Verde:</strong> Navega por la
            galería de efectos. Usualmente se encuentra en la pestaña
            "Tendencias" o "Verde". Hay varias versiones, la más común es un
            icono de una imagen con una persona recortada.
          </li>
          <li>
            <strong>Elige tu Fondo:</strong> Una vez seleccionado el efecto,
            aparecerá una ventana con las imágenes y videos de tu galería.
            Selecciona el que quieres usar como fondo.
          </li>
          <li>
            <strong>¡Graba tu Video!:</strong> Con el fondo ya cargado, puedes
            empezar a grabar. Puedes moverte, pellizcar la pantalla para cambiar
            tu tamaño o posición sobre el fondo.
          </li>
          <li>
            <strong>Edita y Publica:</strong> Una vez grabado, añade texto,
            sonidos y otros efectos como harías con cualquier otro video antes
            de publicarlo.
          </li>
        </ol>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Ideas Creativas para Empezar
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Comenta noticias:</strong> Usa una captura de pantalla de un
            titular como fondo y da tu opinión.
          </li>
          <li>
            <strong>Viaja sin moverte:</strong> Coloca una foto de un lugar
            exótico y actúa como si estuvieras allí.
          </li>
          <li>
            <strong>Analiza escenas de películas:</strong> Usa un fotograma de
            una película como fondo para explicar un detalle oculto.
          </li>
        </ul>
        <p>
          La clave es la experimentación. ¡Prueba diferentes fondos y conceptos
          para ver qué resuena con tu audiencia!
        </p>
      </div>
    ),
  },
  // --- POST 3 ---
  {
    slug: "monetizar-tiktok-guia-completa",
    title: "Monetización en TikTok: 5 Formas Reales de Ganar Dinero",
    description:
      "Más allá del Fondo para Creadores, existen múltiples vías para monetizar tu presencia en TikTok. Exploramos las 5 estrategias más efectivas para convertir tus vistas en ingresos.",
    date: "12 de julio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-monetize/1200/630",
    tags: ["Monetización", "Negocios", "Creadores"],
    content: (
      <div className="space-y-6">
        <p>
          Convertir tu pasión por TikTok en una fuente de ingresos es el sueño
          de muchos creadores. Afortunadamente, las opciones son más variadas
          que nunca. Aquí te presentamos las 5 formas más populares y efectivas
          de monetizar tu cuenta.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          1. Fondo para Creadores de TikTok
        </h2>
        <p>
          Es el método oficial de TikTok. Paga a los creadores elegibles en
          función del rendimiento de sus videos. Necesitas al menos 10,000
          seguidores y 100,000 vistas en los últimos 30 días para aplicar. Es un
          buen comienzo, pero los pagos pueden ser modestos.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          2. Marketing de Afiliados
        </h2>
        <p>
          Promociona productos de otras empresas y gana una comisión por cada
          venta realizada a través de tu enlace de afiliado único. Es ideal para
          nichos como moda, tecnología o belleza. Puedes colocar los enlaces en
          tu biografía o usar herramientas como Linktree.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          3. Contenido Patrocinado (Brand Deals)
        </h2>
        <p>
          Las marcas te pagan directamente para que crees contenido
          promocionando sus productos o servicios. Esta es una de las formas más
          lucrativas de monetización. Necesitarás construir una audiencia sólida
          y comprometida para atraer a las marcas.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          4. Venta de Productos o Servicios Propios
        </h2>
        <p>
          Usa TikTok como un canal de marketing para tu propio negocio. ¿Vendes
          merchandising, cursos online, ofreces coaching o tienes una tienda de
          dropshipping? TikTok es una plataforma increíble para llegar a nuevos
          clientes.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          5. Regalos en TikTok LIVE
        </h2>
        <p>
          Durante las transmisiones en vivo, tus seguidores pueden enviarte
          "Regalos" virtuales que compran con monedas de TikTok. Estos regalos
          se pueden convertir en "Diamantes", que luego puedes canjear por
          dinero real. Requiere una audiencia que disfrute de interactuar
          contigo en tiempo real.
        </p>
      </div>
    ),
  },
  // --- POST 4 ---
  {
    slug: "estrategia-hashtags-tiktok",
    title:
      "Estrategia de Hashtags en TikTok: Cómo Usarlos para Máxima Visibilidad",
    description:
      "Los hashtags son tu mejor herramienta para la descubribilidad. Te enseñamos a crear una estrategia de hashtags que ponga tus videos frente a la audiencia correcta.",
    date: "10 de julio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-hashtags/1200/630",
    tags: ["Hashtags", "SEO", "Marketing"],
    content: (
      <div className="space-y-6">
        <p>
          Usar hashtags en TikTok no es simplemente añadir #viral o #fyp. Una
          estrategia bien pensada puede ser la diferencia entre 100 vistas y
          100,000. Aquí te explicamos cómo estructurar tus hashtags para obtener
          los mejores resultados.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          La Fórmula de Hashtags Mixtos
        </h2>
        <p>
          No te limites a un solo tipo de hashtag. La mejor estrategia es una
          mezcla equilibrada:
        </p>
        <ol className="list-decimal list-inside space-y-4 pl-4">
          <li>
            <strong>Hashtags de Contenido (2-3):</strong> Describen de qué trata
            tu video específicamente. Si haces un video sobre una receta de
            pasta, usa #recetadepasta, #cocinaitaliana. Son de nicho y atraen a
            una audiencia muy interesada.
          </li>
          <li>
            <strong>Hashtags de Tendencia (1-2):</strong> Incluye uno o dos
            hashtags que sean tendencia en ese momento, SIEMPRE Y CUANDO sean
            relevantes para tu video. Forzar una tendencia irrelevante puede ser
            contraproducente.
          </li>
          <li>
            <strong>Hashtags Amplios (1-2):</strong> Estos son hashtags con
            millones de publicaciones, como #comedia, #aprendeentiktok o #diy.
            Te dan la oportunidad de llegar a una audiencia masiva, aunque la
            competencia es alta.
          </li>
          <li>
            <strong>Hashtag de Marca (1):</strong> Si tienes una marca personal
            o un negocio, crea tu propio hashtag único (ej: #TikSnapTips) y
            úsalo en todos tus videos para construir una comunidad.
          </li>
        </ol>
        <blockquote className="border-l-4 border-[#FE2C55] pl-4 italic text-gray-400">
          "Piensa en los hashtags como las palabras clave de TikTok. Le dicen al
          algoritmo ya los usuarios de qué va tu contenido."
        </blockquote>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Investigación de Hashtags
        </h2>
        <p>
          No adivines. Usa la propia barra de búsqueda de TikTok. Escribe una
          palabra clave y TikTok te sugerirá hashtags relacionados junto con el
          número de vistas que tienen. Esto te da una idea clara de su
          popularidad y relevancia.
        </p>
      </div>
    ),
  },
  // --- POST 5 ---
  {
    slug: "analiticas-tiktok-entender-metricas",
    title:
      "TikTok Analytics: Cómo Entender tus Métricas para Crecer Más Rápido",
    description:
      "Las analíticas son tu hoja de ruta hacia el éxito. Te explicamos qué significa cada métrica clave y cómo usar esa información para tomar decisiones inteligentes.",
    date: "08 de julio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-analytics/1200/630",
    tags: ["Analytics", "Métricas", "Crecimiento"],
    content: (
      <div className="space-y-6">
        <p>
          Para crecer en TikTok, no puedes publicar a ciegas. Necesitas entender
          qué funciona y qué no. Ahí es donde entran en juego las analíticas de
          TikTok. Para acceder a ellas, necesitas una Cuenta de Creador o de
          Empresa (puedes cambiarla gratis en los ajustes).
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Métricas Clave a Vigilar
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Tiempo de Visualización Promedio:</strong> Quizás la métrica
            más importante. Indica cuánto tiempo, en promedio, la gente ve tus
            videos. Un tiempo alto le dice al algoritmo que tu contenido es
            interesante.
          </li>
          <li>
            <strong>Porcentaje de Visualización Completa:</strong> El porcentaje
            de espectadores que vieron tu video de principio a fin. Un valor
            alto es una señal de oro para el algoritmo.
          </li>
          <li>
            <strong>Fuente de Tráfico:</strong> Te muestra de dónde provienen
            tus vistas (Para ti, Siguiendo, Búsqueda, etc.). Si tienes un alto
            porcentaje de "Para ti", significa que el algoritmo está
            promocionando tu video.
          </li>
          <li>
            <strong>Actividad de los Seguidores:</strong> En la pestaña
            "Seguidores", puedes ver los días y las horas en que tu audiencia
            está más activa. Usa esta información para programar tus
            publicaciones.
          </li>
        </ul>
        <p>
          Revisa tus analíticas al menos una vez a la semana. Busca patrones.
          ¿Qué videos tuvieron el mayor tiempo de visualización? ¿Qué temas
          generaron más comentarios? Duplica lo que funciona y ajusta lo que no.
        </p>
      </div>
    ),
  },
  // ... (15 more posts follow the same structure)

  // --- POST 6 ---
  {
    slug: "mejores-horas-publicar-tiktok",
    title: "Las Mejores Horas para Publicar en TikTok en 2025",
    description:
      "Publicar en el momento adecuado puede aumentar drásticamente tu alcance inicial. Analizamos los patrones generales y te enseñamos a encontrar tus propias horas doradas.",
    date: "06 de julio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-timing/1200/630",
    tags: ["Estrategia", "Crecimiento", "Analytics"],
    content: (
      <div className="space-y-6">
        <p>
          Una de las preguntas más frecuentes entre los creadores es: "¿Cuándo
          debo publicar?". Si bien no hay una respuesta única, sí existen pautas
          generales y métodos para encontrar el momento perfecto para tu
          audiencia específica.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Pautas Generales (Basadas en Estudios)
        </h2>
        <p>
          Estudios de marketing han analizado millones de publicaciones para
          encontrar patrones. Generalmente, los mejores momentos para publicar
          (en tu zona horaria local) son:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Mañanas (6 a.m. - 10 a.m.):</strong> La gente revisa su
            teléfono al despertar.
          </li>
          <li>
            <strong>Mediodía (12 p.m. - 2 p.m.):</strong> Durante la pausa para
            el almuerzo.
          </li>
          <li>
            <strong>Tardes (4 p.m. - 9 p.m.):</strong> Después del trabajo o la
            escuela.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-white pt-4">
          El Método Infalible: Tus Propias Analíticas
        </h2>
        <p>
          Las pautas generales son un buen punto de partida, pero la verdad está
          en tus datos. Sigue estos pasos:
        </p>
        <ol className="list-decimal list-inside space-y-2 pl-4">
          <li>Asegúrate de tener una Cuenta de Creador o Empresa.</li>
          <li>
            Ve a "Ajustes y privacidad" &gt; "Herramientas de creador" &gt;
            "Estadísticas".
          </li>
          <li>Selecciona la pestaña "Seguidores".</li>
          <li>
            Desplázate hacia abajo hasta "Actividad de los seguidores". Verás un
            gráfico que muestra las horas y los días en que tu audiencia estuvo
            más activa en la última semana.
          </li>
        </ol>
        <p>
          ¡Esa es tu respuesta personalizada! Publica una o dos horas antes de
          los picos de actividad para dar tiempo al algoritmo a procesar y
          empezar a distribuir tu video justo cuando tu audiencia entra en la
          aplicación.
        </p>
      </div>
    ),
  },
  // --- POST 7 ---
  {
    slug: "como-hacer-un-duo-en-tiktok",
    title: "Tutorial Fácil: Cómo Hacer un Dúo en TikTok",
    description:
      "La función Dúo es una forma fantástica de interactuar con otros creadores y crear contenido colaborativo. Te guiamos paso a paso por el proceso.",
    date: "04 de julio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-duo/1200/630",
    tags: ["Tutorial", "Colaboración", "Funciones"],
    content: (
      <div className="space-y-6">
        <p>
          Hacer un Dúo te permite grabar un video que se reproduce en pantalla
          dividida junto al video de otro creador. Es perfecto para reacciones,
          colaboraciones de canto, sketches y mucho más.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Pasos para Crear un Dúo
        </h2>
        <ol className="list-decimal list-inside space-y-4 pl-4">
          <li>
            <strong>Encuentra el video:</strong> Busca el video con el que
            quieres hacer un Dúo.
          </li>
          <li>
            <strong>Pulsa "Compartir":</strong> Toca el icono de la flecha en la
            parte derecha de la pantalla.
          </li>
          <li>
            <strong>Selecciona "Dúo":</strong> En el menú inferior, pulsa la
            opción "Dúo". (Nota: si la opción no aparece, significa que el
            creador ha desactivado los Dúos para ese video).
          </li>
          <li>
            <strong>Graba tu video:</strong> Serás llevado a la pantalla de
            grabación. El video original se reproducirá a un lado mientras tú
            grabas tu parte en el otro. Puedes usar todos los efectos y
            herramientas de grabación habituales.
          </li>
          <li>
            <strong>Edita y publica:</strong> Una vez que termines de grabar,
            puedes añadir texto, stickers y una descripción antes de publicar tu
            Dúo.
          </li>
        </ol>
      </div>
    ),
  },
  // --- POST 8 ---
  {
    slug: "ideas-contenido-tiktok-sin-mostrar-cara",
    title: "10 Ideas de Contenido para TikTok Sin Mostrar tu Cara",
    description:
      "¿Quieres ser un creador pero prefieres mantener tu anonimato? ¡Es posible! Te damos 10 ideas de nichos y formatos de video exitosos que no requieren que muestres tu rostro.",
    date: "02 de julio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-faceless/1200/630",
    tags: ["Ideas", "Contenido", "Privacidad"],
    content: (
      <div className="space-y-6">
        <p>
          La timidez o el deseo de privacidad no tienen por qué ser un
          impedimento para triunfar en TikTok. Existen innumerables cuentas
          exitosas donde el creador nunca muestra su cara. Aquí te dejamos 10
          ideas probadas.
        </p>
        <ol className="list-decimal list-inside space-y-4 pl-4">
          <li>
            <strong>Videos de Cocina (POV):</strong> Graba desde tu punto de
            vista (Point of View) mientras preparas recetas. Solo se verán tus
            manos.
          </li>
          <li>
            <strong>Tutoriales de Arte o Manualidades:</strong> Muestra el
            proceso de creación de un dibujo, una pintura o una manualidad.
          </li>
          <li>
            <strong>Narración de Historias con Gameplays:</strong> Usa clips de
            videojuegos (como Minecraft o GTA) como fondo visual mientras
            cuentas una historia interesante.
          </li>
          <li>
            <strong>Videos ASMR:</strong> Enfócate en los sonidos satisfactorios
            de objetos, sin necesidad de aparecer en cámara.
          </li>
          <li>
            <strong>Cuidado de Plantas o Mascotas:</strong> Crea contenido
            mostrando la evolución de tus plantas o las travesuras de tus
            mascotas.
          </li>
          <li>
            <strong>Organización y Limpieza (Clean-Tok):</strong> Videos
            satisfactorios de "antes y después" de organizar un espacio.
          </li>
          <li>
            <strong>Stop Motion:</strong> Una técnica de animación que requiere
            paciencia pero que puede ser muy original y visualmente atractiva.
          </li>
          <li>
            <strong>Videos con Voz en Off sobre Clips Estéticos:</strong>{" "}
            Utiliza videos de stock gratuitos (de sitios como Pexels) y añade
            una voz en off con reflexiones, poemas o consejos.
          </li>
          <li>
            <strong>Tutoriales de Software o Apps:</strong> Graba la pantalla de
            tu ordenador o teléfono mostrando cómo usar un programa.
          </li>
          <li>
            <strong>"Unboxing" y Reseñas de Productos:</strong> Muestra solo tus
            manos abriendo y probando productos nuevos.
          </li>
        </ol>
      </div>
    ),
  },
  // --- POST 9 ---
  {
    slug: "como-ir-live-en-tiktok",
    title:
      "Cómo Ir LIVE en TikTok: Requisitos y Consejos para tu Primera Transmisión",
    description:
      "Las transmisiones en vivo son clave para conectar con tu audiencia. Te explicamos los requisitos para desbloquear la función y te damos consejos para que tu primer LIVE sea un éxito.",
    date: "30 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-live/1200/630",
    tags: ["LIVE", "Tutorial", "Interacción"],
    content: (
      <div className="space-y-6">
        <p>
          TikTok LIVE es una herramienta poderosa para interactuar en tiempo
          real con tus seguidores, construir una comunidad más fuerte y,
          potencialmente, ganar dinero a través de los regalos.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Requisitos para Hacer un LIVE
        </h2>
        <p>
          No todos pueden hacer un LIVE inmediatamente. TikTok establece dos
          condiciones principales:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Tener al menos 1,000 seguidores.</strong> Este es el
            requisito más importante.
          </li>
          <li>
            <strong>Tener 16 años o más.</strong> Para recibir regalos, debes
            tener 18 años o más.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Consejos para un LIVE Exitoso
        </h2>
        <ol className="list-decimal list-inside space-y-2 pl-4">
          <li>
            <strong>Planifica un tema:</strong> No empieces un LIVE sin un
            propósito. Puede ser una sesión de Preguntas y Respuestas, un
            tutorial, un "detrás de cámaras" de tu trabajo, etc.
          </li>
          <li>
            <strong>Promociónalo antes:</strong> Anuncia en tus videos o stories
            que harás un LIVE a una hora específica para que tu audiencia sepa
            cuándo conectarse.
          </li>
          <li>
            <strong>Ten buena iluminación y sonido:</strong> Asegúrate de que te
            vean y te escuchen bien.
          </li>
          <li>
            <strong>Interactúa con tu audiencia:</strong> Saluda a los nuevos
            espectadores por su nombre, responde a los comentarios y agradece
            los regalos.
          </li>
          <li>
            <strong>Asigna moderadores:</strong> Si esperas muchos espectadores,
            pide a amigos de confianza que sean moderadores para gestionar los
            comentarios negativos.
          </li>
        </ol>
      </div>
    ),
  },
  // --- POST 10 ---
  {
    slug: "tendencias-tiktok-encontrar-usar",
    title: "Cómo Encontrar y Usar Tendencias de TikTok (Antes de que Exploten)",
    description:
      "Subirte a una tendencia en el momento justo puede disparar tu crecimiento. Te mostramos las herramientas y técnicas para detectar tendencias emergentes y adaptarlas a tu nicho.",
    date: "28 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-trends/1200/630",
    tags: ["Tendencias", "Estrategia", "Viral"],
    content: (
      <div className="space-y-6">
        <p>
          Las tendencias son el alma de TikTok. Participar en ellas es una de
          las formas más rápidas de ganar visibilidad. Pero, ¿cómo encontrarlas
          antes de que todo el mundo lo haga?
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Dónde Encontrar Tendencias
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>La Página "Para Ti" (FYP):</strong> Es tu mejor herramienta.
            Pasa 15-20 minutos al día navegando activamente. Si empiezas a ver
            el mismo sonido, formato o efecto repetidamente, has encontrado una
            tendencia emergente.
          </li>
          <li>
            <strong>El Centro Creativo de TikTok:</strong> Es una herramienta
            oficial de TikTok (disponible en la web) que muestra los hashtags,
            sonidos, creadores y videos que están en tendencia en diferentes
            regiones.
          </li>
          <li>
            <strong>La Pestaña "Sonidos":</strong> Cuando creas un video, la
            lista de sonidos recomendados a menudo incluye audios que están
            empezando a ganar tracción. Fíjate en los que tienen una flecha
            hacia arriba.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Cómo Adaptar una Tendencia
        </h2>
        <p>
          No te limites a copiar. La clave es adaptar la tendencia a tu nicho.
          Si la tendencia es un baile y tu nicho es la cocina, quizás puedas
          hacer el baile mientras cocinas o usar los utensilios de cocina para
          seguir el ritmo. Aportar un giro original es lo que te hará destacar.
        </p>
      </div>
    ),
  },
  // --- POST 11 ---
  {
    slug: "crear-videos-alta-retencion",
    title: "El Arte del Gancho: Cómo Crear Videos de Alta Retención en TikTok",
    description:
      "Los primeros 3 segundos lo son todo. Aprende a crear ganchos poderosos que capturen la atención y mantengan a los espectadores viendo hasta el final.",
    date: "26 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-retention/1200/630",
    tags: ["Edición", "Estrategia", "Storytelling"],
    content: (
      <div className="space-y-6">
        <p>
          El tiempo de visualización promedio es una de las métricas más
          importantes para el algoritmo de TikTok. Si puedes hacer que la gente
          vea tus videos por más tiempo, TikTok los mostrará a más personas. La
          clave para esto es un buen "gancho".
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Tipos de Ganchos Efectivos
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>La Pregunta Directa:</strong> Comienza con una pregunta que
            tu audiencia quiera responder. "¿Sabías que puedes hacer esto con tu
            iPhone?".
          </li>
          <li>
            <strong>La Declaración Audaz o Controvertida:</strong> Di algo que
            desafíe una creencia común. "Estás limpiando tus sartenes de la
            forma incorrecta".
          </li>
          <li>
            <strong>El Resultado Primero:</strong> Muestra el resultado final de
            algo impresionante (un pastel terminado, un dibujo increíble) y
            luego di "aquí te muestro cómo lo hice".
          </li>
          <li>
            <strong>El Movimiento Inmediato:</strong> No empieces hablando a una
            cámara estática. Empieza con una acción, un movimiento rápido o una
            transición que capte la atención visualmente.
          </li>
          <li>
            <strong>El Bucle Perfecto (Loop):</strong> Crea un video donde el
            final se conecta perfectamente con el principio. Esto anima a la
            gente a verlo varias veces sin darse cuenta, disparando tu tiempo de
            visualización.
          </li>
        </ul>
      </div>
    ),
  },
  // --- POST 12 ---
  {
    slug: "seo-en-tiktok",
    title: "SEO en TikTok: Cómo Optimizar tu Perfil y Videos para la Búsqueda",
    description:
      "Sí, el SEO existe en TikTok. Te enseñamos a usar palabras clave para que tu contenido y tu perfil aparezcan cuando los usuarios buscan en la plataforma.",
    date: "24 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-seo/1200/630",
    tags: ["SEO", "Marketing", "Descubrimiento"],
    content: (
      <div className="space-y-6">
        <p>
          Cada vez más gente usa TikTok como un motor de búsqueda. Optimizar tu
          contenido para aparecer en esos resultados es una estrategia de
          crecimiento a largo plazo muy poderosa.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Dónde Aplicar SEO en TikTok
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Tu Nombre de Usuario y Biografía:</strong> Incluye palabras
            clave que describan tu nicho. Si eres un entrenador de fitness, tu
            biografía debería incluir "fitness", "entrenamiento", "vida
            saludable".
          </li>
          <li>
            <strong>Texto en Pantalla:</strong> Añade texto superpuesto en tus
            videos que contenga palabras clave relevantes. El algoritmo de
            TikTok puede leer este texto.
          </li>
          <li>
            <strong>Descripción del Video (Caption):</strong> Escribe una
            descripción clara y concisa que incluya tus palabras clave
            principales.
          </li>
          <li>
            <strong>Hashtags:</strong> Como ya hemos visto, los hashtags son
            esenciales para el SEO.
          </li>
          <li>
            <strong>Tu Voz:</strong> ¡Sí, TikTok transcribe el audio! Menciona
            tus palabras clave de forma natural cuando hables en tus videos.
          </li>
        </ul>
      </div>
    ),
  },
  // --- POST 13 ---
  {
    slug: "guia-tiktok-creator-marketplace",
    title: "Guía del TikTok Creator Marketplace: Cómo Conseguir Patrocinios",
    description:
      "El Creator Marketplace es la plataforma oficial de TikTok para conectar a creadores con marcas. Te explicamos cómo unirte y optimizar tu perfil para atraer brand deals.",
    date: "22 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-marketplace/1200/630",
    tags: ["Monetización", "Marcas", "Creadores"],
    content: (
      <div className="space-y-6">
        <p>
          El TikTok Creator Marketplace (TCM) es una plataforma solo por
          invitación que actúa como un puente entre las marcas y los creadores
          para colaboraciones pagadas. Ser parte de ella puede abrirte muchas
          puertas.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Cómo Funciona y Cómo Unirte
        </h2>
        <p>
          Las marcas pueden buscar en el TCM usando filtros como el nicho, la
          ubicación o la demografía de la audiencia para encontrar al creador
          perfecto para su campaña. Luego, pueden contactarte directamente a
          través de la plataforma.
        </p>
        <p>
          Los requisitos de elegibilidad no son públicos, pero generalmente se
          basan en el número de seguidores, la tasa de interacción y la calidad
          del contenido. Si cumples los criterios, recibirás una invitación de
          TikTok para unirte.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Optimizando tu Perfil en el TCM
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Establece tu Tarifa:</strong> Puedes sugerir una tarifa base
            por video, lo que da a las marcas una idea de tu valor.
          </li>
          <li>
            <strong>Crea un Portafolio:</strong> Destaca tus mejores videos y
            colaboraciones anteriores.
          </li>
          <li>
            <strong>Sé Profesional:</strong> Responde a los mensajes de las
            marcas de manera rápida y profesional.
          </li>
        </ul>
      </div>
    ),
  },
  // --- POST 14 ---
  {
    slug: "errores-comunes-evitar-tiktok",
    title: "7 Errores Comunes que Debes Evitar en TikTok",
    description:
      "A veces, no crecer se debe a pequeños errores que son fáciles de corregir. Identificamos los 7 errores más comunes que cometen los nuevos creadores.",
    date: "20 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-mistakes/1200/630",
    tags: ["Estrategia", "Consejos", "Crecimiento"],
    content: (
      <div className="space-y-6">
        <p>
          Si sientes que estás estancado, revisa si no estás cometiendo alguno
          de estos errores frecuentes.
        </p>
        <ol className="list-decimal list-inside space-y-4 pl-4">
          <li>
            <strong>Borrar Videos Antiguos:</strong> ¡No lo hagas! A veces, el
            algoritmo puede revivir un video semanas o meses después de haberlo
            publicado. Borrarlo elimina esa posibilidad.
          </li>
          <li>
            <strong>Ignorar la Calidad del Sonido:</strong> Un video con mal
            audio es casi imposible de ver. Invierte en un micrófono económico o
            graba en un lugar silencioso.
          </li>
          <li>
            <strong>No Tener un Nicho Claro:</strong> Si publicas sobre 5 temas
            diferentes, tu audiencia no sabrá qué esperar y será difícil que te
            sigan.
          </li>
          <li>
            <strong>Copiar en Lugar de Inspirarte:</strong> Está bien seguir
            tendencias, pero copiar exactamente el video de otro creador sin
            aportar nada nuevo rara vez funciona.
          </li>
          <li>
            <strong>Ignorar los Comentarios:</strong> Responder a los
            comentarios aumenta tu tasa de interacción y construye una
            comunidad.
          </li>
          <li>
            <strong>Ser Inconsistente:</strong> Publicar 5 videos un día y luego
            desaparecer una semana confunde al algoritmo y a tu audiencia.
          </li>
          <li>
            <strong>No Usar un Llamado a la Acción (CTA):</strong> Dile a la
            gente qué quieres que hagan. "¡Sígueme para más consejos!", "Comenta
            tu opinión", etc.
          </li>
        </ol>
      </div>
    ),
  },
  // --- POST 15 ---
  {
    slug: "storytelling-en-tiktok",
    title: "Storytelling en TikTok: Cómo Contar Historias que Enganchan",
    description:
      "Los humanos aman las historias. Te enseñamos a aplicar técnicas de storytelling para crear videos que conecten emocionalmente con tu audiencia.",
    date: "18 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-stories/1200/630",
    tags: ["Storytelling", "Contenido", "Edición"],
    content: (
      <div className="space-y-6">
        <p>
          Incluso en videos de 15 segundos, puedes contar una historia. Un buen
          storytelling puede transformar un video simple en algo memorable.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          La Estructura Clásica de 3 Actos
        </h2>
        <p>
          Puedes adaptar la estructura narrativa clásica a un video de TikTok:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Acto 1: El Planteamiento (Segundos 1-3):</strong> Presenta
            el problema, el gancho o la situación inicial.
          </li>
          <li>
            <strong>Acto 2: La Confrontación (Segundos 4-12):</strong> Muestra
            el proceso, el conflicto, el viaje, la transformación.
          </li>
          <li>
            <strong>Acto 3: La Resolución (Segundos 13-15):</strong> Muestra el
            resultado final, la solución, la moraleja o el giro inesperado (plot
            twist).
          </li>
        </ul>
        <p>
          No necesitas ser un director de cine. Simplemente piensa en tu video
          en términos de un "antes", un "durante" y un "después". Esta
          estructura le da una sensación de satisfacción al espectador y aumenta
          el tiempo de visualización.
        </p>
      </div>
    ),
  },
  // --- POST 16 ---
  {
    slug: "musica-viral-tiktok",
    title: "El Poder de la Música Viral en TikTok y Cómo Elegirla",
    description:
      "El sonido es el 50% de la experiencia en TikTok. Aprende a elegir la música y los sonidos adecuados para potenciar tus videos y unirte a conversaciones culturales.",
    date: "16 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-music/1200/630",
    tags: ["Sonidos", "Tendencias", "Viral"],
    content: (
      <div className="space-y-6">
        <p>
          TikTok y la música son inseparables. Una canción puede pasar de ser
          desconocida a un éxito mundial gracias a una tendencia en la
          plataforma. Usar el sonido correcto puede darle a tu video un impulso
          masivo.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Sonidos Comerciales vs. Sonidos Originales
        </h2>
        <p>Es importante entender la diferencia:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Biblioteca de Música Comercial:</strong> Si tienes una
            Cuenta de Empresa, solo puedes acceder a esta biblioteca de música
            libre de derechos. Es segura legalmente, pero puede que no tenga las
            canciones más virales.
          </li>
          <li>
            <strong>Sonidos (Biblioteca General):</strong> Las Cuentas
            Personales y de Creador tienen acceso a casi todo el catálogo de
            música popular.
          </li>
          <li>
            <strong>Sonidos Originales:</strong> Cuando subes un video con un
            audio que no está en la biblioteca de TikTok, o grabas tu propia
            voz, creas un "sonido original". Si se vuelve popular, otros podrán
            usarlo.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Cómo Elegir el Sonido Perfecto
        </h2>
        <p>
          No elijas una canción solo porque es popular. Piensa en el "mood" o la
          emoción que quieres transmitir. ¿Es un video enérgico, melancólico,
          divertido? El sonido debe complementar el contenido visual, no
          competir con él.
        </p>
      </div>
    ),
  },
  // --- POST 17 ---
  {
    slug: "tiktok-shop-guia-vendedores",
    title: "TikTok Shop: La Guía Completa para Vendedores",
    description:
      "El comercio social es el futuro. Te explicamos qué es TikTok Shop, cómo puedes empezar a vender tus productos directamente en la plataforma y las mejores prácticas.",
    date: "14 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-shop/1200/630",
    tags: ["eCommerce", "Negocios", "Monetización"],
    content: (
      <div className="space-y-6">
        <p>
          TikTok Shop integra el descubrimiento de productos y la compra en una
          experiencia fluida dentro de la aplicación. Permite a los usuarios
          comprar productos que ven en videos y transmisiones EN VIVO sin tener
          que salir de TikTok.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          ¿Cómo Funciona?
        </h2>
        <p>
          Los productos aparecen en un icono de bolsa de compras en los videos,
          en una pestaña dedicada en el perfil del creador y durante las
          transmisiones en vivo. Los usuarios pueden hacer clic y comprar
          directamente.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Formas de Vender en TikTok Shop
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Como Vendedor:</strong> Si tienes tu propia marca o
            productos, puedes registrarte en el TikTok Shop Seller Center y
            gestionar tu propio inventario.
          </li>
          <li>
            <strong>Como Afiliado:</strong> Si eres un creador, puedes unirte al
            programa de afiliados de TikTok Shop. Esto te permite añadir
            productos de otros vendedores a tu escaparate y ganar una comisión
            por cada venta que generes.
          </li>
        </ul>
        <p>
          La clave del éxito en TikTok Shop es crear contenido auténtico que
          muestre los productos en uso de una manera entretenida, en lugar de
          hacer anuncios de venta directa.
        </p>
      </div>
    ),
  },
  // --- POST 18 ---
  {
    slug: "herramientas-edicion-externas-tiktok",
    title: "Más Allá de TikTok: Las 3 Mejores Apps de Edición para tus Videos",
    description:
      "¿Quieres que tus videos destaquen? A veces, el editor de TikTok no es suficiente. Te presentamos las 3 mejores aplicaciones de edición externas para llevar tu contenido al siguiente nivel.",
    date: "12 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-editing/1200/630",
    tags: ["Edición", "Tutorial", "Herramientas"],
    content: (
      <div className="space-y-6">
        <p>
          El editor nativo de TikTok es potente, pero para transiciones
          complejas, corrección de color avanzada o efectos únicos, a menudo
          necesitas una herramienta externa. Aquí están nuestras favoritas.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">1. CapCut</h2>
        <p>
          No es una coincidencia que esté en primer lugar. CapCut es propiedad
          de ByteDance (la misma empresa que TikTok) y se integra perfectamente
          con la plataforma. Es gratuita y extremadamente poderosa. Ofrece
          funciones como subtítulos automáticos, eliminación de fondos,
          plantillas de video y una enorme biblioteca de efectos y sonidos.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">2. InShot</h2>
        <p>
          Una aplicación muy intuitiva y fácil de usar, ideal para
          principiantes. Es genial para tareas rápidas como recortar clips,
          añadir música, filtros y texto. Su interfaz es muy limpia y directa.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          3. VN Video Editor
        </h2>
        <p>
          VN es un paso adelante en términos de control profesional, pero sigue
          siendo gratuito. Ofrece una línea de tiempo multipista, curvas de
          velocidad para efectos de cámara lenta/rápida y controles de color más
          avanzados. Es perfecto si quieres un mayor control creativo.
        </p>
      </div>
    ),
  },
  // --- POST 19 ---
  {
    slug: "reutilizar-contenido-tiktok-otras-redes",
    title:
      "Cómo Reutilizar tu Contenido de TikTok para Instagram Reels y YouTube Shorts",
    description:
      "No dejes que tu arduo trabajo se quede en una sola plataforma. Aprende la estrategia correcta para adaptar y reutilizar tus videos de TikTok en Reels y Shorts para maximizar tu alcance.",
    date: "10 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-repurpose/1200/630",
    tags: ["Estrategia", "Marketing", "Contenido"],
    content: (
      <div className="space-y-6">
        <p>
          Crear un buen video corto lleva tiempo. Reutilizarlo en otras
          plataformas es una forma inteligente de optimizar tu esfuerzo. Pero no
          se trata solo de volver a subir el mismo archivo.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Paso 1: Descarga sin Marca de Agua
        </h2>
        <p>
          El paso más importante. Plataformas como Instagram penalizan
          activamente los videos que tienen la marca de agua de TikTok. Usa una
          herramienta como TikSnap para obtener una versión limpia de tu propio
          video.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Paso 2: Adapta el Sonido
        </h2>
        <p>
          La música con licencia en TikTok puede no tener licencia en Instagram
          o YouTube. Para estar seguro, silencia el audio original y usa una
          canción de tendencia de la biblioteca de la nueva plataforma. Esto
          también ayuda a que tu video sea detectado por el algoritmo de esa
          plataforma.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Paso 3: Adapta el Texto y los Hashtags
        </h2>
        <p>
          No copies y pegues la misma descripción. Las audiencias y las
          convenciones son ligeramente diferentes. Investiga qué hashtags son
          populares en Reels y Shorts y adapta tu llamado a la acción.
        </p>
      </div>
    ),
  },
  // --- POST 20 ---
  {
    slug: "seguridad-privacidad-tiktok",
    title: "Guía de Seguridad y Privacidad en TikTok: Protege tu Cuenta",
    description:
      "TikTok es divertido, pero también es importante mantenerse seguro. Te damos consejos prácticos para proteger tu cuenta de hackers y gestionar tu privacidad.",
    date: "08 de junio de 2025",
    author: {
      name: "Equipo TikSnap",
      avatar: "https://i.pravatar.cc/150?u=tiksnap-team",
    },
    image: "https://picsum.photos/seed/tiksnap-security/1200/630",
    tags: ["Seguridad", "Privacidad", "Consejos"],
    content: (
      <div className="space-y-6">
        <p>
          Disfrutar de TikTok de forma segura es fácil si tomas algunas
          precauciones básicas.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Consejos para Proteger tu Cuenta
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Activa la Verificación en Dos Pasos:</strong> Es la barrera
            de seguridad más importante. Ve a "Seguridad" en tus ajustes y
            actívala. Requerirá un código de tu teléfono o email cada vez que
            inicies sesión desde un dispositivo nuevo.
          </li>
          <li>
            <strong>Usa una Contraseña Fuerte:</strong> Combina letras
            mayúsculas, minúsculas, números y símbolos. No uses la misma
            contraseña que en otros sitios.
          </li>
          <li>
            <strong>Cuidado con el Phishing:</strong> Desconfía de los correos
            electrónicos o mensajes directos que te piden tu contraseña o te
            dirigen a sitios de inicio de sesión sospechosos. TikTok nunca te
            pedirá tu contraseña fuera de la aplicación.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-white pt-4">
          Gestionando tu Privacidad
        </h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Cuenta Privada vs. Pública:</strong> Si quieres que solo tus
            amigos aprobados vean tus videos, puedes poner tu cuenta en modo
            privado en los ajustes de "Privacidad".
          </li>
          <li>
            <strong>Controla Quién Puede Interactuar Contigo:</strong> En la
            sección de "Privacidad", puedes decidir quién puede comentarte,
            enviarte mensajes directos, hacer dúos contigo, etc.
          </li>
          <li>
            <strong>Piensa Antes de Publicar:</strong> Recuerda que una vez que
            algo está en internet, es difícil de eliminar por completo. No
            compartas información personal sensible como tu dirección o número
            de teléfono.
          </li>
        </ul>
      </div>
    ),
  },
  // ¡Has llegado a 20! Puedes seguir añadiendo más aquí.
];
