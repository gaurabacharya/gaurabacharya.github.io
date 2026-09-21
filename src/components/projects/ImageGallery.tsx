"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const arrowClass =
  "absolute top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-pill bg-cream/90 font-body text-[20px] font-semibold text-navy shadow-[0_4px_14px_rgba(0,0,0,.2)] transition-colors hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy";

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const multiple = count > 1;

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <div
      className="relative mb-[48px] aspect-video overflow-hidden rounded-card border border-ink/[0.12] bg-cream-soft outline-none"
      tabIndex={multiple ? 0 : undefined}
      role="group"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      onKeyDown={(e) => {
        if (!multiple) return;
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <Image
        key={images[index]}
        src={images[index]}
        alt={`${title} screenshot ${index + 1}`}
        fill
        className="object-contain"
        sizes="(min-width: 900px) 788px, 100vw"
        priority={index === 0}
      />
      {multiple && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className={`${arrowClass} left-[14px]`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className={`${arrowClass} right-[14px]`}
          >
            →
          </button>
          <span
            className="absolute bottom-[14px] left-1/2 -translate-x-1/2 rounded-pill bg-navy/80 px-[12px] py-[4px] font-mono text-[11px] tracking-[0.1em] text-cream"
            aria-live="polite"
          >
            {index + 1} / {count}
          </span>
        </>
      )}
    </div>
  );
}
