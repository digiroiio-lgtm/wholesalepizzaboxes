import { Card, CardContent } from "@/components/ui/card";

export function TestimonialCard({ name, quote }: { name: string; quote: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="mb-4 text-slate-700">“{quote}”</p>
        <p className="text-sm font-semibold text-emerald-900">{name}</p>
      </CardContent>
    </Card>
  );
}
