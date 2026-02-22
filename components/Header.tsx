"use client";
import Link from "next/link";
import {
  Download,
  BookOpen,
  HelpCircle,
  Mail,
  Info,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    {
      href: "/como-usar",
      label: "Cómo Descargar",
      icon: Download,
      isActive: isActive("/como-usar"),
    },
    {
      href: "/blog",
      label: "Blog",
      icon: BookOpen,
      isActive: isActive("/blog") || pathname.startsWith("/blog/"),
    },
    {
      href: "/#faq",
      label: "FAQs",
      icon: HelpCircle,
      isActive: false,
    },
    {
      href: "/contacto",
      label: "Contacto",
      icon: Mail,
      isActive: isActive("/contacto"),
    },
    {
      href: "/acerca-de",
      label: "Acerca de",
      icon: Info,
      isActive: isActive("/acerca-de"),
    },
  ];

  // Función compartida para manejar el click del CTA
  const handleCTAClick = () => {
    if (pathname === "/") {
      const descargador = document.getElementById("descargador");
      if (descargador) {
        descargador.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      window.location.href = "/";
    }
  };

  // Función compartida para manejar click en links (móvil)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 shadow-lg border-b border-gray-800 transition-all duration-300 ease-out">
        <nav className="py-4 px-6 md:px-12">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold tracking-tight hover:scale-105 transition-transform z-50"
            >
              Tik<span className="text-[#FE2C55]">Snap</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors flex items-center space-x-2 ${
                    link.isActive
                      ? "text-[#FE2C55]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              ))}
              {/* CTA Button */}
              <button
                onClick={handleCTAClick}
                className="bg-[#FE2C55] hover:bg-[#ff1744] text-white px-4 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-[#FE2C55]/30 flex items-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Ahora</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Inside Header */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 pt-2 space-y-4 max-w-6xl mx-auto border-gray-700/50">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-base font-medium transition-colors flex items-center space-x-3 py-2 ${
                  link.isActive
                    ? "text-[#FE2C55]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            ))}

            {/* CTA Button - Mobile */}
            <div className="pt-2">
              <button
                onClick={() => {
                  handleCTAClick();
                  handleLinkClick();
                }}
                className="w-full bg-[#FE2C55] hover:bg-[#ff1744] text-white px-6 py-3 rounded-full font-semibold text-base transition-all hover:scale-105 shadow-lg shadow-[#FE2C55]/30 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Descargar Ahora</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
