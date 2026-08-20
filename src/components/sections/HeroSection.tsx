"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { heroMarquee, siteConfig } from "@/data/portfolio";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <HeroSlideshow />
      <div className="aurora-blob -left-32 top-20 h-72 w-72 bg-android/15" />
      <div className="aurora-blob -right-20 top-40 h-96 w-96 bg-kotlin/10" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-android/25 bg-[#0a0a0f]/60 px-3 py-1 text-xs text-android backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-android animate-pulse" />
            {siteConfig.status}
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{siteConfig.name.split(" ")[0]}</span>
            <br />
            {siteConfig.name.split(" ").slice(1).join(" ")}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-300">
            I ship mobile apps that teams and users actually rely on.
          </p>
          <p className="mt-2 max-w-xl text-zinc-400">
            Mobile Developer building for Android, iOS, and cross-platform with Kotlin, Swift,
            Flutter, and Clean Architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-android px-6 py-3 text-sm font-semibold text-[#0a0a0f] transition hover:bg-[#34c975]"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-[#0a0a0f]/40 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-android/40 hover:bg-white/5"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-[#0a0a0f]/40 p-2.5 text-zinc-300 backdrop-blur transition hover:border-android/30 hover:text-android"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-[#0a0a0f]/40 p-2.5 text-zinc-300 backdrop-blur transition hover:border-android/30 hover:text-android"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteConfig.links.email}
              className="rounded-full border border-white/10 bg-[#0a0a0f]/40 p-2.5 text-zinc-300 backdrop-blur transition hover:border-android/30 hover:text-android"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="card-glow relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0f]/50 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-tr from-android/10 via-transparent to-kotlin/10" />
            <div className="flex h-full items-center justify-center">
              <ProfileAvatar />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-2xl border border-kotlin/30 bg-[#12121a]/90 px-4 py-2 backdrop-blur">
            <p className="font-[family-name:var(--font-mono)] text-xs text-kotlin">Mobile</p>
            <p className="text-sm font-medium">Android · iOS · Flutter</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/5 bg-[#0a0a0f]/70 py-4 backdrop-blur">
        <div className="marquee-track gap-4">
          {[...heroMarquee, ...heroMarquee].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="mx-3 shrink-0 font-[family-name:var(--font-mono)] text-sm text-zinc-400"
            >
              {skill}
              <span className="ml-6 text-android">◆</span>
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-20 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-zinc-400 md:flex"
      >
        <span>Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
