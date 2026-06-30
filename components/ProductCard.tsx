import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductCard({ title, href }: { title: string; href: string }) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent>
        <p className="mb-4">Bulk supply with custom options and procurement-friendly lead times.</p>
        <Link className="font-semibold text-emerald-800 hover:underline" href={href}>Request Wholesale Pricing →</Link>
      </CardContent>
    </Card>
  );
}
