"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // When the component mounts, scroll to the top
    window.scrollTo(0, 0)

    // When the route changes, scroll to the top
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [pathname, searchParams])

  // This component doesn't render anything
  return null
}
