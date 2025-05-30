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
      </SheetContent>
    </Sheet>
  )
}
