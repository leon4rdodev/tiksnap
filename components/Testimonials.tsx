"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "María González",
    role: "Creadora de Contenido",
    avatar: "https://i.pravatar.cc/150?img=9", // Mujer
    rating: 5,
    text: "TikSnap es increíble. Descargo videos para mi portafolio sin marca de agua y en HD. ¡Exactamente lo que necesitaba!",
  },
  {
    name: "Carlos Ruiz",
    role: "Community Manager",
    avatar: "https://i.pravatar.cc/150?img=12", // Hombre
    rating: 5,
    text: "Uso TikSnap todos los días para mi trabajo. Es rápido, confiable y completamente gratis. No puedo pedir más.",
  },
  {
    name: "Ana Martínez",
    role: "Estudiante",
    avatar: "https://i.pravatar.cc/150?img=5", // Mujer
    rating: 5,
    text: "Perfecto para guardar videos educativos de TikTok. La calidad es excelente y no necesito instalar nada.",
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo Que Dicen Nuestros Usuarios
          </h2>
          <p className="text-gray-400 text-lg">
            Miles de personas confían en TikSnap cada día
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#FE2C55]/50 transition-all"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[#FE2C55]/30 mb-4" />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-900/20 border border-green-700 px-6 py-3 rounded-lg">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="text-white font-bold">4.9/5</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-400">Basado en 12,450+ reseñas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
