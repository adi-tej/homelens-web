"use client";

function scrollToSection(targetId: string) {
  const element = document.getElementById(targetId);

  if (!element) {
    window.location.href = `/#${targetId}`;
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${targetId}`);
}

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        type="button"
        onClick={() => scrollToSection("download")}
        className="inline-flex h-12 items-center justify-center rounded-xl bg-primary-strong px-6 font-semibold text-on-primary shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary"
      >
        Download the App
      </button>
      <button
        type="button"
        onClick={() => scrollToSection("product")}
        className="inline-flex h-12 items-center justify-center rounded-xl border border-outline bg-surface px-6 font-medium text-on-surface transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-container"
      >
        See What It Calculates
      </button>
    </div>
  );
}

