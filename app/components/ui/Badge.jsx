import { cn } from "../../lib/utils";

export function Badge({ children, className, variant = "default" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium",
        variant === "default" &&
          "border-border bg-card text-muted",
        variant === "accent" &&
          "border-accent/20 bg-accent/10 text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
