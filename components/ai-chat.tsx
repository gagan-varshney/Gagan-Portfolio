"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { SendIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { askGrok } from "@/app/actions/ai"

export default function AIChat() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Gagan's AI assistant powered by Grok. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await askGrok(input)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    } catch (error) {
      console.error("Error getting AI response:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again later." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <Card className="w-full max-w-3xl mx-auto border-theme-200 shadow-md">
      <CardHeader className="bg-theme-50 border-b border-theme-100">
        <CardTitle className="text-theme-700">Chat with Gagan's AI Assistant</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === "user"
                    ? "bg-theme-600 text-white"
                    : "bg-theme-100 text-theme-800 border border-theme-200"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-3 bg-theme-100 text-theme-800 border border-theme-200">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-theme-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div
                    className="w-2 h-2 rounded-full bg-theme-500 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-theme-500 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="border-t border-theme-100 p-4 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about Gagan..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" className="bg-theme-600 hover:bg-theme-700" disabled={isLoading}>
            <SendIcon className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
