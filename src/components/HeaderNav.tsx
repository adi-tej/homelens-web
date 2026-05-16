"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Features", targetId: "product" },
  { label: "How It Works", targetId: "how-it-works" },
];

function scrollToSection(targetId: string) {
  const element = document.getElementById(targetId);

  if (!element) {
    window.location.href = `/#${targetId}`;
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${targetId}`);
}

export default function HeaderNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-outline/35 bg-background/85 shadow-sm backdrop-blur-xl">
      <div className="container-responsive flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="flex items-end gap-2">
          <Image src="/logo.svg" width={40} height={40} alt="HomeLens logo" className="p-1" />
          <span className="text-xl md:text-2xl font-semibold leading-tight tracking-tight text-primary-strong">
            Home Lens
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => scrollToSection(item.targetId)}
              className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-primary-container hover:text-primary-strong"
            >
              {item.label}
            </button>
          ))}
          <Link
            href="/privacy"
            className="rounded-full px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-primary-container hover:text-primary-strong"
          >
            Privacy Policy
          </Link>
          <button
            type="button"
            onClick={() => scrollToSection("download")}
            className="ml-3 cursor-pointer rounded-full bg-primary-strong px-5 py-2 text-sm font-semibold text-on-primary shadow-sm transition-colors hover:bg-primary"
          >
            Download App
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/privacy"
            className="rounded-full px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-primary-container hover:text-primary-strong"
          >
            Privacy
          </Link>
          <button
            type="button"
            onClick={() => scrollToSection("download")}
            className="inline-flex cursor-pointer rounded-full bg-primary-strong px-4 py-2 text-sm font-semibold text-on-primary shadow-sm"
          >
            Download
          </button>
        </div>
      </div>
    </nav>
  );
}

