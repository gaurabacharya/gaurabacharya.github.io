import Image from "next/image";
import { Job } from "@/data/types";
import MonoBadge from "@/components/ui/MonoBadge";
import Tag from "@/components/ui/Tag";

export default function JobCardCompact({
  job,
  bulletCount = 0,
  featured = false,
}: {
  job: Job;
  bulletCount?: number;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col rounded-card border border-ink/[0.08] bg-cream-soft ${
        featured ? "gap-[14px] p-[28px]" : "gap-[10px] p-[20px]"
      }`}
    >
      <div className="flex items-center gap-[14px]">
        {job.logo ? (
          <div
            className="relative flex-none overflow-hidden rounded-[10px]"
            style={{ width: featured ? 54 : 44, height: featured ? 54 : 44 }}
          >
            <Image
              src={job.logo}
              alt={job.company}
              fill
              className="object-cover"
              sizes={featured ? "54px" : "44px"}
            />
          </div>
        ) : (
          <MonoBadge
            text={job.mono}
            size={featured ? 54 : 44}
            bg="#C9BEAE"
            color="#22221D"
            font="display"
          />
        )}
        <div>
          <div className={`font-display font-bold text-ink ${featured ? "text-[18px]" : "text-[15px]"}`}>
            {job.company}
          </div>
          <div className="mt-[3px] font-mono text-[10.5px] uppercase tracking-[0.06em] text-navy">
            {job.dates}
          </div>
        </div>
      </div>
      <div className={`font-body font-semibold text-ink ${featured ? "text-[16px]" : "text-[13.5px]"}`}>
        {job.role}
      </div>
      {bulletCount === 0 && (
        <p
          className={`m-0 text-ink/75 [text-wrap:pretty] ${
            featured ? "line-clamp-3 text-[14px] leading-[1.55]" : "line-clamp-2 text-[13px] leading-[1.5]"
          }`}
        >
          {job.summary}
        </p>
      )}
      {bulletCount > 0 && (
        <div className="flex flex-col gap-[7px]">
          {job.bullets.slice(0, bulletCount).map((b) => (
            <div key={b} className="flex items-start gap-[9px]">
              <span className="mt-[7px] h-[4px] w-[4px] flex-none rounded-full bg-navy" />
              <span
                className={`text-ink/80 [text-wrap:pretty] ${
                  featured ? "text-[13.5px] leading-[1.5]" : "text-[12.5px] leading-[1.45]"
                }`}
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="mt-auto flex flex-wrap gap-[7px] pt-[6px]">
        {job.tags.slice(0, featured ? 6 : 4).map((t) => (
          <Tag key={t} label={t} variant="outline" />
        ))}
      </div>
    </div>
  );
}
