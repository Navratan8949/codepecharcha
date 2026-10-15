"use client";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Blocks,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  ExternalLink,
  Globe2,
  HeartHandshake,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  MonitorSmartphone,
  Network,
  PenTool,
  Send,
  Settings2,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { services, projects, technologies } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiExpo,
  SiPhp,
  SiFigma,
  SiGoogleanalytics,
  SiMeta,
  SiHtml5,
  SiCss,
  SiTailwindcss,
} from "react-icons/si";
import { FaServer, FaVideo, FaChartLine } from "react-icons/fa";

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="section-shell hero-grid">
        <div>
          <h2 className="hero-eyebrow reveal">
            Software, App & Marketing Company
          </h2>
          <motion.h1
            id="hero-title"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <span className="sr-only">
              Custom Websites, Apps & CRM for Jaipur's businesses starting at
              ₹6,999.
            </span>
            {"Code ki baat,".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", damping: 12, stiffness: 100 },
                  },
                }}
                style={{ display: "inline-block", marginRight: "0.25em" }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.em
              style={{
                color: "var(--coral)",
                fontStyle: "normal",
                display: "inline-block",
              }}
            >
              {"business ke saath.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 100,
                      },
                    },
                  }}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.em>
          </motion.h1>
          <p className="hero-copy reveal reveal-delay-2">
            We build modern websites, mobile apps and custom software that help
            businesses in Jaipur, Rajasthan, and across India turn ideas into
            digital products.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <motion.a
              className="button-coral"
              href="#contact"
              data-testid="button-hero-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              className="button-ghost"
              href="#projects"
              data-testid="button-hero-work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work <ArrowDownRight size={16} />
            </motion.a>
          </div>
          <div
            className="hero-meta reveal reveal-delay-3"
            style={{ textTransform: "capitalize", letterSpacing: "normal" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--coral)",
                }}
              ></div>
              <strong
                style={{
                  fontSize: "15px",
                  letterSpacing: "0",
                  marginBottom: "0",
                }}
              >
                Websites
              </strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--coral)",
                }}
              ></div>
              <strong
                style={{
                  fontSize: "15px",
                  letterSpacing: "0",
                  marginBottom: "0",
                }}
              >
                Mobile Apps
              </strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--coral)",
                }}
              ></div>
              <strong
                style={{
                  fontSize: "15px",
                  letterSpacing: "0",
                  marginBottom: "0",
                }}
              >
                Custom Software
              </strong>
            </div>
          </div>
        </div>
        <div
          className="hero-art reveal reveal-delay-2"
          // alt="Code Pe Charcha company visual"
          aria-label="Code Pe Charcha company visual"
        >
          <motion.div
            className="orbit one"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          />
          <motion.div
            className="orbit two"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
          />
          <motion.div
            className="orbit three"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
          />
          <div className="hero-console">
            <div className="console-top">
              <span>cpc / build-log.tsx</span>
              <span className="console-dots">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="console-code">
              <div>
                <span className="muted">01</span>{" "}
                <span className="pink">const</span>{" "}
                <span className="blue">roughIdea</span> ={" "}
                <span className="lime">true</span>;
              </div>
              <div>
                <span className="muted">02</span>{" "}
                <span className="pink">while</span> (business.needs) {"{"}
              </div>
              <div className="indent">
                <span className="pink">listen</span>(requirements);
              </div>
              <div className="indent">
                <span className="pink">shape</span>(betterExperiences);
              </div>
              <div className="indent">
                <span className="pink">ship</span>(somethingUseful);
              </div>
              <div>
                {"}"} <span className="console-cursor" />
              </div>
              <br />
              <div>
                <span className="muted">
                  // from conversation to production
                </span>
              </div>
            </div>
          </div>
          <div className="floating-chip chip-one">
            <CircleDot size={13} /> human-first process
          </div>
          <div className="floating-chip chip-two">
            <Blocks size={13} /> built to ship
          </div>
        </div>
      </div>
      <a href="#intro" className="hero-scroll" data-testid="link-hero-scroll">
        <span /> Scroll to explore
      </a>
    </section>
  );
}

function Intro() {
  return (
    <section className="section" id="intro" aria-labelledby="intro-title">
      <div className="section-shell intro-layout">
        <div className="reveal flex flex-col gap-6">
          <div className="section-kicker">01 / The starting point</div>
          <img
            src="/intro-image.png"
            alt="Turning ideas into digital products"
            className="w-full object-cover aspect-square"
          />
        </div>
        <div className="reveal reveal-delay-1">
          <h2 id="intro-title">
            Turning ideas into{" "}
            <span className="text-balance">digital products.</span>
          </h2>
          <p className="intro-statement">
            From business websites to complete software systems, we design and
            develop practical digital solutions{" "}
            <span>around your requirements.</span>
          </p>
          <p className="section-intro">
            No theatre. No technical fog. Just a thoughtful team that asks good
            questions, makes the complex feel clear and gets your product into
            the hands of real people.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="section-shell">
        <div className="services-head reveal">
          <div>
            <div className="section-kicker">02 / Capabilities</div>
            <h2 id="services-title">Our Services: What we build</h2>
          </div>
          <p className="section-intro">
            A focused set of capabilities for teams who want to move from “we
            should” to “it works.”
          </p>
        </div>
        <div className="service-grid">
          {services.map(
            ({ id, number, title, copy, features, icon: Icon }, index) => (
              <Link
                href={`/services/${id}`}
                key={title}
                className="service-card-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <motion.article
                  className={`service-card reveal reveal-delay-${(index % 3) + 1}`}
                  data-testid={`card-service-${number}`}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="service-icon-wrapper">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3>{title}</h3>
                  <p className="service-copy">{copy}</p>

                  <ul className="service-features">
                    {features?.map((feature) => (
                      <li key={feature} className="service-feature-item">
                        <Check size={14} className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-footer">
                    <span className="service-index">{number}</span>
                    <span className="service-arrow">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ),
          )}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }} className="reveal">
          <Link
            href="/services"
            className="button-ghost inline-flex items-center gap-2"
            data-testid="link-view-all-services"
          >
            Explore Complete Services Directory <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    [
      "01",
      "Discover",
      "Understand the business, the people and the real requirements behind the brief.",
    ],
    [
      "02",
      "Design",
      "Plan the experience and interface so the product feels obvious to use.",
    ],
    [
      "03",
      "Develop",
      "Build, integrate and test in close conversation — not behind a curtain.",
    ],
    [
      "04",
      "Launch",
      "Deploy with care, read what happens and support the next version.",
    ],
  ];
  return (
    <section
      className="section section-dark"
      id="about"
      aria-labelledby="process-title"
    >
      <div className="section-shell process-layout">
        <div className="process-intro reveal">
          <div className="section-kicker">03 / Our rhythm</div>
          <h2 id="process-title">How we build your App & Software</h2>
          <p className="section-intro">
            The work is collaborative by design. You bring the context; we bring
            the craft, clarity and follow-through.
          </p>
          <div className="process-note">
            <PenTool size={14} /> no black boxes
          </div>
        </div>
        <div className="process-steps">
          {steps.map(([number, title, copy], index) => (
            <article
              className={`process-step reveal reveal-delay-${index + 1}`}
              key={number}
            >
              <span className="step-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ image, name }: { image?: string; name: string }) {
  return (
    <div className="project-preview" style={{ padding: 0, overflow: "hidden" }}>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={800}
          height={600}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div
          style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "#eee" }}
        />
      )}
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Websites" && p.type === "website") return true;
    if (filter === "Software" && p.type === "software") return true;
    if (filter === "Mobile Apps" && p.type === "app") return true;
    return false;
  });

  return (
    <section
      className="section projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-shell">
        <div className="projects-top reveal">
          <div>
            <div className="section-kicker">04 / Selected demos</div>
            <h2 id="projects-title">Our Web & App Portfolio</h2>
          </div>
          <p className="section-intro">
            A small tour of concepts and live demos. Every screen is a chance to
            make the next step feel easier.
          </p>
        </div>

        <div className="projects-filters reveal">
          {["All", "Websites", "Software", "Mobile Apps"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-btn ${filter === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.article
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index % 6) * 0.04 }}
                className="project-card"
                data-testid={`card-project-${index + 1}`}
              >
                <ProjectPreview image={project.image} name={project.name} />
                <div className="project-info">
                  <span className="project-tag">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.copy}</p>
                  <span className="project-link">
                    View project <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
        <div className="projects-end reveal" style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            className="button-coral"
            href="/projects"
            data-testid="button-view-all-portfolio"
          >
            Explore Full Portfolio Hub <ArrowUpRight size={15} />
          </Link>
          <a
            className="button-ghost"
            href="#contact"
            data-testid="button-view-all-projects"
          >
            Have a project in mind? <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      title: "Quality and Expertise",
      copy: "We focus on our commitment to provide our customers with the best experience, & high quality services.",
      icon: <HeartHandshake size={28} />,
    },
    {
      title: "Innovation and Technology",
      copy: "We insist on the latest cutting-edge technology, innovations, and advanced features that make our service stand out.",
      icon: <Globe2 size={28} />,
    },
    {
      title: "Transparency",
      copy: "We value open and honest communication, providing regular updates and progress reports.",
      icon: <Layers3 size={28} />,
    },
  ];

  return (
    <section
      className="section"
      id="why-us"
      style={{ backgroundColor: "#FCFAF6" }}
      aria-labelledby="why-title"
    >
      <div
        className="reveal"
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="section-kicker">05 / Why choose us</div>
        <h2 id="why-title" className="why-timeline-title">
          Why <span>Code Pe Charcha</span>
        </h2>
      </div>
      <div className="section-shell why-timeline-layout">
        <div className="why-timeline-container reveal reveal-delay-1">
          {items.reduce((acc: any[], item, index) => {
            acc.push(
              <div className="why-timeline-item" key={`item-${index}`}>
                <div className="why-icon-wrapper">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>,
            );

            if (index < items.length - 1) {
              acc.push(
                <div className="why-timeline-arrow" key={`arrow-${index}`}>
                  {index % 2 === 0 ? (
                    <svg
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                      style={{ overflow: "visible" }}
                    >
                      <path
                        d="M0,20 Q50,-5 95,20"
                        stroke="#cbd5e1"
                        strokeWidth="1.5"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d="M90,15 L95,20 L90,25"
                        stroke="#cbd5e1"
                        strokeWidth="1.5"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                      style={{ overflow: "visible" }}
                    >
                      <path
                        d="M0,20 Q50,45 95,20"
                        stroke="#cbd5e1"
                        strokeWidth="1.5"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d="M90,15 L95,20 L90,25"
                        stroke="#cbd5e1"
                        strokeWidth="1.5"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  )}
                </div>,
              );
            }

            return acc;
          }, [])}
        </div>
      </div>
    </section>
  );
}

const techData: Record<string, { icon: React.ReactNode; color: string }> = {
  HTML5: { icon: <SiHtml5 />, color: "#E34F26" },
  CSS3: { icon: <SiCss />, color: "#1572B6" },
  JavaScript: { icon: <SiJavascript />, color: "#F7DF1E" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4" },
  "React.js": { icon: <SiReact />, color: "#61DAFB" },
  "React Native / Expo": { icon: <SiReact />, color: "#61DAFB" },
  "Node.js": { icon: <SiNodedotjs />, color: "#339933" },
  MongoDB: { icon: <SiMongodb />, color: "#47A248" },
  "Express.js": { icon: <SiExpress />, color: "var(--ink)" },
  PHP: { icon: <SiPhp />, color: "#777BB4" },
  "Next.js": { icon: <SiNextdotjs />, color: "var(--ink)" },
  Redux: { icon: <SiRedux />, color: "#764ABC" },
  Firebase: { icon: <SiFirebase />, color: "#FFCA28" },
  Canva: { icon: <PenTool />, color: "#00C4CC" },
  Figma: { icon: <SiFigma />, color: "#F24E1E" },
  "Video Editing": { icon: <FaVideo />, color: "#FF0000" },
  "Social Media Marketing": { icon: <SiMeta />, color: "#0668E1" },
  "SEO & Growth": { icon: <FaChartLine />, color: "#0F9D58" },
  "Google Analytics": { icon: <SiGoogleanalytics />, color: "#E37400" },
};

function Technologies() {
  return (
    <section className="tech-section" aria-labelledby="tech-title">
      <div className="section-shell">
        <div className="tech-header reveal">
          <div className="section-kicker">06 / Technologies</div>
          <h2 id="tech-title">The tech stack behind our work</h2>
          <p>
            Comfortable with the modern web. Curious enough to choose the right
            tool when it matters.
          </p>
        </div>
        <div className="tech-grid">
          {technologies.map((tech, index) => {
            const techInfo = techData[tech];
            return (
              <motion.div
                className={`tech-pill reveal reveal-delay-${(index % 3) + 1}`}
                key={tech}
                data-testid={`badge-tech-${index + 1}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="tech-mark"
                  style={{
                    display: "flex",
                    fontSize: "1.25rem",
                    color: techInfo?.color || "var(--ink)",
                  }}
                >
                  {techInfo?.icon || <span className="tech-mark">↳</span>}
                </span>
                {tech}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="section-shell cta-inner">
        <div className="reveal">
          <div className="section-kicker" style={{ color: "var(--ink)" }}>
            09 / Make it real
          </div>
          <h2 id="cta-title">Have an idea? Let's build it.</h2>
          <p>
            Tell us what you want to build and we'll help turn your idea into a
            working digital product.
          </p>
        </div>
        <div className="cta-actions reveal reveal-delay-1">
          <a
            className="button-coral"
            href="#contact"
            data-testid="button-cta-start"
          >
            Start Your Project <ArrowUpRight size={16} />
          </a>
          <a
            className="button-ghost"
            href="mailto:codepecharchainfo@gmail.com"
            data-testid="link-cta-talk"
          >
            Talk to Us <Mail size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is your typical process for a project?",
      a: "We start with a detailed discovery phase to understand your goals. Then we move into design and prototyping, followed by development, testing, and finally, deployment. You are kept in the loop at every stage.",
    },
    {
      q: "How much does a new website or app cost?",
      a: "The cost depends entirely on the scope, features, and complexity of the project. A simple business website will cost much less than a full-fledged custom mobile application. We offer a free consultation to give you an accurate estimate.",
    },
    {
      q: "How long does it take to complete a project?",
      a: "A standard website typically takes 2-4 weeks. Larger custom software or mobile apps can take anywhere from 1 to 3 months depending on the requirements.",
    },
    {
      q: "Do you provide ongoing support after launch?",
      a: "Yes! We offer maintenance and support packages to ensure your digital product stays updated, secure, and running smoothly.",
    },
    {
      q: "Who owns the source code once the project is finished?",
      a: "Once the final payment is cleared, the intellectual property and source code are entirely handed over to you. We hold no ownership over your product.",
    },
  ];

  return (
    <section className="section bg-light" id="faq" aria-labelledby="faq-title">
      <div className="section-shell">
        <div className="reveal">
          <div className="section-kicker">07 / FAQ</div>
          <h2 id="faq-title">Common questions.</h2>
          <p className="section-intro">
            Everything you need to know about how we work.
          </p>
        </div>
        <div
          className="faq-grid reveal reveal-delay-1"
          style={{ marginTop: "30px" }}
        >
          {faqs.map((faq, index) => (
            <details
              className="faq-item"
              key={index}
              open={openIndex === index}
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === index ? null : index);
              }}
            >
              <summary>{faq.q}</summary>
              <div className="faq-content">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mppwwvjo", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSent(true);
        form.reset(); // This clears the fields
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="section"
      style={{ paddingTop: 0 }}
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section-shell contact-layout">
        <div className="reveal">
          <div className="section-kicker">08 / Say hello</div>
          <h2 id="contact-title">Let's start a conversation.</h2>
          <p className="section-intro">
            Have a rough idea, a stuck workflow or a product that needs its next
            chapter? Start wherever you are.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <MessageCircle size={18} />
              <div>
                <small>WhatsApp</small>
                <a
                  href="https://wa.me/918949936535"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-contact-whatsapp"
                >
                  +91 89499 36535
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <Mail size={18} />
              <div>
                <small>Email</small>
                <a
                  href="mailto:codepecharchainfo@gmail.com"
                  data-testid="link-contact-email"
                >
                  codepecharchainfo@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <MapPin size={18} />
              <div>
                <small>Location</small>
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>
        <form
          className="contact-form reveal reveal-delay-1"
          onSubmit={submit}
          data-testid="form-contact"
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your name"
              data-testid="input-contact-name"
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              data-testid="input-contact-email"
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91"
              data-testid="input-contact-phone"
            />
          </div>
          <div className="field">
            <label htmlFor="business">Business name</label>
            <input
              id="business"
              name="business"
              placeholder="Your business"
              data-testid="input-contact-business"
            />
          </div>
          <div className="field">
            <label htmlFor="project-type">Project type</label>
            <select
              id="project-type"
              name="projectType"
              defaultValue=""
              required
              data-testid="select-contact-project"
            >
              <option value="" disabled>
                Choose one
              </option>
              <option>Website</option>
              <option>Mobile App</option>
              <option>E-commerce</option>
              <option>Custom Software</option>
              <option>Admin Panel</option>
              <option>CRM</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="budget">Budget</label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              data-testid="select-contact-budget"
            >
              <option value="" disabled>
                Choose a range
              </option>
              <option>Under ₹10,000</option>
              <option>₹10,000 – ₹25,000</option>
              <option>₹25,000 – ₹50,000</option>
              <option>₹50,000 – ₹1,00,000</option>
              <option>₹1,00,000+</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="message">Tell us a little about it</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="What are you hoping to build?"
              data-testid="textarea-contact-message"
            />
          </div>
          <div className="form-footer">
            <div
              className="form-status"
              role="status"
              aria-live="polite"
              data-testid="status-contact"
            >
              {sent
                ? "Thanks — your inquiry is with us. We will be in touch soon."
                : "Usually replies within one working day."}
            </div>
            <button
              className="button-coral"
              type="submit"
              disabled={loading || sent}
              data-testid="button-submit-contact"
            >
              {loading ? (
                "Sending..."
              ) : sent ? (
                <>
                  <Check size={16} /> Inquiry sent
                </>
              ) : (
                <>
                  Send Inquiry <Send size={15} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Pricing() {
  const websitePlans = [
    {
      name: "Starter Website",
      price: "₹6,999",
      description: "Perfect for local businesses wanting a fast, clean digital presence.",
      badge: null,
      popular: false,
      features: [
        { name: "5 Pages Responsive Website", included: true },
        { name: "Mobile & SEO Friendly Layout", included: true },
        { name: "WhatsApp Lead Chat & Contact Form", included: true },
        { name: "Google Maps & Business Listing", included: true },
        { name: "Fast Loading Speed Optimization", included: true },
        { name: "1 Month Post-Launch Support", included: true },
        { name: "Custom Admin / CMS Panel", included: false },
        { name: "Android & iOS Mobile App", included: false },
        { name: "Custom Software / ERP", included: false },
      ],
    },
    {
      name: "Standard Website & CMS",
      price: "₹14,999",
      description: "Best for growing companies needing a strong lead-generating website.",
      badge: "Most Popular",
      popular: true,
      features: [
        { name: "Up to 10 Pages Dynamic Website", included: true },
        { name: "Free Domain, Fast Cloud Hosting & SSL", included: true },
        { name: "Mobile & On-Page SEO Optimized", included: true },
        { name: "3 Professional Business Emails", included: true },
        { name: "Social Media & Google Setup", included: true },
        { name: "Dynamic Blog / CMS & Admin Panel", included: true },
        { name: "6 Months Dedicated Support", included: true },
        { name: "Android & iOS Mobile App", included: false },
        { name: "Custom Software / ERP", included: false },
      ],
    },
    {
      name: "Web App & E-Commerce",
      price: "₹24,999",
      description: "For full-featured e-commerce stores, portals, and dynamic web apps.",
      badge: null,
      popular: false,
      features: [
        { name: "15+ Pages or Complete Online Store", included: true },
        { name: "Payment Gateway (Razorpay/UPI) Setup", included: true },
        { name: "Inventory, Cart & Order Management", included: true },
        { name: "Custom Admin Dashboard & Analytics", included: true },
        { name: "5 Business Emails + Free Domain & SSL", included: true },
        { name: "WhatsApp & SMS Order Alerts", included: true },
        { name: "1 Year Priority Maintenance & Support", included: true },
        { name: "Free Logo & Visiting Card Design", included: true },
        { name: "Cross-Platform App Ready Architecture", included: true },
      ],
    },
    {
      name: "Website + Mobile App",
      price: "₹44,999",
      description: "Complete digital presence: Dynamic website + Cross-platform Mobile App with unified backend.",
      badge: "Combo Pack",
      popular: false,
      highlight: true,
      features: [
        { name: "Dynamic Business Website & Web Portal", included: true },
        { name: "Cross-Platform Mobile App (Android & iOS)", included: true },
        { name: "Unified Cloud Database & REST API Backend", included: true },
        { name: "Custom Admin Dashboard for Web & App", included: true },
        { name: "Push Notifications & WhatsApp Integration", included: true },
        { name: "Production-Ready APK & iOS App Build Files", included: true },
        { name: "100% Full Source Code Handover", included: true },
        { name: "1 Year Technical Support & Maintenance", included: true },
        { name: "Play Store & App Store Console / Publishing Fee", included: false },
      ],
    },
  ];

  const customServices = [
    {
      title: "Custom Software & ERP/CRM",
      desc: "Tailored manufacturing, hospital, hotel, billing, and wholesale distribution software built for your exact operational workflow.",
      icon: <Monitor size={24} />,
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform Android & iOS apps with real-time notifications, camera/GPS integration, and seamless offline sync.",
      icon: <Smartphone size={24} />,
    },
    {
      title: "Digital Marketing & Branding",
      desc: "Google/Meta Ads, targeted local SEO, Social Media management, UI/UX brand kits, and visiting cards.",
      icon: <TrendingUp size={24} />,
    },
  ];

  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <div className="section-shell">
        <div className="reveal flex flex-col items-center text-center gap-6 mb-16">
          <div className="section-kicker">09 / Pricing & Packages</div>
          <h2 id="pricing-title">Clear, upfront packages for Web, Software & Apps.</h2>
          <p
            className="section-intro"
            style={{ margin: "0 auto", maxWidth: "650px" }}
          >
            No hidden fees. Transparent investment from quick-launch business websites to production-grade custom software and cross-platform mobile apps.
          </p>
        </div>

        <div className="pricing-grid">
          {websitePlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card reveal reveal-delay-${(index % 4) + 1} ${plan.popular ? "popular" : ""} ${plan.highlight ? "highlighted" : ""}`}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={plan.highlight ? { borderColor: "var(--ink)" } : undefined}
            >
              {plan.badge && (
                <div
                  className="pricing-badge"
                  style={
                    plan.highlight
                      ? { background: "var(--ink)", color: "#fff" }
                      : undefined
                  }
                >
                  {plan.badge}
                </div>
              )}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.description}</p>
                <div className="price">{plan.price}</div>
              </div>
              <ul className="pricing-features-list">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={feature.included ? "included" : "disabled"}
                  >
                    {feature.included ? (
                      <Check size={16} className="feature-check" />
                    ) : (
                      <X size={16} className="feature-cross" />
                    )}
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
              <div className="pricing-footer">
                <a
                  href="#contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "12px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    border: plan.popular
                      ? "2px solid var(--coral)"
                      : plan.highlight
                        ? "2px solid var(--ink)"
                        : "2px solid var(--line)",
                    background: plan.popular
                      ? "var(--coral)"
                      : plan.highlight
                        ? "var(--ink)"
                        : "transparent",
                    color: plan.popular || plan.highlight ? "#fff" : "var(--ink)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {plan.price.includes("+") ? "Get Custom Quote" : `Choose ${plan.name}`}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Services Banner */}
        <div
          className="reveal reveal-delay-2"
          style={{
            marginTop: "60px",
            background: "#fcfcfc",
            border: "1px solid var(--line)",
            borderRadius: "20px",
            padding: "40px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h3 style={{ fontSize: "24px", marginBottom: "8px" }}>
              Looking for something else?
            </h3>
            <p style={{ color: "var(--ink)", opacity: 0.8, fontSize: "15px" }}>
              We offer custom quotes for specialized services tailored to your
              exact needs.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {customServices.map((service) => (
              <div
                key={service.title}
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "20px",
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ color: "var(--coral)", flexShrink: 0 }}>
                  {service.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", marginBottom: "4px" }}>
                    {service.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      opacity: 0.7,
                      lineHeight: 1.5,
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "32px",
              fontSize: "14px",
              color: "var(--ink)",
              opacity: 0.8,
            }}
          >
            <p style={{ marginBottom: "4px" }}>
              Custom software, mobile apps, CRM and advanced solutions are
              quoted based on project requirements.
            </p>
            <p>
              Final pricing may vary depending on project scope and features.
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <a
              href="#contact"
              className="button-ghost"
              style={{
                borderColor: "var(--coral)",
                color: "var(--coral)",
                padding: "12px 24px",
                borderRadius: "8px",
              }}
            >
              Request a Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const industries = [
    "Restaurants",
    "Fitness",
    "Real Estate",
    "Education",
    "Healthcare",
    "Hospitality",
    "E-commerce",
    "Startups",
    "Logistics",
    "Finance",
    "Travel & Tourism",
    "Beauty & Salon",
    "Non-Profit",
    "Entertainment",
    "Manufacturing",
    "Automotive",
    "Retail",
    "Technology",
  ];

  return (
    <section
      className="section bg-light"
      id="industries"
      aria-labelledby="industries-title"
    >
      <div className="section-shell">
        <div className="reveal" style={{ textAlign: "center" }}>
          <div className="section-kicker">10 / Industries We Build For</div>
          <h2 id="industries-title">Domains we specialize in.</h2>
          <p className="section-intro" style={{ margin: "0 auto" }}>
            We create tailored digital experiences for a wide variety of growing
            businesses.
          </p>
        </div>

        <div
          className="reveal reveal-delay-1"
          style={{
            marginTop: "40px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          {industries.map((ind, i) => (
            <span
              key={i}
              style={{
                padding: "12px 24px",
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "30px",
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Devanshu Gahlot",
      role: "CA Firm Manager",
      text: "Code Pe Charcha built a brilliant web solution for our CA firm. Their attention to detail and transparency throughout the process was incredible.",
      rating: 5,
    },
    {
      name: "Rahul Prajapat",
      role: "Digital Marketer",
      text: "The website they built for us not only looks stunning but also loads instantly. Our conversion rates have doubled since the launch. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section
      className="section bg-light"
      id="testimonials"
      aria-labelledby="test-title"
    >
      <div className="section-shell">
        <div className="reveal">
          <div className="section-kicker">11 / Client Reviews</div>
          <h2 id="test-title">What people say.</h2>
          <p className="section-intro">
            Don't just take our word for it. Here's what our clients have to say
            about our work.
          </p>
        </div>

        <div className="testimonials-grid reveal reveal-delay-1">
          {reviews.map((review, i) => (
            <div className="testimonial-card" key={i}>
              <div className="stars">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="#E26D4E" color="#E26D4E" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "var(--coral)",
        transformOrigin: "0%",
        zIndex: 100,
        willChange: "transform",
      }}
    />
  );
}

export default function Home() {
  useReveal();
  return (
    <>
      <ScrollProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Code Pe Charcha | Software Development, Mobile Apps & Digital Marketing",
            description:
              "Code Pe Charcha builds modern websites, mobile apps, custom software, CRM systems and digital solutions for businesses in Jaipur and across India.",
            url: "https://codepecharcha.in/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is your typical process for a project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We start with a detailed discovery phase to understand your goals. Then we move into design and prototyping, followed by development, testing, and finally, deployment. You are kept in the loop at every stage.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a new website or app cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost depends entirely on the scope, features, and complexity of the project. A simple business website will cost much less than a full-fledged custom mobile application. We offer a free consultation to give you an accurate estimate.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to complete a project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A standard website typically takes 2-4 weeks. Larger custom software or mobile apps can take anywhere from 1 to 3 months depending on the requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide ongoing support after launch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We offer maintenance and support packages to ensure your digital product stays updated, secure, and running smoothly.",
                },
              },
              {
                "@type": "Question",
                name: "Who owns the source code once the project is finished?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once the final payment is cleared, the intellectual property and source code are entirely handed over to you. We hold no ownership over your product.",
                },
              },
            ],
          }),
        }}
      />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Process />
        <Projects />
        <Industries />
        <Testimonials />
        <WhyUs />
        <Pricing />
        <Technologies />
        <CTA />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
