"use client";

import { motion } from "framer-motion";
import { languages, skillGroups } from "@/data/portfolio";
import { SectionHeader, SectionShell } from "@/components/ui/SectionHeader";

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <SectionHeader
        number="05"
        label="skills"
        title="The toolkit."
        description="Tools and technologies I use to build production Android systems."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="card-glow rounded-2xl border border-white/8 bg-card p-6"
          >
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tag-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 card-glow rounded-2xl border border-white/8 bg-card p-6"
      >
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">Languages</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
            >
              <span className="font-medium">{lang.name}</span>
              <span className="text-sm text-zinc-500">{lang.level}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}
