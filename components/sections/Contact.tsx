import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Section, Button, Reveal } from "@/components/ui";
import { PROFILE } from "@/constants";

export const Contact = () => (
  <Section id="contact">
    <Reveal>
      <p className="max-w-2xl leading-relaxed text-ink-muted">
        {PROFILE.availabilityNote} — roles or collaborations. The fastest way to
        reach me is email; I answer within a day.
      </p>
    </Reveal>

    <Reveal delay={80}>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button href={`mailto:${PROFILE.email}`}>
          <FiMail aria-hidden="true" /> {PROFILE.email}
        </Button>
        <Button href={PROFILE.cvPath} variant="secondary" download>
          <FiDownload aria-hidden="true" /> Download CV
        </Button>
        <Button href={PROFILE.linkedinUrl} variant="secondary">
          <FiLinkedin aria-hidden="true" /> LinkedIn
        </Button>
        <Button href={PROFILE.githubUrl} variant="secondary">
          <FiGithub aria-hidden="true" /> GitHub
        </Button>
      </div>
    </Reveal>

    <Reveal delay={140}>
      <p className="mt-8 text-sm text-ink-muted">
        {PROFILE.fullLocation} · {PROFILE.timezone} · remote-friendly ·{" "}
        <a
          href={`tel:${PROFILE.phone.replace(/[^\d+]/g, "")}`}
          className="text-ink transition-colors hover:text-accent"
        >
          {PROFILE.phone}
        </a>
      </p>
    </Reveal>
  </Section>
);
