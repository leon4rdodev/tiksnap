import Link from "next/link";
import { Home, Search, ArrowLeft, TrendingUp } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 mb-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Visual */}
        <div className="relative">
          <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE2C55] to-purple-600 leading-none">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
            Página No Encontrada
          </p>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-xl text-gray-300">
            ¡Ups! Parece que esta página se perdió en el algoritmo de TikTok
          </p>
          <p className="text-gray-400">
            La página que buscas no existe o fue movida a otra URL.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 bg-[#FE2C55] hover:bg-[#FE2C55]/90 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            <span>Ir al Inicio</span>
          </Link>
          <Link
            href="/blog"
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            <TrendingUp className="w-5 h-5" />
            <span>Ver Blog</span>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="pt-8 border-t border-gray-800">
          <h2 className="text-sm font-semibold text-gray-400 mb-4">
            PÁGINAS POPULARES
          </h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link
              href="/como-usar"
              className="text-gray-300 hover:text-[#FE2C55] transition-colors"
            >
              → Cómo Descargar
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-[#FE2C55] transition-colors"
            >
              → Blog y Guías
            </Link>
            <Link
              href="/#faq"
              className="text-gray-300 hover:text-[#FE2C55] transition-colors"
            >
              → Preguntas Frecuentes
            </Link>
            <Link
              href="/#features"
              className="text-gray-300 hover:text-[#FE2C55] transition-colors"
            >
              → Características
            </Link>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p className="text-xs text-gray-500 mb-2">💡 DATO CURIOSO</p>
          <p className="text-sm text-gray-300">
            Mientras estás aquí, ¿sabías que TikSnap te permite descargar videos
            en calidad HD sin marca de agua completamente gratis?
          </p>
          <Link
            href="/#descargador"
            className="inline-block mt-4 text-[#FE2C55] hover:underline text-sm font-medium"
          >
            Pruébalo ahora →
          </Link>
        </div>
      </div>
    </div>
  );
}
