import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - TikSnap",
  description:
    "Contáctanos si tienes preguntas, sugerencias o necesitas ayuda con TikSnap. Estamos disponibles por email y formulario de contacto. Respondemos en 24-48 horas.",
  alternates: {
    canonical: "https://www.tiksnap.es/contacto",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
