"use client";

import type { Metadata } from "next";
import { Mail, MapPin, Send, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Error al enviar el mensaje"
      );
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Contáctanos</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          ¿Tienes preguntas, sugerencias o necesitas ayuda? Estamos aquí para ti
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Información de Contacto
          </h2>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#FE2C55] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">Email</h3>
                <a
                  href="mailto:tiksnap.es@gmail.com"
                  className="text-gray-400 hover:text-[#FE2C55] transition-colors"
                >
                  tiksnap.es@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Respondemos en 24-48 horas
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#FE2C55] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">Ubicación</h3>
                <p className="text-gray-400">República Dominicana</p>
                <p className="text-sm text-gray-500 mt-1">
                  Servicio global disponible
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FE2C55]/10 to-transparent p-6 rounded-lg border border-[#FE2C55]/30">
            <h3 className="font-bold text-white mb-3">Preguntas Frecuentes</h3>
            <p className="text-gray-400 text-sm mb-3">
              Antes de contactarnos, te recomendamos revisar nuestra sección de
              preguntas frecuentes, donde encontrarás respuestas a las dudas más
              comunes.
            </p>
            <a
              href="/#faq"
              className="text-[#FE2C55] hover:underline text-sm font-semibold"
            >
              Ver FAQ →
            </a>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="font-bold text-white mb-3">
              Reportar Problema de Derechos de Autor
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Si crees que tu contenido está siendo usado sin autorización, por
              favor contáctanos con:
            </p>
            <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
              <li>Tu información de contacto</li>
              <li>Enlace al contenido original</li>
              <li>Descripción del problema</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Envíanos un Mensaje
          </h2>

          {status === "success" && (
            <div className="bg-green-900/20 border border-green-700 p-4 rounded-lg mb-6">
              <p className="text-green-300">
                ✓ Mensaje enviado exitosamente. Te responderemos pronto.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-900/20 border border-red-700 p-4 rounded-lg mb-6">
              <p className="text-red-300">
                ✗{" "}
                {errorMessage ||
                  "Error al enviar el mensaje. Intenta nuevamente."}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#FE2C55] focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#FE2C55] focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-white font-medium mb-2"
              >
                Asunto
              </label>
              <div className="relative">
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-4 pr-12 py-3 text-white focus:border-[#FE2C55] focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="copyright">Derechos de Autor (DMCA)</option>
                  <option value="negocios">Oportunidades de Negocio</option>
                  <option value="otro">Otro</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-white font-medium mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                rows={6}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#FE2C55] focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#FE2C55] hover:bg-[#FE2C55]/90 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Al enviar este formulario, aceptas nuestra{" "}
              <a href="/privacidad" className="text-[#FE2C55] hover:underline">
                Política de Privacidad
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
