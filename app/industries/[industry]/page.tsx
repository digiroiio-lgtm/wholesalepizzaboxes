import { notFound } from "next/navigation";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";
import { industries, pageLabel } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return industries.map((industry) => ({ industry }));
}

export function generateMetadata({ params }: { params: { industry: string } }) {
  if (!industries.includes(params.industry)) return {};
  return pageMetadata({
    title: `${pageLabel(params.industry)} Pizza Packaging`,
    description: `Wholesale pizza box supply solutions for ${pageLabel(params.industry).toLowerCase()} across the USA.`,
    path: `/industries/${params.industry}`,
  });
}

export default function IndustryDetailPage({ params }: { params: { industry: string } }) {
  if (!industries.includes(params.industry)) notFound();
  return <IndustryPageTemplate slug={params.industry} />;
}
