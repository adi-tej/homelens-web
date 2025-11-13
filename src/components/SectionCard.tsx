import React from "react";

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

// Simple presentational card using theme colors
export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="group relative overflow-hidden card-surface p-7 md:p-8 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.06),0_4px_6px_-1px_rgba(0,0,0,0.08)] transition-colors">
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
        <div className="absolute -inset-24 bg-primary/5 blur-2xl" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold tracking-tight text-on-surface mb-3 flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-primary-container" />
        {title}
      </h3>
      <div className="prose prose-sm max-w-none leading-relaxed text-on-surface-variant [&_p]:mb-4 [&_p:last-child]:mb-0">
        {children}
      </div>
    </section>
  );
}

export default SectionCard;

