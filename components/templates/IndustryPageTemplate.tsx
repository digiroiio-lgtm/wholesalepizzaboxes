import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { pageLabel, testimonials } from "@/lib/data/site";

export function IndustryPageTemplate({ slug }: { slug: string }) {
  const name = pageLabel(slug);

  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: name }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Pizza Packaging Solutions for {name}</h1>
        <p className="mt-4 text-slate-700">We build procurement-friendly pizza box programs for {name.toLowerCase()} that need reliable supply, custom print consistency, and freight-ready wholesale pricing.</p>
      </Section>
      <Section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Common Pain Points</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Inconsistent lead times and stockouts</li>
            <li>• Retail-level pricing at wholesale volume</li>
            <li>• Print quality variation across batches</li>
            <li>• Mismatched box formats for menu expansion</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Recommended Box Types</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Corrugated and heavy-duty pizza boxes for transport stability</li>
            <li>• Grease-resistant options for premium crust and topping profiles</li>
            <li>• Branded printed boxes for chain consistency</li>
            <li>• Slice and deep-dish formats for menu-specific packaging</li>
          </ul>
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Case-Style Testimonial</h2>
        <TestimonialCard name={testimonials[0].name} quote={testimonials[0].quote} />
      </Section>
      <FinalCTA />
    </>
  );
}
