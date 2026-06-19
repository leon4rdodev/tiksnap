import Link from "next/link";
import { Post } from "@/lib/blog-data";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-[#FE2C55] transition-colors p-5 flex flex-col justify-between h-full group">
        <div>
          <div className="text-xs font-semibold text-[#FE2C55] mb-2">{post.tags[0]}</div>
          <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:underline">
            {post.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-3 mb-4">
            {post.description}
          </p>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <span className="font-medium mr-2">{post.author.name}</span> • <span className="ml-2">{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
