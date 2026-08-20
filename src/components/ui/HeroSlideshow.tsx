"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroBackgroundImages } from "@/data/portfolio";

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (heroBackgroundImages.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroBackgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {heroBackgroundImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover scale-105 brightness-90"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[#0a0a0f]/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/75 via-[#0a0a0f]/25 to-[#0a0a0f]/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/40" />
    </div>
  );
}
