import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – HomeLens",
  description:
    "HomeLens privacy policy. We store all data locally on your device and do not collect any personal or financial information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-outline/20 bg-surface/80 backdrop-blur sticky top-0 z-50">
        <div className="container-responsive">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/window.svg" width={28} height={28} alt="HomeLens logo" />
              <span className="text-sm font-semibold tracking-tight">HomeLens</span>
            </Link>
            <Link
              href="/"
              className="text-sm text-on-surface-variant hover:text-foreground transition-colors"
            >
              Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 md:py-20">
        <article className="container-responsive max-w-3xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-on-surface-variant">
              <strong>Last Updated:</strong> November 11, 2025
            </p>
          </div>

          <div className="space-y-8">
            {/* Data Storage */}
            <section className="card-surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Data Storage
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                HomeLens stores all your property scenarios and calculations
                locally on your device. We do not collect, transmit, or store
                any of your personal or financial data on external servers.
              </p>
            </section>

            {/* Information We Don't Collect */}
            <section className="card-surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Information We Don&apos;t Collect
              </h2>
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
                HomeLens does not integrate with any third-party analytics,
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
                device&apos;s security measures. If you delete the app, all stored
                data is permanently removed from your device.
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
                HomeLens.
              </p>
            </section>

            {/* Contact */}
            <section className="card-surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Contact
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                If you have questions about this privacy policy, please contact
                us at{" "}
                <a
                  href="mailto:hello.homelens@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  hello.homelens@gmail.com
                </a>
                .
              </p>
            </section>

            {/* Disclaimer */}
            <section className="card-surface p-6 md:p-8 bg-surface-variant/30 border-outline/30">
              <p className="text-sm text-on-surface-variant leading-relaxed italic">
                This app provides general information only and should not be
                considered financial advice. Consult with qualified
                professionals for personalized guidance.
              </p>
            </section>
          </div>

          {/* Back to Home CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-on-primary font-semibold shadow-lg hover:shadow-xl hover:opacity-95 transition-all"
            >
              Back to HomeLens
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-outline/20 py-8 mt-12">
        <div className="container-responsive text-center text-sm text-on-surface-variant">
          <p>© 2025 HomeLens. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

