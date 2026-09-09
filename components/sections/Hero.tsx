import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Button, Container, IconLink, Reveal, Stat } from "@/components/ui";
import { HERO_STATS, PROFILE } from "@/constants";

/**
 * One column, left aligned, in the order a reader wants it: what I do, the two
 * figures that qualify it, three sentences, then how to reach me. The four
 * proof figures close it off.
 *
 * Two buttons only. Four of them read as a toolbar, so GitHub and LinkedIn are
 * icon links now.
 */
export const Hero = () => (
  <section id="top" aria-labelledby="hero-heading" className="relative">
    {/* One soft accent wash, purely decorative. */}
    <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />

    <Container className="relative pb-20 pt-14 md:pb-28 md:pt-20">
      <Reveal>
        {PROFILE.availableForWork && (
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-small text-ink-muted">
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
        <p className="mt-5 max-w-3xl font-display text-h4 font-medium text-ink md:text-h3">
          {PROFILE.titleLine}
        </p>
      </Reveal>

      <Reveal delay={180}>
        <p className="mt-3 font-mono text-small text-accent">{PROFILE.proofLine}</p>
      </Reveal>

      <Reveal delay={240}>
        <p className="mt-7 max-w-prose text-lead text-ink-muted">{PROFILE.intro}</p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button href="#projects">
            View my work <FiArrowUpRight aria-hidden="true" />
          </Button>
          <Button href={PROFILE.cvPath} variant="secondary" download>
            <FiDownload aria-hidden="true" /> Download CV
          </Button>

          <span className="ml-1 flex items-center gap-2">
            <IconLink href={PROFILE.githubUrl} label="GitHub">
              <FiGithub size={17} aria-hidden="true" />
            </IconLink>
            <IconLink href={PROFILE.linkedinUrl} label="LinkedIn">
              <FiLinkedin size={17} aria-hidden="true" />
            </IconLink>
            <IconLink href={`mailto:${PROFILE.email}`} label="Email me">
              <FiMail size={17} aria-hidden="true" />
            </IconLink>
          </span>
        </div>
      </Reveal>

      <Reveal delay={360}>
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
