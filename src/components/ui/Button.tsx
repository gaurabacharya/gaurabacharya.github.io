import Link from "next/link";
import { ReactNode } from "react";

type Variant = "solid" | "outline" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill px-[28px] py-[14px] font-body text-[15px] font-semibold transition-colors whitespace-nowrap";

const variants: Record<Variant, string> = {
  solid: "bg-navy text-cream hover:bg-ink",
  outline: "bg-transparent text-ink border-[1.5px] border-ink hover:bg-ink hover:text-cream",
  "outline-light":
    "bg-transparent text-cream border-[1.5px] border-cream/50 hover:bg-cream hover:text-navy hover:border-cream",
};

interface ButtonProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export default function Button({ href, variant = "solid", children, className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
