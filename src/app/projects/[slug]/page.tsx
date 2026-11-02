import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectInterface } from "@/components/ui/ProjectInterface";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project
      ? `${project.title} — Concept case study | Jack`
      : "Project not found | Jack",
    description: project?.description,
    ...(site.url
      ? { alternates: { canonical: `${site.url}/projects/${slug}` } }
      : {}),
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <div className="page-frame">
      <Navbar />
      <main id="main-content" className="container case-study">
        <Link href="/#projects" className="text-link">
          <ArrowLeft size={16} /> All projects
        </Link>
        <div className="case-heading">
          <p className="eyebrow">{project.category} / Demo concept</p>
          <h1>{project.title}</h1>
          <p className="body-copy">{project.description}</p>
          <div className="tags">
            {project.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="case-visual">
          <ProjectInterface theme={project.theme} />
        </div>
        <div className="case-story">
          <div>
            <p className="eyebrow">01 / The idea</p>
            <h2>Project overview</h2>
          </div>
          <div>
            <p>{project.overview}</p>
            <p>{project.challenge}</p>
          </div>
        </div>
        <div className="case-story">
          <div>
            <p className="eyebrow">02 / The approach</p>
            <h2>Design & implementation</h2>
          </div>
          <ol>
            {project.approach.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ol>
        </div>
        <div className="case-gallery">
          <div>
            <ProjectInterface theme={project.theme} view={1} />
          </div>
          <div>
            <ProjectInterface theme={project.theme} view={2} />
          </div>
        </div>
        <div className="case-scope">
          <p className="eyebrow">Concept scope</p>
          <p>{project.scope}</p>
          {project.liveUrl && (
            <a
              className="text-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live project <ArrowUpRight size={18} />
            </a>
          )}
        </div>
        <Link className="next-project" href={`/projects/${next.slug}`}>
          <span>
            <span className="eyebrow">Next project</span>
            <strong>{next.title}</strong>
          </span>
          <ArrowUpRight size={44} />
        </Link>
      </main>
      <Footer />
    </div>
  );
}
