"use client";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Brand } from "../ui/Brand";
import { navigation } from "@/data/site";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);
  return (
    <motion.header
      className="navbar"
      initial={reduced ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(([label, id]) => (
          <a key={id} href={`/#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <Link href="/#contact" className="nav-contact">
        Let’s talk <ArrowUpRight size={16} />
      </Link>
      <button
        ref={button}
        className="menu-toggle icon-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {[...navigation, ["Contact", "contact"]].map(([label, id]) => (
          <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
            {label}
            <ArrowUpRight size={18} />
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
