import { ReactNode } from "react";

type SectionHeaderProps = {
  number: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  number,
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 max-w-2xl ${className}`}>
      <p className="section-number mb-3">
        {number} {label}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-zinc-400">{description}</p>}
    </div>
  );
}

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
