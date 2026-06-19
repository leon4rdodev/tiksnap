import Link from "next/link";
import { Home, Search, BookOpen, HelpCircle, Smartphone, ArrowRight } from "lucide-react";

const popularLinks = [
  { href: "/como-usar", label: "Cómo Descargar", icon: Smartphone },
  { href: "/blog", label: "Blog y Guías", icon: BookOpen },
  { href: "/#faq", label: "Preguntas Frecuentes", icon: HelpCircle },
  { href: "/#descargador", label: "Descargar Ahora", icon: Search },
];

export default function NotFound() {
  return (
    <div className="flex flex-col items-center px-4 md:px-12">
      <div className="max-w-2xl w-full text-center space-y-10 pt-8 md:pt-16">
        {/* 404 Visual */}
        <div className="relative">
          <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 leading-none select-none">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold mt-4">
            Página No Encontrada
          </p>
        </div>

        {/* Message */}
        <div className="space-y-3 max-w-lg mx-auto">
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            ¡Ups! Esta página se perdió en el algoritmo
          </p>
          <p className="text-sm md:text-base text-gray-400">
            La página que buscas no existe, fue movida o quizás el enlace es incorrecto.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            <span>Ir al Inicio</span>
          </Link>
          <Link
            href="/#descargador"
            className="inline-flex items-center space-x-2 border border-gray-600 hover:border-gray-500 text-gray-200 hover:text-white font-semibold px-8 py-4 rounded-full transition-all"
          >
            <Search className="w-5 h-5" />
            <span>Probar Descargador</span>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="border border-gray-700 rounded-xl p-6 md:p-8">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5 text-center">
            Navegación Rápida
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-rose-600 hover:bg-gray-800/50 transition-all group text-left"
              >
                <link.icon className="w-5 h-5 text-gray-400 group-hover:text-rose-600 transition-colors flex-shrink-0" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-rose-600 ml-auto transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Fun Fact Disclaimer */}
        <div className="border border-yellow-700/50 rounded-xl p-6">
          <p className="text-xs text-yellow-400 font-semibold mb-2">
            💡 DATO CURIOSO
          </p>
          <p className="text-sm text-yellow-100/90">
            Mientras estás aquí, ¿sabías que TikSnap te permite descargar videos
            de TikTok en calidad HD sin marca de agua? 100% gratis, sin registro.
          </p>
          <Link
            href="/#descargador"
            className="inline-flex items-center space-x-1.5 mt-4 text-rose-600 hover:text-rose-500 font-semibold text-sm transition-colors"
          >
            <span>Pruébalo ahora</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
