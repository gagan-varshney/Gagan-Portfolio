"use client"

import { useState } from "react"
import { Download, Eye, Calendar, MapPin, Phone, Mail, Award, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function ResumeSection() {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Create a comprehensive resume content
      const resumeContent = `
GAGAN VARSHNEY
Full Stack Developer

Contact Information:
Phone: +91 8979840948
Email: gv1678087@gmail.com
LinkedIn: linkedin.com/in/gagan-varshney22
GitHub: github.com/gagan-varshney
Location: Noida, Uttar Pradesh, India

PROFESSIONAL SUMMARY
Full Stack Developer specializing in React.js, Node.js, and MongoDB with expertise in building responsive web applications. Certified in MongoDB and experienced in AI integration projects. Strong problem-solving skills with a focus on performance optimization. Passionate about delivering scalable, user-friendly solutions with clean and maintainable code.

EDUCATION
Master of Computer Application
GLA University Mathura
Aug 2023 - May 2025 (Expected)
GPA: 7.19/10
Focusing on advanced computer science concepts and software development methodologies.

Bachelor of Science
Dr. Bhimrao Ambedkar University, Agra
Aug 2020 - June 2023
Studied core computer science principles and developed a strong foundation in programming and problem-solving.

TECHNICAL SKILLS
Frontend Development: React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap
Backend Development: Node.js, Express.js, RESTful APIs, Firebase
Database & Tools: MongoDB, MySQL, Mongoose, Git, Docker, npm, Postman
Soft Skills: Problem Solving, Critical Thinking, Project Management, Team Collaboration

PROJECTS
AI Trip Planner
Technologies: React.js, Firebase, Gemini AI
• Developed a full-stack AI-based travel assistant that streamlines trip planning by generating personalized itineraries
• Integrated Gemini AI to understand user preferences and provide destination, hotel, and activity suggestions
• Connected to Google Maps API for route visualization and real-time data display
• Built with Firebase for authentication, database storage, and real-time updates
• Deployed the application on Vercel with CI/CD pipeline support

JioCinema Clone
Technologies: React.js, Node.js, MongoDB
• Created a video streaming platform with features like browsing, searching, user login, and video playback
• Designed responsive UI using Tailwind CSS with performance optimizations for mobile and desktop
• Developed backend with Node.js and Express, incorporating RESTful API architecture
• Managed data with MongoDB and implemented user authentication and authorization
• Added intelligent recommendation system using trending content and user behavior

CERTIFICATIONS
• MongoDB for Students - MongoDB University (2024)
• SEO Certification - Semrush Academy (2024)
• React Hooks Certification - GreatStack (2024)

ACHIEVEMENTS
• Won Best DSE Award at VI Cellular Limited (2019)
• Top Performer in Hackathon for Food Delivery App (2024)

INTERESTS
• Cricket, Photography, Travel
      `

      // Create and download the text file
      const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "Gagan_Varshney_Resume.txt"
      a.style.display = "none"
      document.body.appendChild(a)
      a.click()

      // Clean up
      setTimeout(() => {
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }, 100)

      toast({
        title: "Resume Downloaded",
        description: "Your resume has been downloaded successfully as a text file.",
      })
    } catch (error) {
      console.error("Download error:", error)
      toast({
        title: "Download Error",
        description: "There was an issue downloading the resume. Please try again or contact me directly.",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  const education = [
    {
      degree: "Master of Computer Application",
      institution: "GLA University Mathura",
      period: "Aug 2023 - May 2025 (Expected)",
      gpa: "7.19/10",
      description: "Focusing on advanced computer science concepts and software development methodologies.",
    },
    {
      degree: "Bachelor of Science",
      institution: "Dr. Bhimrao Ambedkar University, Agra",
      period: "Aug 2020 - June 2023",
      description:
        "Studied core computer science principles and developed a strong foundation in programming and problem-solving.",
    },
  ]

  const certifications = [
    {
      name: "MongoDB for Students",
      issuer: "MongoDB University",
      year: "2024",
    },
    {
      name: "SEO Certification",
      issuer: "Semrush Academy",
      year: "2024",
    },
    {
      name: "React Hooks Certification",
      issuer: "GreatStack",
      year: "2024",
    },
  ]

  const achievements = [
    {
      title: "Best DSE Award",
      organization: "VI Cellular Limited",
      year: "2019",
      description: "Recognized for outstanding performance in direct sales",
    },
    {
      title: "Top Performer in Hackathon",
      organization: "Food Delivery App Competition",
      year: "2024",
      description: "Developed innovative food delivery solution",
    },
  ]

  const projects = [
    {
      title: "AI Trip Planner",
      technologies: "React.js, Firebase, Gemini AI",
      description: [
        "Developed a full-stack AI-based travel assistant that streamlines trip planning by generating personalized itineraries",
        "Integrated Gemini AI to understand user preferences and provide destination, hotel, and activity suggestions",
        "Connected to Google Maps API for route visualization and real-time data display",
        "Built with Firebase for authentication, database storage, and real-time updates",
        "Deployed the application on Vercel with CI/CD pipeline support",
      ],
    },
    {
      title: "JioCinema Clone",
      technologies: "React.js, Node.js, MongoDB",
      description: [
        "Created a video streaming platform with features like browsing, searching, user login, and video playback",
        "Designed responsive UI using Tailwind CSS with performance optimizations for mobile and desktop",
        "Developed backend with Node.js and Express, incorporating RESTful API architecture",
        "Managed data with MongoDB and implemented user authentication and authorization",
        "Added intelligent recommendation system using trending content and user behavior",
      ],
    },
  ]

  const skills = {
    frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "Firebase"],
    database: ["MongoDB", "MySQL", "Mongoose"],
    tools: ["Git", "Docker", "npm", "Postman"],
    soft: ["Problem Solving", "Critical Thinking", "Project Management", "Team Collaboration"],
  }

  return (
    <section id="resume" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-4">
            <h2 className="section-heading">Resume</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Download my complete resume or view the highlights below. Updated regularly with latest experience and
              skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleDownload} disabled={isDownloading} className="btn-primary">
                <Download className="mr-2 h-4 w-4" />
                {isDownloading ? "Preparing..." : "Download Resume"}
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">
                  <Eye className="mr-2 h-4 w-4" />
                  Request Latest Version
                </Link>
              </Button>
            </div>
          </div>

          {/* Personal Information */}
          <Card className="w-full max-w-4xl card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Briefcase className="mr-2 h-5 w-5" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Full Stack Developer specializing in React.js, Node.js, and MongoDB with expertise in building
                responsive web applications. Certified in MongoDB and experienced in AI integration projects. Strong
                problem-solving skills with a focus on performance optimization. Passionate about delivering scalable,
                user-friendly solutions with clean and maintainable code.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91 8979840948</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>gv1678087@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Noida, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="w-full max-w-4xl card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <GraduationCap className="mr-2 h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      {edu.gpa && <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>}
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

          {/* Projects Section */}
          <Card className="w-full max-w-4xl card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Briefcase className="mr-2 h-5 w-5" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-primary font-medium">{project.technologies}</p>
                  </div>
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

          {/* Skills Section */}
          <Card className="w-full max-w-4xl card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Award className="mr-2 h-5 w-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Backend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Database & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.database, ...skills.tools].map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications Section */}
          <Card className="w-full max-w-4xl card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Award className="mr-2 h-5 w-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-primary">{cert.issuer}</p>
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements Section */}
          <Card className="w-full max-w-4xl card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Award className="mr-2 h-5 w-5" />
                Achievements & Awards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <span className="text-sm text-muted-foreground">{achievement.year}</span>
                  </div>
                  <p className="text-sm text-primary">{achievement.organization}</p>
                  <p className="text-sm">{achievement.description}</p>
                  {index < achievements.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="w-full max-w-4xl card-hover bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleDownload} disabled={isDownloading} className="btn-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Resume
                </Button>
                <Button variant="outline" asChild>
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
