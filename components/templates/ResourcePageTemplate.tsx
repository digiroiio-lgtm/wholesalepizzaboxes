import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { globalFaqs, pageLabel } from "@/lib/data/site";

export function ResourcePageTemplate({ slug, basePath }: { slug: string; basePath: "/resources" | "/guides" }) {
  const title = pageLabel(slug);
  const today = new Date().toISOString().slice(0, 10);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    dateModified: today,
    author: { "@type": "Person", name: "Packaging Technical Team" },
    publisher: { "@type": "Organization", name: "Wholesale Pizza Boxes" },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: basePath === "/resources" ? "Resources" : "Guides", href: basePath }, { label: title }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-600">Last updated: {today}</p>
        <p className="mt-4 text-slate-700">This guide helps US procurement teams evaluate {title.toLowerCase()} with practical manufacturing, compliance, and cost considerations.</p>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="font-semibold text-slate-900">Author / Reviewer</p>
          <p className="text-slate-700">Prepared by packaging specialists and reviewed by quality and print operations.</p>
        </div>
      </Section>
      <Section>
        <h2 className="mb-3 text-2xl font-bold text-slate-900">Decision Framework</h2>
        <ul className="space-y-2 text-slate-700">
          <li>• Clarify functional requirements: insulation, grease performance, and stack strength</li>
          <li>• Compare material grade and flute options against distribution risk</li>
          <li>• Align MOQ and lead times with demand forecasts</li>
          <li>• Validate compliance and sustainability documentation requirements</li>
        </ul>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <FAQAccordion faqs={globalFaqs} />
      </Section>
      <FinalCTA />
    </>
  );
}
