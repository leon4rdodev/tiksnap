"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { posts } from "@/lib/blog-data";
import PostCard from "@/components/blog/PostCard";

export default function FinalCTA() {
  // Obtener los últimos 3 posts
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 space-y-16">
      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FE2C55]/20 via-[#25F4EE]/10 to-transparent border border-[#FE2C55]/30 p-12 text-center">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#FE2C55]/10 border border-[#FE2C55]/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#FE2C55]" />
            <span className="text-sm font-medium text-[#FE2C55]">
              100% Gratis y Sin Límites
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Listo para Descargar?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Comienza a descargar tus videos favoritos de TikTok sin marca de
            agua en alta calidad. No necesitas registro ni instalación.
          </p>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center space-x-2 bg-[#FE2C55] hover:bg-[#FE2C55]/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FE2C55]/25 cursor-pointer"
          >
            <span>Comenzar Ahora</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Aprende Más Sobre TikTok
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre consejos, trucos y guías para sacarle el máximo provecho a
            tus videos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-[#FE2C55] hover:text-[#FE2C55]/80 font-medium transition-colors"
          >
            <span>Ver todos los artículos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
