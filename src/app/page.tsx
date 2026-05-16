import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/JoinWaitlist";
import QRCodeImage from "@/components/QRCodeImage";
import HeroButtons from "@/components/HeroButtons";
import HeaderNav from "@/components/HeaderNav";

type ComparisonRow = [label: string, caseOne: string, caseTwo: string, highlight?: boolean];
type SimpleRow = [label: string, value: string, highlight?: boolean];

const marketImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80";

const valuePillars = [
  {
    eyebrow: "Compare",
    title: "Pressure-test every scenario",
    description:
      "Model different deposits, properties, loan structures, and occupancy choices before you shortlist the deal.",
    icon: "M9 17v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm6 0V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v10m10 0V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v13",
  },
  {
    eyebrow: "Reveal",
    title: "Expose the costs buyers miss",
    description:
      "Bring stamp duty, LMI, fees, mortgage pressure, expenses, rent, and tax effects into one clean decision view.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    eyebrow: "Project",
    title: "Look five years ahead",
    description:
      "Review cash flow, equity, total return, and ROI over time so the long-term trade-off is visible early.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

const comparisonRows: ComparisonRow[] = [
  ["Loan Amount", "$736,560", "$688,500"],
  ["Monthly Mortgage", "$4,182", "$3,909", true],
  ["Rental Income", "$30,000", "$30,000"],
  ["Tax Return", "$13,984", "$13,196"],
  ["Net Cash Flow", "-$22,553", "-$20,066", true],
  ["Equity", "$89,922", "$129,275"],
  ["Total Return", "$67,984", "$67,196"],
];

const hiddenCostRows: SimpleRow[] = [
  ["Stamp duty", "$30,412"],
  ["LMI", "$8,500"],
  ["Loan amount", "$688,500"],
  ["Monthly mortgage", "$3,909", true],
  ["Annual expenses", "$10,351"],
];

const performanceRows: ComparisonRow[] = [
  ["Property value", "$824,000", "$848,720"],
  ["Rental income", "$30,000", "$31,500"],
  ["Net cash flow", "-$20,066", "-$16,477", true],
  ["Equity", "$129,275", "$139,073"],
  ["ROI", "-69.76%", "-52.11%", true],
];

const proofStats = [
  ["5 year", "projection horizon"],
  ["0", "cloud storage required"],
  ["∞", "scenario comparisons"],
];

export default function Home() {
  return (
      <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <HeaderNav />

        {/* Hero */}
        <header className="relative overflow-hidden hero-gradient">
          <div className="container-responsive relative">
            <div className="grid items-center gap-12 pb-12 pt-32 md:pb-20 md:pt-36 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary-container px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-on-primary-container">
                  Local-first property analysis
                </span>
                <h1 className="max-w-3xl text-4xl font-bold leading-[1.04] tracking-tight md:text-6xl">
                  Know the numbers before the property feels urgent.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
                  Home Lens helps Australian buyers and investors compare scenarios, reveal hidden costs, and understand mortgage, cash flow, ROI, and five-year performance before committing capital.
                </p>
                <div className="grid max-w-xl grid-cols-3 gap-3">
                  {proofStats.map(([value, label]) => (
                      <div key={label} className="card-surface px-4 py-3 shadow-none">
                        <div className="text-2xl font-bold text-primary-strong">{value}</div>
                        <div className="mt-1 text-xs leading-snug text-on-surface-variant">{label}</div>
                      </div>
                  ))}
                </div>
                <HeroButtons/>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[3rem] bg-primary/10 blur-3xl" aria-hidden/>
                <div className="panel-surface relative overflow-hidden p-4 md:p-5">
                  <div className="relative h-56 overflow-hidden rounded-3xl border border-outline/35 md:h-64">
                    <Image
                        src={marketImage}
                        alt="Modern residential property representing a property investment decision"
                        fill
                        priority
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-inverse-surface/70 via-inverse-surface/10 to-transparent" aria-hidden/>
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-white/90 p-4 backdrop-blur dark:bg-surface/90">
                      <p className="eyebrow">Deal snapshot</p>
                      <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                        <div className="rounded-xl bg-primary-container p-3">
                          <p className="font-bold text-on-primary-container">Costs</p>
                          <p className="text-primary-strong">Mapped</p>
                        </div>
                        <div className="rounded-xl bg-secondary-container p-3">
                          <p className="font-bold text-on-secondary-container">Cash flow</p>
                          <p className="text-secondary-strong">Visible</p>
                        </div>
                        <div className="rounded-xl bg-accent-container p-3">
                          <p className="font-bold text-accent">ROI</p>
                          <p className="text-on-surface-variant">Projected</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-3xl border border-outline/30 bg-surface">
                    <div className="grid grid-cols-3 border-b border-outline/30 p-4 text-sm font-bold text-primary-strong">
                      <span>Metric</span>
                      <span className="text-right">Case 1</span>
                      <span className="text-right">Case 2</span>
                    </div>
                    {comparisonRows.slice(0, 4).map(([label, caseOne, caseTwo, highlight]) => (
                        <div key={label} className={`grid grid-cols-3 border-b border-outline/20 p-4 text-sm last:border-b-0 ${highlight ? "bg-secondary-container/70 text-on-secondary-container" : "bg-surface-variant/45"}`}>
                          <span className="font-semibold text-on-surface-variant">{label}</span>
                          <span className="text-right font-medium">{caseOne}</span>
                          <span className="text-right font-medium">{caseTwo}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Problem */}
        <section className="section-padding">
          <div className="container-responsive">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-4">The buying problem</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                The asking price is only the beginning.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
                Property decisions become expensive when the real cost of ownership is scattered across loan calculators, duty tables, spreadsheets, and assumptions. Home Lens turns that uncertainty into a clearer shortlist.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section id="product" className="section-padding bg-surface-variant/35">
          <div className="container-responsive">
            <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div>
                <p className="eyebrow mb-4">Why Home Lens</p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">A professional view of your next property move.</h2>
              </div>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Designed as a marketing-grade decision layer for buyers: clean enough to use quickly, detailed enough to expose the numbers that change the deal.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {valuePillars.map((pillar) => (
                  <article key={pillar.title} className="card-surface p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container text-primary-strong">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pillar.icon}/>
                      </svg>
                    </div>
                    <p className="eyebrow mb-3">{pillar.eyebrow}</p>
                    <h3 className="text-xl font-semibold tracking-tight">{pillar.title}</h3>
                    <p className="mt-3 leading-relaxed text-on-surface-variant">{pillar.description}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section id="how-it-works" className="section-padding">
          <div className="container-responsive">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="eyebrow mb-4">Scenario proof</p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Compare the decision, not just the repayment.</h2>
                <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
                  Two properties can look similar at first glance. Home Lens shows how hidden costs, loan amount, rent, tax return, cash flow, and equity shift the real outcome.
                </p>
                <div className="mt-8 overflow-hidden rounded-panel border border-outline/40 bg-surface shadow-soft">
                  <div className="grid grid-cols-3 border-b border-outline/30 bg-surface p-4 font-bold text-primary-strong">
                    <span>Metric</span>
                    <span className="text-right">Case 1</span>
                    <span className="text-right">Case 2</span>
                  </div>
                  {comparisonRows.map(([label, caseOne, caseTwo, highlight]) => (
                      <div key={label} className={`grid grid-cols-3 border-b border-outline/20 p-4 text-sm last:border-b-0 md:text-base ${highlight ? "bg-secondary-container/75 text-on-secondary-container" : "bg-surface-variant/45"}`}>
                        <span className="font-semibold text-on-surface-variant">{label}</span>
                        <span className="text-right font-medium">{caseOne}</span>
                        <span className="text-right font-medium">{caseTwo}</span>
                      </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-6">
                <div className="card-surface p-6 md:p-8">
                  <p className="eyebrow mb-4">Hidden cost intelligence</p>
                  <h3 className="text-2xl font-bold tracking-tight">Expose the expenses that make or break the deal.</h3>
                  <div className="mt-6 overflow-hidden rounded-2xl border border-outline/30">
                    {hiddenCostRows.map(([label, value, highlight]) => (
                        <div key={label} className={`flex items-center justify-between gap-6 border-b border-outline/20 p-4 last:border-b-0 ${highlight ? "bg-secondary-container/75" : "bg-surface"}`}>
                          <span className="text-on-surface-variant">{label}</span>
                          <span className="text-lg font-bold">{value}</span>
                        </div>
                    ))}
                  </div>
                </div>
                <div className="card-surface p-6 md:p-8">
                  <p className="eyebrow mb-4">5 year outlook</p>
                  <h3 className="text-2xl font-bold tracking-tight">See how the position may change over time.</h3>
                  <div className="mt-6 overflow-hidden rounded-2xl border border-outline/30">
                    <div className="grid grid-cols-3 border-b border-outline/30 bg-surface p-3 text-sm font-bold text-primary-strong">
                      <span>Metric</span>
                      <span className="text-right">2025</span>
                      <span className="text-right">2026</span>
                    </div>
                    {performanceRows.map(([label, yearOne, yearTwo, highlight]) => (
                        <div key={label} className={`grid grid-cols-3 border-b border-outline/20 p-3 text-sm last:border-b-0 ${highlight ? "bg-secondary-container/75" : "bg-surface-variant/45"}`}>
                          <span className="font-semibold text-on-surface-variant">{label}</span>
                          <span className="text-right font-medium">{yearOne}</span>
                          <span className="text-right font-medium">{yearTwo}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section id="privacy" className="section-padding bg-surface-variant/35">
          <div className="container-responsive">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="eyebrow mb-4">Private by design</p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Serious financial decisions deserve a calmer workspace.</h2>
                <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
                  Your property assumptions are sensitive. Home Lens is built around local storage, fast scenario iteration, and a focused experience that keeps your numbers in your control.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                {[
                  ["No cloud account", "Scenarios are stored locally on your device."],
                  ["Unlimited comparisons", "Keep testing deposits, cash flow, ROI, and purchase assumptions."],
                  ["Built for the Australian market", "Designed around property costs like stamp duty, LMI, concessions, and loan settings."],
                ].map(([title, description]) => (
                    <article key={title} className="card-surface p-5 shadow-none">
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{description}</p>
                    </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="section-padding">
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="eyebrow mb-4">Start analysing</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  Download Home Lens
                </h2>
                <p className="text-lg text-on-surface-variant">
                  Start pressure-testing your next property decision on iPhone, or send us a note below.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* iOS Download */}
                <div className="card-surface p-8 text-center">
                  <div>
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-primary-strong to-accent mb-4">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-6">Get it on iPhone</h3>
                  <div className="bg-white inline-block mb-4">
                    <QRCodeImage
                        src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://apps.apple.com/au/app/home-lens/id6755220922"
                        alt="Scan to download iOS app"
                        platform="iOS"
                    />
                  </div>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Point your camera at the QR code to download Home Lens for iOS.
                  </p>
                  <a
                      href="https://apps.apple.com/au/app/home-lens/id6755220922"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mb-6"
                  >
                    <div
                        className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-xl font-semibold -mt-1">App Store</div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Android Download - Coming Soon */}
                <div className="card-surface p-8 text-center border-2 border-dashed border-outline/45 opacity-70">
                  <div className="mb-6">
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-accent mb-4">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M17.523 15.341c-.366 0-.662-.297-.662-.662s.296-.662.662-.662.662.297.662.662-.296.662-.662.662zm-11.046 0c-.365 0-.662-.297-.662-.662s.297-.662.662-.662.662.297.662.662-.297.662-.662.662zm15.234-7.839l-1.481-2.565c-.098-.17-.315-.228-.486-.13-.17.098-.228.315-.13.486l1.498 2.594c-1.557-.698-3.302-1.089-5.162-1.089-1.86 0-3.604.391-5.162 1.089l1.498-2.594c.098-.17.04-.388-.13-.486-.171-.098-.388-.04-.486.13L9.189 7.502C6.668 8.812 5 11.174 5 13.878c0 .021.008.041.009.062h13.982c.001-.021.009-.041.009-.062 0-2.704-1.668-5.066-4.189-6.376zm-3.865 4.837h-7.638v-.662h7.638v.662zm0-2.644h-7.638v-.663h7.638v.663z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Android App</h3>
                  <div className="bg-white p-4 rounded-xl inline-block mb-4 border-2 border-outline/20 shadow-sm">
                    <div
                        className="w-40 h-40 bg-background border border-outline/20 rounded-lg flex flex-col items-center justify-center gap-2">
                      <svg className="w-16 h-16 text-outline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                      </svg>
                      <span className="text-sm text-on-surface-variant font-medium">Coming Soon</span>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Android version is currently in development.
                  </p>
                  <div className="inline-flex items-center gap-2 text-on-surface-variant font-medium">
                    Get notified when ready
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Contact/Feedback Section */}
              <div id="join" className="card-surface p-8 md:p-10">
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">Have a property analysis idea?</h3>
                    <p className="text-on-surface-variant text-base md:text-lg">
                      Tell us what would help you compare deals faster, reduce uncertainty, or make better investment decisions.
                    </p>
                  </div>
                  <ContactForm/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="footer-gradient pointer-events-none absolute inset-x-0 bottom-0 h-[600px]" aria-hidden/>

        {/* Footer */}
        <footer className="relative z-10">
          <div className="container-responsive py-12 text-center">
            <Link href="/" className="inline-flex flex-col items-center justify-center gap-2 mb-6">
              <Image src="/logo.svg" width={24} height={24} alt="Home Lens"/>
              <span className="font-semibold text-lg leading-tight text-primary-strong">Home Lens</span>
            </Link>
            <div
                className="flex items-center justify-center gap-4 md:gap-6 mb-6 text-sm text-on-surface-variant flex-wrap">
              <Link href="/#product" className="hover:text-foreground transition-colors">Features</Link>
              <Link href="/#how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
              <Link href="/#download" className="hover:text-foreground transition-colors">Download</Link>
              <Link href="/#join" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <a href="mailto:hello@homelens.app" className="hover:text-foreground transition-colors">Email</a>
            </div>
            <div>
              <p className="text-sm text-on-surface-variant">
                © {new Date().getFullYear()} Home Lens App
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
