import { getJobsByRecency } from "@/data/jobs";
import Button from "@/components/ui/Button";
import JobCardCompact from "@/components/experience/JobCardCompact";

export default function ExperiencePreview() {
  const jobs = getJobsByRecency();

  return (
    <section className="flex min-h-screen snap-start items-center bg-cream px-5 sm:px-10 lg:px-[56px] py-[64px] lg:h-screen lg:py-[48px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col lg:h-full lg:justify-center">
        <div className="mb-[28px] flex flex-wrap items-end justify-between gap-[32px]">
          <div>
            <p className="m-0 mb-[12px] font-mono text-xs uppercase tracking-[0.14em] text-navy">
              Technical experience
            </p>
            <h2 className="m-0 font-display text-[clamp(34px,4.8vw,64px)] font-black leading-[.95] tracking-[-0.02em] text-ink">
              Where I&rsquo;ve been building
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {jobs.map((job, i) => (
            <div key={job.company + job.role} className={i === 0 ? "lg:row-span-2" : undefined}>
              <JobCardCompact job={job} bulletCount={i === 0 ? 2 : 1} featured={i === 0} />
            </div>
          ))}
        </div>
        <div className="mt-[28px]">
          <Button href="/experience" variant="solid">
            View full experience →
          </Button>
        </div>
      </div>
    </section>
  );
}
