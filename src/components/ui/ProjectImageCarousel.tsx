"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectImageCarouselProps = {
  images: string[];
  name: string;
};

export function ProjectImageCarousel({ images, name }: ProjectImageCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

  const go = (direction: -1 | 1) => {
    setIndex((current) => (current + direction + images.length) % images.length);
  };

  return (
    <div className="group/carousel relative h-[min(520px,62vh)] shrink-0 overflow-hidden border-b border-white/5 bg-[#0d0d14]">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${name}-${src}`}
          src={src}
          alt={`${name} screenshot ${i + 1}`}
          className={`absolute inset-0 mx-auto h-full w-full max-w-[280px] object-contain transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-[#0a0a0f]/70 p-1.5 text-white opacity-0 backdrop-blur transition group-hover/carousel:opacity-100"
            aria-label={`Previous ${name} screenshot`}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-[#0a0a0f]/70 p-1.5 text-white opacity-0 backdrop-blur transition group-hover/carousel:opacity-100"
            aria-label={`Next ${name} screenshot`}
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-android" : "w-1.5 bg-white/30"
                }`}
                aria-label={`Show screenshot ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
