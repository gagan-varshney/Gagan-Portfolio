"use server"

export async function askGrok(question: string): Promise<string> {
  try {
    // Use absolute URL for API calls
    const apiUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/ai` : "http://localhost:3000/api/ai"

    console.log("Calling AI API at:", apiUrl)

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
      cache: "no-store",
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`API responded with status: ${response.status}, body: ${errorText}`)
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error)
    }

    return data.response
  } catch (error) {
    console.error("Error calling AI API:", error)
    return "Sorry, I encountered an error while processing your request. Please try again later."
  }
}
