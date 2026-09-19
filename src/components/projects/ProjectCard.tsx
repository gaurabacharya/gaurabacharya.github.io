import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/types";
import MonoBadge from "@/components/ui/MonoBadge";
import Tag from "@/components/ui/Tag";

interface ProjectCardProps {
  project: Project;
  showRank?: boolean;
}

export default function ProjectCard({ project, showRank = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex h-full w-full flex-col gap-[14px] rounded-card border border-ink/[0.08] bg-cream-soft p-[26px] text-left transition-[transform,box-shadow] hover:-translate-y-[6px] hover:shadow-[0_18px_40px_rgba(0,0,0,.22)]"
    >
      {project.image && (
        <div className="relative -mx-[26px] -mt-[26px] aspect-[16/9] overflow-hidden rounded-t-card">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      )}
      <div className="flex items-center justify-between">
        {!project.image && <MonoBadge text={project.mono} size={showRank ? 46 : 48} />}
        {showRank && (
          <span className="font-display text-[30px] font-black leading-none text-beige">
            {project.rank}
          </span>
        )}
      </div>
      <h3 className="m-0 font-display text-[20px] font-bold leading-[1.18] text-ink line-clamp-2 min-h-[2.36em] [text-wrap:pretty]">
        {project.title}
      </h3>
      <p className="m-0 text-[14px] leading-[1.55] text-ink/75 line-clamp-3 min-h-[4.65em] [text-wrap:pretty]">{project.short}</p>
      <div className="mt-auto flex flex-wrap gap-[7px] pt-[6px]">
        {project.tags.map((t) => (
          <Tag key={t} label={t} variant="filled" />
        ))}
      </div>
      <span className="font-mono text-[12.5px] font-medium text-navy">
        {showRank ? "View project →" : "Learn more →"}
      </span>
    </Link>
  );
}
