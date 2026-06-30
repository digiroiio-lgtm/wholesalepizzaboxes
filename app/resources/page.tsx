import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import { resources } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Pizza Packaging Resources",
  description: "Technical resources on pizza box dimensions, materials, compliance, cost, lead times, and procurement planning.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <Section>
      <h1 className="mb-6 text-3xl font-extrabold">Resource Center</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((slug) => <ResourceCard key={slug} slug={slug} basePath="/resources" />)}
      </div>
    </Section>
  );
}
