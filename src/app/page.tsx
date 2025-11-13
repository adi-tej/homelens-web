import Image from "next/image";
import Link from "next/link";
import SectionCard from "@/components/SectionCard";
import ContactForm from "@/components/JoinWaitlist";
import QRCodeImage from "@/components/QRCodeImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" aria-hidden />
        <div className="container-responsive relative">
          <nav className="flex items-center justify-between py-5">
            <div className="flex items-center gap-3">
              <Image src="/window.svg" width={28} height={28} alt="HomeLens logo" />
              <span className="text-sm font-semibold tracking-tight">HomeLens</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Link href="#download" className="text-sm text-on-surface-variant hover:text-foreground">Download</Link>
              <Link href="#story" className="text-sm text-on-surface-variant hover:text-foreground">Our Story</Link>
              <Link href="#join" className="text-sm text-on-surface-variant hover:text-foreground">Contact</Link>
            </div>
          </nav>
          <div className="grid md:grid-cols-2 gap-10 py-12 md:py-20 items-center">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-container/60 text-on-primary-container px-3 py-1 text-xs font-medium ring-1 ring-primary/20">
                <svg className="w-3 h-3 text-on-primary-container" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
                Private & Secure • Works Offline
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                See Through Your Property Investment
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-prose leading-relaxed">
                Stop second-guessing. HomeLens transforms complex property calculations into crystal-clear insights—helping you understand the true financial impact before you commit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#download"
                  className="h-14 inline-flex items-center justify-center rounded-lg bg-primary text-on-primary px-6 font-semibold shadow-lg hover:shadow-xl hover:opacity-95 transition-all"
                >
                  Get the App
                </a>
                <a
                  href="#story"
                  className="h-14 inline-flex items-center justify-center rounded-lg border-2 border-outline/40 bg-surface/80 backdrop-blur px-6 text-on-surface font-medium hover:border-primary/60 hover:bg-surface transition-all"
                >
                  Why We Built It
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-60" aria-hidden />
                <div className="relative card-surface p-6 md:p-8 shadow-2xl">
                  <Image src="/logo.svg" alt="HomeLens App Preview" width={700} height={700} className="w-full h-auto" />
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 hidden md:block">
                <div className="rounded-xl bg-tertiary text-on-tertiary px-4 py-3 text-sm font-medium shadow-lg">
                  ✓ Zero spreadsheets needed
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-surface-variant/30">
        <div className="container-responsive">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Property Investment, Finally Transparent
            </h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Every number tells a story. We help you read it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="card-surface p-6 md:p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Compare Real Scenarios</h3>
              <p className="text-on-surface-variant">
                Model different properties, deposit sizes, and financing options side-by-side. See which path builds wealth faster.
              </p>
            </div>
            <div className="card-surface p-6 md:p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Factor In Hidden Costs</h3>
              <p className="text-on-surface-variant">
                Stamp duty, LMI, ongoing expenses, tax benefits—we calculate the full picture so nothing catches you off guard.
              </p>
            </div>
            <div className="card-surface p-6 md:p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Long-Term Growth</h3>
              <p className="text-on-surface-variant">
                Watch your equity grow over years. Understand when you break even, when you can refinance, and what your returns look like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24" id="story">
        <div className="container-responsive">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                From Spreadsheet Chaos to Clarity
              </h2>
              <p className="text-lg text-on-surface-variant">
                A tool born from personal frustration
              </p>
            </div>

            <div className="space-y-8">
              <div className="card-surface p-6 md:p-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-error-container/60 flex items-center justify-center">
                    <span className="text-xl">😰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Breaking Point</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      When I started looking at my first property investment, I faced the same wall everyone hits: <strong>how do I actually compare my options?</strong> Should I buy a house or land? What if I save a bigger deposit? Is paying LMI worth it to enter the market sooner? Every question spawned ten more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-surface p-6 md:p-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary-container/60 flex items-center justify-center">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Endless Spreadsheets</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      I built spreadsheet after spreadsheet. Loan calculators. Tax benefit models. Rental yield projections. But they were <strong>fragile, error-prone, and exhausting to maintain</strong>. Changing one assumption meant hours of recalculating. And I&apos;m a developer—I can&apos;t imagine what this is like for everyone else.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-surface p-6 md:p-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-container/60 flex items-center justify-center">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Realization</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-4">
                      If I—someone who builds software for a living—was struggling this much, <strong>what about first-time buyers, parents juggling work and family, or anyone without a finance background?</strong> They deserve a tool that just <em>works</em>.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed">
                      That&apos;s why I built HomeLens. Not as another basic calculator, but as a comprehensive modeling tool that respects your time, protects your privacy, and gives you confidence in one of life&apos;s biggest decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-16 md:py-24 bg-surface-variant/30">
        <div className="container-responsive">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything You Need, Nothing You Don&apos;t
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <SectionCard title="🏡 Real-World Modeling">
              <p>
                Not just purchase price and interest rate. We calculate <strong>stamp duty, LMI, legal fees, renovations, ongoing costs, body corporate, rental income, vacancy periods, property management, and depreciation benefits</strong>. Everything that affects your bottom line.
              </p>
            </SectionCard>
            <SectionCard title="📈 Multi-Scenario Comparison">
              <p>
                Create unlimited scenarios and view them side-by-side. Instantly see which strategy gives you better cash flow, faster equity growth, or higher returns. <strong>Make data-driven decisions, not guesses</strong>.
              </p>
            </SectionCard>
            <SectionCard title="🔒 Privacy First">
              <p>
                Your financial data is sensitive. That&apos;s why <strong>everything stays on your device</strong>. No cloud sync. No account required. No tracking. HomeLens works completely offline—your numbers are yours alone.
              </p>
            </SectionCard>
            <SectionCard title="⏱️ Built for Busy Lives">
              <p>
                Input your numbers once, adjust assumptions with sliders, and see results update instantly. <strong>Minutes instead of hours</strong>. Save scenarios, revisit them months later, and keep refining as your situation changes.
              </p>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* Download Section with QR Codes */}
      <section id="download" className="py-16 md:py-24">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Get HomeLens on Your Mobile Device
              </h2>
              <p className="text-lg text-on-surface-variant">
                Scan the QR code to download the app, or scroll down to get in touch
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* iOS Download */}
              <div className="card-surface p-8 text-center">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">iOS App</h3>
                <div className="bg-white p-4 rounded-lg inline-block mb-4 shadow-sm">
                  <QRCodeImage
                    src="/qr-ios.png"
                    alt="Scan to download iOS app"
                    platform="iOS"
                  />
                </div>
                <p className="text-sm text-on-surface-variant mb-4">
                  Scan with your iPhone camera to download from the App Store
                </p>
                <a 
                  href="https://apps.apple.com/app/homelens" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Or visit App Store
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Android Download */}
              <div className="card-surface p-8 text-center">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.523 15.341c-.366 0-.662-.297-.662-.662s.296-.662.662-.662.662.297.662.662-.296.662-.662.662zm-11.046 0c-.365 0-.662-.297-.662-.662s.297-.662.662-.662.662.297.662.662-.297.662-.662.662zm15.234-7.839l-1.481-2.565c-.098-.17-.315-.228-.486-.13-.17.098-.228.315-.13.486l1.498 2.594c-1.557-.698-3.302-1.089-5.162-1.089-1.86 0-3.604.391-5.162 1.089l1.498-2.594c.098-.17.04-.388-.13-.486-.171-.098-.388-.04-.486.13L9.189 7.502C6.668 8.812 5 11.174 5 13.878c0 .021.008.041.009.062h13.982c.001-.021.009-.041.009-.062 0-2.704-1.668-5.066-4.189-6.376zm-3.865 4.837h-7.638v-.662h7.638v.662zm0-2.644h-7.638v-.663h7.638v.663z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Android App</h3>
                <div className="bg-white p-4 rounded-lg inline-block mb-4 shadow-sm">
                  <QRCodeImage
                    src="/qr-android.png"
                    alt="Scan to download Android app"
                    platform="Android"
                  />
                </div>
                <p className="text-sm text-on-surface-variant mb-4">
                  Scan with your Android camera to download from Google Play
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.homelens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Or visit Google Play
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact/Feedback Section */}
            <div id="join" className="card-surface p-8 md:p-10">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container mb-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">We&apos;d Love to Hear From You</h3>
                  <p className="text-on-surface-variant text-base md:text-lg">
                    Have feedback? Found a bug? Want to suggest a feature? Or just want to say hello? Drop us a message and we&apos;ll get back to you.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-outline/30">
        <div className="container-responsive py-8 text-sm text-on-surface-variant">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image src="/window.svg" width={20} height={20} alt="HomeLens" />
              <span>© {new Date().getFullYear()} HomeLens. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#download" className="hover:text-foreground transition-colors">Download</a>
              <a href="#story" className="hover:text-foreground transition-colors">Our Story</a>
              <a href="#join" className="hover:text-foreground transition-colors">Contact</a>
              <a href="mailto:hello@homelens.app" className="hover:text-foreground transition-colors">Email</a>
            </div>
          </div>
          <div className="text-center md:text-left mt-4 text-xs opacity-75">
            <p>HomeLens is a property investment calculator. All calculations are estimates and should not be considered financial advice. Please consult with qualified professionals before making investment decisions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
