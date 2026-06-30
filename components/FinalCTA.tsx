import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";

export function FinalCTA() {
  return (
    <Section className="rounded-2xl bg-emerald-900 text-white">
      <h2 className="text-2xl font-bold">Request Wholesale Pricing Today</h2>
      <p className="mt-3 max-w-3xl text-emerald-100">No obligation. Fast response. Bulk pricing support, custom print options, and nationwide delivery planning.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <CTAButton href="/get-quote">Get Quote</CTAButton>
        <CTAButton href="/download-catalog" variant="outline">Download Catalog</CTAButton>
      </div>
    </Section>
  );
}
