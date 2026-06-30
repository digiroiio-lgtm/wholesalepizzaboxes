import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pageLabel } from "@/lib/data/site";

export function IndustryCard({ slug }: { slug: string }) {
  return (
    <Card>
      <CardHeader><CardTitle>{pageLabel(slug)}</CardTitle></CardHeader>
      <CardContent>
        <p className="mb-4">Packaging programs designed for volume purchasing and operational consistency.</p>
        <Link href={`/industries/${slug}`} className="font-semibold text-emerald-800 hover:underline">See industry recommendations →</Link>
      </CardContent>
    </Card>
  );
}
