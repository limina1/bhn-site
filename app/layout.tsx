import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BRAND } from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: BRAND.name,
    template: `%s · ${BRAND.name}`
  },
  description: BRAND.tagline,
  icons: [{ rel: "icon", url: "/favicon.svg" }]
};

// Runs before paint to apply the saved theme and avoid a flash of the wrong mode.
// Light is the default, dark mode only applies when the user has explicitly chosen it.
const themeScript = `(function(){try{document.documentElement.classList.toggle('dark',localStorage.getItem('theme')==='dark');}catch(e){}})();`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[-240px] -z-10 mx-auto h-[560px] w-[980px] max-w-[95vw] rounded-full bg-gradient-to-b from-brand-100/70 via-white to-transparent blur-3xl dark:from-brand-500/15 dark:via-ink-950 dark:to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[480px] -z-10 mx-auto h-[560px] w-[1040px] max-w-[95vw] rounded-full bg-gradient-to-b from-accent-200/60 via-white to-transparent blur-3xl dark:from-accent-500/20 dark:via-ink-950 dark:to-transparent"
          />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
