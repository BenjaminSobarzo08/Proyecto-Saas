import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alma Estética | Reservá tu momento",
  description: "Elegí tu tratamiento y reservá online en Alma Estética, Palermo.",
};

export default function AlmaEsteticaLayout({
  children,
}: LayoutProps<"/alma-estetica">) {
  return children;
}
