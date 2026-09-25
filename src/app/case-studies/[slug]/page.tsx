import { projects } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-bone min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-ink text-bone/60 py-4 border-b border-white/10 mt-20">
        <div className="section-shell">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link href="/" className="hover:text-coral transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/case-studies" className="hover:text-coral transition-colors">
              Case Studies
            </Link>
            <ChevronRight size={14} />
            <span className="text-bone font-medium">{project.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-24 border-b border-line">
        <div className="section-shell">
          <div className="max-w-4xl">
            <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6">
              {project.category} Case Study
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink leading-[1.1] mb-6">
              {project.h1 || project.name}
            </h1>
            <div className="text-lg md:text-xl text-ink/70 leading-relaxed">
              {project.seoOverview || project.copy}
            </div>
          </div>
        </div>
      </section>

      {/* Image if available */}
      {project.image && (
        <section className="py-12 md:py-16">
          <div className="section-shell">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-mud shadow-xl max-w-5xl mx-auto">
              <Image
                src={project.image}
                alt={`${project.name} - ${project.category} Case Study Screenshots`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="py-12 md:py-24">
        <div className="section-shell">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 md:gap-20">
            {/* Main Article Content */}
            <article className="prose prose-lg prose-headings:text-ink prose-p:text-ink/70 prose-li:text-ink/70 max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The Challenge</h2>
              <p className="mb-10 leading-relaxed">
                {project.challenge || `Building a scalable and modern solution for ${project.name} that aligns with their unique business requirements and target audience.`}
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">The Solution & Features</h2>
              <p className="mb-6 leading-relaxed">
                We approached the project with a focus on performance, user experience, and robust architecture. Key features implemented include:
              </p>
              
              {project.scope && project.scope.length > 0 ? (
                <ul className="mb-10 space-y-3 list-none pl-0">
                  {project.scope.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-coral shrink-0 mt-1" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="mb-10 space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-coral shrink-0 mt-1" size={20} />
                    <span>Custom responsive UI design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-coral shrink-0 mt-1" size={20} />
                    <span>Optimized performance & fast loading speeds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-coral shrink-0 mt-1" size={20} />
                    <span>Secure and scalable backend architecture</span>
                  </li>
                </ul>
              )}

              <h2 className="text-2xl md:text-3xl font-bold mb-4">Development Process</h2>
              <p className="mb-10 leading-relaxed">
                Our approach involved a deep discovery phase to understand the core business goals of {project.name}. Following our standard agile methodology, we moved from wireframes and prototyping to full-stack development, rigorous testing, and finally, a seamless deployment to production. Continuous feedback loops ensured the final product met all client expectations.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">Outcome</h2>
              <p className="mb-10 leading-relaxed">
                The final product was successfully delivered and deployed, providing {project.name} with a high-performance digital presence. By utilizing modern web and app technologies, we ensured the platform is scalable, maintainable, and positioned for future growth.
              </p>
            </article>

            {/* Sidebar Details */}
            <aside className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-line shadow-sm">
                <h3 className="font-bold text-ink uppercase tracking-wider text-sm mb-6 border-b border-line pb-4">
                  Project Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <span className="block text-sm text-ink/50 uppercase tracking-wider font-bold mb-1">
                      Client / Type
                    </span>
                    <span className="font-medium text-ink">{project.category}</span>
                  </div>
                  
                  <div>
                    <span className="block text-sm text-ink/50 uppercase tracking-wider font-bold mb-1">
                      Platform
                    </span>
                    <span className="font-medium text-ink capitalize">
                      {project.type === 'website' ? 'Web Development' : 'Mobile App Development'}
                    </span>
                  </div>

                  <div>
                    <span className="block text-sm text-ink/50 uppercase tracking-wider font-bold mb-1">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.type === 'website' ? (
                        <>
                          <span className="bg-bone text-xs font-medium px-2 py-1 rounded text-ink/70">React / Next.js</span>
                          <span className="bg-bone text-xs font-medium px-2 py-1 rounded text-ink/70">Node.js</span>
                          <span className="bg-bone text-xs font-medium px-2 py-1 rounded text-ink/70">Tailwind CSS</span>
                        </>
                      ) : (
                        <>
                          <span className="bg-bone text-xs font-medium px-2 py-1 rounded text-ink/70">React Native</span>
                          <span className="bg-bone text-xs font-medium px-2 py-1 rounded text-ink/70">Node.js</span>
                          <span className="bg-bone text-xs font-medium px-2 py-1 rounded text-ink/70">REST API</span>
                        </>
                      )}
                    </div>
                  </div>

                  {project.url && (
                    <div className="pt-4 mt-6 border-t border-line">
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-coral font-bold flex items-center gap-2 hover:gap-3 transition-all"
                      >
                        Visit Live Project <ArrowRight size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ink text-bone text-center">
        <div className="section-shell max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a similar project in mind?</h2>
          <p className="text-bone/70 mb-10 text-lg">
            Whether you need a cutting-edge web application or a robust mobile app, our team is ready to build it.
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
