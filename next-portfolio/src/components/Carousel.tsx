"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type CarouselItem = {
  src: string;
  alt: string;
};

export default function Carousel({ items }: { items: CarouselItem[] }) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  if (safeItems.length === 0) return null;

  const current = safeItems[index] ?? safeItems[0];

  const goPrev = () =>
    setIndex((i) => (i - 1 + safeItems.length) % safeItems.length);
  const goNext = () => setIndex((i) => (i + 1) % safeItems.length);

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setIsZoomed(false);
            setIsOpen(true);
          }}
          className="relative block aspect-video w-full overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5"
          aria-label="Open image"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1000px"
            priority
          />
        </button>

        {safeItems.length > 1 ? (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-foreground/80 px-3 py-2 text-sm font-medium text-background hover:bg-foreground"
              aria-label="Previous image"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-foreground/80 px-3 py-2 text-sm font-medium text-background hover:bg-foreground"
              aria-label="Next image"
            >
              Next
            </button>
          </>
        ) : null}
      </div>

      {safeItems.length > 1 ? (
        <div className="mt-3 flex items-center justify-center gap-3">
          <div
            className="flex items-center gap-2"
            aria-label="Carousel position"
          >
            {safeItems.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={
                  "h-2.5 w-2.5 rounded-full border border-foreground/20 " +
                  (i === index ? "bg-foreground" : "bg-transparent")
                }
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      ) : null}

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 bg-[color:var(--overlay)] p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="mx-auto flex h-full max-w-6xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/90">{current.alt}</div>
              <button
                type="button"
                className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                Close
              </button>
            </div>

            <div className="mt-4 flex-1 overflow-hidden rounded-xl bg-white/5">
              <button
                type="button"
                className="relative h-full w-full"
                onClick={() => setIsZoomed((z) => !z)}
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              >
                <div
                  className={
                    "relative h-full w-full transition-transform duration-200 " +
                    (isZoomed ? "scale-125" : "scale-100")
                  }
                >
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </button>

              {safeItems.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setIsZoomed(false);
                      goPrev();
                    }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-4 py-3 text-sm font-medium text-white hover:bg-white/25"
                    aria-label="Previous image"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsZoomed(false);
                      goNext();
                    }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/15 px-4 py-3 text-sm font-medium text-white hover:bg-white/25"
                    aria-label="Next image"
                  >
                    Next
                  </button>
                </>
              ) : null}
            </div>

            {safeItems.length > 1 ? (
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="text-sm text-white/80">
                  {index + 1} / {safeItems.length}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
