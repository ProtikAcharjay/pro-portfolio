import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TechBackground } from "@/components/tech-background";
import { portfolioData } from "@/lib/data/portfolio-data";
import Script from 'next/script';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description: portfolioData.personal.bio,
  keywords: ["developer", "portfolio", "web development", "full stack", "react", "next.js", "javascript", "typescript", "laravel", "php", "tailwindcss", "node.js", "express", "mongodb", "sql", "github", "linkedin", "bugs", "projects", "contact", "resume", "cv", "about me", "software engineer", "programmer", "coder", "tech enthusiast", "existing projects", "protik", "Protik Acharjay"],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioData.personal.website,
    siteName: portfolioData.personal.name,
    title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
    description: portfolioData.personal.bio,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
    description: portfolioData.personal.bio,
    creator: "@ProtikAcharjay",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-YC76N0N3S0`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YC76N0N3S0', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {/* <PageBackground /> */}
          <TechBackground />
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
