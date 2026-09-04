import { Section, Card, Tag, Reveal } from "@/components/ui";
import { TECH_LIST } from "@/constants";

export const Skills = () => (
  <Section id="skills">
    <div className="grid items-start gap-5 md:grid-cols-2">
      {TECH_LIST.map((group, i) => (
        <Reveal key={group.category} delay={(i % 2) * 80} className="flex">
          <Card className="w-full p-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
              {group.category}
            </h3>

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
  </Section>
);
