import Image from "next/image";

type CompanyLogoProps = {
  src?: string;
  alt: string;
  fallback: string;
};

export function CompanyLogo({ src, alt, fallback }: CompanyLogoProps) {
  if (src) {
    return (
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
        <Image src={src} alt={alt} fill className="object-contain p-0.5" sizes="48px" />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-[family-name:var(--font-display)] text-sm font-bold text-android">
      {fallback}
    </div>
  );
}
