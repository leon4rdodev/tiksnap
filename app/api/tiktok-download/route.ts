import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const TikTokUrlSchema = z.object({
  url: z
    .string()
    .url({ message: "Por favor, ingresa una URL válida." })
    .refine(
      (url) => {
        return /^https?:\/\/(www\.|m\.|[a-z]{2}\.)?tiktok\.com\/.+/.test(url);
      },
      {
        message: "La URL debe ser un enlace válido de TikTok.",
      }
    ),
});

interface VideoInfo {
  id: string;
  type: "video" | "photo";
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
    type: "video" | "audio" | "image";
  }[];
  images?: string[];
  cookies: string | null;
}

const DESKTOP_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Cache-Control": "no-cache",
  "Pragma": "no-cache",
};

const MOBILE_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
};

// Genera un msToken aleatorio para simular una sesión real
function generateMsToken(length = 120) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
  let token = "";
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

// Genera una IP residencial aleatoria para el header X-Forwarded-For
function generateRandomIP() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join(".");
}

function getAntiBlockHeaders(isMobile = false) {
  const headers = isMobile ? { ...MOBILE_HEADERS } : { ...DESKTOP_HEADERS };
  const randomIP = generateRandomIP();
  return {
    ...headers,
    "X-Forwarded-For": randomIP,
    "X-Real-IP": randomIP,
    "Client-IP": randomIP,
    "Cookie": `msToken=${generateMsToken()};`,
  };
}

function buildVideoInfo(itemStruct: any): Omit<VideoInfo, "cookies"> | null {
  try {
    const downloadOptions: VideoInfo["downloadOptions"] = [];
    let postType: "video" | "photo" = "video";
    let images: string[] = [];

    if (itemStruct.imagePost && itemStruct.imagePost.images) {
      postType = "photo";
      images = itemStruct.imagePost.images
        .map((img: any) => img.imageURL?.urlList?.[0] || "")
        .filter(Boolean);
    } else {
      if (itemStruct.video?.playAddr) {
        downloadOptions.push({
          label: "Video (HD - Sin marca de agua)",
          url: itemStruct.video.playAddr.replace(/\\u002F/g, "/"),
          type: "video" as const,
        });
      }
      if (itemStruct.video?.downloadAddr && itemStruct.video.downloadAddr !== itemStruct.video?.playAddr) {
        downloadOptions.push({
          label: "Video (SD - Sin marca de agua)",
          url: itemStruct.video.downloadAddr.replace(/\\u002F/g, "/"),
          type: "video" as const,
        });
      }
    }

    if (itemStruct.music?.playUrl) {
      downloadOptions.push({
        label: "Audio (MP3)",
        url: itemStruct.music.playUrl.replace(/\\u002F/g, "/"),
        type: "audio" as const,
      });
    }

    const cover = postType === "photo"
      ? (itemStruct.imagePost?.cover?.imageURL?.urlList?.[0] || images[0] || "")
      : (itemStruct.video?.cover || "");

    return {
      id: itemStruct.id,
      type: postType,
      author: {
        uniqueId: itemStruct.author?.uniqueId || "",
        nickname: itemStruct.author?.nickname || "",
        avatar: itemStruct.author?.avatarThumb || "",
      },
      description: itemStruct.desc || "",
      cover,
      downloadOptions,
      images: images.length > 0 ? images : undefined,
    };
  } catch (error) {
    console.error("Error al construir VideoInfo:", error);
    return null;
  }
}

function decodeHtml(html: string): string {
  return html
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/\\u0022/g, '"');
}

function extractVideoData(html: string): Omit<VideoInfo, "cookies"> | null {
  let itemStruct: any = null;

  // 1. __UNIVERSAL_DATA_FOR_REHYDRATION__ (Desktop)
  const rehydrationMatch = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>({.+?})<\/script>/);
  if (rehydrationMatch?.[1]) {
    try {
      const jsonData = JSON.parse(decodeHtml(rehydrationMatch[1]));
      itemStruct = jsonData?.__DEFAULT_SCOPE__?.["webapp.video-detail"]?.itemInfo?.itemStruct;
    } catch {}
  }

  // 2. api-data (Mobile)
  if (!itemStruct) {
    const apiDataIdx = html.indexOf('id="api-data"');
    if (apiDataIdx > -1) {
      const start = html.indexOf('>', apiDataIdx) + 1;
      const end = html.indexOf('</script>', start);
      if (start > 0 && end > start) {
        try {
          const jsonData = JSON.parse(decodeHtml(html.substring(start, end).trim()));
          itemStruct = jsonData?.videoDetail?.itemInfo?.itemStruct
            || jsonData?.ItemModule?.[Object.keys(jsonData?.ItemModule || {})[0]];
        } catch {}
      }
    }
  }

  // 3. SIGI_STATE (legacy)
  if (!itemStruct) {
    const sigiMatch = html.match(/<script id="SIGI_STATE"[^>]*>({.+?})<\/script>/);
    if (sigiMatch?.[1]) {
      try {
        const sigiData = JSON.parse(decodeHtml(sigiMatch[1]));
        const itemModule = sigiData?.ItemModule;
        if (itemModule) {
          const firstKey = Object.keys(itemModule)[0];
          if (firstKey) itemStruct = itemModule[firstKey];
        }
      } catch {}
    }
  }

  // 4. Catch-all fallback (búsqueda de itemStruct en cualquier bloque JSON)
  if (!itemStruct) {
    const allJsonMatches = html.match(/{[^{}]*"itemStruct"[^{}]*}/g);
    if (allJsonMatches) {
      for (const match of allJsonMatches) {
        try {
          const candidate = JSON.parse(decodeHtml(match));
          if (candidate.itemStruct) {
            itemStruct = candidate.itemStruct;
            break;
          }
        } catch {}
      }
    }
  }

  if (!itemStruct) return null;
  return buildVideoInfo(itemStruct);
}

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

    let finalUrl = validation.data.url;
    if (finalUrl.includes("vt.tiktok.com") || finalUrl.includes("/t/")) {
      try {
        const redirectRes = await fetch(finalUrl, {
          redirect: "follow",
          headers: DESKTOP_HEADERS,
        });
        if (redirectRes.url && redirectRes.url !== finalUrl) {
          finalUrl = redirectRes.url;
        } else {
          const redirectHtml = await redirectRes.text();
          const canonicalMatch = redirectHtml.match(/href="(https:\/\/www\.tiktok\.com\/[^"]+)"/);
          if (canonicalMatch && canonicalMatch[1]) {
            finalUrl = canonicalMatch[1];
          }
        }
      } catch (e) {
        console.error("Error resolviendo URL acortada:", e);
      }
    }

    const postIdMatch = finalUrl.match(/(?:video|photo|v)\/(\d+)/);
    const postId = postIdMatch ? postIdMatch[1] : null;

    let videoInfo: Omit<VideoInfo, "cookies"> | null = null;
    let formattedCookies: string | null = null;

    if (postId) {
      try {
        const apiUrl = `https://www.tiktok.com/api/item/detail/?itemId=${postId}`;
        const head = getAntiBlockHeaders(false);
        const apiRes = await fetch(apiUrl, {
          headers: {
            ...head,
            "Referer": "https://www.tiktok.com/",
          },
        });
        
        if (apiRes.ok) {
          const text = await apiRes.text();
          if (text && text.trim().startsWith("{")) {
            const apiData = JSON.parse(text);
            const itemStruct = apiData?.itemInfo?.itemStruct;
            if (itemStruct) {
              videoInfo = buildVideoInfo(itemStruct);
              if (videoInfo) {
                console.log(`[TikTok-Downloader] Success: Internal API (postId: ${postId})`);
                const rawCookies = apiRes.headers.get("set-cookie");
                formattedCookies = formatCookiesForRequest(rawCookies);
              }
            }
          }
        }
      } catch (e) {
        console.error("TikTok API error:", e);
      }
    }

    if (!videoInfo) {
      try {
        const head = getAntiBlockHeaders(false);
        const pageResponse = await fetch(finalUrl, { headers: head });
        if (pageResponse.ok) {
          const html = await pageResponse.text();
          videoInfo = extractVideoData(html);
          if (videoInfo) {
            console.log(`[TikTok-Downloader] Success: Desktop Scraping (${finalUrl})`);
            const rawCookies = pageResponse.headers.get("set-cookie");
            formattedCookies = formatCookiesForRequest(rawCookies);
          }
        }
      } catch (e) {
        console.error("Desktop scraping error:", e);
      }
    }

    if (!videoInfo) {
      try {
        const head = getAntiBlockHeaders(true);
        const pageResponse = await fetch(finalUrl, { headers: head });
        if (pageResponse.ok) {
          const html = await pageResponse.text();
          videoInfo = extractVideoData(html);
          if (videoInfo) {
            console.log(`[TikTok-Downloader] Success: Mobile Scraping (${finalUrl})`);
            const rawCookies = pageResponse.headers.get("set-cookie");
            formattedCookies = formatCookiesForRequest(rawCookies);
          }
        }
      } catch (e) {
        console.error("Mobile scraping error:", e);
      }
    }

    // ═══════════════════════════════════════════════════════════════
    // FALLBACK FINAL: Proxy a través de Google Translate (IPs de Google)
    // ═══════════════════════════════════════════════════════════════
    if (!videoInfo) {
      console.log("[TikTok-Downloader] Datacenter IPs blocked? Attempting Google Proxy...");
      try {
        // Usamos Google Translate como puente para usar las IPs de Google que no están bloqueadas
        const googleProxyUrl = `https://translate.google.com/translate?sl=auto&tl=en&u=${encodeURIComponent(finalUrl)}`;
        const pageResponse = await fetch(googleProxyUrl, { 
          headers: {
            ...DESKTOP_HEADERS,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          }
        });
        
        if (pageResponse.ok) {
          const html = await pageResponse.text();
          videoInfo = extractVideoData(html);
          if (videoInfo) {
            console.log(`[TikTok-Downloader] Success: Google Proxy Fallback!`);
            // Por seguridad, para el proxy de descarga usamos las cookies del host original si podemos, 
            // pero para Google Proxy usualmente no obtenemos cookies útiles de TikTok directamente.
          }
        }
      } catch (e) {
        console.error("Google Proxy error:", e);
      }
    }

    if (!videoInfo) {
      return NextResponse.json(
        { error: "No se pudo extraer la información. Intenta de nuevo en unos segundos." },
        { status: 500 }
      );
    }

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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const videoUrl = searchParams.get("url");
    const filename = searchParams.get("filename") || "tiktok-video";
    const cookies = searchParams.get("cookies");
    const typeFromQuery = searchParams.get("type");

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

    if (typeFromQuery === "audio") {
      finalContentType = "audio/mpeg";
      fileExtension = "mp3";
    } else if (typeFromQuery === "image") {
      finalContentType = "image/jpeg";
      fileExtension = "jpg";
    } else {
      const contentTypeFromTikTok =
        videoResponse.headers.get("content-type") || "video/mp4";
      finalContentType = contentTypeFromTikTok;
      fileExtension = contentTypeFromTikTok.includes("audio") ? "mp3" : "mp4";
    }

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