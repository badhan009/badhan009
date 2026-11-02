import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { ScrollReveal } from "../motion/ScrollReveal";
export function AboutSection() {
  return (
    <section className="about container section" id="about">
      <ScrollReveal className="about-copy">
        <p className="eyebrow">
          <span>01</span> / About
        </p>
        <h2>
          A developer
          <br />
          who thinks
          <br />
          in <span className="muted-heading">products.</span>
        </h2>
        <p className="body-copy">
          I turn complex ideas into clean, high-performance web applications
          with a strong focus on design, usability, and real-world impact.
        </p>
        <details className="about-details">
          <summary>
            More about me <ArrowUpRight size={18} />
          </summary>
          <p>
            I work at the intersection of design and development. My approach
            starts with understanding the people behind a product, then choosing
            the simplest, strongest way to bring it to life.
          </p>
        </details>
      </ScrollReveal>
      <div className="highlights">
        {site.highlights.map((highlight) => (
          <div key={highlight.title}>
            <h3>{highlight.title}</h3>
            <p>{highlight.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
