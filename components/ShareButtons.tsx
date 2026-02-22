"use client";

import { Facebook, Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = `https://tiksnap.es${url}`;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm text-gray-400 font-medium">Compartir:</span>
      
      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-[#1DA1F2] p-2 rounded-lg transition-colors group"
        aria-label="Compartir en Twitter"
      >
        <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-[#1877F2] p-2 rounded-lg transition-colors group"
        aria-label="Compartir en Facebook"
      >
        <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white" />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-[#0A66C2] p-2 rounded-lg transition-colors group"
        aria-label="Compartir en LinkedIn"
      >
        <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white" />
      </a>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className={`p-2 rounded-lg transition-all ${
          copied
            ? "bg-green-600"
            : "bg-gray-800 hover:bg-gray-700"
        }`}
        aria-label="Copiar enlace"
      >
        {copied ? (
          <Check className="w-4 h-4 text-white" />
        ) : (
          <LinkIcon className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </div>
  );
}
