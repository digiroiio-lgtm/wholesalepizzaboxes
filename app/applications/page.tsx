import { Section } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { applications } from "@/lib/data/clusters";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Pizza Box Applications — Shop by Use Case",
  description:
    "Pizza boxes for every application: delivery, takeout, frozen pizza, restaurant chains, ghost kitchens, retail, foodservice, private label, OEM, and export. Find the right box for your operation.",
  path: "/applications",
});

export default function ApplicationsPage() {
  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Applications" }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Pizza Box Applications — Shop by Use Case</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Different pizza operations have different packaging requirements. Browse by application to find the pizza box specifications, materials, and programs best suited for your operational context.
        </p>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((app) => (
            <Link
              key={app.slug}
              href={`/applications/${app.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-700 hover:bg-emerald-50"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900">{app.name}</h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{app.description}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-emerald-800">View Solutions →</span>
            </Link>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
