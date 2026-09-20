"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Check, ChevronRight } from "lucide-react";
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
                {project.name}
              </h1>
            </div>
            <div className="pb-2">
              <p className="text-lg text-ink/70 leading-relaxed mb-6">
                {project.copy}
              </p>
              {project.url !== "#contact" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="button-coral inline-flex"
                >
                  Visit Live Project <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          {project.type === "app" && project.images ? (
            <div className="mb-24 flex gap-6 overflow-x-auto pb-8 snap-x" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
              <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
              {project.images.map((img, i) => (
                <div key={i} className="flex-none w-[85%] md:w-[40%] h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden bg-[#f1f3f5] shadow-2xl snap-center flex items-center justify-center p-8 border border-line">
                  <img src={img} alt={`${project.name} screenshot ${i+1}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden bg-[#f1f3f5] shadow-2xl mb-24 flex items-center justify-center p-8 md:p-16 border border-line">
               {project.image ? (
                 <img src={project.image} alt={project.name} className="w-full h-full object-contain drop-shadow-2xl" />
               ) : (
                 <div className="text-ink/20 text-5xl md:text-8xl font-bold opacity-40">{project.name}</div>
               )}
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-ink">The Challenge</h3>
              <p className="text-ink/70 leading-relaxed text-[17px] mb-8">
                {project.challenge || "Building a modern digital product requires deep understanding of the problem space."}
              </p>
            </div>
            
            <div className="bg-ink text-bone p-10 rounded-[2rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-coral/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
               <h3 className="text-2xl font-bold mb-8 relative z-10">Project Scope</h3>
               
               <ul className="space-y-4 relative z-10 font-mono-cpc text-sm tracking-wide">
                 {(project.scope || ["UI/UX Design", "Frontend Development", "Backend Architecture", "Deployment Strategy"]).map((item) => (
                   <li key={item} className="flex items-center gap-3">
                     <Check size={16} className="text-lime" />
                     <span className="text-bone/80 uppercase">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-coral text-bone py-24 relative overflow-hidden">
        <div className="section-shell text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to build your own?</h2>
          <Link href="/#contact" className="button-ghost border-bone text-bone hover:bg-bone/10 inline-flex">
            Start a Conversation <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
