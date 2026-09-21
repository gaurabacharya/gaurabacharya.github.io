"use client";

import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href === "/projects") return pathname.startsWith("/projects");
    return pathname === href;
  }

  return (
    <>
      {open && <div className="fixed inset-0 z-[59] lg:hidden" onClick={() => setOpen(false)} aria-hidden />}
      <div className="pointer-events-none fixed left-0 right-0 top-[12px] z-[60] flex flex-col items-center px-[12px] lg:top-[20px] lg:px-[20px]">
        <header className="pointer-events-auto flex w-full max-w-[960px] items-center justify-between gap-[24px] rounded-pill bg-ink py-[7px] pl-[20px] pr-[7px] shadow-[0_10px_30px_rgba(34,34,29,.16)] lg:px-[24px] lg:py-[9px] lg:pr-[10px]">
          <Link href="/" className="font-display text-lg font-black tracking-[-0.01em] text-cream hover:text-cream">
            GA.
          </Link>
          <nav className="hidden items-center gap-[22px] lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap border-b-[1.5px] border-transparent py-[2px] font-body text-[13.5px] font-medium text-cream hover:border-beige hover:text-cream"
                style={{ opacity: isActive(item.href) ? 1 : 0.62 }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <StatusPill />
          </div>
          <div className="hidden items-center gap-[22px] lg:flex">
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
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-pill bg-cream/[0.09] text-[18px] leading-none text-cream lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </header>
        {open && (
          <div
            id="mobile-menu"
            className="pointer-events-auto mt-[8px] w-full max-w-[960px] animate-rise rounded-card bg-ink p-[20px] shadow-[0_10px_30px_rgba(34,34,29,.16)] lg:hidden"
          >
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center border-b border-cream/[0.1] font-body text-[17px] font-medium text-cream hover:text-cream"
                  style={{ opacity: isActive(item.href) ? 1 : 0.62 }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-[20px] flex flex-wrap items-center justify-between gap-[16px]">
              <StatusPill />
              <div className="flex items-center gap-[10px]">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="flex h-[44px] w-[44px] items-center justify-center rounded-pill border border-cream/[0.28] font-mono text-[12px] text-cream hover:bg-cream hover:text-ink"
                  >
                    {s.mono}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
