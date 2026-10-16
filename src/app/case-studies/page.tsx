import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Briefcase, ExternalLink } from "lucide-react";
import { projects } from "@/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Case Studies & Success Stories | Code Pe Charcha",
  description:
    "Explore real-world case studies and success stories of modern websites, mobile apps, and custom software developed by Code Pe Charcha in Jaipur and across India.",
  alternates: {
    canonical: "https://codepecharcha.in/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-bone min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-line">
        <div className="section-shell">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-coral font-mono-cpc uppercase tracking-wider font-bold mb-6 text-sm">
              <Briefcase size={16} /> Portfolio & Case Studies
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink leading-[1.1] mb-6">
              Real-world challenges. <br />
              <span className="text-coral">Real-world solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl">
              Discover how we help businesses in Jaipur and across India transform their ideas into scalable digital products. From e-commerce platforms to custom CRM systems, explore our approach to solving complex problems through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32">
        <div className="section-shell">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-line shadow-sm hover:shadow-md transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] bg-mud overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} - ${project.category} Case Study`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-ink/20 font-mono-cpc">
                      No Image
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-ink z-10 pointer-events-none">
                    {project.category}
                  </div>
                  {project.url && project.url.startsWith("http") && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md z-10 transition-colors font-mono-cpc"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                      Live Demo <ExternalLink size={11} />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <Link href={`/case-studies/${project.id}`}>
                    <h2 className="text-2xl font-bold text-ink mb-3 group-hover:text-coral transition-colors">
                      {project.name}
                    </h2>
                  </Link>
                  <p className="text-ink/70 line-clamp-3 mb-6 flex-1 text-sm md:text-base leading-relaxed">
                    {project.copy}
                  </p>
                  
                  {/* Scope/Services Tags */}
                  {project.scope && project.scope.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.scope.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-bone px-2 py-1 rounded text-xs text-ink/60 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.scope.length > 3 && (
                        <span className="bg-bone px-2 py-1 rounded text-xs text-ink/60 font-medium">
                          +{project.scope.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-line">
                    <Link
                      href={`/case-studies/${project.id}`}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink group-hover:text-coral transition-colors font-mono-cpc"
                    >
                      Read Case Study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    {project.url && project.url.startsWith("http") && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                      >
                        Launch Demo <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ink text-bone text-center">
        <div className="section-shell max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a similar project in mind?</h2>
          <p className="text-bone/70 mb-10 text-lg">
            Let's discuss how we can build a scalable, custom solution for your business.
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
          </div>
        </div>
      </section>
    </main>
  );
}
