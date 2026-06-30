import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SizeCard({ size }: { size: string }) {
  return (
    <Card>
      <CardHeader><CardTitle>{size.replace("-", " ")} Pizza Boxes</CardTitle></CardHeader>
      <CardContent>
        <Link href={`/pizza-box-sizes/${size}`} className="font-semibold text-emerald-800 hover:underline">View specs & pricing →</Link>
      </CardContent>
    </Card>
  );
}
