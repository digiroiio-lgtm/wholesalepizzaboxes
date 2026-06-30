import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { QuoteForm } from "@/components/QuoteForm";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { applicationMap, applications } from "@/lib/data/clusters";

export function generateStaticParams() {
  return applications.map((a) => ({ application: a.slug }));
}

export function generateMetadata({ params }: { params: { application: string } }) {
  const app = applicationMap[params.application];
  if (!app) return {};
  return pageMetadata({
    title: `Pizza Boxes for ${app.name} — Wholesale Packaging Solutions`,
    description: app.description,
    path: `/applications/${app.slug}`,
  });
}

export default function ApplicationDetailPage({ params }: { params: { application: string } }) {
  const app = applicationMap[params.application];
  if (!app) notFound();

  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Applications", href: "/applications" }, { label: app.name }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Pizza Boxes for {app.name}</h1>
        <p className="mt-4 max-w-3xl text-slate-700">{app.description}</p>
      </Section>
      <Section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Key Packaging Requirements</h2>
          <ul className="space-y-2 text-slate-700">
            {app.keyRequirements.map((req) => (
              <li key={req}>• {req}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Recommended Box Types</h2>
          <ul className="space-y-2">
            {app.recommendedBoxes.map((box) => (
              <li key={box.href}>
                <a href={box.href} className="font-medium text-emerald-800 hover:underline">→ {box.label}</a>
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
          ]}
        />
        <RelatedLinks
          title="Materials"
          links={[
            { href: "/materials/corrugated-board", label: "Corrugated Board" },
            { href: "/materials/white-board", label: "White Board" },
            { href: "/materials/kraft-board", label: "Kraft Board" },
          ]}
        />
        <RelatedLinks
          title="Resources"
          links={[
            { href: "/resources/how-to-choose-pizza-boxes", label: "How to Choose Pizza Boxes" },
            { href: "/resources/pizza-box-cost", label: "Pizza Box Cost Guide" },
            { href: "/get-quote", label: "Get a Quote" },
          ]}
        />
      </Section>
      <Section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Get Wholesale Pricing for {app.name}</h2>
        <QuoteForm compact />
      </Section>
      <FinalCTA />
    </>
  );
}
