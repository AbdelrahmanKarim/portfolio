"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

export function ProfileAvatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-android/30 bg-[#12121a]">
      {!imageError && (
        <Image
          src={siteConfig.profileImage}
          alt={siteConfig.name}
          fill
          className="object-cover"
          priority
          onError={() => setImageError(true)}
        />
      )}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-display)] text-5xl font-bold text-gradient">
          AK
        </div>
      )}
    </div>
  );
}
