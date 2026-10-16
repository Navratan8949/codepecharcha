import { projects } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

/* ───────────────────────── SEO ───────────────────────── */
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};

  const title =
    project.seoTitle ||
    `${project.name} — Case Study | Code Pe Charcha`;
  const description =
    project.seoDescription ||
    project.copy ||
    `Detailed case study of ${project.name} by Code Pe Charcha — see the challenge, features, tech stack, and outcome.`;
  const url = `https://codepecharcha.com/case-studies/${project.id}`;
  const image = project.image
    ? `https://codepecharcha.com${project.image}`
    : "https://codepecharcha.com/og-default.png";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Code Pe Charcha",
      images: [{ url: image, width: 1200, height: 630, alt: project.name }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/* ───────────────────────── Page ───────────────────────── */
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.seoTitle || project.name,
    description: project.seoDescription || project.copy,
    author: { "@type": "Organization", name: "Code Pe Charcha" },
    publisher: {
      "@type": "Organization",
      name: "Code Pe Charcha",
      logo: {
        "@type": "ImageObject",
        url: "https://codepecharcha.com/logo.png",
      },
    },
    image: project.image
      ? `https://codepecharcha.com${project.image}`
      : undefined,
    url: `https://codepecharcha.com/case-studies/${project.id}`,
  };

  return (
    <main className="bg-bone min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb bar */}
      <div className="bg-ink text-bone/60 py-4 border-b border-white/10 mt-20">
        <div className="section-shell">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
            <Link href="/" className="hover:text-coral transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/case-studies" className="hover:text-coral transition-colors">Case Studies</Link>
            <ChevronRight size={14} />
            <span className="text-bone font-medium">{project.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-24 border-b border-line">
        <div className="section-shell">
          <div className="max-w-4xl">
            <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6">
              {project.category} · Case Study
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink leading-[1.1] mb-6">
              {project.h1 || project.name}
            </h1>
            <p className="text-lg md:text-xl text-ink/65 leading-relaxed max-w-3xl">
              {typeof project.seoOverview === "string"
                ? project.seoOverview
                : project.copy}
            </p>
            {project.url && project.url.startsWith("http") && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-coral inline-flex items-center gap-2"
                >
                  Launch Live Demo <ExternalLink size={16} />
                </a>
                <span className="text-xs text-ink/60 font-mono-cpc">
                  Live at: {project.url}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hero image */}
      {project.image && (
        <section className="py-12 md:py-16 border-b border-line">
          <div className="section-shell">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#f1f3f5] shadow-2xl max-w-5xl mx-auto border border-line">
              <Image
                src={project.image}
                alt={`${project.name} — ${project.category} case study preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="section-shell">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 md:gap-20 items-start">

            {/* Article */}
            <article>

              {/* 01 Challenge */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-1 h-8 bg-coral rounded-full shrink-0" />
                  <h2 className="text-2xl md:text-3xl font-bold text-ink">The Challenge</h2>
                </div>
                <p className="text-ink/65 leading-relaxed text-lg pl-5 border-l border-line ml-0.5">
                  {project.challenge ||
                    `Building a scalable and modern solution for ${project.name} that aligns with their unique business requirements and target audience.`}
                </p>
              </div>

              {/* 02 What We Built */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-1 h-8 bg-coral rounded-full shrink-0" />
                  <h2 className="text-2xl md:text-3xl font-bold text-ink">What We Built</h2>
                </div>
                <p className="text-ink/50 text-base mb-10 ml-5">
                  Every feature was crafted to solve a real problem and deliver measurable value to the business.
                </p>

                {project.scope && project.scope.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.scope.map((feature, idx) => {
                      const parts = feature.split(" — ");
                      const title = parts[0];
                      const desc = parts.slice(1).join(" — ");
                      return (
                        <div
                          key={idx}
                          className="relative bg-white rounded-2xl p-6 border border-line overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-coral/30"
                          style={{ borderLeft: "3px solid #e26d4e" }}
                        >
                          <span
                            className="absolute -top-3 -right-1 text-[72px] font-black leading-none select-none pointer-events-none"
                            style={{ color: "rgba(226,109,78,0.06)" }}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div className="relative z-10">
                            <p className="font-bold text-ink text-[15px] leading-snug mb-2">{title}</p>
                            {desc && (
                              <p className="text-ink/55 text-[13px] leading-relaxed">{desc}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {["Custom responsive UI design", "Optimized performance & fast loading", "Secure scalable backend", "Mobile-first experience"].map((f, i) => (
                      <div key={i} className="relative bg-white rounded-2xl p-6 border border-line overflow-hidden" style={{ borderLeft: "3px solid #e26d4e" }}>
                        <span className="absolute -top-3 -right-1 text-[72px] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(226,109,78,0.06)" }}>{String(i + 1).padStart(2, "0")}</span>
                        <p className="relative z-10 font-bold text-ink text-[15px]">{f}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 03 Process */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-1 h-8 bg-coral rounded-full shrink-0" />
                  <h2 className="text-2xl md:text-3xl font-bold text-ink">Our Process</h2>
                </div>
                <p className="text-ink/65 leading-relaxed text-lg pl-5 border-l border-line ml-0.5">
                  We started with a deep discovery phase to understand the core business goals of{" "}
                  {project.name}. Following an agile methodology, we moved from wireframes to
                  full-stack development, rigorous testing, and a seamless deployment — with
                  continuous feedback loops ensuring every decision served the end user.
                </p>
              </div>

              {/* 04 Outcome */}
              <div className="bg-ink rounded-2xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-coral/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-1 h-8 bg-coral rounded-full shrink-0" />
                  <h2 className="text-2xl font-bold text-bone">The Outcome</h2>
                </div>
                <p className="text-bone/70 leading-relaxed text-lg pl-5 relative z-10">
                  {project.name} was delivered as a high-performance, production-ready product —
                  built to scale, easy to maintain, and designed to create real business impact
                  from day one.
                </p>
              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="md:sticky md:top-28 space-y-6">
              <div className="bg-white rounded-2xl border border-line shadow-sm overflow-hidden">
                <div className="bg-ink px-6 py-4">
                  <h3 className="font-bold text-bone text-sm uppercase tracking-wider">Project Details</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <span className="block text-xs text-ink/40 uppercase tracking-widest font-bold mb-1">Industry</span>
                    <span className="font-semibold text-ink text-sm">{project.category}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-ink/40 uppercase tracking-widest font-bold mb-1">Platform</span>
                    <span className="font-semibold text-ink text-sm">
                      {project.type === "website" ? "Web Application" : "Mobile App"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-ink/40 uppercase tracking-widest font-bold mb-2">Tech Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {(
                        project.techStack ||
                        (project.type === "website"
                          ? ["React / Next.js", "Node.js", "Tailwind CSS"]
                          : ["React Native", "Node.js", "REST API"])
                      ).map((tech) => (
                        <span
                          key={tech}
                          className="bg-bone text-ink/70 text-xs font-medium px-2.5 py-1 rounded-full border border-line"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.url && project.url !== "#projects" && (
                    <div className="pt-4 border-t border-line space-y-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider font-mono-cpc px-4 py-3 rounded-xl transition-all shadow-sm hover:shadow"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                          Launch Live System
                        </span>
                        <ExternalLink size={14} />
                      </a>
                      <span className="block text-[11px] text-ink/50 font-mono-cpc truncate">
                        {project.url}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-coral rounded-2xl p-6 text-white">
                <p className="font-bold text-lg mb-2 leading-snug">Need something similar?</p>
                <p className="text-white/80 text-sm mb-5">Let's build your next product together.</p>
                <Link
                  href="/#contact"
                  className="flex items-center gap-2 bg-white text-coral font-bold text-sm px-4 py-2.5 rounded-full hover:bg-ink hover:text-white transition-colors w-fit"
                >
                  Start a Conversation <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-ink text-bone text-center">
        <div className="section-shell max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a similar project in mind?</h2>
          <p className="text-bone/70 mb-10 text-lg">
            Whether you need a web application or a mobile app, our team is ready to build it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#contact" className="button-coral w-full sm:w-auto text-center">
              Contact Us
            </Link>
            <a
              href="https://wa.me/918949936535"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-bone/20 hover:bg-bone/10 transition-colors font-mono-cpc uppercase tracking-wider font-bold text-sm w-full sm:w-auto text-center"
            >
              WhatsApp Us
            </a>
            <Link
              href="/services"
              className="px-6 py-3 rounded-full border border-bone/20 hover:bg-bone/10 transition-colors font-mono-cpc uppercase tracking-wider font-bold text-sm w-full sm:w-auto text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
