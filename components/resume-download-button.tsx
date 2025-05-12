"use client"

import { Download } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface ResumeDownloadButtonProps {
  className?: string
  text: string
}

export default function ResumeDownloadButton({ className, text }: ResumeDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Try to fetch the PDF to check if it exists
      const response = await fetch("/gagan-varshney-resume.pdf")

      if (response.ok) {
        // If PDF exists, create a download link and click it
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "gagan-varshney-resume.pdf"
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } else {
        // If PDF doesn't exist, try to fetch the text file as fallback
        const textResponse = await fetch("/gagan-varshney-resume.txt")

        if (textResponse.ok) {
          const blob = await textResponse.blob()
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement("a")
          a.href = url
          a.download = "gagan-varshney-resume.txt"
          document.body.appendChild(a)
          a.click()
          window.URL.revokeObjectURL(url)
          document.body.removeChild(a)

          toast({
            title: "Resume Downloaded",
            description: "The resume was downloaded as a text file instead of PDF.",
          })
        } else {
          throw new Error("Resume file not found")
        }
      }
    } catch (error) {
      console.error("Download error:", error)
      toast({
        title: "Download Available",
        description: "Your resume is ready to be viewed online. Contact for more details.",
        variant: "default",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button
      className={className || "bg-theme-600 hover:bg-theme-700"}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      <Download className="mr-2 h-4 w-4" />
      {isDownloading ? "Preparing..." : text}
    </Button>
  )
}
