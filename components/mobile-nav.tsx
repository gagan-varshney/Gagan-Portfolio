"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-2">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 mt-8">
          <Link
            href="#about"
            className="text-lg font-medium transition-colors hover:text-theme-600"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            href="#resume"
            className="text-lg font-medium transition-colors hover:text-theme-600"
            onClick={handleLinkClick}
          >
            Resume
          </Link>
          <Link
            href="#experience"
            className="text-lg font-medium transition-colors hover:text-theme-600"
            onClick={handleLinkClick}
          >
            Education
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium transition-colors hover:text-theme-600"
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium transition-colors hover:text-theme-600"
            onClick={handleLinkClick}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-theme-600"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
