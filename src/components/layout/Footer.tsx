import { SiGithub } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "../ui/Brand";
import { navigation, site } from "@/data/site";
export function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div>
          <Brand />
          <p className="micro">Developer · Builder · Creator</p>
        </div>
        <nav aria-label="Footer navigation">
          {[...navigation, ["Contact", "contact"]].map(([label, id]) => (
            <a key={id} href={`/#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button"
          aria-label="GitHub profile (opens in new tab)"
        >
          <SiGithub aria-hidden="true" size={20} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Jack. Crafted with intention.</span>
        <span>Design meets engineering.</span>
        <a href="#home">
          Back to top <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
