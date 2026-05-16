import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Lens – Know the numbers before you buy",
  description:
    "Compare property scenarios, reveal hidden buying costs, model mortgage and cash flow, and review 5 year ROI projections before committing capital.",
  metadataBase: new URL("https://homelens.app"),
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Home Lens – Know the numbers before you buy",
    description:
      "A private property analysis app for scenario comparison, hidden costs, mortgage, cash flow, ROI, and 5 year performance.",
    url: "https://homelens.app",
    siteName: "HomeLens",
    images: [
      { url: "/window.svg", width: 1200, height: 630, alt: "HomeLens" },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Lens – Know the numbers before you buy",
    description:
      "Understand the true costs and returns of property decisions with private, local-first scenario analysis.",
    images: ["/window.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
