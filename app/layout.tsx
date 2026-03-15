import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khushiconstruction.com"),
  title: {
    default: "Khushi Construction & Land Developers | Premium Home Building Services",
    template: "%s | Khushi Construction & Land Developers",
  },
  description:
    "From basement to dream home — Khushi Construction & Land Developers delivers complete construction solutions including structural work, plumbing, electrical, and interior finishing with premium materials.",
  keywords: [
    "construction company",
    "home building",
    "basement construction",
    "structural construction",
    "interior finishing",
    "plumbing",
    "electrical installation",
    "turnkey house",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khushiconstruction.com",
    siteName: "Khushi Construction & Land Developers",
    title: "Khushi Construction & Land Developers | Premium Home Building Services",
    description: "Complete construction solutions from basement to dream home.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushi Construction & Land Developers",
    description: "Premium home building services from basement to completion.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton phoneNumber="9845447449" />
      </body>
    </html>
  );
}
