import { about } from "../../lib/data";
import { SectionHeader } from "../ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          label="About"
          title="I build backends that teams can ship on"
          description="Software engineer with hands-on experience in microservices, API design, and scalable cloud infrastructure.."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-5">
            {about.bio.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          {/* <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {(about.highlights ?? []).map((item) => (
              <div
                key={item.label}
                className="glass-card p-5 transition-colors hover:bg-card-hover"
              >
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
