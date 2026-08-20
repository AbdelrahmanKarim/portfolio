"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SectionHeader, SectionShell } from "@/components/ui/SectionHeader";

export function ContactSection() {
  return (
    <SectionShell id="contact" className="bg-white/[0.01]">
      <SectionHeader
        number="06"
        label="contact"
        title="Let's talk."
        description="Reach me by email or phone. I'm open to mobile engineering roles, collaborations, and interesting app projects."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glow rounded-2xl border border-android/20 bg-gradient-to-br from-android/8 to-transparent p-8"
          >
            <p className="text-xs uppercase tracking-wider text-android">Primary</p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold">
              Send me an email
            </h3>
            <p className="mt-3 text-zinc-400">
              Hiring conversations, project ideas, or a quick technical chat — I&apos;d love to hear
              from you.
            </p>
            <a
              href={siteConfig.links.email}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-android px-6 py-3 text-sm font-semibold text-[#0a0a0f] transition hover:bg-[#34c975]"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
          </motion.div>

          <motion.a
            href={siteConfig.links.phone}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="card-glow flex items-center gap-4 rounded-2xl border border-white/8 bg-card p-6 transition hover:bg-card-hover"
          >
            <div className="rounded-full border border-white/10 p-3 text-android">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">Phone</p>
              <p className="mt-1 font-medium text-white">{siteConfig.phone}</p>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-wider text-zinc-500">Elsewhere</p>
          {[
            {
              label: "LinkedIn",
              href: siteConfig.links.linkedin,
              icon: Linkedin,
            },
            {
              label: "GitHub",
              href: siteConfig.links.github,
              icon: Github,
            },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow flex items-center justify-between rounded-2xl border border-white/8 bg-card px-5 py-4 transition hover:bg-card-hover"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-android" />
                <span className="font-medium">{label}</span>
              </div>
              <span className="text-xs text-zinc-500">Open {label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
