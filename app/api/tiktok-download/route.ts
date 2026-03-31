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

const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
  "Accept-Encoding": "gzip, deflate, br",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Cache-Control": "no-cache",
  "Pragma": "no-cache",
};

const ALT_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.165 Mobile Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "es-ES,es;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1",
};

function extractVideoData(html: string): Omit<VideoInfo, "cookies"> | null {
  try {
    let itemStruct: any = null;

    const rehydrationMatch = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>({.+?})<\/script>/);
    if (rehydrationMatch && rehydrationMatch[1]) {
      try {
        const jsonData = JSON.parse(rehydrationMatch[1]);
        itemStruct = jsonData?.__DEFAULT_SCOPE__?.["webapp.video-detail"]?.itemInfo?.itemStruct;
      } catch (e) {
        // Ignorar
      }
    }

    if (!itemStruct) {
      const apiDataIdx = html.indexOf('id="api-data"');
      if (apiDataIdx > -1) {
        const start = html.indexOf('>', apiDataIdx) + 1;
        const end = html.indexOf('</script>', start);
        if (start > 0 && end > start) {
           try {
             const content = html.substring(start, end).trim();
             const jsonData = JSON.parse(content);
             itemStruct = jsonData?.videoDetail?.itemInfo?.itemStruct || jsonData?.ItemModule?.[Object.keys(jsonData?.ItemModule || {})[0]];
           } catch(e) {}
        }
      }
    }

    // Fallback: buscar SIGI_STATE
    if (!itemStruct) {
      const sigiMatch = html.match(/<script id="SIGI_STATE"[^>]*>({.+?})<\/script>/);
      if (sigiMatch && sigiMatch[1]) {
        try {
          const sigiData = JSON.parse(sigiMatch[1]);
          const itemModule = sigiData?.ItemModule;
          if (itemModule) {
            const firstKey = Object.keys(itemModule)[0];
            if (firstKey) itemStruct = itemModule[firstKey];
          }
        } catch (e) {}
      }
    }

    if (!itemStruct) {
      throw new Error(
        "No se encontró la estructura de datos del post. TikTok puede haber cambiado su estructura o requerir CAPTCHA."
      );
    }

    const downloadOptions: {
      label: string;
      url: string;
      type: "video" | "audio" | "image";
    }[] = [];

    let postType: "video" | "photo" = "video";
    let images: string[] = [];

    if (itemStruct.imagePost && itemStruct.imagePost.images) {
      postType = "photo";
      images = itemStruct.imagePost.images.map((img: any) => img.imageURL.urlList[0]);
    } else {
      if (itemStruct.video?.playAddr) {
        downloadOptions.push({
          label: "Video (HD - Sin marca de agua)",
          url: itemStruct.video.playAddr.replace(/\\u002F/g, "/"),
          type: "video" as const,
        });
      }
      if (itemStruct.video?.downloadAddr) {
        if (!downloadOptions.some((opt) => opt.url === itemStruct.video.downloadAddr)) {
          downloadOptions.push({
            label: "Video (SD - Sin marca de agua)",
            url: itemStruct.video.downloadAddr.replace(/\\u002F/g, "/"),
            type: "video" as const,
          });
        }
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
      cover: cover,
      downloadOptions,
      images: images.length > 0 ? images : undefined,
    };
  } catch (error) {
    console.error("Error al extraer datos del HTML:", error);
    return null;
  }
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

    // Resolver URLs acortadas (vt.tiktok.com) siguiendo redirecciones
    let finalUrl = validation.data.url;
    if (finalUrl.includes("vt.tiktok.com") || finalUrl.includes("/t/")) {
      try {
        const redirectRes = await fetch(finalUrl, {
          redirect: "follow",
          headers: BROWSER_HEADERS,
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

    // Primer intento: scraping directo con headers de iOS Safari
    let pageResponse = await fetch(finalUrl, { headers: BROWSER_HEADERS });
    let videoInfo: Omit<VideoInfo, "cookies"> | null = null;
    let formattedCookies: string | null = null;

    if (pageResponse.ok) {
      const html = await pageResponse.text();
      videoInfo = extractVideoData(html);
      if (videoInfo) {
        const rawCookies = pageResponse.headers.get("set-cookie");
        formattedCookies = formatCookiesForRequest(rawCookies);
      }
    }

    // Segundo intento: headers de Android Chrome
    if (!videoInfo) {
      console.log("Intento 1 fallido, reintentando con User-Agent Android...");
      try {
        pageResponse = await fetch(finalUrl, { headers: ALT_HEADERS });
        if (pageResponse.ok) {
          const html = await pageResponse.text();
          videoInfo = extractVideoData(html);
          if (videoInfo) {
            const rawCookies = pageResponse.headers.get("set-cookie");
            formattedCookies = formatCookiesForRequest(rawCookies);
          }
        }
      } catch (e) {
        console.error("Error en intento 2:", e);
      }
    }

    // Tercer intento: API proxy (tikwm.com)
    if (!videoInfo) {
      console.log("Intento 2 fallido, usando API proxy como fallback...");
      try {
        const apiRes = await fetch("https://www.tikwm.com/api/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ url: finalUrl, count: "12", cursor: "0", web: "1", hd: "1" }),
        });
        if (apiRes.ok) {
          const apiData = await apiRes.json();
          if (apiData?.data) {
            const d = apiData.data;
            const isPhoto = d.images && d.images.length > 0;

            const downloadOptions: VideoInfo["downloadOptions"] = [];
            const images: string[] = [];

            if (isPhoto) {
              images.push(...d.images.map((img: any) => typeof img === "string" ? img : img.url || img));
            } else {
              if (d.play) {
                downloadOptions.push({
                  label: "Video (HD - Sin marca de agua)",
                  url: d.hdplay || d.play,
                  type: "video" as const,
                });
              }
            }

            if (d.music) {
              downloadOptions.push({
                label: "Audio (MP3)",
                url: d.music,
                type: "audio" as const,
              });
            }

            videoInfo = {
              id: d.id || "",
              type: isPhoto ? "photo" : "video",
              author: {
                uniqueId: d.author?.unique_id || "",
                nickname: d.author?.nickname || "",
                avatar: d.author?.avatar || "",
              },
              description: d.title || "",
              cover: isPhoto ? (images[0] || "") : (d.origin_cover || d.cover || ""),
              downloadOptions,
              images: images.length > 0 ? images : undefined,
            };
          }
        }
      } catch (e) {
        console.error("Error en API proxy fallback:", e);
      }
    }

    if (!videoInfo) {
      return NextResponse.json(
        { error: "No se pudo extraer la información. TikTok puede estar bloqueando solicitudes temporalmente. Intenta de nuevo en unos segundos." },
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