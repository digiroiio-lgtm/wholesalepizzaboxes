import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Get Wholesale Quote",
  description: "Request wholesale pricing for pizza boxes, custom print programs, and nationwide delivery support.",
  path: "/get-quote",
});

export default function GetQuotePage() {
  return (
    <Section>
      <h1 className="mb-3 text-3xl font-extrabold">Get Wholesale Quote</h1>
      <p className="mb-6 text-slate-700">No obligation. Fast response within 24 hours. Bulk pricing and custom print support.</p>
      <QuoteForm />
    </Section>
  );
}
