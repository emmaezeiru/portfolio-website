import { cn } from "../../lib/utils";

export function SectionHeader({ label, title, description, className }) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {label && <p className="section-label">{label}</p>}
      <h2 className={cn("section-title", label && "mt-3")}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
