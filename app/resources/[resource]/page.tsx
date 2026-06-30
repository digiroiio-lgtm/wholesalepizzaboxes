import { notFound } from "next/navigation";
import { ResourcePageTemplate } from "@/components/templates/ResourcePageTemplate";
import { resources, pageLabel } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return resources.map((resource) => ({ resource }));
}

export function generateMetadata({ params }: { params: { resource: string } }) {
  if (!resources.includes(params.resource)) return {};
  return pageMetadata({
    title: pageLabel(params.resource),
    description: `EEAT-style resource on ${pageLabel(params.resource).toLowerCase()} for B2B pizza packaging buyers.`,
    path: `/resources/${params.resource}`,
  });
}

export default function ResourceDetailPage({ params }: { params: { resource: string } }) {
  if (!resources.includes(params.resource)) notFound();
  return <ResourcePageTemplate slug={params.resource} basePath="/resources" />;
}
