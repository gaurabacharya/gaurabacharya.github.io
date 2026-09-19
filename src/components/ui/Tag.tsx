interface TagProps {
  label: string;
  variant?: "filled" | "outline";
}

export default function Tag({ label, variant = "filled" }: TagProps) {
  return (
    <span
      className={`rounded-pill px-[9px] py-[4px] font-mono text-[10px] uppercase tracking-[0.06em] ${
        variant === "filled"
          ? "bg-beige text-ink"
          : "border border-ink/20 text-ink"
      }`}
    >
      {label}
    </span>
  );
}
