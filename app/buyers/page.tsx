import { Section } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { buyers } from "@/lib/data/clusters";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Pizza Box Solutions by Buyer Type — Restaurants, Chains, Distributors & More",
  description:
    "Find wholesale pizza box programs tailored for restaurant owners, pizza chains, distributors, procurement managers, food manufacturers, franchise owners, and foodservice companies.",
  path: "/buyers",
});

export default function BuyersPage() {
  return (
    <>
      <Section className="pb-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Buyers" }]} />
      </Section>
      <Section>
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Wholesale Pizza Box Solutions by Buyer Type</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Different buyers have different priorities. Whether you are a restaurant owner controlling packaging spend, a procurement manager managing multi-site supply chains, or a distributor building a private label program — find the solutions built for your buying context.
        </p>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {buyers.map((buyer) => (
            <Link
              key={buyer.slug}
              href={`/buyers/${buyer.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-700 hover:bg-emerald-50"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900">{buyer.name}</h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{buyer.description}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-emerald-800">View Solutions →</span>
            </Link>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
