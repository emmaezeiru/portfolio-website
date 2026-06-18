import Link from "next/link";
import { profile } from "../../lib/data";
import { Button } from "../ui/Button";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaXTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa6";

function SocialIcon({ name }) {
  const icons = {
    GitHub: <FaGithub size={18} />,
    LinkedIn: <FaLinkedin size={18} />,
    "Stack Overflow": <FaStackOverflow size={18} />,
    X: <FaXTwitter size={18} />,
    Instagram: <FaInstagram size={18} />,
    Discord: <FaDiscord size={18} />,
  };
  return icons[name] || null;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-16 grid-bg hero-glow"
    >
      <div className="section-container flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
        <div className="animate-fade-up mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-success/20 bg-success-muted px-4 py-1.5 text-sm text-success">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
          {profile.availability}
        </div>

        <h1 className="animate-fade-up-delay-1 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.headline}
          {/* <span className="gradient-text">Node.js and Java Software Engineer | Cloud & DevOps Enthusiast</span> */}
        </h1>
        {/* <p className= "animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-x"> Node.js and Java Software Engineer | Cloud & DevOps Enthusiast</p> */}

        <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.subheadline}
        </p>

        <p className="animate-fade-up-delay-2 mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {profile.valueProposition}
        </p>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projects" size="lg">
            View my work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
          <Button href={profile.resumeUrl} variant="secondary" size="lg" external target="_blank">
            Download resume
          </Button>
          <Button  href={`mailto:${profile.email}`} variant="secondary" size="lg"  className="transition-colors duration-300 hover:text-primary">
            {profile.email}
          </Button>
        </div>
        <div className="animate-fade-up-delay-3 mt-12 flex flex-wrap items-center gap-3">
          {profile.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <SocialIcon name={item.name} />
            </Link>
          ))}
          {/* <span className="ml-2 text-sm text-muted-foreground">
            {profile.location} · {profile.timezone}
          </span> */}
        </div>

        <div className="mt-20 hidden rounded-xl border border-border bg-card/50 p-6 font-mono text-xs text-muted md:block">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-muted-foreground">system-overview.ts</span>
          </div>
          <pre className="mt-4 overflow-x-auto leading-6">
{`const stack = {
  runtime: ["Node.js", "NestJS", "Express", "Java Springboot"],
  data: ["PostgreSQL", "Redis", "MySql"],
  infra: ["Docker", "Linux", "Kurbernetes"],
  focus: "Production backends solutions at scale"
};`}
          </pre>
        </div>
      </div>
    </section>
  );
}
