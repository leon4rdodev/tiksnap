"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Link2,
  Download,
  AlertCircle,
  Loader2,
  Search,
  ArrowLeft,
  Clipboard,
  Sparkles,
  Music,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Interfaz simplificada solo para video, audio e imagenes
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

export default function DownloaderTool() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [downloadingUrl, setDownloadingUrl] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const onReset = () => {
      setUrl("");
      setVideoInfo(null);
      setError(null);
      setIsLoading(false);
      setCurrentImageIndex(0);
      setIsImageLoading(true);
    };

    window.addEventListener("reset-downloader", onReset);
    return () => window.removeEventListener("reset-downloader", onReset);
  }, []);

  const handlePaste = async () => {
    try {
      const permission = await navigator.permissions.query({
        name: "clipboard-read" as PermissionName,
      });
      if (permission.state === "granted" || permission.state === "prompt") {
        const text = await navigator.clipboard.readText();
        if (text) {
          setUrl(text);
          setError(null);
        } else {
          setError("Tu portapapeles está vacío.");
        }
      } else {
        setError("Permiso denegado para acceder al portapapeles.");
      }
    } catch (err) {
      setError("No se pudo pegar. Inténtalo manually.");
    }
  };

  const handleSearch = async () => {
    if (!url.trim()) {
      setError("Por favor, ingresa una URL de TikTok para comenzar.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setVideoInfo(null);
    setCurrentImageIndex(0);
    setIsImageLoading(true);
    try {
      const response = await fetch("/api/tiktok-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "No se pudo obtener la información del video."
        );
      }
      setVideoInfo(data.videoInfo);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ocurrió un error desconocido."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (downloadUrl: string, type: "video" | "audio" | "image", filenamePrefix?: string) => {
    if (!videoInfo) return;
    setDownloadingUrl(downloadUrl);

    const filename = filenamePrefix || `TikSnap-${videoInfo.author.uniqueId}-${videoInfo.id}`;
    const cookieParam = videoInfo.cookies ? `&cookies=${encodeURIComponent(videoInfo.cookies)}` : "";
    const proxyUrl = `/api/tiktok-download?url=${encodeURIComponent(
      downloadUrl
    )}&filename=${encodeURIComponent(filename)}${cookieParam}&type=${type}`;

    const link = document.createElement("a");
    link.href = proxyUrl;
    link.setAttribute(
      "download",
      `${filename}.${type === "audio" ? "mp3" : type === "image" ? "jpg" : "mp4"}`
    );

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloadingUrl(null), type === "image" ? 1000 : 4000);
  };

  const handleReset = () => {
    setUrl("");
    setVideoInfo(null);
    setError(null);
    setIsLoading(false);
    setCurrentImageIndex(0);
    setIsImageLoading(true);
  };

  const videoOption = videoInfo?.downloadOptions.find(
    (opt) => opt.type === "video"
  );
  const audioOption = videoInfo?.downloadOptions.find(
    (opt) => opt.type === "audio"
  );

  return (
    <div className="w-full max-w-md space-y-6">
      {!videoInfo ? (
        <>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm text-balance">
                Pega un enlace para descargar videos, fotos y audios <br className="hidden sm:block" /> sin marca de agua.
              </p>
            </div>
            <div className="relative">
              <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="url"
                placeholder="https://www.tiktok.com/@usuario/video/..."
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError(null);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="pl-12 pr-12 py-6 text-base bg-gray-900 border-2 border-gray-800 rounded-2xl focus-visible:border-[#FE2C55] focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-300 placeholder:text-gray-500 hover:border-gray-700"
                disabled={isLoading}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePaste}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white hover:bg-gray-700"
                aria-label="Pegar enlace del portapapeles"
              >
                <Clipboard className="w-5 h-5" />
              </Button>
            </div>
            {error && (
              <Alert
                variant="destructive"
                className="bg-red-900/20 border-red-800 text-red-200"
              >
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
          <Button
            onClick={handleSearch}
            disabled={!url.trim() || isLoading}
            className="w-full py-6 text-base font-semibold bg-[#FE2C55] hover:bg-[#FF5C8A] disabled:bg-gray-700 disabled:text-gray-400 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Buscando...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" /> Buscar
              </>
            )}
          </Button>
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-gray-800 rounded-full">
                <Sparkles className="w-5 h-5 text-[#FE2C55]" />
              </div>
              <p className="font-semibold text-sm">Sin Marca de Agua</p>
              <p className="text-xs text-gray-400">
                Descargas limpias en calidad HD.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-gray-800 rounded-full">
                <Music className="w-5 h-5 text-[#FE2C55]" />
              </div>
              <p className="font-semibold text-sm">Audio en MP3</p>
              <p className="text-xs text-gray-400">
                Extrae el sonido original de la publicación.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-gray-800 rounded-full">
                <Zap className="w-5 h-5 text-[#FE2C55]" />
              </div>
              <p className="font-semibold text-sm">Rápido y Fácil</p>
              <p className="text-xs text-gray-400">
                Pega, busca y descarga. Así de simple.
              </p>
            </div>
          </div>
        </>
      ) : (
        <Card className="bg-gray-900 border-gray-700 rounded-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={videoInfo.author.avatar}
                alt={`Avatar de ${videoInfo.author.nickname}`}
                width={40}
                height={40}
                className="rounded-full border-2 border-gray-700 w-10 h-10 object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(videoInfo!.author.nickname)}&background=FE2C55&color=fff&size=40`; }}
              />
              <div>
                <p className="font-semibold text-white">
                  {videoInfo.author.nickname}
                </p>
                <p className="text-xs text-gray-400">
                  @{videoInfo.author.uniqueId}
                </p>
              </div>
            </div>
            {videoInfo.type === "video" && (
              <div className="relative w-full sm:w-[80%] mx-auto aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-gray-800">
                <Image
                  src={videoInfo.cover}
                  alt={`Portada del video de ${videoInfo.author.nickname}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "contain", backgroundColor: "#000" }}
                  priority
                />
              </div>
            )}
            
            <p className="text-sm text-gray-300 line-clamp-2">
              {videoInfo.description}
            </p>

            {videoInfo.type === "photo" && videoInfo.images && (
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3 w-full">
                  
                  {/* Botón Anterior (Izquierda) */}
                  {videoInfo.images.length > 1 && (
                    <button
                      onClick={() => {
                        setIsImageLoading(true);
                        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : videoInfo.images!.length - 1))
                      }}
                      className="flex-shrink-0 p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors border border-gray-700 shadow-md disabled:opacity-50"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  )}

                  {/* Contenedor de la Imagen */}
                  <div className="relative flex-grow w-full max-w-sm mx-auto aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900">
                    {/* Skeleton/Loading State */}
                    {isImageLoading && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-800 animate-pulse">
                        <Loader2 className="w-10 h-10 text-gray-500 animate-spin" />
                      </div>
                    )}
                    
                    <Image
                      key={currentImageIndex} // Force React to treat this as a new image to unmount the old one instantly
                      src={videoInfo.images[currentImageIndex]}
                      alt={`Imagen ${currentImageIndex + 1} de ${videoInfo.author.nickname}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{ objectFit: "contain", backgroundColor: "#000" }}
                      onLoad={() => setIsImageLoading(false)}
                      priority
                      className={`transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                    />
                    
                    {/* Contador */}
                    {videoInfo.images.length > 1 && (
                      <div className="absolute top-3 right-3 z-20 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                        {currentImageIndex + 1} / {videoInfo.images.length}
                      </div>
                    )}
                  </div>

                  {/* Botón Siguiente (Derecha) */}
                  {videoInfo.images.length > 1 && (
                    <button
                      onClick={() => {
                        setIsImageLoading(true);
                        setCurrentImageIndex((prev) => (prev < videoInfo.images!.length - 1 ? prev + 1 : 0))
                      }}
                      className="flex-shrink-0 p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors border border-gray-700 shadow-md disabled:opacity-50"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}
                </div>
              </div>
            )}
            <div className="space-y-3 pt-4">
              {videoInfo.type === "photo" && videoInfo.images && (
                <Button
                  onClick={() => handleDownload(videoInfo.images![currentImageIndex], "image", `TikSnap-${videoInfo.author.uniqueId}-img${currentImageIndex + 1}`)}
                  disabled={downloadingUrl === videoInfo.images![currentImageIndex]}
                  className="w-full py-6 text-base font-semibold bg-[#FE2C55] hover:bg-[#FF5C8A] disabled:bg-gray-700 disabled:text-gray-400 rounded-2xl transition-all duration-300 shadow-lg shadow-[#FE2C55]/20"
                >
                  {downloadingUrl === videoInfo.images![currentImageIndex] ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Download className="w-5 h-5 mr-2" />
                  )}
                  {videoInfo.images.length > 1 
                    ? `Descargar Imagen (${currentImageIndex + 1}/${videoInfo.images.length})` 
                    : "Descargar Imagen HD"}
                </Button>
              )}

              {videoInfo.type === "video" && videoOption && (
                <Button
                  onClick={() => handleDownload(videoOption.url, "video")}
                  disabled={!!downloadingUrl}
                  className="w-full py-6 text-base font-semibold bg-[#FE2C55] hover:bg-[#FF5C8A] disabled:bg-gray-700 disabled:text-gray-400 rounded-2xl transition-all duration-300"
                >
                  {downloadingUrl === videoOption.url ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Download className="w-5 h-5 mr-2" />
                  )}
                  Descargar Video (HD)
                </Button>
              )}

              {audioOption && (
                <Button
                  onClick={() => handleDownload(audioOption.url, "audio")}
                  disabled={!!downloadingUrl}
                  variant="outline"
                  className="w-full py-6 border-[#FE2C55] text-[#FE2C55] hover:bg-[#FE2C55]/10 hover:text-white rounded-xl transition-all duration-300 bg-transparent"
                >
                  {downloadingUrl === audioOption.url ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Music className="w-4 h-4 mr-2" />
                  )}
                  Descargar Audio (MP3)
                </Button>
              )}
            </div>

            <Button
              onClick={handleReset}
              variant="ghost"
              className="w-full mt-4 py-4 text-base text-[#FE2C55] hover:bg-transparent hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" /> Nueva búsqueda
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
