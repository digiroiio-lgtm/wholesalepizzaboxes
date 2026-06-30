import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { QuoteForm } from "@/components/QuoteForm";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { buyerMap, buyers } from "@/lib/data/clusters";

export function generateStaticParams() {
  return buyers.map((b) => ({ buyer: b.slug }));
}

export function generateMetadata({ params }: { params: { buyer: string } }) {
  const buyer = buyerMap[params.buyer];
  if (!buyer) return {};
  return pageMetadata({
    title: `Wholesale Pizza Boxes for ${buyer.name} — Bulk Supply & Custom Programs`,
    description: buyer.description,
    path: `/buyers/${buyer.slug}`,
  });
}

export default function BuyerDetailPage({ params }: { params: { buyer: string } }) {
  const buyer = buyerMap[params.buyer];
  if (!buyer) notFound();

  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Buyers", href: "/buyers" }, { label: buyer.name }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Wholesale Pizza Boxes for {buyer.name}</h1>
        <p className="mt-4 max-w-3xl text-slate-700">{buyer.description}</p>
      </Section>
      <Section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Common Pain Points</h2>
          <ul className="space-y-2 text-slate-700">
            {buyer.painPoints.map((pt) => (
              <li key={pt}>• {pt}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Recommended Solutions</h2>
          <ul className="space-y-2">
            {buyer.recommendedSolutions.map((sol) => (
              <li key={sol.href}>
                <a href={sol.href} className="font-medium text-emerald-800 hover:underline">→ {sol.label}</a>
              </li>
            ))}
          </ul>
        </div>
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
          title="Buying Guides"
          links={[
            { href: "/guides/wholesale-pizza-box-buying-guide", label: "Wholesale Buying Guide" },
            { href: "/resources/moq-guide", label: "MOQ Guide" },
            { href: "/resources/lead-times", label: "Lead Times" },
          ]}
        />
        <RelatedLinks
          title="Other Buyer Types"
          links={buyers.filter((b) => b.slug !== buyer.slug).slice(0, 5).map((b) => ({ href: `/buyers/${b.slug}`, label: b.name }))}
        />
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Get a Quote Tailored for {buyer.name}</h2>
        <QuoteForm compact />
      </Section>
      <FinalCTA />
    </>
  );
}
