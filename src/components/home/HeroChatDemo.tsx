"use client";

import { SCRIPTS } from "@/data/chatScripts";
import { useTypewriter } from "@/lib/useTypewriter";

export default function HeroChatDemo() {
  const { qText, aText, phase, showCite, cites } = useTypewriter(SCRIPTS);

  return (
    <div className="flex min-h-[300px] flex-col rounded-card border border-ink/10 bg-cream-soft p-[18px] sm:min-h-[340px] sm:p-[24px] shadow-[0_24px_60px_rgba(34,34,29,.1)]">
      <div className="mb-[20px] flex items-center gap-[10px] border-b border-ink/[0.09] pb-[16px]">
        <span className="h-[8px] w-[8px] rounded-full bg-navy" />
        <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink/60">
          ask-gaurab
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-[14px]">
        <div className="max-w-[86%] self-end rounded-[14px_14px_4px_14px] bg-navy px-[16px] py-[12px] text-[14.5px] leading-[1.5] text-cream">
          {qText}
          <span
            className="ml-[2px] inline-block h-[1em] w-[1.5px] animate-caret-blink bg-cream align-[-2px]"
            style={{ opacity: phase === "q" ? 1 : 0 }}
          />
        </div>
        <div className="min-h-[24px] max-w-[92%] self-start rounded-[14px_14px_14px_4px] border border-ink/[0.08] bg-cream px-[16px] py-[12px] text-[14.5px] leading-[1.55] text-ink">
          {phase === "think" && (
            <span className="inline-flex items-center gap-[5px] py-[2px]">
              <span className="h-[6px] w-[6px] animate-dot-pulse rounded-full bg-navy [animation-duration:1.4s]" />
              <span
                className="h-[6px] w-[6px] animate-dot-pulse rounded-full bg-navy [animation-duration:1.4s]"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="h-[6px] w-[6px] animate-dot-pulse rounded-full bg-navy [animation-duration:1.4s]"
                style={{ animationDelay: "0.4s" }}
              />
            </span>
          )}
          {aText}
        </div>
        {showCite && (
          <div className="flex flex-wrap gap-[7px] pl-[2px]">
            {cites.map((c) => (
              <span
                key={c}
                className="rounded-pill bg-beige px-[9px] py-[4px] font-mono text-[10px] uppercase tracking-[0.05em] text-ink"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="mt-[20px] flex items-center gap-[10px] rounded-pill border border-ink/[0.12] bg-cream py-[10px] pl-[18px] pr-[10px]">
        <span className="flex-1 text-[13.5px] text-ink/40">Ask something about my work…</span>
        <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-navy text-[14px] text-cream">
          ↑
        </span>
      </div>
    </div>
  );
}
