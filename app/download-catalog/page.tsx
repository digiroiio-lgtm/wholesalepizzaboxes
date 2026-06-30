import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Download Pizza Box Catalog",
  description: "Request access to wholesale pizza box catalog options by size, material, and custom print capability.",
  path: "/download-catalog",
});

export default function DownloadCatalogPage() {
  return (
    <Section>
      <h1 className="mb-3 text-3xl font-extrabold">Download Catalog</h1>
      <p className="mb-6 text-slate-700">Share your business details and our team will send the current wholesale catalog with sizing and print options.</p>
      <QuoteForm compact />
    </Section>
  );
}
