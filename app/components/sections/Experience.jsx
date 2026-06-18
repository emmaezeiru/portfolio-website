import { experience } from "../../lib/data";
import { Badge } from "../ui/Badge";
import { SectionHeader } from "../ui/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-card/30 py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          label="Experience"
          title="Where I've built and shipped"
          description="Fintech backends at Redtech, mobile features at MTN Nigeria, and intensive backend training at ALX Africa."
        />

        <div className="space-y-8">
          {experience.map((job, index) => (
            <article
              key={index}
              className="glass-card group p-6 transition-all hover:border-accent/20 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-accent">{job.company}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  <p>{job.period}</p>
                  <p>{job.type}</p>
                </div>
              </div>

              <p className="mt-4 text-muted">{job.summary}</p>

              <ul className="mt-6 space-y-3">
                {job.achievements.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <Badge key={tech} variant="accent">
                    {tech}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
