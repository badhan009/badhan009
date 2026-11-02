import { skills } from "@/data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { TechnologyIcon } from "../ui/TechnologyIcon";
import { ScrollReveal } from "../motion/ScrollReveal";
export function TechStackSection() {
  return (
    <section className="container section toolkit" id="skills">
      <ScrollReveal>
        <SectionHeading
          number="03"
          label="Tech stack"
          title="My toolkit"
          description="A modern, reliable stack to build scalable digital products."
        />
      </ScrollReveal>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <ScrollReveal
            className="skill-tile"
            key={skill.name}
            delay={i * 0.025}
          >
            <TechnologyIcon name={skill.name} />
            <div>
              <h3>{skill.name}</h3>
              <span>{skill.category}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
