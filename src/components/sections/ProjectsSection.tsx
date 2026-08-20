"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectImageCarousel } from "@/components/ui/ProjectImageCarousel";
import { SectionHeader, SectionShell } from "@/components/ui/SectionHeader";

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 8);
    setCanScrollRight(container.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollProjects = (direction: -1 | 1) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("article");
    const cardWidth = card?.offsetWidth ?? 340;
    const gap = 24;

    container.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <SectionShell id="projects">
      <SectionHeader
        number="03"
        label="projects"
        title="Selected work."
        description="Mobile apps and squad projects — Android, iOS, and cross-platform builds from hackathons to production-style architectures."
      />

      <div className="relative px-2 sm:px-10">
        <button
          type="button"
          onClick={() => scrollProjects(-1)}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[#12121a]/95 p-3 text-zinc-200 shadow-lg backdrop-blur transition hover:border-android/30 hover:text-android disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
          aria-label="Previous project"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={() => scrollProjects(1)}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[#12121a]/95 p-3 text-zinc-200 shadow-lg backdrop-blur transition hover:border-android/30 hover:text-android disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
          aria-label="Next project"
        >
          <ChevronRight size={20} />
        </button>

        <div className="mb-4 flex justify-end gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => scrollProjects(-1)}
            disabled={!canScrollLeft}
            className="rounded-full border border-white/10 bg-card p-2.5 text-zinc-300 transition hover:border-android/30 hover:text-android disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollProjects(1)}
            disabled={!canScrollRight}
            className="rounded-full border border-white/10 bg-card p-2.5 text-zinc-300 transition hover:border-android/30 hover:text-android disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Next project"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pt-1"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group card-glow flex w-[min(340px,85vw)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/8 bg-card transition hover:bg-card-hover"
            >
              <div className="relative">
                {project.images.length > 0 ? (
                  <ProjectImageCarousel images={project.images} name={project.name} />
                ) : (
                  <div className="flex h-[min(520px,62vh)] items-center justify-center border-b border-white/5 bg-gradient-to-br from-android/10 via-[#12121a] to-kotlin/10">
                    <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white/80">
                      {project.name}
                    </p>
                  </div>
                )}
                {project.highlight && (
                  <span className="absolute left-4 top-4 z-10 rounded-full border border-android/30 bg-[#0a0a0f]/80 px-3 py-1 text-xs font-medium text-android backdrop-blur">
                    {project.highlight}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      {project.name}
                    </h3>
                    {project.platform && (
                      <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-kotlin">
                        {project.platform}
                      </p>
                    )}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-lg border border-white/10 p-2 text-zinc-400 transition hover:border-android/30 hover:text-android"
                    aria-label={`${project.name} on GitHub`}
                  >
                    <Github size={16} />
                  </a>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-android transition hover:text-[#34c975]"
                >
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
