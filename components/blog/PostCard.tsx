"use client";

import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/blog-data";
import Tag from "./Tag";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 h-full flex flex-col group transition-transform duration-300 hover:scale-105 hover:border-[#FE2C55]">
        <div className="relative w-full h-48 bg-gradient-to-br from-[#FE2C55] to-[#25F4EE]">
          <Image
            src={post.image}
            alt={`Imagen de portada para ${post.title}`}
            fill
            style={{ objectFit: "cover" }}
            className="group-hover:opacity-90 transition-opacity"
            onError={(e) => {
              // Si la imagen falla, ocultamos el elemento de imagen
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex-1">
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
              {post.tags.map((tag) => (
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
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full mr-3"
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
