import type { Metadata } from "next";
import { ExternalLink, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Acerca de TikSnap",
  description:
    "TikSnap nació porque me daba paja usar herramientas llenas de anuncios. Creado por Leonardo.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center px-4 md:px-12">
      <section className="w-full max-w-2xl mx-auto pt-8 md:pt-16 pb-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Acerca de TikSnap
          </h1>
        </div>

        <div className="mt-8 border border-gray-700 rounded-xl p-6 md:p-8 text-center hover:border-[#FE2C55] transition-colors">
        <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto mb-4 border-2 border-[#FE2C55] overflow-hidden">
          <img
            src="https://ui-avatars.com/api/?name=Leonardo&background=FE2C55&color=fff&size=80"
            alt="Leonardo"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-gray-400 leading-relaxed mb-4">
          TikSnap lo hice yo, <strong className="text-white">Leonardo</strong>.
          La hice porque me daba paja usar herramientas llenas de anuncios, pop-ups y límites
          de descarga. Quería algo limpio, rápido y que funcionara sin pedir registro.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          No hay un equipo enorme ni una empresa detrás. Solo yo, un café y ganas de hacer
          algo útil sin molestar al usuario con publicidad invasiva.
        </p>

        <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
          <span>Hecho con</span>
          <Heart className="w-4 h-4 text-[#FE2C55] fill-current" />
          <span>en República Dominicana</span>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 flex justify-center space-x-6 text-sm">
          <a
            href="https://github.com/leon4rdodev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#FE2C55] transition-colors inline-flex items-center space-x-1"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://x.com/leon4rdodev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#FE2C55] transition-colors inline-flex items-center space-x-1"
          >
            <span>X / Twitter</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
      </section>
    </div>
  );
}
