"use client"

import { Download, ExternalLink, FileText } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ResumeDownloadButtonProps {
  className?: string
  text: string
  variant?: "default" | "outline" | "dropdown"
}

export default function ResumeDownloadButton({ className, text, variant = "default" }: ResumeDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  // Multiple resume hosting options for reliability
  const resumeOptions = [
    {
      name: "PDF Version",
      url: "/gagan-varshney-resume.pdf",
      filename: "Gagan_Varshney_Resume.pdf",
      type: "application/pdf",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      name: "Google Drive",
      url: "https://drive.google.com/uc?export=download&id=1l24hiwYzM9TSB5K3GjNr71DIe-GSl6Is",
      filename: "Gagan_Varshney_Resume.pdf",
      type: "application/pdf",
      icon: <ExternalLink className="h-4 w-4" />,
      external: true,
    },
    {
      name: "Text Version",
      url: "/gagan-varshney-resume.txt",
      filename: "Gagan_Varshney_Resume.txt",
      type: "text/plain",
      icon: <FileText className="h-4 w-4" />,
    },
  ]

  const handleDownload = async (option = resumeOptions[0]) => {
    setIsDownloading(true)

    try {
      if (option.external) {
        // For external links, open in new tab
        window.open(option.url, "_blank")
        toast({
          title: "Opening Resume",
          description: "Your resume is opening in a new tab from Google Drive.",
        })
      } else {
        // For local files, try to download
        const response = await fetch(option.url)

        if (response.ok) {
          const blob = await response.blob()
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement("a")
          a.href = url
          a.download = option.filename
          document.body.appendChild(a)
          a.click()
          window.URL.revokeObjectURL(url)
          document.body.removeChild(a)

          toast({
            title: "Resume Downloaded",
            description: `${option.name} has been downloaded successfully.`,
          })
        } else {
          // If local file fails, try Google Drive
          window.open(resumeOptions[1].url, "_blank")
          toast({
            title: "Opening from Google Drive",
            description: "Local file not found. Opening from Google Drive instead.",
          })
        }
      }
    } catch (error) {
      console.error("Download error:", error)

      // Fallback to Google Drive if primary fails
      if (option !== resumeOptions[1]) {
        window.open(resumeOptions[1].url, "_blank")
        toast({
          title: "Opening from Google Drive",
          description: "Primary download failed. Opening from Google Drive.",
        })
      } else {
        // Final fallback to generated text resume
        const resumeContent = generateResumeText()
        const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "Gagan_Varshney_Resume.txt"
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)

        toast({
          title: "Resume Downloaded",
          description: "Downloaded as text file (fallback option).",
        })
      }
    } finally {
      setIsDownloading(false)
    }
  }

  const generateResumeText = () => {
    return `
GAGAN VARSHNEY
+918979840948 | gv1678087@gmail.com | LinkedIn | GitHub
Noida, India

CAREER OBJECTIVE
Full Stack Developer specializing in React.js, Node.js, and MongoDB with expertise in building responsive web
applications. Strong problem-solving skills with a focus on performance optimization. Passionate about delivering
scalable, user-friendly solutions with clean and maintainable code.

EDUCATION
Master of Computer Application - 7.44/10                                     2023 – 2025
GLA University Mathura

B.Sc                                                                          2020 – 2023
Dr. Bhimrao Ambedkar University, Agra

SKILLS
Technical Languages: C++, Python, Java
Frontend Tools: React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap
Backend Tools: Node.js, Express.js, Redux, Context API, RESTful APIs, Firebase
Databases: MongoDB, MySQL, Mongoose
Production Tools: Git, Vercel, Docker
Professional Skills: Critical Thinking, Problem Solver, Project ownership

PROJECTS
AI Trip Planner (React.js, JavaScript, Tailwind, Firebase, Gemini AI)
• Developed a full-stack web application for AI-powered trip planning with customized itineraries.
• Integrated Gemini AI for intelligent trip generation and Google Maps API for location visualization.
• Implemented user authentication and real-time data handling using Firebase.
• Designed a responsive and interactive user interface with React and Tailwind CSS.
• Deployed the application on Vercel, ensuring seamless user access and performance.

JioCinema (React.js, JavaScript, Tailwind, Node.js, RESTful API)
• Developed an OTT streaming platform where users can watch movies, TV shows, and live sports.
• Designed a clean, user-friendly interface with React.js and Tailwind CSS for a smooth experience.
• Added features like video streaming, user authentication, and personalized content recommendations.
• Built backend with Node.js and MongoDB, using RESTful APIs for data handling.

CERTIFICATIONS
• Introduction to MongoDB for Students - MongoDB
• SEO certificate - Semrush Academy
• React Hooks Crash Course - GreatStack

ACHIEVEMENTS
• Participated in Hackathon (Food Delivery App)
• Won Best DSE Award at VI Cellular Limited
    `
  }

  if (variant === "dropdown") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className={className} disabled={isDownloading}>
            <Download className="mr-2 h-4 w-4" />
            {isDownloading ? "Preparing..." : text}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {resumeOptions.map((option, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => handleDownload(option)}
              className="flex items-center space-x-2 cursor-pointer"
            >
              {option.icon}
              <span>{option.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Button className={className} variant={variant} onClick={() => handleDownload()} disabled={isDownloading}>
      <Download className="mr-2 h-4 w-4" />
      {isDownloading ? "Preparing..." : text}
    </Button>
  )
}
