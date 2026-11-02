"use client";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
export function CinematicCharacter({ children }: { children: ReactNode }) {
  const scene = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [heroFailed, setHeroFailed] = useState(false);
  const [aboutFailed, setAboutFailed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });
  const y = useTransform(progress, [0, 0.48, 0.75, 1], [0, 120, 160, 100]);
  const scale = useTransform(progress, [0, 0.5, 0.8], [1, 0.88, 0.85]);
  const heroOpacity = useTransform(progress, [0.12, 0.36], [1, 0]);
  const aboutOpacity = useTransform(
    progress,
    [0.12, 0.36, 0.77, 0.96],
    [0, 1, 1, 0],
  );
  return (
    <div ref={scene} className="cinematic-scene">
      <div className="character-track" aria-hidden="true">
        <div className="character-sticky">
          <motion.div
            className="character-art"
            style={reduced ? undefined : { y, scale }}
          >
            {!heroFailed && (
              <motion.div
                className="character-view hero-view"
                style={reduced ? undefined : { opacity: heroOpacity }}
              >
                <Image
                  src="/images/character/hero.webp"
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 62vw"
                  preload
                  onError={() => setHeroFailed(true)}
                />
              </motion.div>
            )}
            {!aboutFailed && (
              <motion.div
                className="character-view about-view"
                style={reduced ? undefined : { opacity: aboutOpacity }}
              >
                <Image
                  src="/images/character/about.webp"
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 62vw"
                  onError={() => setAboutFailed(true)}
                />
              </motion.div>
            )}
            {heroFailed && aboutFailed && (
              <p className="artwork-fallback">
                Art in progress.
                <br />
                Engineering in motion.
              </p>
            )}
          </motion.div>
        </div>
      </div>
      {children}
    </div>
  );
}
