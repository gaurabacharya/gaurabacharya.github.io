import Link from "next/link";
import { SOCIALS } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="snap-end bg-ink px-[56px] pb-[40px] pt-[64px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-[32px]">
        <div>
          <div className="mb-[14px] font-display text-[clamp(30px,4vw,52px)] font-black leading-none tracking-[-0.02em] text-cream">
            Gaurab Acharya
          </div>
          <p className="m-0 font-mono text-[11px] uppercase tracking-[0.1em] text-beige">
            AI Engineering Lead · Vancouver, BC
          </p>
        </div>
        <div className="flex gap-[10px]">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-pill border border-cream/[0.28] font-mono text-[12.5px] text-cream hover:bg-cream hover:text-ink"
            >
              {s.mono}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-[44px] flex max-w-[1240px] flex-wrap justify-between gap-[24px] border-t border-cream/[0.14] pt-[22px] font-mono text-[10.5px] uppercase tracking-[0.08em] text-cream/50">
        <span>© 2026 — Built with Next.js, deployed on GitHub Pages</span>
        <span className="flex gap-[18px]">
          <Link href="/about" className="text-inherit hover:text-cream">
            About
          </Link>
          <Link href="/projects" className="text-inherit hover:text-cream">
            Projects
          </Link>
          <Link href="/contact" className="text-inherit hover:text-cream">
            Contact
          </Link>
        </span>
      </div>
    </footer>
  );
}
