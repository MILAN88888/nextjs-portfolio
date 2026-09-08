import { Section, Card, Stat, Tag, Reveal } from "@/components/ui";
import { PROOF_POINTS, TECH_LIST } from "@/constants";

const SubHeading = ({ children }: { children: string }) => (
  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{children}</h3>
);

export const Skills = () => (
  <Section id="skills">
    <Reveal>
      <SubHeading>Proven by work</SubHeading>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
        Every number here comes from the commit history of the plugin it names,
        so you can check it rather than take my word for it.
      </p>
    </Reveal>

    <ul className="mt-6 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PROOF_POINTS.map((point, i) => (
        <li key={point.label} className="flex">
          <Reveal delay={(i % 3) * 80} className="flex w-full">
            <Card className="w-full p-5">
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

      <div className="mt-6 grid items-start gap-5 md:grid-cols-2">
        {TECH_LIST.map((group, i) => (
          <Reveal key={group.category} delay={(i % 2) * 80} className="flex">
            <Card className="w-full p-5">
              <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
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
