import { Section, Card, Icon, Stat, Tag, Reveal } from "@/components/ui";
import { PROOF_POINTS, TECH_LIST } from "@/constants";

const SubHeading = ({ children }: { children: string }) => (
  <h3 className="font-mono text-small uppercase tracking-[0.16em] text-accent">{children}</h3>
);

export const Skills = () => (
  <Section id="skills">
    <Reveal>
      <SubHeading>Proven by work</SubHeading>
      <p className="mt-4 max-w-prose text-body text-ink-muted">
        Every number comes from the commit history of the plugin it names.
      </p>
    </Reveal>

    <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PROOF_POINTS.map((point, i) => (
        <li key={point.label} className="flex">
          <Reveal delay={(i % 3) * 80} className="flex w-full">
            <Card className="w-full p-6">
              <Stat {...point} />
            </Card>
          </Reveal>
        </li>
      ))}
    </ul>

    <div className="mt-14 border-t border-line pt-10">
      <Reveal>
        <SubHeading>What I work with</SubHeading>
      </Reveal>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {TECH_LIST.map((group, i) => (
          <Reveal key={group.category} delay={(i % 2) * 80} className="flex">
            <Card className="w-full p-6">
              <h4 className="flex items-center gap-2.5 font-mono text-label uppercase tracking-[0.16em] text-ink-faint">
                <Icon name={group.icon} size={16} className="shrink-0 text-accent" />
                {group.category}
              </h4>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map(item => (
                  <li key={item}>
                    <Tag variant="solid">{item}</Tag>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);
