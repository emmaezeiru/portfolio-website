import Link from "next/link";
import { trust, profile } from "../../lib/data";
import { SectionHeader } from "../ui/SectionHeader";

export default function Trust() {
  return (
    <section id="trust" className="border-t border-border bg-card/30 py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          label="Credibility"
          title="Signals that build trust"
          description="GitHub activity, community contributions, and third-party validation — replace placeholders with your real data."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass-card p-6 lg:col-span-1">
            <h3 className="font-semibold">GitHub highlights</h3>
            <ul className="mt-4 space-y-4">
              {trust.githubHighlights.map((item) => (
                <li key={item.label}>
                  <p className="text-xl font-semibold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </li>
              ))}
            </ul>
            <Link
              href="https://github.com/emmaezeiru"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm text-accent hover:underline"
            >
              github.com/emmaezeiru →
            </Link>
          </div>

          <div className="glass-card p-6 lg:col-span-1">
            <h3 className="font-semibold">Certifications</h3>
            <ul className="mt-4 space-y-4">
              {trust.certifications.map((cert) => (
                <li key={cert.name} className="border-l-2 border-accent/30 pl-4">
                  <p className="text-sm font-medium text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 lg:col-span-1">
            <h3 className="font-semibold">Open source & community</h3>
            <ul className="mt-4 space-y-3">
              {trust.openSource.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {trust.testimonials.map((t, i) => (
          <blockquote
            key={i}
            className="mt-8 glass-card border-l-4 border-l-accent p-8"
          >
            <p className="text-lg leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 text-sm text-muted-foreground">
              — {t.author}, {t.company}
            </footer>
          </blockquote>
        ))}

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { q: "Can they build production systems?", a: "Yes — microservices, gateways, and event pipelines in active use." },
            { q: "Can they work remotely?", a: `Yes — ${profile.location}, async-first, clear written communication.` },
            { q: "Can they own backend architecture?", a: "Yes — from schema design to deployment and observability." },
          ].map((item) => (
            <div key={item.q} className="rounded-lg border border-border-subtle bg-background p-5">
              <p className="text-sm font-medium text-foreground">{item.q}</p>
              <p className="mt-2 text-sm text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
