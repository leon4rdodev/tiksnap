"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {

  return (
    <div className="w-full max-w-6xl mx-auto">
      <section className="relative overflow-hidden rounded-xl border border-gray-700 p-8 md:p-12 text-center">
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 border border-gray-700 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#FE2C55]" />
            <span className="text-sm font-medium text-gray-300">
              100% Gratis y Sin Límites
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para Descargar?
          </h2>
          <p className="text-sm md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Comienza a descargar tus videos y fotos favoritas de TikTok sin marca de
            agua en alta calidad. No necesitas registro ni instalación.
          </p>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.dispatchEvent(new CustomEvent("reset-downloader"));
            }}
            className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-4 rounded-full cursor-pointer"
          >
            <span>Comenzar Ahora</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
