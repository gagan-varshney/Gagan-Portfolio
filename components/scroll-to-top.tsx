"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // When the route changes, scroll to the top
    window.scrollTo(0, 0)
  }, [pathname, searchParams])

  // This component doesn't render anything
  return null
}
