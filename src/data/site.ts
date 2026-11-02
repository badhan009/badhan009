export const site = {
  name: "Jack",
  title: "Jack — Full-Stack Developer | Creative Web Experiences",
  description:
    "Explore the portfolio of Jack, a full-stack developer building modern websites, scalable applications, and high-performance digital experiences.",
  email: "",
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
  availableForProjects: false,
  github: "https://github.com/badhan009",
  highlights: [
    { title: "Design-led", detail: "Thoughtful by default" },
    { title: "Full-stack", detail: "From interface to infrastructure" },
    { title: "Built to last", detail: "Performance at the core" },
  ],
};
export const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Process", "process"],
] as const;
export const contactHref = site.email ? `mailto:${site.email}` : site.github;
