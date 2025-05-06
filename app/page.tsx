import {
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code,
  Server,
  Database,
  PenToolIcon as Tool,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactForm from "@/components/contact-form"
import AIChat from "@/components/ai-chat"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex ml-6">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Gagan Varshney</span>
            </Link>
            <nav className="flex items-center space-x-8 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#resume" className="transition-colors hover:text-foreground/80">
                Resume
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Education
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#ai-assistant" className="transition-colors hover:text-foreground/80">
                AI Assistant
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center justify-end">
                <Link href="https://github.com/gagan-varshney" target="_blank" rel="noreferrer" className="p-2">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gagan-varshney22/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:gv1678087@gmail.com" className="p-2">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-theme-700">
                    Gagan Varshney
                  </h1>
                  <p className="text-xl text-theme-600">Full Stack Developer</p>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Mathura, Uttar Pradesh, India</span>
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
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="bg-theme-600 hover:bg-theme-700">Contact Me</Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline" className="border-theme-600 text-theme-600 hover:bg-theme-50">
                      View Projects
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-full overflow-hidden w-[300px] h-[300px] border-4 border-theme-500/20 shadow-lg">
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

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-700">About Me</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  I'm a Full Stack Developer specializing in React.js, Node.js, and MongoDB with expertise in building
                  responsive web applications. Certified in MongoDB and experienced in AI integration projects. I have
                  strong problem-solving skills with a focus on performance optimization. I'm passionate about
                  delivering scalable, user-friendly solutions with clean and maintainable code.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-700">Resume</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  View or download my professional resume to learn more about my experience and qualifications.
                </p>
              </div>

              <div className="mx-auto max-w-4xl w-full bg-white p-8 rounded-lg resume-container">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                  <div className="text-left mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-theme-700">Gagan Varshney</h3>
                    <p className="text-theme-600">Full Stack Developer</p>
                  </div>
                  <a href="/gagan-varshney-resume.pdf" download>
                    <Button className="bg-theme-600 hover:bg-theme-700">
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </Button>
                  </a>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold flex items-center text-theme-700">
                        <FileText className="mr-2 h-5 w-5" /> Education
                      </h4>
                      <div className="mt-2 space-y-2">
                        <div className="border-l-2 border-theme-500 pl-4 py-1">
                          <p className="font-medium">Master of Computer Application</p>
                          <p className="text-sm text-muted-foreground">GLA University Mathura • 2023 - Present</p>
                        </div>
                        <div className="border-l-2 border-theme-500 pl-4 py-1">
                          <p className="font-medium">Bachelor of Science</p>
                          <p className="text-sm text-muted-foreground">Dr. Bhimrao Ambedkar University • 2020 - 2023</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold flex items-center text-theme-700">
                        <FileText className="mr-2 h-5 w-5" /> Certifications
                      </h4>
                      <div className="mt-2 space-y-2">
                        <div className="border-l-2 border-theme-500 pl-4 py-1">
                          <p className="font-medium">MongoDB for Students</p>
                          <p className="text-sm text-muted-foreground">MongoDB University • 2024</p>
                        </div>
                        <div className="border-l-2 border-theme-500 pl-4 py-1">
                          <p className="font-medium">SEO Certification</p>
                          <p className="text-sm text-muted-foreground">Semrush Academy • 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold flex items-center text-theme-700">
                        <FileText className="mr-2 h-5 w-5" /> Technical Skills
                      </h4>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <div className="bg-theme-50 px-3 py-1 rounded-full text-sm text-theme-700">React.js</div>
                        <div className="bg-theme-50 px-3 py-1 rounded-full text-sm text-theme-700">Node.js</div>
                        <div className="bg-theme-50 px-3 py-1 rounded-full text-sm text-theme-700">MongoDB</div>
                        <div className="bg-theme-50 px-3 py-1 rounded-full text-sm text-theme-700">JavaScript</div>
                        <div className="bg-theme-50 px-3 py-1 rounded-full text-sm text-theme-700">Next.js</div>
                        <div className="bg-theme-50 px-3 py-1 rounded-full text-sm text-theme-700">Tailwind CSS</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold flex items-center text-theme-700">
                        <FileText className="mr-2 h-5 w-5" /> Projects
                      </h4>
                      <div className="mt-2 space-y-2">
                        <div className="border-l-2 border-theme-500 pl-4 py-1">
                          <p className="font-medium">AI Trip Planner</p>
                          <p className="text-sm text-muted-foreground">React.js, Firebase, Gemini AI</p>
                        </div>
                        <div className="border-l-2 border-theme-500 pl-4 py-1">
                          <p className="font-medium">JioCinema Clone</p>
                          <p className="text-sm text-muted-foreground">React.js, Node.js, MongoDB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-muted-foreground">For a complete version of my resume, please download the PDF.</p>
                  <a href="/gagan-varshney-resume.pdf" download>
                    <Button className="mt-4 bg-theme-600 hover:bg-theme-700">
                      <Download className="mr-2 h-4 w-4" /> Download Full Resume
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-700">
                  Education
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  My academic background and qualifications.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 md:gap-8 lg:grid-cols-2">
                <Card className="border-theme-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-theme-700">Master of Computer Application</CardTitle>
                    <CardDescription>GLA University Mathura • Aug 2023 - Present</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>GPA: 7.19/10</p>
                    <p className="mt-2">
                      Focusing on advanced computer science concepts and software development methodologies.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-theme-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-theme-700">Bachelor of Science</CardTitle>
                    <CardDescription>Dr. Bhimrao Ambedkar University, Agra • Aug 2020 - June 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Studied core computer science principles and developed a strong foundation in programming and
                      problem-solving.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-700">Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Showcasing my recent work and technical expertise.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 md:gap-8 lg:grid-cols-2">
                <Card className="border-theme-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-theme-700">AI Trip Planner</CardTitle>
                    <CardDescription>React.js, Firebase, Gemini AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-left">
                      <li>
                        Developed a full-stack AI-based travel assistant that streamlines trip planning by generating
                        personalized itineraries.
                      </li>
                      <li>
                        Integrated Gemini AI to understand user preferences and provide destination, hotel, and activity
                        suggestions.
                      </li>
                      <li>Connected to Google Maps API for route visualization and real-time data display.</li>
                      <li>Built with Firebase for authentication, database storage, and real-time updates.</li>
                      <li>Deployed the application on Vercel with CI/CD pipeline support.</li>
                    </ul>
                    <div className="mt-4">
                      <Button variant="outline" className="border-theme-600 text-theme-600 hover:bg-theme-50" asChild>
                        <Link href="https://github.com/gagan-varshney" target="_blank" rel="noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-theme-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-theme-700">JioCinema Clone</CardTitle>
                    <CardDescription>React.js, Node.js, MongoDB</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-left">
                      <li>
                        Created a video streaming platform with features like browsing, searching, user login, and video
                        playback.
                      </li>
                      <li>
                        Designed responsive UI using Tailwind CSS with performance optimizations for mobile and desktop.
                      </li>
                      <li>Developed backend with Node.js and Express, incorporating RESTful API architecture.</li>
                      <li>Managed data with MongoDB and implemented user authentication and authorization.</li>
                      <li>Added intelligent recommendation system using trending content and user behavior.</li>
                    </ul>
                    <div className="mt-4">
                      <Button variant="outline" className="border-theme-600 text-theme-600 hover:bg-theme-50" asChild>
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

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-700">Skills</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Technologies and tools I specialize in.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl">
                <Tabs defaultValue="frontend" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-theme-100">
                    <TabsTrigger
                      value="frontend"
                      className="data-[state=active]:bg-theme-600 data-[state=active]:text-white flex items-center gap-2"
                    >
                      <Code className="h-4 w-4" /> Frontend
                    </TabsTrigger>
                    <TabsTrigger
                      value="backend"
                      className="data-[state=active]:bg-theme-600 data-[state=active]:text-white flex items-center gap-2"
                    >
                      <Server className="h-4 w-4" /> Backend
                    </TabsTrigger>
                    <TabsTrigger
                      value="database"
                      className="data-[state=active]:bg-theme-600 data-[state=active]:text-white flex items-center gap-2"
                    >
                      <Database className="h-4 w-4" /> Database
                    </TabsTrigger>
                    <TabsTrigger
                      value="tools"
                      className="data-[state=active]:bg-theme-600 data-[state=active]:text-white flex items-center gap-2"
                    >
                      <Tool className="h-4 w-4" /> Tools
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="frontend" className="mt-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">R</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">React.js</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">N</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">Next.js</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">JS</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">
                          JavaScript
                        </div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">H5</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">HTML5</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">C3</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">CSS3</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">TW</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">
                          Tailwind CSS
                        </div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">BS</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">Bootstrap</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="backend" className="mt-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">NJ</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">Node.js</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">EX</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">
                          Express.js
                        </div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">API</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">
                          RESTful APIs
                        </div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">FB</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">Firebase</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="database" className="mt-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">MDB</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">MongoDB</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">SQL</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">MySQL</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">MG</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">Mongoose</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="tools" className="mt-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">GIT</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">Git</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">DKR</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">Docker</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">NPM</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">npm</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2 rounded-lg border border-theme-200 p-4 shadow-sm hover:shadow-lg transition-all hover:border-theme-500 hover:bg-theme-50 group">
                        <div className="h-12 w-12 rounded-full bg-theme-100 flex items-center justify-center group-hover:bg-theme-200 transition-colors">
                          <span className="text-xl font-bold text-theme-700">PM</span>
                        </div>
                        <div className="text-lg font-semibold text-theme-700 group-hover:text-theme-800">Postman</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-assistant" className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-700">
                  AI Assistant
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Chat with my AI assistant powered by Grok to learn more about my skills and experience.
                </p>
              </div>
              <div className="flex items-center justify-center w-full">
                <AIChat />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-700">
                  Certifications & Achievements
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Professional certifications and notable accomplishments.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 md:gap-8 lg:grid-cols-2">
                <Card className="border-theme-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-theme-700">Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-left">
                      <li>MongoDB for Students - MongoDB University (2024)</li>
                      <li>SEO Certification - Semrush Academy (2024)</li>
                      <li>React Hooks Certification - GreatStack (2024)</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-theme-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-theme-700">Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-left">
                      <li>Won Best DSE Award at VI Cellular Limited (2019)</li>
                      <li>Top Performer in Hackathon for Food Delivery App (2024)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-700">
                  Contact Me
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Interested in working together? Reach out to me through any of these channels or fill out the form
                  below.
                </p>
              </div>
              <div className="mx-auto grid max-w-4xl gap-6 py-6 md:grid-cols-3">
                <Card className="border-theme-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Mail className="h-10 w-10 mb-2 text-theme-600" />
                    <CardTitle className="text-theme-700">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href="mailto:gv1678087@gmail.com" className="text-theme-600 hover:underline">
                      gv1678087@gmail.com
                    </Link>
                  </CardContent>
                </Card>
                <Card className="border-theme-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Linkedin className="h-10 w-10 mb-2 text-theme-600" />
                    <CardTitle className="text-theme-700">LinkedIn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href="https://www.linkedin.com/in/gagan-varshney22/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-theme-600 hover:underline"
                    >
                      linkedin.com/in/gagan-varshney22
                    </Link>
                  </CardContent>
                </Card>
                <Card className="border-theme-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Phone className="h-10 w-10 mb-2 text-theme-600" />
                    <CardTitle className="text-theme-700">Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href="tel:+918979840948" className="text-theme-600 hover:underline">
                      +91 8979840948
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="mx-auto w-full max-w-md">
                <Card className="border-theme-200 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-theme-700">Send me a message</CardTitle>
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gagan Varshney. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
