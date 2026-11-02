import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiWordpress,
  SiGithub,
  SiFigma,
  SiVercel,
} from "react-icons/si";
const icons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  WordPress: SiWordpress,
  GitHub: SiGithub,
  Figma: SiFigma,
  Vercel: SiVercel,
};
export function TechnologyIcon({ name }: { name: string }) {
  const Icon = icons[name as keyof typeof icons];
  return Icon ? <Icon aria-hidden="true" /> : null;
}
