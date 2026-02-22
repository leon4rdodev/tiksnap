import { notFound } from "next/navigation";
import { posts, Post } from "@/lib/blog-data";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/blog/Tag";
import ShareButtons from "@/components/ShareButtons";
import RelatedPosts from "@/components/RelatedPosts";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

// Genera las rutas estáticas en tiempo de construcción
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Genera la metadata dinámica para cada post
export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Post No Encontrado" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function PostPage({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: post.author.avatar,
    },
    publisher: {
      "@type": "Organization",
      name: "TikSnap",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tiksnap.es/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.tiksnap.es/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.tiksnap.es",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.tiksnap.es/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.tiksnap.es/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <article className="max-w-3xl mx-auto py-12 px-6">
      <div className="mb-8">
        <Link
          href="/blog"
          className="flex items-center text-sm text-[#FE2C55] hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al Blog
        </Link>
        <div className="flex items-center space-x-2 mb-4">
          {post.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <h1 className="text-4xl font-bold text-white leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-400">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-white">{post.author.name}</p>
            <p className="text-sm">{post.date}</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8 border border-gray-700">
        <Image
          src={post.image}
          alt={`Imagen de portada para ${post.title}`}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="prose prose-invert prose-lg max-w-none prose-h2:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-400 prose-strong:text-white">
        {post.content}
      </div>

      {/* Share Buttons */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug={post.slug} posts={posts} />
    </article>
    </>
  );
}
