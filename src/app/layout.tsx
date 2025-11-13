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
  title: "HomeLens – Property decisions made clear",
  description:
    "HomeLens helps you model real-world property scenarios and compare them side-by-side—private, offline, and insight-driven.",
  metadataBase: new URL("https://homelens.app"),
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "HomeLens – Property decisions made clear",
    description:
      "Model loans, stamp duty, LMI, tax benefits, and growth. Compare scenarios and see long-term projections.",
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
    title: "HomeLens – Property decisions made clear",
    description:
      "Understand the true costs and returns of property investment with a private, offline-first calculator.",
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
