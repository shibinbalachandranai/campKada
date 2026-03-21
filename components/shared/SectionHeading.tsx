import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-bark md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-bark/70">{subtitle}</p>
      )}
    </div>
  );
}
