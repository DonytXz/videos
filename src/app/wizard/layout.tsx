import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tu campaña inmobiliaria | Deepia",
  description:
    "Explora los datos y mensajes de tu campaña de recorridos personalizados.",
};

export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
