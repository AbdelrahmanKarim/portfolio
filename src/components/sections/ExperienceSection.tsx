"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { SectionHeader, SectionShell } from "@/components/ui/SectionHeader";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" className="bg-white/[0.01]">
      <SectionHeader
        number="02"
        label="experience"
        title="Where I've shipped."
        description="Internships and hands-on mobile engineering in production-style environments."
      />

      <div className="space-y-6">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="card-glow rounded-2xl border border-white/8 bg-card p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <CompanyLogo
                  src={item.logo}
                  alt={`${item.company} logo`}
                  fallback={item.company.slice(0, 2).toUpperCase()}
                />
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                      {item.role}
                    </h3>
                    {item.current && (
                      <span className="rounded-full border border-android/30 bg-android/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-android">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-android">{item.company}</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {item.period} · {item.location}
                  </p>
                </div>
              </div>
              <span className="font-[family-name:var(--font-mono)] text-sm text-zinc-600">
                {item.year}
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                  <span className="mt-1 text-android">◆</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
