import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Complete construction services — basement to turnkey. Structural work, MEP systems, interior finishing, and full project management.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
