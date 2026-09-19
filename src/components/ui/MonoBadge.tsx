interface MonoBadgeProps {
  text: string;
  size?: number;
  shape?: "square" | "circle";
  bg?: string;
  color?: string;
  font?: "mono" | "display";
}

export default function MonoBadge({
  text,
  size = 48,
  shape = "square",
  bg = "#2C365A",
  color = "#EEE8DF",
  font = "mono",
}: MonoBadgeProps) {
  return (
    <span
      className={`flex flex-none items-center justify-center ${
        font === "mono" ? "font-mono" : "font-display font-black"
      }`}
      style={{
        width: size,
        height: size,
        borderRadius: shape === "circle" ? "999px" : "12px",
        background: bg,
        color,
        fontSize: font === "mono" ? Math.round(size * 0.29) : Math.round(size * 0.32),
        letterSpacing: font === "mono" ? "0.02em" : "-0.01em",
      }}
    >
      {text}
    </span>
  );
}
