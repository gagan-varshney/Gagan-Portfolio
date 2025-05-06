"use server"

export async function askGrok(question: string): Promise<string> {
  try {
    const response = await fetch(`${process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""}/api/ai`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    })

    if (!response.ok) {
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
