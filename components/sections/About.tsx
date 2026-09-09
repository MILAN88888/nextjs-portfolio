import { Card, IconBadge, Reveal, Section } from "@/components/ui";
import { ABOUT_FACTS, ACHIEVEMENTS, BIO } from "@/constants";

/**
 * Cards first, prose second. A reviewer scans the six icon cards and only reads
 * the paragraphs if something in them landed, so the order follows that rather
 * than making them scroll past four paragraphs to find the figures.
 */
export const About = () => (
  <Section id="about">
    {/* Not `items-start`: nothing here folds, so letting a row stretch to its
        tallest card keeps the grid even. */}
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ACHIEVEMENTS.map((item, i) => (
        <li key={item.label} className="flex">
          <Reveal delay={(i % 3) * 70} className="flex w-full">
            <Card className="flex w-full items-start gap-4 p-5">
              <IconBadge name={item.icon} />

              <div>
                <h3 className="text-body font-semibold text-ink">{item.label}</h3>
                <p className="mt-1.5 text-small text-ink-muted">{item.body}</p>
              </div>
            </Card>
          </Reveal>
        </li>
      ))}
    </ul>

    <div className="mt-14 grid gap-10 border-t border-line pt-12 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
      <Reveal className="max-w-prose space-y-5">
        {BIO.map((paragraph, i) => (
          <p
            key={paragraph.slice(0, 32)}
            className={i === 0 ? "text-lead text-ink" : "text-body text-ink-muted"}
          >
            {paragraph}
          </p>
        ))}
      </Reveal>

      {/* Sticky on a wide screen, so the facts stay beside whichever paragraph
          you are reading. `top` clears the sticky header. */}
      <Reveal delay={120} className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
        <Card>
          <dl className="divide-y divide-line">
            {ABOUT_FACTS.map(fact => (
              <div key={fact.label} className="px-5 py-4">
                <dt className="font-mono text-label uppercase tracking-[0.16em] text-ink-faint">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-small text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </Reveal>
    </div>
  </Section>
);
