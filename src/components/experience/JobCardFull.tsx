import Image from "next/image";
import { Job } from "@/data/types";
import MonoBadge from "@/components/ui/MonoBadge";
import Tag from "@/components/ui/Tag";

export default function JobCardFull({ job }: { job: Job }) {
  return (
    <div className="grid grid-cols-1 gap-[40px] border-t border-ink/[0.14] py-[40px] sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)]">
      <div>
        {job.logo ? (
          <div className="relative h-[60px] w-[60px] overflow-hidden rounded-[12px]">
            <Image src={job.logo} alt={job.company} fill className="object-cover" sizes="60px" />
          </div>
        ) : (
          <MonoBadge text={job.mono} size={60} bg="#C9BEAE" color="#22221D" font="display" />
        )}
        <div className="mb-0 mt-[14px] font-display text-[18px] font-bold text-ink">{job.company}</div>
        <div className="mt-[6px] font-mono text-[11px] uppercase tracking-[0.06em] text-navy">
          {job.dates}
        </div>
      </div>
      <div>
        <h2 className="m-0 mb-[14px] font-display text-[26px] font-bold leading-[1.15] text-ink">
          {job.role}
        </h2>
        <p className="m-0 mb-[20px] text-[17px] leading-[1.65] text-ink/85 [text-wrap:pretty]">
          {job.summary}
        </p>
        <div className="mb-[20px] flex flex-col gap-[10px]">
          {job.bullets.map((b) => (
            <div key={b} className="flex items-start gap-[12px]">
              <span className="mt-[8px] h-[6px] w-[6px] flex-none rounded-full bg-navy" />
              <span className="text-[16px] leading-[1.6] text-ink/80 [text-wrap:pretty]">{b}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-[7px]">
          {job.tags.map((t) => (
            <Tag key={t} label={t} variant="filled" />
          ))}
        </div>
      </div>
    </div>
  );
}
