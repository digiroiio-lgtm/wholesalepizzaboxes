import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pageLabel } from "@/lib/data/site";

export function ResourceCard({ slug, basePath }: { slug: string; basePath: "/resources" | "/guides" }) {
  return (
    <Card>
      <CardHeader><CardTitle>{pageLabel(slug)}</CardTitle></CardHeader>
      <CardContent>
        <Link href={`${basePath}/${slug}`} className="font-semibold text-emerald-800 hover:underline">Read guide →</Link>
      </CardContent>
    </Card>
  );
}
