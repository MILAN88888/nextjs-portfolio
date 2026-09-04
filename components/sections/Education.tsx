import { Section, Card, Reveal } from "@/components/ui";
import { EDU_EXP } from "@/constants";

export const Education = () => (
  <Section id="education">
    <ol className="space-y-5">
      {EDU_EXP.map((school, i) => (
        <li key={school.id}>
          <Reveal delay={i * 90}>
            <Card className="p-5 md:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <h3 className="font-display text-h4 font-semibold text-ink">
                  {school.qualification}
                </h3>
                <span className="font-mono text-xs text-ink-faint">{school.period}</span>
              </div>

              {school.institutionUrl ? (
                <a
                  href={school.institutionUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 inline-block text-sm text-accent transition-opacity hover:opacity-80"
                >
                  {school.institution}
                </a>
              ) : (
                <p className="mt-2 text-sm text-accent">{school.institution}</p>
              )}

              {school.summary && (
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {school.summary}
                </p>
              )}
            </Card>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);
