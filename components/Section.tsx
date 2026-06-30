import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-16", className)}>
      {children}
    </section>
  );
}
