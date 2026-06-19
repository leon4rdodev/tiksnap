import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-6">
        Artículos Relacionados
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group border border-gray-700 rounded-xl hover:border-[#FE2C55] transition-colors p-4 flex flex-col justify-between h-full"
          >
            <div>
              <div className="text-xs font-semibold text-[#FE2C55] mb-2">{post.tags[0]}</div>
              <h3 className="font-bold text-white mb-2 line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-gray-500 mb-3">{post.date}</p>
            </div>
            <div className="flex items-center text-sm text-[#FE2C55] font-medium">
              <span>Leer más</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
