"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { projects } from "@/data";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="section section-shell" style={{ minHeight: "60vh", paddingTop: "200px" }}>
        <h2>Project not found</h2>
        <Link href="/#projects" className="button-coral mt-8 inline-flex">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-bone min-h-screen">
      <section className="pt-32 pb-24 border-b border-line">
        <div className="section-shell">
          <Link href="/#projects" className="text-ink/60 hover:text-coral flex items-center gap-2 mb-8 text-sm font-mono-cpc uppercase tracking-wider font-bold w-fit transition-colors">
            <ArrowLeft size={14} /> Back
          </Link>
          
          <div className="grid md:grid-cols-[1fr_400px] gap-12 items-end">
            <div>
              <div className="section-kicker">{project.category}</div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ink mt-4 leading-[0.95]">
                {project.h1 || project.name}
              </h1>
            </div>
            <div className="pb-2">
              <div className="text-lg text-ink/70 leading-relaxed mb-6">
                {project.seoOverview || project.copy}
              </div>
              {project.url !== "#contact" && project.url !== "#projects" && (
                <div className="flex flex-col gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-coral inline-flex items-center gap-2"
                  >
                    Launch Live Project <ExternalLink size={16} />
                  </a>
                  <span className="text-xs text-ink/50 font-mono-cpc">
                    Active URL: {project.url}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          {project.type === "app" && project.images ? (
            <div className="mb-24 flex gap-6 overflow-x-auto pb-8 snap-x" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
              <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />
              {project.images.map((img, i) => (
                <div key={i} className="flex-none w-[85%] md:w-[40%] h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden bg-[#f1f3f5] shadow-2xl snap-center flex items-center justify-center p-8 border border-line">
                  <img src={img} alt={`${project.name} screenshot ${i + 1}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden bg-[#f1f3f5] shadow-2xl mb-16 flex items-center justify-center p-8 md:p-16 border border-line">
              {project.image ? (
                <img src={project.image} alt={project.name} className="w-full h-full object-contain drop-shadow-2xl" />
              ) : (
                <div className="text-ink/20 text-5xl md:text-8xl font-bold opacity-40">{project.name}</div>
              )}
            </div>
          )}

          {/* Active Production Deployment Banner */}
          {project.url && project.url.startsWith("http") && (
            <div className="mb-20 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border border-emerald-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-emerald-950">
                    Live Production Deployment Active
                  </h3>
                  <p className="text-xs md:text-sm text-emerald-800 font-mono-cpc mt-0.5 break-all">
                    {project.url}
                  </p>
                </div>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider font-mono-cpc shadow-sm hover:shadow transition-all inline-flex items-center gap-2 shrink-0"
              >
                Open Live System <ExternalLink size={14} />
              </a>
            </div>
          )}

          {/* Challenge */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-8 bg-coral rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-ink">The Challenge</h2>
            </div>
            <p className="text-ink/65 leading-relaxed text-lg pl-5 border-l border-line ml-0.5">
              {project.challenge || "Building a modern digital product requires deep understanding of the problem space."}
            </p>
          </div>

          {/* Features Grid */}
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-1 h-8 bg-coral rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-ink">What We Built</h2>
            </div>
            <p className="text-ink/50 text-base mb-10 ml-5">
              Every feature was crafted to solve a real problem and deliver measurable value to the business.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(project.scope || ["Custom responsive UI", "Optimized performance", "Secure backend", "Mobile-first experience"]).map((item, idx) => {
                const parts = item.split(" — ");
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
          </div>
        </div>
      </section>

      <section className="bg-coral text-bone py-24 relative overflow-hidden">
        <div className="section-shell text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to build your own?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#contact" className="button-ghost border-bone text-bone hover:bg-bone/10 inline-flex">
              Start a Conversation <ChevronRight size={16} />
            </Link>
            <Link href={`/case-studies/${project.id}`} className="px-6 py-3 rounded-full border-2 border-bone text-bone font-mono-cpc uppercase tracking-wider font-bold text-sm bg-ink hover:bg-bone hover:text-ink transition-colors inline-flex">
              Read Detailed Case Study
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
