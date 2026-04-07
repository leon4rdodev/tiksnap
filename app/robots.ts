import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Bots de IA reconocidos
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "CCBot", "anthropic-ai", "Claude-Web", "PerplexityBot", "Cohere-training"],
        allow: [
          "/llms.txt",
          "/ai.txt",
          "/brand-knowledge.txt",
          "/entities.txt",
          "/faq-ai.txt",
          "/llms-full.txt",
          "/snippets.txt"
        ],
      }
    ],
    sitemap: "https://www.tiksnap.es/sitemap.xml",
  };
}
