import { Social } from "@/data/types";
import MonoBadge from "./MonoBadge";

export default function SocialCard({ social }: { social: Social }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-card border border-ink/10 bg-cream-soft p-[28px] transition-transform hover:-translate-y-[5px] hover:bg-navy"
    >
      <MonoBadge text={social.mono} size={44} shape="circle" bg="#C9BEAE" color="#22221D" font="mono" />
      <span className="font-display text-xl font-bold text-ink group-hover:text-cream">
        {social.label}
      </span>
      <span className="break-all font-mono text-xs text-navy group-hover:text-cream/80">
        {social.display}
      </span>
    </a>
  );
}
