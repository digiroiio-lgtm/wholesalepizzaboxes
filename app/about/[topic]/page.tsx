import { notFound } from "next/navigation";
import { CommercialPageTemplate } from "@/components/templates/CommercialPageTemplate";
import { aboutTopics, pageLabel } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return aboutTopics.map((topic) => ({ topic }));
}

export function generateMetadata({ params }: { params: { topic: string } }) {
  if (!aboutTopics.includes(params.topic)) return {};
  return pageMetadata({
    title: `${pageLabel(params.topic)} Capability`,
    description: `Review our ${pageLabel(params.topic).toLowerCase()} standards for B2B pizza box supply programs.`,
    path: `/about/${params.topic}`,
  });
}

export default function AboutTopicPage({ params }: { params: { topic: string } }) {
  if (!aboutTopics.includes(params.topic)) notFound();
  return <CommercialPageTemplate title={pageLabel(params.topic)} intro={`Understand how our ${pageLabel(params.topic).toLowerCase()} capabilities support reliable wholesale pizza packaging procurement.`} slug={params.topic} />;
}
