import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog-data";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Tag from "@/components/blog/Tag";
import BlogAvatar from "@/components/blog/BlogAvatar";
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
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Genera la metadata dinámica para cada post
export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post No Encontrado" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  const allPosts = getAllPosts();

  if (!post) {
    notFound();
  }

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
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
        url: "https://www.tiksnap.es/icon.png",
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
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <h1 className="text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-400">
            <BlogAvatar
              src={post.author.avatar}
              name={post.author.name}
              size={40}
              className="rounded-full mr-4 w-10 h-10 object-cover"
            />
            <div>
              <p className="font-semibold text-white">{post.author.name}</p>
              <p className="text-sm">{post.date}</p>
            </div>
          </div>
        </div>

        <div 
          className="prose prose-invert prose-lg max-w-none prose-h2:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-400 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
        </div>

        {/* Related Posts */}
        <RelatedPosts currentSlug={post.slug} posts={allPosts} />
      </article>
    </>
  );
}
