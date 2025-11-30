import type { Metadata } from "next";
import { Bebas_Neue, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "DevLog – Daily Journal for Developers",
  description:
    "A focused, code-first journal for developers who ship. Log your goals, blockers, and wins — with code snippets, flow insights, and zero noise.",
  keywords:
    "developer journal, daily log, coding journal, focus tool, flow tracker, dev productivity",

  openGraph: {
    title: "DevLog – Engineer Your Day, Not Just Your Code",
    description:
      "A daily journal built for developers who refuse to lose progress in Slack noise or memory fog. One goal. One log. Real clarity.",
    url: "https://developers-log.vercel.app/",
    siteName: "DevLog",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Code.png",
        width: 1200,
        height: 630,
        alt: "DevLog – Daily Journal for Developers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DevLog – Your Daily Signal in the Noise",
    description:
      "Log goals, code snippets, and flow — in under 3 minutes per day.",
    creator: "@yourhandle", // Optional
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
        className={`${bebasNeue.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
