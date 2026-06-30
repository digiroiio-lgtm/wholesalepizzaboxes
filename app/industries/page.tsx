import { IndustryCard } from "@/components/IndustryCard";
import { Section } from "@/components/Section";
import { industries } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Industries We Serve",
  description: "Wholesale pizza packaging programs for pizzerias, chains, distributors, foodservice operators, and private label brands.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <Section>
      <h1 className="mb-6 text-3xl font-extrabold">Industries We Serve</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((slug) => <IndustryCard key={slug} slug={slug} />)}
      </div>
    </Section>
  );
}
