'use server';

import { z } from 'zod';
import { inquiryFormSchema } from '@/lib/schemas-inquiry';

export async function submitHomepageInquiry(data: unknown) {
  try {
    // Validate the incoming data against our comprehensive schema
    const validatedData = inquiryFormSchema.parse(data);
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // For now, we'll simulate a successful submission
    
    console.log('Homepage inquiry submitted successfully:', {
      name: validatedData.fullName,
      email: validatedData.emailAddress,
      projectType: validatedData.projectType,
      hasBudget: !!validatedData.budgetRange,
      timeframe: validatedData.timeframe
    });

    return { 
      success: true, 
      message: 'Inquiry submitted successfully!',
      data: {
        name: validatedData.fullName,
        email: validatedData.emailAddress,
        projectType: validatedData.projectType
      }
    };

  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorObject: { [key: string]: string[] } = {};
      for (const [key, value] of Object.entries(error.flatten().fieldErrors)) {
        errorObject[key] = value as string[];
      }
      
      console.error("Homepage server-side validation failed:", errorObject);
      return { 
        success: false, 
        errors: errorObject, 
        message: "Validation failed. Please check your inputs." 
      };
    }

    console.error("Homepage server-side error:", error);
    return { 
      success: false, 
      message: "An unexpected error occurred. Please try again." 
    };
  }
}