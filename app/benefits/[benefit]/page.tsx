import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { QuoteForm } from "@/components/QuoteForm";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { benefitMap, benefits } from "@/lib/data/clusters";

export function generateStaticParams() {
  return benefits.map((b) => ({ benefit: b.slug }));
}

export function generateMetadata({ params }: { params: { benefit: string } }) {
  const benefit = benefitMap[params.benefit];
  if (!benefit) return {};
  return pageMetadata({
    title: `${benefit.name} — Wholesale Pizza Boxes`,
    description: benefit.description,
    path: `/benefits/${benefit.slug}`,
  });
}

export default function BenefitDetailPage({ params }: { params: { benefit: string } }) {
  const benefit = benefitMap[params.benefit];
  if (!benefit) notFound();

  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Benefits", href: "/benefits" }, { label: benefit.name }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">{benefit.name} — Wholesale Pizza Boxes</h1>
        <p className="mt-4 max-w-3xl text-slate-700">{benefit.description}</p>
      </Section>
      <Section>
        <h2 className="mb-3 text-2xl font-bold text-slate-900">Key Points</h2>
        <ul className="space-y-2 text-slate-700">
          {benefit.keyPoints.map((pt) => (
            <li key={pt}>• {pt}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Relevant Products</h2>
        <ul className="space-y-2">
          {benefit.relevantProducts.map((prod) => (
            <li key={prod.href}>
              <a href={prod.href} className="font-medium text-emerald-800 hover:underline">→ {prod.label}</a>
            </li>
          ))}
        </ul>
      </Section>
      <Section className="grid gap-6 lg:grid-cols-3">
        <RelatedLinks
          title="Primary Clusters"
          links={[
            { href: "/white-pizza-boxes", label: "White Pizza Boxes" },
            { href: "/kraft-pizza-boxes", label: "Kraft Pizza Boxes" },
            { href: "/custom-printed-pizza-boxes", label: "Custom Printed" },
            { href: "/premium-pizza-boxes", label: "Premium Pizza Boxes" },
          ]}
        />
        <RelatedLinks
          title="Materials"
          links={[
            { href: "/materials/kraft-board", label: "Kraft Board" },
            { href: "/materials/fsc-certified", label: "FSC Certified" },
            { href: "/materials/recycled-board", label: "Recycled Board" },
          ]}
        />
        <RelatedLinks
          title="Other Benefits"
          links={benefits.filter((b) => b.slug !== benefit.slug).slice(0, 5).map((b) => ({ href: `/benefits/${b.slug}`, label: b.name }))}
        />
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Get a Quote</h2>
        <QuoteForm compact />
      </Section>
      <FinalCTA />
    </>
  );
}
