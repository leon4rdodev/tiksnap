import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { Post } from "@/lib/blog-data";

interface RelatedPostsProps {
  currentSlug: string;
  posts: Post[];
  maxPosts?: number;
}

export default function RelatedPosts({
  currentSlug,
  posts,
  maxPosts = 3,
}: RelatedPostsProps) {
  // Filtrar el post actual y obtener posts aleatorios
  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">
        Artículos Relacionados
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-gray-900 rounded-lg border border-gray-800 hover:border-[#FE2C55] transition-all overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-48 bg-gray-800 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#FE2C55]/10 text-[#FE2C55] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-[#FE2C55] transition-colors">
                {post.title}
              </h3>

              {/* Date */}
              <div className="flex items-center text-xs text-gray-400 mb-3">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{post.date}</span>
              </div>

              {/* Read More */}
              <div className="flex items-center text-sm text-[#FE2C55] font-medium">
                <span>Leer más</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
