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
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = "";
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

  // Función compartida para manejar el click del CTA (scroll)
  const handleCTAClick = () => {
    if (pathname === "/") {
      const descargador = document.getElementById("descargador");
      if (descargador) {
        descargador.scrollIntoView({ behavior: "smooth", block: "center" });
        window.dispatchEvent(new CustomEvent("reset-downloader"));
      }
    } else {
      window.location.href = "/";
    }
  };

  // Manejar click de instalación de PWA o volver al CTA normal
  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    } else {
      handleCTAClick();
    }
  };

  // Función compartida para manejar click en links (móvil) con animación de salida
  const handleLinkClick = useCallback((href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => router.push(href), 300);
  }, [router]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled ? "backdrop-blur-md bg-black/70 border-b border-gray-800 shadow-lg" : "bg-transparent border-transparent"
        }`}
      >
        <nav className="py-4 px-4 md:px-12">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.dispatchEvent(new CustomEvent("reset-downloader"));
                }
              }}
              className="text-2xl md:text-3xl font-bold tracking-tight transition-transform z-50"
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
                onClick={handleInstallClick}
                className="bg-[#FE2C55] hover:bg-[#ff1744] text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Instalar App</span>
              </button>
            </div>

            {/* Animated Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 py-2 text-gray-300 hover:text-white transition-colors flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[2px] bg-current transform transition-all duration-300 ease-out ${isMenuOpen ? "translate-y-[8px] rotate-45" : ""}`}></span>
              <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ease-out ${isMenuOpen ? "opacity-0 translate-x-3" : ""}`}></span>
              <span className={`block w-6 h-[2px] bg-current transform transition-all duration-300 ease-out ${isMenuOpen ? "-translate-y-[8px] -rotate-45" : ""}`}></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md bg-black/70 z-40 flex flex-col pt-24 px-6 transition-opacity duration-300 ease-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => { if (e.target === e.currentTarget) setIsMenuOpen(false); }}
      >
        <div className="flex flex-col min-h-[calc(100dvh-6rem)] justify-between pb-8">
          <nav className="flex flex-col items-center space-y-1 pt-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick(link.href)}
                style={{ animationDelay: `${i * 80}ms` }}
                className={`w-full text-center text-2xl font-semibold py-5 rounded-xl transition-colors duration-200 ${
                  isMenuOpen ? "animate-fade-in-up opacity-0" : ""
                } ${
                  link.isActive ? "text-[#FE2C55]" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col items-center pt-10">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => handleInstallClick(), 300);
              }}
              className="w-full max-w-sm bg-[#FE2C55] hover:bg-[#ff1744] text-white px-8 py-5 rounded-full font-semibold text-xl"
            >
              Instalar App
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
