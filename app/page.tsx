import type { ElementType } from "react";
import Image from "next/image";
import {
  ArrowUpLeft,
  AtSign,
  Blocks,
  Code2,
  Gauge,
  Globe2,
  LayoutDashboard,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Send,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { MobileNavMenu } from "./MobileNavMenu";
import { siteContent } from "./siteContent";
import pic1 from "../pic/pic1.jpg";
import pic2 from "../pic/pic2.jpg";
import pic3 from "../pic/pic3.jpg";
import pic4 from "../pic/pic4.jpg";

const serviceIcons: ElementType[] = [
  Globe2,
  LayoutDashboard,
  Palette,
  ServerCog,
];

const workImages = [pic1, pic2, pic3, pic4];

const processIcons: ElementType[] = [MessageCircle, Code2, Gauge];

const aboutIcons: ElementType[] = [Code2, MonitorSmartphone, Sparkles];

const contactIcons: ElementType[] = [AtSign, MessageCircle, Send, Mail];

export default function Home() {
  const {
    about,
    brand,
    contact,
    hero,
    highlights,
    highlightsLabel,
    nav,
    navMenuLabel,
    process,
    services,
    works,
  } = siteContent;

  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <Image
            src={pic1}
            alt=""
            fill
            priority
            placeholder="blur"
            quality={92}
            sizes="100vw"
          />
        </div>

        <div className="shell hero-shell">
          <nav className="nav" aria-label="ناوبەری سەرەکی">
            <a className="brand" href="#home" aria-label={brand.name}>
              <span className="brand-mark">{brand.mark}</span>
              <span>
                <strong>{brand.name}</strong>
                <small>{brand.tagline}</small>
              </span>
            </a>
            <div className="nav-links">
              {nav.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <MobileNavMenu label={navMenuLabel} items={nav} />
          </nav>

          <div className="hero-content">
            <div className="hero-copy">
              <div className="eyebrow">
                <Sparkles size={18} aria-hidden="true" />
                <span>{hero.eyebrow}</span>
              </div>
              <h1 id="hero-title">{hero.title}</h1>
              <p>{hero.description}</p>
              <div className="hero-actions">
                <a
                  className="button primary"
                  href={hero.primaryAction.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  {hero.primaryAction.label}
                </a>
                <a className="button secondary" href={hero.secondaryAction.href}>
                  <Blocks size={20} aria-hidden="true" />
                  {hero.secondaryAction.label}
                </a>
              </div>
            </div>

            <div className="hero-metrics" aria-label={hero.statsLabel}>
              {hero.stats.map((stat) => (
                <div className="metric" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="trust-band" aria-label={highlightsLabel}>
        <div className="shell highlights">
          {highlights.map((item) => (
            <span key={item}>
              <ShieldCheck size={18} aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="services" aria-labelledby="services-title">
        <div className="shell">
          <div className="section-heading">
            <span>{services.eyebrow}</span>
            <h2 id="services-title">{services.title}</h2>
          </div>
          <div className="services-grid">
            {services.items.map((service, index) => {
              const Icon = serviceIcons[index] ?? Globe2;

              return (
                <article className="service-card" key={service.title}>
                  <div className="icon-box">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="tag-list" aria-label={services.tagListLabel}>
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section process-section"
        id="process"
        aria-labelledby="process-title"
      >
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <span>{process.eyebrow}</span>
              <h2 id="process-title">{process.title}</h2>
            </div>
            <p>{process.description}</p>
          </div>
          <div className="process-grid">
            {process.items.map((item, index) => {
              const Icon = processIcons[index] ?? MessageCircle;

              return (
                <article className="process-card" key={item.step}>
                  <span className="step-number">{item.step}</span>
                  <div className="icon-box soft-icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section works-section" id="works" aria-labelledby="works-title">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <span>{works.eyebrow}</span>
              <h2 id="works-title">{works.title}</h2>
            </div>
            <p>{works.description}</p>
          </div>
          <div className="works-grid">
            {works.items.map((work, index) => (
              <article className="work-card" key={work.title}>
                <div className="work-image">
                  <Image
                    src={workImages[index] ?? pic1}
                    alt={work.title}
                    placeholder="blur"
                    sizes="(max-width: 780px) 100vw, 50vw"
                  />
                  <span className="work-badge">{work.result}</span>
                </div>
                <div className="work-copy">
                  <h3>{work.title}</h3>
                  <p>{work.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="shell about-grid">
          <div className="about-copy">
            <div className="section-heading compact">
              <span>{about.eyebrow}</span>
              <h2 id="about-title">{about.title}</h2>
            </div>
            <p>{about.description}</p>
          </div>
          <div className="about-list" aria-label={about.listLabel}>
            {about.items.map((item, index) => {
              const Icon = aboutIcons[index] ?? Sparkles;

              return (
                <div key={item.title}>
                  <Icon size={22} aria-hidden="true" />
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="shell contact-grid">
          <div>
            <div className="section-heading compact">
              <span>{contact.eyebrow}</span>
              <h2 id="contact-title">{contact.title}</h2>
            </div>
            <p>{contact.description}</p>
            <a
              className="contact-cta"
              href={contact.cta.href}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} aria-hidden="true" />
              {contact.cta.label}
            </a>
          </div>
          <div className="contact-list">
            {contact.items.map((item, index) => {
              const Icon = contactIcons[index] ?? MessageCircle;
              const content = (
                <>
                  <span className="contact-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.value}</small>
                  </span>
                  {item.href ? (
                    <ArrowUpLeft className="open-icon" size={18} aria-hidden="true" />
                  ) : null}
                </>
              );

              return item.href ? (
                <a
                  className="contact-item"
                  href={item.href}
                  key={item.label}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  {content}
                </a>
              ) : (
                <div className="contact-item muted" key={item.label}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
