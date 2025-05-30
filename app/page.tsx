"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code,
  Server,
  Database,
  PenToolIcon as Tool,
  CodepenIcon as ReactIcon,
  LayoutIcon,
  FileCodeIcon,
  FileTypeIcon,
  CodepenIcon as CssIcon,
  PaintBucketIcon,
  BackpackIcon as BootstrapIcon,
  ServerIcon,
  PackageIcon,
  PiIcon as ApiIcon,
  FlameIcon,
  DatabaseIcon,
  DatabaseIcon as SqlIcon,
  BookOpenIcon,
  GitBranchIcon,
  ContainerIcon,
  CodepenIcon as NpmIcon,
  SendIcon,
  HomeIcon,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import MobileNav from "@/components/mobile-nav"
import ScrollToTop from "@/components/scroll-to-top"
import { ThemeToggle } from "@/components/theme-toggle"
import LanguageToggle from "@/components/language-toggle"
import BackToTop from "@/components/back-to-top"
import ResumeSection from "@/components/resume-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Simple scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "resume", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const frontendSkills = [
    { name: "React.js", icon: <ReactIcon className="skill-icon" />, level: 90 },
    { name: "Next.js", icon: <LayoutIcon className="skill-icon" />, level: 85 },
    { name: "JavaScript", icon: <FileCodeIcon className="skill-icon" />, level: 95 },
    { name: "HTML5", icon: <FileTypeIcon className="skill-icon" />, level: 95 },
    { name: "CSS3", icon: <CssIcon className="skill-icon" />, level: 90 },
    { name: "Tailwind CSS", icon: <PaintBucketIcon className="skill-icon" />, level: 85 },
    { name: "Bootstrap", icon: <BootstrapIcon className="skill-icon" />, level: 80 },
  ]

  const backendSkills = [
    { name: "Node.js", icon: <ServerIcon className="skill-icon" />, level: 85 },
    { name: "Express.js", icon: <PackageIcon className="skill-icon" />, level: 80 },
    { name: "RESTful APIs", icon: <ApiIcon className="skill-icon" />, level: 90 },
    { name: "Firebase", icon: <FlameIcon className="skill-icon" />, level: 75 },
  ]

  const databaseSkills = [
    { name: "MongoDB", icon: <DatabaseIcon className="skill-icon" />, level: 90 },
    { name: "MySQL", icon: <SqlIcon className="skill-icon" />, level: 75 },
    { name: "Mongoose", icon: <BookOpenIcon className="skill-icon" />, level: 85 },
  ]

  const toolsSkills = [
    { name: "Git", icon: <GitBranchIcon className="skill-icon" />, level: 85 },
    { name: "Docker", icon: <ContainerIcon className="skill-icon" />, level: 70 },
    { name: "npm", icon: <NpmIcon className="skill-icon" />, level: 90 },
    { name: "Postman", icon: <SendIcon className="skill-icon" />, level: 85 },
  ]

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <BackToTop />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Gagan Varshney</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <button
                onClick={() => scrollToSection("home")}
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              >
                <span className="flex items-center">
                  <HomeIcon className="mr-1 h-4 w-4" />
                  Home
                </span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("resume")}
                className={`nav-link ${activeSection === "resume" ? "active" : ""}`}
              >
                <span className="flex items-center">
                  <FileText className="mr-1 h-4 w-4" />
                  Resume
                </span>
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
              >
                Contact
              </button>
            </nav>
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="https://github.com/gagan-varshney"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/gagan-varshney22/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="home" className="w-full py-20 md:py-32 fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="text-primary">Gagan Varshney</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">Full Stack Developer</p>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Noida, Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+91 8979840948</span>
                  </div>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Specializing in React.js, Node.js, and MongoDB with expertise in building responsive web applications.
                  Passionate about delivering scalable, user-friendly solutions with clean and maintainable code.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button onClick={() => scrollToSection("contact")} className="btn-primary">
                    Contact Me
                  </Button>
                  <Button variant="outline" onClick={() => scrollToSection("resume")}>
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-full overflow-hidden w-[300px] h-[300px] border-4 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="https://res.cloudinary.com/dnquwmnur/image/upload/v1746335833/IMG20250418174807_qw2lxk.jpg"
                    width={300}
                    height={300}
                    alt="Gagan Varshney"
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-16 md:py-24 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <h2 className="section-heading">About Me</h2>
              <div className="max-w-3xl space-y-6">
                <p className="text-lg">
                  I'm a Full Stack Developer specializing in React.js, Node.js, and MongoDB with expertise in building
                  responsive web applications. Certified in MongoDB and experienced in AI integration projects. I have
                  strong problem-solving skills with a focus on performance optimization.
                </p>
                <p className="text-lg">
                  I'm passionate about delivering scalable, user-friendly solutions with clean and maintainable code. My
                  goal is to create digital experiences that are both functional and aesthetically pleasing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <ResumeSection />

        <section id="skills" className="w-full py-16 md:py-24 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-12">
              <h2 className="section-heading">Skills</h2>

              <div className="w-full max-w-6xl space-y-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center justify-center">
                    <Code className="mr-2 h-5 w-5 text-primary" /> Frontend Development
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {frontendSkills.map((skill, index) => (
                      <div key={index} className="skill-item fade-in">
                        {skill.icon}
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-level">
                          <div className="skill-level-fill" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center justify-center">
                    <Server className="mr-2 h-5 w-5 text-primary" /> Backend Development
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {backendSkills.map((skill, index) => (
                      <div key={index} className="skill-item fade-in">
                        {skill.icon}
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-level">
                          <div className="skill-level-fill" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center justify-center">
                    <Database className="mr-2 h-5 w-5 text-primary" /> Database
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {databaseSkills.map((skill, index) => (
                      <div key={index} className="skill-item fade-in">
                        {skill.icon}
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-level">
                          <div className="skill-level-fill" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center justify-center">
                    <Tool className="mr-2 h-5 w-5 text-primary" /> Tools & Technologies
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {toolsSkills.map((skill, index) => (
                      <div key={index} className="skill-item fade-in">
                        {skill.icon}
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-level">
                          <div className="skill-level-fill" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8">
              <h2 className="section-heading">Projects</h2>
              <div className="grid max-w-6xl w-full gap-8 md:grid-cols-2">
                <Card className="overflow-hidden card-hover">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-6xl">🤖</div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-primary">AI Trip Planner</CardTitle>
                    <CardDescription>React.js, Firebase, Gemini AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>
                        Developed a full-stack AI-based travel assistant that streamlines trip planning by generating
                        personalized itineraries.
                      </li>
                      <li>
                        Integrated Gemini AI to understand user preferences and provide destination, hotel, and activity
                        suggestions.
                      </li>
                      <li>Connected to Google Maps API for route visualization and real-time data display.</li>
                    </ul>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/gagan-varshney" target="_blank" rel="noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden card-hover">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-6xl">🎬</div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-primary">JioCinema Clone</CardTitle>
                    <CardDescription>React.js, Node.js, MongoDB</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>
                        Created a video streaming platform with features like browsing, searching, user login, and video
                        playback.
                      </li>
                      <li>
                        Designed responsive UI using Tailwind CSS with performance optimizations for mobile and desktop.
                      </li>
                      <li>Developed backend with Node.js and Express, incorporating RESTful API architecture.</li>
                    </ul>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/gagan-varshney" target="_blank" rel="noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-16 md:py-24 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8">
              <h2 className="section-heading">Contact Me</h2>
              <div className="grid max-w-4xl w-full gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <Link
                        href="mailto:gv1678087@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        gv1678087@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <Link
                        href="https://www.linkedin.com/in/gagan-varshney22/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/gagan-varshney22
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <Link
                        href="tel:+918979840948"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 8979840948
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <span className="text-sm text-muted-foreground">Noida, Uttar Pradesh, India</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <Link
                        href="https://github.com/gagan-varshney"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/gagan-varshney
                      </Link>
                    </div>
                  </div>
                </div>

                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-primary">Send me a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 border-t no-print">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Gagan Varshney. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                href="https://github.com/gagan-varshney"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/gagan-varshney22/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:gv1678087@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
