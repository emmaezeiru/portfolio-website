import { skills } from "../../lib/data";
import { SectionHeader } from "../ui/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          label="Skills"
          title="Technical toolkit"
          description="Languages, backend frameworks, databases, and DevOps tools."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="glass-card p-6 transition-colors hover:bg-card-hover"
            >
              <h3 className="text-sm font-medium text-foreground">{category}</h3>
              <ul className="mt-4 space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
