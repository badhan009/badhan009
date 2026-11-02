import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCarousel } from "../ui/ProjectCarousel";
export function FeaturedWorkSection() {
  return (
    <section className="container section projects" id="projects">
      <SectionHeading
        number="04"
        label="Projects"
        title="Featured work"
        description="Selected concept projects. An exploration of thoughtful design and modern development."
      />
      <ProjectCarousel />
    </section>
  );
}
