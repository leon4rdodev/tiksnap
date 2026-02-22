# TikSnap - Descargador de Videos de TikTok

![TikSnap](https://www.tiksnap.es/og-image.jpg)

TikSnap es una aplicación web rápida, gratuita y segura que permite a los usuarios descargar videos de TikTok sin marca de agua y en alta resolución, así como extraer su audio en formato MP3. Funciona completamente desde el navegador y está optimizada para ser compatible con cualquier dispositivo.

## 🚀 Características Principales

- **100% Sin Marca de Agua:** Descarga videos de TikTok completamente limpios.
- **Calidad HD:** Obtiene la mayor resolución de video disponible.
- **Conversor de Audio a MP3:** Extrae el sonido o música de cualquier video de TikTok con un solo clic.
- **Totalmente Gratuito e Ilimitado:** Descarga todos los videos que desees sin restricciones, registros ni suscripciones.
- **Privacidad y Seguridad:** Provisión de descargas de manera directa sin guardar información ni videos en nuestros servidores.
- **Multiplataforma:** Totalmente responsivo para funcionar de manera nativa en iPhone, Android, Mac, Linux y Windows.

## 🛠️ Tecnologías y Stack

El proyecto está desarrollado con las últimas tecnologías del ecosistema moderno de JavaScript:

- **Framework principal:** [Next.js 14](https://nextjs.org/) (App Directory)
- **Librería de UI:** [React 18](https://react.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes y Animaciones:** [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), `tailwindcss-animate`
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Notificaciones:** [Sonner](https://sonner.emilkowal.ski/)
- **Scraping y Procesamiento:** Puppeteer
- **Emails y Contacto:** Nodemailer

## 📦 Instalación y Ejecución Local

Sigue estos pasos para correr el proyecto de manera local en tu entorno de desarrollo:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/leon4rdodev/tiktok-downloader.git
   cd tiktok-downloader
   ```

2. **Instala las dependencias:**
   Puedes usar `npm`, `yarn`, o `pnpm` (este proyecto asume `npm` por defecto):

   ```bash
   npm install
   ```

3. **Configura el entorno:**
   Actualmente no es necesario un archivo `.env` para la ejecución básica, pero en caso de que utilices los servicios de correo electrónico integrados, deberás configurarlo copiándote del `.env.example` (si aplica). (Revisar la conversación reciente sobre la limitación de historias y creación del .env.example).

4. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

5. **Abre la aplicación:**
   Visita [http://localhost:3000](http://localhost:3000) en tu navegador para ver la herramienta en acción.

## 🏗️ Construcción (Build)

Para compilar la aplicación para su versión de producción:

```bash
npm run build
```

Posteriormente, puedes probar la versión compilada con:

```bash
npm run start
```

## ⚖️ Responsabilidad Legal

TikSnap está pensado para descargar contenido **público** de TikTok. Como usuario, es tu responsabilidad usar el contenido descargado respetando las leyes de derechos de autor y los términos de servicio de la plataforma fuente. No promovemos la distribución comercial inapropiada ni las infracciones de derechos de autor.

## 👤 Autor

Desarrollado y mantenido por **Leonardo** ([leon4rdodev](https://github.com/leon4rdodev)).
