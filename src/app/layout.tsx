import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/data/site";
import "./globals.css";
const display = localFont({
  src: "./fonts/display.woff2",
  variable: "--font-display",
  weight: "700",
  display: "swap",
});
const body = localFont({
  src: "./fonts/body.woff2",
  variable: "--font-body",
  weight: "400",
  display: "swap",
});
export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  ...(site.url
    ? { metadataBase: new URL(site.url), alternates: { canonical: site.url } }
    : {}),
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
