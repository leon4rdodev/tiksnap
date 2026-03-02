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
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Nuestro Blog</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Un espacio dedicado a compartir todo lo que necesitas saber para
          triunfar en TikTok y sacarle el máximo partido a tus videos.
        </p>
      </div>

      <BlogSearch posts={posts} />
    </div>
  );
}
