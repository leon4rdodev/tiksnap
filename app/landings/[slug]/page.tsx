import { notFound } from "next/navigation";
import { getLandingContent, getAllLandingSlugs } from "@/lib/landing-content";
import type { Metadata } from "next";
import Script from "next/script";
import DownloaderTool from "@/components/DownloaderTool";
import FinalCTA from "@/components/FinalCTA";
import { CheckCircle, Shield, BookOpen, Headphones, Globe } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getLandingContent(params.slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.ogTitle,
      description: page.ogDescription,
      url: `https://www.tiksnap.es/landings/${page.slug}`,
      siteName: "TikSnap",
      locale: "es_ES",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle,
      description: page.ogDescription,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://www.tiksnap.es/landings/${page.slug}`,
    },
  };
}

export default function LandingPage({ params }: PageProps) {
  const page = getLandingContent(params.slug);
  if (!page) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Script
        id="landing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col items-center px-4 md:px-12">
        <section className="w-full max-w-2xl text-center mb-6 pt-3 md:pt-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            {page.h1}
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            {page.heroText}
          </p>
        </section>

        <section
          id="descargador"
          aria-label="Descargador de TikTok"
          className="w-full flex justify-center"
        >
          <DownloaderTool />
        </section>
      </div>

      <div className="flex flex-col items-center justify-center px-4 md:px-12">
         <section className="max-w-3xl w-full text-left mt-8 space-y-8 text-gray-300">
           <div className="space-y-8">
            {page.sections.map((section, i) => (
              <div
                key={i}
                className=" p-6 md:p-8 rounded-2xl border border-gray-700"
              >
                <div className="flex flex-col md:flex-row items-start gap-6 text-left">
                  <div className="bg-[#FE2C55]/10 p-4 rounded-full flex-shrink-0">
                    {i % 4 === 0 ? <BookOpen className="w-8 h-8 text-[#FE2C55]" /> :
                     i % 4 === 1 ? <CheckCircle className="w-8 h-8 text-[#FE2C55]" /> :
                     i % 4 === 2 ? <Headphones className="w-8 h-8 text-[#FE2C55]" /> :
                                   <Globe className="w-8 h-8 text-[#FE2C55]" />}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {section.title}
                    </h2>
                    {section.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className={`text-sm md:text-base text-gray-400 leading-relaxed ${
                          j < section.paragraphs.length - 1 ? "mb-4" : ""
                        }`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="max-w-3xl w-full text-left mt-8"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            className="text-3xl font-bold text-white text-center mb-8"
          >
            Preguntas Frecuentes
          </h2>
          <div className="rounded-xl border border-gray-700 divide-y divide-gray-800">
            {page.faqs.map((faq, i) => (
              <details
                key={i}
                className="group"
              >
                <summary className="p-4 font-semibold text-white cursor-pointer hover:bg-white/[0.02] transition-colors list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 pt-0 text-sm text-gray-400 border-t border-gray-700">
                  <p className="mt-3">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <div className="my-20">
          <FinalCTA />
        </div>
      </div>
    </>
  );
}
