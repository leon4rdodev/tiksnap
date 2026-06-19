import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog-data";
import BlogSearch from "@/components/blog/BlogSearch";

export const metadata: Metadata = {
  title: "Blog - Consejos, Tutoriales y Noticias sobre TikTok",
  description:
    "Explora nuestro blog para encontrar las mejores guías, tutoriales y análisis para dominar TikTok. Aprende sobre el algoritmo, edición de video y mucho más.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col items-center px-4 md:px-12">
      <section className="w-full max-w-6xl mx-auto mb-6 pt-8 md:pt-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Blog de <span className="text-[#FE2C55]">TikSnap</span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Guías, tutoriales y análisis para dominar TikTok. Aprende sobre el algoritmo, 
            estrategias de contenido, edición de video y mucho más.
          </p>
        </div>

        <BlogSearch posts={posts} />
      </section>
    </div>
  );
}
