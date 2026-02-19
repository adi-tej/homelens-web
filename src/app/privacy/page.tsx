import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Home Lens",
  description:
      "Privacy policy for Home Lens App, operated by Westvale Holdings Pty Ltd. All data is stored locally on your device.",
};

export default function PrivacyPolicy() {
  return (
      <div className="min-h-screen relative">
        <div className="absolute inset-0 gradient-hero" aria-hidden/>
        {/* Header */}
        <header className="relative overflow-hidden">
          <div className="container-responsive relative">
            <nav className="flex flex-col gap-6 py-8 md:py-10">
              <div className="flex items-start justify-between gap-6">
                <Link href="/" className="flex items-end gap-2">
                  <Image src="/logo.svg" width={40} height={40} alt="HomeLens logo" className="p-1"/>
                  <span
                      className="text-xl md:text-2xl font-semibold tracking-tight leading-tight"
                      style={{color: "#729387"}}
                  >
                    Home Lens
                  </span>
                </Link>

              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-6 md:py-6">
          <article className="container-responsive max-w-3xl">
            {/* Intro */}
            <div className="mb-8">
              <div className="max-w-xs px-4">
                <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-on-surface-variant">
                  Legal
                </p>
                <div className="mt-1 md:mt-2 flex flex-col gap-1">
                  <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    Privacy Policy
                  </h1>
                  <p className="text-xs md:text-sm text-on-surface-variant">
                    February 20, 2026
                  </p>
                </div>
              </div>
              <p className="text-lg text-on-surface-variant mt-4 leading-relaxed px-4">
                Home Lens App is operated by{" "}
                <strong>Westvale Holdings Pty Ltd</strong> (ABN 23 695 449 793).
                We are committed to protecting your privacy. This Privacy Policy
                explains how Home Lens handles your information.
              </p>
            </div>

            <div className="space-y-8">
              {/* Data Storage */}
              <section className="card-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Data Storage
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Home Lens stores your property scenarios and calculations
                  locally on your device. We do not collect, transmit, or store
                  your personal or financial information on our servers.
                </p>
              </section>

              {/* Information We Don't Collect */}
              <section className="card-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Information We Don&apos;t Collect
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  As of the current version of Home Lens, we do not collect or
                  process the following information:
                </p>
                <ul className="text-on-surface-variant leading-relaxed space-y-2 list-disc list-inside">
                  <li>Personal identification information</li>
                  <li>Financial data or property details</li>
                  <li>Location data</li>
                  <li>Usage analytics or tracking data</li>
                  <li>Device identifiers</li>
                </ul>
              </section>

              {/* Third-Party Services */}
              <section className="card-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Third-Party Services
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Home Lens does not integrate with third-party analytics,
                  advertising, or data collection services. The app functions
                  entirely offline after installation.
                </p>
              </section>

              {/* Data Security */}
              <section className="card-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Data Security
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Your data remains on your device and is protected by your
                  device&apos;s security measures. If you delete the app, all
                  stored data is permanently removed from your device.
                </p>
              </section>

              {/* Data Backup */}
              <section className="card-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Data Backup
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Your scenario data may be included in device backups (iCloud,
                  Google Drive, etc.) according to your device settings. These
                  backups are managed by your device&apos;s operating system, not by
                  Home Lens.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="card-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Changes to This Policy
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect
                  changes to the app or legal requirements. Any updates will be
                  posted within the app and on this page with a revised “Last
                  Updated” date.
                </p>
              </section>

              {/* Contact */}
              <section className="card-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Contact
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  If you have questions about this Privacy Policy, please contact:
                  <br/>
                  <strong>Westvale Holdings Pty Ltd</strong>
                  <br/>
                  Email:{" "}
                  <a
                      href="mailto:hello.homelens@gmail.com"
                      className="text-primary hover:underline font-medium"
                  >
                    hello.homelens@gmail.com
                  </a>
                </p>
              </section>

              {/* Disclaimer */}
              <section className="card-surface p-6 md:p-8 bg-surface-variant/30 border-outline/30">
                <p className="text-sm text-on-surface-variant leading-relaxed italic">
                  This app provides general information only and should not be
                  considered financial advice. Consult with qualified
                  professionals for personalised guidance.
                </p>
              </section>
            </div>
          </article>
        </main>

        <div className="absolute bottom-0 inset-0 gradient-footer pointer-events-none" aria-hidden/>

        {/* Footer */}
        <footer className="relative z-10">
          <div className="container-responsive py-8 text-center">
            <Link href="/" className="flex flex-col items-center justify-center gap-2 mb-3">
              <Image src="/logo.svg" width={24} height={24} alt="Home Lens"/>
              <span className="font-semibold text-lg leading-tight" style={{color: '#7E9F8F'}}>Home Lens App</span>
            </Link>
            <div>
              <p className="text-sm text-on-surface-variant">
                © {new Date().getFullYear()} Westvale Holdings Pty Ltd
              </p>
              <p className="text-xs text-on-surface-variant opacity-75 mt-1">
                ABN 23 695 449 793
              </p>
            </div>
          </div>
        </footer>

      </div>
  );
}
