"use client"
import {
  Eye,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  Star,
  Sparkles,
  Code2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import ResumeDownloadButton from "@/components/resume-download-button"

export default function ResumeSection() {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "GLA University Mathura",
      period: "2023 – 2025",
      cgpa: "7.44/10",
      description: "Focusing on advanced computer science concepts and software development methodologies.",
      highlight: true,
    },
    {
      degree: "Bachelor of Science",
      institution: "Dr. Bhimrao Ambedkar University, Agra",
      period: "2020 – 2023",
      description:
        "Studied core computer science principles and developed a strong foundation in programming and problem-solving.",
      highlight: false,
    },
  ]

  const certifications = [
    {
      name: "Introduction to MongoDB for Students",
      issuer: "MongoDB",
      year: "2024",
      featured: true,
    },
    {
      name: "SEO Certificate",
      issuer: "Semrush Academy",
      year: "2024",
      featured: false,
    },
    {
      name: "React Hooks Crash Course",
      issuer: "GreatStack",
      year: "2024",
      featured: true,
    },
  ]

  const achievements = [
    {
      title: "Participated in Hackathon",
      organization: "Food Delivery App Competition",
      year: "2024",
      description: "Developed innovative food delivery solution",
      icon: "🏆",
    },
    {
      title: "Best DSE Award",
      organization: "VI Cellular Limited",
      year: "2019",
      description: "Recognized for outstanding performance in direct sales",
      icon: "🥇",
    },
  ]

  const projects = [
    {
      title: "AI Trip Planner",
      technologies: "React.js, JavaScript, Tailwind, Firebase, Gemini AI",
      description: [
        "Developed a full-stack web application for AI-powered trip planning with customized itineraries",
        "Integrated Gemini AI for intelligent trip generation and Google Maps API for location visualization",
        "Implemented user authentication and real-time data handling using Firebase",
        "Designed a responsive and interactive user interface with React and Tailwind CSS",
        "Deployed the application on Vercel, ensuring seamless user access and performance",
      ],
      featured: true,
    },
    {
      title: "JioCinema",
      technologies: "React.js, JavaScript, Tailwind, Node.js, RESTful API",
      description: [
        "Developed an OTT streaming platform where users can watch movies, TV shows, and live sports",
        "Designed a clean, user-friendly interface with React.js and Tailwind CSS for a smooth experience",
        "Added features like video streaming, user authentication, and personalized content recommendations",
        "Built backend with Node.js and MongoDB, using RESTful APIs for data handling",
      ],
      featured: true,
    },
  ]

  const skills = {
    technical: ["C++", "Python", "Java"],
    frontend: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "Redux", "Context API", "RESTful APIs", "Firebase"],
    database: ["MongoDB", "MySQL", "Mongoose"],
    production: ["Git", "Vercel", "Docker", "Postman"],
    professional: ["Critical Thinking", "Problem Solver", "Project ownership"],
  }

  return (
    <section id="resume" className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <h2 className="section-heading">Resume</h2>
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Download my complete resume or view the highlights below. Updated with latest projects and achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ResumeDownloadButton
                text="Download Resume"
                variant="dropdown"
                className="btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
              />
              <Button
                variant="outline"
                asChild
                className="border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <Link href="#contact">
                  <Eye className="mr-2 h-4 w-4" />
                  Request Latest Version
                </Link>
              </Button>
            </div>
          </div>

          {/* Career Objective */}
          <Card className="w-full max-w-4xl card-hover border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="flex items-center text-primary">
                <Briefcase className="mr-2 h-5 w-5" />
                Career Objective
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p className="text-lg leading-relaxed">
                Full Stack Developer specializing in React.js, Node.js, and MongoDB with expertise in building
                responsive web applications. Strong problem-solving skills with a focus on performance optimization.
                Passionate about delivering scalable, user-friendly solutions with clean and maintainable code.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91 8979840948</span>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>gv1678087@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Noida, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="w-full max-w-4xl card-hover border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="flex items-center text-primary">
                <GraduationCap className="mr-2 h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`space-y-2 p-4 rounded-lg ${edu.highlight ? "bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20" : "bg-secondary/5"} transition-all duration-300 hover:shadow-md`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        {edu.highlight && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                      </div>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      {edu.cgpa && (
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm font-medium text-foreground">CGPA: {edu.cgpa}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3 w-3" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">{edu.description}</p>
                  {index < education.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="w-full max-w-4xl card-hover border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="flex items-center text-primary">
                <Code2 className="mr-2 h-5 w-5" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Technical Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="hover:bg-primary/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                    Frontend Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="hover:bg-secondary/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Backend Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="hover:bg-primary/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                    Databases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="hover:bg-secondary/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Production Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.production.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="hover:bg-primary/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                    Professional Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.professional.map((skill, index) => (
                      <Badge key={index} variant="outline" className="hover:bg-secondary/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="w-full max-w-4xl card-hover border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="flex items-center text-primary">
                <Briefcase className="mr-2 h-5 w-5" />
                Featured Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`space-y-3 p-4 rounded-lg ${project.featured ? "bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10" : "bg-secondary/5"} transition-all duration-300 hover:shadow-md`}
                >
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    {project.featured && (
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-primary font-medium">{project.technologies}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {index < projects.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications Section */}
          <Card className="w-full max-w-4xl card-hover border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="flex items-center text-primary">
                <Award className="mr-2 h-5 w-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg space-y-2 transition-all duration-300 hover:shadow-md ${cert.featured ? "bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/20" : "bg-secondary/5 border-secondary/20"}`}
                  >
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">{cert.name}</h4>
                      {cert.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                    </div>
                    <p className="text-sm text-primary">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements Section */}
          <Card className="w-full max-w-4xl card-hover border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardTitle className="flex items-center text-primary">
                <Award className="mr-2 h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <h4 className="font-semibold">{achievement.title}</h4>
                    </div>
                    <Badge variant="secondary">{achievement.year}</Badge>
                  </div>
                  <p className="text-sm text-primary font-medium">{achievement.organization}</p>
                  <p className="text-sm">{achievement.description}</p>
                  {index < achievements.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="w-full max-w-4xl card-hover bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="text-center py-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <h3 className="text-xl font-semibold">Ready to Work Together?</h3>
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              </div>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ResumeDownloadButton
                  text="Download Full Resume"
                  variant="dropdown"
                  className="btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
                />
                <Button
                  variant="outline"
                  asChild
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
