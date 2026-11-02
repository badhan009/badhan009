import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import { site } from "@/data/site";
import { TechnologyIcon } from "../ui/TechnologyIcon";
export function HeroSection() {
  return (
    <>
      <section
        className="hero container"
        id="home"
        aria-labelledby="hero-title"
      >
        <div className="hero-topline">
          <p className="eyebrow">
            <span className="status-dot" /> Full-stack developer
          </p>
          <span className="micro hero-edition">
            Independent developer / Portfolio ’26
          </span>
        </div>
        <div className="hero-copy">
          <h1 id="hero-title">
            <span className="hero-greeting">Hi, I’m</span>
            <span className="hero-name">
              JACK<span>.</span>
            </span>
          </h1>
          <p className="hero-description">
            I design and build modern web experiences that are fast, scalable,
            and impossible to ignore.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#about">
              About me <ArrowDownRight size={18} />
            </a>
          </div>
          {site.availableForProjects && (
            <p className="availability">
              <span className="status-dot" /> Available for projects
            </p>
          )}
        </div>
        <div className="hero-side-note">
          <MoveUpRight size={24} />
          <span>
            Human ideas.
            <br />
            Digital possibilities.
          </span>
        </div>
        <div className="hero-bottom">
          <span className="micro">Built with purpose. Designed to feel.</span>
          <a href="#about" className="scroll-link">
            Scroll to explore <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <div className="technology-strip container">
        <span className="micro">Tech I work with</span>
        <div>
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map(
            (name) => (
              <span className="strip-tech" key={name}>
                <TechnologyIcon name={name} />
                {name}
              </span>
            ),
          )}
        </div>
      </div>
    </>
  );
}
