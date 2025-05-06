import { type NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

// Create SDK client using your API key
const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1",
})

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json()

    if (!question) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 })
    }

    const completion = await client.chat.completions.create({
      model: "grok-2-latest",
      messages: [
        {
          role: "system",
          content:
            "You are an AI assistant for Gagan Varshney, a Full Stack Developer. Answer questions about Gagan's skills, experience, and portfolio. Be helpful, concise, and professional. If you don't know specific details about Gagan that weren't mentioned in the conversation, you can say you don't have that information.",
        },
        {
          role: "user",
          content: question,
        },
      ],
    })

    const response = completion.choices[0].message.content || "I'm sorry, I couldn't generate a response."
    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error calling Grok API:", error)
    return NextResponse.json(
      { error: "Sorry, I encountered an error while processing your request. Please try again later." },
      { status: 500 },
    )
  }
}
