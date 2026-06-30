import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://wholesalepizzaboxes.com"),
  title: "Wholesale Pizza Boxes | Bulk & Custom Printed Pizza Boxes",
  description:
    "Industrial B2B supplier for wholesale pizza boxes, custom printing, and nationwide delivery support for restaurants, chains, and distributors.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wholesale Pizza Boxes",
    url: "https://wholesalepizzaboxes.com",
    telephone: "+1-888-936-2693",
    areaServed: "US",
    description:
      "B2B wholesale supplier of pizza boxes with custom printing, manufacturing capability, and nationwide delivery.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Wholesale Pizza Boxes",
    serviceType: "B2B Pizza Packaging Supply",
    areaServed: "United States",
    url: "https://wholesalepizzaboxes.com",
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <JsonLd data={orgSchema} />
        <JsonLd data={serviceSchema} />
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
