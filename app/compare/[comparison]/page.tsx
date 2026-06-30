import { notFound } from "next/navigation";
import { ComparisonPageTemplate } from "@/components/templates/ComparisonPageTemplate";
import { comparisons, pageLabel } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ comparison }));
}

export function generateMetadata({ params }: { params: { comparison: string } }) {
  if (!comparisons.includes(params.comparison)) return {};
  return pageMetadata({
    title: pageLabel(params.comparison),
    description: `Decision guide comparing ${pageLabel(params.comparison).toLowerCase()} for wholesale pizza packaging procurement.`,
    path: `/compare/${params.comparison}`,
  });
}

export default function ComparisonPage({ params }: { params: { comparison: string } }) {
  if (!comparisons.includes(params.comparison)) notFound();
  return <ComparisonPageTemplate slug={params.comparison} />;
}
