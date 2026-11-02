"use client";
import { useRef } from "react";
import { Compass, Map, CodeXml, Rocket } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
const steps = [
  {
    title: "Discover",
    description: "Understand goals, users, and requirements.",
    icon: Compass,
  },
  {
    title: "Plan",
    description: "Define the scope, architecture, and roadmap.",
    icon: Map,
  },
  {
    title: "Build",
    description: "Develop, test, and refine the solution.",
    icon: CodeXml,
  },
  {
    title: "Launch",
    description: "Deploy, optimize, and scale with confidence.",
    icon: Rocket,
  },
];
export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 65%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section className="container section process" id="process" ref={ref}>
      <SectionHeading
        number="05"
        label="Process"
        title="How I work"
        description="A simple, transparent process that keeps your project on track."
      />
      <div className="process-grid">
        <motion.div
          className="process-progress"
          style={{ scaleX: reduced ? 1 : scaleX }}
        />
        {steps.map(({ title, description, icon: Icon }, i) => (
          <motion.div
            className="process-step"
            key={title}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduced ? 0 : i * 0.12 }}
          >
            <div className="process-icon">
              <Icon size={25} strokeWidth={1.3} />
            </div>
            <span className="micro">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
