import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import Button from "@/components/ui/Button";
import ImageGallery from "@/components/projects/ImageGallery";
import Tag from "@/components/ui/Tag";
import MonoBadge from "@/components/ui/MonoBadge";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  return { title: project ? `${project.title} — Gaurab Acharya` : "Project — Gaurab Acharya" };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <div className="animate-rise">
      <div className="bg-navy px-[56px] pb-[72px] pt-[150px]">
        <div className="mx-auto max-w-[900px]">
          <Link
            href="/projects"
            className="mb-[28px] inline-block font-mono text-xs uppercase tracking-[0.1em] text-beige hover:text-cream"
          >
            ← All projects
          </Link>
          <div className="mb-[24px] flex items-center gap-[16px]">
            <MonoBadge text={project.mono} size={56} bg="#EEE8DF" color="#2C365A" />
            <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-beige">
              {project.meta}
            </span>
          </div>
          <h1 className="m-0 mb-[24px] font-display text-[clamp(36px,5.4vw,72px)] font-black leading-[.96] tracking-[-0.02em] text-cream [text-wrap:pretty]">
            {project.title}
          </h1>
          <p className="m-0 mb-[32px] max-w-[640px] text-[19px] leading-[1.6] text-cream/85 [text-wrap:pretty]">
            {project.short}
          </p>
          <div className="flex flex-wrap gap-[10px]">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-pill bg-cream px-[22px] py-[11px] font-body text-sm font-semibold text-navy hover:bg-beige hover:text-ink"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[900px] px-[56px] pb-[100px] pt-[72px]">
        {project.screenshots?.length ? (
          <ImageGallery images={project.screenshots} title={project.title} />
        ) : (
          <div
            className="mb-[48px] flex aspect-video items-center justify-center rounded-card border border-ink/[0.12] bg-cream-soft text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink/45"
            aria-hidden
          >
            Project screenshot
          </div>
        )}
        <div className="mb-[48px] flex flex-wrap gap-[8px]">
          {project.stack.map((s) => (
            <Tag key={s} label={s} variant="filled" />
          ))}
        </div>
        {project.sections.map((sec) => (
          <div
            key={sec.h}
            className="grid grid-cols-1 gap-[32px] border-t border-ink/[0.12] py-[32px] sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)]"
          >
            <h2 className="m-0 font-display text-[19px] font-bold leading-[1.25] text-navy [text-wrap:pretty]">
              {sec.h}
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.72] text-ink/85 [text-wrap:pretty]">{sec.p}</p>
          </div>
        ))}
        <div className="mt-[48px] flex flex-wrap gap-[14px]">
          <Button href="/projects" variant="solid">
            ← All projects
          </Button>
          <Button href="/contact" variant="outline">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}
