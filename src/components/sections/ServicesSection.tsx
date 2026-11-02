import {
  ArrowUpRight,
  CodeXml,
  Layers,
  PanelsTopLeft,
  Zap,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../motion/ScrollReveal";
const icons = {
  code: CodeXml,
  layers: Layers,
  panels: PanelsTopLeft,
  zap: Zap,
};
export function ServicesSection() {
  return (
    <section className="container section services" id="services">
      <ScrollReveal>
        <SectionHeading
          number="02"
          label="Services"
          title="What I offer"
          description="End-to-end development services to bring your ideas to life."
        />
      </ScrollReveal>
      <div className="services-grid">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <ScrollReveal key={service.title} delay={i * 0.07}>
              <a className="service-card" href="#contact">
                <div className="service-top">
                  <Icon size={29} strokeWidth={1.3} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-bottom">
                  Let’s make it happen <ArrowUpRight size={20} />
                </span>
              </a>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
