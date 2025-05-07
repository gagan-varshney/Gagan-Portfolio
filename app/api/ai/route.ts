import { type NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

// Create SDK client using the provided API key directly
const client = new OpenAI({
  apiKey: "xai-cpIorzSmLVkxyClqz3yoyvUv3sYeSK3ZaMw0VQo1LFpLbVb6rhpT2UJkTVDYni3809iagfQR8GeETTa3",
  baseURL: "https://api.x.ai/v1",
})

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json()

    if (!question) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 })
    }

    // Log the request for debugging
    console.log("Sending request to Grok API with question:", question)

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

    // Log the successful response
    console.log("Received response from Grok API")

    return NextResponse.json({ response })
  } catch (error) {
    // Detailed error logging
    console.error("Error calling Grok API:", error)

    // Return a more specific error message
    return NextResponse.json(
      { error: "Sorry, I encountered an error while processing your request. Please try again later." },
      { status: 500 },
    )
  }
}
