"use client"

import { useState } from "react"
import { Menu, HomeIcon, User, Code, Briefcase, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-bold">Gagan Varshney</h2>
        </div>
        <div className="flex flex-col gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center text-lg font-medium transition-colors hover:text-primary text-left"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center text-lg font-medium transition-colors hover:text-primary text-left"
          >
            <User className="mr-2 h-5 w-5" />
            About
          </button>
          <button
            onClick={() => scrollToSection("resume")}
            className="flex items-center text-lg font-medium transition-colors hover:text-primary text-left"
          >
            <FileText className="mr-2 h-5 w-5" />
            Resume
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="flex items-center text-lg font-medium transition-colors hover:text-primary text-left"
          >
            <Code className="mr-2 h-5 w-5" />
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="flex items-center text-lg font-medium transition-colors hover:text-primary text-left"
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center text-lg font-medium transition-colors hover:text-primary text-left"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact
          </button>
        </div>
        <div className="mt-8 pt-8 border-t">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/gagan-varshney" target="_blank" rel="noreferrer" className="hover:text-primary">
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gagan-varshney22/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:gv1678087@gmail.com" className="hover:text-primary">
              <span className="sr-only">Email</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
