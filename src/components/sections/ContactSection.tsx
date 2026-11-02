import { SiGithub } from "react-icons/si";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { contactHref, site } from "@/data/site";
import { ScrollReveal } from "../motion/ScrollReveal";
export function ContactSection() {
  return (
    <section className="contact-wrap" id="contact">
      <div className="container contact section">
        <ScrollReveal className="contact-copy">
          <p className="eyebrow">
            <span>06</span> / Contact
          </p>
          <h2>
            Let’s build
            <br />
            <span className="muted-heading">together.</span>
          </h2>
          <p className="body-copy">
            Have a project in mind? Let’s turn your idea into a powerful digital
            experience.
          </p>
          <a
            href={contactHref}
            className="button button-primary"
            {...(!site.email
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {site.email ? (
              <Mail size={17} />
            ) : (
              <SiGithub aria-hidden="true" size={17} />
            )}
            {site.email ? "Get in touch" : "Connect on GitHub"}
            <ArrowUpRight size={18} />
          </a>
        </ScrollReveal>
        <div className="contact-art" aria-hidden="true">
          <Image
            src="/images/decorations/chrome-ring.webp"
            alt=""
            fill
            sizes="(max-width: 700px) 80vw, 45vw"
          />
        </div>
        <span className="contact-signoff micro">
          Great things begin with a conversation.
        </span>
      </div>
    </section>
  );
}
