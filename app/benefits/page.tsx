import { Section } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { benefits } from "@/lib/data/clusters";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Pizza Box Benefits — Eco-Friendly, Recyclable, Grease-Resistant & More",
  description:
    "Shop wholesale pizza boxes by benefit: eco-friendly, recyclable, food-safe, grease-resistant, heavy-duty, premium printing, custom branding, factory direct, wholesale pricing, and fast turnaround.",
  path: "/benefits",
});

export default function BenefitsPage() {
  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Benefits" }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Pizza Box Benefits — Find the Right Feature for Your Operation</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Every foodservice operation has different packaging priorities. Whether your focus is sustainability, structural performance, print quality, or cost — find wholesale pizza box programs that deliver the specific benefit your business needs.
        </p>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Link
              key={benefit.slug}
              href={`/benefits/${benefit.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-700 hover:bg-emerald-50"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900">{benefit.name}</h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{benefit.description}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-emerald-800">View Products →</span>
            </Link>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
