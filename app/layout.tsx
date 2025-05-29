import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gagan Varshney - Portfolio",
  description:
    "Professional portfolio of Gagan Varshney, Full Stack Developer specializing in React.js, Node.js, and MongoDB",
  keywords: "Gagan Varshney, Full Stack Developer, React.js, Node.js, MongoDB, Web Developer, Portfolio",
  authors: [{ name: "Gagan Varshney" }],
  creator: "Gagan Varshney",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gagan-varshney-portfolio.vercel.app",
    title: "Gagan Varshney - Portfolio",
    description: "Professional portfolio of Gagan Varshney, Full Stack Developer",
    siteName: "Gagan Varshney Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gagan Varshney - Portfolio",
    description: "Professional portfolio of Gagan Varshney, Full Stack Developer",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simple scroll to top on page load
              window.scrollTo(0, 0);
              
              // Disable scroll restoration
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Suspense fallback={null}>{children}</Suspense>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
