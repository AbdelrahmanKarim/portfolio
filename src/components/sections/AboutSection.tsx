"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "@/data/portfolio";
import { SectionHeader, SectionShell } from "@/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <SectionHeader
        number="01"
        label="about"
        title={aboutContent.headline}
        description="A short version of how I got here and how I work."
      />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-zinc-400 leading-relaxed"
        >
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="flex flex-wrap gap-2 pt-2">
            {aboutContent.focusAreas.map((area) => (
              <span key={area} className="tag-chip">
                {area}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="mb-4 font-[family-name:var(--font-display)] text-lg font-semibold">
            Education
          </h3>
          <div className="space-y-4">
            {aboutContent.education.map((item) => (
              <div
                key={item.school}
                className="card-glow rounded-2xl border border-white/8 bg-card p-5"
              >
                <div className="flex items-start gap-3">
                  {item.logo && (
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white p-1">
                      <Image
                        src={item.logo}
                        alt={`${item.school} logo`}
                        fill
                        className="object-contain p-0.5"
                        sizes="44px"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-white">{item.degree}</p>
                    <p className="mt-1 text-sm text-android">{item.school}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-zinc-500">{item.period}</p>
                {item.note && (
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
