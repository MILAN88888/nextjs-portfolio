import { FiArrowUpRight, FiCode, FiExternalLink, FiLock } from "react-icons/fi";
import { Section, Card, Tag, TextLink, Reveal } from "@/components/ui";
import { PROFILE, PROJECT_LIST } from "@/constants";

export const Projects = () => (
  <Section id="projects">
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECT_LIST.map((project, i) => (
        <li key={project.id} className="flex">
          <Reveal delay={(i % 3) * 80} className="flex w-full">
            <Card interactive className="flex w-full flex-col p-5">
              <h3 className="font-display text-base font-semibold text-ink">
                {project.title}
              </h3>

              {project.metric && (
                <p className="mt-2 font-mono text-[0.69rem] leading-relaxed text-accent">
                  {project.metric}
                </p>
              )}

              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              {project.role && (
                <p className="mt-4 flex-1 text-xs leading-relaxed text-ink-faint">
                  <span className="font-mono uppercase tracking-[0.14em]">My part</span>
                  {" — "}
                  {project.role}
                </p>
              )}

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map(tech => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-4">
                {project.repoUrl && (
                  <TextLink href={project.repoUrl}>
                    <FiCode size={13} aria-hidden="true" />
                    Code
                    <span className="sr-only"> for {project.title}</span>
                  </TextLink>
                )}

                {project.liveUrl && (
                  <TextLink href={project.liveUrl}>
                    <FiExternalLink size={13} aria-hidden="true" />
                    Live
                    <span className="sr-only"> {project.title}</span>
                  </TextLink>
                )}

                {project.internal && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint">
                    <FiLock size={12} aria-hidden="true" />
                    Closed source
                  </span>
                )}
              </div>
            </Card>
          </Reveal>
        </li>
      ))}
    </ul>

    <Reveal delay={120}>
      <a
        href={PROFILE.reposUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
      >
        Browse all repositories
        <FiArrowUpRight size={14} aria-hidden="true" />
      </a>
    </Reveal>
  </Section>
);
