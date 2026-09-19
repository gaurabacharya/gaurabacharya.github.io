"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import StatusPill from "./StatusPill";
import { SOCIALS } from "@/data/socials";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Technical Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href === "/projects") return pathname.startsWith("/projects");
    return pathname === href;
  }

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-[20px] z-[60] flex justify-center px-[20px]">
      <header className="pointer-events-auto flex w-full max-w-[960px] items-center justify-between gap-[24px] rounded-pill bg-ink px-[24px] py-[9px] pr-[10px] shadow-[0_10px_30px_rgba(34,34,29,.16)]">
        <Link href="/" className="font-display text-lg font-black tracking-[-0.01em] text-cream">
          GA.
        </Link>
        <nav className="flex items-center gap-[22px]">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap border-b-[1.5px] border-transparent py-[2px] font-body text-[13.5px] font-medium text-cream hover:border-beige"
              style={{ opacity: isActive(item.href) ? 1 : 0.62 }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <StatusPill />
        <div className="flex items-center gap-[22px]">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-pill border border-cream/[0.28] font-mono text-[11px] text-cream hover:bg-cream hover:text-ink"
            >
              {s.mono}
            </a>
          ))}
        </div>
      </header>
    </div>
  );
}
