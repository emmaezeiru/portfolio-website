"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "../../lib/data";
import { Badge } from "../ui/Badge";
import { SectionHeader } from "../ui/SectionHeader";

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="border-t border-border py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Personal projects"
          description="Backend services I've designed and built — with the problems they solve and the architecture behind them."
        />

        <div className="flex flex-wrap gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-lg border px-4 py-2 text-sm transition-all ${
                active === i
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border text-muted hover:border-muted-foreground/30 hover:text-foreground"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="mt-8 glass-card overflow-hidden">
          <div className="border-b border-border bg-card/80 p-6 md:p-8">
            <p className="text-sm text-accent">{project.tagline}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              {project.name}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-2">
            {[
              { label: "Problem", value: project.problem },
              { label: "Solution", value: project.solution },
              { label: "Architecture", value: project.architecture },
              { label: "Business impact", value: project.impact },
            ].map((block) => (
              <div
                key={block.label}
                className="border-b border-border p-6 md:border-r md:p-8 even:md:border-r-0"
              >
                <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {block.label}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {block.value}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-border p-6 md:p-8">
            <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Challenges solved
            </h4>
            <ul className="mt-4 space-y-2">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-muted">
                  <span className="font-mono text-accent">→</span>
                  {c}
                </li>
              ))}
            </ul>

            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
