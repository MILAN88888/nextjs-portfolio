import { Section, Card, Reveal } from "@/components/ui";
import { ABOUT_FACTS, BIO } from "@/constants";

export const About = () => (
  <Section id="about">
    <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
      <Reveal className="space-y-5">
        {BIO.map(paragraph => (
          <p key={paragraph.slice(0, 32)} className="leading-relaxed text-ink-muted">
            {paragraph}
          </p>
        ))}
      </Reveal>

      <Reveal delay={120}>
        <Card>
          <dl className="divide-y divide-line">
            {ABOUT_FACTS.map(fact => (
              <div key={fact.label} className="px-5 py-4">
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </Reveal>
    </div>
  </Section>
);
