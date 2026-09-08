import { FiArrowUpRight, FiCode, FiExternalLink, FiLock } from "react-icons/fi";
import { Section, Card, Tag, TextLink, Reveal } from "@/components/ui";
import { PROFILE, PROJECT_LIST } from "@/constants";
import type { Project } from "@/constants";

const Metric = ({ children }: { children: string }) => (
  <p className="mt-2 font-mono text-[0.69rem] leading-relaxed text-accent">{children}</p>
);

const MyPart = ({ children, className = "" }: { children: string; className?: string }) => (
  <p className={`text-xs leading-relaxed text-ink-faint ${className}`}>
    <span className="font-mono uppercase tracking-[0.14em]">My part</span>
    {" — "}
    {children}
  </p>
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
  <div className="flex flex-wrap items-center gap-4">
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

    {project.note && (
      <span className="font-mono text-xs leading-relaxed text-ink-faint">{project.note}</span>
    )}
  </div>
);

/** Full-width card, prose rather than a bullet list. */
const FeaturedProject = ({ project }: { project: Project }) => (
  <li className="flex sm:col-span-2 lg:col-span-3">
    <Reveal className="flex w-full">
      <Card className="w-full p-5 md:p-6">
        <h3 className="font-display text-h4 font-semibold text-ink">{project.title}</h3>

        {project.metric && <Metric>{project.metric}</Metric>}

        {/* The featured description carries a blank line, so render it as paragraphs. */}
        <div className="mt-4 max-w-[68ch] space-y-4">
          {project.description.split("\n\n").map(para => (
            <p key={para.slice(0, 24)} className="leading-relaxed text-ink-muted">
              {para}
            </p>
          ))}
        </div>

        {project.role && <MyPart className="mt-5 max-w-[68ch]">{project.role}</MyPart>}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <StackTags stack={project.stack} />
          <Links project={project} />
        </div>
      </Card>
    </Reveal>
  </li>
);

const GridProject = ({ project, index }: { project: Project; index: number }) => (
  <li className="flex">
    <Reveal delay={(index % 3) * 80} className="flex w-full">
      <Card interactive className="flex w-full flex-col p-5">
        <h3 className="font-display text-base font-semibold text-ink">{project.title}</h3>

        {project.metric && <Metric>{project.metric}</Metric>}

        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        {project.role && <MyPart className="mt-4 flex-1">{project.role}</MyPart>}

        <div className="mt-5">
          <StackTags stack={project.stack} />
        </div>

        <div className="mt-5 border-t border-line pt-4">
          <Links project={project} />
        </div>
      </Card>
    </Reveal>
  </li>
);

export const Projects = () => (
  <Section id="projects">
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
