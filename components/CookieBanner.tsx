"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Shield } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const cookiesAccepted = localStorage.getItem("cookies-accepted");
    if (!cookiesAccepted) {
      // Mostrar banner después de 1 segundo
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookies-accepted", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom">
      <div className="max-w-6xl mx-auto bg-gray-900 border border-gray-700 rounded-lg shadow-2xl relative">
        <div className="p-6 md:flex md:items-center md:justify-between">
          {/* Content */}
          <div className="flex-1 mb-4 md:mb-0 md:mr-6">
            <div className="flex items-center space-x-3 mb-2">
              <Cookie className="w-6 h-6 text-[#FE2C55]" />
              <h3 className="text-lg font-bold text-white">
                🍪 Cookies y Privacidad
              </h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed pr-6">
              Usamos cookies esenciales para mejorar tu experiencia. No
              rastreamos tu actividad ni vendemos tus datos.{" "}
              <Link
                href="/privacidad"
                className="text-[#FE2C55] hover:underline font-medium"
              >
                Leer más
              </Link>
            </p>
            <div className="flex items-center space-x-2 mt-2 text-xs text-gray-400">
              <Shield className="w-3 h-3 text-green-500" />
              <span>GDPR Compliant</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={rejectCookies}
              className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              Solo Esenciales
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-[#FE2C55] hover:bg-[#FE2C55]/90 text-white rounded-lg transition-colors text-sm font-bold shadow-lg"
            >
              Aceptar Todas
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={rejectCookies}
            className="absolute top-3 right-3 md:top-4 md:right-4 p-1 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
