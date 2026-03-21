import { cn } from "@/lib/utils";

type BadgeVariant =
  | "in-stock"
  | "out-of-stock"
  | "available"
  | "unavailable"
  | "beginner"
  | "intermediate"
  | "advanced"
  | "duration"
  | "default";

const styles: Record<BadgeVariant, string> = {
  "in-stock": "bg-forest/10 text-forest border-forest/20",
  "out-of-stock": "bg-bark/10 text-bark border-bark/20",
  available: "bg-forest/10 text-forest border-forest/20",
  unavailable: "bg-bark/10 text-bark border-bark/20",
  beginner: "bg-forest/10 text-forest border-forest/20",
  intermediate: "bg-sand text-bark border-sand",
  advanced: "bg-bark/10 text-bark border-bark/20",
  duration: "bg-cream text-bark border-sand",
  default: "bg-sand-light text-bark border-sand",
};

export default function Badge({
  variant = "default",
  children,
  className,
}: {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
