import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects — Gaurab Acharya",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1240px] animate-rise px-[56px] pb-[100px] pt-[150px]">
      <p className="m-0 mb-[18px] font-mono text-xs uppercase tracking-[0.14em] text-navy">
        {PROJECTS.length} projects · 2020 — 2026
      </p>
      <h1 className="m-0 mb-[24px] font-display text-[clamp(46px,7vw,104px)] font-black leading-[.92] tracking-[-0.025em] text-ink">
        Projects
      </h1>
      <p className="m-0 mb-[56px] max-w-[560px] text-[18px] leading-[1.6] text-ink/80 [text-wrap:pretty]">
        AI and retrieval systems, mobile and AR apps, networking protocols, and biomedical engineering
        design work. Click any card for the full write-up.
      </p>
      <div className="grid gap-[28px]" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
