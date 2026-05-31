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
  title: { default: "AimeRSS", template: "%s | AimeRSS" },
  description: "A collection of RSS feeds from Letterboxd and Soundcloud",
  keywords: ["RSS", "feeds", "Letterboxd", "Soundcloud", "movies", "music"],
  authors: [{ name: "Daniel" }],
  openGraph: {
    type: "website",
    url: "https://feed.fortundaniel.com",
    title: "AimeRSS",
    description: "A collection of RSS feeds from Letterboxd and Soundcloud",
    siteName: "AimeRSS",
    images: [
      {
        url: "https://i1.sndcdn.com/avatars-D5ZwRHDLgbBHRe6Q-sOTQaQ-original.jpg",
        alt: "AimeRSS Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "AimeRSS",
    description: "A collection of RSS feeds",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="AimeRSS" />
      </head>
      <body className="flex justify-center max-w-5xl mx-auto px-10 bg-blue-200 selection:bg-blue-700 selection:text-blue-50 text-blue-700  dark:bg-emerald-950 dark:text-emerald-300 dark:selection:text-emerald-700 dark:selection:bg-emerald-50">
        {children}
      </body>
    </html>
  );
}
