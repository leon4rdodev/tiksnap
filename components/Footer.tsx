import Link from "next/link";
import { Download, Shield, Lock, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto border-t border-gray-800 bg-gray-950">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Tik<span className="text-[#FE2C55]">Snap</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              La forma más rápida y segura de descargar videos de TikTok sin
              marca de agua. 100% gratis, sin límites.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-300">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Seguro y Privado</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-300 mt-2">
              <Lock className="w-4 h-4 text-blue-500" />
              <span>Sin Registro Requerido</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/como-usar"
                  className="text-gray-400 hover:text-[#FE2C55] transition-colors flex items-center space-x-2"
                >
                  <Download className="w-3 h-3" />
                  <span>Cómo Descargar</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-[#FE2C55] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/acerca-de"
                  className="text-gray-400 hover:text-[#FE2C55] transition-colors"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-400 hover:text-[#FE2C55] transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-gray-400 hover:text-[#FE2C55] transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terminos"
                  className="text-gray-400 hover:text-[#FE2C55] transition-colors"
                >
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-gray-400 hover:text-[#FE2C55] transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <span className="text-gray-300 text-xs">GDPR Compliant</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 space-y-2 md:space-y-0">
            <p>
              Copyright © {currentYear} TikSnap. Todos los derechos reservados.
            </p>
            <p className="flex items-center space-x-1">
              <span>Hecho con</span>
              <Heart className="w-3 h-3 text-[#FE2C55] fill-current" />
              <span>en República Dominicana</span>
            </p>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center md:text-left">
            TikSnap es un servicio independiente y no está afiliado, patrocinado
            ni asociado con TikTok o ByteDance Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
