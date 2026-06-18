import Link from "next/link";
import { profile } from "../../lib/data";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Let's build something reliable"
          description="Open to remote backend engineer, software engineer, and fintech roles. Reach out — I respond within 24 hours."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">Start a conversation</h3>
            <p className="mt-2 text-sm text-muted">
              Hiring for a backend role? Send a message with the stack, team size, and what you&apos;re building.
            </p>

            <div className="mt-8 space-y-4">
              <Button href={`mailto:${profile.email}?subject=Backend%20Role%20Inquiry`} size="lg" className="w-full sm:w-auto">
                Email me
              </Button>
              <Button href={profile.resumeUrl} variant="secondary" size="lg" external className="w-full sm:w-auto">
                Download resume
              </Button>
            </div>

            <div className="mt-10 space-y-4 border-t border-border pt-8">

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <Link href={`mailto:${profile.email}`} className="mt-1 block text-accent hover:underline">
                  {profile.email}
                </Link>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                <p className="mt-1 text-muted">{profile.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Availability</p>
                <p className="mt-1 flex items-center gap-2 text-success">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
                  {profile.availability}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {profile.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center justify-between p-5 transition-colors hover:border-accent/20 hover:bg-card-hover"
              >
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        <footer className="mt-20 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p> Built and Desingned by {profile.shortName}.</p>
          <p>All rights reserved. ©</p>
        </footer>
      </div>
    </section>
  );
}
