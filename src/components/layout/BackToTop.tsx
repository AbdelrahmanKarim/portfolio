"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0);
      setVisible(scrollTop > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-[#12121a]/90 px-4 py-2 text-xs text-zinc-400 backdrop-blur transition hover:border-android/30 hover:text-white"
      aria-label="Back to top"
    >
      <ArrowUp size={14} />
      <span className="font-[family-name:var(--font-mono)]">{progress}%</span>
    </button>
  );
}
