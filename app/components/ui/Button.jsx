import Link from "next/link";
import { cn } from "../../lib/utils";

const variants = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 shadow-sm shadow-accent/10",
  secondary:
    "border border-border bg-transparent text-foreground hover:bg-card hover:border-muted-foreground/30",
  ghost: "text-muted hover:text-foreground hover:bg-card",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : props.target}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
