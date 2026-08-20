"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { achievements } from "@/data/portfolio";
import { SectionHeader, SectionShell } from "@/components/ui/SectionHeader";

export function AchievementsSection() {
  return (
    <SectionShell id="achievements" className="bg-white/[0.01]">
      <SectionHeader
        number="04"
        label="achievements"
        title="Track record."
        description="Competitions, hackathons, and milestones that shaped how I approach engineering."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group card-glow overflow-hidden rounded-2xl border border-white/8 bg-card"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-zinc-300">
                  {item.year}
                </span>
                <span className="rounded-full border border-android/30 bg-[#0a0a0f]/80 px-3 py-1 text-sm font-semibold text-android backdrop-blur">
                  {item.badge}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{item.subtitle}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
