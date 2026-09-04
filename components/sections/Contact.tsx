import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Section, Button, Reveal } from "@/components/ui";
import { PROFILE } from "@/constants";

export const Contact = () => (
  <Section id="contact">
    <Reveal>
      <div className="flex flex-wrap items-center gap-3">
        <Button href={`mailto:${PROFILE.email}`}>
          <FiMail aria-hidden="true" /> {PROFILE.email}
        </Button>
        <Button href="https://www.linkedin.com/in/milan-c" variant="secondary">
          <FiLinkedin aria-hidden="true" /> LinkedIn
        </Button>
        <Button href={PROFILE.githubUrl} variant="secondary">
          <FiGithub aria-hidden="true" /> GitHub
        </Button>
      </div>
    </Reveal>

    <Reveal delay={100}>
      <p className="mt-8 text-sm text-ink-muted">
        Based in {PROFILE.fullLocation}.{" "}
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
