"use client";

import { PROJECTS } from "@/data/projects";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/projects/ProjectCard";
import { useParallax } from "@/lib/useParallax";
import { useScrollCarousel } from "@/lib/useScrollCarousel";

export default function WorkSection() {
  const parallaxRef = useParallax(-0.09);
  const { ref, prev, next } = useScrollCarousel();

  return (
    <section className="relative flex min-h-screen snap-start items-center overflow-hidden bg-navy px-5 sm:px-10 lg:px-[56px] py-[72px] lg:py-[120px]">
      <div
        ref={parallaxRef}
        className="pointer-events-none absolute right-[-2%] top-[8%] select-none font-display text-[26vw] font-black leading-[.8] tracking-[-0.04em] text-cream/[0.045]"
      >
        WORK
      </div>
      <div className="relative mx-auto w-full max-w-[1240px]">
        <div className="mb-[48px] flex flex-wrap items-end justify-between gap-[32px]">
          <div>
            <p className="m-0 mb-[18px] font-mono text-xs uppercase tracking-[0.14em] text-beige">
              Personal Projects
            </p>
            <h2 className="m-0 font-display text-[clamp(38px,5.4vw,76px)] font-black leading-[.95] tracking-[-0.02em] text-cream">
              My Projects in Detail
            </h2>
          </div>
          <div className="flex w-full items-center gap-[16px] sm:w-auto">
            <div className="hidden items-center gap-[10px] md:flex">
              <button
                onClick={prev}
                aria-label="Previous"
                className="h-[46px] w-[46px] rounded-pill border-[1.5px] border-cream/30 text-[16px] text-cream hover:border-cream hover:bg-cream hover:text-navy"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="h-[46px] w-[46px] rounded-pill border-[1.5px] border-cream/30 text-[16px] text-cream hover:border-cream hover:bg-cream hover:text-navy"
              >
                →
              </button>
            </div>
            <Button href="/projects" variant="outline-light" className="w-full sm:w-auto">
              View all projects →
            </Button>
          </div>
        </div>
        <div
          ref={ref}
          className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-[16px] overflow-x-auto scroll-smooth px-5 pb-[10px] [scrollbar-width:none] sm:mx-0 sm:scroll-px-0 sm:gap-[24px] sm:px-0 sm:[scrollbar-width:auto] [&::-webkit-scrollbar]:hidden sm:[&::-webkit-scrollbar]:block"
        >
          {PROJECTS.map((p) => (
            <div key={p.id} className="flex w-[80vw] flex-none snap-start sm:w-[min(360px,82vw)]">
              <ProjectCard project={p} showRank />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
