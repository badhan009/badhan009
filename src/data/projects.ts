export const projects = [
  {
    slug: "nexora-saas",
    title: "Nexora SaaS",
    category: "SaaS · Web application",
    theme: "nexora",
    description:
      "A modern SaaS platform concept for team collaboration, analytics, and subscription billing.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    overview:
      "Nexora explores how a growing team can understand its business in a single workspace. The concept brings revenue, project activity, and team updates into a calm, legible dashboard.",
    challenge:
      "Complex dashboards often ask users to scan too much information. This concept organizes key metrics first, gives trends room to breathe, and keeps secondary activity within reach.",
    approach: [
      "A reusable dashboard shell with clear navigation and consistent metric components.",
      "Responsive information hierarchy that prioritizes essential data on smaller screens.",
      "Typed presentation data and semantic components keep the visual prototype easy to extend.",
    ],
    scope:
      "Visual interface concept. Metrics are sample data; authentication, billing, and a live database are outside this demo.",
    liveUrl: "",
  },
  {
    slug: "form-commerce",
    title: "FORM Commerce",
    category: "E-commerce · Digital storefront",
    theme: "commerce",
    description:
      "An editorial storefront concept for considered objects and everyday essentials.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    overview:
      "FORM is a study in quiet commerce. A restrained palette, oversized product typography, and a simple catalog structure keep the focus on discovering thoughtful everyday objects.",
    challenge:
      "An online store needs clarity as much as personality. The concept balances an editorial brand story with readable product information and obvious next steps.",
    approach: [
      "A flexible catalog composition with reusable product and collection components.",
      "Clear type hierarchy and generous spacing for a more focused browsing experience.",
      "A responsive storefront presentation designed to support a future commerce integration.",
    ],
    scope:
      "Visual storefront concept. Product information is illustrative; there is no live checkout, stock management, or payment processing.",
    liveUrl: "",
  },
  {
    slug: "studio-orbit",
    title: "Studio Orbit",
    category: "Creative agency · Brand website",
    theme: "agency",
    description:
      "A bold digital home for an independent studio shaping ambitious brands.",
    technologies: ["Next.js", "Motion", "TypeScript", "CSS"],
    overview:
      "Studio Orbit explores an expressive home for a small creative practice. Strong typographic rhythm and spacious project storytelling make the work the center of attention.",
    challenge:
      "Agency sites can become visually noisy. This concept uses a disciplined grid and a single accent color to create energy while keeping the message clear.",
    approach: [
      "Editorial section layouts connected by a consistent typographic system.",
      "Restrained movement with reduced-motion support built into the interaction design.",
      "A modular project narrative that can accommodate photography, process, and outcomes.",
    ],
    scope:
      "Visual agency concept. The studio identity and portfolio are fictional demonstrations, not client work.",
    liveUrl: "",
  },
] as const;
export type Project = (typeof projects)[number];
