"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectInterface } from "./ProjectInterface";
export function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const [view, setView] = useState(0);
  const touchStart = useRef<number | null>(null);
  const reduced = useReducedMotion();
  const project = projects[index];
  const change = (step: number) => {
    setIndex((i) => (i + step + projects.length) % projects.length);
    setView(0);
  };
  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured project concepts"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          change(1);
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          change(-1);
        }
      }}
    >
      <div
        className="project-stage"
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStart.current !== null) {
            const diff = touchStart.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 60) change(diff > 0 ? 1 : -1);
            touchStart.current = null;
          }
        }}
      >
        <span className="stage-label micro">Concept exploration / 2026</span>
        <span className="stage-number">0{index + 1}</span>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${project.slug}-${view}`}
            className={`laptop ${view === 2 ? "mobile-preview" : ""}`}
            transformTemplate={(_, transform) =>
              `var(--laptop-perspective) ${transform === "none" ? "" : transform}`
            }
            initial={reduced ? false : { opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="laptop-screen">
              <span className="webcam" />
              <ProjectInterface theme={project.theme} view={view} />
            </div>
            <div className="laptop-base" />
          </motion.div>
        </AnimatePresence>
        <div className="stage-foot micro">
          <span>Design & development concept</span>
          <span>
            Explore the details <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
      <div className="project-meta">
        <div aria-live="polite" aria-atomic="true">
          <p className="eyebrow">
            {project.category} <span className="demo-label">Demo concept</span>
          </p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="button button-outline"
        >
          View case study <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="project-bottom">
        <div
          className="project-thumbnails"
          role="group"
          aria-label="Project preview views"
        >
          {["Overview", "Detail", "Compact"].map((label, i) => (
            <button
              key={label}
              className={`project-thumbnail ${view === i ? "selected" : ""}`}
              onClick={() => setView(i)}
              aria-pressed={view === i}
            >
              <div className="thumbnail-canvas" aria-hidden="true">
                <ProjectInterface theme={project.theme} view={i} />
              </div>
              <span>
                0{i + 1} / {label}
              </span>
            </button>
          ))}
        </div>
        <div className="carousel-controls">
          <span>
            <b>0{index + 1}</b> / 0{projects.length}
          </span>
          <button
            className="icon-button"
            onClick={() => change(-1)}
            aria-label="Previous project"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="icon-button"
            onClick={() => change(1)}
            aria-label="Next project"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
