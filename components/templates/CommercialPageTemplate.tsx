import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { SpecTable } from "@/components/SpecTable";
import { JsonLd } from "@/components/JsonLd";
import { globalFaqs } from "@/lib/data/site";

export function CommercialPageTemplate({
  title,
  intro,
  slug,
}: {
  title: string;
  intro: string;
  slug: string;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: globalFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: intro,
    brand: "Wholesale Pizza Boxes",
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={productSchema} />
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-4xl text-slate-700">{intro}</p>
      </Section>
      <Section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Benefits for Volume Buyers</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Reliable recurring supply for restaurants, chains, and distributors</li>
            <li>• Consistent food-grade material quality with practical conversion specs</li>
            <li>• Manufacturing-backed pricing built for repeat wholesale procurement</li>
            <li>• National freight coordination and lead time visibility</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Buyer Checklist</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Confirm dimensions, wall type, and stack strength requirements</li>
            <li>• Validate print scope, color tolerances, and artwork timelines</li>
            <li>• Align MOQ with monthly forecast and reorder cadence</li>
            <li>• Review freight, warehousing, and delivery-state coverage</li>
          </ul>
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Specifications</h2>
        <SpecTable slug={slug} />
      </Section>
      <Section className="grid gap-6 lg:grid-cols-4">
        <RelatedLinks
          title="Related Products"
          links={[
            { href: "/wholesale-pizza-boxes", label: "Wholesale Pizza Boxes" },
            { href: "/custom-printed-pizza-boxes", label: "Custom Printed Pizza Boxes" },
            { href: "/eco-friendly-pizza-boxes", label: "Eco-Friendly Pizza Boxes" },
          ]}
        />
        <RelatedLinks
          title="Related Sizes"
          links={[
            { href: "/pizza-box-sizes/12-inch", label: "12 Inch Pizza Boxes" },
            { href: "/pizza-box-sizes/14-inch", label: "14 Inch Pizza Boxes" },
            { href: "/pizza-box-sizes/16-inch", label: "16 Inch Pizza Boxes" },
          ]}
        />
        <RelatedLinks
          title="Related Industries"
          links={[
            { href: "/industries/pizzerias", label: "Pizzerias" },
            { href: "/industries/pizza-chains", label: "Pizza Chains" },
            { href: "/industries/food-distributors", label: "Food Distributors" },
          ]}
        />
        <RelatedLinks
          title="Related Resources"
          links={[
            { href: "/resources/pizza-box-cost", label: "Pizza Box Cost" },
            { href: "/resources/lead-times", label: "Lead Times" },
            { href: "/get-quote", label: "Get Quote" },
          ]}
        />
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <FAQAccordion faqs={globalFaqs} />
      </Section>
      <FinalCTA />
    </>
  );
}
