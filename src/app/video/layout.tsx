import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Un recorrido para cada comprador | Deepia",
  description:
    "Prueba un recorrido inmobiliario ilustrado y personaliza el mensaje para cada comprador.",
};

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
