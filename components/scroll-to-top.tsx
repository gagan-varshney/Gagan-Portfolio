"use client"

import { useEffect } from "react"

export default function ScrollToTop() {
  useEffect(() => {
    // Simple scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return null
}
