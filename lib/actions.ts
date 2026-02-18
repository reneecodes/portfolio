"use server";

import { z } from 'zod';

// Define a schema for our form data using Zod for validation
const inquirySchema = z.object({
  name: z.string().min(1, "Your name is required, sweetie!"),
  projectName: z.string().min(1, "Every dream project needs a name!"),
  projectType: z.string().min(1, "Please select a project type."),
  projectTypeCustom: z.string().optional(),
  budget: z.string().min(1, "Let's talk budget, darling!"),
  timeline: z.string().min(1, "When do we start? This is important!"),
  vibe: z.string().min(1, "Don't be shy, tell me your dreams!"),
});

export async function submitInquiry(formData: FormData) {
  try {
    const rawFormData = {
      name: formData.get('name'),
      projectName: formData.get('projectName'),
      projectType: formData.get('projectType'),
      projectTypeCustom: formData.get('projectTypeCustom'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      vibe: formData.get('vibe'),
    };

    // Server-side validation
    const validatedData = inquirySchema.parse(rawFormData);

    // Simulate a database save or email send
    console.log("Server Action received and validated data:", validatedData);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

    // Simulate a potential server error for testing
    // if (Math.random() > 0.5) {
    //   throw new Error("Simulated server error!");
    // }

    return { success: true, message: "Inquiry submitted successfully!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors from Zod
      const errors = error.flatten().fieldErrors as Map<string, string[]>;
      console.error("Server-side validation failed:", errors);
      return { success: false, errors, message: "Validation failed. Please check your inputs." };
    } else if (error instanceof Error) {
      // Handle other unexpected errors
      console.error("Server Action error:", error);
      return { success: false, message: error.message || "An unexpected error occurred." };
    } else {
      console.error("Unknown error in Server Action:", error);
      return { success: false, message: "An unknown error occurred." };
    }
  }
}