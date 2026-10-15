"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Search, Sparkles } from "lucide-react";
import { projects } from "@/data";

export default function ProjectsPageClient() {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Type filter
      if (filter === "Websites" && p.type !== "website") return false;
      if (filter === "Software" && p.type !== "software") return false;
      if (filter === "Mobile Apps" && p.type !== "app") return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        const matchesCopy = p.copy.toLowerCase().includes(q);
        const matchesTech = p.techStack?.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesCat && !matchesCopy && !matchesTech) {
          return false;
        }
      }

      return true;
    });
  }, [filter, searchQuery]);

  // Schema.org CollectionPage + ItemList for Sitelinks eligibility
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Software & Web Projects Portfolio | Code Pe Charcha",
    url: "https://codepecharcha.in/projects",
    description:
      "Explore custom ERP software, mobile apps, and websites built by Code Pe Charcha.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://codepecharcha.in/projects/${project.id}`,
        name: project.name,
        description: project.copy,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://codepecharcha.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://codepecharcha.in/projects",
      },
    ],
  };

  return (
    <main className="bg-bone min-h-screen">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-ink text-bone/60 py-4 border-b border-white/10 mt-20">
        <div className="section-shell">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
            <Link href="/" className="hover:text-coral transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-bone font-medium">Projects &amp; Portfolio</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-line bg-gradient-to-b from-bone to-bone/40">
        <div className="section-shell">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full font-bold uppercase tracking-wider text-xs mb-6 font-mono-cpc">
              <Sparkles size={14} /> Selected Demos &amp; Deployments
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-6">
              Our Web, App &amp; Software Portfolio
            </h1>
            <p className="text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl">
              From enterprise-grade ERPs and clinic management systems to high-speed e-commerce platforms and native mobile apps — browse our engineering track record.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {["All", "Websites", "Software", "Mobile Apps"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`filter-btn ${filter === f ? "active" : ""}`}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search projects by name, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-line rounded-full pl-11 pr-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-coral transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="section-shell">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-line p-8">
              <h3 className="text-2xl font-bold text-ink mb-2">No projects found</h3>
              <p className="text-ink/60 mb-6">Try clearing your search query or filter</p>
              <button
                onClick={() => {
                  setFilter("All");
                  setSearchQuery("");
                }}
                className="button-coral inline-flex"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  href={`/projects/${project.id}`}
                  key={project.id}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image Preview */}
                  <div className="relative aspect-[16/10] bg-[#f1f3f5] overflow-hidden flex items-center justify-center p-3 border-b border-line">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} - ${project.category}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="text-ink/20 font-bold text-2xl font-mono-cpc">
                        {project.name}
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-ink border border-line shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="flex flex-col flex-1 p-6">
                    <h2 className="text-xl font-bold text-ink mb-2 group-hover:text-coral transition-colors leading-snug">
                      {project.name}
                    </h2>
                    <p className="text-ink/65 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                      {project.copy}
                    </p>

                    {/* Tech Stack Pills */}
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="bg-bone px-2.5 py-0.5 rounded-md text-[11px] font-mono-cpc text-ink/70 border border-line/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-[11px] font-mono-cpc text-ink/40 self-center">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* CTA Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-line text-xs font-bold uppercase tracking-wider font-mono-cpc text-coral">
                      <span>View Project Details</span>
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="bg-coral text-bone py-20 relative overflow-hidden">
        <div className="section-shell text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Have a custom software or web project in mind?
          </h2>
          <p className="text-bone/85 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Tell us about your requirements. We engineer high-performance digital products that scale with your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="button-ghost border-bone text-bone hover:bg-bone/10 inline-flex"
            >
              Start Free Consultation <ChevronRight size={16} />
            </Link>
            <Link
              href="/case-studies"
              className="px-6 py-3 rounded-full border-2 border-bone text-bone font-mono-cpc uppercase tracking-wider font-bold text-sm bg-ink hover:bg-bone hover:text-ink transition-colors inline-flex"
            >
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
