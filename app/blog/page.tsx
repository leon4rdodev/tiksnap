import type { Metadata } from "next";
import { posts } from "@/lib/blog-data";
import PostCard from "@/components/blog/PostCard";

export const metadata: Metadata = {
  title: "Blog - Consejos, Tutoriales y Noticias sobre TikTok",
  description:
    "Explora nuestro blog para encontrar las mejores guías, tutoriales y análisis para dominar TikTok. Aprende sobre el algoritmo, edición de video y mucho más.",
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Nuestro Blog</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Un espacio dedicado a compartir todo lo que necesitas saber para
          triunfar en TikTok y sacarle el máximo partido a tus videos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
