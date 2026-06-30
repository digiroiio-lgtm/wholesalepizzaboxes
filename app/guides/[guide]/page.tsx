import { notFound } from "next/navigation";
import { ResourcePageTemplate } from "@/components/templates/ResourcePageTemplate";
import { guides, pageLabel } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return guides.map((guide) => ({ guide }));
}

export function generateMetadata({ params }: { params: { guide: string } }) {
  if (!guides.includes(params.guide)) return {};
  return pageMetadata({
    title: pageLabel(params.guide),
    description: `Procurement guide: ${pageLabel(params.guide).toLowerCase()} for industrial pizza packaging buyers.`,
    path: `/guides/${params.guide}`,
  });
}

export default function GuideDetailPage({ params }: { params: { guide: string } }) {
  if (!guides.includes(params.guide)) notFound();
  return <ResourcePageTemplate slug={params.guide} basePath="/guides" />;
}
