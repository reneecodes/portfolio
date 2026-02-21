import { z } from 'zod';

// Project types as defined in the requirements
export const PROJECT_TYPES = [
  'Website',
  'Mobile App', 
  'Branding/Banner',
  'Other'
] as const;

// Website scope options
export const WEBSITE_SCOPES = [
  'Full Website Redesign',
  'Specific Pages (e.g., Landing Page)'
] as const;

// Primary goal options
export const PRIMARY_GOALS = [
  'Increase Conversions',
  'Brand Awareness',
  'Modernize Look',
  'Launch New Product',
  'Other (please specify in \'Anything else\' field)'
] as const;

// Timeframe options
export const TIMEFRAMES = [
  'ASAP',
  '1-2 Months',
  '3-6 Months', 
  'Just exploring'
] as const;

// Base schema for Step 1: The Basics
export const step1Schema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-\'\.]+$/, 'Full name can only contain letters, spaces, hyphens, apostrophes, and periods'),
  
  emailAddress: z
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long'),
  
  projectType: z
    .enum(PROJECT_TYPES, {
      error: () => ({ message: 'Please select a project type' })
    })
});

// Schema for Step 2: The Deep Dive
export const step2Schema = z.object({
  websiteScope: z
    .enum(WEBSITE_SCOPES, {
      error: () => ({ message: 'Please select a website scope' })
    })
    .optional(),
  
  projectDescription: z
    .string()
    .min(50, 'Project description must be at least 50 characters')
    .max(2000, 'Project description must be less than 2000 characters'),
  
  brandDescription: z
    .string()
    .min(30, 'Brand description must be at least 30 characters')
    .max(2000, 'Brand description must be less than 2000 characters'),
  
  primaryGoal: z
    .enum(PRIMARY_GOALS, {
      error: () => ({ message: 'Please select a primary goal' })
    })
});

// Schema for Step 3: Logistics & Launch
export const step3Schema = z.object({
  timeframe: z
    .enum(TIMEFRAMES, {
      error: () => ({ message: 'Please select an expected timeframe' })
    }),
  
  budgetRange: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        // Allow various budget formats: "$5000", "$5,000", "$5000-10000", "5000-10000", etc.
        return /^\$?\d{1,3}(,\d{3})*(\s*-\s*\$?\d{1,3}(,\d{3})*)?$/.test(val.replace(/\s/g, ''));
      },
      'Please enter a valid budget format (e.g., "$5000" or "$5000-10000")'
    ),
  
  additionalInfo: z
    .string()
    .max(2000, 'Additional information must be less than 2000 characters')
    .optional()
});

// Complete form schema combining all steps
export const inquiryFormSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape
});

// Type for the complete form data
export type InquiryFormData = z.infer<typeof inquiryFormSchema>;

// Types for individual steps
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;