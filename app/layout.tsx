import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gagan Varshney - Portfolio",
  description: "Professional portfolio of Gagan Varshney, Software Engineer",
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
              // Force scroll to top on page load
              if (typeof window !== 'undefined') {
                window.scrollTo(0, 0);
              }
              
              // Ensure scroll restoration is manual
              if (typeof history !== 'undefined' && history.scrollRestoration) {
                history.scrollRestoration = 'manual';
              }
              
              // Add event listeners once DOM is loaded
              document.addEventListener('DOMContentLoaded', function() {
                window.scrollTo(0, 0);
              });
              
              // Handle before unload to reset scroll position
              window.onbeforeunload = function() {
                window.scrollTo(0, 0);
              };
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
