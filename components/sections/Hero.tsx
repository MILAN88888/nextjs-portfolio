import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { Button, Container, Reveal, Stat } from "@/components/ui";
import { HERO_STATS, PROFILE } from "@/constants";

export const Hero = () => (
  <section id="top" aria-labelledby="hero-heading" className="relative">
    {/* Amber wash over a hairline grid, both purely decorative. */}
    <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
    <div className="hairline-grid pointer-events-none absolute inset-0" aria-hidden="true" />

    <Container className="relative pb-20 pt-16 md:pb-28 md:pt-24">
      <Reveal>
        {PROFILE.availableForWork && (
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-ink-muted">
            <span className="available-dot" />
            {PROFILE.availabilityNote}
          </p>
        )}
      </Reveal>

      <Reveal delay={80}>
        <h1
          id="hero-heading"
          className="mt-8 font-display text-display-1 font-semibold text-ink"
        >
          {PROFILE.name}
        </h1>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-5 max-w-3xl text-h4 text-ink-muted">{PROFILE.subtitle}</p>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">{PROFILE.intro}</p>
      </Reveal>

      <Reveal delay={260}>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button href="#projects">
            View my work <FiArrowUpRight aria-hidden="true" />
          </Button>
          <Button href={PROFILE.cvPath} variant="secondary" download>
            <FiDownload aria-hidden="true" /> Download CV
          </Button>
          <Button href={PROFILE.githubUrl} variant="secondary">
            <FiGithub aria-hidden="true" /> GitHub
          </Button>
          <Button href={PROFILE.linkedinUrl} variant="secondary">
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </Button>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <dl className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_STATS.map(stat => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <Stat {...stat} />
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Container>
  </section>
);
