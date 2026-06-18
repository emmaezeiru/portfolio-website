import { architectureDiagrams } from "../../lib/data";
import { SectionHeader } from "../ui/SectionHeader";

function MicroservicesDiagram() {
  const services = ["Auth", "HR Core", "Payroll", "Notify", "Reports"];
  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <div className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-xs text-accent">
        API Gateway
      </div>
      <div className="h-6 w-px bg-border" />
      <div className="flex flex-wrap justify-center gap-2">
        {services.map((s) => (
          <div
            key={s}
            className="rounded-md border border-border bg-card px-3 py-2 font-mono text-xs text-muted"
          >
            {s}
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {["PostgreSQL", "Redis", "Kafka"].map((db) => (
          <div
            key={db}
            className="rounded-md border border-border-subtle bg-background px-3 py-1.5 font-mono text-[10px] text-muted-foreground"
          >
            {db}
          </div>
        ))}
      </div>
    </div>
  );
}

function AuthFlowDiagram() {
  const steps = ["Client", "Gateway", "Auth Svc", "JWT", "Services"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-6">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className="rounded-md border border-border bg-card px-3 py-2 font-mono text-xs text-muted">
            {step}
          </div>
          {i < steps.length - 1 && (
            <svg width="20" height="12" viewBox="0 0 20 12" className="text-accent">
              <path d="M0 6h16M12 2l6 4-6 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function EventDiagram() {
  return (
    <div className="space-y-3 py-4 font-mono text-xs">
      <div className="flex items-center gap-3">
        <span className="w-24 text-muted-foreground">Producer</span>
        <span className="text-accent">→</span>
        <span className="rounded border border-border bg-card px-2 py-1">Kafka Topic</span>
        <span className="text-accent">→</span>
        <span className="rounded border border-border bg-card px-2 py-1">Consumer</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-24 text-muted-foreground">Events</span>
        <span className="text-muted">user.created · payroll.run · report.ready</span>
      </div>
    </div>
  );
}

function GatewayDiagram() {
  const layers = [
    { name: "Rate Limit", desc: "Redis-backed" },
    { name: "JWT Verify", desc: "Edge auth" },
    { name: "Route Proxy", desc: "Service mesh" },
    { name: "Logging", desc: "Request trace" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 py-4">
      {layers.map((l) => (
        <div key={l.name} className="rounded-md border border-border bg-card p-3">
          <p className="font-mono text-xs text-foreground">{l.name}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">{l.desc}</p>
        </div>
      ))}
    </div>
  );
}

const diagramComponents = {
  microservices: MicroservicesDiagram,
  gateway: GatewayDiagram,
  "auth-flow": AuthFlowDiagram,
  events: EventDiagram,
};

export default function Architecture() {
  return (
    <section id="architecture" className="border-t border-border bg-card/30 py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          label="System Design"
          title="How I think about distributed systems"
          description="Architecture patterns I apply in production — microservices, gateways, auth, and event-driven workflows."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {architectureDiagrams.map((item) => {
            const Diagram = diagramComponents[item.id];
            return (
              <div
                key={item.id}
                className="glass-card overflow-hidden transition-colors hover:border-accent/20"
              >
                <div className="border-b border-border p-6">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
                <div className="bg-background/50 px-6">
                  <Diagram />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-background p-6 font-mono text-xs leading-6 text-muted md:p-8">
          <p className="text-muted-foreground">Design principles I follow</p>
          <p className="mt-2">
            <span className="text-accent">1.</span> Fail fast at the gateway — validate auth and input before upstream calls
          </p>
          <p>
            <span className="text-accent">2.</span> Database per service — no shared tables across bounded contexts
          </p>
          <p>
            <span className="text-accent">3.</span> Async for side effects — Kafka for anything that isn&apos;t on the critical path
          </p>
          <p>
            <span className="text-accent">4.</span> Observability by default — structured logs, correlation IDs, health checks
          </p>
        </div>
      </div>
    </section>
  );
}
