"use client";

import Link from "next/link";
import { Post } from "@/lib/blog-data";
import Tag from "./Tag";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 h-full flex flex-col group transition-transform duration-300 hover:scale-105 hover:border-[#FE2C55]">

        <div className="p-6 flex flex-col flex-1">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FE2C55] transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-3">
              {post.description}
            </p>
          </div>
          <div className="flex items-center mt-6 pt-4 border-t border-gray-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full mr-3 w-8 h-8 object-cover"
              onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.name)}&background=FE2C55&color=fff&size=32`; }}
            />
            <div>
              <p className="text-sm font-semibold text-white">
                {post.author.name}
              </p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
