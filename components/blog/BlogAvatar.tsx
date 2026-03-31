"use client";

/**
 * BlogAvatar Component
 * 
 * A client-side image component for blog authors that provides 
 * a graceful fallback to a generated avatar if the main 
 * image source fails to load.
 */

interface BlogAvatarProps {
  /** The primary image source URL */
  src: string;
  /** The author's name to generate the fallback avatar */
  name: string;
  /** Width and height in pixels */
  size: number;
  /** Additional CSS classes */
  className?: string;
}

export default function BlogAvatar({ src, name, size, className }: BlogAvatarProps) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        // Avoid infinite loop if the fallback also fails
        if (target.src.includes("ui-avatars.com")) return;
        
        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
          name
        )}&background=FE2C55&color=fff&size=${size}`;
      }}
    />
  );
}
