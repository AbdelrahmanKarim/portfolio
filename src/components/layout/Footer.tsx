import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm italic text-zinc-500">
          At their core, software engineers are problem solvers.
        </p>
        <p className="mt-4 text-sm text-zinc-600">
          Built by {siteConfig.name} · © {new Date().getFullYear()}
        </p>
        <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-zinc-700">
          Android · iOS · Flutter · Kotlin · Swift
        </p>
      </div>
    </footer>
  );
}
