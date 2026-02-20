"use server";

import { z } from 'zod';

// Define a schema for our homepage form data using Zod for validation
const homepageInquirySchema = z.object({
  name: z.string().min(1, "Your name is required!"),
  email: z.string().email("Please provide a valid email address"),
  projectStage: z.string().min(1, "Please select your project stage"),
  designNeeds: z.array(z.string()).min(1, "Select at least one design need"),
  playground: z.string().min(1, "Where will this live?"),
  northStar: z.string().min(1, "What's the biggest pain point we're solving?"),
  vibeCheck: z.string().min(1, "Choose a vibe for your project"),
  winCondition: z.string().min(1, "How do we measure success?"),
});

export async function submitHomepageInquiry(formData: FormData) {
  try {
    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectStage: formData.get('projectStage'),
      designNeeds: formData.getAll('designNeeds'), // For multi-select arrays
      playground: formData.get('playground'),
      northStar: formData.get('northStar'),
      vibeCheck: formData.get('vibeCheck'),
      winCondition: formData.get('winCondition'),
    };

    // Server-side validation
    const validatedData = homepageInquirySchema.parse(rawFormData);

    // Simulate a database save or email send
    console.log("Homepage Server Action received and validated data:", validatedData);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // Simulate a potential server error for testing
    // if (Math.random() > 0.5) {
    //   throw new Error("Simulated server error!");
    // }

    return { success: true, message: "Your vision has been submitted successfully! ✨" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors from Zod
      const errors = error.flatten().fieldErrors as Map<string, string[]>;
      console.error("Homepage server-side validation failed:", errors);
      return { success: false, errors, message: "Validation failed. Please check your inputs." };
    } else if (error instanceof Error) {
      // Handle other unexpected errors
      console.error("Homepage Server Action error:", error);
      return { success: false, message: error.message || "An unexpected error occurred." };
    } else {
      console.error("Unknown error in Homepage Server Action:", error);
      return { success: false, message: "An unknown error occurred." };
    }
  }
}