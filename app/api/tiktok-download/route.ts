import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// --- Esquema de validación para la URL de TikTok (ACTUALIZADO Y MÁS FLEXIBLE) ---
const TikTokUrlSchema = z.object({
  url: z
    .string()
    .url({ message: "Por favor, ingresa una URL válida." })
    .refine(
      (url) => {
        // Esta expresión regular ahora acepta:
        // - www.tiktok.com/@...
        // - m.tiktok.com/@...
        // - vm.tiktok.com/...
        // - vt.tiktok.com/... (y otras variantes cortas)
        return /^https?:\/\/(www\.|m\.|[a-z]{2}\.)?tiktok\.com\/.+/.test(url);
      },
      {
        message: "La URL debe ser un enlace válido de TikTok.",
      }
    ),
});

// --- Interfaz para la información del video ---
interface VideoInfo {
  id: string;
  author: {
    uniqueId: string;
    nickname: string;
    avatar: string;
  };
  description: string;
  cover: string;
  downloadOptions: {
    label: string;
    url: string;
    type: "video" | "audio";
  }[];
  cookies: string | null;
}

// --- Función para extraer los datos del video del HTML ---
function extractVideoData(html: string): Omit<VideoInfo, "cookies"> | null {
  try {
    const scriptTagRegex =
      /<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application\/json">({.+?})<\/script>/;
    const match = html.match(scriptTagRegex);
    if (!match || !match[1]) {
      throw new Error(
        "No se encontró el script de datos. TikTok puede estar mostrando un CAPTCHA o ha cambiado su estructura."
      );
    }

    const jsonData = JSON.parse(match[1]);
    const itemStruct =
      jsonData?.__DEFAULT_SCOPE__?.["webapp.video-detail"]?.itemInfo
        ?.itemStruct;
    if (!itemStruct) {
      throw new Error(
        "No se encontró la estructura de datos del video en el JSON."
      );
    }

    const downloadOptions: {
      label: string;
      url: string;
      type: "video" | "audio";
    }[] = [];
    if (itemStruct.video.playAddr) {
      downloadOptions.push({
        label: "Video (HD - Sin marca de agua)",
        url: itemStruct.video.playAddr.replace(/\\u002F/g, "/"),
        type: "video" as const,
      });
    }
    if (itemStruct.video.downloadAddr) {
      if (
        !downloadOptions.some(
          (opt) => opt.url === itemStruct.video.downloadAddr
        )
      ) {
        downloadOptions.push({
          label: "Video (SD - Sin marca de agua)",
          url: itemStruct.video.downloadAddr.replace(/\\u002F/g, "/"),
          type: "video" as const,
        });
      }
    }
    if (itemStruct.music.playUrl) {
      downloadOptions.push({
        label: "Audio (MP3)",
        url: itemStruct.music.playUrl.replace(/\\u002F/g, "/"),
        type: "audio" as const,
      });
    }

    return {
      id: itemStruct.id,
      author: {
        uniqueId: itemStruct.author.uniqueId,
        nickname: itemStruct.author.nickname,
        avatar: itemStruct.author.avatarThumb,
      },
      description: itemStruct.desc,
      cover: itemStruct.video.cover,
      downloadOptions,
    };
  } catch (error) {
    console.error("Error al extraer datos del HTML:", error);
    return null;
  }
}

// --- Función para formatear las cookies ---
function formatCookiesForRequest(
  setCookieHeader: string | null
): string | null {
  if (!setCookieHeader) {
    return null;
  }
  const cookies = setCookieHeader.split(",").map((cookie) => {
    return cookie.split(";")[0].trim();
  });
  return cookies.join("; ");
}

// --- API Endpoint para OBTENER INFORMACIÓN DEL VIDEO ---
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = TikTokUrlSchema.safeParse({ url: body.url });
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    // El fetch maneja las redirecciones de enlaces cortos automáticamente
    const pageResponse = await fetch(validation.data.url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!pageResponse.ok) {
      return NextResponse.json(
        { error: "No se pudo acceder a la página de TikTok." },
        { status: pageResponse.status }
      );
    }

    const html = await pageResponse.text();
    const videoInfo = extractVideoData(html);

    if (!videoInfo) {
      return NextResponse.json(
        { error: "No se pudo extraer la información del video de la página." },
        { status: 500 }
      );
    }

    const rawCookies = pageResponse.headers.get("set-cookie");
    const formattedCookies = formatCookiesForRequest(rawCookies);

    return NextResponse.json({
      success: true,
      videoInfo: { ...videoInfo, cookies: formattedCookies },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

// --- API Endpoint para PROXY DE DESCARGA ---
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const videoUrl = searchParams.get("url");
    const filename = searchParams.get("filename") || "tiktok-video";
    const cookies = searchParams.get("cookies");
    const typeFromQuery = searchParams.get("type"); // Nuevo: Obtener el tipo solicitado (video o audio)

    if (!videoUrl) {
      return NextResponse.json(
        { error: "URL del video es requerida" },
        { status: 400 }
      );
    }

    const videoResponse = await fetch(videoUrl, {
      headers: {
        Referer: "https://www.tiktok.com/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        ...(cookies && { Cookie: cookies }),
      },
    });

    if (!videoResponse.ok || !videoResponse.body) {
      return NextResponse.json(
        { error: "El servidor de TikTok denegó la descarga." },
        { status: 403 }
      );
    }

    const headers = new Headers();
    let finalContentType: string;
    let fileExtension: string;

    // *** LÓGICA CORREGIDA: Priorizar el tipo solicitado (type) ***
    if (typeFromQuery === "audio") {
      finalContentType = "audio/mpeg"; // MIME Type estándar para MP3
      fileExtension = "mp3";
    } else {
      // Si es video o el tipo no está especificado, usa la respuesta de TikTok
      const contentTypeFromTikTok =
        videoResponse.headers.get("content-type") || "video/mp4";
      finalContentType = contentTypeFromTikTok;
      fileExtension = contentTypeFromTikTok.includes("audio") ? "mp3" : "mp4";
    }
    // *************************************************************

    headers.set("Content-Type", finalContentType);
    headers.set(
      "Content-Disposition",
      `attachment; filename="${filename}.${fileExtension}"`
    );
    if (videoResponse.headers.has("content-length")) {
      headers.set(
        "Content-Length",
        videoResponse.headers.get("content-length")!
      );
    }

    return new NextResponse(videoResponse.body, { status: 200, headers });
  } catch (error) {
    console.error("Error en proxy de descarga:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al descargar el archivo." },
      { status: 500 }
    );
  }
}
// --- END OF FILE tiktok-downloader-main/app/api/tiktok-download/route.ts ---
