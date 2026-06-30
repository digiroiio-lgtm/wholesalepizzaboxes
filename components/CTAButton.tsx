import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTAButton({ href, children, variant = "default" }: { href: string; children: React.ReactNode; variant?: "default" | "outline" | "secondary" }) {
  return (
    <Link href={href}>
      <Button size="lg" variant={variant}>{children}</Button>
    </Link>
  );
}
