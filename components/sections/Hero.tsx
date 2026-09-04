import { FiArrowUpRight, FiGithub, FiGlobe, FiLinkedin, FiMapPin } from "react-icons/fi";
import { Button, Container, Reveal } from "@/components/ui";
import { HERO_META, PROFILE } from "@/constants";

const META_ICONS: Record<string, JSX.Element> = {
  "Based in": <FiMapPin size={13} aria-hidden="true" />,
  Website: <FiGlobe size={13} aria-hidden="true" />,
};

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
        <p className="mt-5 max-w-2xl text-h4 text-ink-muted">{PROFILE.subtitle}</p>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">{PROFILE.intro}</p>
      </Reveal>

      <Reveal delay={260}>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button href="#projects">
            View projects <FiArrowUpRight aria-hidden="true" />
          </Button>
          <Button href={PROFILE.githubUrl} variant="secondary">
            <FiGithub aria-hidden="true" /> GitHub
          </Button>
          <Button href="https://www.linkedin.com/in/milan-c" variant="secondary">
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </Button>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <dl className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
          {HERO_META.map(item => (
            <div key={item.label}>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
                {item.label}
              </dt>
              <dd className="mt-2 flex items-center gap-2 text-ink">
                <span className="text-accent">{META_ICONS[item.label]}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Container>
  </section>
);
