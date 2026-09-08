import { FiArrowUpRight, FiCode, FiExternalLink, FiLock } from "react-icons/fi";
import { Section, Card, Expandable, Tag, TextLink, Reveal } from "@/components/ui";
import { PROFILE, PROJECT_LIST } from "@/constants";
import type { Project } from "@/constants";

const Metric = ({ children, className = "" }: { children: string; className?: string }) => (
  <p className={`font-mono text-[0.69rem] leading-relaxed text-accent ${className}`}>
    {children}
  </p>
);

const Prose = ({ children }: { children: string }) => (
  <p className="text-sm leading-relaxed text-ink-muted">{children}</p>
);

/** Labelled block rather than an inline aside, so it survives being read quickly. */
const MyPart = ({ children }: { children: string }) => (
  <div>
    <p className="font-mono text-[0.69rem] uppercase tracking-[0.16em] text-ink-faint">
      My part
    </p>
    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{children}</p>
  </div>
);

const StackTags = ({ stack }: { stack: string[] }) => (
  <ul className="flex flex-wrap gap-1.5">
    {stack.map(tech => (
      <li key={tech}>
        <Tag>{tech}</Tag>
      </li>
    ))}
  </ul>
);

const Links = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
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
);

/** Own line, with the line reserved even when empty, so every footer matches. */
const Note = ({ children }: { children?: string }) => (
  <p className="mt-2 min-h-[1.15rem] font-mono text-xs leading-relaxed text-ink-faint">
    {children}
  </p>
);

/** Full width, nothing folded: this is the card meant to be read first. */
const FeaturedProject = ({ project }: { project: Project }) => (
  <li className="sm:col-span-2 lg:col-span-3">
    <Reveal>
      <Card className="p-5 md:p-6">
        <h3 className="font-display text-h4 font-semibold text-ink">{project.title}</h3>

        {project.metric && <Metric className="mt-2">{project.metric}</Metric>}

        <div className="mt-4 max-w-[68ch] space-y-4">
          {project.description.split("\n\n").map(para => (
            <p key={para.slice(0, 24)} className="leading-relaxed text-ink-muted">
              {para}
            </p>
          ))}
        </div>

        {project.role && (
          <div className="mt-6 max-w-[68ch] border-t border-line pt-5">
            <MyPart>{project.role}</MyPart>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <StackTags stack={project.stack} />

          <div className="flex flex-wrap items-center gap-x-4">
            <Links project={project} />
            {project.note && (
              <span className="font-mono text-xs leading-relaxed text-ink-faint">
                {project.note}
              </span>
            )}
          </div>
        </div>
      </Card>
    </Reveal>
  </li>
);

/**
 * Grid card. Closed, every one shows the same three things — title, figure and
 * one line of summary — with a chevron in the corner; the header itself is the
 * click target. The blocks carry min-heights so a two-line title lines up with a
 * one-line one and every chevron sits at the same offset.
 *
 * The grid is `items-start`, so opening a card grows that card only and leaves
 * its neighbours alone.
 */
const GridProject = ({ project, index }: { project: Project; index: number }) => {
  const [lead, ...rest] = project.description.split("\n\n");

  return (
    <li>
      <Reveal delay={(index % 3) * 80}>
        {/* One floor for every closed card, so the grid is even however the
            tags and notes wrap. An open card grows past it. */}
        <Card interactive className="min-h-[21rem] p-5">
          <Expandable
            label={project.title}
            header={
              <>
                <h3 className="min-h-[3rem] font-display text-base font-semibold text-ink">
                  {project.title}
                </h3>

                {project.metric && (
                  <Metric className="min-h-[2.25rem]">{project.metric}</Metric>
                )}

                <div className="mt-1 min-h-[2.85rem]">
                  <Prose>{lead}</Prose>
                </div>
              </>
            }
          >
            {rest.map(para => (
              <Prose key={para.slice(0, 24)}>{para}</Prose>
            ))}

            {project.role && <MyPart>{project.role}</MyPart>}
          </Expandable>

          <div className="mt-6">
            <StackTags stack={project.stack.slice(0, 4)} />
          </div>

          <div className="mt-5 border-t border-line pt-4">
            <Links project={project} />
            <Note>{project.note}</Note>
          </div>
        </Card>
      </Reveal>
    </li>
  );
};

export const Projects = () => (
  <Section id="projects">
    <ul className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECT_LIST.map((project, i) =>
        project.featured ? (
          <FeaturedProject key={project.id} project={project} />
        ) : (
          <GridProject key={project.id} project={project} index={i} />
        ),
      )}
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
