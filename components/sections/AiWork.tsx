import { FiCheck, FiExternalLink, FiLock } from "react-icons/fi";
import { Section, Card, Tag, TextLink, Reveal } from "@/components/ui";
import { AGENTIC_PRACTICE, CASE_STUDIES } from "@/constants";

/** Small mono label used for the blocks inside a case study. */
const BlockLabel = ({ children }: { children: string }) => (
  <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{children}</h4>
);

export const AiWork = () => (
  <Section id="ai">
    {CASE_STUDIES.map(study => (
      <article key={study.id} className="space-y-12">
        <Reveal>
          <p className="font-mono text-xs text-ink-faint">{study.context}</p>

          <h3 className="mt-4 max-w-3xl font-display text-h3 font-semibold text-ink">
            {study.title}
          </h3>

          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-10">
            <p className="leading-relaxed text-ink-muted">{study.problem}</p>
            <p className="leading-relaxed text-ink-muted">{study.approach}</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <BlockLabel>Decisions</BlockLabel>
          </Reveal>

          <ol className="mt-5 grid gap-4 md:grid-cols-2">
            {study.decisions.map((decision, i) => (
              <li key={decision.title} className="flex">
                <Reveal delay={(i % 2) * 80} className="flex w-full">
                  <Card className="w-full p-5">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="font-mono text-xs text-accent"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h5 className="font-display text-base font-semibold text-ink">
                        {decision.title}
                      </h5>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {decision.body}
                    </p>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.45fr_1fr]">
          <Reveal className="flex">
            <Card className="w-full p-5 md:p-6">
              <BlockLabel>What shipped</BlockLabel>

              <ul className="mt-5 space-y-3">
                {study.outcomes.map(outcome => (
                  <li key={outcome.slice(0, 32)} className="flex gap-3">
                    <FiCheck
                      size={15}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span className="text-sm leading-relaxed text-ink-muted">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={80} className="flex">
            <Card className="flex w-full flex-col p-5 md:p-6">
              <BlockLabel>Stack</BlockLabel>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {study.stack.map(tech => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>

              {study.internalNote && (
                <p className="mt-6 flex gap-2.5 text-xs leading-relaxed text-ink-faint">
                  <FiLock size={13} aria-hidden="true" className="mt-0.5 shrink-0" />
                  {study.internalNote}
                </p>
              )}

              {study.links && study.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4 border-t border-line pt-4">
                  {study.links.map(link => (
                    <TextLink key={link.url} href={link.url}>
                      <FiExternalLink size={13} aria-hidden="true" />
                      {link.title}
                    </TextLink>
                  ))}
                </div>
              )}
            </Card>
          </Reveal>
        </div>
      </article>
    ))}

    <div className="mt-20 border-t border-line pt-12">
      <Reveal>
        <h3 className="font-display text-h4 font-semibold text-ink">
          Working with agents
        </h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
          Naming the models I use proves nothing. This is what the agents in my
          workflow actually do, and where they stop.
        </p>
      </Reveal>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {AGENTIC_PRACTICE.map((item, i) => (
          <li key={item.title} className="flex">
            <Reveal delay={(i % 2) * 80} className="flex w-full">
              <Card className="w-full p-5">
                <h4 className="font-display text-base font-semibold text-ink">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
