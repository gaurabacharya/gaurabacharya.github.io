import { getJobsByRecency } from "@/data/jobs";
import JobCardFull from "@/components/experience/JobCardFull";

export const metadata = {
  title: "Experience — Gaurab Acharya",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[1040px] animate-rise px-5 sm:px-10 lg:px-[56px] pb-[100px] pt-[110px] lg:pt-[150px]">
      <p className="m-0 mb-[18px] font-mono text-xs uppercase tracking-[0.14em] text-navy">
        Technical experience
      </p>
      <h1 className="m-0 mb-[56px] font-display text-[clamp(44px,6.4vw,96px)] font-black leading-[.92] tracking-[-0.025em] text-ink">
        Experience
      </h1>
      {getJobsByRecency().map((job) => (
        <JobCardFull key={job.company + job.role} job={job} />
      ))}
    </div>
  );
}
