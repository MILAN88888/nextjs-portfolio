import { FiArrowUpRight } from "react-icons/fi";
import { Section, Tag, Reveal } from "@/components/ui";
import { WORK_EXP } from "@/constants";

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-3 max-w-prose space-y-2.5">
    {items.map(item => (
      <li
        key={item.slice(0, 32)}
        className="relative pl-5 text-small text-ink-muted before:absolute before:left-0 before:top-[0.66em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:content-['']"
      >
        {item}
      </li>
    ))}
  </ul>
);

export const Experience = () => (
  <Section id="experience">
    <ol className="space-y-12">
      {WORK_EXP.map((job, i) => (
        <li key={job.id}>
          <Reveal delay={i * 90}>
            {/* Amber marker on a hairline rail, echoing the section kickers. */}
            <div className="relative border-l border-line pl-6">
              <span
                className="absolute -left-[4.5px] top-2 h-2 w-2 rounded-full bg-accent"
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-h3 font-semibold text-ink">
                  {job.position}
                </h3>

                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-body text-accent transition-opacity hover:opacity-80"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="text-body text-accent">{job.company}</span>
                )}

                <span className="font-mono text-small text-ink-faint">{job.period}</span>
              </div>

              <p className="mt-4 max-w-prose text-body text-ink-muted">{job.summary}</p>

              {job.highlights && <Bullets items={job.highlights} />}

              {job.groups && (
                <div className="mt-6 space-y-6">
                  {job.groups.map(group => (
                    <div key={group.product}>
                      <h4 className="flex items-center gap-2.5 font-mono text-small uppercase tracking-[0.14em] text-ink">
                        <span
                          className="h-1 w-1 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {group.product}
                      </h4>
                      <Bullets items={group.items} />
                    </div>
                  ))}
                </div>
              )}

              {job.links && job.links.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.links.map(link => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="transition-colors hover:text-accent [&>span]:hover:border-line-strong"
                      >
                        <Tag>
                          {link.title}
                          <FiArrowUpRight size={11} aria-hidden="true" />
                        </Tag>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);
