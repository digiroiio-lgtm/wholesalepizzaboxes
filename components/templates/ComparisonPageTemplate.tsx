import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";
import { pageLabel } from "@/lib/data/site";

export function ComparisonPageTemplate({ slug }: { slug: string }) {
  const title = pageLabel(slug);

  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: title }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">{title}</h1>
        <p className="mt-4 text-slate-700">Use this practical comparison to choose the best packaging path for your volume, print, and logistics requirements.</p>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Comparison Table</h2>
        <ComparisonTable left="Wholesale Supplier" right="Retail Seller" />
      </Section>
      <Section className="grid gap-6 lg:grid-cols-3">
        <div><h3 className="mb-2 text-lg font-semibold">Pros</h3><p className="text-slate-700">Lower unit economics, better customization, and repeat-supply control.</p></div>
        <div><h3 className="mb-2 text-lg font-semibold">Cons</h3><p className="text-slate-700">Requires planning around MOQ and forecast windows.</p></div>
        <div><h3 className="mb-2 text-lg font-semibold">Best For</h3><p className="text-slate-700">Growing operators, chains, and distributors buying in volume.</p></div>
      </Section>
      <FinalCTA />
    </>
  );
}
