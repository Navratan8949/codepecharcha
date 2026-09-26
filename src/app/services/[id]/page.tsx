"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, ChevronRight, ArrowUpRight } from "lucide-react";
import { services, projects } from "@/data";
import Image from "next/image";

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

const getRelatedProjects = (serviceId: string) => {
  const map: Record<string, string[]> = {
    "website-development": ["efendi-academy", "fitness-forma", "karma-bhumi", "healthcare", "hotel", "school"],
    "mobile-app-development": ["dincharya-attendance-app", "ejuuz-app", "lms-app", "school-app", "wavvy-salon-app"],
    "e-commerce-development": ["ejuuz-app"],
    "custom-software": ["codedev-crm", "omnibit", "healthcare"],
    "crm-development": ["codedev-crm", "omnibit"],
  };
  const ids = map[serviceId] || [];
  return projects.filter(p => ids.includes(p.id));
}

export default function ServiceDetail() {
  const params = useParams();
  const service = services.find((s) => s.id === params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="section section-shell" style={{ minHeight: "60vh", paddingTop: "200px" }}>
        <h2>Service not found</h2>
        <Link href="/#services" className="button-coral mt-8 inline-flex">
          <ArrowLeft size={16} /> Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <main className="bg-bone min-h-screen">
      <section className="pt-32 pb-24 border-b border-line bg-ink text-bone">
        <div className="section-shell">
          <Link href="/#services" className="text-bone/60 hover:text-coral flex items-center gap-2 mb-12 text-sm font-mono-cpc uppercase tracking-wider font-bold w-fit transition-colors">
            <ArrowLeft size={14} /> Back
          </Link>
          
          <div className="grid md:grid-cols-[1fr_450px] gap-12 items-end">
            <div>
              <div className="flex items-center gap-4 mb-6 text-coral">
                 <Icon size={32} />
                 <span className="font-mono-cpc text-sm tracking-widest">SERVICE {service.number}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-4 leading-[0.95]">
                {service.h1 || service.title}
              </h1>
            </div>
            <div className="pb-2">
              <p className="text-lg text-bone/70 leading-relaxed mb-6">
                {service.seoOverview || service.copy}
              </p>
              <Link
                href="/#contact"
                className="button-coral inline-flex"
              >
                Inquire about this <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <div className="section-kicker">01 / Overview</div>
              <h2 className="text-3xl font-bold mb-6 text-ink">Why {service.title}?</h2>
              <p className="text-ink/70 leading-relaxed text-[17px] mb-8">
                In today's digital landscape, having a strong presence isn't just about looking good—it's about 
                functioning flawlessly. Our approach to {service.title.toLowerCase()} focuses on building 
                scalable, secure, and highly optimized solutions tailored to your unique business logic. We don't 
                just write code; we craft reliable systems that your team can depend on.
              </p>
              <p className="text-ink/70 leading-relaxed text-[17px]">
                By combining modern frameworks, clean architecture, and user-centric design, we ensure that 
                the end product is both powerful and accessible.
              </p>
            </div>
            
            <div className="bg-white border border-line p-10 rounded-[2rem] shadow-sm">
               <h2 className="text-2xl font-bold mb-8 text-ink">What's Included</h2>
               
               <ul className="space-y-6 text-[15px]">
                 {[
                   "Initial technical discovery and architecture planning",
                   "Responsive, accessible, and performant design implementation",
                   "Seamless integration with existing APIs and third-party tools",
                   "Comprehensive testing (unit, integration, and E2E)",
                   "Post-launch support and regular security updates",
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="mt-1 bg-coral/10 text-coral p-1 rounded-full">
                        <Check size={14} />
                     </div>
                     <span className="text-ink/80 leading-relaxed">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 bg-bone">
          <div className="section-shell">
            <div className="max-w-3xl mx-auto">
              <div className="section-kicker text-center mb-4">02 / FAQs</div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ink">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl border border-line shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-ink">{faq.question}</h3>
                    <p className="text-ink/70 leading-relaxed text-[16px]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {getRelatedProjects(service.id).length > 0 && (
        <section className="section projects" aria-labelledby="related-projects-title" style={{ paddingBottom: "6rem" }}>
          <div className="section-shell">
            <div className="projects-top mb-12">
              <div>
                <div className="section-kicker">02 / Our Work</div>
                <h2 id="related-projects-title" className="text-4xl font-bold tracking-tight text-ink">Related {service.title} Projects</h2>
              </div>
            </div>

            <div className="project-grid">
              {getRelatedProjects(service.id).slice(0, 3).map((project, index) => (
                <Link href={`/projects/${project.id}`} key={project.name}>
                  <article className="project-card">
                    <ProjectPreview image={project.image} name={project.name} />
                    <div className="project-info">
                      <span className="project-tag">{project.category}</span>
                      <h3>{project.name}</h3>
                      <p>{project.copy}</p>
                      <span className="project-link">
                        View project <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-lime text-ink py-24 relative overflow-hidden">
        <div className="section-shell text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Need something more specific?</h2>
          <p className="max-w-xl mx-auto text-ink/70 mb-8 text-lg">
             We often tailor our services to fit unique requirements. Let's discuss how we can adapt this for your team.
          </p>
          <Link href="/#contact" className="button-ghost border-ink text-ink hover:bg-ink/5 inline-flex">
            Get in Touch <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
