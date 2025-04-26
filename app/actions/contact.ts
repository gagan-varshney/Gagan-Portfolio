"use server"

import { neon } from "@neondatabase/serverless"
import { z } from "zod"

// Initialize the Neon SQL client
const sql = neon(process.env.DATABASE_URL!)

// Create the contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

// Create the contact messages table if it doesn't exist
export async function createContactTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    return { success: true }
  } catch (error) {
    console.error("Error creating contact table:", error)
    return { success: false, error }
  }
}

// Submit the contact form
export async function submitContactForm(formData: {
  name: string
  email: string
  message: string
}) {
  try {
    // Validate the form data
    const validatedData = contactFormSchema.parse(formData)

    // Ensure the table exists
    await createContactTable()

    // Insert the message into the database
    const result = await sql`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${validatedData.name}, ${validatedData.email}, ${validatedData.message})
      RETURNING id
    `

    return { success: true, id: result[0].id }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error }
  }
}
